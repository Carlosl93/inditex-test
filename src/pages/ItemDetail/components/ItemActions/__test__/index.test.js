/* eslint-disable no-undef */
import React from "react";
import userEvent from "@testing-library/user-event";
import { mocked } from "jest-mock";

import { fetchPostCart } from "../../../../../api/services";
import { render, screen } from "../../../../../utils/testUtils";
import { CART_MOCK, OPTIONS_MOCK } from "../../../../../mocks";
import ItemActions from "..";

afterEach(() => {
  jest.resetAllMocks();
});

jest.mock("../../../../../api/services");

describe("ItemActions", () => {
  test("Render ItemActions component", async () => {
    render(<ItemActions options={OPTIONS_MOCK} id="test" />);

    expect(screen.getByText(OPTIONS_MOCK.colors[0].name)).toBeInTheDocument();
    expect(screen.getByText(OPTIONS_MOCK.colors[1].name)).toBeInTheDocument();
    expect(screen.getByText(OPTIONS_MOCK.storages[0].name)).toBeInTheDocument();
  });

  test("Change option when clicked", async () => {
    render(<ItemActions options={OPTIONS_MOCK} id="test" />);

    const option = screen.getByText(OPTIONS_MOCK.colors[0].name);
    userEvent.click(option);

    expect(option).toHaveStyle(
      "background-color: rgb(167, 209, 162); border: 1px solid #000;"
    );
  });

  test("Add to cart - Success", async () => {
    const mockedAxios = mocked(fetchPostCart);
    mockedAxios.mockImplementationOnce(() =>
      Promise.resolve({ data: CART_MOCK })
    );

    render(<ItemActions options={OPTIONS_MOCK} id="test" />);

    const option = screen.getByText(OPTIONS_MOCK.colors[0].name);
    userEvent.click(option);

    const button = screen.getByText("Agregar al carro");
    userEvent.click(button);

    expect(fetchPostCart).toHaveBeenCalledTimes(1);
  });

  test("Add to cart - Options not clicked", async () => {
    render(<ItemActions options={OPTIONS_MOCK} id="test" />);

    const button = screen.getByText("Agregar al carro");
    userEvent.click(button);

    expect(
      screen.getByText("Debe escoger un color y una capacidad")
    ).toBeInTheDocument();
  });
});
