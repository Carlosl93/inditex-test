import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { selectItems, getItems, searchItem } from "../../stores/items";
import filterItems from "../../utils";

import SearchBar from "./components/SearchBar";
import Items from "./components/Items";
import styles from "./styles.module.css";

function ItemList() {
  const items = useSelector(selectItems);
  const searchValue = useSelector(searchItem);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  const itemsSearch = useMemo(
    () => filterItems({ value: searchValue, items }),
    [items, searchValue, filterItems]
  );

  return (
    <div data-testid="items-list" className={styles.listContainer}>
      <div className={styles.searchContainer}>
        <p className={styles.searchTitle}>Productos</p>
        <SearchBar />
      </div>
      <Items items={itemsSearch} />
    </div>
  );
}

export default ItemList;
