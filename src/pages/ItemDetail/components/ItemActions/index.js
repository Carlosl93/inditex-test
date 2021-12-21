import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { postCart } from "../../../../stores/items";

import Action from "./components/Action";
import styles from "./styles.module.css";

function ItemActions({ options, id }) {
  const [colorValue, setColorValue] = useState(null);
  const [storageValue, setStorageValue] = useState(null);

  const dispatch = useDispatch();

  const handleAddCart = (e) => {
    e.preventDefault();

    if (colorValue !== null && storageValue !== null) {
      dispatch(
        postCart({
          id,
          colorCode: options.colors[colorValue].code,
          storageCode: options.storages[storageValue].code,
        })
      );
    }
  };

  return (
    <div className={styles.descriptionContainer}>
      <h3>Opciones</h3>
      {options && options.colors && (
        <div className={styles.actions}>
          <Action
            title="Seleccione un color: "
            options={options.colors}
            value={colorValue}
            setValue={setColorValue}
          />
          <Action
            title="Seleccione la capacidad: "
            options={options.storages}
            value={storageValue}
            setValue={setStorageValue}
          />
        </div>
      )}
      <button
        type="button"
        onClick={handleAddCart}
        className={styles.buttonCart}
      >
        Agregar al carro
      </button>
    </div>
  );
}

export default ItemActions;
