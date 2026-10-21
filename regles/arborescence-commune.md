# Arborescence commune aux projets Claude Code (11/10/2026, 19h25 — mise à jour 13/10 17h40 ; **§7 nomenclature des fichiers et §8 base visuelle usine ajoutés le 21/10 par STRATEGIE**, lots `L-261021-04` / `-05`)

Conventions validées par Alexandre. Référence de toutes les arborescences cibles (BDD, OWL, usine, futurs projets). Rien n'est exécuté sans sauvegarde et manifest validé ; jamais de suppression, on déplace et on trace.

## 1. Les règles communes (validées)

- Minuscules partout (tech, chichi, march, rg…).
- Un code unique par client dans tous les projets : La Bonne Remise = `tech` partout.
- Racine : jusqu'à ~10 fichiers importants en vrac (CLAUDE.md et les fichiers de cadrage les plus lus : SESSIONS, PROTOCOLES, ETAT, un fichier de travail très utilisé…), le reste dans des dossiers.
- Trois dossiers « coup d'œil » **à la racine** de chaque projet, cliquables tout de suite : `regles/`, `plans/`, `taches-en-cours/`. Ils ne contiennent QUE le global (corrigé 13/10). Tout ce qui est propre à un client — doc, plan, tâche, règle, audit, revue — vit dans le dossier du client, dans des sous-dossiers de mêmes noms : `A-<client>/B-doc/`, `A-<client>/C-plans/`, `A-<client>/C-taches-en-cours/`, `A-<client>/D-regles/`. Même structure chez le client qu'à la racine.
- Racine d'un dossier client : ~10 fichiers max — le master et le quotidien (contexte/CLAUDE, tête, dictionnaire, journal de chantier, notice, points d'attention). Les audits, plans, questions en attente et revues descendent dans les sous-dossiers (B-doc/ pour audits et revues, C-plans/, C-taches-en-cours/).
- `Z-travail/` par client (ex-`_travail/`) : brouillon gitignoré en bloc, toujours dernier dans le tri.
- `_systeme/` : un seul dossier pour scripts, gabarits, prompts, archives.
- `B-doc/` à la racine : seulement le global. Les documents d'un client vont dans son dossier : `A-<client>/B-doc/`.
- `a-transferer/` (tiret) à la racine : sas de ce qui part vers une session ou un client. Jamais un master.
- Profondeur maximale : 4 niveaux.
- Préfixes de tri à la racine (validés 12/10) : `A-` les clients, toujours en tête ; `B-` ce qu'Alexandre consulte (B-doc/, B-a-transferer/) ; `C-` le pilotage (C-plans/, C-taches-en-cours/) ; `D-` les règles (D-regles/) ; `E-` le système, tout à la fin (E-systeme/ : prompts, scripts, gabarits, archives). Vaut pour BDD, OWL et Deck Master ; l'usine garde ses tags M / MQ / V. Même logique dans les sous-dossiers (validé 12/10) : du plus consulté au moins consulté — dans un client, le master reste un fichier à la racine, puis A- ce qu'Alexandre ouvre (rendus, exports déposés), B- les données de travail (staging, collecte, runs, sources), C- les copies de sécurité (C-backups/, C-replis/), Z- le brouillon jamais consulté (Z-travail/, gitignoré, toujours dernier). Dans B-doc/ : A-<client>/ puis B-global/. Dans E-systeme/ : archives en dernier. Toute nomenclature locale différente est admise si elle va du plus important au moins important.
- Un dossier par TÂCHE, pas par format (validé 13/10) : une présentation et son export PDF vont dans le même dossier (A-deck/). On ne sépare par format que si la finalité change (un one-pager PDF ≠ la présentation).
- Backups à côté de ce qu'ils protègent : dans le dossier du fichier concerné (C-backups/), jamais centralisés.
- Anciens clients inactifs : Z-<client>/ (tout en bas).
- Le dossier de l'agence (DataCAt) : A-0-datacat/, en tête du bloc A (le 0 après le tiret trie avant les lettres ; « A1- » trierait après tous les « A- »).

## 2. Ce que ça donne, concrètement

### BDD Master
```
BDD Master/
  CLAUDE.md                       ← seul fichier à la racine
  A-tech/                         ← La Bonne Remise (les clients en tête)
      teleachat_cac_v158.xlsx     ← le maître, tout de suite visible
      A-exports/  B-doc/  B-staging/  C-replis/  C-backups/
      Z-travail/                  ← brouillon, invisible pour git, toujours dernier
  A-chichi/                       ← même structure (chichi_cac_v166.xlsx)
  A-march/                        ← même structure (march_cac_v272.xlsx)
  B-doc/   (global uniquement + inventaire_261011/)
  B-a-transferer/
  C-plans/  C-taches-en-cours/
  D-regles/
  E-systeme/
```

### OWL (veille)
```
OWL/
  CLAUDE.md
  A-chichi/  A-marchlab/  A-rg/  A-tech/   ← les clients en tête
      <master de veille>
      A-versions/  B-collecte/  B-doc/  C-backups/  Z-travail/ (les runs datés)
  B-doc/   (global uniquement)
  B-a-transferer/
  C-plans/  C-taches-en-cours/
  D-regles/
  E-systeme/
```

### Usine créa (IENCLI Factory)
```
0. IENCLI FACTORY/
  CLAUDE.md  referentiel.md  .env
  regles/  plans/  taches-en-cours/
  M1-deco-mobilier/                 ← le marché
  M1-nv-gallery/                    ← marque rattachée au marché M1 (à la suite)
  M?-la-bonne-remise/               ← marque (son marché à confirmer par la session)
      master, idéation, livrables, sources, briefs, preuves
      packshots-source/power-scrubber/   ← un sous-dossier par produit
  images-source/<marque>/           ← images reçues (inbox, gardée même vide)
  visuels/<marque>/                 ← générations, calibrage, bruts (travail)
  images-assemblees/<marque>/       ← ads finales + les images qui servent à les assembler
  doc/   (global/  <marque>/)
  _systeme/   (gabarits  prompts  scripts  archives)
```

Usine, principe de nommage : marché = `M1…M6` ; chaque marque porte le tag de son marché et vient juste après lui (`M1-nv-gallery/`), ce qui range les marques à la suite de leur marché et supprime la collision avec les verrous A1-A6. La session produit la table marché ↔ marque ↔ visuels à valider.

## 3. Règles techniques communes

- Centraliser les chemins dans un seul module par projet (usine : moteur.py ; OWL : prompts/chemins.py ; BDD : équivalent), qui retrouve la racine via CLAUDE.md. Un renommage ne coûte alors qu'une ligne.
- Corriger le .gitignore AVANT tout déplacement (OWL 347 PNG ; BDD autonome/ ; usine visuels/packshots).
- Ordre : .gitignore + _travail + les 3 dossiers racine d'abord (sans risque), puis doc/, puis cadrages, puis les sujets à la racine. Trois commits : sauvegarde, déplacements, corrections.

## 4. Décisions prises le 11/10

- Les 3 dossiers règles / plans / tâches-en-cours sont à la racine (pas dans doc/), dans tous les projets.
- Usine, marques : rattachées à leur marché par le tag (M1-nv-gallery…), rangées à la suite du marché. Plus de préfixe A ni MQ : la collision A1-A6 disparaît.
- Usine, migration des chemins stockés dans les JSON : on fige le batch 2, la nouvelle arbo vaut à partir du batch 3.
- Usine, Power Scrubber : sous la marque, dans packshots-source/power-scrubber/, avec un sous-dossier par produit (d'autres produits possibles).
- Usine, images-assemblees/ : les ads finales ET les images qui servent à les assembler. visuels/ = le travail en amont.
- OWL, La Bonne Remise : la V3 est la dernière version, elle fait master.
- OWL, Chichi V2 : rangée dans le dossier chichi.
- BDD, #ERROR! Téléachat : dette technique (libellés perdus à la source, chiffres intacts), traités plus tard.
- BDD, plans clients : les versions avec tiret sont canoniques, les versions underscore passent de côté.

## 5. Décisions du 13/10 (17h28–17h33, validées par Alexandre)

- **`Z-a-supprimer/` unique à la racine du projet** (change D5) : tout ce qui est à supprimer y est déplacé, chemin d'origine conservé à l'intérieur (`Z-a-supprimer/A-chichi/C-backups/…`), avec liste (nom, taille, raison) ; suppression seulement après « confirmer suppression ». Plus de `Z-a-supprimer/` locaux.
- **`.git` et `.claude`** : impossibles à renommer (git et Claude Code exigent ces noms). Attribut Windows « caché » **sur ces deux dossiers seulement**, jamais sur le dossier parent (incident du 12/10).
- **Aucun sous-dossier sans préfixe** dans un dossier client. Affectations BDD : `rendu(s)` → `A-rendus/`, `audit(s)` → `B-doc/audits/`, `scripts` → `E-scripts/`, `archive` → `Z-archive/`. Même logique dans Deck Master.
- **Trois dossiers de pilotage par client, créés même vides** : `C-plans/` (vision comprise), `C-taches-en-cours/`, `D-regles/`. Les plans ne vivent jamais dans `B-doc/`.
- **Le moins de clics et de sous-dossiers possible** (hantise d'Alexandre), à l'exception des backups, où beaucoup de fichiers sont admis.
- **Usine créa, seconde passe** : **deux dossiers par marque à la racine** — `A-<marque>/` (travail) et `A-<marque>-livrables/` (livrables, dernières versions seulement). Travail : `A-ideation/`, `B-visuels/` (tout ce qui n'est pas fini : générations, mock-ups, pictogrammes), `B-packshots/<produit>/`, `B-sources/`, `B-retours/`, `B-doc/`, `C-preuves/`, `C-backups/` (versions précédentes des livrables), `C-plans/`, `C-taches-en-cours/`, `D-regles/`, `Z-archive/`, `Z-travail/`. L'ancien `livrable(s)/` disparaît du dossier de travail. Le master et la dernière planche LBR vont dans le dossier livrables. Livrables : à plat, un seul sous-dossier `A-concepts-valides/` (concepts présents dans les decks, venus de `B-visuels/`). **Nomenclature propre au dossier livrables, préfixe sur le fichier** : `A-` client final · `B-` client brouillon · `C-` Alexandre final · `D-` Alexandre brouillon ; format `<lettre>-<objet>-<AAMMJJ>-v<N>.<ext>` (marque non répétée). Remplace `A-pubs/` du §2.
- **Usine créa, troisième passe (18h27, précisée 19h20–19h23)** : **trois dossiers par marque à la racine** — `A-<marque>/`, `A-<marque>-livrables/`, **`A-<marque>-visuels/`** (la base visuelle : tout visuel produit par Claude Code, pictos compris, et les packshots retravaillés ; les packshots originaux restent dans `A-<marque>/B-packshots/<produit>/`). `B-visuels/` disparaît du dossier de travail. La base visuelle est classée **par statut**, à plat dans chaque statut sauf mention :
  - **Statuts de la base visuelle : voir §8** (refondu le 21/10, usine `L-261021-17`). La liste par statut de cette passe du 13/10 — `A-valides/`, `B-a-retravailler/`, `C-bruts/`, `C-design-brut/`, `D-elements/`, `D-concurrents/`, `E-rejetes/`, `Z-anciens/` — est **périmée**.
- **Usine créa, rétention des backups** (18h27 ; remplace « une sur dix » pour l'usine ; règle dans `D-regles/2-retention-backups.md`) : **plaquette** (deck de concepts envoyé à Karl, lignée large) = **toutes les versions** ; autres livrables = dernière + 1 backup ; retours = un fichier + 1 backup ; fichier de travail en cours = 1 backup ; **master Excel = 5 dernières versions** ; le reste → `Z-a-supprimer/` (liste, confirmation).
- Le §2 « Usine créa » ci-dessus (tags M/MQ/V, `images-assemblees/`, `A-pubs/`) est **périmé** ; la cible du 13/10 fait foi.

## 6. Décisions des 19–20/10 (validées par Alexandre, appliquées à BDD et à l'usine) — **cette section fait foi sur tout ce qui précède**

- **Clients numérotés, registre global** (même numéro dans tous les projets) : 1 Tech / La Bonne Remise · 2 Artica · 3 Chichi · 4 March LA.B · 5 Rouge Gorge · 6–9 réservés aux prochains récurrents · 10 NV Gallery · 11 PIDF · suivants = autres. Dossiers `<N>-<nom>` et sœurs `<N>-<nom>-…`. Plus de préfixe `A-` pour les clients.
- **Plus de dossier de pilotage dans les clients** : contexte, plans, tâches, règles remontent à la racine avec un marqueur client devant le nom (`CHICHI-`, `TECH-`, `RG-`, `GLOBAL-`…) ; les fichiers déjà à la nomenclature gardent leur nom.
- **Une seule maison de pilotage** : `C-contexte/` + `C-plans/` + `C-taches-en-cours/` + `C-taches-recurrentes/` (+ `process/` à l'usine) → **`C-pilotage/`** ; `D-regles/` reste à part ; `B-doc/` provisoire (reliquats) jusqu'à vidage.
- **Plus de `Z-archive/` nulle part** : backup (`C-backups/`, rétention) ou `Z-a-supprimer/`. `Z-anciens/` de la base visuelle est un statut, pas une archive.
- **Dossier client BDD** : `A-exports/` · `A-sources-references/` (fourni par Alexandre ou le client, D11) · `B-prod-claude/` (ex-`B-doc` client + `A-rendus` : production IA) · `C-backups/` · `D-Livrable/` (staging deck, provisoire) · `E-scripts/` · `Z-travail/`. Sœurs : `<N>-<client>-livrable/` (envoyé au client, dernière version, `<type>-AAMMJJ.<ext>`) · `<N>-<client>-propositions/` (interne, noms conservés).
- **Dossier de marque usine** (sept) : `A-sources-references/` (+ `retours/`) · `A-packshots-originaux/<produit>/` · `B-concepts/` (ex-`A-ideation`) · `B-prod-claude/` (+ `preuves/`) · `C-backups/` · `Z-travail/`. Dossiers racine propres à Alexandre conservés : `B-maquette/`, `B-marches/`, `F-references/`.
- **Base visuelle usine** (`<N>-<marque>-visuels/`) : **schéma courant en §8** (refondu le 21/10, `L-261021-17`). L'ancienne liste `B-a-retravailler/` · `C-bruts-sans-mise-en-page/` · `C-designs-non-valides/` · `D-elements-pour-fabriquer/` · `D-inspiration/(concurrents,moodboards)` · `Z-anciens/` est **périmée**. Livrables : `A-concepts-valides-plaquette/`.
- **Git** : dépôt privé par projet, `.git` réécrit sans classeurs/images/exports (BDD 3,2 Gio → 192 Mio ; usine 79 → 8,6 Mo), masters et données hors git (protégés par D8 et la rotation), `push` chaque fin de journée, `force-push` interdit, copie de `.git` par la session avant toute réécriture.
- **Deck Master fusionne dans BDD** (migration en cours) ; **OWL garé**.

## 7. Nomenclature des fichiers (incorporée le 21/10 depuis `MD Brain/…-nomenclature_fichiers_v3`, validée par Alexandre le 11/10)

Deux formes coexistent (cf. `0-fonctionnement.md` §14.1.8) : **dans un dépôt**, la forme **courte** `AAMMJJ-type-sujet-CLIENT.ext` (client à la fin, gardé) ; **pour ce qui voyage** (`B-a-transferer/`, livrables), la forme **complète** ci-dessous.

**Forme complète** : `PROJET-AAMMJJ-CLIENT-OUTIL-DUREE-TYPE-detail[-REMPL(nom_exact_sans_extension)].ext`

| champ | valeurs | rôle |
|---|---|---|
| Projet | `BDD` · `CREA` · `VEILLE` · `REPORTING` · `CERVEAU` (+ `PZ` perso) | projet Claude Code, toujours en premier. *(21/10 : `REPORTING`/Deck Master est fusionné dans `BDD` ; `STRATEGIE` s'ajoute pour ce dépôt.)* |
| Date | `AAMMJJ` | sans séparateur |
| Client | `GLOBAL`, ou le marqueur texte du client (`TECH`, `CHICHI`, `MARCH`, `RG`, `DATACAT`…) ; `GLOBAL(X+Y)` pour 2-3 clients | *(21/10 : `POLARA` → `ARTIKKA` ; les **dossiers** sont numérotés 1-11, les **fichiers** gardent le marqueur texte)* |
| Outil | `CC` / `CN` / `CC+CN` | Claude Code, session Claude.ai, ou les deux |
| Durée | `P` / `E` | permanent / éphémère |
| Type | `REGLES` · `BRIEF` · `CONTEXTE` · `ANALYSE` · `LIVRABLE` · `MESSAGE` | ce que c'est |
| Détail | 2-4 mots en minuscules | précisément quoi |
| REMPL | `-REMPL(nom_exact)` facultatif, **sans extension**, imbricable | le fichier remplacé (livrables seulement, D8) |

**Séparateurs** : `-` entre champs, `_` dans un champ, `+` pour combiner, pas d'espace/accent/apostrophe. **Version d'un livrable** : `_v2`,`_v3` à la fin du détail + `REMPL(...)`.

*(La forme complète sert à ce qui sort du dépôt ; à l'intérieur, la forme courte et les marqueurs texte suffisent. **Confirmé par Alexandre le 21/10 17h13** : « oui pour ce qui voyage — livrables, messages, transferts —, courte dans les dépôts, à mon rythme ». La bascule des noms courts se fait **au fil de l'eau**, jamais en lot dédié.)*

## 8. Base visuelle usine `<n>-<marque>-visuels/` — schéma EXÉCUTÉ (21/10, usine `L-261021-17`)

Gravé d'après `0. IENCLI FACTORY/D-regles/3-statuts-visuels.md` (porté par CREA-ECRITURE, exécuté). **Remplace** la liste des visuels des §5 et §6 ci-dessus. **8 dossiers, aucun sous-dossier** (sauf exceptions fonctionnelles notées) — le **nom du fichier trie par concept**, pas l'arborescence ; les 3 marques portent le même schéma (nvg = squelette vide). Dossier **ignoré par git** (lourd). Tags humains `HUMAIN-<auteur>`.

| dossier | contenu |
|---|---|
| `A-valides-plaquette/` | créas validées sur la plaquette, **à plat** |
| `A-valides-mises-en-page/` | designs du système Claude Code validés |
| `A-valides-nus/` | nus validés (promus depuis `B-visuels-nus-non-valides/`) |
| `B-en-attente/` *(ex `B-a-retravailler/`, renommé `L-261021-17`)* | à reprendre, **intouché par CC** ; visuels à la racine ; sous-statuts `a-potentiel/`, `en-attente/` ; reçoit aussi les générations **freestyle/API** sorties de `B-mises-en-page-non-validees/` (tri de provenance) |
| `B-mises-en-page-non-validees/` | mise en page **TECHNIQUE seulement** (overlay/layout par script, aucun appel modèle), à plat ; sous-dossier fonctionnel `prompts/` ; tout fichier freestyle/généré par l'API part en `B-en-attente/` (`tri_mep_provenance.py`) |
| `B-visuels-nus-non-valides/` | images générées **nues** (sans mise en page), **à plat** : `situ-<situation>-<concept>-<produit>-<seq>` (+ noms legacy conservés) ; **deux vues de confort en liens durs** (`_nl_`, `nus_liens.py`) : `situation-<x>/` et `brut-<concept>/` |
| `D-inspiration/` | inspiration / moodboards, à plat (les concurrents sont en `-ressources/analyse-site-et-concurrents/`) |
| `E-rejetes-conserves/` | non validés gardés, à plat |

\+ `_registre.csv` · `_archives/` (copies datées) · `LISEZMOI.md`.
**Frontière** : nu (sans mise en page) → `B-visuels-nus-non-valides/` · mise en page technique (script) → `B-mises-en-page-non-validees/` · freestyle/API → `B-en-attente/` · validé → `A-…` · écarté → `E-rejetes-conserves/`.
**Disparus le 21/10** (contenu redistribué) : `C-designs-non-valides/`, `C-en-cours*/`, `C-bruts-sans-mise-en-page/` (→ `B-…`), `D-elements-pour-fabriquer/` (→ `-ressources/`), `Z-anciens/` (→ `C-backups/` de la marque), `D-inspiration/concurrents/` (→ `-ressources/`). Les anciens attributs `paths` restent en **alias de compat**. La matière de fabrication vit dans la sœur `<n>-<marque>-ressources/` (voir `3-statuts-visuels.md` §2).
