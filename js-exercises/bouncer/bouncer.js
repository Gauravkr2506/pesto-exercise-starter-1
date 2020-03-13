function bouncer(array) {
  return array.filter(value => !!value)
}


module.exports = {
  bouncer
};