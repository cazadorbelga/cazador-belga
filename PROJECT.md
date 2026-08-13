# Cazador Belga

## Mission

Aider les chasseurs francophones à préparer leur chasse en Espagne grâce à des guides fiables, pratiques et basés sur une expérience de terrain.

## Vision

Devenir la référence francophone sur la chasse en Espagne.

## Valeurs

- Authenticité
- Rigueur
- Respect de la réglementation
- Partage d'expérience
- Passion de la chasse

## Objectif 2026

- 10 guides de référence
- Développer une bibliothèque d'articles de terrain
- Version française terminée
- Début de la version espagnole
- Premiers partenariats avec les marques

---

# État actuel du projet

## Technique

- Projet Next.js fonctionnel
- Développement local dans `C:\dev\cb`
- Git configuré pour utiliser le compte personnel Cazador Belga
- Déploiement Vercel prévu
- Architecture de composants réutilisables en place
- Structure des données centralisée dans `app/data/`

## Site

- Homepage : structure de base réalisée
- Navigation principale : en place
- Architecture des guides : en place
- Architecture des articles : en place
- Design général : en place
- Design spécifique aux guides : en place
- Design spécifique aux articles : en place
- Système de tags : en place
- Page `/tags` : en place
- Navigation par tags depuis les guides et articles : en place
- Sommaire des guides : en place
- Sommaire des articles : en place
- Système d'ancres pour les sections : en place
- Composants réutilisables : en place
- Design responsive : en place

---

# Guides

## Architecture

Les guides utilisent une structure éditoriale dédiée comprenant notamment :

- Breadcrumb
- GuideHeader
- Image principale
- Sommaire
- Sections structurées
- Contenu complémentaire
- Sources
- Guides associés lorsque pertinent
- Tags

Les composants doivent rester réutilisables afin de conserver une présentation homogène entre les différents guides.

## Guides actuellement présents

### Permis de chasse en Espagne

Structure actuelle :

1. Mon expérience
2. Avant de commencer
3. La préparation
4. L'examen
5. Après l'examen
6. Mes conseils
7. Sources et guides complémentaires

Éléments UX/UI intégrés :

- Sommaire latéral avec suivi de la lecture
- Photos personnelles Belgique → Espagne
- Capture d'une question de préparation
- Encadré « À propos de ce guide »
- Bloc « Mes conseils »
- Mise en page harmonisée des sous-sections
- Design responsive

### Trouver un territoire de chasse en Espagne

Guide consacré aux différents types de territoires de chasse et à leur gestion.

Tags actuels :

- Espagne
- Administratif
- Gestion des territoires

### Réussir un affût au sanglier en Espagne

Guide consacré à la pratique de l'affût au sanglier en Espagne.

Tags actuels :

- Sanglier
- Espagne
- Chasse à l'affût

---

# Articles

## Architecture

Les articles possèdent une identité éditoriale différente des guides.

La structure de référence comprend :

- Breadcrumb
- Header de l'article
- Chapô éditorial
- Sommaire
- Sections avec ancres
- Texte aéré
- Images personnelles
- Légendes
- Blocs ou citations lorsque pertinent
- Conclusion
- Tags

L'objectif est de se rapprocher d'un **format magazine**, avec davantage de respiration et de narration que dans un guide pratique.

## Article de référence

### Ma première montería en Espagne

Cet article sert actuellement de **modèle de référence pour les futurs articles**.

Il comprend notamment :

- Chapô en gras et italique
- Sommaire avec ancres
- Sections éditoriales
- Images de la montería
- Image de la carte du coto
- Images des migas
- Images du territoire et du poste
- Légendes
- Texte volontairement aéré
- Citation sur la sécurité
- Conclusion mise en valeur

### Règle pour les prochains articles

Ne pas recréer une nouvelle structure graphique à chaque article.

Reprendre la structure de référence de :

**« Ma première montería en Espagne »**

et adapter uniquement :

- le contenu
- les images
- les légendes
- les tags
- les informations propres à l'article

---

# Système de tags

Les tags sont centralisés dans :

`app/data/tags.ts`

Les guides et articles utilisent des tags permettant de filtrer les contenus.

Le système doit respecter la règle suivante :

> Un tag affiché sur un article ou un guide doit toujours permettre de retrouver un contenu correspondant.

La page :

`/tags`

constitue la page principale d'exploration des sujets.

Lorsqu'un utilisateur clique sur un tag depuis un guide ou un article, il doit être redirigé vers le contenu correspondant à ce tag.

Lorsqu'aucun filtre n'est sélectionné, `/tags` reste une page générale présentant les différents sujets.

## Règle importante

Ne pas modifier les noms des tags uniquement pour contourner un problème de filtrage.

Si un tag existe dans le contenu, le système de filtrage doit être capable de le gérer correctement.

---

# Design

## Identité

Le site doit conserver une identité :

- sobre
- professionnelle
- éditoriale
- lisible
- visuelle
- inspirée de la chasse et du terrain

Les couleurs vertes constituent la base de l'identité visuelle.

## Guides vs Articles

Les guides et les articles doivent partager une identité commune mais être clairement différenciés.

### Guides

Approche :

- pratique
- structurée
- pédagogique
- orientée recherche d'information

### Articles

Approche :

- éditoriale
- narrative
- immersive
- inspirée d'un format magazine

Éviter de rendre les deux formats visuellement identiques.

---

# Contenu et sources

- Privilégier l'expérience personnelle lorsqu'elle constitue la source du contenu.
- Vérifier les informations réglementaires avec des sources officielles.
- Ne pas présenter une information réglementaire comme certaine sans source fiable.
- Conserver les sources utilisées dans les guides lorsque nécessaire.
- Les articles de retour d'expérience peuvent privilégier le récit personnel.

---

# Prochaine étape

Le socle principal du site est maintenant en place.

La priorité est désormais de poursuivre la construction du contenu.

Ordre de travail recommandé :

1. Finaliser les guides existants
2. Continuer les articles de terrain
3. Ajouter progressivement les images et médias
4. Vérifier les tags de chaque nouveau contenu
5. Ajouter les nouveaux guides/articles à la navigation lorsque nécessaire
6. Vérifier régulièrement le responsive
7. Effectuer une passe globale UX/UI
8. Effectuer une passe SEO
9. Vérifier les liens et les images
10. Commit et push Git

---

# Processus de fin de session

Avant de terminer une session de développement :

## 1. Vérifier le statut Git

```bash
git status
```
