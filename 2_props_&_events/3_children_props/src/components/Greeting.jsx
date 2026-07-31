function Greeting({ children, firstName, lastName }) {
  return (
    <>
      {children}
      <h1>
        {firstName} {lastName}
      </h1>
    </>
  );
}

export default Greeting;
