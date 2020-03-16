const alphabeticShift = input => {
  return input.toString().split("").map(char => char === "z" ? "a" : char === "Z" ? "A" : String.fromCharCode(char.charCodeAt() + 1)).join("");
};

module.exports = {
  alphabeticShift
};