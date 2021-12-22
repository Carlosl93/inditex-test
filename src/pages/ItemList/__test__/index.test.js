import React from "react";

import { render, screen } from "../../../utils/test-utils";
import ItemList from "..";

describe("ItemList", () => {
  test("Render ItemList component", () => {
    render(<ItemList />);

    // Check first dom elements
    expect(screen.getByText("Productos")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Buscar productos")).toBeInTheDocument();
    expect(screen.getByTestId("items-list")).toBeInTheDocument();
  });
});
