const nthFibonnacci = (n: number): number => {
  if (n == 0 || n == 1) return n;

  return nthFibonnacci(n - 1) + nthFibonnacci(n - 2);
};

console.log(nthFibonnacci(8));
