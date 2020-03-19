const {
  betterStringLib
} = require("./betterStringLib");
const {
  describe,
  test,
  expect,
  matchers
} = require("./index");

describe('Template Test', () => {

  test('Template reverse', () => {
    let reverse = betterStringLib().reverse;
    expect(reverse("ab")).toEqual("ba");
    expect(reverse("foo 𝌆 bar")).toEqual("rab 𝌆 oof");
    expect(reverse("mañana mañana")).toEqual("anañam anañam");
  });

  test('Template equal', () => {
    let equal = betterStringLib().equal;
    expect(equal("a", "a")).toBe(true);
    expect(equal("mañana", "mañana")).toBe(true);
  });
});