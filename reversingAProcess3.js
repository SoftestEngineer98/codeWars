function decode(r) {
    // your code
  const dic = {
    'a': 0, 'b': 1, 'c': 2, 'd': 3, 'e': 4, 'f': 5, 'g': 6, 'h': 7, 'i': 8, 'j': 9,
    'k': 10, 'l': 11, 'm': 12, 'n': 13, 'o': 14, 'p': 15, 'q': 16, 'r':17, 's': 18,
    't': 19, 'u': 20, 'v': 21, 'w': 22, 'x': 23, 'y': 24, 'z': 25,
  };
  
  const word = r.replace(/[0-9]/g, '');
  const num = r.replace(/[a-z]/gi, '');
  
  let result = '';

  for (let idx = 0; idx <= word.length; idx += 1) {
    if (word[idx]) {
      for (let i = 0; i <= 25; i += 1) {
        if (dic[word[idx]] === i*num%26) {
          result += Object.keys(dic)[i];
        }
      }
    }
  };
  
  if (word.length === result.length) {
    return result;
  } else {
    return "Impossible to decode";
  }
}