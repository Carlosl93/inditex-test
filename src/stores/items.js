/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import client, { CLIENT_URLS } from "../api/client";

const itemsState = {
  items: [],
  singleItem: {},
  cartNumber: 0,
  searchItem: "",
};

export const getItems = createAsyncThunk("items/getItems", async () => {
  const response = await client.any(CLIENT_URLS.GET_ITEMS);
  return response.data;
});

export const getSingleItem = createAsyncThunk(
  "items/getSingleItem",
  async (id) => {
    const request = CLIENT_URLS.GET_SINGLE_ITEM;
    const response = await client.any(request(id));
    return response.data;
  }
);

export const postCart = createAsyncThunk(
  "items/postCart",
  async ({ id, colorCode, storageCode }) => {
    const request = CLIENT_URLS.POST_CART;
    const response = await client.any(request({ id, colorCode, storageCode }));
    return response.data.count;
  }
);

export const itemsSlice = createSlice({
  name: "items",
  initialState: itemsState,
  reducers: {
    search: (state, action) => {
      state.searchItem = action.payload;
    },
  },
  extraReducers: {
    // Get Items Action
    [getItems.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
    // Post Cart Action
    [postCart.fulfilled]: (state, action) => {
      state.cartNumber = action.payload;
    },
    // Get Single Item Actions
    [getSingleItem.fulfilled]: (state, action) => {
      state.singleItem = action.payload;
    },
  },
});

export const selectItems = (state) => state.items.items;
export const selectSingleItem = (state) => state.items.singleItem;
export const selectCartNumber = (state) => state.items.cartNumber;
export const searchItem = (state) => state.items.searchItem;

export const { actions } = itemsSlice;

export default itemsSlice.reducer;
