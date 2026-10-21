# Gabarit de lot — à remplir par l'architecte pour chaque lot

**Date : 13/10/2026. Statut : validé par Alexandre.** Fait partie de `CERVEAU-261013-GLOBAL-CC+CN-P-REGLES-fonctionnement_v1.md` (§5 et §8). Vaut pour tous les projets.

Un lot n'est valide que si **les dix cases sont remplies**. Une case qui ne s'applique pas porte « sans objet » et une raison en trois mots — jamais vide. Un lot = une demi-journée de session. L'architecte écrit deux lots d'avance par session.

Nom du fichier : `<PROJET>-AAMMJJ-<CLIENT>-CC-P-BRIEF-lot_<n>_<detail>.md`, déposé dans `A-<client>/C-taches-en-cours/` (ou `C-taches-en-cours/` si global).

---

## En-tête

- **Projet / client / session destinataire** :
- **Numéro de lot** (suite de la session) :
- **Lot critique** : oui / non — oui si ce qui sort va chez un client ou touche le master en profondeur (déclenche une passe VERIF à mi-lot)
- **Writer du dépôt pendant ce lot** : nom de la session (une seule) ; les autres sont en lecture seule
- **Lot suivant déjà écrit** : nom du fichier, ou « non — la session s'arrête proprement à la fin »

## 1. Objectif en une phrase, et ce qu'Alexandre verra à la fin

(Une phrase. Puis : le fichier ou l'état concret qu'il pourra ouvrir.)

## 2. Fichiers d'entrée

Pour chacun : nom exact · emplacement · rôle · à lire en entier ou à la demande.

| fichier | emplacement | rôle | lecture |
|---|---|---|---|
| | | | entier / à la demande |

Minimum vital toujours présent : `D-regles/` (trois sections), ce lot, le journal des consignes du client, la ligne SESSIONS, `E-systeme/catalogue-scripts.md`. Les monolithes (CLAUDE.md complet, PROTOCOLES, ETAT, vision, méthode) sont listés ici « à la demande » avec le point du lot qui pourrait en avoir besoin.

## 3. Fichiers de sortie attendus

| fichier (nomenclature v3, nom exact) | emplacement | remplace (REMPL) | statut à la fin |
|---|---|---|---|
| | | | à valider / livré |

## 4. Règles dures qui s'appliquent à ce lot

Nommées une à une (D1… + les dures du projet), pas « les règles ». Pour chacune, en trois mots, où elle mord dans ce lot.

## 5. Décisions déjà prises qui concernent ce lot

Références au journal des réponses d'Alexandre et aux `D-regles/` (date, texte court). Rien n'est à redécider ici.

## 6. Hors périmètre

Ce que la session **ne touche pas** : fichiers, feuilles, clients, scripts, dossiers. Explicite.

## 7. Points de contrôle VERIF en fin de lot

La liste que VERIF regardera (chiffres à recalculer avec leur mode de calcul et leur période ; règles dures concernées ; gabarit de forme de référence ; fichiers attendus). VERIF ne regarde rien d'autre.

## 8. Point de mi-lot

Ce qui doit être fait à la moitié (≈ 2 h). La session commit et écrit trois lignes au journal de chantier : fait / reste / écart. Si lot critique : passe VERIF ici.

## 9. Questions ouvertes connues, et quoi faire si la réponse manque

| question | si pas de réponse : | 
|---|---|
| | continuer avec l'hypothèse X (la noter) / sauter le point / s'arrêter |

Rappel : deux scénarios ou objectifs divergents → le plus optimiste, noté au journal. Une convention inconnue → chercher dans le monolithe nommé en case 2, sinon question en attente et point suivant. Jamais deviner.

## 10. Durée visée et débordement

Durée visée (≤ 4 h). Si débordement : terminer la sous-étape en cours, commit, écrire le reste dans le compte-rendu, ne pas entamer la suite.

---

## Case miroir (remplie par la session, avant de commencer)

- **Ce qui me manque dans ce lot** : (fichier non nommé, chemin inexistant, règle citée absente, décision contradictoire…) — ou « rien ».
- **Ma reformulation en 5 lignes** : ce que j'ai compris, ce que je vais rendre, dans quel ordre, ce que je ne touche pas, quand je m'arrête.

Si personne ne répond dans les 5 minutes, la session part.

## Fin de lot (remplie par la session)

- Commit : (hash)
- Recalcul fait : oui / non (si non, pourquoi)
- **Reste à faire** :
- **Reste à vérifier** :
- Dérogations à des règles surveillées (règle, raison) :
- Pourcentage de fenêtre consommé (première semaine) :
- → passe VERIF
