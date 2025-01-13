const palindrome2 = (s: string): boolean => {
  for (let i: number = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(palindrome2("madam"));
