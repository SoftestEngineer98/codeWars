function sum(matrix) {

    let result = 0;
    let count = 0;
    let num = 1;
    
    for (let i = 0; i <= matrix.length-1; i += 1) {
    result += matrix[i][count];
    result += matrix[i][matrix.length-num]
    
    count += 1;
    num += 1
    }
    
    return result;
}