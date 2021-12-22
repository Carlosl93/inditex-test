import React from "react";

import styles from "./styles.module.css";

function Description({ descriptionInfo }) {
  const { brand, model, price, dimentions, weight } = descriptionInfo;
  return (
    <div className={styles.descriptionContainer}>
      <h3>Descripción del producto</h3>
      <div className={styles.rowText}>
        <b>Marca</b> - <p>{brand}</p>
      </div>
      <div className={styles.rowText}>
        <b>Modelo</b> - <p>{model}</p>
      </div>
      <div className={styles.rowText}>
        <b>Dimensiones</b> - <p>{dimentions}</p>
      </div>
      <div className={styles.rowText}>
        <b>Peso</b> - <p>{weight}</p>
      </div>
      <div className={styles.rowText}>
        <b>Precio</b> - <p>{price}€</p>
      </div>
    </div>
  );
}

export default Description;
