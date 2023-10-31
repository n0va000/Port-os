function generateFibonacci(n) {
  const fibonacci = [0, 1];
  
  for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  
  return fibonacci;
}


const fibonacciSequence = generateFibonacci(10);
consoleOutput(fibonacciSequence);
