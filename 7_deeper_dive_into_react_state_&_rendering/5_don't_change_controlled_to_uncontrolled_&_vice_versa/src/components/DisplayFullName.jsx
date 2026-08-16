import React from "react";

function DisplayFullName({ fullName }) {
  console.log("display fullname rendered...");

  return <span>{fullName}</span>;
}

export default DisplayFullName;
