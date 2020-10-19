function add(x,y){
    console.log(arguments); //log the arguments object
    return x+y;
}

console.log(add.name);//access add's name property
console.log(add.toString()); //string source code representation


var myfunc = function(){
    console.log('this is anonymous func');
}

myfunc();


//bind example
var devops = {"name": "jenkins","version":"2.4"};

function runCi(slaves){
    console.log("running ci job on " + this.name + " " + slaves + " slaves");
}

ciRun = runCi.bind(devops);
ciRun(2);


//call example
devops.name = "jenkins-2.189";
devops.version = "latest";
runCi.call(devops,2); //devops is this arg


//apply example
devops.name = "jenkins-latest";
runCi.apply(devops,[3]); //use args in array for apply 



//iife 
(function(){
    console.log("invoking iife1")
    console.log("jenkins ran 2 jobs");
    console.log("jenkins slave set up");
})();


var resMap = (function(){
    console.log("invoking iife2");
    var ciMap = {"ci": "jenkins","version":"latest"};
    return ciMap;
})();

console.log(resMap);

console.log(fibonacci(10));
//recursive func
function fibonacci(n){
    if(n == 0)
        return 1;
    else if(n == 1)
        return 1;
    else
        return fibonacci(n-1) + fibonacci(n-2);

}

console.log(fibonacci(10));