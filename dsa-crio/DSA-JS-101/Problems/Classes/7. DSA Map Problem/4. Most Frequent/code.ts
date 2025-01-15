const mostFreq = (s: string): string => {
  let map: Map<string, number> = new Map();

  let maxValue = 0;
  let ans = s[0];
  for (let i: number = 0; i < s.length; i++) {
    if (s[i] === " ") continue;
    map.set(s[i], (map.get(s[i]) || 0) + 1);
    if (
      map.get(s[i])! > maxValue ||
      (map.get(s[i]) === maxValue && s[i] < ans)
    ) {
      ans = s[i];
      maxValue = map.get(s[i])!;
    }
  }

  return ans + map.get(ans);
};

console.log(mostFreq("Statements are unique."));
