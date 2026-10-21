# Plan de route — fin de cleaning, entretien, fondations

**statut : actif · mis à jour le 20/10/2026, 22h55 · porté par le cerveau · remplace `plan_cleaning_contexte` (13/10, incorporé).**
**Règle de ce fichier (Alexandre, 20/10 22h20) : ni dates, ni durées, ni assignations.** Il dit l'ordre et les dépendances ; le rythme est celui d'Alexandre (cinq heures par jour sur Claude Code, tous les jours). Seules les dates de faits passés restent. Les règles citées sont gravées dans `CERVEAU-GLOBAL-CC+CN-P-REGLES-fonctionnement.md` (mise à jour 20/10 22h50). Les codes sont expliqués dans `…-CONTEXTE-lexique.md`.

✅ fait · 🔄 en cours (chaînes de nuit du 20/10) · ⏭ à faire, dans l'ordre · 🆕 décidé le 20/10 soir

---

## 0. État au 20/10, 23h

Deux dépôts réécrits, légers, en ligne, sains. Arborescences identiques (clients numérotés, une maison par sorte, plus d'archive). Règles datées, D1–D12 communes. **Cleaning BDD certifié (VERIF n°2) et cleaning usine certifié (revue n°3), le 20/10.** Deck Master absorbé. OWL secondaire. Deux chaînes de lots autonomes lancées pour la nuit (BDD 8 lots, usine 7 lots) avec la règle de continuité : passation au devlog à chaque frontière, on ne s'arrête qu'à la fin.

Ce qui a coûté et que les fondations corrigent : six écritures par lot · 600 lignes de règles lues au démarrage pour dix utiles · Alexandre comme bus de fichiers et de messages · plusieurs sessions écrivant dans la même copie de travail · des sessions sur des informations périmées · des estimations de temps fausses du cerveau.

---

## A — Cleaning (fermé)

- ✅ BDD : git maigre et en ligne · `B-doc/` vidé et supprimé · migration Deck Master · TEXT-€ · lot 0 sauvetage · `Z-archive/` · table des dettes bloquantes · étude de la corbeille · **VERIF n°2 : certifié**
- ✅ Usine : git en ligne · purge · arbo · règles globales · `B-a-retravailler/` · batch 3 puis finition U10 (scanner réparé et prouvé) · catalogue reconstruit · **revue n°3 : certifié**
- ✅ Contrôles git des deux dépôts (fsck, clone frais identique)
- ⏸ `faits_graphes` à 15,49 € : avec le prochain reporting Chichi (production, pas socle)

## B — Chaînes de nuit du 20/10 (🔄)

**BDD, dans l'ordre** : 1 finitions + règles (D12 dans les dures, 20 changements non commités tranchés un par un, `.pptx` hors suivi, `liste.md` réconciliée, devlog unique, rituel de démarrage, faits courants, en-têtes de vérité, identifiant de lot, colonnes de mesure) → 2 rapport des emplacements → 3 catalogue reconstruit → 4 table de dettes unique → 5 `revue.py` + `INDEX.md` → 6 garde-fous (trois refus) → 7 chasse aux contradictions → 8 brouillons des trois couches (non activés).
**Usine, dans l'ordre** : 1 finitions + règles (`build_master`, jetons du scanner, DT-13, D12, devlog, rituel, faits courants, en-têtes) → 2 emplacements (dont `B-maquette`, `B-marches`, `F-references`) → 3 table de dettes unique → 4 état des lieux PIDF → 5 garde-fous → 6 contradictions → 7 brouillons des trois couches.

## C — Ce qui vient après les chaînes, dans l'ordre

1. ⏭ **Lire les devlogs** (ou le cerveau les lit lui-même, voir E) → **revues des deux chaînes** par les architectes, une passe chacun → reprendre ce qui n'est pas fini, même message.
2. ⏭ **Copie Drive** (dépôts figés) · corbeille vidée (copies `.git`, brouillons `autonome`) · Deck Master en `zz-`.
3. ⏭ **`faits-courants.md`** complétés par Alexandre dans les deux projets (ses dates).
4. ⏭ **Lots de rangement** issus des rapports d'emplacements — règle : deux emplacements permis par sorte de contenu, la maison globale à la racine ou le dossier du client ; le pilotage client = marqueur dans `C-pilotage/` (lecture 1, défaut). Le contrôle entre ensuite dans `revue.py`.
5. ⏭ **Trier les contradictions** trouvées → règles corrigées.
6. ⏭ **Brouillons des trois couches** : Alexandre lit, dit oui → bascule du `CLAUDE.md` 40 lignes, des définitions d'agents, des paquets de règles par tâche · `revue.py` copié de BDD à l'usine.
7. ⏭ 🆕 **Pilote unique : l'usine d'abord** (Alexandre, 22h41) — une fenêtre, sous-agents en séquence ; on mesure (tours, lots, erreurs). **BDD ensuite, avec prudence** : gros, spécificités par client ; tout changement de structure passe par un lot écrit et une revue avant bascule.
8. ⏭ 🆕 **Dépôt stratégie** : Alexandre crée le dépôt privé vide ; le cerveau y pousse les fichiers globaux ; les `CLAUDE.md` pointent dessus.
9. ⏭ 🆕 **Les décisions d'Alexandre dans les dépôts** : `decisions-alexandre.md` (global dans stratégie, propre à un projet dans son `C-pilotage/`), verbatim, date, durée de validité ; **backlog de retours à consigner** ; le journal du cerveau y est versé.
10. ⏭ 🆕 **Le cerveau devient une session Claude Code dans le dépôt stratégie** : il lit les devlogs, tient les fichiers globaux dans un dépôt, pousse lui-même ; la conversation Claude.ai reste le lieu du brainstorm. **Le maximum se fait dans Claude Code ; le cerveau fait le moins possible à terme.**
11. ⏭ Les décisions ouvertes, quand Alexandre veut : Chichi-D3 (marge par catégorie ou 65 % global) · Chichi-D22 (`MetaSegments` ou dimension campagne) · Tek-D5 (qui relit les 496 lignes) · decks March v3 / reporting Chichi v13 / DataCAt v5 envoyés ou non · `design/` et `rendus-communs/` · 422 ex-validés Tech · ménage du projet Cerf Veau (oui/non).
12. ⏭ **Production** : PIDF à l'usine (l'état des lieux dit quoi fournir ; **le premier run = test de fumée réel**, petit jeu, sorties dans `Z-travail/`, avant le vrai run) · plan Chichi des 9 modules côté BDD · `faits_graphes`.
13. ⏭ 🆕 **Un `CLAUDE.md` par dossier client** ne contenant que les règles de ce client (deuxième emplacement des règles).
14. ⏭ Rituels (périodicité gardée, pas de date) : push en fin de lot · condensation hebdo des consignes · revue hebdo du cerveau + chasse aux contradictions · revue d'entretien toutes les deux semaines et après tout run autonome · pré-tri puis purge mensuelle · fin de surveillance le 13/11 (retirer des règles, cible une douzaine de dures par projet).
15. ⏭ Plus tard : nomenclature courte au fil de l'eau (client à la fin, gardé) · OWL quand BDD et créa sont stables · mesure sur deux semaines → seuil de fenêtre et règles à couper.

## D — Règles actées le 20/10 soir (toutes gravées)

Une session écrit à la fois par dépôt (D12) · toucher un master = seul feu vert humain · continuité : une fenêtre lourde n'arrête pas une session, passation au devlog à chaque frontière (remplace le « 70 % ») · LibreOffice hors du chemin critique · devlog unique, seule écriture de fin de lot · rituel de démarrage · en-têtes de vérité · faits à péremption · identifiant de lot · garde-fous : trois refus, le reste avertit · messages courts quand le lot est dans le dépôt · codes toujours avec leur nom en clair · ni dates ni durées de la part du cerveau · pilote : usine d'abord · cerveau dans Claude Code à terme.

## Ce qui revient à Alexandre

Les devlogs (tant que le cerveau ne les lit pas lui-même) · les « go » · la copie Drive, la corbeille, Deck en `zz-` · les faits courants · créer le dépôt `strategie` · les décisions ouvertes · le oui de la purge mensuelle · la revue hebdo (dix lignes par projet).
