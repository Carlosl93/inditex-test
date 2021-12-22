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
      return response.data;
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
    [getItems.pending]: (state) => {
      state.itemsLoading = true;
    },
    [getItems.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.itemsLoading = false;
    },
    // Post Cart Action
    [postCart.pending]: (state) => {
      state.cartLoading = true;
    },
    [postCart.fulfilled]: (state, action) => {
      state.cartNumber = action.payload.count;
      state.cartLoading = false;
    },
    // Get Single Item Actions
    [getSingleItem.pending]: (state) => {
      state.singleItemLoading = true;
    },
    [getSingleItem.fulfilled]: (state, action) => {
      state.singleItem = action.payload;
      state.singleItemLoading = false;
    },
  },
});

export const selectItems = (state) => state.items.items;
export const selectSingleItem = (state) => state.items.singleItem;
export const selectCartNumber = (state) => state.items.cartNumber;
export const searchItem = (state) => state.items.searchItem;

export const { actions } = itemsSlice;

export default itemsSlice.reducer;
