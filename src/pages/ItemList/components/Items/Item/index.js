import React from "react";
import { Link } from "react-router-dom";

import ChevronRight from "../../../../../components/Icons/ChevronRight";
import styles from "./styles.module.css";

function Item({ item }) {
  const { brand, id, imgUrl, model, price } = item;

  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={imgUrl} alt={brand} />
      <div className={styles.infoContainer}>
        <p className={styles.itemBrand}>{brand}</p>
        <p className={styles.itemModel}>{model}</p>
        <div className={styles.itemBuy}>
          <p className={styles.itemPrice}>{price ? `${price}€` : "-"}</p>
          <Link className={styles.buyButton} to={`/item/${id}`}>
            <ChevronRight className={styles.buyIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
