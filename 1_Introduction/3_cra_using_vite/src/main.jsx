import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

function HelloWorld() {
  return <h1>i'm here</h1>;
}

createRoot(document.getElementById("root")).render(<HelloWorld />);

// this main.jsx file is actually our main file...

// if you are using vite, and your working file has jsx syntax then you have to save the file with .jsx extension...

// whereas in CRA, there is no such rules, you can end any file by .js file extension name...
