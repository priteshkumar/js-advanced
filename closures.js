//closure demo 
//closure is used to create private methods/variables

function mathsFunc(op1,op2,operator){
    var calculate;
    switch(operator){
        case '+':
        calculate = function(){
            return op1 + op2;
        };
        break;
        case '-':
            calculate = function(){
                return op1 - op2;
            };
            break;
        case '*':
            calculate = function(){
                return op1 * op2;
            };
            break;
    }
    return calculate;
}

//inner function can refer and remembers variables defined in outer scope 
//forms a closure
var calc = mathsFunc(2,3,"+");
console.log(calc());


//closure code example
function printStats(msg){
    var timestamp  = new Date().toString();
    var printFunc = function(){
        console.log(timestamp + ' ' + msg);
    }
    return printFunc;
}

var f = printStats('jenkins build started');
f();



//click example
function clickHandler(){
    var clicks = 0;
    function incrementClicks(){
        clicks++;
        console.log('clicks : ' + clicks);
    }
    return incrementClicks;
}

var clickF = clickHandler();
//test click loop
for(var i=0; i < 3;i++){
    clickF();
}

//click example using IIFE

var updateClicks = (function(){
    var clicks = 0;
    var clickF = function(){
        clicks++;
        console.log('updated clicks ' + clicks);
    }
    return clickF;
})();


updateClicks();
updateClicks();

//hoisting demo

var x = 1;

function fhoist() {
    //var x moves here by hoisting
    //undefined and 2 is printed
   console.log(x);
   var x = 2;
   console.log(x);
};

//console.log(fhoist.constructor);
fhoist();
//console.log(fhoist.toString());