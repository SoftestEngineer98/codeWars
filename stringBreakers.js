function stringBreakers(n, string){
  const variableNum = `(\\w{${n}}|\\w{1,})`;
  const reg = new RegExp(variableNum, "g");
  const str = string.split(' ').join('');
  
  return str.match(reg).join('\n')
}