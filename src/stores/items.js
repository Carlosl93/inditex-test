/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchItems, fetchPostCart, fetchSingleItem } from "../api/services";

export const itemsState = {
  items: [],
  singleItem: {},
  cartNumber: 0,
  searchItem: "",
};

export const getItems = createAsyncThunk(
  "items/getItems",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchItems();
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);

export const getSingleItem = createAsyncThunk(
  "items/getSingleItem",
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await fetchSingleItem({ id });
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
  }
);

export const postCart = createAsyncThunk(
  "items/postCart",
  async ({ id, colorCode, storageCode }, { rejectWithValue }) => {
    try {
      const response = await fetchPostCart({ id, colorCode, storageCode });
      return response.data.count;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response);
    }
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
      console.log("heeey");
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
