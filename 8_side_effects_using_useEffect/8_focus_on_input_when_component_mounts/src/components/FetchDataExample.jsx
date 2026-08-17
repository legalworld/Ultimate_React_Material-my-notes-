import { useEffect, useState } from "react";
import User from "./User";

// * correct URL
const URL = `https://jsonplaceholder.typicode.com/users`;

// * incorrect URL
// const URL = `https://jsonplaceholder.typicode.com/userss`;

function FetchDataExample() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    console.log("useEffect callback Invocked");
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      try {
        const response = await fetch(URL, { signal: signal });
        if (!(response.status >= 200 && response.status <= 299)) {
          console.log(response);

          setIsError(true);
          setErrorMsg(`${response.status} Error`);
          setIsLoading(false);
          return;
        }
        const data = await response.json();
        console.log(data);

        setUsers(data);
        setIsLoading(false);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Request was aborted");
          return;
        }
        console.log(error);
        setIsError(true);
        setErrorMsg("Failed to fetch data");
        setIsLoading(false);
      }
    }

    fetchData();

    // clean up function
    return () => {
      console.log("clean up function");
      controller.abort();
    };
  }, []);

  if (isLoading) {
    return <h1 style={{ marginLeft: "300px" }}>Loading ...</h1>;
  }

  if (isError) {
    return <h1 style={{ marginLeft: "300px" }}>{errorMsg}</h1>;
  }

  return (
    <div>
      <h1>
        {users.map((user) => (
          <User key={user.id} {...user} />
        ))}
      </h1>
    </div>
  );
}

export default FetchDataExample;

/*
when your App component wrap around StrictMode,
on component mount, at first the useEffect will run, then cleanUp function will run (if you written it...),
and then the useEffect callback will mount again...

in StrictMode, the effect Callback runs two times...
that's why your data being fetched two times.
*/

/*

when you add clean up function here, the effect will run first, then clean up function, then again effect will run...
in strict mode, if you don't want double network req, then you have to abort the req after the clean up function called, so the next time the effect calls, react will be unable 
to make further req, cause you abort it... 

you can check in the network tab of the browser, that two call has been made, but only one got the success. 
*/
