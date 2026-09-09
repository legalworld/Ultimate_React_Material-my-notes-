import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";
function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  const [searchParams, setSearchParams] = useSearchParams();
  const previousPath = searchParams.get("redirectTo") || "/";
  console.log(previousPath);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate(previousPath, { replace: true });
    }
  }, [isLoggedIn]);

  return (
    <div>
      <h1>Login Page</h1>
      <button
        onClick={() => {
          setIsLoggedIn(true);
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
