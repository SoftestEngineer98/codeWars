function repeats(arr){
    let result = 0;
    
    for(let i = 0; i < arr.length; i += 1) {
    
    const fillArr = arr.filter((elm, idx) => elm === arr[i]);
    
    fillArr.length === 1 ? result += fillArr[0] : 0
    }
    
    return result;
};