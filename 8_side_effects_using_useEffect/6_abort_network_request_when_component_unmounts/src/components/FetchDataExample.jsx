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

    // clean up function...
    return () => {
      console.log("aborting request...");
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

controller can abort the request...
now i'm gonna make the signal of the controller...
so when i make req, i can pass my signal. so then the controller will be able to 
use the signal and can abort the request....

*/
