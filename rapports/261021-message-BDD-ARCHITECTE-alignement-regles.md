# Message prêt à coller — BDD-ARCHITECTE (alignement des règles)

> **statut : actif · mis à jour le 21/10/2026 · porté par STRATEGIE · remplace : rien.**
> À coller par Alexandre dans la session **BDD-ARCHITECTE** (Claude Code, dépôt *BDD Master*). Objet : tirer la version commune de `0-fonctionnement.md`. Ne rien faire d'autre.

---

**Fenêtre : BDD-ARCHITECTE (Claude Code, dépôt BDD Master) · objet : aligner `D-regles/0-fonctionnement.md` sur la version commune · mode : lot court, MODE AUTONOME.**

La **source unique** de `0-fonctionnement.md` est désormais `strategie/regles/0-fonctionnement.md` (dépôt `arankowski-lang/strategie`), **réconciliée le 21/10 à 13h08** : c'est la base du 20/10 22h50 (continuité à la place du stop 70 %, ordre des travaux à la place du calendrier, codes toujours avec leur nom, cerveau qui devient une session Claude Code dans le dépôt stratégie) **+** l'arbo du 21/10 que tu avais déjà dans ton §14.1 (dossier client à **4 dossiers**, scripts clients → `E-systeme/clients/<N>-<client>/`, `Z-travail/` → `B-prod-claude/travail/`, **Artikka = client 2**). Ta version locale n'était que la 19h15 ; elle contient encore le **stop à 70 %** et le **calendrier daté** — tous deux périmés.

À faire, dans l'ordre :
1. Récupère la version commune : `strategie/regles/0-fonctionnement.md` (Alexandre ajoute le dossier `strategie/` à ta session, ou te colle le fichier). Repère-la par son en-tête « **Mis à jour le 21/10/2026, 13h08 (heure lue)** ».
2. **Remplace intégralement** le contenu de ton `D-regles/0-fonctionnement.md` par cette version (fichier vivant, écrasé en place — l'historique reste dans git).
3. **Garde tes lignes propres, marquées `[projet BDD]`** : la table des maisons de la version commune (§14.1) porte déjà les rangées `[projet BDD]` (dossier client, sœurs BDD). Tu n'as rien à y réinjecter. Si ton ancien fichier portait une note **propre à BDD** absente de la version commune (ex. une note remote BDD), reporte-la sous un marqueur `[projet BDD]` dans la bonne section — après l'avoir vérifiée.
4. **Vérifie après remplacement** : §13.5 (4) dit « **continuité** » (plus le 70 %) ; §12 est « **Ordre des travaux** » (plus de calendrier daté) ; §14.1 porte l'arbo du 21/10 (4 dossiers client, `E-systeme/clients/`, `B-prod-claude/travail/`, Artikka = 2) ; §11 porte la règle « source unique + lignes `[projet]` ».

Interdits : `git add -A` / `git add -f`, `reset` / `amend` / force-push. Ne touche **que** `D-regles/0-fonctionnement.md`.

Fin : commit **par pathspec** (`git commit -m "<L-AAMMJJ-NN> alignement 0-fonctionnement sur la version strategie 21/10 13h08" -- D-regles/0-fonctionnement.md`), **push**, **une ligne au devlog** (`C-pilotage/devlog.md`, identifiant de lot). Compte-rendu six blocs, puis stop.
