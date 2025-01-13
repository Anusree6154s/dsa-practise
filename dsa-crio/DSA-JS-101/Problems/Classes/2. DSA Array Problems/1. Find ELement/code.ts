const findElement2 = (n: number, arr: Array<number>, x: number) => {
  for (let i: number = 0; i < n; i++) {
    if (arr[i] === x) return i;
  }
  return -1;
};

console.log(findElement2(5, [1, 3, 4, 2, 1], 1));
