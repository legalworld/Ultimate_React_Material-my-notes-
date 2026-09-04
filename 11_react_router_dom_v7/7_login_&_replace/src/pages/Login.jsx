import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={() => {
          setIsLoggedIn(true);
          navigate("/", { replace: true });
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;

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
