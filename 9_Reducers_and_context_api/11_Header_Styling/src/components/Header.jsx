// ! global Imports
import { useState, useEffect } from "react";
import { BsCartFill } from "react-icons/bs";

// ! Local Imports
import Modal from "./UI/Modal";
import Cart from "./Cart";
import styles from "./Header.module.css";
import Container from "./UI/Container";
import { useCart } from "../contexts/CartProvider";

function Header() {
  const { cart } = useCart();
  const totalQuantity = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  function closeModal() {
    setIsModalOpen(false);
  }
  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "scroll";
    }
  }, [isModalOpen]);
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1>ARC Shop</h1>
          <button
            className={styles.showCartBtn}
            onClick={() => {
              setIsModalOpen(true);
            }}
          >
            <span className={styles.cartIconAndNumber}>
              <BsCartFill />
              {/* {totalQuantity > 0 && (
                <span className={styles.number}>{totalQuantity}</span>
              )} */}
              {/* or,the below one... same result */}
              {!!totalQuantity > 0 && (
                <span className={styles.number}>{totalQuantity}</span>
              )}
            </span>
            <span>Cart</span>
          </button>
        </nav>

        {isModalOpen && (
          <Modal closeModal={closeModal}>
            <Cart />
          </Modal>
        )}
      </Container>
    </header>
  );
}

export default Header;

/*
i want that when i click on the button,
my modal gets open. and when i click on the Backdrop, my modal 
get close...
for that we gonna use react state.

and we are making state here, cause we gonna control the modal from here...
==> check the code we did it...

and we also want to disable the scroll of 
backDrop when the Modal is open...
==> for that work we gonna use useEffect(), in this file.
and if we pass a dependency array, then whenever the state changes, the callback will also run... 

! documentElement means html element...

*/
