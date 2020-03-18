function booleanExpressionEvaluator(expression) {

  let str_without_true_false = expression.split("true").join("").split("false").join("");
  let is_valid_string = str_without_true_false.split("").every(element => ["!", " ", "&", "|", "^", "(", ")"].includes(element));
  let is_string_contain_logical_or_operator = expression.includes("||")
  if (!is_valid_string || is_string_contain_logical_or_operator) {
    throw new Error("Unexpected parameter")
  }
  return Boolean(eval(expression));
}

module.exports = {
  booleanExpressionEvaluator
};