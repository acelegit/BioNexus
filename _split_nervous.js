// Final nervous rebuild:
//  - CLEAN nerve/spinal/olfactory/membrane meshes come from the ORIGINAL nervous.glb
//    (dense, smooth tubes; max edge 0.069) — NOT the master (whose nerve mesh is sparse
//    and shard-ridden).
//  - REAL brain meshes (cerebrum/cerebellum/brainstem) come from the CURRENT nervous.glb.
//  Both share the same world coordinates, so they combine perfectly.
//  Nerves are segmented into 5 anatomical regions, the cord into 4.
const fs = require("fs");
const ORIG = "models/_orig_nervous.glb"; // clean nerves + spinal (+ smooth shell we drop)
const CUR = "models/nervous.glb"; // has the real brain meshes
const OUT = "models/_nervous_final.glb";
const MAX_EDGE = 0.15; // safety; original is clean so nothing legit is dropped

function loadCtx(path) {
  const b = fs.readFileSync(path);
  const jl = b.readUInt32LE(12);
  const J = JSON.parse(b.slice(20, 20 + jl).toString("utf8"));
  const BIN = b.slice(20 + jl + 8);
  const NODES = J.nodes;
  const parent = new Array(NODES.length).fill(-1);
  NODES.forEach((n, i) => (n.children || []).forEach((c) => (parent[c] = i)));
  function mat(n) {
    if (n.matrix) return n.matrix.slice();
    const t = n.translation || [0, 0, 0], r = n.rotation || [0, 0, 0, 1], s = n.scale || [1, 1, 1];
    const [x, y, z, w] = r; const x2 = x+x, y2 = y+y, z2 = z+z;
    const xx = x*x2, xy = x*y2, xz = x*z2, yy = y*y2, yz = y*z2, zz = z*z2, wx = w*x2, wy = w*y2, wz = w*z2;
    const [sx, sy, sz] = s;
    return [(1-(yy+zz))*sx,(xy+wz)*sx,(xz-wy)*sx,0,(xy-wz)*sy,(1-(xx+zz))*sy,(yz+wx)*sy,0,(xz+wy)*sz,(yz-wx)*sz,(1-(xx+yy))*sz,0,t[0],t[1],t[2],1];
  }
  function mul(a, b) { const o = new Array(16); for (let r=0;r<4;r++) for (let c=0;c<4;c++){let s=0;for(let k=0;k<4;k++)s+=a[k*4+c]*b[r*4+k];o[r*4+c]=s;} return o; }
  function world(i) { let m = mat(NODES[i]); let p = parent[i]; while (p !== -1) { m = mul(mat(NODES[p]), m); p = parent[p]; } return m; }
  const meshNode = {};
  NODES.forEach((n, i) => { if (n.mesh != null && meshNode[n.mesh] == null) meshNode[n.mesh] = i; });
  return { J, BIN, world, meshNode };
}
function ptM(m, v) { return [m[0]*v[0]+m[4]*v[1]+m[8]*v[2]+m[12], m[1]*v[0]+m[5]*v[1]+m[9]*v[2]+m[13], m[2]*v[0]+m[6]*v[1]+m[10]*v[2]+m[14]]; }
function nrM(m, v) { const x=m[0]*v[0]+m[4]*v[1]+m[8]*v[2], y=m[1]*v[0]+m[5]*v[1]+m[9]*v[2], z=m[2]*v[0]+m[6]*v[1]+m[10]*v[2]; const l=Math.hypot(x,y,z)||1; return [x/l,y/l,z/l]; }

function reader(ctx, accIdx, comps, defStride) {
  const a = ctx.J.accessors[accIdx]; const bv = ctx.J.bufferViews[a.bufferView];
  const base = (bv.byteOffset || 0) + (a.byteOffset || 0); const st = bv.byteStride || defStride;
  return { count: a.count, get: (i) => { const o = base + i * st; const out = []; for (let c = 0; c < comps; c++) out.push(ctx.BIN.readFloatLE(o + c * 4)); return out; } };
}
function idxReader(ctx, accIdx) {
  const a = ctx.J.accessors[accIdx]; const bv = ctx.J.bufferViews[a.bufferView];
  const base = (bv.byteOffset || 0) + (a.byteOffset || 0); const ct = a.componentType;
  const sz = ct === 5125 ? 4 : ct === 5123 ? 2 : 1;
  const rd = ct === 5125 ? (o) => ctx.BIN.readUInt32LE(o) : ct === 5123 ? (o) => ctx.BIN.readUInt16LE(o) : (o) => ctx.BIN.readUInt8(o);
  return { count: a.count, get: (i) => rd(base + i * sz) };
}

function nerveRegion(x, y, z) {
  const ax = Math.abs(x);
  if (y >= 1.52) return "Cranial nerves";
  if (ax >= 0.2 && y >= 0.68) return "Brachial plexus";
  if (ax >= 0.13 && y >= 0.95) return "Brachial plexus";
  if (y >= 1.38) return "Cervical nerves";
  if (y >= 1.0) return "Thoracic nerves";
  return "Lumbosacral plexus";
}
function spinalRegion(x, y, z) {
  if (y >= 1.44) return "Cervical cord";
  if (y >= 1.18) return "Thoracic cord";
  if (y >= 1.11) return "Lumbar cord";
  return "Sacral cord";
}

const OUTM = new Map();
function outMesh(name, wantUV) { if (!OUTM.has(name)) OUTM.set(name, { pos: [], nrm: [], uv: wantUV ? [] : null, idx: [] }); return OUTM.get(name); }

function processMesh(ctx, mi, opts) {
  const prim = ctx.J.meshes[mi].primitives[0];
  const w = ctx.world(ctx.meshNode[mi]);
  const P = reader(ctx, prim.attributes.POSITION, 3, 12);
  const Nr = prim.attributes.NORMAL != null ? reader(ctx, prim.attributes.NORMAL, 3, 12) : null;
  const UV = prim.attributes.TEXCOORD_0 != null ? reader(ctx, prim.attributes.TEXCOORD_0, 2, 8) : null;
  const I = idxReader(ctx, prim.indices);
  const WP = new Array(P.count), WN = Nr ? new Array(P.count) : null;
  for (let i = 0; i < P.count; i++) { WP[i] = ptM(w, P.get(i)); if (Nr) WN[i] = nrM(w, Nr.get(i)); }
  const classify = opts.classify, wantUV = !!opts.wantUV;
  const localMaps = new Map();
  for (let t = 0; t + 3 <= I.count; t += 3) {
    const a = I.get(t), bb = I.get(t + 1), cc = I.get(t + 2);
    const va = WP[a], vb = WP[bb], vc = WP[cc];
    if (Math.hypot(va[0]-vb[0],va[1]-vb[1],va[2]-vb[2]) > MAX_EDGE || Math.hypot(vb[0]-vc[0],vb[1]-vc[1],vb[2]-vc[2]) > MAX_EDGE || Math.hypot(vc[0]-va[0],vc[1]-va[1],vc[2]-va[2]) > MAX_EDGE) continue;
    let name;
    if (classify) { name = classify((va[0]+vb[0]+vc[0])/3, (va[1]+vb[1]+vc[1])/3, (va[2]+vb[2]+vc[2])/3) + opts.suffix; }
    else name = opts.name;
    const M = outMesh(name, wantUV);
    let lm = localMaps.get(name); if (!lm) { lm = new Map(); localMaps.set(name, lm); }
    for (const oi of [a, bb, cc]) {
      let ni = lm.get(oi);
      if (ni === undefined) {
        ni = M.pos.length / 3; lm.set(oi, ni);
        M.pos.push(WP[oi][0], WP[oi][1], WP[oi][2]);
        const n = WN ? WN[oi] : [0, 1, 0]; M.nrm.push(n[0], n[1], n[2]);
        if (wantUV) { const uv = UV ? UV.get(oi) : [0, 0]; M.uv.push(uv[0], uv[1]); }
      }
      M.idx.push(ni);
    }
  }
}

const cur = loadCtx(CUR);
const orig = loadCtx(ORIG);
// Real brain from CURRENT model
cur.J.meshes.forEach((m, mi) => { if (/_Brain_mtl_/i.test(m.name || "")) processMesh(cur, mi, { name: m.name, wantUV: true }); });
// Clean nerves/spinal/olfactory/membrane from ORIGINAL model (drop smooth Brain membrane)
orig.J.meshes.forEach((m, mi) => {
  const nm = m.name || "";
  if (/Brain membrane/i.test(nm)) return;
  else if (/_Nervous_Membrane_mtl_/i.test(nm)) processMesh(orig, mi, { name: nm, wantUV: true });
  else if (/^olfactory/i.test(nm)) processMesh(orig, mi, { name: nm, wantUV: false });
  else if (/^Nervous /i.test(nm)) processMesh(orig, mi, { classify: nerveRegion, suffix: "_Nervous_mtl_0", wantUV: false });
  else if (/Spinal cords_(Maters|Spinal_Cord)/i.test(nm)) processMesh(orig, mi, { classify: spinalRegion, suffix: "_Spinal_Cord_material_0", wantUV: false });
});

// ---- assemble GLB ----
const bufChunks = []; let bufLen = 0;
function addView(arr, ctor) { const ta = new ctor(arr); const bytes = Buffer.from(ta.buffer, ta.byteOffset, ta.byteLength); const pad = (4 - (bufLen % 4)) % 4; if (pad) { bufChunks.push(Buffer.alloc(pad)); bufLen += pad; } const off = bufLen; bufChunks.push(bytes); bufLen += bytes.length; return { off, len: bytes.length }; }
const accessors = [], bufferViews = [], meshes = [], nodes = [], sceneNodes = [];
function pushView(off, len, target) { bufferViews.push({ buffer: 0, byteOffset: off, byteLength: len, ...(target ? { target } : {}) }); return bufferViews.length - 1; }
function fmin(arr, c) { const m = new Array(c).fill(Infinity); for (let i = 0; i < arr.length; i += c) for (let k = 0; k < c; k++) m[k] = Math.min(m[k], arr[i + k]); return m; }
function fmax(arr, c) { const m = new Array(c).fill(-Infinity); for (let i = 0; i < arr.length; i += c) for (let k = 0; k < c; k++) m[k] = Math.max(m[k], arr[i + k]); return m; }
for (const [name, M] of OUTM) {
  const attrs = {};
  let v = addView(M.pos, Float32Array); let bvi = pushView(v.off, v.len, 34962);
  accessors.push({ bufferView: bvi, componentType: 5126, count: M.pos.length / 3, type: "VEC3", min: fmin(M.pos, 3), max: fmax(M.pos, 3) });
  attrs.POSITION = accessors.length - 1;
  v = addView(M.nrm, Float32Array); bvi = pushView(v.off, v.len, 34962);
  accessors.push({ bufferView: bvi, componentType: 5126, count: M.nrm.length / 3, type: "VEC3" });
  attrs.NORMAL = accessors.length - 1;
  if (M.uv) { v = addView(M.uv, Float32Array); bvi = pushView(v.off, v.len, 34962); accessors.push({ bufferView: bvi, componentType: 5126, count: M.uv.length / 2, type: "VEC2" }); attrs.TEXCOORD_0 = accessors.length - 1; }
  v = addView(M.idx, Uint32Array); bvi = pushView(v.off, v.len, 34963);
  accessors.push({ bufferView: bvi, componentType: 5125, count: M.idx.length, type: "SCALAR" });
  meshes.push({ name, primitives: [{ attributes: attrs, indices: accessors.length - 1, material: 0 }] });
  nodes.push({ name, mesh: meshes.length - 1 }); sceneNodes.push(nodes.length - 1);
}
const gltf = { asset: { version: "2.0", generator: "BioNexus nerve/cord segmenter v2" }, scene: 0, scenes: [{ nodes: sceneNodes }], nodes, meshes, accessors, bufferViews, materials: [{ name: "default", doubleSided: true, pbrMetallicRoughness: { baseColorFactor: [0.8, 0.8, 0.8, 1] } }], buffers: [{ byteLength: bufLen }] };
const binBuf = Buffer.concat(bufChunks);
let jsonBuf = Buffer.from(JSON.stringify(gltf), "utf8"); const jpad = (4 - (jsonBuf.length % 4)) % 4; if (jpad) jsonBuf = Buffer.concat([jsonBuf, Buffer.alloc(jpad, 0x20)]);
const binPad = (4 - (binBuf.length % 4)) % 4; const binOut = binPad ? Buffer.concat([binBuf, Buffer.alloc(binPad)]) : binBuf;
const total = 12 + 8 + jsonBuf.length + 8 + binOut.length;
const header = Buffer.alloc(12); header.writeUInt32LE(0x46546c67, 0); header.writeUInt32LE(2, 4); header.writeUInt32LE(total, 8);
const jsonHdr = Buffer.alloc(8); jsonHdr.writeUInt32LE(jsonBuf.length, 0); jsonHdr.writeUInt32LE(0x4e4f534a, 4);
const binHdr = Buffer.alloc(8); binHdr.writeUInt32LE(binOut.length, 0); binHdr.writeUInt32LE(0x004e4942, 4);
fs.writeFileSync(OUT, Buffer.concat([header, jsonHdr, jsonBuf, binHdr, binOut]));
console.log("wrote", OUT, (total / 1e6).toFixed(2), "MB,", meshes.length, "meshes");
for (const [name, M] of OUTM) console.log("  " + name.padEnd(44) + " verts=" + (M.pos.length / 3) + " tris=" + (M.idx.length / 3));
