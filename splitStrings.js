function solution(str){
  const re = /\w{1,2}/g;
  const matchStr = str.match(re);
  
  if (str.length === 0) {
    return [];
  }
  
  const result = matchStr.map((elm) => {
    return elm.length % 2 ? elm + '_' : elm;
  });
  
  return result;
}