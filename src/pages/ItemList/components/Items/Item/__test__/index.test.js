import React from "react";
import userEvent from "@testing-library/user-event";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import { render, screen } from "../../../../../../utils/test-utils";
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

    const { getByText } = render(
      <Router history={history}>
        <Item item={itemMock} />
      </Router>
    );

    userEvent.click(screen.getByTestId("redirect-detail"));

    expect(history.push).toHaveBeenCalledWith(`/item/${itemMock.id}`);
  });
});
