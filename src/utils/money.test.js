import { it, expect, describe } from "vitest";
import { formatMoney } from "./money";

describe("formatMoney", () => {
  it("formats 1998 to $19.98", () => {
    expect(formatMoney(1998)).toBe("$19.98");
  });

  it("2 decimal place", () => {
    expect(formatMoney(100)).toBe("$1.00");
    expect(formatMoney(1090)).toBe("$10.90");
  });
});
