import { Navigate, useNavigate } from "react-router-dom";
function RequireAuth({ children }) {
  const loggedIn = true;
  if (loggedIn) {
    return children;
  }
  return <Navigate to="/login" />;
}

export default RequireAuth;

// if loggedIn then return the post, which is the children of
// RequireAuth...

// otherwise, i need to re-direct the user to the Login page...
// and to do that, we need Navigate component & useNavigate hook from "react-router-dom"...

// when you have to return a component, then you use Navigate...
// and when you need to navigate from inside of the function functionally, then use useNavigate...
