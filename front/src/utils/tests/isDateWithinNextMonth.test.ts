import { test, expect } from "vitest";
import { isDateIsWithinNextMonth } from "../isDateWithinNextMonth";


test("isDateWithinNextMonth with Date + 1 month", () => {
  const now = new Date()

  const date = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate())

  expect(isDateIsWithinNextMonth(date)).toBe(true);
});


test("isDateWithinNextMonth with Date + 3 month", () => {
  const now = new Date()

  const date = new Date(now.getFullYear(), now.getMonth() + 3, now.getDate())

  expect(isDateIsWithinNextMonth(date)).toBe(false);
});

test("isDateWithinNextMonth with Date - 1 month", () => {
  const now = new Date()

  const date = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate())

  expect(isDateIsWithinNextMonth(date)).toBe(false);
});