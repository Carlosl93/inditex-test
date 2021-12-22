import React from "react";
import { useSelector } from "react-redux";

import CartIcon from "../../../Icons/CartIcon";

import { selectCartNumber } from "../../../../stores/items";
import styles from "./styles.module.css";

function ShoppingCart() {
  const cartNumber = useSelector(selectCartNumber);

  return (
    <div className={styles.shoppingContainer}>
      {cartNumber !== 0 && <p className={styles.cartNumber}>{cartNumber}</p>}
      <CartIcon className={styles.cartIcon} />
    </div>
  );
}

export default ShoppingCart;
