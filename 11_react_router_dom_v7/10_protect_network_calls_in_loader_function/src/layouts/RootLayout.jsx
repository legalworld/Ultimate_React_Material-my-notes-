import { Outlet, NavLink } from "react-router-dom";
import styles from "./RootLayout.module.css";
import { useAuth } from "../context/AuthProvider";

function RootLayout() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  return (
    <div>
      <h1>Nav</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={(obj) => {
                return obj.isActive ? styles.activeNav : null;
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={(obj) => {
                return obj.isActive ? styles.activeNav : null;
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={(obj) => {
                return obj.isActive ? styles.activeNav : null;
              }}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              className={({ isActive }) => {
                return isActive ? styles.activeNav : null;
              }}
            >
              Posts
            </NavLink>
          </li>
          {!isLoggedIn && (
            <li>
              <NavLink
                to="login"
                className={({ isActive }) => {
                  return isActive ? styles.activeNav : null;
                }}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
        {isLoggedIn && (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        )}
      </nav>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
