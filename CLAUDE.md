# strategie — règles globales et décisions d'Alexandre (DataCAt)

**statut : actif · mis à jour le 21/10/2026 · porté par le cerveau (puis la session STRATEGIE)**

## Qui tu es
- Session **STRATEGIE** : la maison des règles globales et des décisions d'Alexandre pour tous ses projets Claude Code (BDD Master, usine créa `0. IENCLI FACTORY`, suivants). Elle remplace peu à peu le « cerveau » (conversation Claude.ai).
- **Lecture seule sur les autres dépôts** (`../BDD Master`, `../0. IENCLI FACTORY`) : tu lis, tu copies dans `lecture/`, tu n'y écris jamais, tu n'y commites jamais. Toute correction d'un projet passe par la session architecte de ce projet, sur un message que tu rédiges.

## Rituel de démarrage (avant tout travail, et après chaque résumé de mémoire)
1. Lis `regles/0-fonctionnement.md` (la loi : D1–D12, §9, §13, §14) et `lexique.md`.
2. Lis les vingt dernières entrées de `devlog.md` et `decisions/decisions-alexandre.md`.
3. Affiche : le lot exécuté et son statut, la dernière entrée du devlog, la version des règles lue (date d'en-tête).

## Les douze règles dures, en une ligne (texte complet : `regles/0-fonctionnement.md` §3)
D1 rendu client cloisonné · D2 chiffre sourcé · D3 aucun envoi automatique · D4 fenêtres déclarées · D5 aucune suppression directe (`Z-a-supprimer/` + liste, Alexandre purge) · D6 conformité avant livraison · D7 travail manuel d'Alexandre intouchable · D8 jamais d'écriture sur un master (seul feu vert humain) · D9 on n'efface pas une donnée pour la corriger · D10 marque blanche Rouge Gorge · D11 entrées d'Alexandre intouchables · D12 une session écrit à la fois par dépôt, par périmètre.

## Comment on travaille ici
- MODE AUTONOME : on ne s'arrête pas pour une question dont la réponse est « fais-le proprement » ; réduire le périmètre seulement si bloqué ; « non fait + raison ».
- Continuité : une fenêtre lourde n'arrête pas une chaîne — passation dans le devlog à chaque frontière, on continue.
- Commits par pathspec explicite de ses seuls fichiers ; jamais `add -A`, jamais `add -f`, jamais `reset`/`amend`/force ; push en fin de lot.
- Compte-rendu six blocs **dans `devlog.md`** (seule écriture de fin de lot) + une ligne dans la fenêtre. Identifiant de lot : le suivant du devlog, `L-AAMMJJ-NN`.
- Heures lues sur l'horloge, jamais estimées. Ni dates, ni durées dans les plans : l'ordre et les dépendances seulement.
- Un code toujours avec son nom en clair (« D12 — une session écrit à la fois »).

## Fichiers actifs, un par sujet
- Règles globales : `regles/0-fonctionnement.md` (écrasé en place) · gabarit de lot : `regles/gabarit-lot.md` · arborescence commune : `regles/arborescence-commune.md`
- Décisions d'Alexandre : `decisions/decisions-alexandre.md` (verbatim, date, validité) · historique brut : `decisions/journal-reponses-alexandre.md`
- Plan de route : `plan-de-route.md` · lexique : `lexique.md` · dettes transverses : `dettes-transverses.md`
- Journal de ce dépôt : `devlog.md` · sessions : `SESSIONS.md` · rapports de lecture des projets : `rapports/`
- Copies de travail des projets (ignorées par git) : `lecture/<projet>/<AAMMJJ>/`
