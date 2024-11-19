function fib(n) {
  if (n === 0) return [1];
  if (n === 1) return [1, 1];
  const arr = fib(n - 1);
  return [...arr, arr[n - 1] + arr[n - 2]];
}

function perimeter(n) {
  return 4 * fib(n).reduce((a, b) => a + b, 0);
}

console.log(perimeter(0));
