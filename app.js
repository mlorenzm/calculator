const add = (a,b) => {
    return a + b;
};

const subtract = (a,b) => {
    return a - b;
};

const multiply = (a,b) => {
    return a * b;
};

const divide = (a,b) => {
    if (b == 0){
        return 'idk';
    }
    return a / b;
};
const invert = (a) => {
    if (a == 0){
        return 'dude';
    }
    return 1 / a;
};


function operate(num1, operator, num2){
    if (operator == 'inv'){
        return invert(num1);
    } else if (operator == '+'){
        return add(num1, num2);
    } else if (operator == '-'){
        return subtract(num1,num2);
    } else if (operator == '*'){
        return multiply(num1, num2);
    } else if (operator == '/'){
        return divide(num1,num2);
    }
}


let clear = document.querySelector('.clear');
let screen = document.querySelector('.screen');
clear.addEventListener('click', () =>{
        screen.textContent = '⠀'; // this is an empty unicode character, to avoid CSS screen collapsing
        currentNumber = '';
    })

let currentNumber ='';

let number = document.getElementsByClassName('number');

for (let i=0; i<number.length; i++){
    number[i].addEventListener('click', function(){
        currentNumber += number[i].innerHTML;
        screen.innerHTML = currentNumber;
        })
};

// I have the way to join numbers and print them 



    
