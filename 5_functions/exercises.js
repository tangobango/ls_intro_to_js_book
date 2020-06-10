function multiply(num1, num2){
  return num1 * num2;
}

function getNumbers(prompt) {
    let readlineSync = require('readline-sync');
    return parseFloat(readlineSync.question(prompt));
}


let num1 = getNumbers("What is the first number");
let num2 = getNumbers("what is the second number");
let finalSum = multiply; 
console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);



/* 
function multiply(left, right) {
  return left * right;
}

function getNumber(prompt) {
  let readlineSync = require('readline-sync');
  return parseFloat(readlineSync.question(prompt));
}

let left = getNumber('Enter the first number: ');
let right = getNumber('Enter the second number: ');
console.log(`${left} * ${right} = ${multiply(left, right)}`);
*/