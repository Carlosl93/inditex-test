/* eslint-disable no-undef */
import React from "react";
import { mocked } from "jest-mock";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { fetchSingleItem } from "../../../api/services";
import { render, screen, waitFor } from "../../../utils/testUtils";
import { ITEM_DETAIL_MOCK } from "../../../mocks";
import ItemDetail from "..";

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock("../../../api/services");

describe("ItemDetail", () => {
  test("Render ItemDetail component", () => {
    render(<ItemDetail />);

    expect(screen.getByTestId("item-detail")).toBeInTheDocument();
  });

  test("Render single item detail", async () => {
    const mockedAxios = mocked(fetchSingleItem);
    mockedAxios.mockImplementationOnce(() =>
      Promise.resolve({ data: ITEM_DETAIL_MOCK })
    );

    render(<ItemDetail />);

    expect(fetchSingleItem).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.getByText(ITEM_DETAIL_MOCK.brand)).toBeInTheDocument();
    });
  });

  test("Redirect to item list", async () => {
    const history = createMemoryHistory();

    // mock push function
    history.push = jest.fn();

    render(
      <Router history={history}>
        <ItemDetail />
      </Router>
    );

    userEvent.click(screen.getByTestId("redirect-list"));

    expect(history.push).toHaveBeenCalledWith("/");
  });
});
