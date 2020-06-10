// greeting.js
let greetingMessage = 'Good Morning';

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

changeGreetingMessage('Good Evening');
greetPeople(); // logs 'Good Evening'


function greetPeople() {
  let greetingMessage = 'Good Morning';
  console.log(greetingMessage);
}

greetPeople();