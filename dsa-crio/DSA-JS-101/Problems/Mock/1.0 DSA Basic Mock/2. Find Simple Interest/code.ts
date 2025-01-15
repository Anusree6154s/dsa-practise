const simpleInterest2 = (P: number, R: number, T: number): number => {
  return (P * R * T) / 100;
};

console.log(simpleInterest2(1000, 5, 2));
