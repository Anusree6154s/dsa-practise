const searchTarget2 = (
  n: number,
  arr: Array<number>,
  target: number
): number => {
  let left: number = 0;
  let right: number = n;

  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

let [Nn, Xx] = [5, 7];
let Aa = [1, 3, 5, 7, 13];
console.log(searchTarget2(Nn, Aa, Xx));
