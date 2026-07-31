# (Q-1) Hey, I know what is parent component and children component in React, but what is parent props and children props in React? Tell me.

==>

Great question. The terms **parent component** and **child component** are about the **component hierarchy**, while **props** are just **data passed between components**. Let's separate them.

## 1. Parent Component

A parent component is the component that renders another component.

```jsx
function App() {
  return <Profile />;
}
```

Here:

- `App` → Parent component
- `Profile` → Child component

---

## 2. Child Component

The component being rendered.

```jsx
function Profile() {
  return <h1>Hello</h1>;
}
```

---

# What are Parent Props?

There is actually **no official React concept called "parent props."**

Sometimes people say **parent props** to mean:

> The props that belong to the parent component.

Example:

```jsx
function App(props) {
  console.log(props.theme);
}
```

If another component renders `App` like this:

```jsx
<App theme="dark" />
```

then

```jsx
props.theme;
```

is simply a prop received by the **parent component** (`App`).

People may casually call these "parent props" because they belong to the parent component.

---

# What are Child Props?

These are much more common.

When a parent sends data to a child:

```jsx
function App() {
  return <Profile name="Gourab" age={22} />;
}
```

The child receives those props.

```jsx
function Profile(props) {
  console.log(props.name); // Gourab
  console.log(props.age); // 22

  return <h1>{props.name}</h1>;
}
```

Here,

```jsx
name="Gourab"
age={22}
```

are the props passed **to the child component**.

People often call them **child props** because the child receives them.

---

# Visual Diagram

```
          Parent Component
               App
                |
                | props
                | name="Gourab"
                | age={22}
                ▼
        Child Component
            Profile
```

The arrows always point **from parent to child**.

---

# Another Example

```jsx
function App() {
  const city = "Delhi";

  return <User city={city} />;
}

function User(props) {
  return <h2>{props.city}</h2>;
}
```

Flow:

```
App
 ├── city = "Delhi"
 │
 └── passes city as a prop
            │
            ▼
         User
      props.city
```

---

# Don't Confuse `props.children`

There is one React feature that beginners often confuse with "children props."

Consider this:

```jsx
function App() {
  return (
    <Card>
      <h1>Hello</h1>
      <button>Click Me</button>
    </Card>
  );
}
```

Notice that nothing is passed like

```jsx
<Card title="Hello" />
```

Instead, the elements are written **between** the opening and closing tags of `Card`.

React automatically puts everything between those tags into a special prop called `children`.

```jsx
function Card(props) {
  return <div>{props.children}</div>;
}
```

Here,

```jsx
props.children;
```

contains:

```jsx
<>
  <h1>Hello</h1>
  <button>Click Me</button>
</>
```

So `children` is a **special prop provided by React**.

---

## Summary

- **Parent component** → renders another component.
- **Child component** → is rendered by a parent.
- **Props** → data passed from parent to child.
- **"Parent props"** → not an official React term; sometimes used informally to mean the props received by the parent component.
- **"Child props"** → the props passed from the parent and received by the child.
- **`props.children`** → a special prop that contains whatever is placed between a component's opening and closing tags.

The key rule to remember is:

> **Props flow one way: Parent → Child.** A child cannot directly modify the props it receives; if data needs to flow back up, the parent passes a callback function as a prop for the child to call.

---

# (Q-2)
