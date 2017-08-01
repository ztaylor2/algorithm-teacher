'use strict';

var cardValue = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
var cardSuit = ['clubs','hearts','spades','diamonds'];
var deck = [];
var leftCardPosition = [10,100,190,280,370,460,550,640,730,820,910,1000,1090,10,100,190,280,370,460,550,640,730,820,910,1000,1090,10,100,190,280,370,460,550,640,730,820,910,1000,1090,10,100,190,280,370,460,550,640,730,820,910,1000,1090];
var topCardPositionRow1 = 80;
var topCardPositionRow2 = 205;
var topCardPositionRow3 = 330;
var topCardPositionRow4 = 455;
var currentIndex;
var pressPlay = false;

function buildDeck(){
  for(var i = 0; i < cardSuit.length; i++) {
    for(var j = 0; j < cardValue.length; j++){
      deck.push(cardValue[j] + '_of_' + cardSuit[i] + '.png');
    }
  }
  currentIndex = deck.length;
}

/*Fisher-Yates shuffle based on stackoverflow https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
function shuffle(event) {
  var tempValue;
  var randomIndex;
  if (currentIndex !== 0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    tempValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = tempValue;

    displayShuffle(currentIndex, randomIndex);

    if (pressPlay === true && currentIndex !== 0){
      play();
    } else if (pressPlay === true && currentIndex === 0) {
      pressPlay = false;
      alert('Congratulations! You\'ve shuffled the deck!');
      currentIndex = deck.length;
      document.getElementById('step').addEventListener('click',shuffle);
    }
  } else {
    alert('Congratulations! You\'ve shuffled the deck!');
    currentIndex = deck.length;
  }
}

/*________________________ function to first display cards ____________________*/

function displayCards() {
  buildDeck();
  var content = document.getElementById('cards-div');
  for(var i = 0; i < deck.length; i++){
    var img = document.createElement('img');
    img.setAttribute('src','img/' + deck[i]);
    img.setAttribute('id', 'card' + i);
    content.appendChild(img);
  }
  moveCards();
}

function moveCards() {
  for (var i = 0; i < deck.length; i++){
    if(i < 13){
      document.getElementById('card' + i).style.position = 'absolute';
      document.getElementById('card' + i).style.left = leftCardPosition[i] + 'px';
      document.getElementById('card' + i).style.top = topCardPositionRow1 + 'px';
      document.getElementById('card' + i).style.width = '80px';
    } else if (i < 26){
      document.getElementById('card' + i).style.position = 'absolute';
      document.getElementById('card' + i).style.left = leftCardPosition[i] + 'px';
      document.getElementById('card' + i).style.top = topCardPositionRow2 + 'px';
      document.getElementById('card' + i).style.width = '80px';
    } else if (i < 39){
      document.getElementById('card' + i).style.position = 'absolute';
      document.getElementById('card' + i).style.left = leftCardPosition[i] + 'px';
      document.getElementById('card' + i).style.top = topCardPositionRow3 + 'px';
      document.getElementById('card' + i).style.width = '80px';
    } else {
      document.getElementById('card' + i).style.position = 'absolute';
      document.getElementById('card' + i).style.left = leftCardPosition[i] + 'px';
      document.getElementById('card' + i).style.top = topCardPositionRow4 + 'px';
      document.getElementById('card' + i).style.width = '80px';
    }
  }
}

function displayShuffle(currentIndex, randomIndex) {
  var content = document.getElementById('cards-div');
  while (content.hasChildNodes()){
    content.removeChild(content.lastChild);
  }
  for(var i = 0; i < deck.length; i++){
    var img = document.createElement('img');
    img.setAttribute('src','img/' + deck[i]);
    img.setAttribute('id', 'card' + i);
    content.appendChild(img);
  }
  moveCards();
  highlight(currentIndex, randomIndex)
}

function highlight(currentIndex, randomIndex){

  document.getElementById('card' + currentIndex).style.transform = 'scale3d(1.4, 1.4, 1)';
  document.getElementById('card' + currentIndex).style.opacity = '1';
  document.getElementById('card' + currentIndex).style.zIndex = '2';
  document.getElementById('card' + currentIndex).style.boxShadow = '0px 0px 100px #000000';

  document.getElementById('card' + randomIndex).style.transform = 'scale3d(1.4, 1.4, 1)';
  document.getElementById('card' + randomIndex).style.opacity = '1';
  document.getElementById('card' + randomIndex).style.zIndex = '2';
  document.getElementById('card' + randomIndex).style.boxShadow = '0px 0px 100px #000000';
}

function play(){
  document.getElementById('step').removeEventListener('click',shuffle);
  pressPlay = true;
  if (currentIndex !== 0){
    var myTimeout = setTimeout(shuffle, 500);
  }
  document.getElementById('play').innerHTML = 'Stop';
  document.getElementById('play').removeEventListener('click',play);
  document.getElementById('play').addEventListener('click',stop);
}

function stop() {
  pressPlay = false;
  document.getElementById('step').addEventListener('click',shuffle);
  document.getElementById('play').removeEventListener('click',stop);
  document.getElementById('play').innerHTML = 'Play';
  document.getElementById('play').addEventListener('click',play);
  console.log('????');
}

displayCards();

document.getElementById('step').addEventListener('click',shuffle);
document.getElementById('play').addEventListener('click',play);
