import React from "react";

const CartContext = React.createContext({
    items: [],
    totalPrice: 0,
    addItem: () => {},
    removeItem: () => {},
    removeAllItems: () => {}
});

export default CartContext;