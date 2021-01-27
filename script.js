
let myInput = document.getElementById("usernumber"); 

// console.log(myInput)

let submission = document.getElementById("submit"); 

submission.addEventListener("click", function(){
    console.log(myInput.value);
})


if (usernumber<11){
  console.log( "you have reached option 1" );
}
else if (usernumber>11 && usernumber<33){
    console.log("you have reached option 2");
}   


if (usernumber == 11){
  console.log("you win! you chose the correct number");
}