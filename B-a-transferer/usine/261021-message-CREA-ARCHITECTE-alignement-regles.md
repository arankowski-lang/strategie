# Message prêt à coller — CREA-ARCHITECTE (alignement des règles)

> **statut : actif · mis à jour le 21/10/2026 18h17 · porté par STRATEGIE · remplace : la version 13h08 (tire plutôt celle de 18h17, qui inclut l'audit du process).**
> À coller par Alexandre dans la session **CREA-ARCHITECTE** (Claude Code, dépôt *0. IENCLI FACTORY* / usine créa). Objet : tirer la version commune de `0-fonctionnement.md`. Ne rien faire d'autre.

---

**Fenêtre : CREA-ARCHITECTE (Claude Code, dépôt usine créa) · objet : aligner `D-regles/0-fonctionnement.md` sur la version commune · mode : lot court, MODE AUTONOME.**

La **source unique** de `0-fonctionnement.md` est `strategie/regles/0-fonctionnement.md`, **version du 21/10 18h17 (heure lue)** : base 22h50 (continuité à la place du 70 %, ordre à la place du calendrier, codes avec leur nom, cerveau dans le dépôt stratégie) **+** arbo du 21/10 (`0-maquette/`, `F-references/` à plat, sœur `-ressources/`, `-visuels/` à 8 dossiers) **+** l'**audit du process** (21/10 12h29) incorporé dans les sections existantes.

⚠️ **L'usine a déjà la plupart de ces mécaniques — NE LES REFAIS PAS.** Tu as déjà : le **verrou d'écriture par dépôt** (désormais précisé : **il porte le périmètre** — §13.5 pt 6, deux sessions n'écrivent en parallèle que sur des périmètres disjoints déclarés ; lève la tension `L-261021-18` / dette `DTT-261021-d12-L18`), `pieges-connus.md` et `environnement.md`, la **revue de fin de chaîne par sous-agent frais** (tes revues n°3/n°4), et `sauvegarde.py`. L'alignement **ne te demande que de tirer le texte commun** de `0-fonctionnement.md` pour que ta doctrine écrite corresponde mot pour mot à la version commune — pas de réimplémentation. Le seul contrôle vraiment nouveau à instrumenter dans `revue.py` : les **valeurs de référence par client** (3-4 chiffres connus d'Alexandre, source, écart = 🔴) — à confirmer s'il n'existe pas déjà.

À faire, dans l'ordre :
1. Récupère `strategie/regles/0-fonctionnement.md` (dossier `strategie/` ajouté à ta session, ou fichier collé). En-tête « **Mis à jour le 21/10/2026, 18h17 (heure lue)** ».
2. **Remplace intégralement** ton `D-regles/0-fonctionnement.md` par cette version (écrasé en place).
3. **Garde tes lignes propres `[projet usine]`** : la table des maisons (§14.1) les porte déjà. **ET réinsère ta note remote « remote privé » dans ton §7** (marquée `[projet usine]`) — la version commune ne la porte pas, elle te le rappelle en §11 (remote `origin` privé `…/ienclI-factory.git`, push quotidien, `--force` interdit, historique allégé 78,9 → 8,58 Mo).
4. **Vérifie** : §13.5 « continuité » (plus le 70 %) ; §12 « Ordre des travaux » ; §14.1 arbo 21/10 (`0-maquette`, `F-references` à plat, `-ressources/`, 8 dossiers `-visuels/`) ; §13.5 pt 6-7 (verrou, revue sous-agent), §14.5 contrôle 11 (valeurs de référence) ; **ta note remote `[projet usine]` bien de retour en §7**.

Interdits : `git add -A` / `git add -f`, `reset` / `amend` / force-push. Ne touche que `D-regles/0-fonctionnement.md`.

Fin : commit **par pathspec**, **push**, **une ligne au devlog** (identifiant de lot). Compte-rendu six blocs, puis stop.
