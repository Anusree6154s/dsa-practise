const capitalise = (s: string): string => {
  let ans: Array<string> = [];
  for (let i: number = 0; i < s.length; i++) {
    if (s[i - 1] === " " || i == 0) {
      ans.push(s[i].toUpperCase());
    } else {
      ans.push(s[i]);
    }
  }

  return ans.join("");
};

console.log(capitalise("the quick Brown fox jumps over The lazy dog."));
