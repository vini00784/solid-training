import { it, describe, expect } from "vitest";
import { div } from "..";
import {
  correctDivMocks,
  exactlyDivResultMocks,
  expectDivErrorMocks,
  notNegativeDivResultMocks,
} from "./__mocks__/div.mock";

describe("Testing division function", () => {
  for (const mockData of correctDivMocks) {
    it("Should divide a / b", () => {
      const result = div(mockData.a, mockData.b);
      expect(result).toStrictEqual(expect.any(Number));
    });
  }

  for (const mockData of exactlyDivResultMocks) {
    it("Should return result equal 44", () => {
      const result = div(mockData.a, mockData.b);
      expect(result).toBe(44);
    });
  }

  for (const mockData of notNegativeDivResultMocks) {
    it("Should not return negative result", () => {
      const result = div(mockData.a, mockData.b);
      expect(result).toBeGreaterThanOrEqual(0);
    });
  }

  for (const mockData of expectDivErrorMocks) {
    it("Should throw any exception", () => {
      // @ts-expect-error
      const result = div(mockData.a, mockData.b);
      expect(result).toThrowError(expect.any(Error));
    });
  }
});
