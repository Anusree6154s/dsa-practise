const leapYear2 = (year: number): boolean => {
  if (year % 4 == 0) {
    return true;
  } else if (year % 100 == 0 && year % 400 == 0) {
    return true;
  }
  return false;
};

console.log(leapYear2(1600))