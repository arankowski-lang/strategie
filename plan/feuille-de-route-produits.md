# Feuille de route — produits et outils DataCAt

> **statut : actif · mis à jour le 21/10/2026 · porté par STRATEGIE · remplace : rien (nouveau sujet).**
> Incorporé le 21/10 (lot `L-261021-04`) depuis `MD Brain/CERVEAU-261013-…-feuille_de_route_developpement.md` (13/10, fusion de trois docs du 11/10). Ce fichier dit **quoi construire, dans quel ordre, pourquoi** — distinct de `plan-de-route.md` (le tableau de bord de l'organisation) et des plans par projet (tenus par chaque architecte).
> **Règle de ce fichier** : ni dates, ni durées (l'ordre et les dépendances seulement) — les estimations horaires et le calendrier « 12 semaines » de la source ont été retirés (règle d'Alexandre 20/10). **Les priorités datent du 11/10 : « à confirmer »** par Alexandre (certaines sont aujourd'hui hors périmètre : OWL garé, production usine pour PIDF hors périmètre — décision du 21/10 12h53).

## Principes (durables)
- Un outil démarre seulement si le **référentiel commun v1** est validé (sauf exception) et si son livrable **sert dans un appel ou une prospection sous 30 jours**. **Un outil n'est fini que s'il a servi une fois pour de vrai** (décision Alexandre 11/10).
- Un seul propriétaire par information : le **référentiel commun** (définitions, chiffres de performance) appartient à **BDD** ; les autres projets le lisent.
- Excel reste le back-end ; les livrables en sortent (PDF, PPTX, mail, web à terme).

## Flux entre projets (durable)
1. Exports plateformes → **BDD** (seule entrée des chiffres de performance).
2. **BDD → Reporting** (lecture depuis la base ; VERIF-BDD rend le récap de conformité, le reporting s'y compare).
3. **BDD → Usine** : résultats par annonce, joints au registre d'identifiants (à construire).
4. **Usine → BDD** : registre N° ↔ concept ↔ angle ↔ nom d'annonce (à construire, dette U6).
5. **OWL → Usine** : pont de matière, sur spécification seulement.
6. **Référentiel (BDD) → tous**, en lecture seule.
Interdits : OWL ne calcule aucun chiffre de performance ; le reporting ne calcule aucun NCAC/MER en dur ; aucun chiffre recopié à la main dans un livrable (il vient de la BDD ou il est signalé manquant 🔎).

## Projets et outils (ordre = priorité du 11/10, à confirmer ; dépendances fermes)
| id | quoi | dépend de | note |
|---|---|---|---|
| **G1** | Simulateur « Deux ROAS de 4 ne se valent pas » (web, prospection) | définitions du référentiel | **premier test du référentiel** ; aucune dépendance BigQuery/client |
| **G2** | État des lieux automatisé (+ kit onboarding 48 h fusionné) | référentiel ; idéalement BigQuery | offert dans l'ICP ; payant hors ICP |
| **O1** | Fiche client généralisée | carte clients du référentiel ; modèle = fiche Chichi | — |
| **O2** | Lecture créa par nomenclature (top/flop par angle, alerte de répétition) | registre usine (U6) ; résultats par annonce | — |
| **G4** | Bilan de saison automatique | reporting mensuel stabilisé ; BigQuery de préférence | argument de renouvellement |
| **G5** | Assistant de call (brief avant, actions consignées après) | fiche client ; registre des tests | — |
| **G3** | Créa IA en abonnement mensuel (fatigue par angle, régénération) | V2 usine stable ; registre figé ; **définition écrite de la fatigue** (U9) ; coût réel mesuré | monétisation directe récurrente |
| **O3** | Déclinaison du reporting (gabarit validé → autres clients) | retour Chichi ; PPTX de référence | — |
| **O4** | Saisonnalité et pricing | historique multi-années ; BigQuery | Alexandre a aussi dit « plus tard » : **à confirmer** |
| **O5** | Scan d'anomalies hebdo | **BigQuery branché** | sans lui, pas d'hebdo |
| **G6** | Test d'incrémentalité (geo holdout, on/off) | registre des tests ; référentiel | 2-3 k€/test |
| **G7** | Second regard hebdomadaire (contradicteur des décisions de compte) | registre des tests ; journal de décisions | filet de sécurité |
| **O6** | Veille économique par marché (à la demande) | sources figées ; lancé par commande | OWL |
| **G8** | Indice sectoriel trimestriel (anonymisé, publié) | ≥ 3 clients/secteur ; consentement écrit ; agrégation stricte | autorité |
| **O7** | Base d'apprentissages cross-client | registre des tests ; plusieurs clients/secteur | émerge du registre, ne pas construire à part |
| **G9** | Portail client (version édulcorée, jamais la BDD complète) | version client filtrée ; PDF de restitution | rétention |
| **O9** | Cockpit et registre des tests (hypothèse + critère de bascule écrits avant) | référentiel ; nomenclature | alimente O2, O7, version client |
| **O10** | Restitution (mail récap, focus, case study, pack client) | producteurs normés (BDD, veille, usine) | « reporting global », une feuille de la BDD |
| **O11** | Ajout de sources et sélecteurs de dates | **R2 (lecture par titre) et BigQuery** | ne pas investir sur les sélecteurs Excel avant |

**Abandonné / rangé ailleurs** : formation packagée (abandonnée) · rétro-usine post-pilote (la V2 en tient lieu) · gabarit Looker · réconciliation en outil séparé (faite dans reporting + BDD) · espace perso en outil dédié (la feuille de conseils suffit) · machine learning (sur la créa seulement, plus tard — statistiques descriptives et règles d'abord).

## Points critiques (durables)
1. **Identifiants usine ↔ annonces** (U6) : sans registre reliant nom d'annonce ↔ concept ↔ angle, la boucle de retour est coupée. À figer avant la première diffusion.
2. **Déplacement de cellules dans la BDD** : > 10 000 lectures par adresse ; aucun déplacement avant la lecture par titre (**R2**) — casse silencieuse sinon.
3. **BigQuery** : plusieurs outils (O5, O4, O11) en dépendent ; branché seulement si les connecteurs du collègue sont livrés.
4. **Suppression** : seule action irréversible (D5).
5. **Une seule source de faits par client** (ex. Chichi : reporting et veille).

*(Les conventions d'affichage de la source — arrondis NCAC, décimales par KPI — sont matière du **référentiel BDD**, pas de ce fichier ; l'arrondi NCAC entier est consigné comme décision dans `decisions/decisions-alexandre.md`.)*
