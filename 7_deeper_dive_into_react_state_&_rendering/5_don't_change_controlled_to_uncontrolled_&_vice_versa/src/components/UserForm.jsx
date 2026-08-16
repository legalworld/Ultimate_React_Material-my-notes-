import { useState } from "react";
import DisplayFullName from "./DisplayFullName";
import TestComponent from "./TestComponent";

function UserForm() {
  console.log("component rendered");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
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

in this lecture, i want to tell you just one thing.
* we have---> controlled & uncontrolled components.

now here, our input fields are controlled components.
why ?
cause, i set the value of the input fields to be equal to the state.
we know this thing from very early in our react learning journey... 

now if i remove the value attribute from the input field, the fields become independent, we are not controlling it anymore,
they are not dependent on State right now. but that does not mean that i can't write anything
in the input field. we can type in the input field, and that's
going to be store inside of state.
now you might think that what is the difference between before & now ?
==> the only difference is that State is not controlling the input field right now...
now if you change the value of the state, it will not affect what is written in the 
input field.(you can check it via writting from the browser components tab or in the useState value section itself.)
* now it has become uncontrolled component.

! now the most important thing that i want to tell you is:--->

react want's the component to be either controlled or uncontrolled.
it should not be like the component is controlled and later at a particular time, it becomes uncontrolled or vice versa.

now when this kind of scenario can happen ?
==> 
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState("");

these are our two states. you can check the code above.
now if i have one useState with nothing, and another one with
double quotes. react will set the value of the empty useState to undefined.
so when you will going to write something on the input field which is associated with the empty useState,
in the Browser console it will through you a warning.
and it looks something like:-->
---
! A component is changing an uncontrolled input to be controlled. 
! This is likely caused by the value changing from undefined to a defined value, 
! which should not happen. Decide between using a controlled 
! or uncontrolled input element for the lifetime of the component. 
! More info: https://react.dev/link/controlled-components
---
we set the firstname input field's value with the firstName state.
now at first the value of firstName is undefined, but when you type something
in the input field it becomes a controlled input field.
at first undefined means react thought the input field is uncontrolled, but when you type
something the setFirstName function trigger and a string value has been passed to the input field, it becomes controlled... 
and we don't want this behaviour.

ok, that's it...

 
*/
