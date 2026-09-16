import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "12df", title: "play criket", completed: true },
  { id: "32ef", title: "study computer science", completed: false },
];

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      //   console.log(action);
      //   console.log(action.payload);

      state.push(action.payload);
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
