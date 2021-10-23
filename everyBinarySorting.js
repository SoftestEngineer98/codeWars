function evenBinary(n) {
  //Goodluck, Have Fun!
  const even = n.split(' ').filter((elm) => elm % 2 === 0).sort();
  const result = n.split(' ');
  
  return result.map((odd) => odd % 2 !== 0 ? odd : even.shift()).join(' ');
}