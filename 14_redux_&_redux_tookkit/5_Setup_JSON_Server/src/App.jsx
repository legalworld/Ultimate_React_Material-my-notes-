import React from "react";

function App() {
  return (
    <>
      <h1>hello world</h1>
    </>
  );
}

export default App;

/*



## Revision Notes: JSON Server Setup in this project

This directory is a small React + Vite app prepared to work with a local REST API using JSON Server. The purpose is to simulate a backend without needing a real server, so you can practice fetching, storing, and updating data while learning Redux Toolkit.

You can see the project setup in:
- `5_Setup_JSON_Server`
- `package.json`
- `db.json`

---

### 1) What this folder is teaching

This folder focuses on:

- Setting up a mock backend using JSON Server
- Running a local API at a specific port
- Preparing a frontend app to consume API data
- Understanding the flow:
  - frontend app
  - fetch data from local JSON API
  - then use Redux Toolkit slices and async logic

This is a common first step before building real Redux-based CRUD apps.

---

### 2) Why JSON Server is useful

JSON Server lets you create a fake REST API from a JSON file.  
Instead of writing an Express backend, you just create a file like this:

- `db.json`

It contains data like:

```json
{
  "todos": [
    { "id": 1, "title": "book tickets", "completed": true },
    { "id": 2, "title": "book return tickets", "completed": false }
  ]
}
```

Then JSON Server exposes endpoints like:

- `GET /todos`
- `POST /todos`
- `PATCH /todos/:id`
- `DELETE /todos/:id`

That means your React app can behave like it is talking to a real API.

---

### 3) Important script from `package.json`

The project includes this script:

```json
"dev:server": "npx json-server --watch db.json --port 8001"
```

This means:

- watch the JSON file for changes
- run the server on port `8001`
- serve API data from the local database

This is important because Redux apps usually need a backend endpoint to fetch data from.

---

### 4) Project structure

The main frontend files are:

- `App.jsx`
- `main.jsx`

Right now, the app is just a simple starter screen:

```jsx
<h1>hello world</h1>
```

That means this folder is mostly about backend setup and preparing the project for the next Redux lessons, not about complex UI logic yet.

---

### 5) How this connects to Redux Toolkit

Once the JSON Server is running, the next step is usually:

1. Create a Redux slice
2. Use `createAsyncThunk`
3. `fetch` data from the JSON Server
4. Dispatch actions like:
   - `todos/fetchPending`
   - `todos/fetchFulfilled`
   - `todos/fetchRejected`

Then the UI reads from Redux state instead of directly using `useState`.

So this folder is a preparation step for real Redux CRUD projects.

---

### 6) Core learning outcomes

By the end of this module, you should understand:

- what JSON Server is
- why it is used in frontend learning projects
- how to run a mock API locally
- how to connect a React app to a fake backend
- how this setup fits into Redux Toolkit applications

---

### 7) Quick revision summary

This directory teaches the idea of:

- local API simulation
- fake backend for frontend testing
- using REST endpoints from a JSON file
- preparing your app to work with Redux-driven data fetching

> In short: this folder is not about styling or advanced UI; it is about creating a realistic data layer so your React + Redux app can work like a real application.

If you want, I can also turn this into:
1. short exam-style notes,
2. a one-page cheatsheet,
3. or a step-by-step explanation of how to run and use this JSON Server project.


*/
