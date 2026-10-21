# Message prêt à coller — CREA-ARCHITECTE (alignement des règles)

> **statut : actif · mis à jour le 21/10/2026 · porté par STRATEGIE · remplace : rien.**
> À coller par Alexandre dans la session **CREA-ARCHITECTE** (Claude Code, dépôt *0. IENCLI FACTORY* / usine créa). Objet : tirer la version commune de `0-fonctionnement.md`. Ne rien faire d'autre.

---

**Fenêtre : CREA-ARCHITECTE (Claude Code, dépôt usine créa) · objet : aligner `D-regles/0-fonctionnement.md` sur la version commune · mode : lot court, MODE AUTONOME.**

La **source unique** de `0-fonctionnement.md` est désormais `strategie/regles/0-fonctionnement.md` (dépôt `arankowski-lang/strategie`), **réconciliée le 21/10 à 13h08** : base du 20/10 22h50 (continuité à la place du stop 70 %, ordre des travaux à la place du calendrier, codes toujours avec leur nom, cerveau qui devient une session Claude Code dans le dépôt stratégie) **+** l'arbo du 21/10 que tu avais déjà dans ton §14.1 (`0-maquette/`, `F-references/` à plat, sœur **`-ressources/`**, **`-visuels/` à 8 dossiers**, sources/packshots déplacés en `-ressources/`). Ta version locale n'était que la 19h15 ; elle contient encore le **stop à 70 %** et le **calendrier daté** — tous deux périmés.

À faire, dans l'ordre :
1. Récupère la version commune : `strategie/regles/0-fonctionnement.md` (Alexandre ajoute le dossier `strategie/` à ta session, ou te colle le fichier). Repère-la par son en-tête « **Mis à jour le 21/10/2026, 13h08 (heure lue)** ».
2. **Remplace intégralement** le contenu de ton `D-regles/0-fonctionnement.md` par cette version (fichier vivant, écrasé en place — l'historique reste dans git).
3. **Garde tes lignes propres, marquées `[projet usine]`** — c'est le point sensible pour l'usine :
   - La table des maisons (§14.1) de la version commune porte déjà les rangées `[projet usine]` (dossier de marque, sœurs usine, `0-maquette/`/`B-marches/`/`F-references/`) : rien à y réinjecter.
   - **MAIS ta note remote « remote privé » (dans ton §7) est propre à l'usine et N'EST PAS dans la version commune.** Après le remplacement, **réinsère-la dans ton §7**, marquée `[projet usine]` (remote `origin` privé `https://github.com/arankowski-lang/ienclI-factory.git`, push quotidien, `--force` interdit, historique allégé 78,9 → 8,58 Mo). La version commune te le rappelle explicitement en §11 (« chaque projet garde ses lignes propres marquées `[projet]` »).
4. **Vérifie après remplacement** : §13.5 (4) dit « **continuité** » (plus le 70 %) ; §12 est « **Ordre des travaux** » (plus de calendrier daté) ; §14.1 porte l'arbo du 21/10 (`0-maquette`, `F-references` à plat, `-ressources/`, 8 dossiers `-visuels/`) ; §11 porte la règle « source unique + lignes `[projet]` » ; **ta note remote `[projet usine]` est bien de retour en §7.**

Interdits : `git add -A` / `git add -f`, `reset` / `amend` / force-push. Ne touche **que** `D-regles/0-fonctionnement.md`.

Fin : commit **par pathspec** (`git commit -m "<L-AAMMJJ-NN> alignement 0-fonctionnement sur la version strategie 21/10 13h08, note remote réinsérée" -- D-regles/0-fonctionnement.md`), **push**, **une ligne au devlog** (`C-pilotage/devlog.md`, identifiant de lot). Compte-rendu six blocs, puis stop.
