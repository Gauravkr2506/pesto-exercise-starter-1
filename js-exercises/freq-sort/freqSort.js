function freqSort(arr) {
  let frequency_obj = arr.reduce((acc, val) => {
    if (val in acc) {
      acc[val] += 1;
    } else {
      acc[val] = 1;
    }
    return acc
  }, {});

  return Object.keys(frequency_obj).sort((a, b) => frequency_obj[b] - frequency_obj[a])

}

module.exports = {
  freqSort,
};