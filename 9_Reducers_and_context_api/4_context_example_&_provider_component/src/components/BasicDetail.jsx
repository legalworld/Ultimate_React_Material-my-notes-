import { useContext } from "react";
// import { AuthContext } from "../main";
import { AuthContext } from "./AuthProvider";
// import { useAuth } from "./AuthProvider";

function BasicDetail() {
  // const { username, email } = useContext(AuthContext);
  // const { username, email } = useAuth();
  const { auth } = useContext(AuthContext);

  return (
    <div>
      <h2>name: {auth.username}</h2>
      <h2>email: {auth.email}</h2>
    </div>
  );
  // return <h1>basic detail</h1>;
}

export default BasicDetail;

/*
whatever we are doing in BasicDetail.jsx file, we can
make it shorter...what you have to do is ---> 

* inside AuthProvider.jsx file, write a function outside of the component.

export function useAuth() {
  return useContext(AuthContext);
}
  and then inside ```BasicDetail.jsx```
  write--->
      import { useAuth } from "./AuthProvider";
      const { username, email } = useAuth();
  
  and that's it done...    





*/
