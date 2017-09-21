'use strict';

var userName = prompt('Hello, Stranger! What\'s your name?');
var score = 0;

// Initial question to play game
var wantToPlay = prompt('Hi ' + userName + ', do you want to play a game? I\'m simple, please respond Yes or No.').toLowerCase();
console.log('Question: Do you want to play a game?\nUser Name: ' + userName + '\nResponse: ' + wantToPlay);

if (wantToPlay === 'y' || wantToPlay === 'yes') {
  alert('Excellent! There will be five questions about me. Try guessing all five using either Yes or No responses.')
} else {
  alert('Sorry, ' + userName + '. I already started the game!')
}

// Question1
var answer1 = prompt('Am I from Oregon?').toLowerCase();
console.log('Question: Am I from Oregon?\nUser Name: ' + userName + '\nResponse: ' + answer1);

if (answer1 === 'n' || answer1 === 'no') {
  // Tell user correct answer
  alert('You got it! Keep going!')
  score += 1;
} else {
  //Tell user they got the wrong answer
  alert('Not quite, keep trying!')
}

//Question2
var answer2 = prompt('Do I have two dogs?').toLowerCase();
console.log('Question: Do I have two dogs?\nUser Name: ' + userName + '\nResponse: ' + answer2);

if (answer2 === 'y' || answer2 === 'yes') {
  // Tell user correct answer
  alert('You got it! Keep going!')
  score += 1;
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
  score += 1;
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
  score += 1;
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
  score += 1;
} else {
  //Tell user they got the wrong answer
  alert('Not Quite, that was all!')
}

for (var i=0; i < 4; i++) {

  var attempts = 4 - i;

  var answer6 = prompt('What day in May is my Birthdate?\n You have ' + attempts + ' attempts left')

  if (answer6 == 28) {
    alert('You got it!')
    score += 1;
    console.log('You got it!')
    break;

  } else if (answer6 < 28){
    alert('You are too low!')
    console.log('You are too low!')
  } else if(answer6 > 28) {
    alert('You are too High!')
    console.log('You are too High!')
  }

  if (i >= 3) {
    alert('Sorry, no points for this question!')
    break;
  }
}

var possibleAnswers = ['redmond', 'issaquah', 'bellevue', 'kirkland'];

for (var i = 0; i < 6; i++) {

  var attempts = 6 - i;
  var didWinGame = false;

  var answer7 = prompt('Can you guess a city in Washington I\'ve lived in? You have ' + attempts + ' attempts remaining').toLowerCase();

  for (var j = 0; j < possibleAnswers.length; j++) {
    if (answer7 === possibleAnswers[j]) {
      alert('You got one! Here were the possible answers: ' + possibleAnswers.join(', '))
      score += 1;
      console.log('Got is!')
      didWinGame = true;
      break;
    }
  }

  if (didWinGame === true) {
    break;
  }

  if (i === 5) {
    alert('Here were the possible answers: ' + possibleAnswers.join(', '))
    console.log('Got is!')

  } else {
    alert('Not Quite, try again!')
    console.log('Nope!')
  }

  if (i >= 6) {
    alert('Game Over!')
    console.log('Game Over!')
    break;
  }
}

alert('You completed the game with a score of ' + score + ' out of 7. Thanks for playing ' + userName + '!');
