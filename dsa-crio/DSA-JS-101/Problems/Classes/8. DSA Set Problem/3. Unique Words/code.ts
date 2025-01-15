const uniqueWords2 = (arr: Array<string>): number => {
  return new Set([...arr]).size;
};

console.log(
  uniqueWords2(["Java", "is", "great", "Grails", "is", "also", "great"])
);
