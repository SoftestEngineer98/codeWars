String.prototype.toAlternatingCase = function () {
    // Define your method here :
    const reg = /[A-Z]/;
    let result = '';
    
    for(let i = 0; i < this.length; i += 1) {
    if(reg.test(this[i])) {
        result += this[i].toLowerCase();
    } else {
        result += this[i].toUpperCase();
    }
    }
    
    return result
}