function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const previousFib = fibonacci(n - 1);
  const nextFib = previousFib[n - 2] + previousFib[n - 3];
  previousFib.push(nextFib);

  return previousFib;
}
displayOutput(fibonacci(10););
