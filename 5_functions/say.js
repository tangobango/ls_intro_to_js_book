// say.js
function say(words = 'hello') {
  console.log(words + '!');
}

say('Howdy'); // logs Howdy!
say(); // logs hello!

say("hello");       // => hello!
say("hi");          // => hi!
say("how are you"); // => how are you!
say("I'm fine");    // => I'm fine!

function add(a, b) {
  return a + b;
}

add(2, 3); // => returns 5

let twoAndThree = add(2, 3);
console.log(twoAndThree); // => 5