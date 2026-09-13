import React from "react";

function ExtraComponent() {
  console.log("ExtraComponent rendered");

  return (
    <div className="card" style={{ backgroundColor: "#e8e6e6" }}>
      <h2>Extra Component</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum
        perspiciatis provident cupiditate voluptas vitae eum. Quam culpa
        expedita eius similique veniam veritatis voluptates, error aliquam
        asperiores id, cum iure facere!
      </p>
    </div>
  );
}

export default ExtraComponent;
