import { Outlet, NavLink } from "react-router-dom";
import styles from "./RootLayout.module.css";

function RootLayout() {
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
        </ul>
      </nav>
      <hr />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;

/*
i showed you before that this NavLink component is internally is a anchor tag...

now if i use NavLink instead of Link, then what happens ???
==>
when you click on a list, it's anchor tag gonna receive "active" class name...
and when you click on another list, the previous list's "active" class removes, and new list receives the active class...

now what is the benefit ?
==> one benefit can be, if you have style with .active name in a css file,
the style going to apply in the element which holding the class name at that very moment...

*/

/*

now if you want to give class name on your own, 
then what you have to do is--->

<NavLink to="/" className={(obj)=>{
   return obj.isActive ? "activeNav" : null
  }}>Home</NavLink>

if you are not doing it, then by default active class will be given by NavLink...
and this callback thing only possible in case of NavLink. not Link...  

inside of obj, you have isActive property, that's why you can do this stuff...

you can destructure obj.isActive as well, one of the code has it,
so take a look...


*/
