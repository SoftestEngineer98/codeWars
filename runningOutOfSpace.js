function spacey(array){

    const arr = [];
    let arrStr = '';
    
    for (let i = 0; i <= array.length-1; i += 1) {
    arrStr += array[i];
    arr.push(arrStr);
    }
    
    return arr;
}