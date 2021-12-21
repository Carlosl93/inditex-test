import React from "react";

import ShoppingIcon from "../Icons/ShoppingIcon";
import ShoppingCart from "./components/ShoppingCart";

import styles from "./styles.module.css";

function Header() {
  return (
    <nav className={styles.headerContainer}>
      <div>
        <div className={styles.headerTitleContainer}>
          <div className={styles.headerTitle}>
            <ShoppingIcon className={styles.headerIcon} />
            <h3 className={styles.headerText}>Inditex Shopping</h3>
          </div>
        </div>
        <ShoppingCart />
      </div>
    </nav>
  );
}

export default Header;
