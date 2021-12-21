import React from "react";

import styles from "./styles.module.css";

function Description({ descriptionInfo }) {
  const { brand, model, price, dimentions, weight } = descriptionInfo;
  return (
    <div className={styles.descriptionContainer}>
      <h3>Descripción del producto</h3>
      <p>
        <b>Marca</b> - {brand}
      </p>
      <p>
        <b>Modelo</b> - {model}
      </p>
      <p>
        <b>Dimensiones</b> - {dimentions}
      </p>
      <p>
        <b>Peso</b> - {weight}
      </p>
      <p>
        <b>Precio</b> - {price}€
      </p>
    </div>
  );
}

export default Description;
