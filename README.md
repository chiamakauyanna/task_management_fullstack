````markdown
# 📋 Task Manager Fullstack App

A fullstack task management application built with **React**, **Node.js**, and **PostgreSQL**. Users can create, update, and delete tasks through a sleek and responsive interface.

---

## 🌐 Live Demo

[🔗 Deployed frontend (if applicable)](https://your-frontend-url.com)  
[🔗 Deployed backend (if applicable)](https://your-backend-url.com)

---

## 🧾 Frontend

### ✨ Features

- Create, update, and delete tasks
- Responsive and clean UI
- Toast notifications for feedback
- Form validation and routing
- Built with reusable components and hooks

### 🛠️ Technologies

- React + TypeScript
- Tailwind CSS
- React Router
- Date-fns
- Axios

### 🚀 Getting Started

```bash
git clone https://github.com/chiamakauyanna/task-manager-fullstack.git
cd task-manager-fullstack
npm install
````

#### 🔐 Environment Variables

Create a `.env` file inside `backend/`:

```
VITE_API_URL=http://localhost:5000
```

#### ▶️ Run Development Server

```bash
npm run dev
```

App runs on: `http://localhost:5173`

### 📂 Folder Structure

```
client/
├── src/
│   ├── components/
│   ├── context/
│   ├── interfaces/
│   ├── pages/
│   ├── services/
│   └── main.tsx
├── public/
└── index.html
```

---

## 🧾 Backend

### ✨ Features

* RESTful API for managing tasks
* Full CRUD operations
* PostgreSQL database integration
* Modular structure using Express routers and controllers
* Environment variables for secure configuration

### 🛠️ Technologies

* Node.js + Express
* PostgreSQL
* pg (PostgreSQL client)
* dotenv
* CORS

### 🚀 Getting Started

```bash
cd task-manager-fullstack/server
npm install
```

#### 🔐 Environment Variables

Create a `.env` file inside `server/`:

```env
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=your_pg_username
DB_PASSWORD=your_pg_password
DB_NAME=your_db_name
```

#### 🧾 Create the Database

```sql
CREATE DATABASE your_db_name;

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  due_date DATE NOT NULL
);
```

#### ▶️ Start the Server

```bash
npm start
```

API will run at: `http://localhost:5000`

### 📂 Folder Structure

```
server/
├── controllers/
│   └── task.js
├── routes/
│   └── task.js
├── db/
│   └── index.js
├── .env
└── index.js
```

---

## 🧪 API Endpoints

| Method | Endpoint    | Description       |
| ------ | ----------- | ----------------- |
| GET    | /tasks      | Fetch all tasks   |
| GET    | /tasks/\:id | Fetch task by ID  |
| POST   | /tasks      | Create a new task |
| PUT    | /tasks/\:id | Update a task     |
| DELETE | /tasks/\:id | Delete a task     |

---

## 🔧 To-Do

* [ ] Add authentication (JWT)
* [ ] Add task priority or status
* [ ] Filter/sort tasks by date
* [ ] Deploy to cloud (Render, Railway, or Vercel)

---

## 📜 License

MIT License

---

## ✍️ Author

Built with ❤️ by [Chiamaka Uyanna](https://github.com/chiamakauyanna)

