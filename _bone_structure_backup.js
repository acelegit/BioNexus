

var componentData={
'Periosteum':{name:'Periosteum',full:'Membrana conjunctiva externa care inveleste osul. Stratul fibros confera protectie si insertie pentru tendoane; stratul osteogen este responsabil de cresterea in grosime si repararea fracturilor.'},
'Cortical_Bone':{name:'Cortical Bone (Compact)',full:'Tesut osos dens al diafizei. Format din osteoni — lamele concentrice de matrice osoasa in jurul canalelor Havers. Asigura rezistenta mecanica a osului.'},
'Endosteum':{name:'Endosteum',full:'Membrana conjunctiva interioara subtire care captuseste canalul medular. Contine osteoblaste si osteoclaste pentru remodelarea osoasa.'},
'Medullary_Cavity':{name:'Medullary Cavity',full:'Cavitatea centrala a diafizei. La adult adaposteste maduva galbena (tesut adipos). Pereti formati din os compact tapatat de endosteum.'},
'Yellow_Marrow':{name:'Yellow Marrow',full:'Tesut adipos din canalul medular. Stocheaza grasimi (rezerva energetica). In conditii de stres hemoragic poate redeveni maduva rosie.'},
'Spongy_Bone_Top':{name:'Spongy Bone (Top Epiphysis)',full:'Reteaua de trabecule osoase in epifiza proximala. Trabeculele sunt orientate de-a lungul liniilor de forta. Suprafata mare pentru maduva.'},
'Spongy_Bone_Bottom':{name:'Spongy Bone (Bottom Epiphysis)',full:'Reteaua de trabecule osoase in epifiza distala. Aceeasi structura ca cea proximala, optimizata pentru distributia incarcarii articulare.'},
'Red_Marrow_Top':{name:'Red Marrow (Top)',full:'Tesut hematopoietic intre trabeculele epifizei superioare. Produce eritrocite, leucocite si trombocite.'},
'Red_Marrow_Bottom':{name:'Red Marrow (Bottom)',full:'Tesut hematopoietic intre trabeculele epifizei inferioare. Acelasi rol hematopoietic.'},
'Articular_Cartilage_Top':{name:'Articular Cartilage (Top)',full:'Cartilaj hialin subtire (2-4 mm) care acopera suprafata articulara superioara. Reduce frecarea si absoarbe socurile.'},
'Articular_Cartilage_Bottom':{name:'Articular Cartilage (Bottom)',full:'Cartilaj hialin pe suprafata articulara inferioara. Frecvent supus uzurii in artroza.'},
'Epiphyseal_Line_Top':{name:'Epiphyseal Line (Top)',full:'Rest cicatricial al cartilajului de crestere proximal. La copii: zona activa de crestere. Osificare completa la 18-25 ani.'},

var structGroup=new THREE.Group();structGroup.name="Bone_Structure";structGroup.visible=false;scene.add(structGroup);
(function buildAnatomicalBone(){
  function makeTex(size,opts){
    var c=document.createElement('canvas');c.width=c.height=size;
    var ctx=c.getContext('2d');
    ctx.fillStyle=opts.base;ctx.fillRect(0,0,size,size);
    for(var i=0;i<opts.dots;i++){
      var r=opts.rMin+Math.random()*(opts.rMax-opts.rMin);
      var x=Math.random()*size,y=Math.random()*size;
      var g=ctx.createRadialGradient(x,y,0,x,y,r);
      g.addColorStop(0,opts.dot);g.addColorStop(.55,opts.dotMid||opts.dot);g.addColorStop(1,opts.base);
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fill();
    }
    if(opts.streaks){
      for(var k=0;k<opts.streaks;k++){
        ctx.strokeStyle='rgba(0,0,0,'+(0.06+Math.random()*0.1)+')';
        ctx.lineWidth=0.6+Math.random()*1.2;
        ctx.beginPath();
        var sx=Math.random()*size,sy=Math.random()*size;
        ctx.moveTo(sx,sy);
        for(var sp=0;sp<6;sp++){sx+=(Math.random()-0.5)*40;sy+=(Math.random()-0.5)*40;ctx.lineTo(sx,sy);}
        ctx.stroke();
      }
    }
    var t=new THREE.CanvasTexture(c);t.wrapS=t.wrapT=THREE.RepeatWrapping;return t;
  }
  var compactColorTex=makeTex(512,{base:'#ede0c5',dot:'#b29c78',dotMid:'#c8b48e',dots:1400,rMin:0.6,rMax:2.4,streaks:60});
  compactColorTex.repeat.set(3,1.5);
  var compactBumpTex=makeTex(512,{base:'#807058',dot:'#1a1408',dotMid:'#3a2e1c',dots:1800,rMin:0.5,rMax:2.0,streaks:40});
  compactBumpTex.repeat.set(3,1.5);
  var spongyColorTex=makeTex(512,{base:'#d8c69e',dot:'#8b7548',dotMid:'#a68a5c',dots:800,rMin:3,rMax:9});
  var spongyBumpTex=makeTex(512,{base:'#665540',dot:'#000',dotMid:'#1a1208',dots:600,rMin:4,rMax:12});
  var clipPlane=new THREE.Plane(new THREE.Vector3(-1,0,0),0);
  var clip=[clipPlane];
  var diaphR=0.078,epiR=0.155,topY=1.40,botY=0;
  var profile=[];
  profile.push(new THREE.Vector2(0.001,botY));
  profile.push(new THREE.Vector2(epiR*0.55,botY+0.012));
  profile.push(new THREE.Vector2(epiR*0.88,botY+0.040));
  profile.push(new THREE.Vector2(epiR*0.99,botY+0.085));
  profile.push(new THREE.Vector2(epiR,botY+0.135));
  profile.push(new THREE.Vector2(epiR*0.97,botY+0.180));
  profile.push(new THREE.Vector2(epiR*0.80,botY+0.235));
  profile.push(new THREE.Vector2(epiR*0.55,botY+0.290));
  profile.push(new THREE.Vector2(diaphR*1.18,botY+0.345));
  profile.push(new THREE.Vector2(diaphR*1.04,botY+0.420));
  profile.push(new THREE.Vector2(diaphR*1.00,botY+0.560));
  profile.push(new THREE.Vector2(diaphR*0.98,botY+0.700));
  profile.push(new THREE.Vector2(diaphR*1.00,botY+0.840));
  profile.push(new THREE.Vector2(diaphR*1.05,botY+0.975));
  profile.push(new THREE.Vector2(diaphR*1.20,topY-0.345));
  profile.push(new THREE.Vector2(epiR*0.58,topY-0.290));
  profile.push(new THREE.Vector2(epiR*0.82,topY-0.235));
  profile.push(new THREE.Vector2(epiR*0.97,topY-0.180));
  profile.push(new THREE.Vector2(epiR,topY-0.135));
  profile.push(new THREE.Vector2(epiR*0.99,topY-0.085));
  profile.push(new THREE.Vector2(epiR*0.88,topY-0.040));
  profile.push(new THREE.Vector2(epiR*0.55,topY-0.012));
  profile.push(new THREE.Vector2(0.001,topY));
  var _rawProfile=profile;
  var _curve=new THREE.CatmullRomCurve3(_rawProfile.map(function(p){return new THREE.Vector3(p.x,p.y,0);}),false,'catmullrom',0.5);
  profile=_curve.getPoints(140).map(function(p){return new THREE.Vector2(Math.max(0.0008,p.x),p.y);});
  function makeGroup(name){var g=new THREE.Group();g.name=name;g.userData={compId:name,isComponent:true};structGroup.add(g);return g;}
  function tagMesh(mesh,objName,compId){mesh.name=objName;mesh.userData={compId:compId,objName:objName};return mesh;}
  var periGroup=makeGroup('Periosteum');
  var periMat=new THREE.MeshStandardMaterial({color:0xb88670,roughness:0.62,metalness:0.0,transparent:true,opacity:0.88,clippingPlanes:clip,side:THREE.DoubleSide,emissive:0x1a0e08,emissiveIntensity:0.15});
  var periProfile=profile.map(function(p){return new THREE.Vector2(p.x+0.004,p.y);});
  periGroup.add(tagMesh(new THREE.Mesh(new THREE.LatheGeometry(periProfile,96),periMat),'Periosteum_Membrane','Periosteum'));
  var corticalGroup=makeGroup('Cortical_Bone');
  var corticalMat=new THREE.MeshStandardMaterial({color:0xede0c0,roughness:0.82,metalness:0.03,map:compactColorTex,bumpMap:compactBumpTex,bumpScale:0.009,clippingPlanes:clip,side:THREE.DoubleSide,emissive:0x12100a,emissiveIntensity:0.08});
  corticalGroup.add(tagMesh(new THREE.Mesh(new THREE.LatheGeometry(profile,96),corticalMat),'Cortical_Shell','Cortical_Bone'));
  var haversMat=new THREE.MeshStandardMaterial({color:0x4a3220,roughness:0.7,transparent:true,opacity:0.85,clippingPlanes:clip});
  for(var hv=0;hv<24;hv++){
    var hvY=botY+0.42+Math.random()*((topY-botY)-0.84);
    var hvA=Math.PI*0.05+Math.random()*Math.PI*0.9;
    var hvX=Math.cos(hvA)*(diaphR*0.5);
    var hvZ=Math.sin(hvA)*(diaphR*0.5);
    var hCyl=new THREE.Mesh(new THREE.CylinderGeometry(0.0008,0.0008,0.02,4),haversMat);
    hCyl.position.set(hvX,hvY,hvZ);
    corticalGroup.add(tagMesh(hCyl,'Haversian_Canal_'+(hv<9?'0':'')+(hv+1),'Cortical_Bone'));
  }
  var endoGroup=makeGroup('Endosteum');
  var endoMat=new THREE.MeshStandardMaterial({color:0xa86d4f,roughness:0.4,metalness:0.0,transparent:true,opacity:0.75,clippingPlanes:clip,side:THREE.DoubleSide});
  var thickness=0.012;
  var endoProfile=[];
  for(var pi=0;pi<profile.length;pi++){var p=profile[pi];endoProfile.push(new THREE.Vector2(Math.max(0.001,p.x-thickness),p.y));}
  endoGroup.add(tagMesh(new THREE.Mesh(new THREE.LatheGeometry(endoProfile,64),endoMat),'Endosteum_Lining','Endosteum'));
  var canalGroup=makeGroup('Medullary_Cavity');
  var canalProfile=[new THREE.Vector2(0.001,botY+0.340),new THREE.Vector2(diaphR-thickness-0.002,botY+0.360),new THREE.Vector2(diaphR-thickness-0.002,topY-0.360),new THREE.Vector2(0.001,topY-0.340)];
  var canalMat=new THREE.MeshStandardMaterial({color:0x6b4a35,roughness:0.7,metalness:0.0,side:THREE.DoubleSide,clippingPlanes:clip});
  canalGroup.add(tagMesh(new THREE.Mesh(new THREE.LatheGeometry(canalProfile,48),canalMat),'Medullary_Wall','Medullary_Cavity'));
  var yellowGroup=makeGroup('Yellow_Marrow');
  var yellowMat=new THREE.MeshStandardMaterial({color:0xf2d086,roughness:0.28,metalness:0.08,transparent:true,opacity:0.85,clippingPlanes:clip,emissive:0x3a2a0c,emissiveIntensity:0.18});
  var marrowR=diaphR-thickness-0.006;
  var marrowH=(topY-0.36)-(botY+0.36);
  var marrowMesh=new THREE.Mesh(new THREE.CylinderGeometry(marrowR,marrowR,marrowH,32,4,false),yellowMat);
  marrowMesh.position.y=(botY+0.36+topY-0.36)/2;
  yellowGroup.add(tagMesh(marrowMesh,'Yellow_Marrow_Mass','Yellow_Marrow'));
  function buildSpongy(parentGroup,compId,yC,ySp,rMax,n,seedBase){
    var trabMat=new THREE.MeshStandardMaterial({color:0xd2bc92,roughness:0.95,metalness:0.01,map:spongyColorTex,bumpMap:spongyBumpTex,bumpScale:0.018,clippingPlanes:clip,emissive:0x1a1408,emissiveIntensity:0.12});
    var pts=[];
    for(var i=0;i<n;i++){var a=Math.random()*Math.PI*2;var rad=Math.sqrt(Math.random())*rMax;var y=yC+(Math.random()-0.5)*ySp;pts.push(new THREE.Vector3(Math.cos(a)*rad,y,Math.sin(a)*rad));}
    var nodeIdx=0,strutIdx=0;
    for(var i=0;i<pts.length;i++){
      var node=new THREE.Mesh(new THREE.SphereGeometry(0.005+Math.random()*0.003,5,4),trabMat);
      node.position.copy(pts[i]);
      nodeIdx++;
      var nn='Trabecula_'+seedBase+'_Node_'+(nodeIdx<10?'00':nodeIdx<100?'0':'')+nodeIdx;
      parentGroup.add(tagMesh(node,nn,compId));
      for(var j=i+1;j<pts.length;j++){
        var d=pts[i].distanceTo(pts[j]);
        if(d<0.028 && Math.random()<0.72){
          var mid=new THREE.Vector3().addVectors(pts[i],pts[j]).multiplyScalar(0.5);
          var cyl=new THREE.Mesh(new THREE.CylinderGeometry(0.0028+Math.random()*0.0018,0.0028+Math.random()*0.0018,d,4,1),trabMat);
          cyl.position.copy(mid);
          var dir=new THREE.Vector3().subVectors(pts[j],pts[i]).normalize();
          var quat=new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),dir);
          cyl.setRotationFromQuaternion(quat);
          strutIdx++;
          var sn='Trabecula_'+seedBase+'_Strut_'+(strutIdx<10?'00':strutIdx<100?'0':'')+strutIdx;
          parentGroup.add(tagMesh(cyl,sn,compId));
        }
      }
    }
  }
  var spongyTopGroup=makeGroup('Spongy_Bone_Top');
  buildSpongy(spongyTopGroup,'Spongy_Bone_Top',topY-0.16,0.24,epiR*0.85,95,'Top');
  var spongyBotGroup=makeGroup('Spongy_Bone_Bottom');
  buildSpongy(spongyBotGroup,'Spongy_Bone_Bottom',botY+0.16,0.24,epiR*0.85,95,'Bottom');
  function buildRedMarrow(parentGroup,compId,yC,ySp,rMax,n,seedBase){
    var redMat=new THREE.MeshStandardMaterial({color:0xa83248,roughness:0.5,metalness:0.06,transparent:true,opacity:0.82,clippingPlanes:clip,emissive:0x3a0a14,emissiveIntensity:0.22});
    for(var i=0;i<n;i++){
      var a=Math.random()*Math.PI*2;
      var rad=Math.sqrt(Math.random())*rMax;
      var y=yC+(Math.random()-0.5)*ySp;
      var blob=new THREE.Mesh(new THREE.SphereGeometry(0.009+Math.random()*0.007,7,5),redMat);
      blob.position.set(Math.cos(a)*rad,y,Math.sin(a)*rad);
      blob.scale.y=0.55+Math.random()*0.3;
      var bn='Red_Marrow_Lobule_'+seedBase+'_'+(i<9?'0':'')+(i+1);
      parentGroup.add(tagMesh(blob,bn,compId));
    }
  }
  var redTopGroup=makeGroup('Red_Marrow_Top');
  buildRedMarrow(redTopGroup,'Red_Marrow_Top',topY-0.16,0.20,epiR*0.65,18,'Top');
  var redBotGroup=makeGroup('Red_Marrow_Bottom');
  buildRedMarrow(redBotGroup,'Red_Marrow_Bottom',botY+0.16,0.20,epiR*0.65,18,'Bottom');
  function buildCart(parentGroup,compId,objName,centerY,direction){
    var cartMat=new THREE.MeshStandardMaterial({color:0xe6edf0,roughness:0.18,metalness:0.04,transparent:true,opacity:0.92,clippingPlanes:clip,side:THREE.DoubleSide,emissive:0x0c1418,emissiveIntensity:0.1,envMapIntensity:0.5});
    var cp=[];
    for(var c=0;c<10;c++){var t=c/9;var ang=Math.PI*0.5*t;cp.push(new THREE.Vector2(Math.sin(ang)*epiR*1.02,centerY+direction*(1-Math.cos(ang))*0.05));}
    parentGroup.add(tagMesh(new THREE.Mesh(new THREE.LatheGeometry(cp,48),cartMat),objName,compId));
  }
  var cartTopGroup=makeGroup('Articular_Cartilage_Top');
  buildCart(cartTopGroup,'Articular_Cartilage_Top','Articular_Cartilage_Top_Cap',topY-0.135,1);
  var cartBotGroup=makeGroup('Articular_Cartilage_Bottom');
  buildCart(cartBotGroup,'Articular_Cartilage_Bottom','Articular_Cartilage_Bottom_Cap',botY+0.135,-1);
  function buildEpiLine(parentGroup,compId,objName,yPos){
    var lineMat=new THREE.MeshStandardMaterial({color:0x9a5040,roughness:0.5,transparent:true,opacity:0.55,clippingPlanes:clip,side:THREE.DoubleSide});
    var ring=new THREE.Mesh(new THREE.TorusGeometry(epiR*0.7,0.003,6,32),lineMat);
    ring.position.y=yPos;
    ring.rotation.x=Math.PI/2;
    parentGroup.add(tagMesh(ring,objName,compId));
  }
  var lineTopGroup=makeGroup('Epiphyseal_Line_Top');
  buildEpiLine(lineTopGroup,'Epiphyseal_Line_Top','Epiphyseal_Line_Top_Ring',topY-0.345);
  var lineBotGroup=makeGroup('Epiphyseal_Line_Bottom');
  buildEpiLine(lineBotGroup,'Epiphyseal_Line_Bottom','Epiphyseal_Line_Bottom_Ring',botY+0.345);

  function buildSectionShape(){
    var s=new THREE.Shape();
    s.moveTo(profile[0].x,profile[0].y);
    for(var i=1;i<profile.length;i++) s.lineTo(profile[i].x,profile[i].y);
    for(var j=profile.length-1;j>=0;j--) s.lineTo(-profile[j].x,profile[j].y);
    s.lineTo(profile[0].x,profile[0].y);
    return s;
  }
  function buildCanalHole(){
    var p=new THREE.Path();
    p.moveTo(canalProfile[0].x,canalProfile[0].y);
    for(var j=0;j<canalProfile.length;j++) p.lineTo(-canalProfile[j].x,canalProfile[j].y);
    for(var i=canalProfile.length-1;i>=0;i--) p.lineTo(canalProfile[i].x,canalProfile[i].y);
    return p;
  }

  var corticalSection=buildSectionShape();
  corticalSection.holes.push(buildCanalHole());
  var corticalCapMat=new THREE.MeshStandardMaterial({color:0xe6d8b8,roughness:0.78,metalness:0.05,map:compactColorTex,bumpMap:compactBumpTex,bumpScale:0.022,side:THREE.DoubleSide,emissive:0x15110a,emissiveIntensity:0.10,flatShading:false});
  var corticalCapGeom=new THREE.ExtrudeGeometry(corticalSection,{depth:0.008,bevelEnabled:true,bevelThickness:0.0018,bevelSize:0.0022,bevelSegments:4,steps:1,curveSegments:96});
  corticalCapGeom.translate(0,0,-0.004);
  corticalCapGeom.rotateY(Math.PI/2);
  var corticalCap=new THREE.Mesh(corticalCapGeom,corticalCapMat);
  corticalCap.position.x=0.0010;
  corticalCap.name='Cortical_Cross_Section';
  corticalCap.userData={compId:'Cortical_Bone',objName:'Cortical_Cross_Section'};
  corticalGroup.add(corticalCap);

  var canalCapShape=new THREE.Shape();
  canalCapShape.moveTo(canalProfile[0].x,canalProfile[0].y);
  for(var ci=1;ci<canalProfile.length;ci++) canalCapShape.lineTo(canalProfile[ci].x,canalProfile[ci].y);
  for(var cj=canalProfile.length-1;cj>=0;cj--) canalCapShape.lineTo(-canalProfile[cj].x,canalProfile[cj].y);
  canalCapShape.lineTo(canalProfile[0].x,canalProfile[0].y);
  var canalCapBumpTex=makeTex(256,{base:'#604a14',dot:'#000',dotMid:'#1a1408',dots:280,rMin:1.2,rMax:3.5});
  canalCapBumpTex.repeat.set(2,4);
  var canalCapMat=new THREE.MeshStandardMaterial({color:0xf4d488,roughness:0.35,metalness:0.06,side:THREE.DoubleSide,emissive:0x402a0c,emissiveIntensity:0.20,bumpMap:canalCapBumpTex,bumpScale:0.012});
  var canalCapGeom=new THREE.ExtrudeGeometry(canalCapShape,{depth:0.006,bevelEnabled:true,bevelThickness:0.001,bevelSize:0.0015,bevelSegments:3,steps:1,curveSegments:48});
  canalCapGeom.translate(0,0,-0.003);
  canalCapGeom.rotateY(Math.PI/2);
  var canalCap=new THREE.Mesh(canalCapGeom,canalCapMat);
  canalCap.position.x=0.0005;
  canalCap.name='Yellow_Marrow_Cross_Section';
  canalCap.userData={compId:'Yellow_Marrow',objName:'Yellow_Marrow_Cross_Section'};
  yellowGroup.add(canalCap);

  var spongyCapTex=makeTex(256,{base:'#bca77a',dot:'#5a4828',dotMid:'#7a6238',dots:420,rMin:1.5,rMax:5.5});
  spongyCapTex.repeat.set(3,2);
  var spongyCapBumpTex=makeTex(512,{base:'#5a4828',dot:'#000',dotMid:'#1a0e08',dots:550,rMin:3,rMax:10});
  spongyCapBumpTex.repeat.set(3,2);
  var spongyCapMat=new THREE.MeshStandardMaterial({color:0xc9b48c,roughness:0.92,metalness:0.02,map:spongyCapTex,bumpMap:spongyCapBumpTex,bumpScale:0.045,side:THREE.DoubleSide,emissive:0x14100a,emissiveIntensity:0.10,flatShading:false});
  function buildSpongyCap(parentGroup,compId,yMin,yMax){
    var s=new THREE.Shape();
    var topProfile=[];
    for(var i=0;i<profile.length;i++){if(profile[i].y>=yMin && profile[i].y<=yMax) topProfile.push(profile[i]);}
    if(topProfile.length<2) return;
    s.moveTo(0,topProfile[0].y);
    for(var k=0;k<topProfile.length;k++) s.lineTo(topProfile[k].x*0.96,topProfile[k].y);
    s.lineTo(0,topProfile[topProfile.length-1].y);
    for(var m=topProfile.length-1;m>=0;m--) s.lineTo(-topProfile[m].x*0.96,topProfile[m].y);
    s.lineTo(0,topProfile[0].y);
    var g=new THREE.ExtrudeGeometry(s,{depth:0.012,bevelEnabled:true,bevelThickness:0.002,bevelSize:0.0028,bevelSegments:4,steps:1,curveSegments:64});
    g.translate(0,0,-0.006);
    g.rotateY(Math.PI/2);
    var cap=new THREE.Mesh(g,spongyCapMat);
    cap.position.x=0.0016;
    cap.name=compId+'_Cross_Section';
    cap.userData={compId:compId,objName:cap.name};
    parentGroup.add(cap);
  }
  buildSpongyCap(spongyTopGroup,'Spongy_Bone_Top',topY-0.34,topY);
  buildSpongyCap(spongyBotGroup,'Spongy_Bone_Bottom',botY,botY+0.34);

  structGroup.position.y=-0.20;
})();
