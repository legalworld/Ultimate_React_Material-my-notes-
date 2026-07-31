import ShowCode from "./components2/ShowCode";

function Greeting({ firstName, lastName, fullName = "Gourab Dutta", code }) {
  return (
    <div>
      <h1>
        Greeting, {firstName} {lastName}
        Greeting, {fullName}
        <ShowCode code={code} />
      </h1>
    </div>
  );
}

export default Greeting;
