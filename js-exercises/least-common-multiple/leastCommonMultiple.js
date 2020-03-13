function leastCommonMultiple(...args) {
  let multiple = null;
  let largest_no = Math.max(...args)

  for (let i = largest_no;; i += largest_no) {
    if (args.every(value => i % value === 0)) {
      multiple = i;
      break;
    }

  }
  return multiple;
}


module.exports = {
  leastCommonMultiple
};