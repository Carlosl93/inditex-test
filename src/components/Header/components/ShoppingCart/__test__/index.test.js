import React from "react";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";

import ShoppingCart from "..";
import { render, screen } from "../../../../../utils/testUtils";

const mockStore = configureStore([thunk]);

describe("ShoppingCart", () => {
  test("Should render icon", () => {
    render(<ShoppingCart />);

    expect(screen.getByTestId("cart-icon")).toBeInTheDocument();
  });

  test("Should render icon and number of items", () => {
    render(<ShoppingCart />);

    expect(screen.getByTestId("cart-icon")).toBeInTheDocument();
  });
});
