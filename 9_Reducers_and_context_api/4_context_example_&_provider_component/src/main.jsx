import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createContext } from "react";
import App from "./App.jsx";
import AuthProvider from "./components/AuthProvider";
// export const AuthContext = createContext();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <AuthContext.Provider
      value={{
        username: "Gourab",
        email: "xyz@gmail.com",
      }}
    > */}

    <AuthProvider>
      <App />
    </AuthProvider>
    {/* </AuthContext.Provider> */}
  </StrictMode>,
);

/*

right now, we are talking about one context, in future we gonna talk
about multiple context...

*/
