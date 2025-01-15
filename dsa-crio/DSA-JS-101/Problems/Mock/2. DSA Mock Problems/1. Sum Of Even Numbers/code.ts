const sumEvenNumbers = (n: number): number => {
  let m = Math.floor(n / 2);
  return m * (m + 1);
};
console.log(sumEvenNumbers(10));
