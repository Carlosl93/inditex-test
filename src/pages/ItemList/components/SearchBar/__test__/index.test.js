/* eslint-disable no-undef */
import React from "react";

import { render, screen, fireEvent } from "../../../../../utils/testUtils";
import SearchBar from "..";

describe("SearchBar", () => {
  test("Render SearchBar component", () => {
    render(<SearchBar />);

    expect(screen.getByPlaceholderText("Buscar productos")).toBeInTheDocument();
  });

  test("When input changes", async () => {
    render(<SearchBar />);

    const searchInput = screen.getByPlaceholderText("Buscar productos");
    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});
