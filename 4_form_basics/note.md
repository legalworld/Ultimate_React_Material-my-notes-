# (Q-1) In React, function must be there where the state is, and you can call from wherever you want, but the function should be in the same place as the state, right?

==>

Yes — **if the function is responsible for changing a particular piece of state, the function that directly calls the state setter usually lives in the same component that owns that state.**

For example:

```jsx
function Parent() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  return <Child onIncrease={increaseCount} />;
}
```

Here:

- `Parent` **owns the state** → `count`
- `Parent` also owns the function that **changes that state** → `increaseCount`
- `Child` doesn't need to own the state.
- `Child` can **call the function** through props.

```jsx
function Child({ onIncrease }) {
  return <button onClick={onIncrease}>Increase</button>;
}
```

So the important rule is:

> **State lives in the component that owns it, and the function that directly updates that state normally lives there too. You can pass that function down to other components and call it from there.**

### Think of it like this

```text
Parent
│
├── state: count
│
├── function: increaseCount()
│       │
│       └── setCount(...)
│
└── Child
      │
      └── calls increaseCount()
```

One important correction: **the function doesn't have to be in the exact same place as the state in every possible design.** You can move state-changing logic into custom hooks, reducers, context, etc. But for normal React state with `useState`, **keeping the updater function in the state-owning component is the standard pattern.**

---

# (Q-2) In React, we have two kinds of forms. One is controlled form, one is uncontrolled form. Or is it controlled input or uncontrolled input? or components ? Can you just clarify?

==>

The most accurate terminology is **controlled input** and **uncontrolled input** — though you'll also hear **controlled form** and **uncontrolled form** when referring to an entire form.

### 1. Controlled input — the React state controls the input

```jsx
function Form() {
  const [name, setName] = useState("");

  return <input value={name} onChange={(e) => setName(e.target.value)} />;
}
```

Here:

```text
User types
   ↓
onChange
   ↓
setName()
   ↓
React state changes
   ↓
React re-renders
   ↓
value={name} controls the input
```

So **React state is the source of truth**.

We call this a **controlled input**.

If a form has several controlled inputs, we can casually call the whole thing a **controlled form**.

---

### 2. Uncontrolled input — the DOM controls the input

```jsx
function Form() {
  const nameRef = useRef();

  function handleSubmit() {
    console.log(nameRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameRef} />
      <button>Submit</button>
    </form>
  );
}
```

Notice that we aren't doing:

```jsx
value={name}
onChange={...}
```

Instead, the **DOM itself maintains the input's current value**.

We access it using `ref`.

So this is an **uncontrolled input**.

---

### So what terminology should you use?

| Term                       | Correct?        | Meaning                                                                  |
| -------------------------- | --------------- | ------------------------------------------------------------------------ |
| **Controlled input**       | ✅ Most precise | An individual input whose value is controlled by React state             |
| **Uncontrolled input**     | ✅ Most precise | An individual input whose value is maintained by the DOM                 |
| **Controlled form**        | ✅ Common       | A form primarily made of controlled inputs                               |
| **Uncontrolled form**      | ✅ Common       | A form primarily made of uncontrolled inputs                             |
| **Controlled component**   | ✅ Broader term | Any React component whose important value/state is controlled externally |
| **Uncontrolled component** | ✅ Broader term | A component that maintains its own internal state/DOM state              |

### The key distinction

Don't think:

> "React has two types of forms."

Think:

> **React has the concept of controlled and uncontrolled components/inputs. Forms can be built using either approach.**

For example, when you're learning React forms, **controlled input vs uncontrolled input** is the terminology I'd recommend using.

---

# (Q-3)
