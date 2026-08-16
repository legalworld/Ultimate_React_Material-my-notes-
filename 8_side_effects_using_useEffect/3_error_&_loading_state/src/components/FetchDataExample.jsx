import { useEffect, useState } from "react";
import User from "./User";

// * correct URL
const URL = `https://jsonplaceholder.typicode.com/users`;

// * incorrect URL
// const URL = `https://jsonplaceholder.typicode.com/userss`;

function FetchDataExample() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  async function fetchData() {
    const response = await fetch(URL);
    if (!(response.status >= 200 && response.status <= 299)) {
      console.log(response);

      setIsError(true);
      setErrorMsg(`${response.status} Error`);
      setIsLoading(false);
      return;
    }
    const data = await response.json();
    setUsers(data);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <h1 style={{ marginLeft: "300px" }}>Loading ...</h1>;
  }

  if (isError) {
    return <h1 style={{ marginLeft: "300px" }}>{errorMsg}</h1>;
  }

  return (
    <div>
      <h1>
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </h1>
    </div>
  );
}

export default FetchDataExample;

/*


The `{...user}` is the **spread operator** in JSX. It spreads all properties of the `user` object as individual props to the `User` component.

**Example:**

If a `user` object looks like this:
```js
{
  id: 1,
  name: "John Doe",
  email: "john@example.com"
}
```

Then:
```jsx
<User {...user} />
```

Is equivalent to:
```jsx
<User id={1} name="John Doe" email="john@example.com" />
```

**Benefits:**
- **Concise**: You don't need to manually list every prop
- **Flexible**: If the `user` object has more properties, they're automatically passed to `User`
- **Clean**: Reduces repetitive code

So instead of writing:
```jsx
<User key={user.id} id={user.id} name={user.name} email={user.email} />
```

You can simply write:
```jsx
<User key={user.id} {...user} />
```








*/
