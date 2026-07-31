import React from "react";
import Greeting from "./components/Greeting";

const Users = ["user1 ", "user2 ", "user3 "];

function App() {
  return (
    <div>
      <Greeting
        firstName="Gourab"
        lastName="Dutta"
        hobby='"studying"'
        dream='"Becoming SWE at Ai/Quant Firm"'
        age={23}
        users={Users}
      />
      <Greeting
        firstName="Elon"
        lastName="Musk"
        hobby='"video games, reading"'
        dream='"Transporting humans and cargo via SpaceX starships to colonize Mars."'
        age={55}
        users={Users}
      />
      <Greeting
        firstName="Ilya"
        lastName="Sutskever"
        hobby='"understanding how intelligence and the human brain actually work."'
        dream='"Ilya Sutskever’s ultimate dream is the realization of a safe superintelligence (SSI)—an artificial intelligence far smarter than humans that is reliably, fundamentally, and technically aligned with human well-being."'
        age={39}
        users={Users}
      />
      <Greeting
        firstName="Andrej"
        lastName="Karpathy"
        hobby='"Andrej Karpathy enjoys personal programming projects like home automation experiments, solving the Rubiks cube, and building personal AI knowledge bases."'
        dream='"Andrej Karpathys ultimate vision for artificial intelligence centers on democratizing AI education, shifting programming toward natural language, and building autonomous agentic loops. Rather than chasing immediate artificial general intelligence (AGI) hype, his practical philosophy focuses on core mechanics and enablement."'
        age={39}
        users={Users}
      />
    </div>
  );
}

export default App;

/*

<Greeting firstName="Gourab" />
as you can see in this react component, we are having a attribute called firstName, this are props or properties in react.
and components are like calling a function. and passing props in a component is like
passing arguments in a function...

  

*/

// ! ###############################################
// import React from "react";
// import Greeting from "./components/Greeting";
// function App() {
//   const g = () => {
//     const storage = [];
//     for (let index = 0; index < 5; index++) {
//       storage.push(<Greeting name="gourab" key={index} />);
//     }
//     return storage;
//   };

//   return <>{g()}</>;
// }

// export default App;

// we can render <Greeting /> this component as many times as we wanted...

// ! ##################################################################

// if you want to pass a number in props, then you have to put it inside of {curly Braces}. like:-- <Greeting age={23} />

// you can also pass array, object, functions in props ...
