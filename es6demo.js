//use of let/const 
//enables block scoping of variables
//hoisting is not done for let
let val = 20 + 30;
const snapshot = "latest";


//arrow functions demo
//function with a single return statement as below
printfunc = () => "jenkins log";
console.log(printfunc());

let b = [10,20,30];
//arrow function in map
let c = b.map(x => x * x);


//spread operator
let d = [10,20];

//concats [30] and [10,20] into e
let e = [30,...d];
console.log(e);

//copies e into f using spread (...) operator
let f = [...e];
console.log(f);

//string template
//use backticks as below
let version = 'latest';
let citool = `jenkins-${version}`;
console.log(citool);


//more arrow functions
let myArrowFunction = (a,b) => console.log(a + " Arrow function " + b);
myArrowFunction("jenkins","docker");


let acc = () => {
    let sum = 0;
    for(let i=0; i < 1000; i++){
     if(i % 3 == 0 || i % 5 == 0){
      sum = sum + i; 
     }
    }
    return sum;
  };

  console.log(acc());
  