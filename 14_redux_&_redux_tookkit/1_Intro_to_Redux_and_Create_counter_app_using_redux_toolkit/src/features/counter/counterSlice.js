import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0, username: "Gourab" };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    // -------------------------
    // directly mutating.
    // increment: (state) => {
    //   state.count += 1;
    // },
    // -------------------------
    // returning new state...
    increment: (state) => {
      return { ...state, count: state.count + 1 };
    },
    decrement: (state) => {
      return { ...state, count: state.count - 1 };
    },
    reset: (state) => {
      return { ...state, count: 0 };
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export default counterSlice.reducer;

/*

counter is a feature, anything related with counter like writing logic of 
increase, reset & decrease, you have to write all this logic inside of counter's slice...

reducers are responsible to update our state...

inside createSlice, reducers is key and it's value is an object...inside of this object, i will make multiple reducers....
these reducers going to has the access of the state...
*/

// remember, what i have told you, when we have to change the state, then we have to use
// the dispatch function ...
// dispatch function told us what action to perform. that action call our reducer... and the reducer change our state...
// and when state get changed, UI got updated...

// counterSlice is a object and inside of it we have a key name as actions, and the value of it is an object which contains functions or actions or reducers..

// --------
// i want to explain you one more thing which is right now we are mutating
// the state directly inside of counterSlice...
// but we haven't done this before... we always returned new state...
// we know that states in react are immutable... we don't update old state,
// we always return new state...
// so let's return new state...

// but we can write this syntax also---> state.count += 1;
// cause in the background, always new state get's returned...

// redux internally using a library called immer.js...
