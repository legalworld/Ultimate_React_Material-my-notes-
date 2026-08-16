import { useState } from "react";
import DisplayFullName from "./DisplayFullName";
import TestComponent from "./TestComponent";

function UserForm() {
  console.log("component rendered");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [fullName, setFullName] = useState("");

  const fullName = firstName + " " + lastName;
  return (
    <form>
      <h1>Form</h1>
      <div>
        <label htmlFor="firstname">firstname: </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
            // setFullName(e.target.value + " " + lastName);
          }}
        />
      </div>
      <br />
      <div>
        <label htmlFor="lastname">lastname: </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
            // setFullName(firstName + " " + e.target.value);
          }}
        />
      </div>
      <h2>user detail</h2>
      <div>
        <p>firstname: {firstName}</p>
        <p>lastname: {lastName}</p>
        <p>
          fullName: <DisplayFullName fullName={fullName} />
        </p>
        <TestComponent />
      </div>
    </form>
  );
}

export default UserForm;

/*

each time you write a letter in the input tab, the component rendered.
now naturally you might thinking that this much amount of render work must
affecting the performance of the webpage...
so don't worry, it's the work of react that it re-renders your component very optimally...
react will render the component very gracefully, no matter how many renders are happening...


as you can see, we have a state for fullname also.
but think, do we really need state for fullname ?
right now the entire state of fullname depends on firstname & lastname.
==> No we don't need fullname state variable. why ?
==> because if you make a variable and do--->
          const fullname = firstName + " " + lastName;

now you can print the fullname directly, no state variable needed, normal variable is okay.
now how is it okay ???
==> see, each time you type something the component render, which updates the value of the state variables, hence
it's updating the value of the normal variable as well.
so that's how you can see, we have prevented creating unnecessary extra state... 

*/

/*

inside UserForm component, if you change any state, the component renders.
and with that, the child & grandchild component of UserForm component also renders.
like--> DisplayFullName component.

when child re-renders, inside of it new props value go, if you have prop with that component then only...

some people thinks, when prop changes, the component re-renders.
but that's not the case, when state changes only then the component re-render. 


when parent renders, the child also renders, no matter, how many childs are there.
parent's parent will not render, for example some people thinks
the whole app re-renders. but that's wrong.

*/
