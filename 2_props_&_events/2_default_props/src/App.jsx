import Greeting from "./components/Greeting";

function App() {
  return (
    <div>
      <Greeting firstName="Gourab" lastName="Dutta" code="abc" />
    </div>
  );
}

export default App;

/*

what is the meaning of Default props ?
==>
A prop that i haven't pass in the Greeting component calling...
but i have to use it & it has some default value.

---
function Greeting({ firstName, lastName, fullName = "Gourab Dutta" }) {
  return (
    <>
      <h1>
        Greeting, {fullName}
      </h1>
    </>
  );
}
---

that's how you can set the default prop value in the parameter destructuring position & use it.
and that's basically Default props ...

you can't see the default prop, in the components tab from the 
browser dev tools, provided by react dev tools.

and if you pass the fullName prop in the Greeting component call then that value will be used.
and if you don't pass any value or this prop, then the default value going to be in use .

*/

// ! ################################################

/*

i want to make you understand one more thing which is you can pass prop through
components... like let's say you have your prop code="abc", now this prop can travel multiple components
via components... and at last you can use the prop in the final destination...
check the code above to see this in action.


NOTE: one thing you can notice that, we are using the prop code inside of ShowCode.jsx,
but we have to pass it through Greeting.jsx, where as u can clearly see we are not using it in Greeting.jsx !!!
okay, we gonna talk more on it later on. 

*/

// ! ###########################################

/*

function Greeting(props) {
  return (
    <div>
        <ShowCode {...props} />
    </div>
  );
}

---

function ShowCode({firstName, lastName, code }) {
  return (
    <div>
      <h1>{firstName} {lastName} {code}</h1>
    </div>
  );
}

if you want to pass every prop, then write this spread operator syntax...


*/
