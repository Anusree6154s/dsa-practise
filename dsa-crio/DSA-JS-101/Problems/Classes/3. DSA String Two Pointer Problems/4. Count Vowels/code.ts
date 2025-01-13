const vowels = (s: string): number => {
  let count: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    if (s[i].match(/[aeiouAEIOU]/)) count++;
  }

  return count;
};

console.log(vowels("language"));
