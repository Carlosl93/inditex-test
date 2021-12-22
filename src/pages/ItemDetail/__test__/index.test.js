/* eslint-disable no-undef */
import React from "react";
import { mocked } from "jest-mock";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";

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

    // Check first dom elements
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
    history.push = jest.fn();

    render(<ItemDetail />);

    userEvent.click(screen.getByTestId("redirect-list"));

    await waitFor(() => {
      expect(history.push).toHaveBeenCalledWith(`/item/${itemMock.id}`);
    });
  });
});
