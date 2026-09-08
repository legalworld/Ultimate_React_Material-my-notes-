import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const location = useLocation();
  // console.log("login page: ", location);
  const previousPath = location.state?.previousPath || "/";
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={() => {
          setIsLoggedIn(true);
          // navigate("/", { replace: true });
          navigate(previousPath, { replace: true });
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;

/*

The `?.` in:

```js
const previousPath = location.state?.previousPath || "/";
```

is called **optional chaining**.

### What problem does it solve?

Suppose `location.state` might be `undefined`.

If you wrote:

```js
location.state.previousPath
```

and `location.state` is `undefined`, JavaScript would throw:

```text
Cannot read properties of undefined
```

But with:

```js
location.state?.previousPath
```

JavaScript says:

> "If `location.state` exists, give me its `previousPath`; otherwise, just give me `undefined`."

So:

```js
location.state?.previousPath
```

is roughly equivalent to:

```js
location.state == null
  ? undefined
  : location.state.previousPath;
```

### Then what does `|| "/"` do?

The whole expression:

```js
const previousPath = location.state?.previousPath || "/";
```

works like this:

```text
location.state exists?
       ↓
      yes
       ↓
Does previousPath have a truthy value?
       ↓
      yes ───→ use previousPath
       │
      no
       ↓
     use "/"
```

For example:

```js
location.state = {
  previousPath: "/posts"
};
```

Then:

```js
location.state?.previousPath
// "/posts"

previousPath
// "/posts"
```

But if:

```js
location.state = undefined;
```

then:

```js
location.state?.previousPath
// undefined

previousPath
// "/"
```

### The important pattern to remember

Whenever you see:

```js
object?.property
```

think:

> **"Get `property` only if `object` exists; otherwise return `undefined` instead of throwing an error."**

And it can go deeper:

```js
user?.address?.city
```

means:

```text
Does user exist?
   ↓
Does address exist?
   ↓
Give me city
```

This is especially common in React because props, state, API responses, or React Router state may not exist yet.


*/

/*

useNavigate() will return us a function, and we can 
store it inside of a variable...

*/

/*

In React Router:

```js
navigate("/", { replace: true });
```

There are **two arguments** here:

```js
navigate(path, options)
```

### 1. `"/"` — where to navigate

This tells React Router:

> Go to the root/home route.

### 2. `{ replace: true }` — what to do with browser history

This is the important part.

Normally:

```js
navigate("/");
```

adds a **new entry** to the browser's history.

For example:

```text
/login → /dashboard → /
```

If you are currently on `/dashboard` and call:

```js
navigate("/");
```

the browser history becomes:

```text
/login → /dashboard → /
                         ↑ current
```

So if the user presses **Back**, they can return to `/dashboard`.

---

With:

```js
navigate("/", { replace: true });
```

React Router **replaces the current history entry** instead of adding a new one:

```text
/login → /
          ↑ current
```

Now pressing **Back** goes to `/login`, **not `/dashboard`**.

### Why is this useful?

A common example is after login:

```js
navigate("/dashboard", { replace: true });
```

You don't usually want:

```text
/login → /dashboard
```

where pressing Back takes the user back to the login page.

Instead, `replace: true` effectively says:

> **"Take me there, but don't keep my current page as a history entry."**

So remember the general idea:

```js
navigate("/somewhere", { replace: true });
                         // ↑ replace current history entry
```

Whereas:

```js
navigate("/somewhere");
```

means:

> **Add a new history entry.**




*/
