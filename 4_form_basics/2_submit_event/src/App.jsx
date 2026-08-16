import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // console.log("form submitted");
    console.log(
      `hello ${username}, your email is '${email}', and password is '${password}'`,
    );
  }
  return (
    <div className="App">
      <h1>Form Tutorial</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">UserName: </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          required
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      Username: {username}
    </div>
  );
}

export default App;

/*
By Default behaviour of browser is, whenever you submit something, the page gets refreshed.
to prevent that we use a function called---> preventDefault(); from
event obj, so it becomes e.preventDefault().

*/
