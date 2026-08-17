import React from "react";

function User({ id, name, username, email, phone, address, company, website }) {
  return (
    <div
      style={{
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "#292929",
        color: "#efefef",
      }}
    >
      <h4>id: {id}</h4>
      <h4>name: {name}</h4>
      <h4>username: {username}</h4>
      <h4>email: {email}</h4>
      <h4>phone: {phone}</h4>
      <h4>address: {address.city}</h4>
      <h4>company name: {company.name}</h4>
    </div>
  );
}

export default User;
