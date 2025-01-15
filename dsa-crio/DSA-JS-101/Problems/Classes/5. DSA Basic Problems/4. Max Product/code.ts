const maxProd = (arr: Array<number>): number => {
  arr.sort((a, b) => b - a);
  return (arr[0] - 1) * (arr[1] - 1);
};

console.log(maxProd([3, 4, 5, 2]));
// (Max1-1)*(Max2-1)
