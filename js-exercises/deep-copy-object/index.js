const describe = (desc, fn) => {
  console.log(desc);
  fn();
};

const it = (msg, fn) => describe("  " + msg, fn);

const matchers = exp => ({
  toBe: assertion => {
    if (exp === assertion) {
      console.log("pass");
      return true;
    } else {
      console.log("fail");
      return false;
    }
  },
  toEqual: assertion => {
    if (exp.toString() === assertion.toString()) {
      console.log("pass");
      return true;
    } else {
      console.log("fail");
      return false;
    }
  },
  toBeNull: assertion => {
    if (exp === null) {
      console.log("pass");
      return true;
    } else {
      console.log("fail");
      return false;
    }
  }
});

const expect = exp => matchers(exp);

function adder(a, b) {
  return a + b;
}

module.exports = {
  describe,
  expect,
  it,
  matchers
};