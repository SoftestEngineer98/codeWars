// Answer 3
function solve(arr) {
  let dict = new Map()
  for (let x of arr) {
    dict.set(x, (dict.get(x) || 0) + 1)
  }
  return arr.sort((x, y) => {
    let n = dict.get(x)
    let m = dict.get(y)
    return n === m ? x - y : m - n
  })
}