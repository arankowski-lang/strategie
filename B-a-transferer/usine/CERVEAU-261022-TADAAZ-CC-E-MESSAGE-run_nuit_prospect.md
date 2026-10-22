# Message de lancement — usine créa, run de nuit prospect TADAAZ (22/10/2026, 19h)

**À coller dans la fenêtre Claude Code de `0. IENCLI FACTORY`** (session CREA-ECRITURE, writer du dépôt ; `crea-generation-visuels` pour les images ; `crea-verif` en lecture seule à la fin). Rédigé par le cerveau après brainstorm avec Alexandre (18h13 → 18h49). Mode SUPER AUTONOME : prospect, pas de client, aucune vanne client ; Alexandre relit tout demain matin à la main.

---

Nouveau client **12 = tadaaz** (registre : suivants = autres ; `Client("tadaaz")` dans `paths.py`, dossiers `12-tadaaz/`, `12-tadaaz-ressources/`, `12-tadaaz-visuels/`, `12-tadaaz-livrables/` sur le modèle de `11-pidf`). Lot **`L-USINE-261022-27`**, MODE AUTONOME, mode **super autonome** (`D-regles/mode-super-autonome.md`, gabarit = `11-pidf/B-prod-claude/run-autonome-pidf.md`). Tu ne t'arrêtes jamais : à chaque frontière de lot, passation au devlog, et tu reprends (mécanisme du minuteur en arrière-plan si ta fenêtre se ferme). Verrou `C-pilotage/.ecriture-en-cours` posé (CREA-ECRITURE · heure · périmètre `12-tadaaz*` + `E-systeme/scripts/` + `C-pilotage/` · L-USINE-261022-27), retiré en fin. Heures lues sur `date`.

**Avant tout** : Alexandre a déposé à la racine `CREA-261022-GLOBAL-CN-P-CONTEXTE-passation_architecte_crea.md` (passation de l'ancien architecte créa Claude.ai, désormais fermé). Range-le dans `C-pilotage/`, lis-le en entier, et applique ce soir ce qui concerne un run : `brief_ref` ≤ 10 %, technique **anti-pub**, humains ≤ 20 %, zone sûre centrale 60-70 % et logo ≥ 15 % du bas, **aucun recadrage avant la fin** (master 2:3 conservé), plaquette **pour Alexandre** triée par angle / concept / technique, « un message de run doit être exhaustif ». Les décisions §3 non gravées vont en file « à graver » dans ton CR, pas dans `D-regles/` ce soir.

## 0. Le prospect (ce que le cerveau a vérifié — à re-sourcer sur le site pendant le scrape)
- **Tadaaz** (tadaaz.fr) = marque grand public de **Buromac**, imprimeur familial belge créé en 1961 (faire-part et invitations B2B) ; site lancé en 2013 ; équipe à Halluin (Nord) ; présent FR, BE, NL, DE. **4,7/5 sur 4 882 avis eKomi** ; Wedding Awards mariages.net 2019-2026.
- Offre : faire-part **mariage, naissance, baptême, communion, anniversaire, vœux** ; papeterie complète (save the date, remerciements, menus, marque-places) ; **boîtes à dragées et cadeaux invités** ; cartes de vœux. **De 0,95 à 4 € par faire-part, minimum 10**. **Deux échantillons mariage offerts.** Outil de personnalisation en ligne (polices, couleurs, photo, « chaque détail »). **Expédié le jour même, livré le lendemain.** E-books « Mon Guide Mariage » et « Mon Guide Naissance » (lead magnets). Partenariat Laurette Fugain aux fêtes.
- Leurs pubs Meta actuelles (5 captures déposées par Alexandre dans `12-tadaaz-ressources/H-ads-existantes/`) : trois mécaniques — **guide à télécharger** (mariage, naissance), **échantillons offerts**, **cadeau invités** — toutes en flat-lay sur textile texturé (tissu brun, coton, bois ondulé), titre serif + sous-titre + bouton, palette neutre chaude, **zéro humain hors la photo dans le faire-part**. C'est leur charte : 70 % de la production reste dedans (« pas trop de risques »).
- Ton : vouvoiement, chaleureux, « Tadaaaa… ! », « partenaire d'émotions ». **Pas de prix dans les visuels** (prospect). Chiffres autorisés = uniquement ceux lus sur le site (U7) ; mots exacts.
- À vérifier pendant le scrape et à **remonter dans le CR** (Alexandre le demande) : toutes les spécificités et options de personnalisation (papiers, finitions — dorure, relief, plexi, ruban, pochette —, formats, enveloppes, impression recto/verso, photo, polices), les délais exacts, **existe-t-il un service d'envoi des faire-part aux invités** (adresses, timbres), le contenu des deux guides, les conditions des échantillons, la gamme vœux 2027 (dates, visuels) et la gamme baptême.

## 1. Objectif en une phrase, et ce qu'Alexandre verra demain matin
Produire en une nuit, pour **70 € maximum (cap DUR dans le runner, plan ≈ 55 €)**, une exploration créa Tadaaz orientée **vœux 2027 et baptême**, triée, avec un début de deck ; Alexandre ouvre demain matin : (1) `12-tadaaz-livrables/D-plaquette-pour-alexandre-261023-v1.pdf` (par concept, puis freestyles hors concept, puis anti-pub, puis tout), (2) les plaquettes par technique et par axe, (3) `B-deck-concepts-261023-v1.pdf` (début d'arrangement, gabarit Karl), (4) le CR six blocs au devlog avec le coût réel et la liste des spécificités du site.

## 2. Entrées
| entrée | emplacement | rôle |
|---|---|---|
| passation de l'ancien architecte | racine → `C-pilotage/` | règles de run non gravées |
| 5 captures de pubs Tadaaz | `12-tadaaz-ressources/H-ads-existantes/` (déposées par Alexandre) | créas natives, charte, mécaniques |
| site tadaaz.fr | scrape | fiche client sourcée, produits, textes, visuels |
| `run-autonome-pidf.md`, scripts `pidf_*.py`, `moteur.py`, `paths.py` | dépôt | gabarit du run super autonome (chemins réparés L-261021-16) |
| `D-regles/paquets/demarrage.md`, `generation-visuels.md`, `planches-gabarits.md`, `cloture-de-lot.md` | dépôt | paquets par tâche |

## 3. Les gammes et les concepts
**Gammes** : **vœux 2027** (priorité 1 — timing : pub de mi-novembre à mi-décembre, photo-personnalisation = cœur de l'offre), **baptême** (priorité 2 — terrain des dragées et cadeaux invités), **mariage** en une seule déclinaison (concept « preuve », échantillons — leur pub phare, on montre qu'on sait la refaire), **naissance** au plus un freestyle. **FR uniquement** cette nuit.

**8 concepts à explorer** (six mécaniques distinctes + deux bonus), chacun avec sa banque d'accroches (6 à 10 par concept — Alexandre veut **beaucoup de variations d'accroche sur la même pub**) :
1. **Preuve** — échantillons offerts : « touchez avant de commander » (papier, enveloppe, dorure en main).
2. **Personnalisation** — votre photo, vos polices, chaque détail : l'outil en ligne montré en avant / après, ou la même carte en trois versions.
3. **Produit en main** — le faire-part en flat-lay dans leur charte (textile, coton, bois) : la majeure sans risque, déclinée vœux / baptême.
4. **Souvenir** — ce qu'on garde : la carte sur le frigo, dans la boîte à souvenirs, des années après ; le message qu'on veut éternel.
5. **Calendrier** — vœux 2027 « la première carte de l'année » ; baptême « le jour où tout le monde est là ».
6. **Service** — expédié le jour même, livré demain : l'argument rationnel des retardataires (décembre).
7. **Bonus — le détail qui fait tout** : finitions (dorure, relief, ruban, plexi, pochette) en très gros plan.
8. **Bonus — la carte qu'on envoie encore** : le papier contre le message WhatsApp — anti-digital, fort pour les vœux.
Chaque concept = une fiche dans `12-tadaaz/B-concepts/tadaaz-concepts.json` (mécanique, promesse, gammes, scènes, humain oui/non, régime texte NU/OVERLAY, accroches, technique).

## 4. Le flux de la nuit (celui d'Alexandre, dans cet ordre)
0. **Phase 0** — sauvegarde (tag `avant-tadaaz-261022` + bundle), scaffolding client 12, `Client("tadaaz")`, **smoke test du pipeline** (`pidf_v0`/`pidf_lot` adaptés ou généralisés : si un script crashe à l'import, tu répares les chemins avant toute génération, tu notes l'écart). Scrape du site : pages mariage, naissance, baptême, communion, anniversaire, vœux ; **20 premières pages produit par gamme** (vœux et baptême d'abord) : visuels produit en haute définition, nom, prix, options de personnalisation, textes ; page échantillons, page livraison/délais, FAQ, pages guides. Si le site est anti-bot : `capture_page.py` et captures, pas de repli silencieux — tu écris ce qui manque. Fiche client **sourcée** (`12-tadaaz-ressources/A-sources-references/fiche-client-tadaaz.md`) avec les mots exacts du site. Palette extraite des natives + du site (« à confirmer »). Casting : 5 profils (couple, jeunes parents, grands-parents, famille de vœux, parrain-marraine), références générées (≈ 0,2 €), **humains ≤ 20 % des créas**. Banques : 8 concepts, accroches, punchlines, pictos (bénéfices produit + émotionnels). **Point de passage 0** : devis annoncé (U2), planche de la V0 en PDF.
1. **Exploration des 8 concepts** — qualité **medium**, 2:3, zone sûre centrale, logo ≥ 15 % du bas : par concept 8 à 10 images réparties entre techniques (`source` avec le vrai visuel produit scrappé = la carte elle-même, l'IA fait la scène ; `brief` text-to-image pour les scènes sans produit ; `comparatif` pour avant / après ; `serie` pour une seule mosaïque légitime). **Accroches en OVERLAY typographique** (composer / bands, police OFL, R38) pour les variantes de titres — le modèle image n'écrit le texte que lorsque le texte est dans le produit (le faire-part) ; Alexandre relit à la main demain les lettres inventées, tu ne rejettes pas pour ça, tu **tagues** `texte-ia`. Auto-analyse du lot (matrice concept × gamme × technique × humain × scène), cases vides = cibles du lot suivant.
2. **2 freestyles par concept** (16 images) — contexte réduit, liberté sur la scène, même promesse ; tagués `freestyle`.
3. **Anti-pub** (8 à 12 images) — consigne d'exclusion : « ne ressemble pas à leurs flat-lays textile ; pas de tissu brun, pas de coton, pas de bois ondulé, pas de bouton » ; tagués `anti-pub`.
4. **Autres** — lot « usage » (10 images : recevoir, ouvrir, écrire les adresses, la boîte aux lettres, poser la carte sur le frigo — humains dans le quota), déclinaisons des deux meilleurs concepts (4 titres × 1 visuel, 4 produits × 1 concept, 1 persona), et le reliquat de budget sur la direction la plus sous-exploitée de la matrice.
5. **Re-tri de tout** — juge QC aveugle (U1) **uniquement** sur l'intégrité produit (la carte scrappée reconnaissable, U6 éliminatoire) et la coupe 2:3 → 4:5 ; pas de note de goût. Puis tri par concept / technique / axe, **top 2 par concept re-tirés en high** pour le deck (16 à 24 images high). Registre `_registre.csv` à jour à chaque lot (U8), journal des prompts, coût réel.
**Protocole** : à chaque fin de lot, planche PDF dans `12-tadaaz-livrables/`, trois lignes au devlog (fait / reste / écart), et tu continues — « vanne à délai » : tu publies, tu attends dix minutes, tu décides seul si silence. Pas de problème de temps de génération. Si le coût double par rapport au devis d'un lot, tu réduis le lot suivant, jamais le cap.

## 5. Les rendus du matin
- **`D-plaquette-pour-alexandre-261023-v1.pdf`** : par concept (toutes les créas du concept, exploration + freestyles rattachés, tags visibles : technique, texte-ia, humain), puis **freestyles hors concept**, puis anti-pub, puis « tout » en grille. C'est le document qu'il réarrange lui-même.
- `D-plaquette-par-technique` et `D-plaquette-par-axe` (gamme).
- **`B-deck-concepts-261023-v1.pdf` — début d'arrangement, gabarit Karl** : intro ; page « ce qu'on a vu chez vous » (leurs 3 mécaniques de pub + ce que le site promet) ; page mode d'emploi (« une créa par concept et par déclinaison ») ; **une page par concept = 4 créas + bandeau des bénéfices produit et émotionnels + pictos + accroches** ; au moins une page de variantes de titres, une de variantes produit, une de variante persona ; annexes : punchlines → pictos → banque packshots (visuels scrappés). **Thème ÉCURIE cream**, nom de code jamais écrit. Le cerveau reprend ce deck dans le deck DataCAt du prospect : garde les images en fichiers séparés dans `12-tadaaz-livrables/deck-images/` (nom = N° du registre).
- `C-master.xlsx` + master `.md` (le `.md` fait foi), `journal.md`, `journal_prompts.jsonl`, `_registre.csv`.
- **CR six blocs** au devlog (`C-pilotage/devlog.md`, en ajout) : Fait · Non fait + raison · Fichiers · À valider · Questions · Prochaine étape — avec : coût devis / réel par lot, nombre d'images par lot et par technique, **la liste des spécificités et options de personnalisation du site**, la réponse sur le service d'envoi, les décisions de la passation à graver, et les créas que tu recommandes pour le deck (par concept, N° du registre). Ligne `SESSIONS.md`. Commits par pathspec avec l'identifiant de lot, `git push origin` en dernier geste, verrou retiré.

## 6. Règles dures qui mordent ce soir
D1/U3 étanchéité : **rien** de Tech, NV Gallery ou PIDF dans les prompts, les planches ou le deck ; U4 : aucune référence DataCAt écrite ; D2/U7 : chiffres = mots exacts du site, sinon pas de chiffre ; D3 : rien ne sort du dépôt ; D5 : aucune suppression, `Z-a-supprimer/` ; D9 : une image ratée est taguée, jamais effacée ; D11 : les 5 captures et la passation sont des entrées d'Alexandre, intouchables ; D12 : une session écrit ; U1 : modèles épinglés `gpt-image-2-2026-04-21` / `gpt-4.1-2025-04-14` ; U2 : coût annoncé avant et après, cap 70 € ; U6 : intégrité produit éliminatoire ; U8 : jointure par le registre ; U9 : NU / OVERLAY décidé concept par concept ; U10 : `paths.py`, aucun chemin en dur ; R38 : polices OFL.

## 7. Hors périmètre
Pas de deck client final (c'est le cerveau, en pptx) ; pas d'ad sets ; pas de story 9:16 ; pas de NL/BE/DE ; pas de modification de `D-regles/` (file « à graver » dans le CR) ; pas de scrape des concurrents (OWL s'en charge) ; pas de visuels nus dans le deck.

## 8. Questions ouvertes et quoi faire si la réponse manque
- Site anti-bot ou visuels produit en basse définition → `capture_page.py`, et `brief` pour la scène avec la carte générée **taguée `texte-ia`** ; tu l'écris dans le CR.
- Pas de visuel vœux 2027 sur le site (gamme pas encore en ligne) → tu prends la gamme vœux de l'an dernier ou les cartes de vœux génériques, et tu le notes.
- Service d'envoi aux invités introuvable → concept « service » reste sur expédition / livraison, et tu notes « non trouvé ».
- Pipeline PIDF non généralisable sans refonte → tu copies en `tadaaz_*.py` le minimum (lot, analyse, v0, prod), tu notes la dette.
