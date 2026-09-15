# (Q-1) why react does not automatically does the memo function's work ???

==>

React does not automatically do the work of `memo()` because React cannot always know whether re-rendering a component is unnecessary or whether the component's rendering has important side effects.

Let's understand this from the beginning.

## 1. What happens without `memo()`?

Suppose you have a parent component and a child component.

JavaScript

```
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      <Child />
    </>
  );
}

function Child() {
  console.log("Child rendered");

  return <h1>Hello</h1>;
}
```

When you click the button:

1. `count` changes.

2. `Parent` renders again.

3. React encounters `<Child />` again.

4. `Child` renders again.

Even though `Child` does not depend on `count`, React normally does not automatically skip its render.

## 2. What does `memo()` do?

JavaScript

```
const Child = memo(function Child() {
  console.log("Child rendered");

  return <h1>Hello</h1>;
});
```

Now, when the parent re-renders, React checks whether the child's props have changed.

If the props have not changed, React can skip calling the child component again.

The result:

### Without memo vs. with memo

Without memo

Parent updates

Child renders

With memo

Parent updates

Props comparison

Props unchanged → skip

## 3. Why doesn't React do this automatically?

### Reason 1: Rendering is not always expensive

Consider:

JavaScript

```
function Child() {
  return <h1>Hello</h1>;
}
```

This component is extremely cheap to execute. Adding a props comparison, tracking, and maintaining memoization logic may not provide any meaningful benefit.

React generally prioritizes a simple rendering model rather than adding comparisons everywhere.

### Reason 2: Comparing props also costs time

Suppose a component receives 20 props.

React would need to compare those props every time the parent renders to determine whether the child can be skipped.

For a small component, this comparison might cost more than simply rendering it.

Also, `memo()` normally compares props using shallow comparison, not a deep comparison of every nested object.

### Reason 3: React cannot assume that every component is safe to skip

Consider this component:

JavaScript

```
function Child() {
  console.log("Rendering child");

  return <h1>Hello</h1>;
}
```

The `console.log()` is a side effect during rendering. If React skipped the render, the log would not happen.

More importantly, components can depend on context, state, and other rendering-related behavior. Automatically skipping them would require React to account for all of those dependencies.

Important: Render functions should be pure. React does not promise to execute them on every update, and you should not rely on rendering side effects.

### Reason 4: Props are not the only reason a component renders

Even a memoized component can render when its own state changes or when a context it uses changes.

JavaScript

```
const Child = memo(function Child() {
  const [value, setValue] = useState(0);

  return (
    <button onClick={() => setValue(value + 1)}>
      {value}
    </button>
  );
});
```

Here, `memo()` cannot prevent the child from rendering when its own state changes.

## 4. Why not just make every component memoized?

You might think:

> If memoization can skip unnecessary work, why not apply it to every component automatically?

Because memoization is not free.

Imagine this:

JavaScript

```
const Child = memo(function Child({ user }) {
  return <h1>{user.name}</h1>;
});
```

Now consider:

JavaScript

```
<Child user={{ name: "Gourab" }} />
```

Every time the parent renders, a new object is created:

JavaScript

```
{ name: "Gourab" }
```

Even though the contents are identical, the object has a different reference.

So the memoized component may still render.

In other words, React cannot simply say, "The data looks the same." It must determine whether the props are equal according to its comparison rules.

## 5. The modern React perspective

In newer React setups, the React Compiler can automatically optimize some components and reduce the need to manually write `memo()`, `useMemo()`, and `useCallback()`.

However, that is a compiler-based optimization, not the default behavior of ordinary React rendering. It also does not mean every component can always be skipped.

## The mental model to remember

React's normal behavior is:

> "The parent updated, so I will determine what needs to be rendered again."

`memo()` changes the behavior to:

> "The parent updated. Let me check whether this child's inputs changed before rendering it again."

React does not automatically do this for every component because rendering is the default, while skipping renders is an optimization that has costs and conditions.

---

# (Q-2)
