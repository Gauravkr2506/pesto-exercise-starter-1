function updateObject(...args) {
  args[2].splice(args[0], 1, args[1]);
  return args[2];
}


module.exports = {
  updateObject
};