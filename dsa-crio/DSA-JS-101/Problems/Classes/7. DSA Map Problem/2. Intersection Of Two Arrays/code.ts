const intersection = (
  arr1: Array<number>,
  arr2: Array<number>
): Array<number> => {
  let map: Map<number, number> = new Map();

  for (let i: number = 0; i < arr1.length; i++) {
    map.set(arr1[i], (map.get(arr1[i]) || 0) + 1);
  }

  let ans: Array<number> = [];
  for (let i: number = 0; i < arr2.length; i++) {
    if (map.has(arr2[i])) {
      let count = map.get(arr2[i]) || 0;
      if (count > 0) {
        ans.push(arr2[i]);
        map.set(arr2[i], count - 1);
      }
    }
  }

  return ans
};

let arr1 = [1, 2, 2, 1];
let arr2 = [2, 2];
console.log(intersection(arr1, arr2));
