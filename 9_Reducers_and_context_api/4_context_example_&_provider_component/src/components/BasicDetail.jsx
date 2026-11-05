import { useAuth } from "./AuthProvider";

function BasicDetail() {
  const { auth = {}, setAuth } = useAuth();
  const username = auth?.username ?? "Guest";
  const email = auth?.email ?? "Not available";

  return (
    <div>
      <h2>name: {username}</h2>
      <h2>email: {email}</h2>
      <button
        onClick={() => {
          setAuth({});
        }}
      >
        Logout
      </button>
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
