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
