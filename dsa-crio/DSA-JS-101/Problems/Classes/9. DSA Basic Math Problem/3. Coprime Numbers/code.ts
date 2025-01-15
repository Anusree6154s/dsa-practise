const coprime = (n: number): number => {
  let count: number = 0;
  for (let i: number = 0; i < n; i++) {
    if (gcd(n, i) == 1) count++;
  }

  function gcd(a: number, b: number) {
    return b == 0 ? a : gcd(b, a % b);
  }

  return count;
};

console.log(coprime(9));
