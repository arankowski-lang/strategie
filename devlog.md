# devlog — dépôt strategie

**statut : actif · porté par STRATEGIE · en ajout seulement, jamais réécrit, jamais condensé.** Une entrée par lot : identifiant `L-AAMMJJ-NN`, heures lues, session et modèle, fenêtre estimée (tours), compte-rendu six blocs, dettes nées ou soldées, point de reprise.

---

## L-261021-01 — Fondation du dépôt par le cerveau (Claude.ai, modèle Fable)
- Heures : 21/10 12h37 → 12h45 (lues).
- **1. Fait** : dépôt créé par Alexandre sur GitHub (privé, vide) ; cloné des deux côtés (sa machine, le cerveau) ; structure posée : `CLAUDE.md`, `regles/` (fonctionnement, gabarit de lot, arborescence commune), `decisions/` (décisions verbatim amorcées + journal brut), `plan-de-route.md`, `lexique.md`, `dettes-transverses.md`, `rapports/`, `lecture/` (ignoré), `SESSIONS.md`, `.gitignore`. Premier push par le cerveau lui-même : **Alexandre sort du circuit des fichiers globaux**.
- **2. Non fait + raison** : première lecture des deux projets (copie dans `lecture/`, rapport d'état et de contradictions) — c'est le lot 1 de la session STRATEGIE, qui a l'accès aux dossiers voisins ; le cerveau ne l'a pas.
- **3. Fichiers** : tous ceux listés ci-dessus, nouveaux.
- **4. À valider par Alexandre** : la file « en attente de décision » dans `decisions/decisions-alexandre.md`.
- **5. Questions** : —
- **6. Prochaine étape** : session STRATEGIE, lot suivant : lecture des deux projets, rapport, puis reprise des fichiers globaux (le cerveau cesse d'en être la source quand STRATEGIE les tient).

---

## L-261021-02 — Première lecture des deux projets (STRATEGIE, Claude Code, modèle Opus 4.8)
- Heures : 21/10, fin **12h58 (lue)**. Début non relevé à l'horloge (reprise juste après la fondation `L-261021-01`, 12h45) — à relever dès le démarrage au prochain lot. Fenêtre : **estimée** ~30 tours (l'outil n'affiche pas de pourcentage, §9).
- **Accès voisins** : `../BDD Master` et `../0. IENCLI FACTORY` **tous deux accessibles** (aucun dossier manquant). `.venv/` de l'usine ignoré.

- **1. Fait**
  - Rituel de démarrage : lu `regles/0-fonctionnement.md` (v 21/10 fichier vivant, en-tête 22h50), `lexique.md`, `devlog.md` (1 entrée), `decisions/decisions-alexandre.md`, `plan-de-route.md`, `SESSIONS.md`.
  - Copies figées (lecture seule sur les voisins) : `lecture/bdd/261021/` et `lecture/usine/261021/` — CLAUDE.md, `D-regles/` (complet), `C-pilotage/{devlog,dettes,decisions-alexandre,sante}.md`, `SESSIONS.md` de chacun. Aucune écriture ni commit chez les voisins.
  - Rapport `rapports/261021-etat-des-deux-projets.md` écrit : état par projet (derniers lots, certificats, dettes bloquantes, sessions actives) ; 3 contradictions de règles locales (C1 usine « sans serveur distant », C2 BDD D8 chemin `Z-travail/work` mort, C3 BDD D8 clause feu vert manquante) ; comparaison des deux `0-fonctionnement.md` (les deux = version 19h15, en retard sur la 22h50 : **stop 70 % vs continuité**, **calendrier vs ordre**, §9 mesure ; mais §14.1 à jour du 21/10 que la référence n'a pas) ; **note remote usine à conserver** ; décisions : **0 globale absente** ici (mapping fourni, nuances verbatim laissées au choix d'Alexandre).
  - `plan-de-route.md` : coché le prouvé fait (B chaînes terminées ; C1 revues faites ; C8 dépôt stratégie en service ; C9 decisions-alexandre en place ; C10 amorcé) — **sans date**, références par identifiant de lot.
  - `SESSIONS.md` : ligne STRATEGIE passée à **active**.

- **2. Non fait + raison**
  - Aucun ajout à `decisions/decisions-alexandre.md` : toutes les décisions globales du 21/10 y sont déjà (fichiers projet créés des mêmes messages) ; ajouter = doublons (§14.1/§14.2). Décidé en MODE AUTONOME.
  - Pas de message de lancement rédigé aux architectes pour corriger C1–C3 : c'est le lot suivant (prochaine étape).

- **3. Fichiers produits ou modifiés**
  - `rapports/261021-etat-des-deux-projets.md` — **nouveau**.
  - `plan-de-route.md` — mis à jour (cochage du prouvé fait).
  - `SESSIONS.md` — mis à jour (STRATEGIE active).
  - `devlog.md` — cette entrée (ajout).
  - `lecture/bdd/261021/**`, `lecture/usine/261021/**` — copies de travail **ignorées par git** (non commitées).

- **4. À valider par Alexandre**
  - Enrichir ou non la file globale des citations verbatim du 21/10 (résumées ici, détaillées dans les projets) — reco : laisser le verbatim fin dans les `C-pilotage/` des projets.
  - Lancer l'alignement des `0-fonctionnement.md` des deux projets sur la version 22h50 (par les architectes de chaque dépôt).
  - Demander à BDD-ARCHITECTE une passe VERIF/revue sur le lot arbo `L-261021-02` BDD.

- **5. Questions restantes** — —

- **6. Prochaine étape** : rédiger les messages de lancement aux deux architectes (corriger C1–C3, aligner `0-fonctionnement.md`) ; à terme, rapatrier dans la référence stratégie les §14.1 à jour du 21/10 en gardant les notes propres aux projets.

---

## L-261021-03 — Réconciliation de `regles/0-fonctionnement.md` (STRATEGIE, Claude Code, modèle Opus 4.8)
- Heures : 21/10, 13h00 → **13h11 (lues)**. Fenêtre : **estimée** ~15 tours (l'outil n'affiche pas de pourcentage, §9).
- Préalable : push `L-261021-02` d'abord **rejeté** (le cerveau avait poussé `7482dfe` : refonte du plan-de-route en tableau de bord). **Merge** `origin/main` (jamais de force) — seul conflit `plan-de-route.md`, résolu en gardant la version du cerveau (validée 12h53) ; merge `240a1a8` poussé. Puis ce lot.

- **1. Fait**
  - `regles/0-fonctionnement.md` **réconcilié** = base 22h50 **+** arbo du 21/10 des deux projets, **sans rien perdre de la 22h50** :
    - §14.1 — intro : `B-doc/` retiré (dissous) ; usine `[projet usine]` + `0-maquette/`, `B-marches/`, `F-references/` (banque à plat).
    - §14.1 — rangée scripts : `E-systeme/clients/<N>-<client>/` (plus de `E-scripts/` client).
    - §14.1 — dossier client BDD `[projet BDD]` : **4 dossiers** (`A-exports`, `A-sources-references`, `B-prod-claude` + `travail/`, `C-backups`) + `CLAUDE.md` + `MASTER.md` ; plus de `D-Livrable/` ni `Z-travail/`.
    - §14.1 — dossier de marque + sœurs usine `[projet usine]` : `travail/` hors git, sources/packshots → `-ressources/` ; `-visuels/` à **8 dossiers** ; sœur `-ressources/` détaillée.
    - §14.1 — registre : **Artikka (ex-Polara), client 2, 12 libéré**.
    - §11 — règle **source unique** + « chaque projet garde ses lignes propres marquées `[projet]` » (ex. note remote usine `[projet usine]`, qui reste chez l'usine).
    - En-tête : « mis à jour le 21/10 13h08 (heure lue) · porté par STRATEGIE » + ligne « ce que cette version change ».
  - Conservé de la 22h50, vérifié : continuité (§13.5 4, plus le 70 %), ordre des travaux (§12, plus de calendrier), §9 mesure estimée, codes avec nom (§13.3), cerveau dans ce dépôt (§13.4 r12 / §14.7).
  - Deux messages prêts à coller écrits dans `rapports/` (un par architecte) : « remplacer `D-regles/0-fonctionnement.md` par la version strategie du 13h08, garder les lignes `[projet]`, commit/push/devlog ». Le message usine rappelle explicitement de **réinsérer la note remote §7**.
  - `plan-de-route.md` tâche 3 : « règles : source unique = ce dépôt ; projets à aligner (messages prêts) ».

- **2. Non fait + raison**
  - Les projets ne sont **pas encore alignés** : c'est Alexandre qui colle les deux messages aux architectes (hors périmètre STRATEGIE, lecture seule sur les voisins).

- **3. Fichiers produits ou modifiés**
  - `regles/0-fonctionnement.md` — mis à jour (réconciliation §14.1, §11, en-tête).
  - `plan-de-route.md` — mis à jour (tâche 3 + colonnes projets).
  - `rapports/261021-message-BDD-ARCHITECTE-alignement-regles.md` — **nouveau**.
  - `rapports/261021-message-CREA-ARCHITECTE-alignement-regles.md` — **nouveau**.
  - `devlog.md` — cette entrée (ajout).

- **4. À valider par Alexandre**
  - Coller les deux messages d'alignement (BDD-ARCHITECTE, CREA-ARCHITECTE).

- **5. Questions restantes** — —

- **6. Prochaine étape** : une fois les projets alignés, la version commune pourra être « tirée » automatiquement (les `CLAUDE.md` pointent dessus) ; STRATEGIE restera responsable de la version commune et des lignes `[projet]`.

---

## L-261021-04 — Arborescence du dépôt + MD Brain + audit du process (STRATEGIE, Claude Code, modèle Opus 4.8)
- Heures : 21/10, 13h12 → **16h49 (lues)** ; l'inventaire de `MD Brain` a tourné en sous-agent lecture seule entre-temps. Fenêtre : **estimée** ~60 tours. Trois parties, **un commit par partie**, push en fin de lot.
- **Accès** : `1. MD BRAIN` déposé par Alexandre à la racine, lu en lecture seule (D11) ; aucun de ses fichiers touché.

- **1. Fait**
  - **Partie 1 — arborescence** (commit `d2f2428`) : maisons posées — `regles/` (+ `lexique.md` déplacé), `decisions/`, `plan/` (`plan-de-route.md` déplacé + `taches.md` créé), `rapports/`, `B-a-transferer/{bdd,usine}/` (les 2 messages d'alignement y sont passés), `Z-a-supprimer/` (+ `liste.md`). `git mv` partout. `1. MD BRAIN/` ajouté au `.gitignore` (archive à doute d'Alexandre, D11, ses fichiers intacts). `CLAUDE.md` et `README.md` mis à jour.
  - **Partie 2 — MD Brain** (commit `83e4593`) : inventaire des **41 fichiers** (36 `.md` + 5 `.pdf`) dans `rapports/261021-md-brain-inventaire.md` — **2 à incorporer, 21 déjà couverts, 13 périmés, 5 PDF**. Incorporé : la **nomenclature complète des fichiers** → `regles/arborescence-commune.md` §7 ; la **feuille de route produits** (G1-G9, O1-O11, flux, points critiques, sans dates) → `plan/feuille-de-route-produits.md`. **Moisson** : 6 décisions d'Alexandre antérieures au 14/10, absentes du registre, ajoutées à `decisions/decisions-alexandre.md` (section « Moisson MD Brain », source + validité ; Q24, un client à la fois, NCAC arrondi, « outil fini qu'une fois servi », priorités produits, rétention « une sur dix » périmée). Périmés listés dans `rapports/md-brain-a-supprimer.md` (Alexandre supprime lui-même).
  - **Partie 3 — audit du process** (commit `fd36eb0`) : gravé dans `regles/0-fonctionnement.md`, **dans les sections existantes** (pas de chapitre parallèle) — (a) verrou `C-pilotage/.ecriture-en-cours` §13.5 pt 6 ; (b) revue de fin de chaîne par sous-agent frais §13.5 pt 7 ; (c) manifeste de déplacement §14.1 r10 ; (d) valeurs de référence par client §14.5 contrôle 11 ; (e) `pieges-connus.md` + `environnement.md` au rituel §9 ; (f) zone verte / zone rouge §13.4 r13 ; (g) D5 rétention reformulée §3 ; (h) identifiant de lot = suivant du devlog, vérifié avant commit §13.4 r14. En-tête à 16h47 + ligne « ce que cette version change ». Les 2 messages `B-a-transferer/` mis à jour (tirage de la version 16h47) ; le message usine dit qu'elle a déjà verrou/pièges/environnement/revue sous-agent/`sauvegarde.py`.

- **2. Non fait + raison**
  - Les projets ne tirent pas encore la version commune : Alexandre colle les 2 messages (hors périmètre STRATEGIE, lecture seule sur les voisins).
  - Incorporations marquées « à confirmer » (nomenclature longue, priorités produits) : attendent un oui/non d'Alexandre — la valeur reste consignée en attendant.

- **3. Fichiers produits ou modifiés**
  - P1 : `CLAUDE.md`, `README.md`, `.gitignore` (maj) ; `regles/lexique.md`, `plan/plan-de-route.md`, `B-a-transferer/{bdd,usine}/…-alignement-regles.md` (déplacés) ; `plan/taches.md`, `Z-a-supprimer/liste.md` (nouveaux).
  - P2 : `rapports/261021-md-brain-inventaire.md`, `rapports/md-brain-a-supprimer.md`, `plan/feuille-de-route-produits.md` (nouveaux) ; `regles/arborescence-commune.md`, `decisions/decisions-alexandre.md` (maj).
  - P3 : `regles/0-fonctionnement.md`, les 2 messages `B-a-transferer/` (maj).
  - `1. MD BRAIN/**` : lu seulement, **non suivi** (gitignore), aucun fichier touché.

- **4. À valider par Alexandre**
  - Supprimer lui-même les 13 périmés de `MD Brain` (liste `rapports/md-brain-a-supprimer.md`).
  - Nomenclature longue des fichiers qui voyagent : garder ou non (oui/non, voir inventaire).
  - Coller les 2 messages d'alignement (`B-a-transferer/`) aux architectes.

- **5. Questions restantes** — —

- **6. Prochaine étape** : alignement des projets (Alexandre colle les messages) ; puis les `CLAUDE.md` des projets pointent sur la version commune ; suivre la file « en attente » et les « à confirmer » de la moisson.
