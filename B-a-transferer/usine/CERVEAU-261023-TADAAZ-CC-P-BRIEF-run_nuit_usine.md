# BRIEF — run de nuit prospect TADAAZ, usine créa (lot `L-USINE-261023-27`)

**statut : actif · rédigé par le cerveau le 23/10 00h25, complété 01h05 (départ 03h30, coquille 6 concepts, pages test et méthodologie) après brainstorm avec Alexandre (18h13 → 00h09) · à déposer à la racine de `0. IENCLI FACTORY` · la session le range dans `C-pilotage/` · départ des écritures : 03h30**

Compagnons déposés à la racine en même temps : `CERVEAU-261023-TADAAZ-CC-P-CONTEXTE-prospect_tadaaz.md` (la fiche prospect), `CERVEAU-261023-TADAAZ-CC-P-CONTEXTE-concepts_prompts.md` (les 11 concepts, les techniques, tous les prompts), `CREA-261022-GLOBAL-CN-P-CONTEXTE-passation_architecte_crea.md` (passation de l'ancien architecte créa), 5 captures de pubs Tadaaz (PNG) et les captures du site « 100 % personnalisable ».

---

## En-tête
- **Projet / client / session** : usine créa · client **12 = tadaaz** (registre : suivants = autres) · session CREA-ECRITURE (writer), `crea-generation-visuels` pour les images, `crea-verif` lecture seule en fin.
- **Mode** : MODE AUTONOME, **super autonome** (`D-regles/mode-super-autonome.md`, gabarit = `11-pidf/B-prod-claude/run-autonome-pidf.md`). Prospect : aucune vanne client ; Alexandre relit tout demain matin à la main.
- **Lot critique** : non (rien ne sort du dépôt ; le deck pitch est fait par le cerveau).
- **Writer** : CREA-ECRITURE ; verrou `C-pilotage/.ecriture-en-cours` (CREA-ECRITURE · heure · périmètre `12-tadaaz*` + `E-systeme/scripts/` + `C-pilotage/` · L-USINE-261023-27), retiré en fin.
- **Attente** : avant **03h30** tu lis, tu prépares en mémoire, tu **n'écris rien** dans le dépôt (une copie Drive est en cours). Boucle d'attente : `date` toutes les cinq minutes. À 03h30, phase 0.
- **Continuité** : tu ne t'arrêtes jamais ; passation au devlog à chaque frontière de lot et tu reprends (minuteur en arrière-plan si ta fenêtre se ferme). Aucune limite de temps. Heures lues sur `date`.
- **Lot suivant** : V2 d'audit demain matin par Alexandre (8 créas par concept) — pas écrit, la session s'arrête proprement après les rendus.

## 1. Objectif en une phrase, et ce qu'Alexandre verra demain matin
Produire en une nuit, pour **60 € maximum (cap DUR dans le runner, plan ≈ 38 €)**, une exploration créa Tadaaz orientée **vœux 2027 et baptême**, **comparable** (même trio de techniques sur 11 concepts, chaque base poussée en 4 versions), avec un début de deck. Il ouvre deux objets dans `12-tadaaz-livrables/` :
1. **La revue** `D-revue-pour-alexandre-261023-v1.pdf` : 33 lignes de 4 images (base → optimisée → encore améliorée → plus simple), concept par concept, tags visibles ; puis les planches de fin (styles 6 par page · déclinaisons 2 pages · anti-pub 8 par page · re-marque).
2. **La coquille du deck** `B-deck-concepts-261023-v1.pdf` (gabarit Karl, thème ÉCURIE cream), **pré-remplie** avec tes choix triés du meilleur au moins bon, pictos et textes principaux, 2-3 pages de suggestions, plus `deck-picks.json` et les images en fichiers séparés.
Plus le CR six blocs au devlog avec le coût réel par lot et par technique, et la liste des spécificités du site.

## 2. Entrées
| fichier | emplacement | rôle | lecture |
|---|---|---|---|
| ce brief | racine → `C-pilotage/` | le lot | entier |
| `…CONTEXTE-prospect_tadaaz.md` | racine → `12-tadaaz-ressources/A-sources-references/` | fiche prospect sourcée, à compléter au scrape | entier |
| `…CONTEXTE-concepts_prompts.md` | racine → `12-tadaaz/B-concepts/` | 11 concepts, techniques, prompts, lots de fin | entier |
| `…passation_architecte_crea.md` | racine → `C-pilotage/` | règles de run non gravées (brief_ref ≤ 10 %, humains ≤ 20 %, zone sûre, pas de recadrage avant la fin, planche pour Alexandre, « message exhaustif ») | entier ; §3 → file « à graver » dans le CR, pas dans `D-regles/` ce soir |
| pubs Tadaaz | **absentes de la racine** → à capturer toi-même dans la bibliothèque publicitaire Meta (page publique, FR) via le navigateur en phase 0, `12-tadaaz-ressources/H-ads-existantes/` hors git ; sinon référence = fiche prospect §3 (description des trois pubs) + visuels du site | créas natives (`brief_ref`, anti-pub, `re-marque`), charte | — |
| tadaaz.fr | scrape | base site : visuels HD, textes, prix, options | — |
| `run-autonome-pidf.md`, `pidf_run.py`, `pidf_lot.py`, `pidf_v0.py`, `pidf_prod.py`, `moteur.py`, `paths.py` | dépôt | gabarit du run (chemins réparés L-261021-16) | à la demande |
| `D-regles/paquets/demarrage.md`, `generation-visuels.md`, `planches-gabarits.md`, `cloture-de-lot.md` | dépôt | paquets par tâche | entier |
| `D-regles/1-regles-dures.md`, `4-regles-usine.md`, `methode-ecurie-v2.md` §techniques, `3-statuts-visuels.md` | dépôt | règles | à la demande |

## 3. Sorties attendues
| fichier (nom exact) | emplacement | statut à la fin |
|---|---|---|
| `D-revue-pour-alexandre-261023-v1.pdf` | `12-tadaaz-livrables/` | livré |
| `D-plaquette-par-technique-261023-v1.pdf`, `D-plaquette-par-concept-261023-v1.pdf` | `12-tadaaz-livrables/` | livré |
| `B-deck-concepts-261023-v1.pdf` + `deck-picks.json` + `deck-images/<N°>.png` | `12-tadaaz-livrables/` | livré (coquille pré-remplie) |
| `D-planche-lot-<n>-261023.pdf` (une par lot) | `12-tadaaz-livrables/` | livré |
| `_registre.csv`, `journal.md`, `journal_prompts.jsonl`, `C-master.xlsx` + master `.md` | `12-tadaaz-visuels/`, `12-tadaaz/B-prod-claude/`, `12-tadaaz-livrables/` | livré |
| `fiche-client-tadaaz.md` complétée, `banque-site/` (visuels + `index.csv` : URL, page, gamme, produit, prix) | `12-tadaaz-ressources/A-sources-references/` | livré |
| `12-tadaaz/CLAUDE.md` (pointeurs : fiche, palette, zone sûre, concepts, cap) | `12-tadaaz/` | livré |
| CR six blocs | `C-pilotage/devlog.md` (ajout) + ligne `SESSIONS.md` | livré |

## 4. Le run — étapes, quantités, qualité, coût
Coûts unitaires mesurés à PIDF : image neuve medium ≈ 0,08 €, retouche avec image en entrée ≈ 0,09 €, high ≈ 0,22 €, juge ≈ 0,003 €. **Parallélisme 4 à 6 appels** (sans ça le run n'est pas fini à 8h).

| # | étape | quoi | images | qualité | coût ≈ |
|---|---|---|---|---|---|
| 0 | **base site + fiche + casting + contrôle 0** | scrape (tout : pages catégorie, produit — 20 premières par gamme, vœux et baptême d'abord —, bannières, « 100 % personnalisable », page échantillons, livraison, FAQ) → `banque-site/` ; fiche complétée ; palette extraite ; **casting 5** ; **contrôle 0 élargi : 16 images — 2 par technique (6), 2 par boucle (6), 1 anti-pub, 1 re-marque, 2 styles — test de coupe OCR à 4:5 et regard sur le produit, le texte, le logo** ; si une coupe, un logo rogné ou un texte faux, le gabarit de prompt ou la boucle est corrigé **avant toute production en série** ; Alexandre a dit : « beaucoup de contrôle 0 au début » | 5 + 16 | medium | 1,8 € |
| 0b | **nus** | un `source` sans texte par concept (secours + banque déclinaisons) | 11 | medium | 1,0 € |
| 1 | **bases : 11 concepts × 3 passes** | 🌐 `source` site · ✎ `brief` libre · ⚡ `freestyle` contexte réduit (le freestyle choisit **sa** phrase ; les deux autres portent l'accroche imposée du concept) | 33 | medium | 2,6 € |
| 2 | **boucle 1** sur les 33 | « Ton but est d'optimiser ce visuel publicitaire. » | 33 | medium | 3,0 € |
| 3 | **boucle 2** sur les 33 de l'étape 2 | « Fais une version encore améliorée de cette publicité. » | 33 | **high** | 7,3 € |
| 4 | **plus simple** sur les 33 de l'étape 3 | « Fais une version plus simple de cette créa. » | 33 | **high** | 7,3 € |
| 5 | **analyse + réparations** | juge aveugle (drapeaux : produit intact, coupe, lisible, orthographe) ; matrice **concept × gamme × technique** ; **réparation jusqu'à deux fois** sur défaut binaire seulement — **défaut de produit** (carte déformée, mauvaise carte) : on **repart du visuel original du site** avec le même prompt + « garde la carte exactement comme sur l'image » ; **défaut de texte ou flou** : retouche de la sortie, image en entrée + consigne du défaut ; original gardé en parent, tags `réparée-1/2` ; jamais de troisième essai | ≈ 30 | comme l'image | 3,0 € |
| 6 | **styles** (personnalisation, souvenir) | « Même concept, en [photo réaliste / illustration / typographique / flat-lay / 3D / collage]. » | 12 | high | 2,6 € |
| 7 | **déclinaisons** (personnalisation, souvenir) | 4 occasions + 4 produits par concept | 16 | high | 3,5 € |
| 8 | **anti-pub, un seul lot** | planche des 20 meilleures du run + leurs 5 pubs en référence : « Fais une pub pour [gamme] qui ne ressemble à aucune de celles-ci. » | 40 | medium, top 8 en high | 5,4 € |
| 9 | **re-marque** | les 12 meilleures du run (anti-pub comprises) + leurs 5 pubs : « Voici une pub faite pour Tadaaz. Rapproche-la de la marque. » | 12 | high | 2,6 € |
| 10 | **tri, rendus, CR** | règle de tri, revue, plaquettes, coquille pré-remplie, registre, master, CR | — | — | 0,8 € (juge) |
| | **total** | | **≈ 285** | | **≈ 39 € — cap 60, réserve ≈ 21 € pour la V2 d'Alexandre demain** |

**Temps estimé** (parallélisme 5) : phase 0 ≈ 50 min (**les nus en premier : ils servent de chauffe et de tests**) · nus + bases ≈ 10 min · trois boucles ≈ 25 min · analyse + réparations ≈ 10 min · lots de fin ≈ 20 min · rendus ≈ 30-45 min → **rendus vers 6h30-7h**, 8h au pire (adaptation des scripts, arrêt sur point de passage). Alexandre regarde à **8h45**. Si à 8h les rendus ne sont pas là, tu livres **ce qui existe** (revue partielle + coquille partielle) et tu continues.

**Ordre de coupe si le réel dépasse le devis d'un lot** : 9 → 8 (ramené à 24) → 6 → 7 ; jamais les étapes 0 à 5. Le cap, lui, ne bouge pas.

**Format et coupe** : l'API rend du 2:3. Tout est généré en 2:3 **cadré pour le 4:5** : titre, produit, logo dans les **80 % centraux** en hauteur ; **rien d'important dans les 10 % du bas ni du haut** ; logo au-dessus de 15 % du bas ; le 4:5 est la livraison ; le 9:16 se fait **seulement** sur les finales choisies, par extension masquée, pas cette nuit. **Aucun recadrage avant la fin**, master 2:3 conservé.
**Texte** : écrit par le modèle dans l'image (pas d'overlay, pas de compose), tagué `texte-ia` ; une faute se répare (étape 5), ne se rejette pas.
**Humains** : ≤ 20 % des bases, uniquement depuis le casting généré ; **jamais de retouche d'un vrai visage du site**.
**Images par la clé API uniquement** (modèle épinglé U1), jamais dessinées en compute.
**Protocole** : à chaque fin d'étape, planche PDF du lot, trois lignes au devlog (fait / reste / écart), et tu continues — vanne à délai : tu publies, tu attends dix minutes, tu décides seul.

## 5. La règle de tri (reproductible)
1. Drapeaux tous OK (produit intact, pas de coupe, lisible, orthographe) ; 2. diversité : deux images maximum par grappe de ressemblance (même technique, même scène, même cadrage) ; 3. lisibilité du titre (taille, contraste) ; 4. à égalité, l'étape la plus avancée de la ligne (plus simple > encore > optimisée > base). Chaque concept est trié avec cette règle, **le meilleur en premier**, dans la revue comme dans la coquille.

## 6. Les rendus, en deux objets
**A. La revue** `D-revue-pour-alexandre-261023-v1.pdf` — une page par concept : les 3 lignes de 4 (🌐 / ✎ / ⚡ en tête de ligne ; sous chaque image : N°, étape, qualité, drapeaux, `réparée` le cas échéant) ; puis **styles : les 6 sur une page** ; **déclinaisons : une page « 4 occasions », une page « 4 produits »** par concept ; **anti-pub : 8 par page, cinq pages** ; **re-marque : avant / après côte à côte**. Tout en 4:5. Plus `D-plaquette-par-technique` et `-par-concept`.
**B. La coquille du deck** `B-deck-concepts-261023-v1.pdf` (gabarit Karl, cream, nom de code jamais écrit) : couverture · « ce qu'on a vu chez vous » (leurs 3 mécaniques de pub, ce que le site promet) · mode d'emploi (« une créa par concept et par déclinaison », « pas de bras, pas de chocolat ») · **6 concepts retenus par la session (règle §5 appliquée aux concepts), une page par concept : les 4 meilleures créas du concept, prises dans tout ce qui a été produit pour lui** (base, boucles, réparées, styles, déclinaisons — pas forcément la séquence optimisée / encore / simple), triées du meilleur au moins bon, bandeau bénéfices produit et émotionnels, pictos, accroches et punchlines · pages déclinaisons (occasions, produits), page styles, pages « concepts fous » (anti-pub) et « ramenés à la marque » (re-marque) · **deux pages « comment on le teste », plan à 5 concepts retenus** — **page 1, la structure en ABO** : une campagne, **5 ad sets = 5 concepts**, une couleur par concept, chaque ad set dessiné en branches de **3 à 5 créas** (déclinaisons du concept : titres, produits, occasions), budget fixé par ad set (pas de CBO) pour lire chaque concept à budget égal, même audience sur les 5 ; **page 2, le budget dans le temps** : un **budget recommandé** par ad set et par jour (formule d'Alexandre du 18/10 : budget de test = 3 × CPA cible ; CPA cible à fixer avec Tadaaz — la page montre la formule et un exemple marqué « exemple », jamais un chiffre présenté comme le leur) → « avec le budget recommandé, ça fait X € de dépense par ad set la première semaine » ; **semaine 1 : 5 ad sets à budget égal** ; J+3 coupe des créas sans clic ; **semaine 2 : tout le budget sur deux ad sets — le meilleur et le challenger**, les deux restent contrôlés l'un contre l'autre ; J+14 lecture ; puis V2 = 8 créas par concept gagnant ; graphique : 5 barres égales en semaine 1, 2 barres en semaine 2 · **page 3, la méthodologie d'analyse** — une page très soignée, de beaux graphiques : **on pilote à la nouvelle audience** (ROAS nouveau client en premier, NCAC, part de nouvelles clientes, puis ROAS total), attribution Meta 7 jours clic, lecture A vs B assumée (≥ 20 % d'écart sinon « pas de différence »), ce qu'on garde / coupe / réalloue à chaque jalon · **2-3 pages de suggestions / brainstorm** (ce qu'on ferait en V2, angles non tentés, idées non produites) · annexes : punchlines → pictos → banque packshots (visuels du site). **`deck-picks.json`** (N°, concept, ordre, étape, technique, accroche, pictos, promesse) et **`deck-images/<N°>.png`** pour le deck pitch du cerveau.

## 7. Règles dures qui mordent ce soir
D1/U3 étanchéité : rien de Tech, NV Gallery, PIDF dans les prompts, planches, deck · U4 : aucune référence DataCAt écrite · D2/U7 : chiffres = mots exacts du site avec source, sinon pas de chiffre · D3 : rien ne sort du dépôt · D5 : aucune suppression, `Z-a-supprimer/` · D9 : une image ratée est taguée, jamais effacée ; une réparée garde son parent · D11 : captures, passation, brief = entrées d'Alexandre, intouchables · D12 : une session écrit, verrou · U1 : modèles épinglés · U2 : coût annoncé avant chaque étape et réel après, cap 60 € · U6 : intégrité produit éliminatoire (la carte scrappée reconnaissable) · U8 : registre `_registre.csv` avec **N° · concept · gamme · technique · étape (base/optimisée/encore/simple/réparée-n/style/décl/anti-pub/re-marque) · parent · qualité · coût · drapeaux · tags** · U9 : texte dans l'image · U10 : `paths.py` · R38 : polices OFL si police demandée.

## 8. Hors périmètre
Deck pitch final (cerveau, pptx) · ad sets réels · 9:16 · NL/BE/DE · lead magnet et guides · `D-regles/` (file « à graver » dans le CR) · scrape des concurrents (OWL) · visuels nus dans le deck · toute écriture avant 03h30.

## 9. Points de contrôle VERIF (fin de lot, lecture seule)
Cap respecté et coût réel par étape = somme du registre · 33 lignes complètes (4 images chacune, ou réparée) · drapeaux renseignés sur 100 % · aucune image hors `12-tadaaz*` · aucun nom d'autre client · chiffres du deck = fiche sourcée · tags 🌐 ✎ ⚡ cohérents avec la technique du registre · fichiers §3 présents.

## 10. Questions ouvertes connues, et quoi faire si la réponse manque
- Site anti-bot ou visuels en basse définition → `capture_page.py`, et `brief` pour la scène avec la carte générée taguée `texte-ia` ; écrit dans le CR.
- Pas de gamme vœux 2027 en ligne → cartes de vœux génériques ou gamme de l'an dernier, noté.
- Service d'envoi aux invités introuvable → concept « service » reste sur expédition / livraison ; « non trouvé » dans le CR.
- Pipeline PIDF non généralisable sans refonte → copie minimale en `tadaaz_*.py` (lot, analyse, v0, prod), dette notée.
- Grille de prix illisible → concept « prix dégressif » produit sans chiffre, avec la mention « grille à lire », et le CR le dit.

## 11. CR de fin (six blocs, devlog)
Fait · Non fait + raison · Fichiers · À valider (décisions de la passation à graver, choix de la V2) · Questions · Prochaine étape — avec : coût devis / réel par étape et par technique, nombre d'images par étape, taux de drapeaux OK par technique, réparations faites, **la liste des spécificités et options de personnalisation du site**, la réponse sur le service d'envoi, la grille de prix lue, et les 12 créas que tu recommandes pour le pitch (N°). Commits par pathspec avec l'identifiant de lot, `git push origin` en dernier geste, verrou retiré.
