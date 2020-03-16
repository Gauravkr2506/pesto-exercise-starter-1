const describe = (desc, fn) => {
  console.log(desc);
  fn();
};

const it = (msg, fn) => describe("  " + msg, fn);

function isObjectEqual(obj1, obj2) {
  let obj1keys = Object.keys(obj1);
  let obj2keys = Object.keys(obj2);
  if (obj1keys.length !== obj2keys.length) return false;

  return obj1keys.every(key => obj1[key] === obj2[key])

}

const matchers = exp => ({
  toMatchObject: assertion => {
    if (isObjectEqual(exp, assertion)) {
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


module.exports = {
  describe,
  expect,
  it,
  matchers
};