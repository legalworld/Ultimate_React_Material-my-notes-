import { products } from "../data/Products";
import Product from "./Product";
import styles from "./Products.module.css";
import Container from "./UI/Container";

function Products() {
  return (
    <Container>
      <h1>Best Of ARC</h1>
      <div className={styles.products}>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Container>
  );
}

export default Products;
