# Générateur du deck client Chichi (pptx) — v4.7 du 22/10/2026

**statut : à transférer · déposé par le cerveau le 22/10 14h10 · destination : `BDD Master/3-chichi-propositions/deck-crea/pptx/`**

Le deck client « Ce que les créas nous disent — et ce qu'on en fait » (19 pages ; 18 en version épurée avec `LIGHT=1`) est produit par `build.js` (pptxgenjs) à partir des séries JSON de `3-chichi/B-prod-claude/crea/graphiques/`. Le fichier rendu de référence : `BDD-261022-CHICHI-CC-E-LIVRABLE-deck_crea_client_v4.7.pptx` et `…_v4.7_epure.pptx` (+ PDF), déposés par Alexandre à la racine de BDD Master.

## Pipeline
```
npm install pptxgenjs            # une fois, dans ce dossier (jszip vient avec)
node build.js                    # écrit BDD-261022-CHICHI-CC-E-LIVRABLE-deck_crea_client_v4.7.pptx
LIGHT=1 node build.js            # version épurée (…_v4.7_epure.pptx) : mêmes données, une page par étude = titre + un graphique + « ce qu'on fait »
python3 fix_ppr.py <fichier>.pptx    # retire les <a:pPr> en milieu de paragraphe (quirk pptxgenjs sur les puces à runs mixtes)
soffice --headless --convert-to pdf <fichier>.pptx
pdftoppm -jpeg -r 80 <fichier>.pdf page   # planches de contrôle (PIL pour la grille), à regarder page par page
```
Variable `GRAPHIQUES=<dossier>` pour pointer ailleurs que `../../../3-chichi/B-prod-claude/crea/graphiques/`.

## Séries lues (D2 — chiffre sourcé)
`page_public.json` (3 pages × 2 publics, landing 3 classes, L-BDD-261022-22), `usure_4sem.json` (ROAS, hook, taux d'achat, CPM par semaine, même base 203 créas), `texte_segment.json` (unifié), `concentration_bandes.json` (bandes 1-5 · 6-10 · 11-20 · 21+). Table de conformité : `chiffres_deck_v4.7.md` (BDD-CREA-CHICHI). Les autres chiffres sont écrits en dur dans `build.js` depuis les séries du 21–22/10 (`panier_vs_hook`, `qui_recrute`, `texte_segment`, `texte`, `concentration_bandes`, `promo_ncac`, `produits_ca`, `multi_vs_mono`, scoring) : **à rebrancher sur les JSON** pour la version « chiffres à jour ».

## Gabarit (règles de forme d'Alexandre, 22/10)
- Titre = fait + chiffre. Graphique à gauche (jamais pleine hauteur), bloc vertical à droite : **« Ce qu'on apprend »** (chiffre héros + son explication juste dessous ; insights, apprentissages, une interrogation) / **« Ce qu'on fait »** (plus gros, en puces, sous-puces pour les questions).
- **Chiffres descriptifs (colonne entre graphique et bloc) : deux maximum, complémentaires, jamais une redite du graphique ou du tableau ; indicateur nommé (« index ROAS »)** — règle gravée (`decisions/decisions-alexandre.md`, 22/10 13h03). Centrés verticalement sur le graphique.
- Tableau de détail en bas à gauche, secondaire (petit, centré sous les graphiques).
- Écarts en relatif, pas d'euros, pas de « page inconnue », pas de cadres créa, pas de calendrier promo (annexe), comparaisons A vs B assumées.
- Définitions en pied à gauche, période en badge à droite. Pages de section sombres, numérotées 01, 02… Chiffres héros centrés.
- Les deux versions sortent du même `build.js` : on ne retouche jamais un pptx à la main, on change le générateur ou les séries.

## Manques connus (pour la version « chiffres à jour »)
1. ROAS de la bande « au-delà des 20 créas » : déduit des parts (8 % du CA pour 16 % de la dépense) — à calculer directement.
2. Hook rate par semaine sur la même base que `usure_4sem.json` (203 créas) — aujourd'hui lu sur `usure.json` (cohortes acquisition, plus petit).
3. Texte avec vs sans (nouvelles audiences) : taux de clic, CPM, panier moyen — après réexport Meta (clics sortants vides à la source).
4. Page produit : réglé le 22/10 14h (landing 3 classes, `verification_landing.md`) — n = 2 créas en acquisition, présenté comme une amorce.
5. Les séries `texte.json` et `texte_segment.json` ne partagent pas le même périmètre « sans » (dépense 7 812 vs 14 363) : à unifier.
