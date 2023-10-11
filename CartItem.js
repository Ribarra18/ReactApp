import React from "react";

const CartItem = ({ item, img, price, quantity }) => (
  <div>
    <h4>{item}</h4>
    <img src={img} alt="" width="200" />
    <ul>
      <li>Price: ${price}</li>
      <li>Quantity: {quantity}</li>
      <li>Subtotal: ${price * quantity}</li>
    </ul>
  </div>
);

export default CartItem;
