function sumEvenNumbers(input) {
  let num = 0;
  const result = input.forEach((evenNum) => evenNum % 2 === 0 ? num += evenNum : evenNum);
  
  return num;
}