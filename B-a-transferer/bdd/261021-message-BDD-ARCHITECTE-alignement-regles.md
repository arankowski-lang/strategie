# Message prêt à coller — BDD-ARCHITECTE (alignement des règles)

> **statut : actif · mis à jour le 21/10/2026 16h47 · porté par STRATEGIE · remplace : la version 13h08 (tire plutôt celle de 16h47, qui inclut l'audit du process).**
> À coller par Alexandre dans la session **BDD-ARCHITECTE** (Claude Code, dépôt *BDD Master*). Objet : tirer la version commune de `0-fonctionnement.md`. Ne rien faire d'autre.

---

**Fenêtre : BDD-ARCHITECTE (Claude Code, dépôt BDD Master) · objet : aligner `D-regles/0-fonctionnement.md` sur la version commune · mode : lot court, MODE AUTONOME.**

La **source unique** de `0-fonctionnement.md` est `strategie/regles/0-fonctionnement.md`, **version du 21/10 16h47 (heure lue)**. Elle contient la base du 20/10 22h50 (continuité à la place du stop 70 %, ordre des travaux à la place du calendrier, codes toujours avec leur nom, cerveau qui devient une session Claude Code dans le dépôt stratégie), **+** l'arbo du 21/10 (dossier client à **4 dossiers**, scripts clients → `E-systeme/clients/`, `B-prod-claude/travail/`, **Artikka = 2**), **+** l'**audit du process** (21/10 12h29) incorporé dans les sections existantes : **verrou d'écriture par dépôt** `C-pilotage/.ecriture-en-cours` (§13.5 pt 6), **revue de fin de chaîne par sous-agent frais** (§13.5 pt 7), **zone verte / zone rouge** et **identifiant de lot** vérifié avant commit (§13.4 r13-14), **manifeste de déplacement** (§14.1 r10), **valeurs de référence par client** recalculées par `revue.py` (§14.5 contrôle 11), **`pieges-connus.md` + `environnement.md`** au rituel (§9), rétention reformulée (§3 D5).

À faire, dans l'ordre :
1. Récupère `strategie/regles/0-fonctionnement.md` (Alexandre ajoute le dossier `strategie/` à ta session, ou te colle le fichier). Repère l'en-tête « **Mis à jour le 21/10/2026, 16h47 (heure lue)** ».
2. **Remplace intégralement** ton `D-regles/0-fonctionnement.md` par cette version (fichier vivant, écrasé en place — l'historique reste dans git).
3. **Garde tes lignes propres `[projet BDD]`** : la table des maisons (§14.1) les porte déjà (dossier client, sœurs BDD) ; rien à réinjecter. Une note **propre à BDD** absente de la version commune se reporte sous un marqueur `[projet BDD]`, vérifiée.
4. **Mets en place ce que l'audit introduit, si ce n'est pas déjà fait côté BDD** : le verrou `.ecriture-en-cours`, `C-pilotage/pieges-connus.md`, `C-pilotage/environnement.md`, les **valeurs de référence par client** dans `revue.py`, la revue de fin de chaîne par sous-agent. (Ne refais pas ce qui existe déjà ; signale ce qui manque dans ton CR.)
5. **Vérifie** : §13.5 dit « continuité » (plus le 70 %) ; §12 est « Ordre des travaux » ; §14.1 porte l'arbo 21/10 ; §11 porte « source unique + lignes `[projet]` ».

Interdits : `git add -A` / `git add -f`, `reset` / `amend` / force-push. Ne touche que `D-regles/0-fonctionnement.md` (+ la mise en place du point 4 si tu la fais, dans un lot distinct au besoin).

Fin : commit **par pathspec**, **push**, **une ligne au devlog** (identifiant de lot). Compte-rendu six blocs, puis stop.
