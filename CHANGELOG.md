# Jurnal de modificări — PULS

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
