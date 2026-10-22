// Deck client Chichi — v4.7 (retours 22/10 13h03) : séries BDD page_public + usure_4sem, KPIs complémentaires (max 2), « Ce qu'on fait » en avant, fusions 13+14 et 17+18, sommaire prochaines études & annexes
const pptxgen = require("pptxgenjs");
const { applyTheme } = require("./apply_theme.js");
const fs = require("fs"), path = require("path");
const LIGHT = process.env.LIGHT === "1"; // version épurée : mêmes données, une page par étude = titre + un graphique + « ce qu'on fait »

const THEME = { name: "Chichi Crea v4.7", headFontFace: "Cambria", bodyFontFace: "Calibri",
  colors: { dk1: "1E1B18", lt1: "F7F3EE", dk2: "6E655B", lt2: "E9E2D8", accent1: "9B1E2E", accent2: "5B8A4A", accent3: "E09A4B", accent4: "7FA7C8", accent5: "C9BFB2", accent6: "3E3A36", hlink: "9B1E2E", folHlink: "6E655B" } };
const H = THEME.colors, TINT_L = "ECE5DA", TINT_R = "E6EEE2";
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.author = "DataCAt"; pres.title = "Chichi Castelnango — Créa Meta, v4.7";
const C = pres.SchemeColor;
pres.defineSlideMaster({ title: "CONTENT", background: { color: H.lt1 }, objects: [], slideNumber: { x: 12.4, y: 7.05, w: 0.6, h: 0.3, fontSize: 9, color: H.dk2, align: "right" } });
pres.defineSlideMaster({ title: "DARK", background: { color: H.dk1 }, objects: [] });

// ---------- séries BDD-CREA-CHICHI (L-BDD-261022-19) ----------
// séries JSON : variable GRAPHIQUES, sinon le chemin depuis 3-chichi-propositions/deck-crea/pptx/
const G = (process.env.GRAPHIQUES || path.join(__dirname, "..", "..", "..", "3-chichi", "B-prod-claude", "crea", "graphiques")) + path.sep;
const loadJSON = n => JSON.parse(fs.readFileSync(G + n, "utf8"));
const PAGE = loadJSON("page_public.json"), US4 = loadJSON("usure_4sem.json"), TXT = loadJSON("texte_segment.json"), CB = loadJSON("concentration_bandes.json");
const wk = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9"];
const rawN = wk.map((_, i) => US4.cohortes["nouveautés"].brut_par_semaine[String(i + 1)].roas), rawP = wk.map((_, i) => US4.cohortes.permanents.brut_par_semaine[String(i + 1)].roas);
const idx = a => a.map(v => Math.round(v / a[0] * 100));
const hookN = wk.map((_, i) => US4.cohortes["nouveautés"].indices_par_semaine[String(i + 1)].hook), hookP = wk.map((_, i) => US4.cohortes.permanents.indices_par_semaine[String(i + 1)].hook);
const TA = TXT.H3.acquisition, vuesParEuro = v => v.roas / (v.panier * v.t_ach); // vues de page par euro = ROAS ÷ (panier × taux d'achat)
const bandes = CB.H3;
const mN = US4.cohortes["nouveautés"].metriques, mP = US4.cohortes.permanents.metriques;
const pct = v => (v > 0 ? "+" : "−") + Math.round(Math.abs(v) * 100) + " %";
const col = { acq: PAGE.pages.collection.acquisition.H3, rec: PAGE.pages.collection.reciblage.H3 }, prd = { acq: PAGE.pages.produit.acquisition.H3, rec: PAGE.pages.produit.reciblage.H3 };
const fr = (v, d) => v.toFixed(d).replace(".", ",");
const ratioCoutAtc = fr(col.acq.cout_atc / col.rec.cout_atc, 1), ratioRoas = fr(col.rec.roas / col.acq.roas, 1);

// ---------- gabarit ----------
function runs(t, defColor) { return Array.isArray(t) ? t.map(r => (typeof r === "string" ? { text: r, options: {} } : { text: r.t, options: { color: r.c || defColor || C.accent1, bold: r.b !== false, italic: !!r.i } })) : [{ text: t, options: {} }]; }
function lines(arr, sp) { const out = []; arr.forEach((l, i) => { const rs = runs(l, C.text1); rs[rs.length - 1].options.breakLine = i < arr.length - 1; rs[0].options.paraSpaceAfter = sp || 7; out.push(...rs); }); return out; }
function bullets(items, sp) { // items : runs ou { t: runs, sub: [runs] }
  const out = [];
  items.forEach((it, i) => {
    const main = it.sub ? it.t : it, subs = it.sub || [];
    const rs = runs(main, C.text1); rs[0].options.bullet = true; rs[0].options.paraSpaceAfter = sp || 6; rs[rs.length - 1].options.breakLine = (i < items.length - 1) || subs.length > 0; out.push(...rs);
    subs.forEach((sb, j) => { const ss = runs(sb, C.text2); ss[0].options.bullet = { indent: 14 }; ss[0].options.indentLevel = 1; ss[0].options.paraSpaceAfter = 4; ss.forEach(r => { r.options.italic = true; r.options.color = C.text2; r.options.bold = false; r.options.fontSize = 10.5; }); ss[ss.length - 1].options.breakLine = (i < items.length - 1) || j < subs.length - 1; out.push(...ss); });
  });
  return out;
}
function frame(s, o) {
  s.addText(o.kicker.toUpperCase(), { x: 0.5, y: 0.3, w: 8, h: 0.28, fontSize: 10, color: C.text2, charSpacing: 2, margin: 0, isTextBox: true });
  if (o.tag) s.addText(o.tag.toUpperCase(), { x: 9.3, y: 0.3, w: 3.53, h: 0.28, fontSize: 10, color: C.accent1, bold: true, align: "right", charSpacing: 2, margin: 0, isTextBox: true });
  s.addText(runs(o.title), { x: 0.5, y: 0.6, w: 12.3, h: 1.0, fontSize: 25, fontFace: THEME.headFontFace, bold: true, color: C.text1, margin: 0, isTextBox: true, valign: "top", fit: "shrink" });
  if (o.lecture) rightBlock(s, o);
  if (o.legend) s.addText(o.legend, { x: 0.5, y: 7.02, w: 7.2, h: 0.32, fontSize: 9, color: C.text2, margin: 0, isTextBox: true, valign: "middle" });
  if (o.badge) s.addText(o.badge, { x: 7.8, y: 7.02, w: 4.5, h: 0.32, fontSize: 9.5, bold: true, color: C.text1, align: "right", margin: 0, isTextBox: true, valign: "middle" });
}
// bloc droit : CE QU'ON APPREND (sable, chiffre héros + explication juste dessous) / CE QU'ON FAIT (vert, plus gros, puces + sous-puces)
function rightBlock(s, o) {
  const x = 7.8, w = 5.03, yT = 1.75, hL = LIGHT ? 2.35 : (o.hL || 2.55), yA = yT + hL + 0.08, hA = 6.75 - yA;
  s.addShape(pres.shapes.RECTANGLE, { x, y: yT, w, h: hL, fill: { color: TINT_L }, line: { color: TINT_L, width: 0 } });
  s.addText("CE QU'ON APPREND", { x: x + 0.22, y: yT + 0.1, w: 3, h: 0.22, fontSize: 8.5, color: C.text2, charSpacing: 2, margin: 0, isTextBox: true });
  let yText = yT + 0.38;
  if (o.hero) {
    s.addText(o.hero[0], { x: x + 0.22, y: yT + 0.3, w: w - 0.44, h: LIGHT ? 0.6 : 0.5, fontSize: LIGHT ? 32 : 26, fontFace: THEME.headFontFace, bold: true, color: o.heroColor || C.accent1, align: "center", margin: 0, isTextBox: true, fit: "shrink" });
    s.addText(o.hero[1], { x: x + 0.22, y: yT + (LIGHT ? 0.95 : 0.8), w: w - 0.44, h: LIGHT ? 0.65 : 0.3, fontSize: LIGHT ? 11 : 10, bold: true, color: C.text1, align: "center", margin: 0, isTextBox: true, valign: "top", fit: "shrink" });
    yText = yT + 1.15;
  }
  if (!LIGHT) s.addText(lines(o.lecture, 6), { x: x + 0.22, y: yText, w: w - 0.44, h: yT + hL - yText - 0.08, fontSize: 10.5, color: C.text1, valign: "top", margin: 0, isTextBox: true, fit: "shrink" });
  else { const small = lines(o.lecture.slice(0, 2), 3).map(r => { r.options.italic = true; r.options.bold = false; r.options.color = C.text2; return r; }); s.addText(small, { x: x + 0.22, y: yT + 1.6, w: w - 0.44, h: 0.68, fontSize: 8.5, color: C.text2, valign: "top", margin: 0, isTextBox: true, fit: "shrink" }); }
  s.addShape(pres.shapes.LINE, { x, y: yA - 0.04, w, h: 0, line: { color: H.accent5, width: 1 } });
  s.addShape(pres.shapes.RECTANGLE, { x, y: yA, w, h: hA, fill: { color: TINT_R }, line: { color: TINT_R, width: 0 } });
  s.addText("CE QU'ON FAIT", { x: x + 0.22, y: yA + 0.1, w: 3, h: 0.22, fontSize: 9, bold: true, color: C.accent2, charSpacing: 2, margin: 0, isTextBox: true });
  s.addText(bullets(o.action, LIGHT ? 12 : 8), { x: x + 0.22, y: yA + 0.4, w: w - 0.44, h: hA - 0.5, fontSize: LIGHT ? 14 : 12.5, color: C.text1, valign: LIGHT ? "middle" : "top", margin: 0, isTextBox: true, fit: "shrink" });
}
function miniKpis(s, items, yTop, hChart, x) { // 1 à 2 chiffres complémentaires (jamais une redite du graphique), centrés sur le graphique
  if (LIGHT) return;
  x = x || 6.35; const hBlock = items.length === 1 ? 1.2 : 2.45; const y = yTop + hChart / 2 - hBlock / 2;
  items.forEach((k, i) => {
    const yy = y + i * 1.25;
    s.addText(k[0].toUpperCase(), { x, y: yy, w: 1.3, h: 0.32, fontSize: 7.5, color: C.text2, charSpacing: 1, margin: 0, isTextBox: true, valign: "top" });
    s.addText(k[1], { x, y: yy + 0.3, w: 1.3, h: 0.42, fontSize: 17, fontFace: THEME.headFontFace, bold: true, color: k[3] || C.accent1, margin: 0, isTextBox: true, fit: "shrink" });
    s.addText(k[2], { x, y: yy + 0.72, w: 1.3, h: 0.5, fontSize: 8, color: C.text2, margin: 0, isTextBox: true, valign: "top" });
  });
}
function section(s, x, y, w, text) { s.addText(text.toUpperCase(), { x, y, w, h: 0.22, fontSize: 8.5, color: C.text2, charSpacing: 1, margin: 0, isTextBox: true }); }
function card(s, x, y, w, h, title, body, color, fill, big) {
  s.addShape(pres.shapes.RECTANGLE, { x, y, w, h, fill: { color: fill || "FFFFFF" }, line: { color: H.lt2, width: 1 } });
  s.addText(title, { x: x + 0.2, y: y + 0.14, w: w - 0.4, h: 0.36, fontSize: big ? 15 : 12.5, fontFace: THEME.headFontFace, bold: true, color: color || C.text1, margin: 0, isTextBox: true });
  s.addText(Array.isArray(body) ? lines(body) : body, { x: x + 0.2, y: y + 0.55, w: w - 0.4, h: h - 0.7, fontSize: big ? 11.5 : 10.5, color: C.text1, margin: 0, isTextBox: true, valign: "top", fit: "shrink" });
}
const baseChart = { catAxisLabelColor: H.dk1, catAxisLabelFontSize: 10, catAxisLabelFontFace: "+mn-lt", valAxisHidden: true, valGridLine: { style: "none" }, catGridLine: { style: "none" }, catAxisLineShow: false, valAxisLineShow: false, showValue: true, dataLabelFontSize: 10, dataLabelFontFace: "+mn-lt", dataLabelColor: H.dk1, showLegend: false, barGapWidthPct: 45 };
function hbar(s, x, y, w, h, labels, values, colors, fmt, extra) { s.addChart(pres.charts.BAR, [{ name: "v", labels, values }], Object.assign({}, baseChart, { x, y, w, h, barDir: "bar", chartColors: colors, dataLabelPosition: "outEnd", dataLabelFormatCode: fmt || "0", catAxisOrientation: "maxMin" }, extra || {})); }
function hbar2(s, x, y, w, h, labels, series, colors, fmt, extra) { s.addChart(pres.charts.BAR, series.map(sr => ({ name: sr.name, labels, values: sr.values })), Object.assign({}, baseChart, { x, y, w, h, barDir: "bar", chartColors: colors, dataLabelPosition: "outEnd", dataLabelFormatCode: fmt || "0", catAxisOrientation: "maxMin", showLegend: true, legendPos: "t", legendFontSize: 9, legendFontFace: "+mn-lt", legendColor: H.dk2, barGapWidthPct: 55 }, extra || {})); }
function line(s, x, y, w, h, labels, series, colors, extra) { s.addChart(pres.charts.LINE, series.map(sr => ({ name: sr.name, labels, values: sr.values })), Object.assign({}, baseChart, { x, y, w, h, chartColors: colors, lineSize: 2.5, lineDataSymbol: "none", showValue: false, showLegend: series.length > 1, legendPos: "t", legendFontSize: 9, legendFontFace: "+mn-lt", legendColor: H.dk2, valAxisHidden: false, valAxisLabelColor: H.dk2, valAxisLabelFontSize: 8, valAxisLabelFontFace: "+mn-lt", valGridLine: { color: H.lt2, size: 0.5 } }, extra || {})); }
function table(s, x, y, w, rows, colW, opts) {
  if (LIGHT && !(opts && opts.keep)) return;
  const fs0 = (opts && opts.fontSize) || 10;
  const head = rows[0].map(t => (typeof t === "object") ? { text: String(t.t), options: Object.assign({ bold: true, color: H.dk2, fontSize: Math.min(9, fs0), fill: { color: H.lt2 } }, t.o || {}) } : { text: String(t), options: { bold: true, color: H.dk2, fontSize: Math.min(9, fs0), fill: { color: H.lt2 } } });
  const body = rows.slice(1).map(r => r.map(cell => (typeof cell === "object") ? { text: String(cell.t), options: Object.assign({ fontSize: fs0, color: H.dk1 }, cell.o || {}) } : { text: String(cell), options: { fontSize: fs0, color: H.dk1 } }));
  s.addTable([head, ...body], Object.assign({ x, y, w, colW, border: { type: "solid", pt: 0.5, color: H.lt2 }, fontFace: THEME.bodyFontFace, rowH: 0.3, margin: 0.05, valign: "middle" }, opts || {}));
}
function divider(s, num, title, items) {
  s.addText((num ? "Section " + num : "Pour la suite").toUpperCase(), { x: 0.7, y: 1.0, w: 8, h: 0.3, fontSize: 11, color: C.background2, charSpacing: 3, margin: 0, isTextBox: true });
  s.addText(title, { x: 0.7, y: 1.45, w: 11.5, h: 1.4, fontSize: 40, fontFace: THEME.headFontFace, bold: true, color: C.background1, margin: 0, isTextBox: true, valign: "top", fit: "shrink" });
  const out = [];
  items.forEach((it, i) => { out.push({ text: String(i + 1).padStart(2, "0") + "   ", options: { color: C.accent3, bold: true, fontFace: THEME.headFontFace } }); const [a, b] = it.split(" : "); out.push({ text: a, options: { color: C.background1, bold: true } }); if (b) out.push({ text: "  ·  " + b, options: { color: C.background2 } }); out[out.length - 1].options.breakLine = i < items.length - 1; out[out.length - 1].options.paraSpaceAfter = 14; });
  s.addText(out, { x: 0.7, y: 3.2, w: 11.8, h: 3.6, fontSize: 15, color: C.background2, margin: 0, isTextBox: true, valign: "top", fit: "shrink" });
}
const good = { color: H.accent2, bold: true }, bad = { color: H.accent1, bold: true };

// ---------- couverture ----------
pres.addSection({ title: "Ouverture" });
{
  const s = pres.addSlide({ masterName: "DARK", sectionTitle: "Ouverture" });
  s.addText("CHICHI CASTELNANGO · CRÉA META", { x: 0.7, y: 0.6, w: 8, h: 0.3, fontSize: 11, color: C.background2, charSpacing: 3, margin: 0, isTextBox: true });
  s.addText("Ce que les créas nous disent — et ce qu'on en fait.", { x: 0.7, y: 2.2, w: 11, h: 2.0, fontSize: 44, fontFace: THEME.headFontFace, bold: true, color: C.background1, margin: 0, isTextBox: true, valign: "top" });
  s.addText("22 octobre 2026 · chiffres hors opérations sauf mention · CA attribué Meta 7 jours clic", { x: 0.7, y: 6.7, w: 11, h: 0.3, fontSize: 10, color: C.background2, margin: 0, isTextBox: true });
}
// ---------- section 1 ----------
pres.addSection({ title: "Les études" });
{ const s = pres.addSlide({ masterName: "DARK", sectionTitle: "Les études" }); divider(s, 1, "Les études", ["Usure : combien de temps une créa tient, et à quoi on le voit", "Page d'arrivée : la même page, deux publics", "Hook rate et ajout au panier : ce qui prédit la vente", "Qui recrute : les catégories qui ramènent des nouvelles clientes", "Le texte : pour qui il aide", "Le budget : concentration et rendement"]); }
// 3 · usure
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Les études" });
  frame(s, { kicker: "Étude 1 · usure", tag: "principale",
    title: ["Une créa tient 5 semaines ; sur les 4 suivantes, ", { t: "le ROAS perd 20 à 28 %" }, " et le CPM monte de 13 à 23 %."],
    hero: [pct(mN.roas.ecart_rel) + " / " + pct(mP.roas.ecart_rel), "de ROAS sur les semaines 6 à 9 vs les 5 premières — nouveautés / permanents"],
    lecture: [["Le hook rate ne s'use pas (" + pct(mN.hook.ecart_rel) + " / " + pct(mP.hook.ecart_rel) + ") : ", { t: "c'est l'après-clic qui s'use" }, " — taux d'achat " + pct(mN.t_ach.ecart_rel) + " / " + pct(mP.t_ach.ecart_rel) + "."], ["Les permanents gardent mieux leur taux d'achat, mais leur CPM monte plus (" + pct(mP.cpm.ecart_rel) + ") : une créa fatiguée coûte plus cher à diffuser."], [{ t: "Interrogation", i: true, c: C.text2 }, " : l'algorithme pousse-t-il moins une créa qui vieillit, ou est-ce son audience qui sature ?"]],
    action: [[{ t: "Une créa qui ne marche pas le premier mois, on la coupe." }], ["On étale les lancements : ", { t: "pas plus de 6 à 10 pubs en plus à la fois" }, ", réparties dans le temps, et on force leur diffusion."], ["On sépare les ensembles ", { t: "par catégorie d'assets" }, " pour piloter les budgets."]],
    legend: "Indices base S1 = 100 · 203 créas, 18 mois hors OP (132 nouveautés, 71 permanents) · même base pour le ROAS, le hook rate, le taux d'achat et le CPM", badge: "cohortes 18 mois · hors OP" });
  if (LIGHT) { section(s, 0.5, 1.78, 7.0, "ROAS indexé par semaine depuis le lancement"); line(s, 0.5, 1.95, 7.0, 4.6, wk, [{ name: "nouveautés", values: idx(rawN) }, { name: "permanents", values: idx(rawP) }], [H.accent2, H.accent4]); }
  else {
  section(s, 0.5, 1.78, 5.7, "ROAS indexé par semaine depuis le lancement"); line(s, 0.5, 1.95, 5.7, 1.75, wk, [{ name: "nouveautés", values: idx(rawN) }, { name: "permanents", values: idx(rawP) }], [H.accent2, H.accent4]);
  section(s, 0.5, 3.75, 5.7, "Hook rate indexé — l'accroche tient"); line(s, 0.5, 3.92, 5.7, 1.45, wk, [{ name: "nouveautés", values: hookN }, { name: "permanents", values: hookP }], [H.accent2, H.accent4]); }
  miniKpis(s, [["créas suivies", "203", "132 nouveautés · 71 permanents, 18 mois", C.text1], ["observées en S9", "78", "sur 203 au départ : 45 nouveautés, 33 permanents", C.text1]], 1.95, 3.42);
  table(s, 1.45, 5.65, 3.8, [["S6–9 vs S1–5", "ROAS", "achat", "hook", "CPM"], ["nouveautés", { t: pct(mN.roas.ecart_rel), o: bad }, { t: pct(mN.t_ach.ecart_rel), o: bad }, pct(mN.hook.ecart_rel), pct(mN.cpm.ecart_rel)], ["permanents", { t: pct(mP.roas.ecart_rel), o: bad }, pct(mP.t_ach.ecart_rel), pct(mP.hook.ecart_rel), { t: pct(mP.cpm.ecart_rel), o: bad }]], [1.2, 0.65, 0.65, 0.65, 0.65], { rowH: 0.26, fontSize: 8.5 });
}
// 4 · usure détail
if (!LIGHT) {
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Les études" });
  const avg = a => a.reduce((p, c) => p + c, 0) / a.length;
  frame(s, { kicker: "Étude 1 · usure, comment on juge", tag: "insight",
    title: ["Permanents et nouveautés démarrent au même niveau (", { t: "4,2 vs 4,1" }, ") ; les permanents finissent plus bas (", { t: "3,0 vs 3,3" }, ") : on juge en absolu, jamais sur le pic."],
    hero: ["14 jours", "premier verdict, par rapport au compte — jamais par rapport au pic de la créa"],
    lecture: [["Une créa à 75 % de son pic peut rester au-dessus de la moyenne du compte : ", { t: "couper « au pic » coupe des créas rentables" }, "."], ["Les permanents n'ont pas d'avantage au départ (4,2 vs 4,1 sur les 5 premières semaines) et s'érodent plus vite que les nouveautés."], [{ t: "Interrogation", i: true, c: C.text2 }, " : les créas qui passent 6 semaines sont-elles les mêmes concepts que les universelles (section 2) ?"]],
    action: [[{ t: "Pas de plateau le premier mois : on coupe." }], ["Au-dessus de la moyenne du compte : ", { t: "on garde, au-delà de 6 semaines" }, "."], ["Le budget va au banc frais, pas à la créa qu'on pousse."]],
    legend: "ROAS brut par semaine depuis le lancement · 18 mois hors OP · S1–5 et S6–9 = moyennes des semaines", badge: "cohortes 18 mois · hors OP" });
  section(s, 0.5, 1.78, 5.7, "ROAS brut par semaine — nouveautés vs permanents"); line(s, 0.5, 1.95, 5.7, 4.4, wk, [{ name: "nouveautés", values: rawN }, { name: "permanents", values: rawP }], [H.accent2, H.accent4]);
  miniKpis(s, [["ROAS S1–5", fr(avg(rawP.slice(0, 5)), 1) + " vs " + fr(avg(rawN.slice(0, 5)), 1), "permanents vs nouveautés", C.accent4], ["ROAS S6–9", fr(avg(rawP.slice(5)), 1) + " vs " + fr(avg(rawN.slice(5)), 1), "permanents vs nouveautés", C.accent1]], 1.95, 4.4);
}
// 5 · page d'arrivée
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Les études" });
  frame(s, { kicker: "Étude 5 · page d'arrivée", tag: "principale",
    title: ["La même page fait ROAS " + fr(col.rec.roas, 1) + " en reciblage et " + fr(col.acq.roas, 1) + " en acquisition (", { t: "×" + ratioRoas }, ") : c'est le public qui change, pas la page."],
    hero: ["×" + ratioRoas, "de rendement, même page collection — reciblage vs acquisition"],
    lecture: [["Une cliente qui connaît la marque arrive sur la collection et achète ; une inconnue arrive sur la même page et repart : ", { t: "ce qui se joue, c'est avant le clic" }, "."], ["Le panier moyen est le même sur les deux publics : la page ne vend pas plus cher, elle vend plus souvent."], [{ t: "Interrogation", i: true, c: C.text2 }, " : la page produit fait " + fr(prd.acq.roas, 1) + " en acquisition contre " + fr(col.acq.roas, 1) + " pour la collection — sur " + prd.acq.ncrea + " créas seulement : une amorce, pas une preuve."]],
    action: [[{ t: "Page produit par défaut" }, " sur les nouvelles créas : c'est le premier test, pas une certitude."], ["Test en reciblage : ", { t: "collection vs non-collection" }, "."], ["En reciblage aussi : ", { t: "des pages collection ciblées pour rediriger vers les produits qu'on veut écouler" }, "."], ["On segmente les créas par public avant de retoucher les pages."]],
    legend: "Taux d'ajout = ajouts ÷ vues de page · taux d'achat = achats ÷ vues de page · coût par ajout en relatif, base reciblage collection · page promo (archives, printemps 2025) lue à part · pages non taguées exclues", badge: "H3 · 15/07 → 14/10 · hors OP" });
  const cw = LIGHT ? 3.4 : 2.75, ch = LIGHT ? 2.9 : 1.65, x2 = LIGHT ? 4.1 : 3.45, wb = LIGHT ? 7.0 : 5.7, yb = LIGHT ? 5.0 : 3.65;
  section(s, 0.5, 1.78, cw, "Page collection · ROAS"); hbar(s, 0.5, 1.95, cw, ch, ["reciblage", "acquisition"], [col.rec.roas, col.acq.roas], [H.accent2, H.accent4], "0.0");
  section(s, x2, 1.78, cw, "Page collection · ajout au panier"); hbar(s, x2, 1.95, cw, ch, ["reciblage", "acquisition"], [col.rec.t_atc * 100, col.acq.t_atc * 100], [H.accent3, H.accent3], "0.0\"%\"");
  section(s, 0.5, yb, cw, "Page produit · ROAS (" + prd.acq.ncrea + " créas : amorce)"); hbar(s, 0.5, yb + 0.17, cw, 1.45, ["reciblage", "acquisition"], [prd.rec.roas, prd.acq.roas], [H.accent2, H.accent4], "0.0");
  section(s, x2, yb, cw, "Page produit · ajout au panier"); hbar(s, x2, yb + 0.17, cw, 1.45, ["reciblage", "acquisition"], [prd.rec.t_atc * 100, prd.acq.t_atc * 100], [H.accent3, H.accent3], "0.0\"%\"");
  miniKpis(s, [["page produit · acquisition", fr(prd.acq.roas, 1), "de ROAS contre " + fr(col.acq.roas, 1) + " en collection — " + prd.acq.ncrea + " créas, amorce", C.accent2], ["panier moyen", "≈ égal", Math.round(Math.abs(col.rec.panier / col.acq.panier - 1) * 100) + " % d'écart entre les deux publics : la page vend plus souvent, pas plus cher", C.text1]], 1.95, 3.32);
  const rc = v => "×" + fr(v.cout_atc / col.rec.cout_atc, 1);
  table(s, 0.5, 5.42, 7.0, [["page · public", "créas", "ajout panier", "coût / ajout", "achat", "ROAS"], ["collection · reciblage", String(col.rec.ncrea), fr(col.rec.t_atc * 100, 1) + " %", "×1", { t: fr(col.rec.t_ach * 100, 2) + " %", o: good }, { t: fr(col.rec.roas, 1), o: good }], ["collection · acquisition", String(col.acq.ncrea), fr(col.acq.t_atc * 100, 1) + " %", { t: rc(col.acq), o: bad }, { t: fr(col.acq.t_ach * 100, 2) + " %", o: bad }, { t: fr(col.acq.roas, 1), o: bad }], ["produit · reciblage", String(prd.rec.ncrea), fr(prd.rec.t_atc * 100, 1) + " %", rc(prd.rec), fr(prd.rec.t_ach * 100, 2) + " %", fr(prd.rec.roas, 1)], ["produit · acquisition", String(prd.acq.ncrea), fr(prd.acq.t_atc * 100, 1) + " %", rc(prd.acq), fr(prd.acq.t_ach * 100, 2) + " %", { t: fr(prd.acq.roas, 1), o: good }]], [2.3, 0.7, 1.1, 1.1, 0.9, 0.9], { rowH: 0.26, fontSize: 9.5 });
}
// 6 · panier vs hook
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Les études" });
  frame(s, { kicker: "Étude · attirer / vendre", tag: "principale",
    title: ["Le hook rate ne prédit pas la vente : la lingerie accroche ×2,7, mais ", { t: "les permanents ajoutent au panier le plus (9,1 %)" }, "."],
    hero: ["×1,7", "d'ajout au panier pour les permanents vs les nouveautés — avec deux fois moins d'accroche"],
    lecture: [["Hook rate et ajout au panier ne vont pas ensemble : ", { t: "ce qui arrête le pouce n'est pas ce qui fait acheter" }, "."], ["Le multi-produit a la pire accroche et un des paniers les plus bas : trop de choses à regarder, rien à vouloir."], [{ t: "Interrogation", i: true, c: C.text2 }, " : les cinq « attire-sans-vendre » de l'été — promesse trop forte, ou page qui ne tient pas la promesse ?"]],
    action: [[{ t: "On juge une créa sur l'ajout au panier" }, ", pas sur le hook."], ["Une accroche forte qui ne vend pas se retravaille après le clic (page, prix, promesse) plutôt que de se couper."]],
    legend: "Accroche forte = hook rate > 29,5 % (médiane des groupes, 12 mois) · taux panier = ajouts ÷ vues de page · tri décroissant par panier", badge: "H3 · 15/07 → 14/10 · acquisition · hors OP" });
  section(s, 0.5, 1.78, 7.0, "Ajout au panier (orange) · hook rate (bleu)");
  hbar2(s, 0.5, 1.95, 7.0, 4.6, ["permanents", "lingerie", "mono-produit", "bain", "multi-produit", "nouveautés"], [{ name: "ajout au panier", values: [9.1, 8.1, 8.0, 6.6, 5.5, 5.4] }, { name: "hook rate", values: [14.4, 33.6, 18.3, 12.3, 5.6, 27.9] }], [H.accent3, H.accent4], "0.0\"%\"");
}
// 7 · qui recrute
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Les études" });
  frame(s, { kicker: "Étude · qui recrute", tag: "principale",
    title: ["Le bain et les permanents recrutent +18 % ; ", { t: "la lingerie recrute dans sa saison" }, ", pas en été."],
    hero: ["+18 %", "d'index ROAS en acquisition pour le bain et les permanents (100 = moyenne de l'acquisition)"],
    lecture: [["Bain et permanents sont aussi +25 à +30 % auprès des clientes : ", { t: "forts des deux côtés, ce sont les valeurs sûres" }, "."], ["La lingerie fait −25 % en été et +7 % sur 12 mois : c'est la saison qui parle, pas la gamme."], [{ t: "Interrogation", i: true, c: C.text2 }, " : le multi-produit (−44 % sur 3 mois, égal sur 12) est-il mauvais, ou juste mal placé en acquisition ?"]],
    action: [[{ t: "Produire d'abord bain et permanents mono-produit." }], ["Lingerie de prospection à l'automne-hiver."], ["Le multi-produit reste en reciblage et opérations, sans être banni."]],
    legend: "Index ROAS = ROAS du type ÷ ROAS moyen du public × 100 · multi-produit : petit échantillon sur 12 mois", badge: "H3 · 15/07 → 14/10 · acquisition · hors OP" });
  section(s, 0.5, 1.78, 5.7, "Index ROAS en acquisition — 3 mois");
  hbar(s, 0.5, 1.95, LIGHT ? 7.0 : 5.7, LIGHT ? 4.6 : 3.4, ["bain", "permanent", "mono-produit", "nouveauté", "lingerie", "page collection", "multi-produit"], [118, 118, 111, 78, 75, 75, 56], [H.accent2, H.accent2, H.accent2, H.accent1, H.accent1, H.accent1, H.accent1]);
  miniKpis(s, [["multi-produit · 12 mois", "≈ 100", "sur 12 mois (102), −44 % sur 3 mois : à relire avec plus de volume", C.text1]], 1.95, 3.4);
  const cl = { fill: { color: "E3ECF3" } }, clg = { fill: { color: "E3ECF3" }, color: H.accent2, bold: true };
  table(s, 0.5, 5.42, 7.0, [["index ROAS", { t: "clientes · 3 mois", o: { fill: { color: "D3E0EC" }, color: H.accent4 } }, "nouvelles · 3 mois", "nouvelles · 12 mois"], ["bain", { t: "130", o: clg }, { t: "118", o: good }, "98"], ["permanent", { t: "125", o: clg }, { t: "118", o: good }, "94"], ["lingerie", { t: "102", o: cl }, { t: "75", o: bad }, { t: "107", o: good }]], [2.2, 1.6, 1.6, 1.6], { rowH: 0.28 });
}
// 8 · texte
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Les études" });
  frame(s, { kicker: "Étude · le texte", tag: "principale",
    title: ["Le texte aide à recruter (", { t: "achat ×2,5" }, ") ; auprès des clientes, sans texte fait mieux — à confirmer."],
    hero: ["×2,5 d'achat, +11 % de ROAS", "le paradoxe : avec texte, chaque euro amène 2,5 fois moins de vues de page — mais elles achètent 2,5 fois plus"],
    lecture: [["Avec texte, " + fr(vuesParEuro(TA.avec), 1) + " vues de page par euro contre " + fr(vuesParEuro(TA.sans), 1) + " sans : ", { t: "le texte filtre avant la page, puis convertit" }, " (ajout au panier 15 % vs 6 %)."], ["Il accroche aussi plus (hook 18,5 % vs 9,7 %) — mais 46 % des créas « sans » ne sont pas taguées : prudence."], [{ t: "Interrogation", i: true, c: C.text2 }, " : entre le hook et la page, qui coûte — le clic ou le CPM ? Les deux manquent à la source (réexport Meta)."]],
    action: [[{ t: "Texte court par défaut en acquisition" }, " (accroche + une ligne), à confirmer dès le réexport."], ["Sans texte sur les top créas en reciblage : ", { t: "le test de la période 2" }, "."]],
    legend: "#Wording vs reste, périmètre unifié · vues de page par euro = ROAS ÷ (panier × taux d'achat) · 46 % des créas « sans » en acquisition ne sont pas taguées", badge: "H3 · 15/07 → 14/10 · par audience · hors OP" });
  section(s, 0.5, 1.78, 5.7, "ROAS avec et sans texte, par audience");
  hbar2(s, 0.5, 1.95, LIGHT ? 7.0 : 5.7, LIGHT ? 2.3 : 1.9, ["nouvelles audiences", "clientes"], [{ name: "avec texte", values: [3.6, 5.76] }, { name: "sans texte (ou inconnu)", values: [3.24, 8.7] }], [H.accent1, H.accent5], "0.0");
  section(s, 0.5, LIGHT ? 4.45 : 3.9, 5.7, "Taux d'achat, nouvelles audiences");
  hbar(s, 0.5, LIGHT ? 4.62 : 4.07, LIGHT ? 7.0 : 5.7, LIGHT ? 1.8 : 1.25, ["avec texte", "sans texte (ou inconnu)"], [0.49, 0.19], [H.accent2, H.accent5], "0.00\"%\"");
  miniKpis(s, [["part non taguée", "46 % · 79 %", "des créas « sans texte » en acquisition · chez les clientes : d'où la réserve", C.text1]], 1.95, 3.37);
  const rel = (a, b) => (a >= b ? "+" : "−") + Math.round(Math.abs(a / b - 1) * 100) + " %";
  table(s, 0.5, 5.38, 7.0, [["nouvelles audiences · 3 mois", "avec texte (30)", "sans texte ou inconnu (53)", "écart"], ["hook rate", { t: fr(TA.avec.hook * 100, 1) + " %", o: good }, fr(TA.sans.hook * 100, 1) + " %", { t: rel(TA.avec.hook, TA.sans.hook), o: good }], ["vues de page par euro", fr(vuesParEuro(TA.avec), 1), { t: fr(vuesParEuro(TA.sans), 1), o: good }, { t: rel(vuesParEuro(TA.avec), vuesParEuro(TA.sans)), o: bad }], ["ajout au panier (par vue de page)", { t: fr(TA.avec.t_atc * 100, 1) + " %", o: good }, fr(TA.sans.t_atc * 100, 1) + " %", { t: rel(TA.avec.t_atc, TA.sans.t_atc), o: good }], ["taux d'achat (par vue de page)", { t: fr(TA.avec.t_ach * 100, 2) + " %", o: good }, fr(TA.sans.t_ach * 100, 2) + " %", { t: rel(TA.avec.t_ach, TA.sans.t_ach), o: good }], ["ROAS", { t: fr(TA.avec.roas, 1), o: good }, fr(TA.sans.roas, 2), { t: rel(TA.avec.roas, TA.sans.roas), o: good }], ["taux de clic · CPM", "réexport Meta", "réexport Meta", "—"]], [2.9, 1.3, 1.6, 1.2], { rowH: 0.205, fontSize: 8.5 });
}
// 9 · le budget
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Les études" });
  frame(s, { kicker: "Étude · le budget", tag: "concentration et rendement",
    title: [{ t: "5 créas font 72 % du CA" }, " sur 3 mois, et doubler le budget d'une créa lui coûte 15 % de ROAS : on scale en largeur, pas en hauteur."],
    hero: ["72 %", "du CA sur 5 créas en 3 mois — 48 % sur 12 mois"],
    lecture: [["La bande 6-10 reçoit 14 % de la dépense pour un ROAS de 2,2 ; la bande 11-20, 8 % pour 4,3 : ", { t: "l'argent n'est pas là où le rendement est" }, "."], ["Pousser une créa fait saturer son audience, pas la créa : −15 % de ROAS par doublement, 68 % décrochent."], [{ t: "Interrogation", i: true, c: C.text2 }, " : la bande 6-10 est-elle sur-poussée, ou ce sont des créas « à retravailler » (section 2) ?"]],
    action: [[{ t: "Plus de bonnes créas, pas plus de budget par créa." }], ["Réallouer de la bande 6-10 vers la bande 11-20 et le banc frais."], ["Scaler la dépense totale vers des créas fraîches, pas vers les mêmes."]],
    legend: "Bandes de créas classées par CA attribué, acquisition hors OP · au-delà des 20 : 16 % de la dépense pour 8 % du CA · test intra-créa sur 25 créas", badge: "H3 · 15/07 → 14/10 · hors OP" });
  if (!LIGHT) { section(s, 0.5, 1.78, 5.7, "Part de la dépense par bande de créas — 3 mois");
  hbar(s, 0.5, 1.95, 5.7, 1.75, ["top 5", "créas 6 à 10", "créas 11 à 20", "au-delà"], [62, 14, 8, 16], [H.accent1, H.accent5, H.accent5, H.accent5], "0\"%\""); }
  section(s, 0.5, LIGHT ? 1.78 : 3.78, 5.7, "ROAS par bande de créas — 3 mois");
  hbar(s, 0.5, LIGHT ? 1.95 : 3.95, LIGHT ? 7.0 : 5.7, LIGHT ? 4.6 : 1.9, ["top 5", "créas 6 à 10", "créas 11 à 20", "au-delà des 20"], [bandes.bande_5.roas, bandes.bande_6_10.roas, bandes.bande_11_20.roas, bandes.bande_21_plus.roas], [H.accent2, H.accent1, H.accent2, H.accent1], "0.0");
  miniKpis(s, [["part du CA · top 5", "72 %", "pour 62 % de la dépense · 48 % du CA sur 12 mois", C.accent1], ["créas qui décrochent", "68 %", "quand on double leur budget (17 sur 25)", C.text1]], 1.95, 3.9);
}
// ---------- section 2 ----------
pres.addSection({ title: "Ce qu'on en comprend, ce qu'on en fait" });
{ const s = pres.addSlide({ masterName: "DARK", sectionTitle: "Ce qu'on en comprend, ce qu'on en fait" }); divider(s, 2, "Ce qu'on en comprend, ce qu'on en fait", ["Ce qu'on a appris : en une page", "Le nouveau scoring créa : universelles, convertisseuses, recruteuses", "Ce qu'on a tranché, et ce qu'on teste", "Le rétro-planning : trois temps"]); }
// 11 · synthèse
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Ce qu'on en comprend, ce qu'on en fait" });
  frame(s, { kicker: "Ce qu'on a appris", tag: "en une page", title: ["Huit faits, ", { t: "huit gestes" }, "."], badge: "H3 · H12 · hors OP" });
  table(s, 0.5, 1.75, 12.33, [["ce qu'on a vu", "ce qu'on en fait"],
    [{ t: "Nouvelles audiences et clientes sont deux mondes : la même page, le même panier, un résultat ×3,5.", o: { bold: true } }, "Segmenter les créas par public et juger chaque public à part."],
    [{ t: "Le bain, les permanents et le mono-produit recrutent mieux ; la lingerie recrute dans sa saison.", o: { bold: true } }, "Produire d'abord bain et permanents mono-produit ; lingerie à l'automne-hiver."],
    [{ t: "Le texte aide à recruter ; auprès des clientes, il semble inutile.", o: { bold: true } }, "Texte court en acquisition ; test sans texte sur les top créas en reciblage."],
    [{ t: "Une poignée de créas fait le chiffre, et elle change souvent.", o: { bold: true } }, "Un banc profond, renouvelé souvent."],
    [{ t: "Le hook rate ne prédit pas la vente.", o: { bold: true } }, "Juger une créa sur l'ajout au panier, pas sur le hook rate."],
    [{ t: "Une créa qu'on pousse décroche : c'est son audience qui sature.", o: { bold: true } }, "Étaler les lancements, scaler en largeur."],
    [{ t: "Une créa tient cinq semaines ; le hook rate tient, l'après-clic s'use.", o: { bold: true } }, "Renouveler tôt, couper en absolu par rapport au compte."],
    [{ t: "Les grosses remises recrutent deux fois moins cher.", o: { bold: true } }, "Préparer les créas avant, charger pendant, récupérer après."]], [7.2, 5.13], { h: 4.6, rowH: [0.36, 0.53, 0.53, 0.53, 0.53, 0.53, 0.53, 0.53, 0.53], fontSize: 12.5, margin: [0.14, 0.08, 0.14, 0.08], keep: true });
}
// 12 · scoring
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Ce qu'on en comprend, ce qu'on en fait" });
  frame(s, { kicker: "Le nouveau scoring créa", tag: "nouveau",
    title: ["On cherche des ", { t: "universelles" }, " et des ", { t: "convertisseuses", c: C.accent2 }, " ; les recruteuses sont bienvenues."],
    hero: ["61 %", "du CA porté par 11 créas universelles (sur 37 notées)"],
    lecture: [["Chaque créa est notée sur deux axes : ce qu'elle fait auprès des nouvelles audiences, et auprès des clientes (100 = moyenne du public)."], ["Les 14 « à retravailler » pèsent 20 % du CA avec le plus faible rendement : ", { t: "c'est là que dort le budget" }, "."], [{ t: "Interrogation", i: true, c: C.text2 }, " : les universelles partagent-elles un concept (mono-produit porté, bain) qu'on peut cloner ?"]],
    action: [[{ t: "Cloner les universelles." }], ["Réparer l'après-clic des « à retravailler », ou réallouer."], ["Recruteuses en acquisition, convertisseuses en reciblage : ", { t: "on ne les juge pas sur l'autre public" }, "."]],
    legend: "Lecture 12 mois (3 mois trop mince côté clientes) · index acquisition × index clientes", badge: "H12 · hors OP" });
  const q = [{ x: 0.5, y: 1.75, t: "Convertisseuses", d: "fortes avec les clientes · reciblage", v: "5 %", n: "6 créas", c: C.accent2 }, { x: 4.05, y: 1.75, t: "Universelles", d: "recrutent et convertissent · protéger, cloner", v: "61 %", n: "11 créas", c: C.accent2 }, { x: 0.5, y: 3.85, t: "À retravailler", d: "sous la moyenne des deux · après-clic, réallouer", v: "20 %", n: "14 créas", c: C.accent1 }, { x: 4.05, y: 3.85, t: "Recruteuses", d: "fortes en acquisition · budget acquisition", v: "14 %", n: "6 créas", c: C.accent4 }];
  for (const k of q) {
    s.addShape(pres.shapes.RECTANGLE, { x: k.x, y: k.y, w: 3.45, h: 1.95, fill: { color: "FFFFFF" }, line: { color: H.lt2, width: 1 } });
    s.addText([{ text: k.t, options: { fontSize: 14, fontFace: THEME.headFontFace, bold: true, color: k.c, breakLine: true } }, { text: k.d, options: { fontSize: 9, italic: true, color: C.text2 } }], { x: k.x + 0.2, y: k.y + 0.12, w: 3.1, h: 0.7, margin: 0, isTextBox: true, valign: "top" });
    s.addText(k.v, { x: k.x + 0.2, y: k.y + 0.85, w: 1.5, h: 0.65, fontSize: 30, fontFace: THEME.headFontFace, bold: true, color: k.c, margin: 0, isTextBox: true });
    s.addText("du CA", { x: k.x + 0.2, y: k.y + 1.52, w: 1.5, h: 0.25, fontSize: 9, color: C.text2, margin: 0, isTextBox: true });
    s.addText(k.n, { x: k.x + 1.8, y: k.y + 1.0, w: 1.5, h: 0.45, fontSize: 16, fontFace: THEME.headFontFace, bold: true, color: C.text1, margin: 0, isTextBox: true });
  }
  s.addText("↑ convertit (clientes)       recrute (nouvelles audiences) →", { x: 0.5, y: 5.85, w: 7.0, h: 0.22, fontSize: 9, color: C.text2, margin: 0, isTextBox: true });
}
// 13 · tranché + tests (fusion)
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Ce qu'on en comprend, ce qu'on en fait" });
  frame(s, { kicker: "Ce qu'on a tranché, ce qu'on teste", tag: "à cocher ensemble", title: ["À gauche ce qu'on met en place, à droite ", { t: "ce qu'on teste" }, "."], badge: "plan" });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 6.05, h: 5.0, fill: { color: "FFFFFF" }, line: { color: H.accent1, width: 1.5 } });
  s.addText("Ce qu'on met en place", { x: 0.75, y: 1.83, w: 5.5, h: 0.4, fontSize: 18, fontFace: THEME.headFontFace, bold: true, color: C.accent1, margin: 0, isTextBox: true });
  s.addText(bullets([["Assets ", { t: "FR et EN séparés" }, " — FR = France, Belgique, Luxembourg, Suisse ; EN = le reste"], ["Des ensembles ", { t: "par catégorie de créa" }, " : permanents · statiques · GIF · collection spécifique — et quelques créas bijoux"], ["Une seule campagne catalogue"], [{ t: "Page produit par défaut" }, ", collection vs non-collection à tester en reciblage"], [{ t: "Texte court par défaut" }, " (accroche + une ligne)"], ["Le KPI : ", { t: "le ROAS nouvelles clientes" }, ", pas le ROAS total"], ["La coupe : ", { t: "en absolu" }, ", par rapport au compte — jamais « sous le pic de la créa »"]], 12), { x: 0.75, y: 2.35, w: 5.5, h: 4.2, fontSize: 14, color: C.text1, margin: 0, isTextBox: true, valign: "top", fit: "shrink" });
  s.addShape(pres.shapes.RECTANGLE, { x: 6.78, y: 1.7, w: 6.05, h: 5.0, fill: { color: "FFFFFF" }, line: { color: H.accent2, width: 1.5 } });
  s.addText("Ce qu'on teste", { x: 7.03, y: 1.83, w: 5.5, h: 0.4, fontSize: 18, fontFace: THEME.headFontFace, bold: true, color: C.accent2, margin: 0, isTextBox: true });
  s.addText(bullets([["La page d'arrivée en reciblage : ", { t: "collection vs non-collection" }], ["Le texte en reciblage, sur les top créas : ", { t: "avec vs sans" }], ["Les créas bijoux : est-ce que ça repart ?"], ["Les nouveaux formats en acquisition : split screen, mosaïque, GIF"], ["Plus tard : l'incrémentalité produit (annexe 1)"]], 12), { x: 7.03, y: 2.35, w: 5.5, h: 2.6, fontSize: 14, color: C.text1, margin: 0, isTextBox: true, valign: "top", fit: "shrink" });
  s.addShape(pres.shapes.RECTANGLE, { x: 7.03, y: 5.05, w: 5.55, h: 1.45, fill: { color: TINT_R }, line: { color: TINT_R, width: 0 } });
  s.addText([{ text: "Les questions qu'on veut fermer", options: { bold: true, breakLine: true, paraSpaceAfter: 4 } }, { text: "Le texte aide-t-il les clientes, ou sont-ce les meilleures créas qui n'en ont pas ?", options: { bullet: true, breakLine: true } }, { text: "La page produit recrute-t-elle moins cher ?", options: { bullet: true, breakLine: true } }, { text: "Le multi-produit a-t-il sa place en acquisition ?", options: { bullet: true } }], { x: 7.2, y: 5.1, w: 5.25, h: 1.35, fontSize: 11.5, color: C.text1, valign: "middle", margin: 0, isTextBox: true, fit: "shrink" });
}
// 14 · rétro-planning
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Ce qu'on en comprend, ce qu'on en fait" });
  frame(s, { kicker: "Rétro-planning", tag: "ordre, pas de dates", title: ["Trois temps : ", { t: "le setup" }, ", ", { t: "les tests", c: C.accent2 }, ", ", { t: "l'industrialisation", c: C.accent4 }, "."], legend: "Règle de lecture A vs B : ≥ 100 € de dépense chacun et ≥ 20 % d'écart, sinon « pas de différence lisible ».", badge: "plan" });
  const P = [{ t: "Période 1 · le setup", c: H.accent1, tests: [["Page en reciblage : ", { t: "collection vs non-collection" }]], setup: ["Split FR / EN", "Ensembles par catégorie de créa", "Une campagne catalogue", "Textes partout", "Permanents, mois A (5)"] },
    { t: "Période 2 · les tests", c: H.accent2, tests: [["Texte en reciblage : ", { t: "avec vs sans" }, " (top créas)"], [{ t: "Créas bijoux" }], [{ t: "Nouveaux formats" }, " : split screen, mosaïque, GIF"]], setup: ["Permanents, mois B (10)", "Pages collection ciblées (écouler)"] },
    { t: "Ensuite", c: H.accent4, tests: [[{ t: "Industrialisation des formats qui marchent" }], [{ t: "Réassort fréquent des permanents" }]], setup: ["Prochain cycle de tests"] }];
  P.forEach((p, i) => {
    const x = 0.5 + i * 4.15;
    s.addShape(pres.shapes.CHEVRON, { x, y: 1.8, w: 4.0, h: 0.65, fill: { color: p.c }, line: { color: p.c, width: 0 } });
    s.addText(p.t, { x: x + 0.3, y: 1.8, w: 3.4, h: 0.65, fontSize: 14, fontFace: THEME.headFontFace, bold: true, color: C.background1, valign: "middle", margin: 0, isTextBox: true });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 2.6, w: 4.0, h: 1.85, fill: { color: TINT_R }, line: { color: H.accent2, width: 1.25 } });
    s.addText(i === 2 ? "CE QU'ON INSTALLE" : "LES TESTS", { x: x + 0.2, y: 2.68, w: 3.5, h: 0.22, fontSize: 8.5, bold: true, color: C.accent2, charSpacing: 2, margin: 0, isTextBox: true });
    s.addText(bullets(p.tests, 8), { x: x + 0.2, y: 2.95, w: 3.6, h: 1.45, fontSize: 13.5, color: C.text1, margin: 0, isTextBox: true, valign: "top", fit: "shrink" });
    s.addShape(pres.shapes.RECTANGLE, { x, y: 4.55, w: 4.0, h: 1.35, fill: { color: "FFFFFF" }, line: { color: H.lt2, width: 1 } });
    s.addText("MISE EN PLACE", { x: x + 0.2, y: 4.62, w: 3.5, h: 0.22, fontSize: 8, color: C.text2, charSpacing: 2, margin: 0, isTextBox: true });
    s.addText(p.setup.map((it, j) => ({ text: it, options: { bullet: true, breakLine: j < p.setup.length - 1, paraSpaceAfter: 3 } })), { x: x + 0.2, y: 4.85, w: 3.6, h: 1.0, fontSize: 10.5, color: C.text2, margin: 0, isTextBox: true, valign: "top", fit: "shrink" });
  });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.05, w: 12.33, h: 0.8, fill: { color: TINT_L }, line: { color: TINT_L, width: 0 } });
  s.addText([{ text: "PROPOSITIONS, À PART   ", options: { fontSize: 8.5, bold: true, color: C.text2, charSpacing: 2 } }, { text: "Incrémentalité produit (annexe 1)  ·  hold rate et taux de clic dès le réexport Meta  ·  usure par catégorie d'asset une fois les ensembles séparés  ·  page produit vs collection en acquisition, une fois les pages vérifiées", options: { fontSize: 11, color: C.text1 } }], { x: 0.7, y: 6.05, w: 11.9, h: 0.8, valign: "middle", margin: 0, isTextBox: true, fit: "shrink" });
}
// ---------- section 3 ----------
pres.addSection({ title: "La méthode créa" });
{ const s = pres.addSlide({ masterName: "DARK", sectionTitle: "La méthode créa" }); divider(s, 3, "La nouvelle méthode créa", ["Les permanents : un mois les permanents qui marchent, un mois les nouveaux formats", "Ce qu'il me faudrait : la liste, puis la direction", "Prochaines études et annexes"]); }
// 16 · permanents + modèles (fusion)
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "La méthode créa" });
  frame(s, { kicker: "Les permanents", tag: "deux rythmes, cinq modèles", title: ["Un mois ", { t: "les permanents qui marchent" }, ", un mois ", { t: "les nouveaux formats", c: C.accent2 }, " — sur les meilleurs permanents et les nouveaux produits qui marchent."], badge: "méthode" });
  card(s, 0.5, 1.7, 6.05, 2.0, "Un mois · les permanents qui marchent", [["Les permanents en tendance — les 5 premiers par ventes du mois précédent — en vidéos simples, FR et EN."], ["Lancés tôt, jugés à 14 jours."]], C.accent1, "FFFFFF", true);
  card(s, 6.78, 1.7, 6.05, 2.0, "Un mois · les nouveaux formats", [["Les cinq modèles ci-dessous, sur les permanents qui marchent le mieux et les nouveaux produits qui marchent bien."], ["Lancés en batch, par thématique."]], C.accent2, "FFFFFF", true);
  section(s, 0.5, 3.9, 6, "Cinq modèles simples pour varier les concepts");
  const models = [["Statique simple", "packshot porté, une ligne de texte"], ["GIF", "deux ou trois images qui s'enchaînent"], ["Split screen", "avant / après, ou deux coloris côte à côte"], ["Mosaïque", "4 à 6 vignettes d'une même collection"], ["Shortcut vidéo", "10 secondes, plans rapides, mono ou multi-produit"]];
  models.forEach((m, i) => { const x = 0.5 + i * 2.5; s.addShape(pres.shapes.RECTANGLE, { x, y: 4.15, w: 2.35, h: 1.9, fill: { color: "FFFFFF" }, line: { color: H.lt2, width: 1 } }); s.addText(String(i + 1), { x: x + 0.18, y: 4.22, w: 1, h: 0.5, fontSize: 26, fontFace: THEME.headFontFace, bold: true, color: C.accent1, margin: 0, isTextBox: true }); s.addText(m[0], { x: x + 0.18, y: 4.75, w: 2.0, h: 0.5, fontSize: 13.5, fontFace: THEME.headFontFace, bold: true, color: C.text1, margin: 0, isTextBox: true }); s.addText(m[1], { x: x + 0.18, y: 5.25, w: 2.0, h: 0.75, fontSize: 10.5, color: C.text2, margin: 0, isTextBox: true, valign: "top" }); });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 6.2, w: 12.33, h: 0.55, fill: { color: TINT_L }, line: { color: TINT_L, width: 0 } });
  s.addText([{ text: "La règle, les deux mois : ", options: { bold: true } }, { text: "jugée en absolu par rapport au compte à 14 jours ; pas de plateau le premier mois = coupée ; au-dessus du compte = gardée au-delà de six semaines ; le budget va au banc frais." }], { x: 0.7, y: 6.2, w: 11.9, h: 0.55, fontSize: 10.5, color: C.text1, valign: "middle", margin: 0, isTextBox: true });
}
// 17 · la liste
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "La méthode créa" });
  frame(s, { kicker: "Ce qu'il me faudrait", tag: "la liste", title: ["Six éléments à réunir — ", { t: "et ensuite, on choisit la direction" }, "."], badge: "méthode" });
  const items = [["Statiques validées", "la banque, formats et quantité"], ["Images de base", "les visuels validés par gamme"], ["Logos", "et leurs déclinaisons"], ["Typos", "celles qu'on utilise"], ["Interdits de marque", "ce qu'on ne fait jamais"], ["Registre des N°", "produit, mannequin, gamme, page — en bonus"]];
  items.forEach((it, i) => { const x = 0.5 + (i % 3) * 2.4, y = 1.75 + Math.floor(i / 3) * 2.1; s.addShape(pres.shapes.RECTANGLE, { x, y, w: 2.25, h: 1.95, fill: { color: "FFFFFF" }, line: { color: H.lt2, width: 1 } }); s.addShape(pres.shapes.OVAL, { x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5, fill: { color: H.accent1 }, line: { color: H.accent1, width: 0 } }); s.addText(String(i + 1), { x: x + 0.2, y: y + 0.2, w: 0.5, h: 0.5, fontSize: 14, fontFace: THEME.headFontFace, bold: true, color: C.background1, align: "center", valign: "middle", margin: 0, isTextBox: true }); s.addText(it[0], { x: x + 0.2, y: y + 0.85, w: 1.9, h: 0.5, fontSize: 13.5, fontFace: THEME.headFontFace, bold: true, color: C.text1, margin: 0, isTextBox: true, valign: "top", fit: "shrink" }); s.addText(it[1], { x: x + 0.2, y: y + 1.35, w: 1.9, h: 0.5, fontSize: 10, color: C.text2, margin: 0, isTextBox: true, valign: "top" }); });
  s.addShape(pres.shapes.RECTANGLE, { x: 7.8, y: 1.75, w: 5.03, h: 4.05, fill: { color: TINT_R }, line: { color: TINT_R, width: 0 } });
  s.addText("ENSUITE, ON DÉCIDE", { x: 8.02, y: 1.87, w: 4.5, h: 0.22, fontSize: 9, bold: true, color: C.accent2, charSpacing: 2, margin: 0, isTextBox: true });
  s.addText(bullets([[{ t: "Quelle direction" }, " : d'abord les permanents bain mono, ou la lingerie de saison ?"], [{ t: "Quels produits" }, " en premier : CAPRI, MARCELLA, GIGI, la famille ANGÈLE ?"], [{ t: "Quels formats" }, " on ouvre en premier : statique, split screen, mosaïque ?"], [{ t: "Les bijoux" }, " : quelques créas pour voir ?"]], 10), { x: 8.02, y: 2.25, w: 4.6, h: 3.4, fontSize: 12.5, color: C.text1, margin: 0, isTextBox: true, valign: "top" });
}
// 18 · annonce : prochaines études et annexes
{ const s = pres.addSlide({ masterName: "DARK", sectionTitle: "La méthode créa" }); divider(s, null, "Prochaines études et annexes", ["L'incrémentalité produit : la pub crée-t-elle des ventes, ou les attribue-t-elle ? — annexe 1", "Hold rate et taux de clic : dès le réexport Meta", "L'usure par catégorie d'asset : une fois les ensembles séparés", "En annexe : le protocole d'incrémentalité"]); }
// ---------- annexes ----------
pres.addSection({ title: "Annexes" });
function annexFrame(s, o) { o.tag = "annexe"; frame(s, o); }
{ // A1 incrémentalité
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Annexes" });
  annexFrame(s, { kicker: "Annexe 1 · prochaine étude : l'incrémentalité", title: ["La pub crée-t-elle des ventes, ou les attribue-t-elle ? ", { t: "On le saura en un mois, sur quelques produits" }, "."], legend: "Ventes Shopify par produit, au jour · lecture : écart ≥ 20 %, sinon « pas de différence lisible »", badge: "protocole · ordre, pas de dates" });
  const steps = [["Choisir", "Quelques produits que la pub n'a jamais montrés et qui se vendent régulièrement — et autant de produits semblables qu'on ne montrera pas."], ["Mesurer", "Une créa simple par produit, un mois, budget fixe. On compare les ventes avant et pendant, produit montré vs produit non montré."], ["Décider", "Les ventes montent nettement : la pub crée du chiffre, on étend aux permanents. Elles ne bougent pas : la pub attribue sans créer, on réalloue."]];
  steps.forEach((st, i) => { const x = 0.5 + i * 4.15; s.addShape(pres.shapes.CHEVRON, { x, y: 1.8, w: 4.0, h: 0.65, fill: { color: i === 2 ? H.accent2 : H.accent1 }, line: { color: i === 2 ? H.accent2 : H.accent1, width: 0 } }); s.addText(st[0], { x: x + 0.3, y: 1.8, w: 3.4, h: 0.65, fontSize: 15, fontFace: THEME.headFontFace, bold: true, color: C.background1, valign: "middle", margin: 0, isTextBox: true }); s.addShape(pres.shapes.RECTANGLE, { x, y: 2.6, w: 4.0, h: 2.3, fill: { color: "FFFFFF" }, line: { color: H.lt2, width: 1 } }); s.addText(st[1], { x: x + 0.25, y: 2.75, w: 3.5, h: 2.0, fontSize: 12.5, color: C.text1, margin: 0, isTextBox: true, valign: "top" }); });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.1, w: 12.33, h: 1.3, fill: { color: TINT_L }, line: { color: TINT_L, width: 0 } });
  s.addText("LA MÉTHODO", { x: 0.7, y: 5.18, w: 4, h: 0.22, fontSize: 8.5, bold: true, color: C.text2, charSpacing: 2, margin: 0, isTextBox: true });
  s.addText(bullets([["Les ventes par produit au jour — ", { t: "déjà dans la base" }], ["La liste des produits jamais montrés en pub"], ["Une créa simple par produit, un mois, ", { t: "sans toucher au budget" }]], 4), { x: 0.7, y: 5.42, w: 11.9, h: 0.95, fontSize: 11.5, color: C.text1, margin: 0, isTextBox: true, valign: "top", fit: "shrink" });
}
(async () => { const f = "BDD-261022-CHICHI-CC-E-LIVRABLE-deck_crea_client_v4.7" + (LIGHT ? "_epure" : "") + ".pptx"; await pres.writeFile({ fileName: f }); await applyTheme(f, THEME); console.log("written", f); })();
