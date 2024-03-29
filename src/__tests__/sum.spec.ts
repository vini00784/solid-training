import { it, describe, expect } from "vitest";
import { sum } from "..";
import {
  correctSumMocks,
  exactlySumResultMocks,
  expectSumErrorMocks,
  notNegativeSumResultMocks,
} from "./__mocks__/sum.mock";

describe("Testing sum function", () => {
  for (const mockData of correctSumMocks) {
    it("Should sum a + b", () => {
      const result = sum(mockData.a, mockData.b);
      expect(result).toEqual(expect.any(Number));
    });
  }

  for (const mockData of exactlySumResultMocks) {
    it("Should return result equal 12", () => {
      const result = sum(mockData.a, mockData.b);
      expect(result).toEqual(12);
    });
  }

  for (const mockData of notNegativeSumResultMocks) {
    it("Should not return negative result", () => {
      const result = sum(mockData.a, mockData.b);
      expect(result).greaterThanOrEqual(0);
    });
  }

  for (const mockData of expectSumErrorMocks) {
    it("Should throw any exception", () => {
      // @ts-expect-error
      const result = sum(mockData.a, mockData.b);
      expect(result).toThrow(expect.any(Error));
    });
  }
});
