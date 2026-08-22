import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

// {
//     username: "gourab",
//     email: "xyz@gmail.com",
//   }

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({});
  return (
    // <AuthContext.Provider
    //   value={{
    //     username: "gourab",
    //     email: "xyz@gmail.com",
    //   }}
    // >
    //   {children}
    // </AuthContext.Provider>

    <AuthContext.Provider value={{ auth: auth, setAuth: setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;

// we are rendering App component here...
// in the main.jsx file we are rendering AuthProvider component and
// to render the App component, we are rendering it here inside of AuthProvider component...
// because App is a child of AuthProvider..
// child prop style implemented...

// ! in this file what are you witnessing, is a Provider component...

// * we basically keep the data in state...

// if there is no data in obj, inside of useState(),
// that means user is not logged in.
// to mimic that, we can do something like,
// the BasicDetail component only gonna show, when the Auth has username...
