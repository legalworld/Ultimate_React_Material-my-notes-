// imports
import React from "react";
import ReactDOM from "react-dom/client";
import Greeting from "./Greeting";
// import { Greeting2 } from "./Greeting";
import { Greeting2 as Go } from "./Greeting";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// this function in react is known as component.
function HelloWorld() {
  return <h1>i'm here to help</h1>;
}

// returning multiple JSX, from Test component
function Test(params) {
  return (
    <div>
      <h2>people</h2>
      <p>my name is gourab</p>
    </div>
  );
}

// returning multiple JSX, from Test2 component
function Test2(params) {
  return (
    <>
      <h3>ho la lal lal </h3>
      <p>lorem ipsum</p>
    </>
  );
}

root.render(
  <React.StrictMode>
    {/* <HelloWorld /> */}
    {/* <Test /> */}
    {/* <Test2 /> */}
    {/* <Greeting /> */}
    {/* <Go /> */}
    <App />
  </React.StrictMode>,
);

// if you directly return JSX from a component then you are only able to return only one jsx element.

// but if you wrap the jsx inside of a div or React Fragments then u will be able to return multiple jsx .

// amra proti ta component er jonoo akta kore file banai usually. (1 component in one file). amra akta file a tei onek gula component likhte pari, but usually amra jokhon kono project er upor kaj kori, tokhon ak akta component er jonoo ak akta file banai... so amra otai follow korbo ...

// jeta component er naam, setai file er naam rakhi amra...

// in this file we only have this much code, the above ones are for explanation...

// ! ############################################
// * import React from "react";
// * import ReactDOM from "react-dom/client";
// * import App from "./App";

// * const root = ReactDOM.createRoot(document.getElementById("root"));

// * root.render(
// *   <React.StrictMode>
// *     <App />
// *   </React.StrictMode>,
// * );

// ! #######################################################
