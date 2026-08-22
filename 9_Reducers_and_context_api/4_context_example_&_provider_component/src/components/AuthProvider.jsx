import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    username: "gourab",
    email: "xyz@gmail.com",
  });
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

// export function useAuth() {
//   return useContext(AuthContext);
// }

export default AuthProvider;

// we are rendering App component here...
// in the main.jsx file we are rendering AuthProvider component and
// to render the App component, we are rendering it here inside of AuthProvider component...
// because App is a child of AuthProvider..
// child prop style implemented...

// ! in this file what are you witnessing, is a Provider component...

// * we basically keep the data in state...
