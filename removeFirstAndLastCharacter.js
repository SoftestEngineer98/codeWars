function removeChar(str){
    //You got this!
    console.log(str)
    str = str.substring(1) //remove first character
    str = str.slice(0, -1) //remove last character
     return str //return the answer
};