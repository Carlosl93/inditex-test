import React from "react";
import { useDispatch } from "react-redux";

import { actions } from "../../../../stores/items";
import styles from "./styles.module.css";

function SearchBar() {
  const dispatch = useDispatch();
  const { search } = actions;

  const handleChangeSearch = (e) => {
    dispatch(search(e.target.value));
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        className={styles.searchInput}
        onChange={handleChangeSearch}
        placeholder="Buscar productos"
      />
    </div>
  );
}

export default SearchBar;
