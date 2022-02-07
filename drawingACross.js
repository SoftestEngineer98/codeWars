function drawACross(n) {
    if ( n < 3 ){ return 'Not possible to draw cross for grids less than 3x3!' }
    if (n % 2 === 0){ return "Centered cross not possible!" }

    const arr = Array.from({length: n}, _ => Array(n).fill(' '))

    for ( let i = 0; i < arr.length; i++){
        arr[i][i] = 'x';
        arr[i][arr.length-1-i] = 'x';
    }
    return arr.map(el => el.join('')).join('\n')
}