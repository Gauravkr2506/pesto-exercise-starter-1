const {
  leastCommonMultiple
} = require("./leastCommonMultiple");
const {
  describe,
  it,
  expect,
  matchers
} = require("./index");

describe("leastCommonMultiple", () => {});

describe("leastCommonMultiple", () => {
  it("least common multiple of two numbers", () => {
    const result = leastCommonMultiple(5, 3);
    expect(result).toBe(15);
  });

  it("least common multiple of two numbers", () => {
    const result = leastCommonMultiple(6, 21);
    expect(result).toBe(42);
  });

  it("least common multiple of three numbers", () => {
    const result = leastCommonMultiple(2, 3, 4);
    expect(result).toBe(12);
  });
});