# Tâches — STRATEGIE

**statut : actif · mis à jour le 21/10/2026 · porté par STRATEGIE · remplace : rien (nouveau sujet).**
Une ligne par tâche. Le tableau de bord des grandes tâches (par projet) est dans `plan-de-route.md` ; ici : les **récurrentes** de STRATEGIE et les **tâches ouvertes** à STRATEGIE. ✅ fait · 🔄 en cours · ⏭ à faire · ⏸ attend Alexandre.

## Récurrentes
- Rituel de démarrage avant tout lot (loi + lexique ; vingt dernières entrées du devlog + décisions ; affiche lot/statut, dernière entrée, version des règles).
- Rangement d'entrée au début de chaque lot (ce qu'Alexandre a déposé à la racine → sa maison ; `1. MD BRAIN/` et `lecture/` jamais touchés).
- Fin de lot : CR six blocs dans `devlog.md` + une ligne dans la fenêtre + commit par pathspec + push.
- Lire les devlogs des projets en lecture seule (copie figée dans `lecture/<projet>/<AAMMJJ>/`) ; corrections toujours par message à l'architecte du projet.
- Tenir la version commune de `0-fonctionnement.md` (source unique) ; un besoin propre à un projet reste `[projet]`.
- À terme (rituels hérités du cerveau) : revue hebdo des devlogs/dettes/mesures · chasse aux contradictions par sous-agent · pré-tri avant la purge mensuelle.
- **État du dépôt généré chaque matin par STRATEGIE** (arbitrage 21/10 soir) — les noms non homogènes deviennent un contrôle de `revue.py`.

## Ouvertes
- ✅ Les deux projets ont tiré `0-fonctionnement.md` **version 16h47** (BDD + usine `L-261021-18`) — lu sur disque le 21/10.
- ⏭ La **version 17h22** ajoute la règle MD Brain (§14.1 r11) : à tirer au **prochain alignement** (message à écrire quand Alexandre le voudra).
- ✅ MD Brain **rangé et versé** (`L-261021-05`) : global incorporé, 11 sources clients signalées à BDD (`B-a-transferer/bdd/`), 15 périmés/incorporés en corbeille. ⏭ suivre le quai `rapports/md-brain-transferts.md` (passer « déposé » quand les devlogs projets le montrent, vider le quai).
- ⏭ Suivre la file « en attente de décision » et les « à confirmer » (nomenclature levée le 17h13).
- ⏭ Rapatrier les éventuelles lignes de fond des projets dans la version commune, en gardant les notes `[projet]`.
- ⏭ **Finir de graver les arbitrages du 21/10 soir** : point 7 (lots en fichiers — STRATEGIE prépare en `B-a-transferer/`, la session qui exécute copie en `C-pilotage/lots/`) et le contrôle `revue.py` « noms non homogènes » (point 6) — de jour / en lien avec les projets.
- ⏭ À terme : le cerveau pousse lui-même depuis ce dépôt (il cesse d'être le bus des fichiers globaux).

## Veille des chaînes de nuit (21/10 → matin, lot `L-261021-07`)
Lecture sur disque toutes les ~30 min (≤ 10 passes ou 2× « chaîne terminée »). On n'intervient pas chez les voisins.
- **passe 1 · 18h18 (lue)** · BDD : dernier `L-261021-20` (BDD-CHICHI-CREA classeur créa v4, 17h41) ; chaîne **BDD-ECRITURE A–G** pas encore visible (dernier BDD-ECRITURE = `L-261021-14`, 16h44). · usine : chaîne de nuit **démarrée, lot 1/5 = `L-261021-20`** (contrôle 11 valeurs de référence dans `revue.py`) ; aligné 16h47 (`L-261021-18`). · 🔴/non-fait : aucun.
- **info reçue ~18h30 (pour le rapport du matin, activité normale, pas d'intervention)** : (1) nouvelle session **BDD-DECK-CREA** (deck d'exploration de l'analyse créa Chichi), périmètre déclaré = `3-chichi-propositions/deck-crea/` (+ `travail/`) + CR au devlog ; jalons `…deck_crea_pilote_v1/v2/v3`. (2) nouveau lot **BDD-CHICHI-CREA** : `BDD-261021-CHICHI-CC-P-ANALYSE-etat_des_lieux_modules_creas.md` (dans `3-chichi/B-prod-claude/crea/`). (3) collision d'identifiants entre dépôts → **règle de préfixe gravée** (`L-BDD-/L-USINE-/L-STRAT-`, lots à venir, §14.1 r9) ; appliquée dès le prochain lot STRATEGIE (`L-STRAT-261021-08`).
- **info reçue ~18h45 (arbitrages cerveau, 21/10 soir)** : verrou = un fichier/une ligne par session + pas de branches → **gravés** §13.5 pt6 ; préfixe par dépôt **confirmé par Alexandre** ; état du dépôt matinal + contrôle `revue.py` noms non homogènes (pt6) et lots en fichiers (pt7) → **à finir de graver** (file Ouvertes). Consignés dans `decisions/decisions-alexandre.md`.
