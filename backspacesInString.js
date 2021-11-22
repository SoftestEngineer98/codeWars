// Answer 2
function cleanString(s) {
  let result = [];
  [...s].map((char) => (char === "#" ? result.pop() : result.push(char)));
  return result.join("");
}