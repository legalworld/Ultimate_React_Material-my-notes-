import { products } from "../data/Products";
import Product from "./Product";

function Products() {
  return (
    <div>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
}

export default Products;
