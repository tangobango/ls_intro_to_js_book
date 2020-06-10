/*false || (true && false); -> false
true || (1 + 2); -> true
(1 + 2) || true; -> 3
true && (1 + 2); -> 3
false && (1 + 2); -> false
(1 + 2) && true; -> true
(32 * 4) >= 129; -> false
false !== !true; -> false
true === 4; -> false
false === (847 === '847'); -> true
false === (847 == '847'); -> false
(!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false; -> true 
  false              false                      true

*/

/*
function evenOrOdd(number) {
  if (!Number.isInteger(number)) {
      console.log("this is not a number");
      return;
  }
   
  if (number % 2 === 0) { 
      console.log("even"); 
    } else {
      console.log("odd")    
  }
}

if (foo()) {
  return 'bar';
} else {
  return qux();
}
*/

/*Write a function that takes a string as an argument and returns an all-caps version of the string when the string is longer than 10 characters. 
Otherwise, it should return the original string. Example: change 'hello world' to 'HELLO WORLD', but don't change 'goodbye'.*/

function capitalizeIt(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

/*
Write a function that logs whether a number is between 0 and 50 (inclusive), between 51 and 100 (inclusive), greater than 100, or less than 0.

numberRange(25);   // '25 is between 0 and 50'
numberRange(75);   // '75 is between 51 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'
*/

function numberRange(number) {
  case number >= 0 && <= 50:
    console.log('$number is between 0 and 50')
    break;
  case number >= 51 && <=100:
    console.log('$number is between 51 and 100')
    break;
  case number > 100:
    console.log('$number is greater than 100')
    break;    
  case number < 0:
    console.log('$number is less than zero')
    break;     
}


function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}