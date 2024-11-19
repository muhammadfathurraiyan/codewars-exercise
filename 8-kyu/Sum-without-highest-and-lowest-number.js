function sumArray(array) {
  if (!array || array.length <= 2) return 0;
  return array.reduce((a, b) => a + b, 0) - Math.max(...array) - Math.min(...array)
}

console.log(sumArray([3]));
