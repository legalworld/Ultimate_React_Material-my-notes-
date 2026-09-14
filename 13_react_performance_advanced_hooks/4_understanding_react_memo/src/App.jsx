import Demo from "./ReactMemo/Demo";
import Extra from "./ReactMemo/Extra";
import "./App.css";
function App() {
  return (
    <>
      <h1>React Memo Demo</h1>
      <Demo>
        <Extra />
      </Demo>
    </>
  );
}

export default App;

/*

state2 has no relation with my card.
but when i toggle the state2 then also ---> Demo & Card rendered...
there is no need to render the card... but react very quickly does renders it...

now what we want to do is, whenever we change the state2, we don't want the card component to be 
rendered... now to do this thing, we gonna use memowised component...
we have to memoize the card component...
there is a function in react called memo(), and when you export it via memo, you export 
the memoize version...

now it means we tell react that render the card component when the prop of this component changes...
now what happens is, before rendering the Card component, react will check whether to render the component or not...

now if you toggle the state1, then Demo & Card both component will be rendered...
but if you toggle the state2, then only Demo Card both was rendering...


we should use this memoize components and all, only when we truely need it...
react on it's own very fast...
sometimes it takes more time to react to check whether to do a certain work or not !!!.... so....


we don't have to use memo everytime...most of the time
how you are structuring your component that's how you can avoid unnecessary component rendering...

*/

/*
all the performance based hooks in react, you should use them only when you feel it's truely required... 


*/
