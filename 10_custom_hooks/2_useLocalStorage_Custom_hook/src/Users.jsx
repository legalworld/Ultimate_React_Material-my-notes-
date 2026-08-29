// custom hooks
import useFetch from "./hooks/useFetch";

function Users() {
  const { data, isPending, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
  );
  if (isPending) {
    return <h2>Loading...</h2>;
  }
  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <>
      <h1>
        {data &&
          data.map((user) => {
            return (
              <div key={user.id}>
                <h2>{user.name}</h2>
              </div>
            );
          })}
      </h1>
    </>
  );
}

export default Users;

// till now we been using ready made hooks, e.g.---> useState(), useEffect(), useRef(), useReducer(), useContext()...

// but now it's time for us to make our own hooks ...

// ! self-made hooks goes to hook name folder by convension...

// above is the code demonstrating how we usually fetch data...
