import { useDispatch, useSelector } from "react-redux";
import styles from "./Product.module.css";
import { toast } from "react-toastify";
import { addItemToCart } from "../features/cart/cartSlice.js";

function Product({ id, title, price, img }) {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);

  function handleAdd(id) {
    for (const item of cart) {
      if (item.id === id) {
        toast.error("Item already added to cart");
        return;
      }
    }

    const newCartItem = {
      id: id,
      price,
      img,
      title,
      quantity: 1,
    };
    dispatch(addItemToCart(newCartItem));
    toast.info("Item added");
  }

  return (
    <div className={styles.product}>
      <img src={img} alt={title} className={styles.productImage} />
      <p className={styles.title}>{title}</p>
      <p className={styles.price}>&#8377;{price}</p>
      <button
        className={styles.addToCartBtn}
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
