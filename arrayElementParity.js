function solve(arr){
    
    for (let i = 0; i <= arr.length-1; i += 1) {
    
        if (arr.includes(arr[i]) && arr.includes(-(arr[i]))) {
        console.log('nothing happened');
        } else {
        return arr[i];
        }
    
    }
};
