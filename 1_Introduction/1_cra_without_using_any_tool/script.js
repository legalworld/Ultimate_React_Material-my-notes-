// react library ESM
import React from 'https://esm.sh/react';

// react-dom library ESM
import ReactDOM from 'https://esm.sh/react-dom/client';

// ! ########################################################
// testing whether the script file is linked with the html file or not..
console.log("hello world");
// ! #################################################################### 


const rootElement = document.getElementById("root");
// console.log(rootElement);

// this function will take three arguments...
// type, properties, children
// properties are basically attributes like href, style etc... 
const el = React.createElement("h1", null, "hello world");
console.log(el);

// after you print el, you can see this h1 react element is just an object...


// now how to append this h1 element inside of the #root div ???
//==> for that we gonna use react-dom library ...

const root = ReactDOM.createRoot(rootElement);
root.render(el);

// javascript sees any element in form of an object...


function greeting() {
    return React.createElement("p", {className: "paragraph"}, "welcome home");
}

root.render(greeting());


// To render both at once, you need to give `root.render()` **one thing** that contains both elements — not two separate calls. Right now each `render()` call replaces whatever was there before, so only the last one sticks.

// Since `React.createElement` only lets you pass one root element, you have a few ways to combine multiple elements into one:

// **Option 1 — Wrap them in a `React.Fragment`** (cleanest, no extra DOM node):

// ```js
// const el = React.createElement("h1", null, "hello world");

// function greeting() {
//     return React.createElement("p", null, "welcome home");
// }

// const combined = React.createElement(
//     React.Fragment,
//     null,
//     el,
//     greeting()
// );

// root.render(combined);
// ```

// **Option 2 — Wrap them in a `div`** (if you don't mind an extra wrapper element):

// ```js
// const combined = React.createElement(
//     "div",
//     null,
//     el,
//     greeting()
// );

// root.render(combined);
// ```

// **Option 3 — Pass an array** (React allows this too, but each child needs a `key`):

// ```js
// const combined = [
//     React.createElement("h1", { key: "h1" }, "hello world"),
//     React.createElement("p", { key: "p" }, "welcome home"),
// ];

// root.render(combined);
// ```

// **Why this is necessary:** `root.render(x)` doesn't append `x` to whatever was already rendered — it tells React "the entire UI tree for this root is now `x`." So to show two things together, `x` itself has to be a single tree that contains both — either a Fragment, a wrapping element, or an array of elements. There's no way to call `render()` twice and have the results stack; each call is a full replace of the previous tree.

// I'd go with **Option 1** (`Fragment`) — it's the standard pattern for "I want multiple sibling elements with no extra wrapper div," and it's exactly what JSX's `<> </>` syntax compiles down to under the hood.