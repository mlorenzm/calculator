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



function operate(num1, operator, num2){
     if (operator == '+'){
        return add(num1, num2);
    } else if (operator == '-'){
        return subtract(num1,num2);
    } else if (operator == '×'){
        return multiply(num1, num2);
    } else if (operator == '÷'){
        return divide(num1,num2);
    }
};


const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const dotButton = document.querySelector('.dot');
const backspaceButton = document.querySelector('.backspace');
const screen = document.querySelector('.screen');
let previousNumber;
let lastNumber;
let operator;
let equal = false;
let ans = false;


numberButtons.forEach(item =>{
    item.addEventListener('click', e =>{
        if(screen.textContent == '0'){
            screen.textContent = item.textContent;
        } else if(previousNumber && !ans){
            screen.textContent = item.textContent;
            ans = true;
        }else{
            screen.textContent += item.textContent
        }
    })
});

operatorButtons.forEach(item =>{
    item.addEventListener('click', e =>{
        if (previousNumber){
            currentNumber = parseFloat(screen.textContent);
            console.log(`current number is ${currentNumber}`)
            previousNumber = operate(currentNumber, operator, previousNumber);
            screen.textContent = previousNumber;
            ans = false;
        } else{
            previousNumber = parseFloat(screen.textContent);
        }
        screen.textContent = previousNumber
        operator = item.textContent;
    })
});

dotButton.addEventListener('click', e=>{
    if (!screen.textContent.includes('.')){
        screen.textContent += '.';
    }
})
function clear(display){
    if (display == 'clear'){screen.textContent = '0';};
    previousNumber = undefined;
    lastNumber = undefined;
    operator = undefined;
    equal = false;
    ans = false;
}


equalButton.addEventListener('click', e =>{
    if(operator == undefined){
       // do nothing, but don't collapse display
    }
    else if (!equal){
        lastNumber = parseFloat(screen.textContent);
        equal = true;
        screen.textContent = operate(previousNumber, operator, lastNumber);
    } else {
        screen.textContent = operate(parseFloat(screen.textContent), operator, lastNumber);
    }
}
);

clearButton.addEventListener('click', e=>{
    clear('clear');
});


backspaceButton.addEventListener('click', e=>{
    if(screen.textContent.length > 1){
        screen.textContent = screen.textContent.slice(0,-1);
    } else {
        screen.textContent = '0';
    }
});