// Answer 4
function solution(str) {
    str.length % 2 && (str += "_");
    return str.match(/.{1,2}/g) || [];
}