let display = <HTMLInputElement>document.getElementById('display');
const pie:number=3.142;
const e:number=Math.E;


let memory:any[] = [];
let ms:number = 0;

function mplus():void{
    let num = display.innerText;
    memory.push(num);
}

function msclick():void{
    let txt:number;
    if (ms === 0) {
        txt = parseFloat(display.innerText);
        ms = txt;
        display.innerText = String(ms);
    } else {
    display.innerText += ms;
    }
}

function mminus():void{
    memory.pop();
}

function mrclick():void{
    if (memory.length !== 0) {
    let sum = memory.reduce((a, b) => a + b);
    display.innerText = sum;
    } 
    else {
    display.innerText = String('0');
    }
}

function mcclick():void{
    memory = [];
}

//@ts-ignore
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch((e.target as Element).innerHTML){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += (e.target as Element).innerHTML;
        }
    });
});
function squareroot():void{
    display.innerText=String(Math.sqrt(parseFloat(display.innerText)));
}
function signChange():void{
    let plus=parseFloat(display.innerText);
    let nem:number=plus* -1;
    console.log(nem);
    display.innerText=String(nem);   
}
function log():void{
        display.innerText=String(Math.LOG10E);
}
function factorial():void{
    let txt:number=parseInt(display.innerText);
    let result:number=1;
    for(let i=0;i<txt;i++){
        result=result*(txt-i);
    }
    display.innerText=String(result);
}
function square():void{
    let txt:number=parseFloat(display.innerText);
    let squareNum=Math.pow(txt,2);
    display.innerText=String(squareNum);
}
function power():void{
    let txt:number=parseFloat(display.innerText);
    let powerNum=txt**2;
    display.innerText=String(powerNum);
}
function displayTxt(txt):void{
    display.innerText+=txt;

}
function logbasee():void{
    let txt:number=parseFloat(display.innerText);
    if(txt!=0){
        txt=Math.log(txt);
        display.innerText=String(txt);
    }
}
function power10():void{
    let txt:number=parseFloat(display.innerText);
    txt=Math.pow(10,txt);
    display.innerText=String(txt);
}
function inverse():void{
    let txt:number=parseFloat(display.innerText);
    txt=1/txt;
    display.innerText=String(txt);
}
function absoulte():void{
    let txt:number=parseFloat(display.innerText);
    if(txt<0){
        txt=txt*(-1);
    }
    display.innerText=String(txt);
}
function exponentional():void{
    let txt:number=parseFloat(display.innerText);
    txt=Math.exp(txt);
    display.innerText=String(txt);
}
function pier():void{
    let txt:number=parseFloat(display.innerText);
    txt=txt*pie;
    display.innerText=String(txt);
}
function eValue():void{
    let txt:number=parseFloat(display.innerText);
    if(txt!=0){
        txt=txt*e;
    }
    else{
        txt=e;
    }
    display.innerText=String(txt);
}
function sintrigo():void{
    let txt:number=parseFloat(display.innerText);
    txt = Math.sin(txt * Math.PI / 180);
    display.innerText = String(txt);
}
function costrigo():void{
    let txt:number=parseFloat(display.innerText);
    txt = Math.cos(txt * Math.PI / 180);
    display.innerText = String(txt);
}
function tantrigo():void{
    let txt:number=parseFloat(display.innerText);
    txt = Math.tan(txt * Math.PI / 180);
    display.innerText = String(txt);
}
function ceilfun():void{
    let txt:number=parseFloat(display.innerText);
    txt=Math.ceil(txt);
    display.innerText=String(txt);
}
function floorfun():void{
    let txt:number=parseFloat(display.innerText);
    txt=Math.floor(txt);
    display.innerText=String(txt);
}
function randomfun():void{
    let txt:number=Math.random();
    display.innerText+=txt;
}
function truncfun():void{
    let txt:number=parseFloat(display.innerText);
    let temp:String=txt.toFixed();
    display.innerText=String(temp);
}
function degtoradian():void{
    let txt:number=parseFloat(display.innerText);
    txt=txt*Math.PI/180;
    display.innerText=String(txt);
}
let degtofeh=function(){
    let txt:number=parseFloat(display.innerText);
    txt=(txt*9/5)+32;
    display.innerText=String(txt);
}
let acostrigo=function(){
    let txt:number=parseFloat(display.innerText);
    txt = Math.acos(txt * Math.PI / 180);
    display.innerText = String(txt);
}
let asintrigo=function(){
    let txt:number=parseFloat(display.innerText);
    txt = Math.asin(txt * Math.PI / 180);
    display.innerText = String(txt);
}
let atantrigo=function(){
    let txt:number=parseFloat(display.innerText);
    txt = Math.atan(txt * Math.PI / 180);
    display.innerText = String(txt);
}