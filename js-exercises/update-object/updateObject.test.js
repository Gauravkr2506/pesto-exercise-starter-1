const {
  updateObject
} = require("./updateObject");
const {
  describe,
  it,
  expect,
  matchers
} = require("./index");


describe("updateObject", () => {
  it("update array", () => {
    const result = updateObject(1, '_', ['a', 'b', 'c']);
    expect(result).toEqual(['a', '_', 'c']);
  });

  it("update array", () => {
    const result = updateObject(-1, '_', ['a', 'b', 'c']);
    expect(result).toEqual(['a', 'b', '_']);
  });

  it("update array", () => {
    const result = updateObject(-1, 'a', ['b', 'c']);
    expect(result).toEqual(['b', 'a']);
  });

  it("update array", () => {
    const result = updateObject(0, 'a', ['b', 'c']);
    expect(result).toEqual(['a', 'c']);
  });

  it("update array", () => {
    const result = updateObject(1, 'a', ['b', 'c']);
    expect(result).toEqual(['b', 'a']);
  });
});