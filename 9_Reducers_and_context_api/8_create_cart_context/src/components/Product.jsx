import { useCart } from "../contexts/CartProvider";

function Product({ id, title, price, img }) {
  const { addItemTocart } = useCart();

  function handleAdd(id) {
    const newCartItem = {
      id: id,
      price,
      img,
      title,
      quantity: 1,
    };
    addItemTocart(newCartItem);
  }

  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        border: "2px solid #343434",
      }}
    >
      <p>id: {id}</p>
      <img src={img} alt={title} height={200} />
      <p>title: {title}</p>
      <p>price: {price}</p>
      <button
        onClick={() => {
          handleAdd(id);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Product;

/*

previously we were doing-->

! ```CartProvider.jsx```

      return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );

we were passing the dispatch function inside of our
context...
and calling the dispatch function inside of 
! ```Product.jsx```
dispatch({type: "ADD_ITEM", payload: newCartItem});
......


but some people don't call dispatch function in other places...
they think they gonna write every logic about state update, which function is being called, inside of
CartProvider component...
like this--->

! ---```CartProvider.jsx```
const addItemTocart = (newCartItem) => {
    dispatch({ type: "ADD_ITEM", payload: newCartItem });
  };

  return (
    <CartContext.Provider value={{ cart, addItemTocart }}>
      {children}
    </CartContext.Provider>
  );
---  

! ```Product.jsx```
---
const { addItemTocart } = useCart();

  function handleAdd(id) {
    const newCartItem = {
      id: id,
      price,
      img,
      title,
      quantity: 1,
    };
    addItemTocart(newCartItem);
  }
---    

*/

/*
now as you can see is by clicking on the button,
items get added inside of cart, but we are not showing it on the screen yet...
* how to render the cart ? that is something, we gonna discuss in the next lecture...
* we gonna create a Modal/Dialogue Box design for cart... 


*/
