import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function RequireAuth({ children }) {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const location = useLocation();
  // console.log(location);

  if (isLoggedIn) {
    return children;
  }
  return (
    <Navigate
      to="/login"
      replace
      state={{
        previousPath: location.pathname,
      }}
    />
  );
}

export default RequireAuth;

/*
useLocation() ---> this will return me an object...

inside of this obj, we can see the path from where ther user is coming...
so we can pass the path to Login... 

---
state={{
        previousPath: location.pathname,
      }}

that's how we can do it...
---





*/
