var orderedCount = function (text) {
    // Implement me!
    const splitStr = text.split('');
    const str = [...new Set(splitStr)];
    
    let resultArr = [];
    
    for (let i = 0; i <= str.length-1; i += 1) {
    resultArr.push([str[i], splitStr.filter((s) => s === str[i]).length]);
    }
    
    return resultArr;
}