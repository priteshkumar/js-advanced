//closure demo 

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
