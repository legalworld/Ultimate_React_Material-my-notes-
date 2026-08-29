// ! if you want to make custom hook, it's a rule to use (use) with the hook name...

import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setIsPending(true);
    const controller = new AbortController();
    async function fetchData() {
      try {
        const res = await fetch(url, { signal: controller.signal });
        const resData = await res.json();
        if (!res.ok) {
          throw new Error("something went wrong...");
        }
        setData(resData);
        // setIsPending(false);
        setError(null);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.dir(error);
          setError(error.message);
          //   setIsPending(false);
        }
      } finally {
        setIsPending(false);
      }
    }
    fetchData();

    // clean-up function
    return () => {
      controller.abort();
    };
  }, [url]);
  return { data: data, isPending: isPending, error: error };
}

export default useFetch;

// passing url in the dependency array means whenever the url changes the data being fetch again...

// doesn't matter try block running or catch block, you have to write setISPending(false) in both the scenario ... so we use it inside of finally block. cause it runs in error and without error also...
