import { useCart } from "../contexts/CartProvider";
import styles from "./Product.module.css";
import { toast } from "react-toastify";

function Product({ id, title, price, img }) {
  const { addItemTocart, cart } = useCart();

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
    addItemTocart(newCartItem);
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
