# Projet ManaTalent

Ce projet se compose d'une API backend et d'une application frontend pour la gestion des utilisateurs, des entités et de leurs relations.

## Langages et Technologies Utilisés

### Backend
*   **Node.js :** Environnement d'exécution JavaScript.
*   **Express.js :** Framework d'application web pour Node.js.
*   **MongoDB :** Base de données NoSQL.
*   **Mongoose :** Modélisation d'objets MongoDB pour Node.js.
*   **CORS :** Middleware pour activer le partage de ressources entre origines multiples.
*   **dotenv :** Pour charger les variables d'environnement.

### Frontend
*   **Angular :** Framework d'application web frontend.
*   **TypeScript :** Sur-ensemble de JavaScript.
*   **Bootstrap 5 :** Bibliothèque de composants frontend pour le style.
*   **Bootstrap Icons :** Bibliothèque d'icônes pour Bootstrap.
*   **ngx-toastr :** Pour afficher les notifications toast.
*   **HttpClient :** Module Angular pour effectuer des requêtes HTTP.
*   **FormsModule :** Module Angular pour les formulaires basés sur des modèles.

## Comment Lancer le Projet

Pour exécuter ce projet, vous devez avoir Node.js et npm installés sur votre machine.

### 1. Cloner le Dépôt

Tout d'abord, clonez le dépôt sur votre machine locale :

```bash
git clone https://github.com/Tsuutsu/TestManaTalent.git
cd TestManaTalent
```

### 2. Configuration et Lancement du Backend

Naviguez vers le répertoire `back`, installez les dépendances et démarrez le serveur.

```bash
cd back
npm install
```

**Configurer MongoDB :**
Créez un fichier `.env` dans le répertoire `back` avec votre chaîne de connexion MongoDB et le port :

```
MONGO_URI=mongodb://localhost:27017/test 
PORT=3000
```

Pour utiliser MongoDB Atlas, suivez ces étapes :
1.  **Créez un compte et un cluster MongoDB Atlas :** Inscrivez-vous sur [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas), créez un cluster gratuit (tier M0), un utilisateur de base de données et ajoutez votre adresse IP à la liste blanche.
2.  **Obtenez votre chaîne de connexion :** Depuis le tableau de bord de votre cluster Atlas, cliquez sur "Connect", sélectionnez "Drivers", choisissez "Node.js" et copiez la chaîne de connexion. Remplacez `<username>`, `<password>` et éventuellement `<database-name>`.
3.  **Mettez à jour votre fichier `.env` :** Remplacez le `MONGO_URI` dans votre fichier `back/.env` par votre chaîne de connexion Atlas.

Démarrez le serveur backend :

```bash
node server.js
```
Le serveur backend fonctionnera sur `http://localhost:3000`.

### 3. Configuration et Lancement du Frontend

Ouvrez un *nouveau terminal*, naviguez vers le répertoire `front`, installez les dépendances et démarrez le serveur de développement.

```bash
cd ../front
npm install
npm start
```
L'application frontend s'ouvrira généralement dans votre navigateur à l'adresse `http://localhost:4200`.

## Comment Utiliser l'Application

L'interface utilisateur est divisée en trois sections principales : **Utilisateurs**, **Entités** et **Utilisateurs-Entités**.

**A. Section Utilisateurs :**
-   **Créer un utilisateur :** Utilisez le formulaire pour saisir un `Nom d'utilisateur`, un `Email` et un `Mot de passe`. Cliquez sur "Créer".
-   **Modifier un utilisateur :** Cliquez sur "Modifier" à côté d'un utilisateur dans la liste. Le formulaire sera pré-rempli. Modifiez les détails et cliquez sur "Mettre à jour".
-   **Supprimer un utilisateur :** Cliquez sur "Supprimer" à côté d'un utilisateur.
-   **Afficher la liste des utilisateurs :** Cliquez sur le bouton chevron dans l'en-tête de la carte "Utilisateurs" pour basculer la visibilité de la liste des utilisateurs.

**B. Section Entités :**
-   **Créer une entité :** Utilisez le formulaire pour saisir un `Nom`. Cliquez sur "Créer".
-   **Modifier une entité :** Cliquez sur "Modifier" à côté d'une entité. Le formulaire sera pré-rempli. Modifiez les détails et cliquez sur "Mettre à jour".
-   **Supprimer une entité :** Cliquez sur "Supprimer" à côté d'une entité.
-   **Afficher la liste des entités :** Cliquez sur le bouton chevron dans l'en-tête de la carte "Entités" pour basculer la visibilité de la liste des entités.

**C. Section Utilisateurs-Entités :**
-   **Créer une relation utilisateur-entité :** Utilisez le formulaire pour sélectionner un `Utilisateur` et une `Entité` dans les listes déroulantes. Cliquez sur "Créer".
-   **Modifier une relation utilisateur-entité :** Cliquez sur "Modifier" à côté d'une relation utilisateur-entité. Le formulaire sera pré-rempli. Sélectionnez un nouvel utilisateur/entité si nécessaire et cliquez sur "Mettre à jour".
-   **Supprimer une relation utilisateur-entité :** Cliquez sur "Supprimer" à côté d'une relation utilisateur-entité.
-   **Afficher la liste des utilisateurs-entités :** Cliquez sur le bouton chevron dans l'en-tête de la carte "Utilisateurs-Entités" pour basculer la visibilité de la liste des utilisateurs-entités.

Des messages de succès apparaîtront sous forme de notifications toast en haut à droite de l'écran pour les opérations réussies.
