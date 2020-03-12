function noOfMinimumDeletionForAlternateString(str) {
  let n = str.length,
    required_deletion = 0,
    for (let i = 0; i < n - 1; i++) {
      if (str[i] === str[i + 1]) ++required_deletion;
    }

  return required_deletion;
}

function alternatingCharacters(arr) {
  return arr.map(str => noOfMinimumDeletionForAlternateString(str))

}

module.exports = {
  alternatingCharacters
};