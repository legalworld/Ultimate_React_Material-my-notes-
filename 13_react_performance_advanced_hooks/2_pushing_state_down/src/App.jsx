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

when i type anything on the input tab, lots of components are rendering...
and we have to fix that...

to fix it we gonna make our state down...
we know that, whenever in any component the state changes then that component and it's child components going to re-render... 
right now we have state in BasicApp component... but we don't need to have it here...
we gonna keep the state inside of InputForm component...

now after all the changes only InputFrom component is re-rendering...you can check it via profiler tab...
all of my state is now in InputForm component, that's why this behaviour....

with this we got a lesson, that if we can have our state in the child component, let it be there,
there is no need of lifting the state to the parent...

*/
