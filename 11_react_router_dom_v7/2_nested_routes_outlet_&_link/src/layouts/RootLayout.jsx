import { Outlet, Link } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <h1>Nav</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <main>
        <h1>Main Content</h1>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;

/*
after all of these, you will see navigation bar at every page...
notice, at every page only navigation bar, but not the pages content...
why ?
==> in the RootLayout component, we have written that what are the things that 
going to be shown in the parent. but we haven't tell here, where our
childs going to be render !!!... 
now to resolve this issue, what we have to do is, we have to 
tell. we have import the Outlet component here...
Outlet component will render the child routes...

when you call the Outlet component, the pages content will be shown at that very place where the component has been called.
and the issue is now resolved...
*/

// ! Outlet renders child Route...

/*
now we want to make the navigation bar working,
and for that we usually use anchor tag...
like---> 
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
        </ul>

    and that's gonna work completely fine...
    but, the page will be re-fresh, everytime you click on the link...    

    we don't want it to be re-fresh everytime...
    cause we have content of that pages available...

    we just have to change the component, not re-fresh...
    and for that we use Link...

*/

/*

if you inspect, then you will see anchor tags only...
here in react we just gave the control to Link Component...

so if you style all the anchor tag, it will also be applied to Link tag...

*/
