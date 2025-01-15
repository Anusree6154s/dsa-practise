const stringComp = (s: string): string => {
  let count: number = 1;
  let ans = s[0];
  for (let i: number = 1; i < s.length; i++) {
    if (s[i] == s[i - 1]) count++;
    else {
      ans = ans + count + s[i];
      count = 1;
    }
  }

  ans = ans + count;
  return ans
};

console.log(stringComp("aabccccc"));
