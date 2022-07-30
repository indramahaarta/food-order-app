import React, { useRef, useState } from "react";
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const inputAmout = useRef();
  const [inputIsValid, setInputIsValid] = useState(true);

  const inputChangeHandler = (event) => {
    if (event.target.value < 1 || event.target.value > 5)  {
      console.log(false);
      setInputIsValid(false);
      return;
    }

    setInputIsValid(true)
  }

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = +inputAmout.current.value;

    if (enteredAmount < 1 || enteredAmount > 5) {
      return;
    }

    props.onAddCart(enteredAmount);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={inputAmout}
        label="Amount"
        input={{
          id: "props_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        onChange={inputChangeHandler}
      />
      <button>+ Add</button>
      {!inputIsValid && <p className={classes.error}>Please enter a valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
