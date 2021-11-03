// Answer 2
function stringBreakers(n, string){
  let result = [];
  string = string.replace(/\s/g, "");
  
  for (let i = 0; i < string.length; i += n) {
    result.push(string.substr(i, n));
  }
  return result.join("\n");
}