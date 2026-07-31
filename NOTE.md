# forEach, map, filter, reduce, sort, find, every, some, fill, splice

# (Q-1) Hey, I want to learn Redux, but everywhere people teaching Redux with React, but I want to learn React with pure HTML, CSS, and JavaScript.

==>

Got it — you want to **understand Redux as a standalone concept first**, without mixing it with React.
Perfect approach. Redux is **not tied to React** at all. It’s just a **state management library** for JavaScript. React only uses it through bindings.

Here is your clean roadmap to learn Redux **using ONLY HTML, CSS, and JavaScript** — no React.

---

# ✅ **1. Understand What Redux Actually Is**

Redux gives you:

### **1. A single store**

Holds your entire application state in one place.

### **2. Actions**

Plain JavaScript objects that describe _what happened_.

### **3. Reducers**

Pure functions that take the current state + action and return a new state.

### **4. Dispatch()**

How you send an action to the store.

### **5. subscribe()**

Lets you run a function whenever the state changes.

---

# ✅ **2. Learn Redux With a Simple Project (WITHOUT REACT)**

You should build 2–3 tiny vanilla JavaScript apps using Redux.

### I will give you:

### ✔ Project 1 → **Todo App (Vanilla JS + Redux)**

### ✔ Project 2 → **Counter App (Vanilla JS + Redux)**

### ✔ Project 3 → **Theme Switcher (Vanilla JS + Redux)**

After this, React Redux will be super easy.

---

# 🚀 **First Project: Vanilla Redux Counter App**

## 📌 HTML

```html
<div id="app">
  <h1>Counter: <span id="count"></span></h1>
  <button id="increment">+</button>
  <button id="decrement">-</button>
  <button id="reset">Reset</button>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/redux/4.2.1/redux.min.js"></script>
<script src="app.js"></script>
```

---

## 📌 JavaScript (app.js)

```javascript
// 1️⃣ Initial State
const initialState = { count: 0 };

// 2️⃣ Reducer
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

// 3️⃣ Create Store
const store = Redux.createStore(counterReducer);

// 4️⃣ Update UI whenever state changes
store.subscribe(() => {
  document.getElementById("count").textContent = store.getState().count;
});

// Initial UI render
document.getElementById("count").textContent = store.getState().count;

// 5️⃣ Dispatch actions on button clicks
document.getElementById("increment").onclick = () =>
  store.dispatch({ type: "INCREMENT" });
document.getElementById("decrement").onclick = () =>
  store.dispatch({ type: "DECREMENT" });
document.getElementById("reset").onclick = () =>
  store.dispatch({ type: "RESET" });
```

---

# 🎉 What You Just Learned (Very Important)

| Concept       | Where You Used It                  |
| ------------- | ---------------------------------- |
| **Store**     | `createStore(counterReducer)`      |
| **Action**    | `{ type: "INCREMENT" }`            |
| **Reducer**   | `function counterReducer()`        |
| **Dispatch**  | `store.dispatch(...)`              |
| **Subscribe** | `store.subscribe(() => update UI)` |

This is REAL Redux.

No React.

---

# 🚀 Next Step

If you want, I can now give you:

### ✔ Full Todo App (HTML + CSS + JS + Redux)

— add
— delete
— toggle complete
— filter active/completed

### ✔ And then the **same Todo App using React + Redux**

So you can compare side-by-side.

---

Just tell me:

**“Give me the Todo App with Redux.”**

---

# (Q-2) Write the same counter app with pure vanilla JS this time. Previously you write it with vanilla Redux, now just vanilla JavaScript.

==>

Here is the **same counter app**, but this time **NO Redux at all** — only **pure vanilla JavaScript**.

Simple, clean, and exactly the same UI/behaviour.

---

# ✅ **Counter App — Pure HTML, CSS & JavaScript (NO REDUX)**

## 📌 **HTML**

```html
<div id="app">
  <h1>Counter: <span id="count"></span></h1>
  <button id="increment">+</button>
  <button id="decrement">-</button>
  <button id="reset">Reset</button>
</div>

<script src="app.js"></script>
```

---

## 📌 **JavaScript (app.js)**

```javascript
// 1️⃣ State (you manage it manually)
let count = 0;

// 2️⃣ Function to update UI
function render() {
  document.getElementById("count").textContent = count;
}

// 3️⃣ Event listeners
document.getElementById("increment").onclick = () => {
  count++;
  render();
};

document.getElementById("decrement").onclick = () => {
  count--;
  render();
};

document.getElementById("reset").onclick = () => {
  count = 0;
  render();
};

// Initial UI render
render();
```

---

# 🧠 **Vanilla JS vs Redux — What Changed?**

| Feature                 | Vanilla JS                   | Redux Version                   |
| ----------------------- | ---------------------------- | ------------------------------- |
| Where state lives       | A variable → `let count = 0` | In a store → `store.getState()` |
| How state changes       | Direct mutation → `count++`  | Reducer returns new state       |
| UI update               | You manually call `render()` | Redux `subscribe()`             |
| Who manages everything? | You                          | Redux                           |

This is the **simplest possible version** of the same functionality.

---

If you want, I can now give you:

### 🔥 Todo App (Vanilla JS)

### 🔥 Todo App (Redux + Vanilla JS)

### 🔥 Todo App (React + Redux)

Just tell me **which one next**.

---

# (Q-3)
