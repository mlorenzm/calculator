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
    if (operator == 'x⁻¹'){
        return invert(num1);
    } else if (operator == '+'){
        return add(num1, num2);
    } else if (operator == '-'){
        return subtract(num1,num2);
    } else if (operator == '×'){
        return multiply(num1, num2);
    } else if (operator == '÷'){
        return divide(num1,num2);
    }
}

function clearScreen() {
    screen.innerHTML = '⠀'; // this is an empty unicode character, to avoid CSS screen collapsing
    currentOperator = '';
    firstNumber = '';
    lastNumber = '';
};


let clear = document.querySelector('.clear');
let screen = document.querySelector('.screen');
clear.addEventListener('click', clearScreen);

let firstNumber ='';
let lastNumber = '';

let numbers = document.getElementsByClassName('operand');

for (let i=0; i<numbers.length; i++){
    numbers[i].addEventListener('click', function(){
        screen.innerHTML = '⠀';
        if (!currentOperator){
            firstNumber += numbers[i].innerHTML;
            screen.innerHTML = firstNumber;
        }
        else if (currentOperator){
            lastNumber += numbers[i].innerHTML;
            screen.innerHTML = lastNumber;
        }
        })
};

let currentOperator;
let operators = document.getElementsByClassName('operator');


for (let i=0; i<operators.length; i++){
    operators[i].addEventListener('click', function(){
        currentOperator = operators[i].innerHTML;
        clearScreen;
        screen.innerHTML = currentOperator;
        })
};

let backspace = document.querySelector('.backspace')
backspace.addEventListener('click', function(){
    if (screen.innerHTML.length == '1'){
        screen.innerHTML = '0';
    } else {
        newScreen = screen.innerHTML.slice(0, -1);
        screen.innerHTML = newScreen;
    }
})

let equal = document.querySelector('.equal');
equal.addEventListener('click', function(){
    first = Number(firstNumber);
    last = Number(lastNumber);
    let result = operate(first, currentOperator, last);
    screen.innerHTML = result;
});




    
