import { memo } from "react";

function Card({ state1 }) {
  console.log("Card rendered");

  return (
    <div
      style={{
        background: state1 ? "green" : "red",
        width: "300px",
        height: "100px",
        color: "white",
        fontWeight: "bold",
        fontSize: "1.2rem",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      Card based on state 1
    </div>
  );
}

export default memo(Card);
