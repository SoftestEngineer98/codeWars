function solve(s){
    const re = /[^aiueo]/;
    const word = s.split(re);

return Math.max(...word.map((x) => x.length));
}
