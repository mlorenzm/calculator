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
};

const btns = document.querySelector('.buttons');
const screen = document.querySelector('.screen');
let decimal = false;

btns.addEventListener('click', e =>{
    let key = e.target;
    let keyClass= key.classList;
    let keyContent = key.textContent;
    let displayedNum = screen.textContent;
    if(keyClass.contains('number')){
    screen.textContent = displayedNum + keyContent};
    if (keyClass.contains('dot')){
        if(decimal==false){ 
            screen.textContent = displayedNum + '.';
            decimal = true;}
    }
    if (keyClass.contains('clear')){
        screen.textContent = '0';
        decimal = false;
    }
    if (keyClass.contains('backspace')){
        if(screen.textContent.length <= 2){
            screen.textContent = '0'
            decimal = true
        } else screen.textContent = screen.textContent.slice(0,-1);
    }



   // if(keyClass.contains('number')) {console.log(keyContent)}
    if(keyClass.contains('clear')) {console.log('clear')}
    if(keyClass.contains('backspace')) {console.log('backspace')}
    if(keyClass.contains('operator')) {console.log('operator')}
   // if(keyClass.contains('dot')) {console.log('decimal')}
    if(keyClass.contains('equal')) {console.log('equal')}
})