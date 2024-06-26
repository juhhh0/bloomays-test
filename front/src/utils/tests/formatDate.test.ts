import { expect, test } from "vitest";

import { formatDate } from "../formatDate";

test("formatDate", () => {
  const date = "2021-09-01";

  const formattedDate = formatDate(date);

  expect(formattedDate).toBe("01/09/2021");
});
