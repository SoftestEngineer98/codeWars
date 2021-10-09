function sumOfMinimums(arr) {
  return arr.reduce((x, y) => x + Math.min(...y), 0);
}