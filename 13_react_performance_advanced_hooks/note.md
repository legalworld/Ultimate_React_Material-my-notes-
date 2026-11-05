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

# (Q-2) What is the difference between memo and useMemo in React performance?

==>

The difference between `React.memo()` and `useMemo()` is one of the most important concepts to understand when learning React performance optimization.

Although their names are similar, they solve two different performance problems.

- `React.memo()` memoizes a component.
- `useMemo()` memoizes a calculated value.

Let's understand both with examples.

# 1. First, understand the problem: unnecessary recalculations and re-renders

Imagine you have a parent component and a child component.

```
function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        Increment
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

What happens when you click Increment?

1. `count` changes.
2. Parent re-renders.
3. Child also re-renders.

But here's the question:

Does Child actually need to re-render?

Its props haven't changed. Its output is still Hello.

This is where `React.memo()` becomes useful.

# 2. React.memo(): Memoizing a component

`React.memo()` is a higher-order component (HOC).

It takes a component and returns a memoized version of that component.

### Without React.memo()

```
function Child() {
  console.log("Child rendered");

  return <h1>Hello</h1>;
}
```

Every time its parent re-renders, Child normally re-renders too.

### With React.memo()

```
const Child = React.memo(function Child() {
  console.log("Child rendered");

  return <h1>Hello</h1>;
});
```

Now React can skip rendering Child when its props haven't changed.

Let's understand the execution:

Parent component

count = 0

Click increment

Parent re-renders

Memoized Child

Props unchanged

Skip render

React compares the previous and next props using shallow comparison (Object.is for individual props).

Important: `React.memo()` only compares props by default. It doesn't prevent a component from re-rendering when its own state or consumed context changes.

### Example with props

```
import { memo, useState } from "react";

const Child = memo(function Child({ name }) {
  console.log("Child rendered");

  return <h1>Hello {name}</h1>;
});

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      <Child name="Gourab" />
    </>
  );
}
```

Here, when you increment count:

- Parent re-renders.
- Child receives the same `name` prop.
- React skips Child's re-render.

# 3. useMemo(): Memoizing a calculated value

Now let's understand a different problem.

Imagine you have a component that performs an expensive calculation.

```
function App() {
  const [count, setCount] = useState(0);

  const result = expensiveCalculation(1000000);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      <h1>{result}</h1>
    </>
  );
}
```

What's the problem?

Every time `count` changes, the component re-renders.

Consequently:

```
expensiveCalculation(1000000);
```

runs again.

Even though its input hasn't changed!

We can solve this using `useMemo()`.

### With useMemo()

```
function App() {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    return expensiveCalculation(1000000);
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        {count}
      </button>

      <h1>{result}</h1>
    </>
  );
}
```

Look at this part:

```
const result = useMemo(() => {
  return expensiveCalculation(1000000);
}, []);
```

`useMemo()` accepts two arguments:

1. A calculation function.
2. A dependency array.

Because the dependency array is empty, React reuses the cached result across subsequent renders of this component instance.

The expensive calculation doesn't need to run again just because `count` changes.

# 4. How does the dependency array work?

This is particularly important.

Consider:

```
const result = useMemo(() => {
  return expensiveCalculation(count);
}, [count]);
```

Here, React remembers the previous value of `count`.

Let's say:

| Render | count | Calculation |
| ------ | ----- | ----------- |
| First  | 0     | Executes    |
| Second | 1     | Executes    |
| Third  | 1     | Skipped     |
| Fourth | 2     | Executes    |
| Fifth  | 2     | Skipped     |

Why?

Because `useMemo()` checks whether its dependencies have changed.

- If dependencies change, it recalculates.
- If dependencies remain the same, it reuses the cached value.

# 5. The fundamental difference

Let's compare them directly.

React.memo()

## Component

Prevents unnecessary component re-renders when props are unchanged.

Wraps a component.

useMemo()

## Value

Prevents unnecessary recalculation of an expensive value.

Wraps a calculation.

| Feature  | React.memo                      | useMemo                 |
| -------- | ------------------------------- | ----------------------- |
| Type     | HOC                             | Hook                    |
| Memoizes | Component rendering             | Calculation result      |
| Input    | Component + optional comparison | Function + dependencies |
| Returns  | Memoized component              | Cached value            |

# 6. One more important concept: useCallback()

Since you're learning React performance optimization, you should also understand `useCallback()`.

Consider this example:

```
function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Clicked");
  };

  return <Child onClick={handleClick} />;
}
```

Every time Parent renders, a new function is created:

```
const handleClick = () => {
  console.log("Clicked");
};
```

Even though the function looks identical, it has a different reference.

Therefore, if Child is wrapped in `React.memo()`, React sees that its `onClick` prop has changed and renders Child again.

You can solve this with `useCallback()`:

```
function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked");
  }, []);

  return <Child onClick={handleClick} />;
}
```

Now the function reference is preserved between renders (while its dependencies remain unchanged).

Here's how the three concepts fit together:

| React API       | What it remembers                  |
| --------------- | ---------------------------------- |
| `React.memo()`  | Component rendering based on props |
| `useMemo()`     | A calculated value                 |
| `useCallback()` | A function reference               |

# 7. A practical way to remember everything

Think about an e-commerce application.

Imagine you're building a product listing page.

- `React.memo()` can prevent an unchanged ProductCard from re-rendering when its parent updates.
- `useMemo()` can cache an expensive filtered or sorted product list.
- `useCallback()` can preserve an event-handler function passed to memoized child components.

One final warning: Don't use memoization everywhere.

Memoization has its own costs, including dependency comparisons and memory usage. First identify an actual performance problem, then optimize it. React Compiler can also automatically optimize many components and values when enabled.

---

# (Q-3)
