function Greeting() {
  return (
    <>
      <h1>welcome friend</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        molestias!
      </p>
    </>
  );
}

function Greeting2() {
  return (
    <>
      <h1>welcome friend 2</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        molestias!
      </p>
    </>
  );
}

// we are exporting this component, cause we want to use this component in other files...
export default Greeting;
export { Greeting2 };
