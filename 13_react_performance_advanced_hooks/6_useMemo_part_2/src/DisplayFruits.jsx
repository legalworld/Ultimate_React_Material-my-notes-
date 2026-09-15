import { memo } from "react";

function DisplayFruits({ fruits }) {
  console.log("re-render fruits");

  return (
    <div>
      <h1>Fruits</h1>
      {fruits.map((fruit) => {
        return (
          <div key={fruit.fruitName}>
            <span>{fruit.emoji}</span> <span>{fruit.fruitName}</span>
          </div>
        );
      })}
    </div>
  );
}

export default memo(DisplayFruits);

/*

as you can see, we are using memo here before exporting the component,,,,
that means it will not render if the fruits value are not changed....

but still it's rendering... why ???
--->
see, we have two kind of data types in js.
one is primitive type and another one is reference type...

see whenever i change the state, my component re-renders...
when my component re-renders, i'm creating a variable name fruits...
whenever state changes, new array got created... 
and we know that array has references.
when the state changes again, new array going to be created. with a different reference ...

now we have two different arrays at the same time...

-------------------

nums1 = [1,2,3];
nums2 = [1,2,3];
---> nums1 === nums2 ---> false

str1 = "hello";
str2 = "hello";
---> str1 === str2 ---> true 

------------------

now, i guess i am being able to write it down properly, why 
the DisplayFruits component is being re-rendered when there is no state change...
again, cause references are different, that's why react will think we have created new fruits.
and it gonna pass new fruits reference to the props, and the component gonna get re-render...
that's why my component is getting re-rendered beside the fact that we have used the memo function...

* always keep one thing in mind that, in the case of reference type the component will re-render...

* to stop re-rendering in this situtation, we gonna use useMemo() hook ...

*/
