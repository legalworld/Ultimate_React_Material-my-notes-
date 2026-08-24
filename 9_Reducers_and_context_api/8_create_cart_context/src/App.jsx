import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";

function App() {
  return (
    <>
      <CartProvider>
        <Products />
      </CartProvider>
    </>
  );
}

export default App;

// check commit history, when you go through this
// project for revise..
