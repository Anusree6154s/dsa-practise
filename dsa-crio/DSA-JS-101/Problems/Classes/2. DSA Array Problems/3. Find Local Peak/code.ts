const findLocalPeak2 = (n: number, arr: Array<number>): Array<number> => {
  let ans: Array<number> = [];
  for (let i: number = 0; i < n; i++) {
    let prev: number = arr[i - 1] ? arr[i - 1] : -Infinity;
    let next: number = arr[i + 1] ? arr[i + 1] : -Infinity;

    if (arr[i] > prev && arr[i] > next) {
      ans.push(arr[i]);
    }
  }

  return ans;
};

console.log(findLocalPeak2(7, [4, 2, 3, 1, 5, 6, 4]));
