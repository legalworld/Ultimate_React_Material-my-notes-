// * async await way...(mostly people use async await way for clean syntax)

import { useEffect, useState } from "react";

const URL = `https://jsonplaceholder.typicode.com/users`;

function FetchDataExample2() {
  const [users, setUsers] = useState([]);
  async function fetchData() {
    const response = await fetch(URL);
    const data = await response.json(); // --> this is also going to return promise, so we are waiting until promise resolve with the help of await...
    // console.log(data);

    // we store our data in state.
    setUsers(data);
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default FetchDataExample2;
