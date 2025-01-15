const equalVowelCons = (s: string): boolean => {
  let vowel: number = 0;
  let consonant: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    if (/[aeiouAEIOU]/.test(s[i])) vowel++;
    else consonant++;
  }

  return vowel === consonant;
};

console.log(equalVowelCons("ab"));
