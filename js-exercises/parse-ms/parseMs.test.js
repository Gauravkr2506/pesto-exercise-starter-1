const {
  parseMs
} = require("./parseMs");
const {
  describe,
  it,
  expect,
  matchers
} = require("./index");

describe("parseMs", () => {});

describe("parseMs", () => {
  it("parseMs 1337000001", () => {
    const result = parseMs(1337000001);
    expect(result).isObjectEqual({
      days: 15,
      hours: 11,
      minutes: 23,
      seconds: 20,
      milliseconds: 1,
      microseconds: 0,
      nanoseconds: 0
    });
  });
});