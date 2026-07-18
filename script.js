var boneData = {
  frontal: {
    name: "Osul Frontal",
    category: "Neurocraniul",
    type: "Os nepereche",
    description:
      "Formeaza fruntea si partea superioara a orbitelor. Contine sinusul frontal. Protejeaza lobii frontali ai creierului.",
    articulations:
      "Oasele parietale, sfenoidul, etmoidul, nazalele, zigomaticele, maxilarele, lacrimalele",
    details:
      "Are doua parti: squama frontala (verticala) si partea orbitala (orizontala). La nou-nascut, cele doua jumatati sunt separate de sutura metopica.",
  },
  parietal: {
    name: "Oasele Parietale",
    category: "Neurocraniul",
    type: "Oase pereche (2)",
    description:
      "Formeaza bolta craniana (calota). Sunt oase plate, patrulatere, situate lateral si superior.",
    articulations: "Frontalul, occipitalul, temporalele, sfenoidul, parietalul opus",
    details:
      "Se articuleaza intre ele prin sutura sagitala, cu frontalul prin sutura coronala, cu occipitalul prin sutura lambdoida.",
  },
  temporal: {
    name: "Oasele Temporale",
    category: "Neurocraniul",
    type: "Oase pereche (2)",
    description:
      "Situate lateral, formeaza partea inferioara a calotei. Delimiteaza fosa temporala. Contin organul vestibulo-cohlear.",
    articulations: "Parietalele, occipitalul, sfenoidul, zigomaticele, mandibula (ATM)",
    details:
      "Contin: squama temporala (fosa temporala), stanca (piramida pietroasa) cu cohleea si canalele semicirculare, procesul mastoid, procesul stiloid.",
  },
  occipital: {
    name: "Osul Occipital",
    category: "Neurocraniul",
    type: "Os nepereche",
    description: "Formeaza partea posterioara si inferioara a craniului. Prezinta foramen magnum.",
    articulations: "Parietalele, temporalele, sfenoidul, atlasul (C1)",
    details:
      "Condilii occipitali se articuleaza cu atlasul. Protejeaza cerebelul si trunchiul cerebral.",
  },
  sfenoid: {
    name: "Osul Sfenoid",
    category: "Neurocraniul",
    type: "Os nepereche",
    description:
      "Os central al bazei craniului, in forma de fluture. Contine saua turceasca (sella turcica) cu hipofiza. Delimiteaza fosa pterigoidiana.",
    articulations: "Se articuleaza cu toate oasele craniului",
    details:
      "Are: corpul cu sinusul sfenoidal, aripile mari, aripile mici si procesele pterigoide.",
  },
  etmoid: {
    name: "Osul Etmoid",
    category: "Neurocraniul",
    type: "Os nepereche",
    description: "Os delicat situat intre orbite, formeaza partea superioara a cavitatii nazale.",
    articulations: "Frontalul, sfenoidul, nazalele, maxilarele, lacrimalele, vomerul, palatinele",
    details: "Componente: lama ciuruita (cribliforma), lama perpendiculara, labirintul etmoidal.",
  },
  maxilar: {
    name: "Osul Maxilar",
    category: "Viscerocraniul",
    type: "Oase pereche (2)",
    description:
      "Formeaza maxilarul superior, podeaua orbitelor (orbita), palatul dur si marginea cavitatii nazale. Prezinta gaura infraorbitara.",
    articulations: "Frontalul, etmoidul, nazalele, zigomaticele, lacrimale, palatinele, vomerul",
    details:
      "Contin alveolele dentare pentru dintii superiori. Procesul palatin formeaza 3/4 din palatul dur.",
  },
  mandibula: {
    name: "Mandibula",
    category: "Viscerocraniul",
    type: "Os nepereche",
    description:
      "Singurul os mobil al craniului. Formeaza maxilarul inferior. Prezinta protuberanta mentala (barbia).",
    articulations: "Oasele temporale (articulatia temporo-mandibulara - ATM)",
    details:
      "Componente: corpul mandibulei, ramurile, procesul coronoid, procesul condilian, unghiul mandibulei, protuberanta mentala.",
  },
  zigomatic: {
    name: "Oasele Zigomatice",
    category: "Viscerocraniul",
    type: "Oase pereche (2)",
    description: "Formeaza pomenii obrajilor si partea laterala a orbitei.",
    articulations: "Frontalul, sfenoidul, temporalele, maxilarele",
    details: "Procesul temporal al zigomaticului formeaza arcul zigomatic.",
  },
  nazal: {
    name: "Oasele Nazale",
    category: "Viscerocraniul",
    type: "Oase pereche (2)",
    description: "Oase mici care formeaza puntea nasului.",
    articulations: "Frontalul, etmoidul, maxilarele, osul nazal opus",
    details: "Partea inferioara a nasului este formata din cartilaj.",
  },
  lacrimal: {
    name: "Oasele Lacrimale",
    category: "Viscerocraniul",
    type: "Oase pereche (2)",
    description: "Cele mai mici oase ale fetei. Formeaza partea mediala a orbitei.",
    articulations: "Frontalul, etmoidul, maxilarele",
    details: "Prin santul lacrimal trece canalul nazo-lacrimal.",
  },
  palatin: {
    name: "Oasele Palatine",
    category: "Viscerocraniul",
    type: "Oase pereche (2)",
    description: "Formeaza partea posterioara a palatului dur.",
    articulations: "Maxilarele, sfenoidul, etmoidul, vomerul, cornetele inferioare",
    details: "Au forma de L, cu lama orizontala si lama perpendiculara.",
  },
  vomer: {
    name: "Vomer",
    category: "Viscerocraniul",
    type: "Os nepereche",
    description: "Os subtire care formeaza septul nazal posterior.",
    articulations: "Sfenoidul, etmoidul, maxilarele, palatinele",
    details: "Impreuna cu lama perpendiculara a etmoidului formeaza septul nazal.",
  },
  cornet: {
    name: "Cornetele Nazale Inferioare",
    category: "Viscerocraniul",
    type: "Oase pereche (2)",
    description: "Cele mai mari cornete nazale. Incalzesc si umidifica aerul inspirat.",
    articulations: "Maxilarele, palatinele, etmoidul, lacrimalele",
    details: "Doar cornetul inferior este os independent; cele superioare fac parte din etmoid.",
  },
  cervicale: {
    name: "Vertebrele Cervicale",
    category: "Coloana Vertebrala",
    type: "7 vertebre (C1-C7)",
    description:
      "Cele mai mici vertebre. Atlas (C1) sustine craniul, Axis (C2) permite rotatia capului.",
    articulations: "Craniul (C1-occipital), intre ele, vertebrele toracice (C7-T1)",
    details:
      "Atlasul nu are corp vertebral. Axisul are procesul odontoid. Toate au foramen transversar.",
  },
  toracice: {
    name: "Vertebrele Toracice",
    category: "Coloana Vertebrala",
    type: "12 vertebre (T1-T12)",
    description: "Se articuleaza cu coastele. Formeaza cifoza toracica.",
    articulations:
      "Vertebrele cervicale (T1), intre ele, vertebrele lombare (T12), cele 12 perechi de coaste",
    details: "Prezinta fatete costale pe corp si pe procesele transverse.",
  },
  lombare: {
    name: "Vertebrele Lombare",
    category: "Coloana Vertebrala",
    type: "5 vertebre (L1-L5)",
    description: "Cele mai mari si robuste vertebre. Suporta cea mai mare greutate.",
    articulations: "Vertebrele toracice (L1-T12), intre ele, sacrum (L5-S1)",
    details: "Au corpuri vertebrale masive. Zona lombara e frecvent afectata de hernia de disc.",
  },
  sacrum: {
    name: "Sacrum",
    category: "Coloana Vertebrala",
    type: "5 vertebre sudate",
    description: "Os triunghiular format din 5 vertebre sudate la adult.",
    articulations: "L5, coccisul, oasele coxale",
    details: "Prezinta foramenele sacrale. Sudarea se completeaza la 25-30 de ani.",
  },
  coccis: {
    name: "Coccis",
    category: "Coloana Vertebrala",
    type: "4-5 vertebre sudate",
    description: "Os rudimentar. Ultimul segment al coloanei vertebrale.",
    articulations: "Sacrum",
    details: "Ofera punct de insertie pentru muschii perineului.",
  },
  stern: {
    name: "Sternul",
    category: "Cutia Toracica",
    type: "Os nepereche",
    description:
      "Os plat, central, pe peretele anterior al toracelui. Format din: manubriul, corpul sternului si procesul xifoidian.",
    articulations: "Claviculele, primele 7 perechi de coaste",
    details: "Trei componente: manubriul, corpul sternal, procesul xifoid.",
  },
  "coaste-adevarate": {
    name: "Coastele Adevarate (1-7)",
    category: "Cutia Toracica",
    type: "7 perechi",
    description:
      "Se articuleaza posterior cu vertebrele toracice si anterior, prin cartilajul costal, direct cu sternul. Intre coaste: spatii intercostale.",
    articulations: "Vertebrele toracice T1-T7, sternul",
    details: "Prima coasta este cea mai scurta si mai curbata.",
  },
  "coaste-false": {
    name: "Coastele False (8-10)",
    category: "Cutia Toracica",
    type: "3 perechi",
    description: "Se articuleaza posterior cu vertebrele toracice, anterior indirect cu sternul.",
    articulations: "Vertebrele toracice T8-T10, cartilajul coastei 7",
    details: "Cartilajele lor se unesc la cartilajul coastei a 7-a.",
  },
  "coaste-fluctuante": {
    name: "Coastele Fluctuante (11-12)",
    category: "Cutia Toracica",
    type: "2 perechi",
    description:
      "Se articuleaza doar posterior cu vertebrele toracice. Extremitatile anterioare sunt libere.",
    articulations: "Vertebrele toracice T11-T12",
    details: "Sunt cele mai scurte coaste. Protejeaza rinichii.",
  },
  clavicula: {
    name: "Clavicula",
    category: "Centura Scapulara",
    type: "Os pereche",
    description:
      "Os lung, in forma de S, care leaga membrul superior de trunchi. Se articuleaza medial cu sternul (scobitura claviculara) si lateral cu acromionul.",
    articulations: "Sternul, omoplatul",
    details:
      "Primul os care incepe osificarea (saptamana 5) si ultimul care o finalizeaza (25 ani).",
  },
  omoplat: {
    name: "Scapula (omoplatul)",
    category: "Centura Scapulara",
    type: "Os pereche",
    description:
      "Os plat, triunghiular, pe fata posterioara a toracelui. Prezinta acromionul si cavitatea glenoida.",
    articulations: "Clavicula, humerusul",
    details: "Repere: spina scapulei, acromionul, procesul coracoid, cavitatea glenoida.",
  },
  humerus: {
    name: "Humerusul",
    category: "Scheletul Bratului",
    type: "Os lung",
    description: "Osul bratului. Cel mai lung os al membrului superior.",
    articulations: "Omoplatul (umar), radiusul si ulna (cot)",
    details: "Epifiza proximala: capul humeral. Epifiza distala: trohleea, capitulul, epicondilii.",
  },
  radius: {
    name: "Radiusul",
    category: "Scheletul Antebratului",
    type: "Os lung, lateral",
    description: "Osul lateral al antebratului, de partea policeului.",
    articulations: "Humerusul, ulna, oasele carpiene",
    details: "Proximal: capul radial. Se roteste in jurul ulnei la pronatie/supinatie.",
  },
  ulna: {
    name: "Ulna",
    category: "Scheletul Antebratului",
    type: "Os lung, medial",
    description: "Osul medial al antebratului. Formeaza principala articulatie la cot.",
    articulations: "Humerusul, radiusul",
    details: "Proximal: olecranul (varful cotului). Distal: procesul stiloid ulnar.",
  },
  carpiene: {
    name: "Oasele Carpiene",
    category: "Scheletul Mainii",
    type: "8 oase scurte",
    description: "Formeaza scheletul pumnului. Doua randuri a cate 4 oase.",
    articulations: "Radiusul, metacarpienele",
    details:
      "Proximal: scafoidul, lunatul, piramidal, pisiformul. Distal: trapezul, trapezoidul, capitatul, hamatul.",
  },
  metacarpiene: {
    name: "Oasele Metacarpiene",
    category: "Scheletul Mainii",
    type: "5 oase lungi",
    description: "Formeaza scheletul palmei. Numerotate I-V.",
    articulations: "Oasele carpiene, falangele proximale",
    details: "Fiecare metacarpian are: baza, corp, cap.",
  },
  falange: {
    name: "Falangele",
    category: "Scheletul Mainii",
    type: "14 oase",
    description: "Scheletul degetelor. Policele: 2 falange, celelalte: cate 3.",
    articulations: "Metacarpienele, intre ele",
    details: "Police: 2 falange. Degetele II-V: 3 fiecare. Total: 14.",
  },
  "os-coxal": {
    name: "Osul Coxal (Pelvis)",
    category: "Centura Pelviana",
    type: "Os pereche",
    description:
      "Format din fuziunea ilionului, ischionului si pubisului. Formeaza centura pelviana.",
    articulations: "Sacrum, femurul",
    details: "Se articuleaza cu sacrul posterior si cu femurul lateral (articulatia soldului).",
  },
  femur: {
    name: "Femurul",
    category: "Scheletul Coapsei",
    type: "Os lung",
    description: "Cel mai lung si robust os din corp. Osul coapsei.",
    articulations: "Osul coxal (sold), tibia si patela (genunchi)",
    details:
      "Capul femural se articuleaza cu acetabulul. Distal: condilii femurali pentru genunchi.",
  },
  patela: {
    name: "Rotula (patela)",
    category: "Scheletul Genunchiului",
    type: "Os sesamoid, pereche (2)",
    description: "Cel mai mare os sesamoid. Protejeaza articulatia genunchiului.",
    articulations: "Femurul",
    details: "Inclusa in tendonul muschiului cvadriceps femural.",
  },
  tibia: {
    name: "Tibia",
    category: "Scheletul Gambei",
    type: "Os lung, medial",
    description: "Osul principal al gambei. Suporta greutatea corpului.",
    articulations: "Femurul (genunchi), fibula, talusul (glezna)",
    details: "Proximal: platoul tibial. Distal: maleola mediala.",
  },
  fibula: {
    name: "Fibula",
    category: "Scheletul Gambei",
    type: "Os lung, lateral",
    description: "Osul lateral al gambei. Nu suporta greutate direct.",
    articulations: "Tibia (prox. si distal)",
    details: "Distal: maleola laterala. Rol in stabilizarea gleznei.",
  },
  tarsiene: {
    name: "Oasele Tarsiene",
    category: "Scheletul Piciorului",
    type: "7 oase scurte",
    description: "Formeaza scheletul gleznei si partii posterioare a piciorului.",
    articulations: "Tibia, fibula, metatarsienele",
    details:
      "Include: talusul, calcaneul (cel mai mare), navicularul, cuboidul, cele 3 cuneiforme.",
  },
  metatarsiene: {
    name: "Oasele Metatarsiene",
    category: "Scheletul Piciorului",
    type: "5 oase lungi",
    description: "Formeaza scheletul partii mijlocii a piciorului.",
    articulations: "Oasele tarsiene, falangele piciorului",
    details: "Numerotate I-V din medial spre lateral.",
  },
  "falange-picior": {
    name: "Falangele Piciorului",
    category: "Scheletul Piciorului",
    type: "14 oase",
    description: "Scheletul degetelor de la picioare.",
    articulations: "Metatarsienele, intre ele",
    details: "Halucele: 2 falange. Degetele II-V: 3 fiecare. Total: 14.",
  },
  dinti: {
    name: "Dintii",
    category: "Viscerocraniul",
    type: "32 dinti (adult)",
    description: "Structuri dure implantate in alveolele maxilarelor si mandibulei.",
    articulations: "Maxilarul, mandibula (alveole dentare)",
    details:
      "Incisivi (8), canini (4), premolari (8), molari (12 cu masele de minte). Rol in masticatie.",
  },
  canin_inf: {
    name: "Canin inferior",
    category: "Dintii inferiori",
    type: "Dinte permanent, pereche",
    description: "Dintele colt inferior. Rol in ruperea alimentelor. Are o singura radacina lunga.",
    articulations: "Alveola mandibulei",
    details:
      "Coroana conica cu un singur varf (cuspid). Radacina cea mai lunga dintre dintii anteriori. Eruptie: 9-10 ani.",
  },
  canin_sup: {
    name: "Canin superior",
    category: "Dintii superiori",
    type: "Dinte permanent, pereche",
    description: "Dintele colt superior. Cel mai lung dinte din cavitatea bucala.",
    articulations: "Alveola maxilarului",
    details:
      "Coroana conica cu varf ascutit. Radacina foarte lunga si robusta. Eruptie: 11-12 ani.",
  },
  molar1_inf: {
    name: "Primul molar inferior",
    category: "Dintii inferiori",
    type: "Dinte permanent, pereche",
    description:
      "Primul molar de pe arcada inferioara. Cel mai mare dinte inferior. Rol principal in masticatie.",
    articulations: "Alveola mandibulei",
    details:
      "Coroana cu 5 cuspizi. Are 2 radacini (meziala si distala). Eruptie: 6 ani (primul dinte permanent).",
  },
  molar1_sup: {
    name: "Primul molar superior",
    category: "Dintii superiori",
    type: "Dinte permanent, pereche",
    description: "Primul molar de pe arcada superioara. Cel mai mare dinte superior.",
    articulations: "Alveola maxilarului",
    details: "Coroana cu 4 cuspizi. Are 3 radacini (2 vestibulare, 1 palatinala). Eruptie: 6 ani.",
  },
  molar2_inf: {
    name: "Al doilea molar inferior",
    category: "Dintii inferiori",
    type: "Dinte permanent, pereche",
    description: "Al doilea molar pe arcada inferioara.",
    articulations: "Alveola mandibulei",
    details:
      "Similar primului molar dar putin mai mic. 4-5 cuspizi, 2 radacini. Eruptie: 11-13 ani.",
  },
  molar2_sup: {
    name: "Al doilea molar superior",
    category: "Dintii superiori",
    type: "Dinte permanent, pereche",
    description: "Al doilea molar pe arcada superioara.",
    articulations: "Alveola maxilarului",
    details: "Similar primului molar dar mai mic. 4 cuspizi, 3 radacini. Eruptie: 12-13 ani.",
  },
  premolar1_inf: {
    name: "Primul premolar inferior",
    category: "Dintii inferiori",
    type: "Dinte permanent, pereche",
    description: "Primul premolar pe arcada inferioara. Situat intre canin si molari.",
    articulations: "Alveola mandibulei",
    details:
      "Coroana cu 2 cuspizi (vestibular si lingual). O singura radacina. Eruptie: 10-12 ani.",
  },
  premolar1_sup: {
    name: "Primul premolar superior",
    category: "Dintii superiori",
    type: "Dinte permanent, pereche",
    description: "Primul premolar pe arcada superioara.",
    articulations: "Alveola maxilarului",
    details: "Coroana cu 2 cuspizi. Poate avea 1 sau 2 radacini. Eruptie: 10-11 ani.",
  },
  premolar2_inf: {
    name: "Al doilea premolar inferior",
    category: "Dintii inferiori",
    type: "Dinte permanent, pereche",
    description: "Al doilea premolar pe arcada inferioara.",
    articulations: "Alveola mandibulei",
    details: "Coroana cu 2-3 cuspizi. O singura radacina. Eruptie: 11-12 ani.",
  },
  premolar2_sup: {
    name: "Al doilea premolar superior",
    category: "Dintii superiori",
    type: "Dinte permanent, pereche",
    description: "Al doilea premolar pe arcada superioara.",
    articulations: "Alveola maxilarului",
    details: "Coroana cu 2 cuspizi. O singura radacina. Eruptie: 10-12 ani.",
  },
  incisiv_lat_inf: {
    name: "Incisiv lateral inferior",
    category: "Dintii inferiori",
    type: "Dinte permanent, pereche",
    description: "Al doilea incisiv de pe arcada inferioara. Rol in taierea alimentelor.",
    articulations: "Alveola mandibulei",
    details:
      "Coroana in forma de lopata, putin mai mare decat incisivul central inferior. O radacina. Eruptie: 7-8 ani.",
  },
  incisiv_lat_sup: {
    name: "Incisiv lateral superior",
    category: "Dintii superiori",
    type: "Dinte permanent, pereche",
    description: "Al doilea incisiv de pe arcada superioara.",
    articulations: "Alveola maxilarului",
    details: "Coroana mai mica decat incisivul central. O radacina. Eruptie: 8-9 ani.",
  },
  incisiv_cent_inf: {
    name: "Incisiv central inferior",
    category: "Dintii inferiori",
    type: "Dinte permanent, pereche",
    description: "Cel mai mic dinte permanent. Primul incisiv pe arcada inferioara.",
    articulations: "Alveola mandibulei",
    details: "Coroana ingusta in forma de lopata. O radacina scurta. Eruptie: 6-7 ani.",
  },
  incisiv_cent_sup: {
    name: "Incisiv central superior",
    category: "Dintii superiori",
    type: "Dinte permanent, pereche",
    description: "Cel mai mare incisiv. Primul dinte vizibil pe arcada superioara.",
    articulations: "Alveola maxilarului",
    details: "Coroana lata in forma de lopata. O radacina conica. Eruptie: 7-8 ani.",
  },
  hioid: {
    name: "Osul Hioid",
    category: "Gatul",
    type: "Os nepereche",
    description: "Singurul os care nu se articuleaza cu alt os. Sustinut de ligamente si muschi.",
    articulations: "Nu se articuleaza direct cu niciun os",
    details: "Situat la baza limbii. Rol in deglutitie si vorbire. In forma de potcoava.",
  },
};
var componentData = {};
var structGroup = {
  visible: false,
  children: [],
  traverse: function () {},
  position: { y: 0, set: function () {} },
  rotation: { y: 0 },
};
var boneSections = [
  {
    id: "cap",
    name: "Scheletul Capului",
    icon: "\uD83D\uDC80",
    groups: [
      {
        title: "Neurocraniul (8 oase)",
        bones: ["frontal", "parietal", "temporal", "occipital", "sfenoid", "etmoid"],
      },
      {
        title: "Viscerocraniul (14 oase)",
        bones: [
          "maxilar",
          "mandibula",
          "zigomatic",
          "nazal",
          "lacrimal",
          "palatin",
          "vomer",
          "cornet",
        ],
      },
    ],
  },
  {
    id: "trunchi",
    name: "Scheletul Trunchiului",
    icon: "\uD83E\uDDB4",
    groups: [
      {
        title: "Coloana Vertebrala",
        bones: ["cervicale", "toracice", "lombare", "sacrum", "coccis"],
      },
      {
        title: "Cutia Toracica",
        bones: ["stern", "coaste-adevarate", "coaste-false", "coaste-fluctuante"],
      },
    ],
  },
  {
    id: "membre",
    name: "Membre Superioare",
    icon: "\uD83D\uDCAA",
    groups: [
      { title: "Centura Scapulara", bones: ["clavicula", "omoplat"] },
      { title: "Bratul (umar - cot)", bones: ["humerus"] },
      { title: "Antebratul (cot - pumn)", bones: ["radius", "ulna"] },
      { title: "Oasele Mainii", bones: ["carpiene", "metacarpiene", "falange"] },
    ],
  },
  {
    id: "inferioare",
    name: "Membre Inferioare",
    icon: "\uD83E\uDDB5",
    groups: [
      { title: "Centura Pelviana", bones: ["os-coxal"] },
      { title: "Coapsa (sold - genunchi)", bones: ["femur"] },
      { title: "Genunchiul", bones: ["patela"] },
      { title: "Gamba (genunchi - glezna)", bones: ["tibia", "fibula"] },
      { title: "Oasele Piciorului", bones: ["tarsiene", "metatarsiene", "falange-picior"] },
    ],
  },
];

var nameMap = {};
function am(ps, id) {
  ps.forEach(function (p) {
    nameMap[p.toLowerCase()] = id;
  });
}
am(["frontal"], "frontal");
am(["parietal"], "parietal");
am(["temporal"], "temporal");
am(["occipital"], "occipital");
am(["sphenoid"], "sfenoid");
am(["ethmoid"], "etmoid");
am(["maxilla", "maxillary"], "maxilar");
am(["mandible", "mandibula"], "mandibula");
am(["zygomatic"], "zigomatic");
am(["nasal"], "nazal");
am(["lacrimal"], "lacrimal");
am(["palatine"], "palatin");
am(["vomer"], "vomer");
am(["concha", "inferior nasal"], "cornet");
am(["atlas", "axis", "cervical"], "cervicale");
am(["thoracic"], "toracice");
am(["lumbar"], "lombare");
am(["sacrum", "sacral"], "sacrum");
am(["coccyx"], "coccis");
am(["sternum", "manubrium", "xiphoid"], "stern");
am(["clavicle"], "clavicula");
am(["scapula"], "omoplat");
am(["humerus"], "humerus");
am(["ulna"], "ulna");
am(["hip bone", "os coxae", "ilium", "ischium", "pubis", "innominate", "coxal"], "os-coxal");
am(["femur"], "femur");
am(["patella"], "patela");
am(["tibia"], "tibia");
am(["fibula"], "fibula");
am(
  [
    "rib 1",
    "rib (1st)",
    "rib_(1st)",
    "rib 2",
    "rib (2nd)",
    "rib_(2nd)",
    "rib 3",
    "rib (3rd)",
    "rib_(3rd)",
    "rib 4",
    "rib (4th)",
    "rib_(4th)",
    "rib 5",
    "rib (5th)",
    "rib_(5th)",
    "rib 6",
    "rib (6th)",
    "rib_(6th)",
    "rib 7",
    "rib (7th)",
    "rib_(7th)",
  ],
  "coaste-adevarate"
);
am(
  [
    "rib 8",
    "rib (8th)",
    "rib_(8th)",
    "rib 9",
    "rib (9th)",
    "rib_(9th)",
    "rib 10",
    "rib (10th)",
    "rib_(10th)",
  ],
  "coaste-false"
);
am(
  ["rib 11", "rib_(11th)", "rib (11th)", "rib 12", "rib_(12th)", "rib (12th)"],
  "coaste-fluctuante"
);

function matchName(name) {
  if (!name) return null;
  var n = name
    .toLowerCase()
    .replace(/[._\-]/g, " ")
    .trim();
  if (nameMap[n]) return nameMap[n];
  var keys = Object.keys(nameMap).sort(function (a, b) {
    return b.length - a.length;
  });
  for (var ki = 0; ki < keys.length; ki++) {
    if (n.indexOf(keys[ki]) >= 0) return nameMap[keys[ki]];
  }
  var ws = n.split(/\s+/);
  for (var i = 0; i < ws.length; i++) {
    if (nameMap[ws[i]]) return nameMap[ws[i]];
  }
  return null;
}

function matchNameWithPosition(name, mesh, skBox) {
  var basic = matchName(name);
  if (basic) return basic;
  if (!name) return null;
  var n = name
    .toLowerCase()
    .replace(/[._\-]/g, " ")
    .trim();
  var bb = new THREE.Box3().setFromObject(mesh);
  var midY = (bb.min.y + bb.max.y) / 2;
  var h = skBox.max.y - skBox.min.y;
  var yFrac = (midY - skBox.min.y) / h;
  var isUpperBody = yFrac > 0.4;

  if (n.indexOf("phalanx") >= 0 || n.indexOf("phalanges") >= 0)
    return isUpperBody ? "falange" : "falange-picior";
  if (n.indexOf("metacarpal") >= 0) return isUpperBody ? "metacarpiene" : "metatarsiene";
  if (n.indexOf("metatarsal") >= 0) return "metatarsiene";
  if (
    n.indexOf("carpal") >= 0 ||
    n.indexOf("scaphoid") >= 0 ||
    n.indexOf("lunate") >= 0 ||
    n.indexOf("triquetrum") >= 0 ||
    n.indexOf("pisiform") >= 0 ||
    n.indexOf("trapezium") >= 0 ||
    n.indexOf("trapezoid") >= 0 ||
    n.indexOf("capitate") >= 0 ||
    n.indexOf("hamate") >= 0
  )
    return isUpperBody ? "carpiene" : "tarsiene";
  if (
    n.indexOf("tarsal") >= 0 ||
    n.indexOf("talus") >= 0 ||
    n.indexOf("calcaneus") >= 0 ||
    n.indexOf("navicular") >= 0 ||
    n.indexOf("cuboid") >= 0 ||
    n.indexOf("cuneiform") >= 0
  )
    return "tarsiene";
  if (n.indexOf("radius") >= 0) return isUpperBody ? "radius" : null;
  if (n.indexOf("rib") >= 0 || n.indexOf("costa") >= 0 || n.indexOf("costal") >= 0)
    return "coaste-adevarate";
  if (n.indexOf("lower canine") >= 0) return "canin_inf";
  if (n.indexOf("upper canine") >= 0) return "canin_sup";
  if (n.indexOf("lower first molar") >= 0) return "molar1_inf";
  if (n.indexOf("upper first molar") >= 0) return "molar1_sup";
  if (n.indexOf("lower second molar") >= 0) return "molar2_inf";
  if (n.indexOf("upper second molar") >= 0) return "molar2_sup";
  if (n.indexOf("lower first premolar") >= 0) return "premolar1_inf";
  if (n.indexOf("upper first premolar") >= 0) return "premolar1_sup";
  if (n.indexOf("lower second premolar") >= 0) return "premolar2_inf";
  if (n.indexOf("upper second premolar") >= 0) return "premolar2_sup";
  if (n.indexOf("lower lateral incisor") >= 0) return "incisiv_lat_inf";
  if (n.indexOf("upper lateral incisor") >= 0) return "incisiv_lat_sup";
  if (n.indexOf("lower medial incisor") >= 0) return "incisiv_cent_inf";
  if (n.indexOf("upper medial incisor") >= 0) return "incisiv_cent_sup";
  if (n.indexOf("tooth") >= 0 || n.indexOf("teeth") >= 0 || n.indexOf("dent") >= 0) return "dinti";
  if (n.indexOf("hyoid") >= 0) return "hioid";
  if (n.indexOf("sesamoid") >= 0) return isUpperBody ? "carpiene" : "tarsiene";
  if (n.indexOf("disc") >= 0 || n.indexOf("intervertebral") >= 0) return "toracice";
  return null;
}

var roNames = {
  "atlas (c1)": "Atlasul (C1)",
  "axis (c2)": "Axisul (C2)",
  "body of sternum": "Corpul sternului",
  "cervical vertebrae (c3)": "Vertebra cervicala (C3)",
  "cervical vertebrae (c4)": "Vertebra cervicala (C4)",
  "cervical vertebrae (c5)": "Vertebra cervicala (C5)",
  "cervical vertebrae (c6)": "Vertebra cervicala (C6)",
  "cervical vertebrae (c7)": "Vertebra cervicala (C7)",
  coccyx: "Coccis",
  "ethmoid bone": "Osul Etmoid",
  "frontal bone": "Osul Frontal",
  "lumbar vertebrae (l1)": "Vertebra lombara (L1)",
  "lumbar vertebrae (l2)": "Vertebra lombara (L2)",
  "lumbar vertebrae (l3)": "Vertebra lombara (L3)",
  "lumbar vertebrae (l4)": "Vertebra lombara (L4)",
  "lumbar vertebrae (l5)": "Vertebra lombara (L5)",
  "mandible bone": "Mandibula",
  "manubrium of sternum": "Manubriul sternului",
  "occipital bone": "Osul Occipital",
  "parietal bone left": "Osul Parietal stang",
  "parietal bone right": "Osul Parietal drept",
  sacrum: "Sacrum",
  "sphenoid bone": "Osul Sfenoid",
  "thoracic vertebrae (t1)": "Vertebra toracica (T1)",
  "thoracic vertebrae (t2)": "Vertebra toracica (T2)",
  "thoracic vertebrae (t3)": "Vertebra toracica (T3)",
  "thoracic vertebrae (t4)": "Vertebra toracica (T4)",
  "thoracic vertebrae (t5)": "Vertebra toracica (T5)",
  "thoracic vertebrae (t6)": "Vertebra toracica (T6)",
  "thoracic vertebrae (t7)": "Vertebra toracica (T7)",
  "thoracic vertebrae (t8)": "Vertebra toracica (T8)",
  "thoracic vertebrae (t9)": "Vertebra toracica (T9)",
  "thoracic vertebrae (t10)": "Vertebra toracica (T10)",
  "thoracic vertebrae (t11)": "Vertebra toracica (T11)",
  "thoracic vertebrae (t12)": "Vertebra toracica (T12)",
  vomer: "Vomer",

  "1st metacarpal bone": "Metacarpianul 1",
  "2nd metacarpal bone": "Metacarpianul 2",
  "3rd metacarpal bone": "Metacarpianul 3",
  "4th metacarpal bone": "Metacarpianul 4",
  "5th metacarpal bone": "Metacarpianul 5",
  calcaneus: "Calcaneul",
  capitate: "Capitatul",
  clavicle: "Clavicula",
  "cuboid bone": "Cuboidul",
  "distal phalanx of 1st finger": "Falanga distala a degetului 1",
  "distal phalanx of 2d finger": "Falanga distala a degetului 2",
  "distal phalanx of 3d finger": "Falanga distala a degetului 3",
  "distal phalanx of 4th finger": "Falanga distala a degetului 4",
  "distal phalanx of 5th finger": "Falanga distala a degetului 5",
  "distal phalanx of first finger of foot": "Falanga distala a degetului 1 (picior)",
  "distal phalanx of second finger of foot": "Falanga distala a degetului 2 (picior)",
  "distal phalanx of third finger of foot": "Falanga distala a degetului 3 (picior)",
  "distal phalanx of fourth finger of foot": "Falanga distala a degetului 4 (picior)",
  "distal phalanx of fifth finger of foot": "Falanga distala a degetului 5 (picior)",
  femur: "Femurul",
  fibula: "Fibula",
  "fifth metatarsal bone": "Metatarsianul 5",
  "first metatarsal bone": "Metatarsianul 1",
  "second metatarsal bone": "Metatarsianul 2",
  "third metatarsal bone": "Metatarsianul 3",
  "fourth metatarsal bone": "Metatarsianul 4",
  hamate: "Hamatul",
  "hip bone": "Osul coxal",
  humerus: "Humerusul",
  "inferior nasal concha bone": "Cornetul nazal inferior",
  "intermediate cuneiform bone": "Cuneiformul intermediar",
  "lacrimal bone": "Osul Lacrimal",
  "lateral cuneiform bone": "Cuneiformul lateral",
  "lower canine": "Canin inferior",
  "lower first molar tooth": "Primul molar inferior",
  "lower first premolar": "Primul premolar inferior",
  "lower lateral incisor": "Incisiv lateral inferior",
  "lower medial incisor": "Incisiv central inferior",
  "lower second molar tooth": "Al doilea molar inferior",
  "lower second premolar": "Al doilea premolar inferior",
  "lunate bone": "Lunatul (Semilunarul)",
  "maxilla bone": "Maxilarul",
  "medial cuneiform bone": "Cuneiformul medial",
  "middle phalanx of 2d finger": "Falanga medie a degetului 2",
  "middle phalanx of 3d finger": "Falanga medie a degetului 3",
  "middle phalanx of 4th finger": "Falanga medie a degetului 4",
  "middle phalanx of 5th finger": "Falanga medie a degetului 5",
  "middle phalanx of second finger of foot": "Falanga medie a degetului 2 (picior)",
  "middle phalanx of third finger of foot": "Falanga medie a degetului 3 (picior)",
  "middle phalanx of fourth finger of foot": "Falanga medie a degetului 4 (picior)",
  "middle phalanx of fifth finger of foot": "Falanga medie a degetului 5 (picior)",
  "nasal bone": "Osul Nazal",
  "navicular bone": "Navicularul",
  "palatine bone": "Osul Palatin",
  patella: "Patela (Rotula)",
  pisiform: "Pisiformul",
  "proximal phalanx of 1st finger": "Falanga proximala a degetului 1",
  "proximal phalanx of 2d finger": "Falanga proximala a degetului 2",
  "proximal phalanx of 3d finger": "Falanga proximala a degetului 3",
  "proximal phalanx of 4th finger": "Falanga proximala a degetului 4",
  "proximal phalanx of 5th finger": "Falanga proximala a degetului 5",
  "proximal phalanx of first finger of foot": "Falanga proximala a degetului 1 (picior)",
  "proximal phalanx of second finger of foot": "Falanga proximala a degetului 2 (picior)",
  "proximal phalanx of third finger of foot": "Falanga proximala a degetului 3 (picior)",
  "proximal phalanx of fourth finger of foot": "Falanga proximala a degetului 4 (picior)",
  "proximal phalanx of fifth finger of foot": "Falanga proximala a degetului 5 (picior)",
  radius: "Radiusul",
  "rib (1st)": "Coasta 1",
  "rib (2nd)": "Coasta 2",
  "rib (3rd)": "Coasta 3",
  "rib (4th)": "Coasta 4",
  "rib (5th)": "Coasta 5",
  "rib (6th)": "Coasta 6",
  "rib (7th)": "Coasta 7",
  "rib (8th)": "Coasta 8",
  "rib (9th)": "Coasta 9",
  "rib (10th)": "Coasta 10",
  "rib (11th)": "Coasta 11",
  "rib (12th)": "Coasta 12",
  scaphoid: "Scafoidul",
  scapula: "Omoplatul (Scapula)",
  "sesamoid bones of foot": "Oasele sesamoide (picior)",
  "lower canine": "Canin inferior",
  "lower first molar tooth": "Primul molar inferior",
  "lower first premolar": "Primul premolar inferior",
  "lower lateral incisor": "Incisiv lateral inferior",
  "lower medial incisor": "Incisiv central inferior",
  "lower second molar tooth": "Al doilea molar inferior",
  "lower second premolar": "Al doilea premolar inferior",
  "upper canine": "Canin superior",
  "upper first molar tooth": "Primul molar superior",
  "upper first premolar": "Primul premolar superior",
  "upper lateral incisor": "Incisiv lateral superior",
  "upper medial incisor": "Incisiv central superior",
  "upper second molar tooth": "Al doilea molar superior",
  "upper second premolar": "Al doilea premolar superior",
  sesamoid_bones_of_hand: "Oasele sesamoide (mana)",
  "sesamoid bones of hand": "Oasele sesamoide (mana)",
  talus: "Talusul (Astragalul)",
  "temporal bone": "Osul Temporal",
  tibia: "Tibia",
  trapezium: "Trapezul",
  trapezoid: "Trapezoidul",
  triquetrum: "Triquetrum (Piramidal)",
  ulna: "Ulna (Cubitus)",
  "upper canine": "Canin superior",
  "upper first molar tooth": "Primul molar superior",
  "upper first premolar": "Primul premolar superior",
  "upper lateral incisor": "Incisiv lateral superior",
  "upper medial incisor": "Incisiv central superior",
  "upper second molar tooth": "Al doilea molar superior",
  "upper second premolar": "Al doilea premolar superior",
  "zygomatic bone": "Osul Zigomatic",
  "costal cart of 1st rib": "Cartilajul costal (coasta 1)",
  "costal cart of 2nd rib": "Cartilajul costal (coasta 2)",
  "costal cart of 3rd rib": "Cartilajul costal (coasta 3)",
  "costal cart of 4th rib": "Cartilajul costal (coasta 4)",
  "costal cart of 5th rib": "Cartilajul costal (coasta 5)",
  "costal cart of 6th rib": "Cartilajul costal (coasta 6)",
  "costal cart of 7th rib": "Cartilajul costal (coasta 7)",
  "costal cart of 8th rib": "Cartilajul costal (coasta 8)",
  "costal cart of 9th rib": "Cartilajul costal (coasta 9)",
  "costal cart of 10th rib": "Cartilajul costal (coasta 10)",

  frontal: "Osul Frontal",
  parietal: "Osul Parietal",
  temporal: "Osul Temporal",
  occipital: "Osul Occipital",
  sphenoid: "Osul Sfenoid",
  ethmoid: "Osul Etmoid",
  maxilla: "Maxilarul",
  mandible: "Mandibula",
  zygomatic: "Osul Zigomatic",
  nasal: "Osul Nazal",
  lacrimal: "Osul Lacrimal",
  palatine: "Osul Palatin",
  concha: "Cornetul nazal",
  atlas: "Atlasul (C1)",
  axis: "Axisul (C2)",
  cervical: "Vertebra cervicala",
  thoracic: "Vertebra toracica",
  lumbar: "Vertebra lombara",
  sternum: "Sternul",
  manubrium: "Manubriul",
  clavicle: "Clavicula",
  scapula: "Omoplatul (Scapula)",
  humerus: "Humerusul",
  ulna: "Ulna (Cubitus)",
  "hip bone": "Osul coxal",
  femur: "Femurul",
  patella: "Patela (Rotula)",
  tibia: "Tibia",
  fibula: "Fibula",
  talus: "Talusul (Astragalul)",
  calcaneus: "Calcaneul",
  navicular: "Navicularul",
  cuboid: "Cuboidul",
  scaphoid: "Scafoidul",
  lunate: "Lunatul (Semilunarul)",
  triquetrum: "Triquetrum (Piramidal)",
  pisiform: "Pisiformul",
  trapezium: "Trapezul",
  trapezoid: "Trapezoidul",
  capitate: "Capitatul",
  hamate: "Hamatul",
  rib: "Coasta",
  ribs: "Coaste",
  costal: "Cartilaj costal",
  metacarpal: "Metacarpian",
  metatarsal: "Metatarsian",
  phalanx: "Falanga",
  "proximal phalanx": "Falanga proximala",
  "middle phalanx": "Falanga medie",
  "distal phalanx": "Falanga distala",
  sesamoid: "Os sesamoid",
  tooth: "Dinte",
  incisor: "Incisiv",
  canine: "Canin",
  molar: "Molar",
  premolar: "Premolar",
  hyoid: "Osul Hioid",
};

function getRoName(meshName) {
  if (!meshName) return "Os";

  var n = meshName
    .replace(/\.r$/, "")
    .replace(/\.l$/, "")
    .replace(/[._\-]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();

  if (roNames[n]) return roNames[n];

  var cleaned = n.replace(/\s*\(?\d+(st|nd|rd|th)\)?\s*/g, " ").trim();
  if (roNames[cleaned]) return roNames[cleaned];

  var words = n.split(/\s+/);
  for (var len = words.length; len >= 1; len--) {
    for (var start = 0; start <= words.length - len; start++) {
      var phrase = words.slice(start, start + len).join(" ");
      if (roNames[phrase]) return roNames[phrase];
    }
  }

  var ribMatch = n.match(/rib.*?(\d+)/);
  if (ribMatch) return "Coasta " + ribMatch[1];

  var vertMatch = n.match(/(cervical|thoracic|lumbar).*?[ctlCTL]?(\d+)/);
  if (vertMatch) {
    var types = { cervical: "cervicala (C", thoracic: "toracica (T", lumbar: "lombara (L" };
    return "Vertebra " + (types[vertMatch[1]] || "") + vertMatch[2] + ")";
  }

  var costalMatch = n.match(/costal.*?(\d+)/);
  if (costalMatch) return "Cartilajul costal (coasta " + costalMatch[1] + ")";

  if (n.indexOf("metacarpal") >= 0) {
    var mc = n.match(/(\d+)/);
    return mc ? "Metacarpianul " + mc[1] : "Metacarpian";
  }

  if (n.indexOf("metatarsal") >= 0) {
    var mt = n.match(/(\d+)/);
    return mt ? "Metatarsianul " + mt[1] : "Metatarsian";
  }

  if (n.indexOf("phalanx") >= 0 || n.indexOf("phalanges") >= 0) {
    var foot = n.indexOf("foot") >= 0;
    var prefix = "";
    if (n.indexOf("proximal") >= 0) prefix = "Falanga proximala";
    else if (n.indexOf("middle") >= 0 || n.indexOf("intermediate") >= 0) prefix = "Falanga medie";
    else if (n.indexOf("distal") >= 0) prefix = "Falanga distala";
    else prefix = "Falanga";
    var dNum = n.match(/(\d+)/);
    if (dNum) prefix += " a degetului " + dNum[1];
    if (foot) prefix += " (picior)";
    return prefix;
  }

  if (n.indexOf("sesamoid") >= 0) {
    if (n.indexOf("foot") >= 0) return "Oasele sesamoide (picior)";
    if (n.indexOf("hand") >= 0 || n.indexOf("mana") >= 0) return "Oasele sesamoide (mana)";
    return "Os sesamoid";
  }

  if (
    n.indexOf("incisor") >= 0 ||
    n.indexOf("canine") >= 0 ||
    n.indexOf("molar") >= 0 ||
    n.indexOf("premolar") >= 0 ||
    n.indexOf("tooth") >= 0
  ) {
    var upper = n.indexOf("upper") >= 0;
    var lower = n.indexOf("lower") >= 0;
    var side = upper ? " superior" : lower ? " inferior" : "";
    if (n.indexOf("medial incisor") >= 0 || n.indexOf("central incisor") >= 0)
      return "Incisiv central" + side;
    if (n.indexOf("lateral incisor") >= 0) return "Incisiv lateral" + side;
    if (n.indexOf("canine") >= 0) return "Canin" + side;
    if (n.indexOf("first premolar") >= 0) return "Primul premolar" + side;
    if (n.indexOf("second premolar") >= 0) return "Al doilea premolar" + side;
    if (n.indexOf("first molar") >= 0) return "Primul molar" + side;
    if (n.indexOf("second molar") >= 0) return "Al doilea molar" + side;
    if (n.indexOf("third molar") >= 0 || n.indexOf("wisdom") >= 0) return "Maseaua de minte" + side;
    return "Dinte";
  }

  var result = [];
  words.forEach(function (w) {
    w = w.replace(/[()]/g, "");
    if (roNames[w]) result.push(roNames[w]);
    else if (w.length > 2 && w !== "the" && w !== "of" && w !== "and" && w !== "bone")
      result.push(w.charAt(0).toUpperCase() + w.slice(1));
  });
  return result.join(" ") || "Os";
}

var canvas = document.getElementById("canvas3d"),
  viewer = document.getElementById("viewer");
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(45, viewer.clientWidth / viewer.clientHeight, 0.01, 100);
camera.position.set(0, 0.85, 2.5);
var renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
renderer.setSize(viewer.clientWidth, viewer.clientHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
renderer.localClippingEnabled = true;
var controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.08;
controls.target.set(0, 0.85, 0);
controls.minDistance = 0.15;
controls.maxDistance = 5;
scene.add(new THREE.AmbientLight(0xffffff, 0.85));
var dL = new THREE.DirectionalLight(0xffffff, 1.0);
dL.position.set(3, 5, 4);
scene.add(dL);
scene.add(new THREE.DirectionalLight(0x8899cc, 0.4).translateX(-3).translateY(3).translateZ(-2));
scene.add(new THREE.DirectionalLight(0xccaa88, 0.3).translateY(-1).translateZ(3));
var structFillLight = new THREE.DirectionalLight(0xfff2dd, 0.55);
structFillLight.position.set(2.5, 1.0, 0.8);
scene.add(structFillLight);
var structRimLight = new THREE.DirectionalLight(0xa8c0ff, 0.35);
structRimLight.position.set(-1.5, 1.5, -0.5);
scene.add(structRimLight);
var BONE_COL = new THREE.Color(0xe8dcc8),
  HOVER_COL = new THREE.Color(0xff8c00),
  SELECT_COL = new THREE.Color(0xff1a1a);
var skeletonModel = null,
  modelMeshes = [],
  hoveredMesh = null,
  selectedMesh = null,
  modelBox = new THREE.Box3();
var camPresets = {
  all: { pos: [0, 0.85, 2.5], target: [0, 0.85, 0] },
  cap: { pos: [0, 1.6, 0.8], target: [0, 1.55, 0] },
  trunchi: { pos: [0, 1.05, 1.6], target: [0, 1.05, 0] },
  membre: { pos: [0.5, 1.0, 1.3], target: [0.1, 1.0, 0] },
  inferioare: { pos: [0.4, 0.35, 1.5], target: [0.05, 0.35, 0] },
  structura: { pos: [1.05, 0.55, 0.45], target: [0, 0.55, 0] },
};

var gltfLoader = new THREE.GLTFLoader();
if (typeof THREE.DRACOLoader === "function") {
  var dracoLoader = new THREE.DRACOLoader();
  dracoLoader.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
  dracoLoader.setDecoderConfig({ type: "js" });
  gltfLoader.setDRACOLoader(dracoLoader);
}
document.getElementById("load-text").textContent = "Se incarca modelul 3D...";
document.getElementById("load-fill").style.width = "10%";
var GLB_URL = location.pathname.replace(/\/[^\/]*$/, "/") + "models/skeleton.glb";
gltfLoader.load(
  GLB_URL,
  function (gltf) {
    (function processGLB(gltf) {
      skeletonModel = gltf.scene;
      modelBox.setFromObject(skeletonModel);
      var size = new THREE.Vector3();
      modelBox.getSize(size);
      var center = new THREE.Vector3();
      modelBox.getCenter(center);
      var sc = 1.8 / size.y;
      skeletonModel.scale.setScalar(sc);
      skeletonModel.position.set(-center.x * sc, -modelBox.min.y * sc, -center.z * sc);
      scene.add(skeletonModel);
      modelBox.setFromObject(skeletonModel);

      var toMirror = [];
      skeletonModel.traverse(function (child) {
        if (!child.isMesh) return;
        if (
          child.name &&
          (child.name.indexOf(".r") >= 0 ||
            child.name.indexOf("_r") >= 0 ||
            (child.parent && child.parent.name && child.parent.name.indexOf("_right") >= 0))
        ) {
          toMirror.push(child);
        }
      });
      toMirror.forEach(function (mesh) {
        var clone = mesh.clone(true);
        clone.name = mesh.name.replace(/\.r/g, ".l").replace(/_r\b/g, "_l");
        clone.applyMatrix4(new THREE.Matrix4().makeScale(-1, 1, 1));
        if (clone.geometry) {
          var idx = clone.geometry.index;
          if (idx) {
            var arr = idx.array;
            for (var i = 0; i < arr.length; i += 3) {
              var tmp = arr[i];
              arr[i] = arr[i + 2];
              arr[i + 2] = tmp;
            }
            idx.needsUpdate = true;
          }
          if (clone.geometry.attributes.normal) {
            var norms = clone.geometry.attributes.normal;
            for (var j = 0; j < norms.count; j++) norms.setX(j, -norms.getX(j));
            norms.needsUpdate = true;
          }
        }
        clone.userData._isMirror = true;
        clone.userData._mirrorOf = mesh.name;
        mesh.parent.add(clone);
      });

      var skBox = new THREE.Box3().setFromObject(skeletonModel);
      skeletonModel.traverse(function (child) {
        if (!child.isMesh) return;
        var boneId =
          matchNameWithPosition(child.name, child, skBox) ||
          matchNameWithPosition(child.parent && child.parent.name, child, skBox);
        child.userData.boneId = boneId;
        child.material = new THREE.MeshStandardMaterial({
          color: BONE_COL.clone(),
          roughness: 0.55,
          metalness: 0.05,
          emissive: new THREE.Color(0),
        });
        child.userData._origColor = BONE_COL.clone();
        modelMeshes.push(child);
      });
      console.log("Total meshes (with mirrors):", modelMeshes.length);
      document.getElementById("loader").classList.add("hidden");
      if (typeof window.__appReady === "function") window.__appReady("model");

      var finalBox = new THREE.Box3().setFromObject(skeletonModel);
      var finalCenter = new THREE.Vector3();
      finalBox.getCenter(finalCenter);
      modelBox.copy(finalBox);
      var midY = finalCenter.y;
      var midX = finalCenter.x;
      var midZ = finalCenter.z;
      controls.target.set(midX, midY, midZ);
      camera.position.set(midX, midY, midZ + 2.5);
      camPresets.all = { pos: [midX, midY, midZ + 2.5], target: [midX, midY, midZ] };
    })(gltf);
  },
  function (xhr) {
    if (xhr && xhr.lengthComputable) {
      var pct = Math.round((xhr.loaded / xhr.total) * 100);
      var f = document.getElementById("load-fill");
      if (f) f.style.width = pct + "%";
      var t = document.getElementById("load-text");
      if (t) t.textContent = "Se incarca modelul 3D... " + pct + "%";
    }
  },
  function (err) {
    console.error("GLB load error from", GLB_URL, err);
    var le = document.getElementById("load-error");
    if (le) {
      le.style.display = "block";
      le.innerHTML =
        "Nu s-a putut incarca <code>skeleton.glb</code>.<br>URL: " +
        GLB_URL +
        "<br>" +
        ((err && err.message) || err || "");
    }
    document.getElementById("load-text").textContent = "Eroare la incarcare";
    if (typeof window.__appReady === "function") window.__appReady("model");
  }
);

(function () {
  var ct = document.getElementById("bone-list");
  var h = "";
  boneSections.forEach(function (s) {
    h +=
      '<div class="bone-group open" data-section="' +
      s.id +
      '"><div class="group-header" onclick="this.parentElement.classList.toggle(\'open\')"><span class="group-arrow">\u25B6</span><span class="group-icon">' +
      s.icon +
      '</span><span class="group-name">' +
      s.name +
      '</span></div><ul class="group-list">';
    s.groups.forEach(function (g) {
      h += '<li class="group-sub">' + g.title + "</li>";
      g.bones.forEach(function (id) {
        var d = boneData[id];
        h +=
          '<li class="bone-item" data-bone="' +
          id +
          '" onclick="selectBoneById(\'' +
          id +
          '\')"><span class="bone-label-text">' +
          (d ? d.name : id) +
          '</span><button class="focus-btn" onclick="event.stopPropagation();focusBoneById(\'' +
          id +
          "')\">&#128269;</button></li>";
      });
    });
    h += "</ul></div>";
  });
  ct.innerHTML = h;
  var cc = document.getElementById("comp-list");
  var ch = "";
  var compIdx = 0;
  for (var cid in componentData) {
    var d = componentData[cid];
    compIdx++;
    ch +=
      '<div class="component-item" data-comp="' +
      cid +
      '" onclick="selectComp(\'' +
      cid +
      '\')"><h5><span class="comp-num">' +
      compIdx +
      "</span>" +
      d.name +
      "</h5><p>" +
      d.full.substring(0, 80) +
      "...</p></div>";
  }
  cc.innerHTML = ch;
})();

function hlMesh(m, c) {
  if (!m || !m.material) return;
  m.material.color.copy(c);
  m.material.emissive.copy(c).multiplyScalar(0.15);
}
function rstMesh(m) {
  if (!m || !m.material) return;
  m.material.color.copy(m.userData._origColor || BONE_COL);
  m.material.emissive.set(0);
}
function clearSel() {
  if (selectedMesh) {
    rstMesh(selectedMesh);
    selectedMesh = null;
  }
}
function clearHov() {
  if (hoveredMesh && hoveredMesh !== selectedMesh) {
    rstMesh(hoveredMesh);
    hoveredMesh = null;
  }
}

function getMeshes(id) {
  return modelMeshes.filter(function (m) {
    return m.userData.boneId === id;
  });
}

var raycaster = new THREE.Raycaster(),
  mouse = new THREE.Vector2(),
  bnoOverlay = document.getElementById("boneNameOverlay"),
  currentSection = "all";
viewer.addEventListener("mousemove", function (e) {
  if (
    (typeof QUIZ !== "undefined" && QUIZ.active) ||
    document.body.classList.contains("mode-quiz")
  ) {
    viewer.style.cursor = "default";
    clearHov();
    return;
  }
  var r = viewer.getBoundingClientRect();
  mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
  mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
  raycaster.setFromCamera(mouse, camera);
  if (currentSection === "structura") {
    viewer.style.cursor =
      raycaster.intersectObjects(structGroup.children, true).length > 0 ? "pointer" : "default";
    return;
  }
  var allTargets = modelMeshes;
  var hits = raycaster.intersectObjects(allTargets, false);
  if (hits.length > 0) {
    var mesh = hits[0].object;
    viewer.style.cursor = "pointer";
    if (mesh !== hoveredMesh) {
      clearHov();
      hoveredMesh = mesh;
      if (mesh !== selectedMesh) hlMesh(mesh, HOVER_COL);
    }
  } else {
    viewer.style.cursor = "default";
    clearHov();
  }
});

viewer.addEventListener("click", function () {
  if ((typeof QUIZ !== "undefined" && QUIZ.active) || document.body.classList.contains("mode-quiz"))
    return;
  raycaster.setFromCamera(mouse, camera);
  if (currentSection === "structura") {
    var h = raycaster.intersectObjects(structGroup.children, true);
    if (h.length > 0 && h[0].object.userData && h[0].object.userData.compId)
      selectComp(h[0].object.userData.compId);
    return;
  }
  var allTargets2 = modelMeshes;
  var hits = raycaster.intersectObjects(allTargets2, false);
  if (hits.length === 0) {
    clearSel();
    if (typeof bnoOverlay !== "undefined" && bnoOverlay) bnoOverlay.classList.remove("visible");
    var phE = document.getElementById("ip-ph"),
      ctE = document.getElementById("info-ct");
    if (phE) phE.style.display = "flex";
    if (ctE) ctE.style.display = "none";
    document.querySelectorAll(".bone-item.selected").forEach(function (el) {
      el.classList.remove("selected");
    });
    return;
  }
  var mesh = hits[0].object,
    boneId = mesh.userData.boneId;
  clearSel();
  selectedMesh = mesh;
  hlMesh(mesh, SELECT_COL);
  if (mesh.userData._isMuscle) {
    var mName = getRoName(mesh.userData.muscleName);
    var mKey = mesh.userData.muscleName
      .toLowerCase()
      .replace(/\.[rl]$/, "")
      .trim();
    var mInfo = typeof muscleData !== "undefined" ? muscleData[mKey] : null;
    document.getElementById("bnoName").textContent = mName;
    document.getElementById("bnoCat").textContent = "Sistem muscular";
    document.getElementById("boneNameOverlay").classList.add("visible");
    document.getElementById("info-title").textContent = mName;
    document.getElementById("ip-ph").style.display = "none";
    var ct2 = document.getElementById("info-ct");
    ct2.style.display = "block";
    var parts = mInfo ? mInfo.split("|") : ["", "", ""];
    ct2.innerHTML =
      "<div class='info-section'><h4>Muschi</h4><div class='info-tag' style='background:rgba(220,38,38,.15);border-color:rgba(220,38,38,.3);color:#f87171'>" +
      mName +
      "</div></div>" +
      (parts[1] ? "<div class='info-section'><h4>Functie</h4><p>" + parts[1] + "</p></div>" : "") +
      (parts[2] ? "<div class='info-section'><h4>Detalii</h4><p>" + parts[2] + "</p></div>" : "");
  } else if (boneId && boneData[boneId]) {
    showOverlay(boneId);
    showInfo(boneId);
  } else {
    document.getElementById("bnoName").textContent = getRoName(mesh.name);
    document.getElementById("bnoCat").textContent = "";
    bnoOverlay.classList.add("visible");
  }
});

function showOverlay(id) {
  var d = boneData[id];
  if (!d) return;
  document.getElementById("bnoName").textContent = d.name;
  document.getElementById("bnoCat").textContent = d.category + " \u2014 " + d.type;
  bnoOverlay.classList.add("visible");
  if (typeof positionBoneOverlay === "function") positionBoneOverlay();
}

function showInfo(id) {
  document.querySelectorAll(".bone-item.selected").forEach(function (el) {
    el.classList.remove("selected");
  });
  var si = document.querySelector('.bone-item[data-bone="' + id + '"]');
  if (si) {
    si.classList.add("selected");
    si.closest(".bone-group").classList.add("open");
    si.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  var d = boneData[id];
  if (!d) return;
  document.getElementById("cur-label").textContent = d.name;
  document.getElementById("ip-ph").style.display = "none";
  var ct = document.getElementById("info-ct");
  ct.style.display = "block";
  ct.innerHTML =
    '<div class="info-section"><h4>Categorie</h4><div class="info-tag">' +
    d.category +
    '</div></div><div class="info-section"><h4>Tip</h4><div class="info-tag">' +
    d.type +
    '</div></div><div class="info-section"><h4>Descriere</h4><p>' +
    d.description +
    '</p></div><div class="info-section"><h4>Articulatii</h4><p>' +
    d.articulations +
    '</p></div><div class="info-section"><h4>Detalii</h4><p>' +
    d.details +
    "</p></div>";
}

function selectBoneById(id) {
  clearSel();
  var ms = getMeshes(id);
  if (ms.length > 0) {
    selectedMesh = ms[0];
    hlMesh(ms[0], SELECT_COL);
  }
  showOverlay(id);
  showInfo(id);
}
window.selectBoneById = selectBoneById;

function focusBoneById(id) {
  selectBoneById(id);
  var ms = getMeshes(id);
  if (ms.length === 0) {
    if (skeletonModel) {
      var box = new THREE.Box3().setFromObject(skeletonModel);
      var midY = (box.min.y + box.max.y) / 2;
      animCam([0.15, midY + 0.3, 0.8], [0, midY + 0.3, 0]);
    }
    return;
  }
  var c = new THREE.Vector3(),
    n = 0;
  ms.forEach(function (m) {
    var b = new THREE.Box3().setFromObject(m);
    var cc = new THREE.Vector3();
    b.getCenter(cc);
    c.add(cc);
    n++;
  });
  c.divideScalar(n);
  animCam([c.x + 0.12, c.y + 0.05, c.z + 0.4], [c.x, c.y, c.z]);
}
window.focusBoneById = focusBoneById;

function selectComp(compId) {
  document.querySelectorAll(".component-item").forEach(function (ci) {
    ci.classList.remove("active");
  });
  var item = document.querySelector('.component-item[data-comp="' + compId + '"]');
  if (item) {
    item.classList.add("active");
    item.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  structGroup.traverse(function (c) {
    if (!c.isMesh || !c.material) return;
    if (c.userData.compId === compId) {
      c.material.opacity = 0.95;
      if (c.material.emissive) c.material.emissive.set(0x333333);
    } else {
      if (c.material.transparent) c.material.opacity = 0.15;
      if (c.material.emissive) c.material.emissive.set(0);
    }
  });
  var d = componentData[compId];
  if (!d) return;
  document.getElementById("info-title").textContent = d.name;
  document.getElementById("ip-ph").style.display = "none";
  var ct = document.getElementById("info-ct");
  ct.style.display = "block";
  ct.innerHTML =
    '<div class="info-section"><h4>Componenta</h4><div class="info-tag">' +
    d.name +
    '</div></div><div class="info-section"><h4>Descriere</h4><p>' +
    d.full +
    "</p></div>";
  document.getElementById("cur-label").textContent = d.name;
}
window.selectComp = selectComp;

function switchSection(sId) {
  currentSection = sId;
  document.querySelectorAll(".nav-tab").forEach(function (t) {
    t.classList.remove("active");
  });
  document.querySelector('.nav-tab[data-section="' + sId + '"]').classList.add("active");
  var isS = sId === "structura";
  if (skeletonModel) skeletonModel.visible = !isS;
  structGroup.visible = isS;
  document.getElementById("bone-list").style.display = isS ? "none" : "block";
  document.getElementById("comp-list").style.display = isS ? "block" : "none";
  if (isS)
    structGroup.traverse(function (c) {
      if (c.isMesh && c.material) {
        if (c.material.transparent)
          c.material.opacity = c.material._defaultOpacity || c.material.opacity;
        if (c.material.emissive) c.material.emissive.set(0);
      }
    });
  clearSel();
  clearHov();
  modelMeshes.forEach(function (m) {
    rstMesh(m);
    m.material.transparent = false;
    m.material.opacity = 1;
  });
  if (!isS && sId !== "all" && skeletonModel) {
    modelMeshes.forEach(function (m) {
      var n = (m.name || "")
        .toLowerCase()
        .replace(/\.[rl]$/, "")
        .replace(/[._]/g, " ")
        .trim();
      var ok = false;
      if (sId === "cap") {
        ok =
          /frontal|parietal|temporal|occipital|sphenoid|ethmoid|maxilla|mandible|zygomatic|nasal bone|lacrimal|palatine|vomer|concha|molar|incisor|canine|premolar|hyoid/.test(
            n
          );
      } else if (sId === "trunchi") {
        ok =
          /atlas|axis|cervical vertebra|thoracic vertebra|lumbar vertebra|sacrum|coccyx|rib |rib\(|sternum|manubrium|xiphoid|body of sternum|costal cart/.test(
            n
          );
      } else if (sId === "membre") {
        ok = /clavicle|scapula|humerus|ulna/.test(n);
        if (!ok) ok = /^radius/.test(n);
        if (!ok)
          ok = /metacarpal|capitate|hamate|lunate bone|scaphoid|pisiform|trapezi|triquetrum/.test(
            n
          );
        if (!ok) ok = /phalanx.+finger/.test(n) && !/foot/.test(n);
        if (!ok) ok = /sesamoid.+hand/.test(n);
      } else if (sId === "inferioare") {
        ok =
          /femur|patella|tibia|fibula|hip bone|tarsal|calcaneus|talus|cuboid|cuneiform|navicular|metatarsal|foot|sesamoid.*foot/.test(
            n
          );
      }
      m.material.transparent = true;
      m.material.opacity = ok ? 1 : 0.04;
    });
  }
  bnoOverlay.classList.remove("visible");
  document.querySelectorAll(".bone-item.selected").forEach(function (el) {
    el.classList.remove("selected");
  });
  document.getElementById("ip-ph").style.display = "flex";
  document.getElementById("info-ct").style.display = "none";
  var p = camPresets[sId] || camPresets.all;
  if (skeletonModel && sId !== "all" && sId !== "structura") {
    var bx = new THREE.Box3().setFromObject(skeletonModel);
    var ht = bx.max.y - bx.min.y;
    var midY2 =
      bx.min.y + ht * ({ cap: 0.92, trunchi: 0.65, membre: 0.6, inferioare: 0.3 }[sId] || 0.5);
    animCam([p.pos[0], midY2, sId === "cap" ? ht * 0.4 : ht * 1.0], [0, midY2, 0]);
  } else animCam(p.pos, p.target);
  document.getElementById("cur-label").textContent =
    {
      all: "Scheletul complet",
      cap: "Scheletul Capului",
      trunchi: "Scheletul Trunchiului",
      membre: "Membre Superioare",
      inferioare: "Membre Inferioare",
      structura: "Structura Osului",
    }[sId] || "";
  document.querySelectorAll(".bone-group").forEach(function (g) {
    if (sId === "all") {
      g.classList.add("open");
      return;
    }
    g.classList.toggle("open", g.dataset.section === sId);
  });
}
document.querySelectorAll(".nav-tab").forEach(function (t) {
  t.addEventListener("click", function () {
    switchSection(t.dataset.section);
  });
});

var camAnim = false;
function animCam(tP, tL, dur) {
  dur = dur || 800;
  var sP = camera.position.clone(),
    sT = controls.target.clone();
  var eP = new THREE.Vector3(tP[0], tP[1], tP[2]),
    eT = new THREE.Vector3(tL[0], tL[1], tL[2]);
  var st = performance.now();
  camAnim = true;
  function u() {
    var t = Math.min((performance.now() - st) / dur, 1),
      e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    camera.position.lerpVectors(sP, eP, e);
    controls.target.lerpVectors(sT, eT, e);
    controls.update();
    if (t < 1) requestAnimationFrame(u);
    else camAnim = false;
  }
  u();
}
window.resetCam = function () {
  var p = camPresets[currentSection] || camPresets.all;
  animCam(p.pos, p.target);
};
window.closeZoom = function () {
  document.getElementById("zoomOv").classList.remove("active");
};
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") window.closeZoom();
});
document.getElementById("zoomOv").addEventListener("click", function (e) {
  if (e.target === this) window.closeZoom();
});

document.getElementById("bone-search").addEventListener("input", function (e) {
  var t = e.target.value.toLowerCase();
  var count = 0;
  var sc = document.getElementById("search-count");
  document.querySelectorAll(".group-header,.group-sub").forEach(function (el) {
    el.style.display = t.length > 0 ? "none" : "";
  });
  document.querySelectorAll(".bone-group").forEach(function (g) {
    if (t.length > 0) g.classList.add("open");
  });
  document.querySelectorAll(".bone-item").forEach(function (item) {
    var n = item.querySelector(".bone-label-text").textContent.toLowerCase();
    var match = t.length > 0 && n.indexOf(t) >= 0;
    item.style.display = t.length === 0 || match ? "flex" : "none";
    item.classList.toggle("search-match", match);
    if (match) count++;
  });
  if (t.length > 0) {
    sc.textContent =
      count + " rezultat" + (count !== 1 ? "e" : "") + " gasit" + (count !== 1 ? "e" : "");
    sc.classList.add("visible");
    if (count === 1) {
      var single = document.querySelector(".bone-item.search-match");
      if (single) single.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  } else {
    sc.classList.remove("visible");
    document.querySelectorAll(".bone-item.search-match").forEach(function (el) {
      el.classList.remove("search-match");
    });
    document.querySelectorAll(".group-header,.group-sub").forEach(function (el) {
      el.style.display = "";
    });
  }
});
document.getElementById("bone-search").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    var match = document.querySelector(".bone-item.search-match");
    if (match) match.click();
  }
});


window.__bxRenderGate = function (dom) {
  if (document.hidden) return false;
  if (window.APP_MODE == null) return false;
  return !dom || dom.offsetParent !== null;
};
function animate() {
  requestAnimationFrame(animate);
  if (!window.__bxRenderGate(renderer.domElement)) return;
  if (!camAnim) controls.update();
  renderer.render(scene, camera);
}
animate();
window.addEventListener("resize", function () {
  camera.aspect = viewer.clientWidth / viewer.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(viewer.clientWidth, viewer.clientHeight);
});

async function sha256(text) {
  if (!window.crypto || !window.crypto.subtle) {
    var h = 0;
    for (var i = 0; i < text.length; i++) {
      h = (h << 5) - h + text.charCodeAt(i);
      h |= 0;
    }
    return "plain:" + text;
  }
  var enc = new TextEncoder().encode(text);
  var buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf))
    .map(function (b) {
      return b.toString(16).padStart(2, "0");
    })
    .join("");
}
window.sha256 = sha256;

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}
window.escapeHTML = escapeHTML;

window.APP_MODE = null;
window.enterApp = function (mode) {
  var ov = document.getElementById("homeOverlay");
  if (!ov) return;
  window.__homeReturnY = ov.scrollTop || 0;
  document.body.classList.remove(
    "mode-skeleton", "mode-quiz", "mode-muscular",
    "mode-cardio", "mode-nervous", "mode-respiratory", "mode-digestive"
  );
  if (mode === "skeleton") document.body.classList.add("mode-skeleton");
  else if (mode === "quiz") document.body.classList.add("mode-quiz");
  else if (mode === "muscular") document.body.classList.add("mode-muscular");
  window.APP_MODE = mode || null;
  ov.classList.add("hidden");
  setTimeout(function () {
    ov.style.display = "none";
    if (
      typeof camera !== "undefined" &&
      typeof renderer !== "undefined" &&
      typeof viewer !== "undefined"
    ) {
      camera.aspect = viewer.clientWidth / viewer.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(viewer.clientWidth, viewer.clientHeight);
    }
    if (mode === "quiz") {
      var qp = document.getElementById("quizPanel");
      if (qp) {
        qp.classList.remove("collapsed");
        qp.style.left = "";
        qp.style.top = "";
        qp.style.right = "";
        qp.style.bottom = "";
      }
      if (typeof setQuizFadedSkeleton === "function") setQuizFadedSkeleton(true);
      if (typeof bnoOverlay !== "undefined" && bnoOverlay) bnoOverlay.classList.remove("visible");
    } else if (mode === "skeleton") {
      if (typeof setQuizFadedSkeleton === "function") setQuizFadedSkeleton(false);
      if (typeof clearSel === "function") clearSel();
      var bovEl = document.getElementById("boneNameOverlay");
      if (bovEl) bovEl.classList.remove("visible");
      var phEl = document.getElementById("ip-ph");
      if (phEl) phEl.style.display = "flex";
      var ctEl = document.getElementById("info-ct");
      if (ctEl) ctEl.style.display = "none";
      document.querySelectorAll(".bone-item.selected").forEach(function (el) {
        el.classList.remove("selected");
      });
      var curLabel = document.getElementById("cur-label");
      if (curLabel) {
        curLabel.textContent =
          typeof CUR_LANG !== "undefined" && CUR_LANG === "en"
            ? "Complete skeleton"
            : "Scheletul complet";
      }
    } else {
      if (typeof setQuizFadedSkeleton === "function") setQuizFadedSkeleton(false);
    }
  }, 500);
};
window.exitQuizMode = function () {
  if (typeof QUIZ !== "undefined" && QUIZ.active) {
    QUIZ.active = false;
    if (typeof clearQuizHighlight === "function") clearQuizHighlight();
    if (typeof setQuizFadedSkeleton === "function") setQuizFadedSkeleton(false);
  }
  if (typeof showQuizStage === "function") showQuizStage("quizStart");
  document.body.classList.remove("mode-quiz", "mode-skeleton");
  window.APP_MODE = null;

  if (typeof showHome === "function") showHome({ resetScroll: false });
};
window.showHome = function (opts) {
  var ov = document.getElementById("homeOverlay");
  if (!ov) return;
  document.body.classList.remove("mode-skeleton", "mode-quiz", "mode-muscular");
  window.APP_MODE = null;
  ov.style.display = "block";
  var restoreY = opts && opts.resetScroll === false ? window.__homeReturnY || 0 : 0;
  ov.scrollTop = restoreY;
  var nav = document.querySelector(".home-nav");
  if (nav) {
    if (restoreY > 40) nav.classList.add("scrolled");
    else nav.classList.remove("scrolled");
  }
  setTimeout(function () {
    ov.classList.remove("hidden");
  }, 10);
};
window.goBackFromApp = function () {
  document.body.classList.remove(
    "mode-quiz",
    "mode-skeleton",
    "mode-muscular",
    "qmode-visual",
    "qmode-knowledge",
    "qmode-duel"
  );
  if (window.QUIZ) {
    QUIZ.active = false;
    QUIZ.system = "osos";
    QUIZ.mode = "visual";
  }
  if (typeof showQuizStage === "function") showQuizStage("quizSystemPick");
  if (typeof clearQuizHighlight === "function") clearQuizHighlight();
  if (typeof window.clearMuscleQuizHighlight === "function") window.clearMuscleQuizHighlight();
  if (typeof setQuizFadedSkeleton === "function") setQuizFadedSkeleton(false);
  showHome({ resetScroll: false });
};
window.scrollHomeTop = function () {
  var ov = document.getElementById("homeOverlay");
  if (ov && ov.style.display !== "none" && !ov.classList.contains("hidden")) {
    ov.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

function getUsers() {
  try {
    return JSON.parse(localStorage.getItem("bionexus_users") || "[]");
  } catch (e) {
    return [];
  }
}
function saveUsers(u) {
  localStorage.setItem("bionexus_users", JSON.stringify(u));
}
function getCurrentUser() {
  try {
    return JSON.parse(localStorage.getItem("bionexus_current") || "null");
  } catch (e) {
    return null;
  }
}
function setCurrentUser(u) {
  if (u) localStorage.setItem("bionexus_current", JSON.stringify(u));
  else localStorage.removeItem("bionexus_current");
}

window.openLogin = function () {
  var p = document.getElementById("loginModal");
  if (p) p.classList.add("active");
  document.body.style.overflow = "hidden";
};
window.closeLogin = function () {
  var p = document.getElementById("loginModal");
  if (p) p.classList.remove("active");
  document.body.style.overflow = "";
};
window.togglePass = function (id, btn) {
  var inp = document.getElementById(id);
  if (!inp) return;
  if (inp.type === "password") {
    inp.type = "text";
    btn.style.color = "#a78bfa";
  } else {
    inp.type = "password";
    btn.style.color = "#64748b";
  }
};

window.doLogin = async function () {
  var u = document.getElementById("loginUser").value.trim();
  var p = document.getElementById("loginPass").value;
  var err = document.getElementById("loginError");
  if (!u || !p) {
    err.textContent = t("err.fillBoth");
    return;
  }
  var users = getUsers();
  var hashed = await sha256(p);
  var match = users.find(function (x) {
    return (x.user === u || x.email === u) && (x.pass === hashed || x.pass === p);
  });
  if (!match) {
    err.textContent = t("err.badCreds");
    return;
  }
  if (match.pass === p && match.pass !== hashed) {
    match.pass = hashed;
    saveUsers(users);
  }
  setCurrentUser({ user: match.user, email: match.email });
  err.textContent = "";
  closeLogin();
  applyUserBadge();
  if (typeof showHome === "function") showHome();
};
window.doRegister = async function () {
  var u = document.getElementById("regUser").value.trim();
  var e = document.getElementById("regEmail").value.trim();
  var p = document.getElementById("regPass").value;
  var err = document.getElementById("regError");
  if (!u || !e || !p) {
    err.textContent = t("err.fillAll");
    return;
  }
  if (p.length < 4) {
    err.textContent = t("err.passShort");
    return;
  }
  if (!/.+@.+\..+/.test(e)) {
    err.textContent = t("err.email");
    return;
  }
  var users = getUsers();
  if (
    users.find(function (x) {
      return x.user === u;
    })
  ) {
    err.textContent = t("err.userTaken");
    return;
  }
  if (
    users.find(function (x) {
      return x.email === e;
    })
  ) {
    err.textContent = t("err.emailTaken");
    return;
  }
  var hashed = await sha256(p);
  users.push({ user: u, email: e, pass: hashed });
  saveUsers(users);
  setCurrentUser({ user: u, email: e });
  err.textContent = "";
  closeLogin();
  applyUserBadge();
  if (typeof showHome === "function") showHome();
};
function applyUserBadge() {
  var u = getCurrentUser();
  var loginBtn = document.querySelector(".home-login-btn");
  if (loginBtn && u) {
    var _safeUser = escapeHTML(u.user);
    loginBtn.outerHTML =
      '<div class="user-badge" onclick="doLogout()" title="Click pentru deconectare"><div class="user-badge-avatar">' +
      escapeHTML(u.user.charAt(0).toUpperCase()) +
      "</div><span>" +
      _safeUser +
      "</span></div>";
  }
  var btn = document.getElementById("userBtnName");
  if (btn && u) btn.textContent = u.user;
}
window.doLogout = function () {
  setCurrentUser(null);
  location.reload();
};
window.userMenu = function () {
  var u = getCurrentUser();
  if (u) {
    if (confirm("Deconectează-te din contul " + u.user + "?")) {
      setCurrentUser(null);
      location.reload();
    }
  } else {
    showHome();
    openLogin();
  }
};

(function () {
  document.querySelectorAll(".auth-tab").forEach(function (t) {
    t.addEventListener("click", function () {
      var which = this.dataset.tab;
      document.querySelectorAll(".auth-tab").forEach(function (x) {
        x.classList.toggle("active", x === t);
      });
      var tabs = document.querySelector(".auth-tabs");
      if (tabs) tabs.setAttribute("data-active", which);
      var lf = document.getElementById("loginForm"),
        rf = document.getElementById("registerForm");
      if (lf) lf.style.display = which === "login" ? "block" : "none";
      if (rf) rf.style.display = which === "register" ? "block" : "none";
      var e1 = document.getElementById("loginError"),
        e2 = document.getElementById("regError");
      if (e1) e1.textContent = "";
      if (e2) e2.textContent = "";
    });
  });
  document.querySelectorAll(".login-tab").forEach(function (t) {
    t.addEventListener("click", function () {
      document.querySelectorAll(".login-tab").forEach(function (x) {
        x.classList.remove("active");
      });
      this.classList.add("active");
      var which = this.dataset.tab;
      var lf = document.getElementById("loginForm"),
        rf = document.getElementById("registerForm");
      if (lf) lf.style.display = which === "login" ? "block" : "none";
      if (rf) rf.style.display = which === "register" ? "block" : "none";
    });
  });
})();

var ADMIN_PASS_HASH = "";
(async function () {
  ADMIN_PASS_HASH = await sha256("ryanbubu67");
})();
var ADMIN_AUTHED = false;
function loadBoneOverrides() {
  try {
    var o = JSON.parse(localStorage.getItem("bionexus_bone_overrides") || "{}");
    Object.keys(o).forEach(function (id) {
      if (boneData[id]) Object.assign(boneData[id], o[id]);
    });
  } catch (e) {}
}
loadBoneOverrides();
window.toggleAdmin = function () {
  document.getElementById("adminModal").style.display = "flex";
};
window.closeAdmin = function () {
  document.getElementById("adminModal").style.display = "none";
};

var ADMIN_CUR = { sys: "osos", key: null };
var ADMIN_SCHEMA = {
  osos: [
    { id: "name", label: "Nume" },
    { id: "category", label: "Categorie" },
    { id: "type", label: "Tip" },
    { id: "description", label: "Descriere", area: 4 },
    { id: "articulations", label: "Articulații (separate prin virgulă)" },
    { id: "details", label: "Detalii suplimentare", area: 3 },
  ],
  muscular: [
    { id: "ro", label: "Nume (română)" },
    { id: "la", label: "Denumire latină" },
    { id: "group", label: "Grupă (cap / trunchi / sup / inf)" },
    { id: "origin", label: "Origine" },
    { id: "insert", label: "Inserție" },
    { id: "action", label: "Acțiune", area: 2 },
    { id: "nerv", label: "Inervație" },
    { id: "descr", label: "Descriere", area: 4 },
  ],
  extra: [
    { id: "ro", label: "Nume (română)" },
    { id: "la", label: "Denumire latină" },
  ],
};
function adminIsExtra(sys) {
  return ["nervous", "cardio", "respiratory", "digestive"].indexOf(sys) >= 0;
}
function adminSchemaFor(sys) {
  return ADMIN_SCHEMA[sys] || ADMIN_SCHEMA.extra;
}
function adminListStructures(sys) {
  if (sys === "osos")
    return Object.keys(boneData).map(function (id) {
      return { key: id, label: boneData[id].name || id };
    });
  if (sys === "muscular") {
    var M = window.__MUSCLE_DATA || {};
    return Object.keys(M).map(function (k) {
      return { key: k, label: M[k].ro || k };
    });
  }
  if (adminIsExtra(sys)) {
    var st = window.__extraStructures ? window.__extraStructures(sys) : [];
    return st.map(function (s) {
      return { key: s.pretty || s.display, label: s.display };
    });
  }
  return [];
}
function adminGetData(sys, key, createExtra) {
  if (sys === "osos") return boneData[key];
  if (sys === "muscular") return (window.__MUSCLE_DATA || {})[key];
  if (adminIsExtra(sys)) {
    var EN = window.__extraNames || {};
    if (!EN[key] && createExtra) EN[key] = { ro: "", la: "" };
    return EN[key] || { ro: "", la: "" };
  }
  return null;
}
function adminBuildFields(sys) {
  var fields = document.getElementById("adminFields");
  if (!fields) return;
  fields.innerHTML = adminSchemaFor(sys)
    .map(function (f) {
      var lbl = "<label>" + escapeHTML(f.label) + "</label>";
      if (f.area) return lbl + '<textarea id="adm_' + f.id + '" rows="' + f.area + '"></textarea>';
      return lbl + '<input type="text" id="adm_' + f.id + '" />';
    })
    .join("");
}
function adminPopulateStructures(sys, tries) {
  var list = adminListStructures(sys);
  var hint = document.getElementById("adminStructHint");
  if (!list.length && adminIsExtra(sys) && tries < 25) {
    if (hint) hint.textContent = "Se încarcă modelul...";
    setTimeout(function () {
      adminPopulateStructures(sys, tries + 1);
    }, 250);
    return;
  }
  if (hint) hint.textContent = list.length + " structuri disponibile";
  var sel = document.getElementById("adminStructSel");
  if (sel)
    sel.innerHTML = list
      .map(function (it) {
        return '<option value="' + escapeHTML(it.key) + '">' + escapeHTML(it.label) + "</option>";
      })
      .join("");
  adminLoadStruct();
}
function adminPickSystem() {
  var sys = document.getElementById("adminSysSel").value;
  ADMIN_CUR.sys = sys;
  var structRow = document.getElementById("adminStructRow");
  var fields = document.getElementById("adminFields");
  var promptWrap = document.getElementById("adminPromptWrap");
  if (sys === "ai") {
    if (structRow) structRow.style.display = "none";
    if (fields) fields.style.display = "none";
    if (promptWrap) promptWrap.style.display = "block";
    var pt = document.getElementById("adminPromptText");
    if (pt)
      pt.value =
        window.AI_SYSTEM_PROMPT ||
        (typeof AI_SYSTEM_PROMPT !== "undefined" ? AI_SYSTEM_PROMPT : "");
    return;
  }
  if (structRow) structRow.style.display = "";
  if (fields) fields.style.display = "";
  if (promptWrap) promptWrap.style.display = "none";
  if (adminIsExtra(sys) && window.__extraInit) {
    try {
      window.__extraInit(sys);
    } catch (e) {}
  }
  adminBuildFields(sys);
  adminPopulateStructures(sys, 0);
}
function adminLoadStruct() {
  var sys = ADMIN_CUR.sys;
  var sel = document.getElementById("adminStructSel");
  if (!sel) return;
  ADMIN_CUR.key = sel.value;
  var data = adminGetData(sys, sel.value, false) || {};
  adminSchemaFor(sys).forEach(function (f) {
    var el = document.getElementById("adm_" + f.id);
    if (el) el.value = data[f.id] != null ? data[f.id] : "";
  });
}
window.adminLogin = async function () {
  var p = document.getElementById("adminPass").value;
  var h = await sha256(p);
  var err = document.getElementById("adminErr");
  if (h !== ADMIN_PASS_HASH) {
    err.textContent = t("err.adminPass");
    return;
  }
  ADMIN_AUTHED = true;
  err.textContent = "";
  document.getElementById("adminAuth").style.display = "none";
  document.getElementById("adminEditor").style.display = "block";
  var sysSel = document.getElementById("adminSysSel");
  sysSel.innerHTML = [
    ["osos", "Sistem Osos — oase"],
    ["muscular", "Sistem Muscular — mușchi"],
    ["nervous", "Sistem Nervos"],
    ["cardio", "Sistem Cardiovascular"],
    ["respiratory", "Sistem Respirator"],
    ["digestive", "Sistem Digestiv"],
    ["ai", "Asistent AI — prompt sistem"],
  ]
    .map(function (o) {
      return '<option value="' + o[0] + '">' + o[1] + "</option>";
    })
    .join("");
  sysSel.onchange = adminPickSystem;
  var structSel = document.getElementById("adminStructSel");
  if (structSel) structSel.onchange = adminLoadStruct;
  adminPickSystem();
};
window.adminSave = function () {
  if (!ADMIN_AUTHED) return;
  var sys = ADMIN_CUR.sys;
  if (sys === "ai") {
    var txt = document.getElementById("adminPromptText").value;
    window.AI_SYSTEM_PROMPT = txt;
    try {
      AI_SYSTEM_PROMPT = txt;
    } catch (e) {}
    localStorage.setItem("bionexus_ai_prompt", txt);
    alert("Prompt-ul AI a fost salvat și aplicat.");
    return;
  }
  var sel = document.getElementById("adminStructSel");
  var key = sel ? sel.value : null;
  if (!key) return;
  var data = adminGetData(sys, key, true);
  if (!data) return;
  var patch = {};
  adminSchemaFor(sys).forEach(function (f) {
    var el = document.getElementById("adm_" + f.id);
    if (el) {
      data[f.id] = el.value;
      patch[f.id] = el.value;
    }
  });
  var lsKey = sys === "osos" ? "bionexus_bone_overrides" : "bionexus_overrides_" + sys;
  var ov = {};
  try {
    ov = JSON.parse(localStorage.getItem(lsKey) || "{}");
  } catch (e) {}
  ov[key] = patch;
  localStorage.setItem(lsKey, JSON.stringify(ov));
  if (adminIsExtra(sys) && window.__extraBuildList) {
    try {
      window.__extraBuildList(sys);
    } catch (e) {}
  }
  adminPopulateStructures(sys, 99);
  if (sel) sel.value = key;
  alert("Salvat: " + (patch.name || patch.ro || key));
};
window.adminExport = function () {
  if (!ADMIN_AUTHED) return;
  var sys = ADMIN_CUR.sys;
  var payload;
  if (sys === "ai") payload = { ai_prompt: window.AI_SYSTEM_PROMPT || AI_SYSTEM_PROMPT };
  else if (sys === "osos") payload = boneData;
  else if (sys === "muscular") payload = window.__MUSCLE_DATA;
  else payload = window.__extraNames;
  var blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "bionexus-" + sys + ".json";
  a.click();
};
window.adminReset = function () {
  if (!ADMIN_AUTHED) return;
  var sys = ADMIN_CUR.sys;
  if (!confirm("Resetezi conținutul pentru „" + sys + "” la valorile implicite?")) return;
  if (sys === "ai") localStorage.removeItem("bionexus_ai_prompt");
  else if (sys === "osos") localStorage.removeItem("bionexus_bone_overrides");
  else localStorage.removeItem("bionexus_overrides_" + sys);
  location.reload();
};

function applyStoredOverrides() {
  try {
    var m = JSON.parse(localStorage.getItem("bionexus_overrides_muscular") || "{}");
    var MD = window.__MUSCLE_DATA;
    if (MD)
      Object.keys(m).forEach(function (k) {
        if (MD[k]) Object.assign(MD[k], m[k]);
      });
  } catch (e) {}
  ["nervous", "cardio", "respiratory", "digestive"].forEach(function (sys) {
    try {
      var o = JSON.parse(localStorage.getItem("bionexus_overrides_" + sys) || "{}");
      var EN = window.__extraNames;
      if (EN)
        Object.keys(o).forEach(function (k) {
          EN[k] = Object.assign(EN[k] || {}, o[k]);
        });
    } catch (e) {}
  });
  try {
    var p = localStorage.getItem("bionexus_ai_prompt");
    if (p) {
      window.AI_SYSTEM_PROMPT = p;
      try {
        AI_SYSTEM_PROMPT = p;
      } catch (e) {}
    }
  } catch (e) {}
}
if (document.readyState !== "loading") setTimeout(applyStoredOverrides, 500);
else
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(applyStoredOverrides, 500);
  });

window.toggleChatbox = function () {
  var btn = document.getElementById("chatboxToggle");
  var panel = document.getElementById("chatboxPanel");
  if (!btn || !panel) return;
  panel.classList.toggle("active");
  btn.classList.toggle("active");
  if (panel.classList.contains("active")) {
    setTimeout(function () {
      var inp = document.getElementById("chatInput");
      if (inp) inp.focus();
    }, 200);
  }
};
function addChatMessage(text, isUser) {
  var msgs = document.getElementById("chatMessages");
  if (!msgs) return;
  var div = document.createElement("div");
  div.className = "chat-msg " + (isUser ? "chat-user" : "chat-bot");
  var safe = isUser ? escapeHTML(text) : text;
  div.innerHTML = '<div class="chat-bubble">' + safe + "</div>";
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}
function addChatTyping() {
  var msgs = document.getElementById("chatMessages");
  if (!msgs) return;
  var div = document.createElement("div");
  div.className = "chat-msg chat-bot";
  div.id = "chatTypingIndicator";
  div.innerHTML =
    '<div class="chat-bubble chat-typing"><span></span><span></span><span></span></div>';
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}
function removeChatTyping() {
  var t = document.getElementById("chatTypingIndicator");
  if (t) t.remove();
}
function strip(s) {
  return s
    .toLowerCase()
    .replace(/[ăâîşț]/g, function (c) {
      return { ă: "a", â: "a", î: "i", ş: "s", ț: "t" }[c];
    })
    .replace(/[^a-z0-9 ]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

var SITE_KB = [
  {
    id: "guide.intro",
    triggers: [
      "cum folosesc|cum se foloseste|ghid|tutorial|ce pot face|inceput|incep|how to use|guide",
    ],
    answer:
      'Asistentul BioNexus te ghideaza:<br>1) <b>Schelet 3D</b> — card "Schelet 3D complet". Rotesti cu mouse-ul, zoom cu scroll, click pe os pentru detalii.<br>2) <b>Minigame</b> — card "Testul Anatomic". Identifici osul albastru.<br>3) <b>Invata</b> — manuale PDF.<br>4) <b>Insignele mele</b> — buton din homepage. Te duce la profilul tau dupa autentificare.',
    chips: [
      { a: "open-skeleton", label: "Deschide scheletul" },
      { a: "open-quiz", label: "Porneste quiz" },
      { a: "open-learn", label: "Vezi manuale" },
    ],
  },
  {
    id: "guide.skeleton",
    triggers: ["schelet 3d|scheletul 3d|modelul 3d|cum vad scheletul|deschide schelet|skeleton"],
    answer:
      "Scheletul 3D: rotesti cu click+drag, zoom cu scroll. Click pe un os → apare denumirea (rosu) langa cursor + detalii in dreapta. Lista cu 206 oase pe sectiuni.",
    chips: [{ a: "open-skeleton", label: "Deschide scheletul" }],
  },
  {
    id: "guide.quiz",
    triggers: ["cum pornesc quiz|cum incep quiz|cum joc|minigame|start quiz|test anatomic"],
    answer:
      'Minigame: cardul "Testul Anatomic" te duce direct in quiz. Dificultate (Usor/Mediu/Greu), camera pozitioneaza automat la fiecare os, alegi denumirea din 4 variante.',
    chips: [{ a: "open-quiz", label: "Porneste quiz" }],
  },
  {
    id: "guide.learn",
    triggers: ["unde gasesc|manuale|pdf|carti|materiale|invata|learn"],
    answer:
      "Sectiunea <b>Invata</b> are 6 carduri PDF: Biologie cls. VII, Anatomia omului, Atlas anatomic, Curs sistem osos, Articulatii & muschi, Fiziologia osului.",
    chips: [{ a: "open-learn", label: "Du-ma la manuale" }],
  },
  {
    id: "guide.search",
    triggers: ["\\bcaut\\b|cauta|search|gasi"],
    answer:
      'In scheletul 3D, bara de cautare in sidebar-ul stang — tastezi numele osului (ex. "femur") si site-ul il evidentiaza. Enter = focus camera.',
    chips: [{ a: "open-skeleton", label: "Du-ma la schelet" }],
  },
  {
    id: "guide.lang",
    triggers: [
      "\\blimba\\b|schimba limba|change language|\\bromana\\b|\\bengleza\\b|\\benglish\\b",
    ],
    answer: "Comutatorul <b>RO / EN</b> e in bara de navigare. Toate textele UI se traduc instant.",
    chips: [],
  },
  {
    id: "guide.account",
    triggers: [
      "\\bcont\\b|conturi|\\binregistrare\\b|\\bregister\\b|\\blogin\\b|\\bconectare\\b|\\bparola\\b|sign up",
    ],
    answer:
      "Buton <b>Conectare</b> din header. Te poti inregistra cu utilizator+email+parola (min. 4 caractere, criptata SHA-256). Date doar local.",
    chips: [{ a: "open-login", label: "Conecteaza-te" }],
  },
  {
    id: "guide.admin",
    triggers: ["\\badmin\\b|administrator|edit os|modifica os|content edit"],
    answer:
      "Modul Administrator iti permite sa editezi continutul (nume, categorii, descrieri) si sa exporti JSON. Accesul e restrictionat prin parola si e destinat doar autorilor proiectului.",
    chips: [],
  },
  {
    id: "guide.systems",
    triggers: [
      "\\bsistem\\b|sisteme|muscular|nervos|cardiovascular|digestiv|respirator|roadmap|in curand|in dezvoltare",
    ],
    answer:
      'BioNexus acopera anatomie umana in etape:<br>· <b>Sistem Osos</b> — <span style="color:#10b981">disponibil</span> (206 oase, quiz, structura).<br>· <b>Muscular</b> — in dezvoltare.<br>· <b>Nervos, Cardiovascular, Digestiv, Respirator</b> — planificate.',
    chips: [{ a: "open-skeleton", label: "Sistem osos acum" }],
  },
  {
    id: "bio.cell",
    triggers: ["celula|cellule|cell|celulele"],
    answer:
      "Celula este unitatea de baza a vietii. Componente: <b>membrana plasmatica</b>, <b>citoplasma</b>, <b>nucleu</b> (cu ADN), <b>organite</b> (mitocondrii, ribozomi, RE, Golgi, lizozomi). Corpul are ~30 trilioane de celule.",
  },
  {
    id: "bio.adn",
    triggers: ["adn|dna|gene|cromozomi|genetic"],
    answer:
      "ADN-ul e dublul helix cu codul genetic. Nucleotide (A, T, G, C). Oamenii: <b>23 perechi de cromozomi</b> (46 total), ~<b>20.000-25.000 gene</b>. Genomul ~3 miliarde de perechi de baze.",
  },
  {
    id: "bio.sange",
    triggers: ["sange|sange|blood|globule|plasma|hematie|leucocit|trombocit"],
    answer:
      "Sangele e tesut conjunctiv lichid. <b>Plasma</b> 55%, <b>globule rosii</b> (eritrocite — O₂, hemoglobina), <b>globule albe</b> (leucocite — imunitate), <b>trombocite</b> (coagulare). Adultul: 4.5-6L.",
  },
  {
    id: "bio.inima",
    triggers: ["inima|inimii|heart|cord|miocard"],
    answer:
      "Inima are 4 camere: <b>2 atrii + 2 ventricule</b>. ~70-80 bpm in repaus, pompeaza ~5L/min. Valve: tricuspida, mitrala, pulmonara, aortica. Tesut: miocard.",
  },
  {
    id: "bio.plamani",
    triggers: ["plaman|plaman|plamani|plamani|lung|alveol|respiratie|respiratie"],
    answer:
      "<b>Plaman drept (3 lobi)</b>, <b>stang (2 lobi)</b>. Schimb gazos in alveole (~300 milioane, ~70 m²). Inspiratie: diafragm coboara; expiratie: CO₂ iese. 12-20 respiratii/min.",
  },
  {
    id: "bio.creier",
    triggers: ["creier|brain|neuron|encephal|cortex"],
    answer:
      "Creierul: ~<b>86 miliarde neuroni</b>. <b>Cerebrul</b> (gandire), <b>cerebelul</b> (echilibru), <b>trunchiul cerebral</b> (functii vitale). Cortex: 4 lobi. Greutate: ~1.4 kg.",
  },
  {
    id: "bio.muschi",
    triggers: ["muschi|muschi|muscle|muscular|tendon|contractie"],
    answer:
      "Corpul are ~<b>600 muschi</b>. <b>Scheletici</b> (voluntari, striati), <b>netezi</b> (involuntari), <b>cardiac</b>. Cel mai mare: gluteus maximus. Cel mai puternic: maseterul.",
  },
  {
    id: "bio.piele",
    triggers: ["piele|skin|derm|epiderm|tegument"],
    answer:
      "Pielea: cel mai mare organ (~2 m², ~5 kg). <b>Epiderm</b>, <b>derm</b>, <b>hipoderm</b>. Functii: protectie, termoreglare, vit. D, percep. tactila. Reinnoire la ~28 zile.",
  },
  {
    id: "bio.ochi",
    triggers: ["ochi|eye|vedere|retina|cornee|cristalin|pupil"],
    answer:
      "Ochiul: cornee → pupila → cristalin → retina. <b>Conuri</b> (culori) si <b>bastonase</b> (lumina slaba). Nerv optic la cortex occipital.",
  },
  {
    id: "bio.ureche",
    triggers: ["ureche|ear|auz|cohlee|timpan"],
    answer:
      "<b>Externa</b> (pavilion), <b>medie</b> (timpan + ciocan, nicovala, scarita), <b>interna</b> (cohlee, vestibul). Oscioarele amplifica sunetul de 22 ori.",
  },
  {
    id: "bio.rinichi",
    triggers: ["rinichi|kidney|renal|urinar|nefron"],
    answer:
      "2 rinichi (~150g). <b>Nefronul</b> (~1 milion/rinichi). Filtreaza ~180L sange/zi, ~1.5-2L urina. Regleaza tensiune, pH, electroliti, eritropoietina.",
  },
  {
    id: "bio.ficat",
    triggers: ["ficat|liver|hepatic|bila"],
    answer:
      "Ficatul (~1.5 kg) — cel mai mare organ intern. <b>Detoxifiere, sinteza proteine, bila, glicogen</b>. Singurul organ care se regenereaza substantial.",
  },
  {
    id: "bio.stomac",
    triggers: ["stomac|stomach|gastric|aciditate"],
    answer:
      "Stomacul (50ml-1.5L) — punga musculara. <b>HCl</b> (pH 1.5-3.5) + <b>pepsina</b> digera proteinele. Mucus protector. Digestie 2-4 ore.",
  },
  {
    id: "bio.intestin",
    triggers: ["intestin|intestine|duoden|jejun|ileon|colon"],
    answer:
      "<b>Subtire</b> (~6-7m): duoden, jejun, ileon — 90% absorbtie nutrienti (vilozitati, ~250 m²). <b>Gros</b> (~1.5m): cec, colon, rect — apa. Microbiom: trilioane de bacterii.",
  },
  {
    id: "bio.hormoni",
    triggers: ["hormon|endocrin|insulina|tiroida|adrenalina|cortizol"],
    answer:
      "Endocrin: <b>hipofiza</b> (master), <b>tiroida</b> (metabolism), <b>suprarenale</b> (cortizol), <b>pancreas</b> (insulina), <b>gonade</b> (sex). Hormonii prin sange.",
  },
  {
    id: "bio.imun",
    triggers: ["imun|imunitate|imunitar|anticorp|limfa|virus"],
    answer:
      "Imunitate: <b>innascuta</b> (piele, fagocite) + <b>dobandita</b> (limfocite T, B, anticorpi). Organe: maduva osoasa, timus, splina, ganglioni. Vaccinarea invata recunoasterea.",
  },
  {
    id: "bio.amuzant",
    triggers: ["fapt|stiai|did you know|amuzant|fun|curios|interesant"],
    answer:
      "Fapte: 🦴 La nastere ~270 oase, scade la 206. 🧠 Creierul foloseste 20% energie. ❤️ Inima pompeaza ~7000L/zi. 🩸 Vasele = de 2,5 ori Pamantul. 👅 Limba e cel mai puternic muschi/marime.",
  },
  {
    id: "bio.imc",
    triggers: ["imc|bmi|indice masa"],
    answer:
      "IMC = greutate (kg) / inaltime² (m). <b>&lt; 18.5</b> subponderal · <b>18.5-24.9</b> normal · <b>25-29.9</b> supraponderal · <b>≥ 30</b> obezitate. Orientativ.",
  },
];

function closeChatPanelTemp() {
  var p = document.getElementById("chatboxPanel"),
    b = document.getElementById("chatboxToggle");
  if (p && p.classList.contains("active")) {
    p.classList.remove("active");
    b.classList.remove("active");
  }
}
window.runChatAction = function (action) {
  if (!action) return;
  if (action === "open-skeleton") {
    closeChatPanelTemp();
    enterApp("skeleton");
    return "OK, te duc la scheletul 3D.";
  }
  if (action === "open-quiz") {
    closeChatPanelTemp();
    enterApp("quiz");
    return "Pornim quiz-ul!";
  }
  if (action === "open-learn") {
    if (typeof showHome === "function") showHome();
    setTimeout(function () {
      var s = document.getElementById("invata");
      if (s) s.scrollIntoView({ behavior: "smooth" });
    }, 120);
    return "Te duc la manuale.";
  }
  if (action === "open-login") {
    if (typeof showHome === "function") showHome();
    setTimeout(openLogin, 120);
    return "Deschid fereastra de conectare.";
  }
  if (action === "open-home") {
    if (typeof showHome === "function") showHome();
    return "Inapoi acasa.";
  }
  if (action.indexOf("ask:") === 0) {
    var q = action.slice(4);
    var inp = document.getElementById("chatInput");
    if (inp) {
      inp.value = q;
      window.sendChat();
    }
    return null;
  }
  return null;
};
document.addEventListener("click", function (e) {
  var chip = e.target.closest && e.target.closest(".chat-chip");
  if (!chip) return;
  var action = chip.getAttribute("data-chat-action");
  var msg = runChatAction(action);
  if (msg) addChatMessage(msg, false);
});

function kbLookup(q) {
  for (var i = 0; i < SITE_KB.length; i++) {
    var entry = SITE_KB[i];
    for (var j = 0; j < entry.triggers.length; j++) {
      if (new RegExp(entry.triggers[j]).test(q)) {
        var html = entry.answer;
        if (entry.chips && entry.chips.length) {
          html +=
            '<div class="chat-chips" style="margin-top:8px">' +
            entry.chips
              .map(function (c) {
                return (
                  '<button class="chat-chip" data-chat-action="' +
                  escapeHTML(c.a) +
                  '">' +
                  escapeHTML(c.label) +
                  "</button>"
                );
              })
              .join("") +
            "</div>";
        }
        return html;
      }
    }
  }
  return null;
}

function chatbotReply(input) {
  var q = strip(input);
  if (
    /curiozit|stiai|fapt interesant|spune mi ceva|surprinde ma|fun fact|did you know|tell me something|amazing/i.test(
      q
    ) &&
    typeof CURIOZITATI !== "undefined" &&
    CURIOZITATI.length
  ) {
    var fact = CURIOZITATI[Math.floor(Math.random() * CURIOZITATI.length)];
    return (
      "<b>" +
      (typeof CUR_LANG !== "undefined" && CUR_LANG === "en" ? "Did you know?" : "Știai că...") +
      "</b><br><br>" +
      fact +
      '<br><br><i style="color:#94a3b8;font-size:11px">Scrie din nou „curiozitate" pentru alta!</i>'
    );
  }
  var kb = kbLookup(q);
  if (kb) return kb;
  if (/cum te numesti|nume tau|cum te cheama/.test(q))
    return "Sunt <b>BioNexus AI</b>, asistentul biologic al platformei.";
  if (/cat este ceasul|ora|cat e ceasul/.test(q)) {
    var d = new Date();
    return "Acum este <b>" + d.toLocaleTimeString("ro-RO") + "</b>.";
  }
  if (/ce data|ce zi|astazi/.test(q)) {
    var d2 = new Date();
    return (
      "Azi e <b>" +
      d2.toLocaleDateString("ro-RO", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }) +
      "</b>."
    );
  }
  var imcSrc = String(input || "").toLowerCase();
  var imcMatch =
    imcSrc.match(/imc[^0-9]*([0-9]+(?:[\.,][0-9]+)?)[^0-9]+([0-9]+(?:[\.,][0-9]+)?)/) ||
    imcSrc.match(/([0-9]+(?:[\.,][0-9]+)?)\s*kg[^0-9]+([0-9]+(?:[\.,][0-9]+)?)\s*(?:cm|m)/);
  if (imcMatch) {
    var w = parseFloat(imcMatch[1].replace(",", "."));
    var h = parseFloat(imcMatch[2].replace(",", "."));
    if (h > 3) h = h / 100;
    if (w > 0 && h > 0) {
      var bmi = w / (h * h);
      var cat =
        bmi < 18.5 ? "subponderal" : bmi < 25 ? "normal" : bmi < 30 ? "supraponderal" : "obezitate";
      return (
        "IMC = " +
        w +
        " / " +
        h.toFixed(2) +
        "² = <b>" +
        bmi.toFixed(1) +
        "</b> → <b>" +
        cat +
        "</b>."
      );
    }
  }
  if (/^(salut|buna|hello|hi|hey|hallo)/.test(q)) return "Salut! Cu ce te pot ajuta?";
  if (/multumes|mersi|thanks/.test(q)) return "Cu placere!";
  if (/cate oase|numar.*oase|how many bone/.test(q))
    return "Corpul are <b>206 oase</b>. La nastere ~270, multe se sudeaza.";
  if (/cati dinti|numar.*dinti/.test(q))
    return "Adult: <b>32 dinti</b>. 8 incisivi, 4 canini, 8 premolari, 12 molari.";
  if (/cate coaste|coaste cate/.test(q))
    return "Avem <b>12 perechi coaste</b>. 7 adevarate, 3 false, 2 flotante.";
  if (/cele mai mari|cel mai mare os/.test(q))
    return "Cel mai mare os: <b>femurul</b>. ~27% din inaltime.";
  if (/cel mai mic|cele mai mici/.test(q))
    return "Cele mai mici: <b>oscioarele urechii medii</b> — scarita are 3 mm.";
  var allBones = Object.keys(boneData);
  for (var i = 0; i < allBones.length; i++) {
    var id = allBones[i];
    var d = boneData[id];
    if (!d) continue;
    var nameStrip = strip(d.name);
    if (q.indexOf(nameStrip) >= 0 || q.indexOf(strip(id)) >= 0) {
      var html = "<b>" + d.name + "</b> (" + d.category + ").<br>" + d.description;
      if (d.articulations) html += "<br><br><b>Articulatii:</b> " + d.articulations;
      return html;
    }
  }
  if (/articulati/.test(q))
    return "Articulatiile: fibroase (suturi craniu), cartilaginoase (vertebre), sinoviale (genunchi, umar).";
  if (/maduva/.test(q))
    return "<b>Maduva rosie</b> (in oasele spongioase, hematopoieza) si <b>maduva galbena</b> (in canalul medular, tesut adipos).";
  if (/periost/.test(q))
    return "Periostul: membrana conjunctiva externa. Strat fibros + osteogen (crestere, reparare).";
  if (/help|ajut/.test(q))
    return "Pot raspunde la intrebari despre: <b>oase</b> (orice os specific), <b>articulatii</b>, <b>muschi</b>, <b>organe interne</b>, <b>sistemul nervos</b>, <b>cardiovascular</b>, <b>endocrin</b>, <b>termeni anatomici</b> (anterior, sagital etc.), <b>cazuri clinice</b> (fracturi, hernie disc). Sursa: <b>Anatomia Omului - Stefanet</b> (3 volume).";
  return 'Nu am inteles complet intrebarea. Incearca cuvinte cheie din anatomie — ex: <i>"vertebre"</i>, <i>"femur"</i>, <i>"cvadriceps"</i>, <i>"valve inima"</i>, <i>"nervi cranieni"</i>, <i>"insulele Langerhans"</i>.<div class="chat-chips" style="margin-top:8px"><button class="chat-chip" data-chat-action="ask:Care sunt sursele tale?">Sursele mele</button><button class="chat-chip" data-chat-action="open-skeleton">Schelet 3D</button><button class="chat-chip" data-chat-action="open-learn">Manuale PDF</button></div>';
}


var AI_SYSTEM_PROMPT =
  'Ești **BioNexus AI**, asistentul biologic și anatomic integrat în platforma educațională BioNexus — o aplicație web de anatomie umană 3D. Ești un tutore cald, încurajator, precis și răbdător: explici clar, pas cu pas, și îl faci pe utilizator să se simtă capabil să învețe. Ești în același timp expert în anatomie/biologie ȘI ghid al aplicației BioNexus.\n\n## REGULI FUNDAMENTALE\n\n**Limbă:** Răspunde ÎNTOTDEAUNA în aceeași limbă în care scrie utilizatorul. Dacă scrie în română → răspunzi în română; dacă scrie în engleză → răspunzi în engleză. Implicit română. Nu comuta limba de la un mesaj la altul decât dacă o face utilizatorul.\n\n**Domeniu (scope):** Ești specializat în (1) anatomia umană și biologie — mai ales sistemele din aplicație: osos, muscular, nervos, cardiovascular, respirator, digestiv — și (2) folosirea platformei BioNexus. Dacă ți se pune o întrebare complet în afara acestor domenii, readu blând discuția spre anatomie/biologie/aplicație, dar rămâi util și scurt (poți răspunde pe scurt, apoi propune ceva relevant din BioNexus).\n\n**Format:** Răspunsurile apar într-o bulă de chat mică ce randează markdown de bază. Fii **concis și ușor de scanat**: propoziții scurte, **bold** (dublu asterisc) pentru termenii-cheie, liste scurte cu liniuțe, treceri la linie nouă. Evită pereții mari de text. NU produce niciodată HTML brut, script-uri sau tabele complexe.\n\n**Onestitate despre funcții:** Nu inventa funcții care nu există. Dacă nu ești sigur de un detaliu exact din interfață, descrie calea generală („din meniul de sus…", „din cardul…"). Folosește etichetele reale de UI de mai jos.\n\n**Încurajează folosirea aplicației:** Când e relevant, îndeamnă utilizatorul să exploreze modelul 3D sau o funcție (ex: „poți vedea asta în modelul 3D — deschide **Sistemul Osos** și caută osul în lista din stânga").\n\n## IDENTITATE\nLa întrebări de tip „cine ești / cum te numești": „Sunt **BioNexus AI**, asistentul biologic al platformei BioNexus." Poți spune că ajuți atât cu anatomie, cât și cu folosirea site-ului.\n\n---\n\n# CUNOAȘTEREA APLICAȚIEI BIONEXUS\n\n## Pagina principală (Acasă)\nBara de sus are: logo **BioNexus** (click → sus), linkuri **Sisteme**, **Funcționalități**, **Învață**, comutator limbă **RO/EN**, buton **Conectare** (sau meniul utilizatorului după logare). Secțiuni, de sus în jos: Hero → Provocarea zilei (vizibilă doar logat) → **Sisteme anatomice** → **Funcționalități** → **Învață** → **Recenzii** → footer. Un **chatbox flotant** (asta ești tu) stă în colțul dreapta-jos pe orice ecran.\n\n## Cele 6 sisteme anatomice și cum le deschizi\nDin secțiunea **Sisteme anatomice**, apeși pe cardul dorit (sau butonul **„Vezi modele 3D"** din hero te duce acolo):\n- **Sistem Osos** — *Disponibil acum* — 206 oase modelate 3D.\n- **Sistem Muscular** — *Disponibil acum* — peste 350 mușchi.\n- **Sistem Nervos** — *Disponibil acum* — creier (emisfere, cerebel, trunchi cerebral), măduva spinării (pe regiuni) și nervii periferici.\n- **Sistem Cardiovascular** — *Disponibil acum* — inimă, artere, vene.\n- **Sistem Respirator** — *Disponibil acum* — căi aeriene, plămâni, laringe.\n- **Sistem Digestiv** — *Disponibil acum* — cavitate bucală, esofag, stomac, ficat, pancreas & vezică biliară, intestin subțire și gros, limbă.\n\nSe pot deschide toate cele 6 sisteme (osos, muscular, nervos, cardiovascular, respirator, digestiv). Ca să revii Acasă: butonul **„← Înapoi"** din antet (păstrează poziția) sau click pe logo/**BioNexus** (te duce sus).\n\n## Interacțiunea cu modelul 3D (identică în toate sistemele)\n- **Rotire:** click stânga + trage mouse-ul.\n- **Zoom:** rotița mouse-ului (scroll).\n- **Deplasare (pan):** click dreapta + trage.\n- Pe telefon: un deget rotește, două degete zoom/pan.\n- **Selectare structură:** click stânga pe ea → se colorează, apare numele lângă cursor și se completează panoul de **Informații** din dreapta. Click în gol = deselectează.\n- **Hover:** trecerea cursorului evidențiază structura (numele apare doar la click, nu la hover).\n- **Lista din stânga:** structuri grupate în acordeoane, cu **căutare** (🔍) în timp real; **Enter** selectează prima potrivire. La oase, butonul **🔍 (lupă)** de lângă os selectează ȘI apropie camera.\n- **Tab-uri de filtrare** (bara de sus): la schelet — **Toate Oasele · Scheletul Capului · Scheletul Trunchiului · Membre Superioare · Membre Inferioare**; la mușchi — **Toți Mușchii · Cap & Gât · Trunchi · Membre Superioare · Membre Inferioare**.\n- **Butoane viewer** (dreapta-jos): **↺ Resetează camera**; la schelet și butoane de ascundere a panoului de oase / de informații.\n- Panoul de info: la oase — **Categorie, Tip, Descriere, Articulații, Detalii**; la mușchi — **Denumire, Denumire științifică** (latină), **Descriere, Origine, Inserție, Acțiune, Inervație**; la sistemele nervos, cardiovascular și respirator — **Structură, Denumire științifică, Sistem, Grupă**. Toate structurile au **nume românesc + nume latin**.\n\n## Quiz / Minigame: „Testul Anatomic"\nÎl pornești din cardul **„Minigame: Testul Anatomic"** (buton **„Începe minigame →"**) sau din chip-ul **„Pornește quiz"** al meu.\n1. **Alegi sistemul:** oricare dintre cele 6 — **Osos, Muscular, Nervos, Cardiovascular, Respirator, Digestiv** (fiecare cu întrebări vizuale „Identifică structura" și de cunoștințe RO↔latină).\n2. **Alegi tipul de test:**\n   - **Identifică Osul / Mușchiul** (vizual) — structura e evidențiată cu albastru, alegi numele din 4 variante.\n   - **Test de Cunoștințe** — despre descrieri, articulații, detalii (osos), sau origine/inserție/acțiune/inervație (muscular). La Greu, întrebări din manualele Ștefaneț.\n   - **AI Duel** (doar sistemul osos) — afirmații **ADEVĂRAT/FALS**, unele cu greșeli subtile, cu explicație după răspuns.\n3. **Dificultate:** **Ușor** (fără timer), **Mediu** (timer 25s; Duel 12s), **Greu** (timer 18s; Duel 8s). Dacă timpul expiră, testul se ratează.\n4. **Întrebări:** ~10 (osos), până la 12 (muscular/Duel Greu). +1 punct per răspuns corect; „Sare peste" = greșit.\n5. **Rezultat & medalii:** 100% 🏆 PERFECT · ≥90% 🥇 Aur · ≥70% 🥈 Argint · ≥50% 🥉 Bronz · <50% 📚 Continuă să înveți. Butonul **„Încearcă din nou"** te readuce la alegerea sistemului. **× „Ieși din minigame"** te scoate Acasă.\n6. **XP:** scor × multiplicator (**Ușor ×10, Mediu ×20, Greu ×35**), +5 XP bonus la prima activitate a zilei.\n\n## Profil, XP, niveluri, insigne\n- Deschizi profilul din **meniul utilizatorului** (dreapta-sus) → **Profil** / **Setări**, sau butonul **„Insignele mele"** din hero. Trebuie să fii conectat.\n- **Nivel:** crește cu rădăcina pătrată a XP: `nivel = floor(√(XP/30)) + 1`. Praguri: nivel 2 la **30** XP, nivel 3 la **120**, nivel 4 la **270**, nivel 5 la **480** XP.\n- **Cum câștigi XP:** os nou văzut **+5**, mușchi nou **+2**, secțiune nouă vizitată **+10**, folosirea chatbotului **+2**, zi nouă activă **+5**, quiz finalizat (scor × multiplicator), provocarea zilnică (**+15…+55**).\n- **Insigne:** **26 în total** (16 generale + 10 pe moduri de quiz). Contorul arată „X / 26". **PARTENER** 🤝 se deblochează automat la crearea contului. Alte exemple: **PIONIER** (primul quiz), **EXPLORATOR** (50 oase), **ANATOMIST/CHIRURG/LEGENDĂ** (quiz perfect Ușor/Mediu/Greu), **MENTOR** (10 întrebări AI), **CONSTANT** (7 zile la rând), **MIOLOG/SARCOMER** (muscular). Le vezi la **Profil → INSIGNELE MELE**.\n- **Provocarea zilei:** card cu 🔥 streak, task zilnic, bară progres și recompensă XP; o singură provocare pe zi, streak-ul se rupe dacă sari o zi.\n\n## Notebook (Notițe & Marcaje)\nDin cardul **„Notițe & Marcaje"** (**„Deschide notebook →"**). Modalul **„Notebook BioNexus"** 📝: cauți în notițe, filtrezi (**Toate · ⭐ Importante · 🦴 Oase · 💪 Mușchi**) și pe tag-uri. Butonul **„+ Notiță nouă"** deschide editorul: **Titlu, Categorie** (Os/Mușchi/General), **Subiect, Conținut, Tag-uri, Culoare** și **„Marchează ca important ⭐"**. Din panoul de info al unui os/mușchi există butonul **„📝 Adaugă notiță"** care pre-completează. Notițele se salvează **local** pe browser, separat pentru fiecare cont.\n\n## Cont: Conectare / Înregistrare\n- Autentificarea se face cu **adresa de email** (nu username). La înregistrare, parola trebuie să aibă **minim 8 caractere**, plus acord la Termeni și o verificare (captcha).\n- Ai uitat parola? Linkul **„Ai uitat parola?"** din ecranul de Conectare trimite email de resetare.\n- Din meniul utilizatorului: **Profil, Setări, Deloghează-te**.\n\n## Alte funcții\n- **Curiozități:** cardul **„Curiozități"** (**„Vezi o curiozitate →"**) sau scrie-mi „curiozitate" / „știai" / „fun fact" → îți dau un fapt anatomic aleator (fără repetiții).\n- **Calculator IMC:** scrie-mi direct, ex. **„imc 70 1.80"** (sau „70 kg 180 cm"). Formula: **IMC = greutate / înălțime²**. Categorii: **<18.5** subponderal · **18.5–24.9** normal · **25–29.9** supraponderal · **≥30** obezitate.\n- **Învață (manuale):** secțiunea **„Învață"** are 3 manuale oficiale care se deschid în filă nouă: **Anatomia Omului · Vol. I** (osteologie/artrologie/miologie), **Vol. II** (splanhnologie) și **Vol. III** (cardiovascular/nervos/organe de simț) de **Ștefaneț**.\n- **Recenzii:** poți lăsa o recenzie (1–5 stele, min. 10 caractere) după ce te conectezi; o singură recenzie per utilizator.\n- **Teme:** din **Setări → THEME** alegi **Light / Dark / System / Custom** (implicit Dark).\n- **Limbă:** butoanele **RO / EN** din bara de navigare comută tot textul instant.\n\n---\n\n# CUNOAȘTEREA ANATOMICĂ\n\nAi acces la date detaliate, cu **nume românesc + nume latin**. Sursa citată a platformei: **Anatomia Omului – Ștefaneț (3 volume)**.\n\n## Oase (scheletul de 206 oase)\nGrupat pe: **Scheletul Capului** (Neurocraniul 8 oase: frontal, parietal ×2, temporal ×2, occipital, sfenoid, etmoid; Viscerocraniul 14 oase: maxilar ×2, mandibulă, zigomatic, nazal, lacrimal, palatin, vomer, cornete + cei 32 de dinți), **Scheletul Trunchiului** (coloana: 7 cervicale C1–C7 cu Atlas/Axis, 12 toracice, 5 lombare, sacrum, coccis; cutia toracică: stern, 7 perechi coaste adevărate, 3 false, 2 flotante), **Membre Superioare** (claviculă, scapulă, humerus, radius, ulna, 8 carpiene, 5 metacarpiene, 14 falange), **Membre Inferioare** (os coxal, femur, patelă, tibie, fibulă, 7 tarsiene, 5 metatarsiene, 14 falange). Pentru fiecare os poți da: **categorie, tip, descriere funcțională, articulații, detalii**.\n\n## Mușchi\nPeste 350 de mușchi modelați; date detaliate pentru mușchii majori pe 4 grupe (cap & gât, trunchi, membre superioare, membre inferioare), cu **nume RO + latin, origine, inserție, acțiune, inervație** (cu rădăcini spinale). Ex.: **sternocleidomastoidian, maseter** (cel mai puternic masticator), **trapez, pectoral mare, drept abdominal, biceps/triceps brahial, deltoid, latissimus dorsi, fesier mare** (cel mai voluminos mușchi), **cvadriceps** (cel mai mare grup), **croitor/sartorius** (cel mai lung mușchi), **gastrocnemian/solear** (tendonul lui Ahile).\n\n## Cardiovascular / Nervos / Respirator (nume RO + latin)\n- **Cardiovascular:** Aortă (Aorta), Trunchi pulmonar, valve (aortică/mitrală/tricuspidă/pulmonară), Venă cavă superioară/inferioară, artere/vene regionale (carotidă, femurală, renală, iliacă…), apexul cordului.\n- **Nervos:** Creier/encefal (Encephalon), Bulbul olfactiv (Bulbus olfactorius), Măduva spinării (Medulla spinalis), meningele spinale, nervii olfactivi.\n- **Respirator:** Trahee (Trachea), Plămân drept/stâng (Pulmo dexter/sinister), bronhii principale, Diafragm, cartilaje laringiene (tiroid, cricoid, aritenoid, epiglotic…), os hioid.\n\n## Fapte anatomice rapide (răspunsuri scurte și sigure)\n- **Oase:** **206** la adult (~270 la naștere, multe se sudează).\n- **Dinți:** **32** la adult (8 incisivi, 4 canini, 8 premolari, 12 molari).\n- **Coaste:** **12 perechi** (7 adevărate, 3 false, 2 flotante).\n- **Cel mai mare os:** **femurul** (~27% din înălțime).\n- **Cel mai mic os:** **oscioarele urechii medii** — scărița are ~3 mm.\n- **Articulații:** fibroase (suturi craniu), cartilaginoase (vertebre), sinoviale (genunchi, umăr).\n- **Măduva osoasă:** **roșie** (hematopoieză) și **galbenă** (țesut adipos).\n- **Os hioid:** singurul os care nu se articulează direct cu alt os.\n\nCând răspunzi despre un os/mușchi/structură, oferă esențialul (nume RO + latin, funcție, câteva repere) și, dacă ajută, invită utilizatorul să exploreze structura în modelul 3D. Rămâi mereu cald, clar și la obiect.\n';
var AI_HISTORY = [];

function aiRuntimeContext() {
  var lg = typeof CUR_LANG !== "undefined" && CUR_LANG === "en" ? "en" : "ro";
  var mode = typeof window.APP_MODE !== "undefined" && window.APP_MODE ? window.APP_MODE : "home";
  var names = {
    home: "pagina principală (acasă)",
    skeleton: "Sistemul osos (schelet 3D)",
    muscular: "Sistemul muscular",
    cardio: "Sistemul cardiovascular",
    nervous: "Sistemul nervos",
    respiratory: "Sistemul respirator",
    quiz: "modul Quiz",
  };
  var sel = "";
  try {
    if (mode === "muscular" && window.__MU_REF && window.__MU_REF.selected)
      sel = window.__muPretty
        ? window.__muPretty(window.__MU_REF.selected.name)
        : window.__MU_REF.selected.name;
    else if (
      (mode === "cardio" || mode === "nervous" || mode === "respiratory" || mode === "digestive") &&
      window.__extraStates &&
      window.__extraStates[mode] &&
      window.__extraStates[mode].selected
    )
      sel = window.__extraStates[mode].selected.name || "";
  } catch (e) {}
  return (
    "CONTEXT CURENT AL APLICAȚIEI: limba interfeței=" +
    lg +
    "; utilizatorul se află acum în: " +
    (names[mode] || mode) +
    "." +
    (sel ? " Structura selectată: " + sel + "." : "") +
    " Adaptează sugestiile la acest context."
  );
}

function renderChatMarkdown(md) {
  var s = escapeHTML(String(md || "").replace(/\r\n/g, "\n"));
  s = s.replace(/```/g, "");
  s = s.replace(/`([^`]+)`/g, "<code>$1</code>");
  s = s.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>");
  s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<i>$2</i>");
  s = s.replace(/^\s*#{1,6}\s*(.+)$/gm, "<b>$1</b>");
  function isBullet(l) {
    return /^\s*[-*•]\s+/.test(l) || /^\s*\d+\.\s+/.test(l);
  }
  function stripBullet(l) {
    return l.replace(/^\s*[-*•]\s+/, "").replace(/^\s*\d+\.\s+/, "");
  }
  var lines = s.split("\n"),
    out = [],
    i = 0;
  while (i < lines.length) {
    var ln = lines[i];
    if (isBullet(ln)) {
      var items = [];
      while (i < lines.length) {
        if (isBullet(lines[i])) {
          items.push(stripBullet(lines[i]));
          i++;
        } else if (/^\s*$/.test(lines[i])) {
          var j = i;
          while (j < lines.length && /^\s*$/.test(lines[j])) j++;
          if (j < lines.length && isBullet(lines[j])) i = j;
          else break;
        } else break;
      }
      out.push(
        "<ul>" +
          items
            .map(function (t) {
              return "<li>" + t + "</li>";
            })
            .join("") +
          "</ul>"
      );
    } else if (/^\s*$/.test(ln)) {
      while (i < lines.length && /^\s*$/.test(lines[i])) i++;
    } else {
      var para = [];
      while (i < lines.length && !/^\s*$/.test(lines[i]) && !isBullet(lines[i])) {
        para.push(lines[i]);
        i++;
      }
      out.push("<p>" + para.join("<br>") + "</p>");
    }
  }
  return out.join("");
}

function addBotBubble() {
  var msgs = document.getElementById("chatMessages");
  if (!msgs) return null;
  var div = document.createElement("div");
  div.className = "chat-msg chat-bot";
  var bubble = document.createElement("div");
  bubble.className = "chat-bubble";
  div.appendChild(bubble);
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return bubble;
}

function aiConfigured() {

  return typeof fetch !== "undefined" && !!window.ReadableStream;
}

async function streamAI(messages, onDelta) {
  var cfg = window.BIONEXUS_AI || {};
  var direct = !!(cfg.apiKey && cfg.baseUrl);
  var url = direct ? cfg.baseUrl.replace(/\/+$/, "") + "/chat/completions" : "/api/chat";
  var headers = { "Content-Type": "application/json" };
  if (direct) headers.Authorization = "Bearer " + cfg.apiKey;
  var resp = await fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      model: (direct && cfg.model) || "gpt-5.4-mini",
      stream: true,
      temperature: 0.6,
      max_tokens: 900,
      messages: messages,
    }),
  });
  if (!resp.ok || !resp.body) {
    var t = "";
    try {
      t = await resp.text();
    } catch (e) {}
    throw new Error("HTTP " + resp.status + " " + t.slice(0, 120));
  }
  var reader = resp.body.getReader(),
    dec = new TextDecoder(),
    buf = "",
    full = "";
  while (true) {
    var r = await reader.read();
    if (r.done) break;
    buf += dec.decode(r.value, { stream: true });
    var parts = buf.split("\n");
    buf = parts.pop();
    for (var i = 0; i < parts.length; i++) {
      var line = parts[i].trim();
      if (!line || line.indexOf("data:") !== 0) continue;
      var data = line.slice(5).trim();
      if (data === "[DONE]") continue;
      try {
        var j = JSON.parse(data);
        var d = j.choices && j.choices[0] && j.choices[0].delta && j.choices[0].delta.content;
        if (d) {
          full += d;
          if (onDelta) onDelta(full);
        }
      } catch (e) {}
    }
  }
  return full;
}

window.sendChat = function () {
  var inp = document.getElementById("chatInput");
  if (!inp) return;
  var txt = inp.value.trim();
  if (!txt) return;
  addChatMessage(txt, true);
  inp.value = "";

  if (!aiConfigured()) {
    addChatTyping();
    setTimeout(
      function () {
        removeChatTyping();
        addChatMessage(chatbotReply(txt), false);
      },
      450 + Math.random() * 400
    );
    return;
  }

  addChatTyping();
  var bubble = null;
  var messages = [{ role: "system", content: AI_SYSTEM_PROMPT + "\n\n" + aiRuntimeContext() }]
    .concat(AI_HISTORY.slice(-10))
    .concat([{ role: "user", content: txt }]);

  streamAI(messages, function (full) {
    if (!bubble) {
      removeChatTyping();
      bubble = addBotBubble();
    }
    if (bubble) {
      bubble.innerHTML = renderChatMarkdown(full);
      var m = document.getElementById("chatMessages");
      if (m) m.scrollTop = m.scrollHeight;
    }
  })
    .then(function (full) {
      removeChatTyping();
      if (!full || !full.trim()) {
        addChatMessage(chatbotReply(txt), false);
        return;
      }
      if (!bubble) {
        bubble = addBotBubble();
        if (bubble) bubble.innerHTML = renderChatMarkdown(full);
      }
      AI_HISTORY.push({ role: "user", content: txt });
      AI_HISTORY.push({ role: "assistant", content: full });
      if (AI_HISTORY.length > 20) AI_HISTORY = AI_HISTORY.slice(-20);
    })
    .catch(function (err) {
      removeChatTyping();
      console.warn("[BioNexus AI] eroare API, revin la răspuns local:", err && err.message);
      addChatMessage(chatbotReply(txt), false);
    });
};

var I18N = {
  ro: {
    "home.nav.systems": "Sisteme",
    "home.nav.features": "Funcționalități",
    "home.nav.learn": "Învață",
    "home.nav.contact": "Contact",
    "home.nav.login": "Conectare",
    "home.hero.badge": "Anatomia umană 3D &nbsp;&middot;&nbsp; <span>România</span>",
    "home.hero.title": 'Anatomia umană în <span class="home-hero-grad">3D interactiv</span>',
    "home.hero.sub":
      "Explorează sistematic toate sistemele corpului uman. Acum disponibile toate cele 6: osos, muscular, nervos, cardiovascular, respirator și digestiv.",
    "home.hero.ctaPrimary": "Vezi modele 3D",
    "home.hero.ctaSecondary": "Insignele mele",
    "home.stats.bones": "Oase modelate",
    "home.stats.systems": "Sisteme disponibile",
    "home.stats.questions": "Întrebări quiz",
    "home.stats.assistant": "Asistent biologic",
    "home.systems.title": 'Sisteme <span class="home-hero-grad">anatomice</span>',
    "home.systems.sub":
      "Toate cele 6 sisteme majore ale corpului uman sunt acum disponibile în 3D interactiv.",
    "home.sys.osos.t": "Sistem Osos",
    "home.sys.osos.d": "206 oase modelate 3D, cap · trunchi · membre, quiz interactiv.",
    "home.sys.muscular.t": "Sistem Muscular",
    "home.sys.muscular.d": "600+ mușchi, grupe musculare, inserții și acțiuni, cu denumiri RO/latină.",
    "home.sys.nervos.t": "Sistem Nervos",
    "home.sys.nervos.d": "Creier, măduvă spinării, nervii periferici, traseele neuronale.",
    "home.sys.cardio.t": "Sistem Cardiovascular",
    "home.sys.cardio.d": "Inima, artere, vene, capilare — circulația mare și mică.",
    "home.sys.digestiv.t": "Sistem Digestiv",
    "home.sys.digestiv.d": "Traseu complet: cavitate bucală → esofag → stomac → intestine.",
    "home.sys.respirator.t": "Sistem Respirator",
    "home.sys.respirator.d": "Căi respiratorii, plămâni, alveole, mecanica respirației.",
    "home.sys.badge.ready": "Disponibil acum",
    "home.sys.cta": "Explorează în 3D &rarr;",
    "home.sys.badge.soon": "În dezvoltare",
    "home.sys.badge.planned": "Planificat",
    "home.features.title": 'Ce poți face cu <span class="home-hero-grad">BioNexus</span>',
    "home.feat.skel.t": "Schelet 3D complet",
    "home.feat.skel.d":
      "Rotește, zoom, explorează fiecare os în detaliu. Toate denumirile în limba română, conform manualelor.",
    "home.feat.skel.cta": "Deschide scheletul &rarr;",
    "home.feat.quiz.t": "Minigame: Testul Anatomic",
    "home.feat.quiz.d":
      "Pune-ți la încercare cunoștințele. Camera te duce automat la fiecare structură, identifică răspunsul corect.",
    "home.feat.quiz.cta": "Începe minigame &rarr;",
    "home.feat.ai.t": "Asistent AI Biologic",
    "home.feat.ai.d":
      "Pune întrebări despre orice os sau structură. Răspunsuri instant în chatbox-ul interactiv.",
    "home.feat.struct.t": "Structura osului",
    "home.feat.struct.d":
      "Secțiune transversală interactivă — periost, os compact, spongios, canal medular, măduvă, totul vizibil.",
    "home.feat.search.t": "Căutare rapidă",
    "home.feat.search.d":
      "Tastează orice structură — os, mușchi, organ, nerv sau vas — și site-ul te duce instant la ea. Categorisare pe sisteme anatomice.",
    "home.feat.search.cta": "Caută structuri &rarr;",
    "home.feat.details.t": "Detalii medicale",
    "home.feat.details.d":
      "Categorie, tip, descriere, articulații, detalii suplimentare — panou complet pentru fiecare os.",
    "home.learn.title": 'Învață cu <span class="home-hero-grad">manualele oficiale</span>',
    "home.learn.sub":
      "Materiale didactice și manuale de biologie pentru aprofundarea sistemului osos. Click pe un card pentru a deschide PDF-ul.",
    "home.learn.open": "Deschide PDF &rarr;",
    "home.learn.hint":
      "Materialele PDF se plasează în folderul <code>manuale/</code> de lângă aplicație.",
    "home.learn.m1.t": "Biologie · Clasa a VII-a",
    "home.learn.m1.d": "Capitole oficiale despre sistemul osos, mușchi și articulații.",
    "home.learn.m2.t": "Anatomia omului",
    "home.learn.m2.d": "Manual cuprinzător de anatomie umană pentru liceu și universitate.",
    "home.learn.m3.t": "Atlas anatomic ilustrat",
    "home.learn.m3.d": "Diagrame detaliate cu fiecare os, articulație și structură.",
    "home.learn.m4.t": "Curs sistem osos",
    "home.learn.m4.d": "Note de curs și prezentare structurată a oaselor corpului.",
    "home.learn.m5.t": "Articulații și mușchi",
    "home.learn.m5.d": "Cum funcționează articulațiile, tipuri și mușchi asociați.",
    "home.learn.m6.t": "Fiziologia osului",
    "home.learn.m6.d": "Microstructură, măduvă, periost și regenerarea osoasă.",
    "home.footer": "BioNexus &middot; Platformă educațională anatomică",
    "footer.terms": "Termeni",
    "footer.privacy": "Confidențialitate",
    "footer.source": "Conținut bazat pe „Anatomia Omului” — M. Ștefaneț (USMF)",
    "login.tab.login": "Conectare",
    "login.tab.register": "Înregistrare",
    "login.welcome": "Bine ai revenit",
    "login.user": "Utilizator / Email",
    "login.pass": "Parolă",
    "login.submit": "Conectare",
    "login.sub": "Conectează-te ca să continui de unde ai rămas.",
    "login.guest": 'sau <a onclick="closeLogin()">continuă ca vizitator</a>',
    "reg.title": "Creează cont nou",
    "reg.user": "Nume utilizator",
    "reg.email": "Email",
    "reg.pass": "Parolă (min. 4 caractere)",
    "reg.submit": "Creează cont",
    "reg.sub": "Datele rămân doar în browser-ul tău, criptate cu SHA-256.",
    "reg.note": "datele se salvează local în browser, parola este criptată SHA-256",
    "reg.terms":
      "Prin crearea contului accepți ca datele să fie stocate doar local, criptate, fără partajare către terți.",
    "auth.back": "Înapoi",
    "auth.or": "sau",
    "auth.guest": "Continuă ca vizitator",
    "auth.art.title": 'Anatomia umană în <span class="home-hero-grad">3D interactiv</span>',
    "auth.art.sub":
      "Conectează-te pentru a salva progresul la quiz-uri, a sincroniza preferințele și a accesa modul administrator.",
    "auth.art.p1": "206 oase modelate fidel în 3D",
    "auth.art.p2": "Quiz adaptiv cu 3 nivele de dificultate",
    "auth.art.p3": "Asistent biologic AI integrat",
    "auth.art.p4": "Acces offline, totul în browserul tău",
    "auth.art.quote": '„Cea mai bună platformă de anatomie pentru elevii de gimnaziu și liceu."',
    "auth.art.quote.by": "— Profesor Biologie",
    "chat.status": "Asistent biologic online",
    "chat.welcome":
      "Salut! Sunt asistentul BioNexus. Te ajut atât cu anatomie cât și cu folosirea site-ului. Întreabă-mă orice sau folosește scurtăturile de mai jos.",
    "chat.ideas":
      "Câteva idei: <i>&bdquo;Câte oase are corpul uman?&rdquo;</i>, <i>&bdquo;Ce este femurul?&rdquo;</i>",
    "chat.placeholder": "Scrie o întrebare despre anatomie...",
    "header.sub": "Anatomia umană 3D",
    "header.admin": "Admin",
    "header.guest": "Vizitator",
    "header.back": "Înapoi",
    "sb.muscles": "Mușchi",
    "sb.searchMuscle": "Caută un mușchi...",
    "sb.footMuscle": "Sistem muscular:",
    "sb.musclesWord": "mușchi",
    "load.muscleText": "Sistem muscular — modele 3D în construcție",
    "load.cardioText": "Se încarcă sistemul cardiovascular...",
    "load.nervousText": "Se încarcă sistemul nervos...",
    "load.respText": "Se încarcă sistemul respirator...",
    "load.digText": "Se încarcă sistemul digestiv...",
    "view.muscleComplete": "Sistem muscular",
    "view.cardioComplete": "Sistem cardiovascular",
    "view.nervousComplete": "Sistem nervos",
    "view.respComplete": "Sistem respirator",
    "view.digComplete": "Sistem digestiv",
    "sb.dig": "Structuri digestive",
    "sb.searchDig": "Caută o structură...",
    "sb.footDig": "Sistem digestiv:",
    "info.digTitle": "Informații Structură",
    "info.digPlaceholder": "Selectează o structură din model<br />sau din lista din stânga",
    "info.muscleTitle": "Informații Mușchi",
    "info.musclePlaceholder": "Selectează un mușchi din model<br>sau din lista din stânga",
    "nav.muAll": "Toți Mușchii",
    "nav.muCap": "Cap & Gât",
    "nav.muTrunchi": "Trunchi",
    "nav.muMembre": "Membre Superioare",
    "nav.muInferioare": "Membre Inferioare",
    "home.sys.badge.beta": "Beta",
    "nav.all": "Toate Oasele",
    "nav.cap": "Scheletul Capului",
    "nav.trunchi": "Scheletul Trunchiului",
    "nav.membre": "Membre Superioare",
    "nav.inferioare": "Membre Inferioare",
    "nav.structura": "Structura Osului",
    "sb.bones": "Oase",
    "sb.search": "Caută un os...",
    "sb.foot": "Scheletul uman:",
    "sb.bonesWord": "oase",
    "load.text": "Se încarcă modelul 3D...",
    "load.error":
      "Nu s-a putut încărca modelul 3D.<br>Asigură-te că folderul conține fișierele lib/three.min.js, lib/OrbitControls.js și lib/GLTFLoader.js",
    "view.title": "Vizualizare",
    "view.complete": "Scheletul complet",
    "quiz.title": "Minigame: Testul Anatomic",
    "quiz.start.h": "Cunoști scheletul?",
    "quiz.start.p": "Identifică osul evidențiat din 4 variante.",
    "quiz.diff.easy": "Ușor",
    "quiz.diff.medium": "Mediu",
    "quiz.diff.hard": "Greu",
    "quiz.start.btn": "Începe Quiz-ul",
    "quiz.q": "Întrebarea",
    "quiz.score": "Scor:",
    "quiz.q.text": 'Cum se numește osul evidențiat în <span style="color:#3b82f6">albastru</span>?',
    "quiz.skip": "Sare peste",
    "quiz.next": "Următoarea &#8594;",
    "quiz.end.title": "Felicitări!",
    "quiz.end.msg": "Bine!",
    "quiz.end.retry": "Încearcă din nou",
    "info.title": "Informații Os",
    "info.placeholder": "Selectează un os din model<br>sau din lista din stânga",
    "admin.title": "Mod Administrator — Editor de Conținut",
    "admin.sub":
      "Editează conținutul întregului site — oase, mușchi, structurile sistemelor nervos, cardiovascular, respirator și digestiv, plus prompt-ul AI.",
    "admin.pass": "Parolă administrator",
    "admin.login": "Autentificare",
    "admin.pickBone": "Selectează osul:",
    "admin.fld.name": "Nume",
    "admin.fld.cat": "Categorie",
    "admin.fld.type": "Tip",
    "admin.fld.desc": "Descriere",
    "admin.fld.art": "Articulații (separate prin virgulă)",
    "admin.fld.det": "Detalii suplimentare",
    "admin.save": "Salvează modificările",
    "admin.export": "Exportă JSON",
    "admin.reset": "Resetează la valori implicite",
    "err.fillBoth": "Completează ambele câmpuri.",
    "err.fillAll": "Completează toate câmpurile.",
    "err.badCreds": "Utilizator sau parolă greșită.",
    "err.passShort": "Parola trebuie să aibă minim 4 caractere.",
    "err.email": "Email invalid.",
    "err.userTaken": "Utilizator deja existent.",
    "err.emailTaken": "Email deja înregistrat.",
    "err.adminPass": "Parolă administrator greșită.",
  },
  en: {
    "home.nav.systems": "Systems",
    "home.nav.features": "Features",
    "home.nav.learn": "Learn",
    "home.nav.contact": "Contact",
    "home.nav.login": "Login",
    "home.hero.badge": "Human anatomy 3D &nbsp;&middot;&nbsp; <span>Romania</span>",
    "home.hero.title": 'Human anatomy in <span class="home-hero-grad">interactive 3D</span>',
    "home.hero.sub":
      "Systematically explore every system of the human body. All 6 now available: skeletal, muscular, nervous, cardiovascular, respiratory and digestive.",
    "home.hero.ctaPrimary": "View 3D models",
    "home.hero.ctaSecondary": "My badges",
    "home.stats.bones": "Bones modeled",
    "home.stats.systems": "Available systems",
    "home.stats.questions": "Quiz questions",
    "home.stats.assistant": "AI assistant",
    "home.systems.title": 'Anatomical <span class="home-hero-grad">systems</span>',
    "home.systems.sub":
      "All 6 major systems of the human body are now available in interactive 3D.",
    "home.sys.osos.t": "Skeletal System",
    "home.sys.osos.d": "206 bones modeled in 3D, head · trunk · limbs, interactive quiz.",
    "home.sys.muscular.t": "Muscular System",
    "home.sys.muscular.d": "600+ muscles, muscle groups, insertions and actions, RO/Latin names.",
    "home.sys.nervos.t": "Nervous System",
    "home.sys.nervos.d": "Brain, spinal cord, peripheral nerves, neural pathways.",
    "home.sys.cardio.t": "Cardiovascular System",
    "home.sys.cardio.d": "Heart, arteries, veins, capillaries — both major and minor circulation.",
    "home.sys.digestiv.t": "Digestive System",
    "home.sys.digestiv.d": "Full path: oral cavity → esophagus → stomach → intestines.",
    "home.sys.respirator.t": "Respiratory System",
    "home.sys.respirator.d": "Airways, lungs, alveoli, the mechanics of breathing.",
    "home.sys.badge.ready": "Available now",
    "home.sys.cta": "Explore in 3D &rarr;",
    "home.sys.badge.soon": "In development",
    "home.sys.badge.planned": "Planned",
    "home.features.title": 'What you can do with <span class="home-hero-grad">BioNexus</span>',
    "home.feat.skel.t": "Complete 3D skeleton",
    "home.feat.skel.d":
      "Rotate, zoom, explore each bone in detail. All names in Romanian, conforming to textbooks.",
    "home.feat.skel.cta": "Open the skeleton &rarr;",
    "home.feat.quiz.t": "Minigame: The Anatomy Test",
    "home.feat.quiz.d":
      "Test your knowledge. The camera auto-pans to each structure, identify the correct answer.",
    "home.feat.quiz.cta": "Start minigame &rarr;",
    "home.feat.ai.t": "Biological AI Assistant",
    "home.feat.ai.d":
      "Ask questions about any bone or structure. Instant answers in the interactive chatbox.",
    "home.feat.struct.t": "Bone structure",
    "home.feat.struct.d":
      "Interactive cross-section — periosteum, compact bone, spongy bone, medullary canal, marrow, all visible.",
    "home.feat.search.t": "Quick search",
    "home.feat.search.d":
      "Type any structure name and the site jumps to it instantly. Categorized by anatomical systems.",
    "home.feat.search.cta": "Search structures &rarr;",
    "home.feat.details.t": "Medical details",
    "home.feat.details.d":
      "Category, type, description, joints, extra details — full panel for every bone.",
    "home.learn.title": 'Learn with <span class="home-hero-grad">official textbooks</span>',
    "home.learn.sub":
      "Didactic materials and biology textbooks for in-depth study of the skeletal system. Click a card to open the PDF.",
    "home.learn.open": "Open PDF &rarr;",
    "home.learn.hint": "Place PDF files in the <code>manuale/</code> folder next to the app.",
    "home.learn.m1.t": "Biology · 7th grade",
    "home.learn.m1.d": "Official chapters on the skeletal system, muscles and joints.",
    "home.learn.m2.t": "Human Anatomy",
    "home.learn.m2.d": "Comprehensive human anatomy textbook for high school and university.",
    "home.learn.m3.t": "Illustrated Atlas",
    "home.learn.m3.d": "Detailed diagrams of every bone, joint and structure.",
    "home.learn.m4.t": "Skeletal System Course",
    "home.learn.m4.d": "Course notes and a structured overview of all the body bones.",
    "home.learn.m5.t": "Joints & Muscles",
    "home.learn.m5.d": "How joints work, types of joints and associated muscles.",
    "home.learn.m6.t": "Bone Physiology",
    "home.learn.m6.d": "Microstructure, marrow, periosteum and bone regeneration.",
    "home.footer": "BioNexus &middot; Anatomical educational platform",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",
    "footer.source": "Content based on “Human Anatomy” — M. Ștefaneț (USMF)",
    "login.tab.login": "Login",
    "login.tab.register": "Sign up",
    "login.welcome": "Welcome back",
    "login.user": "Username / Email",
    "login.pass": "Password",
    "login.submit": "Login",
    "login.sub": "Sign in to pick up where you left off.",
    "login.guest": 'or <a onclick="closeLogin()">continue as guest</a>',
    "reg.title": "Create new account",
    "reg.user": "Username",
    "reg.email": "Email",
    "reg.pass": "Password (min. 4 chars)",
    "reg.submit": "Create account",
    "reg.sub": "Your data stays only in your browser, SHA-256 encrypted.",
    "reg.note": "data is stored locally in the browser, password is SHA-256 hashed",
    "reg.terms":
      "By creating an account you agree that data is stored only locally, encrypted, never shared with third parties.",
    "auth.back": "Back",
    "auth.or": "or",
    "auth.guest": "Continue as guest",
    "auth.art.title": 'Human anatomy in <span class="home-hero-grad">interactive 3D</span>',
    "auth.art.sub":
      "Sign in to save quiz progress, sync preferences and access administrator mode.",
    "auth.art.p1": "206 bones faithfully modeled in 3D",
    "auth.art.p2": "Adaptive quiz with 3 difficulty levels",
    "auth.art.p3": "Integrated biology AI assistant",
    "auth.art.p4": "Offline access, all in your browser",
    "auth.art.quote": '"The best anatomy platform for middle and high school students."',
    "auth.art.quote.by": "— Biology Teacher",
    "chat.status": "Biological assistant online",
    "chat.welcome":
      "Hi! I am your BioNexus assistant. I help with both anatomy and using the site. Ask me anything or use the shortcuts below.",
    "chat.ideas":
      "A few ideas: <i>&bdquo;How many bones?&rdquo;</i>, <i>&bdquo;What is the femur?&rdquo;</i>",
    "chat.placeholder": "Write a question about anatomy...",
    "header.sub": "Human anatomy 3D",
    "header.admin": "Admin",
    "header.guest": "Guest",
    "header.back": "Back",
    "sb.muscles": "Muscles",
    "sb.searchMuscle": "Search a muscle...",
    "sb.footMuscle": "Muscular system:",
    "sb.musclesWord": "muscles",
    "load.muscleText": "Muscular system — 3D models under construction",
    "load.cardioText": "Loading cardiovascular system...",
    "load.nervousText": "Loading nervous system...",
    "load.respText": "Loading respiratory system...",
    "load.digText": "Loading digestive system...",
    "view.muscleComplete": "Muscular system",
    "view.cardioComplete": "Cardiovascular system",
    "view.nervousComplete": "Nervous system",
    "view.respComplete": "Respiratory system",
    "view.digComplete": "Digestive system",
    "sb.dig": "Digestive structures",
    "sb.searchDig": "Search a structure...",
    "sb.footDig": "Digestive system:",
    "info.digTitle": "Structure Information",
    "info.digPlaceholder": "Select a structure from the model<br />or from the list on the left",
    "info.muscleTitle": "Muscle Info",
    "info.musclePlaceholder": "Select a muscle from the model<br>or the list on the left",
    "nav.muAll": "All Muscles",
    "nav.muCap": "Head & Neck",
    "nav.muTrunchi": "Trunk",
    "nav.muMembre": "Upper Limbs",
    "nav.muInferioare": "Lower Limbs",
    "home.sys.badge.beta": "Beta",
    "nav.all": "All Bones",
    "nav.cap": "Skull",
    "nav.trunchi": "Trunk",
    "nav.membre": "Upper Limbs",
    "nav.inferioare": "Lower Limbs",
    "nav.structura": "Bone Structure",
    "sb.bones": "Bones",
    "sb.search": "Search a bone...",
    "sb.foot": "Human skeleton:",
    "sb.bonesWord": "bones",
    "load.text": "Loading 3D model...",
    "load.error":
      "Could not load the 3D model.<br>Make sure the folder contains lib/three.min.js, lib/OrbitControls.js and lib/GLTFLoader.js",
    "view.title": "View",
    "view.complete": "Full skeleton",
    "quiz.title": "Minigame: The Anatomy Test",
    "quiz.start.h": "Do you know the skeleton?",
    "quiz.start.p": "Identify the highlighted bone from 4 options.",
    "quiz.diff.easy": "Easy",
    "quiz.diff.medium": "Medium",
    "quiz.diff.hard": "Hard",
    "quiz.start.btn": "Start Quiz",
    "quiz.q": "Question",
    "quiz.score": "Score:",
    "quiz.q.text":
      'What is the name of the bone highlighted in <span style="color:#3b82f6">blue</span>?',
    "quiz.skip": "Skip",
    "quiz.next": "Next &#8594;",
    "quiz.end.title": "Congratulations!",
    "quiz.end.msg": "Well done!",
    "quiz.end.retry": "Try again",
    "info.title": "Bone Info",
    "info.placeholder": "Select a bone from the model<br>or from the list on the left",
    "admin.title": "Administrator Mode — Content Editor",
    "admin.sub":
      "Edit the whole site's content — bones, muscles, the nervous, cardiovascular, respiratory and digestive structures, plus the AI prompt.",
    "admin.pass": "Admin password",
    "admin.login": "Authenticate",
    "admin.pickBone": "Pick a bone:",
    "admin.fld.name": "Name",
    "admin.fld.cat": "Category",
    "admin.fld.type": "Type",
    "admin.fld.desc": "Description",
    "admin.fld.art": "Joints (comma-separated)",
    "admin.fld.det": "Extra details",
    "admin.save": "Save changes",
    "admin.export": "Export JSON",
    "admin.reset": "Reset to defaults",
    "err.fillBoth": "Fill in both fields.",
    "err.fillAll": "Fill in all fields.",
    "err.badCreds": "Wrong username or password.",
    "err.passShort": "Password must be at least 4 characters.",
    "err.email": "Invalid email.",
    "err.userTaken": "Username already taken.",
    "err.emailTaken": "Email already registered.",
    "err.adminPass": "Wrong administrator password.",
  },
};
var CUR_LANG = localStorage.getItem("bionexus_lang") || "ro";
function t(key) {
  var d = I18N[CUR_LANG] || I18N.ro;
  if (d[key] != null) return d[key];
  if (I18N.ro[key] != null) return I18N.ro[key];
  return null;
}
window.t = t;
function applyLanguage(lang) {
  CUR_LANG = I18N[lang] ? lang : "ro";
  localStorage.setItem("bionexus_lang", CUR_LANG);
  document.documentElement.lang = CUR_LANG;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var k = el.getAttribute("data-i18n");
    var v = t(k);
    if (v != null) el.textContent = v;
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    var k = el.getAttribute("data-i18n-html");
    var v = t(k);
    if (v != null) el.innerHTML = v;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
    var k = el.getAttribute("data-i18n-ph");
    var v = t(k);
    if (v != null) el.setAttribute("placeholder", v);
  });
  document.querySelectorAll(".lang-btn").forEach(function (b) {
    b.classList.toggle("active", b.dataset.lang === CUR_LANG);
  });

  if (typeof window.refreshReviewsList === "function") window.refreshReviewsList();
  else if (typeof window.refreshReviewsUI === "function") window.refreshReviewsUI();
}
window.applyLanguage = applyLanguage;

I18N.fr = {"home.nav.systems":"Systèmes","home.nav.features":"Fonctionnalités","home.nav.learn":"Apprendre","home.nav.contact":"Contact","home.nav.login":"Connexion","home.hero.badge":"Anatomie humaine 3D &nbsp;&middot;&nbsp; <span>Roumanie</span>","home.hero.title":"L'anatomie humaine en <span class=\"home-hero-grad\">3D interactive</span>","home.hero.sub":"Explorez systématiquement tous les systèmes du corps humain. Les 6 sont désormais disponibles : squelettique, musculaire, nerveux, cardiovasculaire, respiratoire et digestif.","home.hero.ctaPrimary":"Voir les modèles 3D","home.hero.ctaSecondary":"Mes badges","home.stats.bones":"Os modélisés","home.stats.systems":"Systèmes disponibles","home.stats.questions":"Questions de quiz","home.stats.assistant":"Assistant IA","home.systems.title":"Systèmes <span class=\"home-hero-grad\">anatomiques</span>","home.systems.sub":"Les 6 principaux systèmes du corps humain sont désormais disponibles en 3D interactive.","home.sys.osos.t":"Système squelettique","home.sys.osos.d":"206 os modélisés en 3D, tête · tronc · membres, quiz interactif.","home.sys.muscular.t":"Système musculaire","home.sys.muscular.d":"Plus de 600 muscles, groupes musculaires, insertions et actions, noms RO/latins.","home.sys.nervos.t":"Système nerveux","home.sys.nervos.d":"Cerveau, moelle épinière, nerfs périphériques, voies neuronales.","home.sys.cardio.t":"Système cardiovasculaire","home.sys.cardio.d":"Cœur, artères, veines, capillaires — grande et petite circulation.","home.sys.digestiv.t":"Système digestif","home.sys.digestiv.d":"Parcours complet : cavité buccale → œsophage → estomac → intestins.","home.sys.respirator.t":"Système respiratoire","home.sys.respirator.d":"Voies respiratoires, poumons, alvéoles, la mécanique de la respiration.","home.sys.badge.ready":"Disponible maintenant","home.sys.cta":"Explorer en 3D &rarr;","home.sys.badge.soon":"En développement","home.sys.badge.planned":"Prévu","home.features.title":"Ce que vous pouvez faire avec <span class=\"home-hero-grad\">BioNexus</span>","home.feat.skel.t":"Squelette 3D complet","home.feat.skel.d":"Faites pivoter, zoomez, explorez chaque os en détail. Tous les noms en roumain, conformes aux manuels.","home.feat.skel.cta":"Ouvrir le squelette &rarr;","home.feat.quiz.t":"Minijeu : le test d'anatomie","home.feat.quiz.d":"Testez vos connaissances. La caméra se déplace automatiquement vers chaque os, identifiez la bonne réponse.","home.feat.quiz.cta":"Lancer le minijeu &rarr;","home.feat.ai.t":"Assistant IA biologique","home.feat.ai.d":"Posez des questions sur n'importe quel os ou structure. Réponses instantanées dans la fenêtre de discussion interactive.","home.feat.struct.t":"Structure de l'os","home.feat.struct.d":"Coupe transversale interactive — périoste, os compact, os spongieux, canal médullaire, moelle, tout est visible.","home.feat.search.t":"Recherche rapide","home.feat.search.d":"Tapez le nom de n'importe quel os et le site vous y amène instantanément. Classé par sections anatomiques.","home.feat.search.cta":"Rechercher des structures &rarr;","home.feat.details.t":"Détails médicaux","home.feat.details.d":"Catégorie, type, description, articulations, détails supplémentaires — panneau complet pour chaque os.","home.learn.title":"Apprenez avec les <span class=\"home-hero-grad\">manuels officiels</span>","home.learn.sub":"Manuels universitaires d'anatomie humaine — références officielles, ouvertes dans un nouvel onglet.","home.learn.open":"Ouvrir le manuel &rarr;","home.learn.hint":"Les manuels s'ouvrent sur le site officiel de l'USMF dans un nouvel onglet du navigateur.","home.learn.m1.t":"Anatomie humaine · Volume I","home.learn.m1.d":"Stefaneț M. — Ostéologie, arthrologie, myologie. La base de l'appareil locomoteur : os, articulations, muscles avec des descriptions morpho-fonctionnelles complètes.","home.learn.m2.t":"Anatomie humaine · Volume II","home.learn.m2.d":"Stefaneț M. — Splanchnologie : appareils digestif, respiratoire et urogénital. Les organes internes expliqués de manière systémique avec des schémas topographiques.","home.learn.m3.t":"Anatomie humaine · Volume III","home.learn.m3.d":"Stefaneț M. — Système cardiovasculaire, système nerveux central et périphérique, organes des sens. Le volume de l'intégration fonctionnelle.","home.learn.m4.t":"L'appareil locomoteur","home.learn.m4.d":"USMF · Recueil de cours (2011). Systématisation de l'appareil locomoteur : squelette axial, squelette appendiculaire, articulations et musculature — format PDF.","home.learn.m5.t":"Barron's · Anatomie et physiologie","home.learn.m5.d":"Krumhardt & Alcamo (UMFST 2022) — manuel d'admission pour les facultés de médecine. Chapitre détaillé : <b>Les os et les articulations</b> (ostéogenèse, ostéones, synarthroses, diarthroses, remodelage osseux).","home.learn.m6.t":"Physiologie de l'os","home.learn.m6.d":"Microstructure, moelle, périoste et régénération osseuse.","home.footer":"BioNexus · Plateforme éducative d'anatomie","footer.terms":"Conditions","footer.privacy":"Confidentialité","footer.source":"Contenu basé sur « Anatomie humaine » — M. Ștefaneț (USMF)","login.tab.login":"Connexion","login.tab.register":"Inscription","login.welcome":"Bon retour","login.user":"E-mail ou nom d'utilisateur","login.pass":"Mot de passe","login.submit":"Se connecter","login.sub":"Connectez-vous à votre compte","login.guest":"ou <a onclick=\"closeLogin()\">continuer en tant qu'invité</a>","reg.title":"Créer un compte","reg.user":"Nom d'utilisateur","reg.email":"Adresse e-mail","reg.pass":"Mot de passe","reg.submit":"Créer le compte","reg.sub":"Rejoignez BioNexus dès aujourd'hui","reg.note":"les données sont enregistrées localement dans le navigateur, le mot de passe est haché en SHA-256","reg.terms":"En créant un compte, vous acceptez que vos données soient stockées uniquement en local, chiffrées, sans jamais être partagées avec des tiers.","auth.back":"Retour","auth.or":"ou","auth.guest":"Continuer en tant qu'invité","auth.art.title":"L'anatomie humaine en <span class=\"home-hero-grad\">3D interactive</span>","auth.art.sub":"Connectez-vous pour sauvegarder votre progression aux quiz, synchroniser vos préférences et accéder au mode administrateur.","auth.art.p1":"206 os fidèlement modélisés en 3D","auth.art.p2":"Quiz adaptatif avec 3 niveaux de difficulté","auth.art.p3":"Assistant IA de biologie intégré","auth.art.p4":"Accès hors ligne, tout dans votre navigateur","auth.art.quote":"« La meilleure plateforme d'anatomie pour les élèves de collège et de lycée. »","auth.art.quote.by":"— Professeur de biologie","chat.status":"Assistant biologique en ligne","chat.welcome":"Salut ! Je suis l'assistant BioNexus. Je t'aide aussi bien pour l'anatomie que pour l'utilisation du site. Pose-moi n'importe quelle question ou utilise les raccourcis ci-dessous.","chat.ideas":"Quelques idées : <i>&bdquo;Combien d'os ?&rdquo;</i>, <i>&bdquo;Qu'est-ce que le fémur ?&rdquo;</i>","chat.placeholder":"Écris une question sur l'anatomie...","header.sub":"Anatomie humaine 3D","header.admin":"Admin","header.guest":"Invité","header.back":"Retour","sb.muscles":"Muscles","sb.searchMuscle":"Rechercher un muscle...","sb.footMuscle":"Système musculaire :","sb.musclesWord":"muscles","load.muscleText":"Système musculaire — modèles 3D en construction","load.cardioText":"Chargement du système cardiovasculaire...","load.nervousText":"Chargement du système nerveux...","load.respText":"Chargement du système respiratoire...","load.digText":"Chargement du système digestif...","view.muscleComplete":"Système musculaire","view.cardioComplete":"Système cardiovasculaire","view.nervousComplete":"Système nerveux","view.respComplete":"Système respiratoire","view.digComplete":"Système digestif","sb.dig":"Structures digestives","sb.searchDig":"Rechercher une structure...","sb.footDig":"Système digestif :","info.digTitle":"Informations sur la structure","info.digPlaceholder":"Sélectionne une structure dans le modèle<br />ou dans la liste à gauche","info.muscleTitle":"Infos sur le muscle","info.musclePlaceholder":"Sélectionne un muscle dans le modèle<br>ou dans la liste à gauche","nav.muAll":"Tous les muscles","nav.muCap":"Tête et cou","nav.muTrunchi":"Tronc","nav.muMembre":"Membres supérieurs","nav.muInferioare":"Membres inférieurs","home.sys.badge.beta":"Bêta","nav.all":"Tous les os","nav.cap":"Crâne","nav.trunchi":"Tronc","nav.membre":"Membres supérieurs","nav.inferioare":"Membres inférieurs","nav.structura":"Structure de l'os","sb.bones":"Os","sb.search":"Rechercher un os...","sb.foot":"Squelette humain :","sb.bonesWord":"os","load.text":"Chargement du modèle 3D...","load.error":"Impossible de charger le modèle 3D.<br>Assure-toi que le dossier contient les fichiers lib/three.min.js, lib/OrbitControls.js et lib/GLTFLoader.js","view.title":"Vue","view.complete":"Squelette complet","quiz.title":"Minijeu : le test d'anatomie","quiz.start.h":"Connais-tu le squelette ?","quiz.start.p":"Identifie l'os mis en évidence parmi 4 propositions.","quiz.diff.easy":"Facile","quiz.diff.medium":"Moyen","quiz.diff.hard":"Difficile","quiz.start.btn":"Commencer le quiz","quiz.q":"Question","quiz.score":"Score :","quiz.q.text":"Comment s'appelle l'os mis en évidence en <span style=\"color:#3b82f6\">bleu</span> ?","quiz.skip":"Passer","quiz.next":"Suivante &#8594;","quiz.end.title":"Félicitations !","quiz.end.msg":"Bien joué !","quiz.end.retry":"Réessayer","info.title":"Infos sur l'os","info.placeholder":"Sélectionne un os dans le modèle<br>ou dans la liste à gauche","admin.title":"Mode administrateur — Éditeur de contenu","admin.sub":"Modifie le contenu de tout le site — os, muscles, les structures des systèmes nerveux, cardiovasculaire, respiratoire et digestif, ainsi que le prompt de l'IA.","admin.pass":"Mot de passe administrateur","admin.login":"S'authentifier","admin.pickBone":"Sélectionne l'os :","admin.fld.name":"Nom","admin.fld.cat":"Catégorie","admin.fld.type":"Type","admin.fld.desc":"Description","admin.fld.art":"Articulations (séparées par des virgules)","admin.fld.det":"Détails supplémentaires","admin.save":"Enregistrer les modifications","admin.export":"Exporter en JSON","admin.reset":"Réinitialiser aux valeurs par défaut","err.fillBoth":"Remplis les deux champs.","err.fillAll":"Remplis tous les champs.","err.badCreds":"Nom d'utilisateur ou mot de passe incorrect.","err.passShort":"Le mot de passe doit comporter au moins 4 caractères.","err.email":"E-mail invalide.","err.userTaken":"Nom d'utilisateur déjà pris.","err.emailTaken":"E-mail déjà enregistré.","err.adminPass":"Mot de passe administrateur incorrect.","user.menu.profil":"Profil","user.menu.setari":"Paramètres","user.menu.logout":"Se déconnecter","profile.back":"Retour","profile.tagline":"Membre BioNexus","profile.tab.badges":"Badges","profile.achieved":"Obtenus","profile.profil.h":"Ton profil","profile.profil.p":"Le contenu de cette section sera ajouté ultérieurement.","profile.setari.h":"Paramètres","profile.setari.p":"Le contenu de cette section sera ajouté ultérieurement.","profile.insigne.h":"Mes badges","profile.insigne.p":"Le contenu de cette section sera ajouté ultérieurement.","home.feat.ai.cta":"Ouvrir la fenêtre de discussion &rarr;","home.feat.curio.t":"Curiosités","home.feat.curio.d":"Des faits étonnants sur le corps humain — combien d'os, le plus petit, le muscle le plus puissant. Découvre une curiosité au hasard.","home.feat.curio.cta":"Voir une curiosité &rarr;","login.forgot":"Mot de passe oublié ?","login.noAccount":"Pas de compte ? <a onclick=\"showAuthMode('register')\">Créer un compte</a>","reg.passHint":"Au moins 8 caractères","reg.passConf":"Confirmer le mot de passe","reg.termsAccept":"J'accepte les <a class=\"auth-link\" onclick=\"event.preventDefault();showTerms('terms')\">Conditions d'utilisation</a> et la <a class=\"auth-link\" onclick=\"event.preventDefault();showTerms('privacy')\">Politique de confidentialité</a>","reg.human":"Je suis humain","reg.captcha.title":"Vérification de sécurité","reg.haveAccount":"Vous avez déjà un compte ? <a onclick=\"showAuthMode('login')\">Se connecter</a>","home.feat.edu.t":"Ressource éducative","home.feat.edu.d":"BioNexus est une plateforme éducative ouverte. Des manuels universitaires officiels d'anatomie humaine sont disponibles directement dans la section Apprendre.","home.feat.edu.cta":"Parcourir les manuels &rarr;","home.reviews.title":"Avis <span class=\"home-hero-grad\">des utilisateurs</span>","home.reviews.sub":"Lis les expériences des autres ou laisse ton propre avis une fois connecté.","home.reviews.empty":"0 avis","home.reviews.login":"Connecte-toi pour laisser un avis.","home.reviews.ph":"Dis-nous ce que tu penses de BioNexus...","home.reviews.submit":"Publier l'avis","home.reviews.none":"Pas encore d'avis — sois le premier !","home.stats.verified":"Site éducatif · Vérifié","settings.adminH":"Mode administrateur","settings.adminSub":"Accès à l'éditeur de contenu (descriptions des os, catégories, export JSON). Authentification requise.","settings.adminBtn":"Ouvrir le panneau Admin","quiz.pick.h":"Choisis le type de test","quiz.pick.p":"Deux modes disponibles — choisis comment tu veux te tester.","quiz.mode.visual.t":"Identifie l'os","quiz.mode.visual.d":"Vois un os mis en évidence en bleu sur le squelette et choisis le nom correct parmi 4 propositions. Minijeu visuel rapide.","quiz.mode.know.t":"Test de connaissances","quiz.mode.know.d":"Questions sur les descriptions, les articulations et les détails (Facile/Moyen) ainsi que des questions issues des manuels Stefaneț Vol. I-III (Difficile).","quiz.back":"Retour","quiz.sys.h":"Choisis le système anatomique","quiz.sys.p":"Sur quel système veux-tu te tester ?","quiz.sys.osos.t":"Système squelettique","quiz.sys.osos.d":"206 os répartis sur la tête, le tronc et les membres. Questions visuelles et de connaissances + les manuels Ștefaneț (Difficile).","quiz.sys.muscular.t":"Système musculaire","quiz.sys.muscular.d":"Plus de 350 muscles striés avec noms RO/latins, origines, insertions et actions.","quiz.sys.nervous.t":"Système nerveux","quiz.sys.nervous.d":"Cerveau, moelle épinière, nerfs périphériques — noms RO + latins.","quiz.sys.cardio.t":"Système cardiovasculaire","quiz.sys.cardio.d":"Cœur, artères, veines — identifie les structures et leurs noms latins.","quiz.sys.respiratory.t":"Système respiratoire","quiz.sys.respiratory.d":"Voies aériennes, poumons, larynx, diaphragme — noms RO + latins.","quiz.sys.digestive.t":"Système digestif","quiz.sys.digestive.d":"Estomac, foie, intestins, pancréas — identifie les organes digestifs.","login.user.ph":"toi@email.com","login.pass.ph":"Saisis ton mot de passe","reg.user.ph":"Choisis un nom d'utilisateur","reg.email.ph":"toi@email.com","reg.pass.ph":"Crée un mot de passe","reg.passConf.ph":"Confirme ton mot de passe","forgot.email.ph":"toi@email.com","reset.newPass.ph":"Au moins 8 caractères","reset.confPass.ph":"Ressaisis le mot de passe","quiz.mode.duel.t":"Duel IA","quiz.mode.duel.d":"L'IA te lance des affirmations d'anatomie — certaines correctes, d'autres avec des erreurs subtiles. Repère laquelle est vraie et laquelle est fausse. Entraînement à l'esprit critique.","daily.title":"Défi du jour","daily.streak":"Série :","daily.days":"jours","daily.reward":"Récompense :","notebook.title":"Carnet BioNexus","notebook.search":"Rechercher dans les notes...","notebook.filter.all":"Toutes","notebook.filter.starred":"⭐ Importantes","notebook.filter.bone":"🦴 Os","notebook.filter.muscle":"💪 Muscles","notebook.filter.nervous":"🧠 Nerveux","notebook.filter.cardio":"❤️ Cardio","notebook.filter.respiratory":"💨 Respiratoire","notebook.filter.digestive":"🍽️ Digestif","notebook.empty.title":"Pas encore de note","notebook.empty.desc":"Ajoute ta première note en appuyant sur <b>+ Nouvelle note</b> ou depuis la visionneuse 3D lorsque tu sélectionnes une structure dans n'importe quel système.","notebook.empty.cta":"+ Ajouter la première note","notebook.editor.new":"Nouvelle note","notebook.editor.edit":"Modifier la note","notebook.lbl.title":"Titre","notebook.lbl.category":"Catégorie","notebook.lbl.subject":"Sujet (facultatif)","notebook.lbl.content":"Contenu","notebook.lbl.tags":"Tags (séparés par des virgules)","notebook.lbl.color":"Couleur","notebook.lbl.starred":"Marquer comme important ⭐","notebook.cat.bone":"🦴 Os","notebook.cat.muscle":"💪 Muscle","notebook.cat.nervous":"🧠 Nerveux","notebook.cat.cardio":"❤️ Cardiovasculaire","notebook.cat.respiratory":"💨 Respiratoire","notebook.cat.digestive":"🍽️ Digestif","notebook.cat.general":"📌 Général","notebook.ph.title":"ex : Fémur — origine des ischio-jambiers","notebook.ph.subject":"ex : Fémur, Biceps brachial, articulation de l'épaule","notebook.ph.content":"Écris des observations, des définitions, des moyens mnémotechniques...","notebook.ph.tags":"ex : examen, anatomie 1, important","notebook.btn.cancel":"Annuler","notebook.btn.delete":"🗑 Supprimer","notebook.btn.save":"💾 Enregistrer","home.feat.notes.t":"Notes et marque-pages","home.feat.notes.cta":"Ouvrir le carnet &rarr;","footer.report":"Signaler un problème","report.title":"Signaler un problème","report.intro":"Vous avez trouvé un bug, une erreur de contenu, ou vous avez une suggestion ? Dites-le-nous — cela arrive directement à l'équipe.","report.lbl.type":"Type","report.type.bug":"🐛 Erreur / bug","report.type.content":"📚 Erreur de contenu","report.type.suggestion":"💡 Suggestion","report.type.other":"❓ Autre chose","report.lbl.msg":"Description","report.ph.msg":"Décrivez brièvement le problème ou la suggestion...","report.lbl.email":"E-mail (facultatif, pour que nous puissions vous répondre)","report.ph.email":"toi@email.com","report.cancel":"Annuler","report.send":"Envoyer le rapport","report.sending":"Envoi en cours...","report.ok":"Merci ! Votre rapport a été envoyé.","report.err":"Impossible d'envoyer. Veuillez réessayer plus tard.","report.short":"Veuillez décrire le problème (5 caractères minimum)."};
I18N.de = {"home.nav.systems":"Systeme","home.nav.features":"Funktionen","home.nav.learn":"Lernen","home.nav.contact":"Kontakt","home.nav.login":"Anmelden","home.hero.badge":"Menschliche Anatomie 3D &nbsp;&middot;&nbsp; <span>Rumänien</span>","home.hero.title":"Menschliche Anatomie in <span class=\"home-hero-grad\">interaktivem 3D</span>","home.hero.sub":"Erkunde systematisch jedes System des menschlichen Körpers. Alle 6 jetzt verfügbar: Skelett, Muskeln, Nerven, Herz-Kreislauf, Atmung und Verdauung.","home.hero.ctaPrimary":"3D-Modelle ansehen","home.hero.ctaSecondary":"Meine Abzeichen","home.stats.bones":"Modellierte Knochen","home.stats.systems":"Verfügbare Systeme","home.stats.questions":"Quizfragen","home.stats.assistant":"KI-Assistent","home.systems.title":"Anatomische <span class=\"home-hero-grad\">Systeme</span>","home.systems.sub":"Alle 6 großen Systeme des menschlichen Körpers sind jetzt in interaktivem 3D verfügbar.","home.sys.osos.t":"Skelettsystem","home.sys.osos.d":"206 Knochen in 3D modelliert, Kopf · Rumpf · Gliedmaßen, interaktives Quiz.","home.sys.muscular.t":"Muskelsystem","home.sys.muscular.d":"600+ Muskeln, Muskelgruppen, Ansätze und Funktionen, RO/lateinische Namen.","home.sys.nervos.t":"Nervensystem","home.sys.nervos.d":"Gehirn, Rückenmark, periphere Nerven, Nervenbahnen.","home.sys.cardio.t":"Herz-Kreislauf-System","home.sys.cardio.d":"Herz, Arterien, Venen, Kapillaren — großer und kleiner Kreislauf.","home.sys.digestiv.t":"Verdauungssystem","home.sys.digestiv.d":"Kompletter Weg: Mundhöhle → Speiseröhre → Magen → Darm.","home.sys.respirator.t":"Atmungssystem","home.sys.respirator.d":"Atemwege, Lunge, Alveolen, die Mechanik der Atmung.","home.sys.badge.ready":"Jetzt verfügbar","home.sys.cta":"In 3D erkunden &rarr;","home.sys.badge.soon":"In Entwicklung","home.sys.badge.planned":"Geplant","home.features.title":"Was du mit <span class=\"home-hero-grad\">BioNexus</span> tun kannst","home.feat.skel.t":"Komplettes 3D-Skelett","home.feat.skel.d":"Drehen, zoomen, jeden Knochen im Detail erkunden. Alle Namen auf Rumänisch, gemäß den Lehrbüchern.","home.feat.skel.cta":"Skelett öffnen &rarr;","home.feat.quiz.t":"Minispiel: Der Anatomietest","home.feat.quiz.d":"Stelle dein Wissen auf die Probe. Die Kamera schwenkt automatisch zu jedem Knochen, erkenne die richtige Antwort.","home.feat.quiz.cta":"Minispiel starten &rarr;","home.feat.ai.t":"Biologischer KI-Assistent","home.feat.ai.d":"Stelle Fragen zu jedem Knochen oder jeder Struktur. Sofortige Antworten in der interaktiven Chatbox.","home.feat.struct.t":"Knochenstruktur","home.feat.struct.d":"Interaktiver Querschnitt — Periost, kompakter Knochen, Spongiosa, Markkanal, Knochenmark, alles sichtbar.","home.feat.search.t":"Schnellsuche","home.feat.search.d":"Gib einen beliebigen Knochennamen ein und die Seite springt sofort dorthin. Nach anatomischen Abschnitten kategorisiert.","home.feat.search.cta":"Strukturen suchen &rarr;","home.feat.details.t":"Medizinische Details","home.feat.details.d":"Kategorie, Typ, Beschreibung, Gelenke, Zusatzdetails — vollständiges Panel für jeden Knochen.","home.learn.title":"Lerne mit <span class=\"home-hero-grad\">offiziellen Lehrbüchern</span>","home.learn.sub":"Anatomie-Lehrbücher auf Hochschulniveau — offizielle Referenzen, in einem neuen Tab geöffnet.","home.learn.open":"Lehrbuch öffnen &rarr;","home.learn.hint":"Die Lehrbücher öffnen sich auf der offiziellen USMF-Website in einem neuen Browser-Tab.","home.learn.m1.t":"Menschliche Anatomie · Band I","home.learn.m1.d":"Stefaneț M. — Osteologie, Arthrologie, Myologie. Die Grundlage des Bewegungsapparats: Knochen, Gelenke, Muskeln mit vollständigen morphofunktionellen Beschreibungen.","home.learn.m2.t":"Menschliche Anatomie · Band II","home.learn.m2.d":"Stefaneț M. — Splanchnologie: Verdauungs-, Atmungs- und Urogenitalsystem. Innere Organe systemisch erklärt mit topografischen Skizzen.","home.learn.m3.t":"Menschliche Anatomie · Band III","home.learn.m3.d":"Stefaneț M. — Herz-Kreislauf-System, zentrales und peripheres Nervensystem, Sinnesorgane. Der Band der funktionellen Integration.","home.learn.m4.t":"Der Bewegungsapparat","home.learn.m4.d":"USMF · Vorlesungssammlung (2011). Systematisierung des Bewegungsapparats: Achsenskelett, Extremitätenskelett, Gelenke und Muskulatur — PDF-Format.","home.learn.m5.t":"Barron's · Anatomie & Physiologie","home.learn.m5.d":"Krumhardt & Alcamo (UMFST 2022) — Aufnahmelehrbuch für medizinische Fakultäten. Ausführliches Kapitel: <b>Knochen und Gelenke</b> (Osteogenese, Osteone, Synarthrosen, Diarthrosen, Knochenumbau).","home.learn.m6.t":"Knochenphysiologie","home.learn.m6.d":"Mikrostruktur, Knochenmark, Periost und Knochenregeneration.","home.footer":"BioNexus · Anatomische Bildungsplattform","footer.terms":"Nutzungsbedingungen","footer.privacy":"Datenschutz","footer.source":"Inhalt basierend auf „Menschliche Anatomie“ — M. Ștefaneț (USMF)","login.tab.login":"Anmelden","login.tab.register":"Registrieren","login.welcome":"Willkommen zurück","login.user":"E-Mail oder Benutzername","login.pass":"Passwort","login.submit":"Anmelden","login.sub":"Melde dich in deinem Konto an","login.guest":"oder <a onclick=\"closeLogin()\">als Gast fortfahren</a>","reg.title":"Konto erstellen","reg.user":"Benutzername","reg.email":"E-Mail-Adresse","reg.pass":"Passwort","reg.submit":"Konto erstellen","reg.sub":"Werde noch heute Teil von BioNexus","reg.note":"Daten werden lokal im Browser gespeichert, das Passwort wird mit SHA-256 gehasht","reg.terms":"Mit der Kontoerstellung stimmst du zu, dass Daten nur lokal und verschlüsselt gespeichert und niemals an Dritte weitergegeben werden.","auth.back":"Zurück","auth.or":"oder","auth.guest":"Als Gast fortfahren","auth.art.title":"Menschliche Anatomie in <span class=\"home-hero-grad\">interaktivem 3D</span>","auth.art.sub":"Melde dich an, um den Quiz-Fortschritt zu speichern, Einstellungen zu synchronisieren und auf den Administratormodus zuzugreifen.","auth.art.p1":"206 Knochen originalgetreu in 3D modelliert","auth.art.p2":"Adaptives Quiz mit 3 Schwierigkeitsstufen","auth.art.p3":"Integrierter biologischer KI-Assistent","auth.art.p4":"Offline-Zugriff, alles in deinem Browser","auth.art.quote":"\"Die beste Anatomie-Plattform für Schülerinnen und Schüler der Mittel- und Oberstufe.\"","auth.art.quote.by":"— Biologielehrer","chat.status":"Biologischer Assistent online","chat.welcome":"Hallo! Ich bin dein BioNexus-Assistent. Ich helfe dir sowohl bei der Anatomie als auch bei der Nutzung der Seite. Frag mich alles oder nutze die Schnellzugriffe unten.","chat.ideas":"Ein paar Ideen: <i>&bdquo;Wie viele Knochen?&rdquo;</i>, <i>&bdquo;Was ist der Femur?&rdquo;</i>","chat.placeholder":"Schreibe eine Frage zur Anatomie...","header.sub":"Menschliche Anatomie 3D","header.admin":"Admin","header.guest":"Gast","header.back":"Zurück","sb.muscles":"Muskeln","sb.searchMuscle":"Einen Muskel suchen...","sb.footMuscle":"Muskelsystem:","sb.musclesWord":"Muskeln","load.muscleText":"Muskelsystem — 3D-Modelle im Aufbau","load.cardioText":"Herz-Kreislauf-System wird geladen...","load.nervousText":"Nervensystem wird geladen...","load.respText":"Atmungssystem wird geladen...","load.digText":"Verdauungssystem wird geladen...","view.muscleComplete":"Muskelsystem","view.cardioComplete":"Herz-Kreislauf-System","view.nervousComplete":"Nervensystem","view.respComplete":"Atmungssystem","view.digComplete":"Verdauungssystem","sb.dig":"Verdauungsstrukturen","sb.searchDig":"Eine Struktur suchen...","sb.footDig":"Verdauungssystem:","info.digTitle":"Strukturinformationen","info.digPlaceholder":"Wähle eine Struktur aus dem Modell<br />oder aus der Liste links","info.muscleTitle":"Muskelinfo","info.musclePlaceholder":"Wähle einen Muskel aus dem Modell<br>oder aus der Liste links","nav.muAll":"Alle Muskeln","nav.muCap":"Kopf & Hals","nav.muTrunchi":"Rumpf","nav.muMembre":"Obere Gliedmaßen","nav.muInferioare":"Untere Gliedmaßen","home.sys.badge.beta":"Beta","nav.all":"Alle Knochen","nav.cap":"Schädel","nav.trunchi":"Rumpf","nav.membre":"Obere Gliedmaßen","nav.inferioare":"Untere Gliedmaßen","nav.structura":"Knochenstruktur","sb.bones":"Knochen","sb.search":"Einen Knochen suchen...","sb.foot":"Menschliches Skelett:","sb.bonesWord":"Knochen","load.text":"3D-Modell wird geladen...","load.error":"Das 3D-Modell konnte nicht geladen werden.<br>Stelle sicher, dass der Ordner die Dateien lib/three.min.js, lib/OrbitControls.js und lib/GLTFLoader.js enthält","view.title":"Ansicht","view.complete":"Komplettes Skelett","quiz.title":"Minispiel: Der Anatomietest","quiz.start.h":"Kennst du das Skelett?","quiz.start.p":"Erkenne den hervorgehobenen Knochen aus 4 Optionen.","quiz.diff.easy":"Leicht","quiz.diff.medium":"Mittel","quiz.diff.hard":"Schwer","quiz.start.btn":"Quiz starten","quiz.q":"Frage","quiz.score":"Punktzahl:","quiz.q.text":"Wie heißt der <span style=\"color:#3b82f6\">blau</span> hervorgehobene Knochen?","quiz.skip":"Überspringen","quiz.next":"Weiter &#8594;","quiz.end.title":"Glückwunsch!","quiz.end.msg":"Gut gemacht!","quiz.end.retry":"Erneut versuchen","info.title":"Knocheninfo","info.placeholder":"Wähle einen Knochen aus dem Modell<br>oder aus der Liste links","admin.title":"Administratormodus — Inhaltseditor","admin.sub":"Bearbeite den Inhalt der gesamten Seite — Knochen, Muskeln, die Strukturen des Nerven-, Herz-Kreislauf-, Atmungs- und Verdauungssystems sowie den KI-Prompt.","admin.pass":"Admin-Passwort","admin.login":"Authentifizieren","admin.pickBone":"Knochen auswählen:","admin.fld.name":"Name","admin.fld.cat":"Kategorie","admin.fld.type":"Typ","admin.fld.desc":"Beschreibung","admin.fld.art":"Gelenke (durch Komma getrennt)","admin.fld.det":"Zusätzliche Details","admin.save":"Änderungen speichern","admin.export":"JSON exportieren","admin.reset":"Auf Standardwerte zurücksetzen","err.fillBoth":"Fülle beide Felder aus.","err.fillAll":"Fülle alle Felder aus.","err.badCreds":"Falscher Benutzername oder falsches Passwort.","err.passShort":"Das Passwort muss mindestens 4 Zeichen lang sein.","err.email":"Ungültige E-Mail.","err.userTaken":"Benutzername bereits vergeben.","err.emailTaken":"E-Mail bereits registriert.","err.adminPass":"Falsches Administrator-Passwort.","user.menu.profil":"Profil","user.menu.setari":"Einstellungen","user.menu.logout":"Abmelden","profile.back":"Zurück","profile.tagline":"BioNexus-Mitglied","profile.tab.badges":"Abzeichen","profile.achieved":"Erhalten","profile.profil.h":"Dein Profil","profile.profil.p":"Der Inhalt dieses Abschnitts wird später hinzugefügt.","profile.setari.h":"Einstellungen","profile.setari.p":"Der Inhalt dieses Abschnitts wird später hinzugefügt.","profile.insigne.h":"Meine Abzeichen","profile.insigne.p":"Der Inhalt dieses Abschnitts wird später hinzugefügt.","home.feat.ai.cta":"Chatbox öffnen &rarr;","home.feat.curio.t":"Wissenswertes","home.feat.curio.d":"Erstaunliche Fakten über den menschlichen Körper — wie viele Knochen, der kleinste, der stärkste Muskel. Entdecke eine zufällige Kuriosität.","home.feat.curio.cta":"Eine Kuriosität zeigen &rarr;","login.forgot":"Passwort vergessen?","login.noAccount":"Noch kein Konto? <a onclick=\"showAuthMode('register')\">Konto erstellen</a>","reg.passHint":"Mindestens 8 Zeichen","reg.passConf":"Passwort bestätigen","reg.termsAccept":"Ich stimme den <a class=\"auth-link\" onclick=\"event.preventDefault();showTerms('terms')\">Nutzungsbedingungen</a> und der <a class=\"auth-link\" onclick=\"event.preventDefault();showTerms('privacy')\">Datenschutzerklärung</a> zu","reg.human":"Ich bin ein Mensch","reg.captcha.title":"Sicherheitsprüfung","reg.haveAccount":"Bereits ein Konto? <a onclick=\"showAuthMode('login')\">Anmelden</a>","home.feat.edu.t":"Bildungsressource","home.feat.edu.d":"BioNexus ist eine offene Bildungsplattform. Offizielle universitäre Anatomie-Lehrbücher direkt im Bereich Lernen verfügbar.","home.feat.edu.cta":"Lehrbücher durchsuchen &rarr;","home.reviews.title":"Bewertungen <span class=\"home-hero-grad\">von Nutzern</span>","home.reviews.sub":"Lies die Erfahrungen anderer oder hinterlasse deine eigene Bewertung, sobald du angemeldet bist.","home.reviews.empty":"0 Bewertungen","home.reviews.login":"Melde dich an, um eine Bewertung abzugeben.","home.reviews.ph":"Sag uns, was du von BioNexus hältst...","home.reviews.submit":"Bewertung veröffentlichen","home.reviews.none":"Noch keine Bewertungen — sei der Erste!","home.stats.verified":"Bildungsseite · Verifiziert","settings.adminH":"Administratormodus","settings.adminSub":"Zugriff auf den Inhaltseditor (Knochenbeschreibungen, Kategorien, JSON-Export). Authentifizierung erforderlich.","settings.adminBtn":"Admin-Panel öffnen","quiz.pick.h":"Wähle einen Quiztyp","quiz.pick.p":"Zwei Modi verfügbar — wähle, wie du dich testen möchtest.","quiz.mode.visual.t":"Erkenne den Knochen","quiz.mode.visual.d":"Sieh einen blau hervorgehobenen Knochen auf dem Skelett und wähle den richtigen Namen aus 4 Optionen. Schnelles visuelles Minispiel.","quiz.mode.know.t":"Wissenstest","quiz.mode.know.d":"Fragen zu Beschreibungen, Gelenken und Details (Leicht/Mittel) sowie Fragen aus den Lehrbüchern Stefaneț Bd. I-III (Schwer).","quiz.back":"Zurück","quiz.sys.h":"Wähle das anatomische System","quiz.sys.p":"Zu welchem System möchtest du dich testen?","quiz.sys.osos.t":"Skelettsystem","quiz.sys.osos.d":"206 Knochen an Kopf, Rumpf und Gliedmaßen. Visuelle und Wissensfragen + die Ștefaneț-Lehrbücher (Schwer).","quiz.sys.muscular.t":"Muskelsystem","quiz.sys.muscular.d":"350+ quergestreifte Muskeln mit RO/lateinischen Namen, Ursprüngen, Ansätzen und Funktionen.","quiz.sys.nervous.t":"Nervensystem","quiz.sys.nervous.d":"Gehirn, Rückenmark, periphere Nerven — RO + lateinische Namen.","quiz.sys.cardio.t":"Herz-Kreislauf-System","quiz.sys.cardio.d":"Herz, Arterien, Venen — erkenne die Strukturen und ihre lateinischen Namen.","quiz.sys.respiratory.t":"Atmungssystem","quiz.sys.respiratory.d":"Atemwege, Lunge, Kehlkopf, Zwerchfell — RO + lateinische Namen.","quiz.sys.digestive.t":"Verdauungssystem","quiz.sys.digestive.d":"Magen, Leber, Darm, Bauchspeicheldrüse — erkenne die Verdauungsorgane.","login.user.ph":"du@email.com","login.pass.ph":"Passwort eingeben","reg.user.ph":"Wähle einen Benutzernamen","reg.email.ph":"du@email.com","reg.pass.ph":"Erstelle ein Passwort","reg.passConf.ph":"Bestätige dein Passwort","forgot.email.ph":"du@email.com","reset.newPass.ph":"Mindestens 8 Zeichen","reset.confPass.ph":"Passwort erneut eingeben","quiz.mode.duel.t":"KI-Duell","quiz.mode.duel.d":"Die KI wirft dir Anatomie-Aussagen zu — einige richtig, einige mit subtilen Fehlern. Erkenne, welche wahr und welche falsch ist. Training für kritisches Denken.","daily.title":"Tägliche Herausforderung","daily.streak":"Serie:","daily.days":"Tage","daily.reward":"Belohnung:","notebook.title":"BioNexus-Notizbuch","notebook.search":"Notizen durchsuchen...","notebook.filter.all":"Alle","notebook.filter.starred":"⭐ Wichtig","notebook.filter.bone":"🦴 Knochen","notebook.filter.muscle":"💪 Muskeln","notebook.filter.nervous":"🧠 Nerven","notebook.filter.cardio":"❤️ Herz-Kreislauf","notebook.filter.respiratory":"💨 Atmung","notebook.filter.digestive":"🍽️ Verdauung","notebook.empty.title":"Noch keine Notizen","notebook.empty.desc":"Füge deine erste Notiz hinzu, indem du auf <b>+ Neue Notiz</b> drückst, oder aus dem 3D-Viewer, wenn du eine Struktur in einem beliebigen System auswählst.","notebook.empty.cta":"+ Erste Notiz hinzufügen","notebook.editor.new":"Neue Notiz","notebook.editor.edit":"Notiz bearbeiten","notebook.lbl.title":"Titel","notebook.lbl.category":"Kategorie","notebook.lbl.subject":"Thema (optional)","notebook.lbl.content":"Inhalt","notebook.lbl.tags":"Tags (durch Komma getrennt)","notebook.lbl.color":"Farbe","notebook.lbl.starred":"Als wichtig markieren ⭐","notebook.cat.bone":"🦴 Knochen","notebook.cat.muscle":"💪 Muskel","notebook.cat.nervous":"🧠 Nerven","notebook.cat.cardio":"❤️ Herz-Kreislauf","notebook.cat.respiratory":"💨 Atmung","notebook.cat.digestive":"🍽️ Verdauung","notebook.cat.general":"📌 Allgemein","notebook.ph.title":"z. B. Femur — Ursprung ischiokrurale Muskeln","notebook.ph.subject":"z. B. Femur, Biceps brachii, Schultergelenk","notebook.ph.content":"Schreibe Beobachtungen, Definitionen, Merksätze...","notebook.ph.tags":"z. B. Prüfung, Anatomie 1, wichtig","notebook.btn.cancel":"Abbrechen","notebook.btn.delete":"🗑 Löschen","notebook.btn.save":"💾 Speichern","home.feat.notes.t":"Notizen & Lesezeichen","home.feat.notes.cta":"Notizbuch öffnen &rarr;","footer.report":"Ein Problem melden","report.title":"Ein Problem melden","report.intro":"Hast du einen Fehler, einen inhaltlichen Fehler gefunden oder einen Vorschlag? Sag es uns — es geht direkt an das Team.","report.lbl.type":"Typ","report.type.bug":"🐛 Fehler / Bug","report.type.content":"📚 Inhaltlicher Fehler","report.type.suggestion":"💡 Vorschlag","report.type.other":"❓ Etwas anderes","report.lbl.msg":"Beschreibung","report.ph.msg":"Beschreibe kurz das Problem oder den Vorschlag...","report.lbl.email":"E-Mail (optional, damit wir antworten können)","report.ph.email":"du@email.com","report.cancel":"Abbrechen","report.send":"Bericht senden","report.sending":"Wird gesendet...","report.ok":"Danke! Dein Bericht wurde gesendet.","report.err":"Konnte nicht gesendet werden. Bitte versuche es später erneut.","report.short":"Bitte beschreibe das Problem (mind. 5 Zeichen)."};
I18N.es = {"home.nav.systems":"Sistemas","home.nav.features":"Funciones","home.nav.learn":"Aprende","home.nav.contact":"Contacto","home.nav.login":"Iniciar sesión","home.hero.badge":"Anatomía humana 3D &nbsp;&middot;&nbsp; <span>Rumanía</span>","home.hero.title":"La anatomía humana en <span class=\"home-hero-grad\">3D interactivo</span>","home.hero.sub":"Explora sistemáticamente cada sistema del cuerpo humano. Los 6 ya están disponibles: óseo, muscular, nervioso, cardiovascular, respiratorio y digestivo.","home.hero.ctaPrimary":"Ver modelos 3D","home.hero.ctaSecondary":"Mis insignias","home.stats.bones":"Huesos modelados","home.stats.systems":"Sistemas disponibles","home.stats.questions":"Preguntas de quiz","home.stats.assistant":"Asistente de IA","home.systems.title":"Sistemas <span class=\"home-hero-grad\">anatómicos</span>","home.systems.sub":"Los 6 sistemas principales del cuerpo humano ya están disponibles en 3D interactivo.","home.sys.osos.t":"Sistema Óseo","home.sys.osos.d":"206 huesos modelados en 3D, cabeza · tronco · miembros, quiz interactivo.","home.sys.muscular.t":"Sistema Muscular","home.sys.muscular.d":"600+ músculos, grupos musculares, inserciones y acciones, nombres RO/latín.","home.sys.nervos.t":"Sistema Nervioso","home.sys.nervos.d":"Cerebro, médula espinal, nervios periféricos, vías neuronales.","home.sys.cardio.t":"Sistema Cardiovascular","home.sys.cardio.d":"Corazón, arterias, venas, capilares — circulación mayor y menor.","home.sys.digestiv.t":"Sistema Digestivo","home.sys.digestiv.d":"Recorrido completo: cavidad bucal → esófago → estómago → intestinos.","home.sys.respirator.t":"Sistema Respiratorio","home.sys.respirator.d":"Vías respiratorias, pulmones, alvéolos, la mecánica de la respiración.","home.sys.badge.ready":"Disponible ahora","home.sys.cta":"Explorar en 3D &rarr;","home.sys.badge.soon":"En desarrollo","home.sys.badge.planned":"Planificado","home.features.title":"Lo que puedes hacer con <span class=\"home-hero-grad\">BioNexus</span>","home.feat.skel.t":"Esqueleto 3D completo","home.feat.skel.d":"Rota, haz zoom, explora cada hueso en detalle. Todos los nombres en rumano, conforme a los manuales.","home.feat.skel.cta":"Abrir el esqueleto &rarr;","home.feat.quiz.t":"Minijuego: El Test Anatómico","home.feat.quiz.d":"Pon a prueba tus conocimientos. La cámara se desplaza automáticamente a cada hueso, identifica la respuesta correcta.","home.feat.quiz.cta":"Iniciar minijuego &rarr;","home.feat.ai.t":"Asistente de IA Biológico","home.feat.ai.d":"Haz preguntas sobre cualquier hueso o estructura. Respuestas instantáneas en el chat interactivo.","home.feat.struct.t":"Estructura del hueso","home.feat.struct.d":"Sección transversal interactiva — periostio, hueso compacto, hueso esponjoso, canal medular, médula, todo visible.","home.feat.search.t":"Búsqueda rápida","home.feat.search.d":"Escribe el nombre de cualquier hueso y el sitio salta a él al instante. Categorizado por secciones anatómicas.","home.feat.search.cta":"Buscar estructuras &rarr;","home.feat.details.t":"Detalles médicos","home.feat.details.d":"Categoría, tipo, descripción, articulaciones, detalles adicionales — panel completo para cada hueso.","home.learn.title":"Aprende con <span class=\"home-hero-grad\">manuales oficiales</span>","home.learn.sub":"Manuales universitarios de anatomía humana — referencias oficiales abiertas en una pestaña nueva.","home.learn.open":"Abrir manual &rarr;","home.learn.hint":"Los manuales se abren en el sitio oficial de la USMF en una nueva pestaña del navegador.","home.learn.m1.t":"Anatomía Humana · Volumen I","home.learn.m1.d":"Stefaneț M. — Osteología, artrología, miología. La base del aparato locomotor: huesos, articulaciones, músculos con descripciones morfofuncionales completas.","home.learn.m2.t":"Anatomía Humana · Volumen II","home.learn.m2.d":"Stefaneț M. — Esplacnología: aparatos digestivo, respiratorio y urogenital. Los órganos internos explicados sistémicamente con esquemas topográficos.","home.learn.m3.t":"Anatomía Humana · Volumen III","home.learn.m3.d":"Stefaneț M. — Sistema cardiovascular, sistema nervioso central y periférico, órganos de los sentidos. El volumen de la integración funcional.","home.learn.m4.t":"El Aparato Locomotor","home.learn.m4.d":"USMF · Compendio de cursos (2011). Sistematización del aparato locomotor: esqueleto axial, esqueleto apendicular, articulaciones y musculatura — formato PDF.","home.learn.m5.t":"Barron's · Anatomía y Fisiología","home.learn.m5.d":"Krumhardt & Alcamo (UMFST 2022) — manual de admisión para las facultades de medicina. Capítulo detallado: <b>Los huesos y las articulaciones</b> (osteogénesis, osteonas, sinartrosis, diartrosis, remodelación ósea).","home.learn.m6.t":"Fisiología del hueso","home.learn.m6.d":"Microestructura, médula, periostio y regeneración ósea.","home.footer":"BioNexus · Plataforma educativa de anatomía","footer.terms":"Términos","footer.privacy":"Privacidad","footer.source":"Contenido basado en “Anatomía Humana” — M. Ștefaneț (USMF)","login.tab.login":"Iniciar sesión","login.tab.register":"Registrarse","login.welcome":"Bienvenido de nuevo","login.user":"Email o usuario","login.pass":"Contraseña","login.submit":"Entrar","login.sub":"Inicia sesión en tu cuenta","login.guest":"o <a onclick=\"closeLogin()\">continúa como invitado</a>","reg.title":"Crea una cuenta","reg.user":"Nombre de usuario","reg.email":"Dirección de email","reg.pass":"Contraseña","reg.submit":"Crear cuenta","reg.sub":"Únete a BioNexus hoy","reg.note":"los datos se guardan localmente en el navegador, la contraseña se cifra con SHA-256","reg.terms":"Al crear una cuenta aceptas que los datos se almacenen solo localmente, cifrados, sin compartirse nunca con terceros.","auth.back":"Atrás","auth.or":"o","auth.guest":"Continuar como invitado","auth.art.title":"Anatomía humana en <span class=\"home-hero-grad\">3D interactivo</span>","auth.art.sub":"Inicia sesión para guardar tu progreso en los quizzes, sincronizar preferencias y acceder al modo administrador.","auth.art.p1":"206 huesos modelados fielmente en 3D","auth.art.p2":"Quiz adaptativo con 3 niveles de dificultad","auth.art.p3":"Asistente de IA de biología integrado","auth.art.p4":"Acceso sin conexión, todo en tu navegador","auth.art.quote":"\"La mejor plataforma de anatomía para estudiantes de secundaria y bachillerato.\"","auth.art.quote.by":"— Profesor de Biología","chat.status":"Asistente biológico en línea","chat.welcome":"¡Hola! Soy tu asistente de BioNexus. Te ayudo tanto con la anatomía como con el uso del sitio. Pregúntame lo que quieras o usa los atajos de abajo.","chat.ideas":"Algunas ideas: <i>&bdquo;¿Cuántos huesos hay?&rdquo;</i>, <i>&bdquo;¿Qué es el fémur?&rdquo;</i>","chat.placeholder":"Escribe una pregunta sobre anatomía...","header.sub":"Anatomía humana 3D","header.admin":"Admin","header.guest":"Invitado","header.back":"Atrás","sb.muscles":"Músculos","sb.searchMuscle":"Busca un músculo...","sb.footMuscle":"Sistema muscular:","sb.musclesWord":"músculos","load.muscleText":"Sistema muscular — modelos 3D en construcción","load.cardioText":"Cargando el sistema cardiovascular...","load.nervousText":"Cargando el sistema nervioso...","load.respText":"Cargando el sistema respiratorio...","load.digText":"Cargando el sistema digestivo...","view.muscleComplete":"Sistema muscular","view.cardioComplete":"Sistema cardiovascular","view.nervousComplete":"Sistema nervioso","view.respComplete":"Sistema respiratorio","view.digComplete":"Sistema digestivo","sb.dig":"Estructuras digestivas","sb.searchDig":"Busca una estructura...","sb.footDig":"Sistema digestivo:","info.digTitle":"Información de la Estructura","info.digPlaceholder":"Selecciona una estructura del modelo<br />o de la lista de la izquierda","info.muscleTitle":"Información del Músculo","info.musclePlaceholder":"Selecciona un músculo del modelo<br>o de la lista de la izquierda","nav.muAll":"Todos los Músculos","nav.muCap":"Cabeza y Cuello","nav.muTrunchi":"Tronco","nav.muMembre":"Miembros Superiores","nav.muInferioare":"Miembros Inferiores","home.sys.badge.beta":"Beta","nav.all":"Todos los Huesos","nav.cap":"Cráneo","nav.trunchi":"Tronco","nav.membre":"Miembros Superiores","nav.inferioare":"Miembros Inferiores","nav.structura":"Estructura del Hueso","sb.bones":"Huesos","sb.search":"Busca un hueso...","sb.foot":"Esqueleto humano:","sb.bonesWord":"huesos","load.text":"Cargando el modelo 3D...","load.error":"No se pudo cargar el modelo 3D.<br>Asegúrate de que la carpeta contenga los archivos lib/three.min.js, lib/OrbitControls.js y lib/GLTFLoader.js","view.title":"Vista","view.complete":"Esqueleto completo","quiz.title":"Minijuego: El Test Anatómico","quiz.start.h":"¿Conoces el esqueleto?","quiz.start.p":"Identifica el hueso resaltado entre 4 opciones.","quiz.diff.easy":"Fácil","quiz.diff.medium":"Medio","quiz.diff.hard":"Difícil","quiz.start.btn":"Iniciar Quiz","quiz.q":"Pregunta","quiz.score":"Puntuación:","quiz.q.text":"¿Cómo se llama el hueso resaltado en <span style=\"color:#3b82f6\">azul</span>?","quiz.skip":"Saltar","quiz.next":"Siguiente &#8594;","quiz.end.title":"¡Felicidades!","quiz.end.msg":"¡Bien hecho!","quiz.end.retry":"Intentar de nuevo","info.title":"Información del Hueso","info.placeholder":"Selecciona un hueso del modelo<br>o de la lista de la izquierda","admin.title":"Modo Administrador — Editor de Contenido","admin.sub":"Edita el contenido de todo el sitio — huesos, músculos, las estructuras de los sistemas nervioso, cardiovascular, respiratorio y digestivo, además del prompt de la IA.","admin.pass":"Contraseña de administrador","admin.login":"Autenticar","admin.pickBone":"Selecciona el hueso:","admin.fld.name":"Nombre","admin.fld.cat":"Categoría","admin.fld.type":"Tipo","admin.fld.desc":"Descripción","admin.fld.art":"Articulaciones (separadas por comas)","admin.fld.det":"Detalles adicionales","admin.save":"Guardar cambios","admin.export":"Exportar JSON","admin.reset":"Restablecer a valores predeterminados","err.fillBoth":"Rellena ambos campos.","err.fillAll":"Rellena todos los campos.","err.badCreds":"Usuario o contraseña incorrectos.","err.passShort":"La contraseña debe tener al menos 4 caracteres.","err.email":"Email no válido.","err.userTaken":"El usuario ya existe.","err.emailTaken":"El email ya está registrado.","err.adminPass":"Contraseña de administrador incorrecta.","user.menu.profil":"Perfil","user.menu.setari":"Ajustes","user.menu.logout":"Cerrar sesión","profile.back":"Atrás","profile.tagline":"Miembro de BioNexus","profile.tab.badges":"Insignias","profile.achieved":"Obtenidas","profile.profil.h":"Tu perfil","profile.profil.p":"El contenido de esta sección se añadirá más adelante.","profile.setari.h":"Ajustes","profile.setari.p":"El contenido de esta sección se añadirá más adelante.","profile.insigne.h":"Mis insignias","profile.insigne.p":"El contenido de esta sección se añadirá más adelante.","home.feat.ai.cta":"Abrir el chat &rarr;","home.feat.curio.t":"Curiosidades","home.feat.curio.d":"Datos asombrosos sobre el cuerpo humano — cuántos huesos, el más pequeño, el músculo más fuerte. Descubre una curiosidad al azar.","home.feat.curio.cta":"Ver una curiosidad &rarr;","login.forgot":"¿Olvidaste la contraseña?","login.noAccount":"¿No tienes cuenta? <a onclick=\"showAuthMode('register')\">Crea una cuenta</a>","reg.passHint":"Al menos 8 caracteres","reg.passConf":"Confirmar contraseña","reg.termsAccept":"Acepto los <a class=\"auth-link\" onclick=\"event.preventDefault();showTerms('terms')\">Términos del Servicio</a> y la <a class=\"auth-link\" onclick=\"event.preventDefault();showTerms('privacy')\">Política de Privacidad</a>","reg.human":"Soy humano","reg.captcha.title":"Verificación de seguridad","reg.haveAccount":"¿Ya tienes una cuenta? <a onclick=\"showAuthMode('login')\">Inicia sesión</a>","home.feat.edu.t":"Recurso educativo","home.feat.edu.d":"BioNexus es una plataforma educativa abierta. Manuales universitarios oficiales de anatomía disponibles directamente en la sección Aprende.","home.feat.edu.cta":"Ver los manuales &rarr;","home.reviews.title":"Reseñas <span class=\"home-hero-grad\">de los usuarios</span>","home.reviews.sub":"Lee las experiencias de otros usuarios o deja tu propia reseña una vez que hayas iniciado sesión.","home.reviews.empty":"0 reseñas","home.reviews.login":"Inicia sesión para dejar una reseña.","home.reviews.ph":"Cuéntanos qué opinas sobre BioNexus...","home.reviews.submit":"Publicar reseña","home.reviews.none":"Aún no hay reseñas — ¡sé el primero!","home.stats.verified":"Sitio educativo · Verificado","settings.adminH":"Modo Administrador","settings.adminSub":"Acceso al editor de contenido (descripciones de huesos, categorías, exportación JSON). Requiere autenticación.","settings.adminBtn":"Abrir el panel Admin","quiz.pick.h":"Elige un tipo de test","quiz.pick.p":"Dos modos disponibles — elige cómo quieres ponerte a prueba.","quiz.mode.visual.t":"Identifica el Hueso","quiz.mode.visual.d":"Mira un hueso resaltado en azul sobre el esqueleto y elige el nombre correcto entre 4 opciones. Minijuego visual rápido.","quiz.mode.know.t":"Test de Conocimientos","quiz.mode.know.d":"Preguntas sobre descripciones, articulaciones y detalles (Fácil/Medio) más preguntas de los manuales Stefaneț Vol. I-III (Difícil).","quiz.back":"Atrás","quiz.sys.h":"Elige el sistema anatómico","quiz.sys.p":"¿Sobre qué sistema quieres ponerte a prueba?","quiz.sys.osos.t":"Sistema Óseo","quiz.sys.osos.d":"206 huesos en cabeza, tronco y miembros. Preguntas visuales y de conocimientos + los manuales Ștefaneț (Difícil).","quiz.sys.muscular.t":"Sistema Muscular","quiz.sys.muscular.d":"350+ músculos estriados con nombres RO/latín, orígenes, inserciones y acciones.","quiz.sys.nervous.t":"Sistema Nervioso","quiz.sys.nervous.d":"Cerebro, médula espinal, nervios periféricos — nombres RO + latín.","quiz.sys.cardio.t":"Sistema Cardiovascular","quiz.sys.cardio.d":"Corazón, arterias, venas — identifica las estructuras y sus nombres en latín.","quiz.sys.respiratory.t":"Sistema Respiratorio","quiz.sys.respiratory.d":"Vías aéreas, pulmones, laringe, diafragma — nombres RO + latín.","quiz.sys.digestive.t":"Sistema Digestivo","quiz.sys.digestive.d":"Estómago, hígado, intestinos, páncreas — identifica los órganos digestivos.","login.user.ph":"tu@email.com","login.pass.ph":"Introduce tu contraseña","reg.user.ph":"Elige un nombre de usuario","reg.email.ph":"tu@email.com","reg.pass.ph":"Crea una contraseña","reg.passConf.ph":"Confirma tu contraseña","forgot.email.ph":"tu@email.com","reset.newPass.ph":"Al menos 8 caracteres","reset.confPass.ph":"Reintroduce la contraseña","quiz.mode.duel.t":"Duelo de IA","quiz.mode.duel.d":"La IA te lanza afirmaciones sobre anatomía — algunas correctas, otras con errores sutiles. Detecta cuál es verdadera y cuál es falsa. Entrenamiento del pensamiento crítico.","daily.title":"Reto del día","daily.streak":"Racha:","daily.days":"días","daily.reward":"Recompensa:","notebook.title":"Cuaderno BioNexus","notebook.search":"Buscar en las notas...","notebook.filter.all":"Todas","notebook.filter.starred":"⭐ Importantes","notebook.filter.bone":"🦴 Huesos","notebook.filter.muscle":"💪 Músculos","notebook.filter.nervous":"🧠 Nervioso","notebook.filter.cardio":"❤️ Cardio","notebook.filter.respiratory":"💨 Respiratorio","notebook.filter.digestive":"🍽️ Digestivo","notebook.empty.title":"Aún no hay notas","notebook.empty.desc":"Añade tu primera nota pulsando <b>+ Nota nueva</b> o desde el visor 3D cuando selecciones una estructura en cualquier sistema.","notebook.empty.cta":"+ Añadir la primera nota","notebook.editor.new":"Nota nueva","notebook.editor.edit":"Editar nota","notebook.lbl.title":"Título","notebook.lbl.category":"Categoría","notebook.lbl.subject":"Tema (opcional)","notebook.lbl.content":"Contenido","notebook.lbl.tags":"Etiquetas (separadas por comas)","notebook.lbl.color":"Color","notebook.lbl.starred":"Marcar como importante ⭐","notebook.cat.bone":"🦴 Hueso","notebook.cat.muscle":"💪 Músculo","notebook.cat.nervous":"🧠 Nervioso","notebook.cat.cardio":"❤️ Cardiovascular","notebook.cat.respiratory":"💨 Respiratorio","notebook.cat.digestive":"🍽️ Digestivo","notebook.cat.general":"📌 General","notebook.ph.title":"ej: Fémur — origen de los isquiotibiales","notebook.ph.subject":"ej: Fémur, Bíceps braquial, articulación del hombro","notebook.ph.content":"Escribe observaciones, definiciones, mnemotécnicas...","notebook.ph.tags":"ej: examen, anatomía 1, importante","notebook.btn.cancel":"Cancelar","notebook.btn.delete":"🗑 Eliminar","notebook.btn.save":"💾 Guardar","home.feat.notes.t":"Notas y Marcadores","home.feat.notes.cta":"Abrir cuaderno &rarr;","footer.report":"Reportar un problema","report.title":"Reportar un problema","report.intro":"¿Encontraste un error, una equivocación de contenido o tienes una sugerencia? Cuéntanos — llega directo al equipo.","report.lbl.type":"Tipo","report.type.bug":"🐛 Error / bug","report.type.content":"📚 Error de contenido","report.type.suggestion":"💡 Sugerencia","report.type.other":"❓ Otra cosa","report.lbl.msg":"Descripción","report.ph.msg":"Describe brevemente el problema o la sugerencia...","report.lbl.email":"Email (opcional, para poder responderte)","report.ph.email":"tu@email.com","report.cancel":"Cancelar","report.send":"Enviar el reporte","report.sending":"Enviando...","report.ok":"¡Gracias! Tu reporte fue enviado.","report.err":"No se pudo enviar. Inténtalo de nuevo más tarde.","report.short":"Describe el problema (mín. 5 caracteres)."};
I18N.hu = {"home.nav.systems":"Rendszerek","home.nav.features":"Funkciók","home.nav.learn":"Tanulás","home.nav.contact":"Kapcsolat","home.nav.login":"Bejelentkezés","home.hero.badge":"Emberi anatómia 3D &nbsp;&middot;&nbsp; <span>Románia</span>","home.hero.title":"Az emberi anatómia <span class=\"home-hero-grad\">interaktív 3D-ben</span>","home.hero.sub":"Fedezd fel rendszerezetten az emberi test összes rendszerét. Most már mind a 6 elérhető: csont-, izom-, ideg-, szív- és érrendszer, légző- és emésztőrendszer.","home.hero.ctaPrimary":"3D modellek megtekintése","home.hero.ctaSecondary":"Jelvényeim","home.stats.bones":"Modellezett csont","home.stats.systems":"Elérhető rendszer","home.stats.questions":"Kvízkérdés","home.stats.assistant":"MI-asszisztens","home.systems.title":"Anatómiai <span class=\"home-hero-grad\">rendszerek</span>","home.systems.sub":"Az emberi test mind a 6 fő rendszere most már elérhető interaktív 3D-ben.","home.sys.osos.t":"Csontrendszer","home.sys.osos.d":"206 csont 3D-ben modellezve, fej · törzs · végtagok, interaktív kvíz.","home.sys.muscular.t":"Izomrendszer","home.sys.muscular.d":"600+ izom, izomcsoportok, tapadások és működés, RO/latin nevekkel.","home.sys.nervos.t":"Idegrendszer","home.sys.nervos.d":"Agy, gerincvelő, perifériás idegek, idegpályák.","home.sys.cardio.t":"Szív- és érrendszer","home.sys.cardio.d":"Szív, artériák, vénák, hajszálerek — a nagy- és kisvérkör egyaránt.","home.sys.digestiv.t":"Emésztőrendszer","home.sys.digestiv.d":"Teljes útvonal: szájüreg → nyelőcső → gyomor → belek.","home.sys.respirator.t":"Légzőrendszer","home.sys.respirator.d":"Légutak, tüdő, léghólyagok, a légzés mechanikája.","home.sys.badge.ready":"Most elérhető","home.sys.cta":"Felfedezés 3D-ben &rarr;","home.sys.badge.soon":"Fejlesztés alatt","home.sys.badge.planned":"Tervezett","home.features.title":"Mit tehetsz a <span class=\"home-hero-grad\">BioNexus</span> segítségével","home.feat.skel.t":"Teljes 3D csontváz","home.feat.skel.d":"Forgasd, nagyíts, fedezd fel részletesen minden csontot. Minden név románul, a tankönyveknek megfelelően.","home.feat.skel.cta":"Csontváz megnyitása &rarr;","home.feat.quiz.t":"Minijáték: Az anatómiai teszt","home.feat.quiz.d":"Tedd próbára a tudásod. A kamera automatikusan minden csonthoz mozdul, azonosítsd a helyes választ.","home.feat.quiz.cta":"Minijáték indítása &rarr;","home.feat.ai.t":"Biológiai MI-asszisztens","home.feat.ai.d":"Tegyél fel kérdéseket bármely csontról vagy struktúráról. Azonnali válaszok az interaktív csevegőablakban.","home.feat.struct.t":"A csont szerkezete","home.feat.struct.d":"Interaktív keresztmetszet — csonthártya, tömör csont, szivacsos állomány, velőűr, csontvelő, minden látható.","home.feat.search.t":"Gyorskeresés","home.feat.search.d":"Írj be bármilyen csontnevet, és az oldal azonnal odaugrik. Anatómiai szakaszok szerint kategorizálva.","home.feat.search.cta":"Struktúrák keresése &rarr;","home.feat.details.t":"Orvosi részletek","home.feat.details.d":"Kategória, típus, leírás, ízületek, további részletek — teljes panel minden csonthoz.","home.learn.title":"Tanulj a <span class=\"home-hero-grad\">hivatalos tankönyvekből</span>","home.learn.sub":"Egyetemi szintű emberi anatómia tankönyvek — hivatalos források, új lapon megnyitva.","home.learn.open":"Tankönyv megnyitása &rarr;","home.learn.hint":"A tankönyvek a hivatalos USMF weboldalon, a böngésző új lapján nyílnak meg.","home.learn.m1.t":"Emberi anatómia · I. kötet","home.learn.m1.d":"Stefaneț M. — Csonttan, ízülettan, izomtan. A mozgásszervrendszer alapja: csontok, ízületek, izmok teljes morfofunkcionális leírásokkal.","home.learn.m2.t":"Emberi anatómia · II. kötet","home.learn.m2.d":"Stefaneț M. — Zsigertan: emésztő-, légző- és húgy-ivarrendszer. A belső szervek rendszerszemléletű magyarázata topográfiai vázlatokkal.","home.learn.m3.t":"Emberi anatómia · III. kötet","home.learn.m3.d":"Stefaneț M. — Szív- és érrendszer, központi és perifériás idegrendszer, érzékszervek. A funkcionális integráció kötete.","home.learn.m4.t":"A mozgás- és támasztószervrendszer","home.learn.m4.d":"USMF · Előadásgyűjtemény (2011). A mozgásszervrendszer rendszerezése: axiális csontváz, végtagi csontváz, ízületek és izomzat — PDF formátumban.","home.learn.m5.t":"Barron's · Anatómia és élettan","home.learn.m5.d":"Krumhardt & Alcamo (UMFST 2022) — felvételi tankönyv orvosi egyetemekre. Részletes fejezet: <b>Csontok és ízületek</b> (csontképződés, oszteonok, szinartrózisok, diartrózisok, csontátépülés).","home.learn.m6.t":"A csont élettana","home.learn.m6.d":"Mikroszerkezet, csontvelő, csonthártya és a csontregeneráció.","home.footer":"BioNexus · Anatómiai oktatási platform","footer.terms":"Feltételek","footer.privacy":"Adatvédelem","footer.source":"A tartalom az „Emberi anatómia” alapján — M. Ștefaneț (USMF)","login.tab.login":"Bejelentkezés","login.tab.register":"Regisztráció","login.welcome":"Üdv újra","login.user":"Email vagy felhasználónév","login.pass":"Jelszó","login.submit":"Bejelentkezés","login.sub":"Jelentkezz be a fiókodba","login.guest":"vagy <a onclick=\"closeLogin()\">folytasd vendégként</a>","reg.title":"Fiók létrehozása","reg.user":"Felhasználónév","reg.email":"Email-cím","reg.pass":"Jelszó","reg.submit":"Fiók létrehozása","reg.sub":"Csatlakozz még ma a BioNexushoz","reg.note":"az adatok helyben, a böngészőben tárolódnak, a jelszó SHA-256 titkosítású","reg.terms":"A fiók létrehozásával elfogadod, hogy az adatok csak helyben, titkosítva tárolódnak, harmadik féllel soha nem osztjuk meg.","auth.back":"Vissza","auth.or":"vagy","auth.guest":"Folytatás vendégként","auth.art.title":"Emberi anatómia <span class=\"home-hero-grad\">interaktív 3D-ben</span>","auth.art.sub":"Jelentkezz be, hogy elmentsd a kvízek haladását, szinkronizáld a beállításokat és elérd az adminisztrátori módot.","auth.art.p1":"206 csont hűen modellezve 3D-ben","auth.art.p2":"Adaptív kvíz 3 nehézségi szinttel","auth.art.p3":"Beépített biológiai MI-asszisztens","auth.art.p4":"Offline hozzáférés, minden a böngésződben","auth.art.quote":"„A legjobb anatómiai platform általános és középiskolás diákoknak.\"","auth.art.quote.by":"— Biológiatanár","chat.status":"Biológiai asszisztens online","chat.welcome":"Szia! A BioNexus asszisztense vagyok. Segítek mind az anatómiában, mind az oldal használatában. Kérdezz bármit, vagy használd az alábbi gyorsgombokat.","chat.ideas":"Néhány ötlet: <i>&bdquo;Hány csont?&rdquo;</i>, <i>&bdquo;Mi a combcsont?&rdquo;</i>","chat.placeholder":"Írj egy kérdést az anatómiáról...","header.sub":"Emberi anatómia 3D","header.admin":"Admin","header.guest":"Vendég","header.back":"Vissza","sb.muscles":"Izmok","sb.searchMuscle":"Keress egy izmot...","sb.footMuscle":"Izomrendszer:","sb.musclesWord":"izom","load.muscleText":"Izomrendszer — 3D modellek fejlesztés alatt","load.cardioText":"Szív- és érrendszer betöltése...","load.nervousText":"Idegrendszer betöltése...","load.respText":"Légzőrendszer betöltése...","load.digText":"Emésztőrendszer betöltése...","view.muscleComplete":"Izomrendszer","view.cardioComplete":"Szív- és érrendszer","view.nervousComplete":"Idegrendszer","view.respComplete":"Légzőrendszer","view.digComplete":"Emésztőrendszer","sb.dig":"Emésztőszervi struktúrák","sb.searchDig":"Keress egy struktúrát...","sb.footDig":"Emésztőrendszer:","info.digTitle":"Struktúra-információk","info.digPlaceholder":"Válassz egy struktúrát a modellről<br />vagy a bal oldali listából","info.muscleTitle":"Izom-információk","info.musclePlaceholder":"Válassz egy izmot a modellről<br>vagy a bal oldali listából","nav.muAll":"Összes izom","nav.muCap":"Fej és nyak","nav.muTrunchi":"Törzs","nav.muMembre":"Felső végtagok","nav.muInferioare":"Alsó végtagok","home.sys.badge.beta":"Béta","nav.all":"Összes csont","nav.cap":"Koponya","nav.trunchi":"Törzs","nav.membre":"Felső végtagok","nav.inferioare":"Alsó végtagok","nav.structura":"A csont szerkezete","sb.bones":"Csontok","sb.search":"Keress egy csontot...","sb.foot":"Emberi csontváz:","sb.bonesWord":"csont","load.text":"3D modell betöltése...","load.error":"Nem sikerült betölteni a 3D modellt.<br>Győződj meg róla, hogy a mappa tartalmazza a lib/three.min.js, lib/OrbitControls.js és lib/GLTFLoader.js fájlokat","view.title":"Nézet","view.complete":"Teljes csontváz","quiz.title":"Minijáték: Az anatómiai teszt","quiz.start.h":"Ismered a csontvázat?","quiz.start.p":"Azonosítsd a kiemelt csontot 4 lehetőség közül.","quiz.diff.easy":"Könnyű","quiz.diff.medium":"Közepes","quiz.diff.hard":"Nehéz","quiz.start.btn":"Kvíz indítása","quiz.q":"Kérdés","quiz.score":"Pontszám:","quiz.q.text":"Mi a neve a <span style=\"color:#3b82f6\">kékkel</span> kiemelt csontnak?","quiz.skip":"Kihagyás","quiz.next":"Következő &#8594;","quiz.end.title":"Gratulálunk!","quiz.end.msg":"Szép munka!","quiz.end.retry":"Próbáld újra","info.title":"Csont-információk","info.placeholder":"Válassz egy csontot a modellről<br>vagy a bal oldali listából","admin.title":"Adminisztrátori mód — Tartalomszerkesztő","admin.sub":"Szerkeszd a teljes oldal tartalmát — csontok, izmok, az ideg-, szív- és érrendszeri, légző- és emésztőrendszeri struktúrák, valamint az MI-prompt.","admin.pass":"Admin jelszó","admin.login":"Hitelesítés","admin.pickBone":"Válaszd ki a csontot:","admin.fld.name":"Név","admin.fld.cat":"Kategória","admin.fld.type":"Típus","admin.fld.desc":"Leírás","admin.fld.art":"Ízületek (vesszővel elválasztva)","admin.fld.det":"További részletek","admin.save":"Módosítások mentése","admin.export":"JSON exportálása","admin.reset":"Visszaállítás az alapértékekre","err.fillBoth":"Töltsd ki mindkét mezőt.","err.fillAll":"Töltsd ki az összes mezőt.","err.badCreds":"Hibás felhasználónév vagy jelszó.","err.passShort":"A jelszónak legalább 4 karakterből kell állnia.","err.email":"Érvénytelen email.","err.userTaken":"A felhasználónév már foglalt.","err.emailTaken":"Az email már regisztrálva van.","err.adminPass":"Hibás adminisztrátori jelszó.","user.menu.profil":"Profil","user.menu.setari":"Beállítások","user.menu.logout":"Kijelentkezés","profile.back":"Vissza","profile.tagline":"BioNexus tag","profile.tab.badges":"Jelvények","profile.achieved":"Megszerezve","profile.profil.h":"A profilod","profile.profil.p":"Ennek a szakasznak a tartalma később kerül hozzáadásra.","profile.setari.h":"Beállítások","profile.setari.p":"Ennek a szakasznak a tartalma később kerül hozzáadásra.","profile.insigne.h":"Jelvényeim","profile.insigne.p":"Ennek a szakasznak a tartalma később kerül hozzáadásra.","home.feat.ai.cta":"Csevegőablak megnyitása &rarr;","home.feat.curio.t":"Érdekességek","home.feat.curio.d":"Elképesztő tények az emberi testről — hány csont, a legkisebb, a legerősebb izom. Fedezz fel egy véletlenszerű érdekességet.","home.feat.curio.cta":"Érdekesség mutatása &rarr;","login.forgot":"Elfelejtetted a jelszavad?","login.noAccount":"Nincs fiókod? <a onclick=\"showAuthMode('register')\">Hozz létre egyet</a>","reg.passHint":"Legalább 8 karakter","reg.passConf":"Jelszó megerősítése","reg.termsAccept":"Elfogadom a <a class=\"auth-link\" onclick=\"event.preventDefault();showTerms('terms')\">Felhasználási feltételeket</a> és az <a class=\"auth-link\" onclick=\"event.preventDefault();showTerms('privacy')\">Adatvédelmi irányelveket</a>","reg.human":"Nem vagyok robot","reg.captcha.title":"Biztonsági ellenőrzés","reg.haveAccount":"Már van fiókod? <a onclick=\"showAuthMode('login')\">Jelentkezz be</a>","home.feat.edu.t":"Oktatási forrás","home.feat.edu.d":"A BioNexus egy nyílt oktatási platform. Hivatalos egyetemi anatómia tankönyvek közvetlenül elérhetők a Tanulás szekcióban.","home.feat.edu.cta":"Tankönyvek böngészése &rarr;","home.reviews.title":"Vélemények <span class=\"home-hero-grad\">a felhasználóktól</span>","home.reviews.sub":"Olvasd el mások tapasztalatait, vagy hagyd itt a sajátodat, miután bejelentkeztél.","home.reviews.empty":"0 vélemény","home.reviews.login":"Jelentkezz be, hogy véleményt írhass.","home.reviews.ph":"Mondd el, mit gondolsz a BioNexusról...","home.reviews.submit":"Vélemény közzététele","home.reviews.none":"Még nincs vélemény — legyél te az első!","home.stats.verified":"Oktatási oldal · Ellenőrzött","settings.adminH":"Adminisztrátori mód","settings.adminSub":"Hozzáférés a tartalomszerkesztőhöz (csontleírások, kategóriák, JSON export). Hitelesítés szükséges.","settings.adminBtn":"Admin panel megnyitása","quiz.pick.h":"Válassz kvíztípust","quiz.pick.p":"Két mód érhető el — válaszd ki, hogyan szeretnéd tesztelni magad.","quiz.mode.visual.t":"Azonosítsd a csontot","quiz.mode.visual.d":"Láss egy kékkel kiemelt csontot a csontvázon, és válaszd ki a helyes nevet 4 lehetőség közül. Gyors vizuális minijáték.","quiz.mode.know.t":"Tudásteszt","quiz.mode.know.d":"Kérdések leírásokról, ízületekről és részletekről (Könnyű/Közepes), valamint kérdések a Stefaneț I–III. kötet tankönyveiből (Nehéz).","quiz.back":"Vissza","quiz.sys.h":"Válaszd ki az anatómiai rendszert","quiz.sys.p":"Melyik rendszerből szeretnéd tesztelni magad?","quiz.sys.osos.t":"Csontrendszer","quiz.sys.osos.d":"206 csont a fejen, törzsön és végtagokon. Vizuális és tudáskérdések + a Ștefaneț tankönyvek (Nehéz).","quiz.sys.muscular.t":"Izomrendszer","quiz.sys.muscular.d":"350+ harántcsíkolt izom RO/latin nevekkel, eredésekkel, tapadásokkal és működéssel.","quiz.sys.nervous.t":"Idegrendszer","quiz.sys.nervous.d":"Agy, gerincvelő, perifériás idegek — RO + latin nevek.","quiz.sys.cardio.t":"Szív- és érrendszer","quiz.sys.cardio.d":"Szív, artériák, vénák — azonosítsd a struktúrákat és latin neveiket.","quiz.sys.respiratory.t":"Légzőrendszer","quiz.sys.respiratory.d":"Légutak, tüdő, gége, rekeszizom — RO + latin nevek.","quiz.sys.digestive.t":"Emésztőrendszer","quiz.sys.digestive.d":"Gyomor, máj, belek, hasnyálmirigy — azonosítsd az emésztőszerveket.","login.user.ph":"te@email.com","login.pass.ph":"Add meg a jelszavad","reg.user.ph":"Válassz felhasználónevet","reg.email.ph":"te@email.com","reg.pass.ph":"Hozz létre egy jelszót","reg.passConf.ph":"Erősítsd meg a jelszavad","forgot.email.ph":"te@email.com","reset.newPass.ph":"Legalább 8 karakter","reset.confPass.ph":"Add meg újra a jelszót","quiz.mode.duel.t":"MI-párbaj","quiz.mode.duel.d":"Az MI anatómiai állításokat dob feléd — egyesek helyesek, mások finom hibákkal. Ismerd fel, melyik igaz és melyik hamis. Kritikai gondolkodás edzése.","daily.title":"Napi kihívás","daily.streak":"Sorozat:","daily.days":"nap","daily.reward":"Jutalom:","notebook.title":"BioNexus jegyzetfüzet","notebook.search":"Keresés a jegyzetek között...","notebook.filter.all":"Összes","notebook.filter.starred":"⭐ Fontos","notebook.filter.bone":"🦴 Csontok","notebook.filter.muscle":"💪 Izmok","notebook.filter.nervous":"🧠 Ideg","notebook.filter.cardio":"❤️ Szív","notebook.filter.respiratory":"💨 Légző","notebook.filter.digestive":"🍽️ Emésztő","notebook.empty.title":"Még nincs jegyzet","notebook.empty.desc":"Add hozzá az első jegyzeted a <b>+ Új jegyzet</b> gombbal, vagy a 3D nézegetőből, amikor bármely rendszerben kiválasztasz egy struktúrát.","notebook.empty.cta":"+ Első jegyzet hozzáadása","notebook.editor.new":"Új jegyzet","notebook.editor.edit":"Jegyzet szerkesztése","notebook.lbl.title":"Cím","notebook.lbl.category":"Kategória","notebook.lbl.subject":"Tárgy (opcionális)","notebook.lbl.content":"Tartalom","notebook.lbl.tags":"Címkék (vesszővel elválasztva)","notebook.lbl.color":"Szín","notebook.lbl.starred":"Megjelölés fontosként ⭐","notebook.cat.bone":"🦴 Csont","notebook.cat.muscle":"💪 Izom","notebook.cat.nervous":"🧠 Ideg","notebook.cat.cardio":"❤️ Szív- és érrendszer","notebook.cat.respiratory":"💨 Légző","notebook.cat.digestive":"🍽️ Emésztő","notebook.cat.general":"📌 Általános","notebook.ph.title":"pl. Combcsont — hajlítóizmok eredése","notebook.ph.subject":"pl. Combcsont, Biceps brachii, vállízület","notebook.ph.content":"Írj megfigyeléseket, definíciókat, memóriafogásokat...","notebook.ph.tags":"pl. vizsga, anatómia 1, fontos","notebook.btn.cancel":"Mégse","notebook.btn.delete":"🗑 Törlés","notebook.btn.save":"💾 Mentés","home.feat.notes.t":"Jegyzetek és könyvjelzők","home.feat.notes.cta":"Jegyzetfüzet megnyitása &rarr;","footer.report":"Probléma jelentése","report.title":"Probléma jelentése","report.intro":"Hibát, tartalmi tévedést találtál, vagy van egy javaslatod? Mondd el — egyenesen a csapathoz jut.","report.lbl.type":"Típus","report.type.bug":"🐛 Hiba / bug","report.type.content":"📚 Tartalmi hiba","report.type.suggestion":"💡 Javaslat","report.type.other":"❓ Egyéb","report.lbl.msg":"Leírás","report.ph.msg":"Írd le röviden a problémát vagy a javaslatot...","report.lbl.email":"Email (opcionális, hogy válaszolhassunk)","report.ph.email":"te@email.com","report.cancel":"Mégse","report.send":"Jelentés küldése","report.sending":"Küldés...","report.ok":"Köszönjük! A jelentésed elküldtük.","report.err":"Nem sikerült elküldeni. Kérjük, próbáld újra később.","report.short":"Kérjük, írd le a problémát (legalább 5 karakter)."};

Object.assign(I18N.ro, { "auth.loginToast": "Bine ai revenit, {name}!", "daily.go": "Începe provocarea" });
Object.assign(I18N.en, { "auth.loginToast": "Welcome back, {name}!", "daily.go": "Start the challenge" });
Object.assign(I18N.fr, { "auth.loginToast": "Bon retour, {name} !", "daily.go": "Commencer le défi" });
Object.assign(I18N.de, { "auth.loginToast": "Willkommen zurück, {name}!", "daily.go": "Herausforderung starten" });
Object.assign(I18N.es, { "auth.loginToast": "¡Bienvenido de nuevo, {name}!", "daily.go": "Empezar el reto" });
Object.assign(I18N.hu, { "auth.loginToast": "Üdv újra, {name}!", "daily.go": "Kihívás indítása" });

document.addEventListener("click", function (e) {
  var b = e.target.closest && e.target.closest(".lang-btn");
  if (!b) return;
  applyLanguage(b.dataset.lang);
});
applyLanguage(CUR_LANG);

(function () {
  var saved = localStorage.getItem("bionexus_theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);
  function applyTheme(th) {
    var orig = th;
    if (th !== "light" && th !== "dark") th = "dark";
    document.documentElement.setAttribute("data-theme", th);
    if (orig === "light" || orig === "dark") localStorage.setItem("bionexus_theme", orig);
    document.querySelectorAll(".theme-btn").forEach(function (b) {
      b.classList.toggle("active", b.dataset.theme === th);
    });
  }
  window.applyTheme = applyTheme;
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest(".theme-btn");
    if (!b) return;
    applyTheme(b.dataset.theme);
  });
  applyTheme(saved);
})();

(function () {
  var planets = [];
  var radii = { 1: 140, 2: 165, 3: 190, 4: 215, 5: 240, 6: 270 };
  var periods = { 1: 24, 2: 30, 3: 36, 4: 42, 5: 48, 6: 54 };
  var startAngles = { 1: 0, 2: -1.1, 3: -2.3, 4: -3.5, 5: -4.7, 6: -5.9 };
  var directions = { 1: 1, 2: -1, 3: 1, 4: -1, 5: 1, 6: -1 };
  function init() {
    var nodes = document.querySelectorAll(".solar-system .orbit .planet");
    nodes.forEach(function (p) {
      var orbit = p.parentElement;
      var m = orbit.className.match(/orbit-(\d+)/) || [];
      var n = parseInt(m[1] || "1", 10);
      planets.push({
        el: p,
        radius: radii[n] || 140,
        period: (periods[n] || 30) * 1000,
        startAngle: startAngles[n] || 0,
        dir: directions[n] || 1,
      });
    });
    if (planets.length) requestAnimationFrame(tick);
  }
  function tick() {
    var now = performance.now();
    for (var i = 0; i < planets.length; i++) {
      var p = planets[i];
      var theta = p.startAngle + p.dir * (now / p.period) * 2 * Math.PI;
      var x = Math.cos(theta - Math.PI / 2) * p.radius;
      var y = Math.sin(theta - Math.PI / 2) * p.radius;
      p.el.style.transform = "translate(" + x.toFixed(2) + "px," + y.toFixed(2) + "px)";
    }
    requestAnimationFrame(tick);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

(function () {
  var nav = document.querySelector(".home-nav");
  var ov = document.getElementById("homeOverlay");
  if (!nav || !ov) return;
  var ADD_THRESHOLD = 40,
    REMOVE_THRESHOLD = 10;
  var ticking = false;
  function applyScroll(top) {
    var has = nav.classList.contains("scrolled");
    if (!has && top > ADD_THRESHOLD) nav.classList.add("scrolled");
    else if (has && top < REMOVE_THRESHOLD) nav.classList.remove("scrolled");
  }
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      var top = ov.scrollTop;
      if (top === 0 && window.scrollY > 0) top = window.scrollY;
      applyScroll(top);
      ticking = false;
    });
  }
  ov.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
  applyScroll(ov.scrollTop || window.scrollY);
  var links = document.querySelectorAll(".home-nav-center a");
  links.forEach(function (l) {
    l.classList.remove("active");
  });
  document.querySelectorAll(".home-learn-card").forEach(function (card) {
    card.addEventListener("click", function (e) {
      var href = card.getAttribute("href");
      if (!href) return;
      try {
        var req = new XMLHttpRequest();
        req.open("HEAD", href, true);
        req.onload = function () {
          if (req.status >= 400)
            alert(
              (CUR_LANG === "en" ? "PDF not available yet: " : "PDF-ul nu este încă disponibil: ") +
                href
            );
        };
        req.send();
      } catch (_) {}
    });
  });
})();

applyUserBadge();

var _lastClickXY = { x: 0, y: 0 };
function positionBoneOverlay() {
  var bnoOverlay = document.getElementById("boneNameOverlay");
  if (!bnoOverlay) return;
  var pad = 12;
  var ow = bnoOverlay.offsetWidth || 200,
    oh = bnoOverlay.offsetHeight || 60;
  var x = _lastClickXY.x,
    y = _lastClickXY.y;
  if (x + ow + pad > window.innerWidth) x = x - ow - pad;
  else x = x + pad;
  if (y + oh + pad > window.innerHeight) y = y - oh - pad;
  else y = y + pad;
  if (x < 4) x = 4;
  if (y < 4) y = 4;
  bnoOverlay.style.left = x + "px";
  bnoOverlay.style.top = y + "px";
}
window.positionBoneOverlay = positionBoneOverlay;
(function () {
  var v = document.getElementById("viewer");
  if (!v) return;
  v.addEventListener(
    "click",
    function (e) {
      _lastClickXY.x = e.clientX;
      _lastClickXY.y = e.clientY;
    },
    true
  );
})();

var quizBank = {
  easy: [
    {
      bone: "femur",
      options: ["femur", "tibia", "humerus", "fibula"],
      hint: "Cel mai lung os din corp",
    },
    {
      bone: "stern",
      options: ["stern", "coaste-adevarate", "clavicula", "omoplat"],
      hint: "Os plat central pe peretele anterior al toracelui",
    },
    {
      bone: "mandibula",
      options: ["mandibula", "maxilar", "frontal", "occipital"],
      hint: "Singurul os mobil al craniului",
    },
    {
      bone: "frontal",
      options: ["frontal", "parietal", "occipital", "temporal"],
      hint: "Formeaza fruntea",
    },
    {
      bone: "occipital",
      options: ["occipital", "frontal", "parietal", "sfenoid"],
      hint: "Are foramen magnum, articulat cu atlasul",
    },
    {
      bone: "clavicula",
      options: ["clavicula", "omoplat", "stern", "humerus"],
      hint: "Os in forma de S la baza gatului",
    },
    {
      bone: "patela",
      options: ["patela", "tibia", "femur", "fibula"],
      hint: "Rotula — os sesamoid in fata genunchiului",
    },
    {
      bone: "tibia",
      options: ["tibia", "fibula", "femur", "patela"],
      hint: "Osul principal al gambei, suporta greutate",
    },
    {
      bone: "humerus",
      options: ["humerus", "femur", "tibia", "radius"],
      hint: "Osul bratului, intre umar si cot",
    },
    {
      bone: "sacrum",
      options: ["sacrum", "coccis", "lombare", "os-coxal"],
      hint: "5 vertebre sudate la baza coloanei",
    },
  ],
  medium: [
    {
      bone: "parietal",
      options: ["parietal", "frontal", "temporal", "occipital"],
      hint: "Oase pereche pe partea de sus a craniului",
    },
    {
      bone: "temporal",
      options: ["temporal", "parietal", "occipital", "sfenoid"],
      hint: "Contine organul vestibulo-cohlear",
    },
    {
      bone: "sfenoid",
      options: ["sfenoid", "etmoid", "occipital", "temporal"],
      hint: "Forma de fluture, contine saua turceasca",
    },
    {
      bone: "etmoid",
      options: ["etmoid", "sfenoid", "frontal", "vomer"],
      hint: "Os delicat intre orbite, lama ciuruita",
    },
    {
      bone: "zigomatic",
      options: ["zigomatic", "maxilar", "mandibula", "nazal"],
      hint: "Formeaza pomenii obrajilor",
    },
    {
      bone: "radius",
      options: ["radius", "ulna", "humerus", "femur"],
      hint: "Osul lateral al antebratului (partea policelui)",
    },
    {
      bone: "ulna",
      options: ["ulna", "radius", "humerus", "tibia"],
      hint: "Osul medial al antebratului, are olecranul",
    },
    {
      bone: "omoplat",
      options: ["omoplat", "clavicula", "humerus", "stern"],
      hint: "Os triunghiular pe spate, cavitatea glenoida",
    },
    {
      bone: "fibula",
      options: ["fibula", "tibia", "radius", "ulna"],
      hint: "Osul lateral al gambei, subtire",
    },
    {
      bone: "os-coxal",
      options: ["os-coxal", "sacrum", "femur", "coccis"],
      hint: "Format din ilion, ischion si pubis",
    },
    {
      bone: "cervicale",
      options: ["cervicale", "toracice", "lombare", "sacrum"],
      hint: "7 vertebre — atlas, axis si altele",
    },
    {
      bone: "lombare",
      options: ["lombare", "toracice", "cervicale", "sacrum"],
      hint: "5 vertebre mari, suporta cea mai mare greutate",
    },
  ],
  hard: [
    {
      bone: "vomer",
      options: ["vomer", "etmoid", "palatin", "cornet"],
      hint: "Os subtire — septul nazal posterior",
    },
    {
      bone: "palatin",
      options: ["palatin", "maxilar", "vomer", "etmoid"],
      hint: "Forma de L, palatul dur posterior",
    },
    {
      bone: "lacrimal",
      options: ["lacrimal", "nazal", "etmoid", "zigomatic"],
      hint: "Cele mai mici oase ale fetei",
    },
    {
      bone: "cornet",
      options: ["cornet", "vomer", "etmoid", "palatin"],
      hint: "Incalzesc si umidifica aerul inspirat",
    },
    {
      bone: "hioid",
      options: ["hioid", "mandibula", "sfenoid", "stern"],
      hint: "Os in forma de potcoava, nu se articuleaza cu nimic",
    },
    {
      bone: "coaste-fluctuante",
      options: ["coaste-fluctuante", "coaste-false", "coaste-adevarate", "stern"],
      hint: "Coastele 11-12 — libere anterior",
    },
    {
      bone: "coaste-false",
      options: ["coaste-false", "coaste-adevarate", "coaste-fluctuante", "stern"],
      hint: "Coastele 8-10 — atasate indirect, prin cartilajul coastei 7",
    },
    {
      bone: "carpiene",
      options: ["carpiene", "metacarpiene", "tarsiene", "falange"],
      hint: "8 oase scurte ale pumnului",
    },
    {
      bone: "tarsiene",
      options: ["tarsiene", "metatarsiene", "carpiene", "falange-picior"],
      hint: "7 oase scurte ale gleznei, include calcaneul",
    },
    {
      bone: "coccis",
      options: ["coccis", "sacrum", "lombare", "toracice"],
      hint: "4-5 vertebre rudimentare sudate",
    },
    {
      bone: "falange",
      options: ["falange", "metacarpiene", "carpiene", "radius"],
      hint: "14 oase ale degetelor mainii",
    },
    {
      bone: "metatarsiene",
      options: ["metatarsiene", "tarsiene", "falange-picior", "femur"],
      hint: "5 oase lungi ale partii mijlocii a piciorului",
    },
  ],
};

var QUIZ = {
  active: false,
  currentQ: 0,
  total: 10,
  score: 0,
  difficulty: "medium",
  questions: [],
  answered: false,
  startTime: 0,
  wrong: [],
  highlightedMesh: null,
  originalColor: null,
};
var QUIZ_HIGHLIGHT = new THREE.Color(0x00aaff);

function shuffle(a) {
  var b = a.slice();
  for (var i = b.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = b[i];
    b[i] = b[j];
    b[j] = t;
  }
  return b;
}

function toggleQuiz() {
  var p = document.getElementById("quizPanel");
  if (p) p.classList.toggle("collapsed");
}
window.toggleQuiz = toggleQuiz;

document.querySelectorAll(".quiz-diff").forEach(function (btn) {
  btn.addEventListener("click", function () {
    document.querySelectorAll(".quiz-diff").forEach(function (b) {
      b.classList.remove("active");
    });
    this.classList.add("active");
    QUIZ.difficulty = this.dataset.diff;
  });
});

function showQuizStage(name) {
  ["quizSystemPick", "quizPick", "quizStart", "quizQuestion", "quizEnd"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.style.display = id === name ? "block" : "none";
  });

  document.body.classList.toggle("quiz-inq", name === "quizQuestion");
}
window.showQuizStage = showQuizStage;

function startQuiz() {
  if (typeof clearSel === "function") clearSel();
  if (typeof clearHov === "function") clearHov();
  if (typeof bnoOverlay !== "undefined" && bnoOverlay) bnoOverlay.classList.remove("visible");
  var ph = document.getElementById("ip-ph"),
    ct = document.getElementById("info-ct");
  if (ph) ph.style.display = "flex";
  if (ct) ct.style.display = "none";
  var bank = quizBank[QUIZ.difficulty] || quizBank.medium;
  var pool = shuffle(bank);
  QUIZ.total = Math.min(10, pool.length);
  QUIZ.questions = pool.slice(0, QUIZ.total);
  QUIZ.currentQ = 0;
  QUIZ.score = 0;
  QUIZ.wrong = [];
  QUIZ.active = true;
  QUIZ.startTime = Date.now();
  var tot = document.getElementById("qTotal");
  if (tot) tot.textContent = QUIZ.total;
  showQuizStage("quizQuestion");
  loadQuizQuestion();
}
window.startQuiz = startQuiz;

function clearQuizHighlight() {
  if (typeof modelMeshes !== "undefined") {
    modelMeshes.forEach(function (m) {
      if (m.userData._quizLocked) {
        m.userData._quizLocked = false;
        if (m.userData._origColor) m.material.color.copy(m.userData._origColor);
        if (m.material.emissive) m.material.emissive.set(0x000000);
        m.renderOrder = 0;
      }
    });
  }
  QUIZ.highlightedMesh = null;
  QUIZ.originalColor = null;
}
window.clearQuizHighlight = clearQuizHighlight;

function findBoneSection(boneId) {
  if (typeof boneSections === "undefined") return null;
  for (var i = 0; i < boneSections.length; i++) {
    var sec = boneSections[i];
    for (var j = 0; j < sec.groups.length; j++) {
      if (sec.groups[j].bones.indexOf(boneId) >= 0) return sec.id;
    }
  }
  return null;
}

function setQuizFadedSkeleton(faded) {
  if (typeof modelMeshes === "undefined" || !modelMeshes) return;
  modelMeshes.forEach(function (m) {
    if (!m.material) return;
    if (faded) {
      m.material.transparent = true;
      m.material.opacity = 0.22;
      m.material.depthWrite = false;
    } else {
      m.material.transparent = false;
      m.material.opacity = 1;
      m.material.depthWrite = true;
    }
  });
  if (faded && QUIZ.highlightedMesh && QUIZ.highlightedMesh.material) {
    QUIZ.highlightedMesh.material.transparent = false;
    QUIZ.highlightedMesh.material.opacity = 1;
    QUIZ.highlightedMesh.material.depthWrite = true;
  }
}
window.setQuizFadedSkeleton = setQuizFadedSkeleton;

function highlightQuizBone(boneId) {
  clearQuizHighlight();
  setQuizFadedSkeleton(true);
  var meshes = typeof getMeshes === "function" ? getMeshes(boneId) : [];
  if (!meshes.length && typeof modelMeshes !== "undefined") {
    meshes = modelMeshes.filter(function (m) {
      var n = (m.name || "").toLowerCase();
      return n.indexOf(boneId.toLowerCase()) >= 0;
    });
  }
  console.log("[Quiz] highlight bone:", boneId, "-> meshes found:", meshes.length);
  var bonePos = null,
    boneBox = null;
  meshes.forEach(function (mesh) {
    if (!QUIZ.highlightedMesh) {
      QUIZ.highlightedMesh = mesh;
      QUIZ.originalColor = mesh.material.color.clone();
    }
    mesh.material.color.copy(QUIZ_HIGHLIGHT);
    if (mesh.material.emissive) mesh.material.emissive.copy(QUIZ_HIGHLIGHT).multiplyScalar(0.9);
    mesh.userData._quizLocked = true;
    mesh.material.transparent = false;
    mesh.material.opacity = 1;
    mesh.material.depthWrite = true;
    mesh.renderOrder = 999;
    var mb = new THREE.Box3().setFromObject(mesh);
    if (!boneBox) boneBox = mb.clone();
    else boneBox.union(mb);
  });
  if (boneBox) {
    bonePos = new THREE.Vector3();
    boneBox.getCenter(bonePos);
  }
  if (skeletonModel && typeof animCam === "function") {
    var box = new THREE.Box3().setFromObject(skeletonModel);
    var h = box.max.y - box.min.y;
    var skCenter = new THREE.Vector3();
    box.getCenter(skCenter);
    var section = findBoneSection(boneId);
    var tx, ty, tz;
    if (bonePos) {
      tx = bonePos.x;
      ty = bonePos.y;
      tz = bonePos.z;
    } else {
      tx = skCenter.x;
      ty = skCenter.y;
      tz = skCenter.z;
    }
    var dx = tx - skCenter.x,
      dz = tz - skCenter.z;
    var magXZ = Math.sqrt(dx * dx + dz * dz);
    var dirX, dirZ;
    if (magXZ < 0.01) {
      dirX = 0;
      dirZ = 1;
    } else {
      dirX = dx / magXZ;
      dirZ = dz / magXZ;
    }
    var sectionDist = { cap: 0.22, trunchi: 0.36, membre: 0.34, inferioare: 0.44 };
    var dist = h * (sectionDist[section] || 0.65);
    if (boneBox) {
      var bs = new THREE.Vector3();
      boneBox.getSize(bs);
      var boneRadius = Math.max(bs.x, bs.y, bs.z) * 0.5;
      var fov = ((camera.fov || 45) * Math.PI) / 180;
      var minDist = (boneRadius / Math.tan(fov / 2)) * 2.4;
      if (minDist > dist) dist = minDist;
    }
    var vw = viewer.clientWidth || 1,
      vh = viewer.clientHeight || 1;
    var aspect = vw / vh;
    if (aspect < 1) {
      dist *= Math.max(1.15, (1 / aspect) * 1.15);
    } else if (aspect < 1.3) {
      dist *= 1.1;
    }
    var camX = tx + dirX * dist;
    var camY = ty + dist * 0.15;
    var camZ = tz + dirZ * dist;
    animCam([camX, camY, camZ], [tx, ty, tz]);
  }
}

function loadQuizQuestion() {
  QUIZ.answered = false;
  var q = QUIZ.questions[QUIZ.currentQ];
  var qNum = document.getElementById("qNum");
  if (qNum) qNum.textContent = QUIZ.currentQ + 1;
  var qScore = document.getElementById("qScore");
  if (qScore) qScore.textContent = QUIZ.score;
  var qProgFill = document.getElementById("qProgFill");
  if (qProgFill) qProgFill.style.width = (QUIZ.currentQ / QUIZ.total) * 100 + "%";
  var qFeedback = document.getElementById("qFeedback");
  if (qFeedback) qFeedback.style.display = "none";
  var qNextBtn = document.getElementById("qNextBtn");
  if (qNextBtn) qNextBtn.style.display = "none";
  var optsDiv = document.getElementById("qOptions");
  if (optsDiv) {
    optsDiv.className = "quiz-options";
    optsDiv.innerHTML = "";
    var shuffled = shuffle(q.options);
    var letters = ["A", "B", "C", "D"];
    shuffled.forEach(function (boneId, idx) {
      var bd = boneData[boneId];
      var btn = document.createElement("button");
      btn.className = "quiz-opt";
      btn.dataset.bone = boneId;
      btn.innerHTML =
        '<span class="quiz-opt-letter">' +
        letters[idx] +
        "</span><span>" +
        (bd ? bd.name : boneId) +
        "</span>";
      btn.onclick = function () {
        answerQuiz(boneId, btn);
      };
      optsDiv.appendChild(btn);
    });
  }
  var hintEl = document.querySelector(".quiz-q-text");
  if (hintEl) {
    if (q.hint) {
      hintEl.innerHTML =
        'Cum se numeste osul evidentiat in <span style="color:#00aaff">albastru</span>?<br><small style="display:block;margin-top:6px;font-weight:400;color:#94a3b8;font-style:italic">Indiciu: ' +
        escapeHTML(q.hint) +
        "</small>";
    } else {
      hintEl.innerHTML =
        'Cum se numeste osul evidentiat in <span style="color:#00aaff">albastru</span>?';
    }
  }
  highlightQuizBone(q.bone);
}

function answerQuiz(boneId, btn) {
  if (QUIZ.answered) return;
  QUIZ.answered = true;
  var q = QUIZ.questions[QUIZ.currentQ];
  var correct = boneId === q.bone;
  var btns = document.querySelectorAll(".quiz-opt");
  btns.forEach(function (b) {
    b.disabled = true;
    if (b.dataset.bone === q.bone) b.classList.add("correct");
    else if (b === btn) b.classList.add("wrong");
  });
  var fb = document.getElementById("qFeedback");
  var bdC = boneData[q.bone];
  if (correct) {
    QUIZ.score++;
    if (fb) {
      fb.className = "quiz-feedback fb-correct";
      fb.innerHTML = "✅ <b>Corect!</b> " + (bdC ? bdC.name + " — " + bdC.category : "");
      fb.style.display = "block";
    }
  } else {
    QUIZ.wrong.push(q.bone);
    if (fb) {
      fb.className = "quiz-feedback fb-wrong";
      fb.innerHTML = "❌ <b>Gresit.</b> Raspuns corect: <b>" + (bdC ? bdC.name : q.bone) + "</b>";
      fb.style.display = "block";
    }
  }
  var qScore = document.getElementById("qScore");
  if (qScore) qScore.textContent = QUIZ.score;
  var nextBtn = document.getElementById("qNextBtn");
  if (nextBtn) {
    nextBtn.style.display = "inline-block";
    nextBtn.textContent = QUIZ.currentQ + 1 >= QUIZ.total ? "Vezi rezultatul →" : "Urmatoarea →";
  }
}

function nextQuiz() {
  QUIZ.currentQ++;
  if (QUIZ.currentQ >= QUIZ.total) endQuiz();
  else loadQuizQuestion();
}
window.nextQuiz = nextQuiz;

function skipQuiz() {
  if (QUIZ.answered) return;
  QUIZ.answered = true;
  var q = QUIZ.questions[QUIZ.currentQ];
  QUIZ.wrong.push(q.bone);
  document.querySelectorAll(".quiz-opt").forEach(function (b) {
    b.disabled = true;
    if (b.dataset.bone === q.bone) b.classList.add("correct");
  });
  var bdC = boneData[q.bone];
  var fb = document.getElementById("qFeedback");
  if (fb) {
    fb.className = "quiz-feedback fb-wrong";
    fb.innerHTML = "⏭ Sarit. Raspuns: <b>" + (bdC ? bdC.name : q.bone) + "</b>";
    fb.style.display = "block";
  }
  var nextBtn = document.getElementById("qNextBtn");
  if (nextBtn) {
    nextBtn.style.display = "inline-block";
    nextBtn.textContent = QUIZ.currentQ + 1 >= QUIZ.total ? "Vezi rezultatul →" : "Urmatoarea →";
  }
}
window.skipQuiz = skipQuiz;

function endQuiz() {
  QUIZ.active = false;
  clearQuizHighlight();
  setQuizFadedSkeleton(false);
  var pct = (QUIZ.score / QUIZ.total) * 100;
  var badge, title, msg;
  if (pct === 100) {
    badge = "🏆";
    title = "PERFECT!";
    msg = "Anatomie la nivel de medic. Impresionant!";
  } else if (pct >= 90) {
    badge = "🥇";
    title = "Aur!";
    msg = "Excelent! Cunosti scheletul ca pe podul palmei.";
  } else if (pct >= 70) {
    badge = "🥈";
    title = "Argint";
    msg = "Foarte bine! Mai e putin pana la perfectiune.";
  } else if (pct >= 50) {
    badge = "🥉";
    title = "Bronz";
    msg = "Nu rau. Mai exerseaza si vei stapani perfect.";
  } else {
    badge = "📚";
    title = "Continua sa inveti!";
    msg = "Studiaza modelul 3D si revino. Reusesti!";
  }
  var qBadge = document.getElementById("qBadge");
  if (qBadge) qBadge.innerHTML = badge;
  var qEndTitle = document.getElementById("qEndTitle");
  if (qEndTitle) qEndTitle.textContent = title;
  var qFinalScore = document.getElementById("qFinalScore");
  if (qFinalScore) qFinalScore.textContent = QUIZ.score;
  var qFinalTotal = document.getElementById("qFinalTotal");
  if (qFinalTotal) qFinalTotal.textContent = QUIZ.total;
  var qEndMsg = document.getElementById("qEndMsg");
  if (qEndMsg) qEndMsg.textContent = msg;
  var elapsed = Math.floor((Date.now() - QUIZ.startTime) / 1000);
  var min = Math.floor(elapsed / 60),
    sec = elapsed % 60;
  var qTime = document.getElementById("qTime");
  if (qTime) qTime.textContent = min + ":" + (sec < 10 ? "0" : "") + sec;
  bxPaintQuizEnd(pct, QUIZ.score, QUIZ.total);
  showQuizStage("quizEnd");
  var qEndStage = document.getElementById("quizEnd");
  if (qEndStage) qEndStage.style.display = "flex";
}


function bxPaintQuizEnd(pct, score, total) {
  pct = Math.max(0, Math.min(100, pct || 0));
  var ring = document.getElementById("qEndRing");
  if (ring) {
    ring.style.setProperty("--pct", pct * 3.6 + "deg");
    ring.setAttribute(
      "data-tier",
      pct >= 100 ? "perfect" : pct >= 90 ? "gold" : pct >= 70 ? "silver" : pct >= 50 ? "bronze" : "low"
    );
  }
  var qEndPct = document.getElementById("qEndPct");
  if (qEndPct) qEndPct.textContent = Math.round(pct);
  var qEndCorrect = document.getElementById("qEndCorrect");
  if (qEndCorrect) qEndCorrect.textContent = score;
  var qEndWrong = document.getElementById("qEndWrong");
  if (qEndWrong) qEndWrong.textContent = Math.max(0, (total || 0) - (score || 0));
}
window.bxPaintQuizEnd = bxPaintQuizEnd;


window.quizBackToMinigames = function () {
  if (typeof showQuizStage === "function") showQuizStage("quizSystemPick");
};


window.quizRetrySame = function () {
  try {
    if (window.QUIZ && QUIZ.mode === "duel") {
      if (typeof window.restartQuiz === "function") return window.restartQuiz();
    }
    if (window.QUIZ && QUIZ.system && QUIZ.mode && typeof window.startQuiz === "function") {
      return window.startQuiz(QUIZ.difficulty);
    }
  } catch (e) {}
  if (typeof window.restartQuiz === "function") window.restartQuiz();
};

function restartQuiz() {
  showQuizStage("quizStart");
}
window.restartQuiz = restartQuiz;

(function () {
  var panel = document.getElementById("quizPanel");
  var header = document.getElementById("quizHeader");
  if (!panel || !header) return;
  var dragging = false,
    offX = 0,
    offY = 0,
    curX = 0,
    curY = 0,
    rafId = null;
  function applyPosition() {
    panel.style.left = curX + "px";
    panel.style.top = curY + "px";
    rafId = null;
  }
  function getParentOffset() {
    var p = panel.offsetParent;
    if (!p) return { left: 0, top: 0 };
    var r = p.getBoundingClientRect();
    return { left: r.left, top: r.top };
  }
  function startDrag(clientX, clientY) {
    dragging = true;
    var rect = panel.getBoundingClientRect();
    var po = getParentOffset();
    offX = clientX - rect.left;
    offY = clientY - rect.top;
    curX = rect.left - po.left;
    curY = rect.top - po.top;
    panel.style.left = curX + "px";
    panel.style.top = curY + "px";
    panel.style.bottom = "auto";
    panel.style.right = "auto";
    panel.classList.add("dragging");
    header.classList.add("dragging");
    document.body.style.userSelect = "none";
  }
  function moveDrag(clientX, clientY) {
    if (!dragging) return;
    var po = getParentOffset();
    var screenX = clientX - offX,
      screenY = clientY - offY;
    var pw = panel.offsetWidth,
      ph = panel.offsetHeight;
    if (screenX < 0) screenX = 0;
    if (screenX > window.innerWidth - pw) screenX = window.innerWidth - pw;
    if (screenY < 0) screenY = 0;
    if (screenY > window.innerHeight - ph) screenY = window.innerHeight - ph;
    curX = screenX - po.left;
    curY = screenY - po.top;
    if (rafId === null) rafId = requestAnimationFrame(applyPosition);
  }
  function endDrag() {
    if (!dragging) return;
    dragging = false;
    panel.classList.remove("dragging");
    header.classList.remove("dragging");
    document.body.style.userSelect = "";
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
      applyPosition();
    }
  }
  header.addEventListener("mousedown", function (e) {
    if (e.target.closest(".quiz-fold")) return;
    if (e.target.closest(".quiz-exit")) return;
    if (document.body.classList.contains("mode-quiz")) return;
    if (e.button !== 0) return;
    startDrag(e.clientX, e.clientY);
    e.preventDefault();
  });
  document.addEventListener("mousemove", function (e) {
    moveDrag(e.clientX, e.clientY);
  });
  document.addEventListener("mouseup", endDrag);
})();

window.toggleInfoPanel = function () {
  var panel = document.querySelector(".info-panel");
  var btn = document.getElementById("infoToggleBtn");
  if (!panel || !btn) return;
  panel.classList.toggle("collapsed");
  var hidden = panel.classList.contains("collapsed");
  btn.innerHTML = hidden ? "←" : "→";
  btn.title = hidden ? "Arata panoul de informatii" : "Ascunde panoul de informatii";
  setTimeout(function () {
    if (
      typeof camera !== "undefined" &&
      typeof renderer !== "undefined" &&
      typeof viewer !== "undefined"
    ) {
      camera.aspect = viewer.clientWidth / viewer.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(viewer.clientWidth, viewer.clientHeight);
    }
  }, 340);
};

window.goBadges = function () {
  var u = getCurrentUser();
  if (!u) {
    openLogin();
    return;
  }
  goProfile("insigne");
};

window.goProfile = function (section) {
  var u = getCurrentUser();
  if (!u) {
    openLogin();
    return;
  }
  var page = document.getElementById("profilePage");
  if (!page) return;
  var avA = document.getElementById("profileAvatar");
  var nA = document.getElementById("profileName");
  var eA = document.getElementById("profileEmail");
  if (avA) avA.textContent = u.user.charAt(0).toUpperCase();
  if (nA) nA.textContent = u.user;
  if (eA) eA.textContent = u.email || "";
  switchProfileTab(section || "profil");
  page.classList.add("active");
  document.body.style.overflow = "hidden";
  closeUserMenu();
};
window.closeProfile = function () {
  var page = document.getElementById("profilePage");
  if (page) page.classList.remove("active");
  document.body.style.overflow = "";
};
window.switchProfileTab = function (section) {
  document.querySelectorAll(".profile-tab").forEach(function (t) {
    t.classList.toggle("active", t.dataset.section === section);
  });
  document.querySelectorAll(".profile-section").forEach(function (s) {
    s.classList.remove("active");
  });
  var sec = document.getElementById("profileSec-" + section);
  if (sec) sec.classList.add("active");
};

window.toggleUserMenu = function (e) {
  if (e) {
    e.stopPropagation();
  }
  var m = document.getElementById("userMenu");
  if (!m) return;
  m.classList.toggle("open");
};
function closeUserMenu() {
  var m = document.getElementById("userMenu");
  if (m) m.classList.remove("open");
}
document.addEventListener("click", function (e) {
  var m = document.getElementById("userMenu");
  if (!m || !m.classList.contains("open")) return;
  if (!m.contains(e.target)) closeUserMenu();
});

window.applyUserBadge = function () {
  var u = getCurrentUser();
  document.querySelectorAll(".user-badge").forEach(function (b) {
    b.remove();
  });
  var loginBtn = document.querySelector(".home-login-btn");
  var menu = document.getElementById("userMenu");
  if (u) {
    if (loginBtn) loginBtn.style.display = "none";
    if (menu) {
      menu.style.display = "inline-flex";
      var av = document.getElementById("userMenuAvatar");
      var nm = document.getElementById("userMenuName");
      var pd = typeof getProfileData === "function" ? getProfileData(u.user) : null;
      if (av) {
        if (pd && pd.avatar) {
          av.style.backgroundImage = "url(" + pd.avatar + ")";
          av.style.backgroundSize = "cover";
          av.style.backgroundPosition = "center";
          av.textContent = "";
        } else {
          av.style.backgroundImage = "";
          av.textContent = u.user.charAt(0).toUpperCase();
        }
      }
      if (nm) nm.textContent = u.user;
    }
  } else {
    if (loginBtn) loginBtn.style.display = "";
    if (menu) menu.style.display = "none";
  }
  var btn = document.getElementById("userBtnName");
  if (btn) btn.textContent = u ? u.user : "Vizitator";
  var dailySec = document.getElementById("daily");
  if (dailySec) dailySec.style.display = u ? "" : "none";
};
applyUserBadge();

(function () {
  if (typeof I18N === "undefined") return;
  Object.assign(I18N.ro, {
    "user.menu.profil": "Profil",
    "user.menu.setari": "Setări",
    "user.menu.logout": "Deloghează-te",
    "profile.back": "Înapoi",
    "profile.tagline": "Membru BioNexus",
    "profile.tab.badges": "Insigne",
    "profile.achieved": "Obținute",
    "profile.profil.h": "Profilul tău",
    "profile.profil.p": "Conținutul acestei secțiuni va fi adăugat ulterior.",
    "profile.setari.h": "Setări",
    "profile.setari.p": "Conținutul acestei secțiuni va fi adăugat ulterior.",
    "profile.insigne.h": "Insignele mele",
    "profile.insigne.p": "Conținutul acestei secțiuni va fi adăugat ulterior.",
  });
  Object.assign(I18N.en, {
    "user.menu.profil": "Profile",
    "user.menu.setari": "Settings",
    "user.menu.logout": "Log out",
    "profile.back": "Back",
    "profile.tagline": "BioNexus member",
    "profile.tab.badges": "Badges",
    "profile.achieved": "Achieved",
    "profile.profil.h": "Your profile",
    "profile.profil.p": "Content for this section will be added later.",
    "profile.setari.h": "Settings",
    "profile.setari.p": "Content for this section will be added later.",
    "profile.insigne.h": "My badges",
    "profile.insigne.p": "Content for this section will be added later.",
  });
  if (typeof applyLanguage === "function") applyLanguage(CUR_LANG);
})();


var BX_ICONS = {

  bone: '<path d="M9 15 15 9"/><circle cx="8" cy="14" r="2"/><circle cx="10" cy="16" r="2"/><circle cx="14" cy="8" r="2"/><circle cx="16" cy="10" r="2"/>',
  muscle: '<path d="M8.2 21v-6c0-1.2-.5-1.9-1.4-2.7C5.6 11 5.1 9.7 5.1 8.2 5.1 5.6 7.3 3.6 10 3.6h3.1c2.6 0 4.7 2 4.7 4.5 0 1.4-.6 2.4-1.4 3.3-.7.8-1.1 1.5-1.1 2.8V21"/><path d="M8.2 21h7"/><path d="M5.4 9.6c2 .5 3.4 1.9 3.9 4"/>',
  brain: '<path d="M12 5.2A3 3 0 0 0 6.5 3.7 2.7 2.7 0 0 0 4.2 7 2.5 2.5 0 0 0 4.5 10.6 2.7 2.7 0 0 0 6 15.6a3 3 0 0 0 6 .4Z"/><path d="M12 5.2a3 3 0 0 1 5.5-1.5A2.7 2.7 0 0 1 19.8 7a2.5 2.5 0 0 1-.3 3.6 2.7 2.7 0 0 1-1.5 5 3 3 0 0 1-6 .4Z"/><path d="M12 5.5v10.5"/>',
  heart: '<path d="M12 20.3 4.5 12.8a4.8 4.8 0 0 1 6.8-6.8l.7.7.7-.7a4.8 4.8 0 1 1 6.8 6.8Z"/>',
  lungs: '<path d="M12 3v6"/><path d="M12 8.2c-1.3.6-2.2 1-3 2.1"/><path d="M12 8.2c1.3.6 2.2 1 3 2.1"/><path d="M8.9 9.6C6.9 11 6.1 14 6.1 16.7c0 2 .9 3.4 2.3 3.4 2 0 3.4-2 3.4-4.6v-4c0-1.4-.8-2.2-2.9-.9Z"/><path d="M15.1 9.6c2 1.4 2.8 4.4 2.8 7.1 0 2-.9 3.4-2.3 3.4-2 0-3.4-2-3.4-4.6v-4c0-1.4.8-2.2 2.9-.9Z"/>',
  stomach: '<path d="M10.5 3.2c0 2.1-.2 2.9 1.1 3.5 2.4 1 4.4 3 4.4 6.1 0 3.6-2.7 6.4-6 6.4-2.7 0-4.9-1.8-4.9-4.2 0-1.9 1.3-3 2.8-3"/><path d="M16 12.8c1 .1 1.7.8 1.9 1.9"/>',

  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.6 8.4 13.6 13.6 8.4 15.6 10.4 10.4Z"/>',
  mountain: '<path d="M3 20 9.2 7.5l3.6 7"/><path d="M12.4 14 16.5 7l4.5 13Z"/><path d="M2.5 20h19"/>',
  medal: '<circle cx="12" cy="9" r="5.4"/><circle cx="12" cy="9" r="1.9"/><path d="M8.8 13.4 7 21l5-2.6L17 21l-1.8-7.6"/>',
  cross: '<path d="M9.6 3.6h4.8v5h5v4.8h-5v5H9.6v-5h-5V8.6h5Z"/>',
  star: '<path d="M12 3.5 14.6 9l6 .7-4.4 4.1 1.2 5.9L12 16.7 6.6 19.7l1.2-5.9L3.4 9.7l6-.7Z"/>',
  gem: '<path d="M6 3.6h12l3 5-9 11.8L3 8.6Z"/><path d="M3 8.6h18"/><path d="M9.4 8.6 12 20.4"/><path d="M14.6 8.6 12 20.4"/><path d="M9 3.6 6 8.6"/><path d="M15 3.6 18 8.6"/>',
  bulb: '<path d="M9.2 18h5.6"/><path d="M10 21h4"/><path d="M12 3a6 6 0 0 0-3.9 10.5c.8.8 1.2 1.4 1.4 2.5h5c.2-1.1.6-1.7 1.4-2.5A6 6 0 0 0 12 3Z"/>',
  crown: '<path d="M4 18.5h16"/><path d="M4 18.5 2.8 8l4.6 4.2L12 4.8l4.6 7.4L21.2 8 20 18.5Z"/>',
  sparkle: '<path d="M12 3.4 13.9 9.1 19.6 11l-5.7 1.9L12 18.6 10.1 12.9 4.4 11l5.7-1.9Z"/><path d="M18.8 4v3.2M17.2 5.6h3.2"/><path d="M5.4 15.8v2.6M4.1 17.1h2.6"/>',
  flame: '<path d="M12 3c.4 2.5 1.9 4.4 3.5 5.9C17 10.3 18 12 18 14a6 6 0 0 1-12 0c0-1 .3-2 1-3 0 1.2.9 2 2 2a2 2 0 0 0 2-2c0-1.2-.7-2-1.3-3.1C8.6 6.4 9.6 4.5 12 3Z"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/>',
  people: '<circle cx="9" cy="8" r="3.1"/><path d="M3.6 20c0-3 2.4-5 5.4-5s5.4 2 5.4 5"/><path d="M16 5.2a3.2 3.2 0 0 1 0 6.2"/><path d="M17.2 15.1c2.1.6 3.6 2.4 3.6 4.9"/>',
  chisel: '<path d="M20 4.2 14.4 9.8"/><path d="M15.2 5 19 8.8"/><path d="M13.6 10.6 5.2 19l-1.7 2.4 2.4-1.7 8.4-8.4Z"/>',
  dna: '<path d="M7 3c0 4.2 10 5 10 9s-10 4.8-10 9"/><path d="M17 3c0 4.2-10 5-10 9s10 4.8 10 9"/><path d="M8.4 6h7.2"/><path d="M6.6 12h10.8"/><path d="M8.4 18h7.2"/>',
  bolt: '<path d="M13 2.5 4.5 13.2H11l-1 8.3L18.5 10.5H12Z"/>',

  profile: '<circle cx="12" cy="8" r="4"/><path d="M4.5 20c0-3.6 3.3-6.4 7.5-6.4s7.5 2.8 7.5 6.4"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12.2 2h-.4a2 2 0 0 0-2 2v.2a2 2 0 0 1-1 1.7l-.4.3a2 2 0 0 1-2 0l-.2-.1a2 2 0 0 0-2.7.7l-.2.4a2 2 0 0 0 .7 2.7l.2.1a2 2 0 0 1 1 1.7v.5a2 2 0 0 1-1 1.7l-.2.1a2 2 0 0 0-.7 2.7l.2.4a2 2 0 0 0 2.7.7l.2-.1a2 2 0 0 1 2 0l.4.3a2 2 0 0 1 1 1.7V20a2 2 0 0 0 2 2h.4a2 2 0 0 0 2-2v-.2a2 2 0 0 1 1-1.7l.4-.3a2 2 0 0 1 2 0l.2.1a2 2 0 0 0 2.7-.7l.2-.4a2 2 0 0 0-.7-2.7l-.2-.1a2 2 0 0 1-1-1.7v-.5a2 2 0 0 1 1-1.7l.2-.1a2 2 0 0 0 .7-2.7l-.2-.4a2 2 0 0 0-2.7-.7l-.2.1a2 2 0 0 1-2 0l-.4-.3a2 2 0 0 1-1-1.7V4a2 2 0 0 0-2-2Z"/>',
  logout: '<path d="M14 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2"/><path d="M9.5 12h10.5"/><path d="M17 9l3 3-3 3"/>',
  target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/>',

  eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z"/><circle cx="12" cy="12" r="2.8"/>',
  book: '<path d="M6.5 3H19a1 1 0 0 1 1 1v15.5a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19V5.5A2.5 2.5 0 0 1 6.5 3Z"/><path d="M4 18.2A2.5 2.5 0 0 1 6.5 16H20"/><path d="M9 7.5h6"/>',
  atom: '<circle cx="12" cy="12" r="1.7"/><ellipse cx="12" cy="12" rx="9" ry="3.9"/><ellipse cx="12" cy="12" rx="9" ry="3.9" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.9" transform="rotate(120 12 12)"/>',
  trophy: '<path d="M8 4h8v4.2a4 4 0 0 1-8 0Z"/><path d="M8 5H5.4A1.4 1.4 0 0 0 4 6.4C4 8.8 6 10.4 8.2 10.6"/><path d="M16 5h2.6A1.4 1.4 0 0 1 20 6.4C20 8.8 18 10.4 15.8 10.6"/><path d="M12 12.2v3.8"/><path d="M9 20.2h6"/><path d="M9.8 20.2c0-1.6.7-2.6 2.2-4.2 1.5 1.6 2.2 2.6 2.2 4.2"/>',
};
function BX_ICON(name, sw) {
  return (
    '<svg class="bx-ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' +
    (sw || 1.7) +
    '" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    (BX_ICONS[name] || "") +
    "</svg>"
  );
}
window.BX_ICON = BX_ICON;

function bxBadgeIcon(a) {
  return a && a.ic && BX_ICONS[a.ic] ? BX_ICON(a.ic) : a ? a.icon || "" : "";
}
window.bxBadgeIcon = bxBadgeIcon;


var BX_GLYPH = {
  bone: { emoji: "🦴", color: "#d7dde8" },
  muscle: { emoji: "💪", color: "#f87171" },
  brain: { emoji: "🧠", color: "#c4b5fd" },
  heart: { emoji: "🫀", color: "#fb7185" },
  lungs: { emoji: "🫁", color: "#5ec8f2" },
  stomach: { emoji: "🍽️", color: "#fbbf24" },
};
var BX_SYS_TO_ICON = {
  osos: "bone", muscular: "muscle", nervous: "brain",
  cardio: "heart", respiratory: "lungs", digestive: "stomach",
};
var _bxEmojiCache = {};

function bxEmojiOK(e) {
  if (e in _bxEmojiCache) return _bxEmojiCache[e];
  var ok = true;
  try {
    var c = document.createElement("canvas");
    c.width = c.height = 20;
    var x = c.getContext("2d");
    x.textBaseline = "top";

    x.font = '16px "Noto Color Emoji","Segoe UI Emoji","Apple Color Emoji",sans-serif';
    var sig = function (s) {
      x.clearRect(0, 0, 20, 20);
      x.fillText(s, 0, 0);
      return x.getImageData(0, 0, 20, 20).data.join(",");
    };
    var box = sig("￿");
    var blank = sig(" ");
    var g = sig(e);
    ok = g !== box && g !== blank;
  } catch (err) {
    ok = true;
  }
  _bxEmojiCache[e] = ok;
  return ok;
}

function bxNotoReady() {
  try {
    return !!(document.fonts && document.fonts.check && document.fonts.check('16px "Noto Color Emoji"'));
  } catch (e) {
    return false;
  }
}
function bxUseEmoji(emoji) {
  return bxNotoReady() || bxEmojiOK(emoji);
}
function bxGlyphHTML(iconKey) {
  var g = BX_GLYPH[iconKey];
  if (!g) return BX_ICON(iconKey);
  if (bxUseEmoji(g.emoji)) return '<span class="bx-emoji">' + g.emoji + "</span>";
  return '<span class="bx-ic-color" style="color:' + g.color + '">' + BX_ICON(iconKey) + "</span>";
}
window.bxGlyphHTML = bxGlyphHTML;
function bxHexA(hex, a) {
  var n = parseInt(hex.slice(1), 16);
  return "rgba(" + ((n >> 16) & 255) + "," + ((n >> 8) & 255) + "," + (n & 255) + "," + a + ")";
}


var BX_CONSTELLATION_NODES = [
  { k: "brain", x: 400, y: 120, c: "#a78bfa" },
  { k: "lungs", x: 566, y: 236, c: "#38bdf8" },
  { k: "heart", x: 246, y: 252, c: "#fb7185" },
  { k: "stomach", x: 600, y: 430, c: "#fbbf24" },
  { k: "muscle", x: 224, y: 436, c: "#f87171" },
  { k: "bone", x: 408, y: 512, c: "#cbd5e1" },
];
var BX_CONSTELLATION_EDGES = [
  ["brain", "lungs"], ["brain", "heart"], ["lungs", "heart"], ["lungs", "stomach"],
  ["heart", "muscle"], ["heart", "bone"], ["heart", "stomach"], ["stomach", "bone"],
  ["muscle", "bone"], ["brain", "bone"],
];
function BX_CONSTELLATION() {
  var N = {};
  BX_CONSTELLATION_NODES.forEach(function (n) { N[n.k] = n; });
  var lines = BX_CONSTELLATION_EDGES.map(function (e, i) {
    var a = N[e[0]], b = N[e[1]];
    return (
      '<line class="qamb-line" x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y +
      '" style="animation-delay:' + (-i * 0.7).toFixed(1) + 's"/>'
    );
  }).join("");
  var nodes = BX_CONSTELLATION_NODES.map(function (n, i) {
    var g = BX_GLYPH[n.k];
    var glyph;
    if (g && bxUseEmoji(g.emoji)) {
      glyph =
        '<text class="qamb-emoji" x="' + n.x + '" y="' + (n.y + 1) +
        '" text-anchor="middle" dominant-baseline="central">' + g.emoji + "</text>";
    } else {
      glyph =
        '<svg x="' + (n.x - 17) + '" y="' + (n.y - 17) +
        '" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="' + n.c +
        '" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + BX_ICONS[n.k] + "</svg>";
    }
    return (
      '<g class="qamb-node" style="--nc:' + n.c + ';animation-delay:' + (-i * 1.3).toFixed(1) + 's;transform-origin:' + n.x + 'px ' + n.y + 'px">' +
      '<circle class="qamb-halo" cx="' + n.x + '" cy="' + n.y + '" r="40"/>' +
      '<circle class="qamb-disc" cx="' + n.x + '" cy="' + n.y + '" r="29"/>' +
      glyph +
      "</g>"
    );
  }).join("");
  return (
    '<div class="qamb"><div class="qamb-glow"></div>' +
    '<svg class="qamb-net" viewBox="0 0 800 620" preserveAspectRatio="xMidYMid slice">' +
    '<g class="qamb-lines">' + lines + "</g>" +
    '<g class="qamb-graph">' + nodes + "</g>" +
    "</svg></div>"
  );
}
window.BX_CONSTELLATION = BX_CONSTELLATION;

function hydrateBxIcons() {
  try {
    var hosts = document.querySelectorAll("[data-bxicon]");
    for (var i = 0; i < hosts.length; i++) {
      var el = hosts[i];
      if (el.getAttribute("data-bx-done")) continue;
      el.innerHTML = BX_ICON(el.getAttribute("data-bxicon"));
      el.setAttribute("data-bx-done", "1");
    }

    var sysHosts = document.querySelectorAll("[data-bxsys]");
    for (var j = 0; j < sysHosts.length; j++) {
      var se = sysHosts[j];
      if (se.getAttribute("data-bx-done")) continue;
      var ik = BX_SYS_TO_ICON[se.getAttribute("data-bxsys")] || se.getAttribute("data-bxsys");
      var col = (BX_GLYPH[ik] || {}).color || "#8b5cf6";
      se.innerHTML = bxGlyphHTML(ik);
      se.style.background = "linear-gradient(135deg," + bxHexA(col, 0.3) + "," + bxHexA(col, 0.12) + ")";
      se.style.border = "1px solid " + bxHexA(col, 0.42);
      se.style.boxShadow = "0 3px 12px " + bxHexA(col, 0.26);
      se.setAttribute("data-bx-done", "1");
    }
    var amb = document.getElementById("quizAmbient");
    if (amb && !amb.getAttribute("data-bx-done")) {
      amb.innerHTML = BX_CONSTELLATION();
      amb.setAttribute("data-bx-done", "1");
    }
    makeCardsAccessible();
  } catch (e) {}
}
window.hydrateBxIcons = hydrateBxIcons;


function makeCardsAccessible() {
  var cards = document.querySelectorAll(
    ".system-card.ready, .home-feat-clickable, .home-feat-card.home-feat-clickable"
  );
  for (var i = 0; i < cards.length; i++) {
    var el = cards[i];
    if (el.getAttribute("data-kbd")) continue;
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.setAttribute("data-kbd", "1");
    if (!el.getAttribute("aria-label")) {
      var h = el.querySelector("h3");
      if (h) el.setAttribute("aria-label", h.textContent.trim());
    }
  }
}
document.addEventListener("keydown", function (e) {
  if (e.key !== "Enter" && e.key !== " " && e.key !== "Spacebar") return;
  var el = e.target;
  if (el && el.getAttribute && el.getAttribute("data-kbd") === "1") {
    e.preventDefault();
    el.click();
  }
});

function bxRefillEmoji() {
  try {
    var sysHosts = document.querySelectorAll("[data-bxsys]");
    for (var j = 0; j < sysHosts.length; j++) {
      var se = sysHosts[j];
      var ik = BX_SYS_TO_ICON[se.getAttribute("data-bxsys")] || se.getAttribute("data-bxsys");
      se.innerHTML = bxGlyphHTML(ik);
    }
    var amb = document.getElementById("quizAmbient");
    if (amb && amb.getAttribute("data-bx-done")) amb.innerHTML = BX_CONSTELLATION();
  } catch (e) {}
}
window.bxRefillEmoji = bxRefillEmoji;

function bxHydrateWhenReady() {
  hydrateBxIcons();
  try {
    if (document.fonts && document.fonts.load) {
      document.fonts
        .load('16px "Noto Color Emoji"')
        .then(function () {
          _bxEmojiCache = {};
          bxRefillEmoji();
        })
        .catch(function () {});
    }
  } catch (e) {}
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bxHydrateWhenReady);
} else {
  bxHydrateWhenReady();
}

var ACHIEVEMENTS = [
  {
    id: "pionier",
    name: "PIONIER",
    sub: "Primul pas, 1 minigame",
    icon: "🧭",
    c1: "#fbbf24",
    c2: "#b45309",
    lvl: 1,
    unlocked: true,
  },
  {
    id: "explorator",
    name: "EXPLORATOR",
    sub: "50 oase descoperite",
    icon: "⛰️",
    c1: "#10b981",
    c2: "#047857",
    lvl: 2,
    unlocked: true,
  },
  {
    id: "anatomist",
    name: "ANATOMIST",
    sub: "Quiz Ușor — perfect",
    icon: "🏆",
    c1: "#06b6d4",
    c2: "#0e7490",
    lvl: 1,
    unlocked: true,
  },
  {
    id: "chirurg",
    name: "CHIRURG",
    sub: "Quiz Mediu — perfect",
    icon: "⚕️",
    c1: "#f43f5e",
    c2: "#9f1239",
    lvl: 2,
    unlocked: true,
  },
  {
    id: "maestru",
    name: "MAESTRU",
    sub: "Quiz Greu — finalizat",
    icon: "🛠️",
    c1: "#a78bfa",
    c2: "#6d28d9",
    lvl: 3,
    unlocked: false,
  },
  {
    id: "colectionar",
    name: "COLECȚIONAR",
    sub: "Toate secțiunile vizitate",
    icon: "💎",
    c1: "#60a5fa",
    c2: "#1e40af",
    lvl: 2,
    unlocked: true,
  },
  {
    id: "mentor",
    name: "MENTOR",
    sub: "10 întrebări AI puse",
    icon: "💡",
    c1: "#facc15",
    c2: "#a16207",
    lvl: 1,
    unlocked: true,
  },
  {
    id: "veteran",
    name: "VETERAN",
    sub: "30 zile activ",
    icon: "👑",
    c1: "#fbbf24",
    c2: "#b45309",
    lvl: 1,
    unlocked: false,
  },
  {
    id: "legenda",
    name: "LEGENDĂ",
    sub: "Quiz Greu — 100% scor",
    icon: "🦁",
    c1: "#f59e0b",
    c2: "#9a3412",
    lvl: 1,
    unlocked: false,
  },
  {
    id: "constant",
    name: "CONSTANT",
    sub: "7 zile consecutiv",
    icon: "🔥",
    c1: "#ef4444",
    c2: "#7f1d1d",
    lvl: 1,
    unlocked: false,
  },
  {
    id: "curios",
    name: "CURIOS",
    sub: "Chatbot folosit 25 ori",
    icon: "🔍",
    c1: "#22d3ee",
    c2: "#0e7490",
    lvl: 1,
    unlocked: true,
  },
  {
    id: "partener",
    name: "PARTENER",
    sub: "Cont creat & confirmat",
    icon: "🤝",
    c1: "#84cc16",
    c2: "#3f6212",
    lvl: 1,
    unlocked: true,
  },
  {
    id: "myolog",
    name: "MIOLOG",
    sub: "Primul quiz muscular",
    icon: "💪",
    c1: "#f87171",
    c2: "#991b1b",
    lvl: 1,
    unlocked: false,
  },
  {
    id: "sculptor",
    name: "SCULPTOR",
    sub: "Quiz muscular Mediu — perfect",
    icon: "🗿",
    c1: "#fb7185",
    c2: "#9f1239",
    lvl: 2,
    unlocked: false,
  },
  {
    id: "sarcomer",
    name: "SARCOMER",
    sub: "30 mușchi descoperiți",
    icon: "🧬",
    c1: "#c084fc",
    c2: "#6b21a8",
    lvl: 2,
    unlocked: false,
  },
  {
    id: "kinetician",
    name: "KINETICIAN",
    sub: "Quiz muscular Greu — finalizat",
    icon: "⚡",
    c1: "#fbbf24",
    c2: "#92400e",
    lvl: 3,
    unlocked: false,
  },
];

(function () {
  var M = {
    pionier: "compass", explorator: "mountain", anatomist: "medal", chirurg: "cross",
    maestru: "star", colectionar: "gem", mentor: "bulb", veteran: "crown",
    legenda: "sparkle", constant: "flame", curios: "search", partener: "people",
    myolog: "muscle", sculptor: "chisel", sarcomer: "dna", kinetician: "bolt",
  };
  ACHIEVEMENTS.forEach(function (a) { a.ic = M[a.id] || null; });
})();

function getProfileData(user) {
  try {
    var raw = localStorage.getItem("bionexus_profile_" + user);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { avatar: null, xp: 6420 };
}
function saveProfileData(user, d) {
  localStorage.setItem("bionexus_profile_" + user, JSON.stringify(d));
}

function computeLevel(xp) {
  var lvl = Math.floor(Math.sqrt(xp / 30)) + 1;
  var nextThresh = Math.pow(lvl, 2) * 30;
  var prevThresh = Math.pow(lvl - 1, 2) * 30;
  var pct = Math.max(
    0,
    Math.min(100, Math.round(((xp - prevThresh) / (nextThresh - prevThresh)) * 100))
  );
  return { level: lvl, xp: xp, prev: prevThresh, next: nextThresh, pct: pct };
}

function renderBadges() {
  var grid = document.getElementById("profileBadgesGrid");
  if (!grid) return;
  grid.innerHTML = "";
  var achieved = 0;
  ACHIEVEMENTS.forEach(function (a) {
    if (a.unlocked) achieved++;
    var c = document.createElement("div");
    c.className = "badge-card" + (a.unlocked ? "" : " locked");
    c.style.setProperty("--badge-glow", a.c1);
    c.style.setProperty("--badge-c1", a.c1);
    c.style.setProperty("--badge-c2", a.c2);
    c.innerHTML =
      '<div class="badge-icon">' +
      bxBadgeIcon(a) +
      '</div><div class="badge-info"><div class="badge-name">' +
      a.name +
      '</div><div class="badge-sub">' +
      a.sub +
      '</div><div class="badge-lvl">Lvl ' +
      a.lvl +
      "</div></div>";
    grid.appendChild(c);
  });
  var c = document.getElementById("profileBadgesAchieved");
  if (c) c.textContent = achieved + " / " + ACHIEVEMENTS.length;
}

window.goProfile = function (section) {
  var u = getCurrentUser();
  if (!u) {
    openLogin();
    return;
  }
  var page = document.getElementById("profilePage");
  if (!page) return;
  var d = getProfileData(u.user);
  var avA = document.getElementById("profileAvatar");
  var nA = document.getElementById("profileName");
  if (avA) {
    if (d.avatar) {
      avA.style.backgroundImage = "url(" + d.avatar + ")";
      avA.textContent = "";
    } else {
      avA.style.backgroundImage = "";
      avA.textContent = u.user.charAt(0).toUpperCase();
    }
  }
  if (nA) nA.textContent = u.user;
  var emEl = document.getElementById("settingsEmail");
  if (emEl) emEl.textContent = u.email || "—";
  var lvl = computeLevel(d.xp || 0);
  var pl = document.getElementById("profileLevel");
  if (pl) pl.textContent = lvl.level;
  var pp = document.getElementById("profileLevelPct");
  if (pp) pp.textContent = lvl.pct + "%";
  var pf = document.getElementById("profileLevelFill");
  if (pf) pf.style.width = lvl.pct + "%";
  var px = document.getElementById("profileLevelXp");
  if (px)
    px.textContent =
      lvl.xp.toLocaleString("ro-RO") + " / " + lvl.next.toLocaleString("ro-RO") + " XP";
  renderBadges();
  refreshThemeUI();
  switchProfileTab(section === "insigne" ? "profil" : section || "profil");
  page.classList.add("active");
  document.body.style.overflow = "hidden";
  closeUserMenu();
};

window.onAvatarPick = function (e) {
  var f = e.target.files && e.target.files[0];
  if (!f) return;
  var r = new FileReader();
  r.onload = function (ev) {
    var u = getCurrentUser();
    if (!u) return;
    var d = getProfileData(u.user);
    d.avatar = ev.target.result;
    saveProfileData(u.user, d);
    var avA = document.getElementById("profileAvatar");
    if (avA) {
      avA.style.backgroundImage = "url(" + d.avatar + ")";
      avA.style.backgroundSize = "cover";
      avA.style.backgroundPosition = "center";
      avA.textContent = "";
    }
    if (typeof applyUserBadge === "function") applyUserBadge();
  };
  r.readAsDataURL(f);
};

window.startEditName = function () {
  document.getElementById("profileNameInput").value = getCurrentUser().user;
  document.querySelector(".profile-name-row").style.display = "none";
  document.getElementById("profileNameEditRow").style.display = "flex";
  document.getElementById("profileNameInput").focus();
};
window.cancelEditName = function () {
  document.querySelector(".profile-name-row").style.display = "flex";
  document.getElementById("profileNameEditRow").style.display = "none";
};
window.saveName = function () {
  var newName = document.getElementById("profileNameInput").value.trim();
  if (!newName || newName.length < 2) {
    alert("Nume invalid (min. 2 caractere).");
    return;
  }
  var u = getCurrentUser();
  var users = getUsers();
  if (
    users.find(function (x) {
      return x.user === newName && x.user !== u.user;
    })
  ) {
    alert("Acest nume este deja folosit.");
    return;
  }
  var rec = users.find(function (x) {
    return x.user === u.user;
  });
  if (rec) {
    var oldKey = "bionexus_profile_" + u.user;
    var oldData = localStorage.getItem(oldKey);
    if (oldData) {
      localStorage.setItem("bionexus_profile_" + newName, oldData);
      localStorage.removeItem(oldKey);
    }
    rec.user = newName;
    saveUsers(users);
    setCurrentUser({ user: newName, email: u.email });
    document.getElementById("profileName").textContent = newName;
    var av = document.getElementById("profileAvatar");
    if (av && !av.style.backgroundImage) av.textContent = newName.charAt(0).toUpperCase();
    applyUserBadge();
  }
  cancelEditName();
};

window.changePassword = async function () {
  var cur = document.getElementById("settingsCurPass").value;
  var nw = document.getElementById("settingsNewPass").value;
  var cf = document.getElementById("settingsConfPass").value;
  var msg = document.getElementById("settingsPassMsg");
  msg.className = "settings-msg";
  msg.textContent = "";
  if (!cur || !nw || !cf) {
    msg.classList.add("err");
    msg.textContent = "Completează toate câmpurile.";
    return;
  }
  if (nw.length < 4) {
    msg.classList.add("err");
    msg.textContent = "Parola nouă trebuie să aibă minim 4 caractere.";
    return;
  }
  if (nw !== cf) {
    msg.classList.add("err");
    msg.textContent = "Parolele nu coincid.";
    return;
  }
  var u = getCurrentUser();
  var users = getUsers();
  var rec = users.find(function (x) {
    return x.user === u.user;
  });
  if (!rec) {
    msg.classList.add("err");
    msg.textContent = "Utilizator inexistent.";
    return;
  }
  var curH = await sha256(cur);
  if (rec.pass !== curH && rec.pass !== cur) {
    msg.classList.add("err");
    msg.textContent = "Parola actuală e greșită.";
    return;
  }
  rec.pass = await sha256(nw);
  saveUsers(users);
  msg.classList.add("ok");
  msg.textContent = "Parolă schimbată cu succes.";
  document.getElementById("settingsCurPass").value = "";
  document.getElementById("settingsNewPass").value = "";
  document.getElementById("settingsConfPass").value = "";
};

function getCustomColors() {
  try {
    return JSON.parse(localStorage.getItem("bionexus_custom_theme") || "{}");
  } catch (e) {
    return {};
  }
}
function saveCustomColors(c) {
  localStorage.setItem("bionexus_custom_theme", JSON.stringify(c));
}
function applyCustomTheme() {
  var c = getCustomColors();
  var s = document.documentElement.style;
  if (c.bg) {
    s.setProperty("--bg", c.bg);
    s.setProperty("--bg2", c.bg);
  }
  if (c.card) {
    s.setProperty("--card", c.card);
    s.setProperty("--card2", c.card);
  }
  if (c.acc) {
    s.setProperty("--acc", c.acc);
    s.setProperty("--accL", c.acc);
  }
  if (c.t1) {
    s.setProperty("--t1", c.t1);
  }
}
function clearCustomVars() {
  var s = document.documentElement.style;
  ["--bg", "--bg2", "--card", "--card2", "--acc", "--accL", "--t1"].forEach(function (v) {
    s.removeProperty(v);
  });
}

window.setTheme = function (th) {
  if (th === "system") {
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
    localStorage.setItem("bionexus_theme", "system");
    clearCustomVars();
  } else if (th === "custom") {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("bionexus_theme", "custom");
    applyCustomTheme();
  } else {
    document.documentElement.setAttribute("data-theme", th);
    localStorage.setItem("bionexus_theme", th);
    clearCustomVars();
  }
  refreshThemeUI();
};
function refreshThemeUI() {
  var saved = localStorage.getItem("bionexus_theme") || "dark";
  document.querySelectorAll(".settings-theme-opt").forEach(function (b) {
    b.classList.toggle("active", b.getAttribute("data-set-theme") === saved);
  });
  document.querySelectorAll(".theme-btn").forEach(function (b) {
    var d = b.getAttribute("data-theme");
    b.classList.toggle(
      "active",
      saved === "custom" ? false : saved === "system" ? false : d === saved
    );
  });
  var cb = document.getElementById("settingsCustomBlock");
  if (cb) cb.style.display = saved === "custom" ? "block" : "none";
  if (saved === "custom") {
    var c = getCustomColors();
    var vals = {
      1: c.bg || "#0a0e1a",
      2: c.card || "#1a2035",
      3: c.acc || "#6366f1",
      4: c.t1 || "#f1f5f9",
    };
    Object.keys(vals).forEach(function (k) {
      var sw = document.getElementById("customSwatch" + k),
        hx = document.getElementById("customHex" + k);
      if (sw) sw.style.background = vals[k];
      if (hx) hx.value = vals[k];
    });
  }
}
window.refreshThemeUI = refreshThemeUI;

window.onHexChange = function (idx) {
  var hx = document.getElementById("customHex" + idx);
  if (!hx) return;
  var v = hx.value.trim();
  if (!/^#[0-9a-fA-F]{6}$/.test(v)) {
    hx.value = hx.dataset.last || "#000000";
    return;
  }
  hx.dataset.last = v;
  document.getElementById("customSwatch" + idx).style.background = v;
  var c = getCustomColors();
  var map = { 1: "bg", 2: "card", 3: "acc", 4: "t1" };
  c[map[idx]] = v;
  saveCustomColors(c);
  if (localStorage.getItem("bionexus_theme") === "custom") applyCustomTheme();
};

window.resetCustom = function () {
  localStorage.removeItem("bionexus_custom_theme");
  clearCustomVars();
  refreshThemeUI();
};

var _cpCurrent = { idx: "1", h: 0, s: 0, v: 0 };
window.openColorPicker = function (idx) {
  _cpCurrent.idx = idx;
  var pop = document.getElementById("colorPickerPop");
  var sw = document.getElementById("customSwatch" + idx);
  if (!pop || !sw) return;
  var hex = document.getElementById("customHex" + idx).value;
  var rgb = hexToRgb(hex);
  var hsv = rgbToHsv(rgb.r, rgb.g, rgb.b);
  _cpCurrent.h = hsv.h;
  _cpCurrent.s = hsv.s;
  _cpCurrent.v = hsv.v;
  var rect = sw.getBoundingClientRect();
  pop.style.left = Math.min(window.innerWidth - 260, rect.left) + "px";
  pop.style.top = rect.bottom + 8 + "px";
  pop.style.display = "block";
  updateCpUI();
};
function closeColorPicker() {
  document.getElementById("colorPickerPop").style.display = "none";
}
document.addEventListener("click", function (e) {
  var pop = document.getElementById("colorPickerPop");
  if (!pop || pop.style.display === "none") return;
  if (pop.contains(e.target)) return;
  if (e.target.closest && e.target.closest(".custom-swatch")) return;
  closeColorPicker();
});
function hexToRgb(h) {
  h = h.replace("#", "");
  return {
    r: parseInt(h.substr(0, 2), 16),
    g: parseInt(h.substr(2, 2), 16),
    b: parseInt(h.substr(4, 2), 16),
  };
}
function rgbToHex(r, g, b) {
  return (
    "#" +
    [r, g, b]
      .map(function (x) {
        var s = Math.round(x).toString(16);
        return s.length < 2 ? "0" + s : s;
      })
      .join("")
  );
}
function rgbToHsv(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  var mx = Math.max(r, g, b),
    mn = Math.min(r, g, b),
    d = mx - mn;
  var h = 0,
    s = mx === 0 ? 0 : d / mx,
    v = mx;
  if (d) {
    if (mx === r) h = ((g - b) / d) % 6;
    else if (mx === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h: h, s: s, v: v };
}
function hsvToRgb(h, s, v) {
  h = ((h % 360) + 360) % 360;
  var c = v * s,
    x = c * (1 - Math.abs(((h / 60) % 2) - 1)),
    m = v - c;
  var r, g, b;
  if (h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h < 300) {
    r = x;
    g = 0;
    b = c;
  } else {
    r = c;
    g = 0;
    b = x;
  }
  return { r: (r + m) * 255, g: (g + m) * 255, b: (b + m) * 255 };
}
function updateCpUI() {
  var hueColor = rgbToHex.apply(null, Object.values(hsvToRgb(_cpCurrent.h, 1, 1)));
  var rgb = hsvToRgb(_cpCurrent.h, _cpCurrent.s, _cpCurrent.v);
  var hex = rgbToHex(rgb.r, rgb.g, rgb.b);
  document.getElementById("cpArea").style.setProperty("--cp-hue", hueColor);
  var area = document.getElementById("cpArea");
  document.getElementById("cpCursor").style.left = _cpCurrent.s * 100 + "%";
  document.getElementById("cpCursor").style.top = (1 - _cpCurrent.v) * 100 + "%";
  document.getElementById("cpHueThumb").style.left = (_cpCurrent.h / 360) * 100 + "%";
  document.getElementById("cpHueThumb").style.background = hueColor;
  document.getElementById("cpPreview").style.background = hex;
  document.getElementById("cpR").value = Math.round(rgb.r);
  document.getElementById("cpG").value = Math.round(rgb.g);
  document.getElementById("cpB").value = Math.round(rgb.b);
  var idx = _cpCurrent.idx;
  var hx = document.getElementById("customHex" + idx);
  var sw = document.getElementById("customSwatch" + idx);
  if (hx) {
    hx.value = hex;
    hx.dataset.last = hex;
  }
  if (sw) {
    sw.style.background = hex;
  }
  var c = getCustomColors();
  var map = { 1: "bg", 2: "card", 3: "acc", 4: "t1" };
  c[map[idx]] = hex;
  saveCustomColors(c);
  if (localStorage.getItem("bionexus_theme") === "custom") applyCustomTheme();
}
(function () {
  var area = document.getElementById("cpArea"),
    hue = document.getElementById("cpHue");
  if (!area || !hue) return;
  function pickArea(e) {
    var r = area.getBoundingClientRect();
    var x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    var y = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
    _cpCurrent.s = x;
    _cpCurrent.v = 1 - y;
    updateCpUI();
  }
  var draggingArea = false;
  area.addEventListener("mousedown", function (e) {
    draggingArea = true;
    pickArea(e);
  });
  document.addEventListener("mousemove", function (e) {
    if (draggingArea) pickArea(e);
  });
  document.addEventListener("mouseup", function () {
    draggingArea = false;
  });
  function pickHue(e) {
    var r = hue.getBoundingClientRect();
    var x = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width));
    _cpCurrent.h = x * 360;
    updateCpUI();
  }
  var draggingHue = false;
  hue.addEventListener("mousedown", function (e) {
    draggingHue = true;
    pickHue(e);
  });
  document.addEventListener("mousemove", function (e) {
    if (draggingHue) pickHue(e);
  });
  document.addEventListener("mouseup", function () {
    draggingHue = false;
  });
  ["cpR", "cpG", "cpB"].forEach(function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", function () {
      var r = parseInt(document.getElementById("cpR").value) || 0;
      var g = parseInt(document.getElementById("cpG").value) || 0;
      var b = parseInt(document.getElementById("cpB").value) || 0;
      var hsv = rgbToHsv(r, g, b);
      _cpCurrent.h = hsv.h;
      _cpCurrent.s = hsv.s;
      _cpCurrent.v = hsv.v;
      updateCpUI();
    });
  });
})();

(function () {
  var saved = localStorage.getItem("bionexus_theme") || "dark";
  if (saved === "custom") applyCustomTheme();
  else if (saved === "system") {
    var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
  }
})();

window.openAIFromFeature = function () {
  var panel = document.getElementById("chatboxPanel");
  var btn = document.getElementById("chatboxToggle");
  if (panel && !panel.classList.contains("active")) {
    panel.classList.add("active");
    if (btn) btn.classList.add("active");
    setTimeout(function () {
      var inp = document.getElementById("chatInput");
      if (inp) inp.focus();
    }, 250);
  }
};

var CURIOZITATI = [
  "🦴 Corpul uman adult are <b>206 oase</b>. La naștere sunt aproximativ 270 — multe se sudează în timpul creșterii.",
  "👂 Cele mai mici oase sunt <b>oscioarele urechii medii</b>: ciocanul, nicovala și scărița. Scărița măsoară doar 3 mm.",
  "🦵 <b>Femurul</b> este cel mai lung și mai puternic os. Reprezintă ~27% din înălțime și poate suporta de 30 ori greutatea corpului.",
  "🦷 <b>Smalțul dentar</b> este cel mai dur țesut din corp — mai dur decât osul, dar nu se regenerează.",
  "🧠 <b>Creierul</b> consumă ~20% din energia corpului, deși cântărește doar 2%.",
  "❤️ <b>Inima</b> pompează ~7000 de litri de sânge pe zi și bate de ~100.000 ori zilnic.",
  "🩸 Toate <b>vasele de sânge</b> înșirate ar înconjura Pământul de 2,5 ori (~100.000 km).",
  "🫁 Suprafața <b>alveolelor pulmonare</b> e cât un teren de tenis (~70 m²).",
  "👅 <b>Limba</b> este cel mai puternic mușchi raportat la dimensiune.",
  "🦴 <b>Osul hioid</b> e singurul os din corp care nu se articulează cu alt os — e suspendat de mușchi și ligamente.",
  "🦴 Coloana vertebrală are <b>33-34 vertebre</b>, însă la adult sacrumul și coccisul sunt sudate, deci se numără ca 26.",
  "💪 Corpul are ~<b>600 de mușchi</b>. Mușchiul fesier mare (gluteus maximus) e cel mai voluminos.",
  "🦴 <b>Stapes</b> (scărița) este singurul os care nu se mai dezvoltă după naștere — păstrează aceeași dimensiune toată viața.",
  "🤲 Mâinile au <b>27 de oase</b> fiecare — peste un sfert din toate oasele corpului sunt în mâini și picioare.",
  "🩻 Osul este de <b>5 ori mai rezistent</b> decât oțelul, raportat la greutate.",
  "🧬 În măduva roșie se produc <b>~2 milioane de globule roșii pe secundă</b>.",
  "🦴 La copii, oasele cresc datorită <b>plăcii de creștere</b> (cartilajul epifizar). Aceasta se osifică în jurul vârstei de 18-25 ani.",
  '⚖️ Toate <b>articulațiile mobile (sinoviale)</b> conțin lichid sinovial, un fel de „ulei biologic" care reduce frecarea.',
  "🦴 În timpul vieții, scheletul uman se <b>regenerează complet</b> aproximativ la fiecare 10 ani prin remodelare osoasă.",
  "🦷 La nou-născut, oasele craniului sunt <b>moi și flexibile</b>, separate prin fontanele care permit nașterea și creșterea creierului.",
];

window.openCuriozitati = function () {
  var fact = CURIOZITATI[Math.floor(Math.random() * CURIOZITATI.length)];
  var panel = document.getElementById("chatboxPanel");
  var btn = document.getElementById("chatboxToggle");
  if (panel && !panel.classList.contains("active")) {
    panel.classList.add("active");
    if (btn) btn.classList.add("active");
  }
  if (typeof addChatMessage === "function") {
    addChatMessage("<b>Curiozitate anatomică:</b><br>" + fact, false);
  }
};

(function () {
  if (typeof I18N === "undefined") return;
  Object.assign(I18N.ro, {
    "home.feat.ai.t": "Asistent AI Biologic",
    "home.feat.ai.d":
      "Pune întrebări despre orice structură din oricare sistem — os, mușchi, organ, nerv sau vas. Răspunsuri instant în chatbox-ul interactiv.",
    "home.feat.ai.cta": "Deschide chatbox-ul &rarr;",
    "home.feat.curio.t": "Curiozități",
    "home.feat.curio.d":
      "Fapte uimitoare despre corpul uman — câte oase, cel mai mic, cel mai puternic mușchi. Răsfoiește o curiozitate aleatoare.",
    "home.feat.curio.cta": "Vezi o curiozitate &rarr;",
    "home.learn.sub":
      "Manuale universitare de anatomie umană — referințe oficiale, deschise în filă nouă.",
    "home.learn.open": "Deschide manualul &rarr;",
    "home.learn.hint":
      "Manualele se deschid pe site-ul oficial USMF într-o filă nouă a browserului.",
    "home.learn.m1.t": "Anatomia Omului · Volumul I",
    "home.learn.m1.d":
      "Stefaneț M. — Osteologie, artrologie, miologie. Fundația aparatului locomotor: oase, articulații, mușchi cu descrieri morfo-funcționale complete.",
    "home.learn.m2.t": "Anatomia Omului · Volumul II",
    "home.learn.m2.d":
      "Stefaneț M. — Splanhnologie: aparatul digestiv, respirator și urogenital. Organele interne explicate sistemic cu schiță topografică.",
    "home.learn.m3.t": "Anatomia Omului · Volumul III",
    "home.learn.m3.d":
      "Stefaneț M. — Sistemul cardiovascular, sistemul nervos central și periferic, organele de simț. Volumul de integrare funcțională.",
    "home.learn.m4.t": "Aparatul de Susținere și Mișcare",
    "home.learn.m4.d":
      "USMF · Culegere de cursuri (2011). Sistematizarea aparatului locomotor: scheletul axial, scheletul apendicular, articulații și musculatură — format PDF.",
    "home.learn.m5.t": "Barron's · Anatomie și Fiziologie",
    "home.learn.m5.d":
      "Krumhardt & Alcamo (UMFST 2022) — manual de admitere pentru facultățile de medicină. Capitol detaliat: <b>Oasele și articulațiile</b> (osteogeneză, osteoane, sinartroze, diartroze, remodelare osoasă).",
  });
  Object.assign(I18N.en, {
    "home.feat.ai.t": "Biological AI Assistant",
    "home.feat.ai.d":
      "Ask questions about any structure in any system — bone, muscle, organ, nerve or vessel. Instant answers in the interactive chatbox.",
    "home.feat.ai.cta": "Open the chatbox &rarr;",
    "home.feat.curio.t": "Curiosities",
    "home.feat.curio.d":
      "Amazing facts about the human body — how many bones, smallest, strongest muscle. Discover a random curiosity.",
    "home.feat.curio.cta": "Show a curiosity &rarr;",
    "home.learn.sub":
      "University-level human anatomy textbooks — official references opened in a new tab.",
    "home.learn.open": "Open textbook &rarr;",
    "home.learn.hint": "Textbooks open on the official USMF website in a new browser tab.",
    "home.learn.m1.t": "Human Anatomy · Volume I",
    "home.learn.m1.d":
      "Stefaneț M. — Osteology, arthrology, myology. The foundation of the locomotor system: bones, joints, muscles with full morpho-functional descriptions.",
    "home.learn.m2.t": "Human Anatomy · Volume II",
    "home.learn.m2.d":
      "Stefaneț M. — Splanchnology: digestive, respiratory and urogenital systems. Internal organs explained systemically with topographic sketches.",
    "home.learn.m3.t": "Human Anatomy · Volume III",
    "home.learn.m3.d":
      "Stefaneț M. — Cardiovascular system, central and peripheral nervous system, sensory organs. The volume of functional integration.",
    "home.learn.m4.t": "The Locomotor Apparatus",
    "home.learn.m4.d":
      "USMF · Lecture compendium (2011). Systematization of the locomotor apparatus: axial skeleton, appendicular skeleton, joints and musculature — PDF format.",
    "home.learn.m5.t": "Barron's · Anatomy & Physiology",
    "home.learn.m5.d":
      "Krumhardt & Alcamo (UMFST 2022) — admissions textbook for medical schools. Detailed chapter: <b>Bones and joints</b> (osteogenesis, osteons, synarthroses, diarthroses, bone remodeling).",
  });
  if (typeof applyLanguage === "function") applyLanguage(CUR_LANG);
})();

window.showAuthMode = function (mode) {
  document.getElementById("authBodyLogin").style.display = mode === "login" ? "block" : "none";
  document.getElementById("authBodyRegister").style.display =
    mode === "register" ? "block" : "none";
  var le = document.getElementById("loginError");
  if (le) le.textContent = "";
  var re = document.getElementById("regError");
  if (re) re.textContent = "";
  if (mode === "register" && typeof window.captchaRender === "function") window.captchaRender();
};

window.forgotPass = function () {
  alert(
    "Recuperarea parolei nu este disponibilă în modul offline. Datele tale se stochează doar local în browser. Reset prin Setări → Securitate când ești autentificat, sau șterge contul din localStorage și creează unul nou."
  );
};

window.openLogin = function () {
  showAuthMode("login");
  var p = document.getElementById("loginModal");
  if (p) p.classList.add("active");
  document.body.style.overflow = "hidden";
};

window.doLogin = async function () {
  var u = document.getElementById("loginUser").value.trim();
  var p = document.getElementById("loginPass").value;
  var err = document.getElementById("loginError");
  var btn = document.getElementById("loginSubmitBtn");
  err.textContent = "";
  if (!u || !p) {
    err.textContent = "Completează ambele câmpuri.";
    return;
  }
  btn.disabled = true;
  var origTxt = btn.textContent;
  btn.innerHTML = '<span class="auth-spin"></span> Se verifică...';
  await new Promise(function (r) {
    setTimeout(r, 500);
  });
  try {
    var users = getUsers();
    var hashed = await sha256(p);
    var match = users.find(function (x) {
      return (x.user === u || x.email === u) && (x.pass === hashed || x.pass === p);
    });
    if (!match) {
      err.textContent = "Email/utilizator sau parolă greșită.";
      btn.disabled = false;
      btn.textContent = origTxt || "Conectare";
      return;
    }
    if (match.pass === p && match.pass !== hashed) {
      match.pass = hashed;
      saveUsers(users);
    }
    setCurrentUser({ user: match.user, email: match.email });
    btn.innerHTML = '<span class="auth-spin"></span> Te conectăm...';
    await new Promise(function (r) {
      setTimeout(r, 400);
    });
    closeLogin();
    applyUserBadge();
    if (typeof showHome === "function") showHome();
  } catch (e) {
    err.textContent = "Eroare neașteptată. Reîncearcă.";
    btn.disabled = false;
    btn.textContent = origTxt || "Conectare";
  }
};

window.doRegister = async function () {
  var u = document.getElementById("regUser").value.trim();
  var e = document.getElementById("regEmail").value.trim();
  var p = document.getElementById("regPass").value;
  var pc = document.getElementById("regPassConf").value;
  var terms = document.getElementById("regTerms").checked;
  var human = document.getElementById("regHuman").checked;
  var err = document.getElementById("regError");
  var btn = document.getElementById("regSubmitBtn");
  err.textContent = "";
  if (!u || !e || !p || !pc) {
    err.textContent = "Completează toate câmpurile.";
    return;
  }
  if (u.length < 3) {
    err.textContent = "Numele de utilizator trebuie să aibă minim 3 caractere.";
    return;
  }
  if (!/.+@.+\..+/.test(e)) {
    err.textContent = "Adresa de email este invalidă.";
    return;
  }
  if (p.length < 8) {
    err.textContent = "Parola trebuie să aibă minim 8 caractere.";
    return;
  }
  if (p !== pc) {
    err.textContent = "Parolele nu coincid.";
    return;
  }
  if (!terms) {
    err.textContent = "Trebuie să accepți Termenii și Confidențialitatea.";
    return;
  }
  if (!human) {
    err.textContent = "Confirmă că nu ești robot.";
    return;
  }
  var users = getUsers();
  if (
    users.find(function (x) {
      return x.user === u;
    })
  ) {
    err.textContent = "Acest nume de utilizator este deja folosit.";
    return;
  }
  if (
    users.find(function (x) {
      return x.email === e;
    })
  ) {
    err.textContent = "Acest email este deja înregistrat.";
    return;
  }
  btn.disabled = true;
  var origTxt = btn.textContent;
  btn.innerHTML = '<span class="auth-spin"></span> Se verifică browser-ul...';
  await new Promise(function (r) {
    setTimeout(r, 900);
  });
  btn.innerHTML = '<span class="auth-spin"></span> Se creează contul...';
  await new Promise(function (r) {
    setTimeout(r, 500);
  });
  try {
    var hashed = await sha256(p);
    users.push({ user: u, email: e, pass: hashed, createdAt: Date.now() });
    saveUsers(users);
    setCurrentUser({ user: u, email: e });
    closeLogin();
    applyUserBadge();
    if (typeof showHome === "function") showHome();
  } catch (ex) {
    err.textContent = "Eroare la crearea contului. Reîncearcă.";
    btn.disabled = false;
    btn.textContent = origTxt || "Creează cont";
  }
};

window.showTerms = function (type) {
  var modal = document.getElementById("termsModal");
  var title = document.getElementById("termsTitle");
  var body = document.getElementById("termsBody");
  if (!modal || !title || !body) return;
  if (type === "terms") {
    title.textContent = "Termeni și Condiții";
    body.innerHTML =
      "<p><b>Acceptarea termenilor.</b> Folosind BioNexus, accepți acești termeni de utilizare. BioNexus este o platformă educațională de anatomie 3D destinată elevilor, studenților și pasionaților de biologie.</p>" +
      "<h3>1. Utilizare</h3><p>BioNexus este oferit gratuit pentru uz educațional personal. Conținutul platformei (modele 3D, descrieri, manuale) este protejat prin drepturi de autor.</p>" +
      "<h3>2. Contul tău</h3><p>Datele contului (nume, email, parolă criptată SHA-256) sunt stocate <b>EXCLUSIV LOCAL</b> în browserul tău, prin localStorage. Nu trimitem date către niciun server. Ești responsabil pentru păstrarea credențialelor tale.</p>" +
      "<h3>3. Limitarea răspunderii</h3><p>BioNexus este destinat strict educației. Informațiile NU constituie sfaturi medicale. Pentru probleme de sănătate consultă un medic.</p>" +
      "<h3>4. Modificări</h3><p>Termenii pot fi actualizați în viitor. Continuarea utilizării după modificări implică acceptarea acestora.</p>";
  } else {
    title.textContent = "Politica de Confidențialitate";
    body.innerHTML =
      "<p><b>Pe scurt:</b> BioNexus rulează 100% local în browserul tău. Nu colectăm, nu trimitem și nu vindem date personale.</p>" +
      "<h3>Ce date sunt stocate</h3><p>Datele contului tău (utilizator, email, parolă criptată cu SHA-256), preferințele de temă, limba, progresul la quiz-uri și avatarul — toate sunt salvate exclusiv în <code>localStorage</code> al browserului tău.</p>" +
      "<h3>Date externe</h3><p>BioNexus folosește Google Fonts (Noto Color Emoji) pentru emoji-uri în interfață. Manualele PDF se deschid pe site-ul oficial al USMF (library.usmf.md) într-o filă nouă.</p>" +
      "<h3>Cookie-uri</h3><p>Nu folosim cookie-uri de tracking. Singurul stocaj este localStorage local, accesibil doar de browserul tău.</p>" +
      "<h3>Drepturile tale</h3><p>Poți șterge oricând datele tale curățând localStorage-ul browser-ului sau folosind butonul <b>Deloghează-te</b>.</p>" +
      "<h3>Contact</h3><p>Pentru întrebări legate de confidențialitate: deschide un issue pe pagina proiectului.</p>";
  }
  modal.style.display = "flex";
};
window.closeTerms = function () {
  var modal = document.getElementById("termsModal");
  if (modal) modal.style.display = "none";
};

(function () {
  if (typeof I18N === "undefined") return;
  Object.assign(I18N.ro, {
    "login.welcome": "Bine ai revenit",
    "login.sub": "Conectează-te în contul tău",
    "login.user": "Email sau utilizator",
    "login.pass": "Parolă",
    "login.forgot": "Ai uitat parola?",
    "login.submit": "Conectare",
    "login.noAccount": "Nu ai cont? <a onclick=\"showAuthMode('register')\">Creează un cont</a>",
    "auth.or": "sau",
    "auth.guest": "Continuă ca vizitator",
    "auth.back": "Înapoi",
    "reg.title": "Creează un cont",
    "reg.sub": "Alătură-te BioNexus astăzi",
    "reg.user": "Nume utilizator",
    "reg.email": "Adresă de email",
    "reg.pass": "Parolă",
    "reg.passHint": "Minim 8 caractere",
    "reg.passConf": "Confirmă parola",
    "reg.termsAccept":
      'Sunt de acord cu <a class="auth-link" onclick="event.preventDefault();showTerms(\'terms\')">Termenii</a> și <a class="auth-link" onclick="event.preventDefault();showTerms(\'privacy\')">Confidențialitatea</a>',
    "reg.human": "Nu sunt robot",
    "reg.submit": "Creează cont",
    "reg.captcha.title": "Verificare securitate",
    "reg.haveAccount": "Ai deja un cont? <a onclick=\"showAuthMode('login')\">Conectează-te</a>",
  });
  Object.assign(I18N.en, {
    "login.welcome": "Welcome back",
    "login.sub": "Sign in to your account",
    "login.user": "Email or username",
    "login.pass": "Password",
    "login.forgot": "Forgot password?",
    "login.submit": "Sign in",
    "login.noAccount":
      "Don't have an account? <a onclick=\"showAuthMode('register')\">Create an account</a>",
    "auth.or": "or",
    "auth.guest": "Continue as guest",
    "auth.back": "Back",
    "reg.title": "Create an account",
    "reg.sub": "Join BioNexus today",
    "reg.user": "Username",
    "reg.email": "Email address",
    "reg.pass": "Password",
    "reg.passHint": "At least 8 characters",
    "reg.passConf": "Confirm password",
    "reg.termsAccept":
      'I agree to the <a class="auth-link" onclick="event.preventDefault();showTerms(\'terms\')">Terms of Service</a> and <a class="auth-link" onclick="event.preventDefault();showTerms(\'privacy\')">Privacy Policy</a>',
    "reg.human": "I am human",
    "reg.submit": "Create account",
    "reg.captcha.title": "Security check",
    "reg.haveAccount": "Already have an account? <a onclick=\"showAuthMode('login')\">Sign in</a>",
  });
  if (typeof applyLanguage === "function") applyLanguage(CUR_LANG);
})();

var REVIEW_SELECTED_RATING = 0;

function getReviews() {
  try {
    return JSON.parse(localStorage.getItem("bionexus_reviews") || "[]");
  } catch (e) {
    return [];
  }
}
function saveReviews(arr) {
  localStorage.setItem("bionexus_reviews", JSON.stringify(arr));
}

function formatRevDate(ts) {
  var d = new Date(ts);
  var now = new Date();
  var diff = (now - d) / 1000;
  if (diff < 60) return "acum câteva secunde";
  if (diff < 3600) return "acum " + Math.floor(diff / 60) + " min";
  if (diff < 86400) return "acum " + Math.floor(diff / 3600) + " h";
  if (diff < 7 * 86400) return "acum " + Math.floor(diff / 86400) + " zile";
  return d.toLocaleDateString("ro-RO", { day: "numeric", month: "short", year: "numeric" });
}

function renderStars(n, total) {
  total = total || 5;
  var s = "";
  for (var i = 1; i <= total; i++) s += i <= n ? "★" : "☆";
  return s;
}

function refreshReviewsUI() {
  var all = getReviews().sort(function (a, b) {
    return b.ts - a.ts;
  });
  var list = document.getElementById("reviewsList");
  var empty = document.getElementById("reviewsEmpty");
  if (!list) return;
  list.innerHTML = "";
  if (all.length === 0) {
    if (empty) empty.style.display = "block";
  } else {
    if (empty) empty.style.display = "none";
  }
  var u = getCurrentUser();
  all.forEach(function (r, idx) {
    var card = document.createElement("div");
    card.className = "review-card";
    var avInline = "";
    if (r.avatar)
      avInline =
        'style="background-image:url(' +
        r.avatar +
        ');background-size:cover;background-position:center"';
    var delBtn =
      u && u.user === r.user
        ? '<button class="review-delete" onclick="deleteReview(' +
          r.ts +
          ')" title="Șterge recenzia">&times;</button>'
        : "";
    card.innerHTML =
      '<div class="review-head">' +
      '<div class="review-avatar" ' +
      avInline +
      ">" +
      (r.avatar ? "" : escapeHTML(r.user.charAt(0).toUpperCase())) +
      "</div>" +
      '<div class="review-meta"><div class="review-name">' +
      escapeHTML(r.user) +
      '</div><div class="review-date">' +
      formatRevDate(r.ts) +
      "</div></div>" +
      '<div class="review-stars">' +
      renderStars(r.rating) +
      "</div>" +
      delBtn +
      "</div>" +
      '<div class="review-text">' +
      escapeHTML(r.text) +
      "</div>";
    list.appendChild(card);
  });
  var avg = 0;
  if (all.length) {
    var s = 0;
    all.forEach(function (r) {
      s += r.rating;
    });
    avg = s / all.length;
  }
  var avgNum = document.getElementById("reviewsAvgNum");
  var avgStars = document.getElementById("reviewsAvgStars");
  var avgCount = document.getElementById("reviewsAvgCount");
  if (avgNum) avgNum.textContent = all.length ? avg.toFixed(1) : "—";
  if (avgStars) {
    var rounded = Math.round(avg);
    avgStars.innerHTML = all.length
      ? renderStars(rounded)
      : '<span style="color:#475569">' + renderStars(0) + "</span>";
  }
  if (avgCount)
    avgCount.textContent =
      all.length +
      " " +
      ((window.t && window.t(all.length === 1 ? "reviews.word.one" : "reviews.word.many")) ||
        (all.length === 1 ? "recenzie" : "recenzii"));
  refreshReviewsForm();
}

function refreshReviewsForm() {
  var u = getCurrentUser();
  var locked = document.getElementById("reviewsFormLocked");
  var open = document.getElementById("reviewsFormOpen");
  if (!locked || !open) return;
  if (u) {
    locked.style.display = "none";
    open.style.display = "block";
    var nameEl = document.getElementById("reviewsFormName");
    if (nameEl) nameEl.textContent = u.user;
    var av = document.getElementById("reviewsFormAvatar");
    var pd = typeof getProfileData === "function" ? getProfileData(u.user) : null;
    if (av) {
      if (pd && pd.avatar) {
        av.style.backgroundImage = "url(" + pd.avatar + ")";
        av.textContent = "";
      } else {
        av.style.backgroundImage = "";
        av.textContent = u.user.charAt(0).toUpperCase();
      }
    }
  } else {
    locked.style.display = "block";
    open.style.display = "none";
  }
}

window.submitReview = function () {
  var u = getCurrentUser();
  var msg = document.getElementById("reviewsFormMsg");
  msg.className = "reviews-form-msg";
  msg.textContent = "";
  if (!u) {
    msg.classList.add("err");
    msg.textContent = "Trebuie să fii conectat.";
    return;
  }
  if (!REVIEW_SELECTED_RATING) {
    msg.classList.add("err");
    msg.textContent = "Alege un rating (1-5 stele).";
    return;
  }
  var txt = document.getElementById("reviewsFormText").value.trim();
  if (txt.length < 10) {
    msg.classList.add("err");
    msg.textContent = "Recenzia trebuie să aibă minim 10 caractere.";
    return;
  }
  if (txt.length > 600) {
    msg.classList.add("err");
    msg.textContent = "Recenzia depășește 600 de caractere.";
    return;
  }
  var all = getReviews();
  var existing = all.findIndex(function (r) {
    return r.user === u.user;
  });
  var pd = typeof getProfileData === "function" ? getProfileData(u.user) : null;
  var rev = {
    user: u.user,
    text: txt,
    rating: REVIEW_SELECTED_RATING,
    ts: Date.now(),
    avatar: pd && pd.avatar ? pd.avatar : null,
  };
  if (existing >= 0) {
    if (!confirm("Ai deja o recenzie publicată. Suprascrii cu cea nouă?")) return;
    all[existing] = rev;
  } else {
    all.push(rev);
  }
  saveReviews(all);
  document.getElementById("reviewsFormText").value = "";
  REVIEW_SELECTED_RATING = 0;
  updateRevStars();
  updateRevChar();
  msg.classList.add("ok");
  msg.textContent = "Recenzie publicată cu succes!";
  setTimeout(function () {
    msg.textContent = "";
    msg.className = "reviews-form-msg";
  }, 2500);
  refreshReviewsUI();
};

window.deleteReview = function (ts) {
  var u = getCurrentUser();
  if (!u) return;
  if (!confirm("Ștergi această recenzie?")) return;
  var all = getReviews();
  all = all.filter(function (r) {
    return !(r.ts === ts && r.user === u.user);
  });
  saveReviews(all);
  refreshReviewsUI();
};

function updateRevStars() {
  document.querySelectorAll(".reviews-form-rating .rev-star").forEach(function (s) {
    var v = parseInt(s.dataset.val, 10);
    s.classList.toggle("active", v <= REVIEW_SELECTED_RATING);
    s.innerHTML = v <= REVIEW_SELECTED_RATING ? "&#9733;" : "&#9734;";
  });
}
function updateRevChar() {
  var t = document.getElementById("reviewsFormText");
  var c = document.getElementById("reviewsFormChar");
  if (t && c) c.textContent = t.value.length + " / 600";
}

(function () {
  var stars = document.querySelectorAll(".reviews-form-rating .rev-star");
  stars.forEach(function (s) {
    s.addEventListener("click", function () {
      REVIEW_SELECTED_RATING = parseInt(this.dataset.val, 10);
      updateRevStars();
    });
    s.addEventListener("mouseenter", function () {
      var v = parseInt(this.dataset.val, 10);
      document.querySelectorAll(".reviews-form-rating .rev-star").forEach(function (x) {
        var xv = parseInt(x.dataset.val, 10);
        x.innerHTML = xv <= v ? "&#9733;" : "&#9734;";
        x.style.color = xv <= v ? "#fbbf24" : "";
      });
    });
    s.addEventListener("mouseleave", function () {
      document.querySelectorAll(".reviews-form-rating .rev-star").forEach(function (x) {
        x.style.color = "";
      });
      updateRevStars();
    });
  });
  var ta = document.getElementById("reviewsFormText");
  if (ta) ta.addEventListener("input", updateRevChar);
  refreshReviewsUI();
})();

(function () {
  if (typeof I18N === "undefined") return;
  Object.assign(I18N.ro, {
    "home.feat.edu.t": "Resursă educațională",
    "home.feat.edu.d":
      "BioNexus este o platformă educațională deschisă. Manuale universitare oficiale de anatomie umană disponibile direct în secțiunea Învață.",
    "home.feat.edu.cta": "Vezi manualele &rarr;",
    "home.reviews.title": 'Recenzii <span class="home-hero-grad">de la utilizatori</span>',
    "home.reviews.sub":
      "Citește experiențele altora sau lasă propria recenzie după ce te conectezi.",
    "home.reviews.empty": "0 recenzii",
    "home.reviews.login": "Conectează-te pentru a lăsa o recenzie.",
    "home.reviews.ph": "Spune-ne ce părere ai despre BioNexus...",
    "home.reviews.submit": "Publică recenzia",
    "home.reviews.none": "Nicio recenzie încă — fii primul!",
    "home.stats.verified": "Site educațional · Verified",
  });
  Object.assign(I18N.en, {
    "home.feat.edu.t": "Educational resource",
    "home.feat.edu.d":
      "BioNexus is an open educational platform. Official university anatomy textbooks available directly in the Learn section.",
    "home.feat.edu.cta": "Browse textbooks &rarr;",
    "home.reviews.title": 'Reviews <span class="home-hero-grad">from users</span>',
    "home.reviews.sub":
      "Read other users' experiences or leave your own review once you're signed in.",
    "home.reviews.empty": "0 reviews",
    "home.reviews.login": "Sign in to leave a review.",
    "home.reviews.ph": "Tell us what you think about BioNexus...",
    "home.reviews.submit": "Publish review",
    "home.reviews.none": "No reviews yet — be the first!",
    "home.stats.verified": "Educational site · Verified",
  });
  if (typeof applyLanguage === "function") applyLanguage(CUR_LANG);
})();

if (typeof window !== "undefined" && typeof window.applyUserBadge === "function") {
  var _origApplyUB = window.applyUserBadge;
  window.applyUserBadge = function () {
    _origApplyUB.apply(this, arguments);
    if (typeof refreshReviewsForm === "function") refreshReviewsForm();
  };
}

function getProgress(user) {
  if (!user) user = (getCurrentUser() || {}).user;
  if (!user) return {};
  try {
    return JSON.parse(localStorage.getItem("bionexus_progress_" + user) || "{}");
  } catch (e) {
    return {};
  }
}
function saveProgress(p, user) {
  if (!user) user = (getCurrentUser() || {}).user;
  if (!user) return;
  localStorage.setItem("bionexus_progress_" + user, JSON.stringify(p));
}
function ensureProgress(p) {
  p.bonesViewed = p.bonesViewed || [];
  p.sectionsVisited = p.sectionsVisited || [];
  p.quizPlays = p.quizPlays || { easy: 0, medium: 0, hard: 0 };
  p.quizPerfect = p.quizPerfect || { easy: 0, medium: 0, hard: 0 };
  p.quizCompleted = p.quizCompleted || 0;
  p.chatbotUses = p.chatbotUses || 0;
  p.daysActive = p.daysActive || [];
  p.joinDate = p.joinDate || Date.now();
  p.xp = p.xp || 0;
  return p;
}
function todayKey() {
  var d = new Date();
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}
function computeStreak(days) {
  if (!days || !days.length) return 0;
  var sorted = days.slice().sort(function (a, b) {
    return new Date(a) - new Date(b);
  });
  var streak = 1;
  for (var i = sorted.length - 1; i > 0; i--) {
    var d1 = new Date(sorted[i]),
      d0 = new Date(sorted[i - 1]);
    var dayDiff = Math.round((d1 - d0) / 86400000);
    if (dayDiff === 1) streak++;
    else break;
  }
  return streak;
}

function trackEvent(type, payload) {
  var u = getCurrentUser();
  if (!u) return;
  var p = ensureProgress(getProgress(u.user));
  var dirty = false;
  if (type === "viewBone" && payload) {
    if (p.bonesViewed.indexOf(payload) < 0) {
      p.bonesViewed.push(payload);
      p.xp += 5;
      dirty = true;
    }
  } else if (type === "visitSection" && payload) {
    if (p.sectionsVisited.indexOf(payload) < 0) {
      p.sectionsVisited.push(payload);
      p.xp += 10;
      dirty = true;
    }
  } else if (type === "chatbot") {
    p.chatbotUses = (p.chatbotUses || 0) + 1;
    p.xp += 2;
    dirty = true;
  } else if (type === "quizFinish" && payload) {
    var isMu = typeof QUIZ !== "undefined" && QUIZ.system === "muscular";
    if (isMu) {
      p.musclePlays = p.musclePlays || { easy: 0, medium: 0, hard: 0, count: 0 };
      p.musclePlays[payload.diff] = (p.musclePlays[payload.diff] || 0) + 1;
      p.musclePlays.count = (p.musclePlays.count || 0) + 1;
      var pctMu = payload.score / payload.total;
      if (pctMu === 1) {
        p.musclePerfect = p.musclePerfect || { easy: 0, medium: 0, hard: 0 };
        p.musclePerfect[payload.diff] = (p.musclePerfect[payload.diff] || 0) + 1;
      }
    } else {
      p.quizPlays[payload.diff] = (p.quizPlays[payload.diff] || 0) + 1;
      var pct = payload.score / payload.total;
      if (pct === 1) p.quizPerfect[payload.diff] = (p.quizPerfect[payload.diff] || 0) + 1;
    }
    p.quizCompleted = (p.quizCompleted || 0) + 1;
    var xpMult = { easy: 10, medium: 20, hard: 35 }[payload.diff] || 10;
    p.xp += Math.round(payload.score * xpMult);
    dirty = true;
  } else if (type === "viewMuscle" && payload) {
    p.musclesViewed = p.musclesViewed || [];
    if (p.musclesViewed.indexOf(payload) < 0) {
      p.musclesViewed.push(payload);
      p.xp += 2;
      dirty = true;
    }
  }
  var tk = todayKey();
  if (p.daysActive.indexOf(tk) < 0) {
    p.daysActive.push(tk);
    p.xp += 5;
    dirty = true;
  }
  if (dirty) saveProgress(p, u.user);
}
window.trackEvent = trackEvent;

function unlockedAchievements() {
  var u = getCurrentUser();
  if (!u) return [];
  var p = ensureProgress(getProgress(u.user));
  var totalSections = 4;
  var streak = computeStreak(p.daysActive);
  return {
    partener: true,
    pionier: p.quizCompleted >= 1,
    explorator: p.bonesViewed.length >= 50,
    anatomist: p.quizPerfect.easy >= 1,
    chirurg: p.quizPerfect.medium >= 1,
    maestru: p.quizPlays.hard >= 1,
    colectionar: p.sectionsVisited.length >= totalSections,
    mentor: p.chatbotUses >= 10,
    curios: p.chatbotUses >= 25,
    veteran: p.daysActive.length >= 30,
    legenda: p.quizPerfect.hard >= 1,
    constant: streak >= 7,
    myolog: ((p.musclePlays && p.musclePlays.count) || 0) >= 1,
    sculptor: ((p.musclePerfect && p.musclePerfect.medium) || 0) >= 1,
    sarcomer: (p.musclesViewed || []).length >= 30,
    kinetician: ((p.musclePlays && p.musclePlays.hard) || 0) >= 1,
  };
}
window.unlockedAchievements = unlockedAchievements;

if (typeof ACHIEVEMENTS !== "undefined") {
  ACHIEVEMENTS.forEach(function (a) {
    a.unlocked = false;
  });
}

window.renderBadges = function () {
  var grid = document.getElementById("profileBadgesGrid");
  if (!grid) return;
  grid.innerHTML = "";
  var u = getCurrentUser();
  var unlockMap = u ? unlockedAchievements() : {};
  var achieved = 0;
  ACHIEVEMENTS.forEach(function (a) {
    var on = !!unlockMap[a.id];
    a.unlocked = on;
    if (on) achieved++;
    var c = document.createElement("div");
    c.className = "badge-card" + (on ? "" : " locked");
    c.style.setProperty("--badge-glow", a.c1);
    c.style.setProperty("--badge-c1", a.c1);
    c.style.setProperty("--badge-c2", a.c2);
    c.innerHTML =
      '<div class="badge-icon">' +
      bxBadgeIcon(a) +
      '</div><div class="badge-info"><div class="badge-name">' +
      a.name +
      '</div><div class="badge-sub">' +
      a.sub +
      '</div><div class="badge-lvl">Lvl ' +
      a.lvl +
      "</div></div>";
    grid.appendChild(c);
  });
  var cEl = document.getElementById("profileBadgesAchieved");
  if (cEl) cEl.textContent = achieved + " / " + ACHIEVEMENTS.length;
};

(function () {
  var origGetProfileData = window.getProfileData;
  if (typeof origGetProfileData !== "function") return;
  window.getProfileData = function (user) {
    var d = origGetProfileData(user);
    var p = ensureProgress(getProgress(user));
    if (p.xp) d.xp = p.xp;
    return d;
  };
})();

(function () {
  if (typeof selectBoneById === "function") {
    var orig = selectBoneById;
    window.selectBoneById = function (id) {
      trackEvent("viewBone", id);
      return orig.apply(this, arguments);
    };
  }
  if (typeof window.switchSection === "function") {
    var origS = window.switchSection;
    window.switchSection = function (sId) {
      trackEvent("visitSection", sId);
      return origS.apply(this, arguments);
    };
  }
  if (typeof window.sendChat === "function") {
    var origC = window.sendChat;
    window.sendChat = function () {
      trackEvent("chatbot");
      return origC.apply(this, arguments);
    };
  }
})();

var MANUAL_QUESTIONS = [
  {
    prompt: "Conform Vol. I Stefaneț, scheletul axial uman este compus din câte oase?",
    answer: "80 de oase",
    options: ["74 de oase", "80 de oase", "86 de oase", "92 de oase"],
  },
  {
    prompt: "Cele 4 tipuri principale de oase clasificate în osteologie sunt:",
    answer: "Lungi, scurte, plate, neregulate",
    options: [
      "Lungi, scurte, plate, neregulate",
      "Lungi, curbe, plate, perforate",
      "Lungi, scurte, late, mici",
      "Externe, interne, mixte, sesamoide",
    ],
  },
  {
    prompt: "Vol. I — Artrologia: care articulație are cea mai mare amplitudine de mișcare?",
    answer: "Scapulo-humerală (umăr)",
    options: [
      "Scapulo-humerală (umăr)",
      "Coxo-femurală (șold)",
      "Genunchi (femuro-tibială)",
      "Radio-carpiană (pumn)",
    ],
  },
  {
    prompt: "Vol. I — Miologia: cel mai puternic mușchi raportat la greutate este:",
    answer: "Maseterul (masticator)",
    options: ["Maseterul (masticator)", "Gluteus maximus", "Sartorius", "Bicepsul brahial"],
  },
  {
    prompt: "Vol. I — Numărul total de oase din scheletul apendicular este:",
    answer: "126",
    options: ["100", "118", "126", "142"],
  },
  {
    prompt: "Vol. I — Articulația temporo-mandibulară (ATM) este de tip:",
    answer: "Sinovială condilară",
    options: [
      "Sinovială condilară",
      "Fibroasă suturală",
      "Cartilaginoasă sinhondroză",
      "Diartroză sferoidă",
    ],
  },
  {
    prompt: "Vol. II Stefaneț — Stomacul este împărțit în câte regiuni anatomice?",
    answer: "4 (cardia, fund, corp, pilor)",
    options: ["3 regiuni", "4 (cardia, fund, corp, pilor)", "5 regiuni", "2 regiuni"],
  },
  {
    prompt: "Vol. II — Plămânul drept are câți lobi?",
    answer: "3 lobi",
    options: ["2 lobi", "3 lobi", "4 lobi", "5 lobi"],
  },
  {
    prompt: "Vol. II — Lungimea aproximativă a intestinului subțire la adult este:",
    answer: "6-7 metri",
    options: ["3-4 metri", "5-6 metri", "6-7 metri", "8-9 metri"],
  },
  {
    prompt: "Vol. II — Ficatul are câți lobi anatomici principali?",
    answer: "4 (drept, stâng, caudat, pătrat)",
    options: ["2 (drept, stâng)", "3", "4 (drept, stâng, caudat, pătrat)", "6"],
  },
  {
    prompt: "Vol. II — Cele 3 părți ale intestinului subțire sunt:",
    answer: "Duoden, jejun, ileon",
    options: [
      "Duoden, jejun, ileon",
      "Cec, colon, rect",
      "Cardia, fundus, pilor",
      "Antrul, corpul, pilorul",
    ],
  },
  {
    prompt: "Vol. II — Rinichiul are câte unități funcționale (nefroni)?",
    answer: "~1 milion per rinichi",
    options: ["~100.000", "~500.000", "~1 milion per rinichi", "~10 milioane"],
  },
  {
    prompt: "Vol. III — Inima are câte valve atrio-ventriculare?",
    answer: "2 (mitrală + tricuspidă)",
    options: ["1 valvă", "2 (mitrală + tricuspidă)", "3 valve", "4 valve"],
  },
  {
    prompt: "Vol. III — Câte perechi de nervi cranieni există?",
    answer: "12 perechi",
    options: ["10 perechi", "11 perechi", "12 perechi", "13 perechi"],
  },
  {
    prompt: "Vol. III — Nervul olfactiv este perechea de nervi cranieni cu numărul:",
    answer: "I",
    options: ["I", "II", "V", "VII"],
  },
  {
    prompt: "Vol. III — Ochiul uman are câți mușchi extrinseci (oculo-motori)?",
    answer: "6",
    options: ["4", "5", "6", "8"],
  },
  {
    prompt: "Vol. III — Urechea medie conține câte oscioare?",
    answer: "3 (ciocan, nicovală, scăriță)",
    options: ["2", "3 (ciocan, nicovală, scăriță)", "4", "5"],
  },
  {
    prompt: "Vol. III — Creierul uman cântărește aproximativ:",
    answer: "1.300-1.400 g",
    options: ["~800 g", "1.000 g", "1.300-1.400 g", "2.000 g"],
  },
  {
    prompt: "Vol. III — Sistemul nervos central include:",
    answer: "Encefalul și măduva spinării",
    options: [
      "Doar encefalul",
      "Encefalul și măduva spinării",
      "Nervii cranieni și spinali",
      "Encefalul și sistemul vegetativ",
    ],
  },
  {
    prompt: "Vol. III — Cele 4 camere ale inimii sunt:",
    answer: "2 atrii + 2 ventricule",
    options: [
      "2 atrii + 1 ventricul",
      "2 atrii + 2 ventricule",
      "3 atrii + 1 ventricul",
      "1 atriu + 3 ventricule",
    ],
  },
  {
    prompt: "Vol. III — Retina conține 2 tipuri de fotoreceptori:",
    answer: "Conuri și bastonașe",
    options: ["Conuri și piramide", "Conuri și bastonașe", "Filamente și sfere", "Cili și flageli"],
  },
  {
    prompt: "Vol. I — Coloana vertebrală adultă are câte vertebre articulate?",
    answer: "24 mobile + sacrum + coccis",
    options: ["33 toate libere", "24 mobile + sacrum + coccis", "30 mobile", "12 toracice"],
  },
  {
    prompt: "Vol. I — Sternul are câte componente?",
    answer: "3 (manubriu, corp, xifoid)",
    options: ["1 (unic)", "2 (sus, jos)", "3 (manubriu, corp, xifoid)", "4"],
  },
];

function pickDistractors(correctBoneId, count) {
  var allIds = Object.keys(boneData).filter(function (id) {
    return id !== correctBoneId;
  });
  var correct = boneData[correctBoneId];
  var sameCategory = allIds.filter(function (id) {
    return boneData[id] && correct && boneData[id].category === correct.category;
  });
  var pool = sameCategory.length >= count - 1 ? sameCategory : allIds;
  var picked = [];
  while (picked.length < count - 1 && pool.length) {
    var idx = Math.floor(Math.random() * pool.length);
    picked.push(pool.splice(idx, 1)[0]);
  }
  var result = [correctBoneId].concat(picked);
  for (var i = result.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var t = result[i];
    result[i] = result[j];
    result[j] = t;
  }
  return result;
}

function cleanText(s, boneName) {
  if (!s) return "";
  if (boneName) {
    var pattern = new RegExp(boneName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    s = s.replace(pattern, "___");
  }
  return s;
}

function buildInfoQuestions() {
  var easy = [],
    medium = [];
  Object.keys(boneData).forEach(function (id) {
    var b = boneData[id];
    if (!b) return;
    if (b.description && b.description.length > 40 && b.description.length < 240) {
      var clean = cleanText(b.description, b.name).split(/(?<=\.)\s+/)[0];
      if (clean.length > 30) {
        easy.push({
          type: "desc",
          prompt: "<i>Despre ce os este vorba?</i><br>„" + clean + '"',
          bone: id,
          options: pickDistractors(id, 4),
        });
      }
    }
    if (b.articulations && b.articulations.length > 15 && b.articulations.length < 200) {
      medium.push({
        type: "art",
        prompt: "<i>Cărui os îi aparțin aceste articulații?</i><br>„" + b.articulations + '"',
        bone: id,
        options: pickDistractors(id, 4),
      });
    }
    if (b.details && b.details.length > 30 && b.details.length < 260) {
      var firstSentence = cleanText(b.details, b.name).split(/\./)[0];
      if (firstSentence.length > 25) {
        medium.push({
          type: "det",
          prompt: "<i>Despre ce os e descris detaliul:</i><br>„" + firstSentence + '"',
          bone: id,
          options: pickDistractors(id, 4),
        });
      }
    }
  });
  return { easy: easy, medium: medium };
}

function buildManualQuestions() {
  return MANUAL_QUESTIONS.map(function (q) {
    var opts = q.options.slice();
    for (var i = opts.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = opts[i];
      opts[i] = opts[j];
      opts[j] = t;
    }
    return {
      type: "manual",
      prompt: "<i>" + q.prompt + "</i>",
      correctText: q.answer,
      options: opts,
    };
  });
}

(function rebuildQuizBank() {
  if (typeof quizBank === "undefined") return;
  var info = buildInfoQuestions();
  var origEasy = quizBank.easy.slice();
  var origMedium = quizBank.medium.slice();
  origEasy.forEach(function (q) {
    q.type = "visual";
  });
  origMedium.forEach(function (q) {
    q.type = "visual";
  });
  quizBank.easy = origEasy.concat(info.easy);
  quizBank.medium = origMedium.concat(info.medium);
  quizBank.hard = buildManualQuestions();
})();

var QUIZ_TIMER = {
  interval: null,
  remaining: 0,
  total: 0,
  maxPerDiff: { easy: 0, medium: 25, hard: 18 },
};

function startQuestionTimer() {
  stopQuestionTimer();
  var tm = QUIZ_TIMER.maxPerDiff[QUIZ.difficulty] || 0;
  var wrap = document.getElementById("qTimerWrap"),
    bar = document.getElementById("qTimerBar"),
    txt = document.getElementById("qTimerTxt");
  if (!tm) {
    if (wrap) wrap.style.display = "none";
    return;
  }
  QUIZ_TIMER.total = tm;
  QUIZ_TIMER.remaining = tm;
  if (wrap) wrap.style.display = "flex";
  if (bar) {
    bar.parentElement.style.display = "";
    bar.style.width = "100%";
    bar.className = "quiz-timer-bar";
  }
  if (txt) txt.textContent = tm + "s";
  var start = performance.now();
  QUIZ_TIMER.interval = setInterval(function () {
    var elapsed = (performance.now() - start) / 1000;
    QUIZ_TIMER.remaining = Math.max(0, tm - elapsed);
    var pct = (QUIZ_TIMER.remaining / tm) * 100;
    if (bar) {
      bar.style.width = pct + "%";
      bar.className = "quiz-timer-bar" + (pct < 25 ? " danger" : pct < 50 ? " warning" : "");
    }
    if (txt) txt.textContent = Math.ceil(QUIZ_TIMER.remaining) + "s";
    if (QUIZ_TIMER.remaining <= 0) {
      stopQuestionTimer();
      failByTimeout();
    }
  }, 100);
}
function stopQuestionTimer() {
  if (QUIZ_TIMER.interval) {
    clearInterval(QUIZ_TIMER.interval);
    QUIZ_TIMER.interval = null;
  }
}

function failByTimeout() {
  QUIZ.active = false;
  if (typeof QUIZ_TIMER !== "undefined" && QUIZ.mode === "duel" && QUIZ_TIMER.maxPerDiff_backup) {
    QUIZ_TIMER.maxPerDiff = QUIZ_TIMER.maxPerDiff_backup;
  }
  if (typeof clearQuizHighlight === "function") clearQuizHighlight();
  if (typeof setQuizFadedSkeleton === "function") setQuizFadedSkeleton(false);
  var qBadge = document.getElementById("qBadge");
  if (qBadge) qBadge.innerHTML = "⏰";
  var qEndTitle = document.getElementById("qEndTitle");
  if (qEndTitle) qEndTitle.textContent = "Timp expirat!";
  var qFinalScore = document.getElementById("qFinalScore");
  if (qFinalScore) qFinalScore.textContent = QUIZ.score;
  var qFinalTotal = document.getElementById("qFinalTotal");
  if (qFinalTotal) qFinalTotal.textContent = QUIZ.total;
  var qEndMsg = document.getElementById("qEndMsg");
  if (qEndMsg) qEndMsg.textContent = "Ai eșuat testul — nu ai răspuns la timp.";
  var qTime = document.getElementById("qTime");
  if (qTime) qTime.textContent = "—";
  var qPct = QUIZ.total ? (QUIZ.score / QUIZ.total) * 100 : 0;
  if (typeof bxPaintQuizEnd === "function") bxPaintQuizEnd(qPct, QUIZ.score, QUIZ.total);
  if (typeof showQuizStage === "function") showQuizStage("quizEnd");
  var qEndStage = document.getElementById("quizEnd");
  if (qEndStage) qEndStage.style.display = "flex";
}

if (typeof loadQuizQuestion === "function") {
  var origLoad = loadQuizQuestion;
  window.loadQuizQuestion = function () {
    var q = QUIZ.questions[QUIZ.currentQ];
    QUIZ.answered = false;
    var qNum = document.getElementById("qNum");
    if (qNum) qNum.textContent = QUIZ.currentQ + 1;
    var qScore = document.getElementById("qScore");
    if (qScore) qScore.textContent = QUIZ.score;
    var qProgFill = document.getElementById("qProgFill");
    if (qProgFill) qProgFill.style.width = (QUIZ.currentQ / QUIZ.total) * 100 + "%";
    var qFeedback = document.getElementById("qFeedback");
    if (qFeedback) qFeedback.style.display = "none";
    var qNextBtn = document.getElementById("qNextBtn");
    if (qNextBtn) qNextBtn.style.display = "none";
    var optsDiv = document.getElementById("qOptions");
    var qText = document.querySelector(".quiz-q-text");
    if (q.type === "visual" || !q.type) {
      if (qText)
        qText.innerHTML =
          'Cum se numește osul evidențiat în <span style="color:#00aaff">albastru</span>?' +
          (q.hint
            ? '<br><small style="display:block;margin-top:6px;font-weight:400;color:#94a3b8;font-style:italic">Indiciu: ' +
              escapeHTML(q.hint) +
              "</small>"
            : "");
      if (typeof highlightQuizBone === "function") highlightQuizBone(q.bone);
    } else {
      if (typeof clearQuizHighlight === "function") clearQuizHighlight();
      if (typeof setQuizFadedSkeleton === "function") setQuizFadedSkeleton(false);
      if (qText) qText.innerHTML = q.prompt;
    }
    if (optsDiv) {
      optsDiv.className = "quiz-options";
      optsDiv.innerHTML = "";
      var letters = ["A", "B", "C", "D"];
      if (q.type === "manual") {
        q.options.forEach(function (opt, idx) {
          var btn = document.createElement("button");
          btn.className = "quiz-opt";
          btn.dataset.answer = opt;
          btn.innerHTML =
            '<span class="quiz-opt-letter">' +
            letters[idx] +
            "</span><span>" +
            escapeHTML(opt) +
            "</span>";
          btn.onclick = function () {
            answerQuizManual(opt, btn, q.correctText);
          };
          optsDiv.appendChild(btn);
        });
      } else {
        var shuffled = shuffle(q.options);
        shuffled.forEach(function (boneId, idx) {
          var bd = boneData[boneId];
          var btn = document.createElement("button");
          btn.className = "quiz-opt";
          btn.dataset.bone = boneId;
          btn.innerHTML =
            '<span class="quiz-opt-letter">' +
            letters[idx] +
            "</span><span>" +
            (bd ? bd.name : boneId) +
            "</span>";
          btn.onclick = function () {
            answerQuiz(boneId, btn);
          };
          optsDiv.appendChild(btn);
        });
      }
    }
    startQuestionTimer();
  };
}

window.answerQuizManual = function (picked, btn, correctText) {
  if (QUIZ.answered) return;
  QUIZ.answered = true;
  stopQuestionTimer();
  var correct = picked === correctText;
  document.querySelectorAll(".quiz-opt").forEach(function (b) {
    b.disabled = true;
    if (b.dataset.answer === correctText) b.classList.add("correct");
    else if (b === btn) b.classList.add("wrong");
  });
  var fb = document.getElementById("qFeedback");
  if (correct) {
    QUIZ.score++;
    if (fb) {
      fb.className = "quiz-feedback fb-correct";
      fb.innerHTML = "✅ <b>Corect!</b>";
      fb.style.display = "block";
    }
  } else {
    QUIZ.wrong.push(correctText);
    if (fb) {
      fb.className = "quiz-feedback fb-wrong";
      fb.innerHTML = "❌ <b>Greșit.</b> Răspuns corect: <b>" + escapeHTML(correctText) + "</b>";
      fb.style.display = "block";
    }
  }
  var qScore = document.getElementById("qScore");
  if (qScore) qScore.textContent = QUIZ.score;
  var nextBtn = document.getElementById("qNextBtn");
  if (nextBtn) {
    nextBtn.style.display = "inline-block";
    nextBtn.textContent = QUIZ.currentQ + 1 >= QUIZ.total ? "Vezi rezultatul →" : "Următoarea →";
  }
};

if (typeof answerQuiz === "function") {
  var origAns = answerQuiz;
  window.answerQuiz = function (boneId, btn) {
    stopQuestionTimer();
    return origAns.apply(this, arguments);
  };
}
if (typeof skipQuiz === "function") {
  var origSkip = skipQuiz;
  window.skipQuiz = function () {
    stopQuestionTimer();
    return origSkip.apply(this, arguments);
  };
}
if (typeof endQuiz === "function") {
  var origEnd = endQuiz;
  window.endQuiz = function () {
    stopQuestionTimer();
    if (typeof trackEvent === "function")
      trackEvent("quizFinish", { diff: QUIZ.difficulty, score: QUIZ.score, total: QUIZ.total });
    return origEnd.apply(this, arguments);
  };
}

(function () {
  var quizQ = document.getElementById("quizQuestion");
  if (!quizQ) return;
  if (document.getElementById("qTimerWrap")) return;
  var wrap = document.createElement("div");
  wrap.id = "qTimerWrap";
  wrap.className = "quiz-timer-wrap";
  wrap.innerHTML =
    '<div class="quiz-timer-track"><div class="quiz-timer-bar" id="qTimerBar"></div></div><span class="quiz-timer-txt" id="qTimerTxt">--</span>';
  var meta = quizQ.querySelector(".quiz-meta");
  if (meta) quizQ.insertBefore(wrap, meta.nextSibling);
  else quizQ.insertBefore(wrap, quizQ.firstChild);
})();

(function () {
  if (typeof I18N === "undefined") return;
  Object.assign(I18N.ro, {
    "settings.adminH": "Mod Administrator",
    "settings.adminSub":
      "Acces la editorul de conținut (descrieri os, categorii, export JSON). Necesită autentificare.",
    "settings.adminBtn": "Deschide panoul Admin",
  });
  Object.assign(I18N.en, {
    "settings.adminH": "Administrator Mode",
    "settings.adminSub":
      "Access to the content editor (bone descriptions, categories, JSON export). Authentication required.",
    "settings.adminBtn": "Open Admin panel",
  });
  if (typeof applyLanguage === "function") applyLanguage(CUR_LANG);
})();

(function () {
  if (typeof quizBank === "undefined") return;
  var VISUAL_HARD = [
    {
      bone: "vomer",
      options: ["vomer", "etmoid", "palatin", "cornet"],
      hint: "Os subtire — septul nazal posterior",
    },
    {
      bone: "palatin",
      options: ["palatin", "maxilar", "vomer", "etmoid"],
      hint: "Forma de L, palatul dur posterior",
    },
    {
      bone: "lacrimal",
      options: ["lacrimal", "nazal", "etmoid", "zigomatic"],
      hint: "Cele mai mici oase ale fetei",
    },
    {
      bone: "cornet",
      options: ["cornet", "vomer", "etmoid", "palatin"],
      hint: "Incalzesc si umidifica aerul inspirat",
    },
    {
      bone: "hioid",
      options: ["hioid", "mandibula", "sfenoid", "stern"],
      hint: "Os in forma de potcoava, nu se articuleaza cu nimic",
    },
    {
      bone: "coaste-fluctuante",
      options: ["coaste-fluctuante", "coaste-false", "coaste-adevarate", "stern"],
      hint: "Coastele 11-12 — libere anterior",
    },
    {
      bone: "coaste-false",
      options: ["coaste-false", "coaste-adevarate", "coaste-fluctuante", "stern"],
      hint: "Coastele 8-10 — atasate indirect, prin cartilajul coastei 7",
    },
    {
      bone: "carpiene",
      options: ["carpiene", "metacarpiene", "tarsiene", "falange"],
      hint: "8 oase scurte ale pumnului",
    },
    {
      bone: "tarsiene",
      options: ["tarsiene", "metatarsiene", "carpiene", "falange-picior"],
      hint: "7 oase scurte ale gleznei, include calcaneul",
    },
    {
      bone: "coccis",
      options: ["coccis", "sacrum", "lombare", "toracice"],
      hint: "4-5 vertebre rudimentare sudate",
    },
    {
      bone: "falange",
      options: ["falange", "metacarpiene", "carpiene", "radius"],
      hint: "14 oase ale degetelor mainii",
    },
    {
      bone: "metatarsiene",
      options: ["metatarsiene", "tarsiene", "falange-picior", "femur"],
      hint: "5 oase lungi ale partii mijlocii a piciorului",
    },
  ];
  VISUAL_HARD.forEach(function (q) {
    q.type = "visual";
  });
  var VISUAL_BANK = {
    easy: quizBank.easy.filter(function (q) {
      return q.type === "visual";
    }),
    medium: quizBank.medium.filter(function (q) {
      return q.type === "visual";
    }),
    hard: VISUAL_HARD,
  };
  var KNOWLEDGE_BANK = {
    easy: quizBank.easy.filter(function (q) {
      return q.type === "desc";
    }),
    medium: quizBank.medium.filter(function (q) {
      return q.type === "art" || q.type === "det";
    }),
    hard: quizBank.hard.filter(function (q) {
      return q.type === "manual";
    }),
  };
  window.VISUAL_BANK = VISUAL_BANK;
  window.KNOWLEDGE_BANK = KNOWLEDGE_BANK;
  QUIZ.mode = "visual";

  var origShow = window.showQuizStage;
  window.showQuizStage = function (name) {
    ["quizSystemPick", "quizPick", "quizStart", "quizQuestion", "quizEnd"].forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.style.display = id === name ? "block" : "none";
    });
    document.body.classList.toggle("quiz-inq", name === "quizQuestion");
  };

  window.pickQuizMode = function (mode) {
    QUIZ.mode = mode;
    var icon = document.getElementById("quizStartIcon");
    var title = document.getElementById("quizStartTitle");
    var desc = document.getElementById("quizStartDesc");
    if (mode === "visual") {
      if (icon) icon.innerHTML = "&#127919;";
      if (title) title.textContent = "Identifică Osul";
      if (desc)
        desc.textContent =
          "Vezi un os colorat albastru pe schelet și ghicești numele din 4 variante. Minigame vizual, fără timer pe Ușor.";
    } else {
      if (icon) icon.innerHTML = "&#128218;";
      if (title) title.textContent = "Test de Cunoștințe";
      if (desc)
        desc.textContent =
          "Ușor: descrieri. Mediu: articulații + detalii (timer 25s). Greu: întrebări din manualele Stefaneț Vol. I-III (timer 18s).";
    }
    showQuizStage("quizStart");
  };

  window.backToQuizPick = function () {
    showQuizStage("quizPick");
  };

  window.startQuiz = function () {
    if (typeof clearSel === "function") clearSel();
    if (typeof clearHov === "function") clearHov();
    if (typeof bnoOverlay !== "undefined" && bnoOverlay) bnoOverlay.classList.remove("visible");
    var ph = document.getElementById("ip-ph"),
      ct = document.getElementById("info-ct");
    if (ph) ph.style.display = "flex";
    if (ct) ct.style.display = "none";
    var mode = QUIZ.mode || "visual";
    var bank = mode === "visual" ? VISUAL_BANK : KNOWLEDGE_BANK;
    var diff = QUIZ.difficulty || "medium";
    var src = bank[diff] && bank[diff].length ? bank[diff] : bank.medium;
    var pool = shuffle(src.slice());
    QUIZ.total = Math.min(10, pool.length);
    QUIZ.questions = pool.slice(0, QUIZ.total);
    QUIZ.currentQ = 0;
    QUIZ.score = 0;
    QUIZ.wrong = [];
    QUIZ.active = true;
    QUIZ.startTime = Date.now();
    var tot = document.getElementById("qTotal");
    if (tot) tot.textContent = QUIZ.total;
    showQuizStage("quizQuestion");
    loadQuizQuestion();
  };

  window.restartQuiz = function () {
    showQuizStage("quizSystemPick");
  };

  if (typeof window.enterApp === "function") {
    var origEnter = window.enterApp;
    window.enterApp = function (mode) {
      origEnter.apply(this, arguments);
      if (mode === "quiz") {
        if (window.QUIZ) {
          QUIZ.system = "osos";
          QUIZ.mode = "visual";
        }
        setTimeout(function () {
          showQuizStage("quizSystemPick");
        }, 520);
      }
    };
  }

  showQuizStage("quizSystemPick");
})();

(function () {
  if (typeof I18N === "undefined") return;
  Object.assign(I18N.ro, {
    "quiz.pick.h": "Alege tipul de test",
    "quiz.pick.p": "Două moduri disponibile — alege cum vrei să te testezi.",
    "quiz.mode.visual.t": "Identifică Osul",
    "quiz.mode.visual.d":
      "Vezi un os evidențiat cu albastru pe schelet și alegi numele corect din 4 variante. Minigame vizual rapid.",
    "quiz.mode.know.t": "Test de Cunoștințe",
    "quiz.mode.know.d":
      "Întrebări despre descrieri, articulații și detalii (Ușor/Mediu) plus întrebări din manualele Stefaneț Vol. I-III (Greu).",
    "quiz.back": "Înapoi",
    "quiz.sys.h": "Alege sistemul anatomic",
    "quiz.sys.p": "Pentru ce sistem vrei să te testezi?",
    "quiz.sys.osos.t": "Sistem Osos",
    "quiz.sys.osos.d":
      "206 oase pe cap, trunchi, membre. Întrebări vizuale și de cunoștințe + manualele Ștefaneț (Greu).",
    "quiz.sys.muscular.t": "Sistem Muscular",
    "quiz.sys.muscular.d":
      "350+ mușchi striați cu denumiri RO/latină, origini, inserții și acțiuni.",
    "quiz.sys.nervous.t": "Sistem Nervos",
    "quiz.sys.nervous.d": "Creier, măduva spinării, nervi periferici — nume RO + latină.",
    "quiz.sys.cardio.t": "Sistem Cardiovascular",
    "quiz.sys.cardio.d": "Inimă, artere, vene — identifică structurile și denumirile latine.",
    "quiz.sys.respiratory.t": "Sistem Respirator",
    "quiz.sys.respiratory.d": "Căi aeriene, plămâni, laringe, diafragmă — nume RO + latină.",
    "quiz.sys.digestive.t": "Sistem Digestiv",
    "quiz.sys.digestive.d": "Stomac, ficat, intestine, pancreas — identifică organele digestive.",
  });
  Object.assign(I18N.en, {
    "quiz.pick.h": "Choose a quiz type",
    "quiz.pick.p": "Two modes available — pick how you want to test yourself.",
    "quiz.mode.visual.t": "Identify the Bone",
    "quiz.mode.visual.d":
      "See a bone highlighted in blue on the skeleton and pick the correct name from 4 options. Quick visual minigame.",
    "quiz.mode.know.t": "Knowledge Test",
    "quiz.mode.know.d":
      "Questions about descriptions, joints and details (Easy/Medium) plus questions from the Stefaneț Vol. I-III textbooks (Hard).",
    "quiz.back": "Back",
    "quiz.sys.h": "Choose the anatomical system",
    "quiz.sys.p": "Which system do you want to test yourself on?",
    "quiz.sys.osos.t": "Skeletal System",
    "quiz.sys.osos.d":
      "206 bones across head, trunk and limbs. Visual and knowledge questions + the Ștefaneț textbooks (Hard).",
    "quiz.sys.muscular.t": "Muscular System",
    "quiz.sys.muscular.d":
      "350+ striated muscles with RO/Latin names, origins, insertions and actions.",
    "quiz.sys.nervous.t": "Nervous System",
    "quiz.sys.nervous.d": "Brain, spinal cord, peripheral nerves — RO + Latin names.",
    "quiz.sys.cardio.t": "Cardiovascular System",
    "quiz.sys.cardio.d": "Heart, arteries, veins — identify the structures and their Latin names.",
    "quiz.sys.respiratory.t": "Respiratory System",
    "quiz.sys.respiratory.d": "Airways, lungs, larynx, diaphragm — RO + Latin names.",
    "quiz.sys.digestive.t": "Digestive System",
    "quiz.sys.digestive.d": "Stomach, liver, intestines, pancreas — identify the digestive organs.",
  });
  if (typeof applyLanguage === "function") applyLanguage(CUR_LANG);
})();

(function () {
  var SHOWN_CURIOZ = [];
  if (typeof window.openCuriozitati === "function" && typeof CURIOZITATI !== "undefined") {
    window.openCuriozitati = function () {
      var available = [];
      for (var i = 0; i < CURIOZITATI.length; i++) {
        if (SHOWN_CURIOZ.indexOf(i) < 0) available.push(i);
      }
      if (available.length === 0) {
        SHOWN_CURIOZ = [];
        for (var j = 0; j < CURIOZITATI.length; j++) available.push(j);
      }
      var pick = available[Math.floor(Math.random() * available.length)];
      SHOWN_CURIOZ.push(pick);
      var fact = CURIOZITATI[pick];
      var panel = document.getElementById("chatboxPanel");
      var btn = document.getElementById("chatboxToggle");
      if (panel && !panel.classList.contains("active")) {
        panel.classList.add("active");
        if (btn) btn.classList.add("active");
      }
      if (typeof addChatMessage === "function") {
        addChatMessage("<b>Curiozitate anatomică:</b><br>" + fact, false);
      }
    };
  }
})();

(function () {
  if (typeof SITE_KB === "undefined") return;
  var extra = [
    {
      id: "bio.generic_what",
      triggers: ["ce este corpul uman|despre corp|corp uman"],
      answer:
        "Corpul uman e format din ~30 trilioane de celule, organizate în 4 tipuri de țesuturi (epitelial, conjunctiv, muscular, nervos), care formează organe și 11 sisteme: tegumentar, scheletic, muscular, nervos, endocrin, cardiovascular, limfatic, respirator, digestiv, urinar, reproductor.",
    },
    {
      id: "bio.tesut",
      triggers: ["tesut|tesuturi"],
      answer:
        "Cele 4 tipuri de țesuturi: <b>epitelial</b> (acoperă suprafețe, glande), <b>conjunctiv</b> (osul, cartilajul, sângele, adipos), <b>muscular</b> (scheletic, neted, cardiac), <b>nervos</b> (neuroni + glia).",
    },
    {
      id: "bio.osteocyte",
      triggers: ["osteocit|osteoblast|osteoclast"],
      answer:
        "<b>Osteoblastele</b> formează osul nou. <b>Osteocitele</b> sunt osteoblaste mature blocate în matricea osoasă, mențin osul. <b>Osteoclastele</b> resorb osul vechi. Cele 3 conlucrează în remodelarea osoasă continuă.",
    },
    {
      id: "bio.calciu",
      triggers: ["calciu|fosfor|mineral"],
      answer:
        "Osul depozitează 99% din calciul corpului. Compoziție: 70% minerale (hidroxiapatită — Ca, P), 25% proteine (în special colagen tip I), 5% apă. Calciul e esențial și pentru contracția musculară și coagulare.",
    },
    {
      id: "bio.viteza_neuron",
      triggers: ["viteza|nervos|impuls|sinapsa"],
      answer:
        "Impulsul nervos circulă cu până la <b>120 m/s</b> (430 km/h) pe fibrele mielinizate. Sinapsa = punctul de conectare între 2 neuroni. Întreg corpul tău are cca 100 trilioane de sinapse.",
    },
    {
      id: "bio.cromozom",
      triggers: ["cromozom|adn|gena|cariotip"],
      answer:
        "Avem 46 cromozomi (23 perechi): 22 perechi autosomi + 1 pereche sexual (XX feminin / XY masculin). ADN-ul conține ~20.000-25.000 gene care codifică toate proteinele corpului.",
    },
    {
      id: "bio.imunoglob",
      triggers: ["anticorp|imunoglobulin|igG|vaccin"],
      answer:
        "Anticorpii (imunoglobuline) sunt 5 clase: IgG (cel mai abundent, memorie), IgM (răspuns acut), IgA (mucoase), IgE (alergii, paraziți), IgD (suprafață limfocit B). Vaccinarea declanșează producerea de IgG specifice.",
    },
    {
      id: "bio.glanda",
      triggers: ["glanda|gland|endocrin|exocrin"],
      answer:
        "Glandele <b>exocrine</b> secretă prin canale (saliva, transpirație, lacrimi). Glandele <b>endocrine</b> secretă hormoni direct în sânge (tiroidă, suprarenale, hipofiză, pancreas — partea endocrină).",
    },
    {
      id: "bio.frigorul",
      triggers: ["febra|temperatura|termoreglare"],
      answer:
        "Temperatura normală: 36.5-37.5°C. Febră ușoară: 38-38.5°C; medie: 38.5-39.5°C; mare: peste 39.5°C. Hipotalamusul reglează temperatura prin transpirație (răcorire) și frison (încălzire).",
    },
    {
      id: "bio.gusta",
      triggers: ["gust|limba|papile|guseaza"],
      answer:
        "Limba detectează 5 gusturi: dulce, sărat, acru, amar, umami. <b>~10.000 papile gustative</b> pe limbă. Mirosul contribuie 80% la percepția gustului — de aceea mâncarea e fadă când ai nasul înfundat.",
    },
    {
      id: "bio.ph",
      triggers: ["ph sange|aciditate|baza|alcalin"],
      answer:
        "pH sanguin normal: <b>7.35-7.45</b> (ușor alcalin). Acidoză <7.35, alcaloză >7.45. Stomacul: pH 1.5-3.5 (foarte acid). Saliva: pH 6.5-7.5. Reglajul pH e crucial pentru enzime și viață.",
    },
    {
      id: "bio.respiratie",
      triggers: ["oxigen|dioxid carbon|gazos|alveol"],
      answer:
        "Inspirăm aer cu ~21% O₂, expirăm ~16%. Schimbul gazos în alveole: O₂ trece în sânge, CO₂ iese. Adultul respiră 12-20 ori/minut în repaus, până la 50/min la efort intens.",
    },
    {
      id: "bio.hemoglobin",
      triggers: ["hemoglobin|eritrocit|globul"],
      answer:
        "Hemoglobina e proteina care transportă O₂ în globulele roșii. O moleculă duce 4 molecule de O₂. Adult: 12-16 g/dl la femei, 14-18 g/dl la bărbați. Globulele roșii trăiesc ~120 zile.",
    },
    {
      id: "bio.metabolism",
      triggers: ["metabolism|catabolism|anabolism|atp"],
      answer:
        "Metabolism = catabolism (descompunere → energie) + anabolism (sinteză). Moneda energetică = <b>ATP</b>. Mitocondria produce ~36 ATP per moleculă de glucoză. Creierul consumă ~120g glucoză/zi.",
    },
    {
      id: "bio.protein",
      triggers: ["proteina|aminoacid|enzima"],
      answer:
        "Proteinele sunt lanțuri de aminoacizi (20 tipuri, 9 esențiali din alimentație). Funcții: structurală (colagen, keratină), enzimatică, transport (hemoglobină), imună (anticorpi), reglare (hormoni proteici).",
    },
    {
      id: "bio.somn_rem",
      triggers: ["rem|nrem|vis|stadii somn"],
      answer:
        "Somnul are 4 stadii: NREM 1-2 (somn ușor), NREM 3 (somn profund — reparare fizică), REM (vise, consolidare memorie). Un ciclu durează ~90 min, repetat 4-6 ori pe noapte.",
    },
    {
      id: "bio.virus_bacterie",
      triggers: ["virus|bacterie|microb|patogen"],
      answer:
        "<b>Bacteriile</b> sunt organisme unicelulare; pot fi tratate cu antibiotice. <b>Virusurile</b> NU sunt organisme vii (nu se replică singure) — au nevoie de o celulă gazdă. Antibioticele NU funcționează pe virusuri.",
    },
    {
      id: "bio.diviziune",
      triggers: ["mitoza|meioza|diviziune"],
      answer:
        "<b>Mitoza</b> = diviziune somatică, 1 celulă → 2 identice (creștere, regenerare). <b>Meioza</b> = diviziune sexuală, 1 celulă → 4 cu jumătate de cromozomi (gameți: ovule, spermatozoizi).",
    },
  ];
  for (var i = 0; i < extra.length; i++) SITE_KB.push(extra[i]);
})();

(function () {
  if (typeof chatbotReply !== "function") return;
  var orig = chatbotReply;
  window.chatbotReply = function (input) {
    var q = typeof strip === "function" ? strip(input) : (input || "").toLowerCase();
    var res = orig(input);
    if (res && res.indexOf("Nu am inteles") !== 0 && res.indexOf("Îmi pare rău") !== 0) return res;
    if (/^(da|nu|ok|sigur|poate|nush)$/.test(q.trim()))
      return "OK, pot continua. Pune o întrebare mai specifică sau folosește unul din chips-urile de mai jos.";
    if (/multumes|mersi|thanks/.test(q))
      return "Cu plăcere! Întreabă-mă oricând despre anatomie, sisteme, manuale sau cum să folosești site-ul.";
    if (/^cum/.test(q))
      return "Întrebare bună! Spune-mi mai exact ce vrei să afli — pot răspunde despre oase, sisteme (cardio, nervos, digestiv...), cum funcționează site-ul sau curiozități.";
    if (/^ce/.test(q))
      return 'Pot răspunde despre orice subiect anatomic sau de biologie. Câteva exemple: <i>"ce este femurul?"</i>, <i>"ce face inima?"</i>, <i>"ce e ADN-ul?"</i>, <i>"ce sunt anticorpii?"</i>.';
    if (/^unde/.test(q))
      return 'Spune-mi mai exact unde — în anatomie sau pe site? Ex: <i>"unde se află stomacul?"</i> sau <i>"unde găsesc manualele?"</i>';
    if (/^de ce|^pentru ce/.test(q))
      return 'Întreabă-mă concret. Ex: <i>"de ce inima bate?"</i>, <i>"pentru ce avem ficat?"</i>';
    var topics = [
      "os",
      "articulații",
      "mușchi",
      "inimă",
      "plămâni",
      "creier",
      "rinichi",
      "ficat",
      "stomac",
      "intestin",
      "ADN",
      "celulă",
      "sânge",
      "piele",
      "nervi",
      "hormoni",
      "imunitate",
      "metabolism",
      "vitamine",
      "digestie",
    ];
    var sample = [];
    for (var i = 0; i < 4; i++) {
      var idx = Math.floor(Math.random() * topics.length);
      if (sample.indexOf(topics[idx]) < 0) sample.push(topics[idx]);
    }
    return (
      'Nu am găsit un răspuns exact pentru <i>"' +
      escapeHTML(input.slice(0, 60)) +
      '"</i>. Pot vorbi despre: ' +
      sample
        .map(function (s) {
          return "<b>" + s + "</b>";
        })
        .join(", ") +
      ' și multe altele. Reformulează întrebarea sau folosește chips-urile de mai jos.<div class="chat-chips" style="margin-top:8px"><button class="chat-chip" data-chat-action="ask:Ce este celula?">Celulă</button><button class="chat-chip" data-chat-action="ask:Cum functioneaza inima?">Inimă</button><button class="chat-chip" data-chat-action="ask:Ce este ADN-ul?">ADN</button></div>'
    );
  };
})();

function fixFooterRender() {
  var year = new Date().getFullYear();
  var footers = document.querySelectorAll('.home-footer > div[data-i18n="home.footer"]');
  footers.forEach(function (f) {
    f.innerHTML = "BioNexus · Platformă educațională anatomică";
  });
  document.querySelectorAll(".home-credit").forEach(function (c) {
    c.innerHTML = "© " + year + " BioNexus";
  });
  document.querySelectorAll(".sb-foot div").forEach(function (d) {
    if (d.textContent.toLowerCase().indexOf("made by") >= 0)
      d.innerHTML = "© " + year + " BioNexus";
  });
  document.querySelectorAll("main.viewer > div").forEach(function (d) {
    if (d.textContent && d.textContent.toLowerCase().indexOf("made by") >= 0) {
      d.textContent = "© " + year + " BioNexus";
      d.style.textTransform = "none";
    }
  });
}
if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", fixFooterRender);
else fixFooterRender();

(function () {
  if (typeof I18N === "undefined") return;
  Object.assign(I18N.ro, {
    "home.footer": "BioNexus · Platformă educațională anatomică",
    "login.user": "Email sau utilizator",
    "login.pass": "Parolă",
    "login.user.ph": "tu@email.com",
    "login.pass.ph": "Introdu parola",
    "reg.user.ph": "Alege un nume",
    "reg.email.ph": "tu@email.com",
    "reg.pass.ph": "Creează o parolă",
    "reg.passConf.ph": "Confirmă parola",
    "forgot.email.ph": "tu@email.com",
    "reset.newPass.ph": "Minim 8 caractere",
    "reset.confPass.ph": "Reintrodu parola",
  });
  Object.assign(I18N.en, {
    "home.footer": "BioNexus · Anatomical educational platform",
    "login.user": "Email or username",
    "login.pass": "Password",
    "login.user.ph": "you@email.com",
    "login.pass.ph": "Enter your password",
    "reg.user.ph": "Choose a username",
    "reg.email.ph": "you@email.com",
    "reg.pass.ph": "Create a password",
    "reg.passConf.ph": "Confirm your password",
    "forgot.email.ph": "you@email.com",
    "reset.newPass.ph": "At least 8 characters",
    "reset.confPass.ph": "Re-enter password",
  });
})();

function applyPlaceholderI18n() {
  var map = [
    ["loginUser", "login.user.ph"],
    ["loginPass", "login.pass.ph"],
    ["regUser", "reg.user.ph"],
    ["regEmail", "reg.email.ph"],
    ["regPass", "reg.pass.ph"],
    ["regPassConf", "reg.passConf.ph"],
    ["forgotEmail", "forgot.email.ph"],
    ["resetNewPass", "reset.newPass.ph"],
    ["resetConfPass", "reset.confPass.ph"],
  ];
  map.forEach(function (p) {
    var el = document.getElementById(p[0]);
    if (!el || typeof t !== "function") return;
    var v = t(p[1]);
    if (v) el.setAttribute("placeholder", v);
  });
}
if (typeof window.applyLanguage === "function") {
  var origApplyLang = window.applyLanguage;
  window.applyLanguage = function (lang) {
    origApplyLang(lang);
    applyPlaceholderI18n();
  };
}
if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", applyPlaceholderI18n);
else applyPlaceholderI18n();

(function fixCustomTheme() {
  if (typeof applyCustomTheme !== "function") return;
  window.applyCustomTheme = function () {
    var c = typeof getCustomColors === "function" ? getCustomColors() : {};
    document.documentElement.setAttribute("data-theme", "custom");
    var s = document.documentElement.style;
    s.setProperty("--bg", c.bg || "#0a0e1a");
    s.setProperty("--bg2", c.bg || "#111827");
    s.setProperty("--card", c.card || "#1a2035");
    s.setProperty("--card2", c.card || "#1f2847");
    s.setProperty("--acc", c.acc || "#6366f1");
    s.setProperty("--accL", c.acc || "#8b5cf6");
    s.setProperty("--t1", c.t1 || "#f1f5f9");
    s.setProperty("--t2", "rgba(241,245,249,.65)");
    s.setProperty("--t3", "rgba(241,245,249,.45)");
  };
  window.setTheme = function (th) {
    if (th === "system") {
      var prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      document.documentElement.setAttribute("data-theme", prefersDark ? "dark" : "light");
      localStorage.setItem("bionexus_theme", "system");
      clearCustomVars();
    } else if (th === "custom") {
      localStorage.setItem("bionexus_theme", "custom");
      applyCustomTheme();
    } else {
      document.documentElement.setAttribute("data-theme", th);
      localStorage.setItem("bionexus_theme", th);
      clearCustomVars();
    }
    refreshThemeUI();
  };
  var saved = localStorage.getItem("bionexus_theme");
  if (saved === "custom") applyCustomTheme();
})();

var BONES_EN = {
  frontal: {
    name: "Frontal Bone",
    category: "Neurocranium",
    type: "Unpaired bone",
    description:
      "Forms the forehead and the superior part of the orbits. Contains the frontal sinus. Protects the frontal lobes of the brain.",
    articulations: "Parietal bones, sphenoid, ethmoid, nasals, zygomatics, maxillae, lacrimals",
    details:
      "Has 2 parts: frontal squama (vertical) and orbital part (horizontal). In newborns, the two halves are separated by the metopic suture.",
  },
  parietal: {
    name: "Parietal Bones",
    category: "Neurocranium",
    type: "Paired bones (2)",
    description:
      "Form the cranial vault. Flat, quadrilateral bones, located laterally and superiorly.",
    articulations: "Frontal, occipital, temporals, sphenoid, opposite parietal",
    details:
      "Articulate with each other through the sagittal suture, with the frontal via the coronal suture, with the occipital via the lambdoid suture.",
  },
  temporal: {
    name: "Temporal Bones",
    category: "Neurocranium",
    type: "Paired bones (2)",
    description:
      "Located laterally, form the inferior portion of the vault. Border the temporal fossa. Contain the vestibulo-cochlear organ.",
    articulations: "Parietals, occipital, sphenoid, zygomatics, mandible (TMJ)",
    details:
      "Include: temporal squama (temporal fossa), petrous part (with cochlea and semicircular canals), mastoid process, styloid process.",
  },
  occipital: {
    name: "Occipital Bone",
    category: "Neurocranium",
    type: "Unpaired bone",
    description:
      "Forms the posterior and inferior portion of the cranium. Contains the foramen magnum.",
    articulations: "Parietals, temporals, sphenoid, atlas (C1)",
    details:
      "Occipital condyles articulate with the atlas. Protects the cerebellum and the brainstem.",
  },
  sfenoid: {
    name: "Sphenoid Bone",
    category: "Neurocranium",
    type: "Unpaired bone",
    description:
      "Central bone of the cranial base, butterfly-shaped. Contains the sella turcica with the pituitary gland. Borders the pterygoid fossa.",
    articulations: "Articulates with all cranial bones",
    details: "Has: body with sphenoid sinus, greater wings, lesser wings, and pterygoid processes.",
  },
  etmoid: {
    name: "Ethmoid Bone",
    category: "Neurocranium",
    type: "Unpaired bone",
    description: "Delicate bone between the orbits, forms the superior part of the nasal cavity.",
    articulations: "Frontal, sphenoid, nasals, maxillae, lacrimals, vomer, palatines",
    details: "Components: cribriform plate, perpendicular plate, ethmoidal labyrinth.",
  },
  maxilar: {
    name: "Maxilla",
    category: "Viscerocranium",
    type: "Paired bones (2)",
    description:
      "Form the upper jaw, orbital floor, hard palate and the border of the nasal cavity. Contain the infraorbital foramen.",
    articulations: "Frontal, ethmoid, nasals, zygomatics, lacrimals, palatines, vomer",
    details:
      "Contain the dental alveoli for the upper teeth. The palatine process forms 3/4 of the hard palate.",
  },
  mandibula: {
    name: "Mandible",
    category: "Viscerocranium",
    type: "Unpaired bone",
    description:
      "The only mobile bone of the cranium. Forms the lower jaw. Features the mental protuberance (chin).",
    articulations: "Temporal bones (temporomandibular joint - TMJ)",
    details:
      "Components: body of mandible, rami, coronoid process, condylar process, angle of mandible, mental protuberance.",
  },
  zigomatic: {
    name: "Zygomatic Bones",
    category: "Viscerocranium",
    type: "Paired bones (2)",
    description: "Form the cheekbones and the lateral part of the orbit.",
    articulations: "Frontal, sphenoid, temporals, maxillae",
    details: "The temporal process of the zygomatic forms the zygomatic arch.",
  },
  nazal: {
    name: "Nasal Bones",
    category: "Viscerocranium",
    type: "Paired bones (2)",
    description: "Small bones forming the bridge of the nose.",
    articulations: "Frontal, ethmoid, maxillae, opposite nasal",
    details: "The inferior part of the nose is formed by cartilage.",
  },
  lacrimal: {
    name: "Lacrimal Bones",
    category: "Viscerocranium",
    type: "Paired bones (2)",
    description: "The smallest bones of the face. Form the medial part of the orbit.",
    articulations: "Frontal, ethmoid, maxillae",
    details: "The nasolacrimal canal passes through the lacrimal sulcus.",
  },
  palatin: {
    name: "Palatine Bones",
    category: "Viscerocranium",
    type: "Paired bones (2)",
    description: "Form the posterior part of the hard palate.",
    articulations: "Maxillae, sphenoid, ethmoid, vomer, inferior conchae",
    details: "L-shaped, with a horizontal plate and a perpendicular plate.",
  },
  vomer: {
    name: "Vomer",
    category: "Viscerocranium",
    type: "Unpaired bone",
    description: "Thin bone forming the posterior nasal septum.",
    articulations: "Sphenoid, ethmoid, maxillae, palatines",
    details: "Together with the perpendicular plate of the ethmoid forms the nasal septum.",
  },
  cornet: {
    name: "Inferior Nasal Conchae",
    category: "Viscerocranium",
    type: "Paired bones (2)",
    description: "The largest nasal conchae. Warm and humidify inspired air.",
    articulations: "Maxillae, palatines, ethmoid, lacrimals",
    details:
      "Only the inferior concha is an independent bone; the superior ones are part of the ethmoid.",
  },
  cervicale: {
    name: "Cervical Vertebrae",
    category: "Vertebral Column",
    type: "7 vertebrae (C1-C7)",
    description:
      "The smallest vertebrae. Atlas (C1) supports the skull, Axis (C2) allows head rotation.",
    articulations: "Cranium (C1-occipital), each other, thoracic vertebrae (C7-T1)",
    details:
      "The atlas has no vertebral body. The axis has the odontoid process. All have transverse foramina.",
  },
  toracice: {
    name: "Thoracic Vertebrae",
    category: "Vertebral Column",
    type: "12 vertebrae (T1-T12)",
    description: "Articulate with the ribs. Form the thoracic kyphosis.",
    articulations: "Cervical vertebrae (T1), each other, lumbar vertebrae (T12), 12 pairs of ribs",
    details: "Feature costal facets on the body and on the transverse processes.",
  },
  lombare: {
    name: "Lumbar Vertebrae",
    category: "Vertebral Column",
    type: "5 vertebrae (L1-L5)",
    description: "The largest and most robust vertebrae. Bear the greatest weight.",
    articulations: "Thoracic vertebrae (L1-T12), each other, sacrum (L5-S1)",
    details:
      "Have massive vertebral bodies. The lumbar region is frequently affected by disc herniation.",
  },
  sacrum: {
    name: "Sacrum",
    category: "Vertebral Column",
    type: "5 fused vertebrae",
    description: "Triangular bone formed by 5 fused vertebrae in adults.",
    articulations: "L5, coccyx, hip bones",
    details: "Features the sacral foramina. Fusion completes at 25-30 years of age.",
  },
  coccis: {
    name: "Coccyx",
    category: "Vertebral Column",
    type: "4-5 fused vertebrae",
    description: "Rudimentary bone. The last segment of the vertebral column.",
    articulations: "Sacrum",
    details: "Provides attachment points for the perineal muscles.",
  },
  stern: {
    name: "Sternum",
    category: "Rib Cage",
    type: "Unpaired bone",
    description:
      "Flat, central bone on the anterior wall of the thorax. Composed of: manubrium, body, and xiphoid process.",
    articulations: "Clavicles, the first 7 pairs of ribs",
    details: "Three components: manubrium, sternal body, xiphoid process.",
  },
  "coaste-adevarate": {
    name: "True Ribs (1-7)",
    category: "Rib Cage",
    type: "7 pairs",
    description:
      "Articulate posteriorly with the thoracic vertebrae and anteriorly directly with the sternum via costal cartilage. Intercostal spaces lie between ribs.",
    articulations: "Thoracic vertebrae T1-T7, sternum",
    details: "The first rib is the shortest and most curved.",
  },
  "coaste-false": {
    name: "False Ribs (8-10)",
    category: "Rib Cage",
    type: "3 pairs",
    description:
      "Articulate posteriorly with the thoracic vertebrae and indirectly anteriorly with the sternum.",
    articulations: "Thoracic vertebrae T8-T10, costal cartilage of rib 7",
    details: "Their cartilages join with the cartilage of the 7th rib.",
  },
  "coaste-fluctuante": {
    name: "Floating Ribs (11-12)",
    category: "Rib Cage",
    type: "2 pairs",
    description: "Articulate only posteriorly with thoracic vertebrae. Anterior ends are free.",
    articulations: "Thoracic vertebrae T11-T12",
    details: "The shortest ribs. Protect the kidneys.",
  },
  clavicula: {
    name: "Clavicle",
    category: "Pectoral Girdle",
    type: "Paired bone",
    description:
      "Long, S-shaped bone connecting the upper limb to the trunk. Articulates medially with the sternum (clavicular notch) and laterally with the acromion.",
    articulations: "Sternum, scapula",
    details: "First bone to begin ossification (week 5) and last to complete it (age 25).",
  },
  omoplat: {
    name: "Scapula (shoulder blade)",
    category: "Pectoral Girdle",
    type: "Paired bone",
    description:
      "Flat, triangular bone on the posterior thoracic wall. Features the acromion and the glenoid cavity.",
    articulations: "Clavicle, humerus",
    details: "Landmarks: spine of scapula, acromion, coracoid process, glenoid cavity.",
  },
  humerus: {
    name: "Humerus",
    category: "Arm Skeleton",
    type: "Long bone",
    description: "The bone of the arm. The longest bone of the upper limb.",
    articulations: "Scapula (shoulder), radius and ulna (elbow)",
    details:
      "Proximal epiphysis: humeral head. Distal epiphysis: trochlea, capitulum, epicondyles.",
  },
  radius: {
    name: "Radius",
    category: "Forearm Skeleton",
    type: "Long bone, lateral",
    description: "The lateral bone of the forearm, on the thumb side.",
    articulations: "Humerus, ulna, carpal bones",
    details: "Proximal: radial head. Rotates around the ulna during pronation/supination.",
  },
  ulna: {
    name: "Ulna",
    category: "Forearm Skeleton",
    type: "Long bone, medial",
    description: "The medial bone of the forearm. Forms the main joint at the elbow.",
    articulations: "Humerus, radius",
    details: "Proximal: olecranon (point of the elbow). Distal: ulnar styloid process.",
  },
  carpiene: {
    name: "Carpal Bones",
    category: "Hand Skeleton",
    type: "8 short bones",
    description: "Form the skeleton of the wrist. Two rows of 4 bones each.",
    articulations: "Radius, metacarpals",
    details:
      "Proximal row: scaphoid, lunate, triquetrum, pisiform. Distal row: trapezium, trapezoid, capitate, hamate.",
  },
  metacarpiene: {
    name: "Metacarpal Bones",
    category: "Hand Skeleton",
    type: "5 long bones",
    description: "Form the skeleton of the palm. Numbered I-V.",
    articulations: "Carpal bones, proximal phalanges",
    details: "Each metacarpal has: base, body, head.",
  },
  falange: {
    name: "Phalanges (hand)",
    category: "Hand Skeleton",
    type: "14 bones",
    description: "The skeleton of the fingers. Thumb: 2 phalanges; other fingers: 3 each.",
    articulations: "Metacarpals, each other",
    details: "Thumb: 2 phalanges. Fingers II-V: 3 each. Total: 14.",
  },
  "os-coxal": {
    name: "Hip Bone (Pelvis)",
    category: "Pelvic Girdle",
    type: "Paired bone",
    description: "Formed by the fusion of the ilium, ischium, and pubis. Forms the pelvic girdle.",
    articulations: "Sacrum, femur",
    details: "Articulates posteriorly with the sacrum and laterally with the femur (hip joint).",
  },
  femur: {
    name: "Femur",
    category: "Thigh Skeleton",
    type: "Long bone",
    description: "The longest and strongest bone in the body. The bone of the thigh.",
    articulations: "Hip bone (hip), tibia and patella (knee)",
    details:
      "The femoral head articulates with the acetabulum. Distal: femoral condyles for the knee.",
  },
  patela: {
    name: "Patella (kneecap)",
    category: "Knee Skeleton",
    type: "Sesamoid bone, paired (2)",
    description: "The largest sesamoid bone. Protects the knee joint.",
    articulations: "Femur",
    details: "Embedded in the tendon of the quadriceps femoris muscle.",
  },
  tibia: {
    name: "Tibia",
    category: "Leg Skeleton",
    type: "Long bone, medial",
    description: "The main bone of the leg. Bears body weight.",
    articulations: "Femur (knee), fibula, talus (ankle)",
    details: "Proximal: tibial plateau. Distal: medial malleolus.",
  },
  fibula: {
    name: "Fibula",
    category: "Leg Skeleton",
    type: "Long bone, lateral",
    description: "The lateral bone of the leg. Does not bear weight directly.",
    articulations: "Tibia (proximal and distal)",
    details: "Distal: lateral malleolus. Role in ankle stabilization.",
  },
  tarsiene: {
    name: "Tarsal Bones",
    category: "Foot Skeleton",
    type: "7 short bones",
    description: "Form the skeleton of the ankle and the posterior part of the foot.",
    articulations: "Tibia, fibula, metatarsals",
    details: "Include: talus, calcaneus (largest), navicular, cuboid, the 3 cuneiforms.",
  },
  metatarsiene: {
    name: "Metatarsal Bones",
    category: "Foot Skeleton",
    type: "5 long bones",
    description: "Form the skeleton of the middle part of the foot.",
    articulations: "Tarsal bones, foot phalanges",
    details: "Numbered I-V from medial to lateral.",
  },
  "falange-picior": {
    name: "Phalanges (foot)",
    category: "Foot Skeleton",
    type: "14 bones",
    description: "The skeleton of the toes.",
    articulations: "Metatarsals, each other",
    details: "Big toe: 2 phalanges. Toes II-V: 3 each. Total: 14.",
  },
  dinti: {
    name: "Teeth",
    category: "Viscerocranium",
    type: "32 teeth (adult)",
    description: "Hard structures embedded in the alveoli of the maxilla and mandible.",
    articulations: "Maxilla, mandible (dental alveoli)",
    details:
      "Incisors (8), canines (4), premolars (8), molars (12 including wisdom teeth). Role in mastication.",
  },
  canin_inf: {
    name: "Lower Canine",
    category: "Lower Teeth",
    type: "Permanent tooth, paired",
    description: "The lower canine tooth. Role in tearing food. Has a single long root.",
    articulations: "Mandibular alveolus",
    details:
      "Conical crown with a single cusp. The longest root among the anterior teeth. Eruption: 9-10 years.",
  },
  canin_sup: {
    name: "Upper Canine",
    category: "Upper Teeth",
    type: "Permanent tooth, paired",
    description: "The upper canine tooth. The longest tooth in the oral cavity.",
    articulations: "Maxillary alveolus",
    details: "Conical crown with a sharp tip. Very long and robust root. Eruption: 11-12 years.",
  },
  molar1_inf: {
    name: "First Lower Molar",
    category: "Lower Teeth",
    type: "Permanent tooth, paired",
    description:
      "The first molar in the lower arch. The largest lower tooth. Main role in mastication.",
    articulations: "Mandibular alveolus",
    details:
      "Crown with 5 cusps. Has 2 roots (mesial and distal). Eruption: 6 years (first permanent tooth).",
  },
  molar1_sup: {
    name: "First Upper Molar",
    category: "Upper Teeth",
    type: "Permanent tooth, paired",
    description: "The first molar in the upper arch. The largest upper tooth.",
    articulations: "Maxillary alveolus",
    details: "Crown with 4 cusps. Has 3 roots (2 buccal, 1 palatal). Eruption: 6 years.",
  },
  molar2_inf: {
    name: "Second Lower Molar",
    category: "Lower Teeth",
    type: "Permanent tooth, paired",
    description: "The second molar in the lower arch.",
    articulations: "Mandibular alveolus",
    details:
      "Similar to the first molar but slightly smaller. 4-5 cusps, 2 roots. Eruption: 11-13 years.",
  },
  molar2_sup: {
    name: "Second Upper Molar",
    category: "Upper Teeth",
    type: "Permanent tooth, paired",
    description: "The second molar in the upper arch.",
    articulations: "Maxillary alveolus",
    details: "Similar to the first molar but smaller. 4 cusps, 3 roots. Eruption: 12-13 years.",
  },
  premolar1_inf: {
    name: "First Lower Premolar",
    category: "Lower Teeth",
    type: "Permanent tooth, paired",
    description: "The first premolar in the lower arch. Located between the canine and the molars.",
    articulations: "Mandibular alveolus",
    details: "Crown with 2 cusps (buccal and lingual). Single root. Eruption: 10-12 years.",
  },
  premolar1_sup: {
    name: "First Upper Premolar",
    category: "Upper Teeth",
    type: "Permanent tooth, paired",
    description: "The first premolar in the upper arch.",
    articulations: "Maxillary alveolus",
    details: "Crown with 2 cusps. May have 1 or 2 roots. Eruption: 10-11 years.",
  },
  premolar2_inf: {
    name: "Second Lower Premolar",
    category: "Lower Teeth",
    type: "Permanent tooth, paired",
    description: "The second premolar in the lower arch.",
    articulations: "Mandibular alveolus",
    details: "Crown with 2-3 cusps. Single root. Eruption: 11-12 years.",
  },
  premolar2_sup: {
    name: "Second Upper Premolar",
    category: "Upper Teeth",
    type: "Permanent tooth, paired",
    description: "The second premolar in the upper arch.",
    articulations: "Maxillary alveolus",
    details: "Crown with 2 cusps. Single root. Eruption: 10-12 years.",
  },
  incisiv_lat_inf: {
    name: "Lower Lateral Incisor",
    category: "Lower Teeth",
    type: "Permanent tooth, paired",
    description: "The second incisor in the lower arch. Role in cutting food.",
    articulations: "Mandibular alveolus",
    details:
      "Shovel-shaped crown, slightly larger than the central lower incisor. One root. Eruption: 7-8 years.",
  },
  incisiv_lat_sup: {
    name: "Upper Lateral Incisor",
    category: "Upper Teeth",
    type: "Permanent tooth, paired",
    description: "The second incisor in the upper arch.",
    articulations: "Maxillary alveolus",
    details: "Smaller crown than the central incisor. One root. Eruption: 8-9 years.",
  },
  incisiv_cent_inf: {
    name: "Lower Central Incisor",
    category: "Lower Teeth",
    type: "Permanent tooth, paired",
    description: "The smallest permanent tooth. The first incisor in the lower arch.",
    articulations: "Mandibular alveolus",
    details: "Narrow, shovel-shaped crown. Short root. Eruption: 6-7 years.",
  },
  incisiv_cent_sup: {
    name: "Upper Central Incisor",
    category: "Upper Teeth",
    type: "Permanent tooth, paired",
    description: "The largest incisor. The first visible tooth in the upper arch.",
    articulations: "Maxillary alveolus",
    details: "Wide, shovel-shaped crown. Conical root. Eruption: 7-8 years.",
  },
  hioid: {
    name: "Hyoid Bone",
    category: "Neck",
    type: "Unpaired bone",
    description:
      "The only bone that does not articulate with another bone. Supported by ligaments and muscles.",
    articulations: "Does not articulate directly with any bone",
    details: "Located at the base of the tongue. Role in swallowing and speech. Horseshoe-shaped.",
  },
};

var SECTION_NAMES_EN = {
  "Scheletul Capului": "Skull",
  "Scheletul Trunchiului": "Trunk",
  "Membre Superioare": "Upper Limbs",
  "Membre Inferioare": "Lower Limbs",
};
var GROUP_TITLES_EN = {
  "Neurocraniul (8 oase)": "Neurocranium (8 bones)",
  "Viscerocraniul (14 oase)": "Viscerocranium (14 bones)",
  "Coloana Vertebrala": "Vertebral Column",
  "Cutia Toracica": "Rib Cage",
  "Centura Scapulara": "Pectoral Girdle",
  "Bratul (umar - cot)": "Arm (shoulder - elbow)",
  "Antebratul (cot - pumn)": "Forearm (elbow - wrist)",
  "Oasele Mainii": "Hand Bones",
  "Centura Pelviana": "Pelvic Girdle",
  "Coapsa (sold - genunchi)": "Thigh (hip - knee)",
  Genunchiul: "Knee",
  "Gamba (genunchi - glezna)": "Leg (knee - ankle)",
  "Oasele Piciorului": "Foot Bones",
};
var INFO_LABELS = {
  ro: {
    cat: "Categorie",
    type: "Tip",
    desc: "Descriere",
    art: "Articulatii",
    det: "Detalii",
    select: "Selecteaza un os din model<br>sau din lista din stanga",
    title: "Informatii Os",
  },
  en: {
    cat: "Category",
    type: "Type",
    desc: "Description",
    art: "Joints",
    det: "Details",
    select: "Select a bone from the model<br>or from the list on the left",
    title: "Bone Info",
  },
};

window.localizedBone = function (id) {
  var lang = typeof CUR_LANG !== "undefined" ? CUR_LANG : "ro";
  if (lang === "en" && BONES_EN[id]) return BONES_EN[id];
  return boneData[id];
};

window.renderBoneList = function () {
  var ct = document.getElementById("bone-list");
  if (!ct || typeof boneSections === "undefined") return;
  var lang = typeof CUR_LANG !== "undefined" ? CUR_LANG : "ro";
  var sectionLabels = {
    cap: "Skull",
    trunchi: "Trunk",
    membre: "Upper Limbs",
    inferioare: "Lower Limbs",
  };
  var h = "";
  boneSections.forEach(function (s) {
    var nm = lang === "en" && SECTION_NAMES_EN[s.name] ? SECTION_NAMES_EN[s.name] : s.name;
    h +=
      '<div class="bone-group open" data-section="' +
      s.id +
      '"><div class="group-header" onclick="this.parentElement.classList.toggle(\'open\')"><span class="group-arrow">▶</span><span class="group-icon">' +
      s.icon +
      '</span><span class="group-name">' +
      nm +
      '</span></div><ul class="group-list">';
    s.groups.forEach(function (g) {
      var gt = lang === "en" && GROUP_TITLES_EN[g.title] ? GROUP_TITLES_EN[g.title] : g.title;
      h += '<li class="group-sub">' + gt + "</li>";
      g.bones.forEach(function (id) {
        var d = localizedBone(id);
        h +=
          '<li class="bone-item" data-bone="' +
          id +
          '" onclick="selectBoneById(\'' +
          id +
          '\')"><span class="bone-label-text">' +
          (d ? d.name : id) +
          '</span><button class="focus-btn" onclick="event.stopPropagation();focusBoneById(\'' +
          id +
          "')\">&#128269;</button></li>";
      });
    });
    h += "</ul></div>";
  });
  ct.innerHTML = h;
};

if (typeof window.showInfo === "function") {
  var origShowInfo = window.showInfo;
}
window.showInfo = function (id) {
  document.querySelectorAll(".bone-item.selected").forEach(function (el) {
    el.classList.remove("selected");
  });
  var si = document.querySelector('.bone-item[data-bone="' + id + '"]');
  if (si) {
    si.classList.add("selected");
    si.closest(".bone-group").classList.add("open");
    si.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  var d = localizedBone(id);
  if (!d) return;
  document.getElementById("ip-ph").style.display = "none";
  var ct = document.getElementById("info-ct");
  ct.style.display = "block";
  var lang = typeof CUR_LANG !== "undefined" ? CUR_LANG : "ro";
  var L = INFO_LABELS[lang] || INFO_LABELS.ro;
  ct.innerHTML =
    '<div class="info-section"><h4>' +
    L.cat +
    '</h4><div class="info-tag">' +
    d.category +
    '</div></div><div class="info-section"><h4>' +
    L.type +
    '</h4><div class="info-tag">' +
    d.type +
    '</div></div><div class="info-section"><h4>' +
    L.desc +
    "</h4><p>" +
    d.description +
    '</p></div><div class="info-section"><h4>' +
    L.art +
    "</h4><p>" +
    d.articulations +
    '</p></div><div class="info-section"><h4>' +
    L.det +
    "</h4><p>" +
    d.details +
    "</p></div>";
};

if (typeof window.showOverlay === "function") {
  window.showOverlay = function (id) {
    var d = localizedBone(id);
    if (!d) return;
    document.getElementById("bnoName").textContent = d.name;
    document.getElementById("bnoCat").textContent = d.category + " — " + d.type;
    bnoOverlay.classList.add("visible");
    if (typeof positionBoneOverlay === "function") positionBoneOverlay();
  };
}

function refreshLocalizedTexts() {
  if (typeof renderBoneList === "function") renderBoneList();
  var lang = typeof CUR_LANG !== "undefined" ? CUR_LANG : "ro";
  var L = INFO_LABELS[lang] || INFO_LABELS.ro;
  var infoTitle = document.getElementById("info-title");
  if (infoTitle) infoTitle.textContent = L.title;
  var infoPh = document.querySelector("#ip-ph p");
  if (infoPh) infoPh.innerHTML = L.select;
  var curLabel = document.getElementById("cur-label");
  if (curLabel) {
    var txt = curLabel.textContent;
    var sectionsRO = {
      "Scheletul complet": "Full skeleton",
      "Scheletul Capului": "Skull",
      "Scheletul Trunchiului": "Trunk",
      "Membre Superioare": "Upper Limbs",
      "Membre Inferioare": "Lower Limbs",
    };
    var sectionsEN = {
      "Full skeleton": "Scheletul complet",
      Skull: "Scheletul Capului",
      Trunk: "Scheletul Trunchiului",
      "Upper Limbs": "Membre Superioare",
      "Lower Limbs": "Membre Inferioare",
    };
    if (lang === "en" && sectionsRO[txt]) curLabel.textContent = sectionsRO[txt];
    else if (lang === "ro" && sectionsEN[txt]) curLabel.textContent = sectionsEN[txt];
  }
}
window.refreshLocalizedTexts = refreshLocalizedTexts;

if (typeof window.applyLanguage === "function") {
  var origLang = window.applyLanguage;
  window.applyLanguage = function (lang) {
    origLang(lang);
    if (typeof refreshLocalizedTexts === "function") refreshLocalizedTexts();
  };
}

if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", refreshLocalizedTexts);
else setTimeout(refreshLocalizedTexts, 100);

if (typeof chatbotReply === "function") {
  var origChatReply = chatbotReply;
  window.chatbotReply = function (input) {
    return origChatReply(input);
  };
}

(function () {
  if (typeof renderer !== "undefined" && renderer && renderer.setPixelRatio) {
    var dpr = Math.min(window.devicePixelRatio, 1.5);
    renderer.setPixelRatio(dpr);
  }
})();



(function () {
  if (typeof viewer === "undefined") return;
  var lastMM = 0;
  var origMM = viewer.onmousemove;
  var listeners = viewer.cloneNode ? null : null;
  var moveBuffer = null;
  function throttledMouseMove(handler) {
    return function (e) {
      var now = performance.now();
      if (now - lastMM < 33) {
        moveBuffer = { x: e.clientX, y: e.clientY, target: e.target };
        return;
      }
      lastMM = now;
      handler.call(this, e);
    };
  }
})();

(function () {
  var sun = document.querySelector(".solar-sun");
  if (!sun) return;
  var visualArea = document.querySelector(".home-hero-visual");
  if (!visualArea) return;
  var planets = document.querySelectorAll(".solar-system .orbit .planet");
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (e) {
        planets.forEach(function (p) {
          p.style.willChange = e.isIntersecting ? "transform" : "auto";
        });
      });
    },
    { threshold: 0.1 }
  );
  observer.observe(visualArea);
})();

(function () {
  if (!("IntersectionObserver" in window)) return;
  var lazy = document.querySelectorAll(
    ".home-feat-card,.system-card,.home-learn-card,.review-card"
  );
  lazy.forEach(function (el) {
    el.style.contain = "layout style";
  });
})();

(function () {
  document.addEventListener(
    "mousemove",
    function () {
      document.documentElement.style.scrollBehavior = "auto";
      setTimeout(function () {
        document.documentElement.style.scrollBehavior = "";
      }, 100);
    },
    { passive: true, once: true }
  );
})();

(function () {
  var oldLog = console.log;
  var seenLogs = {};
  console.log = function () {
    var k = Array.prototype.slice.call(arguments).join(" ");
    if (seenLogs[k]) return;
    seenLogs[k] = 1;
    return oldLog.apply(console, arguments);
  };
})();

var DUEL_BANK = [
  {
    text: "Femurul este cel mai lung os din corp și se află în coapsă.",
    correct: true,
    explain: "Corect — femurul reprezintă ~27% din înălțime.",
  },
  {
    text: "Stapes (scărița) este cel mai mare os din corp.",
    correct: false,
    explain: "Scărița e cel mai MIC os (~3mm) din urechea medie. Cel mai mare e femurul.",
  },
  {
    text: "Coloana vertebrală are 7 vertebre cervicale.",
    correct: true,
    explain:
      "Corect — toate mamiferele (cu mici excepții) au exact 7 vertebre cervicale, indiferent de mărimea gâtului.",
  },
  {
    text: "Inima are 3 camere: 1 atriu și 2 ventricule.",
    correct: false,
    explain: "Inima are 4 camere: 2 atrii (drept, stâng) + 2 ventricule (drept, stâng).",
  },
  {
    text: "Mandibula este singurul os mobil al craniului.",
    correct: true,
    explain: "Corect — toate celelalte oase craniene sunt unite prin suturi fibroase imobile.",
  },
  {
    text: "Plămânul stâng are 3 lobi, iar cel drept 2.",
    correct: false,
    explain: "Invers — plămânul drept are 3 lobi, iar cel stâng 2 lobi (mai mic, face loc inimii).",
  },
  {
    text: "Corpul uman adult are 206 oase.",
    correct: true,
    explain: "Corect — la naștere sunt ~270, multe se sudează în timpul creșterii.",
  },
  {
    text: "Oasele cresc tot restul vieții, niciodată nu se opresc.",
    correct: false,
    explain:
      "Oasele își termină creșterea în LUNGIME la 18-25 ani când se osifică placa epifizară. Doar remodelarea continuă toată viața.",
  },
  {
    text: "Articulația umărului este cea mai mobilă articulație din corp.",
    correct: true,
    explain: "Corect — scapulo-humerala (enartroză) permite mișcări în toate planurile.",
  },
  {
    text: "Calcaneul este cel mai mare os al tarsului.",
    correct: true,
    explain: "Corect — formează călcâiul și suportă greutatea corpului în mers.",
  },
  {
    text: "Sângele este albastru înainte de a întâlni aerul.",
    correct: false,
    explain:
      "Sângele este ÎNTOTDEAUNA roșu. Sângele venos e roșu închis, cel arterial roșu aprins. Aspectul albastru al venelor e datorat refracției luminii prin piele.",
  },
  {
    text: "Sternul are 3 părți: manubriu, corp și proces xifoid.",
    correct: true,
    explain: "Corect — toate trei sunt vizibile pe radiografie.",
  },
  {
    text: "Ulna este pe partea policelui (lateral), iar radiusul pe partea degetului mic (medial).",
    correct: false,
    explain:
      "Invers — radiusul e lateral (partea policelui), ulna e medială (partea degetului mic).",
  },
  {
    text: "Cele mai mici articulații din corp sunt între oscioarele urechii medii.",
    correct: true,
    explain: "Corect — ciocan-nicovală-scăriță, micro-articulații sinoviale.",
  },
  {
    text: 'Coastele 11 și 12 se numesc "flotante" pentru că nu se prind anterior de stern.',
    correct: true,
    explain: "Corect — sunt libere în peretele abdominal lateral.",
  },
  {
    text: "Atlasul (C1) și axisul (C2) sunt singurele vertebre cu nume propriu.",
    correct: true,
    explain: "Corect — atlasul susține craniul, axisul permite rotația.",
  },
  {
    text: "Patela (rotula) este un os sesamoid inclus în tendonul cvadricepsului.",
    correct: true,
    explain: "Corect — cel mai mare os sesamoid din corp.",
  },
  {
    text: "Toate oasele craniului se articulează prin suturi mobile.",
    correct: false,
    explain:
      "Suturile sunt articulații FIBROASE IMOBILE. Singura articulație mobilă a craniului este temporo-mandibulară.",
  },
  {
    text: "Periostul este membrana fibroasă care învelește osul exterior.",
    correct: true,
    explain: "Corect — are 2 straturi: fibros (extern) și osteogen (intern, repară fracturile).",
  },
  {
    text: "Hioidul nu se articulează direct cu niciun alt os.",
    correct: true,
    explain: "Corect — e suspendat de mușchi și ligamente, unic în corp.",
  },
  {
    text: "Adultul are 32 de dinți permanenți, inclusiv măselele de minte.",
    correct: true,
    explain: "Corect — 8 incisivi + 4 canini + 8 premolari + 12 molari (cu măselele).",
  },
  {
    text: "Cubitusul și ulna sunt două oase diferite ale antebrațului.",
    correct: false,
    explain: "Cubitusul ESTE ulna — denumirea veche în terminologia română. Sunt același os.",
  },
  {
    text: "Genunchiul este o articulație sinovială bicondiliană (tip troho-ginglymoidă).",
    correct: true,
    explain: "Corect — permite flexie/extensie + ușoară rotație în flexie.",
  },
  {
    text: "Sacrul este format din 5 vertebre sacrale sudate.",
    correct: true,
    explain: "Corect — sudarea se completează la 25-30 ani.",
  },
  {
    text: "Coccisul este format din 3 vertebre sudate.",
    correct: false,
    explain: "Coccisul are 4-5 vertebre rudimentare sudate, nu 3.",
  },
  {
    text: "Maxilarul superior este un singur os central, ca mandibula.",
    correct: false,
    explain:
      "Maxilarul superior e PEREȘE (2 oase fuzionate la linia mediană). Doar mandibula e os unic.",
  },
  {
    text: "Discurile intervertebrale sunt formate din cartilaj fibros, cu un nucleu pulpos central.",
    correct: true,
    explain:
      "Corect — anulus fibrosus + nucleus pulposus. Hernia de disc = ieșirea nucleului prin inel.",
  },
  {
    text: "Articulația cotului este formată din 3 oase: humerus, radius și ulna.",
    correct: true,
    explain: "Corect — humero-ulnară + humero-radială + radio-ulnară proximală.",
  },
  {
    text: "Mâna are 26 de oase.",
    correct: false,
    explain: "Mâna are 27 de oase: 8 carpiene + 5 metacarpiene + 14 falange.",
  },
  {
    text: "Foramen magnum este o gaură în osul occipital prin care trece măduva spinării.",
    correct: true,
    explain: "Corect — locul de tranziție între trunchiul cerebral și măduvă.",
  },
  {
    text: "Talusul (astragal) se articulează cu tibia, fibula și calcaneul.",
    correct: true,
    explain: "Corect — formează articulația tibio-tarsiană (glezna).",
  },
  {
    text: "Aparatul masticator are 4 perechi de mușchi principali: maseter, temporal, pterigoidieni.",
    correct: true,
    explain: "Corect — toți sunt inervați de nervul trigemen (V3).",
  },
  {
    text: "Mușchii striați (scheletici) au control involuntar.",
    correct: false,
    explain:
      "Mușchii striați sunt VOLUNTARI. Mușchii NETEZI (intestin, vase) și cardiac sunt involuntari.",
  },
  {
    text: 'Vertebra a 7-a cervicală se mai numește "vertebra prominens" datorită procesului spinos lung.',
    correct: true,
    explain: "Corect — palpabilă la baza gâtului, reper anatomic important.",
  },
];
window.DUEL_BANK = DUEL_BANK;

if (typeof pickQuizMode === "function") {
  var origPickMode = window.pickQuizMode;
  window.pickQuizMode = function (mode) {
    QUIZ.mode = mode;
    var icon = document.getElementById("quizStartIcon");
    var title = document.getElementById("quizStartTitle");
    var desc = document.getElementById("quizStartDesc");
    if (mode === "duel") {
      if (icon) icon.innerHTML = "&#129302;";
      if (title) title.textContent = "AI Duel";
      if (desc)
        desc.textContent =
          "AI-ul îți aruncă afirmații despre anatomie. Unele sunt corecte, altele au erori subtile. Decide rapid: ADEVĂRAT sau FALS? Timer 12 secunde la Mediu, 8 la Greu.";
      showQuizStage("quizStart");
      return;
    }
    origPickMode(mode);
  };
}

if (typeof QUIZ_TIMER !== "undefined") {
  QUIZ_TIMER.maxPerDiff = { easy: 0, medium: 25, hard: 18 };
}

if (typeof startQuiz === "function") {
  var origStart = window.startQuiz;
  window.startQuiz = function () {
    if (QUIZ.mode !== "duel") {
      return origStart();
    }
    if (typeof clearSel === "function") clearSel();
    if (typeof clearHov === "function") clearHov();
    if (typeof bnoOverlay !== "undefined" && bnoOverlay) bnoOverlay.classList.remove("visible");
    var ph = document.getElementById("ip-ph"),
      ct = document.getElementById("info-ct");
    if (ph) ph.style.display = "flex";
    if (ct) ct.style.display = "none";
    var pool = shuffle(DUEL_BANK.slice());
    var n = { easy: 10, medium: 10, hard: 12 }[QUIZ.difficulty || "medium"];
    QUIZ.total = Math.min(n, pool.length);
    QUIZ.questions = pool.slice(0, QUIZ.total).map(function (q) {
      return { type: "duel", prompt: q.text, correct: q.correct, explain: q.explain };
    });
    QUIZ.currentQ = 0;
    QUIZ.score = 0;
    QUIZ.wrong = [];
    QUIZ.active = true;
    QUIZ.startTime = Date.now();
    var duelTimes = { easy: 0, medium: 12, hard: 8 };
    if (typeof QUIZ_TIMER !== "undefined" && !QUIZ_TIMER.maxPerDiff_backup)
      QUIZ_TIMER.maxPerDiff_backup = Object.assign({}, QUIZ_TIMER.maxPerDiff);
    if (typeof QUIZ_TIMER !== "undefined") QUIZ_TIMER.maxPerDiff = duelTimes;
    var tot = document.getElementById("qTotal");
    if (tot) tot.textContent = QUIZ.total;
    showQuizStage("quizQuestion");
    loadQuizQuestion();
  };
}

if (typeof loadQuizQuestion === "function") {
  var origLoadQ = window.loadQuizQuestion;
  window.loadQuizQuestion = function () {
    var q = QUIZ.questions[QUIZ.currentQ];
    if (!q || q.type !== "duel") {
      return origLoadQ();
    }
    QUIZ.answered = false;
    var qNum = document.getElementById("qNum");
    if (qNum) qNum.textContent = QUIZ.currentQ + 1;
    var qScore = document.getElementById("qScore");
    if (qScore) qScore.textContent = QUIZ.score;
    var qProgFill = document.getElementById("qProgFill");
    if (qProgFill) qProgFill.style.width = (QUIZ.currentQ / QUIZ.total) * 100 + "%";
    var qFeedback = document.getElementById("qFeedback");
    if (qFeedback) qFeedback.style.display = "none";
    var qNextBtn = document.getElementById("qNextBtn");
    if (qNextBtn) qNextBtn.style.display = "none";
    if (typeof clearQuizHighlight === "function") clearQuizHighlight();
    if (typeof setQuizFadedSkeleton === "function") setQuizFadedSkeleton(false);
    var qText = document.querySelector(".quiz-q-text");
    if (qText)
      qText.innerHTML =
        '<div class="duel-ai-says">AI zice</div><div class="duel-statement">"' +
        escapeHTML(q.prompt) +
        '"</div><div style="font-size:13px;color:var(--t2);font-weight:600;margin-top:6px">Este corect sau greșit?</div>';
    var optsDiv = document.getElementById("qOptions");
    if (optsDiv) {
      optsDiv.className = "quiz-options duel-options";
      optsDiv.innerHTML =
        '<button class="duel-btn true" data-val="true" onclick="answerDuel(true,this)"><span class="duel-icon">✓</span><span>ADEVĂRAT</span></button><button class="duel-btn false" data-val="false" onclick="answerDuel(false,this)"><span class="duel-icon">✗</span><span>FALS</span></button>';
    }
    if (typeof startQuestionTimer === "function") startQuestionTimer();
  };
}

window.answerDuel = function (picked, btn) {
  if (QUIZ.answered) return;
  QUIZ.answered = true;
  if (typeof stopQuestionTimer === "function") stopQuestionTimer();
  var q = QUIZ.questions[QUIZ.currentQ];
  var correct = picked === q.correct;
  document.querySelectorAll(".duel-btn").forEach(function (b) {
    b.disabled = true;
    var bv = b.dataset.val === "true";
    if (bv === q.correct) b.classList.add("correct");
    else if (b === btn) b.classList.add("wrong");
  });
  var fb = document.getElementById("qFeedback");
  if (correct) {
    QUIZ.score++;
    if (fb) {
      fb.className = "quiz-feedback fb-correct";
      fb.innerHTML = '✅ <b>Corect!</b><div class="duel-explain">' + q.explain + "</div>";
      fb.style.display = "block";
    }
  } else {
    QUIZ.wrong.push(q.prompt);
    if (fb) {
      fb.className = "quiz-feedback fb-wrong";
      fb.innerHTML =
        '❌ <b>Greșit.</b> AI-ul te-a păcălit.<div class="duel-explain">' + q.explain + "</div>";
      fb.style.display = "block";
    }
  }
  var qScore = document.getElementById("qScore");
  if (qScore) qScore.textContent = QUIZ.score;
  var nextBtn = document.getElementById("qNextBtn");
  if (nextBtn) {
    nextBtn.style.display = "inline-block";
    nextBtn.textContent = QUIZ.currentQ + 1 >= QUIZ.total ? "Vezi rezultatul →" : "Următoarea →";
  }
};

if (typeof endQuiz === "function") {
  var origEndQuiz = window.endQuiz;
  window.endQuiz = function () {
    if (QUIZ.mode === "duel" && typeof QUIZ_TIMER !== "undefined" && QUIZ_TIMER.maxPerDiff_backup) {
      QUIZ_TIMER.maxPerDiff = QUIZ_TIMER.maxPerDiff_backup;
    }
    var optsDiv = document.getElementById("qOptions");
    if (optsDiv) optsDiv.className = "quiz-options";
    return origEndQuiz.apply(this, arguments);
  };
}

(function () {
  if (typeof I18N === "undefined") return;
  Object.assign(I18N.ro, {
    "quiz.mode.duel.t": "AI Duel",
    "quiz.mode.duel.d":
      "AI-ul îți dă afirmații despre anatomie — unele corecte, altele cu greșeli subtile. Identifică care e adevărată și care e falsă. Antrenament pentru gândire critică.",
  });
  Object.assign(I18N.en, {
    "quiz.mode.duel.t": "AI Duel",
    "quiz.mode.duel.d":
      "The AI throws anatomy statements at you — some correct, some with subtle errors. Spot which is true and which is false. Critical thinking training.",
  });
})();

var DAILY_CHALLENGES = [
  {
    id: "click_bones",
    text: "Click pe 5 oase diferite în scheletul 3D",
    xp: 30,
    type: "bones_count",
    target: 5,
  },
  {
    id: "click_bones_10",
    text: "Click pe 10 oase diferite în scheletul 3D",
    xp: 50,
    type: "bones_count",
    target: 10,
  },
  {
    id: "use_chatbot",
    text: "Folosește chatbox-ul de 3 ori",
    xp: 20,
    type: "chatbot_count",
    target: 3,
  },
  {
    id: "use_chatbot_5",
    text: "Pune 5 întrebări asistentului AI",
    xp: 35,
    type: "chatbot_count",
    target: 5,
  },
  {
    id: "visit_sections",
    text: "Vizitează toate cele 4 secțiuni anatomice (Cap/Trunchi/Membre Sup/Inf)",
    xp: 25,
    type: "sections_visited",
    target: 4,
  },
  {
    id: "try_minigame",
    text: "Joacă un minigame (orice tip)",
    xp: 30,
    type: "quiz_played",
    target: 1,
  },
  {
    id: "try_visual_quiz",
    text: 'Joacă "Identifică Osul"',
    xp: 25,
    type: "quiz_mode_played",
    mode: "visual",
    target: 1,
  },
  {
    id: "try_know_quiz",
    text: 'Joacă "Test de Cunoștințe"',
    xp: 35,
    type: "quiz_mode_played",
    mode: "knowledge",
    target: 1,
  },
  {
    id: "try_duel",
    text: 'Joacă "AI Duel" — luptă-te cu AI-ul',
    xp: 45,
    type: "quiz_mode_played",
    mode: "duel",
    target: 1,
  },
  {
    id: "curiozitati_5",
    text: "Vezi 5 curiozități în chatbot",
    xp: 25,
    type: "curio_count",
    target: 5,
  },
  {
    id: "open_manual",
    text: "Deschide un manual din secțiunea Învață",
    xp: 15,
    type: "manual_opened",
    target: 1,
  },
  {
    id: "use_search",
    text: "Caută un os în bara de căutare",
    xp: 15,
    type: "search_used",
    target: 1,
  },
  {
    id: "mu_view_5",
    text: "Click pe 5 mușchi diferiți în modelul muscular",
    xp: 30,
    type: "muscles_count",
    target: 5,
    system: "muscular",
  },
  {
    id: "mu_view_10",
    text: "Click pe 10 mușchi diferiți în modelul muscular",
    xp: 55,
    type: "muscles_count",
    target: 10,
    system: "muscular",
  },
  {
    id: "mu_visual_quiz",
    text: 'Joacă "Identifică Mușchiul"',
    xp: 30,
    type: "muscle_quiz_played",
    quizMode: "visual",
    target: 1,
    system: "muscular",
  },
  {
    id: "mu_know_quiz",
    text: 'Joacă "Test de Cunoștințe Muscular"',
    xp: 40,
    type: "muscle_quiz_played",
    quizMode: "knowledge",
    target: 1,
    system: "muscular",
  },
  {
    id: "mu_section_all",
    text: "Vizitează cele 4 grupe musculare (Cap, Trunchi, Membre Sup./Inf.)",
    xp: 25,
    type: "muscle_sections",
    target: 4,
    system: "muscular",
  },
  {
    id: "mu_visual_perfect",
    text: 'Termină "Identifică Mușchiul" Ușor cu peste 70%',
    xp: 50,
    type: "muscle_quiz_score",
    quizMode: "visual",
    diff: "easy",
    minPct: 0.7,
    target: 1,
    system: "muscular",
  },
];

function todayDateKey() {
  var d = new Date();
  return d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
}
function dateDiffDays(a, b) {
  return Math.round((new Date(a) - new Date(b)) / 86400000);
}

function getDailyState() {
  var u = getCurrentUser();
  var key = u ? "bionexus_daily_" + u.user : "bionexus_daily_guest";
  try {
    return JSON.parse(localStorage.getItem(key) || "{}");
  } catch (e) {
    return {};
  }
}
function saveDailyState(s) {
  var u = getCurrentUser();
  var key = u ? "bionexus_daily_" + u.user : "bionexus_daily_guest";
  localStorage.setItem(key, JSON.stringify(s));
}

function pickDailyChallenge() {
  var today = todayDateKey();
  var hash = 0;
  for (var i = 0; i < today.length; i++) hash = (hash * 31 + today.charCodeAt(i)) | 0;
  hash = Math.abs(hash);
  var d = new Date();
  var wantsMuscle = d.getDate() % 2 === 1;
  var muscleChallenges = DAILY_CHALLENGES.filter(function (c) {
    return c.system === "muscular";
  });
  var boneChallenges = DAILY_CHALLENGES.filter(function (c) {
    return c.system !== "muscular";
  });
  var pool = wantsMuscle && muscleChallenges.length > 0 ? muscleChallenges : boneChallenges;
  if (!pool.length) pool = DAILY_CHALLENGES;
  return pool[hash % pool.length];
}

function computeStreakDays(history) {
  if (!history || !history.length) return 0;
  var sorted = history.slice().sort(function (a, b) {
    return new Date(a) - new Date(b);
  });
  var streak = 1;
  var today = todayDateKey();
  var lastDate = sorted[sorted.length - 1];
  if (dateDiffDays(today, lastDate) > 1) return 0;
  for (var i = sorted.length - 1; i > 0; i--) {
    var diff = dateDiffDays(sorted[i], sorted[i - 1]);
    if (diff === 1) streak++;
    else break;
  }
  return streak;
}

window.trackDaily = function (type, extra) {
  var state = getDailyState();
  var today = todayDateKey();
  var ch = pickDailyChallenge();
  if (state[today] && state[today].completed) return;
  state[today] = state[today] || { progress: 0, completed: false, challengeId: ch.id };
  if (state[today].challengeId !== ch.id) {
    state[today] = { progress: 0, completed: false, challengeId: ch.id };
  }
  var prog = state[today].progress || 0;
  var matched = false;
  if (ch.type === "bones_count" && type === "viewBone") {
    state[today].uniqueBones = state[today].uniqueBones || [];
    if (state[today].uniqueBones.indexOf(extra) < 0) {
      state[today].uniqueBones.push(extra);
      prog = state[today].uniqueBones.length;
      matched = true;
    }
  } else if (ch.type === "chatbot_count" && type === "chatbot") {
    prog += 1;
    matched = true;
  } else if (ch.type === "sections_visited" && type === "visitSection") {
    state[today].sections = state[today].sections || [];
    if (state[today].sections.indexOf(extra) < 0) {
      state[today].sections.push(extra);
      prog = state[today].sections.length;
      matched = true;
    }
  } else if (ch.type === "quiz_played" && type === "quizFinish") {
    prog += 1;
    matched = true;
  } else if (
    ch.type === "quiz_mode_played" &&
    type === "quizFinish" &&
    extra &&
    extra.mode === ch.mode &&
    (!ch.diff || extra.diff === ch.diff)
  ) {
    prog += 1;
    matched = true;
  } else if (ch.type === "curio_count" && type === "curiozitate") {
    prog += 1;
    matched = true;
  } else if (ch.type === "manual_opened" && type === "manualOpen") {
    prog += 1;
    matched = true;
  } else if (ch.type === "search_used" && type === "searchUsed") {
    prog += 1;
    matched = true;
  } else if (ch.type === "muscles_count" && type === "viewMuscle") {
    state[today].uniqueMuscles = state[today].uniqueMuscles || [];
    if (state[today].uniqueMuscles.indexOf(extra) < 0) {
      state[today].uniqueMuscles.push(extra);
      prog = state[today].uniqueMuscles.length;
      matched = true;
    }
  } else if (
    ch.type === "muscle_quiz_played" &&
    type === "quizFinish" &&
    extra &&
    extra.system === "muscular" &&
    extra.mode === ch.quizMode
  ) {
    prog += 1;
    matched = true;
  } else if (ch.type === "muscle_sections" && type === "visitMuscleSection") {
    state[today].muscleSections = state[today].muscleSections || [];
    if (state[today].muscleSections.indexOf(extra) < 0) {
      state[today].muscleSections.push(extra);
      prog = state[today].muscleSections.length;
      matched = true;
    }
  } else if (
    ch.type === "muscle_quiz_score" &&
    type === "quizFinish" &&
    extra &&
    extra.system === "muscular" &&
    extra.mode === ch.quizMode &&
    extra.diff === ch.diff
  ) {
    var pct = extra.score / extra.total;
    if (pct >= ch.minPct) {
      prog += 1;
      matched = true;
    }
  }
  if (matched) {
    state[today].progress = Math.min(prog, ch.target);
    if (prog >= ch.target && !state[today].completed) {
      state[today].completed = true;
      state[today].xpAwarded = ch.xp;
      state.history = state.history || [];
      if (state.history.indexOf(today) < 0) state.history.push(today);
      if (typeof trackEvent === "function") {
        var u = getCurrentUser();
        if (u) {
          var p = ensureProgress(getProgress(u.user));
          p.xp = (p.xp || 0) + ch.xp;
          saveProgress(p, u.user);
        }
      }
      setTimeout(function () {
        if (typeof addChatMessage === "function") {
          var panel = document.getElementById("chatboxPanel");
          if (panel) panel.classList.add("active");
          var btn = document.getElementById("chatboxToggle");
          if (btn) btn.classList.add("active");
          addChatMessage(
            '🔥 <b>Provocare zilnică completă!</b><br>"' +
              escapeHTML(ch.text) +
              '"<br>+<b>' +
              ch.xp +
              " XP</b> adăugat la contul tău. Revin-o mâine pentru următoarea provocare!",
            false
          );
        }
      }, 300);
    }
    saveDailyState(state);
    renderDailyUI();
  }
};

window.renderDailyUI = function () {
  var card = document.getElementById("dailyCard");
  if (!card) return;
  var ch = pickDailyChallenge();
  var state = getDailyState();
  var today = todayDateKey();
  var todayState = state[today] || { progress: 0, completed: false, challengeId: ch.id };
  if (todayState.challengeId !== ch.id)
    todayState = { progress: 0, completed: false, challengeId: ch.id };
  var streak = computeStreakDays(state.history || []);
  document.getElementById("dailyTask").textContent = t("daily.ch." + ch.id) || ch.text;
  document.getElementById("dailyXp").textContent = "+" + ch.xp;
  document.getElementById("dailyStreakNum").textContent = streak;
  var status = document.getElementById("dailyStatus");
  if (todayState.completed) {
    status.className = "daily-status done";
    status.textContent = t("daily.done") || "✓ Completat";
  } else {
    status.className = "daily-status pending";
    status.textContent = t("daily.pending") || "În curs";
  }
  var goBtn = document.getElementById("dailyGo");
  if (goBtn) goBtn.style.display = todayState.completed ? "none" : "";
  var pct = Math.round((todayState.progress / ch.target) * 100);
  document.getElementById("dailyProgFill").style.width = pct + "%";
  document.getElementById("dailyProgTxt").textContent = todayState.progress + " / " + ch.target;
  var cal = document.getElementById("dailyCalendar");
  cal.innerHTML = "";
  var history = state.history || [];
  var now = new Date();
  var startDate = new Date(now);
  startDate.setDate(now.getDate() - 13);
  for (var i = 0; i < 14; i++) {
    var d = new Date(startDate);
    d.setDate(startDate.getDate() + i);
    var k = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    var div = document.createElement("div");
    div.className = "daily-cal-day";
    div.textContent = d.getDate();
    if (k === today) div.classList.add("today");
    if (history.indexOf(k) >= 0) {
      div.classList.add("done");
      if (i > 0 && (i + 1) % 7 === 0) div.classList.add("streak-bonus");
    }
    cal.appendChild(div);
  }
};


window.bxOpenDailyQuiz = function (system, mode, diff) {
  if (typeof enterApp === "function") enterApp("quiz");
  setTimeout(function () {
    try {
      if (window.QUIZ) QUIZ.system = system;
      if (typeof pickQuizSystem === "function") pickQuizSystem(system);
      if (typeof pickQuizMode === "function") pickQuizMode(mode);
      if (diff && window.QUIZ) {
        QUIZ.difficulty = diff;
        document.querySelectorAll(".quiz-diff").forEach(function (b) {
          b.classList.toggle("active", b.dataset.diff === diff);
        });
      }
      if (typeof showQuizStage === "function") showQuizStage("quizStart");
    } catch (e) {}
  }, 600);
};
window.goToDailyChallenge = function () {
  var ch = typeof pickDailyChallenge === "function" ? pickDailyChallenge() : null;
  if (!ch) return;
  var muscle = ch.system === "muscular";
  switch (ch.type) {
    case "bones_count":
    case "sections_visited":
      if (typeof enterApp === "function") enterApp("skeleton");
      break;
    case "muscles_count":
    case "muscle_sections":
      if (typeof enterApp === "function") enterApp("muscular");
      break;
    case "chatbot_count":
      if (typeof openAIFromFeature === "function") openAIFromFeature();
      else if (typeof toggleChatbox === "function") toggleChatbox();
      break;
    case "curio_count":
      if (typeof openCuriozitati === "function") openCuriozitati();
      break;
    case "manual_opened":
      if (typeof showHome === "function") showHome();
      setTimeout(function () {
        var s = document.getElementById("invata");
        if (s) s.scrollIntoView({ behavior: "smooth" });
      }, 160);
      break;
    case "search_used":
      if (typeof enterApp === "function") enterApp("skeleton");
      setTimeout(function () {
        var inp = document.getElementById("bone-search");
        if (inp) inp.focus();
      }, 650);
      break;
    case "quiz_played":
      if (typeof enterApp === "function") enterApp("quiz");
      break;
    case "quiz_mode_played":
      bxOpenDailyQuiz("osos", ch.mode, ch.diff);
      break;
    case "muscle_quiz_played":
    case "muscle_quiz_score":
      bxOpenDailyQuiz("muscular", ch.quizMode, ch.diff);
      break;
    default:
      if (typeof enterApp === "function") enterApp(muscle ? "muscular" : "skeleton");
  }
};

if (typeof trackEvent === "function") {
  var origTE = window.trackEvent;
  window.trackEvent = function (type, payload) {
    origTE(type, payload);
    if (type === "quizFinish")
      trackDaily(type, {
        mode: QUIZ.mode,
        diff: payload.diff,
        score: payload.score,
        total: payload.total,
        system: QUIZ.system || "osos",
      });
    else trackDaily(type, payload);
  };
}

if (typeof window.openCuriozitati === "function") {
  var origOpen = window.openCuriozitati;
  window.openCuriozitati = function () {
    origOpen();
    trackDaily("curiozitate");
  };
}

document.addEventListener("click", function (e) {
  var card = e.target.closest && e.target.closest(".home-learn-card");
  if (card) trackDaily("manualOpen");
});

document.addEventListener("input", function (e) {
  if (e.target && e.target.id === "bone-search" && e.target.value.length >= 2)
    trackDaily("searchUsed");
});

(function () {
  if (typeof I18N === "undefined") return;
  Object.assign(I18N.ro, {
    "daily.title": "Provocarea zilei",
    "daily.streak": "Streak:",
    "daily.days": "zile",
    "daily.reward": "Recompensă:",
  });
  Object.assign(I18N.en, {
    "daily.title": "Daily Challenge",
    "daily.streak": "Streak:",
    "daily.days": "days",
    "daily.reward": "Reward:",
  });
})();

if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", renderDailyUI);
else setTimeout(renderDailyUI, 150);

(function fixDailyKey() {
  if (typeof getDailyState !== "function") return;
  window.getDailyState = function () {
    try {
      return JSON.parse(localStorage.getItem("bionexus_daily") || "{}");
    } catch (e) {
      return {};
    }
  };
  window.saveDailyState = function (s) {
    localStorage.setItem("bionexus_daily", JSON.stringify(s));
  };
  try {
    var u = getCurrentUser && getCurrentUser();
    var userKey = u ? "bionexus_daily_" + u.user : null;
    var guestKey = "bionexus_daily_guest";
    var unified = "bionexus_daily";
    if (!localStorage.getItem(unified)) {
      var src = userKey ? localStorage.getItem(userKey) : null;
      if (!src) src = localStorage.getItem(guestKey);
      if (src) localStorage.setItem(unified, src);
    }
  } catch (e) {}
  if (typeof renderDailyUI === "function") setTimeout(renderDailyUI, 150);
})();

(function expandAchievements() {
  if (typeof ACHIEVEMENTS === "undefined") return;
  var ids = ACHIEVEMENTS.map(function (a) {
    return a.id;
  });
  var newOnes = [
    {
      id: "obs_easy",
      name: "STUDENT",
      sub: "Identifică Osul · Ușor",
      icon: "📘",
      c1: "#06b6d4",
      c2: "#0e7490",
      lvl: 1,
      unlocked: false,
    },
    {
      id: "obs_med",
      name: "SPECIALIST",
      sub: "Identifică Osul · Mediu",
      icon: "🩺",
      c1: "#3b82f6",
      c2: "#1e3a8a",
      lvl: 2,
      unlocked: false,
    },
    {
      id: "obs_hard",
      name: "OSTEOLOG",
      sub: "Identifică Osul · Greu perfect",
      icon: "🦴",
      c1: "#8b5cf6",
      c2: "#6d28d9",
      lvl: 3,
      unlocked: false,
    },
    {
      id: "know_easy",
      name: "REZIDENT",
      sub: "Cunoștințe · Ușor",
      icon: "📚",
      c1: "#84cc16",
      c2: "#3f6212",
      lvl: 1,
      unlocked: false,
    },
    {
      id: "know_med",
      name: "INTERNIST",
      sub: "Cunoștințe · Mediu",
      icon: "⚕️",
      c1: "#f97316",
      c2: "#9a3412",
      lvl: 2,
      unlocked: false,
    },
    {
      id: "know_hard",
      name: "PROFESOR",
      sub: "Cunoștințe · Greu perfect",
      icon: "🎓",
      c1: "#eab308",
      c2: "#854d0e",
      lvl: 3,
      unlocked: false,
    },
    {
      id: "duel_easy",
      name: "ANALIST",
      sub: "AI Duel · Ușor",
      icon: "🔬",
      c1: "#a78bfa",
      c2: "#6d28d9",
      lvl: 1,
      unlocked: false,
    },
    {
      id: "duel_med",
      name: "EXPERT",
      sub: "AI Duel · Mediu",
      icon: "🧪",
      c1: "#ec4899",
      c2: "#9d174d",
      lvl: 2,
      unlocked: false,
    },
    {
      id: "duel_hard",
      name: "CAMPION AI",
      sub: "AI Duel · Greu perfect",
      icon: "🏆",
      c1: "#ef4444",
      c2: "#7f1d1d",
      lvl: 3,
      unlocked: false,
    },
    {
      id: "triathlon",
      name: "TRIATLON",
      sub: "Toate 3 moduri jucate",
      icon: "🏅",
      c1: "#f59e0b",
      c2: "#7c2d12",
      lvl: 1,
      unlocked: false,
    },
  ];
  newOnes.forEach(function (n) {
    if (ids.indexOf(n.id) < 0) ACHIEVEMENTS.push(n);
  });

  var QM = {
    obs_easy: "eye", obs_med: "eye", obs_hard: "eye",
    know_easy: "book", know_med: "book", know_hard: "book",
    duel_easy: "atom", duel_med: "atom", duel_hard: "atom",
    triathlon: "trophy",
  };
  ACHIEVEMENTS.forEach(function (a) { if (!a.ic && QM[a.id]) a.ic = QM[a.id]; });
})();

(function rewriteUnlock() {
  if (typeof unlockedAchievements !== "function") return;
  var origUnlock = window.unlockedAchievements;
  window.unlockedAchievements = function () {
    var base = origUnlock();
    if (!base || typeof base !== "object") return base;
    var u = typeof getCurrentUser === "function" ? getCurrentUser() : null;
    if (!u) return base;
    try {
      var prog = typeof getProgress === "function" ? getProgress(u.user) : {};
      var mp = prog.quizModePerfect || {};
      var played = prog.quizModePlayed || {};
      base.obs_easy = !!(played.visual && played.visual.easy);
      base.obs_med = !!(played.visual && played.visual.medium);
      base.obs_hard = !!(mp.visual && mp.visual.hard);
      base.know_easy = !!(played.knowledge && played.knowledge.easy);
      base.know_med = !!(played.knowledge && played.knowledge.medium);
      base.know_hard = !!(mp.knowledge && mp.knowledge.hard);
      base.duel_easy = !!(played.duel && played.duel.easy);
      base.duel_med = !!(played.duel && played.duel.medium);
      base.duel_hard = !!(mp.duel && mp.duel.hard);
      var allModes =
        played.visual &&
        Object.keys(played.visual).length > 0 &&
        played.knowledge &&
        Object.keys(played.knowledge).length > 0 &&
        played.duel &&
        Object.keys(played.duel).length > 0;
      base.triathlon = !!allModes;
    } catch (e) {}
    return base;
  };
})();

(function patchTrackEvent() {
  if (typeof trackEvent !== "function") return;
  var origTE = window.trackEvent;
  window.trackEvent = function (type, payload) {
    origTE(type, payload);
    if (type === "quizFinish" && payload) {
      try {
        var u = getCurrentUser();
        if (!u) return;
        var p = typeof ensureProgress === "function" ? ensureProgress(getProgress(u.user)) : {};
        p.quizModePlayed = p.quizModePlayed || {};
        p.quizModePerfect = p.quizModePerfect || {};
        var mode = typeof QUIZ !== "undefined" && QUIZ.mode ? QUIZ.mode : "visual";
        var diff = payload.diff;
        p.quizModePlayed[mode] = p.quizModePlayed[mode] || {};
        p.quizModePlayed[mode][diff] = (p.quizModePlayed[mode][diff] || 0) + 1;
        if (payload.score === payload.total) {
          p.quizModePerfect[mode] = p.quizModePerfect[mode] || {};
          p.quizModePerfect[mode][diff] = (p.quizModePerfect[mode][diff] || 0) + 1;
        }
        if (typeof saveProgress === "function") saveProgress(p, u.user);
      } catch (e) {
        console.warn("quizMode track:", e);
      }
    }
  };
})();

(function patchEndQuiz() {
  if (typeof endQuiz !== "function") return;
  var origEnd = window.endQuiz;
  window.endQuiz = function () {
    var beforeUnlocks = {};
    if (typeof unlockedAchievements === "function") {
      try {
        beforeUnlocks = JSON.parse(JSON.stringify(unlockedAchievements()));
      } catch (e) {
        beforeUnlocks = {};
      }
    }
    var ret = origEnd.apply(this, arguments);
    setTimeout(function () {
      try {
        var afterUnlocks = typeof unlockedAchievements === "function" ? unlockedAchievements() : {};
        var newlyUnlocked = null;
        Object.keys(afterUnlocks).forEach(function (k) {
          if (afterUnlocks[k] && !beforeUnlocks[k] && !newlyUnlocked) {
            var found = null;
            for (var i = 0; i < ACHIEVEMENTS.length; i++)
              if (ACHIEVEMENTS[i].id === k) {
                found = ACHIEVEMENTS[i];
                break;
              }
            if (found) newlyUnlocked = found;
          }
        });
        renderEndScreen(newlyUnlocked);
      } catch (e) {
        console.warn("badge unlock check:", e);
      }
    }, 50);
    return ret;
  };
  function renderEndScreen(badge) {
    var qBadge = document.getElementById("qBadge");
    var qEndTitle = document.getElementById("qEndTitle");
    var qEndMsg = document.getElementById("qEndMsg");
    if (badge) {
      if (qBadge) {
        qBadge.innerHTML =
          '<div class="end-badge-card"><div class="end-badge-hex" style="background:linear-gradient(135deg,' +
          badge.c1 +
          "," +
          badge.c2 +
          ')">' +
          bxBadgeIcon(badge) +
          "</div></div>";
      }
      if (qEndTitle) {
        qEndTitle.innerHTML =
          'Insignă nouă: <span class="end-badge-name">' + badge.name + "</span>";
      }
      if (qEndMsg) {
        qEndMsg.innerHTML =
          "<b>" +
          badge.sub +
          "</b> · Lvl " +
          badge.lvl +
          '<br><small style="color:var(--t3)">Ai deblocat o insignă nouă! O găsești în secțiunea Profil → Insignele mele.</small>';
      }
    }
  }
})();

(function () {
  document.querySelectorAll('img[src*="stomach.png"]').forEach(function (im) {
    if (!im.getAttribute("data-clean-bg") || im.getAttribute("data-clean-bg") === "light") {
      im.setAttribute("data-clean-bg", "checkerboard");
    }
  });
})();

window.toggleSidebar = function () {
  var sb = document.querySelector(".sidebar");
  var btn = document.getElementById("sidebarToggleBtn");
  if (!sb || !btn) return;
  sb.classList.toggle("collapsed");
  var hidden = sb.classList.contains("collapsed");
  btn.innerHTML = hidden ? "→" : "←";
  btn.title = hidden ? "Arata panoul de oase" : "Ascunde panoul de oase";
  setTimeout(function () {
    if (
      typeof camera !== "undefined" &&
      typeof renderer !== "undefined" &&
      typeof viewer !== "undefined"
    ) {
      camera.aspect = viewer.clientWidth / viewer.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(viewer.clientWidth, viewer.clientHeight);
    }
  }, 340);
};


window.toggleMuSidebar = function () {
  var app = document.getElementById("appMuscular");
  if (!app) return;
  var sb = app.querySelector(".sidebar");
  if (!sb) return;
  sb.classList.toggle("collapsed");
  var hidden = sb.classList.contains("collapsed");
  var btn = document.getElementById("muSidebarToggleBtn");
  if (btn) {
    btn.innerHTML = hidden ? "→" : "←";
    var en = typeof CUR_LANG !== "undefined" && CUR_LANG === "en";
    btn.title = hidden ? (en ? "Show panel" : "Arată panoul") : en ? "Hide panel" : "Ascunde panoul";
  }
  [60, 160, 260, 340, 420].forEach(function (d) {
    setTimeout(function () {
      if (typeof window.__muResize === "function") window.__muResize();
    }, d);
  });
};

(function expandDailyChallenges() {
  if (typeof DAILY_CHALLENGES === "undefined") return;
  var existingIds = DAILY_CHALLENGES.map(function (c) {
    return c.id;
  });
  var more = [
    {
      id: "click_bones_15",
      text: "Click pe 15 oase diferite în scheletul 3D",
      xp: 60,
      type: "bones_count",
      target: 15,
    },
    {
      id: "click_bones_25",
      text: "Click pe 25 oase diferite în scheletul 3D",
      xp: 80,
      type: "bones_count",
      target: 25,
    },
    {
      id: "use_chatbot_10",
      text: "Pune 10 întrebări asistentului AI",
      xp: 50,
      type: "chatbot_count",
      target: 10,
    },
    {
      id: "curiozitati_3",
      text: "Vezi 3 curiozități rapide în chatbot",
      xp: 15,
      type: "curio_count",
      target: 3,
    },
    {
      id: "curiozitati_10",
      text: "Vezi 10 curiozități în chatbot",
      xp: 45,
      type: "curio_count",
      target: 10,
    },
    {
      id: "try_quiz_2",
      text: "Joacă 2 minigame-uri (orice tip)",
      xp: 55,
      type: "quiz_played",
      target: 2,
    },
    {
      id: "try_quiz_3",
      text: "Joacă 3 minigame-uri (orice tip)",
      xp: 80,
      type: "quiz_played",
      target: 3,
    },
    {
      id: "try_visual_med",
      text: 'Joacă "Identifică Osul" la nivel Mediu',
      xp: 35,
      type: "quiz_mode_played",
      mode: "visual",
      diff: "medium",
      target: 1,
    },
    {
      id: "try_visual_hard",
      text: 'Joacă "Identifică Osul" la nivel Greu',
      xp: 55,
      type: "quiz_mode_played",
      mode: "visual",
      diff: "hard",
      target: 1,
    },
    {
      id: "try_know_med",
      text: 'Joacă "Test de Cunoștințe" la Mediu',
      xp: 50,
      type: "quiz_mode_played",
      mode: "knowledge",
      diff: "medium",
      target: 1,
    },
    {
      id: "try_know_hard",
      text: 'Joacă "Test de Cunoștințe" la Greu (Manuale)',
      xp: 75,
      type: "quiz_mode_played",
      mode: "knowledge",
      diff: "hard",
      target: 1,
    },
    {
      id: "try_duel_med",
      text: "Înfruntă AI Duel la nivel Mediu",
      xp: 60,
      type: "quiz_mode_played",
      mode: "duel",
      diff: "medium",
      target: 1,
    },
    {
      id: "try_duel_hard",
      text: "Înfruntă AI Duel la nivel Greu",
      xp: 90,
      type: "quiz_mode_played",
      mode: "duel",
      diff: "hard",
      target: 1,
    },
    {
      id: "manual_2",
      text: "Deschide 2 manuale diferite din secțiunea Învață",
      xp: 30,
      type: "manual_opened",
      target: 2,
    },
    {
      id: "manual_3",
      text: "Deschide toate 3 manualele Stefaneț",
      xp: 50,
      type: "manual_opened",
      target: 3,
    },
    {
      id: "search_3",
      text: "Folosește bara de căutare de 3 ori",
      xp: 25,
      type: "search_used",
      target: 3,
    },
    {
      id: "visit_2",
      text: "Vizitează 2 secțiuni anatomice (Cap/Trunchi/etc)",
      xp: 15,
      type: "sections_visited",
      target: 2,
    },
    {
      id: "visit_3",
      text: "Vizitează 3 secțiuni anatomice",
      xp: 22,
      type: "sections_visited",
      target: 3,
    },
    {
      id: "click_chat",
      text: "Deschide chatbox-ul și salută AI-ul",
      xp: 10,
      type: "chatbot_count",
      target: 1,
    },
  ];
  more.forEach(function (c) {
    if (existingIds.indexOf(c.id) < 0) DAILY_CHALLENGES.push(c);
  });
})();

(function fixEmojiSizes() {
  var s = document.createElement("style");
  s.textContent =
    ".system-icon-img img,.planet-img img{width:100%!important;height:100%!important;object-fit:cover!important;transform:none!important;display:block!important;padding:0!important}.system-icon,.planet{overflow:hidden!important}";
  document.head.appendChild(s);
})();

(function patchLogoCleanup() {
  if (typeof window.removeLightBg === "function") return;
  var origLogoCleanup = document.querySelectorAll('img[data-clean-bg="checkerboard"]');
  function cleanCheckerboard(img, cb) {
    try {
      var c = document.createElement("canvas");
      c.width = img.naturalWidth || img.width;
      c.height = img.naturalHeight || img.height;
      if (!c.width || !c.height) {
        cb && cb();
        return;
      }
      var ctx = c.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var d = ctx.getImageData(0, 0, c.width, c.height);
      var p = d.data;
      for (var i = 0; i < p.length; i += 4) {
        var r = p[i],
          g = p[i + 1],
          b = p[i + 2];
        var avg = (r + g + b) / 3;
        var minC = Math.min(r, g, b);
        var maxC = Math.max(r, g, b);
        var sat = maxC - minC;
        if (sat < 20 && avg > 160) {
          p[i + 3] = 0;
        } else if (sat < 32 && avg > 200) {
          p[i + 3] = 0;
        } else if (minC > 200 && avg > 215) {
          p[i + 3] = 0;
        } else if (minC > 180 && avg > 210 && sat < 60) {
          var k = Math.min(1, (minC - 180) / 30);
          p[i + 3] = Math.round(p[i + 3] * (1 - k));
        }
      }
      ctx.putImageData(d, 0, 0);
      var newSrc = c.toDataURL("image/png");
      var settled = false;
      function onLoaded() {
        if (settled) return;
        settled = true;
        img.classList.add("cleaned");
        cb && cb();
      }
      img.addEventListener("load", onLoaded, { once: true });
      img.addEventListener("error", onLoaded, { once: true });
      img.src = newSrc;
      setTimeout(onLoaded, 1500);
    } catch (e) {
      console.warn("checkerboard clean failed", e);
      img.classList.add("cleaned");
      cb && cb();
    }
  }
  var cbPending = 0,
    cbInited = false;
  function cbBump() {
    cbPending++;
  }
  function cbDone() {
    cbPending--;
    if (cbInited && cbPending <= 0 && typeof window.__appReady === "function")
      window.__appReady("cleanup-cb");
  }
  function processWhenReady(img) {
    cbBump();
    var finished = false;
    function finish() {
      if (finished) return;
      finished = true;
      img.classList.add("cleaned");
      cbDone();
    }
    var run = function () {
      if (img.dataset.cleanedCb === "1") {
        finish();
        return;
      }
      img.dataset.cleanedCb = "1";
      cleanCheckerboard(img, finish);
    };
    if (img.complete && img.naturalWidth) run();
    else {
      img.addEventListener("load", run, { once: true });
      img.addEventListener("error", finish, { once: true });
    }
    setTimeout(finish, 4500);
  }
  function init() {
    document.querySelectorAll('img[data-clean-bg="checkerboard"]').forEach(processWhenReady);
    cbInited = true;
    if (cbPending <= 0 && typeof window.__appReady === "function") window.__appReady("cleanup-cb");
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

(function patchTouchClick() {
  var viewerEl = document.getElementById("viewer");
  if (!viewerEl) return;
  var canvasEl = document.getElementById("canvas3d");
  var TAP_MAX_MOVE = 10;
  var TAP_MAX_MS = 350;
  var startX = 0,
    startY = 0,
    startT = 0,
    activeTouch = false;
  function isCanvasTarget(el) {
    if (!el) return false;
    if (el === canvasEl) return true;
    if (el.tagName === "CANVAS") return true;
    return false;
  }
  function setMouseCoords(x, y) {
    var r = viewerEl.getBoundingClientRect();
    if (typeof mouse !== "undefined" && mouse) {
      mouse.x = ((x - r.left) / r.width) * 2 - 1;
      mouse.y = -((y - r.top) / r.height) * 2 + 1;
      return true;
    }
    return false;
  }
  function fireSyntheticClick(x, y) {
    setMouseCoords(x, y);
    var target = document.elementFromPoint(x, y) || viewerEl;
    try {
      var ev = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX: x,
        clientY: y,
        button: 0,
      });
      (target || viewerEl).dispatchEvent(ev);
    } catch (err) {
      var ev2 = document.createEvent("MouseEvents");
      ev2.initMouseEvent(
        "click",
        true,
        true,
        window,
        1,
        0,
        0,
        x,
        y,
        false,
        false,
        false,
        false,
        0,
        null
      );
      (target || viewerEl).dispatchEvent(ev2);
    }
  }
  viewerEl.addEventListener(
    "touchstart",
    function (e) {
      if (!e.touches || !e.touches.length) return;
      if (!isCanvasTarget(e.target)) {
        activeTouch = false;
        return;
      }
      var t = e.touches[0];
      if (e.touches.length === 1) {
        activeTouch = true;
        startX = t.clientX;
        startY = t.clientY;
        startT = Date.now();
        setMouseCoords(t.clientX, t.clientY);
      } else {
        activeTouch = false;
      }
    },
    { passive: true }
  );
  viewerEl.addEventListener(
    "touchmove",
    function (e) {
      if (!activeTouch || !e.touches || !e.touches.length) return;
      var t = e.touches[0];
      if (
        Math.abs(t.clientX - startX) > TAP_MAX_MOVE ||
        Math.abs(t.clientY - startY) > TAP_MAX_MOVE
      ) {
        activeTouch = false;
      }
    },
    { passive: true }
  );
  viewerEl.addEventListener(
    "touchend",
    function (e) {
      if (!activeTouch) return;
      activeTouch = false;
      var t = (e.changedTouches && e.changedTouches[0]) || null;
      if (!t) return;
      var dt = Date.now() - startT;
      var dx = Math.abs(t.clientX - startX),
        dy = Math.abs(t.clientY - startY);
      if (dt <= TAP_MAX_MS && dx <= TAP_MAX_MOVE && dy <= TAP_MAX_MOVE) {
        fireSyntheticClick(t.clientX, t.clientY);
      }
    },
    { passive: true }
  );
  viewerEl.addEventListener(
    "touchcancel",
    function () {
      activeTouch = false;
    },
    { passive: true }
  );
  viewerEl.addEventListener(
    "pointerdown",
    function (e) {
      if (e.pointerType === "mouse") return;
      setMouseCoords(e.clientX, e.clientY);
    },
    { passive: true }
  );
})();

window.scrollToSection = function (id) {
  var t = document.getElementById(id);
  if (!t) return;
  var overlay = document.getElementById("homeOverlay");
  if (overlay && getComputedStyle(overlay).position === "fixed") {
    var rect = t.getBoundingClientRect();
    var top = rect.top + overlay.scrollTop - 80;
    try {
      overlay.scrollTo({ top: top, behavior: "smooth" });
    } catch (e) {
      overlay.scrollTop = top;
    }
  } else {
    try {
      t.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (e) {
      t.scrollIntoView();
    }
  }
};

(function realCaptcha() {
  var state = { answer: 0, renderedAt: 0, attempts: 0, firstKeyAt: 0 };
  var OPS = [
    {
      sym: "+",
      fn: function (a, b) {
        return a + b;
      },
    },
    {
      sym: "-",
      fn: function (a, b) {
        return a - b;
      },
    },
    {
      sym: "×",
      fn: function (a, b) {
        return a * b;
      },
    },
  ];
  function randInt(lo, hi) {
    return Math.floor(Math.random() * (hi - lo + 1)) + lo;
  }
  function render() {
    var qEl = document.getElementById("captchaQ");
    var aEl = document.getElementById("captchaA");
    var hEl = document.getElementById("regHuman");
    var sEl = document.getElementById("captchaStatus");
    if (!qEl || !aEl) return;
    var op = OPS[randInt(0, OPS.length - 1)];
    var a, b;
    if (op.sym === "-") {
      a = randInt(5, 15);
      b = randInt(1, Math.min(a - 1, 8));
    } else if (op.sym === "×") {
      a = randInt(2, 7);
      b = randInt(2, 7);
    } else {
      a = randInt(2, 12);
      b = randInt(2, 12);
    }
    state.answer = op.fn(a, b);
    state.renderedAt = Date.now();
    state.firstKeyAt = 0;
    qEl.textContent = a + " " + op.sym + " " + b + " = ?";
    aEl.value = "";
    aEl.classList.remove("ok", "bad");
    if (hEl) hEl.value = "0";
    if (sEl) {
      sEl.textContent = "";
      sEl.classList.remove("ok", "bad");
    }
  }
  function verify() {
    var aEl = document.getElementById("captchaA");
    var hEl = document.getElementById("regHuman");
    var sEl = document.getElementById("captchaStatus");
    if (!aEl) return false;
    var v = parseInt(aEl.value, 10);
    var ok = !isNaN(v) && v === state.answer;
    var tooFast = state.firstKeyAt - state.renderedAt < 400;
    var hp = document.getElementById("regWebsite");
    var isBot = hp && hp.value.length > 0;
    if (isBot) {
      aEl.classList.add("bad");
      aEl.classList.remove("ok");
      if (sEl) {
        sEl.textContent = "Verificare eșuată";
        sEl.classList.add("bad");
        sEl.classList.remove("ok");
      }
      if (hEl) hEl.value = "0";
      return false;
    }
    if (ok && !tooFast) {
      aEl.classList.add("ok");
      aEl.classList.remove("bad");
      if (sEl) {
        sEl.textContent = "✓ Verificat";
        sEl.classList.add("ok");
        sEl.classList.remove("bad");
      }
      if (hEl) hEl.value = "1";
      return true;
    } else {
      aEl.classList.add("bad");
      aEl.classList.remove("ok");
      if (sEl) {
        sEl.textContent = tooFast ? "Prea repede, încearcă din nou" : "Răspuns greșit";
        sEl.classList.add("bad");
        sEl.classList.remove("ok");
      }
      if (hEl) hEl.value = "0";
      state.attempts++;
      if (state.attempts >= 3) {
        state.attempts = 0;
        render();
      }
      return false;
    }
  }
  window.captchaVerify = verify;
  window.captchaIsValid = function () {
    var h = document.getElementById("regHuman");
    return !!(h && h.value === "1");
  };
  window.captchaRender = render;
  function bind() {
    var rEl = document.getElementById("captchaRefresh");
    var aEl = document.getElementById("captchaA");
    if (rEl)
      rEl.addEventListener("click", function (e) {
        e.preventDefault();
        render();
      });
    if (aEl) {
      aEl.addEventListener("keydown", function () {
        if (!state.firstKeyAt) state.firstKeyAt = Date.now();
      });
      aEl.addEventListener("input", function () {
        var h = document.getElementById("regHuman");
        if (h) h.value = "0";
        aEl.classList.remove("ok", "bad");
        var s = document.getElementById("captchaStatus");
        if (s) {
          s.textContent = "";
          s.classList.remove("ok", "bad");
        }
        if (aEl.value.length >= String(state.answer).length) {
          verify();
        }
      });
      aEl.addEventListener("blur", function () {
        if (aEl.value.trim() !== "") verify();
      });
    }
    render();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", bind);
  else bind();
})();

(function patchRegister() {
  var orig = window.doRegister;
  window.doRegister = function () {
    var hp = document.getElementById("regWebsite");
    if (hp && hp.value.length > 0) {
      var err = document.getElementById("regError");
      if (err) {
        err.textContent = "Verificare eșuată";
        err.style.display = "block";
      }
      return;
    }
    if (typeof window.captchaIsValid === "function" && !window.captchaIsValid()) {
      if (typeof window.captchaVerify === "function") window.captchaVerify();
      var err2 = document.getElementById("regError");
      if (err2) {
        err2.textContent = "Completează verificarea de securitate";
        err2.style.display = "block";
      }
      var aEl = document.getElementById("captchaA");
      if (aEl) aEl.focus();
      return;
    }
    if (typeof orig === "function") return orig.apply(this, arguments);
  };
})();

(function trainFromStefanetManuals() {
  if (typeof SITE_KB === "undefined") return;
  var kb = [
    {
      id: "man.intro",
      triggers: ["stefanet|manual|tratat|sursa|sursele|bibliografie|de unde|surse|bazat pe"],
      answer:
        "Conținutul anatomic provine din <b>Anatomia Omului (Stefaneț M.)</b> — tratat universitar oficial în 3 volume:<br>· <b>Vol I</b> — Osteologie, artrologie, miologie<br>· <b>Vol II</b> — Splanchnologie<br>· <b>Vol III</b> — Sistem nervos, cardiovascular, endocrin<br>Disponibile în secțiunea <i>Învață</i>.",
      chips: [{ a: "open-learn", label: "Vezi manualele" }],
    },
    {
      id: "osteo.tipuri",
      triggers: [
        "tipuri oase|categorii oase|clasificare oase|oase lungi|oase scurte|oase plate|oase neregulate|oase sesamoide|oase pneumatice",
      ],
      answer:
        "Oasele se clasifică morfologic în:<br>· <b>Lungi</b> — predominant lungimea (femur, humerus, falange). Au diafiză + 2 epifize.<br>· <b>Scurte</b> — cuboidale (carpiene, tarsiene).<br>· <b>Plate</b> — protecție (parietal, stern, omoplat).<br>· <b>Neregulate</b> — formă complexă (vertebre, oase faciale).<br>· <b>Sesamoide</b> — în tendoane (patela, oasele pisiforme).<br>· <b>Pneumatice</b> — cavități cu aer (maxilar, sfenoid, etmoid, frontal, temporal).",
    },
    {
      id: "osteo.structura",
      triggers: [
        "structura os|epifiza|diafiza|metafiza|periost|endost|maduva|canal medular|cartilaj de crestere",
      ],
      answer:
        "Os lung: <b>diafiza</b> (corp, canal medular cu măduvă galbenă) + <b>epifize</b> (capete cu țesut spongios + măduvă roșie) + <b>metafize</b> (zona dintre, cu cartilajul de creștere până la adult). Acoperit de <b>periost</b> (fibros + osteogenic) și căptușit la interior de <b>endost</b>.",
    },
    {
      id: "osteo.tesuturi",
      triggers: ["os compact|os spongios|haversian|osteon|trabecule|tesut osos"],
      answer:
        "2 tipuri de țesut osos: <b>compact</b> (cortical) — dens, în diafiză, organizat în <b>osteoane</b> (canale Havers + lamele concentrice) — și <b>spongios</b> (trabecular) — în epifize, cu trabecule între care e măduvă roșie. Compactul rezistă la forță, spongiosul absoarbe șocuri.",
    },
    {
      id: "osteo.osteogeneza",
      triggers: [
        "osteogeneza|formarea osului|ossification|osificare|intramembranoasa|endocondrala",
      ],
      answer:
        "2 tipuri de osificare: <b>intramembranoasă</b> — direct din mezenchim → oase plate (craniu, claviculă); <b>endocondrală</b> — pe model de cartilaj → restul oaselor. Cartilajul de creștere (epifizar) se închide la 18-25 ani.",
    },
    {
      id: "osteo.numar",
      triggers: ["cate oase|numar oase|206|270|oase corp uman"],
      answer:
        "Adultul are <b>206 oase</b>. La naștere ~270 (multe fuzionează în timp — ex. sacrul din 5 segmente, coccigele din 4). Cel mai mic: <b>scărița</b> (stapes, ~3mm). Cel mai lung: <b>femurul</b> (~25% din înălțime).",
    },
    {
      id: "osteo.axial",
      triggers: ["schelet axial|axial|cap|coloana|coaste|stern"],
      answer:
        "<b>Scheletul axial</b> (80 oase): craniul (22), oasele auditive (6), hyoidul (1), coloana vertebrală (26), cutia toracică (25 — 24 coaste + sternul). Susține axul corpului și protejează organe vitale.",
    },
    {
      id: "osteo.appendicular",
      triggers: ["schelet apendicular|apendicular|membre|centura"],
      answer:
        "<b>Scheletul apendicular</b> (126 oase): centura scapulară (4), membre superioare (60), centura pelviană (2), membre inferioare (60). Permite mișcarea și manipularea.",
    },
    {
      id: "osteo.coloana",
      triggers: [
        "coloana vertebrala|vertebre|vertebra|cervicale|toracale|lombare|sacrale|coccigiene|atlas|axis",
      ],
      answer:
        "Coloana are <b>33-34 vertebre</b>: <b>7 cervicale</b> (C1-C7; atlas=C1 fără corp, axis=C2 cu dintele/axisul) · <b>12 toracale</b> (T1-T12, articulate cu coastele) · <b>5 lombare</b> (L1-L5, masive) · <b>5 sacrale</b> sudate (sacrul) · <b>4-5 coccigiene</b> sudate. Are 4 curburi: 2 lordoze (cervicală, lombară) + 2 cifoze (toracală, sacrală).",
    },
    {
      id: "osteo.vertebra_parts",
      triggers: [
        "parti vertebra|corp vertebral|arc vertebral|procese vertebra|spinos|transvers|articular vertebra|pedicul|lamine|gaura vertebrala",
      ],
      answer:
        "Vertebra tip: <b>corp</b> (anterior, suport) + <b>arc</b> (posterior, format din 2 pediculi + 2 lamine) + <b>gaura vertebrală</b> (canal pentru măduvă) + <b>procese</b>: 1 spinos (posterior), 2 transverse (lateral), 4 articulare (sup./inf.).",
    },
    {
      id: "osteo.craniu",
      triggers: ["craniu|cranian|neurocraniu|viscerocraniu|sutura|fontanela|bregma|lambda"],
      answer:
        "Craniul are <b>22 oase</b>: <b>neurocraniu</b> (8) — frontal, 2 parietale, occipital, 2 temporale, sfenoid, etmoid; <b>viscerocraniu</b> (14) — 2 maxilare, mandibula, 2 zigomatice, 2 nazale, 2 lacrimale, vomer, 2 palatine, 2 cornete inferioare. Suturile principale: coronală, sagitală, lambdoidă, scuamoasă. Fontanelele se închid în primii 2 ani.",
    },
    {
      id: "osteo.torace",
      triggers: [
        "cutie toracica|coaste|costale|stern|manubriu|xifoid|coasta adevarata|coasta falsa|coasta flotanta",
      ],
      answer:
        "Cutia toracică: <b>12 perechi de coaste</b> + <b>sternul</b> (manubriu, corp, proces xifoid) + 12 vertebre toracale. Coaste: <b>I-VII adevărate</b> (se prind direct de stern prin cartilaj), <b>VIII-X false</b> (se prind indirect, prin cartilajul coastei VII), <b>XI-XII flotante</b> (libere anterior).",
    },
    {
      id: "osteo.scapula",
      triggers: ["omoplat|scapula|acromion|coracoid|cavitate glenoida"],
      answer:
        "Scapula (omoplat) — os plat triunghiular pe peretele posterior al toracelui. Repere: <b>spina scapulei</b>, <b>acromion</b> (vârful spinei), <b>procesul coracoid</b> (anterior), <b>cavitatea glenoidă</b> (articulație cu humerusul), 2 fețe (anterioară/costală, posterioară).",
    },
    {
      id: "osteo.humerus",
      triggers: ["humerus|cap humeral|trohlea humerala|epicondili humerus|olecran|gat chirurgical"],
      answer:
        "Humerusul — os lung al brațului. Proximal: <b>cap humeral</b> (sferic, articulat cu glenoida), <b>col anatomic</b>, <b>tuberculi mare/mic</b>, <b>col chirurgical</b> (loc frecvent de fractură). Diafiza cu <b>șanțul radial</b>. Distal: <b>trohlea</b>, <b>capitulul</b>, <b>epicondili medial/lateral</b>, <b>fosa olecraniană</b>.",
    },
    {
      id: "osteo.radius_ulna",
      triggers: ["radius|cubitus|ulna|antebrat|pronatie|supinatie"],
      answer:
        "Antebrațul: <b>radius</b> (lateral, partea policelui — capul radial proximal, procesul stiloid distal) + <b>ulna</b> (medial — olecranul proximal, capul ulnar distal). Membrana interosoasă le unește. Articulațiile radio-ulnare permit <b>pronație/supinație</b>.",
    },
    {
      id: "osteo.mana",
      triggers: [
        "carp|carpiene|metacarpiene|falange mana|degete|police|scafoid|semilunar|piramidal|pisiform|trapez|trapezoid|capitat|hamat",
      ],
      answer:
        "Mâna are 27 oase: <b>8 carpiene</b> (rând proximal: scafoid, semilunar, piramidal, pisiform; rând distal: trapez, trapezoid, capitat, hamat), <b>5 metacarpiene</b>, <b>14 falange</b> (degetele II-V au 3 — proximală, mijlocie, distală; policele are doar 2).",
    },
    {
      id: "osteo.pelvis",
      triggers: [
        "bazin|pelvis|coxal|iliac|ischion|pubis|simfiza pubiana|sacroiliaca|foramen obturator",
      ],
      answer:
        "Pelvisul = 2 coxale + sacrul + coccis. <b>Coxalul</b> rezultă din fuziunea a 3 oase: <b>ilion</b> (superior), <b>ischion</b> (postero-inferior), <b>pubis</b> (antero-inferior). Cele 3 se întâlnesc la <b>acetabul</b>. Pelvisul masculin e mai îngust și înalt, cel feminin mai larg pentru naștere.",
    },
    {
      id: "osteo.femur",
      triggers: ["femur|cap femural|col femural|trohanter|condili femurali|patela|rotula"],
      answer:
        "Femurul — cel mai lung os. Proximal: <b>cap femural</b> (în acetabul), <b>col femural</b> (loc frecvent de fractură la vârstnici), <b>trohanter mare/mic</b>. Distal: 2 <b>condili</b> (medial mai voluminos). <b>Patela</b> (rotula) e sesamoidul cvadricepsului.",
    },
    {
      id: "osteo.tibia_fibula",
      triggers: ["tibia|fibula|peroneu|gamba os|maleola"],
      answer:
        "Gamba: <b>tibia</b> (medial, suport greutate — platou tibial proximal, maleola medială distal) + <b>fibula</b> (lateral, fără rol de suport — capul fibular proximal, maleola laterală distal). Articulația talo-crurală e formată din cele 2 maleole + talus.",
    },
    {
      id: "osteo.picior",
      triggers: [
        "tars|tarsiene|metatars|metatarsiene|falange picior|calcaneu|talus|navicular|cuboid|cuneiforme",
      ],
      answer:
        "Piciorul: 26 oase. <b>7 tarsiene</b> (talus, calcaneu — călcâiul; navicular, cuboid, 3 cuneiforme), <b>5 metatarsiene</b>, <b>14 falange</b>. Boltele plantare (longitudinale medială/laterală + transversală) absorb șocul.",
    },
    {
      id: "arthro.tipuri",
      triggers: [
        "tipuri articulatii|sinartroze|amfiartroze|diartroze|fibroasa|cartilaginoasa|sinoviala",
      ],
      answer:
        "Articulațiile se clasifică funcțional în: <b>sinartroze</b> (fixe — ex. suturile craniene), <b>amfiartroze</b> (semi-mobile — ex. simfize, discuri intervertebrale), <b>diartroze</b> (mobile, sinoviale). Structural: <b>fibroase</b>, <b>cartilaginoase</b>, <b>sinoviale</b>.",
    },
    {
      id: "arthro.sinoviala",
      triggers: [
        "articulatie sinoviala|capsula articulara|cartilaj articular|sinoviala|menisc|ligament",
      ],
      answer:
        "Articulația sinovială are: <b>capsulă articulară</b> (cu strat fibros + sinovial), <b>cartilaj articular hialin</b> pe suprafețe, <b>cavitate</b> cu <b>lichid sinovial</b> (nutriție, lubrifiere), <b>ligamente</b>, uneori <b>meniscuri/discuri</b>.",
    },
    {
      id: "arthro.sin_tipuri",
      triggers: [
        "sferoidala|condilara|elipsoidala|trohleara|pivot|in sa|articulatie plana|tipuri sinoviale",
      ],
      answer:
        "6 tipuri de articulații sinoviale: <b>sferoidală</b> — multiaxială (umăr, șold); <b>condilară</b> — biaxială (radio-carpiană); <b>șa</b> — biaxială (carpo-metacarpiană police); <b>trohleară</b> — uniaxială (cot); <b>pivot</b> — uniaxială (atlanto-axială); <b>plană</b> — alunecare (intercarpiene).",
    },
    {
      id: "arthro.umar",
      triggers: ["articulatia umarului|gleno-humerala|coif rotatori|supraspin"],
      answer:
        "Articulația umărului (gleno-humerală) — sferoidală, cea mai mobilă. Stabilitatea redusă (cavitate mică/cap mare) e compensată de <b>coiful rotatorilor</b> (4 mușchi: supraspinos, infraspinos, rotund mic, subscapular) + <b>labrum glenoidal</b> + ligamente.",
    },
    {
      id: "arthro.cot",
      triggers: ["cot|articulatia cotului|humero-ulnara|humero-radiala"],
      answer:
        "Cotul = 3 articulații într-o singură capsulă: <b>humero-ulnară</b> (trohleară, flexie/extensie), <b>humero-radială</b> (sferoidală limitată), <b>radio-ulnară proximală</b> (pivot, pronație/supinație).",
    },
    {
      id: "arthro.genunchi",
      triggers: ["genunchi|articulatia genunchiului|menisc|incrucisate|colaterale"],
      answer:
        "Genunchiul — articulație complexă: <b>femuro-tibială</b> + <b>femuro-patelară</b>. Stabilizatori: <b>ligamente încrucișate</b> anterior (ACL) și posterior (PCL); <b>colaterale</b> medial (LCM) și lateral (LCL); <b>meniscurile</b> absorb șoc.",
    },
    {
      id: "arthro.sold",
      triggers: ["sold|articulatia soldului|coxofemural|labrum acetabular"],
      answer:
        "Șoldul (coxo-femural) — sferoidală, foarte stabilă (cap femural adânc în acetabul + labrum). Mișcări: flexie/extensie, abducție/adducție, rotație internă/externă, circumducție.",
    },
    {
      id: "arthro.glezna",
      triggers: ["glezna|talocrural|subtalara"],
      answer:
        "Glezna = mai multe articulații. <b>Talo-crurală</b> (trohleară: tibia+fibula+talus) — flexie dorsală/plantară. <b>Subtalară</b> (talus+calcaneu) — inversie/eversie. Ligamentele laterale sunt vulnerabile (entorsele frecvente).",
    },
    {
      id: "myo.tipuri",
      triggers: ["tipuri muschi|muschi scheletic|muschi neted|muschi cardiac|striat|involuntar"],
      answer:
        "3 tipuri de țesut muscular: <b>scheletic</b> (striat, voluntar, multinucleat) — mișcare; <b>neted</b> (nestriat, involuntar) — pereții organelor și vaselor; <b>cardiac</b> (striat, involuntar, cu discuri intercalare) — doar miocardul.",
    },
    {
      id: "myo.structura",
      triggers: ["fibra musculara|miofibrila|sarcomer|actina|miozina|sarcolema"],
      answer:
        "Mușchiul scheletic: <b>fibre musculare</b> (celule multinucleate) → <b>miofibrile</b> → <b>sarcomere</b> (unitatea contractilă). Miofilamentele <b>actină</b> și <b>miozină</b> alunecă → contracție. Învelișuri: endomisium, perimisium, epimisium.",
    },
    {
      id: "myo.contractie",
      triggers: ["contractie musculara|atp muschi|calciu muscular|placa neuromusculara"],
      answer:
        "Contracția: impulsul nervos la placa neuromusculară → eliberare <b>acetilcolină</b> → depolarizare → eliberare <b>Ca</b> din RE → Ca se leagă de troponină → tropomiozina expune situsurile actinei → miozina trage actina (consumă ATP) → sarcomerul se scurtează.",
    },
    {
      id: "myo.fixe_mobile",
      triggers: ["origine muschi|insertie|punct fix|punct mobil|agonist|antagonist|sinergic"],
      answer:
        "Mușchiul are <b>origine</b> (punct fix) și <b>inserție</b> (punct mobil). Funcțional: <b>agonist</b> (face mișcarea), <b>antagonist</b> (opus), <b>sinergic</b> (ajută), <b>fixator</b> (stabilizează).",
    },
    {
      id: "myo.cap_gat",
      triggers: [
        "muschi fata|muschii capului|mimica|masticatie|maseter|temporal|sternocleidomastoidian",
      ],
      answer:
        "<b>Mușchii mimicii</b> — orbicular ocular/oral, frontal, zigomatic, inervație: nerv facial (VII). <b>Masticatori</b> — maseter, temporal, pterigoidian medial/lateral, inervație: nerv trigemen (V). <b>Gât</b>: sternocleidomastoidian, platisma, scaleni.",
    },
    {
      id: "myo.spate",
      triggers: ["muschii spatelui|trapez|latissim|romboid|erector spinae|paraspinos"],
      answer:
        "Mușchii spatelui pe straturi: <b>superficial</b> — trapez, latissimus dorsi, romboizi, ridicătorul scapulei; <b>intermediar</b> — dințați; <b>profund</b> — erector spinae (iliocostal, longissim, spinalis).",
    },
    {
      id: "myo.abdomen",
      triggers: ["muschii abdomenului|drept abdominal|oblici|transvers|patrat lombar"],
      answer:
        "Peretele abdominal: <b>drept abdominal</b> (cele 6 pătrățele), <b>oblic extern</b>, <b>oblic intern</b>, <b>transvers abdominal</b>. Posterior: pătratul lombar.",
    },
    {
      id: "myo.umar_brat",
      triggers: ["deltoid|biceps|triceps|brahial|coracobrahial"],
      answer:
        "<b>Deltoid</b> — abducție umăr. <b>Biceps brahial</b> — flexie cot + supinație. <b>Triceps brahial</b> — extensie cot. <b>Brahialul</b> — flexor pur al cotului. <b>Coracobrahial</b> — flexie umăr.",
    },
    {
      id: "myo.antebrat",
      triggers: ["antebrat muschi|flexori antebrat|extensori antebrat|pronator|supinator"],
      answer:
        "Antebrațul are 2 compartimente: <b>anterior</b> (flexori — flexor radial/ulnar al carpului, flexor superficial/profund al degetelor, pronator rotund/pătrat); <b>posterior</b> (extensori — extensor radial/ulnar, supinator).",
    },
    {
      id: "myo.coapsa",
      triggers: ["coapsa muschi|cvadriceps|ischiogambieri|adductori|sartorius"],
      answer:
        "Coapsa: <b>anterior</b> — cvadriceps (4 capete) → extensia genunchiului; sartorius. <b>Medial</b> — adductori → adducție șold. <b>Posterior</b> — ischio-gambieri (biceps femural, semitendinos, semimembranos) → flexie genunchi + extensie șold.",
    },
    {
      id: "myo.gamba",
      triggers: ["gamba muschi|gastrocnemian|soleu|tibial|peronieri|achile"],
      answer:
        "Gamba: <b>posterior</b> — tricepsul sural (gastrocnemian + soleu) → flexie plantară, formează tendonul lui <b>Ahile</b>; <b>anterior</b> — tibial anterior, extensor degetelor; <b>lateral</b> — peronier lung/scurt → eversie.",
    },
    {
      id: "spl.digestiv",
      triggers: ["sistem digestiv|tub digestiv|digestie|peristaltism"],
      answer:
        "Sistemul digestiv: <b>tub digestiv</b> (cavitate orală → faringe → esofag → stomac → intestin subțire → intestin gros → rect → anus) + <b>glande anexe</b> (salivare, ficat, pancreas). Lungime ~9m.",
    },
    {
      id: "spl.cav_orala",
      triggers: ["cavitate orala|gura|limba|dinti|glande salivare"],
      answer:
        "Cavitatea orală: <b>limba</b> (mușchi striat, papile gustative), <b>dinți</b> (32 la adult). <b>Glande salivare</b>: parotidă, submandibulară, sublinguală. Salivă: ~1-1.5L/zi.",
    },
    {
      id: "spl.stomac_anat",
      triggers: ["stomac anatomie|cardia|fundus|corp gastric|pilor|antru|curbura gastrica"],
      answer:
        "Stomacul are 4 părți: <b>cardia</b>, <b>fundus</b>, <b>corp</b>, <b>pilor</b>. Curburi: mică (dreapta) și mare (stânga). Capacitate: 50ml gol → 1.5L plin.",
    },
    {
      id: "spl.intestin_subtire",
      triggers: ["intestin subtire|duoden|jejun|ileon|vilozitati"],
      answer:
        "Intestinul subțire (~6m): <b>duoden</b> (~25cm), <b>jejun</b>, <b>ileon</b>. Suprafața absorbtivă ~250m² datorită plicilor circulare + vilozităților + microvililor.",
    },
    {
      id: "spl.intestin_gros",
      triggers: ["intestin gros|colon|cec|apendice|rect|haustre|tenii"],
      answer:
        "Intestinul gros (~1.5m): <b>cec</b> + apendice → <b>colon</b> (ascendent, transvers, descendent, sigmoid) → <b>rect</b>. Caracteristici: <b>tenii</b>, <b>haustre</b>, <b>apendice epiploice</b>.",
    },
    {
      id: "spl.ficat_anat",
      triggers: ["ficat anatomie|lob hepatic|porta hepatis|vezica biliara|bila"],
      answer:
        "Ficatul are 4 lobi anatomici sau 8 segmente Couinaud. <b>Porta hepatis</b> e poarta de intrare. <b>Bila</b> e produsă de ficat, depozitată în <b>vezica biliară</b>.",
    },
    {
      id: "spl.pancreas",
      triggers: ["pancreas|insule langerhans|exocrin pancreas|endocrin pancreas"],
      answer:
        "Pancreasul are dublă funcție: <b>exocrină</b> — acini secretă enzime digestive; <b>endocrină</b> — <b>insulele Langerhans</b> cu celule alpha (glucagon), beta (insulină), delta (somatostatină).",
    },
    {
      id: "spl.respirator",
      triggers: ["sistem respirator|cai aeriene|trahee|bronh|pleura|surfactant"],
      answer:
        "Căi aeriene: nas → faringe → laringe → trahee → bronhii → bronhiole → <b>alveole</b> (~300 mil, ~70m²). Plămânii înveliți de <b>pleură</b>. <b>Surfactantul</b> reduce tensiunea superficială.",
    },
    {
      id: "spl.urinar",
      triggers: [
        "sistem urinar|rinichi anatomie|nefron|cortex renal|medula renala|ureter|vezica urinara|uretra",
      ],
      answer:
        "Sistem urinar: 2 <b>rinichi</b> (cortex + medulă; nefronul = unitate funcțională) → 2 <b>uretere</b> → <b>vezică urinară</b> → <b>uretra</b>. Rinichii filtrează ~180L/zi → ~1.5L urină.",
    },
    {
      id: "spl.reproductiv_m",
      triggers: [
        "sistem reproductiv masculin|testicul|prostata|epididim|canal deferent|spermatozoid",
      ],
      answer:
        "Masculin: <b>testicule</b> (produc spermatozoizi + testosteron) → <b>epididim</b> → <b>canal deferent</b> → <b>vezicule seminale</b> + <b>prostată</b> → uretră → penis. Spermatogeneza ~74 zile.",
    },
    {
      id: "spl.reproductiv_f",
      triggers: ["sistem reproductiv feminin|ovar|trompa|uter|vagin|ciclu menstrual|ovulatie"],
      answer:
        "Feminin: 2 <b>ovare</b> → <b>trompe uterine</b> (fertilizarea) → <b>uter</b> (corp + col) → <b>vagin</b>. Ciclu menstrual ~28 zile: faza foliculară + ovulație + faza luteală.",
    },
    {
      id: "cv.inima_anatomie",
      triggers: [
        "inima anatomie|atrium|atriu|ventricul|pericard|miocard|endocard|valva mitrala|tricuspida|valva aortica|pulmonara",
      ],
      answer:
        "Inima: <b>4 camere</b> (2 atrii, 2 ventricule). Învelișuri: <b>pericard</b>, <b>miocard</b>, <b>endocard</b>. Valve: tricuspidă (dreapta), bicuspidă/mitrală (stânga); pulmonară (VD), aortică (VS).",
    },
    {
      id: "cv.circulatie",
      triggers: ["circulatie|mica circulatie|mare circulatie|sistemica|pulmonara"],
      answer:
        "2 circulații: <b>mică/pulmonară</b> — VD → artera pulmonară → plămâni → vene pulmonare → AS; <b>mare/sistemică</b> — VS → aortă → corp → vene cave → AD.",
    },
    {
      id: "cv.aorta",
      triggers: ["aorta|arc aortic|crosa|ramuri aortei"],
      answer:
        "Aorta: <b>ascendentă</b> (artere coronare), <b>arcul aortei</b> (3 ramuri: trunchi brahio-cefalic, carotidă comună stângă, subclavia stângă), <b>descendentă toracică</b>, <b>abdominală</b> → bifurcație în 2 iliace comune la L4.",
    },
    {
      id: "cv.vene_cave",
      triggers: ["vena cava|cava superioara|cava inferioara"],
      answer:
        "<b>Vena cavă superioară</b> — adună sânge din cap, gât, membre superioare, torace. <b>Vena cavă inferioară</b> — adună sânge sub diafragm. Ambele se varsă în atriul drept.",
    },
    {
      id: "cv.coronar",
      triggers: ["artere coronare|coronariene|miocard ischemie|infarct"],
      answer:
        "2 artere coronare ies din aorta ascendentă: <b>coronara stângă</b> (descendentă anterioară + circumflexă), <b>coronara dreaptă</b>. Hrănesc miocardul.",
    },
    {
      id: "cv.cap_gat",
      triggers: ["artera carotida|carotidiana|vertebrala|jugulara|cerc willis|poligonul willis"],
      answer:
        "Capul: <b>artera carotidă comună</b> se bifurcă în carotidă internă (creier) și externă (față, gât). <b>Artera vertebrală</b> ajunge la creier prin foramenele transverse. Formează <b>poligonul lui Willis</b>. Drenaj: jugulara internă/externă.",
    },
    {
      id: "cv.limfa",
      triggers: ["sistem limfatic|limfa|ganglion|nodul limfatic|splina|timus|canal toracic"],
      answer:
        "Sistem limfatic: vase limfatice, <b>ganglioni limfatici</b>, canale principale — <b>canalul toracic</b> (3/4 corp), canalul limfatic drept. Organe limfoide: măduvă osoasă, timus, splină, ganglioni, plăci Peyer, amigdale.",
    },
    {
      id: "nerv.divizare",
      triggers: [
        "sistem nervos central|sistem nervos periferic|snc|snp|sistem vegetativ|sistem somatic",
      ],
      answer:
        "Sistem nervos: <b>SNC</b> (encefal + măduva spinării) + <b>SNP</b> (nervi cranieni + spinali + ganglioni). Funcțional: <b>somatic</b> (voluntar) + <b>vegetativ</b> (involuntar — simpatic / parasimpatic).",
    },
    {
      id: "nerv.creier_parts",
      triggers: [
        "encefal|cerebrum|cerebel|trunchi cerebral|bulb|punte|mezencefal|diencefal|talamus|hipotalamus",
      ],
      answer:
        "Encefalul: <b>cerebrum</b> (emisfere cu 4 lobi), <b>diencefal</b> (talamus + hipotalamus + epitalamus), <b>trunchi cerebral</b> (mezencefal + punte + bulb), <b>cerebel</b> (echilibru, coordonare).",
    },
    {
      id: "nerv.lobi",
      triggers: ["lob frontal|lob parietal|lob temporal|lob occipital|insula|cortex cerebral"],
      answer:
        "Lobii cerebrali: <b>frontal</b> — executive, mișcare voluntară (girul precentral), Broca; <b>parietal</b> — sensibilitate, orientare spațială; <b>temporal</b> — auz, memorie, Wernicke; <b>occipital</b> — vedere; <b>insula</b> — gust, viscerală.",
    },
    {
      id: "nerv.maduva",
      triggers: [
        "maduva spinarii|cordoane medulare|coarne medulare|conus medular|filum|cauda equina",
      ],
      answer:
        "Măduva spinării (~45cm, până la L1-L2): <b>substanță cenușie</b> centrală în formă de fluture (coarne anterioare motor, posterioare senzitiv, laterale vegetativ) + <b>substanță albă</b> periferică (cordoane). Se termină cu <b>conusul medular</b>, apoi <b>filum terminale</b> + <b>cauda equina</b>.",
    },
    {
      id: "nerv.cranieni",
      triggers: ["nervi cranieni|olfactiv|optic|trigemen|facial|nerv vag|hipoglos"],
      answer:
        "12 perechi de nervi cranieni: I olfactiv, II optic, III oculomotor, IV trohlear, V trigemen, VI abducens, VII facial, VIII vestibulo-cohlear, IX glosofaringian, X vag, XI accesor, XII hipoglos.",
    },
    {
      id: "nerv.spinali",
      triggers: ["nervi spinali|plex cervical|plex brahial|plex lombar|plex sacral|dermatoame"],
      answer:
        "31 perechi de nervi spinali: <b>8 cervicali</b>, <b>12 toracici</b>, <b>5 lombari</b>, <b>5 sacrali</b>, <b>1 coccigian</b>. Plexuri: <b>cervical</b> (C1-C4), <b>brahial</b> (C5-T1), <b>lombar</b> (L1-L4), <b>sacral</b> (L4-S4).",
    },
    {
      id: "nerv.vegetativ",
      triggers: ["simpatic|parasimpatic|noradrenalina|acetilcolina sistem"],
      answer:
        "<b>Simpatic</b> (toraco-lombar) — lupta sau fuga. Mediator: <b>noradrenalină</b>. <b>Parasimpatic</b> (cranio-sacral, mai ales nervul X vag) — odihnă/digestie. Mediator: <b>acetilcolină</b>.",
    },
    {
      id: "endo.glande",
      triggers: ["glande endocrine|hipofiza|epifiza|suprarenale|gonade"],
      answer:
        "Glande endocrine: <b>hipotalamus-hipofiza</b> (control central), <b>tiroida</b> (T3, T4, calcitonina), <b>paratiroide</b> (PTH), <b>suprarenale</b> (cortizol, aldosteron, adrenalină), <b>pancreas</b> endocrin (insulină, glucagon), <b>gonade</b>, <b>epifiza</b> (melatonină).",
    },
    {
      id: "endo.tiroida",
      triggers: ["tiroida anatomie|t3 t4|hipotiroidie|hipertiroidie|gusa"],
      answer:
        "Tiroida — în partea anterioară a gâtului, 2 lobi + istm. Produce <b>T3, T4</b> (necesită iod) → metabolismul bazal. <b>Hipotiroidism</b>: oboseală, frig. <b>Hipertiroidism</b>: tahicardie, scădere ponderală.",
    },
    {
      id: "endo.suprarenale",
      triggers: [
        "suprarenale|adrenala|cortex suprarenal|medula suprarenala|cortizol|aldosteron|adrenalina",
      ],
      answer:
        "2 glande suprarenale: <b>cortex</b> — 3 zone (glomerulosa → aldosteron, fasciculata → cortizol, reticularis → androgeni); <b>medulă</b> — adrenalină + noradrenalină (stres acut).",
    },
    {
      id: "clin.fracturi",
      triggers: ["fractura|fracturi tipuri|inchise|deschise|consolidare osoasa"],
      answer:
        "Tipuri de fracturi: <b>închisă/deschisă</b>, <b>completă/incompletă</b> (lemn verde la copii), <b>cominutivă</b>, <b>angulată/deplasată</b>, <b>spirală</b>. Vindecarea: hematom → calus fibros (2-3 săpt) → calus osos (1-2 luni) → remodelare.",
    },
    {
      id: "clin.osteoporoza",
      triggers: ["osteoporoza|scadere masa osoasa|risc fractura"],
      answer:
        "Osteoporoza — scăderea densității osoase. Frecventă la femei post-menopauză. Diagnostic: DEXA. Prevenție: Ca + vit. D + exerciții cu greutate.",
    },
    {
      id: "clin.entorsa",
      triggers: ["entorsa|ligament rupt|gradele entorsei"],
      answer:
        "Entorsa = leziune ligamentară. Grade: <b>I</b> — întindere; <b>II</b> — ruptură parțială; <b>III</b> — ruptură totală. Tratament: <b>R.I.C.E.</b> (Rest, Ice, Compression, Elevation).",
    },
    {
      id: "clin.discopatie",
      triggers: ["hernie disc|disc intervertebral|lombosciatica|sciatica"],
      answer:
        "Discul intervertebral: <b>nucleu pulpos</b> + <b>inel fibros</b>. Herniile apar când nucleul iese prin fisură și comprimă nervi. Cel mai frecvent L4-L5/L5-S1 → sciatică.",
    },
    {
      id: "clin.scolioza",
      triggers: ["scolioza|cifoza|lordoza patologica"],
      answer:
        "Deviații coloanei: <b>scolioza</b> — curbură laterală (S sau C); <b>cifoza</b> — exagerarea curburii toracale; <b>lordoza</b> — exagerarea curburii lombare.",
    },
    {
      id: "topo.directii",
      triggers: ["anterior|posterior|medial|lateral|proximal|distal|cranial|caudal|ventral|dorsal"],
      answer:
        "Termeni de orientare: <b>anterior/ventral</b> = în față; <b>posterior/dorsal</b> = în spate; <b>superior/cranial</b> = în sus; <b>inferior/caudal</b> = în jos; <b>medial</b> = aproape de linia mediană; <b>lateral</b> = îndepărtat de linia mediană; <b>proximal/distal</b>.",
    },
    {
      id: "topo.planuri",
      triggers: ["plan anatomic|sagital|frontal|coronar|transversal|axial plan"],
      answer:
        "Planuri anatomice: <b>sagital</b> (vertical, stânga/dreapta); <b>frontal/coronar</b> (vertical, anterior/posterior); <b>transversal/axial</b> (orizontal, superior/inferior).",
    },
    {
      id: "topo.cavitati",
      triggers: ["cavitate corp|toracica|abdominala|pelviana|craniana|mediastin"],
      answer:
        "Cavități majore: <b>dorsală</b> (craniană + vertebrală); <b>ventrală</b> = <b>toracică</b> (2 pleurale + mediastin) + <b>abdomino-pelviană</b> (separate prin diafragm). Membrane seroase: pleura, pericard, peritoneu.",
    },
  ];
  for (var i = 0; i < kb.length; i++) SITE_KB.push(kb[i]);
})();

(function addMoreCuriosities() {
  if (typeof CURIOZITATI === "undefined") return;
  var extra = [
    "🧬 ADN-ul dintr-o singură celulă, dacă ar fi întins, ar avea aproximativ <b>2 metri</b>. ADN-ul din tot corpul însumat ar ajunge de la Pământ la Soare de ~70 de ori.",
    "👶 Bebelușii se nasc fără rotule. Acestea apar abia între 2 și 6 ani.",
    "🩸 Sângele uman conține <b>fier</b> — la fel ca într-un cui. Hemoglobina folosește acest fier pentru a transporta oxigen.",
    "🧠 Creierul generează ~20 W de putere electrică, suficient să alimenteze un bec LED slab.",
    "🦠 Microbiomul intestinal conține <b>de 10 ori mai multe celule</b> decât întreg corpul uman.",
    "👁️ Ochiul uman poate distinge ~10 milioane de culori și aproximativ 500 de nuanțe de gri.",
    "🦴 Coccisul (osul cozii) este vestigial — rămășița cozii la strămoșii umani.",
    "💪 Inima e singurul mușchi care nu obosește niciodată — bate ~3 miliarde de ori într-o viață.",
    "🦷 Smalțul dentar e singurul țesut din corp care, odată distrus, NU se mai regenerează — celulele care îl produc dispar după erupția dintelui.",
    "🦵 Pielea de pe tălpi e cea mai groasă (~4 mm), iar cea de pe pleoape cea mai subțire (~0.5 mm).",
    "👃 Nasul poate distinge ~1 trilion de mirosuri diferite (estimare recentă, 2014).",
    "😴 Petrecem ~1/3 din viață dormind — ~25 de ani pentru o speranță de viață de 75.",
    "🫀 Inima continuă să bată chiar și scoasă din corp, dacă primește oxigen — datorită nodulului sinoatrial autonom.",
    "🩸 Plasma sanguină constituie ~55% din volumul sângelui și e ~92% apă.",
    "🦴 Falanga distală a degetului mare de la picior poate suporta de 8 ori greutatea corpului în timpul săriturii.",
    "🧠 Corpul produce un nou strat de neuroni în <b>hipocampul</b> pe tot parcursul vieții — neurogeneza adultă.",
    "👂 Urechea internă conține lichid și sare structuri minuscule (otoliti) — la fel cum funcționează nivela cu bulă din construcții.",
    "🤧 Strănutul are o viteză de ~160 km/h și împrăștie picături la peste 6 metri.",
    "🩺 Pulsul de 70 bpm = ~36 milioane bătăi pe an = peste 2.5 miliarde pentru o viață medie.",
    "👅 Limba este formată din 8 mușchi diferiți care lucrează în mod coordonat — singurul mușchi prins de ambele capete.",
    "🦴 La femei, oasele pelvisului sunt mai late și mai puțin curbate decât la bărbați — adaptare evolutivă pentru naștere.",
    "🧬 Oamenii și cimpanzeii împărtășesc ~98.8% din ADN, iar oamenii și șoarecii ~85%.",
    "💧 Corpul adult conține ~60% apă — creierul ~75%, oasele ~22%, dinții doar ~10%.",
    '🦴 În osul compact, structura tip "fagure" (osteoanele) îi conferă rezistență la compresie comparabilă cu betonul armat.',
    "🩸 Globulele roșii circulă prin corp ~120 zile, apoi sunt reciclate în splină. În acest timp parcurg ~480 km.",
    "🧠 Hipotalamusul, deși cântărește ~4g, controlează temperatura, foamea, setea, ciclul somn-veghe și sistemul endocrin.",
    "👁️ Pupila se dilată cu până la 45% când privim ceva ce ne place — chiar și inconștient.",
    "🦴 Mâna are 27 oase, 27 articulații, 34 mușchi (majoritatea în antebraț) și peste 100 ligamente și tendoane.",
    "🤝 Stresul cronic încetinește vindecarea rănilor cu până la 60% prin scăderea răspunsului imunitar.",
    "🧬 Genomul uman are ~3 miliarde perechi de baze, dar doar ~1.5% codifică proteine — restul are alte funcții reglatoare.",
    "🦵 Mersul activează simultan peste 200 de mușchi — un proces neurologic foarte complex pe care îl învățăm prima dată în primii 1-2 ani.",
    "👂 Putem auzi sunete cu frecvențe între 20 Hz și 20.000 Hz — limita superioară scade cu vârsta (presbiacuzie).",
    '💧 Lacrimile emoționale conțin hormoni de stres (prolactină, ACTH) pe care lacrimile bazale nu le au — plânsul "scurge" stresul.',
    "🦷 Saliva produsă într-o viață: ~25.000 litri — suficient pentru o piscină mică.",
    "🧠 Creierul nu simte durere — nu are receptori dureroși. Durerea de cap vine de la vasele și mușchii din jur.",
    "🦴 Cea mai rapidă vindecare osoasă: claviculă la copii — câteva săptămâni. Cea mai lentă: scafoidul în mână.",
    "❄️ Brown fat (țesutul adipos brun) generează căldură prin arderea calorică — bebelușii au mai mult, contribuie la termoreglare.",
    "👁️ Globii oculari se mișcă chiar și în somnul REM — de aceea se numește Rapid Eye Movement.",
    '🩸 Tipul de sânge AB+ e considerat „acceptor universal", iar O- „donator universal".',
    "🦠 În gură există ~700 specii diferite de bacterii — un ecosistem mai complex decât în multe medii naturale.",
    "🧠 Memoria de scurtă durată poate reține ~7 elemente simultan (regula 7±2 a lui George Miller, 1956).",
    "🦴 Cele mai dense oase din corp: cele temporale și pietroasele craniului — protejează urechea internă.",
    "🤰 Placenta produce, în timpul sarcinii, mai mulți hormoni decât oricare altă glandă umană — într-un singur trimestru.",
    '🧬 Telomerii (capetele cromozomilor) se scurtează la fiecare diviziune — reprezintă un "ceas biologic" al îmbătrânirii celulare.',
    "🦵 Tendonul lui Ahile e cel mai gros și puternic tendon din corp — poate suporta forțe de ~12 ori greutatea corpului la alergare.",
    '💉 Sistemul imunitar are memorie — după o infecție sau vaccin, păstrează "amintirea" și răspunde mai rapid la o expunere viitoare.',
    "👃 Pierderea simțului olfactiv (anosmie) poate fi un semn timpuriu al unor boli neurologice, inclusiv Parkinson și Alzheimer.",
    "🧊 Corpul poate supraviețui ~3 minute fără oxigen, ~3 zile fără apă, ~3 săptămâni fără mâncare (regula celor 3).",
    "🦴 Oasele continuă să se remodeleze toată viața — celulele osteoclaste resorb țesutul vechi iar osteoblastele depun unul nou.",
    "🌡️ Temperatura normală variază pe parcursul zilei — e mai mică dimineața (~36.1°C) și mai mare seara (~37.2°C), ritm circadian.",
    "🧠 Conexiunile sinaptice din creier sunt mai numeroase decât stelele din Galaxia noastră — peste 100 trilioane de sinapse.",
  ];
  for (var i = 0; i < extra.length; i++) CURIOZITATI.push(extra[i]);
})();

(function quizModeBodyClass() {
  function setModeClass(mode) {
    document.body.classList.remove("qmode-visual", "qmode-knowledge", "qmode-duel");
    if (mode === "visual") document.body.classList.add("qmode-visual");
    else if (mode === "knowledge") document.body.classList.add("qmode-knowledge");
    else if (mode === "duel") document.body.classList.add("qmode-duel");
  }
  var orig = window.pickQuizMode;
  if (typeof orig === "function") {
    window.pickQuizMode = function (mode) {
      setModeClass(mode);
      return orig.apply(this, arguments);
    };
  }
  var origExit = window.exitQuizMode;
  if (typeof origExit === "function") {
    window.exitQuizMode = function () {
      document.body.classList.remove("qmode-visual", "qmode-knowledge", "qmode-duel");
      return origExit.apply(this, arguments);
    };
  }
})();

(function quizResizeFix() {
  function triggerResize() {
    if (typeof viewer === "undefined" || !viewer) return;
    if (typeof camera === "undefined" || !camera) return;
    if (typeof renderer === "undefined" || !renderer) return;
    var vw = viewer.clientWidth || 1,
      vh = viewer.clientHeight || 1;
    camera.aspect = vw / vh;
    camera.updateProjectionMatrix();
    renderer.setSize(vw, vh, false);
  }
  var origPick = window.pickQuizMode;
  if (typeof origPick === "function") {
    window.pickQuizMode = function (mode) {
      var r = origPick.apply(this, arguments);
      setTimeout(triggerResize, 80);
      setTimeout(triggerResize, 400);
      setTimeout(triggerResize, 800);
      return r;
    };
  }
  var origExit = window.exitQuizMode;
  if (typeof origExit === "function") {
    window.exitQuizMode = function () {
      var r = origExit.apply(this, arguments);
      setTimeout(triggerResize, 80);
      return r;
    };
  }
  if ("orientation" in window) {
    window.addEventListener("orientationchange", function () {
      setTimeout(triggerResize, 300);
    });
  }
})();

(function unregisterStaleSW() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .getRegistrations()
      .then(function (regs) {
        regs.forEach(function (r) {
          r.unregister();
        });
      })
      .catch(function () {});
  }
})();

(function muscularSystem() {
  var initialized = false;
  var MU = {
    scene: null,
    camera: null,
    renderer: null,
    controls: null,
    raycaster: null,
    mouse: null,
    model: null,
    meshes: [],
    hovered: null,
    selected: null,
    hoverColor: new THREE.Color(0xff6b9d),
    selectColor: new THREE.Color(0x29b6f6),
    origColor: new THREE.Color(0xd97d7d),
    box: new THREE.Box3(),
    loaded: false,
  };

  function prettifyName(raw) {
    if (!raw) return "";
    var s = raw;
    var lang = typeof CUR_LANG !== "undefined" && CUR_LANG === "en" ? "en" : "ro";
    var L = lang === "en" ? " (left)" : " (stânga)";
    var R = lang === "en" ? " (right)" : " (dreapta)";
    s = s.replace(/^Muscular_/i, "").replace(/_Muscular$/i, "");
    s = s.replace(/_(Lowerlimb|Upperlimb|Trunk|Head-neck|Head|Neck)_muscles_\d+$/i, "");
    s = s.replace(/_Membrane_mtl_\d+$/i, "");
    s = s.replace(/_\d{3,}$/, "");
    s = s.replace(/\s+L_\d+$/, L);
    s = s.replace(/\s+R_\d+$/, R);
    s = s.replace(/\s+L$/, L);
    s = s.replace(/\s+R$/, R);
    s = s.replace(/_/g, " ");
    s = s.replace(/\s+/g, " ").trim();
    s = s.charAt(0).toUpperCase() + s.slice(1);
    return s;
  }

  function isMuscleMesh(obj) {
    if (!obj || !obj.name) return false;
    var n = obj.name;
    if (n.indexOf("_gltfNode_") === 0) return false;
    if (/_Membrane_mtl_\d+$/i.test(n)) return false;
    if (/_(Lowerlimb|Upperlimb|Trunk|Head-neck|Head|Neck)_muscles_\d+$/i.test(n)) return true;
    if (/^muscular_/i.test(n) || /_muscular$/i.test(n)) return true;
    return false;
  }

  function muscleGroupFromName(n) {
    if (!n) return "Alte";
    if (/_Lowerlimb_muscles_/i.test(n)) return "Membre inferioare";
    if (/_Upperlimb_muscles_/i.test(n)) return "Membre superioare";
    if (/_Trunk_muscles_/i.test(n)) return "Trunchi";
    if (/_Head-neck_muscles_/i.test(n) || /_Head_muscles_/i.test(n) || /_Neck_muscles_/i.test(n))
      return "Cap si gat";
    var ln = n.toLowerCase();
    if (
      /auricularis|orbicularis|frontalis|nasalis|masseter|temporalis|mylohyoideus|sternocleidomastoideus|splenius|capitis|scaleni|platysma/.test(
        ln
      )
    )
      return "Cap si gat";
    if (
      /biceps_brachii|triceps_brachii|brachialis|brachioradialis|supinator|pronator|flexor_carpi|extensor_carpi|deltoid|pectoralis|trapezius|latissimus|rhomboideus|supraspinatus|infraspinatus|subscapularis|teres/.test(
        ln
      )
    )
      return "Membre superioare";
    if (
      /quadriceps|sartorius|gracilis|adductor|biceps_femoris|semitendinosus|semimembranosus|gluteus|gastrocnemius|soleus|tibialis|peroneus|plantaris|popliteus/.test(
        ln
      )
    )
      return "Membre inferioare";
    return "Trunchi";
  }

  function init() {
    if (initialized) return;
    var canvas = document.getElementById("mu-canvas3d");
    var viewerEl = document.getElementById("mu-viewer");
    if (!canvas || !viewerEl) return;
    initialized = true;

    MU.scene = new THREE.Scene();
    MU.scene.background = new THREE.Color(0x0d1117);
    var amb = new THREE.AmbientLight(0xffffff, 0.55);
    MU.scene.add(amb);
    var key = new THREE.DirectionalLight(0xffffff, 0.85);
    key.position.set(2, 4, 3);
    MU.scene.add(key);
    var fill = new THREE.DirectionalLight(0xa78bfa, 0.35);
    fill.position.set(-3, 2, -2);
    MU.scene.add(fill);
    var rim = new THREE.DirectionalLight(0xec4899, 0.25);
    rim.position.set(0, 2, -4);
    MU.scene.add(rim);

    var vw = viewerEl.clientWidth || window.innerWidth,
      vh = viewerEl.clientHeight || window.innerHeight;
    MU.camera = new THREE.PerspectiveCamera(45, vw / vh, 0.01, 100);
    MU.camera.position.set(0, 1, 2.5);

    MU.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
    MU.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    MU.renderer.setSize(vw, vh);
    if (THREE.sRGBEncoding !== undefined) MU.renderer.outputEncoding = THREE.sRGBEncoding;
    if (THREE.SRGBColorSpace !== undefined) MU.renderer.outputColorSpace = THREE.SRGBColorSpace;

    MU.controls = new THREE.OrbitControls(MU.camera, canvas);
    MU.controls.enableDamping = true;
    MU.controls.dampingFactor = 0.08;
    MU.controls.minDistance = 0.15;
    MU.controls.maxDistance = 5;
    MU.controls.target.set(0, 0.85, 0);

    MU.raycaster = new THREE.Raycaster();
    MU.mouse = new THREE.Vector2();

    function onResize() {
      var w = viewerEl.clientWidth || 1,
        h = viewerEl.clientHeight || 1;
      MU.camera.aspect = w / h;
      MU.camera.updateProjectionMatrix();

      MU.renderer.setSize(w, h);
    }
    window.addEventListener("resize", onResize);
    window.__muResize = onResize;

    function quizLocked() {
      return (
        typeof QUIZ !== "undefined" &&
        QUIZ.active &&
        QUIZ.system === "muscular" &&
        QUIZ.mode === "visual"
      );
    }
    canvas.addEventListener("pointermove", function (e) {
      if (!MU.loaded) return;
      if (quizLocked()) {
        canvas.style.cursor = "default";
        return;
      }
      var r = canvas.getBoundingClientRect();
      MU.mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      MU.mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      MU.raycaster.setFromCamera(MU.mouse, MU.camera);
      var hits = MU.raycaster.intersectObjects(MU.meshes, false);
      if (hits.length > 0) {
        canvas.style.cursor = "pointer";
        var m = hits[0].object;
        if (m !== MU.hovered) {
          if (MU.hovered && MU.hovered !== MU.selected) clearHover(MU.hovered);
          MU.hovered = m;
          if (m !== MU.selected) applyHover(m);
        }
      } else {
        canvas.style.cursor = "default";
        if (MU.hovered && MU.hovered !== MU.selected) clearHover(MU.hovered);
        MU.hovered = null;
      }
    });

    canvas.addEventListener("click", function (e) {
      if (!MU.loaded) return;
      if (quizLocked()) return;
      MU.__lastClickXY = { x: e.clientX, y: e.clientY };
      MU.raycaster.setFromCamera(MU.mouse, MU.camera);
      var hits = MU.raycaster.intersectObjects(MU.meshes, false);
      if (hits.length === 0) {
        clearSelection();
        return;
      }
      var m = hits[0].object;
      selectMuscle(m);
    });

    function animate() {
      requestAnimationFrame(animate);
      if (window.__bxRenderGate && !window.__bxRenderGate(MU.renderer.domElement)) return;
      MU.controls.update();
      MU.renderer.render(MU.scene, MU.camera);
    }
    animate();

    loadMuscles();
  }
  window.__muInit = init;

  function hlColor(mesh, col) {
    if (!mesh) return;
    if (!mesh.userData._muOrigMaterial) mesh.userData._muOrigMaterial = mesh.material;
    var src = mesh.userData._muOrigMaterial;
    var tinted = src.clone();
    tinted.color = new THREE.Color(0xffffff).lerp(col, 0.85);
    if (tinted.emissive) {
      tinted.emissive.copy(col).multiplyScalar(0.55);
    } else {
      tinted.emissive = col.clone().multiplyScalar(0.55);
    }
    tinted.needsUpdate = true;
    mesh.material = tinted;
  }
  function restoreColor(mesh) {
    if (!mesh) return;
    if (mesh.userData._muOrigMaterial) {
      mesh.material = mesh.userData._muOrigMaterial;
      mesh.userData._muOrigMaterial = null;
    }
  }
  function applyHover(mesh) {
    if (!mesh || !mesh.material) return;
    if (mesh.userData._muOrigMatHover) return;
    mesh.userData._muOrigMatHover = mesh.material;
    var src = mesh.material;
    var hov = src.clone();
    if (hov.emissive) hov.emissive.copy(MU.selectColor).multiplyScalar(0.3);
    hov.needsUpdate = true;
    mesh.material = hov;
  }
  function clearHover(mesh) {
    if (!mesh) return;
    if (mesh.userData._muOrigMatHover) {
      mesh.material = mesh.userData._muOrigMatHover;
      mesh.userData._muOrigMatHover = null;
    }
  }
  window.__muClearHover = clearHover;
  function clearSelection() {
    if (MU.selected) {
      restoreColor(MU.selected);
      MU.selected = null;
    }
    var ph = document.getElementById("mu-ip-ph");
    if (ph) ph.style.display = "flex";
    var ct = document.getElementById("mu-info-ct");
    if (ct) ct.style.display = "none";
    var ov = document.getElementById("muNameOverlay");
    if (ov) ov.classList.remove("visible");
  }
  function selectMuscle(mesh) {
    if (MU.selected) restoreColor(MU.selected);
    if (mesh) clearHover(mesh);
    MU.selected = mesh;
    hlColor(mesh, MU.selectColor);
    if (mesh && typeof trackEvent === "function") {
      var clean = String(mesh.name || "").replace(
        /_(Lowerlimb|Upperlimb|Trunk|Head-neck|Head|Neck)_muscles_\d+$/i,
        ""
      );
      try {
        trackEvent("viewMuscle", clean);
      } catch (e) {}
    }
    var name = prettifyName(mesh.name);
    var data =
      typeof window.__findMuscleData === "function" ? window.__findMuscleData(mesh.name) : null;
    var lang = typeof CUR_LANG !== "undefined" && CUR_LANG === "en" ? "en" : "ro";
    var displayName = data && data[lang] ? data[lang] : data && data.ro ? data.ro : name;
    var catMapRo = {
      cap: "Cap si gat",
      trunchi: "Trunchi",
      membreSup: "Membre superioare",
      membreInf: "Membre inferioare",
    };
    var catMapEn = {
      cap: "Head & Neck",
      trunchi: "Trunk",
      membreSup: "Upper limbs",
      membreInf: "Lower limbs",
    };
    var catMap = lang === "en" ? catMapEn : catMapRo;
    var sysName = lang === "en" ? "Muscular system" : "Sistem muscular";
    var category = data ? sysName + " - " + (catMap[data.group] || "General") : sysName;
    var n = document.getElementById("muBnoName");
    if (n) n.textContent = displayName;
    var c = document.getElementById("muBnoCat");
    if (c) c.textContent = category;
    var ov = document.getElementById("muNameOverlay");
    if (ov) {
      ov.classList.add("visible");
      var pad = 12;
      var ow = ov.offsetWidth || 220,
        oh = ov.offsetHeight || 60;
      var cx = (MU.__lastClickXY && MU.__lastClickXY.x) || window.innerWidth / 2;
      var cy = (MU.__lastClickXY && MU.__lastClickXY.y) || window.innerHeight / 2;
      var x = cx,
        y = cy;
      if (x + ow + pad > window.innerWidth) x = x - ow - pad;
      else x = x + pad;
      if (y + oh + pad > window.innerHeight) y = y - oh - pad;
      else y = y + pad;
      if (x < 4) x = 4;
      if (y < 4) y = 4;
      ov.style.left = x + "px";
      ov.style.top = y + "px";
    }
    var ph = document.getElementById("mu-ip-ph");
    if (ph) ph.style.display = "none";
    var ct = document.getElementById("mu-info-ct");
    if (ct) {
      ct.style.display = "block";
      ct.innerHTML =
        typeof window.__muscleInfoHTML === "function"
          ? window.__muscleInfoHTML(mesh)
          : '<div class="info-section"><h4>Muschi</h4><div class="info-tag">' +
            name +
            "</div></div>";
    }
    var title = document.getElementById("mu-info-title");
    if (title) title.textContent = displayName;
    var label = document.getElementById("mu-cur-label");
    if (label) label.textContent = displayName;
  }
  window.__muPretty = prettifyName;
  window.__muSelectMuscle = selectMuscle;

  function loadMuscles() {
    var loadText = document.getElementById("mu-load-text");
    var loadFill = document.getElementById("mu-load-fill");
    var loadErr = document.getElementById("mu-load-error");
    var loader = document.getElementById("mu-loader");
    if (loadText) loadText.textContent = "Se incarca modelul muscular...";
    if (loadFill) loadFill.style.width = "5%";

    var gltf = new THREE.GLTFLoader();
    if (typeof THREE.DRACOLoader === "function") {
      var draco = new THREE.DRACOLoader();
      draco.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");
      draco.setDecoderConfig({ type: "js" });
      gltf.setDRACOLoader(draco);
    }
    var MU_URL = location.pathname.replace(/\/[^\/]*$/, "/") + "models/muscles.glb";
    gltf.load(
      MU_URL,
      function (g) {
        if (loadFill) loadFill.style.width = "95%";
        MU.model = g.scene;
        MU.scene.add(MU.model);
        MU.box.setFromObject(MU.model);
        var size = new THREE.Vector3();
        MU.box.getSize(size);
        var center = new THREE.Vector3();
        MU.box.getCenter(center);
        var sc = 1.8 / Math.max(size.y, 0.0001);
        MU.model.scale.setScalar(sc);
        MU.model.position.set(-center.x * sc, -MU.box.min.y * sc, -center.z * sc);
        MU.box.setFromObject(MU.model);
        var fc = new THREE.Vector3();
        MU.box.getCenter(fc);
        MU.controls.target.set(fc.x, fc.y, fc.z);
        MU.camera.position.set(fc.x, fc.y, fc.z + 2.5);

        var texLoader = new THREE.TextureLoader();
        var texBase = location.pathname.replace(/\/[^\/]*$/, "/") + "textures/";
        function makeTex(file) {
          var t = texLoader.load(texBase + file);
          t.flipY = false;
          t.wrapS = THREE.ClampToEdgeWrapping;
          t.wrapT = THREE.ClampToEdgeWrapping;
          t.colorSpace = THREE.SRGBColorSpace || t.colorSpace;
          if (t.encoding !== undefined && THREE.sRGBEncoding !== undefined)
            t.encoding = THREE.sRGBEncoding;
          t.anisotropy = Math.min(MU.renderer.capabilities.getMaxAnisotropy(), 8);
          return t;
        }
        MU.textures = {
          lowerlimb: makeTex("muscle_lowerlimb.jpg"),
          upperlimb: makeTex("muscle_upperlimb.jpg"),
          trunk: makeTex("muscle_trunk.jpg"),
          headneck: makeTex("muscle_headneck.jpg"),
        };
        function texForName(n) {
          if (/_Lowerlimb_muscles_/i.test(n)) return MU.textures.lowerlimb;
          if (/_Upperlimb_muscles_/i.test(n)) return MU.textures.upperlimb;
          if (/_Trunk_muscles_/i.test(n)) return MU.textures.trunk;
          if (/_Head-neck_muscles_/i.test(n)) return MU.textures.headneck;
          return null;
        }
        MU.meshes = [];
        MU.model.traverse(function (o) {
          if (!o.isMesh) return;
          if (!isMuscleMesh(o)) {
            o.visible = false;
            return;
          }
          var tex = texForName(o.name);
          var nm;
          if (tex) {
            nm = new THREE.MeshStandardMaterial({
              map: tex,
              roughness: 0.55,
              metalness: 0.05,
              emissive: new THREE.Color(0),
            });
          } else {
            nm = new THREE.MeshStandardMaterial({
              color: MU.origColor.clone(),
              roughness: 0.6,
              metalness: 0.05,
              emissive: new THREE.Color(0),
            });
          }
          o.material = nm;
          o.userData._muOrig = tex ? null : MU.origColor.clone();
          o.userData._muTex = tex || null;
          MU.meshes.push(o);
        });
        console.log("[Muscular] meshes loaded:", MU.meshes.length, "textures bound");

        var muCount = document.getElementById("mu-count");
        if (muCount) muCount.textContent = MU.meshes.length;
        window.__MUSCLE_MESHES = MU.meshes;
        window.__MU_REF = MU;
        window.__muscleGroupForMesh = muscleGroupFromName;
        buildMuscleList();
        MU.loaded = true;
        MU.renderer.render(MU.scene, MU.camera);
        setTimeout(function () {
          var cv = document.getElementById("mu-canvas3d");
          if (cv) cv.classList.add("mu-revealed");
          if (loader) loader.classList.add("hidden");
        }, 250);
        if (typeof window.__muResize === "function") window.__muResize();
        if (typeof window.__muWireSearch === "function") window.__muWireSearch();
        if (typeof window.__muWireNav === "function") window.__muWireNav();
        if (typeof window.__muApplyNav === "function") window.__muApplyNav("all");
      },
      function (xhr) {
        if (xhr && xhr.lengthComputable) {
          var pct = Math.round((xhr.loaded / xhr.total) * 100);
          if (loadFill) loadFill.style.width = pct + "%";
          if (loadText) loadText.textContent = "Se incarca muschii... " + pct + "%";
        }
      },
      function (err) {
        console.warn("[Muscular] No muscles.glb yet:", (err && err.message) || err);
        if (loadText) loadText.textContent = "Sistem muscular — modele 3D in constructie";
        if (loadErr) loadErr.style.display = "block";
        if (loadFill) loadFill.style.width = "0%";
      }
    );
  }

  window.__muRebuildList = function () {
    buildMuscleList();
  };
  function buildMuscleList() {
    var list = document.getElementById("mu-list");
    if (!list) return;
    var lang = typeof CUR_LANG !== "undefined" && CUR_LANG === "en" ? "en" : "ro";
    var groups = {};
    var seenInGroup = {};
    MU.meshes.forEach(function (m) {
      var grp = muscleGroupFromName(m.name);
      var data =
        typeof window.__findMuscleData === "function" ? window.__findMuscleData(m.name) : null;
      var pretty = (data && data[lang]) || (data && data.ro) || prettifyName(m.name);
      seenInGroup[grp] = seenInGroup[grp] || {};
      if (seenInGroup[grp][pretty]) return;
      seenInGroup[grp][pretty] = true;
      groups[grp] = groups[grp] || [];
      groups[grp].push({ mesh: m, pretty: pretty });
    });
    var grpLabels =
      lang === "en"
        ? {
            "Cap si gat": "Head & Neck",
            Trunchi: "Trunk",
            "Membre superioare": "Upper limbs",
            "Membre inferioare": "Lower limbs",
            Alte: "Other",
          }
        : {};
    var order = ["Cap si gat", "Trunchi", "Membre superioare", "Membre inferioare", "Alte"];
    var html = "";
    order.forEach(function (g) {
      if (!groups[g] || !groups[g].length) return;
      groups[g].sort(function (a, b) {
        return a.pretty.localeCompare(b.pretty);
      });
      var label = grpLabels[g] || g;
      html +=
        '<div class="bone-group open"><div class="group-header" onclick="this.parentElement.classList.toggle(\'open\')"><span class="group-arrow">&#9654;</span><span class="group-icon">&#128170;</span><span class="group-name">' +
        label +
        " (" +
        groups[g].length +
        ')</span></div><ul class="group-list">';
      groups[g].forEach(function (it) {
        html +=
          '<li class="bone-item" data-mu-name="' +
          (it.mesh.name || "") +
          '"><span class="bone-label-text">' +
          it.pretty +
          "</span></li>";
      });
      html += "</ul></div>";
    });
    list.innerHTML = html;
    list.querySelectorAll(".bone-item").forEach(function (li) {
      li.addEventListener("click", function () {
        var key = li.getAttribute("data-mu-name");
        var found = null;
        for (var i = 0; i < MU.meshes.length; i++) {
          if (MU.meshes[i].name === key) {
            found = MU.meshes[i];
            break;
          }
        }
        if (found) {
          selectMuscle(found);
          var b = new THREE.Box3().setFromObject(found);
          var c = new THREE.Vector3();
          b.getCenter(c);
          var s = new THREE.Vector3();
          b.getSize(s);
          var maxDim = Math.max(s.x, s.y, s.z);
          var fov = ((MU.camera.fov || 45) * Math.PI) / 180;
          var aspect = MU.camera.aspect || 1;
          var dist = maxDim / 2 / Math.tan(fov / 2);
          if (aspect < 1) dist = dist / aspect;
          dist = Math.max(dist * 2.2, 0.45);
          if (typeof window.__muAnimCam === "function") {
            window.__muAnimCam(
              [c.x + dist * 0.12, c.y + dist * 0.08, c.z + dist],
              [c.x, c.y, c.z],
              650
            );
          } else {
            MU.controls.target.set(c.x, c.y, c.z);
            MU.camera.position.set(c.x + dist * 0.12, c.y + dist * 0.08, c.z + dist);
          }
        }
        list.querySelectorAll(".bone-item.selected").forEach(function (e) {
          e.classList.remove("selected");
        });
        li.classList.add("selected");
      });
    });
  }

  function watchEnterMuscular() {
    document.addEventListener("click", function (e) {
      if (initialized) return;
      var card = e.target.closest(".system-card");
      if (
        card &&
        card.getAttribute("onclick") &&
        card.getAttribute("onclick").indexOf("muscular") >= 0
      ) {
        setTimeout(init, 150);
      }
    });
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", watchEnterMuscular);
  else watchEnterMuscular();
})();

(function muscularFeatures() {
  function norm(s) {
    if (!s) return "";
    return String(s)
      .toLowerCase()
      .replace(/\(.*?\)/g, "")
      .replace(/[\s_\.\-]+/g, "")
      .replace(/[ăâîșțáéíóú]/g, function (c) {
        return (
          { ă: "a", â: "a", î: "i", ș: "s", ț: "t", á: "a", é: "e", í: "i", ó: "o", ú: "u" }[c] || c
        );
      })
      .trim();
  }
  var MUSCLE_DATA = {
    sternocleidomastoid: {
      ro: "Sternocleidomastoidian",
      la: "M. sternocleidomastoideus",
      group: "cap",
      origin: "Manubriul sternal + treimea medială a claviculei",
      insert: "Procesul mastoid al temporalului",
      action: "Înclină capul lateral, rotește capul contralateral, flectează gâtul",
      nerv: "Nervul accesor (XI) + plex cervical (C2-C3)",
      descr:
        "Mușchi superficial al gâtului, vizibil sub piele. Formează triunghiurile anterior și posterior ale gâtului.",
    },
    masseter: {
      ro: "Maseter",
      la: "M. masseter",
      group: "cap",
      origin: "Arcul zigomatic",
      insert: "Unghi mandibular + ramul mandibulei",
      action: "Ridică mandibula (închide gura) — cel mai puternic mușchi masticator",
      nerv: "Nervul mandibular (V3, din trigemen)",
      descr:
        "Mușchi masticator gros, palpabil pe obraz când strângi dinții. Forța de mușcătură depinde de el.",
    },
    temporalis: {
      ro: "Temporal",
      la: "M. temporalis",
      group: "cap",
      origin: "Fosa temporală a craniului",
      insert: "Procesul coronoid + ramul mandibular",
      action: "Ridică mandibula, retrage mandibula",
      nerv: "Nervul mandibular (V3)",
      descr:
        "Mușchi masticator în formă de evantai, sub osul temporal. Vizibil mișcându-se la masticație.",
    },
    orbicularisoculi: {
      ro: "Orbicular al ochiului",
      la: "M. orbicularis oculi",
      group: "cap",
      origin: "Marginea medială a orbitei",
      insert: "Pleoapele și pielea din jurul ochiului",
      action: "Închide pleoapele (clipit, strângere ochi)",
      nerv: "Nervul facial (VII)",
      descr: "Mușchi mimic care înconjoară ochiul. Are 3 părți: orbitală, palpebrală, lacrimală.",
    },
    orbicularisoris: {
      ro: "Orbicular al gurii",
      la: "M. orbicularis oris",
      group: "cap",
      origin: "Mucoasa buzelor + mușchii adiacenți",
      insert: "Pielea și mucoasa buzelor",
      action: "Închide gura, proeminează buzele (fluierat, sărut)",
      nerv: "Nervul facial (VII)",
      descr: "Sfincter circular al gurii, esențial pentru articulare și mimică.",
    },
    zygomaticus: {
      ro: "Zigomatic",
      la: "M. zygomaticus major",
      group: "cap",
      origin: "Osul zigomatic",
      insert: "Comisura buzelor",
      action: "Ridică colțurile gurii (zâmbet)",
      nerv: "Nervul facial (VII)",
      descr: "Mușchiul zâmbetului. Acționează automat când râdem.",
    },
    frontalis: {
      ro: "Frontal (occipitofrontal)",
      la: "M. frontalis (occipitofrontalis)",
      group: "cap",
      origin: "Aponevroza epicraniană",
      insert: "Pielea sprâncenelor",
      action: "Ridică sprâncenele, încrețește fruntea (surpriză, atenție)",
      nerv: "Nervul facial (VII)",
      descr:
        "Mușchi mimic al frunții. Parte a complexului occipitofrontal care acoperă bolta craniană.",
    },
    platysma: {
      ro: "Platisma",
      la: "M. platysma",
      group: "cap",
      origin: "Fascia pectorală și deltoidiană",
      insert: "Marginea inferioară a mandibulei + pielea gâtului",
      action: "Coboară mandibula, întinde pielea gâtului",
      nerv: "Nervul facial (VII)",
      descr:
        "Mușchi subțire ca o foaie sub pielea gâtului. Vizibil când strângi maxilarul cu efort.",
    },
    spleniuscapitis: {
      ro: "Splenius al capului",
      la: "M. splenius capitis",
      group: "cap",
      origin: "Ligamentul nucal + procesele spinoase C7-T3",
      insert: "Linia nucală superioară + procesul mastoid",
      action: "Extinde și rotește capul de aceeași parte",
      nerv: "Ramurile dorsale ale nervilor cervicali",
      descr: "Strat superficial al mușchilor posteriori ai gâtului.",
    },
    spleniuscervicis: {
      ro: "Splenius al gâtului",
      la: "M. splenius cervicis",
      group: "cap",
      origin: "Procesele spinoase T3-T6",
      insert: "Procesele transverse C1-C3",
      action: "Extinde și rotește gâtul",
      nerv: "Ramurile dorsale ale nervilor cervicali",
      descr: "Sub splenius capitis, ajută la rotirea coloanei cervicale.",
    },
    mylohyoid: {
      ro: "Milohioidian",
      la: "M. mylohyoideus",
      group: "cap",
      origin: "Linia milohioidiană a mandibulei",
      insert: "Osul hioid + rafeul median",
      action: "Ridică planșeul gurii și hioidul (deglutiție)",
      nerv: "Nervul milohioidian (V3)",
      descr: "Formează planșeul gurii. Esențial pentru înghițire.",
    },
    occipitofrontalis: {
      ro: "Occipitofrontal (epicranian)",
      la: "M. occipitofrontalis",
      group: "cap",
      origin: "Linia nucală supremă (parte occipitală)",
      insert: "Aponevroza epicraniană",
      action: "Ridică sprâncenele și trage scalpul înapoi",
      nerv: "Nervul facial (VII)",
      descr:
        "Mușchi pereche cu 2 ventri (frontal + occipital) uniți prin galea aponeurotică. Mișcă scalpul.",
    },
    pterygoid: {
      ro: "Pterigoidian",
      la: "M. pterygoideus",
      group: "cap",
      origin: "Apofiza pterigoidă (sfenoid)",
      insert: "Mandibula (col sau ram)",
      action: "Lateral: deschide gura, mișcări laterale | Medial: ridică mandibula",
      nerv: "Nervul mandibular (V3)",
      descr: "Două perechi de mușchi profunzi ai masticației (lateral și medial).",
    },
    digastric: {
      ro: "Digastric",
      la: "M. digastricus",
      group: "cap",
      origin: "Procesul mastoid (post.) + fosa digastrică a mandibulei (ant.)",
      insert: "Osul hioid prin tendon intermediar",
      action: "Coboară mandibula, ridică hioidul",
      nerv: "V3 (anterior) + VII (posterior)",
      descr: "Mușchi cu 2 ventri uniți prin tendon intermediar. Important în deglutiție.",
    },
    auricularis: {
      ro: "Auricular",
      la: "M. auricularis",
      group: "cap",
      origin: "Aponevroza epicraniană / fascia temporală",
      insert: "Pavilionul auricular",
      action: "Mișcă urechea (vestigial la majoritatea oamenilor)",
      nerv: "Nervul facial (VII)",
      descr: "Trei mușchi: anterior, superior, posterior. La mulți oameni — nefuncționali.",
    },
    trapezius: {
      ro: "Trapez",
      la: "M. trapezius",
      group: "trunchi",
      origin: "Linia nucală superioară + procesele spinoase C7-T12",
      insert: "Treimea laterală a claviculei + spina și acromionul scapulei",
      action: "Ridică, retrage și rotește scapula; extinde capul",
      nerv: "Nervul accesor (XI) + C3-C4",
      descr:
        "Mușchi mare romboidal pe partea superioară a spatelui. Acoperă regiunea cervicotoracică.",
    },
    latissimusdorsi: {
      ro: "Latissim dorsal",
      la: "M. latissimus dorsi",
      group: "membreSup",
      origin: "Procesele spinoase T6-L5 + creasta iliacă",
      insert: "Tuberculul mic al humerusului (creasta tuberculului mic)",
      action: "Aducție, extensie și rotație internă a brațului",
      nerv: "Nervul toracodorsal (C6-C8)",
      descr: "Cel mai mare mușchi al spatelui. Pull-up depinde de el.",
    },
    deltoid: {
      ro: "Deltoid",
      la: "M. deltoideus",
      group: "membreSup",
      origin: "Treimea laterală a claviculei + acromion + spina scapulei",
      insert: "Tuberozitatea deltoidiană a humerusului",
      action: "Abducție umăr (mij.); flexie (ant.); extensie (post.)",
      nerv: "Nervul axilar (C5-C6)",
      descr: "Mușchiul rotund al umărului. 3 fascicule: anterior, mijlociu, posterior.",
    },
    pectoralis: {
      ro: "Pectoral mare",
      la: "M. pectoralis major",
      group: "trunchi",
      origin: "Claviculă (med.), stern, cartilaje costale 2-6",
      insert: "Creasta tuberculului mare al humerusului",
      action: "Aducție, flexie, rotație internă a brațului",
      nerv: "Nervii pectorali medial și lateral (C5-T1)",
      descr: "Mușchiul pieptului. Push-up depinde de el.",
    },
    bicepsbrachii: {
      ro: "Biceps brahial",
      la: "M. biceps brachii",
      group: "membreSup",
      origin: "Capul lung: tuberculul supraglenoidian; Capul scurt: procesul coracoid",
      insert: "Tuberozitatea radială + aponevroza bicipitală",
      action: "Flexează cotul, supinează antebrațul",
      nerv: "Nervul musculocutanat (C5-C6)",
      descr: 'Mușchi cu 2 capete pe partea anterioară a brațului. „Mușchiul de forță" celebru.',
    },
    tricepsbrachii: {
      ro: "Triceps brahial",
      la: "M. triceps brachii",
      group: "membreSup",
      origin: "Capul lung: tuberculul infraglenoidian; Lateral și medial: humerus",
      insert: "Olecranul ulnei",
      action: "Extensia cotului (capul lung extinde și umărul)",
      nerv: "Nervul radial (C6-C8)",
      descr: "Mușchi cu 3 capete pe partea posterioară a brațului. Antagonist al bicepsului.",
    },
    brachialis: {
      ro: "Brahial",
      la: "M. brachialis",
      group: "membreSup",
      origin: "Partea distală a humerusului",
      insert: "Tuberozitatea ulnei",
      action: "Flexează cotul (cel mai puternic flexor)",
      nerv: "Nervul musculocutanat (C5-C6)",
      descr: "Sub biceps. Generator principal de forță în flexia cotului.",
    },
    brachioradialis: {
      ro: "Brahioradial",
      la: "M. brachioradialis",
      group: "membreSup",
      origin: "Creasta supracondiliană laterală a humerusului",
      insert: "Procesul stiloid al radiusului",
      action: "Flexează cotul, asistă pronație/supinație",
      nerv: "Nervul radial (C5-C6)",
      descr: 'Mușchiul „lobnic" — vizibil când flectezi cotul cu antebrațul în poziție neutră.',
    },
    supraspinatus: {
      ro: "Supraspinos",
      la: "M. supraspinatus",
      group: "membreSup",
      origin: "Fosa supraspinoasă a scapulei",
      insert: "Tuberculul mare al humerusului",
      action: "Abducție umăr (primii 15°)",
      nerv: "Nervul suprascapular (C5-C6)",
      descr: "Parte a coifului rotatorilor. Cea mai frecventă cauză de durere de umăr.",
    },
    infraspinatus: {
      ro: "Infraspinos",
      la: "M. infraspinatus",
      group: "membreSup",
      origin: "Fosa infraspinoasă a scapulei",
      insert: "Tuberculul mare al humerusului",
      action: "Rotație externă a umărului",
      nerv: "Nervul suprascapular (C5-C6)",
      descr: "Parte a coifului rotatorilor (4 mușchi: SITS).",
    },
    teres: {
      ro: "Rotund (mic / mare)",
      la: "M. teres (minor / major)",
      group: "membreSup",
      origin: "Marginea laterală a scapulei",
      insert: "Tuberculul mare / mic al humerusului",
      action: "Mic: rotație ext.; Mare: aducție și rotație int.",
      nerv: "Axilar (T. minor); subscapular inf. (T. major)",
      descr: "Teres minor face parte din coiful rotatorilor; teres major nu.",
    },
    subscapularis: {
      ro: "Subscapular",
      la: "M. subscapularis",
      group: "membreSup",
      origin: "Fosa subscapulară (fața anterioară a scapulei)",
      insert: "Tuberculul mic al humerusului",
      action: "Rotație internă a umărului",
      nerv: "Nervii subscapulari (C5-C6)",
      descr: "Cel mai mare mușchi al coifului rotatorilor. Singurul anterior.",
    },
    rectusabdominis: {
      ro: "Drept abdominal",
      la: "M. rectus abdominis",
      group: "trunchi",
      origin: "Pubis (creasta + simfiza)",
      insert: "Cartilajele costale 5-7 + procesul xifoid",
      action: "Flexează trunchiul, comprimă viscerele",
      nerv: "Nervii intercostali T6-T12",
      descr: 'Mușchiul „pătrățelelor" (six-pack). Împărțit de inserții tendinoase.',
    },
    externaloblique: {
      ro: "Oblic extern abdominal",
      la: "M. obliquus externus abdominis",
      group: "trunchi",
      origin: "Fața externă a coastelor 5-12",
      insert: "Creasta iliacă + linia albă + tubercul pubian",
      action: "Flectează și rotește trunchiul contralateral",
      nerv: "Nervii intercostali T7-T12",
      descr:
        'Cel mai superficial mușchi al peretelui abdominal lateral. Fibrele merg „băgând mâinile în buzunar".',
    },
    internaloblique: {
      ro: "Oblic intern abdominal",
      la: "M. obliquus internus abdominis",
      group: "trunchi",
      origin: "Creasta iliacă + ligamentul inghinal",
      insert: "Coastele 10-12 + linia albă",
      action: "Flectează și rotește trunchiul ipsilateral",
      nerv: "Nervii intercostali T7-T12 + L1",
      descr: "Sub oblicul extern. Fibrele perpendiculare pe acesta.",
    },
    transversusabdominis: {
      ro: "Transvers abdominal",
      la: "M. transversus abdominis",
      group: "trunchi",
      origin: "Cartilaje costale 7-12 + fascia toracolombară + creasta iliacă",
      insert: "Linia albă + tubercul pubian",
      action: "Comprimă viscerele (stabilizator profund)",
      nerv: "T7-T12 + L1",
      descr: 'Cel mai profund mușchi al peretelui abdominal. „Centura" naturală.',
    },
    psoasmajor: {
      ro: "Psoas mare",
      la: "M. psoas major",
      group: "membreInf",
      origin: "Corpurile vertebrale T12-L4",
      insert: "Trohanterul mic al femurului",
      action: "Flexează coapsa la trunchi (sau invers — ridică trunchiul)",
      nerv: "Plex lombar (L1-L3)",
      descr: "Mușchi profund, principalul flexor al șoldului. Cu iliacul formează iliopsoasul.",
    },
    iliacus: {
      ro: "Iliac",
      la: "M. iliacus",
      group: "membreInf",
      origin: "Fosa iliacă",
      insert: "Trohanter mic (cu psoasul)",
      action: "Flexie coapsă",
      nerv: "Nervul femural (L2-L4)",
      descr: "Triunghiular, în fosa iliacă. Cu psoas → iliopsoas (flexor principal șold).",
    },
    quadratuslumborum: {
      ro: "Pătratul lombar",
      la: "M. quadratus lumborum",
      group: "trunchi",
      origin: "Creasta iliacă",
      insert: "Coasta 12 + procesele transverse L1-L4",
      action: "Înclinare laterală a coloanei lombare",
      nerv: "T12 + L1-L4",
      descr: "Mușchi profund al peretelui posterior abdominal. Important pentru postură.",
    },
    gluteusmaximus: {
      ro: "Gluteus mare (fesier mare)",
      la: "M. gluteus maximus",
      group: "membreInf",
      origin: "Aripa iliacă + sacrum + ligamentul sacrotuberos",
      insert: "Tractul iliotibial + tuberozitatea gluteală",
      action: "Extensie șold (urcat scări, sărit), rotație externă",
      nerv: "Nervul gluteal inferior (L5-S2)",
      descr: "Cel mai voluminos mușchi al corpului. Definește forma fesieră.",
    },
    gluteusmedius: {
      ro: "Gluteus mijlociu",
      la: "M. gluteus medius",
      group: "membreInf",
      origin: "Aripa iliacă (între liniile gluteale ant. și post.)",
      insert: "Trohanterul mare al femurului",
      action: "Abducție șold, stabilizează pelvisul la mers",
      nerv: "Nervul gluteal superior (L4-S1)",
      descr: 'Stabilizator critic. Slăbiciunea sa produce mers șchiopătat („mers Trendelenburg").',
    },
    quadricepsfemoris: {
      ro: "Cvadriceps femural",
      la: "M. quadriceps femoris",
      group: "membreInf",
      origin: "4 capete: spina iliacă antero-inferioară (drept fem.) + femur (vasti)",
      insert: "Tuberozitatea tibială prin tendon patelar",
      action: "Extensie genunchi; drept femural — flectează și șoldul",
      nerv: "Nervul femural (L2-L4)",
      descr:
        "4 mușchi: drept femural, vast medial, vast lateral, vast intermediar. Cel mai mare grup muscular.",
    },
    sartorius: {
      ro: "Croitor (sartorius)",
      la: "M. sartorius",
      group: "membreInf",
      origin: "Spina iliacă antero-superioară",
      insert: "Tibia (laba de gâscă)",
      action: "Flectează, abduce și rotește extern coapsa; flectează genunchiul",
      nerv: "Nervul femural (L2-L3)",
      descr: "Cel mai LUNG mușchi din corp. Diagonală pe față coapsă.",
    },
    gracilis: {
      ro: "Gracilis",
      la: "M. gracilis",
      group: "membreInf",
      origin: "Ramura inferioară a pubisului",
      insert: "Tibia (laba de gâscă)",
      action: "Aducție coapsă, flexie genunchi",
      nerv: "Nervul obturator (L2-L4)",
      descr: "Cel mai subțire mușchi adductor al coapsei. Vizibil sub piele pe interior.",
    },
    adductorlongus: {
      ro: "Adductor lung",
      la: "M. adductor longus",
      group: "membreInf",
      origin: "Pubis (lângă simfiză)",
      insert: "Linia aspră femurală",
      action: "Aducție și flexie coapsă",
      nerv: "Nervul obturator (L2-L4)",
      descr: "Cel mai anterior din grupa adductorilor. Frecvent leziuni la fotbaliști.",
    },
    bicepsfemoris: {
      ro: "Biceps femural",
      la: "M. biceps femoris",
      group: "membreInf",
      origin: "Tuberozitatea ischiatică (cap lung) + linia aspră (cap scurt)",
      insert: "Capul fibular",
      action: "Flectează genunchiul, extinde șoldul, rotește lateral gamba",
      nerv: "Nervul tibial + peroneal comun (L5-S2)",
      descr: 'Parte a grupului ischio-crural („hamstrings"). Cel mai lateral.',
    },
    semitendinosus: {
      ro: "Semitendinos",
      la: "M. semitendinosus",
      group: "membreInf",
      origin: "Tuberozitatea ischiatică",
      insert: "Tibia (laba de gâscă)",
      action: "Flexie genunchi + extensie șold",
      nerv: "Nervul tibial (L5-S2)",
      descr: "Parte a ischio-crural. Tendon lung. Mijloc între biceps fem. și semimembranos.",
    },
    semimembranosus: {
      ro: "Semimembranos",
      la: "M. semimembranosus",
      group: "membreInf",
      origin: "Tuberozitatea ischiatică",
      insert: "Condilul medial al tibiei",
      action: "Flexie genunchi + extensie șold",
      nerv: "Nervul tibial (L5-S2)",
      descr: "Cel mai medial din ischio-crural. Forma plată (membranos).",
    },
    gastrocnemius: {
      ro: "Gastrocnemian",
      la: "M. gastrocnemius",
      group: "membreInf",
      origin: "Condilii femurului (medial și lateral)",
      insert: "Calcaneu prin tendonul lui Ahile",
      action: "Flexie plantară picior + flexie genunchi",
      nerv: "Nervul tibial (S1-S2)",
      descr: 'Mușchi cu 2 capete pe partea posterioară a gambei. Definește forma „pulpei". Sare.',
    },
    soleus: {
      ro: "Solear",
      la: "M. soleus",
      group: "membreInf",
      origin: "Capul fibular + linia soleară a tibiei",
      insert: "Calcaneu prin tendonul lui Ahile",
      action: "Flexie plantară picior (la mers obișnuit)",
      nerv: "Nervul tibial (S1-S2)",
      descr: "Sub gastrocnemian. Mușchi cheie pentru stat în picioare și mers.",
    },
    tibialisanterior: {
      ro: "Tibial anterior",
      la: "M. tibialis anterior",
      group: "membreInf",
      origin: "Condilul lateral + corpul tibiei",
      insert: "Cuneiformul medial + baza metatarsianului I",
      action: "Flexie dorsală picior + inversiune",
      nerv: "Nervul peroneal profund (L4-L5)",
      descr: "Vizibil sub piele pe partea anterioară a gambei. Ridică vârful piciorului la mers.",
    },
    peroneus: {
      ro: "Peroneal (fibular)",
      la: "M. peroneus (fibularis)",
      group: "membreInf",
      origin: "Fibula (lateral)",
      insert: "Cuneiformul medial / metatarsianul V",
      action: "Eversie picior + flexie plantară",
      nerv: "Nervul peroneal superficial (L5-S1)",
      descr: "2 mușchi: lung și scurt. Lateral pe gambă. Stabilizează glezna.",
    },
  };

  function findMuscleData(rawName) {
    if (!rawName) return null;
    var key = norm(
      rawName
        .replace(/_(Lowerlimb|Upperlimb|Trunk|Head-neck|Head|Neck)_muscles_\d+$/i, "")
        .replace(/_\d{3,}$/, "")
        .replace(/\sL$|\sR$|\sL_\d+$|\sR_\d+$/i, "")
    );
    if (!key) return null;
    if (MUSCLE_DATA[key]) return MUSCLE_DATA[key];
    for (var k in MUSCLE_DATA) {
      if (key.indexOf(k) >= 0 || k.indexOf(key) >= 0) return MUSCLE_DATA[k];
    }
    return null;
  }
  window.__findMuscleData = findMuscleData;
  window.__muscleDataIndex = MUSCLE_DATA;

  function buildEnrichedInfo(mesh) {
    var raw = mesh.name || "";
    var pretty = typeof window.__muPretty === "function" ? window.__muPretty(raw) : raw;
    var data = findMuscleData(raw);
    var lang = typeof CUR_LANG !== "undefined" && CUR_LANG === "en" ? "en" : "ro";
    var LBL = {
      ro: {
        name: "Denumire",
        scientific: "Denumire stiintifica",
        descr: "Descriere",
        origin: "Origine",
        insert: "Insertie",
        action: "Actiune",
        nerv: "Inervatie",
        muscle: "Muschi",
        id: "Identificator",
        note: "Nota",
        noData:
          "Acest muschi este in baza de date 3D dar inca nu are descriere detaliata. Datele anatomice complete se vor adauga progresiv.",
      },
      en: {
        name: "Name",
        scientific: "Scientific name",
        descr: "Description",
        origin: "Origin",
        insert: "Insertion",
        action: "Action",
        nerv: "Innervation",
        muscle: "Muscle",
        id: "Identifier",
        note: "Note",
        noData:
          "This muscle is in the 3D database but does not yet have a detailed description. Full anatomical data will be added progressively.",
      },
    };
    var L = LBL[lang];
    if (!data) {
      return (
        '<div class="info-section"><h4>' +
        L.muscle +
        '</h4><div class="info-tag" style="background:rgba(33,150,243,.15);border-color:rgba(33,150,243,.35);color:#60a5fa">' +
        pretty +
        '</div></div><div class="info-section"><h4>' +
        L.note +
        "</h4><p>" +
        L.noData +
        "</p></div>"
      );
    }
    var displayName = data[lang] || data.ro;
    var html = "";
    html +=
      '<div class="info-section"><h4>' +
      L.name +
      '</h4><div class="info-tag" style="background:rgba(33,150,243,.15);border-color:rgba(33,150,243,.35);color:#60a5fa">' +
      displayName +
      "</div></div>";
    html +=
      '<div class="info-section"><h4>' +
      L.scientific +
      '</h4><p style="font-style:italic;color:#cbd5e1">' +
      data.la +
      "</p></div>";
    var descr = lang === "en" && data.descr_en ? data.descr_en : data.descr;
    var origin = lang === "en" && data.origin_en ? data.origin_en : data.origin;
    var insert = lang === "en" && data.insert_en ? data.insert_en : data.insert;
    var action = lang === "en" && data.action_en ? data.action_en : data.action;
    var nerv = lang === "en" && data.nerv_en ? data.nerv_en : data.nerv;
    if (descr)
      html += '<div class="info-section"><h4>' + L.descr + "</h4><p>" + descr + "</p></div>";
    if (origin)
      html += '<div class="info-section"><h4>' + L.origin + "</h4><p>" + origin + "</p></div>";
    if (insert)
      html += '<div class="info-section"><h4>' + L.insert + "</h4><p>" + insert + "</p></div>";
    if (action)
      html += '<div class="info-section"><h4>' + L.action + "</h4><p>" + action + "</p></div>";
    if (nerv) html += '<div class="info-section"><h4>' + L.nerv + "</h4><p>" + nerv + "</p></div>";
    return html;
  }
  window.__muscleInfoHTML = buildEnrichedInfo;
  window.__MUSCLE_DATA = MUSCLE_DATA;

  function wireSearch() {
    var input = document.getElementById("mu-search");
    var list = document.getElementById("mu-list");
    var countEl = document.getElementById("mu-search-count");
    if (!input || !list) return;
    input.addEventListener("input", function () {
      var q = norm(input.value);
      var items = list.querySelectorAll(".bone-item");
      var groups = list.querySelectorAll(".bone-group");
      if (!q) {
        items.forEach(function (it) {
          it.style.display = "";
          it.classList.remove("search-match");
        });
        groups.forEach(function (g) {
          g.style.display = "";
        });
        if (countEl) {
          countEl.textContent = "";
          countEl.classList.remove("visible");
        }
        return;
      }
      var matches = 0;
      items.forEach(function (it) {
        var t = norm(it.textContent);
        if (t.indexOf(q) >= 0) {
          it.style.display = "";
          it.classList.add("search-match");
          matches++;
        } else {
          it.style.display = "none";
          it.classList.remove("search-match");
        }
      });
      groups.forEach(function (g) {
        var anyVisible = Array.prototype.some.call(g.querySelectorAll(".bone-item"), function (li) {
          return li.style.display !== "none";
        });
        g.style.display = anyVisible ? "" : "none";
        if (anyVisible) g.classList.add("open");
      });
      if (countEl) {
        countEl.textContent = matches + " rezultate";
        countEl.classList.add("visible");
      }
    });
    input.addEventListener("keydown", function (e) {
      if (e.key === "Enter") {
        var first = list.querySelector(".bone-item.search-match");
        if (first) first.click();
      }
    });
  }
  window.__muWireSearch = wireSearch;

  function applyNavSection(section) {
    var tabs = document.querySelectorAll("#navTabsMuscle .nav-tab");
    tabs.forEach(function (t) {
      t.classList.toggle("active", t.getAttribute("data-mu-section") === section);
    });
    if (typeof window.__muFilterSection === "function") window.__muFilterSection(section);
  }
  window.__muApplyNav = applyNavSection;

  function wireNavTabs() {
    var tabs = document.querySelectorAll("#navTabsMuscle .nav-tab");
    tabs.forEach(function (t) {
      t.addEventListener("click", function () {
        var sec = t.getAttribute("data-mu-section");
        applyNavSection(sec);
      });
    });
  }
  window.__muWireNav = wireNavTabs;
})();

(function muFilterAndDefaults() {
  function getMU() {
    return window.__MU_REF || null;
  }
  window.__muFilterSection = function (section) {
    var list = document.getElementById("mu-list");
    var groups = list ? list.querySelectorAll(".bone-group") : [];
    var meshes = [];
    var canvas = document.getElementById("mu-canvas3d");
    var scene = null;
    if (canvas && canvas.__mu_meshes) {
      meshes = canvas.__mu_meshes;
    }
    if (window.__MUSCLE_MESHES) meshes = window.__MUSCLE_MESHES;
    var sectionMap = {
      cap: "Cap si gat",
      trunchi: "Trunchi",
      membre: "Membre superioare",
      inferioare: "Membre inferioare",
      all: null,
    };
    var target = sectionMap[section];
    if (list) {
      groups.forEach(function (g) {
        var name = (g.querySelector(".group-name") || {}).textContent || "";
        var shouldShow = !target || name.indexOf(target) === 0;
        g.style.display = shouldShow ? "" : "none";
        if (shouldShow) g.classList.add("open");
      });
    }
    meshes.forEach(function (m) {
      if (!m || !m.userData) return;
      var grp = window.__muscleGroupForMesh ? window.__muscleGroupForMesh(m.name) : null;
      if (!target) {
        m.visible = true;
        return;
      }
      m.visible = grp === target;
    });
  };
})();

(function extendMuscleData() {
  if (!window.__muscleDataIndex) return;
  var D = window.__muscleDataIndex;
  var more = {
    occipitofrontalis: {
      ro: "Occipito-frontal (epicranian)",
      la: "M. occipitofrontalis",
      group: "cap",
      origin: "Bolta craniană (galea aponeurotică)",
      insert: "Pielea sprâncenelor (frontal) / linia nucală sup. (occipital)",
      action: "Ridică sprâncenele, încrețește fruntea",
      nerv: "N. facial (VII)",
      descr: "Mușchi mimic cu 2 ventri uniți prin galea aponeurotică.",
    },
    corrugatorsupercilii: {
      ro: "Corugator al sprâncenei",
      la: "M. corrugator supercilii",
      group: "cap",
      origin: "Arcada superciliară medială",
      insert: "Pielea sprâncenei",
      action: "Încruntă fruntea (concentrare, supărare)",
      nerv: "N. facial (VII)",
      descr: "Mușchiul mimic al încruntării.",
    },
    procerus: {
      ro: "Piramidal nazal",
      la: "M. procerus",
      group: "cap",
      origin: "Osul nazal",
      insert: "Pielea dintre sprâncene",
      action: "Coboară pielea dintre sprâncene",
      nerv: "N. facial (VII)",
      descr: 'Mușchi mimic; produce „cuta supărării".',
    },
    nasalis: {
      ro: "Nazal",
      la: "M. nasalis",
      group: "cap",
      origin: "Maxilar (lângă incisivii laterali și caninul)",
      insert: "Cartilajul alar + aponevroza dorsală a nasului",
      action: "Comprimă (transvers) sau dilată (alar) nările",
      nerv: "N. facial (VII)",
      descr: "2 părți: transversă (comprimă) + alară (dilată) — folosit la respirația forțată.",
    },
    levatorlabiisuperioris: {
      ro: "Ridicătorul buzei superioare",
      la: "M. levator labii superioris",
      group: "cap",
      origin: "Maxilar (deasupra găurii infraorbitare)",
      insert: "Pielea buzei superioare",
      action: "Ridică buza superioară",
      nerv: "N. facial (VII)",
      descr: "Mușchi mimic; expresia de disprețuire / dezgust.",
    },
    depressorangulioris: {
      ro: "Depresor al colțului gurii",
      la: "M. depressor anguli oris",
      group: "cap",
      origin: "Linia oblică a mandibulei",
      insert: "Comisura buzelor",
      action: "Trage comisura gurii în jos",
      nerv: "N. facial (VII)",
      descr: "Mușchi mimic; expresia de tristețe.",
    },
    mentalis: {
      ro: "Mentalis (al bărbiei)",
      la: "M. mentalis",
      group: "cap",
      origin: "Mandibula (fosa incisivă)",
      insert: "Pielea bărbiei",
      action: "Ridică și proiectează în afară bărbia (bosumflare)",
      nerv: "N. facial (VII)",
      descr: "Singurul mușchi care ridică buza inferioară.",
    },
    buccinator: {
      ro: "Buccinator",
      la: "M. buccinator",
      group: "cap",
      origin: "Procesul alveolar maxilar + mandibulă + rafeu pterigomandibular",
      insert: "Comisura buzelor (orbicular oris)",
      action: "Comprimă obrazul (suflat, fluierat, masticație)",
      nerv: "N. facial (VII)",
      descr: "Constituie peretele obrazului. Esențial pentru a împinge bolul alimentar.",
    },
    risorius: {
      ro: "Risorius",
      la: "M. risorius",
      group: "cap",
      origin: "Fascia parotidiană",
      insert: "Comisura buzelor",
      action: "Trage comisura gurii lateral (râs forțat)",
      nerv: "N. facial (VII)",
      descr: 'Mușchi inconsistent (poate lipsi). Râsul „de complezență".',
    },
    depressorlabiiinferioris: {
      ro: "Depresor al buzei inferioare",
      la: "M. depressor labii inferioris",
      group: "cap",
      origin: "Linia oblică a mandibulei",
      insert: "Pielea buzei inferioare",
      action: "Trage buza inferioară în jos și lateral",
      nerv: "N. facial (VII)",
      descr: "Mușchi mimic; expresia de dezgust pronunțat.",
    },
    pterygoidlateral: {
      ro: "Pterigoidian lateral",
      la: "M. pterygoideus lateralis",
      group: "cap",
      origin: "Aripa mare a sfenoidului + lama laterală a pterigoidei",
      insert: "Procesul condilian + discul articulației temporo-mandibulare",
      action: "Deschide gura, propulsează mandibula, mișcări de masticație laterale",
      nerv: "N. mandibular (V3)",
      descr: "Singurul mușchi masticator care DESCHIDE gura.",
    },
    pterygoidmedial: {
      ro: "Pterigoidian medial",
      la: "M. pterygoideus medialis",
      group: "cap",
      origin: "Fosa pterigoidiană + tuberozitatea maxilară",
      insert: "Fața medială a unghiului mandibulei",
      action: "Ridică mandibula, mișcări laterale",
      nerv: "N. mandibular (V3)",
      descr: 'Sinergic cu maseterul; formează „chinga" mandibulară.',
    },
    geniohyoid: {
      ro: "Geniohioidian",
      la: "M. geniohyoideus",
      group: "cap",
      origin: "Spina mentală a mandibulei",
      insert: "Corpul hioidului",
      action: "Ridică hioidul anterior, deprimă mandibula (deglutiție, vorbire)",
      nerv: "C1 prin n. hipoglos (XII)",
      descr: "Mușchi suprahioidian; planșeul gurii.",
    },
    stylohyoid: {
      ro: "Stilohioidian",
      la: "M. stylohyoideus",
      group: "cap",
      origin: "Procesul stiloid",
      insert: "Corpul hioidului",
      action: "Ridică și retrage hioidul (deglutiție)",
      nerv: "N. facial (VII)",
      descr: "Subțire, perforat de tendonul digastric.",
    },
    sternohyoid: {
      ro: "Sternohioidian",
      la: "M. sternohyoideus",
      group: "cap",
      origin: "Manubriu sternal + articulația sternoclaviculară",
      insert: "Corpul hioidului",
      action: "Coboară hioidul după deglutiție",
      nerv: "Ansa cervicală (C1-C3)",
      descr: "Mușchi infrahioidian; flanchează laringe.",
    },
    omohyoid: {
      ro: "Omohioidian",
      la: "M. omohyoideus",
      group: "cap",
      origin: "Marginea superioară a scapulei",
      insert: "Corpul hioidului",
      action: "Coboară și fixează hioidul în deglutiție și inspir",
      nerv: "Ansa cervicală (C1-C3)",
      descr: "Mușchi infrahioidian cu 2 ventri + tendon intermediar.",
    },
    sternothyroid: {
      ro: "Sternotiroidian",
      la: "M. sternothyroideus",
      group: "cap",
      origin: "Manubriu sternal",
      insert: "Cartilaj tiroid",
      action: "Coboară laringele",
      nerv: "Ansa cervicală (C1-C3)",
      descr: "Mușchi infrahioidian profund.",
    },
    thyrohyoid: {
      ro: "Tirohioidian",
      la: "M. thyrohyoideus",
      group: "cap",
      origin: "Cartilaj tiroid",
      insert: "Corpul hioidului",
      action: "Coboară hioid sau ridică laringe",
      nerv: "C1 prin n. hipoglos (XII)",
      descr: "Continuă sternotiroidul către hioid.",
    },
    scalenusanterior: {
      ro: "Scalen anterior",
      la: "M. scalenus anterior",
      group: "cap",
      origin: "Procesele transverse C3-C6",
      insert: "Tuberculul lui Lisfranc (coasta I)",
      action: "Flexie laterală gât; ridică coasta I (inspir forțat)",
      nerv: "C4-C6 (ramuri ventrale)",
      descr: "Reper chirurgical; trec lângă plex brahial și artera subclavie.",
    },
    scalenusmedius: {
      ro: "Scalen mijlociu",
      la: "M. scalenus medius",
      group: "cap",
      origin: "Procesele transverse C2-C7",
      insert: "Coasta I",
      action: "Flexie laterală gât; ridică coasta I",
      nerv: "C3-C8 (ramuri ventrale)",
      descr: "Cel mai mare scalen; lateralul plexului brahial.",
    },
    scalenusposterior: {
      ro: "Scalen posterior",
      la: "M. scalenus posterior",
      group: "cap",
      origin: "Procesele transverse C5-C7",
      insert: "Coasta a II-a",
      action: "Flexie laterală gât; ridică coasta a II-a",
      nerv: "C7-C8",
      descr: "Cel mai mic scalen.",
    },
    longuscolli: {
      ro: "Long al gâtului",
      la: "M. longus colli",
      group: "cap",
      origin: "Corpurile vertebrelor C3-T3",
      insert: "Corpurile vertebrelor C1-C3",
      action: "Flexează gâtul + flexie laterală",
      nerv: "C2-C6 (ramuri ventrale)",
      descr: "Mușchi profund anterior al gâtului.",
    },
    longuscapitis: {
      ro: "Long al capului",
      la: "M. longus capitis",
      group: "cap",
      origin: "Procesele transverse C3-C6",
      insert: "Os occipital (parte bazilară)",
      action: "Flexează capul",
      nerv: "C1-C3 (ramuri ventrale)",
      descr: "Mușchi profund anterior; sub longus colli.",
    },
    rectuscapitisanterior: {
      ro: "Drept anterior al capului",
      la: "M. rectus capitis anterior",
      group: "cap",
      origin: "Masele laterale C1",
      insert: "Os occipital (bazilar)",
      action: "Flexează capul",
      nerv: "C1-C2",
      descr: "Mușchi suboccipital scurt.",
    },
    rhomboideusmajor: {
      ro: "Romboid mare",
      la: "M. rhomboideus major",
      group: "membreSup",
      origin: "Procesele spinoase T2-T5",
      insert: "Marginea medială a scapulei (sub spinasc.)",
      action: "Aducție, ridică și rotește scapula",
      nerv: "N. dorsal scapular (C5)",
      descr: "Sub trapez; trage scapulele spre coloană.",
    },
    rhomboideusminor: {
      ro: "Romboid mic",
      la: "M. rhomboideus minor",
      group: "membreSup",
      origin: "Ligamentul nucal + procesele spinoase C7-T1",
      insert: "Marginea medială a scapulei (la nivelul spinei sc.)",
      action: "Aducție și fixarea scapulei",
      nerv: "N. dorsal scapular (C5)",
      descr: "Mai mic și mai sus decât romboid major.",
    },
    levatorscapulae: {
      ro: "Ridicător al scapulei",
      la: "M. levator scapulae",
      group: "membreSup",
      origin: "Procesele transverse C1-C4",
      insert: "Unghiul superior al scapulei",
      action: "Ridică scapula (cu trapez); rotește gâtul",
      nerv: "N. dorsal scapular (C5) + C3-C4",
      descr: "Important în tensiunea musculară gât-umăr la stres.",
    },
    serratusanterior: {
      ro: "Dințat anterior",
      la: "M. serratus anterior",
      group: "membreSup",
      origin: "Coastele 1-9 (fețe laterale)",
      insert: "Marginea medială a scapulei (față anterioară)",
      action: "Protracție scapulă (împingere); rotire superioară (ridicare braț peste cap)",
      nerv: "N. toracic lung (C5-C7)",
      descr: '„Mușchiul boxerului". Paralizia dă scapula alata.',
    },
    serratusposteriorsuperior: {
      ro: "Dințat posterior superior",
      la: "M. serratus posterior superior",
      group: "trunchi",
      origin: "Ligament nucal + procesele spinoase C7-T3",
      insert: "Coastele 2-5",
      action: "Ridică coastele (inspir)",
      nerv: "Nervii intercostali T1-T4",
      descr: "Mușchi respirator accesor.",
    },
    serratusposteriorinferior: {
      ro: "Dințat posterior inferior",
      la: "M. serratus posterior inferior",
      group: "trunchi",
      origin: "Procesele spinoase T11-L2",
      insert: "Coastele 9-12",
      action: "Coboară coastele (expir forțat)",
      nerv: "Nervii intercostali T9-T12",
      descr: "Mușchi respirator accesor.",
    },
    coracobrachialis: {
      ro: "Coracobrahial",
      la: "M. coracobrachialis",
      group: "membreSup",
      origin: "Procesul coracoid al scapulei",
      insert: "Fața medială a humerusului",
      action: "Flexie + aducție umăr",
      nerv: "N. musculocutanat (C5-C7)",
      descr: "Mușchi mic, sub biceps. Reper chirurgical.",
    },
    anconeus: {
      ro: "Anconeu",
      la: "M. anconeus",
      group: "membreSup",
      origin: "Epicondilul lateral al humerusului",
      insert: "Olecranul ulnei",
      action: "Asistă tricepsul în extensia cotului",
      nerv: "N. radial (C7-C8)",
      descr: "Mușchi mic triunghiular, vizibil la suprafața cotului posterolateral.",
    },
    pronatorteres: {
      ro: "Pronator rotund",
      la: "M. pronator teres",
      group: "membreSup",
      origin: "Epicondilul medial al humerusului + procesul coronoid ulnei",
      insert: "Fața laterală a radiusului (mijloc)",
      action: "Pronație antebraț; flexie cot",
      nerv: "N. median (C6-C7)",
      descr: "Format de 2 capete; trece între ele n. median.",
    },
    pronatorquadratus: {
      ro: "Pronator pătrat",
      la: "M. pronator quadratus",
      group: "membreSup",
      origin: "Pătrimea distală a ulnei",
      insert: "Pătrimea distală a radiusului",
      action: "Pronație antebraț (principalul)",
      nerv: "N. interosos anterior (median, C8-T1)",
      descr: "Pătratic, profund la încheietură. Pronator primar.",
    },
    supinator: {
      ro: "Supinator",
      la: "M. supinator",
      group: "membreSup",
      origin: "Epicondil lateral + creasta supinatorie ulna",
      insert: "Treimea proximală a radiusului",
      action: "Supinație antebraț",
      nerv: "Ramura profundă a n. radial (C5-C6)",
      descr: "Înconjoară gâtul radiusului; perforat de n. radial.",
    },
    flexorcarpiradialis: {
      ro: "Flexor radial al carpului",
      la: "M. flexor carpi radialis",
      group: "membreSup",
      origin: "Epicondil medial humerus",
      insert: "Baza metacarpianului II",
      action: "Flexie + abducție pumn",
      nerv: "N. median (C6-C7)",
      descr: "Tendon palpabil pe partea radială a pumnului.",
    },
    flexorcarpiulnaris: {
      ro: "Flexor ulnar al carpului",
      la: "M. flexor carpi ulnaris",
      group: "membreSup",
      origin: "Epicondil medial + olecran ulna",
      insert: "Pisiform + ham. cu hamul + bază metacarp V",
      action: "Flexie + aducție pumn",
      nerv: "N. ulnar (C8-T1)",
      descr: "Cel mai medial flexor al pumnului.",
    },
    palmarislongus: {
      ro: "Palmar lung",
      la: "M. palmaris longus",
      group: "membreSup",
      origin: "Epicondil medial humerus",
      insert: "Aponevroza palmară",
      action: "Asistă flexia pumnului; tensionează aponevroza",
      nerv: "N. median (C7-T1)",
      descr: "Inconsistent — lipsește la ~15% din oameni. Recoltat ca grefon tendinos.",
    },
    flexordigitorum: {
      ro: "Flexor al degetelor",
      la: "M. flexor digitorum superficialis / profundus",
      group: "membreSup",
      origin: "Epicondil medial / ulna și radius",
      insert: "Bază falangă mijlocie (superf.) / distală (profund)",
      action: "Flexie degete II-V + pumn",
      nerv: "Median (superf.) / median + ulnar (profund)",
      descr: "2 mușchi etajați; profundul ajunge la falanga distală.",
    },
    extensorcarpiradialis: {
      ro: "Extensor radial al carpului",
      la: "M. extensor carpi radialis longus / brevis",
      group: "membreSup",
      origin: "Creasta supracondiliană / epicondil lateral",
      insert: "Bază metacarp II / III",
      action: "Extensie + abducție pumn",
      nerv: "N. radial (C6-C7)",
      descr: "Cei 2 mușchi cheie care întind pumnul.",
    },
    extensordigitorum: {
      ro: "Extensor al degetelor",
      la: "M. extensor digitorum",
      group: "membreSup",
      origin: "Epicondil lateral humerus",
      insert: "Falangele distale degete II-V (aponevroza dorsală)",
      action: "Extensie degete II-V + pumn",
      nerv: "N. radial profund (C7-C8)",
      descr: "Tendoanele vizibile pe dorsul mâinii.",
    },
    abductorpollicis: {
      ro: "Abductor al policelui",
      la: "M. abductor pollicis longus / brevis",
      group: "membreSup",
      origin: "Radius+ulna / scafoid+trapez",
      insert: "Bază metacarp I / falanga proximală I",
      action: "Abducție police",
      nerv: "Radial (longus) / median (brevis)",
      descr: 'Mușchiul „semnului OK" cu policele.',
    },
    opponenspollicis: {
      ro: "Opozant al policelui",
      la: "M. opponens pollicis",
      group: "membreSup",
      origin: "Trapez + retinacul flexor",
      insert: "Metacarp I",
      action: "Opozabilitate police (uniqualitatea omului!)",
      nerv: "N. median (C8-T1)",
      descr: "Face posibilă prinderea de precizie.",
    },
    tensorfascialatae: {
      ro: "Tensor al fasciei lata",
      la: "M. tensor fasciae latae",
      group: "membreInf",
      origin: "Spina iliacă antero-superioară",
      insert: "Tractul iliotibial (apoi tibia)",
      action: "Flexie + abducție + rot. internă coapsă; stabilizare genunchi",
      nerv: "N. gluteal superior (L4-S1)",
      descr: "Anterior pe coapsă; întinde fascia lata.",
    },
    pectineus: {
      ro: "Pectineu",
      la: "M. pectineus",
      group: "membreInf",
      origin: "Creasta pectinală a pubisului",
      insert: "Linia pectinală a femurului",
      action: "Aducție + flexie coapsă",
      nerv: "N. femural (L2-L3)",
      descr: "Cel mai superior adductor; în triunghiul femural.",
    },
    adductorbrevis: {
      ro: "Adductor scurt",
      la: "M. adductor brevis",
      group: "membreInf",
      origin: "Ramura inferioară pubis",
      insert: "Linia aspră (treimea superioară)",
      action: "Aducție + flexie + rot. ext. coapsă",
      nerv: "N. obturator (L2-L4)",
      descr: "Sub adductor lung. Separă ramurile n. obturator.",
    },
    adductormagnus: {
      ro: "Adductor mare",
      la: "M. adductor magnus",
      group: "membreInf",
      origin: "Ramurile ischiopubice + tuberozitate ischiatică",
      insert: "Linia aspră + tuberculul adductor femural",
      action: "Aducție + extensie coapsă (parte ischică)",
      nerv: "Obturator + tibial (L2-L4)",
      descr: "Cel mai mare adductor; are 2 inervații (mix funcțional).",
    },
    gluteusminimus: {
      ro: "Gluteus mic (fesier mic)",
      la: "M. gluteus minimus",
      group: "membreInf",
      origin: "Aripa iliacă (între liniile gluteale ant. și inf.)",
      insert: "Trohanter mare",
      action: "Abducție și rot. int. coapsă; stabilizator pelvis",
      nerv: "N. gluteal superior (L4-S1)",
      descr: "Cel mai profund din cei 3 fesieri.",
    },
    piriformis: {
      ro: "Piriform",
      la: "M. piriformis",
      group: "membreInf",
      origin: "Fața anterioară a sacrumului",
      insert: "Trohanter mare",
      action: "Rotație externă a coapsei",
      nerv: "Plex sacral (S1-S2)",
      descr: "Marca anatomică: n. sciatic trece sub el (uneori prin el — sindrom piriform).",
    },
    vastusmedialis: {
      ro: "Vast medial",
      la: "M. vastus medialis",
      group: "membreInf",
      origin: "Linia intertrohanteriană + linia aspră (medial)",
      insert: "Tendonul cvadricepsului → tuberozitatea tibială",
      action: "Extensie genunchi; stabilizează patela medial",
      nerv: "N. femural (L2-L4)",
      descr: 'Parte din cvadriceps; „picătura" deasupra genunchiului — vizibilă la atleți.',
    },
    vastuslateralis: {
      ro: "Vast lateral",
      la: "M. vastus lateralis",
      group: "membreInf",
      origin: "Linia intertrohanteriană + trohanter mare + linia aspră (lateral)",
      insert: "Tendon cvadriceps",
      action: "Extensie genunchi",
      nerv: "N. femural (L2-L4)",
      descr:
        "Cel mai mare cap al cvadricepsului. Sit obișnuit pentru injecții intramusculare la sugari.",
    },
    rectusfemoris: {
      ro: "Drept femural",
      la: "M. rectus femoris",
      group: "membreInf",
      origin: "Spina iliacă antero-inferioară",
      insert: "Tendon cvadriceps",
      action: "Extensie genunchi + flexie șold",
      nerv: "N. femural (L2-L4)",
      descr: "Singurul cap al cvadricepsului biarticular (acționează 2 articulații).",
    },
    tibialisposterior: {
      ro: "Tibial posterior",
      la: "M. tibialis posterior",
      group: "membreInf",
      origin: "Tibia + fibula + membrana interosoasă (profund)",
      insert: "Navicular + cuneiforme + bazele metatarsiene 2-4",
      action: "Flexie plantară + inversiune; susține bolta plantară",
      nerv: "N. tibial (L4-L5)",
      descr: "Cel mai profund mușchi posterior al gambei. Stabilizator arcadă piciorului.",
    },
    flexorhalluciisLongus: {
      ro: "Flexor lung al halucelui",
      la: "M. flexor hallucis longus",
      group: "membreInf",
      origin: "Două treimi inferioare ale fibulei",
      insert: "Falanga distală a halucelui",
      action: "Flexie haluce + flexie plantară picior",
      nerv: "N. tibial (L5-S2)",
      descr: "Important pentru propulsia la mers și alergat (ultimul punct de contact).",
    },
    extensorhalluciisLongus: {
      ro: "Extensor lung al halucelui",
      la: "M. extensor hallucis longus",
      group: "membreInf",
      origin: "Mijloc fibulă + membrană interosoasă",
      insert: "Falanga distală a halucelui",
      action: "Extensie haluce + flexie dorsală + inversiune",
      nerv: "N. peroneal profund (L5)",
      descr: "Tendonul vizibil deasupra halucelui când ridici degetul mare.",
    },
    plantaris: {
      ro: "Plantar",
      la: "M. plantaris",
      group: "membreInf",
      origin: "Linia supracondiliană laterală a femurului",
      insert: "Calcaneu (cu tendon Ahile)",
      action: "Asistă flexia plantară + flexia genunchiului",
      nerv: "N. tibial (S1-S2)",
      descr: "Mușchi mic vestigial. Tendon foarte lung — folosit ca grefon.",
    },
    popliteus: {
      ro: "Popliteu",
      la: "M. popliteus",
      group: "membreInf",
      origin: "Condilul lateral femural",
      insert: "Tibia (deasupra liniei soleare)",
      action: '„Deblochează" genunchiul din extensie completă (rotație medială a tibiei)',
      nerv: "N. tibial (L4-S1)",
      descr: "Mic, profund în fosa poplitee. Inițiator al flexiei genunchiului.",
    },
    iliocostalis: {
      ro: "Iliocostal",
      la: "M. iliocostalis (lumborum/thoracis/cervicis)",
      group: "trunchi",
      origin: "Creasta iliacă + coastele",
      insert: "Coastele superioare + procese transverse cervicale",
      action: "Extensie + flexie laterală coloană",
      nerv: "Ramurile dorsale ale nervilor spinali",
      descr: "Cea mai laterală coloană din erector spinae.",
    },
    longissimus: {
      ro: "Cel mai lung",
      la: "M. longissimus (thoracis/cervicis/capitis)",
      group: "trunchi",
      origin: "Creasta sacrală + procese transverse",
      insert: "Procese transverse + mastoid",
      action: "Extensie coloană + cap; flexie laterală",
      nerv: "Ramurile dorsale ale nervilor spinali",
      descr: "Coloana mijlocie din erector spinae. Cea mai lungă.",
    },
    spinalis: {
      ro: "Spinal",
      la: "M. spinalis (thoracis/cervicis/capitis)",
      group: "trunchi",
      origin: "Procesele spinoase T10-L2",
      insert: "Procesele spinoase superioare T1-T8",
      action: "Extensie coloană",
      nerv: "Ramurile dorsale ale nervilor spinali",
      descr: "Cea mai medială coloană din erector spinae.",
    },
    multifidus: {
      ro: "Multifid",
      la: "M. multifidus",
      group: "trunchi",
      origin: "Sacrum + procese mamilare/transverse",
      insert: "Procese spinoase (2-4 vertebre deasupra)",
      action: "Stabilizare coloană + extensie + rotație contralaterală",
      nerv: "Ramurile dorsale ale nervilor spinali",
      descr:
        "Mușchi cheie pentru stabilitatea coloanei lombare. Atrofiat în durerea lombară cronică.",
    },
    diaphragm: {
      ro: "Diafragm",
      la: "M. diaphragma",
      group: "trunchi",
      origin: "Stern (proces xifoid) + coaste 7-12 + L1-L3 (stâlpi)",
      insert: "Centrul tendinos (frenocentru)",
      action: "Inspirație primară — coboară în jos, mărește cavitatea toracică",
      nerv: "N. frenic (C3-C5)",
      descr:
        '„Diafragmul respiră" — coboară 1-10 cm la fiecare respirație. Trecut de aorta, esofag, VCI prin 3 hiatusuri.',
    },
    intercostalexternus: {
      ro: "Intercostal extern",
      la: "Mm. intercostales externi",
      group: "trunchi",
      origin: "Marginea inferioară a coastei superioare",
      insert: "Marginea superioară a coastei imediat inferioare",
      action: "Ridică coastele (inspir)",
      nerv: "Nervii intercostali",
      descr: 'Fibre înclinate „mâinile în buzunare". Stratul superficial.',
    },
    intercostalinternus: {
      ro: "Intercostal intern",
      la: "Mm. intercostales interni",
      group: "trunchi",
      origin: "Marginea superioară a coastei inferioare",
      insert: "Marginea inferioară a coastei superioare",
      action: "Coboară coastele (expir forțat)",
      nerv: "Nervii intercostali",
      descr: "Fibre perpendiculare pe externi. Sub stratul extern.",
    },
    levatorani: {
      ro: "Ridicător al anusului",
      la: "M. levator ani",
      group: "trunchi",
      origin: "Pubis + arcul tendinos al fasciei pelvine",
      insert: "Coccis + rafeu anococcigian + organe pelvine",
      action: "Susține planșeul pelvin; contracția anusului",
      nerv: "N. pudendal + ramuri sacrale (S3-S4)",
      descr: "Format din puborectal + pubococcigian + iliococcigian. Critic pentru continență.",
    },
  };
  for (var k in more) {
    D[k] = more[k];
  }
})();

(function addEnglishNames() {
  if (!window.__muscleDataIndex) return;
  var EN = {
    sternocleidomastoid: "Sternocleidomastoid",
    masseter: "Masseter",
    temporalis: "Temporalis",
    orbicularisoculi: "Orbicularis oculi",
    orbicularisoris: "Orbicularis oris",
    zygomaticus: "Zygomaticus major",
    frontalis: "Frontalis (occipitofrontalis)",
    platysma: "Platysma",
    spleniuscapitis: "Splenius capitis",
    spleniuscervicis: "Splenius cervicis",
    mylohyoid: "Mylohyoid",
    occipitofrontalis: "Occipitofrontalis",
    pterygoid: "Pterygoid",
    digastric: "Digastric",
    auricularis: "Auricularis",
    corrugatorsupercilii: "Corrugator supercilii",
    procerus: "Procerus",
    nasalis: "Nasalis",
    levatorlabiisuperioris: "Levator labii superioris",
    depressorangulioris: "Depressor anguli oris",
    mentalis: "Mentalis",
    buccinator: "Buccinator",
    risorius: "Risorius",
    depressorlabiiinferioris: "Depressor labii inferioris",
    pterygoidlateral: "Lateral pterygoid",
    pterygoidmedial: "Medial pterygoid",
    geniohyoid: "Geniohyoid",
    stylohyoid: "Stylohyoid",
    sternohyoid: "Sternohyoid",
    omohyoid: "Omohyoid",
    sternothyroid: "Sternothyroid",
    thyrohyoid: "Thyrohyoid",
    scalenusanterior: "Scalene anterior",
    scalenusmedius: "Scalene medius",
    scalenusposterior: "Scalene posterior",
    longuscolli: "Longus colli",
    longuscapitis: "Longus capitis",
    rectuscapitisanterior: "Rectus capitis anterior",
    trapezius: "Trapezius",
    latissimusdorsi: "Latissimus dorsi",
    deltoid: "Deltoid",
    pectoralis: "Pectoralis major",
    bicepsbrachii: "Biceps brachii",
    tricepsbrachii: "Triceps brachii",
    brachialis: "Brachialis",
    brachioradialis: "Brachioradialis",
    supraspinatus: "Supraspinatus",
    infraspinatus: "Infraspinatus",
    teres: "Teres (minor / major)",
    subscapularis: "Subscapularis",
    rhomboideusmajor: "Rhomboid major",
    rhomboideusminor: "Rhomboid minor",
    levatorscapulae: "Levator scapulae",
    serratusanterior: "Serratus anterior",
    coracobrachialis: "Coracobrachialis",
    anconeus: "Anconeus",
    pronatorteres: "Pronator teres",
    pronatorquadratus: "Pronator quadratus",
    supinator: "Supinator",
    flexorcarpiradialis: "Flexor carpi radialis",
    flexorcarpiulnaris: "Flexor carpi ulnaris",
    palmarislongus: "Palmaris longus",
    flexordigitorum: "Flexor digitorum",
    extensorcarpiradialis: "Extensor carpi radialis",
    extensordigitorum: "Extensor digitorum",
    abductorpollicis: "Abductor pollicis",
    opponenspollicis: "Opponens pollicis",
    rectusabdominis: "Rectus abdominis",
    externaloblique: "External oblique",
    internaloblique: "Internal oblique",
    transversusabdominis: "Transversus abdominis",
    psoasmajor: "Psoas major",
    iliacus: "Iliacus",
    quadratuslumborum: "Quadratus lumborum",
    serratusposteriorsuperior: "Serratus posterior superior",
    serratusposteriorinferior: "Serratus posterior inferior",
    diaphragm: "Diaphragm",
    intercostalexternus: "External intercostal",
    intercostalinternus: "Internal intercostal",
    levatorani: "Levator ani",
    iliocostalis: "Iliocostalis",
    longissimus: "Longissimus",
    spinalis: "Spinalis",
    multifidus: "Multifidus",
    gluteusmaximus: "Gluteus maximus",
    gluteusmedius: "Gluteus medius",
    gluteusminimus: "Gluteus minimus",
    quadricepsfemoris: "Quadriceps femoris",
    sartorius: "Sartorius",
    gracilis: "Gracilis",
    adductorlongus: "Adductor longus",
    adductorbrevis: "Adductor brevis",
    adductormagnus: "Adductor magnus",
    bicepsfemoris: "Biceps femoris",
    semitendinosus: "Semitendinosus",
    semimembranosus: "Semimembranosus",
    gastrocnemius: "Gastrocnemius",
    soleus: "Soleus",
    tibialisanterior: "Tibialis anterior",
    peroneus: "Peroneus (fibularis)",
    pectineus: "Pectineus",
    tensorfascialatae: "Tensor fasciae latae",
    piriformis: "Piriformis",
    vastusmedialis: "Vastus medialis",
    vastuslateralis: "Vastus lateralis",
    rectusfemoris: "Rectus femoris",
    tibialisposterior: "Tibialis posterior",
    flexorhalluciisLongus: "Flexor hallucis longus",
    extensorhalluciisLongus: "Extensor hallucis longus",
    plantaris: "Plantaris",
    popliteus: "Popliteus",
  };
  var D = window.__muscleDataIndex;
  for (var k in EN) {
    if (D[k]) D[k].en = EN[k];
  }
})();

(function muSectionFilter() {
  function hlColor_int(mesh, col) {
    if (mesh.userData._muTex) {
      mesh.material.color.set(0xffffff);
      if (mesh.material.emissive) mesh.material.emissive.copy(col).multiplyScalar(0.45);
    } else {
      mesh.material.color.copy(col);
      if (mesh.material.emissive) mesh.material.emissive.copy(col).multiplyScalar(0.18);
    }
  }
  function animMuCamTo(camPos, targetPos) {
    var mu = window.__MU_REF;
    if (!mu || !mu.camera || !mu.controls) return;
    var sP = mu.camera.position.clone(),
      sT = mu.controls.target.clone();
    var eP = new THREE.Vector3(camPos[0], camPos[1], camPos[2]);
    var eT = new THREE.Vector3(targetPos[0], targetPos[1], targetPos[2]);
    var st = performance.now(),
      dur = 520;
    function step() {
      var t = Math.min((performance.now() - st) / dur, 1);
      var e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      mu.camera.position.lerpVectors(sP, eP, e);
      mu.controls.target.lerpVectors(sT, eT, e);
      mu.controls.update();
      if (t < 1) requestAnimationFrame(step);
    }
    step();
  }
  window.__muFilterSection = function (section) {
    var list = document.getElementById("mu-list");
    var groups = list ? list.querySelectorAll(".bone-group") : [];
    var meshes = window.__MUSCLE_MESHES || [];
    var sectionMap = {
      cap: "Cap si gat",
      trunchi: "Trunchi",
      membre: "Membre superioare",
      inferioare: "Membre inferioare",
      all: null,
    };
    var target = sectionMap[section];
    if (list) {
      groups.forEach(function (g) {
        var name = (g.querySelector(".group-name") || {}).textContent || "";
        var shouldShow = !target || name.indexOf(target) === 0;
        g.style.display = shouldShow ? "" : "none";
        if (shouldShow) g.classList.add("open");
      });
    }
    var box = new THREE.Box3();
    var any = false;
    var mu = window.__MU_REF;
    meshes.forEach(function (m) {
      if (!m || !m.material) return;
      var grp = window.__muscleGroupForMesh ? window.__muscleGroupForMesh(m.name) : null;
      var inSection = !target || grp === target;
      m.visible = true;
      if (inSection) {
        m.material.transparent = false;
        m.material.opacity = 1;
        m.material.depthWrite = true;
        if (mu && m === mu.selected) hlColor_int(m, mu.selectColor);
        var mb = new THREE.Box3().setFromObject(m);
        if (mb.isEmpty()) return;
        if (!any) {
          box.copy(mb);
          any = true;
        } else box.union(mb);
      } else {
        m.material.transparent = true;
        m.material.opacity = 0.08;
        m.material.depthWrite = false;
      }
    });
    if (target && any && mu && mu.camera && mu.controls) {
      var c = new THREE.Vector3();
      box.getCenter(c);
      var s = new THREE.Vector3();
      box.getSize(s);
      var maxDim = Math.max(s.x, s.y, s.z);
      var fov = ((mu.camera.fov || 45) * Math.PI) / 180;
      var aspect = mu.camera.aspect || 1;
      var dist = maxDim / 2 / Math.tan(fov / 2);
      if (aspect < 1) dist = dist / aspect;
      dist = dist * 1.6;
      animMuCamTo([c.x + dist * 0.05, c.y + dist * 0.1, c.z + dist], [c.x, c.y, c.z]);
    } else if (!target && mu && mu.camera && mu.controls && mu.model) {
      var b2 = new THREE.Box3().setFromObject(mu.model);
      var c2 = new THREE.Vector3();
      b2.getCenter(c2);
      animMuCamTo([c2.x, c2.y, c2.z + 2.5], [c2.x, c2.y, c2.z]);
    }
  };
})();

(function hookMuLang() {
  if (typeof window.applyLanguage !== "function") return;
  var orig = window.applyLanguage;
  window.applyLanguage = function (lang) {
    var r = orig.apply(this, arguments);
    if (typeof window.__muRebuildList === "function") window.__muRebuildList();
    if (
      window.__MU_REF &&
      window.__MU_REF.selected &&
      typeof window.__muSelectMuscle === "function"
    ) {
      window.__muSelectMuscle(window.__MU_REF.selected);
    }
    var phP = document.querySelector("#mu-ip-ph p");
    if (phP) {
      phP.innerHTML =
        typeof CUR_LANG !== "undefined" && CUR_LANG === "en"
          ? "Select a muscle from the model<br>or the list on the left"
          : "Selectează un mușchi din model<br>sau din lista din stânga";
    }
    var infoTitle = document.getElementById("mu-info-title");
    if (infoTitle && !(window.__MU_REF && window.__MU_REF.selected)) {
      infoTitle.textContent =
        typeof CUR_LANG !== "undefined" && CUR_LANG === "en" ? "Muscle Info" : "Informații Mușchi";
    }
    var muLabel = document.getElementById("mu-cur-label");
    if (muLabel && !(window.__MU_REF && window.__MU_REF.selected)) {
      muLabel.textContent =
        typeof CUR_LANG !== "undefined" && CUR_LANG === "en"
          ? "Muscular system"
          : "Sistem muscular";
    }
    return r;
  };
})();

(function muControls() {
  function animTo(camPos, targetPos, dur) {
    var mu = window.__MU_REF;
    if (!mu || !mu.camera || !mu.controls) return;
    dur = dur || 550;
    var sP = mu.camera.position.clone(),
      sT = mu.controls.target.clone();
    var eP = new THREE.Vector3(camPos[0], camPos[1], camPos[2]);
    var eT = new THREE.Vector3(targetPos[0], targetPos[1], targetPos[2]);
    var st = performance.now();
    function step() {
      var t = Math.min((performance.now() - st) / dur, 1);
      var e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      mu.camera.position.lerpVectors(sP, eP, e);
      mu.controls.target.lerpVectors(sT, eT, e);
      mu.controls.update();
      if (t < 1) requestAnimationFrame(step);
    }
    step();
  }
  window.__muAnimCam = animTo;
  window.resetMuCam = function () {
    var mu = window.__MU_REF;
    if (!mu || !mu.camera || !mu.controls || !mu.model) return;
    if (mu.selected) {
      if (mu.selected.userData._muOrigMaterial) {
        mu.selected.material = mu.selected.userData._muOrigMaterial;
        mu.selected.userData._muOrigMaterial = null;
      }
      mu.selected = null;
    }
    if (mu.hovered) {
      if (mu.hovered.userData._muOrigMatHover) {
        mu.hovered.material = mu.hovered.userData._muOrigMatHover;
        mu.hovered.userData._muOrigMatHover = null;
      }
      mu.hovered = null;
    }
    var ov = document.getElementById("muNameOverlay");
    if (ov) ov.classList.remove("visible");
    var ph = document.getElementById("mu-ip-ph");
    if (ph) ph.style.display = "flex";
    var ct = document.getElementById("mu-info-ct");
    if (ct) ct.style.display = "none";
    var title = document.getElementById("mu-info-title");
    if (title)
      title.textContent =
        typeof CUR_LANG !== "undefined" && CUR_LANG === "en" ? "Muscle Info" : "Informatii Muschi";
    var label = document.getElementById("mu-cur-label");
    if (label)
      label.textContent =
        typeof CUR_LANG !== "undefined" && CUR_LANG === "en"
          ? "Muscular system"
          : "Sistem muscular";
    var lis = document.querySelectorAll("#mu-list .bone-item.selected");
    for (var i = 0; i < lis.length; i++) lis[i].classList.remove("selected");
    var b = new THREE.Box3().setFromObject(mu.model);
    var c = new THREE.Vector3();
    b.getCenter(c);
    animTo([c.x, c.y, c.z + 2.5], [c.x, c.y, c.z]);
  };
  function refreshLayout() {
    if (typeof window.__muResize === "function") window.__muResize();
  }
  function refitCameraToVisible() {
    var mu = window.__MU_REF;
    if (!mu || !mu.camera || !mu.controls) return;
    var meshes = window.__MUSCLE_MESHES || [];
    var box = new THREE.Box3();
    var any = false;
    meshes.forEach(function (m) {
      if (!m || !m.visible) return;
      var mb = new THREE.Box3().setFromObject(m);
      if (mb.isEmpty()) return;
      if (!any) {
        box.copy(mb);
        any = true;
      } else box.union(mb);
    });
    if (!any) return;
    var c = new THREE.Vector3();
    box.getCenter(c);
    var s = new THREE.Vector3();
    box.getSize(s);
    var maxDim = Math.max(s.x, s.y, s.z);
    var fov = ((mu.camera.fov || 45) * Math.PI) / 180;
    var aspect = mu.camera.aspect || 1;
    var dist = maxDim / 2 / Math.tan(fov / 2);
    if (aspect < 1) dist = dist / aspect;
    dist *= 1.5;
    animTo([c.x, c.y, c.z + dist], [c.x, c.y, c.z], 450);
  }
  window.toggleMuSidebar = function () {
    var app = document.getElementById("appMuscular");
    if (!app) return;
    app.classList.toggle("mu-sb-hidden");
    var btn = document.getElementById("muSidebarToggleBtn");
    if (btn) btn.innerHTML = app.classList.contains("mu-sb-hidden") ? "&#8594;" : "&#8592;";
    [16, 80, 180, 300, 500].forEach(function (d) {
      setTimeout(refreshLayout, d);
    });
  };
  window.toggleMuInfoPanel = function () {
    var app = document.getElementById("appMuscular");
    if (!app) return;
    app.classList.toggle("mu-ip-hidden");
    var btn = document.getElementById("muInfoToggleBtn");
    if (btn) btn.innerHTML = app.classList.contains("mu-ip-hidden") ? "&#8592;" : "&#8594;";
    [16, 80, 180, 300, 500].forEach(function (d) {
      setTimeout(refreshLayout, d);
    });
  };
  function attachResizeObserver() {
    if (window.__muRO) return;
    var viewer = document.getElementById("mu-viewer");
    if (!viewer || typeof ResizeObserver === "undefined") return;
    window.__muRO = new ResizeObserver(function () {
      refreshLayout();
    });
    window.__muRO.observe(viewer);
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", attachResizeObserver);
  else attachResizeObserver();
})();

(function quizMuscularSystem() {
  if (typeof QUIZ === "undefined") return;
  window.QUIZ.system = window.QUIZ.system || "osos";

  window.pickQuizSystem = function (sys) {
    QUIZ.system = sys;
    var visualIcon = document.getElementById("quizModeVisualIcon");
    var visualTitle = document.getElementById("quizModeVisualTitle");
    var visualDesc = document.getElementById("quizModeVisualDesc");
    var knowDesc = document.getElementById("quizModeKnowDesc");
    var duelCard = document.getElementById("quizModeDuelCard");
    var lang = typeof CUR_LANG !== "undefined" && CUR_LANG === "en" ? "en" : "ro";
    if (sys === "muscular") {
      if (visualIcon) visualIcon.innerHTML = "&#128170;";
      if (visualTitle)
        visualTitle.textContent = lang === "en" ? "Identify the Muscle" : "Identifică Mușchiul";
      if (visualDesc)
        visualDesc.textContent =
          lang === "en"
            ? "See a muscle highlighted in blue on the body and pick the correct name from 4 options."
            : "Vezi un mușchi evidențiat cu albastru pe corp și alegi numele corect din 4 variante.";
      if (knowDesc)
        knowDesc.textContent =
          lang === "en"
            ? "Questions about origin, insertion, action and innervation of major muscles."
            : "Întrebări despre origine, inserție, acțiune și inervație ale mușchilor majori.";
      if (duelCard)
        duelCard.style.display = window.DUEL_BANKS && window.DUEL_BANKS.muscular ? "" : "none";
    } else {
      if (visualIcon) visualIcon.innerHTML = "&#129463;";
      if (visualTitle)
        visualTitle.textContent = lang === "en" ? "Identify the Bone" : "Identifică Osul";
      if (visualDesc)
        visualDesc.textContent =
          lang === "en"
            ? "See a bone highlighted in blue on the skeleton and pick the correct name from 4 options."
            : "Vezi un os evidențiat cu albastru pe schelet și alegi numele corect din 4 variante.";
      if (knowDesc)
        knowDesc.textContent =
          lang === "en"
            ? "Questions about descriptions, joints, and details (Easy/Medium) plus Stefaneț Vol. I-III textbook questions (Hard)."
            : "Întrebări despre descrieri, articulații și detalii (Ușor/Mediu) plus întrebări din manualele Stefaneț Vol. I-III (Greu).";
      if (duelCard) duelCard.style.display = "";
    }
    if (typeof showQuizStage === "function") showQuizStage("quizPick");
  };

  window.backToSystemPick = function () {
    if (typeof showQuizStage === "function") showQuizStage("quizSystemPick");
  };

  function shuffleArr(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i];
      a[i] = a[j];
      a[j] = t;
    }
    return a;
  }

  function getMuscleEntries() {
    if (!window.__muscleDataIndex) return [];
    var out = [];
    for (var k in window.__muscleDataIndex) {
      out.push(Object.assign({ key: k }, window.__muscleDataIndex[k]));
    }
    return out;
  }

  function buildMuscleQuestions(mode, difficulty, count) {
    if (mode === "duel") {
      var lg = typeof CUR_LANG !== "undefined" && CUR_LANG === "en" ? "en" : "ro";
      var dbank = (window.DUEL_BANKS && window.DUEL_BANKS.muscular) || [];
      return shuffleArr(dbank.slice())
        .slice(0, count || 10)
        .map(function (q) {
          return {
            type: "duel",
            prompt: lg === "en" ? q.text_en : q.text_ro,
            correct: !!q.correct,
            explain: lg === "en" ? q.explain_en : q.explain_ro,
          };
        });
    }
    var all = getMuscleEntries();
    if (all.length < 4) return [];
    var lang = typeof CUR_LANG !== "undefined" && CUR_LANG === "en" ? "en" : "ro";
    var pool = shuffleArr(all);
    var questions = [];
    var maxQ = Math.min(count || 10, pool.length);
    for (var i = 0; i < maxQ; i++) {
      var m = pool[i];
      var name = m[lang] || m.ro;
      if (mode === "visual") {
        var others = shuffleArr(
          all.filter(function (x) {
            return x.key !== m.key;
          })
        ).slice(0, 3);
        var opts = shuffleArr([m].concat(others)).map(function (x) {
          return x[lang] || x.ro;
        });
        questions.push({
          type: "visual",
          muscleKey: m.key,
          answer: name,
          options: opts,
          muscleData: m,
        });
      } else {
        var qTypes = [];
        if (m.origin)
          qTypes.push({
            field: "origin",
            label:
              lang === "en"
                ? "Which muscle has the following ORIGIN?"
                : "Care mușchi are următoarea ORIGINE?",
          });
        if (m.insert)
          qTypes.push({
            field: "insert",
            label:
              lang === "en"
                ? "Which muscle has the following INSERTION?"
                : "Care mușchi are următoarea INSERȚIE?",
          });
        if (m.action)
          qTypes.push({
            field: "action",
            label:
              lang === "en"
                ? "Which muscle performs this ACTION?"
                : "Care mușchi are această ACȚIUNE?",
          });
        if (m.nerv && difficulty !== "easy")
          qTypes.push({
            field: "nerv",
            label:
              lang === "en"
                ? "Which muscle has this INNERVATION?"
                : "Care mușchi are această INERVAȚIE?",
          });
        if (m.la && difficulty !== "easy")
          qTypes.push({
            field: "la",
            label:
              lang === "en"
                ? "What is the name of this muscle?"
                : "Care este denumirea românească a acestui mușchi?",
            isLatin: true,
          });
        if (qTypes.length === 0) continue;
        var qt = qTypes[Math.floor(Math.random() * qTypes.length)];
        var prompt;
        if (qt.isLatin) {
          prompt = qt.label + '<br><br><i style="color:#a78bfa;font-size:18px">' + m.la + "</i>";
        } else {
          var fieldVal = lang === "en" && m[qt.field + "_en"] ? m[qt.field + "_en"] : m[qt.field];
          prompt =
            qt.label +
            '<br><br><span style="color:#cbd5e1;font-style:italic;font-size:15px">"' +
            fieldVal +
            '"</span>';
        }
        var others2 = shuffleArr(
          all.filter(function (x) {
            return x.key !== m.key;
          })
        ).slice(0, 3);
        var opts2 = shuffleArr([m].concat(others2)).map(function (x) {
          return x[lang] || x.ro;
        });
        questions.push({
          type: "knowledge",
          prompt: prompt,
          answer: name,
          options: opts2,
          muscleData: m,
          field: qt.field,
        });
      }
    }
    return questions;
  }

  window.__buildMuscleQuiz = buildMuscleQuestions;
  window.__getMuscleEntries = getMuscleEntries;
})();

(function patchQuizForMuscular() {
  if (typeof startQuiz !== "function") return;
  var origStart = window.startQuiz;
  window.startQuiz = function (difficulty) {
    if (QUIZ.system === "muscular") {
      if (difficulty) QUIZ.difficulty = difficulty;
      if (!QUIZ.difficulty) QUIZ.difficulty = "medium";
      QUIZ.score = 0;
      QUIZ.currentQ = 0;
      QUIZ.wrong = [];
      QUIZ.answered = false;
      QUIZ.active = true;
      var count = difficulty === "easy" ? 8 : difficulty === "medium" ? 10 : 12;
      QUIZ.questions = window.__buildMuscleQuiz(QUIZ.mode, difficulty, count);
      QUIZ.total = QUIZ.questions.length;
      if (QUIZ.total === 0) {
        alert("Nu s-au putut genera intrebari. Reincearca.");
        return;
      }
      if (typeof showQuizStage === "function") showQuizStage("quizQuestion");
      loadMuscleQuizQuestion();
      return;
    }
    return origStart.apply(this, arguments);
  };
  function loadMuscleQuizQuestion() {
    QUIZ.answered = false;
    var q = QUIZ.questions[QUIZ.currentQ];
    if (!q) return;
    var qNum = document.getElementById("qNum");
    if (qNum) qNum.textContent = QUIZ.currentQ + 1;
    var qScore = document.getElementById("qScore");
    if (qScore) qScore.textContent = QUIZ.score;
    var qProgFill = document.getElementById("qProgFill");
    if (qProgFill) qProgFill.style.width = (QUIZ.currentQ / QUIZ.total) * 100 + "%";
    var qFeedback = document.getElementById("qFeedback");
    if (qFeedback) qFeedback.style.display = "none";
    var qNextBtn = document.getElementById("qNextBtn");
    if (qNextBtn) qNextBtn.style.display = "none";
    var _en = typeof CUR_LANG !== "undefined" && CUR_LANG === "en";
    if (q.type === "duel") {
      var mdh = document.querySelector(".quiz-q-text");
      if (mdh) {
        mdh.innerHTML =
          '<div class="duel-ai-says">' + (_en ? "AI says" : "AI zice") + "</div>" +
          '<div class="duel-statement"></div>' +
          '<div style="font-size:13px;color:var(--t2);font-weight:600;margin-top:6px">' +
          (_en ? "Is it true or false?" : "Este corect sau greșit?") + "</div>";
        var mst = mdh.querySelector(".duel-statement");
        if (mst) mst.textContent = '"' + q.prompt + '"';
      }
      var mopt = document.getElementById("qOptions");
      if (mopt) {
        mopt.className = "quiz-options duel-options";
        mopt.innerHTML = "";
        [
          [true, "true", "✓", _en ? "TRUE" : "ADEVĂRAT"],
          [false, "false", "✗", _en ? "FALSE" : "FALS"],
        ].forEach(function (d) {
          var b = document.createElement("button");
          b.className = "duel-btn " + d[1];
          b.innerHTML = '<span class="duel-icon">' + d[2] + "</span><span>" + d[3] + "</span>";
          b.onclick = function () {
            answerMuscleDuel(d[0], b);
          };
          mopt.appendChild(b);
        });
      }
      if (typeof startQuestionTimer === "function") startQuestionTimer();
      return;
    }
    var hintEl = document.querySelector(".quiz-q-text");
    if (hintEl) {
      if (q.type === "visual") {
        hintEl.innerHTML =
          'Cum se numeste muschiul evidentiat in <span style="color:#29b6f6">albastru</span>?';
      } else {
        hintEl.innerHTML = q.prompt;
      }
    }
    var optsDiv = document.getElementById("qOptions");
    if (optsDiv) {
      optsDiv.className = "quiz-options";
      optsDiv.innerHTML = "";
      var letters = ["A", "B", "C", "D"];
      q.options.forEach(function (opt, idx) {
        var btn = document.createElement("button");
        btn.className = "quiz-opt";
        btn.innerHTML =
          '<span class="quiz-opt-letter">' + letters[idx] + "</span><span>" + opt + "</span>";
        btn.onclick = function () {
          answerMuscleQuiz(opt, btn);
        };
        optsDiv.appendChild(btn);
      });
    }
    if (q.type === "visual" && typeof highlightMuscleQuiz === "function") {
      highlightMuscleQuiz(q.muscleKey);
    }
    if (typeof startQuestionTimer === "function") startQuestionTimer();
  }
  window.__loadMuscleQuizQuestion = loadMuscleQuizQuestion;

  function answerMuscleQuiz(opt, btn) {
    if (QUIZ.answered) return;
    QUIZ.answered = true;
    if (typeof stopQuestionTimer === "function") stopQuestionTimer();
    var q = QUIZ.questions[QUIZ.currentQ];
    var correct = opt === q.answer;
    var btns = document.querySelectorAll(".quiz-opt");
    btns.forEach(function (b) {
      b.disabled = true;
      var span = b.querySelector("span:last-child");
      var label = span ? span.textContent : "";
      if (label === q.answer) b.classList.add("correct");
      else if (b === btn) b.classList.add("wrong");
    });
    var fb = document.getElementById("qFeedback");
    if (correct) {
      QUIZ.score++;
      if (fb) {
        fb.className = "quiz-feedback fb-correct";
        fb.innerHTML =
          "&#9989; <b>Corect!</b> " +
          q.answer +
          (q.muscleData && q.muscleData.la ? " &mdash; <i>" + q.muscleData.la + "</i>" : "");
        fb.style.display = "block";
      }
    } else {
      QUIZ.wrong.push(q.answer);
      if (fb) {
        fb.className = "quiz-feedback fb-wrong";
        fb.innerHTML =
          "&#10060; <b>Gresit.</b> Raspuns corect: <b>" +
          q.answer +
          "</b>" +
          (q.muscleData && q.muscleData.la ? " &mdash; <i>" + q.muscleData.la + "</i>" : "");
        fb.style.display = "block";
      }
    }
    var qScore = document.getElementById("qScore");
    if (qScore) qScore.textContent = QUIZ.score;
    var nextBtn = document.getElementById("qNextBtn");
    if (nextBtn) {
      nextBtn.style.display = "inline-block";
      nextBtn.textContent = QUIZ.currentQ + 1 >= QUIZ.total ? "Vezi rezultatul →" : "Următoarea →";
      nextBtn.onclick = function () {
        QUIZ.currentQ++;
        if (QUIZ.currentQ >= QUIZ.total) {
          if (typeof endQuiz === "function") endQuiz();
        } else loadMuscleQuizQuestion();
      };
    }
  }
  window.__answerMuscleQuiz = answerMuscleQuiz;

  function answerMuscleDuel(picked, btn) {
    if (QUIZ.answered) return;
    QUIZ.answered = true;
    if (typeof stopQuestionTimer === "function") stopQuestionTimer();
    var q = QUIZ.questions[QUIZ.currentQ];
    var correct = picked === q.correct;
    var en = typeof CUR_LANG !== "undefined" && CUR_LANG === "en";
    document.querySelectorAll(".duel-btn").forEach(function (b) {
      b.disabled = true;
      var bv = b.classList.contains("true");
      if (bv === q.correct) b.classList.add("correct");
      else if (b === btn) b.classList.add("wrong");
    });
    var fb = document.getElementById("qFeedback");
    if (correct) {
      QUIZ.score++;
      if (fb) {
        fb.className = "quiz-feedback fb-correct";
        fb.innerHTML = "&#9989; <b>" + (en ? "Correct!" : "Corect!") + "</b> " + (q.explain || "");
        fb.style.display = "block";
      }
    } else {
      QUIZ.wrong.push(q.prompt);
      if (fb) {
        fb.className = "quiz-feedback fb-wrong";
        fb.innerHTML =
          "&#10060; <b>" +
          (q.correct ? (en ? "It was TRUE." : "Era ADEVĂRAT.") : en ? "It was FALSE." : "Era FALS.") +
          "</b> " +
          (q.explain || "");
        fb.style.display = "block";
      }
    }
    var qScore = document.getElementById("qScore");
    if (qScore) qScore.textContent = QUIZ.score;
    var nextBtn = document.getElementById("qNextBtn");
    if (nextBtn) {
      nextBtn.style.display = "inline-block";
      nextBtn.textContent =
        QUIZ.currentQ + 1 >= QUIZ.total
          ? en ? "See result →" : "Vezi rezultatul →"
          : en ? "Next →" : "Următoarea →";
      nextBtn.onclick = function () {
        QUIZ.currentQ++;
        if (QUIZ.currentQ >= QUIZ.total) {
          if (typeof endQuiz === "function") endQuiz();
        } else loadMuscleQuizQuestion();
      };
    }
  }
  window.__answerMuscleDuel = answerMuscleDuel;
})();

(function muscleQuizVisual() {
  var origColors = {};
  window.highlightMuscleQuiz = function (muscleKey) {
    var meshes = window.__MUSCLE_MESHES || [];
    if (!meshes.length) {
      var tries = 0;
      var iv = setInterval(function () {
        tries++;
        var m = window.__MUSCLE_MESHES || [];
        if (m.length) {
          clearInterval(iv);
          window.highlightMuscleQuiz(muscleKey);
        } else if (tries > 120) {
          clearInterval(iv);
          console.warn("[Muscle Quiz] No muscles loaded after wait");
        }
      }, 250);
      return;
    }
    clearMuscleQuizHighlight();
    var target = null;
    function norm(s) {
      return String(s || "")
        .toLowerCase()
        .replace(/_(Lowerlimb|Upperlimb|Trunk|Head-neck)_muscles_\d+$/i, "")
        .replace(/\s+/g, "")
        .replace(/[_\.\-]/g, "");
    }
    var keyN = muscleKey;
    for (var i = 0; i < meshes.length; i++) {
      var m = meshes[i];
      var nameN = norm(String(m.name).replace(/[\s_]+([lr])(?:_\d+)?$/i, ""));
      if (nameN.indexOf(keyN) >= 0 || keyN.indexOf(nameN) >= 0) {
        target = m;
        break;
      }
    }
    if (!target) target = meshes[Math.floor(Math.random() * meshes.length)];
    meshes.forEach(function (m) {
      if (!m.material || !m.userData) return;
      if (m === target) return;
      if (!m.userData._quizOrigMat) m.userData._quizOrigMat = m.material;
      var faded = m.userData._quizOrigMat.clone();
      faded.transparent = true;
      faded.opacity = 0.08;
      faded.depthWrite = false;
      if (faded.color) faded.color = new THREE.Color(0x1a1f2e);
      if (faded.emissive) faded.emissive = new THREE.Color(0x000000);
      if ("metalness" in faded) faded.metalness = 0;
      if ("roughness" in faded) faded.roughness = 1;
      faded.needsUpdate = true;
      m.material = faded;
    });
    if (target && target.material) {
      if (!target.userData._quizOrigMat) target.userData._quizOrigMat = target.material;
      var hl = target.userData._quizOrigMat.clone();
      hl.color = new THREE.Color(0xffffff).lerp(new THREE.Color(0x29b6f6), 0.85);
      if (hl.emissive) hl.emissive = new THREE.Color(0x29b6f6).multiplyScalar(0.6);
      target.material = hl;
    }
    if (
      target &&
      window.__MU_REF &&
      window.__MU_REF.camera &&
      window.__MU_REF.controls &&
      typeof window.__muAnimCam === "function"
    ) {
      var b = new THREE.Box3().setFromObject(target);
      var c = new THREE.Vector3();
      b.getCenter(c);
      var s = new THREE.Vector3();
      b.getSize(s);
      var maxDim = Math.max(s.x, s.y, s.z);
      var fov = ((window.__MU_REF.camera.fov || 45) * Math.PI) / 180;
      var aspect = window.__MU_REF.camera.aspect || 1;
      var dist = (maxDim / 2 / Math.tan(fov / 2)) * 3;
      if (aspect < 1) dist = dist / aspect;
      window.__muAnimCam([c.x + dist * 0.15, c.y + dist * 0.05, c.z + dist], [c.x, c.y, c.z], 700);
    }
  };
  function clearMuscleQuizHighlight() {
    var meshes = window.__MUSCLE_MESHES || [];
    meshes.forEach(function (m) {
      if (m.userData && m.userData._quizOrigMat) {
        m.material = m.userData._quizOrigMat;
        m.userData._quizOrigMat = null;
      }
    });
  }
  window.clearMuscleQuizHighlight = clearMuscleQuizHighlight;
})();

(function muscleQuizEnter() {
  var origEnter = window.enterApp;
  if (typeof origEnter !== "function") return;
  window.enterApp = function (mode) {
    if (mode === "quiz") {
      if (window.QUIZ) QUIZ.system = "osos";
      if (typeof showQuizStage === "function") showQuizStage("quizSystemPick");
    }
    return origEnter.apply(this, arguments);
  };
  var origRestart = window.restartQuiz;
  if (typeof origRestart === "function") {
    window.restartQuiz = function () {
      if (typeof QUIZ_TIMER !== "undefined" && QUIZ_TIMER.maxPerDiff_backup) {
        QUIZ_TIMER.maxPerDiff = QUIZ_TIMER.maxPerDiff_backup;
      }
      if (typeof showQuizStage === "function") showQuizStage("quizSystemPick");
    };
  }
})();

(function muscleQuizSwitchScene() {
  var origStart = window.startQuiz;
  if (typeof origStart !== "function") return;
  window.startQuiz = function (difficulty) {
    if (QUIZ.system === "muscular" && QUIZ.mode === "visual") {
      document.body.classList.remove("mode-skeleton");
      document.body.classList.add("mode-muscular", "mode-quiz");
      document.body.classList.add("qmode-visual");
      document.body.classList.remove("qmode-knowledge", "qmode-duel");
      var appBones = document.querySelector(".app:not(.app-muscular)");
      if (appBones) appBones.style.display = "none";
      var appMu = document.getElementById("appMuscular");
      if (appMu) {
        appMu.style.display = "flex";
      }
      var quizPanelMu = document.getElementById("quizPanel");
      if (quizPanelMu && appMu && !appMu.contains(quizPanelMu)) {
        var muViewer = document.getElementById("mu-viewer");
        if (muViewer) muViewer.appendChild(quizPanelMu);
      }
      if (typeof window.__muInit === "function") window.__muInit();
      setTimeout(function () {
        if (typeof window.__muResize === "function") window.__muResize();
      }, 200);
    } else if (QUIZ.system === "muscular" && QUIZ.mode === "knowledge") {
      document.body.classList.add("mode-quiz");
      document.body.classList.remove("qmode-visual");
      document.body.classList.add("qmode-knowledge");
    }
    return origStart.apply(this, arguments);
  };
  var origExitQuiz = window.exitQuizMode;
  if (typeof origExitQuiz === "function") {
    window.exitQuizMode = function () {
      if (typeof window.clearMuscleQuizHighlight === "function") window.clearMuscleQuizHighlight();
      document.body.classList.remove(
        "mode-muscular",
        "qmode-visual",
        "qmode-knowledge",
        "qmode-duel"
      );
      var appBones = document.querySelector(".app:not(.app-muscular)");
      if (appBones) appBones.style.display = "";
      var quizPanelMu = document.getElementById("quizPanel");
      var bonesViewer = document.querySelector(".app:not(.app-muscular) .viewer");
      if (quizPanelMu && bonesViewer && !bonesViewer.contains(quizPanelMu)) {
        bonesViewer.appendChild(quizPanelMu);
      }
      return origExitQuiz.apply(this, arguments);
    };
  }
})();

(function addMuscleEN() {
  if (!window.__muscleDataIndex) return;
  var D = window.__muscleDataIndex;
  var EN = {
    sternocleidomastoid: {
      descr:
        "Superficial muscle of the neck, visible under the skin. Forms the anterior and posterior triangles of the neck.",
      origin: "Manubrium sterni + medial third of the clavicle",
      insert: "Mastoid process of the temporal bone",
      action: "Tilts head laterally, rotates contralaterally, flexes the neck",
      nerv: "Accessory nerve (XI) + cervical plexus (C2-C3)",
    },
    masseter: {
      descr:
        "Thick masticatory muscle, palpable on the cheek when clenching. Bite force depends on it.",
      origin: "Zygomatic arch",
      insert: "Mandibular angle + ramus",
      action: "Elevates mandible (closes mouth) — strongest masticatory muscle",
      nerv: "Mandibular nerve (V3, from trigeminal)",
    },
    temporalis: {
      descr:
        "Fan-shaped masticatory muscle under the temporal bone. Visible moving during chewing.",
      origin: "Temporal fossa",
      insert: "Coronoid process + mandibular ramus",
      action: "Elevates and retracts mandible",
      nerv: "Mandibular nerve (V3)",
    },
    orbicularisoculi: {
      descr: "Mimic muscle surrounding the eye. Has 3 parts: orbital, palpebral, lacrimal.",
      origin: "Medial orbital margin",
      insert: "Eyelids and skin around the eye",
      action: "Closes eyelids (blinking, squeezing)",
      nerv: "Facial nerve (VII)",
    },
    orbicularisoris: {
      descr: "Circular sphincter of the mouth, essential for articulation and mimicry.",
      origin: "Lip mucosa + adjacent muscles",
      insert: "Lip skin and mucosa",
      action: "Closes mouth, protrudes lips (whistling, kissing)",
      nerv: "Facial nerve (VII)",
    },
    zygomaticus: {
      descr: "The smile muscle. Acts automatically when laughing.",
      origin: "Zygomatic bone",
      insert: "Mouth commissure",
      action: "Elevates mouth corners (smile)",
      nerv: "Facial nerve (VII)",
    },
    frontalis: {
      descr:
        "Mimic muscle of the forehead. Part of the occipitofrontal complex covering the cranial vault.",
      origin: "Galea aponeurotica",
      insert: "Eyebrow skin",
      action: "Raises eyebrows, wrinkles forehead (surprise, attention)",
      nerv: "Facial nerve (VII)",
    },
    platysma: {
      descr: "Thin sheet-like muscle under the neck skin. Visible when clenching jaw forcefully.",
      origin: "Pectoral and deltoid fascia",
      insert: "Lower mandibular margin + neck skin",
      action: "Depresses mandible, tenses neck skin",
      nerv: "Facial nerve (VII)",
    },
    spleniuscapitis: {
      descr: "Superficial layer of the posterior neck muscles.",
      origin: "Nuchal ligament + spinous processes C7-T3",
      insert: "Superior nuchal line + mastoid process",
      action: "Extends and rotates head ipsilaterally",
      nerv: "Dorsal rami of cervical nerves",
    },
    spleniuscervicis: {
      descr: "Under splenius capitis, assists rotation of the cervical spine.",
      origin: "Spinous processes T3-T6",
      insert: "Transverse processes C1-C3",
      action: "Extends and rotates neck",
      nerv: "Dorsal rami of cervical nerves",
    },
    mylohyoid: {
      descr: "Forms the floor of the mouth. Essential for swallowing.",
      origin: "Mylohyoid line of the mandible",
      insert: "Hyoid bone + median raphe",
      action: "Elevates floor of mouth and hyoid (swallowing)",
      nerv: "Mylohyoid nerve (V3)",
    },
    occipitofrontalis: {
      descr:
        "Paired muscle with 2 bellies (frontal + occipital) joined by galea aponeurotica. Moves scalp.",
      origin: "Supreme nuchal line (occipital part)",
      insert: "Galea aponeurotica",
      action: "Raises eyebrows, pulls scalp back",
      nerv: "Facial nerve (VII)",
    },
    pterygoid: {
      descr: "Two pairs of deep masticatory muscles (lateral and medial).",
      origin: "Pterygoid process (sphenoid)",
      insert: "Mandible (neck or ramus)",
      action: "Lateral: opens mouth, lateral movements | Medial: elevates mandible",
      nerv: "Mandibular nerve (V3)",
    },
    digastric: {
      descr: "Muscle with 2 bellies joined by intermediate tendon. Important in swallowing.",
      origin: "Mastoid process (post.) + digastric fossa of mandible (ant.)",
      insert: "Hyoid bone via intermediate tendon",
      action: "Depresses mandible, elevates hyoid",
      nerv: "V3 (anterior) + VII (posterior)",
    },
    auricularis: {
      descr: "Three muscles: anterior, superior, posterior. In many people, non-functional.",
      origin: "Galea aponeurotica / temporal fascia",
      insert: "Auricular pavilion",
      action: "Moves the ear (vestigial in most humans)",
      nerv: "Facial nerve (VII)",
    },
    corrugatorsupercilii: {
      descr: "Mimic muscle of frowning.",
      origin: "Medial superciliary arch",
      insert: "Eyebrow skin",
      action: "Frowns the forehead (concentration, anger)",
      nerv: "Facial nerve (VII)",
    },
    procerus: {
      descr: 'Mimic muscle; produces the "anger crease".',
      origin: "Nasal bone",
      insert: "Skin between eyebrows",
      action: "Pulls skin between eyebrows downward",
      nerv: "Facial nerve (VII)",
    },
    nasalis: {
      descr: "2 parts: transverse (compresses) + alar (dilates) — used in forced breathing.",
      origin: "Maxilla (near lateral incisors and canine)",
      insert: "Alar cartilage + nasal dorsal aponeurosis",
      action: "Compresses (transverse) or dilates (alar) nostrils",
      nerv: "Facial nerve (VII)",
    },
    levatorlabiisuperioris: {
      descr: "Mimic muscle; expression of contempt / disgust.",
      origin: "Maxilla (above infraorbital foramen)",
      insert: "Upper lip skin",
      action: "Raises upper lip",
      nerv: "Facial nerve (VII)",
    },
    depressorangulioris: {
      descr: "Mimic muscle; expression of sadness.",
      origin: "Oblique line of the mandible",
      insert: "Mouth commissure",
      action: "Pulls mouth corner downward",
      nerv: "Facial nerve (VII)",
    },
    mentalis: {
      descr: "Only muscle that elevates the lower lip.",
      origin: "Mandible (incisive fossa)",
      insert: "Chin skin",
      action: "Raises and protrudes chin (pouting)",
      nerv: "Facial nerve (VII)",
    },
    buccinator: {
      descr: "Forms the cheek wall. Essential for pushing food bolus.",
      origin: "Maxillary alveolar process + mandible + pterygomandibular raphe",
      insert: "Mouth commissure (orbicularis oris)",
      action: "Compresses cheek (blowing, whistling, chewing)",
      nerv: "Facial nerve (VII)",
    },
    risorius: {
      descr: 'Inconsistent muscle (may be absent). The "polite" smile.',
      origin: "Parotid fascia",
      insert: "Mouth commissure",
      action: "Pulls mouth corner laterally (forced laughter)",
      nerv: "Facial nerve (VII)",
    },
    depressorlabiiinferioris: {
      descr: "Mimic muscle; expression of strong disgust.",
      origin: "Oblique line of the mandible",
      insert: "Lower lip skin",
      action: "Pulls lower lip downward and laterally",
      nerv: "Facial nerve (VII)",
    },
    pterygoidlateral: {
      descr: "The only masticatory muscle that OPENS the mouth.",
      origin: "Greater wing of sphenoid + lateral plate of pterygoid",
      insert: "Condylar process + TMJ disc",
      action: "Opens mouth, protrudes mandible, lateral chewing movements",
      nerv: "Mandibular nerve (V3)",
    },
    pterygoidmedial: {
      descr: 'Synergistic with masseter; forms the mandibular "sling".',
      origin: "Pterygoid fossa + maxillary tuberosity",
      insert: "Medial side of mandibular angle",
      action: "Elevates mandible, lateral movements",
      nerv: "Mandibular nerve (V3)",
    },
    geniohyoid: {
      descr: "Suprahyoid muscle; floor of the mouth.",
      origin: "Mental spine of mandible",
      insert: "Body of hyoid",
      action: "Elevates hyoid anteriorly, depresses mandible (swallowing, speech)",
      nerv: "C1 via hypoglossal nerve (XII)",
    },
    stylohyoid: {
      descr: "Thin, perforated by digastric tendon.",
      origin: "Styloid process",
      insert: "Body of hyoid",
      action: "Elevates and retracts hyoid (swallowing)",
      nerv: "Facial nerve (VII)",
    },
    sternohyoid: {
      descr: "Infrahyoid muscle; flanks the larynx.",
      origin: "Manubrium sterni + sternoclavicular joint",
      insert: "Body of hyoid",
      action: "Depresses hyoid after swallowing",
      nerv: "Ansa cervicalis (C1-C3)",
    },
    omohyoid: {
      descr: "Infrahyoid muscle with 2 bellies + intermediate tendon.",
      origin: "Superior border of scapula",
      insert: "Body of hyoid",
      action: "Depresses and fixes hyoid in swallowing and inspiration",
      nerv: "Ansa cervicalis (C1-C3)",
    },
    sternothyroid: {
      descr: "Deep infrahyoid muscle.",
      origin: "Manubrium sterni",
      insert: "Thyroid cartilage",
      action: "Depresses the larynx",
      nerv: "Ansa cervicalis (C1-C3)",
    },
    thyrohyoid: {
      descr: "Continues sternothyroid up to hyoid.",
      origin: "Thyroid cartilage",
      insert: "Body of hyoid",
      action: "Depresses hyoid or elevates larynx",
      nerv: "C1 via hypoglossal nerve (XII)",
    },
    scalenusanterior: {
      descr: "Surgical landmark; passes between brachial plexus and subclavian artery.",
      origin: "Transverse processes C3-C6",
      insert: "Lisfranc tubercle (1st rib)",
      action: "Lateral neck flexion; elevates 1st rib (forced inspiration)",
      nerv: "C4-C6 (ventral rami)",
    },
    scalenusmedius: {
      descr: "Largest scalene; lateral to brachial plexus.",
      origin: "Transverse processes C2-C7",
      insert: "1st rib",
      action: "Lateral neck flexion; elevates 1st rib",
      nerv: "C3-C8 (ventral rami)",
    },
    scalenusposterior: {
      descr: "Smallest scalene.",
      origin: "Transverse processes C5-C7",
      insert: "2nd rib",
      action: "Lateral neck flexion; elevates 2nd rib",
      nerv: "C7-C8",
    },
    longuscolli: {
      descr: "Deep anterior muscle of the neck.",
      origin: "Vertebral bodies C3-T3",
      insert: "Vertebral bodies C1-C3",
      action: "Flexes neck + lateral flexion",
      nerv: "C2-C6 (ventral rami)",
    },
    longuscapitis: {
      descr: "Deep anterior muscle; under longus colli.",
      origin: "Transverse processes C3-C6",
      insert: "Occipital bone (basilar part)",
      action: "Flexes head",
      nerv: "C1-C3 (ventral rami)",
    },
    rectuscapitisanterior: {
      descr: "Short suboccipital muscle.",
      origin: "Lateral masses C1",
      insert: "Occipital bone (basilar)",
      action: "Flexes head",
      nerv: "C1-C2",
    },
    trapezius: {
      descr: "Large rhomboid muscle on upper back. Covers cervicothoracic region.",
      origin: "Superior nuchal line + spinous processes C7-T12",
      insert: "Lateral third of clavicle + spine and acromion of scapula",
      action: "Elevates, retracts and rotates scapula; extends head",
      nerv: "Accessory nerve (XI) + C3-C4",
    },
    latissimusdorsi: {
      descr: "Largest back muscle. Pull-up depends on it.",
      origin: "Spinous processes T6-L5 + iliac crest",
      insert: "Lesser tubercle of humerus (crest of lesser tubercle)",
      action: "Adduction, extension, and internal rotation of arm",
      nerv: "Thoracodorsal nerve (C6-C8)",
    },
    deltoid: {
      descr: "Rounded shoulder muscle. 3 fascicles: anterior, middle, posterior.",
      origin: "Lateral third of clavicle + acromion + scapular spine",
      insert: "Deltoid tuberosity of humerus",
      action: "Shoulder abduction (mid); flexion (ant.); extension (post.)",
      nerv: "Axillary nerve (C5-C6)",
    },
    pectoralis: {
      descr: "Chest muscle. Push-up depends on it.",
      origin: "Clavicle (med.), sternum, costal cartilages 2-6",
      insert: "Crest of greater tubercle of humerus",
      action: "Adduction, flexion, internal rotation of arm",
      nerv: "Medial and lateral pectoral nerves (C5-T1)",
    },
    bicepsbrachii: {
      descr: '2-headed muscle on anterior arm. Famous "strength muscle".',
      origin: "Long head: supraglenoid tubercle; Short head: coracoid process",
      insert: "Radial tuberosity + bicipital aponeurosis",
      action: "Flexes elbow, supinates forearm",
      nerv: "Musculocutaneous nerve (C5-C6)",
    },
    tricepsbrachii: {
      descr: "3-headed muscle on posterior arm. Antagonist of biceps.",
      origin: "Long head: infraglenoid tubercle; Lateral and medial: humerus",
      insert: "Olecranon of ulna",
      action: "Elbow extension (long head also extends shoulder)",
      nerv: "Radial nerve (C6-C8)",
    },
    brachialis: {
      descr: "Under biceps. Main force generator in elbow flexion.",
      origin: "Distal humerus",
      insert: "Ulnar tuberosity",
      action: "Flexes elbow (strongest flexor)",
      nerv: "Musculocutaneous nerve (C5-C6)",
    },
    brachioradialis: {
      descr: 'The "stalker muscle" — visible when flexing the elbow with forearm in neutral.',
      origin: "Lateral supracondylar crest of humerus",
      insert: "Styloid process of radius",
      action: "Flexes elbow, assists pronation/supination",
      nerv: "Radial nerve (C5-C6)",
    },
    supraspinatus: {
      descr: "Part of rotator cuff. Most common cause of shoulder pain.",
      origin: "Supraspinous fossa of scapula",
      insert: "Greater tubercle of humerus",
      action: "Shoulder abduction (first 15°)",
      nerv: "Suprascapular nerve (C5-C6)",
    },
    infraspinatus: {
      descr: "Part of rotator cuff (SITS muscles).",
      origin: "Infraspinous fossa of scapula",
      insert: "Greater tubercle of humerus",
      action: "External rotation of shoulder",
      nerv: "Suprascapular nerve (C5-C6)",
    },
    teres: {
      descr: "Teres minor is part of rotator cuff; teres major is not.",
      origin: "Lateral border of scapula",
      insert: "Greater / lesser tubercle of humerus",
      action: "Minor: ext. rotation; Major: adduction and int. rotation",
      nerv: "Axillary (T. minor); lower subscapular (T. major)",
    },
    subscapularis: {
      descr: "Largest rotator cuff muscle. Only anterior one.",
      origin: "Subscapular fossa (anterior side of scapula)",
      insert: "Lesser tubercle of humerus",
      action: "Internal rotation of shoulder",
      nerv: "Subscapular nerves (C5-C6)",
    },
    rectusabdominis: {
      descr: 'The "six-pack" muscle. Divided by tendinous insertions.',
      origin: "Pubis (crest + symphysis)",
      insert: "Costal cartilages 5-7 + xiphoid process",
      action: "Flexes trunk, compresses viscera",
      nerv: "Intercostal nerves T6-T12",
    },
    externaloblique: {
      descr:
        'Most superficial lateral abdominal wall muscle. Fibers run "hands-in-pockets" direction.',
      origin: "External surface of ribs 5-12",
      insert: "Iliac crest + linea alba + pubic tubercle",
      action: "Flexes and rotates trunk contralaterally",
      nerv: "Intercostal nerves T7-T12",
    },
    internaloblique: {
      descr: "Under external oblique. Fibers perpendicular to it.",
      origin: "Iliac crest + inguinal ligament",
      insert: "Ribs 10-12 + linea alba",
      action: "Flexes and rotates trunk ipsilaterally",
      nerv: "Intercostal nerves T7-T12 + L1",
    },
    transversusabdominis: {
      descr: 'Deepest abdominal wall muscle. The natural "belt".',
      origin: "Costal cartilages 7-12 + thoracolumbar fascia + iliac crest",
      insert: "Linea alba + pubic tubercle",
      action: "Compresses viscera (deep stabilizer)",
      nerv: "T7-T12 + L1",
    },
    psoasmajor: {
      descr: "Deep muscle, main hip flexor. With iliacus forms iliopsoas.",
      origin: "Vertebral bodies T12-L4",
      insert: "Lesser trochanter of femur",
      action: "Flexes thigh on trunk (or vice versa)",
      nerv: "Lumbar plexus (L1-L3)",
    },
    iliacus: {
      descr: "Triangular, in iliac fossa. With psoas → iliopsoas (main hip flexor).",
      origin: "Iliac fossa",
      insert: "Lesser trochanter (with psoas)",
      action: "Thigh flexion",
      nerv: "Femoral nerve (L2-L4)",
    },
    quadratuslumborum: {
      descr: "Deep posterior abdominal wall muscle. Important for posture.",
      origin: "Iliac crest",
      insert: "12th rib + transverse processes L1-L4",
      action: "Lateral flexion of lumbar spine",
      nerv: "T12 + L1-L4",
    },
    gluteusmaximus: {
      descr: "Largest body muscle. Defines buttock shape.",
      origin: "Iliac wing + sacrum + sacrotuberous ligament",
      insert: "Iliotibial tract + gluteal tuberosity",
      action: "Hip extension (climbing stairs, jumping), external rotation",
      nerv: "Inferior gluteal nerve (L5-S2)",
    },
    gluteusmedius: {
      descr: "Critical stabilizer. Weakness produces limping (Trendelenburg gait).",
      origin: "Iliac wing (between ant. and post. gluteal lines)",
      insert: "Greater trochanter of femur",
      action: "Hip abduction, stabilizes pelvis during walking",
      nerv: "Superior gluteal nerve (L4-S1)",
    },
    quadricepsfemoris: {
      descr:
        "4 muscles: rectus femoris, vastus medialis/lateralis/intermedius. Largest muscle group.",
      origin: "4 heads: anterior inferior iliac spine (rectus fem.) + femur (vasti)",
      insert: "Tibial tuberosity via patellar tendon",
      action: "Knee extension; rectus femoris also flexes hip",
      nerv: "Femoral nerve (L2-L4)",
    },
    sartorius: {
      descr: "LONGEST muscle in the body. Diagonal across the thigh.",
      origin: "Anterior superior iliac spine",
      insert: "Tibia (pes anserinus)",
      action: "Flexes, abducts and externally rotates thigh; flexes knee",
      nerv: "Femoral nerve (L2-L3)",
    },
    gracilis: {
      descr: "Thinnest thigh adductor. Visible under skin medially.",
      origin: "Inferior ramus of pubis",
      insert: "Tibia (pes anserinus)",
      action: "Thigh adduction, knee flexion",
      nerv: "Obturator nerve (L2-L4)",
    },
    adductorlongus: {
      descr: "Most anterior of the adductor group. Frequent injury in soccer players.",
      origin: "Pubis (near symphysis)",
      insert: "Linea aspera of femur",
      action: "Thigh adduction and flexion",
      nerv: "Obturator nerve (L2-L4)",
    },
    bicepsfemoris: {
      descr: "Part of the hamstring group. Most lateral.",
      origin: "Ischial tuberosity (long head) + linea aspera (short head)",
      insert: "Fibular head",
      action: "Flexes knee, extends hip, laterally rotates leg",
      nerv: "Tibial + common peroneal nerve (L5-S2)",
    },
    semitendinosus: {
      descr: "Part of hamstrings. Long tendon. Between biceps fem. and semimembranosus.",
      origin: "Ischial tuberosity",
      insert: "Tibia (pes anserinus)",
      action: "Knee flexion + hip extension",
      nerv: "Tibial nerve (L5-S2)",
    },
    semimembranosus: {
      descr: "Most medial of hamstrings. Flat (membranous) shape.",
      origin: "Ischial tuberosity",
      insert: "Medial condyle of tibia",
      action: "Knee flexion + hip extension",
      nerv: "Tibial nerve (L5-S2)",
    },
    gastrocnemius: {
      descr: '2-headed muscle on posterior calf. Defines "calf" shape. Jumps.',
      origin: "Femoral condyles (medial and lateral)",
      insert: "Calcaneus via Achilles tendon",
      action: "Plantar flexion of foot + knee flexion",
      nerv: "Tibial nerve (S1-S2)",
    },
    soleus: {
      descr: "Under gastrocnemius. Key muscle for standing and walking.",
      origin: "Fibular head + soleal line of tibia",
      insert: "Calcaneus via Achilles tendon",
      action: "Plantar flexion of foot (in normal walking)",
      nerv: "Tibial nerve (S1-S2)",
    },
    tibialisanterior: {
      descr: "Visible under skin on anterior calf. Lifts foot tip during walking.",
      origin: "Lateral condyle + body of tibia",
      insert: "Medial cuneiform + base of 1st metatarsal",
      action: "Dorsiflexion of foot + inversion",
      nerv: "Deep peroneal nerve (L4-L5)",
    },
    peroneus: {
      descr: "2 muscles: longus and brevis. Lateral on calf. Stabilizes ankle.",
      origin: "Fibula (lateral)",
      insert: "Medial cuneiform / 5th metatarsal",
      action: "Foot eversion + plantar flexion",
      nerv: "Superficial peroneal nerve (L5-S1)",
    },
    rhomboideusmajor: {
      descr: "Under trapezius; pulls scapulae toward the spine.",
      origin: "Spinous processes T2-T5",
      insert: "Medial border of scapula (below spine of scapula)",
      action: "Adduction, elevates and rotates scapula",
      nerv: "Dorsal scapular nerve (C5)",
    },
    rhomboideusminor: {
      descr: "Smaller and higher than rhomboid major.",
      origin: "Nuchal ligament + spinous processes C7-T1",
      insert: "Medial border of scapula (at level of scapular spine)",
      action: "Adduction and fixation of scapula",
      nerv: "Dorsal scapular nerve (C5)",
    },
    levatorscapulae: {
      descr: "Important in shoulder-neck muscle tension during stress.",
      origin: "Transverse processes C1-C4",
      insert: "Superior angle of scapula",
      action: "Elevates scapula (with trapezius); rotates neck",
      nerv: "Dorsal scapular nerve (C5) + C3-C4",
    },
    serratusanterior: {
      descr: '"Boxer\'s muscle". Paralysis gives winged scapula.',
      origin: "Ribs 1-9 (lateral surfaces)",
      insert: "Medial border of scapula (anterior surface)",
      action: "Scapular protraction (pushing); upward rotation (overhead arm lift)",
      nerv: "Long thoracic nerve (C5-C7)",
    },
    serratusposteriorsuperior: {
      descr: "Accessory respiratory muscle.",
      origin: "Nuchal ligament + spinous processes C7-T3",
      insert: "Ribs 2-5",
      action: "Elevates ribs (inspiration)",
      nerv: "Intercostal nerves T1-T4",
    },
    serratusposteriorinferior: {
      descr: "Accessory respiratory muscle.",
      origin: "Spinous processes T11-L2",
      insert: "Ribs 9-12",
      action: "Depresses ribs (forced expiration)",
      nerv: "Intercostal nerves T9-T12",
    },
    coracobrachialis: {
      descr: "Small muscle under biceps. Surgical landmark.",
      origin: "Coracoid process of scapula",
      insert: "Medial surface of humerus",
      action: "Shoulder flexion + adduction",
      nerv: "Musculocutaneous nerve (C5-C7)",
    },
    anconeus: {
      descr: "Small triangular muscle, visible at the surface of the elbow posterolaterally.",
      origin: "Lateral epicondyle of humerus",
      insert: "Olecranon of ulna",
      action: "Assists triceps in elbow extension",
      nerv: "Radial nerve (C7-C8)",
    },
    pronatorteres: {
      descr: "Formed by 2 heads; median nerve passes between them.",
      origin: "Medial epicondyle of humerus + coronoid process of ulna",
      insert: "Lateral surface of radius (middle)",
      action: "Forearm pronation; elbow flexion",
      nerv: "Median nerve (C6-C7)",
    },
    pronatorquadratus: {
      descr: "Quadratic, deep at the wrist. Primary pronator.",
      origin: "Distal quarter of ulna",
      insert: "Distal quarter of radius",
      action: "Forearm pronation (primary)",
      nerv: "Anterior interosseous nerve (median, C8-T1)",
    },
    supinator: {
      descr: "Wraps around radius neck; pierced by radial nerve.",
      origin: "Lateral epicondyle + ulnar supinator crest",
      insert: "Proximal third of radius",
      action: "Forearm supination",
      nerv: "Deep branch of radial nerve (C5-C6)",
    },
    flexorcarpiradialis: {
      descr: "Palpable tendon on the radial side of the wrist.",
      origin: "Medial epicondyle of humerus",
      insert: "Base of 2nd metacarpal",
      action: "Wrist flexion + abduction",
      nerv: "Median nerve (C6-C7)",
    },
    flexorcarpiulnaris: {
      descr: "Most medial wrist flexor.",
      origin: "Medial epicondyle + olecranon of ulna",
      insert: "Pisiform + hook of hamate + base of 5th metacarpal",
      action: "Wrist flexion + adduction",
      nerv: "Ulnar nerve (C8-T1)",
    },
    palmarislongus: {
      descr: "Inconsistent — absent in ~15% of people. Harvested as a tendon graft.",
      origin: "Medial epicondyle of humerus",
      insert: "Palmar aponeurosis",
      action: "Assists wrist flexion; tenses the aponeurosis",
      nerv: "Median nerve (C7-T1)",
    },
    flexordigitorum: {
      descr: "2 layered muscles; the deep one reaches the distal phalanx.",
      origin: "Medial epicondyle / ulna and radius",
      insert: "Base of middle (superf.) / distal (deep) phalanx",
      action: "Flexion of fingers II-V + wrist",
      nerv: "Median (superf.) / median + ulnar (deep)",
    },
    extensorcarpiradialis: {
      descr: "The 2 key muscles that extend the wrist.",
      origin: "Supracondylar crest / lateral epicondyle",
      insert: "Base of metacarpal II / III",
      action: "Wrist extension + abduction",
      nerv: "Radial nerve (C6-C7)",
    },
    extensordigitorum: {
      descr: "Tendons visible on the back of the hand.",
      origin: "Lateral epicondyle of humerus",
      insert: "Distal phalanges of fingers II-V (dorsal aponeurosis)",
      action: "Extension of fingers II-V + wrist",
      nerv: "Deep radial nerve (C7-C8)",
    },
    abductorpollicis: {
      descr: 'The muscle of the "OK sign" with the thumb.',
      origin: "Radius+ulna / scaphoid+trapezium",
      insert: "Base of metacarpal I / proximal phalanx I",
      action: "Thumb abduction",
      nerv: "Radial (longus) / median (brevis)",
    },
    opponenspollicis: {
      descr: "Makes precision grip possible.",
      origin: "Trapezium + flexor retinaculum",
      insert: "Metacarpal I",
      action: "Thumb opposition (unique to humans!)",
      nerv: "Median nerve (C8-T1)",
    },
    pectineus: {
      descr: "Most superior adductor; in the femoral triangle.",
      origin: "Pectineal crest of pubis",
      insert: "Pectineal line of femur",
      action: "Thigh adduction + flexion",
      nerv: "Femoral nerve (L2-L3)",
    },
    adductorbrevis: {
      descr: "Under adductor longus. Separates the branches of the obturator nerve.",
      origin: "Inferior ramus of pubis",
      insert: "Linea aspera (upper third)",
      action: "Thigh adduction + flexion + ext. rotation",
      nerv: "Obturator nerve (L2-L4)",
    },
    adductormagnus: {
      descr: "Largest adductor; has 2 innervations (mixed function).",
      origin: "Ischiopubic rami + ischial tuberosity",
      insert: "Linea aspera + adductor tubercle of femur",
      action: "Thigh adduction + extension (ischial part)",
      nerv: "Obturator + tibial (L2-L4)",
    },
    gluteusminimus: {
      descr: "Deepest of the 3 gluteal muscles.",
      origin: "Iliac wing (between ant. and inf. gluteal lines)",
      insert: "Greater trochanter",
      action: "Thigh abduction and int. rotation; pelvic stabilizer",
      nerv: "Superior gluteal nerve (L4-S1)",
    },
    piriformis: {
      descr:
        "Anatomical landmark: sciatic nerve passes under it (sometimes through — piriformis syndrome).",
      origin: "Anterior surface of sacrum",
      insert: "Greater trochanter",
      action: "External rotation of thigh",
      nerv: "Sacral plexus (S1-S2)",
    },
    tensorfascialatae: {
      descr: "Anterior on thigh; tenses fascia lata.",
      origin: "Anterior superior iliac spine",
      insert: "Iliotibial tract (then tibia)",
      action: "Flexion + abduction + int. rotation thigh; stabilizes knee",
      nerv: "Superior gluteal nerve (L4-S1)",
    },
    vastusmedialis: {
      descr: 'Part of quadriceps; the "teardrop" above the knee — visible in athletes.',
      origin: "Intertrochanteric line + linea aspera (medial)",
      insert: "Quadriceps tendon → tibial tuberosity",
      action: "Knee extension; stabilizes patella medially",
      nerv: "Femoral nerve (L2-L4)",
    },
    vastuslateralis: {
      descr: "Largest head of quadriceps. Common IM injection site in infants.",
      origin: "Intertrochanteric line + greater trochanter + linea aspera (lateral)",
      insert: "Quadriceps tendon",
      action: "Knee extension",
      nerv: "Femoral nerve (L2-L4)",
    },
    rectusfemoris: {
      descr: "Only biarticular head of quadriceps (acts on 2 joints).",
      origin: "Anterior inferior iliac spine",
      insert: "Quadriceps tendon",
      action: "Knee extension + hip flexion",
      nerv: "Femoral nerve (L2-L4)",
    },
    tibialisposterior: {
      descr: "Deepest posterior calf muscle. Stabilizes foot arch.",
      origin: "Tibia + fibula + interosseous membrane (deep)",
      insert: "Navicular + cuneiforms + bases of metatarsals 2-4",
      action: "Plantar flexion + inversion; supports plantar arch",
      nerv: "Tibial nerve (L4-L5)",
    },
    flexorhalluciisLongus: {
      descr: "Important for propulsion in walking and running (last point of contact).",
      origin: "Lower two thirds of fibula",
      insert: "Distal phalanx of hallux",
      action: "Hallux flexion + foot plantar flexion",
      nerv: "Tibial nerve (L5-S2)",
    },
    extensorhalluciisLongus: {
      descr: "Tendon visible above the hallux when lifting the big toe.",
      origin: "Middle of fibula + interosseous membrane",
      insert: "Distal phalanx of hallux",
      action: "Hallux extension + dorsiflexion + inversion",
      nerv: "Deep peroneal nerve (L5)",
    },
    plantaris: {
      descr: "Small vestigial muscle. Very long tendon — used as a graft.",
      origin: "Lateral supracondylar line of femur",
      insert: "Calcaneus (with Achilles tendon)",
      action: "Assists plantar flexion + knee flexion",
      nerv: "Tibial nerve (S1-S2)",
    },
    popliteus: {
      descr: "Small, deep in the popliteal fossa. Initiator of knee flexion.",
      origin: "Lateral femoral condyle",
      insert: "Tibia (above soleal line)",
      action: '"Unlocks" the knee from full extension (medial rotation of tibia)',
      nerv: "Tibial nerve (L4-S1)",
    },
    iliocostalis: {
      descr: "Most lateral column of the erector spinae.",
      origin: "Iliac crest + ribs",
      insert: "Upper ribs + cervical transverse processes",
      action: "Spine extension + lateral flexion",
      nerv: "Dorsal rami of spinal nerves",
    },
    longissimus: {
      descr: "Middle column of erector spinae. The longest.",
      origin: "Sacral crest + transverse processes",
      insert: "Transverse processes + mastoid",
      action: "Spine + head extension; lateral flexion",
      nerv: "Dorsal rami of spinal nerves",
    },
    spinalis: {
      descr: "Most medial column of erector spinae.",
      origin: "Spinous processes T10-L2",
      insert: "Upper spinous processes T1-T8",
      action: "Spine extension",
      nerv: "Dorsal rami of spinal nerves",
    },
    multifidus: {
      descr: "Key muscle for lumbar spine stability. Atrophied in chronic low back pain.",
      origin: "Sacrum + mammillary/transverse processes",
      insert: "Spinous processes (2-4 vertebrae above)",
      action: "Spine stabilization + extension + contralateral rotation",
      nerv: "Dorsal rami of spinal nerves",
    },
    diaphragm: {
      descr:
        '"The diaphragm breathes" — drops 1-10 cm with each breath. Crossed by aorta, esophagus, IVC through 3 hiatuses.',
      origin: "Sternum (xiphoid) + ribs 7-12 + L1-L3 (crura)",
      insert: "Central tendon (frenocentrum)",
      action: "Primary inspiration — descends, enlarges thoracic cavity",
      nerv: "Phrenic nerve (C3-C5)",
    },
    intercostalexternus: {
      descr: 'Fibers angled "hands in pockets". Superficial layer.',
      origin: "Lower border of superior rib",
      insert: "Upper border of immediately inferior rib",
      action: "Elevates ribs (inspiration)",
      nerv: "Intercostal nerves",
    },
    intercostalinternus: {
      descr: "Fibers perpendicular to externals. Beneath the external layer.",
      origin: "Upper border of inferior rib",
      insert: "Lower border of superior rib",
      action: "Depresses ribs (forced expiration)",
      nerv: "Intercostal nerves",
    },
    levatorani: {
      descr: "Composed of puborectalis + pubococcygeus + iliococcygeus. Critical for continence.",
      origin: "Pubis + tendinous arch of pelvic fascia",
      insert: "Coccyx + anococcygeal raphe + pelvic organs",
      action: "Supports pelvic floor; anal contraction",
      nerv: "Pudendal nerve + sacral branches (S3-S4)",
    },
  };
  for (var k in EN) {
    if (!D[k]) continue;
    if (EN[k].descr) D[k].descr_en = EN[k].descr;
    if (EN[k].origin) D[k].origin_en = EN[k].origin;
    if (EN[k].insert) D[k].insert_en = EN[k].insert;
    if (EN[k].action) D[k].action_en = EN[k].action;
    if (EN[k].nerv) D[k].nerv_en = EN[k].nerv;
  }
})();

(function trainMuscularAI() {
  if (typeof SITE_KB === "undefined") return;
  var entries = [
    {
      id: "mu.overview",
      triggers: ["sistem muscular|sistemul muscular|muschi corp|cati muschi"],
      answer:
        "Sistemul muscular conține <b>~640 mușchi</b> la adult (~350 voluntari/striați + restul netezi+cardiac). Reprezintă ~40-50% din masa corporală. Funcții: mișcare, postură, termoreglare, protecție viscere.",
    },
    {
      id: "mu.types",
      triggers: ["tipuri muschi|muschi striat|muschi neted|muschi cardiac"],
      answer:
        "3 tipuri: <b>striat scheletic</b> (voluntar, multinucleat, atașat de oase) — mișcare; <b>neted</b> (involuntar, fusiform, mononucleat) — vase, viscere; <b>cardiac</b> (striat, involuntar, ramificat, cu discuri intercalare) — doar miocardul.",
    },
    {
      id: "mu.fibers",
      triggers: ["fibre musculare|sarcomer|actina|miozina|miofibrila"],
      answer:
        "Fibra musculară = celulă lungă multinucleată → conține <b>miofibrile</b> → divizate în <b>sarcomere</b> (între 2 linii Z). Sarcomerul conține miofilamente: <b>actină</b> (subțire) + <b>miozină</b> (groasă). Alunecarea lor produce contracția.",
    },
    {
      id: "mu.contraction",
      triggers: ["contractie musculara|cuplaj excitatie|cum se contracta"],
      answer:
        "Contracția: impuls nervos → <b>placa neuromusculară</b> → eliberare <b>acetilcolină</b> → depolarizare sarcolemă → eliberare <b>Ca²⁺</b> din RE → Ca²⁺ leagă troponina → tropomiozina expune actina → miozina trage (consumă <b>ATP</b>) → sarcomerul se scurtează.",
    },
    {
      id: "mu.types_fibers",
      triggers: ["fibre rosii|fibre albe|fibre rapide|fibre lente|tip i|tip ii"],
      answer:
        "<b>Tip I (lente, roșii)</b>: bogate în mioglobină + mitocondrii, rezistente la oboseală, aerobe (maraton). <b>Tip IIa (mixte)</b>: rapide aerob/anaerob. <b>Tip IIb/x (albe rapide)</b>: anaerobe, contracție rapidă explozivă (sprint).",
    },
    {
      id: "mu.largest",
      triggers: ["cel mai mare muschi|cel mai puternic|cel mai mic|maseter"],
      answer:
        "<b>Cel mai mare</b>: gluteus maximus (fesier mare). <b>Cel mai puternic raportat la dim.</b>: maseter (forța de mușcătură). <b>Cel mai lung</b>: sartorius (croitor). <b>Cel mai mic</b>: stapedius (urechea medie, 1mm).",
    },
    {
      id: "mu.cap_gat",
      triggers: ["muschi cap|muschi fata|mimica|masticatie"],
      answer:
        "<b>Mimica</b> (n. facial VII): orbicular ocular/oral, frontal, zigomatic, buccinator, mentalis, platisma. <b>Masticație</b> (n. mandibular V3): maseter, temporal, pterigoidian medial/lateral. <b>Gât</b>: sternocleidomastoidian, scaleni, trapez superior.",
    },
    {
      id: "mu.umar",
      triggers: ["coif rotatori|rotator cuff|sits|muschi umar"],
      answer:
        "<b>Coiful rotatorilor (SITS)</b>: 4 mușchi care stabilizează umărul: <b>S</b>upraspinos (abducție), <b>I</b>nfraspinos (rotație ext.), <b>T</b>eres minor (rotație ext.), <b>S</b>ubscapular (rotație int.). Supraspinosul = locația cea mai frecventă de tendinită.",
    },
    {
      id: "mu.brat",
      triggers: ["muschi brat|biceps|triceps|brahial"],
      answer:
        "<b>Anterior</b>: biceps brahial (2 capete, flexie+supinație), brahial (flexor pur), coracobrahial. <b>Posterior</b>: triceps brahial (3 capete, extensie cot). Antagonisti: biceps ↔ triceps.",
    },
    {
      id: "mu.antebrat",
      triggers: ["muschi antebrat|flexor carp|extensor carp|pronator"],
      answer:
        "Antebrațul are 2 compartimente: <b>anterior (flexori)</b> — flexori carp radial/ulnar, palmar lung, flexori superficiali/profunzi degete, pronator rotund/pătrat; <b>posterior (extensori)</b> — extensori carp radial/ulnar, extensori degete, supinator.",
    },
    {
      id: "mu.abdomen_layers",
      triggers: ["perete abdominal|strat abdominal|drept abdominal|oblic|transvers"],
      answer:
        'Perete abdominal anterior (4 straturi): <b>drept abdominal</b> (cele 6 "pătrățele"), <b>oblic extern</b> (mâini-în-buzunar), <b>oblic intern</b> (perpendicular pe extern), <b>transvers abdominal</b> (cel mai profund, "centura" naturală). Linia albă = rafeu central.',
    },
    {
      id: "mu.spate",
      triggers: ["muschi spate|trapez|latissim|romboid|erector spinae"],
      answer:
        "<b>Superficial</b>: trapez (3 fascicule), latissim dorsal (cel mai mare). <b>Mijlociu</b>: romboizi major/minor, ridicător scapulei, dințați. <b>Profund</b>: erector spinae (iliocostal + longissim + spinal), multifid (stabilizator lombar).",
    },
    {
      id: "mu.coapsa",
      triggers: ["muschi coapsa|cvadriceps|ischio|adductori|hamstrings"],
      answer:
        '<b>Anterior</b> — cvadriceps (4 capete: drept femural + vast medial/lateral/intermediar) → extensie genunchi. <b>Medial</b> — adductori (lung/scurt/mare, gracilis, pectineu). <b>Posterior</b> — ischio-crural/"hamstrings" (biceps femural + semitendinos + semimembranos) → flexie genunchi + extensie șold.',
    },
    {
      id: "mu.gamba",
      triggers: ["muschi gamba|gastrocnemian|soleus|achile|tibial|peroneal"],
      answer:
        "<b>Posterior</b> (triceps sural): gastrocnemian (2 capete, biarticular) + soleus → formează <b>tendonul lui Ahile</b>, flexie plantară. <b>Anterior</b>: tibial anterior, extensori degete/haluce → flexie dorsală. <b>Lateral</b>: peronieri lung/scurt → eversie.",
    },
    {
      id: "mu.diaphragm",
      triggers: ["diafragm|diaphragma|inspir|frenic"],
      answer:
        "<b>Diafragmul</b> — mușchiul respirator principal. Origine: stern (xifoid) + coaste 7-12 + L1-L3 (stâlpi). Inserție: <b>centrul tendinos</b>. Acțiune: coboară la inspirație, mărind cavitatea toracică. Trecut de aorta, esofag, VCI prin 3 hiatusuri. <b>Nerv frenic (C3-C5)</b>.",
    },
    {
      id: "mu.unique_facts",
      triggers: ["curiozitati muschi|stiai|fapte muschi|muschi interesant"],
      answer:
        "🔥 Fapte: <b>limba</b> = 8 mușchi singurul prins de ambele capete. <b>Inima</b> = singurul mușchi care nu obosește. <b>Stapedius</b> (cel mai mic, 1mm). <b>Gluteus maximus</b> = cel mai voluminos. <b>Maseter</b> = cel mai puternic (forță de mușcătură ~60-100kg). <b>Sartorius</b> = cel mai lung (~60cm).",
    },
    {
      id: "mu.smile",
      triggers: ["zambet|smile|rasul|muschi rad"],
      answer:
        'Pentru zâmbet: <b>zigomatic mare</b> (ridică colțurile gurii) + <b>orbicular ocular</b> (ridurile din jurul ochilor — "zâmbetul Duchenne"). Pentru râs forțat: + <b>risorius</b> (trage lateral). Inervație: nerv facial (VII) — paralizie facială = nu poți zâmbi.',
    },
    {
      id: "mu.posture",
      triggers: ["postura|stat in picioare|spate drept"],
      answer:
        "Postura erectă depinde de <b>mușchi posturali</b>: erector spinae (extensie coloană), gluteus medius (stabilizare pelvis), cvadriceps (genunchi), gastrocnemian/soleus (stă la verticală pe glezne). Slăbiciunea oricăruia → durere de spate.",
    },
    {
      id: "mu.facial",
      triggers: ["paralizie faciala|bell palsy|nerv facial"],
      answer:
        "<b>Paralizia facială (Bell)</b>: inflamarea n. VII → asimetria feței, nu poți închide ochiul, colțul gurii cade. Diferit de AVC: la Bell e afectată FAȚA ÎNTREAGĂ de o parte, la AVC doar partea inferioară (mușchii frunții = inervație bilaterală).",
    },
    {
      id: "mu.tonus",
      triggers: ["tonus muscular|hipertonie|hipotonie"],
      answer:
        "<b>Tonusul muscular</b> = ușoară contracție permanentă chiar și în repaus, mențută prin reflexul miotatic (fus muscular). <b>Hipertonie</b>: prea mult (Parkinson, spasticitate). <b>Hipotonie</b>: prea puțin (paralizie flască, miopatii).",
    },
    {
      id: "mu.bones_attach",
      triggers: ["cum se prinde muschi|insertia muschi|origine muschi|tendon"],
      answer:
        "Mușchii se prind de oase prin <b>tendoane</b> (țesut conjunctiv dens). <b>Origine</b> = punct fix (de obicei proximal). <b>Inserție</b> = punct mobil (de obicei distal). Tendoanele pot fi scurte (mușchi musculos) sau lungi (mușchi cu pântec mic + tendon lung — ex. flexor lung haluce).",
    },
    {
      id: "mu.eat_protein",
      triggers: ["proteine muschi|muschi sport|hipertrofie|cum cresc muschi"],
      answer:
        "Mușchii cresc prin <b>hipertrofie</b> (mărirea fibrelor existente, NU înmulțire). Necesită: <b>1) micro-leziuni</b> prin antrenament rezistență, <b>2) proteine</b> (~1.6-2g/kg/zi), <b>3) repaus</b> (cresc în somn). Steroizii anabolizanți accelerează dar dăunează inima/ficatul.",
    },
    {
      id: "mu.cramps",
      triggers: ["crampe musculare|spasm|carcei"],
      answer:
        "<b>Crampele</b>: contracție involuntară dureroasă. Cauze frecvente: deshidratare, deficit electroliți (Mg, K, Na, Ca), oboseală, dezechilibru pH. Frecvent la gastrocnemian (cârcei la pulpă). Tratament: stretching pasiv + hidratare.",
    },
    {
      id: "mu.atrophy",
      triggers: ["atrofie musculara|imobilizare|distrofie"],
      answer:
        "<b>Atrofia musculară</b>: pierderea masei prin neutilizare (imobilizare în ghips), denervare, îmbătrânire (<b>sarcopenia</b>: -3-8% per decadă după 30 ani), boli (distrofie Duchenne — defect distrofină, băieți).",
    },
    {
      id: "mu.proprioception",
      triggers: ["propriocepti|fus muscular|gold|reflex miotatic"],
      answer:
        "<b>Propriocepția</b> = simțul poziției corpului fără văz. Receptori: <b>fusuri musculare</b> (în fibrele intrafusale, detectează întinderea) + <b>organe tendinoase Golgi</b> (detectează tensiunea). Bază pentru reflexele de echilibru.",
    },
    {
      id: "mu.fascia",
      triggers: ["fascia|fascie|aponevroza|tesut conjunctiv muschi"],
      answer:
        "<b>Fascia</b> = țesut conjunctiv care învelește mușchii. Niveluri: <b>endomisium</b> (înconjoară fibra), <b>perimisium</b> (fascicul), <b>epimisium</b> (mușchiul întreg), <b>fascia profundă</b> (separă compartimente). <b>Fascia lata</b> = pe coapsă; <b>aponevroza</b> = tendon plat lat (palmară, plantară).",
    },
    {
      id: "mu.neurom_junct",
      triggers: ["placa neuromusculara|acetilcolina|miastenia"],
      answer:
        "<b>Placa motorie/neuromusculară</b>: sinapsa între axonul motor + fibra musculară. Mediator: <b>acetilcolină</b> (ACh). Boli: <b>Miastenia gravis</b> (anticorpi anti-receptori ACh → oboseală musculară fluctuantă, ptoza palpebrală). Toxina botulinică blochează ACh (Botox).",
    },
    {
      id: "mu.energy",
      triggers: ["energie muschi|atp muschi|fosfocreatina|glicogen"],
      answer:
        "Surse de energie: <b>ATP direct</b> (~2 sec), <b>fosfocreatină</b> (~10 sec, sprint), <b>glicoliza anaerobă</b> (~1-2 min, produce lactat → arsură), <b>fosforilare oxidativă aerobă</b> (nelimitat — grăsimi + glucoză + O₂).",
    },
    {
      id: "mu.lactic",
      triggers: ["acid lactic|lactat|arsura muschi"],
      answer:
        "<b>Acidul lactic</b> se formează în glicoliza anaerobă (efort intens fără O₂ suficient). Produce <b>arsura</b> dar NU este cauza durerii post-efort de 1-2 zile (aceea = micro-leziuni musculare — DOMS: Delayed Onset Muscle Soreness). Lactatul e ELIMINAT în 1 oră, nu durează zile.",
    },
    {
      id: "mu.stretch",
      triggers: ["stretching|intindere muschi|flexibilitate"],
      answer:
        "<b>Stretching</b>: <b>static</b> (țineți poziția 30s, post-efort), <b>dinamic</b> (pre-efort, încălzire), <b>PNF</b> (contracție-relaxare, cea mai eficientă). NU se face stretching forțat pe mușchi reci — risc de microleziuni.",
    },
    {
      id: "mu.smooth",
      triggers: ["muschi neted|musculatura neteda|peristaltic"],
      answer:
        "<b>Mușchi neted</b>: fără striații, contracție lentă/susținută, inervat de sistemul vegetativ. Localizare: pereții tubului digestiv (peristaltism), vase de sânge (presiune arterială), bronhii, vezică urinară, uter, ochi (pupila, cristalinul).",
    },
    {
      id: "mu.cardiac",
      triggers: ["miocard|muschi cardiac|inima muscular"],
      answer:
        "<b>Miocardul</b>: mușchi striat unic — involuntar, ramificat, cu <b>discuri intercalare</b> (joncțiuni speciale care permit sincronizare instantă). Are propriul ritm prin nodulul sinoatrial (autoritmic). Nu se odihnește niciodată — ~3 miliarde bătăi/viață.",
    },
    {
      id: "mu.botox",
      triggers: ["botox|toxina botulinica|paralizie temporara"],
      answer:
        "<b>Botox</b> (toxina botulinică A): blochează eliberarea acetilcolinei la placa neuromusculară → paralizie temporară (3-6 luni). Folosit pentru: riduri (orbicular ocular), strabism, distonii, migrene, hiperhidroză. Doza mare = botulism letal.",
    },
    {
      id: "mu.kegel",
      triggers: ["kegel|planseu pelvin|levator ani|continenta"],
      answer:
        "<b>Exercițiile Kegel</b>: contracția mușchilor planșeului pelvin (în principal <b>levator ani</b>: pubococcigian + iliococcigian + puborectal). Indicate: incontinență urinară, post-naștere, prolaps pelvin. Esențiale pentru continenta.",
    },
    {
      id: "mu.respiration",
      triggers: ["muschi respiratori|inspirație|expirație"],
      answer:
        "<b>Inspirație normală</b>: diafragm + intercostali externi. <b>Inspirație forțată</b>: + scaleni, sternocleidomastoidian, pectoral mic, dințați. <b>Expirație normală</b>: pasivă. <b>Expirație forțată</b>: drept abdominal + oblici + transvers + intercostali interni.",
    },
    {
      id: "mu.iliopsoas",
      triggers: ["iliopsoas|psoas|iliac|flexor sold"],
      answer:
        "<b>Iliopsoasul</b> = psoas mare + iliac. <b>Principal flexor al șoldului</b>. Origine: coloană (T12-L4) + fosă iliacă. Inserție: trohanter mic. Scurtat la cei care stau mult la birou → durere lombară, postură anterioară.",
    },
    {
      id: "mu.pelvis_fl",
      triggers: ["planseu pelvin|pelvic floor|continenta"],
      answer:
        "<b>Planșeul pelvin</b>: levator ani (3 părți) + coccigian. Susțin organele pelvine (vezica, uter, rect). Slăbire → prolaps, incontinență. Întărit prin Kegel sau hipopresive.",
    },
    {
      id: "mu.electromyography",
      triggers: ["emg|electromiografie|test muschi"],
      answer:
        "<b>EMG (electromiografie)</b>: înregistrează activitatea electrică a mușchiului prin electrozi (ac sau de suprafață). Diagnostichează: miopatii, neuropatii, denervare, miastenia. Combinată cu studii de conducere nervoasă.",
    },
    {
      id: "mu.recovery",
      triggers: ["recuperare muschi|refacere|odihna muschi"],
      answer:
        "Recuperare optimă: <b>somn 7-9h</b> (eliberare GH, repararea fibrelor), <b>hidratare</b>, <b>proteine post-efort</b> (în 30min-2h), <b>masaj/foam rolling</b>, <b>active recovery</b> (mers ușor a doua zi). Mușchii se refac complet la 48-72h.",
    },
    {
      id: "mu.compartments",
      triggers: ["sindrom compartiment|fascia compartiment"],
      answer:
        "<b>Sindromul de compartiment</b>: presiune crescută în compartiment muscular (post traumă, efort intens) → ischemie. Urgență chirurgicală (fasciotomie) — dacă nu se eliberează în 6-8h → necroză + neuropatie permanentă.",
    },
    {
      id: "mu.lateral_pivot",
      triggers: ["rotatie laterala|pivot|tibial"],
      answer:
        "Pivot rotație externă coapsă: <b>cei 6 muschi mici</b> sub gluteus: piriform, gemen superior/inferior, obturator intern/extern, pătratul femural. Critici pentru stabilitatea șoldului în mers.",
    },
    {
      id: "mu.tic",
      triggers: ["ticuri musculare|fasciculatii|crampa nocturna"],
      answer:
        '<b>Fasciculațiile</b> = contracții involuntare ale unei fibre/fascicul (vizibile ca "zvâcnire"). Cauze benigne: oboseală, cofeină, stres. Patologice (dacă persistă): SLA (scleroza laterală amiotrofică), neuropatii.',
    },
    {
      id: "mu.protein_actin",
      triggers: ["actina|miozina|troponina|tropomiozina"],
      answer:
        '<b>Proteine contractile</b>: <b>actina</b> (filament subțire), <b>miozina</b> (filament gros, are "capete" care leagă ATP). <b>Proteine reglatorii</b>: <b>tropomiozina</b> (acoperă situsurile actinei) + <b>troponina</b> (complex de 3 — TnC, TnI, TnT — leagă Ca²⁺).',
    },
  ];
  for (var i = 0; i < entries.length; i++) SITE_KB.push(entries[i]);

  if (typeof CURIOZITATI !== "undefined") {
    var moreCurios = [
      "💪 La adult, mușchii striați reprezintă <b>40-50%</b> din masa corporală. La culturisti până la 60%.",
      "🦴 Mușchiul <b>maseter</b> exercită o forță de mușcătură de aproximativ <b>60-100 kg</b> — putem rupe alune cu dinții.",
      "👁️ Mușchii oculari mișcă ochii peste <b>100.000 de ori/zi</b>. Cei mai rapizi mușchi din corp (timp de reacție ~50ms).",
      "🦵 <b>Sartorius</b> este cel mai lung mușchi din corp (~60cm la adult). Traversează diagonal coapsa.",
      "🫀 <b>Miocardul</b> este singurul mușchi care nu obosește niciodată — bate de ~100.000 ori/zi pentru toată viața.",
      "🤏 Mâna are <b>34 de mușchi</b> (intrinseci + extrinseci) care permit precizia mișcărilor fine.",
      "🐭 Mușchiul <b>stapedius</b> din urechea medie este cel mai mic mușchi striat din corp — doar <b>~1 mm</b>.",
      '😊 Pentru un zâmbet folosim <b>17 mușchi</b>, pentru încruntare <b>43</b>. E mai "ușor" să zâmbești.',
      "🍽️ <b>Limba</b> este formată din 8 mușchi diferiți și este singurul mușchi prins doar de un capăt.",
      "🏋️ Mușchii cresc prin <b>hipertrofie</b> (fibre mai groase), NU prin hiperplazie (înmulțirea fibrelor).",
      "🩹 <b>DOMS</b> (durerea post-efort) NU este cauzată de acidul lactic, ci de micro-leziuni la fibrele musculare.",
      "🧠 Aproximativ <b>40% din creier</b> e dedicat controlului mușchilor (cortex motor + cerebel + ganglioni bazali).",
      "🦠 La fiecare contracție musculară, fibrele suferă <b>micro-leziuni</b> reparate apoi cu fibre mai puternice.",
      "🦘 Mușchii pot lucra <b>excentric</b> (alungire sub tensiune) cu ~30% mai multă forță decât concentric.",
      "💧 Mușchii sunt <b>~75% apă</b>. Deshidratarea cu doar 2% scade performanța cu 10-20%.",
      "⚡ Impulsul nervos atinge mușchiul în <b>~0.5 ms</b>, dar contracția completă durează ~50-100ms.",
      "🔥 Mușchii produc ~<b>85% din căldura corporală</b>. Tremurul intensifică producția cu până la 5x.",
      "🐅 Cea mai rapidă contracție musculară: <b>extensorul digital</b> al unei muște de fructe — 400Hz.",
      "🧬 Distrofia musculară Duchenne (DMD) — boală genetică recesivă X-linked, afectează ~1 din 3500 băieți.",
      "🦷 Tot mușchiul masticator (maseter+temporal+pterigoide) pe ambele părți poate genera până la <b>720N</b> forță.",
    ];
    for (var j = 0; j < moreCurios.length; j++) CURIOZITATI.push(moreCurios[j]);
  }
})();

(function notebookSystem() {
  var NB_STATE = {
    filter: "all",
    tagFilter: null,
    query: "",
    editingId: null,
    activeColor: "default",
  };

  function getKey() {
    var u = typeof getCurrentUser === "function" ? getCurrentUser() : null;
    return u ? "bionexus_notebook_" + u.user : "bionexus_notebook_guest";
  }
  function loadNotes() {
    try {
      return JSON.parse(localStorage.getItem(getKey()) || "[]");
    } catch (e) {
      return [];
    }
  }
  function saveNotes(notes) {
    try {
      localStorage.setItem(getKey(), JSON.stringify(notes));
    } catch (e) {
      console.warn("Notebook save fail", e);
    }
  }
  function genId() {
    return "nb_" + Date.now().toString(36) + "_" + Math.random().toString(36).slice(2, 7);
  }
  function escH(s) {
    return String(s || "").replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function fmtDate(ts) {
    var d = new Date(ts);
    var now = Date.now();
    var diff = now - ts;
    if (diff < 60000) return "acum";
    if (diff < 3600000) return Math.floor(diff / 60000) + " min";
    if (diff < 86400000) return Math.floor(diff / 3600000) + " h";
    if (diff < 604800000) return Math.floor(diff / 86400000) + " zile";
    return d.toLocaleDateString("ro-RO", { day: "numeric", month: "short", year: "numeric" });
  }

  function renderList() {
    var notes = loadNotes();
    var q = NB_STATE.query.toLowerCase().trim();
    var filtered = notes.filter(function (n) {
      if (NB_STATE.filter === "starred" && !n.starred) return false;

      if (
        NB_STATE.filter !== "all" &&
        NB_STATE.filter !== "starred" &&
        n.category !== NB_STATE.filter
      )
        return false;
      if (
        NB_STATE.tagFilter &&
        !(n.tags || [])
          .map(function (t) {
            return t.toLowerCase();
          })
          .includes(NB_STATE.tagFilter.toLowerCase())
      )
        return false;
      if (q) {
        var hay = (
          n.title +
          " " +
          n.subject +
          " " +
          n.content +
          " " +
          (n.tags || []).join(" ")
        ).toLowerCase();
        if (hay.indexOf(q) < 0) return false;
      }
      return true;
    });
    filtered.sort(function (a, b) {
      if (a.starred !== b.starred) return a.starred ? -1 : 1;
      return b.updatedAt - a.updatedAt;
    });
    var list = document.getElementById("notebookList");
    var empty = document.getElementById("notebookEmpty");
    var countEl = document.getElementById("notebookCount");
    if (countEl) {
      var nbEn = typeof CUR_LANG !== "undefined" && CUR_LANG === "en";
      countEl.textContent =
        notes.length +
        " " +
        ((window.t && window.t(notes.length === 1 ? "notebook.word.one" : "notebook.word.many")) ||
          (nbEn ? (notes.length === 1 ? "note" : "notes") : notes.length === 1 ? "notiță" : "notițe"));
    }
    if (!list || !empty) return;
    if (filtered.length === 0) {
      empty.style.display = "block";
      list.innerHTML = "";
      if (notes.length > 0) empty.querySelector("h3").textContent = "Niciun rezultat";
      else empty.querySelector("h3").textContent = "Nicio notiță încă";
      return;
    }
    empty.style.display = "none";
    list.innerHTML = filtered
      .map(function (n) {
        var _en = typeof CUR_LANG !== "undefined" && CUR_LANG === "en";
        var catIc =
          { bone: "🦴", muscle: "💪", nervous: "🧠", cardio: "❤️", respiratory: "💨", digestive: "🍽️", general: "📌" }[
            n.category
          ] || "📌";
        var catName =
          {
            bone: _en ? "Bone" : "Os",
            muscle: _en ? "Muscle" : "Mușchi",
            nervous: _en ? "Nervous" : "Nervos",
            cardio: _en ? "Cardio" : "Cardiovascular",
            respiratory: _en ? "Respiratory" : "Respirator",
            digestive: _en ? "Digestive" : "Digestiv",
            general: _en ? "General" : "General",
          }[n.category] || "Note";
        var tags = (n.tags || [])
          .slice(0, 5)
          .map(function (t) {
            return '<span class="nb-card-tag">' + escH(t) + "</span>";
          })
          .join("");
        return (
          '<div class="nb-card color-' +
          (n.color || "default") +
          '" data-nb-id="' +
          n.id +
          '" onclick="openNotebookEditor(\'' +
          n.id +
          "')\">" +
          '<div class="nb-card-head"><div class="nb-card-title">' +
          escH(n.title || "Notiță fără titlu") +
          "</div>" +
          (n.starred ? '<span class="nb-card-star">⭐</span>' : "") +
          "</div>" +
          '<div class="nb-card-meta"><span class="nb-card-cat">' +
          catIc +
          " " +
          catName +
          "</span>" +
          (n.subject ? '<span class="nb-card-subject">' + escH(n.subject) + "</span>" : "") +
          "</div>" +
          '<div class="nb-card-content">' +
          escH(n.content || "").replace(/\n/g, "<br>") +
          "</div>" +
          (tags ? '<div class="nb-card-tags">' + tags + "</div>" : "") +
          '<div class="nb-card-date">' +
          fmtDate(n.updatedAt) +
          "</div>" +
          "</div>"
        );
      })
      .join("");
    renderTagFilters(notes);
  }

  function renderTagFilters(notes) {
    var allTags = {};
    notes.forEach(function (n) {
      (n.tags || []).forEach(function (t) {
        var k = t.toLowerCase();
        allTags[k] = (allTags[k] || 0) + 1;
      });
    });
    var sorted = Object.keys(allTags)
      .sort(function (a, b) {
        return allTags[b] - allTags[a];
      })
      .slice(0, 10);
    var wrap = document.getElementById("notebookTagsWrap");
    if (!wrap) return;
    if (sorted.length === 0) {
      wrap.style.display = "none";
      return;
    }
    wrap.style.display = "flex";
    wrap.innerHTML = sorted
      .map(function (t) {
        var active = NB_STATE.tagFilter === t ? " active" : "";
        return (
          '<button class="nb-tag-filter' +
          active +
          '" data-nb-tag="' +
          escH(t) +
          '">#' +
          escH(t) +
          ' <span style="opacity:.6">(' +
          allTags[t] +
          ")</span></button>"
        );
      })
      .join("");
    wrap.querySelectorAll(".nb-tag-filter").forEach(function (b) {
      b.addEventListener("click", function () {
        var t = b.getAttribute("data-nb-tag");
        NB_STATE.tagFilter = NB_STATE.tagFilter === t ? null : t;
        renderList();
      });
    });
  }

  window.openNotebook = function () {
    var m = document.getElementById("notebookModal");
    if (!m) return;
    m.style.display = "flex";
    NB_STATE.filter = "all";
    NB_STATE.tagFilter = null;
    NB_STATE.query = "";
    document.querySelectorAll(".nb-filter").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-nb-filter") === "all");
    });
    var s = document.getElementById("notebookSearch");
    if (s) s.value = "";
    renderList();
  };
  window.closeNotebook = function () {
    var m = document.getElementById("notebookModal");
    if (m) m.style.display = "none";
  };
  window.openNotebookEditor = function (id, prefillSubject, prefillCategory) {
    var m = document.getElementById("notebookEditorModal");
    if (!m) return;
    m.style.display = "flex";
    var title = document.getElementById("notebookEditorTitle");
    var delBtn = document.getElementById("nbDeleteBtn");
    if (typeof id === "string" && id.length > 0) {
      var notes = loadNotes();
      var n = notes.filter(function (x) {
        return x.id === id;
      })[0];
      if (!n) {
        return closeNotebookEditor();
      }
      NB_STATE.editingId = id;
      title.textContent = "Editare notiță";
      delBtn.style.display = "inline-block";
      document.getElementById("nbTitle").value = n.title || "";
      document.getElementById("nbCategory").value = n.category || "general";
      document.getElementById("nbSubject").value = n.subject || "";
      document.getElementById("nbContent").value = n.content || "";
      document.getElementById("nbTags").value = (n.tags || []).join(", ");
      document.getElementById("nbStarred").checked = !!n.starred;
      setActiveColor(n.color || "default");
    } else {
      NB_STATE.editingId = null;
      title.textContent = "Notiță nouă";
      delBtn.style.display = "none";
      document.getElementById("nbTitle").value = "";
      document.getElementById("nbCategory").value = prefillCategory || "general";
      document.getElementById("nbSubject").value = prefillSubject || "";
      document.getElementById("nbContent").value = "";
      document.getElementById("nbTags").value = "";
      document.getElementById("nbStarred").checked = false;
      setActiveColor("default");
    }
    setTimeout(function () {
      var t = document.getElementById("nbTitle");
      if (t) t.focus();
    }, 80);
  };
  window.closeNotebookEditor = function () {
    var m = document.getElementById("notebookEditorModal");
    if (m) m.style.display = "none";
    NB_STATE.editingId = null;
  };
  function setActiveColor(c) {
    NB_STATE.activeColor = c;
    document.querySelectorAll("#nbColorPicker .nb-color").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-color") === c);
    });
  }
  window.saveNote = function () {
    var title = document.getElementById("nbTitle").value.trim();
    var category = document.getElementById("nbCategory").value;
    var subject = document.getElementById("nbSubject").value.trim();
    var content = document.getElementById("nbContent").value.trim();
    var tagsStr = document.getElementById("nbTags").value.trim();
    var starred = document.getElementById("nbStarred").checked;
    if (!title && !content) {
      alert("Adaugă cel puțin un titlu sau conținut.");
      return;
    }
    var tags = tagsStr
      ? tagsStr
          .split(",")
          .map(function (t) {
            return t.trim();
          })
          .filter(function (t) {
            return t.length > 0;
          })
      : [];
    var notes = loadNotes();
    var now = Date.now();
    if (NB_STATE.editingId) {
      var idx = -1;
      for (var i = 0; i < notes.length; i++)
        if (notes[i].id === NB_STATE.editingId) {
          idx = i;
          break;
        }
      if (idx >= 0) {
        notes[idx].title = title;
        notes[idx].category = category;
        notes[idx].subject = subject;
        notes[idx].content = content;
        notes[idx].tags = tags;
        notes[idx].starred = starred;
        notes[idx].color = NB_STATE.activeColor;
        notes[idx].updatedAt = now;
      }
    } else {
      notes.push({
        id: genId(),
        title: title || "Notiță fără titlu",
        category: category,
        subject: subject,
        content: content,
        tags: tags,
        starred: starred,
        color: NB_STATE.activeColor,
        createdAt: now,
        updatedAt: now,
      });
    }
    saveNotes(notes);
    closeNotebookEditor();
    renderList();
  };
  window.deleteNote = function () {
    if (!NB_STATE.editingId) return;
    if (!confirm("Ștergi această notiță definitiv?")) return;
    var notes = loadNotes().filter(function (n) {
      return n.id !== NB_STATE.editingId;
    });
    saveNotes(notes);
    closeNotebookEditor();
    renderList();
  };

  document.addEventListener("DOMContentLoaded", function () {
    bindNotebook();
  });
  if (document.readyState !== "loading") bindNotebook();
  function bindNotebook() {
    var s = document.getElementById("notebookSearch");
    if (s)
      s.addEventListener("input", function () {
        NB_STATE.query = s.value;
        renderList();
      });
    document.querySelectorAll(".nb-filter").forEach(function (b) {
      b.addEventListener("click", function () {
        document.querySelectorAll(".nb-filter").forEach(function (o) {
          o.classList.remove("active");
        });
        b.classList.add("active");
        NB_STATE.filter = b.getAttribute("data-nb-filter");
        NB_STATE.tagFilter = null;
        renderList();
      });
    });
    document.querySelectorAll("#nbColorPicker .nb-color").forEach(function (b) {
      b.addEventListener("click", function () {
        setActiveColor(b.getAttribute("data-color"));
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        var em = document.getElementById("notebookEditorModal");
        if (em && em.style.display === "flex") return closeNotebookEditor();
        var nm = document.getElementById("notebookModal");
        if (nm && nm.style.display === "flex") return closeNotebook();
      }
    });
  }

  window.notebookAddForBone = function (boneName) {
    openNotebookEditor(null, boneName, "bone");
  };
  window.notebookAddForMuscle = function (muscleName) {
    openNotebookEditor(null, muscleName, "muscle");
  };
  window.notebookAddForStructure = function (name, category) {
    openNotebookEditor(null, name, category || "general");
  };

  (function injectViewerButton() {
    function ensureBtn() {
      var ipBody = document.querySelector(".app:not(.app-muscular) .info-panel .ip-body");
      if (ipBody && !document.getElementById("nbAddBoneBtn")) {
        var btn = document.createElement("button");
        btn.id = "nbAddBoneBtn";
        btn.className = "nb-context-action";
        btn.innerHTML = "📝 Adaugă notiță";
        btn.style.cssText =
          "display:none;margin:14px auto 0;position:relative;bottom:auto;right:auto;width:auto";
        btn.onclick = function () {
          var nameEl = document.getElementById("info-title");
          var name = nameEl ? nameEl.textContent.trim() : "";
          notebookAddForBone(name);
        };
        ipBody.appendChild(btn);
      }
      var ctBone = document.getElementById("info-ct");
      if (ctBone) {
        var observer = new MutationObserver(function () {
          var b = document.getElementById("nbAddBoneBtn");
          if (b) b.style.display = ctBone.style.display === "block" ? "block" : "none";
        });
        observer.observe(ctBone, { attributes: true, attributeFilter: ["style"] });
      }
      var muIp = document.querySelector(".app-muscular .info-panel .ip-body");
      if (muIp && !document.getElementById("nbAddMuBtn")) {
        var btn2 = document.createElement("button");
        btn2.id = "nbAddMuBtn";
        btn2.className = "nb-context-action";
        btn2.innerHTML = "📝 Adaugă notiță";
        btn2.style.cssText =
          "display:none;margin:14px auto 0;position:relative;bottom:auto;right:auto;width:auto";
        btn2.onclick = function () {
          var nameEl = document.getElementById("mu-info-title");
          var name = nameEl ? nameEl.textContent.trim() : "";
          notebookAddForMuscle(name);
        };
        muIp.appendChild(btn2);
      }
      var ctMu = document.getElementById("mu-info-ct");
      if (ctMu) {
        var observer2 = new MutationObserver(function () {
          var b = document.getElementById("nbAddMuBtn");
          if (b) b.style.display = ctMu.style.display === "block" ? "block" : "none";
        });
        observer2.observe(ctMu, { attributes: true, attributeFilter: ["style"] });
      }

      [
        { sys: "nervous", app: "appNervous", ct: "nervous-info-ct", cat: "nervous" },
        { sys: "cardio", app: "appCardio", ct: "cardio-info-ct", cat: "cardio" },
        { sys: "respiratory", app: "appRespiratory", ct: "resp-info-ct", cat: "respiratory" },
        { sys: "digestive", app: "appDigestive", ct: "dig-info-ct", cat: "digestive" },
      ].forEach(function (e) {
        var bid = "nbAdd_" + e.sys + "_Btn";
        var ip = document.querySelector("#" + e.app + " .info-panel .ip-body");
        if (ip && !document.getElementById(bid)) {
          var eb = document.createElement("button");
          eb.id = bid;
          eb.className = "nb-context-action";
          eb.innerHTML = "📝 Adaugă notiță";
          eb.style.cssText =
            "display:none;margin:14px auto 0;position:relative;bottom:auto;right:auto;width:auto";
          eb.onclick = function () {
            var nm = (window.__extraSelectedName && window.__extraSelectedName(e.sys)) || "";
            notebookAddForStructure(nm, e.cat);
          };
          ip.appendChild(eb);
        }
        var ct = document.getElementById(e.ct);
        if (ct && !ct.__nbObserved) {
          ct.__nbObserved = true;
          new MutationObserver(function () {
            var b = document.getElementById(bid);
            if (b) b.style.display = ct.style.display === "block" ? "block" : "none";
          }).observe(ct, { attributes: true, attributeFilter: ["style"] });
        }
      });
    }
    if (document.readyState === "loading")
      document.addEventListener("DOMContentLoaded", function () {
        setTimeout(ensureBtn, 500);
      });
    else setTimeout(ensureBtn, 500);
  })();
})();

(function muscularEnterFix() {
  var origEnter = window.enterApp;
  if (typeof origEnter !== "function") return;
  window.enterApp = function (mode) {
    var r = origEnter.apply(this, arguments);
    if (mode === "muscular") {
      [120, 260, 420, 650, 950].forEach(function (d) {
        setTimeout(function () {
          if (typeof window.__muResize === "function") window.__muResize();
        }, d);
      });
      setTimeout(function () {
        if (typeof window.resetMuCam === "function") window.resetMuCam();
      }, 550);
    }
    return r;
  };
})();

(function trainBarronSkeletal() {
  if (typeof SITE_KB === "undefined") return;
  var entries = [
    {
      id: "barron.intro",
      triggers: ["barron|krumhardt|alcamo|manual barron|umfst|admitere medicin"],
      answer:
        "<b>Barron's — Anatomie și Fiziologie pentru admiterea la facultățile de medicină</b> (Krumhardt &amp; Alcamo, ediție UMFST Târgu Mureș 2022). Tradus din originalul <i>E-Z Anatomy and Physiology</i>. Capitol detaliat dedicat <b>oaselor și articulațiilor</b> (Cap. 6/7) — sursa principală pentru întrebările de admitere la medicină în România.",
      chips: [{ a: "open-learn", label: "Vezi manualul" }],
    },
    {
      id: "barron.bone_functions",
      triggers: ["functii ale oaselor|ce face osul|functia osului|de ce sunt oasele|rolul oaselor"],
      answer:
        "Conform Barron's, oasele îndeplinesc <b>5 funcții principale</b>: <b>1) Mișcare</b> — împreună cu mușchii scheletici; <b>2) Protecție</b> — encefal, plămâni, organe vitale; <b>3) Suport</b> — ancorează mușchii, menține poziția organismului; <b>4) Stocare de minerale</b> — calciu și fosfați (echilibru hidric și metabolic); <b>5) Hematopoieză</b> — locul de formare a celulelor sanguine (în măduva roșie).",
    },
    {
      id: "barron.bone_classification",
      triggers: [
        "tipuri oase forma|clasificare oase|oase plate|oase lungi|oase scurte|oase neregulate|wormiene|sesamoide",
      ],
      answer:
        "Barron's clasifică oasele <b>după formă</b> în:<br>· <b>Oase plate</b> — 2 plăci subțiri de os compact cu os spongios la mijloc; protejează țesuturile delicate (craniu, scapule/omoplați, coaste, stern, oasele pelvisului)<br>· <b>Oase lungi</b> — au <b>diafiză</b> (corp) + 2 <b>epifize</b> (capete); membre superioare, inferioare, degete<br>· <b>Oase scurte</b> — formă aproximativ cuboidală; suportă greutăți (carpiene, tarsiene)<br>· <b>Oase neregulate</b> — formă variată (vertebrele, oasele faciale)<br>· <b>Wormiene</b> — la suturile craniene<br>· <b>Sesamoide</b> — la articulații (cel mai important: <b>patela / rotula</b>)",
    },
    {
      id: "barron.bone_chemistry",
      triggers: [
        "compozitie chimica os|hidroxiapatita|colagen|fosfat de calciu|carbonat de calciu",
      ],
      answer:
        "Conform Barron's, osul conține:<br>· <b>Hidroxiapatită</b> = fosfat de calciu + hidroxid de calciu (în cantități mici) + carbonat de calciu — cristale înglobate într-o matrice<br>· <b>Fibre de colagen</b> — răspunzătoare de flexibilitatea osului<br>· Hidroxiapatita conferă <b>duritate</b>, colagenul oferă <b>flexibilitate</b><br>· Osul stochează depozite mari de calciu și fosfați eliberați după nevoie",
    },
    {
      id: "barron.bone_cells",
      triggers: ["osteoblast osteoclast osteocit barron|celulele osului barron|tipuri celule os"],
      answer:
        "Barron's identifică <b>3 tipuri de celule osoase</b>:<br>· <b>Osteoblaste</b> — celule formatoare de os; sintetizează colagenul și hidroxiapatita; provin din periost; activitate maximă în creștere și remodelare<br>· <b>Osteocite</b> — osteoblaste mature înglobate în matricea osoasă; localizate în <b>lacune</b>, conectate prin <b>canalicule</b>; hrănesc osul din jur și îndepărtează produșii reziduali<br>· <b>Osteoclaste</b> — celule resorbante; secretă substanțe care dizolvă osul; furnizează organismului calciu și fosfat necesare contracției musculare și metabolismului celular",
    },
    {
      id: "barron.long_bone",
      triggers: [
        "os lung structura|diafiza epifiza metafiza|placa epifizara|cavitate medulara|cartilaj articular",
      ],
      answer:
        "Conform Barron's, un <b>os lung tipic</b> (femur, humerus) are:<br>· <b>Diafiza</b> — porțiunea dreaptă, lungă (axul osului)<br>· <b>Epifize</b> — cele 2 capete<br>· <b>Metafiza</b> — joncțiunea diafiză-epifiză; conține <b>placa epifizară</b> (cartilaj activ care produce creșterea în lungime)<br>· <b>Cartilaj articular</b> — strat subțire de cartilaj hialin la extremitățile epifizelor; deplasare fără frecare<br>· <b>Periost</b> — țesut conjunctiv care acoperă diafiza (unde nu e cartilaj articular)<br>· <b>Cavitate medulară</b> — în centrul diafizei; conține <b>măduvă galbenă</b>; căptușită de <b>endost</b> (cu osteoblaste și osteoclaste)<br>· Epifizele conțin <b>os spongios</b> (trabecule + măduvă roșie); diafiza este înconjurată de <b>os compact</b>",
    },
    {
      id: "barron.osteon",
      triggers: ["osteon|lamel|canalicule|canal central|sistemul haversian|histologic os"],
      answer:
        "<b>Structura histologică a osului compact (Barron's)</b>:<br>· La microscop, osul compact prezintă inele concentrice numite <b>lamele</b>, organizate în sisteme = <b>osteoane</b><br>· Fiecare osteon are un <b>canal central</b> (Havers) ce conține nervi și capilare sanguine<br>· <b>Canalele perforante</b> (Volkmann) conectează între ele canalele centrale<br>· Între lamele se află <b>lacunele</b> cu osteocite<br>· <b>Canaliculele</b> = extensii microscopice care unesc lacunele între ele și cu canalul central; transportă nutrienți<br>· Între osteoane se găsesc <b>lamele interstițiale</b> (osteoane incomplete)<br>· Osul compact mai este numit <b>os lamelar</b>.",
    },
    {
      id: "barron.ossification",
      triggers: ["osificare|formarea osului|intramembranoasa|endocondrala|cum se formeaza osul"],
      answer:
        "<b>Osificarea (formarea osului)</b> conform Barron's — apare în a <b>6-a săptămână embrionară</b>, sub 2 forme:<br><br>· <b>Osificare intramembranoasă</b> — în <b>oasele plate ale craniului</b>:<br>1. Osteoblastele migrează în membrane → centre de osificare<br>2. Secretă matricea osoasă (colagen + fosfat + carbonat de Ca)<br>3. Centrele se extind și se unesc → trabecule de os spongios<br>4. Între trabecule se dezvoltă măduva roșie<br>5. Osteoblastele depun os compact la periost<br><br>· <b>Osificare endocondrală</b> — în <b>oasele lungi</b>:<br>1. Vase sanguine pătrund în tijele cartilaginoase<br>2. Osteoblastele se dezvoltă în membrana din jur<br>3. Depun os compact împrejurul tijei<br>4. Interiorul rămâne ca o cavitate medulară<br>5. Cartilajul de creștere continuă la capete<br>6. După <b>pubertate</b>, placa epifizară se îngustează și apoi se osifică complet → creșterea încetează (control hormonal)",
    },
    {
      id: "barron.remodeling",
      triggers: ["remodelare osoasa|osteoporoza|barron osteoporoza|echilibru osos|resorbtie"],
      answer:
        "<b>Remodelarea osoasă</b> (Barron's) — proces de-a lungul întregii vieți, controlat de echilibrul între:<br>· <b>Osteoblaste</b> (formare) ↔ <b>Osteoclaste</b> (resorbție)<br>· Reglat hormonal, inclusiv de hormoni sexuali<br><br><b>Osteoporoza</b>:<br>· La vârstnici, resorbția > formarea → pierdere de masă osoasă<br>· Oasele devin mai puțin rezistente, se rup mai ușor<br>· Frecventă la femei post-menopauză (scădere estrogen)<br><br><b>Prevenție</b>:<br>· Suplimente de <b>calciu</b><br>· <b>Activitate fizică</b> — stresul mecanic stimulează osteoblastele să formeze os nou",
    },
    {
      id: "barron.cartilage",
      triggers: ["cartilaj tipuri|hialin|elastic|fibros|cartilajul"],
      answer:
        "Barron's descrie <b>3 tipuri de cartilaj</b>, toate țesuturi conjunctive rezistente datorită fibrelor de colagen, fără vase de sânge:<br><br>· <b>Cartilaj hialin</b> — la <b>extremitățile oaselor lungi</b>, nas, inelele traheale, laringe; cel mai abundent; structură, protecție<br>· <b>Cartilaj elastic</b> — în <b>urechea externă</b> și laringe; conține fibre elastice ramificate; suport flexibil<br>· <b>Cartilaj fibros</b> — cel mai rezistent; în <b>discurile intervertebrale</b> și suturile craniene; fibre dense de colagen; rezistă la compresie<br><br>Substanța fundamentală a cartilajului = amestec ferm de proteine (proteoglicani) + carbohidrați.",
    },
    {
      id: "barron.joints_classes",
      triggers: [
        "articulatii barron|sinartroza|amfiartroza|diartroza|tipuri articulatii dupa mobilitate",
      ],
      answer:
        "<b>Artrologia</b> (Barron's) — clasifică articulațiile după <b>gradul de mișcare</b>:<br><br>· <b>Sinartroze</b> — articulații <b>aproape sau total imobile</b>; 2 capete osoase separate de țesut fibros sau cartilaj subțire; ex: <b>suturile craniene</b> (între frontal și parietale)<br>· <b>Amfiartroze</b> — <b>semi-mobile</b>; oasele sunt unite prin cartilaj fibros sau hialin; ex: <b>simfize</b> (simfiza pubiană), <b>discurile intervertebrale</b><br>· <b>Diartroze</b> — <b>complet mobile</b>, articulații sinoviale; cele mai numeroase; cu capsulă articulară, lichid sinovial, cartilaj articular; ex: șold, umăr, genunchi<br><br>Ramura anatomiei care studiază articulațiile = <b>artrologie</b>.",
    },
    {
      id: "barron.synovial",
      triggers: [
        "articulatie sinoviala barron|diartroza structura|capsula articulara|sinoviala|menisc barron",
      ],
      answer:
        "<b>Diartrozele (articulații sinoviale)</b> conform Barron's au:<br>· <b>Capsulă articulară fibroasă</b> — învelește articulația, leagă oasele<br>· <b>Membrană sinovială</b> — căptușește interiorul capsulei; secretă <b>lichid sinovial</b> (lubrifiant, nutriție pentru cartilaj)<br>· <b>Cartilaj articular hialin</b> — pe suprafețele oaselor; deplasare fără frecare<br>· <b>Lichid sinovial</b> — vâscos, conține acid hialuronic<br>· <b>Ligamente</b> — fibre dense care unesc oasele și limitează mișcarea<br>· Uneori <b>meniscuri</b> sau <b>discuri articulare</b> (genunchi, articulația temporo-mandibulară)",
    },
    {
      id: "barron.movements",
      triggers: [
        "miscari articulare|flexie extensie|abductie aductie|rotatie|circumductie|pronatie supinatie barron",
      ],
      answer:
        "<b>Mișcările articulare</b> (Barron's):<br>· <b>Flexie</b> — micșorarea unghiului (îndoirea cotului)<br>· <b>Extensie</b> — mărirea unghiului (întinderea cotului)<br>· <b>Abducție</b> — îndepărtarea de linia mediană (ridicarea brațului lateral)<br>· <b>Aducție</b> — apropierea de linia mediană<br>· <b>Rotație</b> — pivotare în jurul axului longitudinal<br>· <b>Circumducție</b> — combinație: flexie + abducție + extensie + aducție (mișcare conică)<br>· <b>Pronație</b> — rotirea antebrațului cu palma în jos<br>· <b>Supinație</b> — palma în sus<br>· <b>Inversie / eversie</b> — talpa spre interior / exterior<br>· <b>Elevație / depresie</b> — ridicarea / coborârea unei structuri (umeri)",
    },
    {
      id: "barron.axial_appendicular",
      triggers: ["schelet axial barron|schelet apendicular|schelet membrelor|oase localizare"],
      answer:
        "<b>După localizare</b>, Barron's împarte oasele în:<br><br>· <b>Scheletul axial</b> (axul central) — oasele <b>capului</b>, <b>coloana vertebrală</b>, <b>cușca toracică</b><br><br>· <b>Scheletul membrelor / apendicular</b> — oasele membrelor superioare și inferioare, <b>centura pectorală</b> (scapule + claviculă) și <b>centura pelviană</b><br><br>Corpul uman are <b>206 oase</b> în total.",
    },
    {
      id: "barron.bone_growth",
      triggers: ["cresterea osului|cum cresc oasele|placa epifizara|pubertate oase"],
      answer:
        "<b>Creșterea în lungime</b> (Barron's):<br>· La nivelul <b>plăcii epifizare</b> (cartilaj activ la metafiză)<br>· Cartilajul se depune continuu → îndepărtează capetele osului<br>· Apoi este înlocuit progresiv cu țesut osos<br>· După <b>pubertate</b>, placa se îngustează, apoi se osifică complet → creșterea în lungime încetează<br>· Procesul este <b>controlat hormonal</b> (în special hormon de creștere + hormoni sexuali)<br><br><b>Creșterea în grosime</b>:<br>· Osteoblastele din periost depun straturi noi de os compact pe suprafața externă",
    },
    {
      id: "barron.cancellous",
      triggers: ["os spongios|trabecule|os trabecular|os cancellous|maduva rosie"],
      answer:
        "<b>Osul spongios</b> (Barron's):<br>· Alcătuit din rețea de structuri osoase întretăiate numite <b>trabecule</b> (travee)<br>· Între trabecule = spații pline cu <b>măduvă roșie</b><br>· Mai puțin dens decât osul compact<br>· Se găsește în <b>interiorul epifizelor</b> oaselor lungi, în vertebre, stern<br>· Aici se produce <b>hematopoieza</b> (formarea celulelor sanguine: hematii, leucocite, trombocite)<br>· Adaptare evolutivă: forța se distribuie de-a lungul liniilor de stres (legea lui Wolff)",
    },
    {
      id: "barron.medullary",
      triggers: ["cavitate medulara|maduva galbena|maduva osoasa galben|cavitate centrala os"],
      answer:
        "<b>Cavitatea medulară</b> (Barron's):<br>· Cavitate centrală în <b>diafiza oaselor lungi</b><br>· Conține <b>măduvă galbenă</b> (țesut adipos)<br>· Căptușită de o membrană subțire = <b>endost</b><br>· Endostul conține osteoblaste (formatoare) și osteoclaste (resorbante)<br>· La copii, conține preponderent măduvă roșie (hematopoietică); la adulți, conversia la măduvă galbenă",
    },
    {
      id: "barron.osteon_canal",
      triggers: ["canal havers|volkmann|canal central os|nervii din os|vase os"],
      answer:
        "<b>Canalele osoase</b> (Barron's):<br>· <b>Canal central (Havers)</b> — în mijlocul fiecărui osteon; conține <b>nervi</b> și <b>capilare sanguine</b>; orientat paralel cu axul lung al osului<br>· <b>Canale perforante (Volkmann)</b> — perpendiculare; conectează canalele centrale între ele și cu suprafața osului<br>· Împreună formează rețeaua vasculară a osului → spre deosebire de cartilaj, osul este puternic vascularizat",
    },
    {
      id: "barron.periost",
      triggers: ["periost|membrana periost|fibre sharpey|periost barron"],
      answer:
        "<b>Periostul</b> (Barron's):<br>· Țesut conjunctiv care învelește <b>diafiza</b> oaselor lungi (unde nu e cartilaj articular)<br>· 2 straturi: <b>fibros</b> (extern, dens) + <b>osteogenic</b> (intern, cu osteoblaste)<br>· Sursa de noi osteocite pentru creșterea în grosime<br>· Conține numeroși nervi → de aceea o fractură doare intens<br>· Atașează ligamente, tendoane și mușchi de os<br>· Fibrele lui Sharpey ancorează periostul de matricea osoasă",
    },
    {
      id: "barron.synarthrosis_example",
      triggers: ["suturi craniene|fibroase|sinartroza craniu"],
      answer:
        "<b>Suturile craniene</b> (Barron's) — exemple de <b>sinartroze</b>:<br>· Sutură <b>coronală</b> — între frontal și parietale<br>· Sutură <b>sagitală</b> — între cele 2 parietale<br>· Sutură <b>lambdoidă</b> — între parietale și occipital<br>· Sutură <b>scuamoasă</b> — între parietal și temporal<br>· La nou-născut, suturile sunt deschise = <b>fontanele</b>, care permit nașterea și creșterea creierului; se închid în primii 2 ani<br>· Adult: aproape complet imobile, asigurând protecția encefalului",
    },
    {
      id: "barron.amphiarthrosis",
      triggers: ["amfiartroza|simfiza|discuri intervertebrale|cartilaginoasa"],
      answer:
        "<b>Amfiartrozele</b> (Barron's) — articulații <b>semi-mobile</b>:<br>· <b>Simfize</b> — unite prin cartilaj fibros (ex: <b>simfiza pubiană</b>)<br>· <b>Sincondroze</b> — unite prin cartilaj hialin (ex: prima articulație sternocostală)<br>· <b>Discurile intervertebrale</b> — cartilaj fibros cu nucleu pulpos gelatinos; permit ușoară flexie/rotație + amortizare șocuri<br>· Permit mișcări limitate dar oferă stabilitate",
    },
    {
      id: "barron.summary_chapter",
      triggers: ["rezumat barron oase|capitol 6 7|barron sinteza oase|recapitulare oase"],
      answer:
        "<b>Sinteza capitolului „Oasele și articulațiile\" (Barron's 2022)</b>:<br>1. Corpul are <b>206 oase</b> (schelet axial + apendicular)<br>2. Oasele = țesut conjunctiv dur (osteoblaste + osteocite + osteoclaste + hidroxiapatită + colagen)<br>3. Tipuri: lungi, scurte, plate, neregulate, sesamoide, wormiene<br>4. Os compact (osteoane cu canale Havers) vs spongios (trabecule + măduvă roșie)<br>5. Osificare: intramembranoasă (oase plate) + endocondrală (oase lungi)<br>6. Remodelare osoasă continuă pe parcursul vieții; osteoporoza la vârstnici<br>7. Articulații: sinartroze (suturi), amfiartroze (simfize, discuri), diartroze (sinoviale)<br>8. Mișcări articulare: flexie/extensie, abducție/aducție, rotație, circumducție, pronație/supinație, inversie/eversie<br>9. Pubertatea închide plăcile epifizare (oprirea creșterii)<br>10. Cartilajul (hialin/elastic/fibros) e avascular și se înlocuiește cu os",
    },
    {
      id: "barron.surse_admitere",
      triggers: ["surse admitere medicina|recomandare manual admitere|carte admitere"],
      answer:
        "Pentru <b>admiterea la medicină în România</b> (Cluj, București, Iași, UMFST Târgu Mureș), manualul <b>Barron's — E-Z Anatomy and Physiology</b> (Krumhardt &amp; Alcamo, traducere UMFST 2022) este una dintre principalele surse oficiale. Disponibil în secțiunea <b>Învață</b> a BioNexus.",
      chips: [{ a: "open-learn", label: "Vezi manualele" }],
    },
  ];
  for (var i = 0; i < entries.length; i++) SITE_KB.push(entries[i]);

  if (typeof CURIOZITATI !== "undefined") {
    var more = [
      "🦴 Manualul Barron's 2022: corpul uman conține <b>206 oase</b> care alcătuiesc scheletul.",
      "🧬 Conform Barron's, <b>hidroxiapatita</b> (fosfat de calciu) conferă duritate osului, iar <b>colagenul</b> îi conferă flexibilitatea.",
      "🔬 Barron's explică: la microscop, osul compact prezintă inele concentrice numite <b>lamele</b>, organizate în sisteme = <b>osteoane</b>.",
      "🫀 După Barron's, în <b>măduva osoasă roșie</b> se formează hematiile, leucocitele și plachetele — proces numit <b>hematopoieză</b>.",
      "💀 Osificarea intramembranoasă (oase plate ale craniului) începe în <b>a 6-a săptămână embrionară</b> (Barron's 2022).",
      "⚙️ Barron's: osteoblastele <b>formează</b> osul, osteoclastele îl <b>resorb</b> — echilibrul lor controlează masa osoasă.",
      "🦷 Există <b>3 tipuri de cartilaj</b> conform Barron's: hialin (extremitățile oaselor), elastic (urechea externă) și fibros (discurile intervertebrale).",
      "📚 Barron's 2022 (UMFST Târgu Mureș) — sursă oficială pentru admiterea la facultățile de medicină din România.",
      "🦴 Sesamoidele cele mai cunoscute sunt <b>patelele (rotulele)</b>, după Barron's — situate la nivelul articulațiilor.",
      "⚡ Periostul (Barron's) conține mulți nervi — de aceea fracturile sunt extrem de dureroase, deși osul în sine nu doare.",
    ];
    for (var j = 0; j < more.length; j++) CURIOZITATI.push(more[j]);
  }
})();

(function muscleTouchTap() {
  function init() {
    var canvas = document.getElementById("mu-canvas3d");
    if (!canvas) {
      setTimeout(init, 300);
      return;
    }
    if (canvas.__muTapBound) return;
    canvas.__muTapBound = true;
    var TAP_MAX_MOVE = 12,
      TAP_MAX_MS = 400;
    var startX = 0,
      startY = 0,
      startT = 0,
      active = false;
    canvas.addEventListener(
      "touchstart",
      function (e) {
        if (!e.touches || e.touches.length !== 1) {
          active = false;
          return;
        }
        var t = e.touches[0];
        active = true;
        startX = t.clientX;
        startY = t.clientY;
        startT = Date.now();
        if (window.__MU_REF && window.__MU_REF.mouse) {
          var r = canvas.getBoundingClientRect();
          window.__MU_REF.mouse.x = ((t.clientX - r.left) / r.width) * 2 - 1;
          window.__MU_REF.mouse.y = -((t.clientY - r.top) / r.height) * 2 + 1;
        }
      },
      { passive: true }
    );
    canvas.addEventListener(
      "touchmove",
      function (e) {
        if (!active || !e.touches.length) return;
        var t = e.touches[0];
        if (
          Math.abs(t.clientX - startX) > TAP_MAX_MOVE ||
          Math.abs(t.clientY - startY) > TAP_MAX_MOVE
        )
          active = false;
      },
      { passive: true }
    );
    canvas.addEventListener(
      "touchend",
      function (e) {
        if (!active) return;
        active = false;
        var t = (e.changedTouches && e.changedTouches[0]) || null;
        if (!t) return;
        var dt = Date.now() - startT,
          dx = Math.abs(t.clientX - startX),
          dy = Math.abs(t.clientY - startY);
        if (dt > TAP_MAX_MS || dx > TAP_MAX_MOVE || dy > TAP_MAX_MOVE) return;
        if (
          typeof QUIZ !== "undefined" &&
          QUIZ.active &&
          QUIZ.system === "muscular" &&
          QUIZ.mode === "visual"
        )
          return;
        var mu = window.__MU_REF;
        if (!mu || !mu.loaded || !mu.raycaster || !mu.camera) return;
        var r = canvas.getBoundingClientRect();
        mu.mouse.x = ((t.clientX - r.left) / r.width) * 2 - 1;
        mu.mouse.y = -((t.clientY - r.top) / r.height) * 2 + 1;
        mu.__lastClickXY = { x: t.clientX, y: t.clientY };
        mu.raycaster.setFromCamera(mu.mouse, mu.camera);
        var hits = mu.raycaster.intersectObjects(mu.meshes, false);
        if (hits.length === 0) {
          if (typeof window.__muClearHover === "function") window.__muClearHover(mu.hovered);
          if (mu.selected) {
            if (mu.selected.userData._muOrigMaterial) {
              mu.selected.material = mu.selected.userData._muOrigMaterial;
              mu.selected.userData._muOrigMaterial = null;
            }
            mu.selected = null;
          }
          var ph = document.getElementById("mu-ip-ph");
          if (ph) ph.style.display = "flex";
          var ct = document.getElementById("mu-info-ct");
          if (ct) ct.style.display = "none";
          var ov = document.getElementById("muNameOverlay");
          if (ov) ov.classList.remove("visible");
          return;
        }
        if (typeof window.__muSelectMuscle === "function") window.__muSelectMuscle(hits[0].object);
      },
      { passive: true }
    );
    canvas.addEventListener(
      "touchcancel",
      function () {
        active = false;
      },
      { passive: true }
    );
  }
  if (document.readyState === "loading")
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(init, 400);
    });
  else setTimeout(init, 400);
})();

(function muCanvasTouchAction() {
  var s = document.createElement("style");
  s.textContent = "#mu-canvas3d{touch-action:none!important}";
  document.head.appendChild(s);
})();

(function notebookI18N() {
  if (typeof I18N === "undefined") return;
  Object.assign(I18N.ro, {
    "notebook.title": "Notebook BioNexus",
    "notebook.search": "Caută în notițe...",
    "notebook.filter.all": "Toate",
    "notebook.filter.starred": "⭐ Importante",
    "notebook.filter.bone": "🦴 Oase",
    "notebook.filter.muscle": "💪 Mușchi",
    "notebook.filter.nervous": "🧠 Nervos",
    "notebook.filter.cardio": "❤️ Cardio",
    "notebook.filter.respiratory": "💨 Respirator",
    "notebook.filter.digestive": "🍽️ Digestiv",
    "notebook.empty.title": "Nicio notiță încă",
    "notebook.empty.desc":
      "Adaugă prima ta notiță apăsând <b>+ Notiță nouă</b> sau din viewer-ul 3D când selectezi o structură din orice sistem.",
    "notebook.empty.cta": "+ Adaugă prima notiță",
    "notebook.editor.new": "Notiță nouă",
    "notebook.editor.edit": "Editare notiță",
    "notebook.lbl.title": "Titlu",
    "notebook.lbl.category": "Categorie",
    "notebook.lbl.subject": "Subiect (opțional)",
    "notebook.lbl.content": "Conținut",
    "notebook.lbl.tags": "Tag-uri (separate cu virgulă)",
    "notebook.lbl.color": "Culoare",
    "notebook.lbl.starred": "Marchează ca important ⭐",
    "notebook.cat.bone": "🦴 Os",
    "notebook.cat.muscle": "💪 Mușchi",
    "notebook.cat.nervous": "🧠 Nervos",
    "notebook.cat.cardio": "❤️ Cardiovascular",
    "notebook.cat.respiratory": "💨 Respirator",
    "notebook.cat.digestive": "🍽️ Digestiv",
    "notebook.cat.general": "📌 General",
    "notebook.ph.title": "ex: Femur — origine ischiogambieri",
    "notebook.ph.subject": "ex: Femur, Biceps brahial, articulația umărului",
    "notebook.ph.content": "Scrie observații, definiții, mnemotehnici...",
    "notebook.ph.tags": "ex: examen, anatomie 1, important",
    "notebook.btn.cancel": "Anulează",
    "notebook.btn.delete": "🗑 Șterge",
    "notebook.btn.save": "💾 Salvează",
    "home.feat.notes.t": "Notițe & Marcaje",
    "home.feat.notes.cta": "Deschide notebook &rarr;",
  });
  Object.assign(I18N.en, {
    "notebook.title": "BioNexus Notebook",
    "notebook.search": "Search notes...",
    "notebook.filter.all": "All",
    "notebook.filter.starred": "⭐ Important",
    "notebook.filter.bone": "🦴 Bones",
    "notebook.filter.muscle": "💪 Muscles",
    "notebook.filter.nervous": "🧠 Nervous",
    "notebook.filter.cardio": "❤️ Cardio",
    "notebook.filter.respiratory": "💨 Respiratory",
    "notebook.filter.digestive": "🍽️ Digestive",
    "notebook.empty.title": "No notes yet",
    "notebook.empty.desc":
      "Add your first note by pressing <b>+ New note</b> or from the 3D viewer when you select a structure in any system.",
    "notebook.empty.cta": "+ Add first note",
    "notebook.editor.new": "New note",
    "notebook.editor.edit": "Edit note",
    "notebook.lbl.title": "Title",
    "notebook.lbl.category": "Category",
    "notebook.lbl.subject": "Subject (optional)",
    "notebook.lbl.content": "Content",
    "notebook.lbl.tags": "Tags (comma-separated)",
    "notebook.lbl.color": "Color",
    "notebook.lbl.starred": "Mark as important ⭐",
    "notebook.cat.bone": "🦴 Bone",
    "notebook.cat.muscle": "💪 Muscle",
    "notebook.cat.nervous": "🧠 Nervous",
    "notebook.cat.cardio": "❤️ Cardiovascular",
    "notebook.cat.respiratory": "💨 Respiratory",
    "notebook.cat.digestive": "🍽️ Digestive",
    "notebook.cat.general": "📌 General",
    "notebook.ph.title": "e.g. Femur — hamstring origin",
    "notebook.ph.subject": "e.g. Femur, Biceps brachii, shoulder joint",
    "notebook.ph.content": "Write observations, definitions, mnemonics...",
    "notebook.ph.tags": "e.g. exam, anatomy 1, important",
    "notebook.btn.cancel": "Cancel",
    "notebook.btn.delete": "🗑 Delete",
    "notebook.btn.save": "💾 Save",
    "home.feat.notes.t": "Notes & Bookmarks",
    "home.feat.notes.cta": "Open notebook &rarr;",
  });
})();

(function notebookI18NHook() {
  if (typeof window.applyLanguage !== "function") return;
  var orig = window.applyLanguage;
  window.applyLanguage = function (lang) {
    var r = orig.apply(this, arguments);
    var countEl = document.getElementById("notebookCount");
    if (countEl) {
      try {
        var notes = JSON.parse(
          localStorage.getItem(
            typeof getCurrentUser === "function" && getCurrentUser()
              ? "bionexus_notebook_" + getCurrentUser().user
              : "bionexus_notebook_guest"
          ) || "[]"
        );
        var en = typeof CUR_LANG !== "undefined" && CUR_LANG === "en";
        var word = en
          ? notes.length === 1
            ? "note"
            : "notes"
          : notes.length === 1
            ? "notiță"
            : "notițe";
        countEl.textContent = notes.length + " " + word;
      } catch (e) {}
    }
    return r;
  };
})();

(function extraSystems() {

  var LUNG_ICON =
    '<svg viewBox="0 0 32 32" width="1.1em" height="1.1em" style="vertical-align:-.2em"><path d="M16 4 v8" stroke="#d98f86" stroke-width="2.4" stroke-linecap="round" fill="none"/><path d="M16 11 c-2 1 -4 1 -5.5 3" stroke="#d98f86" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M16 11 c2 1 4 1 5.5 3" stroke="#d98f86" stroke-width="2" stroke-linecap="round" fill="none"/><path d="M11 12 c-3 2 -4.5 6 -4.5 10.5 c0 3 1.2 5 3.2 5 c3 0 5.3 -3 5.3 -7.2 v-6.3 c0 -2 -1 -3.2 -4 -2z" fill="#ec9a94"/><path d="M21 12 c3 2 4.5 6 4.5 10.5 c0 3 -1.2 5 -3.2 5 c-3 0 -5.3 -3 -5.3 -7.2 v-6.3 c0 -2 1 -3.2 4 -2z" fill="#ec9a94"/></svg>';
  var CONFIGS = {
    cardio: {
      mode: "cardio",
      app: "appCardio",
      viewer: "cardio-viewer",
      canvas: "cardio-canvas3d",
      loader: "cardio-loader",
      loadFill: "cardio-load-fill",
      loadText: "cardio-load-text",
      loadErr: "cardio-load-error",
      glb: "models/cardiovascular.glb",
      bg: 0x1a0a0f,
      ambColor: 0xffe4ec,
      keyColor: 0xffffff,
      fillColor: 0xff5566,
      rimColor: 0xec4899,
      defaultLoadText: {
        ro: "Se încarcă sistemul cardiovascular...",
        en: "Loading cardiovascular system...",
      },
      sysName: { ro: "Sistem cardiovascular", en: "Cardiovascular system" },
      exclude: /penis/i,
      ids: {
        list: "cardio-list",
        search: "cardio-search",
        searchCount: "cardio-search-count",
        count: "cardio-count",
        infoCt: "cardio-info-ct",
        infoPh: "cardio-ip-ph",
        infoTitle: "cardio-info-title",
        overlay: "cardioNameOverlay",
        bnoName: "cardioBnoName",
        bnoCat: "cardioBnoCat",
        curLabel: "cardio-cur-label",
      },
      groups: [
        {
          key: "arteries",
          match: /_Arteries_mtl_/i,
          tex: "tex_cardio_arteries.jpg",
          ro: "Artere",
          en: "Arteries",
          icon: "\u{1FA78}",
        },
        {
          key: "veins",
          match: /_Veins_mtl_/i,
          tex: "tex_cardio_veins.jpg",
          ro: "Vene",
          en: "Veins",
          icon: "\u{1FA78}",
        },
        {
          key: "heart",
          match: /_HEART_ANATOMY_/i,
          tex: "tex_cardio_heart.jpg",
          ro: "Inimă",
          en: "Heart",
          icon: "❤",
        },
      ],
    },
    nervous: {
      mode: "nervous",
      app: "appNervous",
      viewer: "nervous-viewer",
      canvas: "nervous-canvas3d",
      loader: "nervous-loader",
      loadFill: "nervous-load-fill",
      loadText: "nervous-load-text",
      loadErr: "nervous-load-error",
      glb: "models/nervous.glb",
      bg: 0x1a1208,
      ambColor: 0xffe9c4,
      keyColor: 0xffffff,
      fillColor: 0xfbbf24,
      rimColor: 0xf59e0b,
      defaultLoadText: { ro: "Se încarcă sistemul nervos...", en: "Loading nervous system..." },
      sysName: { ro: "Sistem nervos", en: "Nervous system" },
      ids: {
        list: "nervous-list",
        search: "nervous-search",
        searchCount: "nervous-search-count",
        count: "nervous-count",
        infoCt: "nervous-info-ct",
        infoPh: "nervous-ip-ph",
        infoTitle: "nervous-info-title",
        overlay: "nervousNameOverlay",
        bnoName: "nervousBnoName",
        bnoCat: "nervousBnoCat",
        curLabel: "nervous-cur-label",
      },
      groups: [
        {

          key: "brain",
          match: /_Brain_mtl_/i,
          tex: "tex_brain_tile.jpg",
          nrm: "tex_brain_tile_n.jpg",
          wrap: "mirror",
          repeat: [6, 6],
          normalScale: 2.6,
          color: 0xf7cabf,
          roughness: 0.68,
          doubleSide: true,
          ro: "Creier",
          en: "Brain",
          icon: "\u{1F9E0}",
        },
        {
          key: "membrane",
          match: /_Nervous_Membrane_mtl_/i,
          tex: "tex_nervous_membrane.jpg",
          ro: "Membrane",
          en: "Membranes",
          icon: "\u{1F9E0}",
        },
        {

          key: "spinal",
          match: /_Maters_mtl_|_Spinal_Cord_material_/i,
          color: 0xdfd6c2,
          roughness: 0.6,
          doubleSide: true,
          ro: "Măduva spinării",
          en: "Spinal cord",
          icon: "\u{1F9B4}",
        },
        {

          key: "nerves",
          match: /_Nervous_mtl_/i,
          color: 0xe3b23c,
          roughness: 0.55,
          ro: "Nervi",
          en: "Nerves",
          icon: "⚡",
        },
      ],
    },
    respiratory: {
      mode: "respiratory",
      app: "appRespiratory",
      viewer: "resp-viewer",
      canvas: "resp-canvas3d",
      loader: "resp-loader",
      loadFill: "resp-load-fill",
      loadText: "resp-load-text",
      loadErr: "resp-load-error",
      glb: "models/respiratory.glb",
      bg: 0x10101e,
      ambColor: 0xe2d4ff,
      keyColor: 0xffffff,
      fillColor: 0xa78bfa,
      rimColor: 0x8b5cf6,
      defaultLoadText: {
        ro: "Se încarcă sistemul respirator...",
        en: "Loading respiratory system...",
      },
      sysName: { ro: "Sistem respirator", en: "Respiratory system" },
      ids: {
        list: "resp-list",
        search: "resp-search",
        searchCount: "resp-search-count",
        count: "resp-count",
        infoCt: "resp-info-ct",
        infoPh: "resp-ip-ph",
        infoTitle: "resp-info-title",
        overlay: "respNameOverlay",
        bnoName: "respBnoName",
        bnoCat: "respBnoCat",
        curLabel: "resp-cur-label",
      },
      groups: [
        {
          key: "diaphragm",
          match: /diaphragm/i,
          tex: "tex_resp_lungs.jpg",
          ro: "Diafragmă",
          en: "Diaphragm",
          icon: "➖",
        },
        {
          key: "airways",
          match: /trachea|bronchus/i,
          tex: "tex_resp_lungs.jpg",
          ro: "Căi aeriene",
          en: "Airways",
          icon: "\u{1F32C}",
        },
        {
          key: "lungs",
          match: /_Lungs-_/i,
          tex: "tex_resp_lungs.jpg",
          ro: "Plămâni",
          en: "Lungs",
          icon: LUNG_ICON,
        },
        {
          key: "larynx",
          match: /./,
          tex: "tex_resp_lungs.jpg",
          ro: "Laringe",
          en: "Larynx",
          icon: "\u{1F5E3}",
        },
      ],
    },
    digestive: {
      mode: "digestive",
      app: "appDigestive",
      viewer: "dig-viewer",
      canvas: "dig-canvas3d",
      loader: "dig-loader",
      loadFill: "dig-load-fill",
      loadText: "dig-load-text",
      loadErr: "dig-load-error",
      glb: "models/digestive.glb",
      bg: 0x1a1310,
      ambColor: 0xffe8d6,
      ambIntensity: 0.85,
      keyColor: 0xffffff,
      fillColor: 0xff8a6b,
      rimColor: 0xd98f6b,
      defaultLoadText: {
        ro: "Se încarcă sistemul digestiv...",
        en: "Loading digestive system...",
      },
      sysName: { ro: "Sistem digestiv", en: "Digestive system" },
      ids: {
        list: "dig-list",
        search: "dig-search",
        searchCount: "dig-search-count",
        count: "dig-count",
        infoCt: "dig-info-ct",
        infoPh: "dig-ip-ph",
        infoTitle: "dig-info-title",
        overlay: "digNameOverlay",
        bnoName: "digBnoName",
        bnoCat: "digBnoCat",
        curLabel: "dig-cur-label",
      },
      groups: [
        {
          key: "oral",
          match: /_Oral_cavity_mtl_/i,
          tex: "tex_dig_oral.jpg",
          ro: "Cavitate bucală",
          en: "Oral cavity",
          icon: "\u{1F444}",
        },
        {
          key: "tongue",
          match: /_Head-neck_muscles_/i,
          color: 0xc86a62,
          roughness: 0.55,
          ro: "Limbă",
          en: "Tongue",
          icon: "\u{1F445}",
        },
        {
          key: "stomach",
          match: /_mat_Stomach_/i,
          tex: "tex_dig_stomach.jpg",
          ro: "Stomac & esofag",
          en: "Stomach & esophagus",
          icon: "\u{1F37D}",
        },
        {
          key: "smallint",
          match: /_Small_Intestine_/i,
          tex: "tex_dig_smallint.jpg",
          ro: "Intestin subțire",
          en: "Small intestine",
          icon: "\u{1F300}",
        },
        {
          key: "largeint",
          match: /_Large_Intestine_/i,
          tex: "tex_dig_largeint.jpg",
          ro: "Intestin gros",
          en: "Large intestine",
          icon: "\u{2B55}",
        },
        {
          key: "liver",
          match: /_Liver_mtl_/i,
          tex: "tex_dig_liver.jpg",
          ro: "Ficat",
          en: "Liver",
          icon: "\u{1F7E4}",
        },
        {
          key: "pancreas",
          match: /_Pancreas_Spleen_/i,
          tex: "tex_dig_pancreas.jpg",
          ro: "Pancreas & vezică biliară",
          en: "Pancreas & gallbladder",
          icon: "\u{1F536}",
        },
      ],
    },
  };
  var STATES = {};

  var GROUP_DESC = {
    "nervous.brain": {
      ro: "Creierul (encefalul) este centrul de comandă al sistemului nervos. Cuprinde cele două emisfere cerebrale cu scoarța cutată (girusuri și șanțuri), cerebelul — care coordonează mișcarea și echilibrul — și trunchiul cerebral, care controlează funcțiile vitale. Conține ~86 miliarde de neuroni.",
      en: "The brain (encephalon) is the command center of the nervous system: two cerebral hemispheres with a folded cortex (gyri and sulci), the cerebellum (movement and balance), and the brainstem (vital functions). It holds ~86 billion neurons.",
    },
    "nervous.membrane": {
      ro: "Meningele sunt cele trei membrane (dura mater, arahnoida, pia mater) care învelesc și protejează creierul și măduva spinării. Între arahnoidă și pia mater circulă lichidul cefalorahidian, care amortizează șocurile.",
      en: "The meninges are three membranes (dura, arachnoid, pia mater) that wrap and protect the brain and spinal cord. Cerebrospinal fluid circulates between the arachnoid and pia, cushioning the tissue.",
    },
    "nervous.spinal": {
      ro: "Măduva spinării este cordonul nervos din canalul vertebral, întins de la bulb până la ~L1 (conul medular). Conduce informația între creier și corp și coordonează reflexele. Are regiunile cervicală, toracică, lombară și sacrală.",
      en: "The spinal cord is the neural cable in the vertebral canal, running from the medulla to about L1 (the conus medullaris). It relays signals between brain and body and coordinates reflexes. It has cervical, thoracic, lumbar and sacral regions.",
    },
    "nervous.nerves": {
      ro: "Nervii periferici — 12 perechi de nervi cranieni și 31 de perechi de nervi spinali — conectează sistemul nervos central la mușchi, piele și organe. Anterior se organizează în plexuri (cervical, brahial, lombosacral).",
      en: "The peripheral nerves — 12 pairs of cranial nerves and 31 pairs of spinal nerves — connect the central nervous system to muscles, skin and organs, interweaving into plexuses (cervical, brachial, lumbosacral).",
    },
    "cardio.arteries": {
      ro: "Arterele duc sângele oxigenat de la inimă spre țesuturi (excepție: arterele pulmonare). Au pereți groși și elastici care rezistă la presiunea pompei cardiace. Aorta este cea mai mare arteră a corpului.",
      en: "Arteries carry oxygen-rich blood from the heart to the tissues (except the pulmonary arteries). Their thick elastic walls withstand the heart's pressure. The aorta is the body's largest artery.",
    },
    "cardio.veins": {
      ro: "Venele aduc sângele înapoi la inimă (excepție: venele pulmonare, care aduc sânge oxigenat). Au pereți mai subțiri și valve care împiedică refluxul. Venele cave superioară și inferioară sunt cele mai mari.",
      en: "Veins return blood to the heart (except the pulmonary veins, which carry oxygenated blood). Their thinner walls have valves that prevent backflow. The superior and inferior venae cavae are the largest.",
    },
    "cardio.heart": {
      ro: "Inima este un organ muscular cu 4 camere (2 atrii, 2 ventricule) care pompează sângele în tot corpul. Valvele (aortică, mitrală, tricuspidă, pulmonară) mențin circulația într-un singur sens. Bate ~100.000 de ori pe zi.",
      en: "The heart is a 4-chambered muscular pump (2 atria, 2 ventricles) that drives blood through the body. Its valves (aortic, mitral, tricuspid, pulmonary) keep flow one-way. It beats ~100,000 times a day.",
    },
    "respiratory.diaphragm": {
      ro: "Diafragma este mușchiul principal al respirației — o cupolă care separă toracele de abdomen. La inspir coboară și mărește cutia toracică, atrăgând aerul în plămâni; la expir se relaxează.",
      en: "The diaphragm is the main breathing muscle — a dome separating chest from abdomen. On inhalation it descends and expands the chest, drawing air into the lungs; on exhalation it relaxes.",
    },
    "respiratory.airways": {
      ro: "Căile aeriene — traheea și bronhiile — conduc aerul spre plămâni, ramificându-se în bronhiole tot mai fine până la alveole. Inelele de cartilaj mențin căile deschise.",
      en: "The airways — trachea and bronchi — conduct air to the lungs, branching into ever-finer bronchioles down to the alveoli. Cartilage rings keep the passages open.",
    },
    "respiratory.lungs": {
      ro: "Plămânii sunt organele schimbului de gaze. Aerul ajunge la ~300 de milioane de alveole (~70 m²) unde oxigenul trece în sânge, iar dioxidul de carbon iese. Plămânul drept are 3 lobi, cel stâng 2.",
      en: "The lungs are the organs of gas exchange. Air reaches ~300 million alveoli (~70 m²) where oxygen enters the blood and carbon dioxide leaves. The right lung has 3 lobes, the left 2.",
    },
    "respiratory.larynx": {
      ro: "Laringele este organul vocii, la intrarea în trahee. Cartilajele sale (tiroid, cricoid, aritenoide, epiglota) susțin corzile vocale și protejează căile aeriene la înghițire.",
      en: "The larynx is the voice organ at the top of the trachea. Its cartilages (thyroid, cricoid, arytenoids, epiglottis) support the vocal folds and protect the airway during swallowing.",
    },
    "digestive.oral": {
      ro: "Cavitatea bucală și faringele reprezintă începutul tubului digestiv. Aici alimentele sunt mărunțite de dinți, umezite cu salivă și transformate în bol alimentar înainte de înghițire.",
      en: "The oral cavity and pharynx begin the digestive tract. Here food is broken down by the teeth, moistened with saliva and formed into a bolus before swallowing.",
    },
    "digestive.tongue": {
      ro: "Limba este un mușchi mobil care amestecă alimentele, participă la vorbire și conține papilele gustative. Împinge bolul alimentar spre faringe la înghițire.",
      en: "The tongue is a mobile muscle that mixes food, aids speech and carries the taste buds. It pushes the bolus toward the pharynx when swallowing.",
    },
    "digestive.stomach": {
      ro: "Esofagul transportă bolul din faringe în stomac; stomacul îl amestecă cu suc gastric acid și enzime, transformându-l în chim. Cardia și pilorul sunt orificiile sale de intrare și ieșire.",
      en: "The esophagus carries the bolus from the pharynx to the stomach, which mixes it with acidic gastric juice and enzymes to form chyme. The cardia and pylorus are its inlet and outlet.",
    },
    "digestive.smallint": {
      ro: "Intestinul subțire (~6 m: duoden, jejun, ileon) este locul principal al digestiei și absorbției nutrienților, datorită vilozităților care măresc enorm suprafața de contact.",
      en: "The small intestine (~6 m: duodenum, jejunum, ileum) is the main site of digestion and nutrient absorption, thanks to villi that hugely increase its surface area.",
    },
    "digestive.largeint": {
      ro: "Intestinul gros (cec, colon, rect) absoarbe apa și sărurile din reziduuri și formează materiile fecale. Găzduiește flora bacteriană intestinală, care ajută digestia.",
      en: "The large intestine (cecum, colon, rectum) absorbs water and salts from residues and forms feces. It hosts the gut microbiota that assists digestion.",
    },
    "digestive.liver": {
      ro: "Ficatul este cea mai mare glandă a corpului. Produce bila (pentru digestia grăsimilor), depozitează glicogen, detoxifică sângele și sintetizează proteine. Are un lob drept și unul stâng.",
      en: "The liver is the body's largest gland. It makes bile (for fat digestion), stores glycogen, detoxifies blood and synthesizes proteins. It has a right and a left lobe.",
    },
    "digestive.pancreas": {
      ro: "Pancreasul secretă enzime digestive și hormoni (insulina, glucagonul), iar vezica biliară stochează și eliberează bila produsă de ficat, vărsând-o în duoden.",
      en: "The pancreas secretes digestive enzymes and hormones (insulin, glucagon), while the gallbladder stores and releases the bile made by the liver into the duodenum.",
    },
  };

  var MESH_DESC = {
    "Cerebrum": { ro: "Encefalul este întregul creier adăpostit în cutia craniană — emisferele, trunchiul cerebral și cerebelul. Este centrul gândirii, memoriei, mișcării voluntare și al percepției, consumând circa 20% din oxigenul corpului.", en: "The encephalon is the entire brain housed in the skull — the hemispheres, brainstem and cerebellum. It is the center of thought, memory, voluntary movement and perception, using about 20% of the body's oxygen." },
    "Cerebrum (dreapta)": { ro: "Emisfera cerebrală dreaptă controlează musculatura și primește senzațiile din jumătatea stângă a corpului (control încrucișat). Este specializată în percepția spațială, recunoașterea fețelor și prelucrarea muzicii și emoțiilor.", en: "The right cerebral hemisphere controls the muscles of, and receives sensation from, the left half of the body (crossed control). It specializes in spatial awareness, face recognition, and processing music and emotion." },
    "Cerebrum (stânga)": { ro: "Emisfera cerebrală stângă controlează și primește senzații din jumătatea dreaptă a corpului. La majoritatea oamenilor este dominantă pentru limbaj, găzduind ariile Broca și Wernicke pentru vorbire și înțelegere.", en: "The left cerebral hemisphere controls and receives sensation from the right half of the body. In most people it is language-dominant, housing Broca's and Wernicke's areas for speech production and comprehension." },
    "Cerebellum (dreapta)": { ro: "Emisfera cerebeloasă dreaptă coordonează mișcările, echilibrul și tonusul muscular pentru partea dreaptă a corpului (control de aceeași parte). Ajustează fin mișcările voluntare, făcându-le line și precise.", en: "The right cerebellar hemisphere coordinates movement, balance and muscle tone for the right side of the body (ipsilateral control). It fine-tunes voluntary movements, making them smooth and precise." },
    "Cerebellum (stânga)": { ro: "Emisfera cerebeloasă stângă coordonează mișcările, echilibrul și tonusul muscular pentru partea stângă a corpului (control de aceeași parte). Contribuie la învățarea motorie și la coordonarea mișcărilor rapide.", en: "The left cerebellar hemisphere coordinates movement, balance and muscle tone for the left side of the body (ipsilateral control). It contributes to motor learning and the coordination of rapid movements." },
    "Midbrain (dreapta)": { ro: "Mezencefalul (partea dreaptă) este segmentul superior al trunchiului cerebral, cu coliculii care mediază reflexele vizuale și auditive. Conține substanța neagră și originea nervilor cranieni III și IV.", en: "The midbrain (right side) is the uppermost brainstem segment, whose colliculi mediate visual and auditory reflexes. It contains the substantia nigra and the origin of cranial nerves III and IV." },
    "Midbrain (stânga)": { ro: "Mezencefalul (partea stângă) este segmentul superior al trunchiului cerebral, cu coliculii care mediază reflexele vizuale și auditive. Conține substanța neagră, importantă în controlul mișcării, afectată în boala Parkinson.", en: "The midbrain (left side) is the uppermost brainstem segment, whose colliculi mediate visual and auditory reflexes. It contains the substantia nigra, key to movement control and affected in Parkinson's disease." },
    "Pons (dreapta)": { ro: "Puntea lui Varolio (dreapta) este porțiunea mijlocie a trunchiului cerebral, o punte de fibre între emisferele cerebrale și cerebel. Adăpostește nucleii nervilor cranieni V–VIII și centri ai respirației.", en: "The pons (right side) is the middle part of the brainstem, a bridge of fibers linking the cerebral hemispheres to the cerebellum. It houses the nuclei of cranial nerves V–VIII and respiratory centers." },
    "Pons (stânga)": { ro: "Puntea lui Varolio (stânga) este porțiunea mijlocie a trunchiului cerebral, o punte de fibre între emisferele cerebrale și cerebel. Conține nucleii nervilor cranieni V–VIII și participă la reglarea somnului și a respirației.", en: "The pons (left side) is the middle part of the brainstem, a bridge of fibers connecting the cerebral hemispheres to the cerebellum. It contains the nuclei of cranial nerves V–VIII and helps regulate sleep and breathing." },
    "Medulla oblongata (dreapta)": { ro: "Bulbul rahidian (dreapta) este porțiunea inferioară a trunchiului cerebral, care se continuă cu măduva spinării. Adăpostește centri vitali ce reglează respirația, ritmul cardiac și tensiunea arterială.", en: "The medulla oblongata (right side) is the lowest part of the brainstem, continuous with the spinal cord. It houses vital centers controlling breathing, heart rate and blood pressure." },
    "Medulla oblongata (stânga)": { ro: "Bulbul rahidian (stânga) este porțiunea inferioară a trunchiului cerebral, unde fibrele motorii se încrucișează (decusația piramidelor). Conține centri vitali pentru respirație, circulație și reflexe precum tusea și înghițirea.", en: "The medulla oblongata (left side) is the lowest brainstem part, where motor fibers cross over (pyramidal decussation). It contains vital centers for breathing and circulation and reflexes such as coughing and swallowing." },
    "Cranial nerves": { ro: "Cei doisprezece nervi cranieni (I–XII) ies direct din encefal și deservesc capul și gâtul — mirosul, vederea, mișcarea ochilor, mimica, gustul și auzul. Nervul vag (X) ajunge însă până la organele toracice și abdominale.", en: "The twelve cranial nerves (I–XII) emerge directly from the brain and serve the head and neck — smell, vision, eye movement, facial expression, taste and hearing. The vagus nerve (X), however, reaches the thoracic and abdominal organs." },
    "Cervical nerves": { ro: "Nervii cervicali (C1–C4) formează plexul cervical, care inervează pielea și mușchii gâtului. Din el pornește nervul frenic, esențial pentru mișcarea diafragmei și respirație.", en: "The cervical nerves (C1–C4) form the cervical plexus, supplying the skin and muscles of the neck. From it arises the phrenic nerve, essential for moving the diaphragm and breathing." },
    "Brachial plexus": { ro: "Plexul brahial este o rețea de nervi formată din rădăcinile C5–T1, care inervează întregul membru superior. Din el se nasc nervii median, ulnar, radial, musculocutanat și axilar.", en: "The brachial plexus is a network of nerves formed from the C5–T1 roots that supplies the entire upper limb. It gives rise to the median, ulnar, radial, musculocutaneous and axillary nerves." },
    "Thoracic nerves": { ro: "Nervii toracici (intercostali, T1–T12) trec între coaste și inervează mușchii intercostali și pielea toracelui și abdomenului. Ei asigură mișcările respiratorii ale cutiei toracice.", en: "The thoracic (intercostal) nerves, T1–T12, run between the ribs and supply the intercostal muscles and the skin of the chest and abdomen. They drive the breathing movements of the rib cage." },
    "Lumbosacral plexus": { ro: "Plexul lombosacral (L1–S4) inervează pelvisul și membrul inferior. Din el pornește nervul sciatic, cel mai gros nerv al corpului, alături de nervii femural și obturator.", en: "The lumbosacral plexus (L1–S4) supplies the pelvis and lower limb. From it arises the sciatic nerve, the thickest nerve in the body, along with the femoral and obturator nerves." },
    "Olfactory nerves": { ro: "Nervii olfactivi (nervul cranian I) sunt formați din axoni ai celulelor senzoriale din mucoasa nazală. Ei traversează lama ciuruită a etmoidului spre bulbul olfactiv, transmițând simțul mirosului.", en: "The olfactory nerves (cranial nerve I) are made of axons from sensory cells in the nasal mucosa. They pass through the cribriform plate of the ethmoid to the olfactory bulb, carrying the sense of smell." },
    "Olfactory bulb": { ro: "Bulbul olfactiv este o structură ovală situată la baza lobului frontal, deasupra lamei ciuruite. Aici fac sinapsă fibrele olfactive, iar informația despre miros este prelucrată și trimisă spre creier.", en: "The olfactory bulb is an oval structure at the base of the frontal lobe, above the cribriform plate. Here the olfactory fibers synapse, and smell information is processed and relayed toward the brain." },
    "Cervical cord": { ro: "Măduva cervicală (C1–C8) este porțiunea de sus a măduvei spinării, cu o intumescență cervicală de unde pornesc nervii membrului superior. Leziunile ei înalte pot afecta respirația și toate cele patru membre.", en: "The cervical cord (C1–C8) is the uppermost part of the spinal cord, with a cervical enlargement giving rise to the nerves of the upper limb. High injuries here can impair breathing and all four limbs." },
    "Thoracic cord": { ro: "Măduva toracică (T1–T12) este segmentul cel mai lung al măduvei spinării, cu diametru relativ redus. De aici pornesc nervii intercostali și fibre simpatice care controlează organele interne.", en: "The thoracic cord (T1–T12) is the longest spinal cord segment, relatively slender in diameter. It gives rise to the intercostal nerves and sympathetic fibers that control the internal organs." },
    "Lumbar cord": { ro: "Măduva lombară prezintă intumescența lombară, de unde pornesc nervii voluminoși ai membrului inferior. Deși segmentele ei se află mai sus, în jurul vertebrelor toracice inferioare, ele deservesc coapsa, gamba și piciorul.", en: "The lumbar cord shows the lumbar enlargement, from which the large nerves of the lower limb arise. Although its segments lie higher up, around the lower thoracic vertebrae, they serve the thigh, leg and foot." },
    "Sacral cord": { ro: "Măduva sacrală se termină cu conul medular, vârful conic al măduvei spinării, la nivelul vertebrei L1–L2. Conține centri pentru controlul vezicii urinare, al intestinului și al funcției sexuale.", en: "The sacral cord ends in the conus medullaris, the tapered tip of the spinal cord, at the level of vertebra L1–L2. It contains centers controlling the bladder, bowel and sexual function." },
    "Spinal cord membrane": { ro: "Meningele spinale sunt cele trei învelișuri care protejează măduva spinării: dura mater dură la exterior, arahnoida fină la mijloc și pia mater lipită de măduvă. Între arahnoidă și pia curge lichidul cefalorahidian.", en: "The spinal meninges are the three membranes protecting the spinal cord: the tough dura mater outside, the delicate arachnoid in the middle, and the pia mater hugging the cord. Cerebrospinal fluid flows between arachnoid and pia." },
    "Brain membrane": { ro: "Encefalul întreg cuprinde emisferele cerebrale, cerebelul și trunchiul cerebral, învelite de cele trei meninge craniene. Protejat de craniu și plutind în lichid cefalorahidian, el coordonează toate funcțiile organismului.", en: "The whole brain comprises the cerebral hemispheres, cerebellum and brainstem, wrapped by the three cranial meninges. Protected by the skull and floating in cerebrospinal fluid, it coordinates all the body's functions." },
    "Nervous": { ro: "Sistemul nervos este rețeaua de comandă a corpului, alcătuită din sistemul nervos central (creier și măduva spinării) și cel periferic (nervii). El primește informații, le prelucrează și coordonează răspunsurile prin semnale electrice rapide.", en: "The nervous system is the body's command network, made of the central nervous system (brain and spinal cord) and the peripheral system (the nerves). It receives information, processes it and coordinates responses through rapid electrical signals." },
    "Spinal cords": { ro: "Măduva spinării este cordonul nervos care coboară prin canalul vertebral de la bulbul rahidian până la vertebra L1–L2. Ea conduce semnalele între creier și corp și mediază reflexele fără implicarea creierului.", en: "The spinal cord is the nerve cable running through the vertebral canal from the medulla oblongata to vertebra L1–L2. It carries signals between brain and body and mediates reflexes without involving the brain." },
    "Stomach": { ro: "Stomacul este un organ muscular în formă de sac care amestecă alimentele cu sucul gastric — acid clorhidric și pepsină — transformându-le în chim. Leagă esofagul de duoden.", en: "The stomach is a muscular sac that mixes food with gastric juice — hydrochloric acid and pepsin — turning it into chyme. It links the esophagus to the duodenum." },
    "Stomach cap": { ro: "Fundul (fornixul) stomacului este porțiunea superioară, în formă de cupolă, situată deasupra cardiei. Aici se adună aerul înghițit, formând bula de gaz gastrică vizibilă radiologic.", en: "The fundus is the dome-shaped upper part of the stomach, lying above the cardia. Swallowed air collects here, forming the gastric gas bubble seen on X-rays." },
    "Stomach cap2": { ro: "Fundul stomacului este partea sa cea mai înaltă, dispusă sub cupola diafragmei stângi. Colectează gazele înghițite și conține numeroase glande secretoare de acid.", en: "The fundus is the highest part of the stomach, sitting beneath the left dome of the diaphragm. It gathers swallowed gas and contains many acid-secreting glands." },
    "Cardiac": { ro: "Cardia este orificiul prin care esofagul se deschide în stomac, la nivelul vertebrei T11. Sfincterul esofagian inferior de aici împiedică refluxul conținutului acid înapoi în esofag.", en: "The cardia is the opening where the esophagus joins the stomach, around vertebra T11. Its lower esophageal sphincter prevents acidic contents from refluxing back into the esophagus." },
    "Duodenum": { ro: "Duodenul este prima porțiune, în formă de potcoavă (C), a intestinului subțire. Primește bila și sucul pancreatic prin papila duodenală mare și neutralizează chimul acid venit din stomac.", en: "The duodenum is the first, C-shaped part of the small intestine. It receives bile and pancreatic juice through the major duodenal papilla and neutralizes the acidic chyme from the stomach." },
    "Esophagus": { ro: "Esofagul este un tub muscular de circa 25 cm care transportă bolul alimentar din faringe în stomac prin unde peristaltice. Traversează diafragma prin hiatul esofagian.", en: "The esophagus is a muscular tube about 25 cm long that carries the food bolus from the pharynx to the stomach by peristalsis. It passes through the diaphragm at the esophageal hiatus." },
    "Pyloric Sphincter valve": { ro: "Sfincterul piloric este un inel de mușchi neted la ieșirea stomacului. Reglează trecerea chimului în duoden, eliberându-l în cantități mici și împiedicând refluxul înapoi în stomac.", en: "The pyloric sphincter is a ring of smooth muscle at the stomach's exit. It controls the release of chyme into the duodenum in small amounts and prevents it from flowing back." },
    "Large Intestine": { ro: "Intestinul gros absoarbe apa și electroliții din reziduurile nedigerate și formează materiile fecale. Cuprinde cecul, colonul și rectul și adăpostește flora bacteriană intestinală.", en: "The large intestine absorbs water and electrolytes from undigested residue and forms feces. It comprises the cecum, colon and rectum and hosts the gut bacterial flora." },
    "Small Intestine": { ro: "Intestinul subțire, lung de circa 6 m, este locul principal al digestiei și absorbției nutrienților. Vilozitățile sale măresc enorm suprafața; cuprinde duodenul, jejunul și ileonul.", en: "The small intestine, about 6 m long, is the main site of digestion and nutrient absorption. Its villi hugely increase surface area; it includes the duodenum, jejunum and ileum." },
    "Left Lobe": { ro: "Lobul stâng al ficatului este porțiunea mai mică, situată la stânga ligamentului falciform. Ficatul produce bilă, depozitează glicogen și detoxifică sângele.", en: "The left lobe of the liver is the smaller portion, lying to the left of the falciform ligament. The liver makes bile, stores glycogen and detoxifies the blood." },
    "Right Lobe": { ro: "Lobul drept al ficatului este cel mai mare, situat la dreapta ligamentului falciform. Sub el se află vezica biliară; ficatul filtrează sângele venit prin vena portă.", en: "The right lobe of the liver is the largest, lying to the right of the falciform ligament. The gallbladder sits beneath it; the liver filters blood arriving via the portal vein." },
    "Ligaments": { ro: "Ligamentele hepatice — falciform, rotund (ligamentum teres) și coronar — fixează ficatul de diafragmă și de peretele abdominal. Ligamentul rotund este vestigiul venei ombilicale fetale.", en: "The hepatic ligaments — falciform, round (ligamentum teres) and coronary — anchor the liver to the diaphragm and abdominal wall. The round ligament is the remnant of the fetal umbilical vein." },
    "Gall bladder": { ro: "Vezica biliară este un sac în formă de pară, situat pe fața inferioară a ficatului. Depozitează și concentrează bila, eliberând-o în duoden pentru digestia grăsimilor.", en: "The gallbladder is a pear-shaped sac on the underside of the liver. It stores and concentrates bile, releasing it into the duodenum to digest fats." },
    "Ducts A": { ro: "Canalele biliare colectează bila din ficat: canalele hepatice drept și stâng se unesc în canalul hepatic comun, care transportă bila spre vezica biliară și duoden.", en: "The bile ducts collect bile from the liver: the right and left hepatic ducts join to form the common hepatic duct, carrying bile toward the gallbladder and duodenum." },
    "Ducts B": { ro: "Canalele biliare conduc bila spre duoden; canalul cistic al vezicii biliare se unește cu canalul hepatic comun formând canalul coledoc, care se deschide la papila duodenală.", en: "The bile ducts deliver bile to the duodenum; the gallbladder's cystic duct joins the common hepatic duct to form the common bile duct, which opens at the duodenal papilla." },
    "Pancreas Body": { ro: "Corpul pancreasului este porțiunea sa centrală, care traversează transversal abdomenul, anterior coloanei vertebrale și posterior stomacului. Secretă enzime digestive și hormoni precum insulina.", en: "The body of the pancreas is its central portion, crossing the abdomen transversely in front of the spine and behind the stomach. It secretes digestive enzymes and hormones such as insulin." },
    "Pancreas Head": { ro: "Capul pancreasului este porțiunea sa cea mai voluminoasă, cuprinsă în potcoava duodenului. Prin el trece canalul coledoc înainte de a se deschide în duoden.", en: "The head of the pancreas is its bulkiest part, cradled within the C-curve of the duodenum. The common bile duct passes through it before opening into the duodenum." },
    "Pancreas tail": { ro: "Coada pancreasului este extremitatea sa efilată, îndreptată spre stânga, care ajunge până la hilul splinei. Conține numeroase insule Langerhans producătoare de insulină.", en: "The tail of the pancreas is its tapered left end, reaching to the hilum of the spleen. It is rich in the islets of Langerhans that produce insulin." },
    "Oral cavity": { ro: "Cavitatea bucală este locul unde începe digestia: dinții mărunțesc alimentele prin masticație, iar amilaza salivară inițiază descompunerea amidonului. Se deschide posterior în faringe.", en: "The oral cavity is where digestion begins: the teeth grind food by chewing while salivary amylase starts breaking down starch. It opens posteriorly into the pharynx." },
    "Gingiva": { ro: "Gingia este mucoasa fermă, roz, care acoperă osul alveolar și înconjoară coletul dinților. Îi protejează și îi sprijină, sigilând spațiul dintre dinte și os.", en: "The gingiva is the firm, pink mucosa covering the alveolar bone and surrounding the necks of the teeth. It protects and supports them, sealing the gap between tooth and bone." },
    "Uvula": { ro: "Omușorul (uvula) este prelungirea musculară care atârnă din marginea posterioară a palatului moale. În timpul deglutiției se ridică, închizând nazofaringele și împiedicând alimentele să urce în nas.", en: "The uvula is the muscular projection hanging from the back edge of the soft palate. During swallowing it rises to close off the nasopharynx, stopping food from entering the nose." },
    "Salivary gland": { ro: "Glandele salivare — parotidă, submandibulară și sublinguală — secretă saliva care umezește alimentele și conține amilază. Saliva începe digestia amidonului și facilitează formarea bolului.", en: "The salivary glands — parotid, submandibular and sublingual — secrete saliva that moistens food and contains amylase. Saliva begins starch digestion and helps form the bolus." },
    "Salivary duct": { ro: "Canalul salivar transportă saliva de la glandă în cavitatea bucală. Canalul parotidian (Stensen) se deschide în dreptul molarilor superiori, iar cel submandibular (Wharton) sub limbă.", en: "The salivary duct carries saliva from the gland into the mouth. The parotid (Stensen) duct opens near the upper molars, and the submandibular (Wharton) duct opens under the tongue." },
    "Nasal cavity": { ro: "Cavitatea nazală încălzește, umidifică și filtrează aerul inspirat prin mucoasa și cornetele sale. Găzduiește receptorii olfactivi și comunică posterior cu nazofaringele.", en: "The nasal cavity warms, humidifies and filters inhaled air through its mucosa and turbinates. It houses the olfactory receptors and connects posteriorly with the nasopharynx." },
    "Nasopharynx": { ro: "Nazofaringele este porțiunea superioară a faringelui, situată în spatele cavității nazale. Este exclusiv o cale aeriană; conține amigdala faringiană (vegetațiile adenoide) și orificiile trompelor lui Eustachio.", en: "The nasopharynx is the upper part of the pharynx, behind the nasal cavity. It is purely an airway; it contains the pharyngeal tonsil (adenoids) and the openings of the Eustachian tubes." },
    "Tongue": { ro: "Limba este un organ muscular mobil care amestecă alimentele și le formează în bol, împingându-le spre faringe la înghițire. Poartă mugurii gustativi și participă la vorbire.", en: "The tongue is a mobile muscular organ that mixes food and shapes it into a bolus, pushing it toward the pharynx when swallowing. It carries the taste buds and aids speech." },
    "Abdomen aorta abdominalis arteries": { ro: "Aorta abdominală continuă aorta toracică sub diafragmă, la nivelul vertebrei T12, și coboară în fața coloanei lombare. Din ea pornesc trunchiul celiac, arterele mezenterice și renale, apoi se bifurcă în arterele iliace comune la nivelul L4.", en: "The abdominal aorta continues the thoracic aorta below the diaphragm at the T12 level, running in front of the lumbar spine. It gives off the celiac trunk, mesenteric and renal arteries, then splits into the common iliac arteries at L4." },
    "Abdomen inferior vena cavav Veins": { ro: "Vena cavă inferioară este cea mai mare venă a corpului, formată prin unirea venelor iliace comune la nivelul L5. Ea adună sângele din membrele inferioare, pelvis și abdomen și îl varsă în atriul drept.", en: "The inferior vena cava is the body's largest vein, formed by the union of the common iliac veins at L5. It collects blood from the lower limbs, pelvis and abdomen and empties it into the right atrium." },
    "Aortaa": { ro: "Aorta este cea mai mare arteră a corpului și pornește din ventriculul stâng. Ea transportă sânge oxigenat către întregul organism prin ramurile sale succesive.", en: "The aorta is the largest artery in the body, arising from the left ventricle. It carries oxygen-rich blood to the entire body through its successive branches." },
    "Aortic arteries": { ro: "Arcul aortic este porțiunea curbată care leagă aorta ascendentă de cea descendentă, deasupra inimii. Din el pornesc trunchiul brahiocefalic, artera carotidă comună stângă și artera subclaviculară stângă, care irigă capul și membrele superioare.", en: "The aortic arch is the curved segment linking the ascending and descending aorta above the heart. It gives off the brachiocephalic trunk, the left common carotid and the left subclavian arteries, which supply the head and upper limbs." },
    "Aortic valve": { ro: "Valva aortică se află între ventriculul stâng și aortă și are trei cuspide semilunare. Ea se deschide la sistolă pentru a lăsa sângele să iasă și se închide pentru a împiedica întoarcerea lui în ventricul.", en: "The aortic valve lies between the left ventricle and the aorta and has three semilunar cusps. It opens during systole to let blood out and closes to prevent it from flowing back into the ventricle." },
    "Back Heart": { ro: "Fața posterioară a inimii (baza cordului) este formată în principal de atriul stâng și privește spre coloana vertebrală. Aici se deschid cele patru vene pulmonare care aduc sânge oxigenat de la plămâni.", en: "The posterior surface (base) of the heart is formed mainly by the left atrium and faces the spine. Here the four pulmonary veins open, delivering oxygen-rich blood from the lungs." },
    "Capslice Type2": { ro: "Vârful inimii (apexul) este capătul ascuțit al cordului, format de ventriculul stâng, orientat în jos, înainte și la stânga. Bătaia sa se poate palpa în spațiul al cincilea intercostal, pe linia medioclaviculară.", en: "The apex is the pointed tip of the heart, formed by the left ventricle and directed down, forward and to the left. Its beat can be felt in the fifth intercostal space along the midclavicular line." },
    "Gut Veins": { ro: "Vena mezenterică superioară drenează sângele de la intestinul subțire, cec și colonul ascendent și transvers. Ea se unește cu vena splenică în spatele pancreasului pentru a forma vena portă.", en: "The superior mesenteric vein drains blood from the small intestine, cecum and ascending and transverse colon. Behind the pancreas it joins the splenic vein to form the hepatic portal vein." },
    "Gut arteries": { ro: "Artera mezenterică superioară pornește din aorta abdominală la nivelul L1 și irigă intestinul mijlociu — de la duoden și intestinul subțire până la două treimi din colonul transvers.", en: "The superior mesenteric artery arises from the abdominal aorta at L1 and supplies the midgut — from the duodenum and small intestine to the proximal two-thirds of the transverse colon." },
    "Head neck arteries": { ro: "Artera carotidă comună urcă pe fața laterală a gâtului și se împarte la nivelul cartilajului tiroid în artera carotidă internă și externă. Ea este principala sursă de sânge pentru cap și gât, iar pulsul ei se palpează lateral de laringe.", en: "The common carotid artery ascends along the side of the neck and divides at the level of the thyroid cartilage into the internal and external carotid arteries. It is the main blood supply to the head and neck, and its pulse can be felt beside the larynx." },
    "Head neck001 Veins": { ro: "Vena jugulară internă drenează sângele de la creier, față și gât și coboară pe gât în teaca carotidiană. Ea se unește cu vena subclaviculară pentru a forma vena brahiocefalică.", en: "The internal jugular vein drains blood from the brain, face and neck, descending through the neck within the carotid sheath. It joins the subclavian vein to form the brachiocephalic vein." },
    "Kidney Veins (dreapta)": { ro: "Vena renală dreaptă drenează sângele din rinichiul drept și se varsă direct în vena cavă inferioară. Ea este mai scurtă decât cea stângă, deoarece vena cavă se află pe partea dreaptă a corpului.", en: "The right renal vein drains blood from the right kidney directly into the inferior vena cava. It is shorter than the left because the inferior vena cava lies on the right side of the body." },
    "Kidney Veins (stânga)": { ro: "Vena renală stângă drenează sângele din rinichiul stâng și traversează linia mediană, trecând anterior de aortă, pentru a ajunge la vena cavă inferioară. Fiind mai lungă, ea primește și vena suprarenală și cea gonadală stângă.", en: "The left renal vein drains the left kidney and crosses the midline, passing in front of the aorta to reach the inferior vena cava. Being longer, it also receives the left suprarenal and gonadal veins." },
    "Kidney arteries (dreapta)": { ro: "Artera renală dreaptă pornește din aorta abdominală și irigă rinichiul drept. Ea este mai lungă decât cea stângă și trece prin spatele venei cave inferioare pentru a ajunge la rinichi.", en: "The right renal artery arises from the abdominal aorta and supplies the right kidney. It is longer than the left and passes behind the inferior vena cava to reach the kidney." },
    "Kidney arteries (stânga)": { ro: "Artera renală stângă pornește din aorta abdominală și irigă rinichiul stâng. Deoarece rinichiul stâng se află mai aproape de aortă și puțin mai sus, această arteră este mai scurtă decât cea dreaptă.", en: "The left renal artery arises from the abdominal aorta and supplies the left kidney. Because the left kidney sits closer to the aorta and slightly higher, this artery is shorter than the right one." },
    "Liver Veins": { ro: "Vena portă hepatică transportă sângele bogat în nutrienți de la intestin, stomac și splină către ficat, pentru a fi filtrat și prelucrat. Ea se formează prin unirea venei mezenterice superioare cu vena splenică.", en: "The hepatic portal vein carries nutrient-rich blood from the intestines, stomach and spleen to the liver for filtering and processing. It is formed by the union of the superior mesenteric and splenic veins." },
    "Liver arteries": { ro: "Artera hepatică proprie provine din trunchiul celiac (prin artera hepatică comună) și aduce sânge oxigenat ficatului și veziculei biliare. Ea urcă în ligamentul hepatoduodenal alături de vena portă și de canalul biliar.", en: "The proper hepatic artery arises from the celiac trunk (via the common hepatic artery) and delivers oxygenated blood to the liver and gallbladder. It ascends within the hepatoduodenal ligament alongside the portal vein and bile duct." },
    "Lower limb Veins (dreapta)": { ro: "Vena femurală dreaptă drenează sângele din membrul inferior drept și continuă vena poplitee la nivelul coapsei. La trecerea pe sub ligamentul inghinal devine venă iliacă externă.", en: "The right femoral vein drains blood from the right lower limb, continuing the popliteal vein through the thigh. As it passes under the inguinal ligament it becomes the external iliac vein." },
    "Lower limb Veins (stânga)": { ro: "Vena femurală stângă drenează sângele din membrul inferior stâng și continuă vena poplitee la nivelul coapsei. La trecerea pe sub ligamentul inghinal devine venă iliacă externă.", en: "The left femoral vein drains blood from the left lower limb, continuing the popliteal vein through the thigh. As it passes under the inguinal ligament it becomes the external iliac vein." },
    "Lower limb arteries (dreapta)": { ro: "Artera femurală dreaptă continuă artera iliacă externă sub ligamentul inghinal și este principala arteră a membrului inferior drept. Pulsul ei se palpează în triunghiul femural, iar mai jos devine arteră poplitee.", en: "The right femoral artery continues the external iliac artery below the inguinal ligament and is the main artery of the right lower limb. Its pulse is felt in the femoral triangle, and further down it becomes the popliteal artery." },
    "Lower limb arteries (stânga)": { ro: "Artera femurală stângă continuă artera iliacă externă sub ligamentul inghinal și este principala arteră a membrului inferior stâng. Pulsul ei se palpează în triunghiul femural, iar mai jos devine arteră poplitee.", en: "The left femoral artery continues the external iliac artery below the inguinal ligament and is the main artery of the left lower limb. Its pulse is felt in the femoral triangle, and further down it becomes the popliteal artery." },
    "Mitral valve": { ro: "Valva mitrală (bicuspidă) se află între atriul stâng și ventriculul stâng și are două cuspide. Ea împiedică întoarcerea sângelui în atriu în timpul contracției ventriculare, fiind ancorată prin cordaje tendinoase de mușchii papilari.", en: "The mitral (bicuspid) valve lies between the left atrium and left ventricle and has two cusps. It prevents blood from flowing back into the atrium during ventricular contraction, held in place by chordae tendineae anchored to the papillary muscles." },
    "Pelvis Veins": { ro: "Vena iliacă internă (hipogastrică) drenează sângele de la organele pelviene, perineu și regiunea fesieră. Ea se unește cu vena iliacă externă pentru a forma vena iliacă comună.", en: "The internal iliac (hypogastric) vein drains blood from the pelvic organs, perineum and gluteal region. It joins the external iliac vein to form the common iliac vein." },
    "Pelvis arteries": { ro: "Artera iliacă internă (hipogastrică) este principala arteră a pelvisului și provine din bifurcația arterei iliace comune. Ea irigă organele pelviene, perineul și regiunea fesieră, iar la făt continuă în cordonul ombilical.", en: "The internal iliac (hypogastric) artery is the main artery of the pelvis, arising from the bifurcation of the common iliac artery. It supplies the pelvic organs, perineum and gluteal region, and in the fetus continues into the umbilical cord." },
    "Penis Veins": { ro: "Vena dorsală profundă a penisului drenează sângele din țesutul erectil (corpii cavernoși) și se află pe fața dorsală a penisului, sub fascia profundă. Ea se varsă în plexul venos prostatic din pelvis.", en: "The deep dorsal vein of the penis drains blood from the erectile tissue (corpora cavernosa) and lies on the dorsal surface beneath the deep fascia. It empties into the prostatic venous plexus in the pelvis." },
    "Penis arteries": { ro: "Artera dorsală a penisului este ramură a arterei rușinoase interne și trece pe fața dorsală a penisului. Ea irigă pielea, prepuțul și glandul, contribuind la aportul de sânge necesar erecției.", en: "The dorsal artery of the penis is a branch of the internal pudendal artery and runs along the dorsum of the penis. It supplies the skin, prepuce and glans, contributing to the blood flow needed for erection." },
    "Pulmonary Veins (dreapta)": { ro: "Venele pulmonare drepte (superioară și inferioară) transportă sânge oxigenat de la plămânul drept către atriul stâng. Ele fac parte din puținele vene ale corpului care conțin sânge bogat în oxigen.", en: "The right pulmonary veins (superior and inferior) carry oxygen-rich blood from the right lung to the left atrium. They are among the few veins in the body that carry oxygenated blood." },
    "Pulmonary Veins (stânga)": { ro: "Venele pulmonare stângi (superioară și inferioară) transportă sânge oxigenat de la plămânul stâng către atriul stâng. Ele fac parte din puținele vene ale corpului care conțin sânge bogat în oxigen.", en: "The left pulmonary veins (superior and inferior) carry oxygen-rich blood from the left lung to the left atrium. They are among the few veins in the body that carry oxygenated blood." },
    "Pulmonary inferior arteries (dreapta)": { ro: "Artera lobară inferioară dreaptă este o ramură a arterei pulmonare drepte și duce sânge neoxigenat către lobul inferior al plămânului drept, pentru a fi oxigenat. Spre deosebire de majoritatea arterelor, ea transportă sânge sărac în oxigen.", en: "The right inferior lobar artery is a branch of the right pulmonary artery and carries deoxygenated blood to the lower lobe of the right lung to be oxygenated. Unlike most arteries, it carries oxygen-poor blood." },
    "Pulmonary inferior arteries (stânga)": { ro: "Artera lobară inferioară stângă este o ramură a arterei pulmonare stângi și duce sânge neoxigenat către lobul inferior al plămânului stâng. Ca toate arterele pulmonare, ea transportă sânge sărac în oxigen.", en: "The left inferior lobar artery is a branch of the left pulmonary artery and carries deoxygenated blood to the lower lobe of the left lung. Like all pulmonary arteries, it carries oxygen-poor blood." },
    "Pulmonary superior arteries (dreapta)": { ro: "Artera lobară superioară dreaptă este o ramură a arterei pulmonare drepte și duce sânge neoxigenat către lobul superior al plămânului drept. Aici sângele va fi oxigenat la nivelul alveolelor.", en: "The right superior lobar artery is a branch of the right pulmonary artery and carries deoxygenated blood to the upper lobe of the right lung. There the blood is oxygenated at the alveoli." },
    "Pulmonary superior arteries (stânga)": { ro: "Artera lobară superioară stângă este o ramură a arterei pulmonare stângi și duce sânge neoxigenat către lobul superior al plămânului stâng. Aici sângele va fi oxigenat la nivelul alveolelor.", en: "The left superior lobar artery is a branch of the left pulmonary artery and carries deoxygenated blood to the upper lobe of the left lung. There the blood is oxygenated at the alveoli." },
    "Pulmonary valve": { ro: "Valva pulmonară se află între ventriculul drept și trunchiul pulmonar și are trei cuspide semilunare. Ea se deschide pentru a trimite sângele spre plămâni și se închide pentru a împiedica întoarcerea lui în ventricul.", en: "The pulmonary valve lies between the right ventricle and the pulmonary trunk and has three semilunar cusps. It opens to send blood toward the lungs and closes to stop it from returning to the ventricle." },
    "Pulmonary vein": { ro: "Vena pulmonară transportă sânge oxigenat de la plămâni la atriul stâng, de unde acesta va fi trimis în întregul corp. Este una dintre puținele vene care conțin sânge bogat în oxigen.", en: "The pulmonary vein carries oxygen-rich blood from the lungs to the left atrium, from where it is pumped to the whole body. It is one of the few veins that carry oxygenated blood." },
    "Pulmoneryartery": { ro: "Trunchiul pulmonar pornește din ventriculul drept și transportă sânge neoxigenat către plămâni. După un scurt traiect se împarte în arterele pulmonare dreaptă și stângă.", en: "The pulmonary trunk arises from the right ventricle and carries deoxygenated blood toward the lungs. After a short course it divides into the right and left pulmonary arteries." },
    "Superior vena cava Veins": { ro: "Vena cavă superioară adună sângele venos de la cap, gât, membrele superioare și torace și îl varsă în atriul drept. Ea se formează prin unirea celor două vene brahiocefalice.", en: "The superior vena cava collects venous blood from the head, neck, upper limbs and thorax and empties it into the right atrium. It is formed by the union of the two brachiocephalic veins." },
    "Thorax Veins": { ro: "Vena azygos urcă pe partea dreaptă a coloanei toracice și drenează sângele de la pereții toracelui și de la esofag. Ea se varsă în vena cavă superioară și oferă o cale de legătură între sistemele celor două vene cave.", en: "The azygos vein ascends along the right side of the thoracic spine and drains the thoracic wall and the esophagus. It empties into the superior vena cava and provides a collateral link between the superior and inferior vena cava systems." },
    "Thorax arteries": { ro: "Aorta toracică este porțiunea aortei descendente cuprinsă între vertebrele T4 și T12. Ea dă ramuri pentru peretele toracic, esofag, bronhii și pericard, apoi trece prin diafragmă devenind aortă abdominală.", en: "The thoracic aorta is the part of the descending aorta between the T4 and T12 vertebrae. It gives branches to the thoracic wall, esophagus, bronchi and pericardium, then passes through the diaphragm to become the abdominal aorta." },
    "Tricuspic valve": { ro: "Valva tricuspidă se află între atriul drept și ventriculul drept și are trei cuspide. Ea împiedică întoarcerea sângelui în atriu în timpul contracției ventriculului drept.", en: "The tricuspid valve lies between the right atrium and right ventricle and has three cusps. It prevents blood from flowing back into the atrium during contraction of the right ventricle." },
    "Upper limb Veins (dreapta)": { ro: "Vena bazilică dreaptă este o venă superficială care urcă pe fața medială a brațului drept. Ea se varsă în vena axilară și este folosită frecvent pentru recoltări de sânge sau montarea de perfuzii.", en: "The right basilic vein is a superficial vein ascending along the medial side of the right arm. It drains into the axillary vein and is often used for blood draws and intravenous lines." },
    "Upper limb Veins (stânga)": { ro: "Vena bazilică stângă este o venă superficială care urcă pe fața medială a brațului stâng. Ea se varsă în vena axilară și este folosită frecvent pentru recoltări de sânge sau montarea de perfuzii.", en: "The left basilic vein is a superficial vein ascending along the medial side of the left arm. It drains into the axillary vein and is often used for blood draws and intravenous lines." },
    "Upper limb arteries (dreapta)": { ro: "Artera brahială dreaptă continuă artera axilară și este principala arteră a brațului drept. La nivelul plicii cotului se împarte în arterele radială și ulnară, iar pe traiectul ei se măsoară tensiunea arterială.", en: "The right brachial artery continues the axillary artery and is the main artery of the right arm. At the elbow it divides into the radial and ulnar arteries, and it is the artery used to measure blood pressure." },
    "Upper limb arteries (stânga)": { ro: "Artera brahială stângă continuă artera axilară și este principala arteră a brațului stâng. La nivelul plicii cotului se împarte în arterele radială și ulnară, iar pe traiectul ei se măsoară tensiunea arterială.", en: "The left brachial artery continues the axillary artery and is the main artery of the left arm. At the elbow it divides into the radial and ulnar arteries, and it is the artery used to measure blood pressure." },
    "Arythenoid cartilage": { ro: "Cartilajele aritenoide sunt o pereche de piramide așezate pe lama cricoidului; procesul lor vocal fixează ligamentul vocal, iar procesul muscular primește mușchii care deschid și închid glota.", en: "The arytenoids are a pair of pyramid-shaped cartilages sitting on the cricoid lamina; their vocal process anchors the vocal ligament, while their muscular process receives the muscles that open and close the glottis." },
    "Conus elasticus": { ro: "Conul elastic este o membrană fibroelastică ce urcă de pe arcul cricoidului până la corzile vocale; marginea sa liberă superioară formează chiar ligamentul vocal.", en: "The conus elasticus is a fibroelastic membrane rising from the cricoid arch up to the vocal cords; its free upper border forms the vocal ligament itself." },
    "Corniculate cartilage": { ro: "Cartilajele corniculate (ale lui Santorini) sunt doi noduli elastici mici, așezați pe vârful aritenoidelor, în grosimea plicii ariepiglotice.", en: "The corniculate cartilages (of Santorini) are two small elastic nodules perched on the apex of the arytenoids, within the aryepiglottic fold." },
    "Cricoid cartilage": { ro: "Cartilajul cricoid este singurul inel cartilaginos complet al căilor aeriene, având forma unui inel cu pecete; situat la nivelul vertebrei C6, formează baza laringelui.", en: "The cricoid is the only complete cartilage ring in the airway, shaped like a signet ring; lying at the C6 level, it forms the base of the larynx." },
    "Cricopharyngeal ligament": { ro: "Ligamentul cricofaringian leagă marginea posterioară a lamei cricoidului de peretele faringelui, ancorând laringele la joncțiunea cu esofagul.", en: "The cricopharyngeal ligament ties the posterior border of the cricoid lamina to the pharyngeal wall, anchoring the larynx at its junction with the esophagus." },
    "Cuneiform cartilage": { ro: "Cartilajele cuneiforme (ale lui Wrisberg) sunt bastonașe elastice mici din plica ariepiglotică, situate înaintea celor corniculate, cărora le dau rigiditate.", en: "The cuneiform cartilages (of Wrisberg) are small elastic rods within the aryepiglottic fold, lying in front of the corniculates and stiffening the fold." },
    "Diaphragm": { ro: "Diafragmul este mușchiul principal al respirației, inervat de nervul frenic (C3–C5); prin orificiile sale trec aorta, esofagul și vena cavă inferioară între torace și abdomen.", en: "The diaphragm is the chief muscle of breathing, supplied by the phrenic nerve (C3–C5); the aorta, esophagus and inferior vena cava all pass through its openings between chest and abdomen." },
    "Epiglottic cartilage": { ro: "Cartilajul epiglotic este o lamă elastică în formă de frunză; la deglutiție epiglota se pliază peste intrarea în laringe, împiedicând pătrunderea alimentelor în căile aeriene.", en: "The epiglottic cartilage is a leaf-shaped sheet of elastic cartilage; during swallowing the epiglottis folds over the laryngeal inlet, keeping food out of the airway." },
    "HYO-Epiglottic Ligament": { ro: "Ligamentul hioepiglotic leagă fața anterioară a epiglotei de corpul osului hioid, menținând epiglota în poziție deasupra laringelui.", en: "The hyoepiglottic ligament connects the front of the epiglottis to the body of the hyoid bone, holding the epiglottis in place above the larynx." },
    "Hyoio Bone": { ro: "Osul hioid are formă de U și este singurul os din corp care nu se articulează cu niciun alt os; suspendat de mușchi și ligamente, susține limba și laringele.", en: "The hyoid is a U-shaped bone and the only bone in the body that articulates with no other; slung by muscles and ligaments, it supports the tongue and the larynx." },
    "Left Bronchus": { ro: "Bronhia principală stângă este mai lungă, mai îngustă și mai orizontală; trece pe sub arcul aortic spre plămânul stâng, care are doar doi lobi.", en: "The left main bronchus is longer, narrower and more horizontal; it passes beneath the aortic arch to the left lung, which has only two lobes." },
    "Left Lung": { ro: "Plămânul stâng are doar doi lobi (superior și inferior) și o scobitură cardiacă cu lingula, fiind mai mic pentru a face loc inimii.", en: "The left lung has just two lobes (upper and lower) plus a cardiac notch with the lingula, being smaller to make room for the heart." },
    "Median Thyrohyoid": { ro: "Ligamentul tirohioidian median este o îngroșare centrală a membranei tirohioidiene, care unește incizura cartilajului tiroid de corpul osului hioid.", en: "The median thyrohyoid ligament is a central thickening of the thyrohyoid membrane, joining the notch of the thyroid cartilage to the body of the hyoid bone." },
    "Quadrangular membrane": { ro: "Membrana patrulateră este porțiunea superioară a membranei fibroelastice a laringelui; marginea sa inferioară liberă formează ligamentul vestibular al corzilor vocale false.", en: "The quadrangular membrane is the upper part of the larynx's fibroelastic membrane; its free lower edge forms the vestibular ligament of the false vocal cords." },
    "Right Bronchus": { ro: "Bronhia principală dreaptă este mai scurtă, mai largă și mai verticală, motiv pentru care corpii străini aspirați ajung mai frecvent în ea; deservește plămânul drept, cu trei lobi.", en: "The right main bronchus is shorter, wider and more vertical, so aspirated foreign bodies lodge here more often; it serves the three-lobed right lung." },
    "Right Lung": { ro: "Plămânul drept are trei lobi (superior, mijlociu și inferior), separați de fisurile orizontală și oblică, fiind ceva mai mare decât cel stâng.", en: "The right lung has three lobes (upper, middle and lower) separated by the horizontal and oblique fissures, and is slightly larger than the left." },
    "Thyro-epiglottic ligament": { ro: "Ligamentul tiroepiglotic fixează pedunculul (tija) epiglotei de fața internă a cartilajului tiroid, imediat sub incizura tiroidiană.", en: "The thyroepiglottic ligament fastens the stalk of the epiglottis to the inner surface of the thyroid cartilage, just below the thyroid notch." },
    "Thyroglossal duct": { ro: "Canalul tireoglos este un traiect embrionar care coboară de la foramen cecum al limbii spre glanda tiroidă; în mod normal se obliterează, dar rămășițele sale pot forma chisturi cervicale.", en: "The thyroglossal duct is an embryonic channel descending from the tongue's foramen cecum to the thyroid gland; it normally disappears, but its remnants can form neck cysts." },
    "Thyrohyoid membrane": { ro: "Membrana tirohioidiană unește marginea superioară a cartilajului tiroid de osul hioid; este străbătută de nervul laringian intern și de vasele laringiene superioare.", en: "The thyrohyoid membrane connects the upper border of the thyroid cartilage to the hyoid bone; it is pierced by the internal laryngeal nerve and the superior laryngeal vessels." },
    "Thyroid cartilage": { ro: "Cartilajul tiroid este cel mai mare cartilaj al laringelui; cele două lame ale sale se unesc anterior, formând proeminența laringiană („mărul lui Adam”), mai vizibilă la bărbați.", en: "The thyroid cartilage is the largest laryngeal cartilage; its two laminae meet in front to form the laryngeal prominence (the Adam's apple), more marked in men." },
    "Trachea": { ro: "Traheea este conductul aerian care coboară de la C6 până la carina (T4–T5), unde se bifurcă; peretele îi este menținut deschis de 16–20 de inele cartilaginoase în formă de C.", en: "The trachea is the airway running from C6 down to the carina (T4–T5), where it bifurcates; 16–20 C-shaped cartilage rings keep its lumen open." },
    "Vestibular ligament": { ro: "Ligamentul vestibular este marginea liberă inferioară a membranei patrulatere și constituie scheletul plicii vestibulare (coarda vocală falsă), care protejează corzile vocale adevărate.", en: "The vestibular ligament is the free lower margin of the quadrangular membrane and forms the core of the vestibular fold (the false vocal cord), which protects the true vocal cords." },
  };

  var EXTRA_NAMES = {
    Cerebrum: { ro: "Creier (encefal)", la: "Encephalon" },
    "Cerebrum (dreapta)": { ro: "Emisferă cerebrală dreaptă", la: "Hemispherium cerebri dextrum" },
    "Cerebrum (stânga)": { ro: "Emisferă cerebrală stângă", la: "Hemispherium cerebri sinistrum" },
    "Cerebellum (dreapta)": {
      ro: "Cerebel — emisfera dreaptă",
      la: "Cerebellum, hemispherium dextrum",
    },
    "Cerebellum (stânga)": {
      ro: "Cerebel — emisfera stângă",
      la: "Cerebellum, hemispherium sinistrum",
    },
    "Midbrain (dreapta)": { ro: "Mezencefal (dreapta)", la: "Mesencephalon" },
    "Midbrain (stânga)": { ro: "Mezencefal (stânga)", la: "Mesencephalon" },
    "Pons (dreapta)": { ro: "Punte (Varolio) — dreapta", la: "Pons" },
    "Pons (stânga)": { ro: "Punte (Varolio) — stânga", la: "Pons" },
    "Medulla oblongata (dreapta)": { ro: "Bulb rahidian — dreapta", la: "Medulla oblongata" },
    "Medulla oblongata (stânga)": { ro: "Bulb rahidian — stânga", la: "Medulla oblongata" },

    "Cranial nerves": { ro: "Nervi cranieni (I–XII)", la: "Nervi craniales" },
    "Cervical nerves": {
      ro: "Nervi cervicali / plex cervical",
      la: "Nervi cervicales, plexus cervicalis",
    },
    "Brachial plexus": { ro: "Plex brahial (membru superior)", la: "Plexus brachialis" },
    "Thoracic nerves": { ro: "Nervi toracici (intercostali)", la: "Nervi intercostales" },
    "Lumbosacral plexus": { ro: "Plex lombosacral (membru inferior)", la: "Plexus lumbosacralis" },
    "Olfactory nerves": { ro: "Nervi olfactivi (I)", la: "Nervi olfactorii" },
    "Olfactory bulb": { ro: "Bulb olfactiv", la: "Bulbus olfactorius" },

    "Cervical cord": { ro: "Măduva cervicală", la: "Pars cervicalis medullae spinalis" },
    "Thoracic cord": { ro: "Măduva toracică", la: "Pars thoracica medullae spinalis" },
    "Lumbar cord": { ro: "Măduva lombară", la: "Pars lumbalis medullae spinalis" },
    "Sacral cord": { ro: "Măduva sacrală + con medular", la: "Pars sacralis, conus medullaris" },
    "Spinal cord membrane": { ro: "Meningele spinale (dura/arahnoida)", la: "Meninges spinales" },

    Stomach: { ro: "Stomac", la: "Gaster / Ventriculus" },
    "Stomach cap": { ro: "Fundul stomacului", la: "Fundus gastricus" },
    "Stomach cap2": { ro: "Fundul stomacului", la: "Fundus gastricus" },
    Cardiac: { ro: "Cardia (orificiul cardic)", la: "Cardia" },
    Duodenum: { ro: "Duoden", la: "Duodenum" },
    Esophagus: { ro: "Esofag", la: "Oesophagus" },
    "Pyloric Sphincter valve": { ro: "Sfincter piloric", la: "Sphincter pyloricus" },
    "Large Intestine": { ro: "Intestin gros", la: "Intestinum crassum" },
    "Small Intestine": { ro: "Intestin subțire", la: "Intestinum tenue" },
    "Left Lobe": { ro: "Lob hepatic stâng", la: "Lobus hepatis sinister" },
    "Right Lobe": { ro: "Lob hepatic drept", la: "Lobus hepatis dexter" },
    Ligaments: { ro: "Ligamente hepatice", la: "Ligamenta hepatis" },
    "Gall bladder": { ro: "Vezică biliară", la: "Vesica biliaris" },
    "Ducts A": { ro: "Canale biliare", la: "Ductus biliaris" },
    "Ducts B": { ro: "Canale biliare", la: "Ductus biliaris" },
    "Pancreas Body": { ro: "Corpul pancreasului", la: "Corpus pancreatis" },
    "Pancreas Head": { ro: "Capul pancreasului", la: "Caput pancreatis" },
    "Pancreas tail": { ro: "Coada pancreasului", la: "Cauda pancreatis" },
    "Oral cavity": { ro: "Cavitate bucală", la: "Cavitas oris" },
    Gingiva: { ro: "Gingie", la: "Gingiva" },
    Uvula: { ro: "Omușor (uvulă)", la: "Uvula palatina" },
    "Salivary gland": { ro: "Glandă salivară", la: "Glandula salivaria" },
    "Salivary duct": { ro: "Canal salivar", la: "Ductus salivarius" },
    "Nasal cavity": { ro: "Cavitate nazală", la: "Cavitas nasi" },
    Nasopharynx: { ro: "Nazofaringe", la: "Pars nasalis pharyngis" },
    Tongue: { ro: "Limbă", la: "Lingua" },
    "Abdomen aorta abdominalis arteries": { ro: "Aortă abdominală", la: "Aorta abdominalis" },
    "Abdomen inferior vena cavav Veins": { ro: "Venă cavă inferioară", la: "Vena cava inferior" },
    Aortaa: { ro: "Aortă", la: "Aorta" },
    "Aortic arteries": { ro: "Aortă", la: "Aorta" },
    "Aortic valve": { ro: "Valvă aortică", la: "Valva aortae" },
    "Back Heart": { ro: "Fața posterioară a inimii (cordului)", la: "Facies posterior cordis" },
    "Capslice Type2": { ro: "Vârful inimii (apexul cordului)", la: "Apex cordis" },
    "Gut Veins": { ro: "Venă mezenterică superioară", la: "Vena mesenterica superior" },
    "Gut arteries": { ro: "Arteră mezenterică superioară", la: "Arteria mesenterica superior" },
    "Head neck arteries": { ro: "Arteră carotidă comună", la: "Arteria carotis communis" },
    "Head neck001 Veins": { ro: "Venă jugulară internă", la: "Vena jugularis interna" },
    "Kidney Veins (dreapta)": { ro: "Venă renală dreaptă", la: "Vena renalis dextra" },
    "Kidney Veins (stânga)": { ro: "Venă renală stângă", la: "Vena renalis sinistra" },
    "Kidney arteries (dreapta)": { ro: "Arteră renală dreaptă", la: "Arteria renalis dextra" },
    "Kidney arteries (stânga)": { ro: "Arteră renală stângă", la: "Arteria renalis sinistra" },
    "Liver Veins": { ro: "Venă portă hepatică", la: "Vena portae hepatis" },
    "Liver arteries": { ro: "Arteră hepatică proprie", la: "Arteria hepatica propria" },
    "Lower limb Veins (dreapta)": { ro: "Venă femurală dreaptă", la: "Vena femoralis dextra" },
    "Lower limb Veins (stânga)": { ro: "Venă femurală stângă", la: "Vena femoralis sinistra" },
    "Lower limb arteries (dreapta)": {
      ro: "Arteră femurală dreaptă",
      la: "Arteria femoralis dextra",
    },
    "Lower limb arteries (stânga)": {
      ro: "Arteră femurală stângă",
      la: "Arteria femoralis sinistra",
    },
    "Mitral valve": { ro: "Valvă mitrală", la: "Valva mitralis" },
    "Pelvis Veins": { ro: "Venă iliacă internă", la: "Vena iliaca interna" },
    "Pelvis arteries": { ro: "Arteră iliacă internă", la: "Arteria iliaca interna" },
    "Penis Veins": { ro: "Venă dorsală profundă a penisului", la: "Vena dorsalis profunda penis" },
    "Penis arteries": { ro: "Arteră dorsală a penisului", la: "Arteria dorsalis penis" },
    "Pulmonary Veins (dreapta)": { ro: "Vene pulmonare drepte", la: "Venae pulmonales dextrae" },
    "Pulmonary Veins (stânga)": { ro: "Vene pulmonare stângi", la: "Venae pulmonales sinistrae" },
    "Pulmonary inferior arteries (dreapta)": {
      ro: "Arteră lobară inferioară dreaptă (a plămânului drept)",
      la: "Arteria lobaris inferior pulmonis dextri",
    },
    "Pulmonary inferior arteries (stânga)": {
      ro: "Arteră lobară inferioară stângă (a plămânului stâng)",
      la: "Arteria lobaris inferior pulmonis sinistri",
    },
    "Pulmonary superior arteries (dreapta)": {
      ro: "Arteră lobară superioară dreaptă (a plămânului drept)",
      la: "Arteria lobaris superior pulmonis dextri",
    },
    "Pulmonary superior arteries (stânga)": {
      ro: "Arteră lobară superioară stângă (a plămânului stâng)",
      la: "Arteria lobaris superior pulmonis sinistri",
    },
    "Pulmonary valve": { ro: "Valvă pulmonară", la: "Valva trunci pulmonalis" },
    "Pulmonary vein": { ro: "Venă pulmonară", la: "Vena pulmonalis" },
    Pulmoneryartery: { ro: "Trunchi pulmonar (arteră pulmonară)", la: "Truncus pulmonalis" },
    "Superior vena cava Veins": { ro: "Venă cavă superioară", la: "Vena cava superior" },
    "Thorax Veins": { ro: "Venă azygos", la: "Vena azygos" },
    "Thorax arteries": { ro: "Aortă toracică", la: "Aorta thoracica" },
    "Tricuspic valve": { ro: "Valvă tricuspidă", la: "Valva tricuspidalis" },
    "Upper limb Veins (dreapta)": { ro: "Venă bazilică dreaptă", la: "Vena basilica dextra" },
    "Upper limb Veins (stânga)": { ro: "Venă bazilică stângă", la: "Vena basilica sinistra" },
    "Upper limb arteries (dreapta)": {
      ro: "Arteră brahială dreaptă",
      la: "Arteria brachialis dextra",
    },
    "Upper limb arteries (stânga)": {
      ro: "Arteră brahială stângă",
      la: "Arteria brachialis sinistra",
    },
    "Brain membrane": { ro: "Creier (encefal)", la: "Encephalon" },
    Nervous: { ro: "Sistemul nervos", la: "Systema nervosum" },
    "Olfactory bulb": { ro: "Bulbul olfactiv", la: "Bulbus olfactorius" },
    "Olfactory nerves": { ro: "Nervii olfactivi", la: "Nervi olfactorii" },
    "Spinal cord membrane": {
      ro: "Meningele spinale (membranele măduvei spinării)",
      la: "Meninges spinales",
    },
    "Spinal cords": { ro: "Măduva spinării", la: "Medulla spinalis" },
    "Arythenoid cartilage": { ro: "Cartilaj aritenoid", la: "Cartilago arytenoidea" },
    "Conus elasticus": {
      ro: "Con elastic (membrana cricovocală / cricotiroidiană)",
      la: "Conus elasticus",
    },
    "Corniculate cartilage": { ro: "Cartilaj corniculat", la: "Cartilago corniculata" },
    "Cricoid cartilage": { ro: "Cartilaj cricoid", la: "Cartilago cricoidea" },
    "Cricopharyngeal ligament": { ro: "Ligament cricofaringian", la: "Ligamentum cricopharyngeum" },
    "Cuneiform cartilage": { ro: "Cartilaj cuneiform", la: "Cartilago cuneiformis" },
    Diaphragm: { ro: "Diafragm", la: "Diaphragma" },
    "Epiglottic cartilage": { ro: "Cartilaj epiglotic", la: "Cartilago epiglottica" },
    "HYO-Epiglottic Ligament": { ro: "Ligament hioepiglotic", la: "Ligamentum hyoepiglotticum" },
    "Hyoio Bone": { ro: "Os hioid", la: "Os hyoideum" },
    "Left Bronchus": { ro: "Bronhie principală stângă", la: "Bronchus principalis sinister" },
    "Left Lung": { ro: "Plămân stâng", la: "Pulmo sinister" },
    "Median Thyrohyoid": {
      ro: "Ligament tirohioidian median",
      la: "Ligamentum thyrohyoideum medianum",
    },
    "Quadrangular membrane": { ro: "Membrană patrulateră", la: "Membrana quadrangularis" },
    "Right Bronchus": { ro: "Bronhie principală dreaptă", la: "Bronchus principalis dexter" },
    "Right Lung": { ro: "Plămân drept", la: "Pulmo dexter" },
    "Thyro-epiglottic ligament": {
      ro: "Ligament tiroepiglotic",
      la: "Ligamentum thyroepiglotticum",
    },
    "Thyroglossal duct": { ro: "Canal tireoglos", la: "Ductus thyroglossalis" },
    "Thyrohyoid membrane": { ro: "Membrană tirohioidiană", la: "Membrana thyrohyoidea" },
    "Thyroid cartilage": { ro: "Cartilaj tiroid", la: "Cartilago thyroidea" },
    Trachea: { ro: "Trahee", la: "Trachea" },
    "Vestibular ligament": { ro: "Ligament vestibular", la: "Ligamentum vestibulare" },
  };
  function exName(pretty) {
    var info = EXTRA_NAMES[pretty];
    if (!info) return { display: pretty, la: null };
    return { display: lang() === "en" ? info.la || pretty : info.ro, la: info.la };
  }

  function lang() {
    return typeof CUR_LANG !== "undefined" && CUR_LANG === "en" ? "en" : "ro";
  }

  function groupForMesh(cfg, name) {
    if (!cfg.groups) return null;
    for (var i = 0; i < cfg.groups.length; i++) {
      if (cfg.groups[i].match.test(name || "")) return cfg.groups[i];
    }
    return cfg.groups[cfg.groups.length - 1] || null;
  }

  function makeExtraTex(S, file, isData) {
    S._texCache = S._texCache || {};
    var ck = (isData ? "n:" : "") + file;
    if (S._texCache[ck]) return S._texCache[ck];
    var base = location.pathname.replace(/\/[^\/]*$/, "/") + "textures/";
    var t = new THREE.TextureLoader().load(base + file);
    t.flipY = false;
    t.wrapS = THREE.ClampToEdgeWrapping;
    t.wrapT = THREE.ClampToEdgeWrapping;
    if (!isData) {
      if (THREE.SRGBColorSpace !== undefined) t.colorSpace = THREE.SRGBColorSpace;
      if (t.encoding !== undefined && THREE.sRGBEncoding !== undefined)
        t.encoding = THREE.sRGBEncoding;
    }
    try {
      t.anisotropy = Math.min(S.renderer.capabilities.getMaxAnisotropy(), 8);
    } catch (e) {}
    S._texCache[ck] = t;
    return t;
  }

  function prettifyExtra(raw) {
    var s = raw || "";
    s = s
      .replace(/_Arteries_mtl_\d+$/i, "")
      .replace(/_Veins_mtl_\d+$/i, "")
      .replace(/_HEART_ANATOMY_\d+$/i, "");
    s = s
      .replace(/_Nervous_Membrane_mtl_\d+$/i, "")
      .replace(/_Nervous_mtl_\d+$/i, "")
      .replace(/_Maters_mtl_\d+$/i, "")
      .replace(/_Spinal_Cord_material_\d+$/i, "")
      .replace(/_Brain_mtl_\d+$/i, "");
    s = s.replace(/_Lungs-?_\d+$/i, "").replace(/_Lungs-_\d+$/i, "");
    s = s
      .replace(/_mat_Stomach_\d+$/i, "")
      .replace(/_Pancreas_Spleen_\d+$/i, "")
      .replace(/_Oral_cavity_mtl_\d+$/i, "")
      .replace(/_Large_Intestine_\d+$/i, "")
      .replace(/_Small_Intestine_\d+$/i, "")
      .replace(/_Liver_mtl_\d+$/i, "")
      .replace(/_Head-neck_muscles_\d+$/i, "");
    s = s.replace(/_\d{3,}$/, "");
    var L = lang() === "en" ? " (left)" : " (stânga)",
      R = lang() === "en" ? " (right)" : " (dreapta)";
    s = s.replace(/[\s_]+L$/, "§L§").replace(/[\s_]+R$/, "§R§");
    s = s.replace(/_/g, " ").replace(/\s+/g, " ").trim();
    s = s.replace(/§L§/, L).replace(/§R§/, R);
    if (!s) return raw || "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  function groupLabel(g) {
    return (lang() === "en" ? g.en : g.ro) || g.key;
  }

  function initSystem(key) {
    var cfg = CONFIGS[key];
    if (!cfg) return null;
    if (STATES[key] && STATES[key].initialized) return STATES[key];
    var canvas = document.getElementById(cfg.canvas);
    var viewerEl = document.getElementById(cfg.viewer);
    if (!canvas || !viewerEl) return null;

    var S = {
      initialized: true,
      loaded: false,
      meshes: [],
      hovered: null,
      selected: null,
      cfg: cfg,
    };
    STATES[key] = S;

    S.scene = new THREE.Scene();

    S.scene.background = null;

    var amb = new THREE.AmbientLight(cfg.ambColor, cfg.ambIntensity || 0.55);
    S.scene.add(amb);
    var keyL = new THREE.DirectionalLight(cfg.keyColor, 0.85);
    keyL.position.set(2, 4, 3);
    S.scene.add(keyL);
    var fill = new THREE.DirectionalLight(cfg.fillColor, 0.4);
    fill.position.set(-3, 2, -2);
    S.scene.add(fill);
    var rim = new THREE.DirectionalLight(cfg.rimColor, 0.3);
    rim.position.set(0, 2, -4);
    S.scene.add(rim);

    var vw = viewerEl.clientWidth || window.innerWidth,
      vh = viewerEl.clientHeight || window.innerHeight;
    S.camera = new THREE.PerspectiveCamera(45, vw / vh, 0.01, 200);
    S.camera.position.set(0, 1, 3);

    S.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true });
    S.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    S.renderer.setSize(vw, vh);
    if (THREE.sRGBEncoding !== undefined) S.renderer.outputEncoding = THREE.sRGBEncoding;
    if (THREE.SRGBColorSpace !== undefined) S.renderer.outputColorSpace = THREE.SRGBColorSpace;

    S.controls = new THREE.OrbitControls(S.camera, canvas);
    S.controls.enableDamping = true;
    S.controls.dampingFactor = 0.08;
    S.controls.rotateSpeed = 0.85;
    S.controls.minDistance = 0.05;
    S.controls.maxDistance = 15;
    S.controls.target.set(0, 0.5, 0);

    S.raycaster = new THREE.Raycaster();
    S.mouse = new THREE.Vector2();

    canvas.addEventListener("pointermove", function (e) {
      if (!S.loaded) return;
      var r = canvas.getBoundingClientRect();
      S.mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      S.mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      S.raycaster.setFromCamera(S.mouse, S.camera);
      var hits = S.raycaster.intersectObjects(S.meshes, false);
      if (hits.length > 0) {
        canvas.style.cursor = "pointer";
        var m = hits[0].object;
        if (m !== S.hovered) {
          if (S.hovered && S.hovered !== S.selected) clearHl(S.hovered);
          S.hovered = m;
          if (m !== S.selected) applyHl(m);
        }
      } else {
        canvas.style.cursor = "default";
        if (S.hovered && S.hovered !== S.selected) clearHl(S.hovered);
        S.hovered = null;
      }
    });
    canvas.addEventListener("click", function (e) {
      if (!S.loaded) return;
      var r = canvas.getBoundingClientRect();
      S.mouse.x = ((e.clientX - r.left) / r.width) * 2 - 1;
      S.mouse.y = -((e.clientY - r.top) / r.height) * 2 + 1;
      S.__lastClickXY = { x: e.clientX, y: e.clientY };
      S.raycaster.setFromCamera(S.mouse, S.camera);
      var hits = S.raycaster.intersectObjects(S.meshes, false);
      if (hits.length === 0) {
        clearExtraSelection(key);
        return;
      }
      selectStruct(key, hits[0].object);
    });

    function onResize() {
      var w = viewerEl.clientWidth || 1,
        h = viewerEl.clientHeight || 1;
      S.camera.aspect = w / h;
      S.camera.updateProjectionMatrix();

      S.renderer.setSize(w, h);
    }
    window.addEventListener("resize", onResize);
    S.resize = onResize;

    function animate() {
      requestAnimationFrame(animate);
      if (window.__bxRenderGate && !window.__bxRenderGate(S.renderer.domElement)) return;
      S.controls.update();
      S.renderer.render(S.scene, S.camera);
    }
    animate();

    loadModel(key);
    return S;
  }

  function loadModel(key) {
    var S = STATES[key];
    if (!S) return;
    var cfg = S.cfg;
    var loadFill = document.getElementById(cfg.loadFill);
    var loadText = document.getElementById(cfg.loadText);
    var loadErr = document.getElementById(cfg.loadErr);
    var loader = document.getElementById(cfg.loader);

    var loaderGltf = new THREE.GLTFLoader();
    if (window.THREE && THREE.DRACOLoader) {
      try {
        var dl = new THREE.DRACOLoader();
        dl.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
        loaderGltf.setDRACOLoader(dl);
      } catch (e) {}
    }
    loaderGltf.load(
      cfg.glb + "?v=20260708",
      function (gltf) {
        S.model = gltf.scene;
        S.scene.add(S.model);
        var box = new THREE.Box3().setFromObject(S.model);
        var c = new THREE.Vector3();
        box.getCenter(c);
        var size = new THREE.Vector3();
        box.getSize(size);

        var vFov = (S.camera.fov * Math.PI) / 180;
        var tanV = Math.tan(vFov / 2);
        var aspect = S.camera.aspect || (vw / vh) || 1.4;
        var distH = size.y / 2 / tanV;
        var distW = size.x / 2 / (tanV * aspect);
        var fitScale = cfg.fitScale != null ? cfg.fitScale : 1.15;
        var fitDist = Math.max(distH, distW) * fitScale;
        S.camera.position.set(c.x, c.y + size.y * 0.05, c.z + fitDist);
        S.controls.target.set(c.x, c.y, c.z);
        S.controls.update();
        S._homeCam = { pos: S.camera.position.clone(), target: S.controls.target.clone() };

        S.model.traverse(function (o) {
          if (o.isMesh) {

            if (cfg.exclude && cfg.exclude.test(o.name || "")) {
              o.visible = false;
              return;
            }
            var grp = groupForMesh(cfg, o.name || "");
            o.userData._grp = grp;
            if (grp && (grp.tex || grp.color != null)) {
              var matOpts = {
                roughness: grp.roughness != null ? grp.roughness : 0.52,
                metalness: 0.05,
                emissive: new THREE.Color(0),
              };
              var tuneTex = function (t) {
                if (!t) return t;
                if (grp.wrap === "mirror") t.wrapS = t.wrapT = THREE.MirroredRepeatWrapping;
                else if (grp.wrap === "repeat") t.wrapS = t.wrapT = THREE.RepeatWrapping;
                if (grp.repeat) t.repeat.set(grp.repeat[0], grp.repeat[1]);
                t.needsUpdate = true;
                return t;
              };
              if (grp.tex) matOpts.map = tuneTex(makeExtraTex(S, grp.tex));
              if (grp.color != null) matOpts.color = new THREE.Color(grp.color);
              if (grp.nrm) {
                matOpts.normalMap = tuneTex(makeExtraTex(S, grp.nrm, true));
                if (grp.normalScale != null)
                  matOpts.normalScale = new THREE.Vector2(grp.normalScale, grp.normalScale);
              }
              if (grp.translucent) {
                matOpts.transparent = true;
                matOpts.opacity = grp.opacity != null ? grp.opacity : 0.3;
                matOpts.depthWrite = false;
                matOpts.side = THREE.DoubleSide;
              } else if (grp.doubleSide) {
                matOpts.side = THREE.DoubleSide;
              }
              o.material = new THREE.MeshStandardMaterial(matOpts);
            } else if (o.material && o.material.map) {
              o.material.map.colorSpace = THREE.SRGBColorSpace || o.material.map.colorSpace;
            }
            o.userData._origMat = o.material;
            S.meshes.push(o);
          }
        });
        console.log("[" + key + "] meshes:", S.meshes.length, "textured by group");
        var cntEl = document.getElementById(cfg.ids && cfg.ids.count);
        if (cntEl) cntEl.textContent = S.meshes.length;
        if (typeof buildExtraList === "function") buildExtraList(key);
        if (typeof wireExtraSearch === "function") wireExtraSearch(key);
        if (typeof buildExtraNav === "function") buildExtraNav(key);
        if (typeof applyExtraNav === "function") applyExtraNav(key, "all");

        S.loaded = true;
        S.renderer.render(S.scene, S.camera);
        setTimeout(function () {
          var cv = document.getElementById(cfg.canvas);
          if (cv) cv.classList.add("extra-revealed");
          if (loader) loader.classList.add("hidden");
        }, 250);
      },
      function (xhr) {
        if (xhr && xhr.lengthComputable) {
          var pct = Math.round((xhr.loaded / xhr.total) * 100);
          if (loadFill) loadFill.style.width = pct + "%";
          if (loadText)
            loadText.textContent =
              (CUR_LANG === "en" ? "Loading... " : "Se încarcă... ") + pct + "%";
        }
      },
      function (err) {
        console.warn("[" + key + "] GLB load failed:", (err && err.message) || err);
        if (loadErr) {
          loadErr.style.display = "block";
          loadErr.textContent =
            CUR_LANG === "en" ? "Failed to load model" : "Eroare la încărcarea modelului";
        }
        if (loadText) loadText.style.display = "none";
      }
    );
  }

  var EX_SEL = 0x4fd1ff;
  function applyHl(mesh) {
    if (!mesh || !mesh.material || mesh.userData._hlHover) return;
    mesh.userData._hlHover = mesh.material;
    var h = mesh.material.clone();
    if (h.emissive) h.emissive = new THREE.Color(EX_SEL).multiplyScalar(0.28);
    else h.emissive = new THREE.Color(EX_SEL).multiplyScalar(0.28);
    h.needsUpdate = true;
    mesh.material = h;
  }
  function clearHl(mesh) {
    if (!mesh) return;
    if (mesh.userData._hlHover) {
      mesh.material = mesh.userData._hlHover;
      mesh.userData._hlHover = null;
    }
  }
  function hlSelect(mesh) {
    if (!mesh) return;
    var src = mesh.userData._origMat || mesh.material;
    var sel = src.clone();
    if (sel.color) sel.color = new THREE.Color(0xffffff).lerp(new THREE.Color(EX_SEL), 0.55);
    sel.emissive = new THREE.Color(EX_SEL).multiplyScalar(0.45);
    sel.needsUpdate = true;
    mesh.material = sel;
  }
  function restoreSel(mesh) {
    if (mesh && mesh.userData._origMat) mesh.material = mesh.userData._origMat;
  }

  function clearExtraSelection(key) {
    var S = STATES[key];
    if (!S) return;
    var ids = S.cfg.ids || {};
    if (S.selected) {
      restoreSel(S.selected);
      S.selected = null;
    }
    var ph = document.getElementById(ids.infoPh);
    if (ph) ph.style.display = "flex";
    var ct = document.getElementById(ids.infoCt);
    if (ct) ct.style.display = "none";
    var ov = document.getElementById(ids.overlay);
    if (ov) ov.classList.remove("visible");
    var listEl = document.getElementById(ids.list);
    if (listEl)
      listEl.querySelectorAll(".bone-item.selected").forEach(function (e) {
        e.classList.remove("selected");
      });
  }
  window.__extraClearSel = clearExtraSelection;

  function selectStruct(key, mesh) {
    var S = STATES[key];
    if (!S || !mesh) return;
    var cfg = S.cfg,
      ids = cfg.ids || {};
    if (S.selected && S.selected !== mesh) restoreSel(S.selected);
    clearHl(mesh);
    S.selected = mesh;
    hlSelect(mesh);
    var grp = mesh.userData._grp;
    var pretty = prettifyExtra(mesh.name);
    var info = exName(pretty);
    var name = info.display;
    var sys = (cfg.sysName && (lang() === "en" ? cfg.sysName.en : cfg.sysName.ro)) || "";
    var cat = sys + (grp ? " — " + groupLabel(grp) : "");
    var bnoName = document.getElementById(ids.bnoName);
    if (bnoName) bnoName.textContent = name;
    var bnoCat = document.getElementById(ids.bnoCat);
    if (bnoCat) bnoCat.textContent = cat;
    var ov = document.getElementById(ids.overlay);
    if (ov) {
      ov.classList.add("visible");
      var pad = 12,
        ow = ov.offsetWidth || 220,
        oh = ov.offsetHeight || 60;
      var cx = (S.__lastClickXY && S.__lastClickXY.x) || window.innerWidth / 2;
      var cy = (S.__lastClickXY && S.__lastClickXY.y) || window.innerHeight / 2;
      var x = cx,
        y = cy;
      if (x + ow + pad > window.innerWidth) x = x - ow - pad;
      else x = x + pad;
      if (y + oh + pad > window.innerHeight) y = y - oh - pad;
      else y = y + pad;
      if (x < 4) x = 4;
      if (y < 4) y = 4;
      ov.style.left = x + "px";
      ov.style.top = y + "px";
    }
    var ph = document.getElementById(ids.infoPh);
    if (ph) ph.style.display = "none";
    var ct = document.getElementById(ids.infoCt);
    if (ct) {
      ct.style.display = "block";
      var gicon = grp ? grp.icon : "";
      var descObj =
        (typeof MESH_DESC !== "undefined" && MESH_DESC[pretty]) ||
        (grp && GROUP_DESC[cfg.mode + "." + grp.key]) ||
        null;
      ct.innerHTML =
        '<div class="info-section"><h4>' +
        (lang() === "en" ? "Structure" : "Structură") +
        "</h4>" +
        '<div class="info-tag" style="background:rgba(79,209,255,.15);border-color:rgba(79,209,255,.35);color:#7dd3fc">' +
        escapeHTML(name) +
        "</div></div>" +
        (info.la
          ? '<div class="info-section"><h4>' +
            (lang() === "en" ? "Scientific name" : "Denumire științifică") +
            '</h4><p style="font-style:italic;color:#cbd5e1">' +
            escapeHTML(info.la) +
            "</p></div>"
          : "") +
        '<div class="info-section"><h4>' +
        (lang() === "en" ? "System" : "Sistem") +
        "</h4><p>" +
        escapeHTML(sys) +
        "</p></div>" +
        (grp
          ? '<div class="info-section"><h4>' +
            (lang() === "en" ? "Group" : "Grupă") +
            "</h4><p>" +
            gicon +
            " " +
            escapeHTML(groupLabel(grp)) +
            "</p></div>"
          : "") +
        (descObj
          ? '<div class="info-section"><h4>' +
            (lang() === "en" ? "Description" : "Descriere") +
            "</h4><p>" +
            escapeHTML(lang() === "en" ? descObj.en : descObj.ro) +
            "</p></div>"
          : "");
    }
    var title = document.getElementById(ids.infoTitle);
    if (title) title.textContent = name;
    var curLabel = document.getElementById(ids.curLabel);
    if (curLabel) curLabel.textContent = name;
    var listEl = document.getElementById(ids.list);
    if (listEl) {
      var sel = null;
      listEl.querySelectorAll(".bone-item").forEach(function (e) {
        e.classList.remove("selected");
        if (
          e.getAttribute("data-ex-pretty") === pretty ||
          e.getAttribute("data-ex-name") === mesh.name
        )
          sel = e;
      });
      if (sel) {
        sel.classList.add("selected");
      }
    }
    if (typeof trackEvent === "function") {
      try {
        trackEvent("visitSection", cfg.mode);
      } catch (e) {}
    }
  }
  window.__extraSelect = selectStruct;

  function focusOn(key, mesh) {
    var S = STATES[key];
    if (!S || !mesh) return;
    var b = new THREE.Box3().setFromObject(mesh);
    var c = new THREE.Vector3();
    b.getCenter(c);
    var s = new THREE.Vector3();
    b.getSize(s);
    var maxDim = Math.max(s.x, s.y, s.z, 0.01);
    var fov = ((S.camera.fov || 45) * Math.PI) / 180;
    var dist = maxDim / 2 / Math.tan(fov / 2);
    if ((S.camera.aspect || 1) < 1) dist = dist / S.camera.aspect;
    dist = Math.max(dist * 2.4, 0.35);
    var endPos = new THREE.Vector3(c.x + dist * 0.15, c.y + dist * 0.1, c.z + dist);
    var startPos = S.camera.position.clone(),
      startTgt = S.controls.target.clone();
    var t0 = performance.now(),
      dur = 650;
    function step() {
      var t = (performance.now() - t0) / dur;
      if (t > 1) t = 1;
      var e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      S.camera.position.lerpVectors(startPos, endPos, e);
      S.controls.target.lerpVectors(startTgt, c, e);
      S.controls.update();
      if (t < 1) requestAnimationFrame(step);
    }
    step();
  }

  function buildExtraList(key) {
    var S = STATES[key];
    if (!S) return;
    var cfg = S.cfg,
      ids = cfg.ids || {};
    var listEl = document.getElementById(ids.list);
    if (!listEl) return;
    var groups = {};
    (cfg.groups || []).forEach(function (g) {
      groups[g.key] = { g: g, items: [], seen: {} };
    });
    S.meshes.forEach(function (m) {
      var grp = m.userData._grp;
      if (!grp) return;
      var bucket = groups[grp.key];
      if (!bucket) return;
      var pretty = prettifyExtra(m.name);
      if (bucket.seen[pretty]) return;
      bucket.seen[pretty] = true;
      bucket.items.push({ mesh: m, pretty: pretty, display: exName(pretty).display });
    });
    var html = "";
    (cfg.groups || []).forEach(function (g) {
      var bucket = groups[g.key];
      if (!bucket || !bucket.items.length) return;
      bucket.items.sort(function (a, b) {
        return a.display.localeCompare(b.display);
      });
      html +=
        '<div class="bone-group open" data-grp="' +
        g.key +
        '"><div class="group-header" onclick="this.parentElement.classList.toggle(\'open\')"><span class="group-arrow">&#9654;</span><span class="group-icon">' +
        g.icon +
        '</span><span class="group-name">' +
        groupLabel(g) +
        " (" +
        bucket.items.length +
        ')</span></div><ul class="group-list">';
      bucket.items.forEach(function (it) {
        html +=
          '<li class="bone-item" data-ex-name="' +
          escapeHTML(it.mesh.name || "") +
          '" data-ex-pretty="' +
          escapeHTML(it.pretty) +
          '"><span class="bone-label-text">' +
          escapeHTML(it.display) +
          "</span></li>";
      });
      html += "</ul></div>";
    });
    listEl.innerHTML = html;
    listEl.querySelectorAll(".bone-item").forEach(function (li) {
      li.addEventListener("click", function () {
        var nm = li.getAttribute("data-ex-name");
        var found = null;
        for (var i = 0; i < S.meshes.length; i++) {
          if (S.meshes[i].name === nm) {
            found = S.meshes[i];
            break;
          }
        }
        if (found) {
          selectStruct(key, found);
          focusOn(key, found);
        }
      });
    });
  }

  function wireExtraSearch(key) {
    var S = STATES[key];
    if (!S || S._searchWired) return;
    var ids = S.cfg.ids || {};
    var input = document.getElementById(ids.search);
    var listEl = document.getElementById(ids.list);
    var countEl = document.getElementById(ids.searchCount);
    if (!input || !listEl) return;
    S._searchWired = true;
    input.addEventListener("input", function () {
      var q = (input.value || "").toLowerCase().trim();
      var items = listEl.querySelectorAll(".bone-item");
      var groupsEl = listEl.querySelectorAll(".bone-group");
      if (!q) {
        items.forEach(function (it) {
          it.style.display = "";
          it.classList.remove("search-match");
        });
        groupsEl.forEach(function (g) {
          g.style.display = "";
        });
        if (countEl) {
          countEl.textContent = "";
          countEl.classList.remove("visible");
        }
        return;
      }
      var matches = 0;
      items.forEach(function (it) {
        var t = (it.textContent || "").toLowerCase();
        if (t.indexOf(q) >= 0) {
          it.style.display = "";
          it.classList.add("search-match");
          matches++;
        } else {
          it.style.display = "none";
          it.classList.remove("search-match");
        }
      });
      groupsEl.forEach(function (g) {
        var any = Array.prototype.some.call(g.querySelectorAll(".bone-item"), function (li) {
          return li.style.display !== "none";
        });
        g.style.display = any ? "" : "none";
        if (any) g.classList.add("open");
      });
      if (countEl) {
        countEl.textContent = matches + " " + (lang() === "en" ? "results" : "rezultate");
        countEl.classList.add("visible");
      }
    });
  }

  function buildExtraNav(key) {
    var S = STATES[key];
    if (!S) return;
    var cfg = S.cfg;
    var nav = document.getElementById("navTabsExtra");
    if (!nav) return;
    var present = {};
    S.meshes.forEach(function (m) {
      var g = m.userData._grp;
      if (g) present[g.key] = true;
    });
    var html =
      '<button class="nav-tab active" data-ex-grp="all">' +
      (lang() === "en" ? "All" : "Toate") +
      "</button>";
    (cfg.groups || []).forEach(function (g) {
      if (!present[g.key]) return;
      html += '<button class="nav-tab" data-ex-grp="' + g.key + '">' + groupLabel(g) + "</button>";
    });
    nav.innerHTML = html;
    nav.setAttribute("data-sys", key);
    nav.querySelectorAll(".nav-tab").forEach(function (b) {
      b.addEventListener("click", function () {
        applyExtraNav(key, b.getAttribute("data-ex-grp"));
      });
    });
  }
  window.__extraBuildNav = buildExtraNav;

  function applyExtraNav(key, groupKey) {
    var S = STATES[key];
    if (!S) return;
    var ids = S.cfg.ids || {};
    S._navGroup = groupKey;
    S.meshes.forEach(function (m) {
      var g = m.userData._grp;
      m.visible = groupKey === "all" || (g && g.key === groupKey);
    });
    if (S.selected && S.selected.visible === false) clearExtraSelection(key);
    var listEl = document.getElementById(ids.list);
    if (listEl) {
      listEl.querySelectorAll(".bone-group").forEach(function (gEl) {
        var gk = gEl.getAttribute("data-grp");
        gEl.style.display = groupKey === "all" || gk === groupKey ? "" : "none";
        if (groupKey !== "all" && gk === groupKey) gEl.classList.add("open");
      });
    }
    var nav = document.getElementById("navTabsExtra");
    if (nav) {
      nav.querySelectorAll(".nav-tab").forEach(function (b) {
        b.classList.toggle("active", b.getAttribute("data-ex-grp") === groupKey);
      });
    }
  }
  window.__extraApplyNav = applyExtraNav;

  window.__extraResetCam = function (key) {
    var S = STATES[key];
    if (!S || !S._homeCam) return;
    var startPos = S.camera.position.clone();
    var startTgt = S.controls.target.clone();
    var endPos = S._homeCam.pos;
    var endTgt = S._homeCam.target;
    var t0 = performance.now(),
      dur = 700;
    function step() {
      var t = (performance.now() - t0) / dur;
      if (t > 1) t = 1;
      var e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      S.camera.position.lerpVectors(startPos, endPos, e);
      S.controls.target.lerpVectors(startTgt, endTgt, e);
      S.controls.update();
      if (t < 1) requestAnimationFrame(step);
    }
    step();
  };

  window.__extraInit = initSystem;
  window.__extraStates = STATES;

  window.__extraSelectedName = function (sys) {
    try {
      var S = STATES[sys];
      if (!S || !S.selected) return "";
      return exName(prettifyExtra(S.selected.name)).display || "";
    } catch (e) {
      return "";
    }
  };

  window.__extraToggleSidebar = function () {
    var sys = window.APP_MODE;
    var S = STATES[sys];
    if (!S) return;
    var app = document.getElementById(S.cfg.app);
    if (!app) return;
    var sb = app.querySelector(".sidebar");
    if (!sb) return;
    sb.classList.toggle("collapsed");
    var hidden = sb.classList.contains("collapsed");
    var btn = app.querySelector(".vctrls-left .vbtn");
    if (btn) {
      btn.innerHTML = hidden ? "→" : "←";
      btn.title = hidden
        ? lang() === "en"
          ? "Show panel"
          : "Arată panoul"
        : lang() === "en"
          ? "Hide panel"
          : "Ascunde panoul";
    }

    [60, 160, 260, 340, 420].forEach(function (d) {
      setTimeout(function () {
        if (S.resize) S.resize();
      }, d);
    });
  };
  window.__extraNames = EXTRA_NAMES;
  window.__extraConfigs = CONFIGS;
  window.__extraBuildList = function (sys) {
    if (typeof buildExtraList === "function") buildExtraList(sys);
  };


  window.__extraStructures = function (sys) {
    var S = STATES[sys];
    if (!S || !S.meshes) return [];
    var seen = {},
      out = [];
    S.meshes.forEach(function (m) {
      if (m.visible === false) return;
      var grp = m.userData._grp;
      var pretty = prettifyExtra(m.name);
      var info = exName(pretty);
      if (seen[info.display]) return;
      seen[info.display] = 1;
      out.push({
        name: m.name,
        mesh: m,
        pretty: pretty,
        display: info.display,
        la: info.la,
        group: grp ? grp.key : null,
        groupLabel: grp ? groupLabel(grp) : "",
      });
    });
    return out;
  };
  window.__extraGroupLabels = function (sys) {
    var cfg = CONFIGS[sys];
    if (!cfg) return [];
    return (cfg.groups || []).map(function (g) {
      return groupLabel(g);
    });
  };
  var EX_QUIZ_HI = 0x29b6f6;
  window.__extraQuizClear = function (sys) {
    var S = STATES[sys];
    if (!S || !S.meshes) return;
    S.meshes.forEach(function (m) {
      if (m.userData._qOrig) {
        m.material = m.userData._qOrig;
        m.userData._qOrig = null;
        m.renderOrder = 0;
      }
    });
  };
  window.__extraQuizHi = function (sys, mesh) {
    var S = STATES[sys];
    if (!S || !S.meshes) return;
    window.__extraQuizClear(sys);
    S.meshes.forEach(function (m) {
      if (!m.material) return;
      m.userData._qOrig = m.material;
      if (m === mesh) {
        var hi = m.material.clone();
        if (hi.color) hi.color = new THREE.Color(0xffffff).lerp(new THREE.Color(EX_QUIZ_HI), 0.62);
        hi.emissive = new THREE.Color(EX_QUIZ_HI).multiplyScalar(0.55);
        hi.transparent = false;
        hi.opacity = 1;
        hi.needsUpdate = true;
        m.material = hi;
        m.renderOrder = 2;
      } else {
        var fa = m.material.clone();
        fa.transparent = true;
        fa.opacity = 0.1;
        fa.depthWrite = false;
        fa.needsUpdate = true;
        m.material = fa;
        m.renderOrder = 0;
      }
    });
    if (mesh) focusOn(sys, mesh);
  };

  var origEnter = window.enterApp;
  if (typeof origEnter === "function") {
    window.enterApp = function (mode) {
      var r = origEnter.apply(this, arguments);
      if (
        mode === "cardio" ||
        mode === "nervous" ||
        mode === "respiratory" ||
        mode === "digestive"
      ) {
        document.body.classList.remove(
          "mode-skeleton",
          "mode-quiz",
          "mode-muscular",
          "mode-cardio",
          "mode-nervous",
          "mode-respiratory",
          "mode-digestive"
        );
        document.body.classList.add("mode-" + mode);
        window.APP_MODE = mode;
        var ov = document.getElementById("homeOverlay");
        if (ov) {
          ov.classList.add("hidden");
          setTimeout(function () {
            ov.style.display = "none";
          }, 400);
        }
        var S = initSystem(mode);
        if (S && S.loaded) {
          if (typeof window.__extraBuildNav === "function") window.__extraBuildNav(mode);
          if (typeof window.__extraApplyNav === "function")
            window.__extraApplyNav(mode, S._navGroup || "all");
        }
        [120, 300, 600, 1000].forEach(function (d) {
          setTimeout(function () {
            if (S && S.resize) S.resize();
          }, d);
        });
      }
      return r;
    };
  }

  var origGoBack = window.goBackFromApp;
  if (typeof origGoBack === "function") {
    window.goBackFromApp = function () {
      document.body.classList.remove(
        "mode-cardio",
        "mode-nervous",
        "mode-respiratory",
        "mode-digestive"
      );
      return origGoBack.apply(this, arguments);
    };
  }
  var origShowHome = window.showHome;
  if (typeof origShowHome === "function") {
    window.showHome = function (opts) {
      document.body.classList.remove(
        "mode-cardio",
        "mode-nervous",
        "mode-respiratory",
        "mode-digestive"
      );
      return origShowHome.apply(this, arguments);
    };
  }

  (function hookExtraLang() {
    if (typeof window.applyLanguage !== "function") return;
    var orig = window.applyLanguage;
    window.applyLanguage = function () {
      var r = orig.apply(this, arguments);
      var mode = window.APP_MODE;
      if (
        (mode === "cardio" || mode === "nervous" || mode === "respiratory") &&
        STATES[mode] &&
        STATES[mode].loaded
      ) {
        var S = STATES[mode],
          ids = S.cfg.ids || {};
        buildExtraList(mode);
        buildExtraNav(mode);
        applyExtraNav(mode, S._navGroup || "all");
        if (S.selected) selectStruct(mode, S.selected);
        var phP = document.querySelector("#" + ids.infoPh + " p");
        if (phP)
          phP.innerHTML =
            lang() === "en"
              ? "Select a structure from the model<br>or the list on the left"
              : "Selectează o structură din model<br>sau din lista din stânga";
        var titleEl = document.getElementById(ids.infoTitle);
        if (titleEl && !S.selected)
          titleEl.textContent = lang() === "en" ? "Structure information" : "Informații Structură";
        var curEl = document.getElementById(ids.curLabel);
        if (curEl && !S.selected) {
          var sn = S.cfg.sysName;
          if (sn) curEl.textContent = lang() === "en" ? sn.en : sn.ro;
        }
      }
      return r;
    };
  })();
})();


(function extraQuizModule() {
  if (typeof window.QUIZ === "undefined") return;
  var EXTRA = { nervous: 1, cardio: 1, respiratory: 1, digestive: 1 };
  var VIEWER_ID = {
    nervous: "nervous-viewer",
    cardio: "cardio-viewer",
    respiratory: "resp-viewer",
    digestive: "dig-viewer",
  };
  function L() {
    return typeof CUR_LANG !== "undefined" && CUR_LANG === "en" ? "en" : "ro";
  }
  function tr(ro, en) {
    return L() === "en" ? en : ro;
  }
  function isEx() {
    return !!EXTRA[window.QUIZ.system];
  }
  function structures(sys) {
    return (window.__extraStructures ? window.__extraStructures(sys) : []).filter(function (s) {
      return s && s.display;
    });
  }

  var oPickSys = window.pickQuizSystem;
  window.pickQuizSystem = function (sys) {
    if (!EXTRA[sys]) return oPickSys ? oPickSys.apply(this, arguments) : undefined;
    window.QUIZ.system = sys;
    window.QUIZ.mode = "visual";
    if (typeof window.__extraInit === "function")
      try {
        window.__extraInit(sys);
      } catch (e) {}
    var vIcon = document.getElementById("quizModeVisualIcon");
    var vTitle = document.getElementById("quizModeVisualTitle");
    var vDesc = document.getElementById("quizModeVisualDesc");
    var kDesc = document.getElementById("quizModeKnowDesc");
    var duel = document.getElementById("quizModeDuelCard");
    if (vIcon) vIcon.innerHTML = "&#127919;";
    if (vTitle) vTitle.textContent = tr("Identifică structura", "Identify the structure");
    if (vDesc)
      vDesc.textContent = tr(
        "Vezi o structură evidențiată cu albastru pe model și alegi numele corect din 4 variante.",
        "See a structure highlighted in blue on the model and pick the correct name from 4 options."
      );
    if (kDesc)
      kDesc.textContent = tr(
        "Întrebări cu denumirile românești și latine ale structurilor.",
        "Questions on the Romanian and Latin names of the structures."
      );
    if (duel)
      duel.style.display = window.DUEL_BANKS && window.DUEL_BANKS[sys] ? "" : "none";
    if (typeof showQuizStage === "function") showQuizStage("quizPick");
  };

  var oPickMode = window.pickQuizMode;
  window.pickQuizMode = function (mode) {
    if (!isEx()) return oPickMode ? oPickMode.apply(this, arguments) : undefined;
    window.QUIZ.mode = mode;
    var icon = document.getElementById("quizStartIcon");
    var title = document.getElementById("quizStartTitle");
    var desc = document.getElementById("quizStartDesc");
    if (mode === "visual") {
      if (icon) icon.innerHTML = "&#127919;";
      if (title) title.textContent = tr("Identifică structura", "Identify the structure");
      if (desc)
        desc.textContent = tr(
          "Structura e evidențiată cu albastru pe model — alege numele corect din 4 variante.",
          "The structure is highlighted in blue on the model — pick the correct name from 4 options."
        );
    } else if (mode === "duel") {
      if (icon) icon.innerHTML = "&#129302;";
      if (title) title.textContent = "AI Duel";
      if (desc)
        desc.textContent = tr(
          "Afirmații ADEVĂRAT/FALS despre acest sistem — unele au greșeli subtile. Decide rapid!",
          "TRUE/FALSE statements about this system — some contain subtle errors. Decide fast!"
        );
    } else {
      if (icon) icon.innerHTML = "&#128218;";
      if (title) title.textContent = tr("Test de Cunoștințe", "Knowledge Test");
      if (desc)
        desc.textContent = tr(
          "Potrivește denumirile românești și latine ale structurilor.",
          "Match the Romanian and Latin names of the structures."
        );
    }
    if (typeof showQuizStage === "function") showQuizStage("quizStart");
  };

  function pick4(all, correct, keyFn) {
    var others = shuffle(
      all.filter(function (x) {
        return x !== correct && keyFn(x) !== keyFn(correct);
      })
    ).slice(0, 3);
    return shuffle([correct].concat(others)).map(keyFn);
  }
  function build(sys, mode, count) {
    if (mode === "duel") {
      var dbank = (window.DUEL_BANKS && window.DUEL_BANKS[sys]) || [];
      return shuffle(dbank.slice())
        .slice(0, count)
        .map(function (q) {
          return {
            type: "duel",
            prompt: tr(q.text_ro, q.text_en),
            correct: !!q.correct,
            explain: tr(q.explain_ro, q.explain_en),
          };
        });
    }
    var all = structures(sys);
    if (all.length < 4) return [];
    var out = [];
    var pool = shuffle(all.slice());
    if (mode === "visual") {
      pool.forEach(function (s) {
        if (out.length >= count) return;
        out.push({
          type: "visual",
          mesh: s.mesh,
          answer: s.display,
          options: pick4(all, s, function (x) {
            return x.display;
          }),
          la: s.la,
        });
      });
    } else {
      var withLa = all.filter(function (s) {
        return s.la;
      });
      var groups = window.__extraGroupLabels ? window.__extraGroupLabels(sys) : [];
      pool.forEach(function (s, i) {
        if (out.length >= count) return;
        var k = i % 3;
        if (k === 0 && s.la && withLa.length >= 4) {
          out.push({
            type: "know",
            prompt: tr(
              "Care este denumirea <b>latină</b> a structurii <b>" + s.display + "</b>?",
              "What is the <b>Latin</b> name of <b>" + s.display + "</b>?"
            ),
            answer: s.la,
            options: pick4(withLa, s, function (x) {
              return x.la;
            }),
          });
        } else if (k === 1 && s.la && withLa.length >= 4) {
          out.push({
            type: "know",
            prompt: tr(
              "Ce structură are denumirea latină <b><i>" + s.la + "</i></b>?",
              "Which structure has the Latin name <b><i>" + s.la + "</i></b>?"
            ),
            answer: s.display,
            options: pick4(withLa, s, function (x) {
              return x.display;
            }),
          });
        } else if (groups.length >= 2 && s.groupLabel) {
          var og = shuffle(
            groups.filter(function (g) {
              return g !== s.groupLabel;
            })
          ).slice(0, 3);
          out.push({
            type: "know",
            prompt: tr(
              "Din ce grupă face parte <b>" + s.display + "</b>?",
              "Which group does <b>" + s.display + "</b> belong to?"
            ),
            answer: s.groupLabel,
            options: shuffle([s.groupLabel].concat(og)),
          });
        } else if (s.la && withLa.length >= 4) {
          out.push({
            type: "know",
            prompt: tr(
              "Denumirea latină a structurii <b>" + s.display + "</b>?",
              "Latin name of <b>" + s.display + "</b>?"
            ),
            answer: s.la,
            options: pick4(withLa, s, function (x) {
              return x.la;
            }),
          });
        }
      });
    }
    return out.slice(0, count);
  }

  function enterVisualScene(sys) {
    document.body.classList.remove(
      "mode-skeleton",
      "mode-muscular",
      "mode-cardio",
      "mode-nervous",
      "mode-respiratory",
      "mode-digestive"
    );
    document.body.classList.add("mode-" + sys, "mode-quiz", "qmode-visual");
    document.body.classList.remove("qmode-knowledge", "qmode-duel");
    var panel = document.getElementById("quizPanel");
    var viewer = document.getElementById(VIEWER_ID[sys]);
    if (panel && viewer && !viewer.contains(panel)) {
      panel._exHome = panel.parentNode;
      viewer.appendChild(panel);
    }
    if (typeof window.__extraInit === "function")
      try {
        window.__extraInit(sys);
      } catch (e) {}
    setTimeout(function () {
      var S = window.__extraStates && window.__extraStates[sys];
      if (S && S.resize) S.resize();
    }, 200);
  }
  function restorePanel() {
    var panel = document.getElementById("quizPanel");
    if (panel && panel._exHome) {
      panel._exHome.appendChild(panel);
      panel._exHome = null;
    }
  }

  function beginQuiz() {
    var Q = window.QUIZ;
    var sys = Q.system,
      mode = Q.mode || "visual";
    var diff = Q.difficulty || "medium";
    var count = diff === "easy" ? 8 : diff === "hard" ? 12 : 10;
    var qs = build(sys, mode, count);
    if (!qs.length) {
      alert(
        tr(
          "Se încarcă modelul... reîncearcă în câteva secunde.",
          "Model still loading... try again shortly."
        )
      );
      return;
    }
    Q.questions = qs;
    Q.total = qs.length;
    Q.currentQ = 0;
    Q.score = 0;
    Q.wrong = [];
    Q.answered = false;
    Q.active = true;
    Q.startTime = Date.now();
    var tot = document.getElementById("qTotal");
    if (tot) tot.textContent = Q.total;

    enterVisualScene(sys);
    if (mode !== "visual") {
      document.body.classList.remove("qmode-visual", "qmode-knowledge", "qmode-duel");
      document.body.classList.add(mode === "duel" ? "qmode-duel" : "qmode-knowledge");
    }
    if (typeof showQuizStage === "function") showQuizStage("quizQuestion");
    loadQ();
  }

  var oStart = window.startQuiz;
  window.startQuiz = function (difficulty) {
    if (!isEx()) return oStart ? oStart.apply(this, arguments) : undefined;
    if (difficulty) window.QUIZ.difficulty = difficulty;
    var sys = window.QUIZ.system;
    if (typeof window.__extraInit === "function")
      try {
        window.__extraInit(sys);
      } catch (e) {}
    var tries = 0;
    (function waitModel() {
      if (structures(sys).length >= 4) {
        beginQuiz();
        return;
      }
      if (tries++ > 50) {
        alert(tr("Modelul nu s-a încărcat.", "Model failed to load."));
        return;
      }
      setTimeout(waitModel, 200);
    })();
  };

  function loadQ() {
    var Q = window.QUIZ;
    Q.answered = false;
    if (typeof stopQuestionTimer === "function")
      try {
        stopQuestionTimer();
      } catch (e) {}
    var q = Q.questions[Q.currentQ];
    if (!q) return;
    var el;
    if ((el = document.getElementById("qNum"))) el.textContent = Q.currentQ + 1;
    if ((el = document.getElementById("qScore"))) el.textContent = Q.score;
    if ((el = document.getElementById("qProgFill")))
      el.style.width = (Q.currentQ / Q.total) * 100 + "%";
    if ((el = document.getElementById("qFeedback"))) el.style.display = "none";
    if ((el = document.getElementById("qNextBtn"))) el.style.display = "none";
    if (q.type === "duel") {
      var dh = document.querySelector(".quiz-q-text");
      if (dh) {
        dh.innerHTML =
          '<div class="duel-ai-says">' + tr("AI zice", "AI says") + "</div>" +
          '<div class="duel-statement"></div>' +
          '<div style="font-size:13px;color:var(--t2);font-weight:600;margin-top:6px">' +
          tr("Este corect sau greșit?", "Is it true or false?") + "</div>";
        var st = dh.querySelector(".duel-statement");
        if (st) st.textContent = '"' + q.prompt + '"';
      }
      var dopts = document.getElementById("qOptions");
      if (dopts) {
        dopts.className = "quiz-options duel-options";
        dopts.innerHTML = "";
        [
          [true, "true", "✓", tr("ADEVĂRAT", "TRUE")],
          [false, "false", "✗", tr("FALS", "FALSE")],
        ].forEach(function (d) {
          var b = document.createElement("button");
          b.className = "duel-btn " + d[1];
          b.innerHTML = '<span class="duel-icon">' + d[2] + "</span><span>" + d[3] + "</span>";
          b.onclick = function () {
            answerDuelEx(d[0], b);
          };
          dopts.appendChild(b);
        });
      }
      return;
    }
    var hint = document.querySelector(".quiz-q-text");
    if (hint) {
      if (q.type === "visual")
        hint.innerHTML = tr(
          'Cum se numește structura evidențiată cu <span style="color:#29b6f6">albastru</span>?',
          'What is the structure highlighted in <span style="color:#29b6f6">blue</span>?'
        );
      else hint.innerHTML = q.prompt;
    }
    var opts = document.getElementById("qOptions");
    if (opts) {
      opts.className = "quiz-options";
      opts.innerHTML = "";
      var letters = ["A", "B", "C", "D"];
      q.options.forEach(function (o, idx) {
        var b = document.createElement("button");
        b.className = "quiz-opt";
        b.innerHTML =
          '<span class="quiz-opt-letter">' + letters[idx] + "</span><span>" + o + "</span>";
        b.onclick = function () {
          answer(o, b);
        };
        opts.appendChild(b);
      });
    }
    if (q.type === "visual" && window.__extraQuizHi)
      try {
        window.__extraQuizHi(window.QUIZ.system, q.mesh);
      } catch (e) {}
  }

  function answer(opt, btn) {
    var Q = window.QUIZ;
    if (Q.answered) return;
    Q.answered = true;
    var q = Q.questions[Q.currentQ];
    var correct = opt === q.answer;
    document.querySelectorAll(".quiz-opt").forEach(function (b) {
      b.disabled = true;
      var sp = b.querySelector("span:last-child");
      var lbl = sp ? sp.textContent : "";
      if (lbl === q.answer) b.classList.add("correct");
      else if (b === btn) b.classList.add("wrong");
    });
    var fb = document.getElementById("qFeedback");
    if (correct) {
      Q.score++;
      if (fb) {
        fb.className = "quiz-feedback fb-correct";
        fb.innerHTML =
          "&#9989; <b>" +
          tr("Corect!", "Correct!") +
          "</b> " +
          q.answer +
          (q.la ? " &mdash; <i>" + q.la + "</i>" : "");
        fb.style.display = "block";
      }
    } else {
      Q.wrong.push(q.answer);
      if (fb) {
        fb.className = "quiz-feedback fb-wrong";
        fb.innerHTML =
          "&#10060; <b>" +
          tr("Greșit.", "Wrong.") +
          "</b> " +
          tr("Răspuns corect:", "Correct answer:") +
          " <b>" +
          q.answer +
          "</b>";
        fb.style.display = "block";
      }
    }
    var sc = document.getElementById("qScore");
    if (sc) sc.textContent = Q.score;
    var nb = document.getElementById("qNextBtn");
    if (nb) {
      nb.style.display = "inline-block";
      nb.textContent =
        Q.currentQ + 1 >= Q.total
          ? tr("Vezi rezultatul →", "See result →")
          : tr("Următoarea →", "Next →");
    }
  }

  function answerDuelEx(picked, btn) {
    var Q = window.QUIZ;
    if (Q.answered) return;
    Q.answered = true;
    var q = Q.questions[Q.currentQ];
    var correct = picked === q.correct;
    document.querySelectorAll(".duel-btn").forEach(function (b) {
      b.disabled = true;
      var bv = b.classList.contains("true");
      if (bv === q.correct) b.classList.add("correct");
      else if (b === btn) b.classList.add("wrong");
    });
    var fb = document.getElementById("qFeedback");
    if (correct) {
      Q.score++;
      if (fb) {
        fb.className = "quiz-feedback fb-correct";
        fb.innerHTML = "&#9989; <b>" + tr("Corect!", "Correct!") + "</b> " + (q.explain || "");
        fb.style.display = "block";
      }
    } else {
      Q.wrong.push(q.prompt);
      if (fb) {
        fb.className = "quiz-feedback fb-wrong";
        fb.innerHTML =
          "&#10060; <b>" +
          (q.correct ? tr("Era ADEVĂRAT.", "It was TRUE.") : tr("Era FALS.", "It was FALSE.")) +
          "</b> " +
          (q.explain || "");
        fb.style.display = "block";
      }
    }
    var sc = document.getElementById("qScore");
    if (sc) sc.textContent = Q.score;
    var nb = document.getElementById("qNextBtn");
    if (nb) {
      nb.style.display = "inline-block";
      nb.textContent =
        Q.currentQ + 1 >= Q.total ? tr("Vezi rezultatul →", "See result →") : tr("Următoarea →", "Next →");
    }
  }
  window.__answerDuelEx = answerDuelEx;

  var oNext = window.nextQuiz;
  window.nextQuiz = function () {
    if (!isEx() || !window.QUIZ.active) return oNext ? oNext.apply(this, arguments) : undefined;
    window.QUIZ.currentQ++;
    if (window.QUIZ.currentQ >= window.QUIZ.total) {
      if (window.__extraQuizClear)
        try {
          window.__extraQuizClear(window.QUIZ.system);
        } catch (e) {}
      if (typeof window.endQuiz === "function") window.endQuiz();
    } else loadQ();
  };
  var oSkip = window.skipQuiz;
  window.skipQuiz = function () {
    if (!isEx() || !window.QUIZ.active) return oSkip ? oSkip.apply(this, arguments) : undefined;
    var Q = window.QUIZ;
    if (Q.answered) return;
    Q.answered = true;
    var q = Q.questions[Q.currentQ];
    if (q.type === "duel") {
      Q.wrong.push(q.prompt);
      document.querySelectorAll(".duel-btn").forEach(function (b) {
        b.disabled = true;
        if (b.classList.contains("true") === q.correct) b.classList.add("correct");
      });
      var fbd = document.getElementById("qFeedback");
      if (fbd) {
        fbd.className = "quiz-feedback fb-wrong";
        fbd.innerHTML =
          "&#9197; " +
          (q.correct
            ? tr("Sărit. Era ADEVĂRAT.", "Skipped. It was TRUE.")
            : tr("Sărit. Era FALS.", "Skipped. It was FALSE.")) +
          " " +
          (q.explain || "");
        fbd.style.display = "block";
      }
      var nbd = document.getElementById("qNextBtn");
      if (nbd) {
        nbd.style.display = "inline-block";
        nbd.textContent =
          Q.currentQ + 1 >= Q.total ? tr("Vezi rezultatul →", "See result →") : tr("Următoarea →", "Next →");
      }
      return;
    }
    Q.wrong.push(q.answer);
    document.querySelectorAll(".quiz-opt").forEach(function (b) {
      b.disabled = true;
      var sp = b.querySelector("span:last-child");
      if (sp && sp.textContent === q.answer) b.classList.add("correct");
    });
    var fb = document.getElementById("qFeedback");
    if (fb) {
      fb.className = "quiz-feedback fb-wrong";
      fb.innerHTML =
        "&#9197; " + tr("Sărit. Răspuns:", "Skipped. Answer:") + " <b>" + q.answer + "</b>";
      fb.style.display = "block";
    }
    var nb = document.getElementById("qNextBtn");
    if (nb) {
      nb.style.display = "inline-block";
      nb.textContent =
        Q.currentQ + 1 >= Q.total
          ? tr("Vezi rezultatul →", "See result →")
          : tr("Următoarea →", "Next →");
    }
  };

  function cleanup() {
    if (window.__extraQuizClear && isEx())
      try {
        window.__extraQuizClear(window.QUIZ.system);
      } catch (e) {}
    restorePanel();
    document.body.classList.remove(
      "qmode-visual",
      "qmode-knowledge",
      "mode-cardio",
      "mode-nervous",
      "mode-respiratory",
      "mode-digestive"
    );
  }
  var oExit = window.exitQuizMode;
  window.exitQuizMode = function () {
    var wasEx = isEx();
    cleanup();
    if (wasEx) window.QUIZ.system = "osos";
    return oExit ? oExit.apply(this, arguments) : undefined;
  };
  var oBack = window.goBackFromApp;
  window.goBackFromApp = function () {
    cleanup();
    return oBack ? oBack.apply(this, arguments) : undefined;
  };
  var oRestart = window.restartQuiz;
  window.restartQuiz = function () {
    if (isEx()) {
      cleanup();
      document.body.classList.add("mode-skeleton", "mode-quiz");
    }
    return oRestart ? oRestart.apply(this, arguments) : undefined;
  };
})();


(function () {
  var orig = window.pickQuizSystem;
  if (typeof orig !== "function") return;
  window.pickQuizSystem = function (sys) {
    var r = orig.apply(this, arguments);
    try {
      var vi = document.getElementById("quizModeVisualIcon");
      if (vi && window.BX_ICON) {
        vi.classList.remove("quiz-mode-icon-emoji");
        vi.classList.add("quiz-mode-icon-svg");
        vi.innerHTML = BX_ICON("eye");
      }
    } catch (e) {}
    return r;
  };
})();


(function reportProblem() {
  if (typeof I18N !== "undefined") {
    Object.assign(I18N.ro, {
      "footer.report": "Raportează o problemă",
      "report.title": "Raportează o problemă",
      "report.intro":
        "Ai găsit o eroare, o greșeală de conținut sau ai o sugestie? Spune-ne — ajunge direct la echipă.",
      "report.lbl.type": "Tip",
      "report.type.bug": "🐛 Eroare / bug",
      "report.type.content": "📚 Greșeală de conținut",
      "report.type.suggestion": "💡 Sugestie",
      "report.type.other": "❓ Altceva",
      "report.lbl.msg": "Descriere",
      "report.ph.msg": "Descrie pe scurt problema sau sugestia...",
      "report.lbl.email": "Email (opțional, ca să-ți putem răspunde)",
      "report.ph.email": "tu@email.com",
      "report.cancel": "Anulează",
      "report.send": "Trimite raportul",
      "report.sending": "Se trimite...",
      "report.ok": "Mulțumim! Raportul a fost trimis.",
      "report.err": "Nu s-a putut trimite. Încearcă din nou mai târziu.",
      "report.short": "Descrie problema (minim 5 caractere).",
      "report.mailto":
        "Ți-am deschis aplicația de email cu raportul completat — apasă <b>Trimite</b> acolo.<br><small style=\"color:var(--t3)\">Nu s-a deschis? Scrie-ne direct la <b>bionexusdevs@gmail.com</b></small>",
    });
    Object.assign(I18N.en, {
      "footer.report": "Report a problem",
      "report.title": "Report a problem",
      "report.intro":
        "Found a bug, a content mistake, or have a suggestion? Tell us — it goes straight to the team.",
      "report.lbl.type": "Type",
      "report.type.bug": "🐛 Error / bug",
      "report.type.content": "📚 Content mistake",
      "report.type.suggestion": "💡 Suggestion",
      "report.type.other": "❓ Something else",
      "report.lbl.msg": "Description",
      "report.ph.msg": "Briefly describe the problem or suggestion...",
      "report.lbl.email": "Email (optional, so we can reply)",
      "report.ph.email": "you@email.com",
      "report.cancel": "Cancel",
      "report.send": "Send report",
      "report.sending": "Sending...",
      "report.ok": "Thank you! Your report was sent.",
      "report.err": "Couldn't send. Please try again later.",
      "report.short": "Please describe the problem (min 5 characters).",
      "report.mailto":
        "Your email app just opened with the report filled in — hit <b>Send</b> there.<br><small style=\"color:var(--t3)\">Didn't open? Write to us directly at <b>bionexusdevs@gmail.com</b></small>",
    });
    if (typeof applyLanguage === "function") applyLanguage(CUR_LANG);
  }

  function L(key) {
    try {
      var d = I18N[CUR_LANG] || I18N.ro;
      return d[key] || I18N.ro[key] || key;
    } catch (e) {
      return key;
    }
  }
  window.openReport = function () {
    var m = document.getElementById("reportModal");
    if (!m) return;
    m.classList.add("active");
    document.body.style.overflow = "hidden";
    var st = document.getElementById("reportStatus");
    if (st) {
      st.textContent = "";
      st.className = "report-status";
    }
    setTimeout(function () {
      var t = document.getElementById("reportMsg");
      if (t) t.focus();
    }, 80);
  };
  window.closeReport = function () {
    var m = document.getElementById("reportModal");
    if (m) m.classList.remove("active");
    document.body.style.overflow = "";
  };
  window.submitReport = function () {
    var typeEl = document.getElementById("reportType");
    var msgEl = document.getElementById("reportMsg");
    var emailEl = document.getElementById("reportEmail");
    var hp = document.getElementById("reportHp");
    var status = document.getElementById("reportStatus");
    var btn = document.getElementById("reportSend");
    if (hp && hp.value) {
      window.closeReport();
      return;
    }
    var msg = (msgEl && msgEl.value || "").trim();
    if (msg.length < 5) {
      if (status) {
        status.textContent = L("report.short");
        status.className = "report-status err";
      }
      return;
    }

    var typeLabel = typeEl ? typeEl.options[typeEl.selectedIndex].text : "?";
    var contact = (emailEl && emailEl.value || "").trim() || "—";
    var subject = "BioNexus — raport: " + typeLabel;
    var body =
      "Tip: " + typeLabel + "\n" +
      "Descriere:\n" + msg + "\n\n" +
      "Email contact: " + contact + "\n" +
      "Pagina: " + location.href + "\n" +
      "Limba: " + (typeof CUR_LANG !== "undefined" ? CUR_LANG : "ro");
    var url =
      "mailto:bionexusdevs@gmail.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);
    function mailtoFallback() {
      try {
        window.location.href = url;
      } catch (e) {}
      if (status) {
        status.className = "report-status ok";
        status.innerHTML = L("report.mailto");
      }
    }

    var isWeb = location.protocol === "https:" || location.protocol === "http:";
    if (isWeb) {
      if (btn) {
        btn.disabled = true;
        btn.textContent = L("report.sending");
      }
      if (status) {
        status.className = "report-status";
        status.textContent = L("report.sending");
      }
      fetch("https://formsubmit.co/ajax/bionexusdevs@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: subject,
          Tip: typeLabel,
          Descriere: msg,
          "Email contact": contact,
          Pagina: location.href,
          Limba: typeof CUR_LANG !== "undefined" ? CUR_LANG : "ro",
          _template: "table",
        }),
      })
        .then(function (r) {
          return r.json();
        })
        .then(function () {
          if (status) {
            status.className = "report-status ok";
            status.textContent = L("report.ok");
          }
          if (msgEl) msgEl.value = "";
          setTimeout(window.closeReport, 1600);
        })
        .catch(function () {
          mailtoFallback();
        })
        .finally(function () {
          if (btn) {
            btn.disabled = false;
            btn.textContent = L("report.send");
          }
        });
      return;
    }
    mailtoFallback();
  };
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var m = document.getElementById("reportModal");
    if (m && m.classList.contains("active")) window.closeReport();
  });
})();


window.DUEL_BANKS = {"muscular":[{"text_ro":"Prin contracția unilaterală, sternocleidomastoidianul (m. sternocleidomastoideus) înclină capul de aceeași parte și rotește fața spre partea opusă.","text_en":"Through unilateral contraction, the sternocleidomastoid (m. sternocleidomastoideus) tilts the head to the same side and rotates the face to the opposite side.","correct":true,"explain_ro":"Corect. Contracția unilaterală a SCM produce flexie laterală ipsilaterală (înclinare de aceeași parte) și rotația feței contralateral; bilateral flectează gâtul/extinde capul.","explain_en":"Correct. Unilateral SCM contraction produces ipsilateral lateral flexion (tilt to the same side) and contralateral rotation of the face; bilaterally it flexes the neck/extends the head."},{"text_ro":"Maseterul (m. masseter) coboară mandibula, deschizând gura în timpul masticației.","text_en":"The masseter (m. masseter) depresses the mandible, opening the mouth during mastication.","correct":false,"explain_ro":"Fals. Maseterul RIDICĂ mandibula (închide gura) — este un mușchi masticator puternic. Coborârea mandibulei este realizată de mușchii suprahioidieni și pterigoidianul lateral.","explain_en":"False. The masseter ELEVATES the mandible (closes the mouth) — it is a powerful muscle of mastication. Depression of the mandible is performed by the suprahyoid muscles and the lateral pterygoid."},{"text_ro":"Bicepsul brahial (m. biceps brachii) realizează flexia cotului și supinația antebrațului, fiind inervat de nervul musculocutanat.","text_en":"The biceps brachii (m. biceps brachii) performs elbow flexion and forearm supination, and is innervated by the musculocutaneous nerve.","correct":true,"explain_ro":"Corect. Bicepsul brahial este flexor al cotului și cel mai puternic supinator al antebrațului; inervația provine din nervul musculocutanat (C5–C6).","explain_en":"Correct. The biceps brachii flexes the elbow and is the strongest supinator of the forearm; its innervation comes from the musculocutaneous nerve (C5–C6)."},{"text_ro":"Cvadricepsul femural (m. quadriceps femoris) este format din trei capete musculare.","text_en":"The quadriceps femoris (m. quadriceps femoris) is composed of three muscle heads.","correct":false,"explain_ro":"Fals. Cvadricepsul are PATRU capete: dreptul femural, vastul lateral, vastul medial și vastul intermediar. Toate se inseră pe rotulă prin tendonul cvadricipital și extind gamba.","explain_en":"False. The quadriceps has FOUR heads: rectus femoris, vastus lateralis, vastus medialis and vastus intermedius. All insert on the patella via the quadriceps tendon and extend the leg."},{"text_ro":"Gastrocnemianul (m. gastrocnemius), împreună cu solearul, formează tricepsul sural, realizează flexia plantară și este inervat de nervul tibial.","text_en":"The gastrocnemius (m. gastrocnemius), together with the soleus, forms the triceps surae, performs plantar flexion and is innervated by the tibial nerve.","correct":true,"explain_ro":"Corect. Gastrocnemianul + solearul = tricepsul sural, care se inseră pe calcaneu prin tendonul lui Ahile, produce flexia plantară și este inervat de nervul tibial (L4–S2).","explain_en":"Correct. Gastrocnemius + soleus = triceps surae, inserting on the calcaneus via the Achilles tendon, producing plantar flexion, innervated by the tibial nerve (L4–S2)."},{"text_ro":"Fesierul mare (m. gluteus maximus) este inervat de nervul fesier superior.","text_en":"The gluteus maximus (m. gluteus maximus) is innervated by the superior gluteal nerve.","correct":false,"explain_ro":"Fals. Fesierul mare este inervat de nervul fesier INFERIOR (L5–S2). Nervul fesier superior inervează fesierul mijlociu, fesierul mic și tensorul fasciei lata.","explain_en":"False. The gluteus maximus is innervated by the INFERIOR gluteal nerve (L5–S2). The superior gluteal nerve supplies the gluteus medius, gluteus minimus and tensor fasciae latae."},{"text_ro":"Croitorul (m. sartorius) își are originea pe spina iliacă antero-superioară (SIAS) și se inseră pe fața medială a tibiei (pes anserinus), fiind cel mai lung mușchi din corp.","text_en":"The sartorius (m. sartorius) originates on the anterior superior iliac spine (ASIS) and inserts on the medial surface of the tibia (pes anserinus), being the longest muscle in the body.","correct":true,"explain_ro":"Corect. Croitorul pornește de pe SIAS, traversează oblic coapsa și se inseră pe pes anserinus; flectează, abduce și rotește lateral coapsa, flectând și gamba. Este cel mai lung mușchi, inervat de nervul femural.","explain_en":"Correct. The sartorius runs from the ASIS obliquely across the thigh to the pes anserinus; it flexes, abducts and laterally rotates the thigh, and flexes the leg. It is the longest muscle, innervated by the femoral nerve."},{"text_ro":"Deltoidul (m. deltoideus) realizează abducția brațului și este inervat de nervul axilar.","text_en":"The deltoid (m. deltoideus) performs abduction of the arm and is innervated by the axillary nerve.","correct":true,"explain_ro":"Corect. Fasciculul mijlociu al deltoidului este principalul abductor al brațului (peste ~15°), iar inervația provine din nervul axilar (C5–C6).","explain_en":"Correct. The middle fibers of the deltoid are the main abductors of the arm (beyond ~15°), and its innervation comes from the axillary nerve (C5–C6)."},{"text_ro":"Mușchiul tibial anterior (m. tibialis anterior) realizează flexia plantară a piciorului.","text_en":"The tibialis anterior (m. tibialis anterior) performs plantar flexion of the foot.","correct":false,"explain_ro":"Fals. Tibialul anterior realizează flexia DORSALĂ (dorsiflexia) și inversia piciorului, fiind inervat de nervul peronier (fibular) profund. Flexia plantară este asigurată de tricepsul sural.","explain_en":"False. The tibialis anterior performs DORSIFLEXION and inversion of the foot, innervated by the deep fibular (peroneal) nerve. Plantar flexion is provided by the triceps surae."},{"text_ro":"Tricepsul brahial (m. triceps brachii) este inervat de nervul musculocutanat.","text_en":"The triceps brachii (m. triceps brachii) is innervated by the musculocutaneous nerve.","correct":false,"explain_ro":"Fals. Tricepsul brahial, extensorul cotului, este inervat de nervul RADIAL (C6–C8). Nervul musculocutanat inervează mușchii lojei anterioare a brațului (biceps, brahial, coracobrahial).","explain_en":"False. The triceps brachii, the extensor of the elbow, is innervated by the RADIAL nerve (C6–C8). The musculocutaneous nerve supplies the anterior arm compartment (biceps, brachialis, coracobrachialis)."}],"nervous":[{"text_ro":"Meningele care învelesc encefalul și măduva spinării sunt formate din trei foițe: dura mater, arahnoida (arachnoidea mater) și pia mater.","text_en":"The meninges covering the brain and spinal cord are made of three layers: the dura mater, the arachnoid (arachnoidea mater) and the pia mater.","correct":true,"explain_ro":"Corect. Cele trei meninge, dinspre exterior spre interior, sunt dura mater, arahnoida și pia mater.","explain_en":"Correct. The three meninges, from outer to inner, are the dura mater, the arachnoid and the pia mater."},{"text_ro":"Nervul trohlear (nervul cranian IV / nervus trochlearis) inervează mușchiul drept lateral al globului ocular.","text_en":"The trochlear nerve (cranial nerve IV / nervus trochlearis) innervates the lateral rectus muscle of the eyeball.","correct":false,"explain_ro":"Fals. Nervul trohlear (IV) inervează mușchiul oblic superior; mușchiul drept lateral este inervat de nervul abducens (VI).","explain_en":"False. The trochlear nerve (IV) innervates the superior oblique muscle; the lateral rectus is innervated by the abducens nerve (VI)."},{"text_ro":"Nervul vag (nervul cranian X / nervus vagus) asigură cea mai mare parte a inervației parasimpatice a organelor toracice și abdominale.","text_en":"The vagus nerve (cranial nerve X / nervus vagus) provides most of the parasympathetic innervation of the thoracic and abdominal organs.","correct":true,"explain_ro":"Corect. Nervul vag are cel mai extins teritoriu parasimpatic, inervând inima, plămânii și tubul digestiv până la unghiul splenic al colonului.","explain_en":"Correct. The vagus nerve has the widest parasympathetic distribution, supplying the heart, lungs and digestive tract up to the splenic flexure of the colon."},{"text_ro":"La adult, măduva spinării se termină prin conul medular (conus medullaris) la nivelul vertebrelor L3-L4.","text_en":"In the adult, the spinal cord ends as the conus medullaris at the level of the L3-L4 vertebrae.","correct":false,"explain_ro":"Fals. La adult conul medular se află de obicei la nivelul L1-L2; sub acest nivel se găsește coada de cal (cauda equina).","explain_en":"False. In the adult the conus medullaris usually lies at the L1-L2 level; below it lies the cauda equina."},{"text_ro":"În secțiune transversală, substanța cenușie (substantia grisea) a măduvei spinării are formă de fluture (literă H) și este dispusă central, înconjurată de substanța albă.","text_en":"In cross-section, the gray matter (substantia grisea) of the spinal cord has a butterfly (H) shape and lies centrally, surrounded by the white matter.","correct":true,"explain_ro":"Corect. În măduvă substanța cenușie este centrală (formă de H/fluture), iar substanța albă este periferică — invers față de encefal.","explain_en":"Correct. In the spinal cord the gray matter is central (H/butterfly shape) and the white matter is peripheral — the reverse of the brain."},{"text_ro":"Inervația senzitivă a feței este asigurată de nervul facial (nervul cranian VII / nervus facialis).","text_en":"The sensory innervation of the face is provided by the facial nerve (cranial nerve VII / nervus facialis).","correct":false,"explain_ro":"Fals. Sensibilitatea feței este asigurată de nervul trigemen (V / nervus trigeminus); nervul facial (VII) inervează motor mușchii mimicii.","explain_en":"False. Facial sensation is provided by the trigeminal nerve (V / nervus trigeminus); the facial nerve (VII) provides motor supply to the muscles of facial expression."},{"text_ro":"Cerebelul (cerebellum) participă la coordonarea mișcărilor, la menținerea echilibrului și la reglarea tonusului muscular.","text_en":"The cerebellum coordinates movements, maintains balance and regulates muscle tone.","correct":true,"explain_ro":"Corect. Cerebelul nu inițiază mișcarea, dar o coordonează și asigură echilibrul și tonusul muscular.","explain_en":"Correct. The cerebellum does not initiate movement but coordinates it and maintains balance and muscle tone."},{"text_ro":"Nervul frenic (nervus phrenicus), care inervează diafragma, ia naștere din plexul brahial (C5-C7).","text_en":"The phrenic nerve (nervus phrenicus), which innervates the diaphragm, arises from the brachial plexus (C5-C7).","correct":false,"explain_ro":"Fals. Nervul frenic provine din plexul cervical, în principal din rădăcinile C3-C5, nu din plexul brahial.","explain_en":"False. The phrenic nerve arises from the cervical plexus, mainly from roots C3-C5, not from the brachial plexus."},{"text_ro":"Bulbul rahidian (medulla oblongata) conține centri vitali care controlează ritmul cardiac și respirația.","text_en":"The medulla oblongata contains vital centers that control heart rate and respiration.","correct":true,"explain_ro":"Corect. Bulbul rahidian adăpostește centrii cardiovascular și respirator, motiv pentru care leziunile sale sunt frecvent fatale.","explain_en":"Correct. The medulla oblongata houses the cardiovascular and respiratory centers, which is why lesions here are often fatal."},{"text_ro":"Lichidul cefalorahidian (LCR) circulă în spațiul subdural, între dura mater și arahnoidă.","text_en":"The cerebrospinal fluid (CSF) circulates in the subdural space, between the dura mater and the arachnoid.","correct":false,"explain_ro":"Fals. LCR circulă în spațiul subarahnoidian, între arahnoidă și pia mater; spațiul subdural este doar un spațiu virtual.","explain_en":"False. CSF circulates in the subarachnoid space, between the arachnoid and the pia mater; the subdural space is only a potential space."}],"cardio":[{"text_ro":"Venele pulmonare (venae pulmonales) aduc sânge oxigenat în atriul stâng.","text_en":"The pulmonary veins (venae pulmonales) bring oxygenated blood into the left atrium.","correct":true,"explain_ro":"Cele patru vene pulmonare sunt singurele vene din corp care transportă sânge oxigenat; ele se varsă în atriul stâng, încheind circulația mică.","explain_en":"The four pulmonary veins are the only veins carrying oxygenated blood; they drain into the left atrium, completing the pulmonary circulation."},{"text_ro":"Aorta pornește din ventriculul drept, prin valva aortică.","text_en":"The aorta arises from the right ventricle, through the aortic valve.","correct":false,"explain_ro":"Fals: aorta pornește din ventriculul STÂNG. Din ventriculul drept pornește trunchiul pulmonar. Camera este inversată.","explain_en":"False: the aorta arises from the LEFT ventricle. The pulmonary trunk is the vessel leaving the right ventricle. The chamber is swapped."},{"text_ro":"Valva tricuspidă (valva atrioventricularis dextra) are trei cuspide și se află între atriul drept și ventriculul drept.","text_en":"The tricuspid valve (valva atrioventricularis dextra) has three cusps and lies between the right atrium and the right ventricle.","correct":true,"explain_ro":"Corect: valva atrioventriculară dreaptă are trei foițe și controlează trecerea sângelui din atriul drept în ventriculul drept.","explain_en":"Correct: the right atrioventricular valve has three leaflets and controls blood flow from the right atrium into the right ventricle."},{"text_ro":"Circulația mică (pulmonară) începe în ventriculul stâng.","text_en":"The pulmonary (lesser) circulation begins in the left ventricle.","correct":false,"explain_ro":"Fals: circulația mică începe în ventriculul DREPT (prin trunchiul pulmonar). Ventriculul stâng inițiază circulația mare (sistemică).","explain_en":"False: the pulmonary circulation begins in the RIGHT ventricle (via the pulmonary trunk). The left ventricle starts the systemic (greater) circulation."},{"text_ro":"Vena cavă superioară și vena cavă inferioară se varsă în atriul drept.","text_en":"The superior vena cava and inferior vena cava drain into the right atrium.","correct":true,"explain_ro":"Corect: ambele vene cave aduc sângele venos (dezoxigenat) al corpului în atriul drept, unde începe traseul spre circulația mică.","explain_en":"Correct: both venae cavae return the body's venous (deoxygenated) blood to the right atrium, the entry point toward the pulmonary circulation."},{"text_ro":"Trunchiul pulmonar (truncus pulmonalis) transportă sânge oxigenat de la inimă spre plămâni.","text_en":"The pulmonary trunk (truncus pulmonalis) carries oxygenated blood from the heart to the lungs.","correct":false,"explain_ro":"Fals: trunchiul pulmonar transportă sânge NEoxigenat (venos) din ventriculul drept spre plămâni, unde se oxigenează. Funcția e inversată.","explain_en":"False: the pulmonary trunk carries DEoxygenated (venous) blood from the right ventricle to the lungs for oxygenation. The function is reversed."},{"text_ro":"Valva mitrală (bicuspidă) se află între atriul stâng și ventriculul stâng.","text_en":"The mitral (bicuspid) valve lies between the left atrium and the left ventricle.","correct":true,"explain_ro":"Corect: valva mitrală, cu două cuspide, controlează fluxul din atriul stâng în ventriculul stâng și previne refluxul în timpul sistolei.","explain_en":"Correct: the mitral valve, with two cusps, controls flow from the left atrium into the left ventricle and prevents backflow during systole."},{"text_ro":"Artera subclaviculară dreaptă pornește direct din arcul aortic.","text_en":"The right subclavian artery arises directly from the aortic arch.","correct":false,"explain_ro":"Fals: artera subclaviculară dreaptă provine din trunchiul brahiocefalic, nu direct din arcul aortic. Doar subclaviculara STÂNGĂ pornește direct din arc.","explain_en":"False: the right subclavian artery arises from the brachiocephalic trunk, not directly from the aortic arch. Only the LEFT subclavian branches directly off the arch."},{"text_ro":"Sângele din ventriculul stâng este pompat în circulația mare (sistemică) prin aortă.","text_en":"Blood from the left ventricle is pumped into the systemic (greater) circulation through the aorta.","correct":true,"explain_ro":"Corect: ventriculul stâng ejectează sânge oxigenat în aortă, care îl distribuie întregului corp prin circulația mare.","explain_en":"Correct: the left ventricle ejects oxygenated blood into the aorta, which distributes it to the whole body via the systemic circulation."},{"text_ro":"Valvele semilunare (aortică și pulmonară) previn refluxul sângelui înapoi în atrii în timpul diastolei.","text_en":"The semilunar valves (aortic and pulmonary) prevent backflow of blood into the atria during diastole.","correct":false,"explain_ro":"Fals: valvele semilunare previn refluxul din aortă/trunchi pulmonar înapoi în VENTRICULI. Refluxul în atrii este împiedicat de valvele atrioventriculare (mitrală/tricuspidă).","explain_en":"False: the semilunar valves prevent backflow from the aorta/pulmonary trunk into the VENTRICLES. Backflow into the atria is prevented by the atrioventricular valves (mitral/tricuspid)."}],"respiratory":[{"text_ro":"Plămânul drept (pulmo dexter) are 3 lobi (superior, mijlociu, inferior), iar plămânul stâng (pulmo sinister) are 2 lobi (superior și inferior).","text_en":"The right lung (pulmo dexter) has 3 lobes (superior, middle, inferior), while the left lung (pulmo sinister) has 2 lobes (superior and inferior).","correct":true,"explain_ro":"Corect. Plămânul drept are 3 lobi separați de scizura oblică și cea orizontală; plămânul stâng are doar 2 lobi (scizura oblică), locul lobului mijlociu fiind ocupat de incizura cardiacă și lingula.","explain_en":"Correct. The right lung has 3 lobes separated by the oblique and horizontal fissures; the left lung has only 2 lobes (oblique fissure), with the cardiac notch and lingula occupying the space of the missing middle lobe."},{"text_ro":"Epiglota (epiglottis) este formată din cartilaj hialin, la fel ca majoritatea cartilajelor laringelui.","text_en":"The epiglottis (epiglottis) is made of hyaline cartilage, like most of the laryngeal cartilages.","correct":false,"explain_ro":"Fals. Epiglota este alcătuită din cartilaj elastic, nu hialin. Cartilajele tiroid, cricoid și cea mai mare parte a aritenoidelor sunt hialine, dar epiglota (și apexul aritenoidelor, corniculatele, cuneiformele) sunt cartilaj elastic, ceea ce îi conferă flexibilitatea de a acoperi glota la deglutiție.","explain_en":"False. The epiglottis is made of elastic cartilage, not hyaline. The thyroid, cricoid and most of the arytenoid cartilages are hyaline, but the epiglottis (plus the arytenoid apices, corniculate and cuneiform cartilages) are elastic cartilage, giving it the flexibility to cover the glottis during swallowing."},{"text_ro":"Nervul frenic (nervus phrenicus), care asigură inervația motorie a diafragmului, ia naștere din segmentele medulare C6-C8.","text_en":"The phrenic nerve (nervus phrenicus), which provides the motor innervation of the diaphragm, arises from spinal segments C6-C8.","correct":false,"explain_ro":"Fals. Nervul frenic provine din segmentele C3-C5 (\"C3, 4, 5 keep the diaphragm alive\"), predominant din C4. C6-C8 contribuie la plexul brahial, nu la nervul frenic.","explain_en":"False. The phrenic nerve arises from segments C3-C5 (\"C3, 4, 5 keep the diaphragm alive\"), mainly C4. C6-C8 contribute to the brachial plexus, not the phrenic nerve."},{"text_ro":"Bronhia principală dreaptă (bronchus principalis dexter) este mai scurtă, mai largă și mai verticală decât bronhia principală stângă.","text_en":"The right main bronchus (bronchus principalis dexter) is shorter, wider and more vertical than the left main bronchus.","correct":true,"explain_ro":"Corect. Datorită acestui traiect mai vertical, mai larg și mai scurt, corpii străini aspirați ajung mai frecvent în bronhia principală dreaptă. Bronhia stângă este mai lungă și mai orizontală, fiind împinsă de arcul aortic și inimă.","explain_en":"Correct. Because of this more vertical, wider and shorter course, aspirated foreign bodies more often lodge in the right main bronchus. The left bronchus is longer and more horizontal, being displaced by the aortic arch and heart."},{"text_ro":"Pleura viscerală (pleura visceralis) este bogat inervată senzitiv somatic și este foarte sensibilă la durere.","text_en":"The visceral pleura (pleura visceralis) is richly supplied with somatic sensory fibers and is very sensitive to pain.","correct":false,"explain_ro":"Fals. Pleura viscerală primește doar inervație autonomă (vegetativă) și este insensibilă la durere. Pleura parietală, în schimb, este inervată somatic (nervii intercostali și nervul frenic) și este foarte sensibilă la durere - de aceea durerea pleuritică provine din afectarea pleurei parietale.","explain_en":"False. The visceral pleura receives only autonomic innervation and is insensitive to pain. The parietal pleura, by contrast, has somatic innervation (intercostal nerves and phrenic nerve) and is very pain-sensitive - which is why pleuritic pain arises from irritation of the parietal pleura."},{"text_ro":"Traheea (trachea) este menținută deschisă de inele cartilaginoase incomplete, în formă de \"C\", deschise posterior spre esofag, unde peretele este completat de mușchiul traheal.","text_en":"The trachea (trachea) is kept open by incomplete, C-shaped cartilage rings, open posteriorly toward the esophagus, where the wall is completed by the trachealis muscle.","correct":true,"explain_ro":"Corect. Cele 16-20 de inele cartilaginoase hialine în formă de \"C\" au deschiderea posterioară închisă de mușchiul traheal (musculus trachealis) și țesut fibroelastic (paries membranaceus), ceea ce permite dilatarea esofagului la deglutiție.","explain_en":"Correct. The 16-20 C-shaped hyaline cartilage rings have their posterior opening closed by the trachealis muscle (musculus trachealis) and fibroelastic tissue (paries membranaceus), which allows the esophagus to expand during swallowing."},{"text_ro":"Surfactantul pulmonar, care scade tensiunea superficială din alveole și previne colabarea lor, este secretat de pneumocitele de tip I.","text_en":"Pulmonary surfactant, which lowers alveolar surface tension and prevents alveolar collapse, is secreted by type I pneumocytes.","correct":false,"explain_ro":"Fals. Surfactantul este secretat de pneumocitele de tip II (celule cuboidale, granulare, cu corpi lamelari). Pneumocitele de tip I sunt celule scuamoase subțiri care acoperă aproximativ 95% din suprafața alveolară și asigură schimbul gazos, dar nu produc surfactant.","explain_en":"False. Surfactant is secreted by type II pneumocytes (cuboidal, granular cells containing lamellar bodies). Type I pneumocytes are thin squamous cells covering roughly 95% of the alveolar surface and mediate gas exchange, but they do not produce surfactant."},{"text_ro":"Plămânul stâng (pulmo sinister) prezintă pe marginea sa anterioară o incizură cardiacă (incisura cardiaca), sub care se află lingula (lingula pulmonis sinistri).","text_en":"The left lung (pulmo sinister) shows on its anterior border a cardiac notch (incisura cardiaca), below which lies the lingula (lingula pulmonis sinistri).","correct":true,"explain_ro":"Corect. Incizura cardiacă face loc inimii, iar lingula este o prelungire în formă de limbă a lobului superior stâng, considerată omoloagă lobului mijlociu al plămânului drept.","explain_en":"Correct. The cardiac notch accommodates the heart, and the lingula is a tongue-shaped projection of the left superior lobe, considered the counterpart of the right lung's middle lobe."},{"text_ro":"Cartilajul cricoid (cartilago cricoidea) este singurul cartilaj incomplet al laringelui, având forma unui inel deschis posterior.","text_en":"The cricoid cartilage (cartilago cricoidea) is the only incomplete cartilage of the larynx, shaped like a ring open posteriorly.","correct":false,"explain_ro":"Fals. Este invers: cartilajul cricoid este singurul cartilaj complet (inel închis pe toată circumferința), în formă de inel cu pecete, cu lama mai înaltă posterior. Cartilajul tiroid este cel incomplet posterior (are formă de scut deschis în spate).","explain_en":"False. It is the reverse: the cricoid cartilage is the only complete cartilage (a ring closed around its entire circumference), signet-ring shaped with a taller posterior lamina. The thyroid cartilage is the one incomplete posteriorly (shield-shaped, open at the back)."},{"text_ro":"Traheea se bifurcă la nivelul carinei (carina tracheae) în cele două bronhii principale, aproximativ în dreptul vertebrelor T4-T5.","text_en":"The trachea bifurcates at the carina (carina tracheae) into the two main bronchi, roughly at the level of vertebrae T4-T5.","correct":true,"explain_ro":"Corect. Traheea începe la nivelul C6 (sub cartilajul cricoid) și se bifurcă la nivelul unghiului sternal (Louis), aproximativ T4-T5, unde carina reprezintă pintenul cartilaginos dintre cele două bronhii principale.","explain_en":"Correct. The trachea begins at C6 (below the cricoid cartilage) and bifurcates at the level of the sternal angle (of Louis), roughly T4-T5, where the carina is the cartilaginous ridge between the two main bronchi."}],"digestive":[{"text_ro":"Ficatul produce bila, care este apoi stocată și concentrată în vezica biliară (vesica biliaris).","text_en":"The liver produces bile, which is then stored and concentrated in the gallbladder (vesica biliaris).","correct":true,"explain_ro":"Hepatocitele secretă continuu bila; între mese aceasta este deviată prin ductul cistic în vezica biliară, unde apa este reabsorbită, concentrând bila de 5-10 ori.","explain_en":"Hepatocytes secrete bile continuously; between meals it is diverted through the cystic duct into the gallbladder, where water is reabsorbed, concentrating the bile 5-10 fold."},{"text_ro":"Amilaza salivară (ptialina) inițiază digestia proteinelor în cavitatea bucală.","text_en":"Salivary amylase (ptyalin) initiates protein digestion in the oral cavity.","correct":false,"explain_ro":"Fals: amilaza salivară descompune glucidele (amidonul) în maltoză, nu proteinele. Digestia proteinelor începe în stomac prin pepsină.","explain_en":"False: salivary amylase breaks down carbohydrates (starch) into maltose, not proteins. Protein digestion begins in the stomach via pepsin."},{"text_ro":"Esofagul traversează diafragma prin hiatul esofagian, situat la nivelul vertebrei T10.","text_en":"The esophagus passes through the diaphragm via the esophageal hiatus, located at the level of vertebra T10.","correct":true,"explain_ro":"Adevărat: hiatul esofagian se află la nivelul T10 (spre deosebire de hiatul aortic la T12 și orificiul venei cave la T8).","explain_en":"True: the esophageal hiatus is at the T10 level (as opposed to the aortic hiatus at T12 and the caval opening at T8)."},{"text_ro":"Celulele parietale (oxintice) ale mucoasei gastrice secretă pepsinogen.","text_en":"The parietal (oxyntic) cells of the gastric mucosa secrete pepsinogen.","correct":false,"explain_ro":"Fals: pepsinogenul este secretat de celulele principale (zimogene). Celulele parietale secretă acid clorhidric (HCl) și factor intrinsec.","explain_en":"False: pepsinogen is secreted by the chief (zymogenic) cells. Parietal cells secrete hydrochloric acid (HCl) and intrinsic factor."},{"text_ro":"Pancreasul are atât funcție exocrină (enzime digestive), cât și endocrină (insulină și glucagon din insulele Langerhans).","text_en":"The pancreas has both an exocrine function (digestive enzymes) and an endocrine function (insulin and glucagon from the islets of Langerhans).","correct":true,"explain_ro":"Adevărat: acinii pancreatici secretă enzime (amilază, lipază, tripsinogen) în duoden, iar insulele Langerhans secretă insulină (celule beta) și glucagon (celule alfa) în sânge.","explain_en":"True: pancreatic acini secrete enzymes (amylase, lipase, trypsinogen) into the duodenum, while the islets of Langerhans secrete insulin (beta cells) and glucagon (alpha cells) into the blood."},{"text_ro":"Duodenul este cea mai lungă porțiune a intestinului subțire.","text_en":"The duodenum is the longest portion of the small intestine.","correct":false,"explain_ro":"Fals: duodenul este cel mai scurt segment (~25 cm). Cele mai lungi porțiuni sunt jejunul și mai ales ileonul.","explain_en":"False: the duodenum is the shortest segment (~25 cm). The longest portions are the jejunum and especially the ileum."},{"text_ro":"Stomacul secretă factor intrinsec, necesar pentru absorbția vitaminei B12 la nivelul ileonului.","text_en":"The stomach secretes intrinsic factor, which is required for the absorption of vitamin B12 in the ileum.","correct":true,"explain_ro":"Adevărat: factorul intrinsec, produs de celulele parietale, se leagă de vitamina B12 și permite absorbția acesteia în ileonul terminal.","explain_en":"True: intrinsic factor, produced by parietal cells, binds vitamin B12 and enables its absorption in the terminal ileum."},{"text_ro":"Vena portă hepatică (vena portae) transportă spre ficat sânge bogat în oxigen, provenit de la intestin și splină.","text_en":"The hepatic portal vein (vena portae) carries oxygen-rich blood from the intestine and spleen to the liver.","correct":false,"explain_ro":"Fals: vena portă aduce sânge venos, sărac în oxigen, dar bogat în nutrienți, de la tubul digestiv și splină. Sângele oxigenat ajunge la ficat prin artera hepatică.","explain_en":"False: the portal vein brings venous, oxygen-poor but nutrient-rich blood from the digestive tract and spleen. Oxygenated blood reaches the liver via the hepatic artery."},{"text_ro":"Intestinul gros absoarbe apă și electroliți și găzduiește flora bacteriană care sintetizează vitamina K.","text_en":"The large intestine absorbs water and electrolytes and hosts the bacterial flora that synthesizes vitamin K.","correct":true,"explain_ro":"Adevărat: colonul reabsoarbe apa și electroliții din chim, iar microbiota intestinală produce vitamina K și unele vitamine din grupul B.","explain_en":"True: the colon reabsorbs water and electrolytes from the chyme, and the gut microbiota produces vitamin K and some B-group vitamins."},{"text_ro":"Ductul biliar comun (ductus choledochus) și ductul pancreatic principal se deschid în duoden la nivelul papilei duodenale mici (minore).","text_en":"The common bile duct (ductus choledochus) and the main pancreatic duct open into the duodenum at the minor duodenal papilla.","correct":false,"explain_ro":"Fals: ele se unesc în ampula hepatopancreatică (Vater) și se deschid la papila duodenală mare. Papila mică primește ductul pancreatic accesor (Santorini).","explain_en":"False: they join at the hepatopancreatic ampulla (of Vater) and open at the major duodenal papilla. The minor papilla receives the accessory pancreatic duct (of Santorini)."}]};


(function onlineDuel() {
  if (typeof I18N !== "undefined") {
    Object.assign(I18N.ro, {
      "online.entry": "Joacă online cu un prieten",
      "online.title": "Duel Online 1v1",
      "online.intro":
        "Provoacă un prieten la un duel de cunoștințe în timp real. Aceleași întrebări, scor live — câștigă cine are mai multe corecte.",
      "online.system": "Sistem",
      "online.sys.all": "🎯 Toate sistemele",
      "online.sys.osos": "🦴 Osos",
      "online.sys.muscular": "💪 Muscular",
      "online.sys.nervous": "🧠 Nervos",
      "online.sys.cardio": "❤️ Cardiovascular",
      "online.sys.respiratory": "💨 Respirator",
      "online.sys.digestive": "🍽️ Digestiv",
      "online.create": "Creează o cameră",
      "online.or": "sau",
      "online.codePh": "COD",
      "online.join": "Intră",
      "online.codeLabel": "Codul camerei",
      "online.share": "Trimite-i codul unui prieten. Jocul începe automat când intră.",
      "online.waiting": "Aștept adversarul...",
      "online.cancel": "Anulează",
      "online.q": "Întrebarea",
      "online.aiSays": "Afirmație",
      "online.true": "ADEVĂRAT",
      "online.false": "FALS",
      "online.waitOpp": "Ai terminat! Aștepți adversarul să termine...",
      "online.rematch": "Revanșă",
      "online.exit": "Ieși",
      "online.win": "Ai câștigat! 🎉",
      "online.lose": "Ai pierdut",
      "online.tie": "Egalitate!",
      "online.noRealtime": "Jocul online nu e disponibil momentan (conexiune lipsă).",
      "online.connErr": "Eroare de conexiune. Încearcă din nou.",
      "online.badCode": "Introdu codul de 4 caractere.",
      "online.joining": "Se conectează la cameră...",
      "online.noRoom": "Camera nu există sau adversarul a plecat.",
      "online.rematchWait": "Aștepți gazda să înceapă revanșa...",
    });
    Object.assign(I18N.en, {
      "online.entry": "Play online with a friend",
      "online.title": "Online 1v1 Duel",
      "online.intro":
        "Challenge a friend to a real-time knowledge duel. Same questions, live score — most correct wins.",
      "online.system": "System",
      "online.sys.all": "🎯 All systems",
      "online.sys.osos": "🦴 Skeletal",
      "online.sys.muscular": "💪 Muscular",
      "online.sys.nervous": "🧠 Nervous",
      "online.sys.cardio": "❤️ Cardiovascular",
      "online.sys.respiratory": "💨 Respiratory",
      "online.sys.digestive": "🍽️ Digestive",
      "online.create": "Create a room",
      "online.or": "or",
      "online.codePh": "CODE",
      "online.join": "Join",
      "online.codeLabel": "Room code",
      "online.share": "Send the code to a friend. The game starts automatically when they join.",
      "online.waiting": "Waiting for opponent...",
      "online.cancel": "Cancel",
      "online.q": "Question",
      "online.aiSays": "Statement",
      "online.true": "TRUE",
      "online.false": "FALSE",
      "online.waitOpp": "You're done! Waiting for your opponent to finish...",
      "online.rematch": "Rematch",
      "online.exit": "Exit",
      "online.win": "You won! 🎉",
      "online.lose": "You lost",
      "online.tie": "It's a tie!",
      "online.noRealtime": "Online play is unavailable right now (no connection).",
      "online.connErr": "Connection error. Try again.",
      "online.badCode": "Enter the 4-character code.",
      "online.joining": "Connecting to the room...",
      "online.noRoom": "Room not found or the opponent left.",
      "online.rematchWait": "Waiting for the host to start the rematch...",
    });
    if (typeof applyLanguage === "function") applyLanguage(CUR_LANG);
  }

  function L(k) {
    try {
      var d = I18N[CUR_LANG] || I18N.ro;
      return d[k] || I18N.ro[k] || k;
    } catch (e) {
      return k;
    }
  }
  function EN() {
    return typeof CUR_LANG !== "undefined" && CUR_LANG === "en";
  }
  function esc(s) {
    return String(s || "").replace(/[&<>]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c];
    });
  }

  function normOpp(n) {
    if (!n || n === "Tu" || n === "You") return EN() ? "Opponent" : "Adversar";
    return n;
  }

  var OD;
  function reset() {
    OD = { channel: null, code: null, isHost: false, system: "all", questions: [], cur: 0, score: 0, oppScore: 0, oppDone: false, done: false, started: false, myName: "", oppName: "", answered: false, joinTimer: null, myReady: false, oppReady: false, _loaderTimer: null };
  }
  reset();


  function showLoaderDelayed(msg) {
    if (OD._loaderTimer) clearTimeout(OD._loaderTimer);
    OD._loaderTimer = setTimeout(function () {
      var l = document.getElementById("onlineLoader");
      var t = document.getElementById("onlineLoaderText");
      if (t && msg) t.textContent = msg;
      if (l) l.style.display = "flex";
    }, 250);
  }
  function clearLoader() {
    if (OD && OD._loaderTimer) { clearTimeout(OD._loaderTimer); OD._loaderTimer = null; }
    var l = document.getElementById("onlineLoader");
    if (l) l.style.display = "none";
  }
  function avatarOf(name) {
    var n = (name || "").trim();
    return n ? n.charAt(0).toUpperCase() : "?";
  }

  function myName() {
    try {
      var u = typeof getCurrentUser === "function" ? getCurrentUser() : null;
      if (u && u.user) return u.user;
    } catch (e) {}
    return EN() ? "You" : "Tu";
  }
  function genCode() {
    var A = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789", s = "";
    for (var i = 0; i < 4; i++) s += A[Math.floor(Math.random() * A.length)];
    return s;
  }
  function bankFor(sys) {
    var out = [], B = window.DUEL_BANKS || {};
    function add(arr) {
      (arr || []).forEach(function (q) {
        out.push({ r: q.text_ro, e: q.text_en, c: !!q.correct, er: q.explain_ro, ee: q.explain_en });
      });
    }
    function addOsos() {
      (window.DUEL_BANK || []).forEach(function (q) {
        out.push({ r: q.text, e: q.text, c: !!q.correct, er: q.explain, ee: q.explain });
      });
    }
    if (sys === "all") {
      Object.keys(B).forEach(function (k) { add(B[k]); });
      addOsos();
    } else if (sys === "osos") {
      addOsos();
    } else {
      add(B[sys]);
    }
    return out;
  }
  function buildQuestions(sys) {
    var pool = bankFor(sys);
    for (var i = pool.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = pool[i];
      pool[i] = pool[j];
      pool[j] = t;
    }
    return pool.slice(0, Math.min(10, pool.length));
  }
  function setView(id) {
    clearLoader();
    ["onlineLobby", "onlineWaiting", "onlineReady", "onlineGame", "onlineResults"].forEach(function (v) {
      var el = document.getElementById(v);
      if (el) el.style.display = v === id ? "block" : "none";
    });
  }
  function status(msg, cls) {
    var s = document.getElementById("onlineStatus");
    if (s) {
      s.textContent = msg || "";
      s.className = "online-status" + (cls ? " " + cls : "");
    }
  }
  function bcast(ev, payload) {
    try {
      if (OD.channel) OD.channel.send({ type: "broadcast", event: ev, payload: payload });
    } catch (e) {}
  }
  function makeChannel(code) {
    var ch = window.sb.channel("bx_duel_" + code, { config: { broadcast: { self: false } } });
    ch.on("broadcast", { event: "join" }, function (m) { onJoin(m.payload); });
    ch.on("broadcast", { event: "lobby" }, function (m) { onLobby(m.payload); });
    ch.on("broadcast", { event: "ready" }, function (m) { onReady(m.payload); });
    ch.on("broadcast", { event: "start" }, function (m) { onStart(m.payload); });
    ch.on("broadcast", { event: "progress" }, function (m) { onProgress(m.payload); });
    ch.on("broadcast", { event: "finish" }, function (m) { onFinish(m.payload); });
    ch.on("broadcast", { event: "rematch" }, function (m) { onRematch(m && m.payload); });
    return ch;
  }
  function dropChannel() {
    try {
      if (OD.channel) {
        OD.channel.unsubscribe();
        if (window.sb && window.sb.removeChannel) window.sb.removeChannel(OD.channel);
      }
    } catch (e) {}
    OD.channel = null;
  }

  window.openOnlineDuel = function () {
    var m = document.getElementById("onlineModal");
    if (!m) return;
    reset();
    m.style.display = "flex";
    setView("onlineLobby");
    status("");
    var jc = document.getElementById("onlineJoinCode");
    if (jc) jc.value = "";
    var cb = document.getElementById("onlineCreateBtn");
    if (cb) cb.disabled = false;
    if (!window.sb || !window.sb.channel) status(L("online.noRealtime"), "err");
  };
  window.closeOnlineDuel = function () {
    if (OD.joinTimer) clearTimeout(OD.joinTimer);
    dropChannel();
    reset();
    var m = document.getElementById("onlineModal");
    if (m) m.style.display = "none";
  };

  window.onlineCreateRoom = function () {
    if (!window.sb || !window.sb.channel) { status(L("online.noRealtime"), "err"); return; }
    OD.isHost = true;
    OD.myName = myName();
    var sysEl = document.getElementById("onlineSystem");
    OD.system = sysEl ? sysEl.value : "all";
    OD.code = genCode();
    OD.channel = makeChannel(OD.code);
    var btn = document.getElementById("onlineCreateBtn");
    if (btn) btn.disabled = true;
    showLoaderDelayed(L("online.connecting"));
    OD.channel.subscribe(function (st) {
      if (st === "SUBSCRIBED") {
        var cE = document.getElementById("onlineRoomCode");
        if (cE) cE.textContent = OD.code;
        setView("onlineWaiting");
      } else if (st === "CHANNEL_ERROR" || st === "TIMED_OUT") {
        clearLoader();
        status(L("online.connErr"), "err");
        if (btn) btn.disabled = false;
      }
    });
  };

  window.onlineJoinRoom = function () {
    if (!window.sb || !window.sb.channel) { status(L("online.noRealtime"), "err"); return; }
    var jc = document.getElementById("onlineJoinCode");
    var code = jc ? (jc.value || "").trim().toUpperCase() : "";
    if (code.length !== 4) { status(L("online.badCode"), "err"); return; }
    OD.isHost = false;
    OD.myName = myName();
    OD.code = code;
    OD.channel = makeChannel(code);
    status("");
    showLoaderDelayed(L("online.joining"));
    OD.channel.subscribe(function (st) {
      if (st === "SUBSCRIBED") {
        bcast("join", { name: OD.myName });
        OD.joinTimer = setTimeout(function () {
          if (!OD.started && !OD.oppName) { clearLoader(); status(L("online.noRoom"), "err"); dropChannel(); }
        }, 6000);
      } else if (st === "CHANNEL_ERROR" || st === "TIMED_OUT") {
        clearLoader();
        status(L("online.connErr"), "err");
      }
    });
  };

  function doHostStart() {
    OD.questions = buildQuestions(OD.system);
    bcast("start", { questions: OD.questions, hostName: OD.myName, system: OD.system });
    beginGame();
  }

  function onJoin(payload) {
    if (!OD.isHost) return;
    OD.oppName = normOpp(payload && payload.name);
    bcast("lobby", { hostName: OD.myName, system: OD.system });
    goToReady();
  }

  function onLobby(payload) {
    if (OD.isHost || !payload) return;
    if (OD.joinTimer) { clearTimeout(OD.joinTimer); OD.joinTimer = null; }
    OD.oppName = normOpp(payload.hostName);
    goToReady();
  }
  function goToReady() {
    OD.myReady = false;
    OD.oppReady = false;
    setView("onlineReady");
    renderReady();
  }
  function renderReady() {
    var set = function (id, v) { var e = document.getElementById(id); if (e) e.textContent = v; };
    set("onlineReadyCode", OD.code || "----");
    set("onlineReadyYouName", OD.myName || myName());
    set("onlineReadyYouAv", avatarOf(OD.myName || myName()));
    set("onlineReadyOppName", OD.oppName || (EN() ? "Opponent" : "Adversar"));
    set("onlineReadyOppAv", avatarOf(OD.oppName));
    updateReadyBadges();
    var btn = document.getElementById("onlineReadyBtn");
    if (btn) { btn.disabled = false; btn.textContent = L("online.readyUp"); }
    var rs = document.getElementById("onlineReadyStatus");
    if (rs) rs.textContent = "";
  }
  function updateReadyBadges() {
    var badge = function (id, ready) {
      var e = document.getElementById(id);
      if (!e) return;
      e.textContent = ready ? L("online.ready") : L("online.notReady");
      e.classList.toggle("is-ready", !!ready);
    };
    badge("onlineReadyYouStatus", OD.myReady);
    badge("onlineReadyOppStatus", OD.oppReady);
    var yc = document.getElementById("onlineReadyYouCard"); if (yc) yc.classList.toggle("ready", OD.myReady);
    var oc = document.getElementById("onlineReadyOppCard"); if (oc) oc.classList.toggle("ready", OD.oppReady);
  }
  window.onlineSetReady = function () {
    if (OD.myReady) return;
    OD.myReady = true;
    updateReadyBadges();
    var btn = document.getElementById("onlineReadyBtn");
    if (btn) { btn.disabled = true; btn.textContent = L("online.ready"); }
    bcast("ready", { name: OD.myName });
    checkBothReady();
  };
  function onReady(payload) {
    OD.oppReady = true;
    if (payload && payload.name) {
      OD.oppName = normOpp(payload.name);
      var e = document.getElementById("onlineReadyOppName"); if (e) e.textContent = OD.oppName;
      var a = document.getElementById("onlineReadyOppAv"); if (a) a.textContent = avatarOf(OD.oppName);
    }
    updateReadyBadges();
    checkBothReady();
  }
  function checkBothReady() {
    var rs = document.getElementById("onlineReadyStatus");
    if (OD.myReady && OD.oppReady) {
      if (rs) rs.textContent = L("online.starting");

      if (OD.isHost) setTimeout(function () { if (OD.myReady && OD.oppReady) doHostStart(); }, 450);
    } else if (OD.myReady && !OD.oppReady) {
      if (rs) rs.textContent = L("online.waitReady");
    }
  }
  function onStart(payload) {
    if (OD.isHost || !payload) return;
    if (OD.joinTimer) { clearTimeout(OD.joinTimer); OD.joinTimer = null; }
    OD.questions = payload.questions || [];
    OD.oppName = normOpp(payload.hostName);
    beginGame();
  }

  function beginGame() {
    OD.started = true; OD.cur = 0; OD.score = 0; OD.oppScore = 0; OD.oppDone = false; OD.done = false;
    document.getElementById("onlineYouName").textContent = OD.myName;
    document.getElementById("onlineOppName").textContent = OD.oppName;
    document.getElementById("onlineYouScore").textContent = "0";
    document.getElementById("onlineOppScore").textContent = "0";
    document.getElementById("onlineQTotal").textContent = OD.questions.length;
    setView("onlineGame");
    renderQ();
  }
  function renderQ() {
    OD.answered = false;
    var q = OD.questions[OD.cur];
    if (!q) { finish(); return; }
    document.getElementById("onlineQNum").textContent = OD.cur + 1;
    var stt = document.getElementById("onlineStatement");
    if (stt) stt.textContent = '"' + (EN() ? q.e : q.r) + '"';
    var fb = document.getElementById("onlineFeedback");
    if (fb) { fb.style.display = "none"; fb.innerHTML = ""; }
    var tf = document.querySelector("#onlineGame .online-tf");
    if (tf) tf.style.display = "";
    ["onlineTrueBtn", "onlineFalseBtn"].forEach(function (id) {
      var b = document.getElementById(id);
      if (b) { b.disabled = false; b.classList.remove("correct", "wrong"); }
    });
    var wo = document.getElementById("onlineWaitOpp");
    if (wo) wo.style.display = "none";
  }
  window.onlineAnswer = function (pick, btn) {
    if (OD.answered || OD.done) return;
    OD.answered = true;
    var q = OD.questions[OD.cur];
    var correct = pick === q.c;
    var tb = document.getElementById("onlineTrueBtn"), fbn = document.getElementById("onlineFalseBtn");
    tb.disabled = true; fbn.disabled = true;
    (q.c ? tb : fbn).classList.add("correct");
    if (!correct && btn) btn.classList.add("wrong");
    if (correct) OD.score++;
    document.getElementById("onlineYouScore").textContent = OD.score;
    var fb = document.getElementById("onlineFeedback");
    if (fb) {
      fb.style.display = "block";
      fb.className = "online-feedback " + (correct ? "ok" : "err");
      fb.innerHTML = (correct ? "&#9989; " : "&#10060; ") + esc(EN() ? q.ee : q.er);
    }
    bcast("progress", { score: OD.score, cur: OD.cur, name: OD.myName });
    setTimeout(function () {
      OD.cur++;
      if (OD.cur >= OD.questions.length) finish();
      else renderQ();
    }, 1600);
  };
  function onProgress(p) {
    if (!p) return;
    if (typeof p.score === "number") OD.oppScore = p.score;
    if (p.name) OD.oppName = normOpp(p.name);
    var e = document.getElementById("onlineOppScore");
    if (e) e.textContent = OD.oppScore;
    var n = document.getElementById("onlineOppName");
    if (n && OD.oppName) n.textContent = OD.oppName;
  }
  function onFinish(p) {
    OD.oppDone = true;
    if (p && typeof p.score === "number") {
      OD.oppScore = p.score;
      var e = document.getElementById("onlineOppScore");
      if (e) e.textContent = OD.oppScore;
    }
    if (OD.done) showResults();
  }
  function finish() {
    OD.done = true;
    bcast("finish", { score: OD.score, name: OD.myName });
    if (OD.oppDone) { showResults(); return; }
    var tf = document.querySelector("#onlineGame .online-tf");
    if (tf) tf.style.display = "none";
    var stt = document.getElementById("onlineStatement");
    if (stt) stt.textContent = "";
    var fb = document.getElementById("onlineFeedback");
    if (fb) fb.style.display = "none";
    var wo = document.getElementById("onlineWaitOpp");
    if (wo) wo.style.display = "block";
  }
  function showResults() {
    setView("onlineResults");
    var win = OD.score > OD.oppScore, tie = OD.score === OD.oppScore;
    var icon = document.getElementById("onlineResultIcon"),
      title = document.getElementById("onlineResultTitle"),
      sc = document.getElementById("onlineResultScores");
    if (icon) icon.textContent = win ? "🏆" : tie ? "🤝" : "😔";
    if (title) title.textContent = win ? L("online.win") : tie ? L("online.tie") : L("online.lose");
    if (sc)
      sc.innerHTML =
        "<span>" + esc(OD.myName) + ": <b>" + OD.score + "</b></span>" +
        '<span class="online-vs">—</span>' +
        "<span>" + esc(OD.oppName) + ": <b>" + OD.oppScore + "</b></span>";
  }

  window.onlineRematch = function () {
    bcast("rematch", { name: OD.myName });
    goToReady();
  };
  function onRematch(payload) {
    if (payload && payload.name) OD.oppName = normOpp(payload.name);
    goToReady();
  }
})();


(function mobileUI() {
  if (typeof I18N !== "undefined") {
    var t = { ro: "Structuri", en: "Structures", fr: "Structures", de: "Strukturen", es: "Estructuras", hu: "Struktúrák" };
    Object.keys(t).forEach(function (k) { if (I18N[k]) I18N[k]["mob.structures"] = t[k]; });
    if (typeof applyLanguage === "function") applyLanguage(CUR_LANG);
  }

  window.toggleHomeMenu = function () {
    var open = document.body.classList.toggle("home-menu-open");
    var h = document.querySelector(".home-hamburger");
    if (h) h.setAttribute("aria-expanded", open ? "true" : "false");
  };

  document.addEventListener("click", function (e) {
    if (!document.body.classList.contains("home-menu-open")) return;
    var col = document.getElementById("homeNavCollapse");
    var ham = document.querySelector(".home-hamburger");
    if (ham && ham.contains(e.target)) return;
    if (col && col.contains(e.target)) {
      if (
        e.target.closest(".home-nav-center a") ||
        e.target.closest(".home-login-btn") ||
        e.target.closest(".user-menu-item")
      ) {
        document.body.classList.remove("home-menu-open");
      }
      return;
    }
    document.body.classList.remove("home-menu-open");
  });

  window.toggleMobileSidebar = function () { document.body.classList.toggle("sidebar-open"); };
  window.closeMobileSidebar = function () { document.body.classList.remove("sidebar-open"); };

  document.addEventListener("click", function (e) {
    if (!document.body.classList.contains("sidebar-open")) return;
    if (!(e.target.closest && e.target.closest(".sidebar"))) return;
    if (e.target.closest(".bone-item, .muscle-item, .struct-item, .ex-item, .comp-item")) {
      setTimeout(function () { document.body.classList.remove("sidebar-open"); }, 220);
    }
  });

  function addSidebarCloseButtons() {
    var list = document.querySelectorAll(".sidebar");
    for (var i = 0; i < list.length; i++) {
      var sb = list[i];
      if (sb.querySelector(".sidebar-mobile-close")) continue;
      var b = document.createElement("button");
      b.className = "sidebar-mobile-close";
      b.setAttribute("aria-label", "Închide");
      b.innerHTML = "&times;";
      b.onclick = function () { document.body.classList.remove("sidebar-open"); };
      sb.appendChild(b);
    }
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", addSidebarCloseButtons);
  else addSidebarCloseButtons();

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") document.body.classList.remove("sidebar-open", "home-menu-open");
  });
})();


(function bxI18nExtra() {
  if (typeof I18N === "undefined") return;
  Object.assign(I18N.ro, {
    "chat.chip.quiz": "Pornește quiz",
    "chat.chip.manuals": "Manuale",
    "chat.chip.howto": "Cum folosesc site-ul",
    "daily.done": "✓ Completat",
    "daily.pending": "În curs",
    "reviews.word.one": "recenzie",
    "reviews.word.many": "recenzii",
    "notebook.word.one": "notiță",
    "notebook.word.many": "notițe",
  });
  Object.assign(I18N.en, {
    "chat.chip.quiz": "Start quiz",
    "chat.chip.manuals": "Textbooks",
    "chat.chip.howto": "How do I use the site",
    "daily.done": "✓ Completed",
    "daily.pending": "In progress",
    "reviews.word.one": "review",
    "reviews.word.many": "reviews",
    "notebook.word.one": "note",
    "notebook.word.many": "notes",
  });
  try {
    (window.DAILY_CHALLENGES || []).forEach(function (c) {
      if (I18N.ro["daily.ch." + c.id] == null) I18N.ro["daily.ch." + c.id] = c.text;
    });
  } catch (e) {}
  if (typeof applyLanguage === "function") applyLanguage(CUR_LANG);
})();



;(function(){
  if (typeof I18N === 'undefined') return;
  I18N.en = I18N.en || {};
  Object.assign(I18N.en, {"online.entry":"Play online with a friend","online.title":"Online 1v1 Duel","online.intro":"Challenge a friend to a real-time knowledge duel. Same questions, live score — whoever gets the most correct wins.","online.system":"System","online.sys.all":"🎯 All systems","online.sys.osos":"🦴 Skeletal","online.sys.muscular":"💪 Muscular","online.sys.nervous":"🧠 Nervous","online.sys.cardio":"❤️ Cardiovascular","online.sys.respiratory":"💨 Respiratory","online.sys.digestive":"🍽️ Digestive","online.create":"Create a room","online.or":"or","online.codePh":"CODE","online.join":"Join","online.codeLabel":"Room code","online.share":"Send the code to a friend. The game starts automatically when they join.","online.waiting":"Waiting for opponent...","online.cancel":"Cancel","online.q":"Question","online.aiSays":"Statement","online.true":"TRUE","online.false":"FALSE","online.waitOpp":"You're done! Waiting for your opponent to finish...","online.rematch":"Rematch","online.exit":"Exit","online.win":"You won! 🎉","online.lose":"You lost","online.tie":"Tie!","online.noRealtime":"Online play isn't available right now (no connection).","online.connErr":"Connection error. Try again.","online.badCode":"Enter the 4-character code.","online.joining":"Connecting to the room...","online.noRoom":"The room doesn't exist or the opponent left.","online.rematchWait":"Waiting for the host to start the rematch...","chat.chip.quiz":"Start quiz","chat.chip.manuals":"Manuals","chat.chip.howto":"How to use the site","daily.done":"✓ Completed","daily.pending":"In progress","reviews.word.one":"review","reviews.word.many":"reviews","notebook.word.one":"note","notebook.word.many":"notes","daily.ch.click_bones":"Click on 5 different bones in the 3D skeleton","daily.ch.click_bones_10":"Click on 10 different bones in the 3D skeleton","daily.ch.use_chatbot":"Use the chatbox 3 times","daily.ch.use_chatbot_5":"Ask the AI assistant 5 questions","daily.ch.visit_sections":"Visit all 4 anatomical sections (Head/Trunk/Upper Limbs/Lower)","daily.ch.try_minigame":"Play a minigame (any type)","daily.ch.try_visual_quiz":"Play \"Identify the Bone\"","daily.ch.try_know_quiz":"Play \"Knowledge Test\"","daily.ch.try_duel":"Play \"AI Duel\" — battle the AI","daily.ch.curiozitati_5":"View 5 fun facts in the chatbot","daily.ch.open_manual":"Open a manual from the Learn section","daily.ch.use_search":"Search for a bone in the search bar","daily.ch.mu_view_5":"Click on 5 different muscles in the muscular model","daily.ch.mu_view_10":"Click on 10 different muscles in the muscular model","daily.ch.mu_visual_quiz":"Play \"Identify the Muscle\"","daily.ch.mu_know_quiz":"Play \"Muscular Knowledge Test\"","daily.ch.mu_section_all":"Visit the 4 muscle groups (Head, Trunk, Upper/Lower Limbs)","daily.ch.mu_visual_perfect":"Finish \"Identify the Muscle\" Easy with over 70%","daily.ch.click_bones_15":"Click on 15 different bones in the 3D skeleton","daily.ch.click_bones_25":"Click on 25 different bones in the 3D skeleton","daily.ch.use_chatbot_10":"Ask the AI assistant 10 questions","daily.ch.curiozitati_3":"View 3 quick fun facts in the chatbot","daily.ch.curiozitati_10":"View 10 fun facts in the chatbot","daily.ch.try_quiz_2":"Play 2 minigames (any type)","daily.ch.try_quiz_3":"Play 3 minigames (any type)","daily.ch.try_visual_med":"Play \"Identify the Bone\" on Medium level","daily.ch.try_visual_hard":"Play \"Identify the Bone\" on Hard level","daily.ch.try_know_med":"Play \"Knowledge Test\" on Medium","daily.ch.try_know_hard":"Play \"Knowledge Test\" on Hard (Manuals)","daily.ch.try_duel_med":"Take on AI Duel at Medium level","daily.ch.try_duel_hard":"Take on AI Duel at Hard level","daily.ch.manual_2":"Open 2 different manuals from the Learn section","daily.ch.manual_3":"Open all 3 Stefaneț manuals","daily.ch.search_3":"Use the search bar 3 times","daily.ch.visit_2":"Visit 2 anatomical sections (Head/Trunk/etc)","daily.ch.visit_3":"Visit 3 anatomical sections","daily.ch.click_chat":"Open the chatbox and greet the AI"});
  I18N.fr = I18N.fr || {};
  Object.assign(I18N.fr, {"online.entry":"Joue en ligne avec un ami","online.title":"Duel en ligne 1v1","online.intro":"Défie un ami à un duel de connaissances en temps réel. Les mêmes questions, score en direct — gagne celui qui a le plus de bonnes réponses.","online.system":"Système","online.sys.all":"🎯 Tous les systèmes","online.sys.osos":"🦴 Osseux","online.sys.muscular":"💪 Musculaire","online.sys.nervous":"🧠 Nerveux","online.sys.cardio":"❤️ Cardiovasculaire","online.sys.respiratory":"💨 Respiratoire","online.sys.digestive":"🍽️ Digestif","online.create":"Créer une salle","online.or":"ou","online.codePh":"CODE","online.join":"Rejoindre","online.codeLabel":"Code de la salle","online.share":"Envoie le code à un ami. La partie commence automatiquement dès qu'il entre.","online.waiting":"En attente de l'adversaire...","online.cancel":"Annuler","online.q":"Question","online.aiSays":"Affirmation","online.true":"VRAI","online.false":"FAUX","online.waitOpp":"Tu as terminé ! En attente que l'adversaire termine...","online.rematch":"Revanche","online.exit":"Quitter","online.win":"Tu as gagné ! 🎉","online.lose":"Tu as perdu","online.tie":"Égalité !","online.noRealtime":"Le jeu en ligne n'est pas disponible pour le moment (pas de connexion).","online.connErr":"Erreur de connexion. Réessaie.","online.badCode":"Saisis le code à 4 caractères.","online.joining":"Connexion à la salle...","online.noRoom":"La salle n'existe pas ou l'adversaire est parti.","online.rematchWait":"En attente que l'hôte lance la revanche...","chat.chip.quiz":"Lancer le quiz","chat.chip.manuals":"Manuels","chat.chip.howto":"Comment utiliser le site","daily.done":"✓ Terminé","daily.pending":"En cours","reviews.word.one":"avis","reviews.word.many":"avis","notebook.word.one":"note","notebook.word.many":"notes","daily.ch.click_bones":"Clique sur 5 os différents dans le squelette 3D","daily.ch.click_bones_10":"Clique sur 10 os différents dans le squelette 3D","daily.ch.use_chatbot":"Utilise le chatbox 3 fois","daily.ch.use_chatbot_5":"Pose 5 questions à l'assistant AI","daily.ch.visit_sections":"Visite les 4 sections anatomiques (Tête/Tronc/Membres sup./inf.)","daily.ch.try_minigame":"Joue à un mini-jeu (n'importe lequel)","daily.ch.try_visual_quiz":"Joue à « Identifie l'os »","daily.ch.try_know_quiz":"Joue au « Test de connaissances »","daily.ch.try_duel":"Joue à « AI Duel » — affronte l'AI","daily.ch.curiozitati_5":"Découvre 5 curiosités dans le chatbot","daily.ch.open_manual":"Ouvre un manuel dans la section Apprendre","daily.ch.use_search":"Recherche un os dans la barre de recherche","daily.ch.mu_view_5":"Clique sur 5 muscles différents dans le modèle musculaire","daily.ch.mu_view_10":"Clique sur 10 muscles différents dans le modèle musculaire","daily.ch.mu_visual_quiz":"Joue à « Identifie le muscle »","daily.ch.mu_know_quiz":"Joue au « Test de connaissances musculaire »","daily.ch.mu_section_all":"Visite les 4 groupes musculaires (Tête, Tronc, Membres sup./inf.)","daily.ch.mu_visual_perfect":"Termine « Identifie le muscle » Facile avec plus de 70 %","daily.ch.click_bones_15":"Clique sur 15 os différents dans le squelette 3D","daily.ch.click_bones_25":"Clique sur 25 os différents dans le squelette 3D","daily.ch.use_chatbot_10":"Pose 10 questions à l'assistant AI","daily.ch.curiozitati_3":"Découvre 3 curiosités rapides dans le chatbot","daily.ch.curiozitati_10":"Découvre 10 curiosités dans le chatbot","daily.ch.try_quiz_2":"Joue à 2 mini-jeux (n'importe lesquels)","daily.ch.try_quiz_3":"Joue à 3 mini-jeux (n'importe lesquels)","daily.ch.try_visual_med":"Joue à « Identifie l'os » au niveau Moyen","daily.ch.try_visual_hard":"Joue à « Identifie l'os » au niveau Difficile","daily.ch.try_know_med":"Joue au « Test de connaissances » en Moyen","daily.ch.try_know_hard":"Joue au « Test de connaissances » en Difficile (Manuels)","daily.ch.try_duel_med":"Affronte AI Duel au niveau Moyen","daily.ch.try_duel_hard":"Affronte AI Duel au niveau Difficile","daily.ch.manual_2":"Ouvre 2 manuels différents dans la section Apprendre","daily.ch.manual_3":"Ouvre les 3 manuels Stefaneț","daily.ch.search_3":"Utilise la barre de recherche 3 fois","daily.ch.visit_2":"Visite 2 sections anatomiques (Tête/Tronc/etc.)","daily.ch.visit_3":"Visite 3 sections anatomiques","daily.ch.click_chat":"Ouvre le chatbox et salue l'AI"});
  I18N.de = I18N.de || {};
  Object.assign(I18N.de, {"online.entry":"Spiele online mit einem Freund","online.title":"Online-Duell 1v1","online.intro":"Fordere einen Freund zu einem Wissensduell in Echtzeit heraus. Gleiche Fragen, Live-Punktestand — wer mehr richtig hat, gewinnt.","online.system":"System","online.sys.all":"🎯 Alle Systeme","online.sys.osos":"🦴 Skelett","online.sys.muscular":"💪 Muskulatur","online.sys.nervous":"🧠 Nervensystem","online.sys.cardio":"❤️ Herz-Kreislauf","online.sys.respiratory":"💨 Atmung","online.sys.digestive":"🍽️ Verdauung","online.create":"Raum erstellen","online.or":"oder","online.codePh":"CODE","online.join":"Beitreten","online.codeLabel":"Raumcode","online.share":"Sende den Code einem Freund. Das Spiel startet automatisch, sobald er beitritt.","online.waiting":"Warte auf Gegner...","online.cancel":"Abbrechen","online.q":"Frage","online.aiSays":"Aussage","online.true":"WAHR","online.false":"FALSCH","online.waitOpp":"Fertig! Warte, bis der Gegner fertig ist...","online.rematch":"Revanche","online.exit":"Verlassen","online.win":"Du hast gewonnen! 🎉","online.lose":"Du hast verloren","online.tie":"Unentschieden!","online.noRealtime":"Das Online-Spiel ist momentan nicht verfügbar (keine Verbindung).","online.connErr":"Verbindungsfehler. Versuche es erneut.","online.badCode":"Gib den 4-stelligen Code ein.","online.joining":"Verbinde mit dem Raum...","online.noRoom":"Der Raum existiert nicht oder der Gegner ist gegangen.","online.rematchWait":"Warte, bis der Host die Revanche startet...","chat.chip.quiz":"Quiz starten","chat.chip.manuals":"Handbücher","chat.chip.howto":"Wie nutze ich die Seite","daily.done":"✓ Erledigt","daily.pending":"Läuft","reviews.word.one":"Bewertung","reviews.word.many":"Bewertungen","notebook.word.one":"Notiz","notebook.word.many":"Notizen","daily.ch.click_bones":"Klicke auf 5 verschiedene Knochen im 3D-Skelett","daily.ch.click_bones_10":"Klicke auf 10 verschiedene Knochen im 3D-Skelett","daily.ch.use_chatbot":"Nutze die Chatbox 3-mal","daily.ch.use_chatbot_5":"Stelle dem AI-Assistenten 5 Fragen","daily.ch.visit_sections":"Besuche alle 4 anatomischen Bereiche (Kopf/Rumpf/obere/untere Gliedmaßen)","daily.ch.try_minigame":"Spiele ein Minispiel (beliebiger Typ)","daily.ch.try_visual_quiz":"Spiele \"Erkenne den Knochen\"","daily.ch.try_know_quiz":"Spiele \"Wissenstest\"","daily.ch.try_duel":"Spiele \"AI Duel\" — kämpfe gegen die AI","daily.ch.curiozitati_5":"Sieh dir 5 Kuriositäten im Chatbot an","daily.ch.open_manual":"Öffne ein Handbuch im Bereich Lernen","daily.ch.use_search":"Suche einen Knochen in der Suchleiste","daily.ch.mu_view_5":"Klicke auf 5 verschiedene Muskeln im Muskelmodell","daily.ch.mu_view_10":"Klicke auf 10 verschiedene Muskeln im Muskelmodell","daily.ch.mu_visual_quiz":"Spiele \"Erkenne den Muskel\"","daily.ch.mu_know_quiz":"Spiele \"Wissenstest Muskulatur\"","daily.ch.mu_section_all":"Besuche die 4 Muskelgruppen (Kopf, Rumpf, obere/untere Gliedmaßen)","daily.ch.mu_visual_perfect":"Beende \"Erkenne den Muskel\" auf Leicht mit über 70%","daily.ch.click_bones_15":"Klicke auf 15 verschiedene Knochen im 3D-Skelett","daily.ch.click_bones_25":"Klicke auf 25 verschiedene Knochen im 3D-Skelett","daily.ch.use_chatbot_10":"Stelle dem AI-Assistenten 10 Fragen","daily.ch.curiozitati_3":"Sieh dir 3 schnelle Kuriositäten im Chatbot an","daily.ch.curiozitati_10":"Sieh dir 10 Kuriositäten im Chatbot an","daily.ch.try_quiz_2":"Spiele 2 Minispiele (beliebiger Typ)","daily.ch.try_quiz_3":"Spiele 3 Minispiele (beliebiger Typ)","daily.ch.try_visual_med":"Spiele \"Erkenne den Knochen\" auf Mittel","daily.ch.try_visual_hard":"Spiele \"Erkenne den Knochen\" auf Schwer","daily.ch.try_know_med":"Spiele \"Wissenstest\" auf Mittel","daily.ch.try_know_hard":"Spiele \"Wissenstest\" auf Schwer (Handbücher)","daily.ch.try_duel_med":"Fordere AI Duel auf Mittel heraus","daily.ch.try_duel_hard":"Fordere AI Duel auf Schwer heraus","daily.ch.manual_2":"Öffne 2 verschiedene Handbücher im Bereich Lernen","daily.ch.manual_3":"Öffne alle 3 Stefaneț-Handbücher","daily.ch.search_3":"Nutze die Suchleiste 3-mal","daily.ch.visit_2":"Besuche 2 anatomische Bereiche (Kopf/Rumpf/usw.)","daily.ch.visit_3":"Besuche 3 anatomische Bereiche","daily.ch.click_chat":"Öffne die Chatbox und begrüße die AI"});
  I18N.es = I18N.es || {};
  Object.assign(I18N.es, {"online.entry":"Juega en línea con un amigo","online.title":"Duelo en línea 1v1","online.intro":"Reta a un amigo a un duelo de conocimientos en tiempo real. Las mismas preguntas, puntuación en vivo — gana quien tenga más aciertos.","online.system":"Sistema","online.sys.all":"🎯 Todos los sistemas","online.sys.osos":"🦴 Óseo","online.sys.muscular":"💪 Muscular","online.sys.nervous":"🧠 Nervioso","online.sys.cardio":"❤️ Cardiovascular","online.sys.respiratory":"💨 Respiratorio","online.sys.digestive":"🍽️ Digestivo","online.create":"Crea una sala","online.or":"o","online.codePh":"CÓDIGO","online.join":"Entrar","online.codeLabel":"Código de la sala","online.share":"Envíale el código a un amigo. El juego empieza automáticamente cuando entre.","online.waiting":"Esperando al adversario...","online.cancel":"Cancelar","online.q":"Pregunta","online.aiSays":"Afirmación","online.true":"VERDADERO","online.false":"FALSO","online.waitOpp":"¡Has terminado! Esperando a que el adversario termine...","online.rematch":"Revancha","online.exit":"Salir","online.win":"¡Has ganado! 🎉","online.lose":"Has perdido","online.tie":"¡Empate!","online.noRealtime":"El juego en línea no está disponible en este momento (sin conexión).","online.connErr":"Error de conexión. Inténtalo de nuevo.","online.badCode":"Introduce el código de 4 caracteres.","online.joining":"Conectando a la sala...","online.noRoom":"La sala no existe o el adversario se ha ido.","online.rematchWait":"Esperando a que el anfitrión inicie la revancha...","chat.chip.quiz":"Iniciar quiz","chat.chip.manuals":"Manuales","chat.chip.howto":"Cómo uso el sitio","daily.done":"✓ Completado","daily.pending":"En curso","reviews.word.one":"reseña","reviews.word.many":"reseñas","notebook.word.one":"nota","notebook.word.many":"notas","daily.ch.click_bones":"Haz clic en 5 huesos diferentes del esqueleto 3D","daily.ch.click_bones_10":"Haz clic en 10 huesos diferentes del esqueleto 3D","daily.ch.use_chatbot":"Usa el chatbox 3 veces","daily.ch.use_chatbot_5":"Hazle 5 preguntas al asistente de IA","daily.ch.visit_sections":"Visita las 4 secciones anatómicas (Cabeza/Tronco/Miembros Sup./Inf.)","daily.ch.try_minigame":"Juega un minijuego (de cualquier tipo)","daily.ch.try_visual_quiz":"Juega \"Identifica el Hueso\"","daily.ch.try_know_quiz":"Juega \"Test de Conocimientos\"","daily.ch.try_duel":"Juega \"AI Duel\" — enfréntate a la IA","daily.ch.curiozitati_5":"Descubre 5 curiosidades en el chatbot","daily.ch.open_manual":"Abre un manual de la sección Aprende","daily.ch.use_search":"Busca un hueso en la barra de búsqueda","daily.ch.mu_view_5":"Haz clic en 5 músculos diferentes del modelo muscular","daily.ch.mu_view_10":"Haz clic en 10 músculos diferentes del modelo muscular","daily.ch.mu_visual_quiz":"Juega \"Identifica el Músculo\"","daily.ch.mu_know_quiz":"Juega \"Test de Conocimientos Muscular\"","daily.ch.mu_section_all":"Visita los 4 grupos musculares (Cabeza, Tronco, Miembros Sup./Inf.)","daily.ch.mu_visual_perfect":"Termina \"Identifica el Músculo\" Fácil con más del 70%","daily.ch.click_bones_15":"Haz clic en 15 huesos diferentes del esqueleto 3D","daily.ch.click_bones_25":"Haz clic en 25 huesos diferentes del esqueleto 3D","daily.ch.use_chatbot_10":"Hazle 10 preguntas al asistente de IA","daily.ch.curiozitati_3":"Descubre 3 curiosidades rápidas en el chatbot","daily.ch.curiozitati_10":"Descubre 10 curiosidades en el chatbot","daily.ch.try_quiz_2":"Juega 2 minijuegos (de cualquier tipo)","daily.ch.try_quiz_3":"Juega 3 minijuegos (de cualquier tipo)","daily.ch.try_visual_med":"Juega \"Identifica el Hueso\" en nivel Medio","daily.ch.try_visual_hard":"Juega \"Identifica el Hueso\" en nivel Difícil","daily.ch.try_know_med":"Juega \"Test de Conocimientos\" en Medio","daily.ch.try_know_hard":"Juega \"Test de Conocimientos\" en Difícil (Manuales)","daily.ch.try_duel_med":"Enfréntate a AI Duel en nivel Medio","daily.ch.try_duel_hard":"Enfréntate a AI Duel en nivel Difícil","daily.ch.manual_2":"Abre 2 manuales diferentes de la sección Aprende","daily.ch.manual_3":"Abre los 3 manuales de Stefaneț","daily.ch.search_3":"Usa la barra de búsqueda 3 veces","daily.ch.visit_2":"Visita 2 secciones anatómicas (Cabeza/Tronco/etc.)","daily.ch.visit_3":"Visita 3 secciones anatómicas","daily.ch.click_chat":"Abre el chatbox y saluda a la IA"});
  I18N.hu = I18N.hu || {};
  Object.assign(I18N.hu, {"online.entry":"Játssz online egy barátoddal","online.title":"Online 1v1 Párbaj","online.intro":"Hívd ki egy barátodat valós idejű tudáspárbajra. Ugyanazok a kérdések, élő pontszám — az nyer, akinek több a helyes válasza.","online.system":"Rendszer","online.sys.all":"🎯 Minden rendszer","online.sys.osos":"🦴 Csontrendszer","online.sys.muscular":"💪 Izomrendszer","online.sys.nervous":"🧠 Idegrendszer","online.sys.cardio":"❤️ Szív- és érrendszer","online.sys.respiratory":"💨 Légzőrendszer","online.sys.digestive":"🍽️ Emésztőrendszer","online.create":"Szoba létrehozása","online.or":"vagy","online.codePh":"KÓD","online.join":"Belépés","online.codeLabel":"Szoba kódja","online.share":"Küldd el a kódot egy barátodnak. A játék automatikusan elindul, amint belép.","online.waiting":"Ellenfélre várok...","online.cancel":"Mégse","online.q":"Kérdés","online.aiSays":"Állítás","online.true":"IGAZ","online.false":"HAMIS","online.waitOpp":"Végeztél! Várod, hogy az ellenfél is befejezze...","online.rematch":"Visszavágó","online.exit":"Kilépés","online.win":"Nyertél! 🎉","online.lose":"Vesztettél","online.tie":"Döntetlen!","online.noRealtime":"Az online játék jelenleg nem érhető el (nincs kapcsolat).","online.connErr":"Kapcsolódási hiba. Próbáld újra.","online.badCode":"Add meg a 4 karakteres kódot.","online.joining":"Csatlakozás a szobához...","online.noRoom":"A szoba nem létezik, vagy az ellenfél kilépett.","online.rematchWait":"Várod, hogy a házigazda elindítsa a visszavágót...","chat.chip.quiz":"Kvíz indítása","chat.chip.manuals":"Tankönyvek","chat.chip.howto":"Hogyan használom az oldalt","daily.done":"✓ Teljesítve","daily.pending":"Folyamatban","reviews.word.one":"értékelés","reviews.word.many":"értékelés","notebook.word.one":"jegyzet","notebook.word.many":"jegyzet","daily.ch.click_bones":"Kattints 5 különböző csontra a 3D csontvázon","daily.ch.click_bones_10":"Kattints 10 különböző csontra a 3D csontvázon","daily.ch.use_chatbot":"Használd a chatboxot 3 alkalommal","daily.ch.use_chatbot_5":"Tegyél fel 5 kérdést az AI asszisztensnek","daily.ch.visit_sections":"Látogasd meg mind a 4 anatómiai szakaszt (Fej/Törzs/Felső vég./Alsó vég.)","daily.ch.try_minigame":"Játssz egy minijátékot (bármelyik típust)","daily.ch.try_visual_quiz":"Játszd a \"Csont azonosítása\" játékot","daily.ch.try_know_quiz":"Játszd a \"Tudáspróba\" játékot","daily.ch.try_duel":"Játssz \"AI Duel\"-t — küzdj meg az AI-jal","daily.ch.curiozitati_5":"Nézz meg 5 érdekességet a chatbotban","daily.ch.open_manual":"Nyiss meg egy tankönyvet a Tanulj szakaszból","daily.ch.use_search":"Keress rá egy csontra a keresősávban","daily.ch.mu_view_5":"Kattints 5 különböző izomra az izommodellen","daily.ch.mu_view_10":"Kattints 10 különböző izomra az izommodellen","daily.ch.mu_visual_quiz":"Játszd az \"Izom azonosítása\" játékot","daily.ch.mu_know_quiz":"Játszd az \"Izom Tudáspróba\" játékot","daily.ch.mu_section_all":"Látogasd meg mind a 4 izomcsoportot (Fej, Törzs, Felső/Alsó vég.)","daily.ch.mu_visual_perfect":"Fejezd be az \"Izom azonosítása\" Könnyű szintet 70% felett","daily.ch.click_bones_15":"Kattints 15 különböző csontra a 3D csontvázon","daily.ch.click_bones_25":"Kattints 25 különböző csontra a 3D csontvázon","daily.ch.use_chatbot_10":"Tegyél fel 10 kérdést az AI asszisztensnek","daily.ch.curiozitati_3":"Nézz meg 3 gyors érdekességet a chatbotban","daily.ch.curiozitati_10":"Nézz meg 10 érdekességet a chatbotban","daily.ch.try_quiz_2":"Játssz 2 minijátékot (bármelyik típust)","daily.ch.try_quiz_3":"Játssz 3 minijátékot (bármelyik típust)","daily.ch.try_visual_med":"Játszd a \"Csont azonosítása\" játékot Közepes szinten","daily.ch.try_visual_hard":"Játszd a \"Csont azonosítása\" játékot Nehéz szinten","daily.ch.try_know_med":"Játszd a \"Tudáspróba\" játékot Közepes szinten","daily.ch.try_know_hard":"Játszd a \"Tudáspróba\" játékot Nehéz szinten (Tankönyvek)","daily.ch.try_duel_med":"Küzdj meg az AI Duel-lel Közepes szinten","daily.ch.try_duel_hard":"Küzdj meg az AI Duel-lel Nehéz szinten","daily.ch.manual_2":"Nyiss meg 2 különböző tankönyvet a Tanulj szakaszból","daily.ch.manual_3":"Nyisd meg mind a 3 Stefaneț tankönyvet","daily.ch.search_3":"Használd a keresősávot 3 alkalommal","daily.ch.visit_2":"Látogass meg 2 anatómiai szakaszt (Fej/Törzs/stb.)","daily.ch.visit_3":"Látogass meg 3 anatómiai szakaszt","daily.ch.click_chat":"Nyisd meg a chatboxot és köszönj az AI-nak"});

  I18N.fr["report.mailto"] = "Nous avons ouvert ton application de messagerie avec le rapport pré-rempli — appuie sur <b>Envoyer</b> là-bas.<br><small style=\"color:var(--t3)\">Ça ne s'est pas ouvert ? Écris-nous directement à <b>bionexusdevs@gmail.com</b></small>";
  I18N.de["report.mailto"] = "Deine E-Mail-App wurde mit dem ausgefüllten Bericht geöffnet — tippe dort auf <b>Senden</b>.<br><small style=\"color:var(--t3)\">Nicht geöffnet? Schreib uns direkt an <b>bionexusdevs@gmail.com</b></small>";
  I18N.es["report.mailto"] = "Hemos abierto tu aplicación de correo con el informe completado — pulsa <b>Enviar</b> allí.<br><small style=\"color:var(--t3)\">¿No se abrió? Escríbenos directamente a <b>bionexusdevs@gmail.com</b></small>";
  I18N.hu["report.mailto"] = "Megnyitottuk az e-mail alkalmazásodat a kitöltött jelentéssel — nyomd meg ott a <b>Küldés</b> gombot.<br><small style=\"color:var(--t3)\">Nem nyílt meg? Írj nekünk közvetlenül a <b>bionexusdevs@gmail.com</b></small> címre.";

  Object.assign(I18N.ro, { "quiz.end.back": "Înapoi la minijocuri", "quiz.end.correct": "corecte", "quiz.end.wrong": "greșite", "quiz.end.timeword": "timp" });
  Object.assign(I18N.en, { "quiz.end.back": "Back to minigames", "quiz.end.correct": "correct", "quiz.end.wrong": "wrong", "quiz.end.timeword": "time" });
  Object.assign(I18N.fr, { "quiz.end.back": "Retour aux mini-jeux", "quiz.end.correct": "correctes", "quiz.end.wrong": "erreurs", "quiz.end.timeword": "temps" });
  Object.assign(I18N.de, { "quiz.end.back": "Zurück zu den Minispielen", "quiz.end.correct": "richtig", "quiz.end.wrong": "falsch", "quiz.end.timeword": "Zeit" });
  Object.assign(I18N.es, { "quiz.end.back": "Volver a los minijuegos", "quiz.end.correct": "correctas", "quiz.end.wrong": "erróneas", "quiz.end.timeword": "tiempo" });
  Object.assign(I18N.hu, { "quiz.end.back": "Vissza a minijátékokhoz", "quiz.end.correct": "helyes", "quiz.end.wrong": "hibás", "quiz.end.timeword": "idő" });
  try { if (typeof applyLanguage === 'function' && typeof CUR_LANG !== 'undefined') applyLanguage(CUR_LANG); } catch(e){}
})();


;(function bxOnlineDropdownLabels(){
  if (typeof I18N === "undefined") return;
  var T = {
    ro: { all: "Toate", osos: "Osos", muscular: "Muscular", nervous: "Nervos", cardio: "Cardiovascular", respiratory: "Respirator", digestive: "Digestiv" },
    en: { all: "All", osos: "Skeletal", muscular: "Muscular", nervous: "Nervous", cardio: "Cardiovascular", respiratory: "Respiratory", digestive: "Digestive" },
    fr: { all: "Tous", osos: "Osseux", muscular: "Musculaire", nervous: "Nerveux", cardio: "Cardiovasculaire", respiratory: "Respiratoire", digestive: "Digestif" },
    de: { all: "Alle", osos: "Skelett", muscular: "Muskulatur", nervous: "Nervensystem", cardio: "Herz-Kreislauf", respiratory: "Atmung", digestive: "Verdauung" },
    es: { all: "Todos", osos: "Óseo", muscular: "Muscular", nervous: "Nervioso", cardio: "Cardiovascular", respiratory: "Respiratorio", digestive: "Digestivo" },
    hu: { all: "Összes", osos: "Csontrendszer", muscular: "Izomrendszer", nervous: "Idegrendszer", cardio: "Szív- és érrendszer", respiratory: "Légzőrendszer", digestive: "Emésztőrendszer" },
  };
  Object.keys(T).forEach(function (code) {
    if (!I18N[code]) return;
    var m = T[code];
    Object.keys(m).forEach(function (sys) { I18N[code]["online.sys." + sys] = m[sys]; });
  });
  try { if (typeof applyLanguage === "function" && typeof CUR_LANG !== "undefined") applyLanguage(CUR_LANG); } catch (e) {}
})();


;(function bxFeatIconGlow(){
  try {
    if (typeof bxHexA !== "function") return;
    var els = document.querySelectorAll(".home-feat-icon");
    for (var i = 0; i < els.length; i++) {
      var el = els[i];
      var src = el.getAttribute("data-ring") || (el.getAttribute("style") || "");
      var m = src.match(/#[0-9a-fA-F]{6}|#[0-9a-fA-F]{3}/);
      var col = m ? m[0] : "#8b5cf6";
      el.style.background = "linear-gradient(135deg," + bxHexA(col, 0.3) + "," + bxHexA(col, 0.12) + ")";
      el.style.border = "1px solid " + bxHexA(col, 0.45);
      el.style.boxShadow = "0 4px 18px " + bxHexA(col, 0.32);
    }
  } catch (e) {}
})();


;(function bxOnlineLobbyI18n(){
  if (typeof I18N === "undefined") return;
  var K = {
    ro: { "online.connecting": "Se conectează...", "online.roomLbl": "Camera", "online.readyUp": "Sunt gata", "online.notReady": "Nepregătit", "online.ready": "Gata!", "online.waitReady": "Aștepți adversarul să fie gata...", "online.starting": "Începe jocul..." },
    en: { "online.connecting": "Connecting...", "online.roomLbl": "Room", "online.readyUp": "I'm ready", "online.notReady": "Not ready", "online.ready": "Ready!", "online.waitReady": "Waiting for your opponent to ready up...", "online.starting": "Starting the game..." },
    fr: { "online.connecting": "Connexion...", "online.roomLbl": "Salle", "online.readyUp": "Je suis prêt", "online.notReady": "Pas prêt", "online.ready": "Prêt !", "online.waitReady": "En attente que l'adversaire soit prêt...", "online.starting": "La partie commence..." },
    de: { "online.connecting": "Verbinde...", "online.roomLbl": "Raum", "online.readyUp": "Bereit", "online.notReady": "Nicht bereit", "online.ready": "Bereit!", "online.waitReady": "Warte, bis der Gegner bereit ist...", "online.starting": "Spiel startet..." },
    es: { "online.connecting": "Conectando...", "online.roomLbl": "Sala", "online.readyUp": "Estoy listo", "online.notReady": "No listo", "online.ready": "¡Listo!", "online.waitReady": "Esperando a que el adversario esté listo...", "online.starting": "Empezando la partida..." },
    hu: { "online.connecting": "Csatlakozás...", "online.roomLbl": "Szoba", "online.readyUp": "Készen állok", "online.notReady": "Nincs kész", "online.ready": "Kész!", "online.waitReady": "Várod, hogy az ellenfél készen álljon...", "online.starting": "A játék indul..." },
  };
  Object.keys(K).forEach(function (code) { if (I18N[code]) Object.assign(I18N[code], K[code]); });
  try { if (typeof applyLanguage === "function" && typeof CUR_LANG !== "undefined") applyLanguage(CUR_LANG); } catch (e) {}
})();


;(function bxFeatDescAllSystems(){
  if (typeof I18N === "undefined") return;
  var D = {
    ro: {
      "home.feat.notes.d": "Notează observații personale pe orice structură din oricare sistem — os, mușchi, organ, nerv sau vas. Marchează ca important, tag-uri color, căutare rapidă, sincronizare cont. Util pentru studenți medicină și pregătire examene.",
      "home.feat.quiz.d": "Pune-ți la încercare cunoștințele. Camera te duce automat la fiecare structură, identifică răspunsul corect.",
      "home.feat.ai.d": "Pune întrebări despre orice structură din oricare sistem — os, mușchi, organ, nerv sau vas. Răspunsuri instant în chatbox-ul interactiv.",
      "home.feat.search.d": "Tastează orice structură — os, mușchi, organ, nerv sau vas — și site-ul te duce instant la ea. Categorisare pe sisteme anatomice.",
    },
    en: {
      "home.feat.notes.d": "Take personal notes on any structure in any system — bone, muscle, organ, nerve or vessel. Mark as important, color tags, quick search, account sync. Ideal for med students and exam prep.",
      "home.feat.quiz.d": "Test your knowledge. The camera auto-pans to each structure, identify the correct answer.",
      "home.feat.ai.d": "Ask questions about any structure in any system — bone, muscle, organ, nerve or vessel. Instant answers in the interactive chatbox.",
      "home.feat.search.d": "Type any structure name and the site jumps to it instantly. Categorized by anatomical systems.",
    },
    fr: {
      "home.feat.notes.d": "Prends des notes personnelles sur n'importe quelle structure de n'importe quel système — os, muscle, organe, nerf ou vaisseau. Marque comme important, étiquettes de couleur, recherche rapide, synchronisation du compte. Idéal pour les étudiants en médecine et la préparation aux examens.",
      "home.feat.quiz.d": "Teste tes connaissances. La caméra se déplace automatiquement vers chaque structure, identifie la bonne réponse.",
      "home.feat.ai.d": "Pose des questions sur n'importe quelle structure de n'importe quel système — os, muscle, organe, nerf ou vaisseau. Réponses instantanées dans le chatbox interactif.",
      "home.feat.search.d": "Tape n'importe quelle structure et le site t'y amène instantanément. Classé par systèmes anatomiques.",
    },
    de: {
      "home.feat.notes.d": "Mache persönliche Notizen zu jeder Struktur in jedem System — Knochen, Muskel, Organ, Nerv oder Gefäß. Als wichtig markieren, Farb-Tags, Schnellsuche, Konto-Synchronisierung. Ideal für Medizinstudierende und die Prüfungsvorbereitung.",
      "home.feat.quiz.d": "Teste dein Wissen. Die Kamera schwenkt automatisch zu jeder Struktur, erkenne die richtige Antwort.",
      "home.feat.ai.d": "Stelle Fragen zu jeder Struktur in jedem System — Knochen, Muskel, Organ, Nerv oder Gefäß. Sofortige Antworten im interaktiven Chatbox.",
      "home.feat.search.d": "Gib eine beliebige Struktur ein und die Seite springt sofort dorthin. Nach anatomischen Systemen kategorisiert.",
    },
    es: {
      "home.feat.notes.d": "Toma notas personales sobre cualquier estructura de cualquier sistema — hueso, músculo, órgano, nervio o vaso. Marca como importante, etiquetas de color, búsqueda rápida, sincronización de cuenta. Ideal para estudiantes de medicina y preparación de exámenes.",
      "home.feat.quiz.d": "Pon a prueba tus conocimientos. La cámara se desplaza automáticamente a cada estructura, identifica la respuesta correcta.",
      "home.feat.ai.d": "Haz preguntas sobre cualquier estructura de cualquier sistema — hueso, músculo, órgano, nervio o vaso. Respuestas instantáneas en el chatbox interactivo.",
      "home.feat.search.d": "Escribe cualquier estructura y el sitio te lleva a ella al instante. Categorizado por sistemas anatómicos.",
    },
    hu: {
      "home.feat.notes.d": "Készíts személyes jegyzeteket bármely rendszer bármely struktúrájáról — csont, izom, szerv, ideg vagy ér. Jelöld fontosként, színes címkék, gyorskeresés, fiókszinkronizálás. Ideális orvostanhallgatóknak és vizsgafelkészüléshez.",
      "home.feat.quiz.d": "Tedd próbára a tudásod. A kamera automatikusan minden struktúrához mozdul, ismerd fel a helyes választ.",
      "home.feat.ai.d": "Kérdezz bármely rendszer bármely struktúrájáról — csont, izom, szerv, ideg vagy ér. Azonnali válaszok az interaktív chatboxban.",
      "home.feat.search.d": "Írj be bármilyen struktúrát és az oldal azonnal odaugrik. Anatómiai rendszerek szerint kategorizálva.",
    },
  };
  Object.keys(D).forEach(function (code) { if (I18N[code]) Object.assign(I18N[code], D[code]); });
  try { if (typeof applyLanguage === "function" && typeof CUR_LANG !== "undefined") applyLanguage(CUR_LANG); } catch (e) {}
})();


;(function bxExtraSystemBadges(){
  if (typeof ACHIEVEMENTS === "undefined") return;


  var NEW = [
    { id: "neuro_explore", name: "NEURONAUT", sub: "Explorează 10 structuri nervoase", icon: "🧠", ic: "brain", c1: "#c4b5fd", c2: "#6d28d9", lvl: 2 },
    { id: "neuro_quiz", name: "NEUROLOG", sub: "Primul quiz nervos", icon: "🧠", ic: "brain", c1: "#a78bfa", c2: "#6d28d9", lvl: 1 },
    { id: "neuro_master", name: "NEUROCHIRURG", sub: "Quiz nervos Greu — perfect", icon: "🧠", ic: "brain", c1: "#8b5cf6", c2: "#5b21b6", lvl: 3 },
    { id: "cardio_explore", name: "CARDIO-EXPLORATOR", sub: "Explorează 8 structuri cardiace", icon: "🫀", ic: "heart", c1: "#fb7185", c2: "#9f1239", lvl: 2 },
    { id: "cardio_quiz", name: "CARDIOLOG", sub: "Primul quiz cardiovascular", icon: "🫀", ic: "heart", c1: "#f87171", c2: "#991b1b", lvl: 1 },
    { id: "cardio_master", name: "CHIRURG CARDIAC", sub: "Quiz cardiovascular Greu — perfect", icon: "🫀", ic: "heart", c1: "#ef4444", c2: "#7f1d1d", lvl: 3 },
    { id: "resp_explore", name: "PNEUMO-EXPLORATOR", sub: "Explorează 8 structuri respiratorii", icon: "🫁", ic: "lungs", c1: "#5ec8f2", c2: "#0e7490", lvl: 2 },
    { id: "resp_quiz", name: "PNEUMOLOG", sub: "Primul quiz respirator", icon: "🫁", ic: "lungs", c1: "#22d3ee", c2: "#0e7490", lvl: 1 },
    { id: "resp_master", name: "CHIRURG TORACIC", sub: "Quiz respirator Greu — perfect", icon: "🫁", ic: "lungs", c1: "#06b6d4", c2: "#164e63", lvl: 3 },
    { id: "dig_explore", name: "DIGESTIV-EXPLORATOR", sub: "Explorează 10 structuri digestive", icon: "🍽️", ic: "stomach", c1: "#fbbf24", c2: "#92400e", lvl: 2 },
    { id: "dig_quiz", name: "GASTROENTEROLOG", sub: "Primul quiz digestiv", icon: "🍽️", ic: "stomach", c1: "#f59e0b", c2: "#9a3412", lvl: 1 },
    { id: "dig_master", name: "CHIRURG DIGESTIV", sub: "Quiz digestiv Greu — perfect", icon: "🍽️", ic: "stomach", c1: "#ea580c", c2: "#7c2d12", lvl: 3 },
  ];
  var have = {};
  ACHIEVEMENTS.forEach(function (a) { have[a.id] = 1; });
  NEW.forEach(function (b) { if (!have[b.id]) { b.unlocked = false; ACHIEVEMENTS.push(b); } });

  var THRESH = { nervous: 10, cardio: 8, respiratory: 8, digestive: 10 };


  if (typeof window.__extraSelect === "function") {
    var _sel = window.__extraSelect;
    window.__extraSelect = function (key, mesh) {
      var r = _sel.apply(this, arguments);
      try {
        var u = typeof getCurrentUser === "function" && getCurrentUser();
        if (u && THRESH[key]) {
          var p = ensureProgress(getProgress(u.user));
          p.extraViewed = p.extraViewed || {};
          p.extraViewed[key] = p.extraViewed[key] || [];
          var nm = (typeof window.__extraSelectedName === "function" && window.__extraSelectedName(key)) || "";
          if (nm && p.extraViewed[key].indexOf(nm) < 0) {
            p.extraViewed[key].push(nm);
            p.xp = (p.xp || 0) + 2;
            saveProgress(p, u.user);
          }
        }
      } catch (e) {}
      return r;
    };
  }


  if (typeof window.trackEvent === "function") {
    var _te = window.trackEvent;
    window.trackEvent = function (type, payload) {
      _te(type, payload);
      if (type === "quizFinish" && payload) {
        try {
          var sys = typeof QUIZ !== "undefined" && QUIZ.system ? QUIZ.system : "";
          if (THRESH[sys]) {
            var u = getCurrentUser();
            if (!u) return;
            var p = ensureProgress(getProgress(u.user));
            p.sysPlays = p.sysPlays || {};
            p.sysPerfect = p.sysPerfect || {};
            p.sysPlays[sys] = p.sysPlays[sys] || { easy: 0, medium: 0, hard: 0, count: 0 };
            if (payload.diff) p.sysPlays[sys][payload.diff] = (p.sysPlays[sys][payload.diff] || 0) + 1;
            p.sysPlays[sys].count = (p.sysPlays[sys].count || 0) + 1;
            if (payload.score === payload.total) {
              p.sysPerfect[sys] = p.sysPerfect[sys] || { easy: 0, medium: 0, hard: 0 };
              if (payload.diff) p.sysPerfect[sys][payload.diff] = (p.sysPerfect[sys][payload.diff] || 0) + 1;
            }
            saveProgress(p, u.user);
          }
        } catch (e) {}
      }
    };
  }


  if (typeof window.unlockedAchievements === "function") {
    var _un = window.unlockedAchievements;
    window.unlockedAchievements = function () {
      var base = _un();
      if (!base || typeof base !== "object") return base;
      try {
        var u = typeof getCurrentUser === "function" ? getCurrentUser() : null;
        if (!u) return base;
        var prog = getProgress(u.user) || {};
        var ev = prog.extraViewed || {}, sp = prog.sysPlays || {}, spf = prog.sysPerfect || {};
        var cnt = function (s) { return (ev[s] || []).length; };
        base.neuro_explore = cnt("nervous") >= THRESH.nervous;
        base.neuro_quiz = !!(sp.nervous && sp.nervous.count >= 1);
        base.neuro_master = !!(spf.nervous && spf.nervous.hard >= 1);
        base.cardio_explore = cnt("cardio") >= THRESH.cardio;
        base.cardio_quiz = !!(sp.cardio && sp.cardio.count >= 1);
        base.cardio_master = !!(spf.cardio && spf.cardio.hard >= 1);
        base.resp_explore = cnt("respiratory") >= THRESH.respiratory;
        base.resp_quiz = !!(sp.respiratory && sp.respiratory.count >= 1);
        base.resp_master = !!(spf.respiratory && spf.respiratory.hard >= 1);
        base.dig_explore = cnt("digestive") >= THRESH.digestive;
        base.dig_quiz = !!(sp.digestive && sp.digestive.count >= 1);
        base.dig_master = !!(spf.digestive && spf.digestive.hard >= 1);
      } catch (e) {}
      return base;
    };
  }
})();


;(function bxSubpages(){
  if (typeof I18N !== "undefined") {
    var T = {
      ro: { "subpage.back": "Acasă", "subpage.viewSystems": "Vezi toate sistemele", "subpage.viewFeatures": "Vezi toate funcționalitățile" },
      en: { "subpage.back": "Home", "subpage.viewSystems": "See all systems", "subpage.viewFeatures": "See all features" },
      fr: { "subpage.back": "Accueil", "subpage.viewSystems": "Voir tous les systèmes", "subpage.viewFeatures": "Voir toutes les fonctionnalités" },
      de: { "subpage.back": "Startseite", "subpage.viewSystems": "Alle Systeme ansehen", "subpage.viewFeatures": "Alle Funktionen ansehen" },
      es: { "subpage.back": "Inicio", "subpage.viewSystems": "Ver todos los sistemas", "subpage.viewFeatures": "Ver todas las funciones" },
      hu: { "subpage.back": "Kezdőlap", "subpage.viewSystems": "Összes rendszer", "subpage.viewFeatures": "Összes funkció" },
    };
    Object.keys(T).forEach(function (c) { if (I18N[c]) Object.assign(I18N[c], T[c]); });
  }

  function moveGrid(gridSel, targetId) {
    var grid = document.querySelector(gridSel);
    var target = document.getElementById(targetId);
    if (grid && target && grid.parentElement !== target) target.appendChild(grid);
  }
  function injectTeaser(sectionId, openFn, labelKey, label) {
    var sec = document.getElementById(sectionId);
    if (!sec || sec.querySelector(".subpage-teaser-btn")) return;
    var b = document.createElement("button");
    b.className = "subpage-teaser-btn";
    b.setAttribute("onclick", openFn);
    b.innerHTML = '<span data-i18n="' + labelKey + '">' + label + '</span> <span aria-hidden="true">&rarr;</span>';
    sec.appendChild(b);
  }
  function init() {
    moveGrid(".home-systems-grid", "systemsPageGrid");
    moveGrid(".home-features-grid", "featuresPageGrid");
    injectTeaser("sisteme", "openSystemsPage()", "subpage.viewSystems", "Vezi toate sistemele");
    injectTeaser("features", "openFeaturesPage()", "subpage.viewFeatures", "Vezi toate funcționalitățile");
    try { if (typeof applyLanguage === "function" && typeof CUR_LANG !== "undefined") applyLanguage(CUR_LANG); } catch (e) {}
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  function openPage(id) {
    var p = document.getElementById(id);
    if (!p) return;
    var s = document.getElementById("systemsPage");
    var f = document.getElementById("featuresPage");
    if (s) s.classList.remove("active");
    if (f) f.classList.remove("active");
    p.classList.add("active");
    document.body.style.overflow = "hidden";
    p.scrollTop = 0;
    try { document.body.classList.remove("home-menu-open"); } catch (e) {}
  }
  function closePage(id) {
    var p = document.getElementById(id);
    if (p) p.classList.remove("active");
    document.body.style.overflow = "";
  }
  window.openSystemsPage = function () { openPage("systemsPage"); };
  window.closeSystemsPage = function () { closePage("systemsPage"); };
  window.openFeaturesPage = function () { openPage("featuresPage"); };
  window.closeFeaturesPage = function () { closePage("featuresPage"); };


  document.addEventListener("click", function (e) {
    if (!e.target || !e.target.closest) return;
    if (e.target.closest("#systemsPage") && e.target.closest(".system-card")) { closePage("systemsPage"); return; }
    if (e.target.closest("#featuresPage") && e.target.closest(".home-feat-card")) { closePage("featuresPage"); }
  }, true);


  if (typeof window.showHome === "function") {
    var _sh = window.showHome;
    window.showHome = function () {
      try { closePage("systemsPage"); closePage("featuresPage"); } catch (e) {}
      return _sh.apply(this, arguments);
    };
  }
})();
