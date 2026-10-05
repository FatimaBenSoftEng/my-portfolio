# Portfolio Professionnel Moderne

Portfolio professionnel moderne en single page scrollable développé avec React, TailwindCSS et Framer Motion.

## 🚀 Technologies

- **React** - Bibliothèque JavaScript pour l'interface utilisateur
- **Vite** - Build tool moderne et rapide
- **TailwindCSS** - Framework CSS utility-first
- **Framer Motion** - Bibliothèque d'animations pour React
- **Lucide React** - Icônes modernes et élégantes

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🎨 Fonctionnalités

- ✅ Single page scrollable avec navigation fluide
- ✅ Animations modernes avec Framer Motion
- ✅ Design glassmorphism et effets lumineux
- ✅ Responsive (mobile, tablette, desktop)
- ✅ Sections : Accueil, À propos, Expériences, Compétences, Projets, Formation, Contact
- ✅ Formulaire de contact fonctionnel
- ✅ Filtres de projets par catégorie
- ✅ Timeline animée pour les expériences
- ✅ Barres de compétences animées

## 📝 Personnalisation

Pour personnaliser le portfolio avec vos informations :

1. Modifiez les données dans chaque section (`src/sections/`)
2. Remplacez les images/icônes dans les projets
3. Ajustez les couleurs dans `tailwind.config.js`
4. Modifiez les liens sociaux dans `Contact.jsx`
5. Mettez à jour les informations de contact

## 🎯 Structure du Projet

```
src/
├── components/      # Composants réutilisables
│   ├── Navigation.jsx
│   └── Footer.jsx
├── sections/        # Sections de la page
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   └── Contact.jsx
├── App.jsx          # Composant principal
├── main.jsx         # Point d'entrée
└── index.css        # Styles globaux
```

## 🌈 Palette de Couleurs

- **Bleu clair** : `#60A5FA`
- **Violet** : `#A855F7`
- **Rose** : `#EC4899`
- **Fond** : Dégradé sombre (slate-900, purple-900)

## 📄 Licence

Ce projet est sous licence MIT.
