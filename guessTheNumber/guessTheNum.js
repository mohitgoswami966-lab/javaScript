let randomNumber= parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const remaining=document.querySelector('.lastResult');
const guessSlot=document.querySelector('.guesses');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');
let playGame=true;
const p=document.createElement('p');
let prevGuess=[];
let numGuess=1;
if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess=parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess){
  if(isNaN(guess)){
    alert(`please enter valid number`)
  }
  else if(guess<1){
    alert(`please enter numberNumber greater than 1`)
  }
  else if(guess>100){
    alert(`please enter numberNumber less than 100`)
  }
  else{
    prevGuess.push(guess);
    if(numGuess === 10){
      displayGuess(guess)
      displayMessage(`<b>Game over</b><br>Random number was ${randomNumber}`)
      endGame()
    }
    else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You Guessed the right Number`)
    endGame()
  }
  else if(guess < randomNumber){
    displayMessage(`Number is too small`)
  }
  else if(guess > randomNumber){
    displayMessage(`Number is too large`)
  }
}
function displayGuess(guess){
  userInput.value=''
  guessSlot.innerHTML += `${guess},   `
  numGuess++;
  remaining.innerHTML= `${11-numGuess}`
}
function displayMessage(message){
  lowOrHi.innerHTML=`<h2>${message}</h2>`;
}
function endGame(){
  userInput.val='';
  userInput.setAttribute('disabled','');
  p.classList.add('button')
  p.innerHTML= `<h2 id="newGame"> Start New </h2>`;
  p.style.backgroundColor="lightblue";
  p.style.padding="5px";
  p.style.borderRadius="15px";
  p.style.cursor="pointer";
  startOver.appendChild(p);
  playGame=false;
  newGame();
}
function newGame(){
  const newGameButton=document.querySelector(`#newGame`);
  newGameButton.addEventListener('click',function(e){
    randomNumber= parseInt(Math.random()*100+1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML= `${11-numGuess}`
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;
  });
}