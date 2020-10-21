var numbers = [12, 33, 87, 63];
var mapResult = numbers.filter(function(x) {
    return x>50
});
console.log(result);


var result = numbers.filter(x => x > 50);
var result = numbers.map(function(x) {
    return x+2
});
console.log(result);


var numbers = [12, 33, 87, 63];
var reduceResult = numbers.reduce(function(x, y) {
    return x+y
});
console.log(reduceResult);


//code demo
function pythagoras(x,y,z){
	// ... complete this function...
	var input = [];
	input.push(x);
	input.push(y);
	input.push(z);
	var max = input.reduce(function(x,y){
	   return  x > y ?x:y;
    });
    console.log(max);

	var sum = (input.map(function(x){
	    return x *x;
    })).reduce(function(acc,val){
        return acc + val;
    });

    console.log(sum);
	var maxsq = max * max;
	if(maxsq == sum - maxsq)
	    return true;
	else
	    return false;
}

console.log(pythagoras(3,5,4));

var a = new Number("7.6");
console.log(a.valueOf());