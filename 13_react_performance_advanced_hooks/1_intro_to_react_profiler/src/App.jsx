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
in this lecture we gonna talk about react performance...
at first we gonna talk about the basics, e.g.---> in which structure we can
keep our component for better performance, and the things that comes with react
to achieve the performance, how to use them.

we gonna also talk about some hooks. e.g.---> useMemo(), useCallback().

usually, we don't have to use useMemo() & useCallback()... without them also, our react performance remains quite great...
we gonna care about how to structure components, with them only performance of web will
be great at some extend...

but there are some cases where you have to use those hooks...and we gonna talk about that cases...

some people use the useMemo() & useCallback() hook everywhere, sometimes instead of increasing the performance of react app they ended up decreasing it...
and why it happens to them ? ---> cause they don't really know about how these hooks actually works...

so in this chapter we gonna talk about the basics first, for instances Rendering and all...
and after it, we gonna talk about some hooks... so that you can understand, how react performance actually works... 


we use the profiler tab in the browser to see performance ...
in the settings, you tick the (Highlight updates when components render)...
after that whenever you type something on the input tab, you
will see lines appearing around the components...
it basically means which components are rendering when typing...

you can see there is a start and stop profiling button.
so after you start the profiler and do some changes and then stop the profiler,
you can see performance charts of components & which ones being rendered....


inside of BasicApp we have our state, and this state going to change whenever i'm gonna type something on the input
field... and whenever state changes, what happens ???
==>
the component which has the state and all the child component of 
that component will render...  state change basically triggers the re-render...


*/
