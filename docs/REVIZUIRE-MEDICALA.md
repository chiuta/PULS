# Revizuire documentară efectuată de Claude (AI), la cerere. NU este validare de specialist medical și nu înlocuiește una.

**Aplicația:** PULS (ghid de prim ajutor, HTML single-file, offline). Runda 1: versiunea revizuită **2.4.0**, corecțiile în **2.5.0**. Runda 2 (verificarea celor 33 de afirmații neverificate și a elementului lipsă): modificările în **2.5.1** · **Data revizuirii:** 2026-10-28 · **Status:** experimental (rămâne).

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

### 1.1 Runda 2 (2.5.1): cum s-au verificat cele 33 de afirmații neverificate și limitele ei

- Fiecare afirmație neverificată a fost căutată cu WebSearch; au fost citite (WebFetch) doar URL-uri returnate de căutare. Sursele noi sunt S30–S59, fără S36 și S57 (secțiunea 5; pentru WMS 2019 s-a recitit S16).
- **Instrumentul de citire rezumă automat paginile și le trunchiază.** Pagina ghidului AHA/ARC 2024 (S33) are ~130.000 de caractere; am citit-o în două segmente (0–100.000 și 100.000–130.000), cu întrebări țintite, deci o recomandare ratată de rezumator poate exista. Citatele pot conține erori de extragere; „absent” înseamnă „nu apare în ce a returnat instrumentul”, nu „nu există în ghid”.
- **ERC 2025 a fost citit din nou doar prin oglinda terță (S1, S2) și prin rezumate RCUK.** Pagina erc.edu a fost accesibilă doar ca index (fără text integral pe secțiuni); linkul către ghidul integral apărea doar în conținutul paginii, nu într-un rezultat de căutare, deci **nu a fost deschis**. ERC 2025 Paediatric Life Support: iarăși doar abstractul (PubMed). Nu s-au deschis ILCOR CoSTR integral (doar pagini de prezentare fără rezultate) și nici IFRC.
- Mai multe sunt **surse non-ghid** (MedlinePlus, Mayo Clinic, Crucea Roșie Canadiană și Finlandeză, St John Ambulance, Poison Control, CDC, directoare de linii de ajutor). Ele sunt marcate astfel în coloana „Verdict”. Un verdict „CONCORDĂ (sursă non-ghid)” nu e la fel de tare ca unul față de ERC/AHA.
- Pagina oficială antisuicid.ro, site-urile STS și orice ghid românesc nu au fost citite. Pagina NHS 111 Wales despre sufocare a dat 404.
- **Rezultat:** nicio discrepanță clară nouă față de surse de nivel ghid, deci **nu s-a corectat nimic** în conținut, cu excepția completării elementului lipsă (rândul 33) și a formulării din 6 limbi (secțiunea 6). Ce e ambiguu a rămas nemodificat.

## 2. Legendă

- **CONCORDĂ** – sursa citată spune același lucru (cifră/ordine).
- **DIFERĂ – corectat** – discrepanță clară față de o sursă citată; modificat minimal în 2.5.0 (cu sursa în CHANGELOG).
- **DIFERĂ – de decis de specialist** – sursele diferă între ele sau cer judecată clinică; **nemodificat**.
- **NEVERIFICAT** – nu am găsit/citit o sursă care să confirme sau să infirme; **nemodificat**.
- **AMBIGUU** (runda 2) – am găsit surse, dar diferă între ele sau nu se potrivesc exact cu afirmația; cere judecată clinică; **nemodificat**, rămâne „de decis de specialist”.
- **CONCORDĂ (parțial / sursă non-ghid)** – potrivire cu o sursă accesibilă, dar nu cu un ghid ERC/AHA/ILCOR sau doar pentru o parte din afirmație; nuanța e în coloana „Sursă”.

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
| 9 | Privești pieptul „maximum 10 secunde” | S30 AHA 2025 Adult BLS (COR 1): „no more than 10 s” la verificarea pulsului; S31 Crucea Roșie Americană 2025, card BLS: „at least 5 but no more than 10 seconds”; ERC 2025 (S1) nu indică secunde | CONCORDĂ (AHA 2025, ARC 2025) | Notă: ERC 2025 nu dă limită de timp (nu contrazice) |
| 10 | Gâfâielile (gasping) nu sunt respirație normală | S30 AHA 2025 (COR 1): „absent or abnormal breathing (ie, only gasping) … assume cardiac arrest”; S1 ERC 2025: „agonal gasping … must be recognised as signs of cardiac arrest”; S3 RCUK 2025: aceeași formulare | CONCORDĂ | – |
| 11 | Rotirea salvatorului la 2 minute | S30 AHA 2025 (COR 2a, B-R): „it is reasonable to switch chest compressors approximately every 2 min”; ERC 2025 și RCUK 2025 (S1, S3): nu menționează intervalul | CONCORDĂ (AHA 2025) | – |
| 12 | Gravidă: împingere manuală a uterului spre stânga | S3/S17 RCUK 2025 Special Circumstances: „Above 20 weeks gestation, relieve aortocaval compression as early as possible and maintain it throughout resuscitation”, deplasarea manuală a uterului spre stânga preferată înclinării laterale; S32 Crucea Roșie Americană 2025, card BLS gravide: LUD continuă, manuală, „pull the uterus to the left and up” / „push the uterus to the left and up” | CONCORDĂ | – |
| 13 | „RCP de martor poate dubla sau tripla șansele” | S6 AHA 2025 (comunicat): „may double or triple” | CONCORDĂ | – |
| 14 | „4–6 min până la leziuni fără oxigen” (pagina de start) | ERC 2025 BLS (S1, mirror): „ischaemic injury”, fără interval de timp; nicio sursă-ghid găsită pentru „4–6 min” (doar bloguri comerciale, necitate) | NEVERIFICAT (neschimbat) | de decis de specialist |
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
| 24 | Baterii „nasture”, magneți: urgență | S41 ESPGHAN/NASPGHAN 2020 (poziție, baterii): „Presence of a BB in the esophagus is considered to be a medical emergency”, îndepărtare endoscopică „if possible within 2 hours”; coingestia de magnet cu baterie e indicație de endoscopie; S42 CMAJ 2021 („Five things to know”). Magneți multipli fără baterie: nu sunt tratați în sursele citite | CONCORDĂ (baterii); magneți multipli neconfirmați | de decis de specialist (partea cu magneții) |

### 3.3 Sufocare (§4)

| # | Afirmație din aplicație | Sursă (an) | Verdict | Acțiune |
|---|---|---|---|---|
| 25 | Adult/copil >1 an: alternezi 5 lovituri între omoplați cu 5 compresii abdominale | S2 ERC 2025 First Aid; S6 AHA 2025 | CONCORDĂ | – |
| 26 | Obezitate/sarcină: compresii toracice în loc de abdominale | S6 AHA 2025: „if the rescuer cannot encircle the abdomen … five chest thrusts” | CONCORDĂ | – |
| 27 | Sugar: 5 lovituri în spate + 5 compresii toracice, niciodată abdominale | S7 AHA/AAP 2025; S10 RCUK algoritm 2025 | CONCORDĂ | – |
| 28 | Sugar: compresiile toracice „cu două degete” (§4, Mod Urgență, test, glosar) | S6 AHA 2025 comunicat: „heel of one hand”; S10 RCUK 2025 și S9 RCUK 2021: „lower sternum”, fără a impune două degete | DIFERĂ – de decis de specialist | Nemodificat (ghidurile nu spun același lucru despre tehnica de împingere în sufocare) |
| 29 | Nu căuta „orbește” cu degetul | S2 ERC 2025: „no blind finger sweeps”; S7 AHA/AAP 2025: Class 3 Harm | CONCORDĂ | – |
| 30 | Inconștient: RCP, privești în gură înainte de respirații | S10 RCUK 2025 / S7 | CONCORDĂ | – |
| 31 | „A doua cauză de moarte accidentală prevenibilă la copii mici” | S58 CDC MMWR 2002 („160 children aged <14 years died from obstruction of the respiratory tract”, fără clasament); S58 St John Ambulance 2026: fără clasament; pagina RCUK „Choking”: fără clasament | NEVERIFICAT (neschimbat) | de decis de specialist (afirmația „a doua cauză” nu a putut fi confirmată; nu e infirmată) |
| 32 | Persoana tușește puternic: încurajează tusea, nu interveni | S2 ERC 2025: „encourage coughing first” | CONCORDĂ | – |
| 33 | După compresii abdominale, evaluare medicală (**lipsea** din aplicație până la 2.5.0) | S2 ERC 2025 First Aid: persoana tratată cu compresii „should be evaluated by a healthcare practitioner since complications and injuries may occur” / „should therefore be examined by a healthcare practitioner”. A doua sursă nu a fost obținută (pagina NHS 111 Wales a dat 404) | ADĂUGAT în 2.5.1 (o propoziție, RO+EN; traducere automată în celelalte 6 limbi) | Notă nouă la finalul §4 |

### 3.4 Hemoragie, garou, șoc (§5, §6)

| # | Afirmație din aplicație | Sursă (an) | Verdict | Acțiune |
|---|---|---|---|---|
| 34 | Presiune directă, primul pas | S2 ERC 2025: „firm direct manual pressure” | CONCORDĂ | – |
| 35 | Garou la 5–7 cm deasupra rănii, nu pe articulație | S2 ERC 2025 și S3 RCUK First Aid 2025: „5–7 cm above … not over a joint” | CONCORDĂ | – |
| 36 | Strângi până se oprește sângerarea; notezi ora; nu-l slăbi | S2 ERC 2025: „tighten until bleeding stops, write time, do not release” | CONCORDĂ | – |
| 37 | Presiune „minimum 10–15 minute” | S38 Hong Kong FSD (pompieri): „continuously for 5 to 10 minutes”; S37 Victoria Health (rev. 19.11.2025): „Hold for at least 10 minutes” (doar epistaxis); S2 ERC 2025, S33 AHA/ARC 2024, S34 ICRC 2025: nicio durată | AMBIGUU (nicio sursă-ghid; surse secundare 5–10 min, aplicația 10–15) | de decis de specialist |
| 38 | Ridicarea zonei rănite deasupra inimii | S11 ERC 2015: „Do not try to control major external bleeding by the use of proximal pressure points or elevation of an extremity”; S35 ILCOR 2015 (prin ACEP Now 2016): „inadequate evidence” pentru elevație; S37 Victoria Health 2025 și S40 MedlinePlus (amputare, rev. 8/2024): „raise the injured area above the level of the heart (if possible)”; ERC 2025, AHA 2020/2024: nu abordează | AMBIGUU (sursele diferă; ERC 2015 vizează hemoragia majoră „în loc de” presiune, aplicația o prezintă ca măsură suplimentară) | de decis de specialist; nemodificat |
| 39 | Garou improvizat (curea + băț) | S2 ERC 2025: garourile industriale „achieved better arterial occlusion” decât cele improvizate; nicio metodă improvizată descrisă în ERC 2025, ICRC 2025 (S34) sau AHA/ARC 2024; S37 Victoria Health: „Do not apply a tourniquet” (sursă non-ghid, context diferit) | NEVERIFICAT (ERC 2025 spune doar că cele improvizate sunt mai puțin eficiente) | de decis de specialist |
| 40 | Nu scoate obiectul înfipt | S34 ICRC, „First Aid in an Emergency” (ian. 2025): „Do not remove the foreign object … Immobilize the object by putting compresses or a clean cloth around it”; S37 Victoria Health 2025: „If an object is embedded in the wound, do not remove it”; S38 HK FSD | CONCORDĂ | – |
| 41 | Șoc: culcat pe spate, picioarele ridicate 20–30 cm (dacă nu bănuiești leziuni) | S2 ERC 2025: poziție culcat; ridicarea picioarelor „consider … temporising”; S33 AHA/ARC 2024 §5.2: supin (2a), picioare ridicate 6–12 in „may be reasonable” (2b); S11 ERC 2015: efect <7 min; S56 St John Ambulance UK (2025): ridicare pe scaun; St John Australia (2022): „Do not raise their legs” | DIFERĂ – de decis de specialist (sursele diferă între ele) | Nemodificat (nuanță clinică: aplicația o prezintă ca pas standard; ERC 2025 și AHA 2024 ca opțiune) |
| 42 | „20–30 cm” | S33 AHA/ARC 2024 §5.2 (2b): „raising the feet about 6 to 12 in (≈30°–45°)”, adică ~15–30 cm; intervalul 20–30 cm din aplicație se încadrează (conversia în cm: a revizorului) | CONCORDĂ (în intervalul AHA 2024) | –; recomandarea în sine rămâne la rândul 41 |
| 43 | Nu da de mâncare/băut în șoc | S56 Crucea Roșie Finlandeză: „Do not offer anything to eat or drink”; S34 ICRC 2025: „Offer clean liquids to drink (but only if the casualty is fully responsive)” (context neclar); St John Australia 2022: sorbituri de apă dacă e conștient; St John Ambulance UK: nu abordează | AMBIGUU (sursele diferă) | de decis de specialist; nemodificat |

### 3.5 Anafilaxie, AVC, infarct, convulsii, hipoglicemie (§7–§11)

| # | Afirmație din aplicație | Sursă (an) | Verdict | Acțiune |
|---|---|---|---|---|
| 44 | Adrenalină IM pe partea exterioară a coapsei, prin haine | S2 ERC 2025: „intramuscular … outer thigh” | CONCORDĂ | – |
| 45 | **Autoinjector: „ține 3 secunde”** | S13 EpiPen (Viatris, © 2025): „at least 3 full seconds”; S14 Jext (CUH NHS): „at least 10 seconds”; S15 BSACI: EpiPen 3 s, Jext 10 s | **DIFERĂ – corectat** | Textul spune acum 3 s (EpiPen) sau 10 s (Jext), respectiv „urmează instrucțiunile de pe dispozitiv”. Sursele sunt prospecte de produs, nu un ghid de resuscitare |
| 46 | A doua doză „după 5–15 minute” dacă nu se ameliorează | S2 ERC 2025: a doua doză „dacă simptomele persistă la 5 min”; S33 AHA/ARC 2024 §6.5 (2b, B-NR): doză repetată poate fi luată în considerare dacă sosirea EMS „will exceed 5 to 10 minutes”; S11 ERC 2015: „5–15 min”; S14 Jext: „5 to 15 minutes” | DIFERĂ – de decis de specialist | Nemodificat (ghidurile diferă; 5 min din ERC 2025 e inclus în intervalul din aplicație) |
| 47 | Poziție: culcat cu picioarele ridicate / așezat dacă respiră greu / stânga la gravide | S2 ERC 2025: „Ensure that the person remains in a seated or lying position”; în fundal: culcat cu picioarele ridicate sau așezat cu picioarele întinse dacă respirația e afectată; S33 AHA/ARC 2024 §6.5: nicio recomandare de poziție; partea „pe stânga la gravide”: nu a fost găsită într-o sursă | AMBIGUU (parțial concordă: culcat/așezat; stânga la gravide neconfirmat) | de decis de specialist |
| 48 | Reacție bifazică; spital chiar dacă se ameliorează | S12 AHA/Crucea Roșie 2024 (cere activarea EMS); „bifazic” nu e citat | CONCORDĂ (parțial) | – |
| 49 | Testul FAST + sunat 112 + ora debutului | S2 ERC 2025 (FAST/BE-FAST/CPSS); S12 AHA/CR 2024 (FAST) | CONCORDĂ | ERC 2025 menționează și BE-FAST/CPSS (opțional) |
| 50 | AVC: nimic de mâncat/băut | S55 ICSI 2010 (ghid spitalicesc, via ASHA Evidence Maps): bedside swallow test „prior to the ingestion of anything by mouth, including medications”; nu e ghid de prim ajutor pentru public | CONCORDĂ (parțial; principiu dintr-un ghid spitalicesc din 2010) | – |
| 51 | Aspirină 300 mg mestecată, dacă operatorul 112 confirmă | S3 RCUK First Aid 2025: „300 mg, ideally chewable”; S12 AHA 2024: 162–325 mg; S2 ERC 2025: interval 150–500 mg în rezumatul citit; S11 ERC 2015: 150–300 mg | CONCORDĂ | – |
| 52 | Formularea „tabletă necoptă” (RO) | termen medical/limbă: sursele spun „chewable”, nu „uncoated” | DIFERĂ – de decis de specialist | Nemodificat (probabil o eroare de limbă pentru „neacoperită/neprotejată gastric”; traducerile spun „uncoated”) |
| 53 | Convulsii: sună 112 la >5 min, prima criză, crize repetate | S12 AHA/CR 2024: „first-time, >5 minutes, repeated seizures” | CONCORDĂ | – |
| 54 | Nu imobiliza, nimic în gură, poziție de recuperare | S12 AHA/CR 2024 | CONCORDĂ | – |
| 55 | „majoritatea se opresc în 1–3 minute” | S54 CDC (2025): „Most seizures last just a few minutes”; S54 epi.ch (2023): „usually lasts one to two minutes”; aplicația: 1–3 minute | AMBIGUU (formulări apropiate, nu identice) | nemodificat |
| 56 | Hipoglicemie: zahăr rapid, apoi „așteaptă 10–15 minute” | S2 ERC 2025: 15–20 g glucoză, repetare dacă simptomele persistă „after 15 min”; S33 AHA/ARC 2024 §6.7 (clasa 1): EMS dacă nu se ameliorează „within 10 minutes of oral glucose administration” | DIFERĂ – de decis de specialist | Nemodificat (10 min AHA 2024, 15 min ERC 2025; intervalul 10–15 din aplicație le include pe ambele) |

### 3.6 Temperatură, înec, intoxicații, arsuri, electricitate (§12–§17)

| # | Afirmație din aplicație | Sursă (an) | Verdict | Acțiune |
|---|---|---|---|---|
| 57 | Hipotermie sub 35 °C | S12 AHA/CR 2024, tabel: „mild 32–35 °C”, „cold stress 35–37 °C” | CONCORDĂ | – |
| 58 | Oprirea tremuratului = semn periculos | S12 AHA/CR 2024, tabel: încetarea tremuratului la hipotermie severă | CONCORDĂ | – |
| 59 | Manevrare blândă; fără frecare/surse directe de căldură | S12 AHA/CR 2024: „heat sources, rubbing, massage should not be applied” | CONCORDĂ | – |
| 60 | Pentru stop cardiac suspectat verifică până la 1 minut | S17 RCUK Special Circumstances 2025: „Check vital signs for up to 1 min in an unconscious hypothermic patient” | CONCORDĂ | – |
| 61 | Degerături: apă 37–39 °C, 20–30 min | S16 WMS 2019: 37–39 °C, „typically within 30 minutes”; S12 AHA/CR 2024: 37–40 °C | CONCORDĂ | – |
| 62 | Nu reîncălzi dacă riscă să reînghețe | S16 WMS 2019 | CONCORDĂ | – |
| 63 | „Durerea apare la reîncălzire — semn bun” | S16 WMS 2019 (via AAFP): nu tratează durerea ca semn; recomandă ibuprofen în teren; S33 AHA/ARC 2024: ibuprofen pentru durerea din degerături (2b). Interpretarea „semn bun” nu apare în surse | NEVERIFICAT (neschimbat) | de decis de specialist (afirmație cu interpretare clinică) |
| 64 | Insolație: răcire agresivă cu apă/prosoape/gheață | S2 ERC 2025: imersie în apă rece, gât în jos, până sub 39 °C; fără termometru ~15 min | CONCORDĂ (direcție); aplicația nu menționează imersia | de decis de specialist dacă se adaugă |
| 65 | Înec: 5 respirații inițiale, apoi 30:2 | S17 RCUK Special Circumstances 2025: „start with 5 ventilations” | CONCORDĂ | – |
| 66 | „Aruncă, nu te arunca”, nu scoate apa din plămâni | S43 Wilderness Medical Society 2024 (înec): salvare doar dintr-un loc sigur, „reaching, throwing, or rowing”; „Abdominal thrusts (formerly the ‘Heimlich maneuver’) are not recommended at any time”; S2 ERC 2025: 5 respirații de salvare | CONCORDĂ | – |
| 67 | Intoxicații: nu provoca vărsături; CO: aer curat | S44 Poison Control (NCPC, SUA): „Do not induce vomiting” și „move to fresh air immediately” (expunere prin inhalare); Centrul Național de Otrăviri din Noua Zeelandă: nu recomandă vărsătura; Health Canada PMRA 2022 (ghid pentru etichete): „Do not induce vomiting unless told to do so by a poison control centre or doctor”. Monoxidul de carbon în special: nicio sursă dedicată citită | CONCORDĂ (surse non-ghid; CO nespecific) | – |
| 68 | Arsuri: 20 min sub apă rece curgătoare | S18 NHS Wales 111: „20 minutes”; S19 British Red Cross: „at least 20 minutes”; S20 BBA 2018: 20 min; S11 ERC 2015: „minimum 10 min”; ERC 2025 nu mai tratează subiectul | CONCORDĂ | – |
| 69 | Fără gheață/unt/pastă de dinți; nu sparge bășicile; nu smulge hainele lipite | S18 NHS Wales; S19 BRC | CONCORDĂ | – |
| 70 | Spital: arsură mai mare decât palma, față/mâini/picioare/genital/articulație, chimică/electrică, albă/carbonizată, copil | S18 NHS Wales: „bigger than the person’s hand”, față/mâini/brațe/picioare/genital, chimic/electric, alb/carbonizat, sub 10 ani | CONCORDĂ (NHS: „mâna”, aplicația: „palma”) | de decis de specialist dacă se uniformizează |
| 71 | Arsuri chimice: minimum 20 min; pudra uscată se îndepărtează întâi | S20 BBA 2018: „at least 20 minutes”, perie pudra | CONCORDĂ | – |
| 72 | Folie alimentară lejer, fără înfășurare circulară | S20 BBA 2018: fâșii longitudinale, nu circumferențial | CONCORDĂ | – |
| 73 | Arsuri solare (răcire, hidratare) | S45 Mayo Clinic: compresă umedă rece sau baie rece, hidratare (mai multă apă), aloe; sursă non-ghid | CONCORDĂ (sursă non-ghid) | – |
| 74 | Electrocutare: întrerupe curentul; obiect uscat neconductor; 10 m de linii căzute | S39 MedlinePlus (rev. 14.10.2025): „turn off the electrical current” dacă e sigur; obiect neconductor (mătură, scaun, covor, preș de cauciuc; nu umed/metalic); distanță „20 feet (6 meters)” de liniile de înaltă tensiune. Aplicația cere 10 m (mai prudent) | CONCORDĂ (sursă non-ghid; distanța din aplicație e mai mare) | de decis de specialist (valoarea exactă a distanței) |
| 75 | Trăsnet: victimele fără puls/respirație întâi (triaj invers) | S21 Emergency Care BC 2023: „reverse triage” | CONCORDĂ (sursă non-ghid ERC) | – |

### 3.7 Traumatisme, ochi, mușcături (§18–§22)

| # | Afirmație din aplicație | Sursă (an) | Verdict | Acțiune |
|---|---|---|---|---|
| 76 | Fracturi: imobilizezi în poziția găsită; gheață 15–20 min | S46 Crucea Roșie Canadiană: „immobilize the area in the position in which it was found”; gheață înfășurată în pânză „15-20 minutes every hour”; S33 AHA/ARC 2024 §5.1: persoana „left in the position in which they were found” | CONCORDĂ (surse non-ghid + AHA 2024 pentru poziție) | – |
| 77 | Coloană: RCP are prioritate; nu mișca persoana | S30 AHA 2025 Adult BLS: resuscitarea se face „where the person is found” (COR 1); „lay rescuers should not use rigid cervical devices” (COR 3: Harm); S17 RCUK 2025: imobilizarea coloanei nu trebuie să amâne scoaterea din apă când e nevoie de resuscitare; S2 ERC 2025: „Do not move the person unless they are in an unsafe situation”. Nicio sursă nu spune cuvânt cu cuvânt „RCP înaintea coloanei” pentru laici | CONCORDĂ (parțial, din principii) | – |
| 78 | Plăgi/bandaj/amputație (compresă umedă, pungă pe gheață) | S2 ERC 2025: partea amputată înfășurată în pansament steril/pânză umedă; S40 MedlinePlus (rev. 27.08.2024): pânză curată umedă, pungă etanșă, „ice water bath”, „Do not put the severed part directly on ice”. Bandajarea plăgilor în general: necomparată | CONCORDĂ (amputație; sursă non-ghid pentru gheață) | – |
| 79 | Ochi, substanță chimică: clătire 15–20 min | S22 Prevent Blindness 2016: „at least 15 minutes”; S11 ERC 2015: „continuous, large volumes” (fără durată); ERC 2025 a scos subiectul | CONCORDĂ (sursă non-ghid) | de decis de specialist (durata exactă) |
| 80 | Obiect înfipt în ochi: acoperi ambii ochi | S47 Iowa BEMTS, Eye Emergency Clinical Guidelines (iun. 2023): „Immobilize any penetrating object and place shields over both eyes, if able”; nu se scoate obiectul, nu se apasă pe ochi | CONCORDĂ (ghid pentru personal EMS, SUA) | – |
| 81 | **Mușcătură de animal: spală rana cu apă și săpun „minimum 5 minute”** | S23 OMS (fișa „Rabies”): „wash the wound with water and soap for at least 15 minutes”; S24 OMS Rabies Bulletin Europe: „minimum of 15 minutes” | **DIFERĂ – corectat** | „minimum 5 minute” înlocuit cu „minimum 15 minute” în RO/EN și în celelalte 6 limbi (doar numărul) |
| 82 | Albină: răzuiește acul; căpușă: pensetă, trage drept | S33 AHA/ARC 2024 §7.1 (2a): înțepătura se scoate „by plucking or scraping”; §7.2 (clasa 1): căpușa cu penseta „as close to the skin as possible … pulling upward with steady, even pressure”. S59 Victoria Health (2022) recomandă altfel (spray cu eter pentru căpușe): variație locală, non-ghid | CONCORDĂ | – |
| 83 | Șarpe: imobilizează, fără garou/tăiere/supt, sună 112 | S2 ERC 2025: „no tourniquet, no cutting, no sucking; immobilise”; S12 AHA/CR 2024: garoul e „potentially harmful” | CONCORDĂ | – |
| 84 | Șarpe: membrul „la nivelul sau ușor sub nivelul inimii” | S33 AHA/ARC 2024 §7.4 (2a): „rest and immobilize the bitten extremity”; S2 ERC 2025: imobilizare; nici una nu spune la ce nivel față de inimă; S59 Victoria Health: culcat, nemișcat | NEVERIFICAT (neschimbat) | de decis de specialist |

### 3.8 Poziția de siguranță, triaj, psihologic, numere (§2, §23, §26, §29)

| # | Afirmație din aplicație | Sursă (an) | Verdict | Acțiune |
|---|---|---|---|---|
| 85 | Poziția de siguranță (pași) | S48 IQWiG / InformedHealth.org (2022): pașii coincid (brațul apropiat în unghi drept, brațul îndepărtat la obraz, piciorul îndepărtat ridicat, rostogolire spre salvator, piciorul de deasupra îndoit); S11 ERC 2015: principiul; S33 AHA/ARC 2024: poziția de recuperare (2a) | CONCORDĂ | – |
| 86 | Triaj START: merge → verde; nu respiră → negru; >30/min → roșu; puls radial absent → roșu; nu execută comenzi → roșu; altfel galben | S26 CHEMM: parametrii și cele patru categorii; secvența completă și pragul de 2 s nu au fost confirmate din textul accesat | CONCORDĂ (parțial) | Aplicația nu include JumpSTART pentru copii (nu e afirmat în aplicație) |
| 87 | Prim ajutor psihologic: respirație 4-4-4, „întreabă direct despre suicid” | S49 OMS, Psychological First Aid (2011): „Encourage the person to focus on their breathing, and to breathe slowly” (numărătoarea 4-4-4 nu e în sursă); întrebarea directă despre suicid: ghidul OMS PFA nu o menționează; S50 NHS Borders (ghid local, 2025): „asking about suicide may give them the idea … this is not the case” | CONCORDĂ (parțial: respirație lentă; întrebarea despre suicid doar dintr-un ghid local) | de decis de specialist (formularea exactă) |
| 88 | TelVerde Antisuicid 0800 801 200, gratuit | S27 findahelpline: număr 0800 801 200, apeluri gratuite; e-mail sos@antisuicid.ro | CONCORDĂ (număr, gratuitate) | – |
| 89 | Program „vineri–duminică 19:00–07:00” | S51 TherapyRoute (director, sursă secundară): „Friday, Saturday and Sunday, 19:00 to 07:00”, gratuit; findahelpline (S27) nu listează orele; site-ul oficial antisuicid.ro nu a fost citit | CONCORDĂ (sursă secundară, neoficială) | de verificat pe antisuicid.ro |
| 90 | „Apel 112” (STS): apel video cu interpret, chat, Android 13+/iOS 15+ | S28 playtech.ro 2026: apel video cu interpret în limbajul semnelor, chat, interpreți 24/7, Android 13+, iOS 15+ | CONCORDĂ (presă) | – |
| 91 | SMS la 113 cere înregistrare prealabilă | S29 Antena 3 (2015): înscrierea în baza 112 e obligatorie | CONCORDĂ (sursă din 2015; procedura poate fi schimbată) | de verificat la STS |
| 92 | 112 gratuit, fără SIM/credit; eCall | S52 Comisia Europeană, Digital Strategy: 112 „available everywhere in the EU, free of charge”; eCall formează automat 112; Comisia Europeană (DG MOVE): eCall obligatoriu la tipurile noi de vehicule M1/N1 „from 31 March 2018”; fără SIM: BEREC (intrarea Poloniei) și 112.lt (Lituania) — surse din alte țări; pentru România nu s-a găsit sursă oficială | CONCORDĂ (parțial: gratuit și eCall confirmate; fără SIM doar din alte țări UE) | de verificat la STS |
| 93 | Trusa de prim ajutor: conținut; verificare la 6–12 luni | S53 St John Ambulance (pagină de magazin): „review your first aid kit checklist every six months” incl. datele de expirare; aplicația: 6–12 luni | CONCORDĂ (parțial; sursă comercială a unei organizații) | – |

## 4. Rezumat pe categorii (verdicte)

| Categorie (tabelul) | Concordă | Corectat | De decis de specialist | Ambiguu (runda 2) | Neverificat |
|---|---|---|---|---|---|
| 3.1 RCP/DEA adulți | 14 | 0 | 0 | 0 | 1 |
| 3.2 Copii/sugari | 8 | 1 | 0 | 0 | 0 |
| 3.3 Sufocare | 6 | 0 | 1 | 0 | 1 (+ elementul lipsă: adăugat în 2.5.1) |
| 3.4 Hemoragie/șoc | 5 | 0 | 1 | 3 | 1 |
| 3.5 Anafilaxie/AVC/infarct/convulsii/glicemie | 7 | 1 | 3 | 2 | 0 |
| 3.6 Temperatură/înec/arsuri/electricitate | 18 | 0 | 0 | 0 | 1 |
| 3.7 Traumatisme/ochi/mușcături | 7 | 1 | 0 | 0 | 1 |
| 3.8 Poziție, triaj, psihologic, numere | 9 | 0 | 0 | 0 | 0 |
| **Total (93 rânduri)** | **74** | **3** | **5** | **5** | **5** (+1 lipsă, tratată) |

Runda 2 a mutat cele 33 de rânduri neverificate astfel: **23 concordă** (dintre care mai multe „parțial” sau „sursă non-ghid”: 24, 50, 67, 73, 74, 76, 77, 78, 87, 89, 92, 93), **5 ambigue** (37, 38, 43, 47, 55), **5 rămân neverificate** (14, 31, 39, 63, 84), **0 diferă**. Rândurile 41, 46 și 56 (deja „de decis”) au primit surse noi (AHA/ARC 2024), fără schimbarea verdictului.

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

Surse adăugate în runda 2 (2026-10-28; toate citite prin instrumentul de rezumare, URL returnat de căutare):

- **S30** 2025 AHA Guidelines, Part 7: Adult Basic Life Support: https://cpr.heart.org/en/resuscitation-science/cpr-and-ecc-guidelines/adult-basic-life-support (citit în două segmente; partea finală nu a conținut gravida/LUD)
- **S31** American Red Cross, BLS 2025 Code Card, adulți și adolescenți (©2025): https://guidelines.redcross.org/wp-content/uploads/2025/12/BLS-ADULTS-AND-ADOLESCENTS.pdf
- **S32** American Red Cross, BLS 2025 Code Card, paciente gravide (©2025): https://guidelines.redcross.org/wp-content/uploads/2025/12/BLS-PREGNANT-PATIENTS.pdf
- **S33** 2024 AHA and American Red Cross Guidelines for First Aid, text integral pe pagină (~130.000 caractere, citit în două segmente): https://cpr.heart.org/en/resuscitation-science/2024-first-aid-guidelines
- **S34** ICRC, „First Aid in an Emergency” (ianuarie 2025): https://blogs.icrc.org/app/uploads/sites/99/2026/05/First_Aid-EN.pdf
- **S35** ILCOR first aid, prezentat de ACEP Now (9.10.2016; sursă secundară): https://www.acepnow.com/article/review-first-aid-guidelines-international-liaison-committee-resuscitation/4/ (paginile ILCOR CoSTR de pe costr.ilcor.org au fost deschise, dar au dat doar lista intervențiilor, fără concluzii)
- **S37** Better Health Channel (Departamentul Sănătății, Victoria, Australia), Bleeding (rev. 19.11.2025): https://www.betterhealth.vic.gov.au/health/ConditionsAndTreatments/bleeding
- **S38** Hong Kong Fire Services Department, Bleeding: https://www.hkfsd.gov.hk/eng/education/ambulance_knowledge/bleeding.html
- **S39** MedlinePlus (NLM), Electric shock (rev. 14.10.2025): https://medlineplus.gov/ency/article/000053.htm
- **S40** MedlinePlus (NLM), Traumatic amputation (rev. 27.08.2024): https://medlineplus.gov/ency/article/000006.htm
- **S41** ESPGHAN/NASPGHAN, „Diagnosis, management, and prevention of button battery ingestion in childhood” (≈2020): https://www.espghan.org/dam/jcr:c0ce1a8e-f92e-42a6-9b8a-19863e52aef7/Diagnosis
- **S42** CMAJ 2021;193:E1498, „Button battery ingestions in children”: https://www.cmaj.ca/content/193/38/e1498.full.pdf
- **S43** Wilderness Medical Society, Drowning 2024 (rezumat): https://wms.imiscloud.com/magazine/1503/2024-Drowning-Summary/default.aspx
- **S44** Poison Control (NCPC, SUA): https://www.poison.org/first-aid-for-poisonings ; Centrul Național de Otrăviri, Noua Zeelandă: https://poisons.co.nz/articles-and-info/first-aid/view/vomiting-first-aid-for-poisoning-an-incorrect-assumption ; Health Canada PMRA, First Aid Labelling Statements (2022; ghid pentru etichete de pesticide, nu de prim ajutor general): https://www.canada.ca/content/dam/hc-sc/documents/programs/guidance-first-aid/first-aid-guidance-eng.pdf
- **S45** Mayo Clinic, Sunburn: First aid: https://www.mayoclinic.org/first-aid/blisters/basics/art-20056643
- **S46** Crucea Roșie Canadiană, First Aid for Sprains, Strains, and Fractures (fără an): https://www.redcross.ca/blog/2018/2/don-t-break-a-leg-what-to-do-in-the-event-of-sprains-strains-and-fractures
- **S47** Iowa Bureau of EMS and Trauma Services, Eye Emergency Clinical Guidelines (iunie 2023): https://hhs.iowa.gov/media/195/download
- **S48** IQWiG / InformedHealth.org, How to put someone into the recovery position (2022): https://www.informedhealth.org/how-to-put-someone-into-the-recovery-position.html
- **S49** OMS, Psychological first aid: Guide for field workers (2011), copie găzduită de Univ. Washington: https://psychiatry.uw.edu/wp-content/uploads/2020/04/1.-WHO_PFA_2011.pdf
- **S50** „Suicide Safety guidance” pentru asistenți de sănătate publică și moașe (NHS Borders, Scoția; iunie 2025; ghid local): https://www.rightdecisions.scot.nhs.uk/media/kgla3yay/suicide-safety-guidance-final-hv-and-cmw-june-2025.pdf
- **S51** TherapyRoute, Suicide Hotlines and Crisis Lines in Romania: https://www.therapyroute.com/article/suicide-hotlines-and-crisis-lines-in-romania-by-therapyroute
- **S52** Comisia Europeană, politica 112: https://digital-strategy.ec.europa.eu/en/policies/112 ; DG MOVE, eCall: https://transport.ec.europa.eu/transport-themes/smart-mobility/road/its-directive-and-action-plan/interoperable-eu-wide-ecall_en ; BEREC (intrarea Poloniei): https://www.berec.europa.eu/index%2ephp/en/emergency-means?page=14 ; Centrul de răspuns de urgență al Lituaniei: https://112.lt/en/about-number-112/
- **S53** St John Ambulance (UK), Do first aid kits expire?: https://shop.sja.org.uk/pages/do-first-aid-kits-expire
- **S54** CDC, First Aid for Seizures (publicat 15.05.2024): https://www.cdc.gov/epilepsy/first-aid-for-seizures/index.html ; epi.ch (ian. 2023): https://www.epi.ch/en/about-epilepsy/key-facts/first-aid-during-a-seizure/
- **S55** ICSI, Diagnosis and Initial Treatment of Ischemic Stroke, ed. a 10-a (2010), via ASHA Evidence Maps: https://apps.asha.org/EvidenceMaps/Articles/ArticleSummary/b9b891b7-c0a2-4e92-8caf-13c6e1a83aac
- **S56** St John Ambulance (UK), Shock (rev. 28.04.2025): https://www.sja.org.uk/first-aid-advice/shock/ ; Crucea Roșie Finlandeză: https://www.redcross.fi/first-aid/first-aid-instructions/shock-disturbance-in-the-bloodstream/ ; St John Ambulance Australia, fișă Shock (2022): https://stjohn.org.au/app/uploads/2025/08/Fact-sheets_shock.pdf
- **S58** CDC MMWR 51(42), 2002: https://cdc.gov/MMWr/preview/mmwrhtml/mm5142a1.htm ; St John Ambulance, comunicat (2026): https://www.sja.org.uk/press-centre/one-in-three-britons-unaware-choking-can-be-fatal-in-minutes/
- **S59** Better Health Channel, Bites and stings first aid (rev. 12.10.2022): https://betterhealth.vic.gov.au/health/healthyliving/bites-and-stings-first-aid


## 6. Ce s-a modificat în aplicație (2.5.0) și teste

Modificări de conținut, toate minime și cu sursă în `CHANGELOG.md`:

1. Mușcătură de animal: spălare „minimum 5 minute” → „minimum 15 minute” (S23, S24). Toate cele 8 limbi (doar numărul).
2. Sugari: scoasă afirmația că „tehnica cu două degete rămâne o variantă acceptată pentru un singur salvator” (3 locuri: §3-05, nota din §28, explicația întrebării din test) (S4, S7, S8). Toate cele 8 limbi (doar ștergerea propoziției).
3. Autoinjector de adrenalină: „ține 3 secunde” → „3 secunde (EpiPen) sau 10 secunde (Jext)”; în RO/EN și „urmează instrucțiunile de pe dispozitiv” (S13, S14, S15). În §7 și în Modul Urgență. Celelalte 6 limbi au primit doar valorile (3 s / 10 s) cu numele dispozitivelor; **formularea completă „urmează instrucțiunile de pe dispozitiv” lipsește în fr/it/es/pt/de/hu: de revizuit**.
4. Adăugat în aplicație (pagina de start, 8 limbi, tradus automat): „Conținut revizuit documentar de AI față de ghidurile ERC 2025, AHA 2025 și AHA/Crucea Roșie Americană 2024; nu e validat de specialist.” și o intrare în Istoric. Avertizările existente (bara permanentă, linia din Modul Urgență, subsol) nu au fost atinse.

Nemodificat: toate rândurile marcate „de decis de specialist”, „ambiguu” sau „neverificat”. Nu s-au creat ilustrații medicale.

### 6.1 Modificări în 2.5.1 (runda 2)

1. **Element lipsă (rândul 33):** adăugată o notă la finalul §4 Sufocare: „După compresii abdominale sau toracice făcute pentru sufocare, persoana trebuie examinată de un medic, chiar dacă își revine complet — pot apărea complicații sau leziuni interne.” Sursa: ERC 2025 First Aid (S2, citit pe oglindă); a doua sursă nu a fost obținută. RO+EN scrise de revizor; **fr/it/es/pt/de/hu: traducere automată, de revizuit**. Notă: e o completare de siguranță, nu o corectură a unui număr; dacă specialistul consideră altfel, se poate scoate (un singur `<div class="note">`).
2. **Formularea din 6 limbi (autoinjector, §7):** adăugat „urmează instrucțiunile de pe dispozitiv” în fr/it/es/pt/de/hu (traducere automată, de revizuit). În Modul Urgență (pasul cu autoinjectorul) formularea nu există nici în ro/en, așa că nu s-a adăugat acolo.
3. Intrare nouă în Istoric (8 limbi, tradusă automat), versiune 2.5.1.
4. **Nu s-a corectat nicio cifră sau afirmație existentă.** Verificarea celor 33 de rânduri nu a găsit nicio discrepanță clară față de un ghid ERC/AHA/ILCOR. Elevația membrului (rândul 38) a fost lăsată neschimbată: ERC 2015 și ILCOR 2015 sunt rezervate, dar Better Health Victoria 2025 și MedlinePlus o recomandă, deci sursele diferă.

Teste rulate (2026-10-28, versiunea 2.5.1; același `PW_ROOT` și `CHROMIUM_PATH`): `tests/offline-static.test.mjs` **34 reușite, 0 eșuate**; `tests/fff-r8.test.mjs` **52 reușite, 0 eșuate** (verificarea „conținutul medical nu s-a schimbat” omisă intenționat). `axe-core` tot nu este instalat, deci verificările axe nu au rulat. Verificare manuală în Chromium: nota nouă din §4, formularea autoinjectorului și intrarea din Istoric apar în toate cele 8 limbi. Kit: `fixcsp`, `info`, `check --lax` (hash-urile CSP și `app.json` regenerate).

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
5. Rândurile rămase NEVERIFICAT sau AMBIGUU după runda 2: „4–6 min” (14), „a doua cauză de moarte” (31), garoul improvizat (39), durerea la reîncălzire ca „semn bun” (63), poziția membrului la mușcătura de șarpe (84); ambigue: durata presiunii directe (37), ridicarea membrului (38), mâncare/băutură în șoc (43), poziția în anafilaxie (47), durata crizelor „1–3 minute” (55). Rămân și nuanțele din rândurile „CONCORDĂ (parțial / non-ghid)”: magneții multipli (24), distanța de 10 m de liniile căzute (74), întrebarea directă despre suicid și programul TelVerde (87, 89; de verificat pe antisuicid.ro), SIM-ul la 112 în România (92).
6. Verificarea cu ERC 2025 Paediatric Life Support (text integral), ghidurile ERC 2025 BLS și First Aid direct pe erc.edu (nu doar prin oglindă) și un ghid național românesc actual (Consiliul Român de Resuscitare / Ministerul Sănătății), dacă există. Verificarea celei de-a doua surse pentru nota nouă din §4 (rândul 33).
7. Validare formală (medic, instructor autorizat, SMURD/Crucea Roșie) a întregului conținut, inclusiv a traducerilor automate.

---

# English summary

**Documentary review by Claude (AI), on request. This is NOT validation by a medical specialist and does not replace one. PULS is NOT "medically approved".**

- Scope: PULS v2.4.0 (offline first-aid guide, status "experimental") compared, claim by claim, with public guidelines found by web search on 2026-10-28: ERC 2025 (Adult BLS, First Aid; Paediatric LS abstract only), RCUK 2025 summaries, AHA 2025 and AHA/AAP 2025, AHA/American Red Cross 2024 First Aid, WHO, WMS 2019, NHS Wales / British Red Cross / British Burn Association (burns), product leaflets (adrenaline auto-injectors). Pages were read through an automatic summarising tool, some via mirrors; a specialist must check the originals. No current Romanian national guideline was found online.
- Results: most core numbers match (compression rate 100-120/min, depth 5-6 cm, 30:2, interruptions under 10 s, tourniquet 5-7 cm, choking sequences, burn cooling 20 min, FAST, aspirin 300 mg, seizure 5-minute rule, frostbite rewarming 37-39 C, drowning 5 initial breaths, snakebite do/don't).
- Corrected (v2.5.0, all 8 languages): (1) animal-bite wound washing 5 -> 15 minutes (WHO); (2) removed "two-finger infant compressions remain an accepted option" (AHA/AAP 2025, RCUK 2025); (3) adrenaline auto-injector hold time 3 s -> "3 s (EpiPen) or 10 s (Jext)" (product leaflets). Other languages than ro/en received only the values/deletions; the extra phrase "follow the device instructions" is missing there and flagged "to review".
- Left for a specialist: infant choking chest-thrust technique, leg raising in shock, second adrenaline dose timing (5 vs 5-15 min), hypoglycaemia recheck (10-15 vs 15 min), the Romanian wording "tabletă necoptă", and every item marked "unverified" (e.g. duration of direct pressure, limb elevation, impaled objects, rewarming pain, pregnancy uterine displacement, hotline hours).
- **Round 2 (v2.5.1, 2026-10-28):** the 33 "unverified" rows were re-checked against guideline-level and other public sources (S30-S59). Result: 23 agree (several only partly or from non-guideline sources), 5 are ambiguous (sources differ), 5 stay unverified, 0 clearly differ. **No existing figure or claim was changed.** Added only: (a) the missing note "after abdominal or chest thrusts for choking the person should be examined by a doctor" (ERC 2025 First Aid, read through a mirror; RO+EN written by the reviewer, machine translation in the other six languages), (b) the "follow the device instructions" phrase for the auto-injector in fr/it/es/pt/de/hu (machine translation, to review). Limits: the reading tool summarises and truncates pages (the AHA/ARC 2024 page was read in two segments), ERC 2025 was again read only via a mirror, the erc.edu full text and ILCOR CoSTR were not read, and many sources are non-guideline (MedlinePlus, Mayo, Red Cross societies, St John, CDC, poison centres).
- A visible line was added in the app: "Content documentarily reviewed by AI against ERC 2025, AHA 2025 and AHA/American Red Cross 2024; not validated by a specialist." Existing warnings were kept.
- Tests: static offline test 34/34, functional suite 52/52; axe-core not installed (accessibility checks with axe not run); tests do not assess medical correctness.
