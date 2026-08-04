import React from "react";

// jkhane state available thakbe, sei khane state change korte parbo...
// state App.jsx a ache, so increaseAge function amake App.jsx a likhte hobe.

// function ak jaighai banabo, ar call onoo jaighai korbo...

// akhanei akta important concept asee, jetar naam prop drilling.
// note.md te atar somporke lekha ache...

function User({ firstName, lastName, age, id, increaseAge, deleteUser }) {
  return (
    <div className="user">
      <p>ID: {id}</p>
      <p>firstName: {firstName}</p>
      <p>lastName: {lastName}</p>
      <p>age: {age}</p>
      <button onClick={() => increaseAge(id)}>Increase Age</button>
      <button onClick={() => deleteUser(id)}>Delete User</button>
    </div>
  );
}

export default User;

// ! ############################################

// function User({ userDetail }) {
//   return (
//     <div className="user">
//       <p>firstName: {userDetail.firstName}</p>
//       <p>lastName: {userDetail.lastName}</p>
//       <p>age: {userDetail.age}</p>
//     </div>
//   );
// }

// export default User;

//

// ! ###################################################################
