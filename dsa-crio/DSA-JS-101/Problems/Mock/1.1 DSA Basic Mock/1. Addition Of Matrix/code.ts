const additionOfMatrix2 = (
  m1: Array<Array<number>>,
  m2: Array<Array<number>>
): Array<Array<number>> => {
  let ans: Array<Array<number>> = [];
  for (let i: number = 0; i < m1.length; i++) {
    ans.push([]);
    for (let j: number = 0; j < m1[i].length; j++) {
      let sum: number = m1[i][j] + m2[i][j];
      ans[i].push(sum);
    }
  }

  return ans;
};

let m1 = [
  [1, 2, 3],
  [4, 5, 6],
];
let m2 = [
  [1, 1, 1],
  [1, 1, 1],
];
console.log(additionOfMatrix2(m1, m2));
