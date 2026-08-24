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
