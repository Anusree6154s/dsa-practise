const distinctNum = (arr: Array<number>): Array<number> => {
  let set: Set<number> = new Set([...arr]);
  return Array.from(set);
};

console.log(distinctNum([2, 3, 2, 2, 3]));
