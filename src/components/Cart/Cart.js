import React, { useContext } from "react";
import CartContext from "../../state/cart-context";
import Modal from "../UI/Modal";

import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const ctx = useContext(CartContext);

  const price = `$${ctx.totalPrice.toFixed(2)}`;
  const itemsIsExist = ctx.items.length > 0;

  const cartAddHandler = (item) => {
    ctx.addItem({...item, amount: 1})
  };

  const cartRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const orderHandler = () => {
    ctx.removeAllItems();
    props.onClose();
    props.onSubmitOrder();
  }

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onAdd={cartAddHandler.bind(null, item)}
          onRemove={cartRemoveHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose} onOrder={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{price}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {itemsIsExist && <button onClick={orderHandler} className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
