import "./Greeting.css";

function Greeting() {
  const Name = "wall-e";

  const firstName = "Gourab";
  const lastName = "Dutta";

  const movieName = (name) => {
    return name.toUpperCase();
  };

  return (
    <div className="bg-dark">
      <h1>Hello, {movieName(Name)}</h1>
      <h1>Hello, {`${firstName} ${lastName}`} how are you ?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        natus culpa, dolorum at hic, alias necessitatibus, iure voluptates
        distinctio a recusandae delectus ab reprehenderit nisi soluta error vel
        ipsum tenetur nemo ipsam omnis consequuntur sit veritatis! Nesciunt
        rerum explicabo, pariatur velit mollitia error unde dolore ea earum ad
        corporis officia.
      </p>
      <h2>Form</h2>
      <form>
        <label htmlFor="fname">First Name: </label>
        <input type="text" id="fname" />
      </form>
    </div>
  );
}

export default Greeting;

// inside of jsx's area if i have to write anything which belongs to javascript then i have to write it inside of curly braces... :- {}
