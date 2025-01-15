const countPrimes = (n: number): number => {
  let isPrime: Array<boolean> = new Array(n).fill(true);

  isPrime[0] = isPrime[1] = false;

  for (let i: number = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j: number = i * i; j < n; j = j + i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime.reduce((sum, curr) => {
    if (curr) return sum + 1;
    else return sum;
  }, 0);
};
