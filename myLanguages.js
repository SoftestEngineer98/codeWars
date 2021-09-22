function myLanguages(results) {
  const arr = [];
  const resultArr = []
  
  for(let prop in results) {
    arr.push({
      'lang': prop,
      'score': results[prop],
    });
  }
  
  arr.sort((a, b) => a.score > b.score ? -1 : a.score < b.score ? 1 : 0);
  
  arr.forEach((result) => {
    if(result.score >= 60) {
       resultArr.push(result.lang);
    }
  })
  
  return resultArr;
}