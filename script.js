// button 1
button1 = document.getElementById("btn1")

function randomword(){
    let words = ['I', 'You', 'He', 'She', 'They'];
    let word = words[Math.floor(Math.random() * 5)];
    return word;
     
};

button1.onclick = function() {
    document.getElementById("txtOutput").innerHTML = randomword()
}

// button 2
button2 = document.getElementById("btn2")

function randomword2(){
    let words = ['went', 'came', 'drove', 'biked', 'flew'];
    let word = words[Math.floor(Math.random() * 5)];
    return word;
     
};

button2.onclick = function() {
    document.getElementById("txtOutput2").innerHTML = randomword2()
}

// button 3
button3 = document.getElementById("btn3")

function randomword3(){
    let words = ['to', 'from', 'along'];
    let word = words[Math.floor(Math.random() * 3)];
    return word;
     
};

button3.onclick = function() {
    document.getElementById("txtOutput3").innerHTML = randomword3()
}

// button 4
button4 = document.getElementById("btn4")

function randomword4(){
    let words = ['the ocean.', 'the street.', 'downtown.', 'the river.', 'the mountain.'];
    let word = words[Math.floor(Math.random() * 5)];
    return word;
     
};

button4.onclick = function() {
    document.getElementById("txtOutput4").innerHTML = randomword4()
}

// let txtOutput = document.getElementById("txtOutput");


// var name = txtName.value;
// txtOutput.value 


// alert("The script chose: " + myFunction);

    