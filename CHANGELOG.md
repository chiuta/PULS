# Jurnal de modificări — PULS

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
