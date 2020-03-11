function updateInventory(...args) {
  let inventory = [...args.flat()]
  return inventory.reduce((a, v) => {
    let index = a.findIndex((value) => value[1] === v[1])
    if (index != -1) {
      a[index][0] += v[0];
      return a;
    } else {
      return [...a, v];
    }
  }, []).sort((a, b) => a[1].localeCompare(b[1]));
}



module.exports = {
  updateInventory
};