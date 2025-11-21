# Tableau de Bord Administrateur Agrobloc

Application de gestion administrative pour la plateforme Agrobloc développée avec React et Tailwind CSS.

## 🚀 Fonctionnalités

### 1. Gestion Générale
- **Configuration de base** : Paramètres système, coordonnées, options régionales
- **Gestion des produits** : Catalogue produits, catégories, stocks
- **Gestion des utilisateurs** : Administration des comptes vendeurs et acheteurs
- **Indicateurs KPI** : Tableaux de bord avec métriques de performance

### 2. Gestion ESCROW
- **Transactions** : Suivi en temps réel des transactions
- **Fournisseurs de paiement** : Gestion Orange Money, MTN, Moov, Wave
- **Frais Agrobloc** : Configuration des commissions et frais
- **Paiements massifs** : Traitement par lot (batch payments)
- **Gestion des conflits** : Résolution des litiges
- **Système de ticketing** : Support et gestion des erreurs

### 3. Blockchain & Traçabilité
- **Blockchain Agrobloc** : Monitoring du réseau blockchain
- **Système de traçabilité** : Suivi des produits de la production à la livraison

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build
```

## 🛠️ Technologies Utilisées

- **React 18** : Framework UI
- **React Router 6** : Navigation
- **Tailwind CSS** : Styling
- **Vite** : Build tool
- **Lucide React** : Icônes

## 📁 Structure du Projet

```
src/
├── components/
│   ├── Layout.jsx
│   ├── GestionGenerale/
│   │   ├── Configuration.jsx
│   │   ├── Produits.jsx
│   │   ├── Utilisateurs.jsx
│   │   └── KPI.jsx
│   ├── GestionEscrow/
│   │   ├── Transactions.jsx
│   │   ├── Fournisseurs.jsx
│   │   ├── Frais.jsx
│   │   ├── PaiementsMassifs.jsx
│   │   ├── Conflits.jsx
│   │   └── Ticketing.jsx
│   └── BlockchainTracabilite/
│       ├── Blockchain.jsx
│       └── Tracabilite.jsx
├── pages/
│   ├── Dashboard.jsx
│   ├── GestionGenerale.jsx
│   ├── GestionEscrow.jsx
│   └── BlockchainTracabilite.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Thème Personnalisé

Le projet utilise une palette de couleurs personnalisée pour Agrobloc :
- Primary: `#16a34a` (vert)
- Secondary: `#15803d` 
- Accent: `#22c55e`
- Dark: `#14532d`

## 🔧 Configuration

Les fichiers de configuration principaux :
- `vite.config.js` : Configuration Vite
- `tailwind.config.js` : Configuration Tailwind CSS
- `postcss.config.js` : Configuration PostCSS

## 📊 Fonctionnalités Futures

- Intégration d'API backend
- Graphiques interactifs (Chart.js / Recharts)
- Authentification et autorisation
- Notifications en temps réel
- Export de données (PDF, Excel)
- Interface multilingue

## 👥 Contributeurs

Développé pour Agrobloc

## 📄 Licence

Propriétaire - Agrobloc © 2024
