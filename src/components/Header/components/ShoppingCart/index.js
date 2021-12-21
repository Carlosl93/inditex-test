import React from "react";
import { useSelector } from "react-redux";

import CartIcon from "../../../Icons/CartIcon";

import { selectCartNumber } from "../../../../stores/items";
import CartNumber from "./components/CartNumber";
import styles from "./styles.module.css";

function ShoppingCart() {
  const cartNumber = useSelector(selectCartNumber);

  console.log("styles", styles);

  return (
    <div className={styles.shoppingContainer}>
      {cartNumber !== 0 && <CartNumber cartNumber={cartNumber} />}
      <CartIcon className={styles.cartIcon} />
    </div>
  );
}

export default ShoppingCart;
