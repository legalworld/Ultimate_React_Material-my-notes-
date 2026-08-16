import React from "react";

function ShowCountValue(props) {
  // console.log(props);
  // -----------------------------
  // props.count = 1000000; (you can't do this, it will through you error.)
  // -----------------------------
  let { count } = props;
  // count = 1000000; ---> this line will through no error.(but never do this in react. never change the prop's value by your own)
  return (
    // <span>{props.count}</span>;
    <span>{count}</span>
  );
}

export default ShowCountValue;

/*
const { count } = props;
&
const count = props.count;

both's meaning is same.

*/

/*

short version of the above code--->

    function ShowCountValue({count}) {
      count = 1000000; ---> never do this.
      return (
        <span>{count}</span>
      );
    }

*/

// props are immutable but variables are not.
// never change your prop's value by your own ... because normally we don't change it...

// this line changing the prop value---> count = 1000000;
// so never write this kind of code...
