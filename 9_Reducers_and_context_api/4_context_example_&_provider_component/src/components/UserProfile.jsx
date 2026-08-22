import React from "react";
import BasicDetail from "./BasicDetail";
import { useAuth } from "./AuthProvider";
function UserProfile() {
  const { auth, setAuth } = useAuth();
  return (
    <>
      <h1>User Profile</h1>
      {auth.username ? (
        <BasicDetail />
      ) : (
        <button
          onClick={() => {
            setAuth({ username: "Gourab", email: "xyz@gmail.com" });
          }}
        >
          login
        </button>
      )}
    </>
  );
}

export default UserProfile;
