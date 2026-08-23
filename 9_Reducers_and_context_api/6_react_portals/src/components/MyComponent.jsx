import { createPortal } from "react-dom";

function MyComponent() {
  return createPortal(
    <>
      <h1>MyComponent</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe eius in
        maxime voluptatibus quam expedita? Veritatis pariatur ipsam alias natus
        obcaecati, vel voluptatum, earum adipisci, hic at eos quidem ipsa!
      </p>
    </>,
    document.getElementById("newRoot"),
  );
}

export default MyComponent;

// * createPortal is a function, that takes two arguments.
// * the first one is the component you want to render, and the other one is where you want to render it...

/*
in the next lecture, we gonna make a shopping cart project.
there we will use React Portals.

In a **shopping cart**, React Portals are commonly used to render the cart UI **outside the normal DOM hierarchy**, usually directly under `<body>`.

For example:

```jsx
<div id="root">...</div>
<div id="cart-root"></div>
```

You might render:

```jsx
createPortal(<ShoppingCart />, document.getElementById("cart-root"))
```

### Why?

A cart is often a **sidebar/modal overlay** that needs:

* `position: fixed`
* high `z-index`
* to escape parent `overflow: hidden`
* independent visual positioning

So the **cart state can still belong to your React app**, but its **DOM element can be placed elsewhere** using a Portal.

Think: **React component hierarchy ≠ DOM hierarchy.**

I can also show you a tiny shopping-cart example using `createPortal`.



*/

/*
the modal and it's background, we gonna make them seperately
outside of root...

we don't deeply nest modals...


*/
