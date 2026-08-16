import { useState } from "react";
import RockBand from "./RockBand";

function RockBandList() {
  const [rockBands, setRockBands] = useState([
    { name: "Queen", id: 1 },
    { name: "Led Zeppelin", id: 2 },
    { name: "The Rolling Stones", id: 3 },
    { name: "The Beatles", id: 4 },
    { name: "AC/DC", id: 5 },
    { name: "Pink Floyd", id: 6 },
    { name: "Nirvana", id: 7 },
    { name: "Guns N' Roses", id: 8 },
    { name: "The Who", id: 9 },
    { name: "Metallica", id: 10 },
  ]);

  function addNewRockBand() {
    console.log("add new rock band");
    const newRockBand = {
      id: crypto.randomUUID(),
      name: "new rock band",
    };
    setRockBands((prevRockBands) => [...prevRockBands, newRockBand]);
  }

  return (
    <ol>
      {rockBands.map((rockBand) => {
        return <RockBand name={rockBand.name} key={rockBand.id} />;
      })}
      <button onClick={addNewRockBand}>Add New Rock Band</button>
    </ol>
  );
}

export default RockBandList;

/*

when you run the server, you will get a warning,
which says:-->
    ! "Each child in a list should have a unique "key" prop."

we know what is key, and why we need to give the key... 

* code:-- return <RockBand name={rockBand.name} key={rockBand.id}/>;

after the above line, the warning will be no longer visible. 

as you can see, the data we have contains ids. (and it's a hard coded data for learning as you can see...)

when you click on the button, as per the logic, it will add new items with id (random id).
till now everything is fine.

but never do this thing:-->
             return <RockBand name={rockBand.name} key={crypto.randomUUID()} />;
             or
             return <RockBand name={rockBand.name} key={Math.random()} />;

this thing means we are creating ids on the fly... this thing reduces the performance of react drastically... no warning will occur but it reduces the performance...

when we call a component, everything renders, right ?...
so, when you use these methods to generate ids, react has to render all of the list's items instead of just the new one.
when you click on the button, it will regenerate the id of all the items, and via id react optimally does it's work,
so when you create ids on the fly, it reduces the performance of react, because react thinks each item is a new item so it has to generate new id. hence use the id provided with your data list/api data.
then it will just create id for the new item only...

now you might ask, we are using the methods while creating the new item, how it's not affecting the react performance ?
==> the answer is we are not creating the id on the fly, on button click when i will add a new item for that i'm using randomUUID().
and for this, no previous item's id will be modified...
*/
