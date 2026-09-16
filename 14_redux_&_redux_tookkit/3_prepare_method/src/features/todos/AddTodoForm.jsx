import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo, removeTodo, toggleCompleted } from "./todosSlice";

function AddTodoForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTodo(title));
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;

/*
prepare is a callback function... and it's optional to use...

so this is a feature of redux, if you want you can use it, it's optional btw... 

*/

/*

! tell me about prepare method...

==>

In **Redux Toolkit**, `prepare` is used inside `createSlice()` when you want to **customize the action before the reducer receives it**.

The easiest way to think about it:

> `prepare` is a step between **calling the action creator** and **creating the final action object**.

### Without `prepare`

Suppose you have:

```js
const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0
  },

  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    }
  }
});
```

You can do:

```js
dispatch(increment(5));
```

Redux Toolkit creates:

```js
{
  type: "counter/increment",
  payload: 5
}
```

Simple.

---

## Why do we need `prepare`?

Imagine you want to add an item:

```js
{
  id: "...",
  name: "Apple",
  price: 50
}
```

You don't want the component to manually generate the ID.

Without `prepare`, you might do:

```js
dispatch(addItem({
  id: crypto.randomUUID(),
  name: "Apple",
  price: 50
}));
```

But this logic can be moved into `prepare`.

```js
const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: []
  },

  reducers: {
    addItem: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },

      prepare: (name, price) => {
        return {
          payload: {
            id: crypto.randomUUID(),
            name,
            price
          }
        };
      }
    }
  }
});
```

Now your component simply does:

```js
dispatch(addItem("Apple", 50));
```

### What happens internally?

Think of the flow like this:

```text
dispatch(addItem("Apple", 50))
                |
                v
        prepare("Apple", 50)
                |
                v
      creates payload object
                |
                v
        final action object
                |
                v
             reducer
```

The `prepare` function returns:

```js
{
  payload: {
    id: "...generated id...",
    name: "Apple",
    price: 50
  }
}
```

Redux Toolkit then creates the complete action:

```js
{
  type: "cart/addItem",
  payload: {
    id: "...generated id...",
    name: "Apple",
    price: 50
  }
}
```

Then the reducer gets it:

```js
reducer: (state, action) => {
  state.items.push(action.payload);
}
```

---

## Why is it called `prepare`?

Because you're basically saying:

> "Before creating the action, prepare the data that this action should carry."

So:

```text
prepare()
   ↓
prepare the payload
   ↓
action
   ↓
reducer
```

---

## Very important: `prepare` vs reducer

They have different jobs.

### `prepare`

Deals with **creating/preparing the action payload**.

```js
prepare: (name, price) => {
  return {
    payload: {
      id: crypto.randomUUID(),
      name,
      price
    }
  };
}
```

### `reducer`

Deals with **changing the Redux state**.

```js
reducer: (state, action) => {
  state.items.push(action.payload);
}
```

So remember:

```text
prepare  → prepares the action
reducer  → changes the state
```

### One more useful example

Suppose you want to add a todo with a timestamp:

```js
addTodo: {
  reducer: (state, action) => {
    state.todos.push(action.payload);
  },

  prepare: (text) => {
    return {
      payload: {
        id: crypto.randomUUID(),
        text,
        completed: false,
        createdAt: Date.now()
      }
    };
  }
}
```

Then:

```js
dispatch(addTodo("Learn Redux"));
```

The component only provides the **meaningful input**:

```text
"Learn Redux"
```

`prepare` handles the additional data:

```text
id
completed
createdAt
```

This keeps your component's dispatch code clean.

**Mental model:**

```text
Action creator
     |
     | prepare()
     v
Prepared payload
     |
     v
Action object
     |
     | dispatch
     v
Reducer
     |
     v
New Redux state
```

So when you see this unusual Redux Toolkit syntax:

```js
someAction: {
  reducer: ...,
  prepare: ...
}
```

immediately think:

**"I need custom logic to prepare the action/payload before my reducer handles it."**



*/
