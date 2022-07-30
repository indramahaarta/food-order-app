import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const newTotalPrice =
      state.totalPrice + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });
    const existingCartItem = state.items[existingCartItemIndex];
    let updateItems;

    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updateItems = [...state.items];
      updateItems[existingCartItemIndex] = updateItem;
    } else {
      updateItems = state.items.concat(action.item);
    }

    return { items: updateItems, totalPrice: newTotalPrice};
  } else if (action.type === "REMOVE") {
    const cartItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });
    let updateItems;
    const newTotalPrice = state.totalPrice - state.items[cartItemIndex].price;

    if (state.items[cartItemIndex].amount === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updateItems = [...state.items];
      updateItems[cartItemIndex].amount -= 1;
    }

    return { items: updateItems, totalPrice: newTotalPrice};
  } else if (action.type === "REMOVE_ALL") {
    return { items: [], totalPrice: 0};
  }

  return defaultState;
};

const CartCotextProvider = (props) => {
  const [cartState, dispatchCartFn] = useReducer(cartReducer, defaultState);

  const addItemContext = (item) => {
    dispatchCartFn({ type: "ADD", item: item });
  };

  const removeItemContext = (id) => {
    dispatchCartFn({ type: "REMOVE", id: id });
  };

  const removeAllItemsContext = () => {
    dispatchCartFn({ type: "REMOVE_ALL" });
  };

  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemContext,
    removeItem: removeItemContext,
    removeAllItems: removeAllItemsContext,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartCotextProvider;
