const naturalSum = (n: number): number => {
  if (n === 0) return 0;
  return n + naturalSum(n - 1);
};

console.log(naturalSum(10));
