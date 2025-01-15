const nthTribonnacci = (n: number): number => {
  if (n == 0 || n == 1 || n == 2) return n;

  return nthTribonnacci(n - 1) + nthTribonnacci(n - 2) + nthTribonnacci(n - 3);
};

console.log(nthTribonnacci(8));
