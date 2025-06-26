# 📚 Book Manager (Node.js REST API and Express)

A full-stack Book Manager web application that allows users to add, edit, delete, and view books using a RESTful API built with **Node.js and Express**, and a beautiful **Glassmorphism-based frontend UI** using **HTML, CSS, and JavaScript**.

---

## ✨ Features

- Add, edit, and delete books dynamically
- Glassmorphism-inspired UI design
- RESTful API (GET, POST, PUT, DELETE)
- Persistent ID-based book management
- Responsive layout
- Simple backend using in-memory array (no database required)

---

## 📁 Project Structure

```
Day-3---Task3/
│
├── public/
│ ├── index.html # Frontend HTML
│ ├── style.css # Glassmorphism styles
│ └── script.js # Frontend logic
│
├── index.js # Express backend server
├── package.json # Project metadata
└── README.md # Project documentation
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash 
git clone https://github.com/RishabhMunakhiya/Day-3---Task3
cd Day-3---Task3
 ```
### 2. Install Dependencies
``
npm install
``
### 3. Start the Server
```
node index.js

```
The server will run on:
```
http://localhost:3000
```
Open your browser and go to localhost:3000 to access the app.

---

###
| Method | Endpoint     | Description         |
| ------ | ------------ | ------------------- |
| GET    | `/books`     | Fetch all books     |
| POST   | `/books`     | Add a new book      |
| PUT    | `/books/:id` | Update a book by ID |
| DELETE | `/books/:id` | Delete a book by ID |

### GET 
![Screenshot 2025-06-26 180249](https://github.com/user-attachments/assets/869d76a8-393a-44a6-aea1-ea812650379d)
### POST
![Screenshot 2025-06-26 180440](https://github.com/user-attachments/assets/2499aa52-18bf-4c89-8514-88d69d8ad1b0)
### PUT
![Screenshot 2025-06-26 181007](https://github.com/user-attachments/assets/d0a0c41c-82c4-43d5-998f-4173d2bc1998)
### DELETE
![Screenshot 2025-06-26 181459](https://github.com/user-attachments/assets/26d89412-fd0f-46b7-bca5-5a060b1a0f03)


---

### 🧪 Manual Testing (Optional)

### Sample POST /books Body
```json
{
  "title": "1984",
  "author": "George Orwell"
}
```
You can use Postman or any REST client to test API endpoints separately.

---

### 💡 Technologies Used
- Frontend: HTML, CSS (Glassmorphism), JavaScript
- Backend: Node.js, Express
- Dev Tools: Postman (for testing), npm
  
---

### 🌈 Screenshots
![image](https://github.com/user-attachments/assets/f5a21f5b-275e-4d3f-b44b-2afb3a69ef5e)
Full Glass UI with dynamic book list and stylish hover animations

---

### ✅ Setup Checklist
- Initialized project with npm init
- Installed Express (npm install express)
- Setup basic Express server on port 3000
- Created in-memory array to store books
- Implemented CRUD operations (GET, POST, PUT, DELETE)
- Tested endpoints using Postman
- Built interactive frontend with HTML, CSS, JS
- Applied modern glassmorphism UI design

---

### 🙌 Acknowledgements

- Inspired by modern UI trends (Glassmorphism)

- Built with ❤️ using Node.js and Express


