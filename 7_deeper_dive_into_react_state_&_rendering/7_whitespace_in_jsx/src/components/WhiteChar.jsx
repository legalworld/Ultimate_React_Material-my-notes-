import React from "react";

function WhiteChar() {
  return (
    <h2>
      <span style={{ color: "purple" }}>Lorem</span> ipsum dolor sit amet
      consectetur, adipisicing elit. Sit omnis a animi aperiam vero porro
      explicabo nobis iusto harum, at quis adipisci qui temporibus eligendi
      doloribus placeat tempora minus tenetur!
    </h2>
  );
}

export default WhiteChar;

/*

In React, **whitespace characters** are spaces, tabs, and line breaks that appear between text or JSX elements. React has some specific behavior around them that is worth understanding.

### 1. Normal spaces in JSX

For example:

```jsx
<p>Hello World</p>
```

There is one space between `Hello` and `World`, so the browser displays:

**Hello World**

But JSX formatting can sometimes be surprising:

```jsx
<p>
  Hello
  World
</p>
```

React doesn't necessarily preserve that line break/indentation as visible spaces in the way you might expect. You generally shouldn't rely on JSX formatting to create meaningful whitespace.

---

### 2. Space between two JSX elements

This is a common situation:

```jsx
<p>
  Hello
  <strong>Gourab</strong>
</p>
```

You might expect:

**Hello Gourab**

But you can end up with:

**HelloGourab**

If you specifically need a space, you can write:

```jsx
<p>
  Hello{" "}
  <strong>Gourab</strong>
</p>
```

Here:

```jsx
{" "}
```

means **"insert a space character here."**

So the result is:

**Hello Gourab**

---

### 3. Why `{" "}`?

Remember that JSX is essentially JavaScript syntax mixed with HTML-like syntax.

Inside `{ }`, you can put a JavaScript expression:

```jsx
{" "}
```

The expression is simply a string containing one space:

```js
" "
```

So:

```jsx
Hello{" "}World
```

is essentially telling React:

> Render `"Hello"`, then render `" "`, then render `"World"`.

---

### 4. `&nbsp;`

You may also see:

```jsx
Hello&nbsp;World
```

`&nbsp;` means **non-breaking space**.

Unlike a normal space, the browser won't normally use that space as a place to break the line.

For example:

```jsx
<p>Price:&nbsp;$100</p>
```

will keep `Price:` and `$100` together.

In React JSX, HTML entities such as `&nbsp;` can be used directly.

---

### 5. Important distinction

These are **not exactly the same**:

```jsx
{" "}
```

and

```jsx
&nbsp;
```

`{" "}` → normal space character.

`&nbsp;` → non-breaking space.

For ordinary spacing between JSX elements, prefer:

```jsx
{" "}
```

For example:

```jsx
<p>
  I love{" "}
  <strong>React</strong>
</p>
```

### General rule

Think of it like this:

```text
Normal text spacing       → just write a normal space
JSX elements need spacing → {" "}
Need non-breaking space   → &nbsp;
```

And one important thing: **CSS should usually handle layout spacing** (`margin`, `gap`, `padding`) rather than adding lots of whitespace characters manually. `{" "}` is mainly useful when the space is actually part of the **text content**.


*/
