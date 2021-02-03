button1 = document.getElementById("btn1")

function randomword(){
    let words = ['Dog', 'Cat', 'Frog', 'Rat', 'Gerbil'];
    let word = words[Math.floor(Math.random() * 5)];
    return word;
     
};

button1.onclick = function() {
    document.getElementById("txtOutput").innerHTML = randomword()
}



// let txtOutput = document.getElementById("txtOutput");


// var name = txtName.value;
// txtOutput.value 


// alert("The script chose: " + myFunction);

    