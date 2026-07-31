import React from "react";
import ReactDOM from "react-dom/client";

function Hello() {
  return <h1>hello world</h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(<Hello />);
// root.render(<Hello></Hello>);

// you can write JSX directly...
// root.render(<h1>hola</h1>);

// root.render(Hello());

// if you want warnings, you can write something like--
root.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
);
