/* eslint-disable no-undef */
import React from "react";

import filterItems from "..";
import { ITEMS_MOCK } from "../../mocks";

describe("FilterItems", () => {
  test("Filter", () => {
    const filtered = filterItems({
      items: ITEMS_MOCK,
      value: ITEMS_MOCK[0].model,
    });

    console.log(filtered);

    expect(filtered[0].model).toBe(ITEMS_MOCK[0].model);
  });
});
