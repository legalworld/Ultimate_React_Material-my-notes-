import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { useEffect } from "react";
function Login() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();

  // useSearchParams() returns an array...
  // * short way...
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("a"));
  // console.log(searchParams.get("b"));

  // !---------------------------------------
  // * long way
  // const location = useLocation();
  // console.log(location);
  // const url = location.search;
  // const searchParams = new URLSearchParams(url);
  // console.log(searchParams);
  // console.log(searchParams.get("a"));
  // console.log(searchParams.get("b"));
  // !---------------------------------------

  // const previousPath = location.state?.previousPath || "/";
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
