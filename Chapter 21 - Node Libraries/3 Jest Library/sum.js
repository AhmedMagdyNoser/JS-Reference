function oldSum(num1, num2, num3) {
  return (num1 || 0) + (num2 || 0) + (num3 || 0)
}

function newSum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

module.exports = {oldSum, newSum};