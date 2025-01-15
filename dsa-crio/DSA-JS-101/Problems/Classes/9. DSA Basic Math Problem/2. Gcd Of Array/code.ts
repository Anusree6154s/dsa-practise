const gcd = (arr: Array<number>): number => {
  let gcdSofar: number = arr[0];
  for (let i: number = 1; i < arr.length; i++) {
    gcdSofar = gcd(gcdSofar, arr[i]);
  }

  function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }

  return gcdSofar;
};

console.log(gcd([4, 6, 8, 16]));
