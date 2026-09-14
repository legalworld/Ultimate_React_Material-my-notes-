import "./App.css";
import BasicApp from "./BasicApp/BasicApp";

function App() {
  return (
    <>
      <BasicApp />
    </>
  );
}

export default App;

/*

in this lecture what i did is, i put the ExtraComponent component
in between input tag and button tag... 
so what will happen is the ExtraComponent will also render with InputForm component
cause it's a child of InputFrom component, and the state is in InputForm component...

now how we can stop it ???
===>
we can use children prop in this case. cause children props does not render...
the following changes you can notice in the code is the trick to avoid re-rendering...  


*/
