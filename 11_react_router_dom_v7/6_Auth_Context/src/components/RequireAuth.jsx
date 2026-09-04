import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function RequireAuth({ children }) {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  if (isLoggedIn) {
    return children;
  }
  return <Navigate to="/login" />;
}

export default RequireAuth;

/*
const loggedIn = true;

---> for this we usually use state. we don't use normal 
variable...

---

now, we gonna make a context, and inside of it we gonna store the info about
whether the user is loggedIn or not...
now why we gonna store it inside of the context ?
--> because, if user is loggedIn, then we gonna show the user a logOut Button...
if user is not loggedIn, then we gonna give the user Link for the logIn page...

we need that state in Navigation bar... and for that we gonna make context, and make our whole app wrap around the context...

*/
