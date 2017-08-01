'use strict';

var cardValue = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
var cardSuit = ['clubs','hearts','spades','diamonds'];
var deck = [];
var deck0 = [];
var randomIndexArray = [];
var leftCardPosition = [10,100,190,280,370,460,550,640,730,820,910,1000,1090,10,100,190,280,370,460,550,640,730,820,910,1000,1090,10,100,190,280,370,460,550,640,730,820,910,1000,1090,10,100,190,280,370,460,550,640,730,820,910,1000,1090];
var topCardPositionRow1 = 40;
var topCardPositionRow2 = 160;
var topCardPositionRow3 = 280;
var topCardPositionRow4 = 400;

function buildDeck(){
  for(var i = 0; i < cardSuit.length; i++) {
    for(var j = 0; j < cardValue.length; j++){
      deck.push(cardValue[j] + '_of_' + cardSuit[i] + '.png');
    }
  }
}
/*Fisher-Yates shuffle based on stackoverflow https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
function shuffle(array) {
  var currentIndex = array.length;
  var tempValue;
  var randomIndex;
  var count = 0;

  while (currentIndex !== 0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    randomIndexArray.push(randomIndex);
    tempValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = tempValue;
  }
  return array;
}

function displayCards() {
  buildDeck();
  // shuffle(deck);
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

function highlight(){
  document.getElementById('card5').style.transform = 'scale3d(1.4, 1.4, 1)';
  document.getElementById('card5').style.opacity = '1';
  document.getElementById('card5').style.zIndex = '2';
  document.getElementById('card5').style.boxShadow = '0px 0px 100px #000000';
  document.getElementById('card5').style.animation = 'move';

  document.getElementById('card22').style.transform = 'scale3d(1.4, 1.4, 1)';
  document.getElementById('card22').style.opacity = '1';
  document.getElementById('card22').style.zIndex = '2';
  document.getElementById('card22').style.boxShadow = '0px 0px 100px #000000';
}

displayCards();
highlight();
document.getElementById('step').addEventListener('click',)
