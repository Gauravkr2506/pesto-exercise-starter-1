function betterStringLib() {
  return ({
    reverse: (str) => Array.from(str.normalize('NFC')).reverse().join(''),
    equal: (str1, str2) => str1.normalize('NFC') === str2.normalize('NFC')
  })
}

module.exports = {
  betterStringLib,
};