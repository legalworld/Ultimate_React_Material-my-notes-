import { createContext } from "react";
import MyComponent from "./component/MyComponent";

// context
export const MyAppContext = createContext();

function App() {
  function myFunc() {
    console.log("hello from my func");
  }

  return (
    <MyAppContext.Provider
      value={{
        key1: "value1",
        key2: "value2",
        someFunction: myFunc,
      }}
    >
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#C8E4B2",
          height: "100vh",
        }}
      >
        <h1>App</h1>
        <MyComponent />
      </div>
    </MyAppContext.Provider>
  );
}

export default App;

/*

prop drilling

component
|
|
child
|
|
grand child


inside of App component, we have myFunc function, and we want to pass this
function to grandchild...but the thing is we can't directly pass it to grandchild.
we have to pass it through props in child's child order... top to bottom...

* context
to avoid prop drilling we use context ...


in react, only in one direction data flows,
which is parent to child...

* now how to use contextApi ?
*==> 
  what i have in app, i want to share that to every other
component in my codebase ... how to do that ???
==> 
  the first thing we have to do is, we have to wrap the whole
application inside of context...so now you don't have to do prop drilling ...

in this lecture we are discussing about the syntax and flow of contextApi.
in the next lecture, we will see a practical example...

in the last lecture of this module, we are going to build a project using useReducer() hook & contextApi...
btw, both are different things...

:--> steps to use contextApi...
* providing
1) import createContext from react.
2) create a context & export it. (we create context outside of the component, according to convension, cause we have to export it.)
3) wrap application in context.Provider

* consuming
1) import useContext
2) useContext(MyAppContext) this thing will return me the value myFunc, which i passed in provider...
3) now use this value...

*/

// we usually use context to create our cart component in our E-Commerce appplication... for themes also...

// ! wrapping the app means wrapping the whole
// ! react app. cause it's connected like parent & child... you got the idea...

// we can directly pass obj inside of value.
// like--> {key1: "value1", key2: "value2", someFunction: myFunc}
// then you can access the obj where you want to get it. via obj destructuring.
// cause you are passing obj...
// if you don't destructure then you have to use ---> {returnedValue.key1} that kind of stuff...

// we can also use this context here--->
//```main.jsx
//     export const MyAppContext = createContext();
//     <MyAppContext.Provider value={}>  <App/>  </MyAppContext.Provider>
// so the whole app now gonna enjoy the shared data...
// but we usually use it where heavy prop drilling is required,
// and we don't want to complete the task using prop drilling...
