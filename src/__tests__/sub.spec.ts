import { it, describe, expect } from "vitest";
import { sub } from "..";
import {
  correctSubMocks,
  exactlySubResultMocks,
  expectSubErrorMocks,
  notNegativeSubResultMocks,
} from "./__mocks__/sub.mock";

describe("Testing subtract function", () => {
  for (const mockData of correctSubMocks) {
    it("Should subtract a - b", () => {
      const result = sub(mockData.a, mockData.b);
      expect(result).toStrictEqual(expect.any(Number));
    });
  }

  for (const mockData of exactlySubResultMocks) {
    it("Should return result equal 4", () => {
      const result = sub(mockData.a, mockData.b);
      expect(result).toEqual(4);
    });
  }

  for (const mockData of notNegativeSubResultMocks) {
    it("Should not return negative result", () => {
      const result = sub(mockData.a, mockData.b);
      expect(result).toBeGreaterThan(-1);
    });
  }

  for (const mockData of expectSubErrorMocks) {
    it("Should throw any exception", () => {
      // @ts-expect-error
      const result = sub(mockData.a, mockData.b);
      expect(result).toThrowError(expect.any(Error));
    });
  }
});
