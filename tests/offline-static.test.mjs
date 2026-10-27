// PULS — verificare STATICĂ a funcționării offline și a avertismentului de stare. Fără browser; nu modifică și nu evaluează conținut medical.
// Verifică doar codul: nicio cerere de rețea automată (fetch/XHR/WebSocket/…), nicio resursă externă încărcată, CSP strict,
// linkurile externe = doar lista de mai jos (se deschid doar la clic), service worker doar pe aceeași origine, avertismentul „nevalidat de specialist” în 8 limbi.
// Rulare: node tests/offline-static.test.mjs
import fs from "node:fs"; import path from "node:path"; import {fileURLToPath} from "node:url";
const R = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const h = fs.readFileSync(path.join(R, "index.html"), "utf8"), sw = fs.readFileSync(path.join(R, "sw.js"), "utf8");
let pass = 0, fail = 0; const ok = (c, m, x) => { if (c) pass++; else { fail++; console.log("  FAIL", m, x === undefined ? "" : JSON.stringify(x).slice(0, 250)); } };
const strip = js => js.replace(/\/\*[\s\S]*?\*\//g, "").replace(/(^|[\s;{}()])\/\/[^\n]*/g, "$1");
// 1. scripturile inline: fără API-uri de rețea
const scripts = [...h.matchAll(/<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g)].filter(m => !/json/.test(m[1])).map(m => strip(m[2]));
ok(scripts.length >= 1, "scripturi inline găsite", scripts.length);
const NET = [/\bfetch\s*\(/, /\bXMLHttpRequest\b/, /\bWebSocket\b/, /\bEventSource\b/, /\bsendBeacon\b/, /\bimportScripts\b/, /(^|[^.\w$])import\s*\(/, /\bnew\s+Worker\s*\(\s*['"]https?:/];
for (const re of NET) ok(!scripts.some(s => re.test(s)), "scripturile nu folosesc " + re.source);
// 2. HTML: resurse încărcate automat
const tags = [...h.matchAll(/<(script|link|img|iframe|source|video|audio|object|embed|track|input|form)\b([^>]*)>/gi)];
const ext = /(?:src|srcset|data|poster|action|href)\s*=\s*["']\s*(?:https?:)?\/\//i;
const loadedExternal = tags.filter(m => (m[1].toLowerCase() !== "link" || /rel\s*=\s*["'](?:stylesheet|preload|prefetch|modulepreload|icon|manifest|dns-prefetch|preconnect)/i.test(m[2])) && ext.test(m[2])).map(m => m[0].slice(0, 80));
ok(loadedExternal.length === 0, "nicio resursă externă încărcată automat (script/link/img/iframe/…)", loadedExternal);
ok(!/@import|url\(\s*["']?\s*(?:https?:)?\/\//i.test(h), "fără @import / url(http…) în CSS");
// 3. CSP
const csp = (h.match(/Content-Security-Policy"\s+content="([^"]+)"/) || [])[1] || "";
const dir = n => ((csp.match(new RegExp("(?:^|;)\\s*" + n + "\\s+([^;]+)")) || [])[1] || "").trim();
ok(dir("default-src") === "'none'", "CSP default-src 'none'", dir("default-src")); ok(dir("connect-src") === "'none'", "CSP connect-src 'none'", dir("connect-src"));
ok(/^('sha256-[A-Za-z0-9+/=]+'\s*)+$/.test(dir("script-src")), "CSP script-src: doar hash-uri", dir("script-src"));
ok(dir("frame-src") === "'none'" && dir("object-src") === "'none'" && dir("base-uri") === "'none'" && dir("form-action") === "'none'", "CSP frame/object/base/form: 'none'");
ok(!/unsafe-eval|https?:/.test(csp), "CSP fără unsafe-eval și fără surse http(s)", csp.slice(0, 200));
// 4. linkuri externe = lista cunoscută, doar în <a href> (se deschid la clic)
const ALLOW = ["www.who.int", "www.smurd.ro", "www.google.com", "www.erc.edu", "www.crucearosie.ro", "trom.tf", "maps.google.com", "cpr.heart.org", "chiuta.github.io", "buymeacoffee.com", "antisuicid.ro"];
const aHosts = new Set([...h.matchAll(/<a\b[^>]*\bhref=["']https?:\/\/([^\/"'?#]+)/gi)].map(m => m[1]));
const jsHosts = new Set(scripts.flatMap(s => [...s.matchAll(/https?:\/\/([^\/"'`?#\s)]+)/g)].map(m => m[1])).filter(x => x !== "www.w3.org"));   // www.w3.org = spațiu de nume SVG, nu o cerere
for (const x of [...aHosts, ...jsHosts]) ok(ALLOW.includes(x), "gazdă externă din lista cunoscută: " + x);
// 5. service worker: aceeași origine, fără adrese absolute
ok(!/https?:\/\//.test(strip(sw)), "sw.js fără adrese http(s)"); ok(/u\.origin\s*!==\s*self\.location\.origin/.test(sw), "sw.js ignoră cererile din alte origini"); ok(!/importScripts/.test(strip(sw)), "sw.js fără importScripts");
// 6. avertismentul „nevalidat de specialist” + 112 în 8 limbi (doar prezența și unicitatea; conținutul medical nu se evaluează)
const start = h.indexOf("var D = "); let i = h.indexOf("{", start), depth = 0, inStr = false, esc = false, j = i;
for (; j < h.length; j++) { const c = h[j]; if (inStr) { if (esc) esc = false; else if (c === "\\") esc = true; else if (c === '"') inStr = false; } else if (c === '"') inStr = true; else if (c === "{") depth++; else if (c === "}" && --depth === 0) break; }
const D = JSON.parse(h.slice(i, j + 1));
const key = Object.keys(D.ro).find(k => /Conținut nevalidat de un specialist \(medic sau instructor autorizat\)/.test(D.ro[k]));
ok(!!key, "cheia avertismentului găsită în ro", key);
if (key) { const vals = Object.keys(D).map(l => D[l][key]); ok(Object.keys(D).length === 8 && vals.every(v => v && v.includes("112")) && new Set(vals).size === 8, "avertismentul în 8 limbi, cu 112, distinct", vals.map(v => (v || "").slice(0, 30))); }
ok(/id="discBar"[^>]*role="note"/.test(h) && /href="tel:112"/.test(h.slice(h.indexOf('id="discBar"'), h.indexOf('id="discBar"') + 900)), "bara de avertizare permanentă cu tel:112 în HTML");
ok(/id="eoDisc"/.test(h), "linia de avertizare în Modul Urgență");
console.log(`\n${pass} reușite, ${fail} eșuate`); process.exit(fail ? 1 : 0);
