import { useEffect, useState } from "react";

// custom hook made by me...

function useTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return time;
}

export default useTime;

// ---------------------------------------------------------------------------------------------

// Gourab, this is a very good example of a custom React Hook. You've created your own reusable hook called `useTime()` that continuously gives a React component the current time, updating it every second.

// Let's understand not just what each line does, but also why you need `useState`, `useEffect`, `setInterval`, and the cleanup function.

// # 1. First, understand what this hook does

// Your custom hook:

// ```
// import { useEffect, useState } from "react";

// function useTime() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     const intervalId = window.setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => {
//       window.clearInterval(intervalId);
//     };
//   }, []);

//   return time;
// }

// export default useTime;
// ```

// Imagine you want to build a digital clock.

// Digital clock

// Live example

// # 09:30:45

// Illustrative clock display

// Your hook makes sure the time is refreshed every second.

// Instead of writing all the clock-related logic inside every component, you have packaged that logic into a reusable function.

// That's what a custom hook does.

// # 2. Understand each line

// ## A. Importing React hooks

// ```
// import { useEffect, useState } from "react";
// ```

// You are importing two built-in React hooks.

// useState

// Allows your component to store data and update it.

// In your case, the data is the current time.

// useEffect

// Allows you to perform side effects, such as:

// - Starting a timer.
// - Fetching data from an API.
// - Setting up event listeners.
// - Establishing WebSocket connections.

// In your case, you use it to start a timer.

// ## B. Creating your custom hook

// ```
// function useTime() {
// ```

// You are creating a regular JavaScript function, but with an important distinction.

// It uses React hooks internally.

// React's naming convention says that custom hooks should start with `use`.

// Examples:

// ```
// useTime()
// useFetch()
// useLocalStorage()
// useDebounce()
// useAuth()
// ```

// This naming convention also helps React's lint rules identify hook usage.

// ## C. Creating the state

// ```
// const [time, setTime] = useState(new Date());
// ```

// Let's break this down.

// First:

// ```
// new Date()
// ```

// Creates a JavaScript Date object representing the current date and time.

// For example, it might represent:

// ```
// November 3, 2026, 9:30:45 PM
// ```

// Now:

// ```
// useState(new Date())
// ```

// Initializes a React state variable with that Date object.

// You get two things:

// | Variable  | Purpose                        |
// | --------- | ------------------------------ |
// | `time`    | Stores the current Date object |
// | `setTime` | Updates the time state         |

// Think of it this way:

// ```
// time = current time
// setTime = function to update current time
// ```

// One important thing: React does not automatically update the time just because one second has passed.

// You need something to trigger that update.

// That's where `useEffect` and `setInterval` enter the picture.

// # 3. Understanding useEffect

// ```
// useEffect(() => {

// }, []);
// ```

// The first argument is a callback function.

// The second argument is the dependency array.

// Your dependency array is empty:

// ```
// []
// ```

// This means that the effect runs after the component's initial render, and it won't rerun on subsequent renders because of changing dependencies.

// In this effect, you want to start a timer.

// # 4. Understanding setInterval

// This is the most important part of your code.

// ```
// const intervalId = window.setInterval(() => {
//   setTime(new Date());
// }, 1000);
// ```

// First, understand `setInterval()`.

// It is a built-in JavaScript function that repeatedly executes a callback after a specified time interval.

// Its general syntax:

// ```
// setInterval(callback, delay);
// ```

// Here:

// - `callback` is the function you want to execute repeatedly.
// - `delay` is the interval in milliseconds.

// In your code:

// ```
// 1000
// ```

// Means 1000 milliseconds, which equals 1 second.

// Therefore, this callback executes approximately every second:

// ```
// () => {
//   setTime(new Date());
// }
// ```

// But what does it actually do?

// Let's break it down.

// ### First:

// ```
// new Date()
// ```

// Creates a new Date object containing the current time.

// ### Second:

// ```
// setTime(new Date());
// ```

// Updates your React state with that new Date object.

// For example:

// | Time    | State update          |
// | ------- | --------------------- |
// | 9:30:45 | `setTime(new Date())` |
// | 9:30:46 | `setTime(new Date())` |
// | 9:30:47 | `setTime(new Date())` |
// | 9:30:48 | `setTime(new Date())` |

// Every time `setTime()` updates the state, React schedules a re-render of the component using this hook.

// Consequently, the component can display the updated time.

// ### But what is intervalId?

// ```
// const intervalId = window.setInterval(...)
// ```

// `setInterval()` returns an identifier for the timer it creates.

// You store that identifier in `intervalId`.

// Why?

// Because later you need to tell JavaScript which timer you want to stop.

// # 5. Understanding the cleanup function

// Now look at this:

// ```
// return () => {
//   window.clearInterval(intervalId);
// };
// ```

// This is a cleanup function returned from your `useEffect`.

// Remember, you created a timer that keeps running every second.

// What happens if your component disappears from the screen?

// For example:

// - You navigate from the clock page to another page.
// - The clock component gets unmounted.
// - But your interval is still running!

// That means your timer continues executing even though the component is no longer needed.

// This is an unnecessary background process.

// To prevent this, React allows you to return a cleanup function from `useEffect`.

// ```
// return () => {
//   window.clearInterval(intervalId);
// };
// ```

// `clearInterval()` stops the interval associated with that particular ID.

// When does React execute this cleanup function?

// 1. When the component unmounts.
// 2. Before the effect runs again to replace an existing effect setup, if its dependencies change.

// In your case, the dependency array is empty, so the main cleanup happens when the component unmounts (and during React Strict Mode's development checks).

// This is important for preventing memory leaks and unwanted background work.

// # 6. Why do you return time?

// ```
// return time;
// ```

// Remember, this is your custom hook.

// You want other components to access the current time.

// So you return the state variable.

// For example, you can use your custom hook like this:

// ```
// import useTime from "./useTime";

// function Clock() {
//   const time = useTime();

//   return (
//     <h1>
//       {time.toLocaleTimeString()}
//     </h1>
//   );
// }

// export default Clock;
// ```

// Now your `Clock` component receives the current time from your custom hook.

// Every second:

// 1. Your interval executes.
// 2. `setTime(new Date())` updates the state.
// 3. React re-renders the Clock component.
// 4. `time.toLocaleTimeString()` displays the updated time.

// # 7. Let's visualize the complete execution flow

// ## How your custom hook works

// Clock component renders

// Calls useTime()

// useState(new Date())

// Initializes current time

// useEffect runs

// After initial render

// setInterval starts

// Executes every 1000 milliseconds

// Every second

// setTime(new Date())

// Updates the state

// React re-renders Clock

// Displays updated time

// Clock component unmounts

// Cleanup function executes

// clearInterval(intervalId)

// Stops the timer

// # 8. A few important concepts to remember

// | Concept          | What it does in your code                           |
// | ---------------- | --------------------------------------------------- |
// | `useState`       | Stores the current time                             |
// | `useEffect`      | Sets up the timer after rendering                   |
// | `setInterval`    | Executes the callback every second                  |
// | `setTime`        | Updates the time state                              |
// | `new Date()`     | Gets the current date and time                      |
// | `intervalId`     | Identifies the running timer                        |
// | `clearInterval`  | Stops the timer                                     |
// | Cleanup function | Prevents the timer from continuing after unmounting |
// | `return time`    | Exposes the current time to the component           |

// One additional detail: `setInterval` is not a precision clock. Its callback can be delayed by browser scheduling or a busy main thread. Your implementation is perfectly reasonable for a simple digital clock, though.

// # 9. Test your understanding

// Let's see whether you have understood the relationship between these hooks.

// Quick knowledge check

// 0/4 answered

// 1\. When does useEffect execute in your implementation?

// Before the first render

// After the initial render

// Every second

// 2\. What actually causes the Clock component to re-render?

// setInterval itself

// new Date() itself

// setTime() updating React state

// 3\. Why do we store intervalId?

// To store the current time

// To identify the timer so we can stop it

// To trigger re-rendering

// 4\. When does the cleanup function execute?

// Every second

// When the component unmounts

// Whenever new Date() executes

// Check answers

// My suggestion for your next exercise: Try building a custom `useStopwatch()` hook using the same concepts. It should have Start, Stop, and Reset functionality. That will help you understand custom hooks, state management, effects, and cleanup much more deeply.
