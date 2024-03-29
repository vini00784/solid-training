export const correctMulMocks = [
  {
    a: 20,
    b: 35,
  },
  {
    a: -19,
    b: 2,
  },
  {
    a: 6,
    b: 23,
  },
  {
    a: 1234567890,
    b: 0,
  },
];

export const exactlyMulResultMocks = [
  {
    a: 10,
    b: 2,
  },
  {
    a: 100,
    b: 0.2,
  },
  {
    a: 5,
    b: 4,
  },
  {
    a: 40,
    b: 0.5,
  },
];

export const notNegativeMulResultMocks = [
  {
    a: 1,
    b: 1,
  },
  {
    a: -2,
    b: -4,
  },
  {
    a: 10,
    b: 12,
  },
  {
    a: 56,
    b: 4,
  },
];

export const expectMulErrorMocks = [
  {
    a: "",
    b: 2,
  },
  {
    a: 78,
    b: undefined,
  },
  {
    a: false,
    b: 38,
  },
  {
    a: 0,
    b: true,
  },
];
