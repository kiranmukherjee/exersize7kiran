
let myInput = document.getElementById("usernumber"); 

console.log(myInput)

let submission = document.getElementById("submit"); 


submission.addEventListener("click", function(){
    console.log(myInput.value);
    

})

// var x = document.createElement("input");

// x.setAttribute("type", "number");

// if (myNumber<11){
//   console.log( "you have reached option 1" );
// }
// else if (myNumber>11 && myNumber<33){
//     console.log("you have reached option 2");
// }   

// if (myNumber == 11){
//   console.log("you win! you chose the correct number");
// }
// //