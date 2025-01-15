const allAlphabetsOrNot2 = (s: string): boolean => {
  return new Set(s).size === 26;
};

console.log(allAlphabetsOrNot2("thequickbrownfoxjumpsoverthelazydog"));
