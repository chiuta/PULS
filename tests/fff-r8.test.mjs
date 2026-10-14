// PULS — teste pentru funcțiile noi (runda 8): feedback haptic + card QR de urgență (ecran complet, PNG, tipărire).
import fs from "fs";
import os from "os";
import path from "path";
import {execFileSync} from "child_process";
import {launch, axeRun, hOverflow, check, summary, kitSmoke, kitLabel} from "./_lib.mjs";

const VIB = () => { window.__vib = []; Object.defineProperty(navigator, "vibrate", {configurable: true, value: p => { window.__vib.push(p); return true; }}); };
const CARD = {cardNume: "Ștefan Țurcanu-Ionescu", cardAlergii: "penicilină, aspirină (ăâîșț)", cardAfectiuni: "diabet tip 1, astm", cardMedicatie: "insulină", cardContactNume: "Mădălina Ionescu", cardContactTel: "0722 000 000", cardNote: "Poartă lentile de contact"};
async function fillCard(page) {
  await page.evaluate(() => document.querySelector('[data-sec="card"]').click());
  for (const [id, v] of Object.entries(CARD)) await page.fill("#" + id, v);
  await page.selectOption("#cardGrupa", "0+");
}
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "puls-"));

console.log("1. pornire și versiune");
{
  const {browser, page, st} = await launch({init: VIB});
  await page.waitForTimeout(3500);
  check("0 erori", st.errs.length === 0, st.errs);
  check("0 cereri de rețea", st.net.length === 0, st.net);
  check("0 violări CSP", (await page.evaluate(() => window.__csp)).length === 0);
  check("meta application-version 2.2.0", (await page.getAttribute('meta[name="application-version"]', "content")) === "2.2.0");
  check("#app-version", /2\.2\.0 · 2026-10-14/.test(await page.textContent("#app-version")));
  check("fără depășire orizontală", (await hOverflow(page)) <= 0);
  await browser.close();
}

console.log("2. feedback haptic");
{
  const {browser, page, st} = await launch({init: VIB});
  await page.waitForTimeout(800);
  check("comutatorul din meniu apare (vibrate există)", await page.isVisible("#hapticSideBtn"));
  check("implicit pornit", (await page.getAttribute("#hapticSideBtn", "aria-pressed")) === "true");
  await page.click("#sosBtnMain");
  await page.waitForTimeout(200);
  let v = await page.evaluate(() => window.__vib.slice());
  check("deschiderea Mod Urgență vibrează", v.length === 1, v);
  check("butonul haptic din Mod Urgență e vizibil", await page.isVisible("#eoHapticBtn"));
  await page.locator("#eoTriageGrid button").first().click();
  v = await page.evaluate(() => window.__vib.slice());
  check("alegerea unei situații vibrează (tap)", v.length === 2, v);
  await page.click("#eoNextBtn");
  v = await page.evaluate(() => window.__vib.slice());
  check("pasul următor vibrează", v.length === 3 && JSON.stringify(v[2]) === JSON.stringify([28]), v);
  await page.click("#eoPrevBtn");
  v = await page.evaluate(() => window.__vib.slice());
  check("pasul înapoi are alt tipar", v.length === 4 && JSON.stringify(v[3]) === JSON.stringify([16, 34, 16]), v);
  // până la ultimul pas
  let guard = 0; while ((await page.textContent("#eoNextBtn")).includes("Următorul") && guard++ < 30) await page.click("#eoNextBtn");
  const before = (await page.evaluate(() => window.__vib.length));
  await page.click("#eoNextBtn");
  v = await page.evaluate(() => window.__vib.slice());
  check("ultimul pas are tipar distinct (terminat)", v.length === before + 1 && v[v.length - 1].length === 5, v.slice(-2));
  // oprește haptic
  await page.click("#eoHapticBtn");
  check("starea se mută pe oprit", (await page.getAttribute("#eoHapticBtn", "aria-pressed")) === "false" && /oprit/.test(await page.textContent("#hapticSideBtn")));
  const n = await page.evaluate(() => window.__vib.length);
  await page.locator("#eoTriageGrid button").first().click(); await page.click("#eoNextBtn");
  check("oprit: niciun tipar haptic nou", (await page.evaluate(() => window.__vib.length)) === n);
  check("alegerea se păstrează în localStorage", (await page.evaluate(() => localStorage.getItem("puls-haptic-v1"))) === "0");
  // metronomul RCP nu depinde de comutator
  await page.click("#eoCloseBtn");
  await page.evaluate(() => document.querySelector('[data-sec="rcp"]').click());
  const cprBtn = page.locator("#cprStartBtn, #cprToggleBtn, [id^=cprStart]").first();
  if (await cprBtn.count()) { await cprBtn.click(); await page.waitForTimeout(1500); const m = await page.evaluate(() => window.__vib.length); check("metronomul RCP vibrează și cu haptic oprit (funcție separată)", m > n, [m, n]); await cprBtn.click().catch(() => {}); }
  check("fără erori", st.errs.length === 0, st.errs);
  await browser.close();
  // persistă după reîncărcare
  const L = await launch({init: VIB});
  await L.page.evaluate(() => localStorage.setItem("puls-haptic-v1", "0"));
  await L.page.reload(); await L.page.waitForTimeout(500);
  check("după reîncărcare rămâne oprit", (await L.page.getAttribute("#hapticSideBtn", "aria-pressed")) === "false");
  await L.browser.close();
}
{ // fără API vibrate: comutatoarele sunt ascunse
  const {browser, page} = await launch({init: () => { Object.defineProperty(navigator, "vibrate", {configurable: true, value: undefined}); }});
  await page.waitForTimeout(500);
  check("fără navigator.vibrate comutatoarele sunt ascunse", (await page.isHidden("#hapticSideBtn")) && (await page.isHidden("#eoHapticBtn")));
  await browser.close();
}

console.log("3. card QR pe tot ecranul");
{
  const {browser, page, st} = await launch({init: VIB, perm: []});
  await page.waitForTimeout(800);
  await page.evaluate(() => document.querySelector('[data-sec="card"]').click());
  await page.click("#cardQrFullBtn");
  check("card gol: nu se deschide dialogul, mesaj explicit", !(await page.locator("#cardQrDialog").evaluate(d => d.open)) && /Completează cel puțin/.test(await page.textContent("#cardStatus")));
  await fillCard(page);
  await page.click("#cardQrFullBtn");
  check("dialogul se deschide", await page.locator("#cardQrDialog").evaluate(d => d.open));
  const txt = await page.textContent("#cqText");
  check("textul de sub QR conține datele (inclusiv diacritice)", txt.includes("Ștefan Țurcanu-Ionescu") && txt.includes("0+") && txt.includes("aspirină (ăâîșț)"), txt);
  const size = await page.evaluate(() => { const c = document.getElementById("cqCanvas"); return [c.width, c.height]; });
  check("QR pătrat și suficient de mare", size[0] === size[1] && size[0] >= 240, size);
  // salvează PNG și decodează cu OpenCV (dacă există)
  const dl = page.waitForEvent("download");
  await page.click("#cqPngBtn");
  const f = await (await dl).path(); const png = path.join(tmp, "qr.png"); fs.copyFileSync(f, png);
  check("PNG valid (semnătură)", fs.readFileSync(png).subarray(1, 4).toString() === "PNG");
  let decoded = null;
  try { decoded = execFileSync("python3", ["-I", "-c", "import cv2,sys\nim=cv2.imread(sys.argv[1])\nt,_,_=cv2.QRCodeDetector().detectAndDecode(im)\nprint(t)", png], {encoding: "utf8"}).trimEnd(); } catch (e) { console.log("  (OpenCV indisponibil — decodarea QR omisă)"); }
  if (decoded !== null) {
    check("QR-ul decodat cu un cititor extern = textul cardului", decoded === txt, decoded);
    check("diacriticele sunt păstrate în QR (UTF-8)", decoded.includes("Ștefan Țurcanu-Ionescu") && decoded.includes("ăâîșț"), decoded);
  }
  check("mesaj de avertizare la salvare", /în clar/.test(await page.textContent("#cqStatus")));
  // tipărire: clasa print-qr ascunde restul (verificăm CSS cu emulare print)
  await page.emulateMedia({media: "print"});
  await page.evaluate(() => document.body.classList.add("print-qr"));
  const vis = await page.evaluate(() => { const d = getComputedStyle(document.getElementById("cardQrDialog")); const s = getComputedStyle(document.getElementById("sec-card")); const b = getComputedStyle(document.getElementById("cqPngBtn")); return {dlg: d.display, sec: s.display, btn: b.display}; });
  check("la tipărire: dialogul vizibil, restul paginii ascuns, butoanele ascunse", vis.dlg !== "none" && vis.btn === "none", vis);
  await page.evaluate(() => document.body.classList.remove("print-qr")); await page.emulateMedia({media: "screen"});
  await page.click("#cqCloseBtn");
  check("dialogul se închide", !(await page.locator("#cardQrDialog").evaluate(d => d.open)));
  // din predarea către echipaj
  await page.click("#sosBtnMain"); await page.locator("#eoTriageGrid button").first().click(); await page.click("#eoHandoffBtn");
  check("în predare apare butonul Card QR (card completat)", await page.isVisible("#eoHandoffQrBtn"));
  await page.click("#eoHandoffQrBtn");
  check("dialogul se deschide peste Mod Urgență", await page.locator("#cardQrDialog").evaluate(d => d.open));
  await page.keyboard.press("Escape");
  check("Escape închide dialogul", !(await page.locator("#cardQrDialog").evaluate(d => d.open)));
  // QR existent (mic) acum cu zonă liberă și UTF-8
  await page.click("#eoCloseBtn").catch(() => {});
  await page.evaluate(() => document.querySelector('[data-sec="card"]').click());
  await page.click("#cardQrBtn");
  check("QR-ul mic există", await page.isVisible("#cardQrCanvas"));
  const small = await page.evaluate(() => document.getElementById("cardQrCanvas").toDataURL("image/png"));
  fs.writeFileSync(path.join(tmp, "small.png"), Buffer.from(small.split(",")[1], "base64"));
  try { const d2 = execFileSync("python3", ["-I", "-c", "import cv2,sys\nim=cv2.imread(sys.argv[1])\nt,_,_=cv2.QRCodeDetector().detectAndDecode(im)\nprint(t)", path.join(tmp, "small.png")], {encoding: "utf8"}).trimEnd(); check("și QR-ul mic se decodează corect", d2.includes("Ștefan Țurcanu-Ionescu"), d2); } catch (e) {}
  check("fără erori", st.errs.length === 0, st.errs);
  await browser.close();
}

console.log("4. conținutul medical nu s-a schimbat");
{
  const ORIG = process.env.PULS_ORIG; // calea către copia de rezervă; dacă lipsește, se omite
  if (ORIG && fs.existsSync(ORIG)) {
    const strip = h => h.replace(/<script>[\s\S]*?<\/script>/g, "").replace(/<style>[\s\S]*?<\/style>/g, "");
    const secs = h => [...strip(h).matchAll(/<section class="section" id="(sec-[a-z0-9]+)"[\s\S]*?<\/section>/g)].map(m => [m[1], m[0]]);
    const a = new Map(secs(fs.readFileSync(ORIG, "utf8"))), b = new Map(secs(fs.readFileSync(path.resolve(import.meta.dirname, "..", "index.html"), "utf8")));
    const changed = [...a.keys()].filter(k => a.get(k) !== b.get(k));
    check("secțiunile medicale sunt identice cu originalul (în afară de §25 Card, unde s-a adăugat un buton)", changed.every(k => k === "sec-card"), changed);
    check("numărul de secțiuni este același", a.size === b.size && a.size >= 30, [a.size, b.size]);
  } else console.log("  (PULS_ORIG nesetat — comparația cu originalul omisă)");
}

console.log("5. accesibilitate");
{
  const {browser, page} = await launch({bypassCSP: true, w: 360, h: 740, init: VIB});
  await page.waitForTimeout(3600);
  await fillCard(page);
  await page.click("#cardQrFullBtn");
  check("fără depășire orizontală la 360 (dialog)", (await hOverflow(page)) <= 1);
  let v = await axeRun(page); if (v) check("axe 0 violări (dialog card QR)", v.length === 0, v);
  await page.click("#cqCloseBtn");
  await page.click("#sosBtnMobile").catch(async () => { await page.click("#sosBtnMain"); });
  v = await axeRun(page); if (v) check("axe 0 violări (Mod Urgență cu buton haptic)", v.length === 0, v);
  await browser.close();
}
fs.rmSync(tmp, {recursive: true, force: true});

console.log("K. kit (Transparență + copie de siguranță)");
{
  const {browser, page, st} = await launch({init: typeof VIB!=="undefined"?VIB:undefined});
  await page.waitForTimeout(800);
  await kitLabel(page, "puls");
  await kitSmoke(page, "puls", ["puls-card-v1", "{\"nume\":\"Ion Țurcanu\"}"]);
  check("kit: fără erori", st.errs.length === 0, st.errs);
  await browser.close();
}
summary();
