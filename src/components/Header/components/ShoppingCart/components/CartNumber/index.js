import React from "react";

import styles from "./styles.module.css";

function CartNumber({ cartNumber }) {
  return <p className={styles.cartNumber}>{cartNumber}</p>;
}

export default CartNumber;
