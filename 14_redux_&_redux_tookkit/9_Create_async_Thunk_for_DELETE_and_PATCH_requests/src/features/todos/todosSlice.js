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

export const deleteTodo = createAsyncThunk("todos/delete", async (id) => {
  const response = await axios.delete(`http://localhost:8001/todos/${id}`);
  // console.log(response);
  return id;
});

export const toggleTodo = createAsyncThunk(
  "todos/toggle",
  async ({ id, completed }) => {
    const response = await axios.patch(`http://localhost:8001/todos/${id}`, {
      completed: !completed,
    });
    console.log(response.data);
    return response.data;
  },
);

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

    builders.addCase(deleteTodo.pending, (state, action) => {
      console.log("delete Todo, pending state...");
    });
    builders.addCase(deleteTodo.fulfilled, (state, action) => {
      console.log("delete Todo, fulfilled state...");

      state.data = state.data.filter((todo) => todo.id !== action.payload);
    });
    builders.addCase(deleteTodo.rejected, (state, action) => {
      console.log("delete Todo, rejected state...");
      console.log(action.error);
    });

    builders.addCase(toggleTodo.pending, (state, action) => {
      console.log("toggle Todo, pending state...");
    });
    builders.addCase(toggleTodo.fulfilled, (state, action) => {
      console.log("toggle Todo, fulfilled state...");

      state.data.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = action.payload.completed;
        }
      });
    });
    builders.addCase(toggleTodo.rejected, (state, action) => {
      console.log("toggle Todo, rejected state...");
      console.log(action.error);
    });
  },
});

export const todosReducer = todosSlice.reducer;
