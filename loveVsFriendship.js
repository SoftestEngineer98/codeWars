function wordsToMarks(string){
    let result = 0;

    for (let i = 0; i < string.length; i += 1) {
    result += string.charCodeAt(i) - 96;
    }
    return result;
}