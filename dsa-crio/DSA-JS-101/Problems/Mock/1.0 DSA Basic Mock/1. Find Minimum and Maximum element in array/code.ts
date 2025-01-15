const minMaxSum = (arr: Array<number>): number => {
  let min: number = arr[0],
    max: number = arr[0];
  for (let i: number = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  return min + max;
};

console.log(minMaxSum([10, 15, 4, 5, 19]));
