import { useRef } from "react";

function ExampleuseRef2() {
  const usernameRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(usernameRef.current);
    console.log("userName ", usernameRef.current.value);
    console.log("password ", passwordRef.current.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">userName</label>
      <br />
      <input type="text" id="username" ref={usernameRef} />
      <br />
      <br />
      <label htmlFor="password">password</label>
      <br />
      <input type="text" id="password" ref={passwordRef} />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExampleuseRef2;

/*
handle form input using useRef.
here we gonna work with form, using useRef .


till now, we have made form with controlled inputs.
we were telling, the state and the input tab's value has to be same.

we can create uncontrolled inputs using useRef() hook.

after giving the input element ref attribute, the element
and useRef() is connected now...

you can use as many useRef() as you want...

*/

/*

now the most important question arises is, which one
should you use ??? useState or useRef ???

==> you should use useState().
because if you have controlled inputs then you going to has less errors, less bugs,
less confusion creation...



*/
