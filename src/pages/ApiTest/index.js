/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  selectItems,
  selectCartNumber,
  selectSingleItem,
  getItems,
  postCart,
  getSingleItem,
} from "../../stores/items";

function ApiTest() {
  const items = useSelector(selectItems);
  const cartNumber = useSelector(selectCartNumber);
  const singleItem = useSelector(selectSingleItem);
  const dispatch = useDispatch();

  const handleGetItems = () => {
    dispatch(getItems());
  };

  const handleGetSingleItem = () => {
    dispatch(getSingleItem({ id: "qu-cIoRt8Y4ZeQdCuOr4l" }));
  };

  const handleGetCart = () => {
    dispatch(
      postCart({
        id: "qu-cIoRt8Y4ZeQdCuOr4l",
        colorCode: 1000,
        storageCode: 2000,
      })
    );
  };

  return (
    <div>
      <button type="button" onClick={handleGetItems}>
        Get Items
      </button>
      <button type="button" onClick={handleGetSingleItem}>
        Get Item qu-cIoRt8Y4ZeQdCuOr4l
      </button>
      <button type="button" onClick={handleGetCart}>
        Get Cart
      </button>
    </div>
  );
}

export default ApiTest;
