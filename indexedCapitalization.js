function capitalize(s,arr){
    const array = arr.sort((x, y) => x - y);
    let result = '';
    
    for (let i = 0, num = 0; i < s.length; i += 1) {
    if(i === array[num]) {
        result += s[i].toUpperCase();
        num += 1;
    } else {
        result += s[i];
    };
    };
    
    return result;
};