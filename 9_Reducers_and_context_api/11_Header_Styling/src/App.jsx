// ! global imports
import { ToastContainer, toast } from "react-toastify";

// ! local imports
import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";
import Header from "./components/Header";

function App() {
  return (
    <>
      <CartProvider>
        <ToastContainer
          position="bottom-right"
          newestOnTop={true}
          autoClose={600} /* 600 mili-second */
          hideProgressBar={true}
        />
        <Header />
        <Products />
      </CartProvider>
    </>
  );
}

export default App;
