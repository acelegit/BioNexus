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

function animate() {
  requestAnimationFrame(animate);
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
  document.body.classList.remove("mode-skeleton", "mode-quiz", "mode-muscular");
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
  if (typeof showHome === "function") showHome();
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
  ADMIN_PASS_HASH = await sha256("admin1234");
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
  var sel = document.getElementById("adminBoneSel");
  sel.innerHTML = Object.keys(boneData)
    .map(function (id) {
      return '<option value="' + id + '">' + escapeHTML(boneData[id].name || id) + "</option>";
    })
    .join("");
  sel.onchange = adminLoadBone;
  adminLoadBone();
};
function adminLoadBone() {
  var id = document.getElementById("adminBoneSel").value;
  var d = boneData[id];
  if (!d) return;
  document.getElementById("adminName").value = d.name || "";
  document.getElementById("adminCat").value = d.category || "";
  document.getElementById("adminType").value = d.type || "";
  document.getElementById("adminDesc").value = d.description || "";
  document.getElementById("adminArt").value = d.articulations || "";
  document.getElementById("adminDet").value = d.details || "";
}
window.adminSave = function () {
  if (!ADMIN_AUTHED) return;
  var id = document.getElementById("adminBoneSel").value;
  var d = boneData[id];
  if (!d) return;
  d.name = document.getElementById("adminName").value;
  d.category = document.getElementById("adminCat").value;
  d.type = document.getElementById("adminType").value;
  d.description = document.getElementById("adminDesc").value;
  d.articulations = document.getElementById("adminArt").value;
  d.details = document.getElementById("adminDet").value;
  var ov = JSON.parse(localStorage.getItem("bionexus_bone_overrides") || "{}");
  ov[id] = {
    name: d.name,
    category: d.category,
    type: d.type,
    description: d.description,
    articulations: d.articulations,
    details: d.details,
  };
  localStorage.setItem("bionexus_bone_overrides", JSON.stringify(ov));
  alert("Salvat: " + d.name);
};
window.adminExport = function () {
  if (!ADMIN_AUTHED) return;
  var blob = new Blob([JSON.stringify(boneData, null, 2)], { type: "application/json" });
  var a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "bionexus-bones.json";
  a.click();
};
window.adminReset = function () {
  if (!ADMIN_AUTHED) return;
  if (confirm("Resetezi continutul la valorile implicite?")) {
    localStorage.removeItem("bionexus_bone_overrides");
    location.reload();
  }
};

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


var AI_SYSTEM_PROMPT = "Ești **BioNexus AI**, asistentul biologic și anatomic integrat în platforma educațională BioNexus — o aplicație web de anatomie umană 3D. Ești un tutore cald, încurajator, precis și răbdător: explici clar, pas cu pas, și îl faci pe utilizator să se simtă capabil să învețe. Ești în același timp expert în anatomie/biologie ȘI ghid al aplicației BioNexus.\n\n## REGULI FUNDAMENTALE\n\n**Limbă:** Răspunde ÎNTOTDEAUNA în aceeași limbă în care scrie utilizatorul. Dacă scrie în română → răspunzi în română; dacă scrie în engleză → răspunzi în engleză. Implicit română. Nu comuta limba de la un mesaj la altul decât dacă o face utilizatorul.\n\n**Domeniu (scope):** Ești specializat în (1) anatomia umană și biologie — mai ales sistemele din aplicație: osos, muscular, nervos, cardiovascular, respirator, digestiv — și (2) folosirea platformei BioNexus. Dacă ți se pune o întrebare complet în afara acestor domenii, readu blând discuția spre anatomie/biologie/aplicație, dar rămâi util și scurt (poți răspunde pe scurt, apoi propune ceva relevant din BioNexus).\n\n**Format:** Răspunsurile apar într-o bulă de chat mică ce randează markdown de bază. Fii **concis și ușor de scanat**: propoziții scurte, **bold** (dublu asterisc) pentru termenii-cheie, liste scurte cu liniuțe, treceri la linie nouă. Evită pereții mari de text. NU produce niciodată HTML brut, script-uri sau tabele complexe.\n\n**Onestitate despre funcții:** Nu inventa funcții care nu există. Dacă nu ești sigur de un detaliu exact din interfață, descrie calea generală („din meniul de sus…\", „din cardul…\"). Folosește etichetele reale de UI de mai jos.\n\n**Încurajează folosirea aplicației:** Când e relevant, îndeamnă utilizatorul să exploreze modelul 3D sau o funcție (ex: „poți vedea asta în modelul 3D — deschide **Sistemul Osos** și caută osul în lista din stânga\").\n\n## IDENTITATE\nLa întrebări de tip „cine ești / cum te numești\": „Sunt **BioNexus AI**, asistentul biologic al platformei BioNexus.\" Poți spune că ajuți atât cu anatomie, cât și cu folosirea site-ului.\n\n---\n\n# CUNOAȘTEREA APLICAȚIEI BIONEXUS\n\n## Pagina principală (Acasă)\nBara de sus are: logo **BioNexus** (click → sus), linkuri **Sisteme**, **Funcționalități**, **Învață**, comutator limbă **RO/EN**, buton **Conectare** (sau meniul utilizatorului după logare). Secțiuni, de sus în jos: Hero → Provocarea zilei (vizibilă doar logat) → **Sisteme anatomice** → **Funcționalități** → **Învață** → **Recenzii** → footer. Un **chatbox flotant** (asta ești tu) stă în colțul dreapta-jos pe orice ecran.\n\n## Cele 6 sisteme anatomice și cum le deschizi\nDin secțiunea **Sisteme anatomice**, apeși pe cardul dorit (sau butonul **„Vezi modele 3D\"** din hero te duce acolo):\n- **Sistem Osos** — *Disponibil acum* — 206 oase modelate 3D.\n- **Sistem Muscular** — *Disponibil acum* — peste 350 mușchi.\n- **Sistem Nervos** — *Beta* — creier, măduva spinării, nervi.\n- **Sistem Cardiovascular** — *Beta* — inimă, artere, vene.\n- **Sistem Respirator** — *Beta* — căi aeriene, plămâni, laringe.\n- **Sistem Digestiv** — *Planificat* — **încă indisponibil** (cardul nu se poate deschide).\n\nSe pot deschide 5 sisteme (osos, muscular, nervos, cardiovascular, respirator). Ca să revii Acasă: butonul **„← Înapoi\"** din antet (păstrează poziția) sau click pe logo/**BioNexus** (te duce sus).\n\n## Interacțiunea cu modelul 3D (identică în toate sistemele)\n- **Rotire:** click stânga + trage mouse-ul.\n- **Zoom:** rotița mouse-ului (scroll).\n- **Deplasare (pan):** click dreapta + trage.\n- Pe telefon: un deget rotește, două degete zoom/pan.\n- **Selectare structură:** click stânga pe ea → se colorează, apare numele lângă cursor și se completează panoul de **Informații** din dreapta. Click în gol = deselectează.\n- **Hover:** trecerea cursorului evidențiază structura (numele apare doar la click, nu la hover).\n- **Lista din stânga:** structuri grupate în acordeoane, cu **căutare** (🔍) în timp real; **Enter** selectează prima potrivire. La oase, butonul **🔍 (lupă)** de lângă os selectează ȘI apropie camera.\n- **Tab-uri de filtrare** (bara de sus): la schelet — **Toate Oasele · Scheletul Capului · Scheletul Trunchiului · Membre Superioare · Membre Inferioare**; la mușchi — **Toți Mușchii · Cap & Gât · Trunchi · Membre Superioare · Membre Inferioare**.\n- **Butoane viewer** (dreapta-jos): **↺ Resetează camera**; la schelet și butoane de ascundere a panoului de oase / de informații.\n- Panoul de info: la oase — **Categorie, Tip, Descriere, Articulații, Detalii**; la mușchi — **Denumire, Denumire științifică** (latină), **Descriere, Origine, Inserție, Acțiune, Inervație**; la sistemele Beta — **Structură, Denumire științifică, Sistem, Grupă**. Toate structurile au **nume românesc + nume latin**.\n\n## Quiz / Minigame: „Testul Anatomic\"\nÎl pornești din cardul **„Minigame: Testul Anatomic\"** (buton **„Începe minigame →\"**) sau din chip-ul **„Pornește quiz\"** al meu.\n1. **Alegi sistemul:** **Sistem Osos** sau **Sistem Muscular**.\n2. **Alegi tipul de test:**\n   - **Identifică Osul / Mușchiul** (vizual) — structura e evidențiată cu albastru, alegi numele din 4 variante.\n   - **Test de Cunoștințe** — despre descrieri, articulații, detalii (osos), sau origine/inserție/acțiune/inervație (muscular). La Greu, întrebări din manualele Ștefaneț.\n   - **AI Duel** (doar sistemul osos) — afirmații **ADEVĂRAT/FALS**, unele cu greșeli subtile, cu explicație după răspuns.\n3. **Dificultate:** **Ușor** (fără timer), **Mediu** (timer 25s; Duel 12s), **Greu** (timer 18s; Duel 8s). Dacă timpul expiră, testul se ratează.\n4. **Întrebări:** ~10 (osos), până la 12 (muscular/Duel Greu). +1 punct per răspuns corect; „Sare peste\" = greșit.\n5. **Rezultat & medalii:** 100% 🏆 PERFECT · ≥90% 🥇 Aur · ≥70% 🥈 Argint · ≥50% 🥉 Bronz · <50% 📚 Continuă să înveți. Butonul **„Încearcă din nou\"** te readuce la alegerea sistemului. **× „Ieși din minigame\"** te scoate Acasă.\n6. **XP:** scor × multiplicator (**Ușor ×10, Mediu ×20, Greu ×35**), +5 XP bonus la prima activitate a zilei.\n\n## Profil, XP, niveluri, insigne\n- Deschizi profilul din **meniul utilizatorului** (dreapta-sus) → **Profil** / **Setări**, sau butonul **„Insignele mele\"** din hero. Trebuie să fii conectat.\n- **Nivel:** crește cu rădăcina pătrată a XP: `nivel = floor(√(XP/30)) + 1`. Praguri: nivel 2 la **30** XP, nivel 3 la **120**, nivel 4 la **270**, nivel 5 la **480** XP.\n- **Cum câștigi XP:** os nou văzut **+5**, mușchi nou **+2**, secțiune nouă vizitată **+10**, folosirea chatbotului **+2**, zi nouă activă **+5**, quiz finalizat (scor × multiplicator), provocarea zilnică (**+15…+55**).\n- **Insigne:** **26 în total** (16 generale + 10 pe moduri de quiz). Contorul arată „X / 26\". **PARTENER** 🤝 se deblochează automat la crearea contului. Alte exemple: **PIONIER** (primul quiz), **EXPLORATOR** (50 oase), **ANATOMIST/CHIRURG/LEGENDĂ** (quiz perfect Ușor/Mediu/Greu), **MENTOR** (10 întrebări AI), **CONSTANT** (7 zile la rând), **MIOLOG/SARCOMER** (muscular). Le vezi la **Profil → INSIGNELE MELE**.\n- **Provocarea zilei:** card cu 🔥 streak, task zilnic, bară progres și recompensă XP; o singură provocare pe zi, streak-ul se rupe dacă sari o zi.\n\n## Notebook (Notițe & Marcaje)\nDin cardul **„Notițe & Marcaje\"** (**„Deschide notebook →\"**). Modalul **„Notebook BioNexus\"** 📝: cauți în notițe, filtrezi (**Toate · ⭐ Importante · 🦴 Oase · 💪 Mușchi**) și pe tag-uri. Butonul **„+ Notiță nouă\"** deschide editorul: **Titlu, Categorie** (Os/Mușchi/General), **Subiect, Conținut, Tag-uri, Culoare** și **„Marchează ca important ⭐\"**. Din panoul de info al unui os/mușchi există butonul **„📝 Adaugă notiță\"** care pre-completează. Notițele se salvează **local** pe browser, separat pentru fiecare cont.\n\n## Cont: Conectare / Înregistrare\n- Autentificarea se face cu **adresa de email** (nu username). La înregistrare, parola trebuie să aibă **minim 8 caractere**, plus acord la Termeni și o verificare (captcha).\n- Ai uitat parola? Linkul **„Ai uitat parola?\"** din ecranul de Conectare trimite email de resetare.\n- Din meniul utilizatorului: **Profil, Setări, Deloghează-te**.\n\n## Alte funcții\n- **Curiozități:** cardul **„Curiozități\"** (**„Vezi o curiozitate →\"**) sau scrie-mi „curiozitate\" / „știai\" / „fun fact\" → îți dau un fapt anatomic aleator (fără repetiții).\n- **Calculator IMC:** scrie-mi direct, ex. **„imc 70 1.80\"** (sau „70 kg 180 cm\"). Formula: **IMC = greutate / înălțime²**. Categorii: **<18.5** subponderal · **18.5–24.9** normal · **25–29.9** supraponderal · **≥30** obezitate.\n- **Învață (manuale):** secțiunea **„Învață\"** are 4 manuale oficiale care se deschid în filă nouă: **Anatomia Omului · Vol. I** (osteologie/artrologie/miologie), **Vol. II** (splanhnologie), **Vol. III** (cardiovascular/nervos/organe de simț) de **Ștefaneț**, plus **Barron's · Anatomie și Fiziologie**.\n- **Recenzii:** poți lăsa o recenzie (1–5 stele, min. 10 caractere) după ce te conectezi; o singură recenzie per utilizator.\n- **Teme:** din **Setări → THEME** alegi **Light / Dark / System / Custom** (implicit Dark).\n- **Limbă:** butoanele **RO / EN** din bara de navigare comută tot textul instant.\n\n---\n\n# CUNOAȘTEREA ANATOMICĂ\n\nAi acces la date detaliate, cu **nume românesc + nume latin**. Sursa citată a platformei: **Anatomia Omului – Ștefaneț (3 volume)**.\n\n## Oase (scheletul de 206 oase)\nGrupat pe: **Scheletul Capului** (Neurocraniul 8 oase: frontal, parietal ×2, temporal ×2, occipital, sfenoid, etmoid; Viscerocraniul 14 oase: maxilar ×2, mandibulă, zigomatic, nazal, lacrimal, palatin, vomer, cornete + cei 32 de dinți), **Scheletul Trunchiului** (coloana: 7 cervicale C1–C7 cu Atlas/Axis, 12 toracice, 5 lombare, sacrum, coccis; cutia toracică: stern, 7 perechi coaste adevărate, 3 false, 2 flotante), **Membre Superioare** (claviculă, scapulă, humerus, radius, ulna, 8 carpiene, 5 metacarpiene, 14 falange), **Membre Inferioare** (os coxal, femur, patelă, tibie, fibulă, 7 tarsiene, 5 metatarsiene, 14 falange). Pentru fiecare os poți da: **categorie, tip, descriere funcțională, articulații, detalii**.\n\n## Mușchi\nPeste 350 de mușchi modelați; date detaliate pentru mușchii majori pe 4 grupe (cap & gât, trunchi, membre superioare, membre inferioare), cu **nume RO + latin, origine, inserție, acțiune, inervație** (cu rădăcini spinale). Ex.: **sternocleidomastoidian, maseter** (cel mai puternic masticator), **trapez, pectoral mare, drept abdominal, biceps/triceps brahial, deltoid, latissimus dorsi, fesier mare** (cel mai voluminos mușchi), **cvadriceps** (cel mai mare grup), **croitor/sartorius** (cel mai lung mușchi), **gastrocnemian/solear** (tendonul lui Ahile).\n\n## Cardiovascular / Nervos / Respirator (nume RO + latin)\n- **Cardiovascular:** Aortă (Aorta), Trunchi pulmonar, valve (aortică/mitrală/tricuspidă/pulmonară), Venă cavă superioară/inferioară, artere/vene regionale (carotidă, femurală, renală, iliacă…), apexul cordului.\n- **Nervos:** Creier/encefal (Encephalon), Bulbul olfactiv (Bulbus olfactorius), Măduva spinării (Medulla spinalis), meningele spinale, nervii olfactivi.\n- **Respirator:** Trahee (Trachea), Plămân drept/stâng (Pulmo dexter/sinister), bronhii principale, Diafragm, cartilaje laringiene (tiroid, cricoid, aritenoid, epiglotic…), os hioid.\n\n## Fapte anatomice rapide (răspunsuri scurte și sigure)\n- **Oase:** **206** la adult (~270 la naștere, multe se sudează).\n- **Dinți:** **32** la adult (8 incisivi, 4 canini, 8 premolari, 12 molari).\n- **Coaste:** **12 perechi** (7 adevărate, 3 false, 2 flotante).\n- **Cel mai mare os:** **femurul** (~27% din înălțime).\n- **Cel mai mic os:** **oscioarele urechii medii** — scărița are ~3 mm.\n- **Articulații:** fibroase (suturi craniu), cartilaginoase (vertebre), sinoviale (genunchi, umăr).\n- **Măduva osoasă:** **roșie** (hematopoieză) și **galbenă** (țesut adipos).\n- **Os hioid:** singurul os care nu se articulează direct cu alt os.\n\nCând răspunzi despre un os/mușchi/structură, oferă esențialul (nume RO + latin, funcție, câteva repere) și, dacă ajută, invită utilizatorul să exploreze structura în modelul 3D. Rămâi mereu cald, clar și la obiect.\n";
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
      (mode === "cardio" || mode === "nervous" || mode === "respiratory") &&
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
  var c = window.BIONEXUS_AI;
  return !!(c && c.apiKey && c.baseUrl && typeof fetch !== "undefined" && window.ReadableStream);
}

async function streamAI(messages, onDelta) {
  var cfg = window.BIONEXUS_AI;
  var url = cfg.baseUrl.replace(/\/+$/, "") + "/chat/completions";
  var resp = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: "Bearer " + cfg.apiKey },
    body: JSON.stringify({
      model: cfg.model || "gpt-5.4-mini",
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
    "home.hero.title": 'Toată anatomia umană în <span class="home-hero-grad">3D interactiv</span>',
    "home.hero.sub":
      "Explorează sistematic toate sistemele corpului uman. Acum disponibile: Sistemul Osos cu 206 oase modelate fidel și Sistemul Muscular cu peste 350 mușchi. În curând: nervos, cardiovascular și mai mult.",
    "home.hero.ctaPrimary": "Vezi modele 3D",
    "home.hero.ctaSecondary": "Insignele mele",
    "home.stats.bones": "Oase modelate",
    "home.stats.systems": "Sisteme planificate",
    "home.stats.questions": "Întrebări quiz",
    "home.stats.assistant": "Asistent biologic",
    "home.systems.title": 'Sisteme <span class="home-hero-grad">anatomice</span>',
    "home.systems.sub":
      "Acoperim sistematic toate sistemele corpului uman. Începem cu sistemul osos, dezvoltarea continuă.",
    "home.sys.osos.t": "Sistem Osos",
    "home.sys.osos.d": "206 oase modelate 3D, cap · trunchi · membre, quiz interactiv.",
    "home.sys.muscular.t": "Sistem Muscular",
    "home.sys.muscular.d": "600+ mușchi, grupe musculare, inserții și acțiuni — în lucru.",
    "home.sys.nervos.t": "Sistem Nervos",
    "home.sys.nervos.d": "Creier, măduvă spinării, nervii periferici, traseele neuronale.",
    "home.sys.cardio.t": "Sistem Cardiovascular",
    "home.sys.cardio.d": "Inima, artere, vene, capilare — circulația mare și mică.",
    "home.sys.digestiv.t": "Sistem Digestiv",
    "home.sys.digestiv.d": "Traseu complet: cavitate bucală → esofag → stomac → intestine.",
    "home.sys.respirator.t": "Sistem Respirator",
    "home.sys.respirator.d": "Căi respiratorii, plămâni, alveole, mecanica respirației.",
    "home.sys.badge.ready": "Disponibil acum",
    "home.sys.badge.soon": "În dezvoltare",
    "home.sys.badge.planned": "Planificat",
    "home.features.title": 'Ce poți face cu <span class="home-hero-grad">BioNexus</span>',
    "home.feat.skel.t": "Schelet 3D complet",
    "home.feat.skel.d":
      "Rotește, zoom, explorează fiecare os în detaliu. Toate denumirile în limba română, conform manualelor.",
    "home.feat.skel.cta": "Deschide scheletul &rarr;",
    "home.feat.quiz.t": "Minigame: Testul Anatomic",
    "home.feat.quiz.d":
      "Pune-ți la încercare cunoștințele. Camera te duce automat la fiecare os, identifică răspunsul corect.",
    "home.feat.quiz.cta": "Începe minigame &rarr;",
    "home.feat.ai.t": "Asistent AI Biologic",
    "home.feat.ai.d":
      "Pune întrebări despre orice os sau structură. Răspunsuri instant în chatbox-ul interactiv.",
    "home.feat.struct.t": "Structura osului",
    "home.feat.struct.d":
      "Secțiune transversală interactivă — periost, os compact, spongios, canal medular, măduvă, totul vizibil.",
    "home.feat.search.t": "Căutare rapidă",
    "home.feat.search.d":
      "Tastează orice os și site-ul te duce instant la el. Categorisare pe secțiuni anatomice.",
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
    "view.muscleComplete": "Sistem muscular",
    "view.cardioComplete": "Sistem cardiovascular",
    "view.nervousComplete": "Sistem nervos",
    "view.respComplete": "Sistem respirator",
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
    "admin.sub": "Aici poți edita descrierile, categoriile și detaliile fiecărui os.",
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
    "home.hero.title": 'All of human anatomy in <span class="home-hero-grad">interactive 3D</span>',
    "home.hero.sub":
      "Systematically explore every system of the human body. Now available: the Skeletal System with 206 faithfully modeled bones and the Muscular System with over 350 muscles. Coming soon: nervous, cardiovascular and more.",
    "home.hero.ctaPrimary": "View 3D models",
    "home.hero.ctaSecondary": "My badges",
    "home.stats.bones": "Bones modeled",
    "home.stats.systems": "Planned systems",
    "home.stats.questions": "Quiz questions",
    "home.stats.assistant": "AI assistant",
    "home.systems.title": 'Anatomical <span class="home-hero-grad">systems</span>',
    "home.systems.sub":
      "We are systematically covering every system of the human body. Starting with the skeletal system, more to come.",
    "home.sys.osos.t": "Skeletal System",
    "home.sys.osos.d": "206 bones modeled in 3D, head · trunk · limbs, interactive quiz.",
    "home.sys.muscular.t": "Muscular System",
    "home.sys.muscular.d": "600+ muscles, muscle groups, insertions and actions — in progress.",
    "home.sys.nervos.t": "Nervous System",
    "home.sys.nervos.d": "Brain, spinal cord, peripheral nerves, neural pathways.",
    "home.sys.cardio.t": "Cardiovascular System",
    "home.sys.cardio.d": "Heart, arteries, veins, capillaries — both major and minor circulation.",
    "home.sys.digestiv.t": "Digestive System",
    "home.sys.digestiv.d": "Full path: oral cavity → esophagus → stomach → intestines.",
    "home.sys.respirator.t": "Respiratory System",
    "home.sys.respirator.d": "Airways, lungs, alveoli, the mechanics of breathing.",
    "home.sys.badge.ready": "Available now",
    "home.sys.badge.soon": "In development",
    "home.sys.badge.planned": "Planned",
    "home.features.title": 'What you can do with <span class="home-hero-grad">BioNexus</span>',
    "home.feat.skel.t": "Complete 3D skeleton",
    "home.feat.skel.d":
      "Rotate, zoom, explore each bone in detail. All names in Romanian, conforming to textbooks.",
    "home.feat.skel.cta": "Open the skeleton &rarr;",
    "home.feat.quiz.t": "Minigame: The Anatomy Test",
    "home.feat.quiz.d":
      "Test your knowledge. The camera auto-pans to each bone, identify the correct answer.",
    "home.feat.quiz.cta": "Start minigame &rarr;",
    "home.feat.ai.t": "Biological AI Assistant",
    "home.feat.ai.d":
      "Ask questions about any bone or structure. Instant answers in the interactive chatbox.",
    "home.feat.struct.t": "Bone structure",
    "home.feat.struct.d":
      "Interactive cross-section — periosteum, compact bone, spongy bone, medullary canal, marrow, all visible.",
    "home.feat.search.t": "Quick search",
    "home.feat.search.d":
      "Type any bone name and the site jumps to it instantly. Categorized by anatomical sections.",
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
    "view.muscleComplete": "Muscular system",
    "view.cardioComplete": "Cardiovascular system",
    "view.nervousComplete": "Nervous system",
    "view.respComplete": "Respiratory system",
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
    "admin.sub": "Here you can edit descriptions, categories and details for each bone.",
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
}
window.applyLanguage = applyLanguage;
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
  if (qTime) qTime.innerHTML = "⏱ Timp: " + min + ":" + (sec < 10 ? "0" : "") + sec;
  showQuizStage("quizEnd");
}

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
      a.icon +
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
      "Pune întrebări despre orice os sau structură. Răspunsuri instant în chatbox-ul interactiv.",
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
      "Ask questions about any bone or structure. Instant answers in the interactive chatbox.",
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
    avgCount.textContent = all.length + " " + (all.length === 1 ? "recenzie" : "recenzii");
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
      a.icon +
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
  if (qTime) qTime.innerHTML = "";
  if (typeof showQuizStage === "function") showQuizStage("quizEnd");
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
  if (typeof animate !== "function") return;
  var lastFrame = 0;
  var targetFPS = 45;
  var frameInterval = 1000 / targetFPS;
  var rafId = null;
  function loop(now) {
    rafId = requestAnimationFrame(loop);
    if (now - lastFrame < frameInterval) return;
    lastFrame = now;
    try {
      if (typeof camAnim === "undefined" || !camAnim) controls.update();
      renderer.render(scene, camera);
    } catch (e) {}
  }
  if (typeof animate === "function") {
    cancelAnimationFrame(rafId);
    requestAnimationFrame(loop);
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
  document.getElementById("dailyTask").textContent = ch.text;
  document.getElementById("dailyXp").textContent = "+" + ch.xp;
  document.getElementById("dailyStreakNum").textContent = streak;
  var status = document.getElementById("dailyStatus");
  if (todayState.completed) {
    status.className = "daily-status done";
    status.textContent = "✓ Completat";
  } else {
    status.className = "daily-status pending";
    status.textContent = "În curs";
  }
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
          badge.icon +
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
      MU.renderer.setSize(w, h, false);
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
      if (duelCard) duelCard.style.display = "none";
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
      if (NB_STATE.filter === "bone" && n.category !== "bone") return false;
      if (NB_STATE.filter === "muscle" && n.category !== "muscle") return false;
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
        (nbEn ? (notes.length === 1 ? "note" : "notes") : notes.length === 1 ? "notiță" : "notițe");
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
        var catIc = { bone: "🦴", muscle: "💪", general: "📌" }[n.category] || "📌";
        var catName = { bone: "Os", muscle: "Mușchi", general: "General" }[n.category] || "Note";
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
    "notebook.empty.title": "Nicio notiță încă",
    "notebook.empty.desc":
      "Adaugă prima ta notiță apăsând <b>+ Notiță nouă</b> sau din viewer-ul 3D când selectezi un os sau mușchi.",
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
    "notebook.empty.title": "No notes yet",
    "notebook.empty.desc":
      "Add your first note by pressing <b>+ New note</b> or from the 3D viewer when you select a bone or muscle.",
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
          match: /brain/i,
          tex: "tex_nervous_brain.jpg",
          nrm: "tex_nervous_brain_n.jpg",
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
          tex: "tex_nervous_nerves.jpg",
          ro: "Măduva spinării",
          en: "Spinal cord",
          icon: "\u{1F9B4}",
        },
        {
          key: "nerves",
          match: /_Nervous_mtl_/i,
          tex: "tex_nervous_nerves.jpg",
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
          icon: "\u{1FAC1}",
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
  };
  var STATES = {};

  var EXTRA_NAMES = {
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
      .replace(/_Spinal_Cord_material_\d+$/i, "");
    s = s.replace(/_Lungs-?_\d+$/i, "").replace(/_Lungs-_\d+$/i, "");
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
    S.scene.background = new THREE.Color(cfg.bg);

    var amb = new THREE.AmbientLight(cfg.ambColor, 0.55);
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

    S.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
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
      S.renderer.setSize(w, h, false);
    }
    window.addEventListener("resize", onResize);
    S.resize = onResize;

    function animate() {
      requestAnimationFrame(animate);
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
      cfg.glb,
      function (gltf) {
        S.model = gltf.scene;
        S.scene.add(S.model);
        var box = new THREE.Box3().setFromObject(S.model);
        var c = new THREE.Vector3();
        box.getCenter(c);
        var size = new THREE.Vector3();
        box.getSize(size);
        var maxDim = Math.max(size.x, size.y, size.z);
        var fitDist = (maxDim / 2 / Math.tan((S.camera.fov * Math.PI) / 180 / 2)) * 1.6;
        S.camera.position.set(c.x, c.y + size.y * 0.05, c.z + fitDist);
        S.controls.target.set(c.x, c.y, c.z);
        S.controls.update();
        S._homeCam = { pos: S.camera.position.clone(), target: S.controls.target.clone() };

        S.model.traverse(function (o) {
          if (o.isMesh) {
            var grp = groupForMesh(cfg, o.name || "");
            o.userData._grp = grp;
            if (grp && grp.tex) {
              var tex = makeExtraTex(S, grp.tex);
              var matOpts = {
                map: tex,
                roughness: 0.52,
                metalness: 0.05,
                emissive: new THREE.Color(0),
              };
              if (grp.nrm) {
                matOpts.normalMap = makeExtraTex(S, grp.nrm, true);
              }
              if (grp.translucent) {
                matOpts.transparent = true;
                matOpts.opacity = 0.3;
                matOpts.depthWrite = false;
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

  var origEnter = window.enterApp;
  if (typeof origEnter === "function") {
    window.enterApp = function (mode) {
      var r = origEnter.apply(this, arguments);
      if (mode === "cardio" || mode === "nervous" || mode === "respiratory") {
        document.body.classList.remove(
          "mode-skeleton",
          "mode-quiz",
          "mode-muscular",
          "mode-cardio",
          "mode-nervous",
          "mode-respiratory"
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
      document.body.classList.remove("mode-cardio", "mode-nervous", "mode-respiratory");
      return origGoBack.apply(this, arguments);
    };
  }
  var origShowHome = window.showHome;
  if (typeof origShowHome === "function") {
    window.showHome = function (opts) {
      document.body.classList.remove("mode-cardio", "mode-nervous", "mode-respiratory");
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
