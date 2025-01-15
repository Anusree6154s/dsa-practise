const union = (arr1: Array<number>, arr2: Array<number>): Array<number> => {
  return Array.from(new Set([...arr1, ...arr2])).sort((a, b) => a - b);
};

console.log(union([1, 2, 3, 5, 6], [2, 3, 4]));
