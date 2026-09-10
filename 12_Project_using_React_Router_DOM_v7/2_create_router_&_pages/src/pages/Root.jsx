import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
function Root() {
  return (
    <nav>
      <Link to="/">Movie Search</Link>
      <Outlet />
    </nav>
  );
}

export default Root;
