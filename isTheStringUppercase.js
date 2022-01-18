String.prototype.isUpperCase = function() {
    // your code here
    const re = /([a-z]+)/g;
    return !re.test(this);
}