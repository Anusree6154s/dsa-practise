// Array<any> is very general and can be improved by specifying a more constrained type <unknown>
const extractNumbers2 = (n: number, arr: Array<unknown>): Array<number> => {
  let ans: Array<number> = [];
  for (let i: number = 0; i < n; i++) {
    if (typeof arr[i] === "number") {
      ans.push(arr[i] as number);
      //   Array<unknown> types is  more restrictive than any
      // So, Type assertion here to make it clear the value is a number
    }
  }

  return ans;
};

console.log(extractNumbers2(8, ["a", 3, "long", 17, "crio", "dsa", 100, 20]));
