import React from "react";

import Item from "./Item";
import styles from "./styles.module.css";

function Items({ items }) {
  return (
    <div className={styles.itemsContainer}>
      {items.map((item) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Items;
