import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";

function Cart() {
  const { cart } = useCart();

  // ---------------------------------------------------------
  // let totalAmount = 0;
  // for (let item of cart) {
  //   totalAmount += item.price * item.quantity;
  // }

  // or use reduce() for same work

  const totalAmount = cart.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  // ---------------------------------------------------------
  if (cart.length === 0) return <h1>No Items Found!!!</h1>;
  return (
    <div className={styles.cart}>
      <h2 className={styles.cartHeading}>Shopping Cart</h2>
      <div>
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <h1>TotalAmount: &#8377;{totalAmount} </h1>
    </div>
  );
}

export default Cart;
