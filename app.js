'use strict';

var userName = prompt('Hello, Stranger! What\'s your name?');
var score = 0;

// Initial question to play game
var wantToPlay = prompt('Hi ' + userName + ', do you want to play a game? I\'m a simple webpage, please respond Yes or No.').toLowerCase();
console.log('Question: Do you want to play a game?\nUser Name: ' + userName + '\nResponse: ' + wantToPlay);

if (wantToPlay === 'y' || wantToPlay === 'yes') {
  alert('Excellent! There will be five questions about Dan. Try guessing all five using either Yes or No responses.')
} else {
  alert('Sorry, ' + userName + '. I\'ve already started the game!')
}

function answer1() {
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
}

answer1 ();

function answer2() {
  //Question2
  var answer2 = prompt('Do I have two dogs?').toLowerCase();
  console.log('Question: Do I have two dogs?\nUser Name: ' + userName + '\nResponse: ' + answer2);

  if (answer2 === 'y' || answer2 === 'yes') {
    // Tell user correct answer
    alert('That\'s right! Keep going!')
    score += 1;
  } else {
    //Tell user they got the wrong answer
    alert('Not quite, keep trying!')
  }
}

answer2 ();


function answer3() {
  //Question3
  var answer3 = prompt('Do I have a stong understanding of Python?').toLowerCase();
  console.log('Question: Do I have a stong understanding of Python?\nUser Name: ' + userName + '\nResponse: ' + answer3);

  if (answer3 === 'n' || answer3 === 'no') {
    // Tell user correct answer
    alert('Nice work! Next question!')
    score += 1;
  } else {
    //Tell user they got the wrong answer
    alert('Not quite, keep trying!')
  }

}

answer3();

function answer4() {
  //Question4
  var answer4 = prompt('Do I have a Mortgage Loan Originator License?').toLowerCase();
  console.log('Question: Do I have a Mortgage Loan Originator License?\nUser Name: ' + userName + '\nResponse: ' + answer4);

  if (answer4 === 'y' || answer4 === 'yes') {
    // Tell user correct answer
    alert('Excellent! Keep going!')
    score += 1;
  } else {
    //Tell user they got the wrong answer
    alert('Not quite, keep trying!')
  }
}

answer4();


function answer5 () {
  //Question5
  var answer5 = prompt('Do I enjoy coding?').toLowerCase();
  console.log('Question: Do I enjoy coding?\nUser Name: ' + userName + '\nResponse: ' + answer5);

  if (answer5 === 'y' || answer5 === 'yes') {
    // Tell user correct answer
    alert('Good job! Keep going!')
    score += 1;
  } else {
    //Tell user they got the wrong answer
    alert('Not Quite, next question!')
  }
}

answer5 ();



function answer6 () {
  for (var i=0; i < 4; i++) {

    var attempts = 4 - i;
    var answer6 = prompt('What day in May is my Birthdate?\n You have ' + attempts + ' attempts left')

    if (answer6 == 28) {
      alert('Wow! You got it! Keep going!')
      score += 1;
      console.log('Question: Guess my Birthdate?\nUser Name: ' + userName + '\nResponse: ' + answer6 + 'got it!');
      break;

    } else if (answer6 < 28){
      alert('You are too low!')
      console.log('Question: Guess my Birthdate?\nUser Name: ' + userName + '\nResponse: ' + answer6 + 'too low!');
    } else if(answer6 > 28) {
      alert('You are too High!')
      console.log('Question: Guess my Birthdate?\nUser Name: ' + userName + '\nResponse: ' + answer6 + 'too high!');
    }

    if (i >= 3) {
      alert('Sorry, no points for this question!')
      break;
    }
  }
}

answer6();




function answer7 () {
  var possibleAnswers = ['redmond', 'issaquah', 'bellevue', 'kirkland'];

  for (var i = 0; i < 6; i++) {

    var attempts = 6 - i;
    var didWinGame = false;

    var answer7 = prompt('Can you guess a city in Washington I\'ve lived in?\nYou have ' + attempts + ' attempts remaining').toLowerCase();

    for (var j = 0; j < possibleAnswers.length; j++) {
      if (answer7 === possibleAnswers[j]) {
        alert('You got one! Here were the possible answers: ' + possibleAnswers.join(', '))
        score += 1;
        console.log('Question: What city I have lived?\nUser Name: ' + userName + '\nResponse: ' + answer7);
        didWinGame = true;
        break;
      }
    }

    if (didWinGame === true) {
      break;
    }

    if (i === 5) {
      alert('Sorry, those were incorrect!\nHere were the possible answers: ' + possibleAnswers.join(', '))
      console.log('Question: What city I have lived?\nUser Name: ' + userName + '\nResponse: ' + answer7);

    } else {
      alert('Sorry, that was incorrect!')
      console.log('Question: What city I have lived?\nUser Name: ' + userName + '\nResponse: ' + answer7);
    }

    if (i >= 6) {
      alert('Sorry, you\'ve exceeded you attempts. :/')
      console.log('Question: What city I have lived?\nUser Name: ' + userName + '\nResponse: ' + answer7);
      break;
    }
  }

  alert('You completed the game with a score of ' + score + ' out of 7. Thanks for playing ' + userName + '!');

}

answer7();
