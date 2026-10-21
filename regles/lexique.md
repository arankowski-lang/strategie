# Lexique — tous les codes en une page

**statut : actif · mis à jour le 20/10/2026, 23h · porté par le cerveau.** Une ligne par code, en français simple. Quand un message cite un code, il cite aussi son nom ; ce fichier sert quand on veut le détail.

## Les règles dures communes (D = dure, valable dans tous les projets)
- **D1 — Rendu client cloisonné** : un rendu pour un client ne montre que ses données, jamais une note interne.
- **D2 — Chiffre sourcé** : aucun chiffre sans sa source (export, fichier, date). Jamais « plausible ».
- **D3 — Aucun envoi automatique** : rien ne part vers un client ou une plateforme sans qu'Alexandre le déclenche.
- **D4 — Fenêtres déclarées** : toute comparaison dit sa fenêtre d'attribution et compare des périodes de même longueur.
- **D5 — Aucune suppression directe** : tout va dans `Z-a-supprimer/` avec une liste ; Alexandre supprime lui-même à la purge. Seule exception : une copie exacte au caractère près.
- **D6 — Conformité avant livraison** : rien ne part sans le récap de VERIF ; une ligne rouge = rien ne part.
- **D7 — Le travail manuel d'Alexandre est intouchable** : jamais régénérer en entier un classeur qu'il a mis en forme.
- **D8 — Jamais d'écriture sur un master** : backup d'abord, travail sur copie, livraison en version suivante. **Toucher un master est le seul cas où une session attend un feu vert.**
- **D9 — On n'efface jamais une donnée pour la corriger** : on exclut ou on retraite avec trace.
- **D10 — Marque blanche Rouge Gorge** : jamais le nom du client, de l'agence, ni « lingerie ».
- **D11 — Les entrées d'Alexandre sont intouchables** : exports, briefs, retours, packshots originaux — lecture seule pour les sessions, sauf le rangement initial.
- **D12 — Une seule session écrit à la fois dans un dépôt** : les autres lisent. Parce que toutes les fenêtres partagent la même copie de travail et la même zone git.

## Les niveaux de règles
- **Dure** : feu rouge, la session s'arrête si elle ne peut pas la respecter.
- **Défaut surveillé** : habitude suivie ; on peut y déroger en l'écrivant au journal. Surveillance jusqu'au 13/11.
- **Défaut** : habitude adaptable sans justification (forme, nomenclature).

## Les dettes (une dette = quelque chose qu'on sait cassé ou manquant, noté pour plus tard)
- **B-numéro** : dette BDD (ex. B45 vider `B-doc/` — fait).
- **U-numéro** : dette usine (ex. U10 scripts à chemins en dur — soldée ; U15 scanner — fait).
- **C-numéro** : dette du cerveau (ex. C10 ménage du projet Cerf Veau ; C12 ligne git par projet dans le fichier global ; C13 la fenêtre n'est pas affichée par l'outil).
- **Chichi-D…, Tek-D…, March-D-A…** : dettes propres à un client dans BDD (ex. Chichi-D3 marge par catégorie ; Tek-D5 relecture du mapping ; March-D-A6 TEXT-€ — résolue).
- **DT-…** : ancienne numérotation des dettes usine (DT-2026-10-13 = U10).
- **« bloque » / « ne bloque pas »** : la dette empêche-t-elle un rendu client, ou pas.

## Les règles usine (R = registre, usine créa)
- **R1–R50** : règles de production de visuels (ex. **R38 — polices sous licence libre ou détenue**, la seule dure du registre ; R40 contraste minimum ; R25 visuelle).
- **JM-R1–14** : règles issues des retours de Jean-Marc (relecteur), renumérotées.
- **S1–S10** : règles « surveillées » héritées du Deck Master.
- **DR1–DR5** : règles dures héritées du Deck Master, à incorporer dans celles de BDD.

## Les paragraphes du fichier de fonctionnement (§ = section)
- **§3** règles dures · **§8** exhaustivité des passations et messages courts · **§9** régime de contexte, trois couches, rituel de démarrage, mémoire = dépôt · **§13.1** fenêtres et pilote unique · **§13.3** comment on écrit un message (section « Fichiers et messages ») · **§13.4** règles de collaboration avec Alexandre · **§13.5** mode autonome et continuité · **§14.1** table des maisons, registre des clients, en-têtes de vérité, faits à péremption, identifiant de lot · **§14.3** compte-rendu six blocs et devlog · **§14.5** revue d'entretien et `revue.py` · **§14.7** dépôt stratégie.

## Les sessions (une fenêtre Claude Code = une session, nommée par projet et rôle)
- **ARCHITECTE** : écrit les lots et tient les règles ; n'exécute jamais.
- **ECRITURE** : exécute les lots ; seule à écrire pendant qu'elle travaille.
- **VERIF** : lecture seule, contrôle en fin de lot et revue d'entretien ; ne corrige rien.
- **Pilote** (cible) : la seule fenêtre d'un projet, qui lance des sous-agents à la place des fenêtres ECRITURE/VERIF.
- **Sous-agent** : travailleur jetable lancé par le pilote, contexte vierge, rend un compte-rendu et disparaît. Sa mémoire, c'est le dépôt.
- **Cerveau** : cette conversation ; règles globales, process, conseils ; pas en production ; à terme une session Claude Code dans le dépôt stratégie.

## Les objets du quotidien
- **Lot** : une unité de travail écrite au gabarit 10 cases ; identifiant `L-AAMMJJ-NN`.
- **MODE AUTONOME** : la session ne s'arrête jamais pour une question ; elle essaie autrement, réduit le périmètre seulement si bloquée, écrit « non fait + raison ».
- **Stop propre** : fin de la sous-étape, commit, compte-rendu, point de reprise — jamais Échap.
- **Compte-rendu six blocs** : Fait · Non fait + raison · Fichiers · À valider · Questions · Prochaine étape.
- **Devlog** : `C-pilotage/devlog.md`, un par projet, en ajout seulement — le seul endroit où s'écrivent les comptes-rendus.
- **En-tête de vérité** : `statut : actif | clos | périmé · mis à jour le · porté par · remplace`, en tête de tout fichier de pilotage.
- **Faits courants** : `C-pilotage/faits-courants.md`, dix lignes à date de fin (présentation passée, NCAC 15,49 €, deck de référence…).
- **Rituel de démarrage** : trois lignes affichées par toute session avant de travailler (plan exécuté et statut, dernière entrée du devlog, version des règles lue), puis les faits courants.
- **Rangement d'entrée** : au début de chaque lot, la session range ce qu'Alexandre a déposé à la racine.
- **`Z-a-supprimer/`** : la corbeille d'un projet, avec `liste.md` (raison de chaque fichier). **Purge** : Alexandre vide la corbeille, mensuellement, sur liste pré-triée.
- **`B-a-transferer/`** : la sortie — ce qu'une session rend à Alexandre.
- **`C-pilotage/`** : la maison unique des plans, contextes, tâches, devlog, dettes.
- **`D-regles/`** : la maison des règles (`0-fonctionnement.md` = ce fichier global, `1-regles-dures.md`, le registre…).
- **`E-systeme/`** : la maison des scripts communs ; **`paths.py`** = le seul endroit où un chemin existe.
- **`revue.py`** : le script qui fait les contrôles mécaniques de la revue d'entretien et génère `INDEX.md`.
- **Garde-fous** : contrôle avant commit — trois refus (master/export/image dans un commit, secret, fichier > 10 Mo), le reste avertit.
- **Dépôt stratégie** : troisième dépôt, en ligne, qui porte les règles communes ; les projets pointent dessus.
- **Registre des clients** : 0 DataCAt · 1 Tech/La Bonne Remise · 2 Artica · 3 Chichi · 4 March LA.B · 5 Rouge Gorge · 6–9 réservés · 10 NV Gallery · 11 Plantes d'Île-de-France · 12 Polara.
- **Sœurs** : à côté d'un dossier client, `-livrable/` (envoyé au client) et `-propositions/` (interne) ; usine : `-visuels/`, `-livrables/`, `-ressources/`.
- **NCAC** : nouveau coût d'acquisition client ; Chichi août 2026 = 15,49 € (le 15,40 et le 14,79 sont faux).
