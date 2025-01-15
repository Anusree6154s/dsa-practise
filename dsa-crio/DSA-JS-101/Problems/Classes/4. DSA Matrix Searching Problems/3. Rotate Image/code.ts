const rotateImage2 = (n: number, matrix: Array<Array<number>>): void => {
  // horizontal flip
  for (let i: number = 0; i < Math.floor(matrix.length / 2); i++) {
    for (let j: number = 0; j < matrix[i].length; j++) {
      [matrix[i][j], matrix[matrix.length - 1 - i][j]] = [
        matrix[matrix.length - 1 - i][j],
        matrix[i][j],
      ];
    }
  }

  // digonal flip
  for (let i: number = 0; i < matrix.length; i++) {
    for (let j: number = 0; j < i; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
};

let n2: number = 3;
let matrix2: Array<Array<number>> = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
rotateImage2(n2, matrix2);
console.log(matrix2);
