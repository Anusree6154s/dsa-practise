const leftRotation2 = (arr: Array<number>): Array<number> => {
  const firstElement: number = arr.shift() as number;
  arr.push(firstElement);
  return arr;
};
console.log(leftRotation2([1, 2, 3, 4, 5]));
