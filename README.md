# Cazador Belga

Site web dédié aux chasseurs francophones souhaitant chasser en Espagne.

Le projet propose des **guides pratiques**, des **articles de terrain**, des **retours d'expérience** et des informations utiles pour comprendre la chasse en Espagne, préparer ses sorties et effectuer les démarches nécessaires.

## Contenu

Le site s'articule actuellement autour de deux formats principaux :

### Guides

Des contenus pratiques et structurés pour accompagner les chasseurs dans leurs démarches et leur préparation.

Exemples :

- Comment obtenir son permis de chasse en Espagne
- Comment trouver un territoire de chasse en Espagne
- Réussir un affût au sanglier en Espagne

### Articles

Des récits et retours d'expérience davantage orientés vers un format éditorial et magazine.

Premier article :

- Ma première montería en Espagne

## Fonctionnalités

- Navigation principale
- Guides structurés
- Articles de terrain
- Sommaires et navigation par sections
- Système de tags
- Page d'exploration des tags
- Images et contenus personnels
- Design responsive
- Composants réutilisables

## Stack technique

- Next.js
- React
- TypeScript
- Tailwind CSS
- Git / GitHub
- Déploiement prévu sur Vercel

## Structure du projet

```text
app/
├── articles/
├── components/
├── data/
├── guides/
└── tags/

public/
└── images/
    └── articles/
```

Les contenus principaux sont centralisés dans :

app/data/articles.ts
app/data/guides.ts
app/data/tags.ts
Développement local

Depuis Git Bash :

cd /c/dev/cb
npm run dev

Le site est ensuite accessible sur :

http://localhost:3000

Pour arrêter le serveur de développement :

Ctrl + C
Vérifications avant commit

Depuis le dossier du projet :

cd /c/dev/cb

Vérifier le statut :

git status

Vérifier le dépôt distant :

git remote -v

Vérifier la branche :

git branch --show-current

Vérifier l'identité Git configurée pour ce projet :

git config --local --get user.name
git config --local --get user.email

Vérifier l'authentification GitHub personnelle :

ssh -T github-cazadorbelga

Vérifier les modifications :

git diff --stat

Puis :

git status
Commit et push

Ajouter les fichiers :

git add .

Vérifier ce qui sera commité :

git status

Créer le commit :

git commit -m "Description du travail effectué"

Envoyer sur GitHub :

git push

Vérifier que tout est propre :

git status

Le résultat attendu est :

Your branch is up to date with 'origin/main'.
nothing to commit, working tree clean
Séparation projet personnel / travail

Le projet Cazador Belga est développé dans :

C:\dev\cb

Le dépôt Git et la configuration Git de ce projet doivent rester séparés de tout environnement professionnel.

Avant chaque push, vérifier :

cd /c/dev/cb
git remote -v
git branch --show-current
git config --local --get user.email
ssh -T github-cazadorbelga
