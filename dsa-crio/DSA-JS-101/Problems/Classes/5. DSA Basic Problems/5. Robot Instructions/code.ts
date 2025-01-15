const robotIntruct = (s: string): boolean => {
  let x: number = 0,
    y: number = 0;
  for (let letter of s) {
    if (letter === "U") {
      y++;
    } else if (letter === "D") {
      y--;
    } else if (letter === "L") {
      x--;
    } else {
      x++;
    }
  }

  return x === 0 && y === 0;
};

console.log(robotIntruct("UDLRL"));
