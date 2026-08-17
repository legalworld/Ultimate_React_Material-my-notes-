import { useRef, useEffect } from "react";

function UserForm() {
  const usernameRef = useRef();
  useEffect(() => {
    usernameRef.current.focus();
  }, []);
  return (
    <form>
      <input
        type="text"
        name=""
        id=""
        placeholder="username"
        ref={usernameRef}
      />
    </form>
  );
}

export default UserForm;

/*

what i want is, as soon as my page gets load. the input should has 
focus on. i don't have to manually take the cursor there and click.
how to achieve that functionality ?
==> check the above code...

*/
