var display = document.getElementById('display');
var pie = 3.142;
var e = Math.E;
var memory = [];
var ms = 0;
function mplus() {
    var num:number = parseFloat(display.innerText);
    memory.push(num);
}
function msclick() {
    var txt:number;
    if (ms === 0) {
        txt = parseFloat(display.innerText);
        ms = txt;
        display.innerText = String(ms);
    }
    else {
        display.innerText += ms;
    }
}
function mminus() {
    memory.pop();
}
function mrclick() {
    if (memory.length !== 0) {
        var sum = memory.reduce(function (a, b) { return a + b; });
        display.innerText = sum;
    }
    else {
        display.innerText = String('0');
    }
}
function mcclick() {
    memory = [];
}
//@ts-ignore
var buttons = Array.from(document.getElementsByClassName('button'));
buttons.map(function (button) {
    button.addEventListener('click', function (e) {
        switch (e.target.innerHTML) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                }
                catch (_a) {
                    display.innerText = "Error";
                }
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerHTML;
        }
    });
});
function squareroot() {
    display.innerText = String(Math.sqrt(parseFloat(display.innerText)));
}
function signChange() {
    var plus = parseFloat(display.innerText);
    var nem = plus * -1;
    console.log(nem);
    display.innerText = String(nem);
}
function log() {
    display.innerText = String(Math.LOG10E);
}
function factorial() {
    var txt = parseInt(display.innerText);
    var result = 1;
    for (var i = 0; i < txt; i++) {
        result = result * (txt - i);
    }
    display.innerText = String(result);
}
function square() {
    var txt = parseFloat(display.innerText);
    var squareNum = Math.pow(txt, 2);
    display.innerText = String(squareNum);
}
function power() {
    var txt = parseFloat(display.innerText);
    var powerNum = Math.pow(txt, 2);
    display.innerText = String(powerNum);
}
function displayTxt(txt) {
    display.innerText += txt;
}
function logbasee() {
    var txt = parseFloat(display.innerText);
    if (txt != 0) {
        txt = Math.log(txt);
        display.innerText = String(txt);
    }
}
function power10() {
    var txt = parseFloat(display.innerText);
    txt = Math.pow(10, txt);
    display.innerText = String(txt);
}
function inverse() {
    var txt = parseFloat(display.innerText);
    txt = 1 / txt;
    display.innerText = String(txt);
}
function absoulte() {
    var txt = parseFloat(display.innerText);
    if (txt < 0) {
        txt = txt * (-1);
    }
    display.innerText = String(txt);
}
function exponentional() {
    var txt = parseFloat(display.innerText);
    txt = Math.exp(txt);
    display.innerText = String(txt);
}
function pier() {
    var txt = parseFloat(display.innerText);
    txt = txt * pie;
    display.innerText = String(txt);
}
function eValue() {
    var txt = parseFloat(display.innerText);
    if (txt != 0) {
        txt = txt * e;
    }
    else {
        txt = e;
    }
    display.innerText = String(txt);
}
function sintrigo() {
    var txt = parseFloat(display.innerText);
    txt = Math.sin(txt * Math.PI / 180);
    display.innerText = String(txt);
}
function costrigo() {
    var txt = parseFloat(display.innerText);
    txt = Math.cos(txt * Math.PI / 180);
    display.innerText = String(txt);
}
function tantrigo() {
    var txt = parseFloat(display.innerText);
    txt = Math.tan(txt * Math.PI / 180);
    display.innerText = String(txt);
}
function ceilfun() {
    var txt = parseFloat(display.innerText);
    txt = Math.ceil(txt);
    display.innerText = String(txt);
}
function floorfun() {
    var txt = parseFloat(display.innerText);
    txt = Math.floor(txt);
    display.innerText = String(txt);
}
function randomfun() {
    var txt = Math.random();
    display.innerText += txt;
}
function truncfun() {
    var txt = parseFloat(display.innerText);
    var temp = txt.toFixed();
    display.innerText = String(temp);
}
function degtoradian() {
    var txt = parseFloat(display.innerText);
    txt = txt * Math.PI / 180;
    display.innerText = String(txt);
}
var degtofeh = function () {
    var txt = parseFloat(display.innerText);
    txt = (txt * 9 / 5) + 32;
    display.innerText = String(txt);
};
var acostrigo = function () {
    var txt = parseFloat(display.innerText);
    txt = Math.acos(txt * Math.PI / 180);
    display.innerText = String(txt);
};
var asintrigo = function () {
    var txt = parseFloat(display.innerText);
    txt = Math.asin(txt * Math.PI / 180);
    display.innerText = String(txt);
};
var atantrigo = function () {
    var txt = parseFloat(display.innerText);
    txt = Math.atan(txt * Math.PI / 180);
    display.innerText = String(txt);
};
