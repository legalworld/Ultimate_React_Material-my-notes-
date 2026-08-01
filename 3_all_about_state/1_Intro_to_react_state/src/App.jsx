import { useState } from "react";
function App() {
  // * long syntax
  // const state = useState("Elon");
  // console.log(state);
  // const name = state[0];
  // const setName = state[1];

  // * short syntax (array destructuring).
  const [name, setName] = useState("Elon");
  const [name2, setName2] = useState("john");

  console.log("component Rendered");

  return (
    <div className="App">
      <h1>{name}</h1>
      <button
        onClick={(e) => {
          setName("Gourab");
        }}
      >
        Change Name
      </button>
      <h1>{name2}</h1>
      <button
        onClick={() => {
          setName2((prevName) => (prevName === "john" ? "Bill" : "john"));
        }}
      >
        Toggle Name
      </button>
    </div>
  );
}

export default App;

/*
every react application you going to build, there you
going to use state for sure.but if your website is completely
static, no changes going to happen then in that case you can 
avoid using state.

but if your website going to has changes, then in that case you have
to use state . because UI going to be changed via state.

and React itself is a State Management Library.
if your website going to be absolute static then in that case you can avoid using state,
but in that case people usually don't use react, they use pure html, css & javascript.

if you are using react, then in your website UI going to change time to time.
and React handles this state management thing very gracefully.

-------

in React functional component, we have hooks.
when hooks isn't exist, we can't use state in functional component.

in that time we used to use class-based components.
in class-based components, we have life-cycle methods in side them.

but now we don't have to use that life-cycle method . cause
we now have react hooks.
this is the new way of creating react application and managing the state...

and react also recommend use functional components with hooks...

most developer switched from class-based to functional component.

some old code base might have class-base components, so we going to learn 
class based components later.

we can convert class-based components to functional components with the 
help of hooks.

*/

/*

we are talking about state.
so for state we are going to use useState() hook.
we can do state management with hooks in react.

now what is the meaning of state ?
==>
state means data, you can store any kind of data in react application...so you can actually
think of state as data.
actually state means, what is the current state of our application. ? 

for e.g.-->

you add a T-Shirt on flipkart cart, and it's price is 
Rs.500.
we gonna put this 500 in state. and when we going to change the state, that
500 price going to change everywhere...
it going to change from flipkart's main page, user's cart page, and let's say
price is now 600, so it will show 600 everywhere instead of 500.

*/

/*

in react, we can't use normal variables to change the UI .

*/

// ################################################

// function App() {
//   let firstName = "Gourab";
//   return (
//     <div className="App">
//       {/* <h1>Gourab</h1> */}
//       <h1>{firstName}</h1>
//       <button
//         onClick={(e) => {
//           console.log("you clicked me");
//           firstName = "Elon";
//           console.log(firstName);
//         }}
//       >
//         Change Name
//       </button>
//     </div>
//   );
// }

// in this code example, if you click the button
// the value of firstName will change, but nothing has changed in the UI.
// so you have to remember, in react if you change normal variable then the UI will not change.
// in this case we have to use state. whenever state changes, the component will re-render and UI will be changed.

// if you want to keep your UI Dynamic, then you have to keep your data inside of state...
//so we have to use state, and to use it we have hooks.
// useState &  useEffect and many more.
// right now we just going to talk about useState() hook.
// if you learned only these two hooks, then you can build any application in react.
// then we have some more hooks which helps us to manage state, but most important ones are these two.
//

/*
useState
==> useState is a hook, and you have to call it like
a function...like--> useState()...
and it will take useState(defaultValue) defaultValue as argument.
and it will return an array.and inside of this array, there going to be
2 things. which are --> [stateValue, functionToUpdateThatStatevalue].

you can use useState() only inside of the component.
i can't call it inside of any function which is written in the component, inside of jsx, outside of component.
same for all the hooks.


*/

// ! #############################################################

/*

`prevName` is just the previous state value that React passes into the updater function.

When you call:

```js
setName(prevName => prevName === "Elon" ? "Gourab" : "Elon")
```

React does:
- read the current state value (`name`)
- pass it as `prevName` into your function
- use the returned value as the next state

So `prevName` is not magic—it is the current value of `name` at the time React processes the update.

you can pass many parameter to tha callback function, but react only will provide value for the first parameter.
and the value going to be the currentState.

we use <React.StrictMode></React.StrictMode>, inside
of the render method... during development. and it also
gives us warnings...

*/

/*

# 6. The important distinction

Don't think:

```javascript
const [name, setName] = useState("Elon");
```

is some special React syntax.

Only this part is React:

```javascript
useState("Elon")
```

This part:

```javascript
const [name, setName] = ...
```

is **ordinary JavaScript array destructuring**.

You could do exactly the same thing with any array:

```javascript
const [a, b] = [10, 20];
```

Long version:

```javascript
const arr = [10, 20];

const a = arr[0];
const b = arr[1];
```

So the mental model you should keep is:

```text
                React
                  ↓
        useState("Elon")
                  ↓
       ["Elon", updateFunction]
                  ↓
          JavaScript
       array destructuring
                  ↓
        ┌─────────┴─────────┐
        ↓                   ↓
      name                setName
     "Elon"           update function
```

**`useState` provides the array; JavaScript destructuring unpacks the array.**

*/

/*
you can add array & object in state also...
useState([]) & useState({}) .

*/
