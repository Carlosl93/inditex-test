/* eslint-disable no-undef */
import axios from "axios";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mocked } from "jest-mock";

import itemsReducer, { itemsState, actions, getItems } from "../items";
import { ITEMS_MOCK } from "../../mocks";
import { getStoreWithState } from "../../store";
import { fetchItems } from "../../api/services";

const mockStore = configureStore([thunk]);

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock("axios");
const mockedAxios = axios;

describe("Items Reducer", () => {
  it("Should return the initial state when empty action", () => {
    const initialState = undefined;
    const action = { type: "" };
    const result = itemsReducer(initialState, action);

    expect(result).toEqual(itemsState);
  });

  it("Search Reducer - Should save the search values on store", () => {
    const store = getStoreWithState();
    let state = store.getState();
    const searchValue = "testing";

    store.dispatch(actions.search(searchValue));
    state = store.getState().items;

    expect(state.searchItem).toEqual(searchValue);
  });
});

// describe("Items Thunks", () => {
//   it("getItems", async () => {
//     mockedAxios.get.mockImplementation(() => Promise.resolve({ data: "hola" }));
//     const store = mockStore(itemsState);
//     await store.dispatch(getItems());
//     const actionss = store.getActions();
//     console.log(store.getState());
//     // console.log(actionss[1].payload);
//   });
// });
