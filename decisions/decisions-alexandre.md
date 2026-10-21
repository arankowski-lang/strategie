# Décisions d'Alexandre — fichier de vérité

**statut : actif · mis à jour le 21/10/2026, 12h40 · porté par STRATEGIE (amorcé par le cerveau) · remplace : rien (nouveau sujet).**
Une ligne par décision : date · texte verbatim (ses mots) · validité (« permanent » sauf mention) · où elle est appliquée. Toute correction d'Alexandre ajoute une ligne ; on ne réécrit jamais une ligne existante, on en ajoute une qui la remplace (« remplace la ligne du … »). L'historique brut est dans `journal-reponses-alexandre.md` ; les projets tiennent chacun leur `C-pilotage/decisions-alexandre.md` pour ce qui leur est propre.

| Date | Décision (verbatim) | Validité | Appliquée dans |
|---|---|---|---|
| 14/10 00h16 | « Avant d'écrire un message de lancement, relire toute la session et les documents de référence, puis tout mettre dans le message. » MODE AUTONOME : la session ne s'arrête jamais. | permanent (messages courts admis quand le lot est dans le dépôt, 20/10) | §8, §13.5 |
| 18/10 | Les entrées d'Alexandre sont intouchables (D11). Suppression uniquement via `Z-a-supprimer/`, Alexandre supprime lui-même (D5). « Je suis pour incorporer » plutôt qu'ajouter. | permanent | D5, D11, §14.1 |
| 20/10 13h09 | Registre des clients : 1 Tech · 2 Artikka · 3 Chichi · 4 March · 5 Rouge Gorge · 6–9 réservés · 10 NV Gallery · 11 PIDF ; suivants = autres. | permanent | §14.1 |
| 20/10 13h22 | « Plus de Z-archive nulle part. » | permanent | §14.1 |
| 20/10 13h42 | « Tu mets des plafonds. Moi, je ne pense pas qu'il faut mettre des plafonds. De temps. » | permanent | §13.5 |
| 20/10 14h29 | « Tu avances tout de suite, tout le temps à l'étape d'après. […] tu m'envoies plus de prompt qui n'est pas envoyé immédiatement. » | permanent | §13.3 |
| 20/10 18h36 | Dépôt stratégie : oui. Compte-rendu au même endroit : oui. Deux fichiers de règles par projet : oui. Une seule session écrit à la fois par dépôt : « On peut l'acter à partir de maintenant. » Nomenclature courte : client à la fin, gardé. Automatiser la revue : oui. OWL secondaire, pas touché avant des semaines. | permanent | D12, §9, §14.3, §14.5, §14.7 |
| 20/10 18h57 | Devlog unique. En-tête de vérité : oui. Faits à péremption : oui. « Le rituel de démarrage, c'est banger. Ça, faut que tu le mettes en priorité forte. » Identifiant de lot : oui. Chasse aux contradictions : oui. Garde-fous : « j'ai juste peur que ce soit un peu trop limitant » → trois refus, le reste avertit. « Je me rends compte que je mets trop de contraintes. Donc j'essaye d'ouvrir un petit peu. » | permanent | §14.1, §14.3, §14.5 |
| 20/10 22h20 | « Il faut que tu arrêtes de te donner des dates et des assignations et des durées. […] on va toujours deux, trois fois plus vite que ce qui est dit. Part du principe que je travaille 5 heures par jour sur Claude Code, tous les jours. » | permanent | §13.4 règle 11 |
| 20/10 22h31 | Une session ne s'arrête pas parce que son contexte se finit : « Il faut qu'il reprenne même une fois que son contexte de session se finit. » | permanent (remplace le stop à 70 %) | §13.5 (4) |
| 20/10 22h41 | « Que le maximum de sessions soit dans les Claude Code directement, que toi tu fasses le moins possible à terme. Et que tout soit consigné, dans mes retours. » « Tu vas devoir aller aussi sur un projet Claude Code toi-même. Sur le dépôt stratégique. » « Le pilote, oui, on le met sur l'usine d'abord. La BDD, c'est trop gros. […] On fait attention pour le projet base de données. » | permanent | §13.1, §13.4 règle 12, §14.7 |
| 21/10 08h38 | Polara = Artikka, même dossier (`2-artikka-polara`), marchés à l'intérieur. Staging supprimé. Scripts clients au global. `Z-travail/` remplacé par `B-prod-claude/travail/`. Usine : `B-maquette` → `0-maquette` ; `F-references/` à plat, banque taguée à la racine, `references-par-concept/` (liens durs), `crea-potentielles-en-discussion/` ; sources, packshots, analyses de site → `-ressources/` (« j'ai décidé ») ; `-visuels/` à huit dossiers ; nus `situ-<situation>-<concept>-<produit>`. | permanent | lots d'arbo du 21/10 |
| 21/10 09h04 | Tag humain après la marque ou le concept, jamais en premier. Liens durs : oui. Chichi créa : périmètre d'écriture séparé, copie de travail séparée plus tard. | permanent | lots d'arbo, D12 par périmètre |
| 21/10 10h30 | Tags humains : `HUMAIN-karl`, `HUMAIN-alex`, `HUMAIN-client`, `HUMAIN-agence-client`, `HUMAIN-asight`, `HUMAIN-scopum` (+ nath, coudac). « L'idée, c'est que le projet créa soit assez autonome aujourd'hui. » | permanent | usine |
| 21/10 10h50 | Pas de réécriture d'historique pour les 304 fichiers `Z-travail/` (11 Mo). `git add -f` interdit comme `add -A`. | permanent | garde-fous |
| 21/10 12h29 | Audit du process validé : verrou par dépôt, revue en fin de chaîne par sous-agent, manifeste de déplacement, valeurs de référence par client, `pieges-connus.md`, file unique de décisions, cerveau dans le dépôt stratégie. | permanent | plan-de-route |

## En attente de décision (file unique — Alexandre répond ici, une ligne par réponse)
- Chichi-D3 : marge par catégorie, ou 65 % global ?
- Chichi-D22 : lecture `MetaSegments`, ou dimension campagne au Moteur v2 ?
- Tek-D5 : qui relit le mapping de 496 lignes ?
- Decks March v3, reporting Chichi v13, DataCAt v5 : envoyés au client ou non ?
- `design/` et `rendus-communs/` (usine, anciens rendus) : garder ou pas ?
- 422 ex-validés Tech : en re-promouvoir ?
- Ménage du projet Cerf Veau (quatre fichiers du 28/08, quatre messages du 13/10) : oui / non ?
- Usine : jeton `agence` = Coudac ou agence du client ? 8 fichiers Coudac sans auteur à taguer ? Exception `.md` suivis dans `-ressources/` ?
- BDD : 109 `.py` dans `B-prod-claude/` — outillage ou traces ? Contradictions C2 (Google) et C3 (CAC cible March).
