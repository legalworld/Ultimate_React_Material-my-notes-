import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = [
  { id: "12df", title: "play criket", completed: true },
  { id: "32ef", title: "study computer science", completed: false },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        console.log("reducer run", action);
        state.push(action.payload);
      },
      // this prepare runs before reducer...
      prepare: (title) => {
        console.log("prepare run");

        return {
          payload: {
            id: nanoid(),
            title: title,
            completed: false,
          },
        };
      },
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
    toggleCompleted: (state, action) => {
      state.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
      });
    },
  },
});
export const { addTodo, removeTodo, toggleCompleted } = todosSlice.actions;

export default todosSlice.reducer;

// at first prepare will run, and we are returning an object, inside of that object, there is another object called payload... and we are returning that also...
// now this payload will be added inside of the action...
