import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import itemsReducer from "./stores/items";

const middleware = [...getDefaultMiddleware()];

const reducer = {
  items: itemsReducer,
};

const store = configureStore({
  reducer,
  middleware,
});

export function getStoreWithState() {
  return configureStore({ reducer });
}

export default store;
