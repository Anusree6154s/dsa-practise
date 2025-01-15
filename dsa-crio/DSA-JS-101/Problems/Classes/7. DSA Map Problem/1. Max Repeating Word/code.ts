const maxRepeatingWord2 = (arr: Array<string>): string => {
  let map: Map<string, number> = new Map();

  let maxValue: number = 0;
  for (let i: number = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
    maxValue = Math.max(maxValue, map.get(arr[i])!);
  }

  let ans: Array<string> = [];
  for (let i: number = 0; i < arr.length; i++) {
    if (maxValue === map.get(arr[i])) ans.push(arr[i]);
  }

  return ans.sort()[0];
};

console.log(
  maxRepeatingWord2(["hello", "world", "crio", "crio", "apple", "apple"])
);
