function getConsectiveItems(items, key){
  const re = new RegExp(`[^${key}]`, "g");
  const str = (''+items).split(re);
  const result = str.map((elm) => elm.length);
  
  return Math.max(...result);
}