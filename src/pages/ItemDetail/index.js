import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom";

import { getSingleItem, selectSingleItem } from "../../stores/items";

import ChevronLeft from "../../components/Icons/ChevronLeft";
import Description from "./components/Description";
import Actions from "./components/ItemActions";
import styles from "./styles.module.css";

function ItemDetail({ match }) {
  const singleItem = useSelector(selectSingleItem);
  const { brand, model, price, dimentions, weight, imgUrl, options } =
    singleItem;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleItem({ id: match.params.itemId }));
  }, [dispatch, getSingleItem, match]);

  const descriptionInfo = useMemo(
    () => ({
      brand,
      model,
      price,
      dimentions,
      weight,
    }),
    [singleItem]
  );

  return (
    <>
      <Link className={styles.backIcon} to="/">
        <ChevronLeft className={styles.backIcon} />
      </Link>
      <div className={styles.itemDetailContainer}>
        <div className={styles.itemDetailImage}>
          <img className={styles.itemImage} src={imgUrl} alt={brand} />
        </div>
        <div className={styles.itemDetailAction}>
          <Description descriptionInfo={descriptionInfo} />
          <Actions options={options} id={match.params.itemId} />
        </div>
      </div>
    </>
  );
}

export default withRouter(ItemDetail);
