# Refonte Site Paris Musées

Projet de refonte du site web Paris Musées, développé en HTML/CSS/JS natif pour permettre la collaboration de toute l'équipe.

## 📋 Contexte

Ce projet a été conçu à partir d'un design Figma structuré en composants. Initialement prévu en Next.js, il a été adapté en HTML natif pour faciliter la collaboration avec des membres de l'équipe ayant des compétences variées.

## 📂 Structure du projet

```txt
static-refonte-paris-musee/
├── index.html              # Page principale du site
├── assets/                 # Ressources statiques
│   └── fonts/             # Polices personnalisées (Gambetta, Switzer)
├── components/            # 🎯 COMPOSANTS RÉUTILISABLES
│   ├── base/              # Composants de base
│   │   ├── divider.html
│   │   ├── grid-preview.html # Composant pour visualiser la grille comme dans figma (a mettre en haut du body des pages)
│   │   ├── brand/         # Logos et éléments de marque
│   │   │   ├── paris-musee.html
│   │   │   └── paris-musee-small.html
│   │   └── typo/          # Composants typographiques
│   │       ├── display.html
│   │       ├── h2.html
│   │       └── p.html
│   └── layout/            # Structure de page
│       └── Main/
│           └── footer.html
├── css/                   # Feuilles de style
│   ├── global.css         # Styles globaux, variables, polices
│   ├── index.css          # Point d'entrée CSS (importe tous les autres)
│   └── components/        # Styles spécifiques aux composants
│       └── typo.css
├── js/                    # Scripts JavaScript
│   └── index.js
└── pages/                 # Pages supplémentaires (à créer au besoin)
```

## 🎯 Philosophie du projet : Composants réutilisables

Le dossier `components/` est le **cœur** du projet. Il contient tous les morceaux de code HTML prêts à l'emploi.

### Pourquoi cette organisation ?

1. **Copier-coller facilement** : Chaque composant est dans son propre fichier
2. **Voir ce qui est fait** : Un coup d'œil au dossier `components/` montre l'avancement
3. **Retrouver du code rapidement** : Organisation logique par type de composant
4. **Travailler en parallèle** : Chacun peut travailler sur un composant différent

## 🚀 Comment utiliser les composants

### Étape 1 : Trouver le composant dont tu as besoin

Parcours le dossier `components/` pour trouver le composant qui correspond à ton besoin :

- **Typographie** → `components/base/typo/`
- **Logos** → `components/base/brand/`
- **Éléments de layout** → `components/layout/`
- **Autres éléments de base** → `components/base/`

### Étape 2 : Ouvrir le fichier du composant

Exemple : tu veux ajouter un titre principal

1. Ouvre `components/base/typo/display.html`
2. Tu verras le code HTML du composant

### Étape 3 : Copier le code

Sélectionne tout le code du composant et copie-le (Cmd+C / Ctrl+C)

### Étape 4 : Coller dans ta page

1. Ouvre la page où tu veux ajouter le composant (ex : `index.html`)
2. Colle le code à l'endroit souhaité (Cmd+V / Ctrl+V)
3. Modifie le contenu si nécessaire (texte, images, etc.)

### Exemple pratique

**Fichier** : `components/base/typo/display.html`

```html
<h1 class="font-display">Titre principal</h1>
```

**Utilisation dans** `index.html` :

```html
<body>
  <h1 class="font-display">Bienvenue à Paris Musées</h1>
  <!-- Autres contenus -->
</body>
```

## 🎨 Styles CSS

### Organisation

- **`css/global.css`** : Variables CSS, polices, reset, styles de base
- **`css/index.css`** : Fichier principal qui importe tous les autres CSS
- **`css/components/`** : Styles spécifiques à certains composants

### Variables disponibles

Dans `global.css`, tu trouveras des variables CSS prêtes à l'emploi :

```css
/* Espacements */
--xs: 6px;
--sm: 8px;
--md: 16px;
--lg: 32px;
--xl: 56px;
--2xl: 80px;

/* Tailles de police */
--font-display: 64px;
--font-h2: 36px;
--font-p: 14px;
--font-element-title: 16px;

/* Media queries */
--screen-mobile: 393px;
--screen-tablet: 767px;
--screen-desktop: 1024px;
```

### Utiliser les variables

```css
.mon-element {
  margin: var(--md);
  font-size: var(--font-h2);
}
```

## ✅ Bonnes pratiques

### 1. Toujours utiliser `class="..."` (pas `className`)

❌ **Mauvais** (syntaxe React) :

```html
<div className="container">...</div>
```

✅ **Bon** (HTML natif) :

```html
<div class="container">...</div>
```

### 2. Tester régulièrement dans le navigateur

- Ouvre `index.html` directement dans un navigateur
- Ou utilise un serveur local pour un meilleur rendu :

  ```bash
  python3 -m http.server 8000
  # Puis ouvre http://localhost:8000
  ```

### 3. Créer de nouveaux composants

Quand tu crées un nouvel élément qui pourrait être réutilisé :

1. Crée un nouveau fichier dans `components/` (dans le bon sous-dossier)
2. Mets-y le code HTML du composant
3. Ajoute les styles CSS dans le fichier approprié dans `css/components/`
4. Documente-le (ajoute un commentaire en haut du fichier)

**Exemple** :

```html
<!-- components/base/button.html -->
<!-- Bouton principal du site -->
<button class="btn-primary">Cliquez ici</button>
```

### 4. Nommer les fichiers de manière claire

- Utilise des noms descriptifs : `hero-section.html`, `card-museum.html`
- Utilise des minuscules et des tirets (pas d'espaces, pas de camelCase)
- Garde une cohérence avec les noms du Figma si possible

## 🤝 Collaboration en équipe

### Qui fait quoi ?

1. **Créer un composant** : Une personne crée le fichier HTML dans `components/`
2. **Styliser** : Une autre peut ajouter les styles CSS correspondants
3. **Intégrer** : Une troisième peut copier-coller les composants dans les pages

### Éviter les conflits

- Travaillez sur des composants différents en même temps
- Communiquez sur qui travaille sur quoi
- Faites des commits réguliers avec des messages clairs

### Suivre l'avancement

Créez une liste des composants à développer basée sur le Figma :

- [ ] Header
- [ ] Navigation
- [ ] Footer
- [ ] Base Card
- [ ] Actualité Card
- [ ] Actualité title Card
- [ ] Image Card
- [ ] Caroussel Card
- [ ] Show More CTA Card
- [ ] Divider
- [ ] Map
- [x] Typos
- [ ] Le boutton de newsletter



Cochez au fur et à mesure que les composants sont créés dans `components/`.

## 🔧 Dépannage

### Les styles ne s'appliquent pas

1. Vérifie que ton fichier de styles est bien importé dans `css/index.css`
2. Vérifie que `index.html` charge bien `css/index.css`
3. Vérifie que tu utilises `class="..."` et non `className="..."`
4. Ouvre les DevTools du navigateur (F12) → onglet Elements pour inspecter les styles

### Les polices ne se chargent pas

1. Vérifie que les fichiers `.woff2` sont bien dans `assets/fonts/`
2. Utilise un serveur local plutôt que d'ouvrir directement le fichier HTML

### Je ne trouve pas un composant

1. Regarde dans les sous-dossiers de `components/`
2. Utilise la recherche de VS Code (Cmd+Shift+F / Ctrl+Shift+F)
3. S'il n'existe pas encore, crée-le !

## 📚 Ressources utiles

- [MDN Web Docs](https://developer.mozilla.org/) : Documentation HTML/CSS/JS
- [Can I Use](https://caniuse.com/) : Vérifier la compatibilité des fonctionnalités CSS/JS
- Design Figma : [lien vers votre Figma]

## 🎓 Pour les débutants

### HTML de base

```html
<!-- Structure de base d'une page -->
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/index.css" />
    <title>Ma page</title>
  </head>
  <body>
    <!-- Contenu ici -->
  </body>
</html>
```

### CSS de base

```css
/* Sélectionner par classe */
.mon-element {
  color: blue;
  font-size: 16px;
}

/* Sélectionner par ID */
#unique-element {
  background: white;
}

/* Sélectionner par balise */
h1 {
  margin-bottom: 20px;
}
```

### Structure HTML courante

```html
<header><!-- En-tête du site --></header>
<nav><!-- Navigation --></nav>
<main>
  <section><!-- Section de contenu --></section>
  <article><!-- Article ou contenu principal --></article>
</main>
<footer><!-- Pied de page --></footer>
```

## 📞 Questions ?

Si tu as des questions ou des problèmes :

1. Consulte ce README
2. Demande à l'équipe
3. Consulte la documentation MDN
4. N'hésite pas à expérimenter !

---

**Bon courage et bonne collaboration ! 🚀**
