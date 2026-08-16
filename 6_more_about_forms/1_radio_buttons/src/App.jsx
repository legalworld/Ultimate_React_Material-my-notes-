import { useState } from "react";

function App() {
  const [gender, setGender] = useState("male");
  return (
    <div className="App">
      <h1>Radio Buttons</h1>
      <label htmlFor="male">Male</label>
      <input
        type="radio"
        id="male"
        checked={gender === "male"}
        onChange={() => setGender("male")}
      />
      <br />
      <label htmlFor="female">Female</label>
      <input
        type="radio"
        id="female"
        checked={gender === "female"}
        onChange={() => {
          setGender("female");
        }}
      />

      <br />
      <label htmlFor="others">Others</label>
      <input
        type="radio"
        id="others"
        checked={gender === "others"}
        onChange={() => {
          setGender("others");
        }}
      />
    </div>
  );
}

export default App;

/*

when you make two radio type input buttons,
then you will be able to select both at the same time,
but we don't want that, we want to select one at a time..
to do that in html, what we do is we use name attribute and we give the same value to each input field in the name attribute.

but we are working in react, and we have to store the state like which one is selected, so we have to use another way.
and the way is:--->

we have to make a state which you can see above, we made it.
i want that male should be selected but only when the value of state is male.
the value which is selected, only that has to be the value of state.   

we have a checked property, it's value can be true or false.
now the inputs in control, so you can't navigate with it.

-->checked={gender === "male"} & checked={gender === "female"}.

now to do that--->

onChange={()=>setGender("male")}
onChange={()=>setGender("female")}

when you going to select anything, onChange event will trigger...
*/
