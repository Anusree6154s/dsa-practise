const reverseWords = (s: string): string => {
  let result: Array<string> = [];
  let str: string = "";
  for (let i: number = 0; i < s.length; i++) {
    if (s[i] !== " ") str = str + s[i];

    if (s[i + 1] === " " || i + 1 === s.length) {
      result.push(str);
      str = "";
    }
  }

  return result.reverse().join(" ");
};

console.log(reverseWords("hello world"));
