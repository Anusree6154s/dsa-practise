const fizzBuzz2 = (num: number) => {
  let ans: Array<string | number> = [];
  for (let i: number = 1; i < num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      ans.push("FizzBuzz");
    } else if (i % 3 == 0) {
      ans.push("Fizz");
    } else if (i % 5 == 0) {
      ans.push("Buzz");
    } else {
      ans.push(i);
    }
  }
  return ans.join(" ");
};
console.log(fizzBuzz2(18));
