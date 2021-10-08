function sumOfMinimums(arr) {
  const sumOfMinNumbers = [];
  
  arr.forEach((minNum) => sumOfMinNumbers.push(Math.min(...minNum)));
  // sumOfMunNumbers = [2, 3, 4] => 2 + 3 + 4 = 9
  return sumOfMinNumbers.reduce((x, y) => x + y);
}