var str = p.innerHTML.toString();
var i = 0;
p.innerHTML = "";

setTimeout(function() {
    var se = setInterval(function() {
        i++;
        p.innerHTML = str.slice(0, i) + "|";
        if (i == str.length) {
            clearInterval(se);
            p.innerHTML = str;
        }
    }, 10);
});
