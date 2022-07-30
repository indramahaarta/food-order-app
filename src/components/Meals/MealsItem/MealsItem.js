import React, { useContext } from "react";
import CartContext from "../../../state/cart-context";
import MealItemForm from "./MealItemForm";

import classes from "./MealsItem.module.css";

const MealsItem = (props) => {
  const price = `$${props.price}`;

  const ctx = useContext(CartContext);

  const addCartHandler = (enteredAmount) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      description: props.description,
      price: props.price,
      amount: enteredAmount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddCart={addCartHandler} />
      </div>
    </li>
  );
};

export default MealsItem;
