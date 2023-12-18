
const number1 = document.getElementById('txt1');
const btn1 = document.getElementById('button1');
const out1 = document.getElementById('output1');

const number2 = document.getElementById('txt2');
const btn2 = document.getElementById('button2');
const out2 = document.getElementById('output2');

const number3 = document.getElementById('txt3');
const btn3 = document.getElementById('button3');
const out3 = document.getElementById('output3');

const number4 = document.getElementById('txt4');
const btn4 = document.getElementById('button4');
const out4 = document.getElementById('output4');

const number5 = document.getElementById('txt5');
const btn5 = document.getElementById('button5');
const out5 = document.getElementById('output5');

const number6 = document.getElementById('txt6');
const btn6 = document.getElementById('button6');
const out6 = document.getElementById('output6');

const number7 = document.getElementById('txt7');
const btn7 = document.getElementById('button7');
const out7 = document.getElementById('output7');


function displayNum1(){
    console.log("BUTTON PRESSED");
    out1.innerHTML = (number1.value + 2) * 4 ;
    console.log(number1);
    
}

function displayNum2(){
    out2.innerHTML = (number2.value + 2) * 4;
}

function displayNum3(){
    out3.innerHTML = (number3.value + 2) * 4;
}

function displayNum4(){
    out4.innerHTML = (number4.value + 2) * 4;
}

function displayNum5(){
    out5.innerHTML = (number5.value + 2) * 4;
}

function displayNum6(){
    out6.innerHTML = (number6.value + 2) * 4;
}

function displayNum7(){
    out7.innerHTML = (number7.value + 2) * 4;
}


btn1.addEventListener('click',displayNum1);
btn2.addEventListener('click', displayNum2);
btn3.addEventListener('click', displayNum3);
btn4.addEventListener('click', displayNum4);
btn5.addEventListener('click', displayNum5);
btn6.addEventListener('click', displayNum6);
btn7.addEventListener('click', displayNum7);
