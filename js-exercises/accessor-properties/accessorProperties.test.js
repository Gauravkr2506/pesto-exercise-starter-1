const {
  accessorProperties
} = require("./accessorProperties");
const {
  describe,
  test,
  expect,
  matchers
} = require("./index");



function testAccessorProperties(decimal) {
  const obj = accessorProperties;
  obj.number = decimal;
  return obj.number;
}

describe("Template Test", () => {
  test("Template Test", () => {
    expect(testAccessorProperties(36)).toBe("100100");
  });
});