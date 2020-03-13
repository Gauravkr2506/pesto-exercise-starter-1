const {
  bouncer
} = require("./bouncer");
const {
  describe,
  it,
  expect,
  matchers
} = require("./index");

describe("bouncer", () => {
  it("remove all falsy values from an array", () => {
    const result = bouncer([false, null, 0, NaN, undefined, '', 9]);
    expect(result).toEqual([9]);
  });
});