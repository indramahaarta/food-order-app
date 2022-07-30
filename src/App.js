import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Alert from "./components/UI/Alert";
import CartCotextProvider from "./state/CartContextProvider";

function App() {
  const [isCartActive, setCartActive] = useState(false);
  const [isAlertActive, setAlertActive] = useState(false);

  const openCartHandler = () => {
    setCartActive(true);
  };

  const closeCartHandler = () => {
    setCartActive(false);
  };

  const openAlertHandler = () => {
    setAlertActive(true);

    setTimeout(() => {
      setAlertActive(false)
    }, 4500)
  };

  const closeAlertHandler = () => {
    setAlertActive(false);
  };

  return (
    <CartCotextProvider>
      {isCartActive && (
        <Cart onClose={closeCartHandler} onSubmitOrder={openAlertHandler} />
      )}
      <Header onOpen={openCartHandler} />
      <main>
        <Meals />
      </main>
      {isAlertActive && (
        <Alert
          message="Order Successfull! :D"
          onClose={closeAlertHandler}
          onOpen={openAlertHandler}
        />
      )}
    </CartCotextProvider>
  );
}

export default App;
