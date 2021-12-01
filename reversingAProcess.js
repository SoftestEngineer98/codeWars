// Answer 2
function decode(r) {
  const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  const newArr = r.match(/(^\d*)(.*)/).slice(1);
  let newString = '';
  newArr[1] 
  for (let j = 0; j < newArr[1].length; j++) {
    let orig = '';
    const each = newArr[1][j]
    for (let i = 0; i < alphabets.length; i++) {
      if (i * newArr[0] % 26 === alphabets.indexOf(each)) {
        if (orig !== '') {
          return ("Impossible to decode");
        }
        orig = i;
        newString += alphabets[i];
      }
    }
  }
  return newString;
}