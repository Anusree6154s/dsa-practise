const magicSquare = (matrix: Array<Array<number>>): boolean => {
  let refSum: number = 0;
  for (let i: number = 0; i < matrix.length; i++) {
    refSum = refSum + matrix[0][i];
  }

  let rowSum: number;
  for (let i: number = 0; i < matrix.length; i++) {
    rowSum = 0;
    for (let j: number = 0; j < matrix[i].length; j++) {
      rowSum = rowSum + matrix[i][j];
    }
    if (rowSum !== refSum) return false;
  }

  let colSum: number;
  for (let i: number = 0; i < matrix.length; i++) {
    colSum = 0;
    for (let j: number = 0; j < matrix[i].length; j++) {
      colSum = colSum + matrix[j][i];
    }
    if (colSum !== refSum) return false;
  }

  let diagSum1: number = 0;
  for (let i: number = 0; i < matrix.length; i++) {
    diagSum1 = diagSum1 + matrix[i][i];
  }
  if (diagSum1 !== refSum) return false;

  let diagSum2: number = 0;
  for (let i: number = 0; i < matrix.length; i++) {
    diagSum2 = diagSum2 + matrix[i][matrix.length - 1 - i];
  }
  if (diagSum2 !== refSum) return false;

  return true;
};
let matrix3: Array<Array<number>> = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];

console.log(magicSquare(matrix3));
