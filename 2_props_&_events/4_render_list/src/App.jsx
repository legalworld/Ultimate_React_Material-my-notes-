import User from "./components/User";

const users = [
  { id: 1, firstName: "Gourab", lastName: "Dutta" },
  { id: 2, firstName: "John", lastName: "Doe" },
  { id: 3, firstName: "Elon", lastName: "Musk" },
  { id: 4, firstName: "Brock", lastName: "Lesnar" },
  { id: 5, firstName: "Roman", lastName: "Range" },
];

function App() {
  return (
    <div className="App">
      {/* <User firstName={users[0].firstName} lastName={users[0].lastName} />
      <User firstName={users[1].firstName} lastName={users[1].lastName} />
      <User firstName={users[2].firstName} lastName={users[2].lastName} />
      <User firstName={users[3].firstName} lastName={users[3].lastName} />
      <User firstName={users[4].firstName} lastName={users[4].lastName} /> */}

      {/* using map method to render list items */}

      {/* {users.map((user) => {
        return <User firstName={user.firstName} lastName={user.lastName} />;
      })} */}

      {/* or  */}

      {users.map((user) => (
        <User
          firstName={user.firstName}
          lastName={user.lastName}
          key={user.id}
        />
      ))}

      {/* or, if you want to pass all the props to another component, then use spread operator.*/}

      {/* {users.map((user) => (
        <User {...user} />
      ))} */}
    </div>
  );
}

export default App;

/*
maybe we have a list, and inside of that list, there is a lot of
data. and we want to show that data on the UI.
so how to do it ???
==>
to achieve that we gonna use an array method called map.  

so as you can see the code above, we are doing a heavy work by repeatedly callin the User component.
but we can make it easier with loops, where we gonna iterate to show the list in the UI.

because see, common sense tells us that if there where millions of users in that list,
it wouldn't make any sense to call the component that many amount of time manually.  

you only can use map method. you can't use for loop or anything else...
because we are using JSX Syntax, and here we only can use map method...

map method toto bar cholbe, jota element ache array te.

when you use the spread operator version, then in the components tab you will see an extra prop called id.
cause in this case we are sending all the props .

*/

/*

we are consistently getting this error--->

---

Each child in a list should have a unique "key" prop.

---

what is this ?

==>

In React, when you render a list using `.map()`, **every element must have a unique `key` prop**.

**Why?**

* React uses the `key` to identify which item is which.
* It helps React update only the changed items instead of re-rendering the whole list.

❌ Without a key:

```jsx
users.map(user => <li>{user.name}</li>)
```

✅ With a key:

```jsx
users.map(user => (
  <li key={user.id}>{user.name}</li>
))
```

**Rule:** The `key` should be **unique among siblings** and **stable** (don't use the array index unless the list never changes).


*/

/*

Yes. If your data doesn't already have a unique ID, there are several common approaches.

### 1. `crypto.randomUUID()` (Best for modern apps)

Built into modern browsers and Node.js.

```js
const user = {
  id: crypto.randomUUID(),
  name: "Gourab"
};

console.log(user.id);
// Example: "8c5e7c52-5a65-4d9d-9d94-0fd3c4c0b2b"
```

This is the preferred way to generate unique IDs on the client.

---

### 2. `uuid` package (Very popular)

If you're using React or Node.js:

```bash
npm install uuid
```

```js
import { v4 as uuidv4 } from "uuid";

const user = {
  id: uuidv4(),
  name: "Gourab"
};
```

---

### 3. Database-generated IDs

If your data comes from a database (MongoDB, PostgreSQL, etc.), the database usually generates unique IDs automatically.

Example:

```js
[
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
]
```

or in MongoDB:

```js
{
  _id: "6890d8..."
}
```

---

### 4. Never generate a new key during every render

❌ Bad:

```jsx
<li key={crypto.randomUUID()}>{user.name}</li>
```

This creates a new key on every render, so React thinks every item is brand new.

✅ Good:

```js
const users = [
  { id: crypto.randomUUID(), name: "Alice" },
  { id: crypto.randomUUID(), name: "Bob" }
];
```

Then:

```jsx
users.map(user => (
  <li key={user.id}>{user.name}</li>
))
```

### Rule of thumb

* If the data already has an ID → use it.
* If you're creating the data yourself → generate an ID **once** when the object is created.
* Never generate a new ID inside the JSX during rendering.


*/
