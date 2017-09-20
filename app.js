'use strict';

var userName = prompt('Hello, Stranger! Thanks for stopping by my About Me page. What\'s your name?');
alert('Hi, ' + userName + ', it\'s nice to meet you. Let\'s see if you can guess all five questions about me.')

// Question1
var answer1 = prompt('Am I from Oregon?').toLowerCase();
console.log('Answer 1 is ', answer1);

if (answer1 === 'n' || answer1 === 'no') {
  // Tell user correct answer
  alert('You got it! Keep going!')
} else {
  //Tell user they got the wrong answer
  alert('Not quite, keep trying!')
}

//Question2
var answer2 = prompt('Do I have two dogs?').toLowerCase();
console.log('Answer 2 is ', answer2);

if (answer2 === 'y' || answer2 === 'yes') {
  // Tell user correct answer
  alert('You got it! Keep going!')
} else {
  //Tell user they got the wrong answer
  alert('Not quite, keep trying!')
}

//Question3
var answer3 = prompt('Do I have a stong understanding of Python?').toLowerCase();
console.log('Answer 3 is ', answer3);

if (answer3 === 'n' || answer3 === 'no') {
  // Tell user correct answer
  alert('You got it! Keep going!')
} else {
  //Tell user they got the wrong answer
  alert('Not quite, keep trying!')
}

//Question4
var answer4 = prompt('Do I have a Mortgage Loan Originator License?').toLowerCase();
console.log('Answer 4 is ', answer4);

if (answer4 === 'y' || answer4 === 'yes') {
  // Tell user correct answer
  alert('You got it! Keep going!')
} else {
  //Tell user they got the wrong answer
  alert('Not quite, keep trying!')
}

//Question5
var answer5 = prompt('Do I enjoy coding?').toLowerCase();
console.log('Answer 5 is ', answer5);

if (answer5 === 'y' || answer5 === 'yes') {
  // Tell user correct answer
  alert('You made it! Good job!')
} else {
  //Tell user they got the wrong answer
  alert('Not Quite, that was all!')
}
