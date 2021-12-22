/* eslint-disable no-undef */
import React from "react";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { render, screen } from "../../../../../../utils/testUtils";
import Item from "..";

describe("Item", () => {
  const itemMock = {
    brand: "Acer",
    id: "ZmGrkLRPXOTpxsU4jjAcv",
    imgUrl:
      "https://front-test-api.herokuapp.com/images/ZmGrkLRPXOTpxsU4jjAcv.jpg",
    model: "Iconia Talk S",
    price: "170",
  };

  test("Render Item component", async () => {
    render(<Item item={itemMock} />);

    // Check first dom elements
    expect(screen.getByText(itemMock.brand)).toBeInTheDocument();
    expect(screen.getByText(itemMock.model)).toBeInTheDocument();
    expect(screen.getByText(`${itemMock.price}€`)).toBeInTheDocument();
    expect(screen.getByTestId("redirect-detail")).toBeInTheDocument();
  });

  test("Redirects to item detail", async () => {
    const history = createMemoryHistory();

    // mock push function
    history.push = jest.fn();

    render(
      <Router history={history}>
        <Item item={itemMock} />
      </Router>
    );

    userEvent.click(screen.getByTestId("redirect-detail"));

    expect(history.push).toHaveBeenCalledWith(`/item/${itemMock.id}`);
  });
});
