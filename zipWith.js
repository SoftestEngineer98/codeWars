function zipWith(fn,a0,a1) {
  const leng = Math.min(a0.length, a1.length);
  const result = [];

  for (let i = 0; i < leng; i += 1) {
    result.push(fn(a0[i], a1[i]));
  }
  
  return result;
}