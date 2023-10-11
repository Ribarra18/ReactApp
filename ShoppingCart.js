import React from "react";
import CartItem from "./CartItem";
const ShoppingCart = ({ items, username }) => {
  const total = items.reduce((acc, i) => {
    return acc + i.price * i.quantity;
  }, 0);
  return (
    <div>
      <h1 className="cart-header">{username}'s Shopping Cart</h1>
      <div>
        {items.map((i) => (
          <CartItem
            item={i.name}
            img={i.img}
            price={i.price}
            quantity={i.quantity}
          />
        ))}
      </div>
      <b>Cart Total: ${total}</b>
    </div>
  );
};

export default ShoppingCart;
