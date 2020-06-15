/*let myArray = [1, 3, 6, 11, 4, 2,
               4, 9, 17, 16, 0];
          */     
//Log all of the even values from myArray to the console.



/* Array.forEach(function (num) {
  if (num % 2 === 0) {
  console.log(num);
  }
  
}); 


let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];
               
               
myArray.forEach(function(nestedArray) {
  nestedArray.forEach(function(value) {
    if (value % 2 === 0) {
      console.log(value); // => 6, 4, 2, 4, 16, 0
    }
  });
});      
*/

let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
// Desired result:
//  [
//    'odd', 'odd', 'even', 'odd',
//    'even', 'even', 'even', 'odd',
//    'odd', even', 'even',
//  ]