//function
function board() {
    console.log("Board called!");
}
board();


//method
var board = {
    "name": "Board name is JavaScript",
    "print": function() {
       console.log(this.name);
    }
}
board.print();


// constructor
var boards = function(name) {
    this.name = name; 
 }
 var boardName = new boards('Board name is JavaScript');
 console.log(boardName);
 

 //apply
 var getBoardName = function(firstName, lastName) {
    return firstName + lastName; 
 }
 var boardName = getBoardName.apply(null, ['New','Board'])
 console.log(boardName);


//recursion

function boardList(count) {
   console.log(arguments);
     if(count == 0) {
        console.log("New Board Created!");
     }else {
       console.log("Calling boardList again!");
       boardList(count - 1);
     }
}
 console.log(boardList.name);

 console.log(boardList(3));


 var stringfunc = function(val){
    return val + " " + val;
 } 

 console.log(stringfunc("jenkins"));

 console.log(typeof stringfunc)