// ! global Imports
import { useState, useEffect } from "react";

// ! Local Imports
import Modal from "./UI/Modal";
import Cart from "./Cart";

function Header() {
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
    <header>
      <nav>
        <h1 className="logo">ARC Shop</h1>
        <button
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
          Show Cart
        </button>
      </nav>

      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <Cart />
        </Modal>
      )}
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
