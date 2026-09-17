import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetch", async () => {
  const response = await axios.get("http://localhost:8001/todos");

  return response.data;
});

export const addTodo = createAsyncThunk("todos/add", async (title) => {
  const response = await axios.post("http://localhost:8001/todos", {
    // json-server will generate id on it's own...
    title: title,
    completed: false,
  });
  console.log("posting ", response.data);
  return response.data;
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    isLoading: false,
    error: null,
    data: [],
  },

  extraReducers: (builders) => {
    builders.addCase(fetchTodos.pending, (state, action) => {
      console.log("fetch todos, pending state...");
    });
    builders.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log("fetch todos, fulfilled state...");
      console.log(action);
      console.log(action.payload);

      state.data = action.payload;
    });
    builders.addCase(fetchTodos.rejected, (state, action) => {
      console.log("fetch todos, rejected state...");
      console.log(action.error);
    });

    builders.addCase(addTodo.pending, (state, action) => {
      console.log("add Todo, pending state...");
    });
    builders.addCase(addTodo.fulfilled, (state, action) => {
      console.log("add Todo, fulfilled state...");
      console.log(action);
      console.log(action.payload);

      // state.data = action.payload;
      state.data.push(action.payload);
    });
    builders.addCase(addTodo.rejected, (state, action) => {
      console.log("add Todo, rejected state...");
      console.log(action.error);
    });
  },
});

export const todosReducer = todosSlice.reducer;
