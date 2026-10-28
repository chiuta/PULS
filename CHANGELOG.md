# Jurnal de modificări — PULS

## 2.5.1 — 2026-10-28 (anterior: 2.5.0)

Runda a doua a revizuirii documentare făcute de Claude (AI), la cerere: verificarea celor 33 de afirmații „neverificate” și a elementului lipsă. **Nu este validare de specialist medical și nu o înlocuiește**; starea rămâne „experimental”. Tabelul actualizat, cu sursă, an și verdict pe rând: `docs/REVIZUIRE-MEDICALA.md`.

Rezultat: din 33 de afirmații, 23 concordă (unele doar parțial sau față de surse non-ghid), 5 sunt ambigue (sursele diferă), 5 rămân neverificate, 0 diferă clar de un ghid. **Nicio cifră sau afirmație existentă nu a fost modificată.**

Modificări de conținut (toate adăugiri, nu corecturi):

- §4 Sufocare: notă nouă, „După compresii abdominale sau toracice făcute pentru sufocare, persoana trebuie examinată de un medic, chiar dacă își revine complet — pot apărea complicații sau leziuni interne.” Sursă: ERC Guidelines 2025 First Aid (Djärv et al., *Resuscitation* 215, 110752), citit pe oglindă (https://certifico.com/component/attachments/download/45824): „should be evaluated by a healthcare practitioner since complications and injuries may occur”. A doua sursă nu a fost obținută. RO+EN scrise de revizor; fr/it/es/pt/de/hu: traducere automată, **de revizuit**.
- Autoinjector (§7): formularea „urmează instrucțiunile de pe dispozitiv” adăugată în fr/it/es/pt/de/hu (traducere automată, **de revizuit**), ca în ro/en din 2.5.0.
- Intrare nouă în Istoric (8 limbi, tradusă automat).

Surse folosite pentru verdicte (lista completă cu URL în `docs/REVIZUIRE-MEDICALA.md`, S30–S59). Ghiduri: AHA 2025 Adult BLS (https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support: puls maximum 10 s, gâfâieli = stop cardiac, schimbarea compresorului la ~2 min); Crucea Roșie Americană, carduri BLS 2025 (https://guidelines.redcross.org/wp-content/uploads/2025/12/BLS-ADULTS-AND-ADOLESCENTS.pdf, https://guidelines.redcross.org/wp-content/uploads/2025/12/BLS-PREGNANT-PATIENTS.pdf); AHA/Crucea Roșie Americană 2024 First Aid, text integral (https://cpr.heart.org/en/resuscitation-science/2024-first-aid-guidelines: poziția în șoc, înțepături, căpușe, hipoglicemie, a doua doză de adrenalină); RCUK Special Circumstances 2025 (https://www.resus.org.uk/print/pdf/node/36442: hipotermie până la 1 minut, gravidă); ICRC 2025 (https://blogs.icrc.org/app/uploads/sites/99/2026/05/First_Aid-EN.pdf: obiect înfipt); ESPGHAN/NASPGHAN (https://www.espghan.org/dam/jcr:c0ce1a8e-f92e-42a6-9b8a-19863e52aef7/Diagnosis: baterii nasture); Wilderness Medical Society 2024 (https://wms.imiscloud.com/magazine/1503/2024-Drowning-Summary/default.aspx); OMS, Psychological First Aid 2011; Comisia Europeană (https://digital-strategy.ec.europa.eu/en/policies/112, eCall). Surse non-ghid, marcate ca atare în document: MedlinePlus, Mayo Clinic, Crucea Roșie Canadiană și Finlandeză, St John Ambulance, Poison Control, CDC, Better Health Channel, directoare de linii de ajutor.

Limite (detalii în document): instrumentul de citire rezumă și trunchiază paginile (ghidul AHA/Crucea Roșie 2024 a fost citit în două segmente); ERC 2025 a fost citit iar doar prin oglindă și rezumate RCUK, textul integral de pe erc.edu și ILCOR CoSTR nu au fost citite; pagina oficială antisuicid.ro și site-urile STS nu au fost citite.

Nemodificat, de decis de un specialist: tehnica compresiilor toracice la sufocarea sugarului, ridicarea picioarelor în șoc, a doua doză de adrenalină (5 vs 5–15 min; AHA 2024: 5–10 min), hipoglicemie (10 min AHA 2024 / 15 min ERC 2025), „tabletă necoptă”, plus ambiguele (durata presiunii directe, ridicarea membrului, mâncare/băutură în șoc, poziția în anafilaxie, durata crizelor) și cele 5 rămase neverificate. Nu s-au creat ilustrații medicale.

Teste (2026-10-28): `tests/offline-static.test.mjs` 34/34; `tests/fff-r8.test.mjs` 52/52 (verificarea „conținutul medical nu s-a schimbat” omisă intenționat; `axe-core` nu este instalat, deci verificările axe nu au rulat). Verificare manuală în Chromium: nota nouă, formularea autoinjectorului și intrarea din Istoric apar în toate cele 8 limbi. Kit: `fixcsp`, `info`, `check --lax`.

## 2.5.0 — 2026-10-28 (anterior: 2.4.0)

Revizuire documentară făcută de Claude (AI), la cerere. **Nu este validare de specialist medical și nu o înlocuiește**; aplicația nu este „aprobată medical”, starea rămâne „experimental”. Raport complet: `docs/REVIZUIRE-MEDICALA.md` (tabel afirmație -> sursă -> verdict -> acțiune; limite și ce rămâne pentru specialist).

Corecturi de conținut (toate minime; toate cele 8 limbi — pentru fr/it/es/pt/de/hu doar numerele/ștergerile):

- Mușcătură de animal (§22): spălarea rănii cu apă și săpun „minimum 5 minute” -> „minimum 15 minute”. Sursă: OMS, fișa „Rabies” (https://www.who.int/news-room/fact-sheets/detail/rabies) și WHO Rabies Bulletin Europe (https://who-rabies-bulletin.org/member/About_Rabies/Prevention_Humans.aspx): „at least / minimum of 15 minutes”.
- Sugari (§3-05, nota din §28, explicația întrebării din test): scoasă propoziția „tehnica cu două degete rămâne o variantă acceptată pentru un singur salvator”. Surse: AHA 2025 Highlights (https://cpr.heart.org/-/media/CPR-Files/2025-documents-for-cpr-heart-edits-posting/Resuscitation-Science/252500_Hghlghts_2025ECCGuidelines.pdf?sc_lang=en): „The long-used 2-finger technique for infant CPR is no longer recommended”; AHA/AAP 2025 Part 6 (https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-basic-life-support); RCUK 2025 (https://www.resus.org.uk/about-us/news-and-events/rcuk-updates-baby-and-child-cpr-book-reflect-major-2025-guideline-changes).
- Autoinjector de adrenalină (§7 și Modul Urgență): „ține 3 secunde” -> „3 secunde (EpiPen) sau 10 secunde (Jext)”; în ro/en și „urmează instrucțiunile de pe dispozitiv” (în fr/it/es/pt/de/hu lipsește această formulare: de revizuit). Surse (prospecte de produs, nu ghid de resuscitare): EpiPen/Viatris 2025 (https://www.epipen.com/-/media/files/epipen/howtouseepipenautoinjector.pdf): „at least 3 full seconds”; Jext, Cambridge University Hospitals NHS (https://cuh.nhs.uk/patient-information/jext): „at least 10 seconds”.

Adăugat: linia vizibilă pe pagina de start (8 limbi, tradusă automat) „Conținut revizuit documentar de AI față de ghidurile ERC 2025, AHA 2025 și AHA/Crucea Roșie Americană 2024; nu e validat de specialist.” și intrarea din Istoric. Avertizările existente (bara permanentă, linia din Modul Urgență, subsol) nu au fost modificate.

Nemodificat, de decis de un specialist (detalii în `docs/REVIZUIRE-MEDICALA.md`): tehnica compresiilor toracice la sufocarea sugarului, ridicarea picioarelor în șoc, a doua doză de adrenalină (5 vs 5–15 min), hipoglicemie (10–15 vs 15 min), „tabletă necoptă”, plus 33 de afirmații neverificate. Nu s-au creat ilustrații medicale.

Teste (2026-10-28): `tests/offline-static.test.mjs` 34/34; `tests/fff-r8.test.mjs` 52/52 (verificarea „conținutul medical nu s-a schimbat” omisă intenționat; `axe-core` nu este instalat, deci verificările axe nu au rulat). Kit: `fixcsp`, `info`, `check --lax`.

## 2.4.0 — 2026-10-27 (anterior: 2.3.9)

Doar teste/documentație; conținutul medical și comportamentul aplicației nu au fost modificate.

- Test nou `tests/offline-static.test.mjs` (34 de verificări, fără browser): fără API-uri de rețea, fără resurse externe încărcate automat, CSP strict, linkuri externe doar din lista cunoscută, service worker doar pe aceeași origine, avertismentul „nevalidat de specialist / 112” în 8 limbi.
- Nu implementat: ilustrații suplimentare (necesită specialist); validare de medic/SMURD/Crucea Roșie. Starea rămâne „experimental”.

## 2.3.9 — 2026-10-27 (anterior: 2.3.8)

Doar texte de avertizare; conținutul medical nu a fost modificat.

- Bară permanentă „Conținut nevalidat de un specialist … În urgență sună 112” pe toate secțiunile și o linie în Modul Urgență (traduse în 8 limbi; fr/it/es/pt/hu/de automat).
- Verificare statică că aplicația funcționează complet offline (fără fetch/XHR/WebSocket/resurse externe) — documentată în README.
- README: „Stare: experimental”, „Offline”, secțiune despre ce lipsește.
- Nu implementat: validare de medic/SMURD/Crucea Roșie (nu se poate face din cod; nu se pretinde); ilustrații suplimentare pentru poziții (planificat).
