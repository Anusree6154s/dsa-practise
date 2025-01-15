const findSingleNumber2 = (arr: Array<number>) => {
  let map: Map<number, number> = new Map();
  for (let i: number = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.delete(arr[i]);
    }else{
        map.set(arr[i], 0)
    }
  }

  return Array.from(map.keys())[0]
};

console.log(findSingleNumber2([2, 2, 1]));
