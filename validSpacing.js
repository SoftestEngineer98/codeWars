function validSpacing(s) {
    // write your code here
    const reg = /(^\s|\s$|\s{2,})/;
    return !(reg.test(s));
}