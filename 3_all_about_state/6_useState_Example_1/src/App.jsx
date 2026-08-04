import { useState } from "react";
import Users from "./components/Users";
function App() {
  // storing users inside useState.
  const [users, setUsers] = useState([
    { id: 1, firstName: "Gourab", lastName: "Dutta", age: 23 },
    { id: 2, firstName: "Mark", lastName: "Zuckerberg", age: 42 },
    { id: 3, firstName: "Andrej", lastName: "karpathy", age: 39 },
    { id: 4, firstName: "Ilya", lastName: "Sutskever", age: 39 },
    { id: 5, firstName: "Elon", lastName: "Musk", age: 55 },
  ]);

  // ! ############## beginner way #############################################
  // function increaseAge(id) {
  //   const newState = [];
  //   for (let user of users) {
  //     if (user.id === id) {
  //       newState.push({ ...user, age: user.age + 1 });
  //     } else {
  //       newState.push(user);
  //     }
  //   }
  //   setUsers(newState);
  // }
  // ! ##################################################################

  // * ############## react dev way #########################################
  function increaseAge(id) {
    setUsers((prevState) => {
      return prevState.map((user) => {
        if (user.id === id) {
          return { ...user, age: user.age + 1 };
        } else {
          return user;
        }
      });
    });
  }
  // * ##################################################################################

  // delete something from the list means, have to filter ou something...
  const deleteUser = (id) => {
    // ! NORMAL WAY
    // const newState = [];
    // for (let user of users) {
    //   if (user.id !== id) {
    //     newState.push(user);
    //   }
    // }
    // setUsers(newState);
    // ! better way (array method filter returns true or false)
    // setUsers((prevState) => {
    //   return prevState.filter((user) => {
    //     return user.id !== id;
    //   });
    // });

    //OR

    setUsers((prevState) => prevState.filter((user) => user.id !== id));
  };

  return (
    <div className="App">
      <h1>State Example</h1>
      <Users users={users} increaseAge={increaseAge} deleteUser={deleteUser} />
    </div>
  );
}

export default App;

/*
if you want to become javascript or react dev you have to master the use of
arrow function, (map, filter, reduce, find) these array methods. 
*/
