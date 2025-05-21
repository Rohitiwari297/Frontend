# 🍲 Food Blog App (React)

This is a full-stack **Food Recipe Management App** that allows users to perform **CRUD operations** (Create, Read, Update, Delete) on recipes. The frontend is built with **React.js**.

---

## 📁 Folder Structure (Frontend)

rc/
├── components/
│ ├── Footer.jsx
│ ├── MainNavigation.jsx
│ ├── Navbar.jsx
│ └── RecipeItem.jsx
├── Pages/
│ └── Home.jsx
├── App.css
└── App.jsx


---

## 🚀 Dependencies

```json
{
  "axios": "^1.9.0",
  "bcrypt": "^6.0.0",
  "jsonwebtoken": "^9.0.2",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.6.0"
}

Sure! Here's your finalized **`README.md`** content:

---

```markdown
# 🍲 Food Recipe CRUD App (React + Node.js + MongoDB)

This is a full-stack **Food Recipe Management App** that allows users to perform **CRUD operations** (Create, Read, Update, Delete) on recipes. The frontend is built with **React.js**, and the backend uses **Node.js**, **Express**, and **MongoDB**. Authentication is handled using **JWT** and **bcrypt**.

---

## 📁 Folder Structure (Frontend)
```

src/
├── components/
│   ├── Footer.jsx
│   ├── MainNavigation.jsx
│   ├── Navbar.jsx
│   └── RecipeItem.jsx
├── Pages/
│   └── Home.jsx
├── App.css
└── App.jsx

````

---

## 🚀 Dependencies

```json
{
  "axios": "^1.9.0",
  "bcrypt": "^6.0.0",
  "jsonwebtoken": "^9.0.2",
  "react": "^19.1.0",
  "react-dom": "^19.1.0",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.6.0"
}
````

---

## ✨ Features
* JWT-based user authentication
* Recipe CRUD functionality
* Protected routes
* Responsive UI using React
* Component-based folder structure

---

## 🛠 CRUD Operations

### ✅ 1. **Create a Recipe**

* Users fill out a form and submit recipe data
* Data is sent via `axios.post` to the backend
* Saved in MongoDB after user authentication

### 📖 2. **Read Recipes**

* Recipes are fetched using `axios.get`
* Displayed in `<Home />` using `<RecipeItem />` component
* Uses `loader` in React Router to preload data

### ✏️ 3. **Update a Recipe**

* User clicks "Edit", fills updated data
* Data sent via `axios.put` to backend
* Backend verifies and updates the document

### ❌ 4. **Delete a Recipe**

* User clicks "Delete" on a recipe card
* `axios.delete` request is sent to backend
* Recipe is removed from MongoDB

---

## 📦 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/food-recipe-crud.git
cd food-recipe-crud
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Project

```bash
npm run dev
```

> Make sure your backend server is also running and connected to MongoDB.

---

## 📚 Technologies Used

* **Frontend**: React.js, React Router DOM, Axios, React Icons

---

## 🙋‍♂️ Contact

For support, email: \[tripathirohit297@gmail.com]

---

```

---

Let me know if you'd like a downloadable version or want to include a backend setup section!
```
