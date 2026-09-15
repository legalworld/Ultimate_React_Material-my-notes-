import { memo } from "react";

const styles = {
  fontSize: "2rem",
  padding: "1rem 2rem",
  backgroundColor: "#646cff",
  color: "white",
};

function HugeIncrement() {
  console.log("HugeIncrement rendered...");
  return <button style={styles}>Huge Increment</button>;
}

export default memo(HugeIncrement);

/*
with using memo, if prop or state does not change the component not rendered...

but, after using memo, still HugeIncrement component is being rendered... 

now why it's happening ???
--->
in js, every primitive type we have, we can compare it by value... 
but we got the reference type everytime new...(e.g.---> array, function, obj)

handleCount gives new function everytime... means the prop will change, and 
it means the HugeIncrement component will render again..

so i have to preserve the value of handleCount function...
and to do that we can use ---> useMemo() & useCallback()..
*/
