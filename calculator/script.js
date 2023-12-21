function fun(st) {
    let n = st.length;
    let s = "";
    for (let i = 0; i < n - 1; i++) {
        s = s + st[i];
    }
    return s;
}
function op(s) {
    let x = "", y = "";
    let n = s.length;
    i = 0;
    let ch;
    while (s[i] >= '0' && s[i] <= '9' && i < n) {
        x = x + s[i];
        i++;
    }
    ch = s[i]; i++;
    while (s[i] >= '0' && s[i] <= '9' && i < n) {
        y = y + s[i];
        i++;
    }
    if (x != '' && y != '') {
        x = parseInt(x);
        y = parseInt(y);
        if (ch == '+') x = x + y;
        if (ch == '*') x = x * y;
        if (ch == '-') x = x - y;
        if (ch == '/') x = x / y;
        x.toString();
    }
    return x;

}