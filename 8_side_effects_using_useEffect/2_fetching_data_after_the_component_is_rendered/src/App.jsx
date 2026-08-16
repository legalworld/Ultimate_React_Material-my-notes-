import FetchDataExample from "./components/FetchDataExample";
import FetchDataExample2 from "./components/FetchDataExample2";
function App() {
  return (
    <>
      {/* <FetchDataExample /> */}
      <FetchDataExample2 />
    </>
  );
}

export default App;

/*
in real world projects, we don't use the useEffect() hook, without dependency array,
it can cause infinite loop. we either pass the empty array or we pass anything inside of that
array...


*/
