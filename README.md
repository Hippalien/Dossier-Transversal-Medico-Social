# Dossier Transversal Médico-Social (User-Centric Portfolio)

[![Deploy with Vercel](https://vercel.com/button)]
(https://vercel.com/new/clone?repository-url=https://github.com/Hippalien/Dossier-Transversal-Medico-Social)

Ce projet est une proposition concrète de **Dossier Numérique Transversal** pour le secteur médico-social. Né d'une problématique identifiée lors de mon mémoire de fin d'étude en **Éducation Spécialisée**, il répond aux besoins de fluidification du partage d'informations prôné par l'ARS.

---

## Expertise Métier & Vision Sociale
L'application ne se contente pas de stocker des données ; elle est conçue à partir des réalités du terrain :
* **Décloisonnement** : Briser les silos entre les domaines éducatif, administratif et de santé.
* **Accessibilité** : Mise en avant immédiate des supports de communication de l'usager (MAKATON, Pictogrammes).
* **Interopérabilité** : Structure de données alignée sur le standard international **HL7 FHIR R4**, garantissant une compatibilité avec les futurs écosystèmes de santé.
* **Éthique** : Un module de gestion des partages qui place le consentement et la traçabilité au centre de l'accompagnement.

---

## Stack Technique
Le projet utilise une architecture moderne "Fullstack" pour garantir performance et réactivité :

* **Frontend** : [Nuxt 3](https://nuxt.com/) & [Nuxt UI](https://ui.nuxt.com/) (Tailwind CSS + Headless UI).
* **State Management** : [Pinia](https://pinia.vuejs.org/) 
* **Backend & Auth** : [Supabase](https://supabase.com/) (PostgreSQL) pour la persistance et la sécurité des données.
* **Démonstration** : Intégration d'un **Mock JSON** complet pour simuler un dossier usager riche (Parcours de vie, santé, identité) sans dépendre immédiatement d'une API externe.

---

## Fonctionnalités Clés
- **Timeline "Fil de Vie"** : Chronologie interactive des événements avec filtrage dynamique par catégorie (Santé, Éducatif, Administratif).
- **Profil Interopérable** : Cartes d'identité FHIR-compliant (Allergies, Handicaps, Régimes alimentaires).
- **Dashboard de Partage** : Gestion fine des permissions par professionnel et historique des accès.
- **UI Générique** : Système de composants modulaires et réutilisables (AppCard, Badges dynamiques).

---

## Installation et Développement Local

```bash
# 1. Cloner le projet
git clone https://github.com/Hippalien/Dossier-Transversal-Medico-Social.git

# 2. Installer les dépendances
npm install

# 3. Lancer le projet
npm run dev
