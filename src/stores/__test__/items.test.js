/* eslint-disable no-undef */
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { mocked } from "jest-mock";

import itemsReducer, {
  itemsState,
  actions,
  getItems,
  getSingleItem,
  postCart,
} from "../items";
import { ITEMS_MOCK, ITEM_DETAIL_MOCK, CART_MOCK } from "../../mocks";
import { getStoreWithState } from "../../store";
import { fetchItems, fetchPostCart, fetchSingleItem } from "../../api/services";

const mockStore = configureStore([thunk]);

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock("../../api/services");

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

describe("Items Thunks", () => {
  describe("getItems", () => {
    it("Success", async () => {
      const mockedAxios = mocked(fetchItems);
      mockedAxios.mockImplementationOnce(() =>
        Promise.resolve({ data: ITEMS_MOCK })
      );
      const store = mockStore(itemsState);
      await store.dispatch(getItems());
      const storeAction = store.getActions();
      expect(storeAction[1].payload).toEqual(ITEMS_MOCK);
    });
  });

  describe("getSingleItem", () => {
    it("Success", async () => {
      const mockedAxios = mocked(fetchSingleItem);
      mockedAxios.mockImplementationOnce(() =>
        Promise.resolve({ data: ITEM_DETAIL_MOCK })
      );
      const store = mockStore(itemsState);
      await store.dispatch(getSingleItem({ id: "test" }));
      const storeAction = store.getActions();
      expect(storeAction[1].payload).toEqual(ITEM_DETAIL_MOCK);
    });
  });

  describe("postCart", () => {
    it("Success", async () => {
      const mockedAxios = mocked(fetchPostCart);
      mockedAxios.mockImplementationOnce(() =>
        Promise.resolve({ data: CART_MOCK })
      );
      const store = mockStore(itemsState);
      await store.dispatch(
        postCart({ id: "test", colorCode: "test", storageCode: "test" })
      );
      const storeAction = store.getActions();
      expect(storeAction[1].payload).toEqual(CART_MOCK);
    });
  });
});
