import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");

  function handleUserName(e) {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    setUsername(e.target.value);
  }
  return (
    <div className="App">
      <h1>Form Tutorial</h1>
      <form>
        <label htmlFor="username">UserName: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUserName}
        />
      </form>
    </div>
  );
}

export default App;

/*

form er moddhe jodi amar kache 2ta input field thake, tale ami 2ta state banabo.
ar jodi akta input field thake tale ami 1ta state banabo...

summary: state / input field
*/

/*

if you have it like this :--> useState()
-- in the react components tab, you will see
 State: undefined.

 but, if you have it like this--> useState("")
 -- you will see--> State: "" 

*/

/*

! IMPORTANT:
what i want is, what ever i'm gonna write in the input field,
it should be stored inside of the state.

if you write something in the input tab now, you will
see nothing stored inside of that State variable from react components tab.

* we have two kind of forms, one is controlled input, another one is
* uncontrolled input .



* controlled input:-
here i want to control the input tag on my own.
i want that input field's value should be always equal to the state .(here in this case the name of the state is username)
it basically means in the input tab, it will only show what is in the state. 
so if you want to type anything in the tab tag, you will be unable
to do that .
now to type anything, you have to use the onChange() function provided by
react. then inside of it i provided another function and browser calles it 
with event object as argument. and i change the state value ...
you can see the above code for more understanding.

*/
