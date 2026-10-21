# Dettes techniques et points en attente — tous projets

**Ouvert le 13/10/2026, 11h30.** Tenu par le cerveau. Alimenté à chaque remontée d'un architecte ou d'une session ; relu avant chaque plan de journée. Une ligne par point : quoi · où · qui tranche · statut. Rien ne s'efface : un point réglé passe en « réglé (date) » et descend en bas de sa section.

Légende statut : **ouvert** · **en cours** · **bloqué par** · **réglé (date)**.

---

## BDD Master

| # | point | où | qui tranche | statut |
|---|---|---|---|---|
| B1 | A5 Chichi : note R5·Reporting!A138 à remplacer par une formule | A-chichi, Reporting | ANALYSTE CHICHI, à la revue du reporting | ouvert — Alexandre : ne plus le redemander |
| B2 | `m3_lignes_neuves.py` → `lot1_moteur.py` absent (pré-existant, pas une régression) | E-systeme / A-* | architecte BDD : restaurer ou retirer | ouvert |
| B3 | `A-*/_archive/*.py` : anciens chemins, scripts obsolètes | A-* | architecte BDD → `Z-a-supprimer/` si morts | ouvert |
| B4 | fusion fine `A-<c>/B-doc/ex-clients-docs/` (collision `plan-client-<c>.md` : garder le 09/10) | A-tech, A-chichi, A-march | architecte BDD | ouvert |
| B5 | `methode-bdd-master.md` et `vision_operationnelle.md` à la racine (dans la marge des 10) | racine | Alexandre (dire si B-doc) | ouvert |
| B6 | anciens `*_client.xlsx` à la racine des clients | A-* | architecte BDD | ouvert |
| B7 | élagage MARCH / Tek backups (« une sur dix », ≈ 142 Mo) — désormais **déplacement** vers `C-backups/Z-a-supprimer/` (D5) | A-march, A-tech | session ECRITURE, confirmation Alexandre | ouvert |
| B8 | autonome : 22 groupes de doublons (217 Mo), `miroir/` seulement si identique octet par octet | A-* / Z-travail | session ECRITURE (D5) | ouvert |
| B9 | 19 worktrees obsolètes à retirer | .git | architecte BDD | ouvert |
| B10 | NCAC Chichi août 2026 : **tranché 19/10 = 15,49 € (8 425,92 € ÷ 544, canal Shop exclu, assiette Online Store seul)** ; 15,40 € (÷ 547, calcul du 11/10) remplacé partout dans BDD ; 7 558,81 € / 511 / 14,79 € faux. Reste : régénérer `faits_graphes*.json` depuis le Moteur (÷ 544, delta N-1) via `lectures_graphes.py` — lot BDD-CHICHI | C-pilotage | BDD-CHICHI | réglé côté règles (19/10) ; recalcul JSON ouvert |
| B11 | `audit_reference.json` : CAC cible March 193,13 → **202** | A-march | architecte BDD | réglé (13/10, ee5644ae) |
| B12 | R25 : retirer « conversions à action connue » → Google 28 jours | D-regles | architecte BDD | ouvert (décidé 13/10) |
| B13 | `rotation_backups.py` : déplace vers `C-backups/Z-a-supprimer/` + manifest `_a-supprimer.md` ; PROTOCOLES §9 aligné ; deux bugs post-migration corrigés (cherchait `backup/`, code client dérivé du dossier) | E-systeme/cac | — | réglé (13/10, ee5644ae) |
| B14 | canal **Shop** sort du moteur Chichi (assiette = Online Store seul) : signalé dans A-chichi/journal.md ; **application dans Réglages = lot de la session Chichi** | A-chichi | architecte BDD (lot) | en cours |
| B15 | **ventes flash / déstockage en ligne inclus dans MER/CAC/NCAC** — lecture du cerveau du 13/10 11h12, à confirmer par Alexandre si doute (ancienne R24 les excluait) | D-regles | — | réglé (13/10 12h07 : confirmé) |
| B16 | `noms_feuilles.py` désigné canonique (CLAUDE.md Outillage) ; `names.py` **vivant** (importé par 3 scripts Chichi `c4_*`) → migration vers `noms_feuilles.py` = dette, pas suppression | E-systeme/cac | architecte BDD (lot) | ouvert |
| B17 | `finish2.py` déjà absent ; dette D1/D3 Tek à retirer du dette.md | A-tech dette.md | architecte BDD | réglé (13/10) |
| B18 | note caduque « deliver.py ne fait pas l'audit » retirée (vérifié : deliver rejoue gates) ; piège « exceptions d'audit indexées par nom d'onglet → cassées au renommage » conservé en mémoire | — | — | réglé (13/10) |
| B19 | `#ERROR!` Téléachat (libellés perdus à la source, chiffres intacts) | A-tech | plus tard | ouvert |
| B20 | marge TECH : exécution après la liste de TEK | A-tech | architecte BDD | ouvert |
| B21 | D-A2 MARCH : proposition de correction | A-march | ANALYSTE MARCH | ouvert |
| B22 | MARCH : comparaison Analyse ancienne / v3 | A-march | ANALYSTE MARCH | ouvert |
| B23 | MARCH : Tour ancienne → incorporer 100 lignes en bas du nouveau Tour, puis supprimer la feuille ; Conseils : intégrer les manquants en bas | A-march | BUILD MARCH | ouvert |
| B24 | Chichi : supprimer lignes/colonnes entièrement vides (tout en bas / tout à droite seulement) ; réordonner les feuilles Conseils → Conseils2 → Récap (après le deck) | A-chichi | BUILD CHICHI | ouvert |
| B25 | exports Chichi (liste V60–V66) : remontée en deux étapes, 13h | A-chichi/A-exports | session Chichi | en cours |
| B26 | déposer les docs CERVEAU (arborescence commune, fonctionnement v1, gabarit) dans `B-doc/` de chaque projet | B-doc | Alexandre (dépôt) | ouvert |
| B27 | contenu du journal des consignes BDD : amorcer depuis decisions_validation_pdf_v4 (« reformulé, à valider ») + §B du journal cerveau | D-regles | architecte BDD | ouvert |
| B28 | `backup.py`, `deliver.py`, garde-fou C6 cherchaient encore `backup/` → helpers centralisés dans `paths.py` (94cdbe6f) ; préfixe `backup/` → `C-backups/` dans les MASTER.md (tech 7, chichi 11, march 4 ; 91729930) ; sonde : tous les masters archivés résolus | E-systeme/cac, A-* | — | réglé (13/10 12h45) |
| B33 | `backup.py` → `Z-travail/work/` via `paths.work_dir` (ca085141) ; MASTER.md Chichi `staging/` → `B-staging/` (d6dcb2c8) ; CR consigné dans les journaux clients + SESSIONS (6acf6540) | — | — | réglé (13/10 13h) |
| B34 | `A-chichi/CLAUDE.md` périmé sur l'assiette (« Online Store + Shop ») → mise à jour confiée à BDD-ARCHITECTE (les `A-<client>/CLAUDE.md` sont dans son périmètre ; le `CLAUDE.md` racine reste à ECRITURE) | A-chichi | BDD-ARCHITECTE | en cours (13/10 14h15) |
| B35 | BDD-ARCHITECTE en place (ex-session renommée, mémoire de 31 pièges) : pièges techniques écrits dans `B-doc/BDD-261013-GLOBAL-CC-P-CONTEXTE-pieges_techniques_sessions.md` (394b7cf6) = début du chantier « mémoire manquante » ; passation v2 rangée (195b6ef3) ; `C-taches-en-cours/etat-du-jour.md` créé (00fb42a5) ; lot 1 BDD-CHICHI écrit (56df890d) ; **brief complet pas encore collé** (14h15) | — | Alexandre (coller le brief) | en cours |
| B36 | exports Chichi décalés à ~16h (13/10) → lot BDD-CHICHI 16h→18h, VERIF en fin, ajustements du deck demain matin — proposé « à valider » dans l'état du jour | A-chichi | Alexandre | ouvert |
| B29 | Réglages March « CAC cible » → 202 (sinon garde-fou C5 rouge au prochain audit — voulu, à réconcilier) | A-march Réglages | architecte BDD (lot March) | ouvert |
| B30 | brouillon `B-a-transferer/journal-consignes.md` laissé par ECRITURE → à reprendre par l'architecte BDD pour le point 6 | B-a-transferer | architecte BDD | ouvert |
| B31 | lot 1 architecte BDD exécuté par ECRITURE (13/10) : D-regles en 4 fichiers + README (1-dures, 2-surveillés, 3-défauts, 4-verif-bdd), CLAUDE.md allégé (complet archivé `B-doc/CLAUDE-racine-complet-avant-allegement-261013.md`), catalogue 146 scripts via `catalogue_scripts_gen.py --verifier` | — | — | réglé (13/10) |
| B32 | **confirmation Alexandre demandée** : ventes flash / déstockage **sur l'Online Store** restent dans l'assiette MER/CAC/NCAC ; seuls les canaux hors Online Store (Choose, Syncio, Shop, POS…) en sortent | D-regles | — | réglé (13/10 12h07 : confirmé) |

| B37 | **Audit du net — définitions A1–A7** (phase A du plan BDD v2, 11/10 ; livrable `261011-GLOBAL-CC-P-ANALYSE-audit_net.md` dans `B-doc/`) : A1 copie externe (fait) · A2 commit docs_global (fait) · **A3** tableau de chaque indicateur de `Z1·Registre` (dénominateur, net ou brut, source, fenêtre), confirmer commandes et nouveaux clients nets après exclusions/ajustements, confirmer l'attribution (**ouvert**) · A4 ajustements hors web d'août, table BI de Réglages (fait : table vide, 547 = net) · A5 note `R5·Reporting!A138` → formule (= B1) · **A6** TECH, ligne « sans titre » de `b_produits` (−20,6 k€ sur N) : quantifier par mois, règle d'une ligne obligatoire (**ouvert**) · A7 `R4·Récap!B21` période et source du NCAC 18,09 € vs 12,87 € (fait : chiffres justes, texte saisi à dater « au 31/08/2026 ») | A-chichi, A-tech | BDD-ARCHITECTE (lot ECRITURE « audit du net » réécrit avec ces définitions) | ouvert |
| B38 | V39 TECH : saut du comptage GA4 des ajouts panier (avril et novembre 2025), option B, **tête de la liste technique** | A-tech | BDD-TECH (lot) | ouvert (décidé 11/10) |
| B39 | V40/V41 Chichi : questions BUILD-CHICHI dont Q32 « pont de marge » (3 termes, tranché ; texte de Q32 à redonner avant de la reposer), juste après V39 | A-chichi | BDD-CHICHI (lot) | ouvert (décidé 11/10) |
| B40 | V48 MARCH : commandes par zone sans colonne Orders (QG-1) — dette technique, export M2 avec colonne Orders la résout | A-march | BDD-MARCH (lot) | ouvert (décidé 11/10) |
| B41 | V33 Chichi / V36 TECH : graphiques en double (Produits2 : champs « graphes » et « jumeau ») — **suppression des doublons seulement**, après lecture de la liste par Alexandre ; améliorations hors texte IA plus tard, consignées | A-chichi, A-tech | sessions client (lot), liste → Alexandre | ouvert (décidé 11/10 🔎) |
| B42 | V12 TECH : refonte graphique `P8·Réglages` (seul candidat recetté vert, b48c02a) — **passe design d'abord** (virgules après chiffres, retours à la ligne des cellules longues, séparateurs entre sections, colonnes S–Z et H–L à fusionner/réorganiser), puis promotion, puis clonage Chichi et March | A-tech | BDD-TECH (lot) | ouvert (décidé 11/10) |
| B43 | V29/R2 TECH : le Moteur lit la table des tokens de Réglages **par adresse** (B183:B188) — fragilité principale ; R2 des 1 194 noms définis M_* / R_T_* non faite ; **aucun déplacement de cellule avant R2** | A-tech, tous | BDD-ARCHITECTE (plan de développement, phase D du plan BDD v2) | ouvert |
| B44 | Plan BDD v2 (phases C–E, Q1–Q12) jamais repris : codes marché FR/BE (Q1), tables `b_` vs `b·` (Q4), identifiants d'annonce usine vs BDD (Q2), préfixes de questions (C7), BigQuery (phase E), matrice d'accès par session (B3), triage de `dette.md` 447 lignes (B4) — **à verser dans `C-plans/` de BDD comme plan de développement** | C-plans | BDD-ARCHITECTE (Alexandre dépose `plan_bdd_nettoyage_v2` à la racine) | ouvert |
| B45 | **Vider `B-doc/`** : 84 générateurs de `B-doc/commun/scripts/` → `E-systeme/` par script (imports, `ast.parse`, test d'import réel), `.md` restants → `C-pilotage/`, 278 brouillons `autonome/` → `Z-a-supprimer/`, puis `B-doc/` disparaît | B-doc | BDD-ECRITURE | **partiel 20/10 17h42** : 93 scripts migrés (`E-systeme/commun/` + `specs/`), 272 brouillons en `Z-a-supprimer/`, bug `client_dir/scripts` réparé ; reste : données lues au runtime + refs `_paths.DOCS` (avec run pipeline de vérif), 234 `.md` à classer, `B-doc/` à supprimer — relancé 20/10 soir |
| B46 | **Migration Deck Master → BDD** : scripts de deck → `E-systeme/deck/`, chartes + DR1–DR5 → `D-regles/GLOBAL-deck-…`, decks livrés → sœurs `-livrable/`, `D-Livrable/` (staging) recâblé vers `Z-travail/deck/` ; inventaire DECK-ARCHITECTE à la racine puis lot ECRITURE | racine | BDD-ARCHITECTE + ECRITURE | lot complet (case 2 exhaustive, 7368079) ; `0-datacat` + `12-polara` (contenu vivant confirmé) ; 6 cac → BDD gardé ; exécution ECRITURE après B45 |
| B47 | **13 dettes « bloque » + dettes Tek > 30 j** : tableau une ligne chacune (quoi, bloque quoi, qui lève, proposition) ; dettes Tek D3/D5/D6 gardées, propriétaire BDD-TECH ; D4 « attend le client depuis le 31/08 » | C-pilotage | BDD-ARCHITECTE puis Alexandre pour ce que lui seul tranche | ouvert (20/10) |
| B48 | **Test de fumée** : une commande qui fait tourner chaque générateur sur un petit jeu de données → vert/rouge ; à ajouter avant push quotidien | E-systeme | BDD-ECRITURE | ouvert (20/10) |
| B49 | Copie de sécurité `../bdd-master-git-sauvegarde-261020/` (3,3 Go) et `../bdd-master-fichiers-suivis-sauvegarde-261020/` : à supprimer par Alexandre après une semaine de dépôt en ligne | hors dépôt | Alexandre | ouvert (20/10) |
| B50 | Règle sœurs « à confirmer » : `dossier_etudes_bilan_v2` (14/10) envoyé au client ou pas ? deck envoyé en PDF seul ? (pptx gardé en `livrable/` comme source) | 3-chichi-livrable | Alexandre | ouvert (20/10) |

## Deck Master (REPORTING) — **projet fusionné dans BDD le 20/10** : les dettes ci-dessous sont reprises par la migration (inventaire DECK-ARCHITECTE du 20/10, lot ECRITURE écrit par BDD-ARCHITECTE) ; l'ancien dépôt n'est plus touché ensuite, sessions DECK-* en `zz-`

| # | point | où | qui tranche | statut |
|---|---|---|---|---|
| D1 | doublons Statique IA ↔ Polara | A-polara | architecte reporting | ouvert |
| D2 | deck Chichi : exports décalés à 16h → aujourd'hui structure/textes/mise en forme, demain matin chiffres validés par VERIF-BDD + ajustements finaux (lot en deux temps demandé à l'architecte reporting 14h15) | A-chichi/A-deck | architecte reporting, DECK-CHICHI | en cours |
| D3 | A5 Chichi reporting (voir B1) — formule à poser à la revue | — | ANALYSTE CHICHI | ouvert |
| D4 | inventaire des règles (lecture seule, même message que BDD) | D-regles | architecte reporting | ouvert |
| D8 | scripts `cac` du sas Deck Master comparés à `BDD Master/E-systeme/cac/` (13/10, DECK-ECRITURE lot 2, MD5) : 0 doublon exact ; **6 de même nom mais différents** (README.md, backup.py, deliver.py, fix_cols.py, lo_insert.py, restore_charts_generic.py — BDD a évolué) → trancher quelle version fait foi, transfert propre ; **19 absents côté BDD** gardés, dont `recalc_libreoffice.py` candidat au recalcul partagé (catalogue global C1) | B-a-transferer | cerveau + BDD-ARCHITECTE (revue du lundi) | ouvert |
| D9 | `E-systeme/catalogue-scripts.md` fait (a8eb6a9), colonne transférable | — | — | réglé (13/10) |
| D10 | lot urgent flottants pptx fait (13/10 soir, DECK-ECRITURE) : helper `_emu` dans `build_deck.py` + sites directs, `controle.py` passé en sortie UTF-8 (plantait sur 🔄), surcharge `DECK_OUT` pour tester sur copie ; **les decks livrés (v6 Chichi, v3 March) gardent leurs flottants jusqu'au prochain build** — VERIF contrôle la v7 de demain, pas la v6 | E-systeme | — | réglé (13/10) |
| D11 | doublons Statique IA ↔ Polara : 13 fichiers → `Z-a-supprimer/` racine avec liste MD5 (0a202bb), **confirmation de suppression attendue** | Z-a-supprimer | **Alexandre** | ouvert |
| D12 | gate D1 trouvé par DECK-VERIF (mi-lot 13/10) : slides 47–61 « inspiration March Lab » + notes internes dans le deck Chichi → règle DR5 : pptx de travail les garde, **export PDF client sans elles**, VERIF contrôle le PDF (15cc06f) | A-chichi/A-deck | DECK-CHICHI (temps 2) | en cours |
| D5 | `charte-reporting.md` et `referentiel.md` citent d'anciens chemins (`Production/…`, `Ressources/…`) → règles mortes à réécrire | D-regles | architecte reporting (lot) | ouvert (13/10 11h45) |
| D6 | sections 2 (défauts surveillés) et 3 (défauts) de `D-regles/` à écrire — reprendre le brouillon `D-regles/Z-a-supprimer/A-regles.md` de la session | D-regles | architecte reporting (lot) | ouvert (13/10) |
| D7 | `1-regles-dures.md` créé le 13/10 (D1–D10 + DR1–DR4 slides) ; fichiers CERVEAU rangés ; B26 clos pour Deck Master | — | — | réglé (13/10) |

## OWL (VEILLE) — **projet garé le 20/10** (secondaire, repris quand viable) : rien ci-dessous n'est actif ; à la reprise, première ligne à VEILLE-ECRITURE = « donne les 7 conflits en clair »

| # | point | où | qui tranche | statut |
|---|---|---|---|---|
| O1 | inventaire des règles (lecture seule), liste courte | D-regles | session OWL | ouvert |
| O2 | 9 fichiers racine validés sans liste vue — liste à envoyer au cerveau pour trace | racine | session OWL | ouvert |
| O3 | backups classeur international : option (a) actée | A-tech | — | réglé (13/10) |
| O4 | inventaire fait (`B-a-transferer/VEILLE-261013-GLOBAL-CC-P-ANALYSE-inventaire_regles_niveaux.md`) : 5 dures propres à OWL proposées (vérifié en page ; opinion ≠ fait ; cloisonnement DataCAt–client et groupe LBR ; pas de recommandation média ; aucune donnée payante) ; 7 conflits avec D1–D10 à trancher ; 6 règles caduques (ex. « Mission » décrit 6 onglets, les fichiers en ont 15–19) | D-regles | **Alexandre** (niveaux), cerveau (lecture du fichier) | ouvert (13/10) |
| O5 | **D10 marque blanche vs fichier de veille Rouge Gorge** — lecture du cerveau : D10 vise ce qui sort vers des tiers (prospection, LinkedIn, cas anonymisés) et, vers Rouge Gorge, jamais le nom/logo DataCAt ; les fichiers internes nomment le client | D-regles global | **Alexandre** | ouvert (13/10) |
| O6 | **règle « cloisonnement groupe La Bonne Remise »** retrouvée dans OWL (pas BDD) : « rien sur la relation DataCAt–client, rien sur le groupe de La Bonne Remise » dans les fichiers de veille — dure pour OWL seulement si Alexandre la reconnaît, sinon défaut surveillé | OWL D-regles | **Alexandre** | ouvert (13/10) |
| O7 | D8 précisé pour OWL : enrichir le classeur mensuel = backup puis vN+1 dans `A-versions/` (conforme) | — | — | réglé (13/10) |
| O8 | catalogue des 158 scripts fait (12 outils, 32 run actif LBR, 16 migration, 98 runs figés) ; transférables signalés : moteur de migration avec retour arrière + contrôles, `paths.py`, collecte catalogues Shopify, appariement produits, rendus PNG, diagnostic colonnes, moteur de gras → à consolider dans le catalogue global (C1) | E-systeme | cerveau | réglé (13/10), suite en C1 |
| O9 | fichiers CERVEAU déposés à la racine avec nom tronqué (`CCCN`) → à ranger et renommer `CC+CN` (autorisé 13/10) | racine | session OWL | en cours |

| O10 | **Points de contrôle avant le premier envoi de veille Chichi** (plan d'audit 11/10 §6) : choisir le fichier qui fait foi (master ou V2 ; le master passe le contrôle mais a le même nombre de lignes que le fichier Rouge Gorge — à vérifier ; la V2 est la plus complète mais ne passe pas le contrôle : 81 anomalies) ; corriger les anomalies de clôture ; décider du sort des feuilles internationales (Radar, Pays à potentiel, Top 10 — scorings pays de la prospection) dans la version client ; retirer toute recommandation de budget média ; ouvrir dans Excel, pas seulement LibreOffice ; chiffres vérifiés à deux sources primaires | A-chichi | **Alexandre** (master vs V2, feuilles internationales), puis VEILLE-ECRITURE | ouvert |
| O11 | Logs de la veille Chichi de septembre : à récupérer plus tard | — | Alexandre | ouvert |

## Usine créa (CREA)

| # | point | où | qui tranche | statut |
|---|---|---|---|---|
| U1 | confirmations post-réordonnancement : rien de Turbo Horse hors `A-tech/` ; dossiers globaux racine (B-doc, B-a-transferer, C-plans, C-taches-en-cours, D-regles, E-systeme) ; CLAUDE.md et referentiel.md aux nouveaux chemins ; note bundle | racine | session usine | en cours |
| U2 | **contenu du batch 3** (angles, scènes) : `chaine_b2.py` porte encore le batch 2 — à définir avant toute génération | E-systeme/scripts | **architecte créa** | ouvert |
| U3 | batch 2 figé, JSON non migrés (décision 11/10) | — | — | réglé (11/10) |
| U4 | les `_archives` lourdes (3,6 Go) ne bougent qu'avec un manifest validé à part | E-systeme/archives | Alexandre | ouvert |
| U10 | **96 scripts (pas 42, ni 99) ont des chemins de marque en dur** — dont 5 archivés ; brief écrit le 20/10 17h21 (`C-pilotage/CREA-261020-GLOBAL-CC-P-BRIEF-lot_ecriture_batch3.md`, sous-lots 0/A–H/Z, ~33 builders anciens à arbitrer, 3 fonctions `paths.py` proposées) ;  (`A-tech`, `A-ideation`, `B-visuels`…) à migrer vers `paths.py`, testés un par un ; + réconcilier les deux schémas de base visuelle (ménage d'Alexandre sur tech/pidf vs passe 3 bis sur nv-gallery, aligner sur le sien) ; + faire lire le registre des règles par `modeles_b5.py` pour vider les deux gabarits (dette usine n°15) — **tout avec le batch 3** | E-systeme/scripts | CREA-ECRITURE | **rouverte 20/10 19h37 par la revue n°2 (CREA-ARCHITECTE)** : la racine de marque est centralisée (0 `.py` en dur ✓) mais ~16 scripts vivants gardent le sous-dossier mort `B-visuels/` (chaine_b2, overlay_b2, modeles_b5, modeles40_b3, moodboard_b2…), 5 le recréent au `mkdir` à l'import ; `scan_chemins_morts.py` a donné un faux vert (plante en cp1252, chaînes `B / "B-visuels"` classées AMBIGU) ; catalogue incohérent (bannière « fait », table de 42 non mise à jour, scripts en Z listés vivants) → **lot de finition fait 20/10 20h07→20h15** : 11 scripts recâblés vers `sortie_gen`, 6 écartés, `planche.py` et `capture_video.py` corrigés, scan = 0 PATH prouvé par sentinelle, catalogue reconstruit (125 scripts), PDF + 8 `.log` détrackés. **U10 soldée** ; revue n°3 (CREA-ARCHITECTE) pour certifier |
| U11 | Passe 3 bis (statuts de la base visuelle : A-valides à plat, C-design-brut, D-concurrents, E-rejetes, typologie des bruts 5–8 types, nomenclature design brut proposée) : compte-rendu chiffré attendu ; puis **Alexandre dégrossit C-bruts à la main** | A-tech-visuels | CREA-ECRITURE puis Alexandre | fait 13/10 19h50 (commit 3eb8a43 ; typologie 6 types, scene-produit = fourre-tout 1 628/1 906) ; reste à Alexandre : dégrossir C-bruts |
| U13 | Nomenclature C-design-brut proposée (`…-<angle>-design.png`, même registre que les identifiants) **non appliquée** : 375 fichiers `__dupN` (posés de même nom d'une version de deck à l'autre, version perdue du nom) + 52 dans `D-elements/planches/` — à re-clé **avec le lot batch 3** (U10), pas avant | A-tech-visuels | architecte créa (lot) | ouvert (13/10) |
| U14 | Trois points laissés ouverts par la passe 3 bis : validations batch 1 (aucun marqueur b01 → restées en C-bruts), moodboards rangés dans `D-elements/fonds/`, `packshots-retravailles/` et `pictos/` vides (dérivés encore dans `B-packshots/`, banque pictos dans `E-systeme/gabarits/pictos/`) | A-tech-visuels | **Alexandre** | ouvert (13/10) |
| U12 | Suppressions à confirmer par Alexandre dans `Z-a-supprimer/` : 1,19 Go de backups hors rétention + `…v4-4_karl_1438.pdf` | Z-a-supprimer | **Alexandre** | ouvert (13/10) |

| U5 | Nombre de visuels finaux du batch 2 : 149 dans le brief vs 1 939 PNG dans le rapport — à trancher | A-tech | **Alexandre** | ouvert (11/10) |
| U6 | **Registre des identifiants d'annonce** (N° ↔ concept ↔ angle ↔ variante ↔ nom d'annonce niveau 2) : format `<categorie>-<produit>-<batch>-<rang>-<vNN>-<famille>-<concept>-<angle>`, jointure par registre jamais par transformation de chaîne ; à figer **avant la première diffusion** (sinon la boucle de retour résultats → concept est coupée) ; décision usine ou BDD (Q2) ouverte | E-systeme, A-tech | architecte créa + BDD-ARCHITECTE | ouvert (11/10) |
| U7 | Noms d'annonce de niveau 2 : 0 sur 27 pour le batch 2 (onglet RETOURS ADS vide) — à compléter avant toute diffusion ; livrable `CREA-261011-TECH-CC-E-ANALYSE-noms_annonce_batch2.md` jamais rendu ; état du registre `…-REGLES-registre_identifiants.md` à vérifier | A-tech | architecte créa (lot) | ouvert (11/10) |
| U8 | Budgets : budget par ad set = 4 × CPA cible ; CPA cible = 20 % du panier moyen ; panier moyen et CPA réels **doivent venir de la BDD**, aucune valeur en dur (paramètre à remplacer) | E-systeme | architecte créa | ouvert (11/10) |
| U9 | Définition écrite de la **fatigue créative** (fréquence, dérive du CTR, dérive du CPA, seuils) — manque avant tout abonnement créa ; coût réel de génération par marque et par lot à mesurer | — | architecte créa | ouvert (11/10) |

## Cerveau (global)

| # | point | où | qui tranche | statut |
|---|---|---|---|---|
| C1 | catalogue global des scripts (consolidation des trois catalogues projet) | cerveau | cerveau | ouvert — après les catalogues projet |
| C2 | bilan du régime de contexte BDD au 20/10 (dérogations, erreurs, % de fenêtre) | cerveau | cerveau + Alexandre | ouvert |
| C3 | fin de surveillance des défauts surveillés le 13/11 : monter/descendre | D-regles de chaque projet | Alexandre | ouvert |
| C4 | anciens docs de pilotage (plan_action_chantiers, calendrier immédiat) → REMPL par fonctionnement_v1 | projet 0 - Cerf Veau | cerveau | ouvert |
| C5 | PZ : projet perso, à décrire plus tard | — | Alexandre | ouvert |
| C6 | sauvegarde hors machine : **faite pour tous le 12/10** — ne plus la remettre dans les plans | — | — | réglé (12/10) |
| C7 | Code projet de la session messages clients / briefs (ex-MSG, « COM ») jamais tranché (nomenclature v3 §9) — un fichier `XXX-261013-RG-…` existe déjà avec un code vide | nomenclature | Alexandre | ouvert |
| C8 | Documents fusionnés le 13/10 : feuille de route développement (= plan_transverse + gros_projets + outils_ameliorations) ; règles de travail avec les agents (= dispatch v2 + règles de collaboration) intégrées à fonctionnement_v2 ; extraits de dispatch_sessions_v1, dette_graphiques_versions, plan_audit_arborescence versés ici (B37–B44, O10–O11, U5–U9) — **les six fichiers sources peuvent être supprimés** | projet cerveau | — | réglé (13/10 18h) |
| C9 | Fichiers globaux du cerveau **écrasés en place** désormais (fonctionnement, arborescence_commune, dettes, journal) ; `fonctionnement` redéposé dans BDD et usine à chaque changement (`D-regles/0-fonctionnement.md`) | projet cerveau | cerveau | en cours (20/10) |
| C10 | Ménage du projet « 0 - Cerf Veau » : 4 fichiers du 28/08 (passations et plan de la session mère, mémoire contexte) et 4 fichiers `E-MESSAGE` du 13/10 périmés — à retirer sur oui d'Alexandre | projet cerveau | Alexandre | ouvert (18/10) |
| C11 | Pré-tri de `Z-a-supprimer/` avant chaque purge (versions vivantes → `C-backups/`, reste → supprimer) : lot ECRITURE le 30 de chaque mois ; usine 20/10 : fait, purge faite par Alexandre (20/10 17h10, 734 fichiers / 4,8 Go) | — | ECRITURE de chaque projet | récurrent |
| U15 | `scan_chemins_morts.py` (usine) : forcer UTF-8 en sortie (plante en cp1252 sous Windows) et classer PATH toute chaîne de chemin construite par l'opérateur `/` (`B / "B-visuels" / "b2"`), pas seulement les littéraux à mot-clé — sinon le scan donne un faux vert (20/10) | E-systeme | CREA-ECRITURE | fait 20/10 20h15 (UTF-8 forcé, opérateur `/` = PATH, citations `.md` exclues, sentinelle testée) |
| C13 | Le pourcentage de fenêtre n'est **pas affiché** par Claude Code (CREA-ECRITURE 20/10 : « l'outil n'expose pas de % exact ») : la règle §9 (b) suppose le contraire. À corriger : la session donne une mesure lue (nombre de tours ou de lots depuis l'ouverture, taille de la passation) et dit « estimé » quand c'est estimé ; le stop propre à 70 % devient « stop propre à la frontière de lot quand la session juge sa fenêtre chargée, au plus tard après N lots » — à chiffrer avec les mesures de deux semaines | — | cerveau | prochaine mise à jour du fichier global |
| C12 | Le fichier global `fonctionnement` ne porte pas les lignes propres à un projet (ex. usine §7 « remote privé depuis le 20/10 », réajoutée par CREA-ECRITURE après écrasement). À la prochaine mise à jour : §11 « état » avec une ligne git par projet (BDD + usine), pour que l'écrasement en place ne perde rien | — | cerveau | prochaine mise à jour du fichier global |
