alert('>>> Welcome to Bulls and Cows <<<' 
+'\nThe challenge is to hit a random number generated by the computer.\n' 
+'-->Bulls: Right number in the right position. \n-->Cows: Right number in the wrong position. ');

let gameTable = document.getElementById("gameTable");
let newAttempt = document.getElementById("newAttempt");
let tryButton = document.getElementById("tryButton");

//Generate the answer
let answer;
do{
  answer = String(Math.floor(Math.random() * 9999));
} while(answer.length != 4 || !(digitsAreDifferents(answer)))
console.log(answer);

// newAttempt.addEventListener('keypress', (event) => {

//   if (event.key == 'Enter'){
//     let attempt = {
//       name: newAttempt.nodeValue,
//       id: generateID(),
//     }
//   }

//   if(attempt.number.length != 4){
//     alert('Please, input numbers with length 4')
//   } else if (!digitsAreDifferents(attempt.number)) {
//     alert('Insert diferent numbers!')
//   } else {
//     addAttemptToTable(attempt);
//   }

// })

tryButton.addEventListener('click', (event) => {
  let attempt = {
    number: newAttempt.value,
    id: generateID(),
  }

  if(attempt.number.length != 4){
    alert('Please, input numbers with length 4')
  } else if (!digitsAreDifferents(attempt.number)) {
    alert('Insert diferent numbers!')
  } else {
    addAttemptToTable(attempt);
  }

})

function digitsAreDifferents(attempt) {
  let number = String(attempt);
  let firstDigit = parseInt(number.charAt(0));
  let secondDigit = parseInt(number.charAt(1));
  let thirdDigit = parseInt(number.charAt(2));
  let fourthDigit = parseInt(number.charAt(3));

  if (firstDigit != secondDigit && firstDigit != thirdDigit && firstDigit != fourthDigit &&
      secondDigit != thirdDigit && secondDigit != fourthDigit &&
      thirdDigit != fourthDigit){
    return true;
  }
  return false;
}

function generateID(){
  return Math.floor(Math.random * 1000);
}

function addAttemptToTable(attempt){
  let tr = criateTagtd(attempt);
  gameTable.appendChild(tr);

  if(bullsQuantity(attempt.number) == 4){
    alert('You WIIIIIN!');
  }
}

function criateTagtd(attempt){
  let tr = document.createElement('tr');

  let tdGuess = document.createElement('td');
  let tdBulls = document.createElement('td');
  let tdCows = document.createElement('td');

  tdGuess.innerHTML = attempt.number;
  tdBulls.innerHTML = bullsQuantity(attempt.number);
  tdCows.innerHTML= cowsQuantity(attempt.number);

  tr.appendChild(tdGuess);
  tr.appendChild(tdBulls);
  tr.appendChild(tdCows);

  return tr;
}

function bullsQuantity(attempt){
  
  let number = String(attempt);
  var currentDigitAttempt;
  var currentDigitAnswer;
  var contBulls = 0;

  for (var i = 0; i < 4; i++) {
    currentDigitAttempt = parseInt(number.charAt(i));
    for (var j = 0; j < 4; j++) {
      currentDigitAnswer = parseInt(answer.charAt(j));
      if (i == j && currentDigitAttempt == currentDigitAnswer)
        contBulls++;
    }
  }

  return contBulls;
}

function cowsQuantity(attempt){
  
  let number = String(attempt);
  var currentDigitAttempt;
  var currentDigitAnswer;
  var contCows = 0;

  for (var i = 0; i < 4; i++) {
    currentDigitAttempt = parseInt(number.charAt(i));
    for (var j = 0; j < 4; j++) {
      currentDigitAnswer = parseInt(answer.charAt(j));
      if (i != j && currentDigitAttempt == currentDigitAnswer)
        contCows++;
    }
  }

  return contCows;
}