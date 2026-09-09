import { useRouteError } from "react-router-dom";
function Error() {
  const error = useRouteError();
  console.dir(error);
  const message = error?.message || error?.statusText || "Something went wrong";

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Error;
