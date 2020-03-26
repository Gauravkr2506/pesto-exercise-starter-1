function minima(minima_number, array) {
  let array_length = array.length;
  for (let i = 0; i < minima_number; i++) {
    let swapper = 0;
    for (let j = array_length - 1; j > 0; j--) {
      if (array[j] < array[j - 1]) {
        let temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        swapper++

      }
    }
    if (swapper == 0) break;
  }
  return array.slice(0, minima_number)

}

module.exports = {
  minima
};