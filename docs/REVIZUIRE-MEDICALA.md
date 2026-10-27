# Revizuire documentară efectuată de Claude (AI), la cerere. NU este validare de specialist medical și nu înlocuiește una.

**Aplicația:** PULS (ghid de prim ajutor, HTML single-file, offline), versiunea revizuită **2.4.0**; corecțiile de mai jos sunt în **2.5.0** · **Data revizuirii:** 2026-10-28 · **Status:** experimental (rămâne).

Acest document **nu declară aplicația „aprobată medical”**. Este o comparație între textul aplicației și ghiduri/surse publice, făcută de un model de limbaj. Nu a participat niciun medic, instructor autorizat, SMURD sau Crucea Roșie. Orice decizie clinică rămâne la un specialist.

## 1. Cum s-a lucrat și limitele (citește întâi)

- Fiecare afirmație concretă din text (secțiunile §1–§29, Modul Urgență, test, glosar) a fost extrasă din codul sursă și comparată cu surse găsite prin căutare web în sesiunea din 2026-10-28. Sursele sunt numerotate S1–S29 în secțiunea 5, cu URL-ul efectiv accesat.
- **Paginile au fost citite printr-un instrument care rezumă automat textul** (nu am citit PDF-urile integral, pagină cu pagină). Citatele și cifrele din tabel pot conține erori de extragere; un specialist trebuie să verifice în textul original.
- Unele ghiduri au fost citite printr-o **oglindă** (S2, S1: copii ale articolelor ERC 2025 pe un site terț) sau prin **rezumatele Resuscitation Council UK** (care sintetizează ghidurile ERC 2025), nu pe site-ul ERC (acesta nu a fost accesibil din sesiune). **ERC 2025 Paediatric Life Support: am citit doar rezumatul (abstract); textul integral nu.** Pentru compresiile la sugar am folosit AHA/AAP 2025 și RCUK 2025.
- **ERC 2025 a scos din domeniu** răcirea arsurilor și clătirea ochiului după substanțe chimice (S2, tabelul 1); pentru acestea am folosit ERC 2015 (vechi), British Burn Association 2018, NHS Wales 111 și British Red Cross, adică surse care **nu sunt** ghidul ERC curent.
- Nu am găsit un **ghid național românesc actual** accesibil online (singurul găsit, al Clinicii ATI Timișoara, e bazat pe ghidurile din **2005**, deci nu l-am folosit). Numerele și serviciile românești (112, 113, Apel 112, TelVerde) s-au verificat doar parțial, din presă/agregatori, nu de pe site-urile oficiale.
- Paginile NHS (nhs.uk) nu au fost accesibile din sesiune; am citat NHS Wales 111 și leaflet-uri ale unor spitale NHS.
- Unde o afirmație nu apare în sursele accesate, verdictul este **NEVERIFICAT**, nu „corect”. Absența unei contradicții nu înseamnă confirmare.
- Testele automate (secțiunea 6) verifică doar funcționarea offline și structura, **nu corectitudinea medicală**.

## 2. Legendă

- **CONCORDĂ** – sursa citată spune același lucru (cifră/ordine).
- **DIFERĂ – corectat** – discrepanță clară față de o sursă citată; modificat minimal în 2.5.0 (cu sursa în CHANGELOG).
- **DIFERĂ – de decis de specialist** – sursele diferă între ele sau cer judecată clinică; **nemodificat**.
- **NEVERIFICAT** – nu am găsit/citit o sursă care să confirme sau să infirme; **nemodificat**.

## 3. Tabel: afirmație din aplicație → sursă → verdict → acțiune

### 3.1 Resuscitare (RCP) și DEA (§1, §3, Modul Urgență, test)

| # | Afirmație din aplicație | Sursă (an) | Verdict | Acțiune |
|---|---|---|---|---|
| 1 | Compresii 100–120/min (adult) | S1 ERC 2025 BLS: „100–120 min-1”; S3 RCUK 2025 | CONCORDĂ | – |
| 2 | Adâncime 5–6 cm la adult | S1 ERC 2025: „at least 5 cm, but not more than 6 cm” | CONCORDĂ | – |
| 3 | Raport 30:2 (adult, salvator instruit) | S1 ERC 2025: „alternate 30 chest compressions with 2 rescue breaths” | CONCORDĂ | – |
| 4 | Pauze sub 10 secunde (compresii) | S1 ERC 2025: întrerupere maximă pentru 2 respirații „should not exceed 10 s”; S4 AHA 2025 Highlights: sub 10 s (copii) | CONCORDĂ | – |
| 5 | Respirație de ~1 secundă | S1 ERC 2025: „about 1 s” | CONCORDĂ | – |
| 6 | Doar compresii continue pentru neinstruiți | S1 ERC 2025 | CONCORDĂ | – |
| 7 | Electrozi DEA: sub claviculă dreaptă + lateral stâng | S1 ERC 2025: poziție „anterior-lateral”; textul exact „sub claviculă” nu apare în sursa citită | CONCORDĂ (în esență) | – |
| 8 | Nu muta persoana de pe pat/canapea, începe acolo | S1 ERC 2025: „should not move a person from a soft surface e.g. bed” | CONCORDĂ | – |
| 9 | Privești pieptul „maximum 10 secunde” | S1 ERC 2025 nu indică secunde (spune doar „assess breathing while waiting for the call”) | NEVERIFICAT (nu contrazis) | de decis de specialist |
| 10 | Gâfâielile (gasping) nu sunt respirație normală | nu apare în textul citat (S1 pe fragmentele extrase) | NEVERIFICAT | de decis de specialist |
| 11 | Rotirea salvatorului la 2 minute | nu am găsit text citat | NEVERIFICAT | de decis de specialist |
| 12 | Gravidă: împingere manuală a uterului spre stânga | S1: „pregnancy: not addressed” în fragmentul citat | NEVERIFICAT | de decis de specialist |
| 13 | „RCP de martor poate dubla sau tripla șansele” | S6 AHA 2025 (comunicat): „may double or triple” | CONCORDĂ | – |
| 14 | „4–6 min până la leziuni fără oxigen” (pagina de start) | nicio sursă-ghid găsită | NEVERIFICAT | de decis de specialist |
| 15 | Mod Urgență: pași 1–4 RCP (verifică, cere 112, compresii, DEA) | consistent cu S1; ordinea exactă nu a fost comparată cu algoritm tipărit | CONCORDĂ (parțial) | – |

### 3.2 Copii și sugari (§3-05, §28, test)

| # | Afirmație din aplicație | Sursă (an) | Verdict | Acțiune |
|---|---|---|---|---|
| 16 | Adâncime ~5 cm copil, ~4 cm sugar (1/3 din torace) | S7 AHA/AAP 2025 Part 6: „at least 1/3 AP diameter … about 4 cm infants, 5 cm children” | CONCORDĂ | – |
| 17 | Ritm 100–120/min la copii/sugari | S7 AHA/AAP 2025 | CONCORDĂ | – |
| 18 | Sugar: două police încolăcite sau podul unei palme = preferat | S7 AHA/AAP 2025 (încolăcit sau „heel of 1 hand”); S4 AHA 2025 Highlights; S8 RCUK 2025 (încolăcit cu doi police) | CONCORDĂ | – |
| 19 | **„Tehnica cu două degete rămâne o variantă acceptată pentru un singur salvator”** (§3-05, §28, explicația din test) | S4 AHA 2025 Highlights: „The long-used 2-finger technique … is no longer recommended”; S7 AHA/AAP 2025: „eliminated”; S8 RCUK 2025: încolăcit „în loc de” două degete (S9 RCUK 2021 încă o permitea) | **DIFERĂ – corectat** | Propoziția a fost scoasă în RO/EN și în celelalte 6 limbi (doar ștergere); textul recomandă acum doar tehnicile preferate. Sursa: S4, S7, S8 |
| 20 | Raport 30:2 pentru un singur salvator laic la copil | S7 AHA/AAP 2025: 30:2 (un salvator), 15:2 (doi) | CONCORDĂ | – |
| 21 | 5 respirații inițiale când cauza e respiratorie (copil) | S9 RCUK 2021: „5 initial breaths”; S7 AHA/AAP 2025: laicii „encouraged to provide breaths”; textul ERC 2025 PLS nu a fost citit | CONCORDĂ (cu sursa 2021) | de verificat în ERC 2025 PLS integral |
| 22 | Febră: sugar sub 3 luni cu ≥38 °C = urgență | S25 (blog LITFL pe baza NICE): sub 3 luni ≥38 °C = risc „roșu” | CONCORDĂ (sursă secundară) | de verificat în NICE NG143 |
| 23 | Convulsie febrilă peste 5 minute | S12 AHA/Crucea Roșie 2024: pentru orice convulsie >5 min se activează EMS | CONCORDĂ | – |
| 24 | Baterii „nasture”, magneți: urgență | nicio sursă consultată | NEVERIFICAT | de decis de specialist |

### 3.3 Sufocare (§4)

| # | Afirmație din aplicație | Sursă (an) | Verdict | Acțiune |
|---|---|---|---|---|
| 25 | Adult/copil >1 an: alternezi 5 lovituri între omoplați cu 5 compresii abdominale | S2 ERC 2025 First Aid; S6 AHA 2025 | CONCORDĂ | – |
| 26 | Obezitate/sarcină: compresii toracice în loc de abdominale | S6 AHA 2025: „if the rescuer cannot encircle the abdomen … five chest thrusts” | CONCORDĂ | – |
| 27 | Sugar: 5 lovituri în spate + 5 compresii toracice, niciodată abdominale | S7 AHA/AAP 2025; S10 RCUK algoritm 2025 | CONCORDĂ | – |
| 28 | Sugar: compresiile toracice „cu două degete” (§4, Mod Urgență, test, glosar) | S6 AHA 2025 comunicat: „heel of one hand”; S10 RCUK 2025 și S9 RCUK 2021: „lower sternum”, fără a impune două degete | DIFERĂ – de decis de specialist | Nemodificat (ghidurile nu spun același lucru despre tehnica de împingere în sufocare) |
| 29 | Nu căuta „orbește” cu degetul | S2 ERC 2025: „no blind finger sweeps”; S7 AHA/AAP 2025: Class 3 Harm | CONCORDĂ | – |
| 30 | Inconștient: RCP, privești în gură înainte de respirații | S10 RCUK 2025 / S7 | CONCORDĂ | – |
| 31 | „A doua cauză de moarte accidentală prevenibilă la copii mici” | nicio sursă | NEVERIFICAT | de decis de specialist |
| 32 | Persoana tușește puternic: încurajează tusea, nu interveni | S2 ERC 2025: „encourage coughing first” | CONCORDĂ | – |
| 33 | După compresii abdominale, evaluare medicală (nu apare în aplicație) | S2 ERC 2025: oricine a primit compresii abdominale să fie evaluat medical | LIPSĂ în aplicație | de decis de specialist dacă se adaugă |

### 3.4 Hemoragie, garou, șoc (§5, §6)

| # | Afirmație din aplicație | Sursă (an) | Verdict | Acțiune |
|---|---|---|---|---|
| 34 | Presiune directă, primul pas | S2 ERC 2025: „firm direct manual pressure” | CONCORDĂ | – |
| 35 | Garou la 5–7 cm deasupra rănii, nu pe articulație | S2 ERC 2025 și S3 RCUK First Aid 2025: „5–7 cm above … not over a joint” | CONCORDĂ | – |
| 36 | Strângi până se oprește sângerarea; notezi ora; nu-l slăbi | S2 ERC 2025: „tighten until bleeding stops, write time, do not release” | CONCORDĂ | – |
| 37 | Presiune „minimum 10–15 minute” | S2 ERC 2025: nicio durată | NEVERIFICAT | de decis de specialist |
| 38 | Ridicarea zonei rănite deasupra inimii | nu apare în sursele citite | NEVERIFICAT | de decis de specialist |
| 39 | Garou improvizat (curea + băț) | nicio sursă citată | NEVERIFICAT | de decis de specialist |
| 40 | Nu scoate obiectul înfipt | nicio sursă citată | NEVERIFICAT | de decis de specialist |
| 41 | Șoc: culcat pe spate, picioarele ridicate 20–30 cm (dacă nu bănuiești leziuni) | S2 ERC 2025: poziție culcat; ridicarea picioarelor „consider … as a temporising measure … not recommended as a routine procedure”; S11 ERC 2015: ridicare pasivă, efect <7 min, semnificație incertă | DIFERĂ – de decis de specialist | Nemodificat (nuanță clinică: aplicația o prezintă ca pas standard; ERC 2025 ca opțiune temporară) |
| 42 | „20–30 cm” | S11 ERC 2015: studii cu 30–60 de grade; nicio valoare în cm | NEVERIFICAT | de decis de specialist |
| 43 | Nu da de mâncare/băut în șoc | nicio sursă citată | NEVERIFICAT | – |

### 3.5 Anafilaxie, AVC, infarct, convulsii, hipoglicemie (§7–§11)

| # | Afirmație din aplicație | Sursă (an) | Verdict | Acțiune |
|---|---|---|---|---|
| 44 | Adrenalină IM pe partea exterioară a coapsei, prin haine | S2 ERC 2025: „intramuscular … outer thigh” | CONCORDĂ | – |
| 45 | **Autoinjector: „ține 3 secunde”** | S13 EpiPen (Viatris, © 2025): „at least 3 full seconds”; S14 Jext (CUH NHS): „at least 10 seconds”; S15 BSACI: EpiPen 3 s, Jext 10 s | **DIFERĂ – corectat** | Textul spune acum 3 s (EpiPen) sau 10 s (Jext), respectiv „urmează instrucțiunile de pe dispozitiv”. Sursele sunt prospecte de produs, nu un ghid de resuscitare |
| 46 | A doua doză „după 5–15 minute” dacă nu se ameliorează | S2 ERC 2025: a doua doză „dacă simptomele persistă la 5 min”; S11 ERC 2015: „5–15 min”; S14 Jext: „5 to 15 minutes” | DIFERĂ – de decis de specialist | Nemodificat (ghidurile diferă; 5 min din ERC 2025 e inclus în intervalul din aplicație) |
| 47 | Poziție: culcat cu picioarele ridicate / așezat dacă respiră greu / stânga la gravide | nicio sursă citată | NEVERIFICAT | de decis de specialist |
| 48 | Reacție bifazică; spital chiar dacă se ameliorează | S12 AHA/Crucea Roșie 2024 (cere activarea EMS); „bifazic” nu e citat | CONCORDĂ (parțial) | – |
| 49 | Testul FAST + sunat 112 + ora debutului | S2 ERC 2025 (FAST/BE-FAST/CPSS); S12 AHA/CR 2024 (FAST) | CONCORDĂ | ERC 2025 menționează și BE-FAST/CPSS (opțional) |
| 50 | AVC: nimic de mâncat/băut | nicio sursă citată | NEVERIFICAT | – |
| 51 | Aspirină 300 mg mestecată, dacă operatorul 112 confirmă | S3 RCUK First Aid 2025: „300 mg, ideally chewable”; S12 AHA 2024: 162–325 mg; S2 ERC 2025: interval 150–500 mg în rezumatul citit; S11 ERC 2015: 150–300 mg | CONCORDĂ | – |
| 52 | Formularea „tabletă necoptă” (RO) | termen medical/limbă: sursele spun „chewable”, nu „uncoated” | DIFERĂ – de decis de specialist | Nemodificat (probabil o eroare de limbă pentru „neacoperită/neprotejată gastric”; traducerile spun „uncoated”) |
| 53 | Convulsii: sună 112 la >5 min, prima criză, crize repetate | S12 AHA/CR 2024: „first-time, >5 minutes, repeated seizures” | CONCORDĂ | – |
| 54 | Nu imobiliza, nimic în gură, poziție de recuperare | S12 AHA/CR 2024 | CONCORDĂ | – |
| 55 | „majoritatea se opresc în 1–3 minute” | nicio sursă citată | NEVERIFICAT | – |
| 56 | Hipoglicemie: zahăr rapid, apoi „așteaptă 10–15 minute” | S2 ERC 2025: 15–20 g glucoză, repetare/recontrol la 15 min | DIFERĂ – de decis de specialist | Nemodificat (10–15 min vs 15 min; diferență mică, judecată clinică) |

### 3.6 Temperatură, înec, intoxicații, arsuri, electricitate (§12–§17)

| # | Afirmație din aplicație | Sursă (an) | Verdict | Acțiune |
|---|---|---|---|---|
| 57 | Hipotermie sub 35 °C | S12 AHA/CR 2024, tabel: „mild 32–35 °C”, „cold stress 35–37 °C” | CONCORDĂ | – |
| 58 | Oprirea tremuratului = semn periculos | S12 AHA/CR 2024, tabel: încetarea tremuratului la hipotermie severă | CONCORDĂ | – |
| 59 | Manevrare blândă; fără frecare/surse directe de căldură | S12 AHA/CR 2024: „heat sources, rubbing, massage should not be applied” | CONCORDĂ | – |
| 60 | Pentru stop cardiac suspectat verifică până la 1 minut | nicio sursă accesată | NEVERIFICAT | de decis de specialist |
| 61 | Degerături: apă 37–39 °C, 20–30 min | S16 WMS 2019: 37–39 °C, „typically within 30 minutes”; S12 AHA/CR 2024: 37–40 °C | CONCORDĂ | – |
| 62 | Nu reîncălzi dacă riscă să reînghețe | S16 WMS 2019 | CONCORDĂ | – |
| 63 | „Durerea apare la reîncălzire — semn bun” | S16 WMS: nu tratează durerea; nicio sursă | NEVERIFICAT | de decis de specialist (afirmație cu interpretare clinică) |
| 64 | Insolație: răcire agresivă cu apă/prosoape/gheață | S2 ERC 2025: imersie în apă rece, gât în jos, până sub 39 °C; fără termometru ~15 min | CONCORDĂ (direcție); aplicația nu menționează imersia | de decis de specialist dacă se adaugă |
| 65 | Înec: 5 respirații inițiale, apoi 30:2 | S17 RCUK Special Circumstances 2025: „start with 5 ventilations” | CONCORDĂ | – |
| 66 | „Aruncă, nu te arunca”, nu scoate apa din plămâni | nicio sursă citată | NEVERIFICAT | – |
| 67 | Intoxicații: nu provoca vărsături; CO: aer curat | nicio sursă citată | NEVERIFICAT | – |
| 68 | Arsuri: 20 min sub apă rece curgătoare | S18 NHS Wales 111: „20 minutes”; S19 British Red Cross: „at least 20 minutes”; S20 BBA 2018: 20 min; S11 ERC 2015: „minimum 10 min”; ERC 2025 nu mai tratează subiectul | CONCORDĂ | – |
| 69 | Fără gheață/unt/pastă de dinți; nu sparge bășicile; nu smulge hainele lipite | S18 NHS Wales; S19 BRC | CONCORDĂ | – |
| 70 | Spital: arsură mai mare decât palma, față/mâini/picioare/genital/articulație, chimică/electrică, albă/carbonizată, copil | S18 NHS Wales: „bigger than the person’s hand”, față/mâini/brațe/picioare/genital, chimic/electric, alb/carbonizat, sub 10 ani | CONCORDĂ (NHS: „mâna”, aplicația: „palma”) | de decis de specialist dacă se uniformizează |
| 71 | Arsuri chimice: minimum 20 min; pudra uscată se îndepărtează întâi | S20 BBA 2018: „at least 20 minutes”, perie pudra | CONCORDĂ | – |
| 72 | Folie alimentară lejer, fără înfășurare circulară | S20 BBA 2018: fâșii longitudinale, nu circumferențial | CONCORDĂ | – |
| 73 | Arsuri solare (răcire, hidratare) | nicio sursă | NEVERIFICAT | – |
| 74 | Electrocutare: întrerupe curentul; obiect uscat neconductor; 10 m de linii căzute | nicio sursă citată | NEVERIFICAT | de decis de specialist |
| 75 | Trăsnet: victimele fără puls/respirație întâi (triaj invers) | S21 Emergency Care BC 2023: „reverse triage” | CONCORDĂ (sursă non-ghid ERC) | – |

### 3.7 Traumatisme, ochi, mușcături (§18–§22)

| # | Afirmație din aplicație | Sursă (an) | Verdict | Acțiune |
|---|---|---|---|---|
| 76 | Fracturi: imobilizezi în poziția găsită; gheață 15–20 min | nicio sursă citată | NEVERIFICAT | de decis de specialist |
| 77 | Coloană: RCP are prioritate; nu mișca persoana | nicio sursă citată | NEVERIFICAT | de decis de specialist |
| 78 | Plăgi/bandaj/amputație (compresă umedă, pungă pe gheață) | nicio sursă citată | NEVERIFICAT | – |
| 79 | Ochi, substanță chimică: clătire 15–20 min | S22 Prevent Blindness 2016: „at least 15 minutes”; S11 ERC 2015: „continuous, large volumes” (fără durată); ERC 2025 a scos subiectul | CONCORDĂ (sursă non-ghid) | de decis de specialist (durata exactă) |
| 80 | Obiect înfipt în ochi: acoperi ambii ochi | nicio sursă citată | NEVERIFICAT | de decis de specialist |
| 81 | **Mușcătură de animal: spală rana cu apă și săpun „minimum 5 minute”** | S23 OMS (fișa „Rabies”): „wash the wound with water and soap for at least 15 minutes”; S24 OMS Rabies Bulletin Europe: „minimum of 15 minutes” | **DIFERĂ – corectat** | „minimum 5 minute” înlocuit cu „minimum 15 minute” în RO/EN și în celelalte 6 limbi (doar numărul) |
| 82 | Albină: răzuiește acul; căpușă: pensetă, trage drept | nicio sursă citată | NEVERIFICAT | – |
| 83 | Șarpe: imobilizează, fără garou/tăiere/supt, sună 112 | S2 ERC 2025: „no tourniquet, no cutting, no sucking; immobilise”; S12 AHA/CR 2024: garoul e „potentially harmful” | CONCORDĂ | – |
| 84 | Șarpe: membrul „la nivelul sau ușor sub nivelul inimii” | nu apare în sursele citite | NEVERIFICAT | de decis de specialist |

### 3.8 Poziția de siguranță, triaj, psihologic, numere (§2, §23, §26, §29)

| # | Afirmație din aplicație | Sursă (an) | Verdict | Acțiune |
|---|---|---|---|---|
| 85 | Poziția de siguranță (pași) | S11 ERC 2015 (poziție laterală; la >30 min întoarcere pe partea opusă); pașii exacți nu au fost comparați | NEVERIFICAT (pași); principiul CONCORDĂ | de decis de specialist |
| 86 | Triaj START: merge → verde; nu respiră → negru; >30/min → roșu; puls radial absent → roșu; nu execută comenzi → roșu; altfel galben | S26 CHEMM: parametrii și cele patru categorii; secvența completă și pragul de 2 s nu au fost confirmate din textul accesat | CONCORDĂ (parțial) | Aplicația nu include JumpSTART pentru copii (nu e afirmat în aplicație) |
| 87 | Prim ajutor psihologic: respirație 4-4-4, „întreabă direct despre suicid” | nicio sursă citată | NEVERIFICAT | de decis de specialist |
| 88 | TelVerde Antisuicid 0800 801 200, gratuit | S27 findahelpline: număr 0800 801 200, apeluri gratuite; e-mail sos@antisuicid.ro | CONCORDĂ (număr, gratuitate) | – |
| 89 | Program „vineri–duminică 19:00–07:00” | nu a fost găsit pe o sursă oficială | NEVERIFICAT | de verificat pe antisuicid.ro |
| 90 | „Apel 112” (STS): apel video cu interpret, chat, Android 13+/iOS 15+ | S28 playtech.ro 2026: apel video cu interpret în limbajul semnelor, chat, interpreți 24/7, Android 13+, iOS 15+ | CONCORDĂ (presă) | – |
| 91 | SMS la 113 cere înregistrare prealabilă | S29 Antena 3 (2015): înscrierea în baza 112 e obligatorie | CONCORDĂ (sursă din 2015; procedura poate fi schimbată) | de verificat la STS |
| 92 | 112 gratuit, fără SIM/credit; eCall | nicio sursă consultată | NEVERIFICAT | – |
| 93 | Trusa de prim ajutor: conținut; verificare la 6–12 luni | nicio sursă citată | NEVERIFICAT | – |

## 4. Rezumat pe categorii (verdicte)

| Categorie (tabelul) | Concordă | Corectat | De decis de specialist | Neverificat |
|---|---|---|---|---|
| 3.1 RCP/DEA adulți | 10 | 0 | 0 | 5 |
| 3.2 Copii/sugari | 7 | 1 | 0 | 1 |
| 3.3 Sufocare | 6 | 0 | 1 | 1 (+1 element lipsă) |
| 3.4 Hemoragie/șoc | 3 | 0 | 1 | 6 |
| 3.5 Anafilaxie/AVC/infarct/convulsii/glicemie | 6 | 1 | 3 | 3 |
| 3.6 Temperatură/înec/arsuri/electricitate | 13 | 0 | 0 | 6 |
| 3.7 Traumatisme/ochi/mușcături | 2 | 1 | 0 | 6 |
| 3.8 Poziție, triaj, psihologic, numere | 4 | 0 | 0 | 5 |
| **Total (93 rânduri)** | **51** | **3** | **5** | **33** (+1 lipsă) |

Un rând „CONCORDĂ (parțial)” sau „(sursă secundară)” e numărat la „concordă”; citește coloana „Sursă” pentru nuanțe. „Concordă” înseamnă potrivire cu sursa accesată, nu validare clinică.

## 5. Surse accesate (URL, an)

Ghiduri și rezumate de ghiduri:

- **S1** ERC Guidelines 2025: Adult Basic Life Support, Smyth et al., *Resuscitation* 215 (2025) 110771 — citit pe oglindă: https://certifico.com/component/attachments/download/45832
- **S2** ERC Guidelines 2025: First Aid, Djärv et al., *Resuscitation* 215 (2025) 110752 — citit pe oglindă: https://certifico.com/component/attachments/download/45824
- **S3** Resuscitation Council UK, Adult BLS Guidelines 2025 (27.10.2025): https://www.resus.org.uk/professional-library/2025-resuscitation-guidelines/adult-basic-life-support-guidelines ; „First Aid Guidelines” 2025 (rezumă ERC 2025 FA): https://www.resus.org.uk/print/pdf/node/36662
- **S4** AHA 2025 Highlights of the Guidelines for CPR and ECC: https://cpr.heart.org/-/media/CPR-Files/2025-documents-for-cpr-heart-edits-posting/Resuscitation-Science/252500_Hghlghts_2025ECCGuidelines.pdf?sc_lang=en
- **S5** ERC Guidelines 2025: Paediatric Life Support, *Resuscitation* 215 Suppl 1:110767 — **doar abstract citit**: https://pubmed.ncbi.nlm.nih.gov/41117571/
- **S6** AHA, „Updated CPR guidelines aim to save more lives” (oct. 2025): https://www.heart.org/en/affiliates/updated-cpr-guidelines-aim-to-save-more-lives
- **S7** 2025 AHA/AAP Guidelines, Part 6: Pediatric Basic Life Support: https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/pediatric-basic-life-support
- **S8** RCUK, „updates baby and child CPR book to reflect 2025 guideline changes”: https://www.resus.org.uk/about-us/news-and-events/rcuk-updates-baby-and-child-cpr-book-reflect-major-2025-guideline-changes
- **S9** RCUK, Paediatric BLS Guidelines (mai 2021): https://resus.org.uk/print/pdf/node/11330
- **S10** RCUK, Paediatric choking algorithm 2025: https://www.resus.org.uk/sites/default/files/2025-10/Paediatric%20choking%20algorithm%202025.pdf
- **S11** ERC Guidelines for Resuscitation 2015, Section 9 First Aid (**ghid vechi**): https://ercguidelines.elsevierresource.com/node/10
- **S12** 2024 AHA and American Red Cross Guidelines for First Aid — Highlights: https://u1-cd-cpr.sc.heart.org/en/-/media/CPR-Files/CPR-Guidelines-Files/2024-Highlights/Highlights-2024-FA-240927.pdf?sc_lang=en ; Top Things to Know: https://professional.heart.org/en/science-news/2024-aha-and-american-red-cross-guidelines-for-first-aid/top-things-to-know ; tabel hipotermie: https://cpr.heart.org/en/resuscitation-science/2024-first-aid-guidelines/tables-and-figures/environmental-emergencies/hypothermia-signs-symptoms
- **S13** EpiPen, „How to use” (Viatris, © 2025): https://www.epipen.com/-/media/files/epipen/howtouseepipenautoinjector.pdf
- **S14** Jext, pagină informații pacient (Cambridge University Hospitals NHS): https://cuh.nhs.uk/patient-information/jext ; Sheffield Teaching Hospitals, leaflet 2018: https://www.sth.nhs.uk/clientfiles/File/epipen.pdf
- **S15** BSACI, Nurses AAI SOCC (fără an): https://www.bsaci.org/wp-content/uploads/2021/10/Nurses-AAI-SOCC.1.pdf
- **S16** Wilderness Medical Society — Frostbite 2019, prin AAFP 2020: https://www.aafp.org/pubs/afp/issues/2020/0401/p440.html
- **S17** RCUK, Special circumstances Guidelines 2025: https://www.resus.org.uk/print/pdf/node/36442
- **S18** NHS Wales 111, Burns and scalds: https://111.wales.nhs.uk/burnsandscalds/
- **S19** British Red Cross, Burns: https://www.redcross.org.uk/first-aid/learn-first-aid/burns
- **S20** British Burn Association, First Aid Clinical Practice Guidelines (2018): https://www.salisbury.nhs.uk/media/kgklfbxt/british-burn-association-first-aid-clinical-practice-guidelines.pdf
- **S21** Emergency Care BC, Lightning injury (actualizat 15.12.2023): https://emergencycarebc.ca/clinical_resource/clinical-summary/lightning-injury/
- **S22** Prevent Blindness, First Aid for Eye Emergencies (FS106, 2016): https://advocacy.preventblindness.org/wp-content/uploads/sites/23/2011/06/FS106_FirstAid.pdf
- **S23** OMS, Rabies (fișă): https://www.who.int/news-room/fact-sheets/detail/rabies
- **S24** WHO Rabies Bulletin Europe, Prevention in humans: https://who-rabies-bulletin.org/member/About_Rabies/Prevention_Humans.aspx
- **S25** LITFL, NICE fever guidelines for kids (blog, secundar): https://litfl.com/nice-fever-guidelines-for-kids/
- **S26** CHEMM, START adult triage algorithm: https://chemm.hhs.gov/startalgotext.htm
- **S27** findahelpline.com, TelVerde Antisuicid: https://findahelpline.com/organizations/telverde-antisuicid
- **S28** Playtech.ro, Apel 112 (2026): https://playtech.ro/2026/apel-112-intra-intr-o-noua-era-localizare-instant-video-chat-si-limbajul-semnelor-direct-din-aplicatie-ce-trebuie-sa-stii-inainte-sa-ai-nevoie-de-ea/
- **S29** Antena 3, primul apel prin 113 (4.11.2015): https://www.antena3.ro/actualitate/apel-de-urgenta-prin-113-snt-322476.html


## 6. Ce s-a modificat în aplicație (2.5.0) și teste

Modificări de conținut, toate minime și cu sursă în `CHANGELOG.md`:

1. Mușcătură de animal: spălare „minimum 5 minute” → „minimum 15 minute” (S23, S24). Toate cele 8 limbi (doar numărul).
2. Sugari: scoasă afirmația că „tehnica cu două degete rămâne o variantă acceptată pentru un singur salvator” (3 locuri: §3-05, nota din §28, explicația întrebării din test) (S4, S7, S8). Toate cele 8 limbi (doar ștergerea propoziției).
3. Autoinjector de adrenalină: „ține 3 secunde” → „3 secunde (EpiPen) sau 10 secunde (Jext)”; în RO/EN și „urmează instrucțiunile de pe dispozitiv” (S13, S14, S15). În §7 și în Modul Urgență. Celelalte 6 limbi au primit doar valorile (3 s / 10 s) cu numele dispozitivelor; **formularea completă „urmează instrucțiunile de pe dispozitiv” lipsește în fr/it/es/pt/de/hu: de revizuit**.
4. Adăugat în aplicație (pagina de start, 8 limbi, tradus automat): „Conținut revizuit documentar de AI față de ghidurile ERC 2025, AHA 2025 și AHA/Crucea Roșie Americană 2024; nu e validat de specialist.” și o intrare în Istoric. Avertizările existente (bara permanentă, linia din Modul Urgență, subsol) nu au fost atinse.

Nemodificat: toate rândurile marcate „de decis de specialist” sau „neverificat”. Nu s-au creat ilustrații medicale.

Teste rulate (2026-10-28), cu `PW_ROOT=/opt/npm-tools/node_modules/` și `CHROMIUM_PATH=/opt/pw-browsers/chromium-1243/chrome-linux64/chrome`:

- `node tests/offline-static.test.mjs`: **34 reușite, 0 eșuate**.
- `node tests/fff-r8.test.mjs`: **52 reușite, 0 eșuate** (fără erori, fără cereri de rețea, fără violări CSP, kit OK). Verificarea „conținutul medical nu s-a schimbat” a fost omisă de test (variabila `PULS_ORIG` nu e setată), în mod intenționat, fiindcă textul s-a schimbat.
- **`axe-core` nu este instalat** în mediu, deci verificările de accesibilitate cu axe nu au rulat.
- Verificare manuală în Chromium (script Playwright, în afara depozitului): noile texte apar în ro, en, fr, de, hu.
- Kit: `fixcsp`, `info`, `check --lax` rulate; hash-urile CSP și `app.json` regenerate.

## 7. Rămâne pentru un specialist (lista scurtă)

1. Sufocare la sugar: tehnica compresiilor toracice (heel of hand vs. două degete) — rândul 28.
2. Poziția de șoc și ridicarea picioarelor — rândurile 41–42.
3. A doua doză de adrenalină: 5 vs. 5–15 minute — rândul 46; poziționarea în anafilaxie — rândul 47.
4. Hipoglicemie: 10–15 vs. 15 minute — rândul 56. „Tabletă necoptă” — rândul 52.
5. Toate rândurile NEVERIFICAT, în special: durata presiunii directe, ridicarea membrului, obiect înfipt, poziția membrului la mușcătura de șarpe, durerea la reîncălzirea degerăturilor, gâfâielile ca semn, uterul la gravidă, clătirea ochiului (15–20 min), fracturi/gheață, coloană, electrocutare (10 m), respirația 4-4-4, întrebarea directă despre suicid, programul TelVerde.
6. Verificarea cu ERC 2025 Paediatric Life Support (text integral), ghidurile ERC 2025 BLS integral și un ghid național românesc actual (Consiliul Român de Resuscitare / Ministerul Sănătății), dacă există.
7. Validare formală (medic, instructor autorizat, SMURD/Crucea Roșie) a întregului conținut, inclusiv a traducerilor automate.

---

# English summary

**Documentary review by Claude (AI), on request. This is NOT validation by a medical specialist and does not replace one. PULS is NOT "medically approved".**

- Scope: PULS v2.4.0 (offline first-aid guide, status "experimental") compared, claim by claim, with public guidelines found by web search on 2026-10-28: ERC 2025 (Adult BLS, First Aid; Paediatric LS abstract only), RCUK 2025 summaries, AHA 2025 and AHA/AAP 2025, AHA/American Red Cross 2024 First Aid, WHO, WMS 2019, NHS Wales / British Red Cross / British Burn Association (burns), product leaflets (adrenaline auto-injectors). Pages were read through an automatic summarising tool, some via mirrors; a specialist must check the originals. No current Romanian national guideline was found online.
- Results: most core numbers match (compression rate 100-120/min, depth 5-6 cm, 30:2, interruptions under 10 s, tourniquet 5-7 cm, choking sequences, burn cooling 20 min, FAST, aspirin 300 mg, seizure 5-minute rule, frostbite rewarming 37-39 C, drowning 5 initial breaths, snakebite do/don't).
- Corrected (v2.5.0, all 8 languages): (1) animal-bite wound washing 5 -> 15 minutes (WHO); (2) removed "two-finger infant compressions remain an accepted option" (AHA/AAP 2025, RCUK 2025); (3) adrenaline auto-injector hold time 3 s -> "3 s (EpiPen) or 10 s (Jext)" (product leaflets). Other languages than ro/en received only the values/deletions; the extra phrase "follow the device instructions" is missing there and flagged "to review".
- Left for a specialist: infant choking chest-thrust technique, leg raising in shock, second adrenaline dose timing (5 vs 5-15 min), hypoglycaemia recheck (10-15 vs 15 min), the Romanian wording "tabletă necoptă", and every item marked "unverified" (e.g. duration of direct pressure, limb elevation, impaled objects, rewarming pain, pregnancy uterine displacement, hotline hours).
- A visible line was added in the app: "Content documentarily reviewed by AI against ERC 2025, AHA 2025 and AHA/American Red Cross 2024; not validated by a specialist." Existing warnings were kept.
- Tests: static offline test 34/34, functional suite 52/52; axe-core not installed (accessibility checks with axe not run); tests do not assess medical correctness.
