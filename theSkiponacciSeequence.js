function skiponacci(n) {

    let x = 0;
    let y = 1;
    let z;
    let result = [1, ];
    
    for (let i = 1; i < n; i += 1) {
    z = x + y
    x = y;
    y = z;
    result.push(z);
    }
    
    return result.map((elm, idx, _) => idx % 2 !== 0 ? 'skip' : elm).join(' ');
}