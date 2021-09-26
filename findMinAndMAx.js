function getMinMax(arr){
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const resultArr = [];
  
  resultArr.push(min, max);
  
  return resultArr;
};