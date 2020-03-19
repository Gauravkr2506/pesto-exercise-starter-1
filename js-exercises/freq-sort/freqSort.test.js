const {
  freqSort
} = require("./freqSort");
const {
  describe,
  test,
  expect,
  matchers
} = require("./index");

describe('Template Test', () => {
  test('Template Test', () => {
    expect(freqSort(["a", "z", "z", "z", "b", "b", "z"])).toBe(['z', 'b', 'a']);
  });
});