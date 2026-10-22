# TADAAZ — les 11 concepts, les techniques et les prompts du run de nuit

**statut : actif · rédigé par le cerveau le 23/10 00h30 · à déposer à la racine de `0. IENCLI FACTORY` · la session le range dans `12-tadaaz/B-concepts/` et en tire `tadaaz-concepts.json`**

Décisions d'Alexandre qui gouvernent ce fichier (22-23/10) : prompts **très courts** ; le texte est écrit par le modèle dans l'image ; **pas d'overlay** ; trois passes par concept avec trois techniques différentes, comparables ; chaque base poussée en trois boucles ; styles et déclinaisons sur **personnalisation** et **souvenir** ; anti-pub en **un seul lot** avec tout le run en contexte ; `brief_ref` déplacé en fin dans le lot **re-marque** ; `comparatif`, `serie`, `macro` **hors run** ce soir ; réparation jusqu'à deux fois sur défaut binaire.

## 1. Le socle (une ligne, collée à chaque base ; jamais aux boucles ni à l'anti-pub)
> Pub Meta pour Tadaaz, faire-part et cartes personnalisées. Format portrait cadré pour 4:5 : titre, produit et logo dans les 80 % centraux, rien d'important dans les 10 % du bas ni du haut. Français, vouvoiement, pas de prix. Logo « tadaaz » en bas, au-dessus des 15 %.

## 2. Les trois techniques de base, et leur enveloppe de prompt
| tag | technique | entrée | prompt |
|---|---|---|---|
| 🌐 | `source` site | un visuel du site (carte, flat-lay, page produit) tiré de `banque-site/` | « Transforme cette image en publicité : [brief du concept]. Garde la carte telle quelle. Accroche, texte exact : « [accroche] ». » + socle |
| ✎ | `brief` libre | rien | « [brief du concept]. Accroche, texte exact : « [accroche] ». » + socle |
| ⚡ | `freestyle` contexte réduit | rien | « Tadaaz, [gamme]. [promesse en cinq mots]. Fais la pub que tu veux, avec la phrase que tu veux. » + socle |

Casting (5, avant tout, medium) : « Portrait photo réaliste, [couple de 30 ans / jeunes parents avec bébé / grands-parents / famille de quatre / parrain et marraine], lumière naturelle, fond neutre. » — personnages utilisés dans ≤ 20 % des bases ; jamais de retouche d'un vrai visage du site.
Nus (11, un par concept) : « Enlève tout texte de cette image, garde la carte et la scène. » sur le visuel 🌐 du concept.

## 3. Les 11 concepts
Chaque concept = mécanique · brief (une ou deux lignes, c'est le prompt) · gamme · accroche imposée (sur 🌐 et ✎ ; ⚡ choisit la sienne) · scène suggérée · humain.

| n° | concept | brief (le prompt) | gamme | accroche imposée | humain |
|---|---|---|---|---|---|
| C01 | **preuve — échantillons offerts** | Deux échantillons de faire-part dans une main, on touche le papier et l'enveloppe avant de commander ; deux échantillons offerts | mariage | « Touchez avant de choisir » | main seulement |
| C02 | **personnalisation** | La même carte en trois versions côte à côte : la photo change, la police change, la couleur change ; à vous de créer | vœux | « À vous de créer » | non |
| C03 | **produit en main** | La carte posée sur un textile texturé, lumière douce, cotons et bois — leur charte, sans risque | vœux · baptême | « Vos vœux 2027, sur papier » | non |
| C04 | **souvenir — ce qu'on garde** | La carte des années après : sur le frigo, dans une boîte à souvenirs, glissée dans un livre | baptême | « Ce qu'on garde » | non |
| C05 | **calendrier** | La première carte de l'année qui arrive dans la boîte aux lettres ; le jour du baptême où tout le monde est là | vœux · baptême | « La première carte de 2027 » | ≤ 1 |
| C06 | **service — livré demain** | Commandé le matin sur le téléphone, la carte dans la boîte aux lettres le lendemain ; expédié le jour même | vœux | « Livré demain » | non |
| C07 | **le détail qui fait tout** | Dorure, relief, ruban, plexi en très gros plan, la lumière accroche le papier | mariage · baptême | « Le détail » | non |
| C08 | **la carte qu'on envoie encore** | Une vraie carte en papier à côté d'un message de vœux sur un téléphone : l'une se garde, l'autre se supprime | vœux | « Ça, on ne le supprime pas » | non |
| C09 | **les moments auxquels on ne pense pas** | La même carte générique déclinée pour dix occasions : crémaillère, PACS, retraite, anniversaire de mariage, premier Noël, nouvelle maison, retrouvailles, adoption, départ, merci | générique | « Il y a une carte pour ça » | ≤ 1 |
| C10 | **la pub est un texte** | Une carte vierge Tadaaz ; dessus, deux ou trois phrases écrites comme un vrai message à quelqu'un ; c'est toute la pub | générique | libre (le texte est la pub) | non |
| C11 | **prix dégressif** | La pile de cartes qui grandit et le prix unitaire qui baisse ; la quantité où ça devient le bon prix — chiffres lus sur une page produit du site, sinon aucun chiffre | vœux | « À partir de [N], c'est le bon prix » (N lu sur le site) | non |

Humains au total : au plus 7 des 33 bases (20 %).

## 4. Les trois boucles (image en entrée, rien d'autre — ni socle, ni contexte)
1. **optimisée** (medium) : « Ton but est d'optimiser ce visuel publicitaire. »
2. **encore améliorée** (high) : « Fais une version encore améliorée de cette publicité. »
3. **plus simple** (high) : « Fais une version plus simple de cette créa. »
Chaque ligne = base → 1 → 2 → 3, le parent noté dans le registre à chaque marche.

## 5. Réparation (étape 5, jusqu'à deux fois, défaut binaire seulement)
Image en entrée + consigne du défaut, une phrase : « Corrige l'orthographe de « [mot] ». » · « Rends la carte nette. » · « Remonte le logo pour qu'il soit entier. » · « Redresse la carte, elle est déformée. » L'original reste en parent ; tags `réparée-1`, `réparée-2`. Pas de troisième tentative : l'image reste taguée.

## 6. Les lots de fin
- **Styles** (C02 personnalisation, C04 souvenir ; sur la meilleure image de la ligne, image en entrée) : « Même pub, en photo réaliste. » · « …en illustration. » · « …en typographique, texte seul. » · « …en flat-lay. » · « …en 3D. » · « …en collage. » — 12 images, high, **les 6 sur une page**.
- **Déclinaisons** (C02, C04 ; image en entrée) : **occasions** « Même pub, pour une crémaillère. » / « …pour un PACS. » / « …pour un départ en retraite. » / « …pour un premier Noël. » ; **produits** « Même pub, avec [produit 1-4 du site, nom exact]. » — 16 images, high, **une page « 4 occasions » et une page « 4 produits »** par concept.
- **Anti-pub** (un seul lot, 40, medium, top 8 en high) : une planche des 20 meilleures du run + leurs 5 pubs, en référence : « Voici ce qui a été fait pour Tadaaz. Fais une pub pour [vœux / baptême, en alternance] qui ne ressemble à aucune de celles-ci. » — sans socle. **8 par page, cinq pages.**
- **Re-marque** (12, high ; image en entrée + leurs 5 pubs en référence) : « Voici une pub faite pour Tadaaz. Rapproche-la de la marque. » — sur les 12 meilleures du run, anti-pub comprises. Rendu **avant / après côte à côte**.

## 7. Ce qu'on compare demain
Par concept : 🌐 vs ✎ vs ⚡ (laquelle Alexandre retient). Par étape : base vs optimisée vs encore vs simple (laquelle il retient). Par lot de fin : anti-pub vs re-marque. Les trois chiffres du CR, par technique et par étape : coût par image, taux de drapeaux OK, et — rempli par Alexandre sur la revue — taux de retenue.
