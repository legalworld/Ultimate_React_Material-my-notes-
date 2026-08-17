import React from "react";
import { useEffect, useState } from "react";

function MouseMoveEvent() {
  const [mousePosition, setMousePosition] = useState({ X: 0, Y: 0 });
  const handleMouseMove = (e) => {
    // console.log({ X: e.clientX, Y: e.clientY });
    setMousePosition({ X: e.clientX, Y: e.clientY });
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div>
      <p>X: {mousePosition.X}</p>
      <p>Y: {mousePosition.Y}</p>
    </div>
  );
}

export default MouseMoveEvent;

/*

we basically add eventlistener inside of useEffect()...

*/

/*
after unmounting the component, the eventListener will still gonna do it's work...
so you have to remove it via a cleanUp function, inside document.removeEventListener() will be in use... 
you can keep a log in the useEffect() to inspect that the EventListener still is in work...
*/

// whenever you are adding any eventListener inside of useEffect, you must remove it.
// you should keep this habit inside of you...
