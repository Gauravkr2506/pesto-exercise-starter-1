function lastIndexOf(...args) {
  if (args.length === 2 && Array.isArray(args[1])) {
    for (let i = args[1].length - 1; i >= 0; i--) {
      if (args[1][i] === args[0]) return i;
    }
  }
  return -1;
}



module.exports = {
  lastIndexOf
};