function print(string,printcb){
  setTimeout(function(){
    console.log(string);
    printcb();
  }, Math.random() * 100
 )
}

function printLetters(){
    print("a");
    print("b");
    print("c");
  }
  //printLetters();

  
  //creates nested callbacks
  //hard to read/not a good practice 
  function printLetterscb(){
    print("a", function(){
       print("b", function(){
          print("c", function(){
       })
    })
 })
 }

 //printLetterscb();


 //use promise 

 function print(x){
    return new Promise(function(resolve, reject){
      setTimeout(function(){
         console.log(x)
         resolve();
        }, Math.random()*100
      )
    })
   }

   function printUsingPromise(){
       print("a").then(function(){
           return print("b");
       }).then(function(){
           return print("c");
       });
   }

   printUsingPromise();


   //using async await
   async function printAsyncLetters(){
       await print("a");
       await print("b");
       await print("c");
   } 

   printAsyncLetters();
