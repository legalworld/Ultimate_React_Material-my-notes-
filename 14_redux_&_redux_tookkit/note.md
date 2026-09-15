# (Q-1) Redux and Redux Toolkit

## 1. What is Redux?

Redux is a predictable state management library for JavaScript applications.

It helps manage **shared application state** in a centralized store.

In a React application, different components may need access to the same data. Instead of passing that data through multiple components using props, Redux provides a central place where the data can be stored and managed.

Examples of shared state:

- Logged-in user information
- Shopping cart items
- Favorite movies
- Authentication status
- Global notifications
- Theme preferences
- Data fetched from an API

### Important point

Redux is not specifically a React library. It can be used with different JavaScript environments.

For React applications, we commonly use:

- Redux: Core state management library
- Redux Toolkit: Recommended way to write Redux logic
- React-Redux: Connects Redux with React

---

## 2. Why do we need Redux?

React already provides state management through `useState` and `useReducer`. So why do we need Redux?

The problem usually appears when many components need access to the same state.

### Example: Movie application

Suppose we have these components:

```text
App
 |
 +-- Navbar
 |     |
 |     +-- Displays logged-in user
 |
 +-- MovieList
 |     |
 |     +-- Displays movies
 |
 +-- MovieDetails
 |     |
 |     +-- Displays selected movie
 |
 +-- Favorites
       |
       +-- Displays favorite movies
```

Suppose the logged-in user's information is stored inside `App`.

If `Navbar`, `Profile`, and `Favorites` need this information, we might have to pass it through multiple components.

This is called **prop drilling**.

### Prop drilling

Prop drilling means passing data through intermediate components that do not actually need the data themselves.

Example:

```text
App
 |
 | user
 v
Layout
 |
 | user
 v
MainContent
 |
 | user
 v
Profile
```

`Layout` and `MainContent` might only forward the `user` prop to `Profile`.

Redux solves this problem by allowing components to access shared state from a centralized store.

### Important distinction

Redux is not automatically better than React state.

Use React state for local component concerns, such as:

- Whether a modal is open
- Input field values
- A dropdown's visibility
- Local UI state

Use Redux when shared or complex state management benefits from a centralized system.

---

# 3. The central idea of Redux

Redux follows a predictable state-management pattern.

The basic flow is:

```text
User interaction
       |
       v
     Action
       |
       v
    Dispatch
       |
       v
   Middleware
       |
       v
    Reducer
       |
       v
  New state
       |
       v
    React UI
```

The middleware stage is optional. If there is no relevant middleware, the action proceeds directly to the reducer.

### One-way data flow

Redux follows one-way data flow:

```text
State -> UI -> User event -> Action -> Reducer -> New state -> UI
```

The UI reads data from the state.

When a user interacts with the UI, the application dispatches an action.

The reducer calculates the next state.

The UI then reads the updated state and may render again.

### Important principle

Components do not directly modify Redux state.

Instead, they dispatch actions that describe what happened.

---

# 4. Redux terminology

## 4.1 State

State is the data currently maintained by an application.

Example:

```javascript
{
  count: 10,
  user: {
    name: "Gourab",
    isLoggedIn: true
  },
  favorites: ["Inception", "Interstellar"]
}
```

State answers the question:

> What does my application currently know?

In Redux, the store holds the application's Redux state.

State can contain:

- Primitive values
- Objects
- Arrays
- Nested data structures

Example of a movie-related state:

```javascript
{
  movies: [],
  loading: false,
  error: null
}
```

This state might represent the status of a movie-fetching operation.

---

## 4.2 Store

The store is the object that holds the current Redux state.

It is the central location through which Redux state is managed.

A Redux store provides important methods:

### `getState()`

Returns the current Redux state.

```javascript
store.getState();
```

### `dispatch(action)`

Sends an action to the Redux store.

```javascript
store.dispatch({
  type: "counter/increment",
});
```

### `subscribe(listener)`

Registers a listener function that is notified when the store processes an update.

```javascript
const unsubscribe = store.subscribe(() => {
  console.log("Store updated");
});
```

To remove the subscription:

```javascript
unsubscribe();
```

### Important point

In a typical Redux application, the store is created once and supplied to the React application through the `Provider` component from React-Redux.

---

## 4.3 Action

An action is a plain JavaScript object that describes an event or something that happened in the application.

Example:

```javascript
{
  type: "counter/increment";
}
```

Another example:

```javascript
{
  type: "cart/addItem",
  payload: {
    id: 1,
    name: "Laptop"
  }
}
```

An action normally contains:

| Property  | Meaning                                 |
| --------- | --------------------------------------- |
| `type`    | Describes the event                     |
| `payload` | Optional data associated with the event |

The `type` property is required for a valid Redux action.

The `payload` property is optional.

### Mental model

An action is a message sent to Redux:

> Something happened. Here is the information related to it.

An action does not directly change the state.

---

## 4.4 Action type

The `type` property identifies the kind of event represented by an action.

Examples:

```javascript
"counter/increment";
"counter/decrement";
"cart/addItem";
"auth/logout";
```

A common naming convention is:

```text
featureName/eventName
```

Examples:

```text
counter/increment
movies/setMovies
favorites/addMovie
auth/logout
```

The feature name identifies the area of the application.

The event name describes what happened.

### Why use descriptive action types?

Descriptive action types:

- Make debugging easier
- Make Redux DevTools logs easier to understand
- Reduce naming conflicts
- Clearly communicate what happened

---

## 4.5 Payload

The payload is the data carried by an action.

Example:

```javascript
{
  type: "counter/incrementBy",
  payload: 5
}
```

Here:

```text
type    = "counter/incrementBy"
payload = 5
```

The reducer can use the payload to calculate the next state.

### Example: Adding a movie to favorites

```javascript
{
  type: "favorites/addMovie",
  payload: {
    id: 101,
    title: "Interstellar"
  }
}
```

The payload contains the movie that should be added.

### Important distinction

Action:

```javascript
{
  type: "counter/incrementBy",
  payload: 5
}
```

Action creator:

```javascript
incrementBy(5);
```

An action creator is a function that creates and returns an action.

---

## 4.6 Action creator

An action creator is a function that creates an action object.

Example:

```javascript
function increment() {
  return {
    type: "counter/increment",
  };
}
```

Calling:

```javascript
increment();
```

returns:

```javascript
{
  type: "counter/increment";
}
```

An action creator does not necessarily dispatch the action.

It only creates the action.

To send it to Redux:

```javascript
store.dispatch(increment());
```

In Redux Toolkit, action creators are usually generated automatically by `createSlice()`.

---

## 4.7 Dispatch

Dispatch is the mechanism used to send an action to the Redux store.

Example:

```javascript
store.dispatch({
  type: "counter/increment",
});
```

In a React component, we commonly use `useDispatch()` to obtain the dispatch function.

```javascript
const dispatch = useDispatch();

dispatch(increment());
```

### What happens when an action is dispatched?

1. An action is created.
2. The action is sent to the store.
3. Middleware processes the action, if applicable.
4. The reducer receives the action.
5. The reducer calculates the next state.
6. The store updates its state.
7. Relevant subscribers are notified.
8. React-Redux may cause affected components to render again.

### Important point

`dispatch()` does not directly modify a specific state property.

It sends an action into the Redux update process.

---

## 4.8 Reducer

A reducer is a function that calculates the next state based on the previous state and an action.

Its conceptual signature is:

```javascript
(previousState, action) => nextState;
```

Example:

```javascript
function counterReducer(state, action) {
  if (action.type === "counter/increment") {
    return {
      count: state.count + 1,
    };
  }

  return state;
}
```

Suppose the current state is:

```javascript
{
  count: 10;
}
```

And the action is:

```javascript
{
  type: "counter/increment";
}
```

The reducer calculates:

```javascript
{
  count: 11;
}
```

This becomes the next state.

### What does a reducer do?

A reducer answers:

> Given the current state and this action, what should the next state be?

### Reducer rules

A reducer should generally be:

- Pure
- Predictable
- Synchronous
- Free of side effects

A reducer should not perform API requests, manipulate the DOM, or directly interact with external systems.

---

## 4.9 Pure function

A pure function has two important properties:

1. It returns the same output when given the same inputs.
2. It does not produce observable side effects.

Example:

```javascript
function add(a, b) {
  return a + b;
}
```

For the same inputs, the result is always the same.

A Redux reducer should behave like a pure function.

Example:

```javascript
function counterReducer(state, action) {
  if (action.type === "counter/increment") {
    return {
      ...state,
      count: state.count + 1,
    };
  }

  return state;
}
```

The reducer calculates the next state without changing external systems.

### What are side effects?

Examples of side effects:

```javascript
fetch("/api/movies");
```

```javascript
document.title = "Updated";
```

```javascript
Math.random();
```

These operations should not be used as uncontrolled side effects inside a reducer.

Asynchronous operations and other side effects should be handled outside ordinary reducers.

---

## 4.10 Immutability

Immutability means that an existing state value is not directly modified.

Instead, we create a new state value representing the update.

Suppose:

```javascript
const state = {
  count: 10,
};
```

Direct mutation:

```javascript
state.count = 11;
```

This modifies the existing object.

In traditional Redux reducer logic, we instead return a new object:

```javascript
return {
  ...state,
  count: state.count + 1,
};
```

The spread operator copies the existing properties into a new object.

Then `count` is updated in the new object.

### Why is immutability important?

Immutability helps Redux:

- Track changes in state
- Compare old and new references
- Make state updates predictable
- Support efficient change detection
- Enable useful debugging techniques
- Avoid accidental changes to existing state

### Important note

Redux Toolkit uses Immer, which allows mutation-like syntax inside its reducer logic while still producing immutable state updates.

---

## 4.11 Slice

A slice is a feature-specific part of the Redux state together with the reducer logic and generated action creators that manage that part.

For example, a movie application might have:

```text
Redux Store
 |
 +-- auth
 |     |
 |     +-- user
 |     +-- isLoggedIn
 |
 +-- movies
 |     |
 |     +-- items
 |     +-- loading
 |     +-- error
 |
 +-- favorites
       |
       +-- items
```

Each feature can have its own slice.

Examples:

- `authSlice`
- `moviesSlice`
- `favoritesSlice`
- `cartSlice`
- `counterSlice`

A slice usually contains:

- A name
- Initial state
- Reducer functions
- Generated action creators
- A slice reducer

Redux Toolkit provides `createSlice()` to create these pieces together.

---

## 4.12 Initial state

Initial state is the starting state of a slice.

Example:

```javascript
const initialState = {
  count: 0,
};
```

When the Redux store initializes, the reducer uses its initial state.

For a movie feature:

```javascript
const initialState = {
  movies: [],
  loading: false,
  error: null,
};
```

This provides a predictable starting point for the feature.

---

## 4.13 Selector

A selector is a function that reads data from Redux state.

Example:

```javascript
const selectCount = (state) => state.counter.count;
```

The selector reads the `count` property from the `counter` slice.

It does not modify the state.

### Why use selectors?

Selectors:

- Keep state-reading logic organized
- Prevent components from depending on unnecessarily complicated state paths
- Can calculate derived data
- Can be reused across components

Example:

```javascript
const selectFavoriteMovies = (state) => {
  return state.favorites.items;
};
```

A selector can also calculate derived data:

```javascript
const selectFavoriteCount = (state) => {
  return state.favorites.items.length;
};
```

In React, selectors are commonly used with `useSelector()`.

---

## 4.14 Subscriber

A subscriber is a function registered with the Redux store to be notified when the store processes an update.

Example:

```javascript
const unsubscribe = store.subscribe(() => {
  console.log("Store updated");
});
```

The callback is called when the store state is updated.

The returned `unsubscribe` function removes the listener.

In a React application, React-Redux manages subscriptions for components using hooks such as `useSelector()`.

---

## 4.15 Middleware

Middleware is code that runs during the dispatch process, between the dispatch of an action and the reducer processing it.

Basic flow:

```text
dispatch(action)
       |
       v
  Middleware
       |
       v
    Reducer
       |
       v
  New state
```

Middleware can:

- Log actions
- Handle asynchronous logic
- Dispatch additional actions
- Integrate with external systems
- Perform checks or other processing

### Example use case

Suppose you want to log every action:

```text
Action dispatched:
{
  type: "counter/increment"
}
```

A logging middleware can observe the action before it reaches the reducer.

### Important point

Middleware is not the same as a reducer.

A reducer calculates the next state.

Middleware handles logic around the dispatch process.

---

## 4.16 Root reducer

A root reducer is the reducer that combines the reducers for the different features of an application.

Suppose the application has:

```text
counterReducer
authReducer
moviesReducer
```

The root reducer manages the combined state:

```text
Root reducer
 |
 +-- counterReducer
 +-- authReducer
 +-- moviesReducer
```

In Redux Toolkit, `configureStore()` can combine slice reducers when you provide them in an object.

---

## 4.17 Provider

`Provider` is a React-Redux component that makes the Redux store available to React components.

Example:

```jsx
import { Provider } from "react-redux";
import store from "./store";

<Provider store={store}>
  <App />
</Provider>;
```

Components inside `App` can now use:

- `useSelector()`
- `useDispatch()`

The `Provider` uses React context internally to make the store accessible.

---

## 4.18 React-Redux

React-Redux is the official library for integrating Redux with React.

Redux itself does not provide React hooks such as `useSelector()` or `useDispatch()`.

React-Redux provides those tools.

| Redux                       | React-Redux       |
| --------------------------- | ----------------- |
| Core state management       | React integration |
| Store and dispatch concepts | `Provider`        |
| Reducers and actions        | `useSelector()`   |
| Middleware                  | `useDispatch()`   |

---

# 5. Redux principles

Redux is traditionally described using three principles.

## 5.1 Single source of truth

The application's Redux state is held in a centralized store.

Instead of keeping the same shared data in many unrelated places, Redux provides one central state tree.

Example:

```javascript
{
  counter: {
    count: 10
  },
  auth: {
    user: null
  },
  movies: {
    items: []
  }
}
```

This makes shared state easier to locate and manage.

### Important clarification

This does not mean every piece of application state must be stored in Redux.

Local React state can still exist.

---

## 5.2 State is read-only

Components should not directly modify Redux state.

Instead, components dispatch actions that describe what happened.

Example:

```javascript
dispatch(increment());
```

The action describes an event.

The reducer decides how the state should change.

---

## 5.3 Changes are made with pure reducers

Reducers calculate the next state using:

```text
Previous state + Action = Next state
```

Example:

```javascript
{
  count: 10;
}
```

Action:

```javascript
{
  type: "counter/increment";
}
```

Next state:

```javascript
{
  count: 11;
}
```

Reducers should not directly perform side effects.

---

# 6. What is Redux Toolkit?

Redux Toolkit, commonly abbreviated as RTK, is the official recommended way to write Redux logic.

It provides tools that simplify Redux development and reduce repetitive code.

Redux Toolkit does not replace the fundamental concepts of Redux.

It makes those concepts easier to implement.

### Problems with traditional Redux

In traditional Redux, developers often had to manually write:

- Action type constants
- Action creator functions
- Reducer switch statements
- Immutable update logic
- Store configuration
- Middleware configuration

This repetitive code is called boilerplate.

Redux Toolkit reduces much of this boilerplate.

### Traditional Redux

```javascript
const INCREMENT = "counter/increment";

const increment = () => ({
  type: INCREMENT,
});

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    default:
      return state;
  }
}
```

### Redux Toolkit

```javascript
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0,
  },

  reducers: {
    increment(state) {
      state.count += 1;
    },
  },
});
```

Redux Toolkit automatically generates the action creator and action type for the `increment` reducer.

It also uses Immer to handle immutable updates.

---

# 7. Redux Toolkit terminology

## 7.1 `createSlice()`

`createSlice()` creates a feature slice.

It combines:

1. A slice name
2. Initial state
3. Reducer functions
4. Generated action creators
5. Generated action types
6. A slice reducer

Example:

```javascript
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    count: 0,
  },

  reducers: {
    increment(state) {
      state.count += 1;
    },

    decrement(state) {
      state.count -= 1;
    },

    incrementBy(state, action) {
      state.count += action.payload;
    },
  },
});
```

### What does `createSlice()` generate?

It generates action creators:

```javascript
counterSlice.actions.increment();
counterSlice.actions.decrement();
counterSlice.actions.incrementBy(5);
```

It also generates a reducer:

```javascript
counterSlice.reducer;
```

### Generated action example

```javascript
counterSlice.actions.incrementBy(5);
```

returns an action equivalent to:

```javascript
{
  type: "counter/incrementBy",
  payload: 5
}
```

The action type is generated using the slice name and reducer name.

---

## 7.2 `name`

The `name` property identifies the slice.

Example:

```javascript
name: "counter";
```

Redux Toolkit uses this name as a prefix for generated action types.

For example:

```text
counter/increment
counter/decrement
counter/incrementBy
```

The slice name does not automatically determine where the reducer is mounted in the store.

The store configuration determines the state key.

---

## 7.3 `reducers`

The `reducers` property contains reducer functions for the slice.

Example:

```javascript
reducers: {
  increment(state) {
    state.count += 1;
  },

  incrementBy(state, action) {
    state.count += action.payload;
  }
}
```

Here, the slice has two reducer functions:

- `increment`
- `incrementBy`

Redux Toolkit generates action creators with the same names.

---

## 7.4 `createAction()`

`createAction()` creates an action creator without creating a complete slice.

Example:

```javascript
import { createAction } from "@reduxjs/toolkit";

const increment = createAction("counter/increment");
```

Calling:

```javascript
increment();
```

returns:

```javascript
{
  type: "counter/increment";
}
```

Another example:

```javascript
const incrementBy = createAction("counter/incrementBy");

incrementBy(5);
```

returns:

```javascript
{
  type: "counter/incrementBy",
  payload: 5
}
```

### When is `createAction()` useful?

It is useful when you want to create an action creator independently of a slice.

In ordinary feature development, `createSlice()` is often more convenient because it creates both action creators and reducer logic.

---

## 7.5 `createReducer()`

`createReducer()` creates a reducer using Redux Toolkit.

Example:

```javascript
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase("counter/increment", (state) => {
    state.count += 1;
  });
});
```

`createReducer()` is useful when you want to create a reducer independently.

It supports mutation-like syntax because Redux Toolkit uses Immer.

### Difference between `createReducer()` and `createSlice()`

| `createReducer()`                                                               | `createSlice()`                       |
| ------------------------------------------------------------------------------- | ------------------------------------- |
| Creates a reducer                                                               | Creates a slice                       |
| Does not automatically generate action creators for its own reducer definitions | Generates action creators             |
| Useful for handling external actions                                            | Combines state, reducers, and actions |

---

## 7.6 `configureStore()`

`configureStore()` is the recommended way to create a Redux store.

Example:

```javascript
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

The `reducer` object tells Redux how to organize the state.

The resulting state shape is conceptually:

```javascript
{
  counter: {
    count: 0;
  }
}
```

### What does `configureStore()` do?

It:

- Creates the Redux store
- Combines reducers when given an object of reducers
- Configures useful default middleware
- Enables Redux DevTools integration by default when available
- Adds development checks for common mistakes

### Important distinction

The key in the store configuration determines the state path.

```javascript
reducer: {
  counter: counterReducer;
}
```

The state is accessed as:

```javascript
state.counter;
```

Even if the slice was created with:

```javascript
name: "myCounter";
```

the store key can still be `counter`.

---

## 7.7 `createAsyncThunk()`

`createAsyncThunk()` is a Redux Toolkit helper for handling asynchronous operations.

It is commonly used for:

- Fetching movies
- Loading user information
- Submitting forms to a backend
- Fetching products
- Performing asynchronous operations

Reducers themselves should not perform asynchronous work.

Instead, asynchronous logic runs outside the reducer and dispatches actions representing the progress and result of the operation.

### Example

```javascript
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const response = await fetch("https://api.tvmaze.com/shows");

  return await response.json();
});
```

The first argument is the action type prefix.

The second argument is the asynchronous function.

### Lifecycle actions

`createAsyncThunk()` automatically generates three lifecycle action types:

```text
movies/fetchMovies/pending
movies/fetchMovies/fulfilled
movies/fetchMovies/rejected
```

Their meanings:

| Lifecycle   | Meaning                              |
| ----------- | ------------------------------------ |
| `pending`   | The asynchronous operation started   |
| `fulfilled` | The operation completed successfully |
| `rejected`  | The operation failed                 |

### Typical flow

```text
Dispatch fetchMovies()
          |
          v
       pending
          |
          v
   API request runs
          |
      +---+---+
      |       |
      v       v
 fulfilled  rejected
      |       |
      v       v
 Store data  Store error
```

`createAsyncThunk()` creates the asynchronous action lifecycle. You still need reducer logic to update the state based on those actions.

---

## 7.8 `extraReducers`

`extraReducers` allows a slice to respond to actions that were not generated by its own `reducers` property.

It is commonly used for:

- Handling `createAsyncThunk()` lifecycle actions
- Responding to actions generated by another slice
- Responding to external action creators

Example:

```javascript
const moviesSlice = createSlice({
  name: "movies",

  initialState: {
    items: [],
    loading: false,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })

      .addCase(fetchMovies.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to fetch movies";
      });
  },
});
```

### Difference between `reducers` and `extraReducers`

| `reducers`                            | `extraReducers`                                                    |
| ------------------------------------- | ------------------------------------------------------------------ |
| Defines the slice's own reducer cases | Handles external actions                                           |
| Generates action creators             | Does not generate action creators for the handled external actions |
| Used for feature-specific actions     | Often used for thunk lifecycle actions                             |

---

## 7.9 Immer

Immer is the library used by Redux Toolkit to simplify immutable updates.

Traditional immutable update:

```javascript
return {
  ...state,
  count: state.count + 1,
};
```

Redux Toolkit reducer syntax:

```javascript
state.count += 1;
```

The second example looks like direct mutation.

However, Redux Toolkit uses Immer to create the next immutable state.

### Conceptual process

```text
Original state
      |
      v
Immer creates a draft
      |
      v
Reducer changes the draft
      |
      v
Immer produces the next state
```

Example:

```javascript
increment(state) {
  state.count += 1;
}
```

The original Redux state is not directly mutated by this reducer logic.

### Important distinction

Mutation-like syntax is safe inside Redux Toolkit's Immer-enabled reducer logic.

It is not safe to directly mutate Redux state from a React component.

---

## 7.10 `createSelector()`

`createSelector()` creates memoized selectors.

It is re-exported by Redux Toolkit from the Reselect library.

A normal selector reads or calculates data from state.

A memoized selector can reuse a previous result when its input values have not changed.

### Example

```javascript
import { createSelector } from "@reduxjs/toolkit";

const selectMovies = (state) => state.movies.items;

const selectMovieTitles = createSelector([selectMovies], (movies) => {
  return movies.map((movie) => movie.name);
});
```

The output selector calculates an array of movie names.

If the input selector returns the same reference as before, the memoized selector can reuse its previous result.

### Why is this useful?

Suppose calculating derived data is expensive.

Without memoization, the calculation may run repeatedly.

With a memoized selector, the previous result can be reused when the relevant inputs have not changed.

### Connection to React `useMemo()`

| `useMemo()`                                     | `createSelector()`              |
| ----------------------------------------------- | ------------------------------- |
| Memoizes a calculation inside a React component | Memoizes selector results       |
| Usually depends on a dependency array           | Uses selector input values      |
| Tied to a component's rendering lifecycle       | Can be reused across components |

They solve related problems but are not interchangeable.

---

## 7.11 `createEntityAdapter()`

`createEntityAdapter()` provides utilities for managing collections of entities.

Examples of entities:

- Users
- Movies
- Products
- Messages
- Posts

Suppose we store movies as an array:

```javascript
[
  { id: 1, title: "Inception" },
  { id: 2, title: "Interstellar" },
];
```

An entity adapter can organize the data into a normalized structure:

```javascript
{
  ids: [1, 2],

  entities: {
    1: { id: 1, title: "Inception" },
    2: { id: 2, title: "Interstellar" }
  }
}
```

### Benefits

It provides utilities for:

- Adding entities
- Updating entities
- Removing entities
- Selecting entities
- Sorting entities

It is useful when your application manages large or relational collections.

---

## 7.12 RTK Query

RTK Query is a data-fetching and caching tool included in the Redux Toolkit ecosystem.

It helps manage server data.

Common concerns include:

- API requests
- Loading states
- Error states
- Caching
- Refetching
- Cache invalidation
- Updating cached data

### Client state vs server state

Client state represents UI or application state controlled by the client.

Examples:

```text
Modal open/closed
Selected theme
Current tab
Input value
```

Server state represents data that comes from an external backend.

Examples:

```text
Movies from an API
User profile from a database
Products from a server
Comments from a backend
```

RTK Query is designed to handle server-state fetching and caching.

### Example

```javascript
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const moviesApi = createApi({
  reducerPath: "moviesApi",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.tvmaze.com/",
  }),

  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => "shows",
    }),
  }),
});
```

This defines an API service with a `getMovies` query.

RTK Query can generate React hooks for using the query in components.

### RTK Query vs `createAsyncThunk()`

Use RTK Query when you primarily need to fetch, cache, and manage server data.

Use `createAsyncThunk()` when you need custom asynchronous workflows and want to handle their results using ordinary slice reducers.

---

# 8. React-Redux hooks

## 8.1 `useDispatch()`

`useDispatch()` gives a React component access to the Redux store's dispatch function.

Example:

```jsx
import { useDispatch } from "react-redux";

function Counter() {
  const dispatch = useDispatch();

  return <button onClick={() => dispatch(increment())}>Increment</button>;
}
```

The component dispatches an action when the button is clicked.

It does not directly modify the Redux state.

---

## 8.2 `useSelector()`

`useSelector()` allows a React component to read data from the Redux store.

Example:

```jsx
import { useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter.count);

  return <h1>{count}</h1>;
}
```

The selector reads the `count` value from the Redux state.

React-Redux subscribes the component to the store and checks whether the selected result has changed.

If the selected result changes, the component may render again.

---

## 8.3 `Provider`

`Provider` makes the Redux store available to React components.

Example:

```jsx
import { Provider } from "react-redux";
import store from "./store";

function Root() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
```

Components inside `App` can now access the store using React-Redux hooks.

---

# 9. Complete Redux Toolkit example

We will create a simple counter using:

- Redux Toolkit
- React-Redux
- React

## Step 1: Install dependencies

```bash
npm install @reduxjs/toolkit react-redux
```

---

## Step 2: Create a slice

File: `counterSlice.js`

```javascript
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",

  initialState,

  reducers: {
    increment(state) {
      state.count += 1;
    },

    decrement(state) {
      state.count -= 1;
    },

    incrementBy(state, action) {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementBy } = counterSlice.actions;

export default counterSlice.reducer;
```

### What happened?

`createSlice()` generated:

- Action creators
- Action types
- A reducer

Examples:

```javascript
increment();
```

creates an action equivalent to:

```javascript
{
  type: "counter/increment";
}
```

And:

```javascript
incrementBy(5);
```

creates:

```javascript
{
  type: "counter/incrementBy",
  payload: 5
}
```

---

## Step 3: Create the store

File: `store.js`

```javascript
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
```

The resulting state shape is:

```javascript
{
  counter: {
    count: 0;
  }
}
```

The `counter` key comes from the key in the store's reducer object.

---

## Step 4: Connect Redux to React

File: `main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);
```

The `Provider` makes the Redux store available to the React component tree.

---

## Step 5: Use Redux in a component

File: `App.jsx`

```jsx
import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, incrementBy } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>

      <button onClick={() => dispatch(decrement())}>Decrement</button>

      <button onClick={() => dispatch(incrementBy(5))}>Add 5</button>
    </div>
  );
}

export default App;
```

---

# 10. Complete dry run: Clicking "Add 5"

Suppose the current Redux state is:

```javascript
{
  counter: {
    count: 10;
  }
}
```

## Step 1: The user clicks the button

The event handler runs:

```javascript
dispatch(incrementBy(5));
```

## Step 2: The action creator creates an action

The action creator:

```javascript
incrementBy(5);
```

returns:

```javascript
{
  type: "counter/incrementBy",
  payload: 5
}
```

## Step 3: Dispatch sends the action

The action is sent to the Redux store.

## Step 4: The reducer processes the action

The relevant reducer is:

```javascript
incrementBy(state, action) {
  state.count += action.payload;
}
```

The current count is:

```text
10
```

The payload is:

```text
5
```

The calculation is:

```text
10 + 5 = 15
```

## Step 5: Immer produces the next state

The new counter state becomes:

```javascript
{
  count: 15;
}
```

The original state is not directly mutated.

## Step 6: The store updates

The complete Redux state becomes:

```javascript
{
  counter: {
    count: 15;
  }
}
```

## Step 7: React-Redux reads the updated state

The selector:

```javascript
(state) => state.counter.count;
```

now returns:

```text
15
```

The component renders the updated value.

```text
15
```

### Complete flow

```text
User clicks "Add 5"
        |
        v
dispatch(incrementBy(5))
        |
        v
Action creator creates:
{
  type: "counter/incrementBy",
  payload: 5
}
        |
        v
Redux store receives action
        |
        v
counterReducer processes action
        |
        v
Previous count: 10
        |
        v
10 + 5 = 15
        |
        v
New Redux state:
{
  counter: {
    count: 15
  }
}
        |
        v
useSelector() reads 15
        |
        v
React UI displays 15
```

---

# 11. Redux vs Redux Toolkit vs React-Redux

These three concepts are related but different.

| Technology    | Main purpose                              |
| ------------- | ----------------------------------------- |
| Redux         | Core state management                     |
| Redux Toolkit | Recommended tools for writing Redux logic |
| React-Redux   | Connects Redux with React                 |

### Redux

Provides the fundamental state-management system.

Important concepts:

- Store
- State
- Actions
- Dispatch
- Reducers
- Middleware

### Redux Toolkit

Simplifies Redux development.

Important tools:

- `configureStore()`
- `createSlice()`
- `createAction()`
- `createReducer()`
- `createAsyncThunk()`
- `createSelector()`
- `createEntityAdapter()`
- RTK Query

### React-Redux

Connects Redux to React.

Important APIs:

- `Provider`
- `useSelector()`
- `useDispatch()`

### Typical React project

```text
React application
       |
       +-- React-Redux
       |     |
       |     +-- Provider
       |     +-- useSelector()
       |     +-- useDispatch()
       |
       +-- Redux Toolkit
             |
             +-- configureStore()
             +-- createSlice()
             +-- createAsyncThunk()
             +-- RTK Query
```

---

# 12. When should you use Redux?

Redux is useful when:

- Many components need access to the same state.
- State is updated from many different places.
- State transitions are complex.
- You need predictable state updates.
- You want centralized debugging.
- You want a standardized architecture for shared state.
- You need an integrated solution for server-state caching through RTK Query.

Examples for a movie application:

```text
Authentication
Favorites
Movie watchlist
Global notifications
User preferences
Shared filters
Shopping cart
```

## When Redux may be unnecessary

You do not need Redux for every state variable.

Example:

```jsx
const [isOpen, setIsOpen] = useState(false);
```

A modal's open/closed state can remain local.

Another example:

```jsx
const [searchText, setSearchText] = useState("");
```

A simple input value usually does not need Redux unless multiple distant components need access to it.

### Practical rule

Use local React state for local UI concerns.

Use Redux for shared or complex application state when the centralized structure provides a real benefit.

---

# 13. Redux development workflow

When creating a new Redux feature, follow this general process.

## Step 1: Identify the state

Ask:

> What data does this feature need to manage?

Example:

```javascript
{
  movies: [],
  loading: false,
  error: null
}
```

## Step 2: Create a slice

Use `createSlice()`.

Define:

- `name`
- `initialState`
- `reducers`

## Step 3: Export action creators

Export the generated action creators from the slice.

## Step 4: Add the reducer to the store

Use `configureStore()` to register the reducer.

## Step 5: Connect the store to React

Wrap the application in `Provider`.

## Step 6: Read the state

Use `useSelector()` in components.

## Step 7: Update the state

Use `useDispatch()` to dispatch actions.

## Step 8: Handle asynchronous logic

Use RTK Query or `createAsyncThunk()` when appropriate.

---

# 14. Important conceptual distinctions

## Action vs action creator

An action is the object:

```javascript
{
  type: "counter/incrementBy",
  payload: 5
}
```

An action creator is the function that creates the object:

```javascript
incrementBy(5);
```

## Reducer vs slice

A reducer is a function that calculates the next state.

A slice is a feature-specific package containing state-related reducer logic, generated actions, and a slice reducer.

## Dispatch vs reducer

`dispatch()` sends an action.

The reducer calculates the next state based on that action.

## Store vs state

State is the actual data.

The store is the object that holds and manages the Redux state.

## Redux vs React state

React state is managed by React and is often local to a component.

Redux state is managed by the Redux store and can be shared across many components.

## Redux state vs server state

Redux can store server data, but server data has additional concerns such as caching, refetching, and invalidation.

RTK Query is designed to handle those concerns.

## `reducers` vs `extraReducers`

`reducers` defines the slice's own reducer cases and generates action creators.

`extraReducers` handles actions created elsewhere, such as thunk lifecycle actions.

## `createSlice()` vs `configureStore()`

`createSlice()` creates feature-specific Redux logic.

`configureStore()` creates the central Redux store and registers reducers.

---

# 15. Final mental model

Redux is a predictable system for managing shared application state.

The main concepts are:

```text
Store
  |
  +-- Holds state
  |
  +-- Receives actions through dispatch
  |
  +-- Runs reducers
  |
  +-- Produces new state
```

Remember these definitions:

- **State:** The current application data.
- **Store:** The central object that holds Redux state.
- **Action:** A description of an event.
- **Payload:** Extra data carried by an action.
- **Action creator:** A function that creates an action.
- **Dispatch:** Sends an action to the store.
- **Reducer:** Calculates the next state.
- **Selector:** Reads or derives data from state.
- **Middleware:** Handles logic around dispatch.
- **Slice:** Feature-specific Redux state and logic.
- **Provider:** Makes the Redux store available to React.
- **Redux Toolkit:** The recommended way to write Redux logic.
- **Immer:** Enables mutation-like reducer syntax while producing immutable updates.
- **RTK Query:** Handles API fetching and caching.
- **React-Redux:** Connects Redux with React.

The most important rule:

> Components dispatch actions. Reducers calculate the next state. Components read the updated state through selectors.

---

# (Q-2) from looking at my code, write down in order how i setup redux ??? for quick revise purpose...

==>

I’ll trace the Redux setup from the current counter example, then turn the actual code path into a short, ordered revision checklist. I’ll start with `App.jsx` and the nearby store/slice files so the notes match your implementation exactly.

Searched for files matching `Ultimate_React_Material` · `14_redux_&_redux_tookkit/1_Intro_to_Redux_and_Create_counter_app_using_redux_toolkit/src/**`, 9 matches

Read

Read

The current `App.jsx` is still the starter UI, while the Redux Toolkit package and the `store`/`counterSlice` files are already present. I’m reading those three files now to distinguish what has been set up from what still needs to be connected, so the revision notes don’t overstate the current implementation.

Read

Read

One important detail is clear: the slice currently defines only the `count` state and no reducers/actions yet, and `App.jsx` is not reading from Redux. I’m checking `main.jsx` for the provider wiring, which is the last piece needed to give you the setup order accurately.

Read

**Redux Setup Order**

1. Install packages:

   ```bash
   npm install @reduxjs/toolkit react-redux
   ```

2. Create a slice for the feature in `counterSlice.js`.

3. Define the initial state:

   ```js
   const initialState = { count: 0 };
   ```

4. Create the slice using `createSlice()`:

   ```js
   const counterSlice = createSlice({
     name: "counter",
     initialState,
   });
   ```

5. Export the slice reducer.

6. Create the Redux store in `store.js` using `configureStore()`.

7. Register the slice reducer inside the store:

   ```js
   export const store = configureStore({
     reducer: {
       counter: counterReducer,
     },
   });
   ```

8. Connect Redux to React in `main.jsx` using `Provider`:

   ```jsx
   <Provider store={store}>
     <App />
   </Provider>
   ```

9. In a component, read state with `useSelector()`:

   ```js
   const count = useSelector((state) => state.counter.count);
   ```

10. Change state by creating reducers/actions in the slice, importing the actions, and using `useDispatch()`.

**Current status:** steps 1–8 are set up. Your `App.jsx` still displays a hardcoded `0`, and `counterSlice.js` does not yet contain counter reducers such as `increase`, `decrease`, or `reset`.
