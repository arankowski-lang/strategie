# Plan de route — tableau de bord

**statut : actif · mis à jour le 21/10/2026, 13h35 · porté par le cerveau (puis STRATEGIE) · remplace la version en phases du 20/10 (contenu repris).**
**Règles de ce fichier** : ni dates, ni durées (l'ordre et les dépendances seulement ; le rythme est celui d'Alexandre) · un code toujours avec son nom en clair · une tâche globale par ligne, l'état par projet, ce qui revient à Alexandre dans sa propre colonne · pourcentage = estimation grossière de la tâche entière. Mis à jour à chaque jalon ; les devlogs des projets font foi pour le détail.
**Hors périmètre, par décision d'Alexandre (21/10 12h53)** : OWL (veille, garé : fichiers envoyés, clients satisfaits) et la production de l'usine créa pour le prochain client (PIDF) — on finit d'abord tout le reste.

Lecture : ✅ fait · 🔄 en cours · ⏭ à lancer · ⏸ attend Alexandre

## 1. État par tâche globale

| # | Tâche globale | BDD Master | Usine créa | Global / strategie | À toi | % |
|---|---|---|---|---|---|---|
| 1 | **Dépôts légers, en ligne, sains** (réécriture git, fsck, clone frais, hooks) | ✅ 3,2 Gio → 192 Mo ; hook installé | ✅ 79 → 8,6 Mo ; hook installé | ✅ `strategie` en ligne, 13 fichiers poussés par le cerveau | vider la corbeille (copies `.git`, brouillons `autonome`) après VERIF n°3 | 100 |
| 2 | **Arborescence définitive** (clients numérotés, maisons, pas d'archive, retours du 21/10) | ✅ exécutée (Artikka, staging, scripts au global, `travail/`, 4 dossiers client) · 🔄 VERIF n°3 | ✅ exécutée (`0-maquette`, `F-references/` à plat + liens durs, `-ressources/`, 8 dossiers visuels) · ✅ revue n°4 conforme · 🔄 nus `situ-` avec manifeste | — | `agence` = Coudac ou agence du client ; 8 Coudac sans auteur ; 109 `.py` dans `B-prod-claude/` | 90 |
| 3 | **Règles** (trois niveaux, douze dures, registre, contradictions) | ✅ D1–D12 ; contradictions C1–C6 résolues, rapport clos ; **aligné sur la source unique (13h31)** | ✅ D1–D12, R1–R50 ; 8 paires listées ; **aligné sur la source unique (13h27)** | ✅ `regles/0-fonctionnement.md` réconciliée 13h08 = **source unique, tirée par les deux projets** | trier les 8 paires usine ; cible CAC March (202 ou 193,13) ; fin de surveillance : retirer des règles | 92 |
| 4 | **Entretien** (devlog unique, rituel de démarrage, faits courants, en-têtes de vérité, dettes uniques, `revue.py`, garde-fous à trois refus + `add -A`/`-f`) | ✅ tout en place, `revue.py` vert | ✅ tout en place · 🔄 `revue.py` rangé et lancé | ✅ règles gravées | compléter `faits-courants.md` des deux projets (tes dates) | 90 |
| 5 | **Deck Master absorbé** | ✅ migré dans BDD | — | — | passer Deck Master en `zz-` | 95 |
| 6 | **Chichi créa** (base créa connectée, modules du plan) | 🔄 fondation + M8 livrés, modules faisables en cours | — | — | calendrier promo ; registre des N° de Zoé ; landing par annonce | 50 |
| 7 | **Organisation autonome** (dépôt stratégie, décisions dans les dépôts, cerveau dans Claude Code, pilote unique, trois couches, zone verte/rouge) | ✅ `decisions-alexandre.md` · ⏭ brouillons trois couches à lire · ⏭ pilote après l'usine, avec prudence | ✅ `decisions-alexandre.md` · ⏭ brouillons · ⏭ pilote en premier | ✅ dépôt + `decisions/` + file de décisions · ⏭ session STRATEGIE à ouvrir (local, deux `/add-dir`) · ⏭ premier rapport | ouvrir STRATEGIE ; lire les deux brouillons et dire oui | 40 |
| 8 | **Audit du process** (verrou par dépôt, revue en fin de chaîne par sous-agent, manifeste de déplacement, valeurs de référence par client, `pieges-connus.md`, file unique de décisions, environnement déclaré) | 🔄 valeurs de référence : premier essai dans VERIF n°3 | 🔄 manifeste : appliqué aux nus | ✅ file de décisions ; ⏭ le reste à graver puis en lots | — | 20 |
| 9 | **Sauvegardes hors git** (copie Drive, `sauvegarde.py` des seuls fichiers ignorés, test de restauration) | ⏸ copie Drive après VERIF n°3 | ⏸ idem | ⏭ `sauvegarde.py` | la copie Drive | 30 |
| 10 | **Ménage du cerveau** (projet Cerf Veau : fichiers du 28/08 et messages du 13/10 ; 15,40 → 15,49 dans deux fichiers) | — | — | ⏭ sur ton oui | oui / non | 0 |

## 2. Les jalons
- **Dimanche 18/10** — point de départ : dépôts de plusieurs gigas, règles contradictoires, documents en triple, Deck Master doublon, sessions qui s'arrêtent sans cesse.
- **Lundi 20/10 — « cleaning certifié »** : dépôts réécrits et en ligne, arborescences posées, VERIF n°2 et revue n°3 vertes, règles de fondation gravées, chaînes de nuit lancées.
- **Mardi 21/10 — « fondations posées »** : devlog, rituel, garde-fous, dettes uniques, `revue.py` ; retours d'arborescence exécutés le jour même ; dépôt `strategie` en ligne ; Chichi créa en production.
- **Prochain — « organisation autonome »** : STRATEGIE lit les projets et tient les règles ; pilote unique sur l'usine ; zone verte / zone rouge ; les « go » deviennent rares ; Chichi créa produit sans lot d'infrastructure entre deux.

## 3. Lecture d'ensemble
Le cleaning est fini (tâches 1–5 ≈ 95 %). Les fondations d'entretien sont en place (≈ 90 %). On est à la bascule : l'organisation (7–8 ≈ 30 %) doit tourner sans Alexandre pour que Chichi créa (6) devienne le seul sujet de production. Ce qui reste est de l'organisation et du ménage, plus la production Chichi.

## 4. Ordre de lancement
1. Trois messages prêts : BDD-VERIF n°3 · CREA-ECRITURE (`revue.py`, exception `.md`, nus avec manifeste) · STRATEGIE premier lot (lecture des deux projets, rapport d'état et de contradictions).
2. Après VERIF n°3 verte : corbeille vidée · Deck Master en `zz-` · copie Drive.
3. Rapport STRATEGIE → lots d'alignement des règles par projet → le cerveau cesse d'être la source des fichiers globaux.
4. Chichi créa continue ; réponses à la file de décisions quand Alexandre a cinq minutes.
5. Brouillons des trois couches → oui → pilote unique sur l'usine → mesure → BDD ensuite, avec prudence.
6. Audit du process en lots : verrou, revue en fin de chaîne, valeurs de référence, pièges connus, environnement déclaré, `sauvegarde.py`.
7. Rituels (condensation hebdo, revue hebdo + contradictions, purge mensuelle) ; fin de surveillance le 13/11 : retirer des règles.

## 5. Ce qui revient à Alexandre, en une liste
Ouvrir STRATEGIE (local, deux `/add-dir`, message) · envoyer les messages prêts · après VERIF n°3 : corbeille, Deck en `zz-`, copie Drive · `faits-courants.md` des deux projets · la file de décisions (`strategie/decisions/decisions-alexandre.md`, section « en attente ») · lire les deux brouillons des trois couches · Chichi : calendrier promo, registre des N° de Zoé · oui/non ménage Cerf Veau.
