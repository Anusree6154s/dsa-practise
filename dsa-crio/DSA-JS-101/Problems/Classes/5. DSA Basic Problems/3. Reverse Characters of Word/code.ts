const reverseChar = (s: string): string => {
  let ptr1: number = 0;
  let ans: Array<string> = [];
  let arrSmall: Array<string> = [];
  for (let i: number = 0; i < s.length; i++) {
    if (s[i] !== " ") arrSmall.push(s[i]);

    if ((s[i + 1] === " " && s[i] !== " ") || i + 1 === s.length) {
      ans.push(arrSmall.reverse().join(""));
      arrSmall = [];
    }
  }
  return ans.join(" ");
};
console.log(reverseChar("abc def ghi"));
