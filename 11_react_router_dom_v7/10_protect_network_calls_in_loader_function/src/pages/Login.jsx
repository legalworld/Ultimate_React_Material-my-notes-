import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
function Login() {
  const { setIsLoggedIn } = useAuth();
  const location = useLocation();

  const previousPath = location.state?.previousPath || "/";
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={() => {
          setIsLoggedIn(true);

          navigate(previousPath, { replace: true });
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
