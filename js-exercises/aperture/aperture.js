function aperture(n, arr) {
  let arr_length = arr.length;
  if (n > arr_length) return [];
  let new_arr = [];
  for (let i = 0; i < arr_length - (n - 1); i++) {
    new_arr.push(arr.slice(i, i + n))
  }
  return new_arr;
}

module.exports = {
  aperture
};