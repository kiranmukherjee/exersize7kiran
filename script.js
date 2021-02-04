button1 = document.getElementById("btn1")

function randomword(){
    let words = ['Dog', 'Cat', 'Frog', 'Rat', 'Gerbil'];
    let word = words[Math.floor(Math.random() * 5)];
    return word;
     
};

button1.onclick = function() {
    document.getElementById("txtOutput").innerHTML = randomword()
}

button2 = document.getElementById("btn2")

function randomword2(){
    let words = ['Dog', 'Cat', 'Frog', 'Rat', 'Gerbil'];
    let word = words[Math.floor(Math.random() * 5)];
    return word;
     
};

button2.onclick = function() {
    document.getElementById("txtOutput2").innerHTML = randomword2()
}

// let txtOutput = document.getElementById("txtOutput");


// var name = txtName.value;
// txtOutput.value 


// alert("The script chose: " + myFunction);

    