const describe = (desc, fn) => {
  console.log(desc);
  fn();
};

const it = (msg, fn) => describe("  " + msg, fn);

const matchers = exp => ({
  toEqual: assertion => {
    if (exp === assertion) {
      console.log("pass");
      return true;
    } else {
      console.log("fail");
      return false;
    }
  },
  toThrow: () => {
    try {
      exp();
      console.log("fail");
      return false;
    } catch (err) {
      console.log("pass");
      return true;
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