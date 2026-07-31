import Greeting from "./components/Greeting";

function App(event) {
  function handleClick() {
    console.log("hello");
  }

  function handleClick2(firstName, lastName) {
    console.log(firstName, lastName);
  }

  // wrapper function...
  function wrapperFunction(e) {
    console.log(e.target);
    handleClick2("Gourab", "Dutta");
  }

  return (
    <div className="App">
      {/* <button onClick={handleClick}>Click Me</button> */}

      <h1>App</h1>
      <button
        onClick={(e) => {
          // console.log(e);

          // ---
          // console.log(e.target);
          // it will return the element which has been triggered.

          // ---
          // i can access the whole button.
          // i can change the value of some properties as well ... as you can see below .
          e.target.textContent = "press me";

          console.log("hello");
        }}
      >
        Click Me
      </button>
      <br />
      <br />
      {/* <button onClick={wrapperFunction}>Click Me 2</button> */}
      <button
        onClick={(e) => {
          console.log(e.target);
          handleClick2("Gourab", "Dutta");
        }}
      >
        Click Me 2
      </button>
      <Greeting />
    </div>
  );
}

export default App;

/*

we have lots of events like:-> click, Hover etc, which we were studied
when we were learning javascript. 

we gonna start learning them again in react and will see how to trigger them in react.

in this lecture we are only going to discuss about click events.
as we move ahead with this course we will learn other events as well .

we want that whenever we click on the button some functionality happens...

javascript-> "onclick"
react-> "onClick"

you call the function normally, but when browser internally get the task, it calls the function with an object named as event object.
when you log the event object, it will show you:-->

SyntheticBaseEvent {_reactName: 'onClick', _targetInst: null, type: 'click', nativeEvent: PointerEvent, target: button, …}

---

i know that when calling any function, browser pass it's own argument.
but i also want to pass my own argument, but how ???
==>
browser pass event object as first argument, but i want to pass my own arguments, the
process for that is the wrapperFunction on Click Me 2 button .
 

but, everybody prefer to use arrow function rather than a seperate wrapper function.
cause it's short and simple.

browser has called the arrow function and that arrow function has called the handleClick2 function.
so as always browser going to pass the event object as argument to the arrow function.

*/

/*

one more important thing i want to tell is, this onClick event
only works on html ellements. e.g. --> h1, button, p etc.

but it does not gonna work on your own react components...
e.g.-> 
    <Greeting onClick={}/> //--> and it's not gonna work...



onClick is a function right ?
but here the onClick becomes a prop... you can check in the component
tab of the browser...

so you can pass any value with this name in the Greeting component call.
or you can pass a function, and then in another component, if there is a html element exists, then you can use 
onClick function on it.

like:
App.jsx
 <Greeting onClick={handleClick2}/>

Greeting.jsx
 function Greeting({onClick}) {
  return <h1 onClick={onClick}>Elon Musk</h1>;
}

*/
