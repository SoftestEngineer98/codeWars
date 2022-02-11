function uglifyWord(s) {
    var ans='';
    var b=true;
    for (var i=0; i<s.length; ++i)
    {
    if (b)
        ans+=s[i].toUpperCase();
    else
        ans+=s[i].toLowerCase();
    if (s[i].toLowerCase()>='a' && s[i].toLowerCase()<='z')
        b=!b;
    else
        b=true;  
    }
    return ans;
}