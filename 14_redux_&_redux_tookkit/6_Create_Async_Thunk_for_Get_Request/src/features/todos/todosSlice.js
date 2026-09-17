import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  const response = await axios.get("http://localhost:8001/todos");
  // console.log(response.data);

  return response.data;
}); // ---> name is for internal use of redux toolkit... so it can create action type further for us...

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  // in case of thunk, we write extraReducers...
  extraReducers: (builders) => {
    builders.addCase(fetchTodos.pending, (state, action) => {
      console.log("pending state...");
    });
    builders.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log("fulfilled state...");
      console.log(action);
      console.log(action.payload);
    });
    builders.addCase(fetchTodos.rejected, (state, action) => {
      console.log("rejected state...");
      console.log(action.error);
    });
  },
});

export const todosReducer = todosSlice.reducer;
