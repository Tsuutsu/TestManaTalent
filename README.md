# Project ManaTalent

This project consists of a backend API and a frontend application for managing users, entities, and their relationships.

## Languages and Technologies Used

### Backend
*   **Node.js:** JavaScript runtime environment.
*   **Express.js:** Web application framework for Node.js.
*   **MongoDB:** NoSQL database.
*   **Mongoose:** MongoDB object modeling for Node.js.
*   **CORS:** Middleware for enabling Cross-Origin Resource Sharing.
*   **dotenv:** For loading environment variables.

### Frontend
*   **Angular:** Frontend web application framework.
*   **TypeScript:** Superset of JavaScript.
*   **Bootstrap 5:** Frontend component library for styling.
*   **Bootstrap Icons:** Icon library for Bootstrap.
*   **ngx-toastr:** For displaying toast notifications.
*   **HttpClient:** Angular module for making HTTP requests.
*   **FormsModule:** Angular module for template-driven forms.

## How to Launch the Project

To run this project, you need to have Node.js and npm installed on your machine.

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/Tsuutsu/TestManaTalent.git
cd TestManaTalent
```

### 2. Backend Setup and Launch

Navigate to the `back` directory, install dependencies, and start the server.

```bash
cd back
npm install
```

**Configure MongoDB:**
Create a `.env` file in the `back` directory with your MongoDB connection string and port:

```
MONGO_URI=mongodb://localhost:27017/gemini-test # Or your MongoDB Atlas connection string
PORT=3000
```

To use MongoDB Atlas, follow these steps:
1.  **Create a MongoDB Atlas Account and Cluster:** Sign up at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas), create a free tier cluster, a database user, and whitelist your IP address.
2.  **Get Your Connection String:** From your Atlas cluster dashboard, click "Connect", select "Drivers", choose "Node.js", and copy the connection string. Replace `<username>`, `<password>`, and optionally `<database-name>`.
3.  **Update Your `.env` File:** Replace the `MONGO_URI` in your `back/.env` file with your Atlas connection string.

Start the backend server:

```bash
node server.js
```
The backend server will run on `http://localhost:3000`.

### 3. Frontend Setup and Launch

Open a *new terminal*, navigate to the `front` directory, install dependencies, and start the development server.

```bash
cd ../front
npm install
npm start
```
The frontend application will typically open in your browser at `http://localhost:4200`.

## How to Use the Application

The UI is divided into three main sections: **Users**, **Entities**, and **User-Entities**.

**A. Users Section:**
-   **Create User:** Use the form to enter a `Username`, `Email`, and `Password`. Click "Create".
-   **Edit User:** Click "Edit" next to a user in the list. The form will pre-fill. Modify details and click "Update".
-   **Delete User:** Click "Delete" next to a user.
-   **View Users List:** Click the chevron button in the "Users" card header to toggle the visibility of the user list.

**B. Entities Section:**
-   **Create Entity:** Use the form to enter a `Name`. Click "Create".
-   **Edit Entity:** Click "Edit" next to an entity. The form will pre-fill. Modify details and click "Update".
-   **Delete Entity:** Click "Delete" next to an entity.
-   **View Entities List:** Click the chevron button in the "Entities" card header to toggle the visibility of the entity list.

**C. User-Entities Section:**
-   **Create User-Entity:** Use the form to select a `User` and an `Entity` from the dropdowns. Click "Create".
-   **Edit User-Entity:** Click "Edit" next to a user-entity relationship. The form will pre-fill. Select new User/Entity if needed and click "Update".
-   **Delete User-Entity:** Click "Delete" next to a user-entity relationship.
-   **View User-Entities List:** Click the chevron button in the "User-Entities" card header to toggle the visibility of the user-entity list.

Success messages will appear as toast notifications at the top-right of the screen for successful operations.
