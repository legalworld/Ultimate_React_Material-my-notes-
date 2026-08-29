// import { useState, useEffect } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

function BasicForm() {
  //   const [firstName, setFirstName] = useState("");

  //   ########################################################################

  //   const [firstName, setFirstName] = useState(() => {
  //     return JSON.parse(localStorage.getItem("firstname")) || "";
  //   });
  //   useEffect(() => {
  //     localStorage.setItem("firstname", JSON.stringify(firstName));
  //   }, [firstName]);

  const [firstName, setFirstName] = useLocalStorage("firstname", "");
  const [lastName, setLastName] = useLocalStorage("lastname", "");

  return (
    <form>
      <label htmlFor="firstname">FirstName: </label>
      <input
        type="text"
        name="firstname"
        id="firstname"
        value={firstName}
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <h1>FirstName: {firstName}</h1>
      <br />
      <br />
      <label htmlFor="firstname">FirstName: </label>
      <input
        type="text"
        name="lastname"
        id="lastname"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <h1>LastName: {lastName}</h1>
    </form>
  );
}

export default BasicForm;

/*

whatever you gonna write on the field, it gonna appear but when you refresh it will disappear...

but i want to store whatever i am writting on the field... i want to store in LocalStorage...


*/

/*

without the custom hook, we have to do all the work for lastName, age etc also...

with it we can call the hook as many times as we want and do our work...

! so that's how, you can persist your data in localStorage... 

*/
