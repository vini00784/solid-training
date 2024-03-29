import { it, describe, expect } from "vitest";
import { mul } from "..";
import {
  correctMulMocks,
  exactlyMulResultMocks,
  expectMulErrorMocks,
  notNegativeMulResultMocks,
} from "./__mocks__/mul.mock";

describe("Testing multiplication function", () => {
  for (const mockData of correctMulMocks) {
    it("Should multiply a * b", () => {
      const result = mul(mockData.a, mockData.b);
      expect(result).toEqual(expect.any(Number));
    });
  }

  for (const mockData of exactlyMulResultMocks) {
    it("Should return result equal 20", () => {
      const result = mul(mockData.a, mockData.b);
      expect(result).toStrictEqual(20);
    });
  }

  for (const mockData of notNegativeMulResultMocks) {
    it("Should not return negative result", () => {
      const result = mul(mockData.a, mockData.b);
      expect(result).toBeGreaterThan(0);
    });
  }

  for (const mockData of expectMulErrorMocks) {
    it("Should throw any exception", () => {
      // @ts-expect-error
      const result = mul(mockData.a, mockData.b);
      expect(result).toThrow(expect.any(Error));
    });
  }
});
