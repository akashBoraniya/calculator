var x,
    y,
    digit,
    key = "",
    count = 0;

function digit(n) {
    document.getElementById("disp").innerHTML += n;
    if (n == "C") {
        document.getElementById("disp").innerHTML = "";
    }
}

function point() {
    if (count == 0) {
        document.getElementById("disp").innerHTML += ".";
        count++;
    }
}

function opr(o) {
    key = o;
    count = 0;
    x = document.getElementById("disp").innerHTML;
    document.getElementById("disp").innerHTML = "";
}

function eql() {
    y = document.getElementById("disp").innerHTML;

    if (key === "+") {
        y = Number(x) + Number(y);
    }

    if (key === "-") {
        y = Number(x) - Number(y);
    }

    if (key === "*") {
        y = Number(x) * Number(y);
    }

    if (key === "/") {
        y = Number(x) / Number(y);
    }

    if (key === "%") {
        y = (Number(x) * Number(y)) / 100;
    }

    document.getElementById("disp").innerHTML = y;
}

function del() {
    x = document.getElementById("disp").innerHTML;
    document.getElementById("disp").innerHTML = x.substring(0, x.length - 1);
    count = 0;
}