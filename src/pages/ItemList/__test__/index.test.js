/* eslint-disable no-undef */
import React from "react";
import { mocked } from "jest-mock";

import { fetchItems } from "../../../api/services";
import { render, screen, waitFor } from "../../../utils/testUtils";
import { ITEMS_MOCK } from "../../../mocks";
import ItemList from "..";

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock("../../../api/services");

describe("ItemList", () => {
  test("Render ItemList component", () => {
    render(<ItemList />);

    // Check first dom elements
    expect(screen.getByText("Productos")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Buscar productos")).toBeInTheDocument();
    expect(screen.getByTestId("items-list")).toBeInTheDocument();
  });

  test("Render items", async () => {
    const mockedAxios = mocked(fetchItems);
    mockedAxios.mockImplementationOnce(() =>
      Promise.resolve({ data: ITEMS_MOCK })
    );

    render(<ItemList />);

    expect(fetchItems).toHaveBeenCalledTimes(1);
    expect(fetchItems).toHaveBeenCalledWith();

    await waitFor(() => {
      ITEMS_MOCK.forEach((item) =>
        expect(screen.getAllByText(item.brand).length).toBe(2)
      );
    });
  });
});
