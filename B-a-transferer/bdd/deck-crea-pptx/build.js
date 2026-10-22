// Deck client Chichi — v4.5 (retours 22/10 13h03) : séries BDD page_public + usure_4sem, KPIs complémentaires (max 2), « Ce qu'on fait » en avant, fusions 13+14 et 17+18, sommaire prochaines études & annexes
const pptxgen = require("pptxgenjs");
const { applyTheme } = require("./apply_theme.js");
const fs = require("fs"), path = require("path");

const THEME = { name: "Chichi Crea v4.5", headFontFace: "Cambria", bodyFontFace: "Calibri",
  colors: { dk1: "1E1B18", lt1: "F7F3EE", dk2: "6E655B", lt2: "E9E2D8", accent1: "9B1E2E", accent2: "5B8A4A", accent3: "E09A4B", accent4: "7FA7C8", accent5: "C9BFB2", accent6: "3E3A36", hlink: "9B1E2E", folHlink: "6E655B" } };
const H = THEME.colors, TINT_L = "ECE5DA", TINT_R = "E6EEE2";
const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.author = "DataCAt"; pres.title = "Chichi Castelnango — Créa Meta, v4.5";
const C = pres.SchemeColor;
pres.defineSlideMaster({ title: "CONTENT", background: { color: H.lt1 }, objects: [], slideNumber: { x: 12.4, y: 7.05, w: 0.6, h: 0.3, fontSize: 9, color: H.dk2, align: "right" } });
pres.defineSlideMaster({ title: "DARK", background: { color: H.dk1 }, objects: [] });

// ---------- séries BDD-CREA-CHICHI (L-BDD-261022-19) ----------
// séries JSON : variable GRAPHIQUES, sinon le chemin depuis 3-chichi-propositions/deck-crea/pptx/
const G = (process.env.GRAPHIQUES || path.join(__dirname, "..", "..", "..", "3-chichi", "B-prod-claude", "crea", "graphiques")) + path.sep;
const loadJSON = n => JSON.parse(fs.readFileSync(G + n, "utf8"));
const PAGE = loadJSON("page_public.json"), US4 = loadJSON("usure_4sem.json"), USW = loadJSON("usure.json");
const wk = ["S1", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9"];
const rawN = wk.map((_, i) => US4.cohortes["nouveautés"].roas_brut_par_semaine[String(i + 1)]), rawP = wk.map((_, i) => US4.cohortes.permanents.roas_brut_par_semaine[String(i + 1)]);
const idx = a => a.map(v => Math.round(v / a[0] * 100));
const hookN = USW.cohortes.nouveautes.slice(0, 9).map(r => r.hook_idx), hookP = USW.cohortes.permanents.slice(0, 9).map(r => r.hook_idx);
const mN = US4.cohortes["nouveautés"].metriques, mP = US4.cohortes.permanents.metriques;
const pct = v => (v > 0 ? "+" : "−") + Math.round(Math.abs(v) * 100) + " %";
const col = { acq: PAGE.pages.collection.acquisition.H3, rec: PAGE.pages.collection.reciblage.H3 };
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
  const x = 7.8, w = 5.03, yT = 1.75, hL = o.hL || 2.55, yA = yT + hL + 0.08, hA = 6.75 - yA;
  s.addShape(pres.shapes.RECTANGLE, { x, y: yT, w, h: hL, fill: { color: TINT_L }, line: { color: TINT_L, width: 0 } });
  s.addText("CE QU'ON APPREND", { x: x + 0.22, y: yT + 0.1, w: 3, h: 0.22, fontSize: 8.5, color: C.text2, charSpacing: 2, margin: 0, isTextBox: true });
  let yText = yT + 0.38;
  if (o.hero) {
    s.addText(o.hero[0], { x: x + 0.22, y: yT + 0.3, w: w - 0.44, h: 0.5, fontSize: 26, fontFace: THEME.headFontFace, bold: true, color: o.heroColor || C.accent1, margin: 0, isTextBox: true, fit: "shrink" });
    s.addText(o.hero[1], { x: x + 0.22, y: yT + 0.8, w: w - 0.44, h: 0.3, fontSize: 10, bold: true, color: C.text1, margin: 0, isTextBox: true, valign: "top", fit: "shrink" });
    yText = yT + 1.15;
  }
  s.addText(lines(o.lecture, 6), { x: x + 0.22, y: yText, w: w - 0.44, h: yT + hL - yText - 0.08, fontSize: 10.5, color: C.text1, valign: "top", margin: 0, isTextBox: true, fit: "shrink" });
  s.addShape(pres.shapes.LINE, { x, y: yA - 0.04, w, h: 0, line: { color: H.accent5, width: 1 } });
  s.addShape(pres.shapes.RECTANGLE, { x, y: yA, w, h: hA, fill: { color: TINT_R }, line: { color: TINT_R, width: 0 } });
  s.addText("CE QU'ON FAIT", { x: x + 0.22, y: yA + 0.1, w: 3, h: 0.22, fontSize: 9, bold: true, color: C.accent2, charSpacing: 2, margin: 0, isTextBox: true });
  s.addText(bullets(o.action, 8), { x: x + 0.22, y: yA + 0.4, w: w - 0.44, h: hA - 0.5, fontSize: 12.5, color: C.text1, valign: "top", margin: 0, isTextBox: true, fit: "shrink" });
}
function miniKpis(s, items, yTop, hChart, x) { // 1 à 2 chiffres complémentaires (jamais une redite du graphique), centrés sur le graphique
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
    legend: "Indices base S1 = 100 · ROAS : 203 créas, 18 mois hors OP (132 nouveautés, 71 permanents) · hook rate : cohortes acquisition", badge: "cohortes 18 mois · hors OP" });
  section(s, 0.5, 1.78, 5.7, "ROAS indexé par semaine depuis le lancement"); line(s, 0.5, 1.95, 5.7, 1.75, wk, [{ name: "nouveautés", values: idx(rawN) }, { name: "permanents", values: idx(rawP) }], [H.accent2, H.accent4]);
  section(s, 0.5, 3.75, 5.7, "Hook rate indexé — l'accroche tient"); line(s, 0.5, 3.92, 5.7, 1.45, wk, [{ name: "nouveautés", values: hookN }, { name: "permanents", values: hookP }], [H.accent2, H.accent4]);
  miniKpis(s, [["créas suivies", "203", "132 nouveautés · 71 permanents, 18 mois", C.text1], ["observées en S9", "78", "sur 203 au départ : 45 nouveautés, 33 permanents", C.text1]], 1.95, 3.42);
  table(s, 1.45, 5.65, 3.8, [["S6–9 vs S1–5", "ROAS", "achat", "hook", "CPM"], ["nouveautés", { t: pct(mN.roas.ecart_rel), o: bad }, { t: pct(mN.t_ach.ecart_rel), o: bad }, pct(mN.hook.ecart_rel), pct(mN.cpm.ecart_rel)], ["permanents", { t: pct(mP.roas.ecart_rel), o: bad }, pct(mP.t_ach.ecart_rel), pct(mP.hook.ecart_rel), { t: pct(mP.cpm.ecart_rel), o: bad }]], [1.2, 0.65, 0.65, 0.65, 0.65], { rowH: 0.26, fontSize: 8.5 });
}
// 4 · usure détail
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Les études" });
  const avg = a => a.reduce((p, c) => p + c, 0) / a.length;
  frame(s, { kicker: "Étude 1 · usure, comment on juge", tag: "insight",
    title: ["Les permanents démarrent plus haut (", { t: "4,2 vs 3,6" }, ") et finissent plus bas (", { t: "3,0 vs 3,3" }, ") : on juge une créa en absolu, jamais sur son pic."],
    hero: ["14 jours", "premier verdict, par rapport au compte — jamais par rapport au pic de la créa"],
    lecture: [["Une créa à 75 % de son pic peut rester au-dessus de la moyenne du compte : ", { t: "couper « au pic » coupe des créas rentables" }, "."], ["L'avantage des permanents, c'est le départ : ils ouvrent plus haut, puis s'érodent plus vite que les nouveautés."], [{ t: "Interrogation", i: true, c: C.text2 }, " : les créas qui passent 6 semaines sont-elles les mêmes concepts que les universelles (section 2) ?"]],
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
    hero: ["×" + ratioRoas, "de rendement, même page collection, mêmes créas — reciblage vs acquisition"],
    lecture: [["Une cliente qui connaît la marque arrive sur la collection et achète ; une inconnue arrive sur la même page et repart : ", { t: "ce qui se joue, c'est avant le clic" }, "."], ["Le panier moyen est identique sur les deux publics : la page ne vend pas plus cher, elle vend plus souvent."], [{ t: "Interrogation", i: true, c: C.text2 }, " : la page produit n'a reçu aucune dépense hors opérations — on ne sait pas encore ce qu'elle vaut en acquisition."]],
    action: [[{ t: "Page produit par défaut" }, " sur les nouvelles créas."], ["Test en reciblage : ", { t: "collection vs non-collection" }, "."], ["En reciblage aussi : ", { t: "des pages collection ciblées pour rediriger vers les produits qu'on veut écouler" }, "."], ["On segmente les créas par public avant de retoucher les pages."]],
    legend: "Taux d'ajout = ajouts ÷ vues de page · taux d'achat = achats ÷ vues de page · coût par ajout en relatif, base reciblage · pages non taguées exclues", badge: "H3 · 15/07 → 14/10 · hors OP" });
  section(s, 0.5, 1.78, 2.8, "Page collection · ROAS"); hbar(s, 0.5, 1.95, 2.75, 1.65, ["reciblage", "acquisition"], [col.rec.roas, col.acq.roas], [H.accent2, H.accent4], "0.0");
  section(s, 3.45, 1.78, 2.8, "Page collection · ajout au panier"); hbar(s, 3.45, 1.95, 2.75, 1.65, ["reciblage", "acquisition"], [col.rec.t_atc * 100, col.acq.t_atc * 100], [H.accent3, H.accent3], "0.0\"%\"");
  section(s, 0.5, 3.65, 5.7, "Page produit · reciblage vs acquisition");
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.82, w: 5.7, h: 1.45, fill: { color: "FFFFFF" }, line: { color: H.accent5, width: 1, dashType: "dash" } });
  s.addText("Aucune dépense hors opérations sur une page produit sur la période : volume insuffisant, à mesurer dès les premières créas « page produit ».", { x: 0.7, y: 3.82, w: 5.3, h: 1.45, fontSize: 10.5, color: C.text2, align: "center", valign: "middle", margin: 0, isTextBox: true });
  miniKpis(s, [["mêmes créas", String(col.acq.ncrea), "diffusées sur les deux publics : seul le public change", C.text1], ["panier moyen", "≈ égal", "+" + Math.round((col.rec.panier / col.acq.panier - 1) * 100) + " % en reciblage : la page vend plus souvent, pas plus cher", C.text1]], 1.95, 3.32);
  table(s, 0.5, 5.42, 7.0, [["public · page collection", "ajout panier", "coût / ajout", "achat", "ROAS"], ["reciblage", fr(col.rec.t_atc * 100, 1) + " %", "×1", { t: fr(col.rec.t_ach * 100, 2) + " %", o: good }, { t: fr(col.rec.roas, 1), o: good }], ["acquisition", fr(col.acq.t_atc * 100, 1) + " %", { t: "×" + ratioCoutAtc, o: bad }, { t: fr(col.acq.t_ach * 100, 2) + " %", o: bad }, { t: fr(col.acq.roas, 1), o: bad }]], [2.4, 1.2, 1.3, 1.0, 1.1], { rowH: 0.3 });
}
// 6 · panier vs hook
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Les études" });
  frame(s, { kicker: "Étude · attirer / vendre", tag: "principale",
    title: ["Le hook rate ne prédit pas la vente : la lingerie accroche ×2,7, mais ", { t: "les permanents ajoutent au panier le plus (9,1 %)" }, "."],
    hero: ["×1,7", "d'ajout au panier pour les permanents vs les nouveautés — avec deux fois moins d'accroche"],
    lecture: [["Hook rate et ajout au panier ne vont pas ensemble : ", { t: "ce qui arrête le pouce n'est pas ce qui fait acheter" }, "."], ["Le multi-produit cumule la pire accroche et le pire panier : trop de choses à regarder, rien à vouloir."], [{ t: "Interrogation", i: true, c: C.text2 }, " : les cinq « attire-sans-vendre » de l'été — promesse trop forte, ou page qui ne tient pas la promesse ?"]],
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
  hbar(s, 0.5, 1.95, 5.7, 3.4, ["bain", "permanent", "mono-produit", "nouveauté", "lingerie", "page collection", "multi-produit"], [118, 118, 111, 78, 75, 75, 56], [H.accent2, H.accent2, H.accent2, H.accent1, H.accent1, H.accent1, H.accent1]);
  miniKpis(s, [["multi-produit · 12 mois", "≈ 100", "sur 12 mois (102), −44 % sur 3 mois : à relire avec plus de volume", C.text1]], 1.95, 3.4);
  const cl = { fill: { color: "E3ECF3" } }, clg = { fill: { color: "E3ECF3" }, color: H.accent2, bold: true };
  table(s, 0.5, 5.42, 7.0, [["index ROAS", { t: "clientes · 3 mois", o: { fill: { color: "D3E0EC" }, color: H.accent4 } }, "nouvelles · 3 mois", "nouvelles · 12 mois"], ["bain", { t: "130", o: clg }, { t: "118", o: good }, "98"], ["permanent", { t: "125", o: clg }, { t: "118", o: good }, "94"], ["lingerie", { t: "102", o: cl }, { t: "75", o: bad }, { t: "107", o: good }]], [2.2, 1.6, 1.6, 1.6], { rowH: 0.28 });
}
// 8 · texte
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Les études" });
  frame(s, { kicker: "Étude · le texte", tag: "principale",
    title: ["Le texte aide à recruter (", { t: "achat ×2,5" }, ") ; auprès des clientes, sans texte fait mieux — à confirmer."],
    hero: ["×2,5 d'achat, +11 % de ROAS", "le paradoxe : avec texte, chaque euro amène moins de vues de page, mais elles achètent bien plus"],
    lecture: [["Le texte convertit mieux celles qui cliquent (achat 0,49 % vs 0,19 % par vue de page) mais ", { t: "fait moins regarder" }, " : hook rate 18,5 % vs 22 %."], ["Chez les clientes, « sans » fait 8,7 contre 5,8 de ROAS — mais la classe « sans » est aux trois quarts non taguée."], [{ t: "Interrogation", i: true, c: C.text2 }, " : le texte coûte-t-il des vues (CPM, taux de clic) ou des clics ? Il manque les deux à la source — réexport Meta."]],
    action: [[{ t: "Texte court par défaut en acquisition" }, " (accroche + une ligne), à confirmer dès le réexport."], ["Sans texte sur les top créas en reciblage : ", { t: "le test de la période 2" }, "."]],
    legend: "#Wording vs reste · taux d'achat = achats ÷ vues de page · hook rate lu sur un périmètre « sans » plus étroit · concept égal : +68 à +109 % de ROAS avec texte", badge: "H3 · 15/07 → 14/10 · par audience · hors OP" });
  section(s, 0.5, 1.78, 5.7, "ROAS avec et sans texte, par audience");
  hbar2(s, 0.5, 1.95, 5.7, 1.9, ["nouvelles audiences", "clientes"], [{ name: "avec texte", values: [3.6, 5.76] }, { name: "sans texte (ou inconnu)", values: [3.24, 8.7] }], [H.accent1, H.accent5], "0.0");
  section(s, 0.5, 3.9, 5.7, "Taux d'achat, nouvelles audiences");
  hbar(s, 0.5, 4.07, 5.7, 1.25, ["avec texte", "sans texte (ou inconnu)"], [0.49, 0.19], [H.accent2, H.accent5], "0.00\"%\"");
  miniKpis(s, [["part non taguée", "46 % · 79 %", "des créas « sans texte » en acquisition · chez les clientes : d'où la réserve", C.text1]], 1.95, 3.37);
  table(s, 0.5, 5.42, 7.0, [["nouvelles audiences · 3 mois", "avec texte", "sans texte (ou inconnu)", "écart"], ["part de la dépense · créas", "13 % · 30", "87 % · 53", "—"], ["hook rate", "18,5 %", { t: "22,0 %", o: good }, { t: "−16 %", o: bad }], ["taux d'achat (par vue de page)", { t: "0,49 %", o: good }, "0,19 %", { t: "+158 %", o: good }], ["ROAS", { t: "3,6", o: good }, "3,24", { t: "+11 %", o: good }], ["taux de clic · CPM · panier", "réexport Meta", "réexport Meta", "—"]], [2.6, 1.4, 1.8, 1.2], { rowH: 0.24, fontSize: 9 });
}
// 9 · le budget
{
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Les études" });
  frame(s, { kicker: "Étude · le budget", tag: "concentration et rendement",
    title: [{ t: "5 créas font 72 % du CA" }, " sur 3 mois, et doubler le budget d'une créa lui coûte 15 % de ROAS : on scale en largeur, pas en hauteur."],
    hero: ["72 %", "du CA sur 5 créas en 3 mois — 48 % sur 12 mois"],
    lecture: [["La bande 6-10 reçoit 14 % de la dépense pour un ROAS de 2,2 ; la bande 11-20, 8 % pour 4,3 : ", { t: "l'argent n'est pas là où le rendement est" }, "."], ["Pousser une créa fait saturer son audience, pas la créa : −15 % de ROAS par doublement, 68 % décrochent."], [{ t: "Interrogation", i: true, c: C.text2 }, " : la bande 6-10 est-elle sur-poussée, ou ce sont des créas « à retravailler » (section 2) ?"]],
    action: [[{ t: "Plus de bonnes créas, pas plus de budget par créa." }], ["Réallouer de la bande 6-10 vers la bande 11-20 et le banc frais."], ["Scaler la dépense totale vers des créas fraîches, pas vers les mêmes."]],
    legend: "Bandes de créas classées par CA attribué, acquisition hors OP · au-delà des 20 : ROAS déduit des parts (8 % du CA pour 16 % de la dépense) · test intra-créa sur 25 créas", badge: "H3 · 15/07 → 14/10 · hors OP" });
  section(s, 0.5, 1.78, 5.7, "Part de la dépense par bande de créas — 3 mois");
  hbar(s, 0.5, 1.95, 5.7, 1.75, ["top 5", "créas 6 à 10", "créas 11 à 20", "au-delà"], [62, 14, 8, 16], [H.accent1, H.accent5, H.accent5, H.accent5], "0\"%\"");
  section(s, 0.5, 3.78, 5.7, "ROAS par bande de créas — 3 mois");
  hbar(s, 0.5, 3.95, 5.7, 1.9, ["top 5", "créas 6 à 10", "créas 11 à 20", "au-delà (déduit)"], [3.9, 2.2, 4.3, 1.6], [H.accent2, H.accent1, H.accent2, H.accent5], "0.0");
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
    [{ t: "Nouvelles audiences et clientes sont deux mondes : la même page, le même panier, un résultat ×3.", o: { bold: true } }, "Segmenter les créas par public et juger chaque public à part."],
    [{ t: "Le bain, les permanents et le mono-produit recrutent mieux ; la lingerie recrute dans sa saison.", o: { bold: true } }, "Produire d'abord bain et permanents mono-produit ; lingerie à l'automne-hiver."],
    [{ t: "Le texte aide à recruter ; auprès des clientes, il semble inutile.", o: { bold: true } }, "Texte court en acquisition ; test sans texte sur les top créas en reciblage."],
    [{ t: "Une poignée de créas fait le chiffre, et elle change souvent.", o: { bold: true } }, "Un banc profond, renouvelé souvent."],
    [{ t: "Le hook rate ne prédit pas la vente.", o: { bold: true } }, "Juger une créa sur l'ajout au panier, pas sur le hook rate."],
    [{ t: "Une créa qu'on pousse décroche : c'est son audience qui sature.", o: { bold: true } }, "Étaler les lancements, scaler en largeur."],
    [{ t: "Une créa tient cinq semaines ; le hook rate tient, l'après-clic s'use.", o: { bold: true } }, "Renouveler tôt, couper en absolu par rapport au compte."],
    [{ t: "Les grosses remises recrutent deux fois moins cher.", o: { bold: true } }, "Préparer les créas avant, charger pendant, récupérer après."]], [7.2, 5.13], { h: 4.6, rowH: [0.36, 0.53, 0.53, 0.53, 0.53, 0.53, 0.53, 0.53, 0.53], fontSize: 12.5, margin: [0.14, 0.08, 0.14, 0.08] });
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
  s.addText([{ text: "PROPOSITIONS, À PART   ", options: { fontSize: 8.5, bold: true, color: C.text2, charSpacing: 2 } }, { text: "Incrémentalité produit (annexe 1)  ·  hold rate et taux de clic dès le réexport Meta  ·  usure par catégorie d'asset une fois les ensembles séparés  ·  page produit en acquisition dès qu'il y a du volume", options: { fontSize: 11, color: C.text1 } }], { x: 0.7, y: 6.05, w: 11.9, h: 0.8, valign: "middle", margin: 0, isTextBox: true, fit: "shrink" });
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
{ const s = pres.addSlide({ masterName: "DARK", sectionTitle: "La méthode créa" }); divider(s, null, "Prochaines études et annexes", ["L'incrémentalité produit : la pub crée-t-elle des ventes, ou les attribue-t-elle ? — annexe 1", "Hold rate et taux de clic : dès le réexport Meta", "L'usure par catégorie d'asset : une fois les ensembles séparés", "Annexes : les opérations · les attributs lus séparément · les produits"]); }
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
{ // A2 opérations
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Annexes" });
  annexFrame(s, { kicker: "Annexe 2 · opérations", title: ["Les grosses remises divisent le NCAC par 2 (braderie −56 %, octobre −49 %) ; ", { t: "les opérations de saison le renchérissent" }, "."],
    hero: ["÷ 2", "de coût par nouvelle cliente pendant les grosses remises, vs les 14 jours d'avant"],
    lecture: [["Braderie −56 %, Black Friday −29 %, octobre 2026 −49 % ; Noël +61 %, été +51 % : ", { t: "c'est la remise qui recrute, pas l'opération" }, "."], ["Les permanents gardent 18 % de leur budget pendant l'OP : on ne les coupe pas."], [{ t: "Interrogation", i: true, c: C.text2 }, " : les clientes recrutées en remise reviennent-elles au prix plein ?"]],
    action: [["Préparer les créas promo avant, ", { t: "charger pendant les grosses remises" }, "."], ["Récupérer les nouvelles clientes en reciblage après."]],
    legend: "NCAC = dépense Meta ÷ nouvelles clientes Shopify · opérations détectées par la dépense Meta, les tokens promo et le volume · pas de J+14 pour octobre 2026", badge: "H12 · opérations · du plus récent au moins récent" });
  section(s, 0.5, 1.78, 6, "NCAC pendant l'OP vs J−14 (écart relatif)");
  hbar(s, 0.5, 1.95, 6.9, 3.9, ["OP octobre 2026", "soldes hiver 25-26", "Noël 2025", "Black Friday 2025", "braderie oct. 2025", "été 2025", "soldes été 2025"], [-49, 5, 61, -29, -56, 51, 14], [H.accent2, H.accent1, H.accent1, H.accent2, H.accent2, H.accent1, H.accent1], "+0\"%\";-0\"%\"", { catAxisLabelPos: "low" });
}
{ // A3 attributs
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Annexes" });
  annexFrame(s, { kicker: "Annexe 3 · attributs, une famille à la fois", title: ["Lus séparément : mono +11 % / multi −44 % · bain +18 % / lingerie −25 % (été) · ", { t: "permanent +18 % / nouveauté −22 %" }, "."],
    hero: ["3", "découpes robustes — mono-produit, gamme de saison, permanent ; les mannequins restent à fiabiliser"],
    lecture: [["Une famille de regex par graphique, jamais mélangées : ", { t: "chaque écart se lit seul" }, "."], ["Mannequins : 97 points d'écart entre Hila et Agatha, mais une couverture de 58 % — pas de règle de casting là-dessus."], [{ t: "Interrogation", i: true, c: C.text2 }, " : le multi-produit (−44 % sur 3 mois, égal sur 12) dépend-il de la saison ?"]],
    action: [["Catégories d'ensembles : ", { t: "bain mono permanent · lingerie mono permanent (sa saison) · mono nouveauté · multi / catalogue (reciblage et OP)" }, "."]],
    legend: "Index ROAS en acquisition, 100 = moyenne", badge: "H3 · 15/07 → 14/10 · acquisition · hors OP" });
  section(s, 0.5, 1.78, 3.3, "Mono vs multi"); hbar(s, 0.5, 1.95, 3.4, 1.4, ["mono-produit", "multi-produit"], [111, 56], [H.accent2, H.accent1]);
  section(s, 4.0, 1.78, 3.3, "Catégorie produit"); hbar(s, 4.0, 1.95, 3.4, 1.4, ["bain", "lingerie"], [118, 75], [H.accent2, H.accent1]);
  section(s, 0.5, 3.5, 3.3, "Permanent vs nouveauté"); hbar(s, 0.5, 3.67, 3.4, 1.4, ["permanent", "nouveauté"], [118, 78], [H.accent2, H.accent1]);
  section(s, 4.0, 3.5, 3.3, "Mannequins (couverture 58 %)"); hbar(s, 4.0, 3.67, 3.4, 2.15, ["Hila", "Ana", "Elena", "Lainara", "Agatha"], [137, 126, 118, 64, 40], [H.accent2, H.accent2, H.accent2, H.accent1, H.accent1]);
}
{ // A4 produits
  const s = pres.addSlide({ masterName: "CONTENT", sectionTitle: "Annexes" });
  annexFrame(s, { kicker: "Annexe 4 · produits", title: ["GABRIELLE décroche (−37 à −49 %) malgré 10 à 20 créas ; ", { t: "CAPRI, MARCELLA, GIGI montent avec peu" }, "."],
    hero: ["+239 %", "pour le tanga ANGÈLE, sans aucune créa d'acquisition"],
    lecture: [[{ t: "La créa amplifie un produit qui monte ; elle ne retient pas un produit qui descend" }, "."], ["La lingerie CANDIDE tient avec 3 créas ; les bijoux restent en cross-sell."], [{ t: "Interrogation", i: true, c: C.text2 }, " : GABRIELLE baisse-t-elle parce qu'elle est sur-exposée, ou parce que sa saison est passée ?"]],
    action: [["Basculer la production de GABRIELLE vers ", { t: "CAPRI, MARCELLA, GIGI" }, "."], ["Produire pour la famille ANGÈLE, GAÏA, YSALIA."]],
    legend: "Ventes sur 3 mois (juillet-septembre) indexées, GABRIELLE une pièce = 100 · (n) = créas reçues · lien produit → créa par token du titre (best-effort)", badge: "juil. → sept. 2026 · Online Store · hors OP" });
  const prods = [["GABRIELLE une pièce (10)", 100, -37], ["GABRIELLE triangle (20)", 33, -49], ["CAPRI une pièce (10)", 27, 24], ["GIGI une pièce (10)", 23, 15], ["MARCELLA une pièce (10)", 21, 27], ["LEMON foulard (15)", 21, -49], ["PRISCA une pièce (10)", 21, -26], ["CANDIDE bustier (3)", 18, 6]];
  section(s, 0.5, 1.78, 6, "Ventes 3 mois indexées · vert = en hausse, rouge = en baisse vs le printemps");
  hbar(s, 0.5, 1.95, 5.7, 3.4, prods.map(p => p[0]), prods.map(p => p[1]), prods.map(p => p[2] >= 0 ? H.accent2 : H.accent1));
  miniKpis(s, [["bijoux", "0,1 %", "de la dépense : restent en cross-sell", C.text1]], 1.95, 3.4);
  table(s, 0.5, 5.42, 7.0, [["progression été vs printemps, sans créa d'acquisition", "gamme", "progression"], ["Tanga ANGÈLE", "lingerie", { t: "+239 %", o: good }], ["Soutien-gorge GARANCE", "lingerie", { t: "+181 %", o: good }], ["Soutien-gorge GAÏA", "lingerie", { t: "+39 %", o: good }]], [4.0, 1.5, 1.5], { rowH: 0.28 });
}

(async () => { const f = "BDD-261022-CHICHI-CC-E-LIVRABLE-deck_crea_client_v4.5.pptx"; await pres.writeFile({ fileName: f }); await applyTheme(f, THEME); console.log("written", f); })();
