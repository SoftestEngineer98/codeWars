function correctPolishLetters (string) {
    const str = string.split('');
    const lookupLetters = {
    'ą':'a', 'ć':'c', 'ę': 'e', 'ł':'l', 'ń':'n', 'ó':'o', 'ś':'s', 'ź':'z', 'ż':'z'
    }
    
    return str.map((x) => lookupLetters[x] ? lookupLetters[x] : x).join('');
}