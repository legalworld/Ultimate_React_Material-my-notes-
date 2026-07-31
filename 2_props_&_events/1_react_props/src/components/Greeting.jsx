// you can write props, xyz, anything...
// if i don't write props in the function parameter then also u can check the props in the components tab(provided by react dev tools) of browser dev tools.
// but you can't log in the browser console if u don't pass the props in the function parameter...
function Greeting(props) {
  // console.log(props);
  // console.log(props.firstName);

  // another way
  const hobby = props.hobby;

  // props destructuring ...
  const { dream, age, users = [] } = props;
  const firstUser = users[0] ?? "No user";

  return (
    <h1>
      His name is {props.firstName} {props.lastName} and his Hobby is {hobby},
      and Dream is {dream} and his age is {age},,,,,{firstUser}
    </h1>
  );
}

export default Greeting;

// babel transpile jsx to react element, that's why we need to import react.
// but after react v17, u don't need to explicitly import it. by default it gets imported...

// props is a object, and firstName is the property...

// props are read-only, you can't change it. like u are passing the props and then changing the value in another file, that's not gonna happen...
// state can be changed in react for obvious reasons... cause state itself means "data which changes over time by any factor or none."

// you have to remember everything with it's meaning okay ...

/* 

you can also finish the work using parameter destructuring--->

function Greeting({firstName, lastName, hobby, dream, age}) {

  return (
    <h1>
      His name is {firstName} {lastName} and his Hobby is {hobby},
      and Dream is {dream} and his age is {age}
    </h1>
  );
}

export default Greeting;


*/

/*

## Step 4: What does `??` mean?

`??` is called the **nullish coalescing operator**.

It means

> "If the value on the left is `null` or `undefined`, use the value on the right."

Example

```javascript
undefined ?? "Hello"
```

↓

```javascript
"Hello"
```

```javascript
null ?? "Hello"
```

↓

```javascript
"Hello"
```

```javascript
"Alice" ?? "Hello"
```

↓

```javascript
"Alice"
```

---

## Step 5: Why not use `||`?

Many beginners write

```javascript
const firstUser = users[0] || "No user";
```

For strings, this often works.

But `||` treats **any falsy value** as missing.

Example

```javascript
0 || 100
```

returns

```javascript
100
```

even though `0` is a valid value.

Whereas

```javascript
0 ?? 100
```

returns

```javascript
0
```

because `0` is **not** `null` or `undefined`.

---

## Step 6: So is `users[0]` wrong?

Not at all.

You could simply write

```javascript
const firstUser = users[0];
```

if you're okay with getting

```javascript
undefined
```

when the array is empty.

The author wrote

```javascript
const firstUser = users[0] ?? "No user";
```

because they wanted a **default message** instead of `undefined`.

---

## Mental Model

Think of it like this:

```text
users
  │
  ▼
["Alice", "Bob"]
  │
users[0]
  │
  ▼
"Alice"
```

or

```text
users
  │
  ▼
[]
  │
users[0]
  │
  ▼
undefined
  │
  ▼
?? "No user"
  │
  ▼
"No user"
```

So the `?? "No user"` part isn't needed to **access** the first element—it simply provides a more meaningful fallback when there isn't one.




*/
