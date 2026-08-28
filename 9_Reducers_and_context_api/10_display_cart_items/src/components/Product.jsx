import { useCart } from "../contexts/CartProvider";

function Product({ id, title, price, img }) {
  const { addItemTocart, cart } = useCart();

  function handleAdd(id) {
    for (const item of cart) {
      if (item.id === id) {
        alert("Item already added to cart");
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
    alert("Item added");
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
