import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import itemsReducer from "./stores/items";

const middleware = [...getDefaultMiddleware()];

const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
  middleware,
});

export default store;
