'use strict';

var userName = prompt('Thanks for stopping by my About Me page! What\'s your name?');
alert('Hi, ' + userName + ', nice to meet you. See if you can get the right answer to the questions about me.')

// Question1
var answer1 = prompt('Do I have 4 cats?').toLowerCase();
console.log('Answer 1 is ', answer1);

if (answer1 === 'n' || answer1 === 'no'{
  // Tell user correct answer
  alert('You are correct')
} else {
  //Tell user they got the wrong answer
  alert('You are not correct')
}
