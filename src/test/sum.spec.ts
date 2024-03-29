import { it, describe, expect } from "vitest";
import { sum } from "..";

describe("Testing sum function", () => {
  it("Should sum a + b", () => {
    const result = sum(3, 6);
    expect(result).toEqual(expect.any(Number));
  });

  it("Should return result equal 12", () => {
    const result = sum(7, 5);
    expect(result).toEqual(12);
  });

  it("Should not return negative result", () => {
    const result = sum(-9, 10);
    expect(result).greaterThan(0);
  });
});
