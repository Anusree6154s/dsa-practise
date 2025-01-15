const findAnagrams = (s: string, arr: Array<string>): Array<string> => {
  let set: Set<string> = new Set(s);
  let ans: Array<string> = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (checkAnagram(arr[i])) ans.push(arr[i]);
  }

  function checkAnagram(str: string): boolean {
    for (let j: number = 0; j < str.length; j++) {
      if (!set.has(str[j])) return false;
    }
    return true;
  }

  return ans.sort();
};

console.log(findAnagrams("abc", ["cab", "bac", "xyz"]));
