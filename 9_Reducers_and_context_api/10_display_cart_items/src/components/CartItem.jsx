import { useCart } from "../contexts/CartProvider";
function CartItem({ id, price, title, img, quantity }) {
  const { increaseQty, decreaseQty, removeItemFromCart } = useCart();

  return (
    <div
      style={{
        margin: "1rem",
        padding: "1rem",
        border: "2px solid #343434",
      }}
    >
      <p>id: {id}</p>
      <p>
        price: {price} * {quantity} = {price * quantity}
      </p>
      <p>title: {title}</p>
      <p>quantity: {quantity} </p>
      <button
        onClick={() => {
          increaseQty(id);
        }}
      >
        Increase Quantity
      </button>
      <button
        onClick={() => {
          if (quantity <= 1) {
            return;
          }
          decreaseQty(id);
        }}
      >
        Decrease Quantity
      </button>
      <button
        onClick={() => {
          removeItemFromCart(id);
        }}
      >
        Remove Item
      </button>
    </div>
  );
}

export default CartItem;
