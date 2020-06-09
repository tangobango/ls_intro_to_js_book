console.log("Tami " + "Sigmund");

let number = 4936;
let ones = number % 10;

console.log(ones);

number = (number - ones)/ 10;



let tens = number % 10;
console.log(tens);

number = (number - tens) / 10;


let hundreds = number % 10;
console.log(hundreds);

number = (number - hundreds) / 10;


let thousands = number % 10;
console.log(thousands);

/* 

'true' = string
false = boolean
1.5 = number
2 = number
undefined = undefined
{ foo: 'bar' } = object

*/

/*
var foo;
foo = 5;
foo;

statements:
var foo;


expressions:
foo = 5;
foo;
*/


/*
Explain why this code logs '510' instead of 15.

console.log('5' + 10);
Because the 10 is coerced to become a string because at one of the two is a string, therefore they're concatenated.
*/

/*
Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.
console.log('5' + 10);
console.log(Number('5') + 10);
*/

/*
Use the template literal syntax along with the expression Number('5') + 10 to log the following sentence to the console:
The value of 5 + 10 is 15.

Number('5') + 10 */
console.log("The value of " + "Number('5')+10 " + "is 15.") // wrong
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`); // yay!


let names = ["asta", "butterscotch", "pudding", "neptune", "darwin"];

let pets = {
  asta: 'dog', 
  butterscotch: 'cat', 
  pudding: 'cat', 
  neptune: 'fish', 
  darwin: 'lizard'
  
};
