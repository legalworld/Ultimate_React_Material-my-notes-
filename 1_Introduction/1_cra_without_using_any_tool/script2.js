
const rootElement = document.getElementById("root");

function HelloWorld() {
  return (
    <>
      <h1 className="heading">hello world</h1>
    </>
  );
}

// ReactDOM.createRoot(rootElement).render(HelloWorld());
// ! or
ReactDOM.createRoot(rootElement).render(<HelloWorld/>);


// this is JSX code...
// internally what going to happen is, whatever we written in script.js,,, same will written interally over here...


// Component names must start with a capital letter (PascalCase).
// React uses this capitalization to distinguish your custom components from built-in HTML tags:
// - lowercase tag names (e.g. <div>, <h1>) are treated as native HTML elements
// - capitalized names (e.g. <Greeting />) are treated as user-defined components
// If you name a component starting with a lowercase letter, React tries to render it
// as an HTML tag instead of your component — which either fails silently or throws an error,
// since no such HTML tag exists.


// * Things to remember:
// * we use two libraries which are react & react-dom .
// * we use JSX(babel convert jsx to actual react code)


// so in this folder we have built a react app from scratch without cra...