# 🧬 BioNexus — Anatomia umană 3D interactivă

> Explorează toate cele **6 sisteme majore** ale corpului uman în 3D interactiv — cu quiz-uri, **duel online 1v1 în timp real**, asistent AI și interfață în **6 limbi**. Direct din browser, fără instalare.

🌐 **Live:** https://bionexus.ro/ &nbsp;·&nbsp; 💻 **Cod sursă:** https://github.com/acelegit/BioNexus &nbsp;·&nbsp; 📧 **Contact:** bionexusdevs@gmail.com

---

## 1. Descriere generală

**BioNexus** este o platformă web educațională care transformă studiul anatomiei umane dintr-un proces static — bazat pe text și câteva imagini schematice — într-o experiență interactivă, vizuală și tridimensională. Toate cele șase sisteme majore ale corpului — **osos, muscular, nervos, cardiovascular, respirator și digestiv** — pot fi explorate direct în browser: rotite, mărite și studiate structură cu structură, cu denumiri în **română și latină**.

Dincolo de modelele 3D, BioNexus integrează un ecosistem complet de învățare: minigame-uri de tip quiz pentru fiecare sistem, un mod de **duel online 1v1 în timp real** împotriva altui utilizator, un **asistent conversațional AI**, provocări zilnice cu XP și insigne, un carnet de notițe personal, recenzii și o interfață complet tradusă în 6 limbi. Totul rulează direct din browser, fără instalare, pe orice dispozitiv modern.

Proiectul este construit pe o **arhitectură serverless** (Supabase + Cloudflare Pages Functions), fără un server de backend administrat manual, și a trecut printr-un **audit de securitate** urmat de remedieri de nivel de producție.

## 2. Ce diferențiază BioNexus

- **Anatomie completă în 3D**, nu doar scheletul — 6 sisteme reale, modelate și etichetate, nu doar imagini.
- **Multiplayer real** — duel 1v1 în timp real prin canale Supabase Realtime, cu lobby de „ready up", nume de utilizator afișate și scor live. Rar întâlnit într-un proiect educațional.
- **Evaluare instant** — quiz-uri vizuale și de cunoștințe pentru fiecare sistem, plus modul „AI Duel" cu afirmații adevărat/fals.
- **Securitate reală** — cheile API stau exclusiv server-side, scrierile în baza de date sunt protejate prin Row Level Security, iar site-ul livrează headere de securitate stricte (CSP, HSTS etc.).
- **Accesibil oricui** — 6 limbi, responsive complet pe telefon, PWA, fără instalare.

## 3. Funcționalități

### 🦴 Modele 3D interactive
- Cele 6 sisteme majore, fiecare cu modelul său 3D navigabil (rotire, zoom, selectare de structuri).
- Structurile sunt etichetate cu denumiri **RO + latină**; la selectare se afișează un panou de informații.
- Grupare pe secțiuni anatomice, listă laterală de structuri și căutare rapidă.

### 🎮 Minigame-uri (quiz) pentru toate sistemele
- **Identifică structura** — o structură e evidențiată pe model, alegi denumirea corectă din 4 variante.
- **Test de Cunoștințe** — întrebări despre descrieri, relații și detalii, pe 3 niveluri de dificultate (Ușor / Mediu / Greu), inclusiv întrebări din manualele universitare la nivel Greu.
- **AI Duel** — AI-ul propune afirmații despre anatomie, unele corecte, altele cu greșeli subtile; identifici care e adevărată și care falsă (antrenament de gândire critică).
- Ecran de rezultat premium: inel de scor pe niveluri (bronz/argint/aur/perfect), statistici corecte/greșite/timp și buton de reîncercare.

### 🌐 Duel Online 1v1 (timp real)
- Un jucător creează o cameră (cod de 4 caractere), celălalt intră cu codul.
- **Lobby de „ready up"** unde ambii jucători apar cu numele și confirmă că sunt gata.
- Aceleași întrebări pentru ambii, scor live, câștigă cine are mai multe corecte; opțiune de revanșă.
- Comunicare în timp real prin **canale Supabase Realtime (broadcast)** — fără tabele/server dedicat.

### 🤖 Asistent AI — „BioNexus AI"
- Chatbot conversațional care răspunde întrebărilor despre anatomie și despre folosirea platformei.
- Rulează printr-un **proxy server-side securizat** — cheia API nu ajunge niciodată în browser.

### 🔥 Progres și motivație
- **Sistem de niveluri (XP)** — câștigi XP din explorare, quiz-uri, provocări și activitate zilnică; urci în nivel constant (300 XP / nivel), cu bară de progres și „XP până la nivelul următor" afișate în profil.
- **Provocări zilnice** cu XP, streak (zile consecutive), calendar pe 14 zile și buton care te duce direct unde trebuie ca să le completezi.
- **Insigne / achievements** — peste 40 de insigne pentru toate cele 6 sisteme (explorare, primul quiz, quiz Greu perfect, mentor AI, constanță etc.), fiecare acordând XP în funcție de dificultate.
- **Chenare de avatar (avatar borders)** — 10 chenare metalice deblocate progresiv odată cu nivelul (Fier → Argint → Platină → Aur), pe care le alegi din profil și care apar pe avatarul tău la profil, în recenzii și în meniul de utilizator.
- **Profil de utilizator** cu progres sincronizat în cont.

### 📓 Instrumente de studiu
- **Notițe** personale pe orice structură din oricare sistem (marcaje, tag-uri color, căutare).
- **Recenzii** — utilizatorii autentificați pot lăsa o părere.
- **Căutare rapidă**, **curiozități** și acces la **manuale/atlase** oficiale (secțiunea Învață).

### 🌍 Multilingv
- Interfață complet tradusă în **6 limbi**: română, engleză, franceză, germană, spaniolă, maghiară — comutare instant.

### 👤 Cont & administrare
- Autentificare **Supabase Auth** (email + parolă, cu confirmare pe email); notificare de bun venit la login.
- **Mod administrator** protejat prin parolă, pentru editarea conținutului (structuri, descrieri, prompt AI).

### 📱 Mobil & PWA
- Responsive complet: meniu hamburger, sertar de structuri, controale adaptate atingerii.
- PWA (manifest + optimizări) — poate fi „instalat" pe ecranul de start și încarcă rapid.

## 4. Arhitectură tehnică

BioNexus folosește un model **serverless** (fără server de backend gestionat manual):

- **Frontend static** — HTML, CSS și JavaScript vanilla (fără framework UI), cu randare 3D prin **Three.js (r128)** (`GLTFLoader` + `DRACOLoader`).
- **Cloudflare Pages** — găzduiește frontend-ul static, cu CDN global și HTTPS automat.
- **Cloudflare Pages Functions** — expun un endpoint `/api/chat`, un **proxy securizat** către modelul AI: cheia stă doar server-side, într-o variabilă de mediu.
- **Supabase** — platforma de date:
  - **Auth** (email/parolă cu confirmare pe email);
  - **Postgres** cu **Row Level Security** pentru profiluri și recenzii;
  - **Storage** pentru avataruri;
  - **Realtime (broadcast)** pentru duelul online 1v1.
- **Modele 3D** — fișiere GLB; cele non-schelet sunt **comprimate cu Draco** (decodor încărcat din CDN), pentru transfer minim.
- **i18n** — sistem propriu (`I18N` + `applyLanguage`) cu 6 limbi, aplicat prin atribute `data-i18n`.

## 5. Arhitectură de securitate

Proiectul a trecut printr-un audit de securitate (black-box) și implementează remedierile corespunzătoare:

- **Fără chei secrete în client** — cheia AI stă exclusiv server-side (proxy Cloudflare Function); cheia Supabase din client este de tip *publishable* (publică prin design). Securitatea reală a datelor stă în politicile Row Level Security.
- **Row Level Security** — fiecare utilizator poate citi/scrie doar propriul profil; verificarea disponibilității unui username se face printr-o funcție `SECURITY DEFINER` (RPC) care întoarce doar `true/false`, fără a expune date.
- **Headere de securitate** (fișier `_headers`) — **Content-Security-Policy**, **HSTS**, **X-Frame-Options: DENY**, **Permissions-Policy**, `X-Content-Type-Options`, `Referrer-Policy`.
- **Subresource Integrity (SRI)** + versiuni fixate pe scripturile încărcate din CDN.
- **Proxy AI protejat** — restricționare de origini (allowlist), CORS strict, plus opțiuni de Turnstile / autentificare activabile din configurare.
- **Storage** — dezactivarea listării anonime a bucket-ului de avataruri, păstrând accesul public doar la obiectele individuale.
- **XSS mitigat** — escapare a input-ului utilizatorului și a conținutului randat (recenzii, răspuns AI).

## 6. Tehnologii folosite

- **Frontend:** HTML5, CSS3, JavaScript (vanilla, fără framework)
- **3D:** Three.js (r128) — GLTFLoader, DRACOLoader (compresie Draco)
- **Modelare 3D & grafică:** Blender (pregătire, curățare și optimizare a modelelor 3D), Adobe Photoshop (texturi și elemente grafice)
- **Hosting & serverless:** Cloudflare Pages + Cloudflare Pages Functions (Node.js)
- **Backend-as-a-Service:** Supabase — Auth, Postgres (RLS), Storage, Realtime
- **AI:** model lingvistic (LLM) prin proxy server-side securizat
- **Securitate:** CSP / HSTS / SRI, RLS + RPC `SECURITY DEFINER`
- **PWA / SEO:** Web App Manifest, Open Graph, JSON-LD, `robots.txt`, pagină 404 custom

## 7. Performanță

- **Modele Draco** — cele 5 modele non-schelet comprimate cu Draco (~−84% dimensiune totală), pentru încărcare rapidă.
- **Render-loop gating** — buclele de randare 3D sunt puse în pauză pentru sistemele care nu sunt vizibile (fila ascunsă sau alt sistem activ), reducând consumul de resurse.
- **Site 100% static** servit prin CDN global.

## 8. Public țintă

- Elevi de gimnaziu și liceu (inclusiv pregătire pentru examene)
- Studenți la medicină / biologie și pasionați de anatomie
- Profesori care vor un instrument vizual și interactiv la clasă

## 9. Cerințe de sistem

- **Acces:** orice browser modern (Chrome, Firefox, Safari, Edge), pe desktop sau mobil — https://bionexus.ro/
- **Conexiune internet:** necesară pentru autentificare, sincronizarea progresului, duelul online și asistentul AI
- **Instalare:** niciuna — rulează integral în browser

## 10. Echipă

Proiect realizat de **Ryan Dobrota** și **Gheorghe Alexandru**, elevi în clasa a **XI-a A** la **Colegiul Național „Tudor Vladimirescu", București** — concept, modelare și integrare 3D, front-end, back-end serverless, securitate și internaționalizare.

📧 bionexusdevs@gmail.com &nbsp;·&nbsp; 🌐 https://bionexus.pages.dev
