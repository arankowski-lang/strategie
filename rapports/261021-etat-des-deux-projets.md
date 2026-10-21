# Rapport — état des deux projets (BDD Master · usine créa) au 21/10/2026

> **statut : actif · mis à jour le 21/10/2026 · porté par STRATEGIE · remplace : rien (nouveau sujet).**
> Première lecture des deux dépôts voisins (lot `L-261021-02`, MODE AUTONOME). **Source = copies figées dans `lecture/bdd/261021/` et `lecture/usine/261021/`** (CLAUDE.md, `D-regles/`, `C-pilotage/{devlog,dettes,decisions-alexandre,sante}`, `SESSIONS.md`). Lecture seule sur les voisins ; aucune écriture, aucun commit, aucune commande modifiante chez eux (CLAUDE.md §2).
> **Accès** : les deux dossiers voisins sont **accessibles** (aucun dossier manquant). Le `.venv/` de l'usine (29 000+ fichiers) a été ignoré, hors périmètre.

---

## 0. En une page

| | BDD Master | Usine créa (CREA) |
|---|---|---|
| dépôt en ligne | `github.com/arankowski-lang/BDD-Master` (privé) | `github.com/arankowski-lang/ienclI-factory` (privé) |
| dernier certificat | **VERIF n°2 — cleaning certifié, 0 🔴** (20/10 21:01) | **revue n°3 — fin de cleaning, 0 🔴** (20/10) ; **revue n°4 — conforme à l'arbo du 21/10, 0 🔴** (21/10 12:41) |
| dernier lot prouvé par le devlog | `L-261021-02` — arbo retours Alexandre (Polara→Artikka, staging, scripts clients, Z-travail, garde-fou add -A/-f) — **fin de lot, vérifs OK** (21/10 11:59) | `L-261021-04` — arbo + retours Alexandre (6 points + doc) **TERMINÉ** (21/10 12:04, 7 commits) puis `L-261021-05` revue n°4 |
| dettes bloquantes | **0 « bloque » pour une livraison**, mais 3 attendent **Alexandre** (Chichi-D3, Chichi-D22, Tek-D5) + 2 attendent le client (March D-A2, Tek D4) | **0 « bloque »** (explicite) ; aucune dette ne bloque un run |
| `0-fonctionnement.md` vs référence stratégie | version **19h15** + §14.1 à jour du 21/10 — **en retard** sur la 22h50 (continuité, pilote usine, ni dates) | idem : version **19h15** + §14.1 à jour du 21/10 — **en retard** sur la 22h50 ; **+ une note remote usine à conserver** |

**À retenir pour STRATEGIE** : les deux dépôts sont **sains, certifiés, synchronisés en ligne**. Le seul vrai écart transverse est que **leur `0-fonctionnement.md` est la version du 20/10 19h15**, pas la 22h50 que porte ce dépôt — donc deux règles opérationnelles y sont encore fausses (le **stop à 70 %** au lieu de la continuité ; le **calendrier daté** au lieu de l'ordre sans dates). C'est exactement ce que le dépôt stratégie doit corriger (dette C12 : une source unique). **Correction à faire dans chaque dépôt par sa session architecte, pas ici.**

---

## 1. BDD Master — état d'après le devlog

### 1.1 Derniers lots (devlog `C-pilotage/devlog.md`)
- **Chaîne « finitions + règles » `L-261020-01 … 09` — TERMINÉE** (20/10, passation finale l.185) : D12 dans les dures, tri des 20 changements non commités, `.pptx` hors suivi, `liste.md` réconciliée, devlog unique, rituel de démarrage, faits courants, en-têtes de vérité, identifiant de lot, `revue.py` + `INDEX.md`, garde-fous (trois refus), rapport contradictions.
- **`L-261021-01`** — nettoyage de la fuite git `Z-travail` (détrack `git rm --cached`) + hook `garde_fous` installé (21/10).
- **`L-261021-02`** — **arbo retours Alexandre** (21/10 11:14→11:59) : p1 Polara→Artikka (`2-artikka-polara/`, 12 libéré) · p2 staging `D-Livrable` dissous · p3 scripts clients → `E-systeme/clients/` · p4 `Z-travail` → `B-prod-claude/travail/` · p5 garde-fou `git add -A/-f` refusés · p6 `decisions-alexandre.md`. **Fin de lot, vérifs OK** (auto-contrôle de la session, pas une passe VERIF indépendante).
- En parallèle (lecture seule) : **`[CHICHI-CREA]` lots `L-261021-CREA-1 … 7`** — analyse créa Meta Chichi (modules M1–M9, clôture).

### 1.2 Certificats
- **VERIF n°2 = certificat de fin de cleaning, 0 🔴** (20/10 21:01, `sante-du-projet.md`). HEAD `c9974cd`, sessions à l'arrêt pendant la revue. Les dix contrôles §14.5 : **0 🔴, 10 🟠** (dettes d'entretien, non bloquantes).
- **Pas encore de VERIF indépendante sur le lot arbo `L-261021-02`** : la session a fait ses propres vérifs de fin de lot. → une passe VERIF (ou revue) sur l'arbo 21/10 reste à faire côté BDD (à signaler à BDD-ARCHITECTE).

### 1.3 Dettes bloquantes (`dettes.md`)
- **Aucune dette ne bloque une livraison** au sens « bloque ». La vue cross-client (§1) liste 14 lignes ; la plupart se soldent par un **lot client « moteur v2 »** déjà planifié (lecture par nom au lieu du n° de ligne : D1, D21, D22, D-A1, D-A3 Chichi/March).
- **Attendent Alexandre** (file de décision) : **Chichi-D3** (marge 60 % placeholder → chiffres faux tant qu'elle n'est pas donnée par catégorie), **Chichi-D22** (dimension campagne au Moteur v2 ou laisser), **Tek-D5** (qui relit le mapping de 496 lignes).
- **Attendent le client** : **March D-A2** (« Commandes » compte des clients ; export Shopify demandé), **Tek D4** (93 % des coûts modélisés ; charges réelles attendues de TEK).
- **Résolue** : D-A6 (`TEXT(…€…)` = 0 sous LibreOffice) — vérifiée 0 occurrence le 20/10.
- **>30 jours** (revue §14.5 c.7) : `TECH-dette` ouverte le 31/08.

### 1.4 Sessions actives (`SESSIONS.md` + devlog)
Roster multi-session **en transition** vers le modèle pilote (§13.1). Actives / récentes :
- **BDD-ECRITURE (neuve, 21/10)** — a mené `L-261021-02`, puis **stop propre**.
- **BDD-ARCHITECTE** — au repos (écrit les lots, tient `D-regles/` + `C-pilotage/`).
- **BDD-VERIF** — lecture seule (a rendu VERIF n°2).
- **BDD-CHICHI-CREA** — lecture seule du dépôt, analyse créa Meta (`3-chichi/B-prod-claude/crea/`).
- (BUILD-TEK / BUILD-CHICHI / BUILD-MARCH / OUTILS / SPECS / RECETTE / GEN-* / IMPORTS / MOTEUR : carte de propriété des fichiers, statut au devlog ; MOTEUR suspendu, GEN-DIRECTION arrêtée.)

---

## 2. Usine créa (CREA) — état d'après le devlog

### 2.1 Derniers lots (`C-pilotage/devlog.md`)
- **Chaîne `L-261020-01 … 07` — TERMINÉE** (20/10, passation finale l.482) : finitions revue n°3 + fondations règles v3-soir, rapport des emplacements, table unique des dettes, état des lieux PIDF, garde-fous, première chasse aux contradictions, brouillons des trois couches (non activés).
- **`L-261021-01`** — correctif du blocage PIDF (11/11 modules importent).
- **`L-261021-02`** — scanner élargi (classe `MORT-RESOLU`).
- **`L-261021-03`** — écriture du lot arbo.
- **`L-261021-04`** — **arbo + retours Alexandre, TERMINÉ** (21/10 11:24→12:04, 7 commits) : Points 2 (F-references à plat) → 4 (sources/packshots/analyses → sœur `-ressources/`) → 5 (`1-tech-ressources`) → 6 (sœur `-visuels/` à 8 dossiers, 3 marques) → 3 (nomenclature banque + tag `HUMAIN`) → doc (CLAUDE.md, §14.1, catalogue, tokens scanner). VERIF mi-lot verte.
- **`L-261021-05`** — **revue n°4** (lecture seule).

### 2.2 Certificats
- **Revue n°3 = certificat de fin de cleaning, 0 🔴** (20/10) — U10/DT-2026-10-13 réellement soldée (B-visuels mort éliminé, triple preuve grep + scanner + sentinelle).
- **Revue n°4 = usine conforme à l'arbo du 21/10, 0 🔴** (21/10 12:41) : 962 fichiers `F-references/` conservés (0 perdu), 640 doublons byte-identiques en `Z`, 227 liens durs régénérables, 8 dossiers `-visuels/` sur les 3 marques, scanner 0 PATH / 0 MORT-RESOLU, D11 intacte (7 `.md` byte-identiques), 11/11 modules PIDF importent, garde-fou refuse un faux `.png`.

### 2.3 Dettes bloquantes (`dettes.md`)
- **Dettes bloquantes : 0** (ligne explicite : « aucune ligne "bloque" »). Aucune dette ne bloque une livraison ou un run.
- **>30 jours** (revue §14.5 c.7) : les `#1`–`#14` (04–05/10) et `DTT-01` (13/10) — à relire par Alexandre.
- **Nouvelles (21/10)** : `DTT-captures` (outillage de capture structuré — **un script, pas du rangement**, hors lot arbo) ; `DTT-261021-visuels-hardcode` (~15 chemins en dur U10 repointés mais le hardcode subsiste, devrait passer par `paths.py`).
- **À réconcilier** : `META-2-registres` — `dette_technique.md` (LBR) mirroré mais non dissous ; contient aussi des **règles R** (R48, R48 bis) qui appartiennent à `4-regles-usine.md`, pas à un fichier de dette.

### 2.4 Sessions actives (`SESSIONS.md` + devlog)
- **CREA-ECRITURE (relais 21/10)** — a terminé `L-261021-04` (7 commits poussés), **stop propre**.
- **CREA-ARCHITECTE** — au repos (dernière tâche : lot `CREA-261021` écrit).
- **CREA-ARCHITECTE (revue n°4, 21/10)** — revue livrée, **stop**.
- **5 décisions 🟠 à Alexandre** (revue n°4) : jeton `agence` = Coudac ou agence du client ; 8 fichiers Coudac sans auteur à taguer ; exception `.md` suivis dans `-ressources/` ; lancer le lot « nus `situ-` » (manifeste + script inverse) et le logger en dette ; ranger/tracer `revue.py` (déposé à la racine).

---

## 3. Règles locales qui contredisent `regles/0-fonctionnement.md`

> Deux niveaux : (A) les **copies de `0-fonctionnement.md`** des projets, en retard sur la référence → §4. (B) les **règles propres** (`1-regles-dures.md`, `CLAUDE.md`) qui entrent en contradiction, ci-dessous. Correction **toujours dans le dépôt d'origine**, jamais ici.

| # | où (projet · fichier) | règle locale (texte) | référence stratégie (texte) | nature |
|---|---|---|---|---|
| C1 | **usine · `CLAUDE.md` protocole 5** | « Le dépôt est sous git **en local, sans serveur distant**. » | §14.7 + faits-courants : **remote privé `origin`** depuis le 20/10, push quotidien | **contradiction** déjà tracée par l'usine elle-même (`CREA-GLOBAL-CC-E-ANALYSE-contradictions.md`, paire C4). → corriger protocole 5 : « remote privé, push quotidien, jamais `--force` ». |
| C2 | **BDD · `1-regles-dures.md` D8** | « travail sur copie (`A-<client>/Z-travail/work/`) » | 21/10 : `Z-travail/` **dissous** → `B-prod-claude/travail/` (décision d'Alexandre, appliquée en `L-261021-02`) | **chemin mort dans une règle dure** : D8 cite une copie de travail qui n'existe plus. → réécrire le chemin (`B-prod-claude/travail/`). |
| C3 | **BDD · `1-regles-dures.md` D8** | D8 forme courte (« jamais écraser… ») | §3 D8 ajoute : « **toucher un master est le seul feu vert humain** » (20/10) | **omission** : la clause « seul feu vert humain » manque dans la D8 de BDD (présente dans celle de l'usine). → compléter. |

**Rien d'autre.** Les `1-regles-dures.md` des deux projets recopient fidèlement D1–D12 ; les règles propres (B-R… côté BDD ; U1–U10 + R38 côté usine) **ne contredisent pas** les D1–D12 — elles en sont des déclinaisons (U3=D1, U5=D8, U7=D2 ; B-R-EXPORTS = déclinaison BDD de D11, déjà remontée comme « candidate dure globale »). B-R-EXPORTS = D11 : **déjà couvert** par la référence, pas une contradiction.

---

## 4. Les deux `0-fonctionnement.md` comparés à `regles/0-fonctionnement.md`

**Constat central : aucune des deux copies n'est identique à la référence, et la divergence va dans les deux sens.**
- **Les deux copies projet sont la version du 20/10 19h15** ; la référence stratégie est la **22h50**. Donc elles n'ont pas les apports 22h13–22h41.
- **Mais** les deux copies ont **incorporé les décisions d'arbo du 21/10 dans leur §14.1** (table des maisons), que la référence stratégie **n'a pas encore** (elle décrit l'ancien schéma client).

C'est la dette **C12** en action (un fichier mis à jour à un endroit, pas à l'autre) — raison d'être du dépôt stratégie.

### 4.1 Ce que la référence (22h50) a et que les deux projets n'ont PAS encore
| § | la référence dit (22h50) | les projets disent encore (19h15) | effet |
|---|---|---|---|
| **§13.5 (4)** | **Continuité : une fenêtre lourde ne s'arrête pas** ; passation au devlog à chaque frontière (Alexandre 22h31, **remplace le 70 %**) | **Stop propre à 70 % de fenêtre** | **contradiction opérationnelle** : une session projet ferait un stop à 70 % qu'Alexandre a explicitement annulé. **La plus importante à corriger.** |
| **§12** | **Ordre des travaux** (ni dates, ni durées, Alexandre 22h20) | **Calendrier daté** (21/10, 22/10, 23–24/10, …) | contradiction avec « ni dates ni durées » ; les dates sont périmées. |
| **§9** | la mesure de fenêtre **n'est pas affichée par l'outil → estimée** (tours, lots) | « pourcentage de fenêtre **affiché par l'outil**, coût zéro » | la consigne projet demande de lire un pourcentage que l'outil ne montre pas. |
| **§13.1** | pilote : **l'usine d'abord, BDD avec prudence** (22h41) | pilote par projet, sans ordre de bascule | omission. |
| **§13.3** | codes **toujours avec leur nom en clair** + lexique (fautes 13/10 **et** 20/10) | « un code seul n'est pas une consigne » (faute du 13/10 seule) | affinage. |
| **§13.4** | **r11** (le cerveau ne donne ni dates ni durées) + **r12** (max dans Claude Code, cerveau fait le moins possible) | r10 ancienne (`questions_en_attente.md` / état du jour) ; **r11 et r12 absentes** | omission (origine de la contradiction §12). |
| **§14.7** | **le cerveau devient une session Claude Code dans le dépôt stratégie** ; décisions dans les dépôts ; backlog à consigner | version courte sans ces ajouts | omission. |

### 4.2 Ce que les projets ont et que la référence n'a pas encore (à rapatrier dans la référence, à terme)
- **§14.1 table des maisons — à jour du 21/10 des deux côtés** : dossier client/marque à 4 (BDD) / sans `A-sources` ni `A-packshots` (usine, → sœur `-ressources/`) ; `-visuels/` usine **à 8 dossiers** ; registre client **« Artikka (ex-Polara), 12 libéré »**. La **référence stratégie décrit encore l'ancien schéma** (`D-Livrable/`, `E-scripts/`, `Z-travail/` ; « Artica » ; `-visuels/` ancienne liste). → quand STRATEGIE reprendra la maintenance de `0-fonctionnement.md`, rapatrier ces §14.1.

### 4.3 Ligne propre à l'usine, à CONSERVER (la « note usine »)
L'usine a, dans son `0-fonctionnement.md` (bloc §7 / déploiement, l.126 citée par ses revues), une **note remote qui lui est propre** et qui doit être **conservée** lors de tout alignement :

> « **Usine créa — remote privé depuis le 20/10/2026** : le dépôt a un remote `origin` (`https://github.com/arankowski-lang/ienclI-factory.git`, privé). **Push quotidien**… **Le `--force` / force-push est un interdit absolu.** Lourds (visuels, packshots, masters, classeurs, images, journaux de prompts) hors dépôt par `.gitignore` ; l'historique usine a été allégé le 20/10 (78,9 → 8,58 Mo) avant la mise en ligne. »

(La note équivalente côté BDD vit dans son `CLAUDE.md`, pas dans `0-fonctionnement.md`.) C'est une ligne **projet** : elle reste dans le fichier de l'usine, elle ne remonte pas telle quelle dans la référence commune — mais une refonte de la référence ne doit pas l'effacer.

---

## 5. Décisions d'Alexandre : projets vs `decisions/decisions-alexandre.md` (ici)

**Résultat : 0 décision GLOBALE absente de ce dépôt.** Les deux `decisions-alexandre.md` de projet ont été **créés le 21/10** à partir des **mêmes messages d'Alexandre (21/10 8h38–12h29)** que ceux déjà consignés ici par le cerveau (lignes du 21/10). Vérification ligne à ligne :

| décision projet (origine) | couverte ici par |
|---|---|
| BDD — Polara = Artikka (`2-artikka-polara`, 12 libéré) | ligne **21/10 08h38** |
| BDD — staging `D-Livrable` dissous → `travail/` | 21/10 08h38 (« Staging supprimé ») |
| BDD — scripts clients → `E-systeme/clients/` | 21/10 08h38 (« Scripts clients au global ») |
| BDD — `Z-travail/` → `B-prod-claude/travail/` | 21/10 08h38 |
| BDD/usine — une session écrit par **périmètre** (D12) ; `git add -A` refusé | 21/10 09h04 + 10h50 |
| BDD — pas de réécriture d'historique des 304 `Z-travail` ; `git add -f` interdit | 21/10 10h50 |
| usine — `B-maquette` → `0-maquette` ; `F-references` à plat ; `-ressources/` ; `-visuels/` 8 dossiers ; nus `situ-` | 21/10 08h38 |
| usine — tag `HUMAIN-` après marque/concept ; liens durs ; Chichi créa périmètre séparé | 21/10 09h04 + 10h30 |
| usine/BDD — « les décisions d'Alexandre vivent dans le dépôt » | 20/10 22h41 + 21/10 (gouvernance) |

**Deux nuances de granularité, non bloquantes** (à valider par Alexandre, voir §6) :
1. **BDD — marchés** : la version projet précise « un niveau à l'intérieur de `A-exports/`, **créé seulement s'il y a plus d'un marché** » ; ici seul « marchés à l'intérieur » est noté.
2. **Verbatim** : les fichiers projet gardent des **citations mot-pour-mot** (« comme ça je le verrai plus facilement », « il y a trop de tri », « le seul truc que je t'autorise à avoir, c'est les validés de la plaquette », « j'ai décidé, ça va aller dans… -ressources ») que ce dépôt a **résumées**. Le détail d'arbo **propre à chaque projet** reste légitimement dans son `C-pilotage/decisions-alexandre.md` (§14.7 : le global ne porte que les décisions globales).

**Décision prise (MODE AUTONOME) : je n'ajoute AUCUNE ligne à `decisions/decisions-alexandre.md`.** Toutes les décisions globales y sont déjà ; ajouter des lignes serait créer des **doublons** (contraire à §14.1/§14.2 « incorporer, pas ajouter »). L'enrichissement verbatim éventuel est laissé au choix d'Alexandre (§6).

---

## 6. À valider par Alexandre
1. Enrichir ou non la file globale des citations verbatim du 21/10 (aujourd'hui résumées ici, détaillées dans les projets) — ou laisser le verbatim fin vivre dans les `C-pilotage/` des projets (recommandé : laisser).
2. Déclencher la mise à jour de `0-fonctionnement.md` des deux projets vers la version 22h50 (continuité au lieu du 70 %, ordre au lieu du calendrier, §9 mesure estimée, §13.1/13.3/13.4/14.7) — **par les sessions architectes de chaque dépôt**.
3. Demander à BDD-ARCHITECTE une passe VERIF/revue sur le lot arbo `L-261021-02` (BDD a certifié le cleaning, pas encore l'arbo 21/10).

## 7. Prochaines étapes pour STRATEGIE
- Rédiger les messages de lancement aux deux architectes pour corriger C1–C3 (§3) et aligner `0-fonctionnement.md` (§4.1), **dans leur dépôt**.
- Quand STRATEGIE reprendra la maintenance de `0-fonctionnement.md` comme source unique : y rapatrier les §14.1 à jour du 21/10 (§4.2) tout en gardant les notes propres aux projets (§4.3).
