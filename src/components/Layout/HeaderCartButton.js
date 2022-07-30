import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../state/cart-context";
import CartIcon from "../Cart/CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [bumpIsUsing, setBumpIsUsing] = useState(false);

  const cardItem = useContext(CartContext);
  const cartItemVal = cardItem.items.reduce((cur, item) => cur + item.amount, 0);
  const headerCartButtonClass = `${classes.button} ${bumpIsUsing? classes.bump : ''}`

  useEffect(() => {
    setBumpIsUsing(true)

    const timer = setTimeout(() => {
      setBumpIsUsing(false);
    } , 300)

    return () => {
      clearTimeout(timer);
    }
    
  } , [cardItem.items])

  return (
    <button className={headerCartButtonClass} onClick={props.onOpen}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{cartItemVal}</span>
    </button>
  );
};

export default HeaderCartButton;
