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
