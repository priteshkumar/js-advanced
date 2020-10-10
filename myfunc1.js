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