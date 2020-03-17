const accessorProperties = {
  value: null,
  get number() {
    if (this.value == null) {
      return undefined;
    }
    return (this.value).toString(2)
  },
  set number(value) {
    this.value = value;
  }
}

module.exports = {
  accessorProperties
};