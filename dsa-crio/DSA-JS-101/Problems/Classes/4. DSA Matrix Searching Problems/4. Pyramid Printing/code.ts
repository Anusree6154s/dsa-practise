const pyramid = (n: number): Array<string> => {
  let arr: Array<string> = [];
  let str: string = "";
  for (let i: number = 0; i < n; i++) {
    str = str + "*";
    arr.push(str);
  }

  return arr
};

console.log(pyramid(4));
