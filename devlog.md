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
