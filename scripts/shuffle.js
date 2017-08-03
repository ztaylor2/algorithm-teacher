'use strict';

var cardValue = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace'];
var cardSuit = ['clubs','hearts','spades','diamonds'];
var deck = [];
var cardNames = [];
var leftCardPosition = [10,100,190,280,370,460,550,640,730,820,910,1000,1090,10,100,190,280,370,460,550,640,730,820,910,1000,1090,10,100,190,280,370,460,550,640,730,820,910,1000,1090,10,100,190,280,370,460,550,640,730,820,910,1000,1090];
var topCardPositionRow1 = 200;
var topCardPositionRow2 = 325;
var topCardPositionRow3 = 450;
var topCardPositionRow4 = 575;
var currentIndex;
var pressPlay = false;
var displayTemp;
var displayRandomIndex;
var tempValue;
var randomIndex;
var iWantTheCode = false;

function buildDeck(){
  for(var i = 0; i < cardSuit.length; i++) {
    for(var j = 0; j < cardValue.length; j++){
      cardNames.push(cardValue[j] + ' of ' + cardSuit[i]);
      deck.push(cardValue[j] + '_of_' + cardSuit[i] + '.png');
    }
  }
  currentIndex = deck.length;
}

/*Fisher-Yates shuffle based on stackoverflow https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
*/
function shuffle(event) {
  // var tempValue;
  // var randomIndex;

  if (currentIndex !== 0){
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    if (currentIndex === 51){
      stop();
      message51(randomIndex);
    }

    if (currentIndex === 50){
      stop();

      message50(randomIndex);
    }

    if (currentIndex === 49){
      stop();

      message49();
    }

    // for display purposes
    displayTemp = cardNames[currentIndex];
    displayRandomIndex = cardNames[randomIndex];
    cardNames[currentIndex] = cardNames[randomIndex];
    cardNames[randomIndex] = displayTemp;

    // actual code
    tempValue = deck[currentIndex];
    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = tempValue;

    if (iWantTheCode === true){
      showCode();
    }

    displayShuffle(currentIndex, randomIndex);

    if (pressPlay === true && currentIndex !== 0){
      play();
    } else if (pressPlay === true && currentIndex === 0) {
      pressPlay = false;
      // alert('Congratulations! You\'ve shuffled the deck!');
      currentIndex = deck.length;
      document.getElementById('step').addEventListener('click',shuffle);
    }
  } else {
    // alert('Congratulations! You\'ve shuffled the deck!');
    currentIndex = deck.length;
  }
}

/*________________________ function to first display cards ____________________*/

function welcome() {

  var welcomeDiv = document.createElement('div');
  var welcomeButton = document.createElement('button');
  var welcomeSpan = document.createElement('span');
  var welcomeHeader = document.createElement('h1');
  var welcomeMessage = document.createElement('p');
  welcomeDiv.style.position = 'relative';
  welcomeDiv.style.border = 'solid';
  welcomeDiv.style.width = '500px';
  welcomeDiv.style.height = '300px';
  welcomeDiv.style.zIndex = '3';
  welcomeDiv.style.backgroundColor = 'white';
  welcomeDiv.style.borderRadius = '5px';
  welcomeDiv.style.margin = '0 auto';
  welcomeDiv.style.boxShadow = '0px 0px 100px #000000';
  welcomeDiv.style.textAlign = 'center';
  welcomeDiv.setAttribute('id','welcomeDiv');

  document.body.appendChild(welcomeDiv);

  welcomeButton.setAttribute('id', 'welcomeButton');
  welcomeButton.style.position = 'relative';
  welcomeButton.style.margin = '20px';
  welcomeButton.style.top = '230px';
  welcomeButton.style.padding = '15px';

  welcomeSpan.textContent = 'Continue';

  welcomeHeader.style.fontSize = '24px';
  welcomeHeader.textContent = 'Welcome to the Fisher-Yates Shuffle Demonstration';
  welcomeHeader.style.position = 'relative';
  welcomeHeader.style.bottom = '60px';

  welcomeMessage.textContent = 'This demonstration is designed to show you a practical application of the Fisher-Yates shuffle algorithm. Use either the \'Play\' or \'Shuffle\' buttons to move through the shuffle.';
  welcomeMessage.style.position = 'relative';
  welcomeMessage.style.bottom = '48px';
  welcomeMessage.style.fontSize = '18px';
  welcomeMessage.style.padding = '10px';
  welcomeMessage.style.fontFamily = 'sans-serif';
  welcomeMessage.style.lineHeight = '26px';

  welcomeButton.appendChild(welcomeSpan);
  welcomeDiv.appendChild(welcomeButton);
  welcomeDiv.appendChild(welcomeHeader);
  welcomeDiv.appendChild(welcomeMessage);

  document.getElementById('welcomeButton').addEventListener('click', removeWelcome);

}

function removeWelcome() {
  if (welcomeDiv){
    document.getElementById('welcomeDiv').remove();
  }
}

function message51(randomIndex) {
  var message51Div = document.createElement('div');
  var message51Button = document.createElement('button');
  var message51Span = document.createElement('span');
  var message51Header = document.createElement('h1');
  var message51Message = document.createElement('p');
  message51Div.style.position = 'relative';
  message51Div.style.border = 'solid';
  message51Div.style.width = '500px';
  message51Div.style.height = '300px';
  message51Div.style.zIndex = '3';
  message51Div.style.backgroundColor = 'white';
  message51Div.style.borderRadius = '5px';
  message51Div.style.margin = '0 auto';
  message51Div.style.boxShadow = '0px 0px 100px #000000';
  message51Div.style.textAlign = 'center';
  message51Div.setAttribute('id','message51Div');

  document.body.appendChild(message51Div);

  message51Button.setAttribute('id', 'message51Button');
  message51Button.style.position = 'relative';
  message51Button.style.margin = '20px';
  message51Button.style.top = '230px';
  message51Button.style.padding = '15px';

  message51Span.textContent = 'Continue';

  message51Header.style.fontSize = '24px';
  message51Header.textContent = 'Step 1:';
  message51Header.style.position = 'relative';
  message51Header.style.bottom = '60px';

  message51Message.textContent = 'The Fisher-Yates shuffle selects the value at the end of the array and swaps it with the value at a randomly selected position (this can include the current location). Here it switched the ' + cardNames[51] + ' with ' + cardNames[randomIndex];
  message51Message.style.position = 'relative';
  message51Message.style.bottom = '48px';
  message51Message.style.fontSize = '18px';
  message51Message.style.padding = '10px';
  message51Message.style.fontFamily = 'sans-serif';
  message51Message.style.lineHeight = '26px';

  message51Button.appendChild(message51Span);
  message51Div.appendChild(message51Button);
  message51Div.appendChild(message51Header);
  message51Div.appendChild(message51Message);

  document.getElementById('message51Button').addEventListener('click', removeMessage51);

}

function removeMessage51() {
  // play();
  document.getElementById('message51Div').remove();
}

function message50(randomIndex) {
  var message50Div = document.createElement('div');
  var message50Button = document.createElement('button');
  var message50Span = document.createElement('span');
  var message50Header = document.createElement('h1');
  var message50Message = document.createElement('p');
  message50Div.style.position = 'relative';
  message50Div.style.border = 'solid';
  message50Div.style.width = '500px';
  message50Div.style.height = '300px';
  message50Div.style.zIndex = '3';
  message50Div.style.backgroundColor = 'white';
  message50Div.style.borderRadius = '5px';
  message50Div.style.margin = '0 auto';
  message50Div.style.boxShadow = '0px 0px 100px #000000';
  message50Div.style.textAlign = 'center';
  message50Div.setAttribute('id','message50Div');

  document.body.appendChild(message50Div);

  message50Button.setAttribute('id', 'message50Button');
  message50Button.style.position = 'relative';
  message50Button.style.margin = '20px';
  message50Button.style.top = '230px';
  message50Button.style.padding = '15px';

  message50Span.textContent = 'Continue';

  message50Header.style.fontSize = '24px';
  message50Header.textContent = 'Step 2:';
  message50Header.style.position = 'relative';
  message50Header.style.bottom = '60px';

  message50Message.textContent = 'The shuffle then decrements a count and selects the next value in the array n-1 which is the ' + cardNames[50] + ' and swaps it with the randomly selected from n-1 array ' + cardNames[randomIndex];
  message50Message.style.position = 'relative';
  message50Message.style.bottom = '48px';
  message50Message.style.fontSize = '18px';
  message50Message.style.padding = '10px';
  message50Message.style.fontFamily = 'sans-serif';
  message50Message.style.lineHeight = '26px';

  message50Button.appendChild(message50Span);
  message50Div.appendChild(message50Button);
  message50Div.appendChild(message50Header);
  message50Div.appendChild(message50Message);

  document.getElementById('message50Button').addEventListener('click', removeMessage50);

}

function removeMessage50() {
  // play();
  document.getElementById('message50Div').remove();
}

function message49() {
  var message49Div = document.createElement('div');
  var message49Button = document.createElement('button');
  var message49Span = document.createElement('span');
  var message49Header = document.createElement('h1');
  var message49Message = document.createElement('p');
  message49Div.style.position = 'relative';
  message49Div.style.border = 'solid';
  message49Div.style.width = '500px';
  message49Div.style.height = '300px';
  message49Div.style.zIndex = '3';
  message49Div.style.backgroundColor = 'white';
  message49Div.style.borderRadius = '5px';
  message49Div.style.margin = '0 auto';
  message49Div.style.boxShadow = '0px 0px 100px #000000';
  message49Div.style.textAlign = 'center';
  message49Div.setAttribute('id','message49Div');

  document.body.appendChild(message49Div);

  message49Button.setAttribute('id', 'message49Button');
  message49Button.style.position = 'relative';
  message49Button.style.margin = '20px';
  message49Button.style.top = '230px';
  message49Button.style.padding = '15px';

  message49Span.textContent = 'Continue';

  message49Header.style.fontSize = '24px';
  message49Header.textContent = 'Repeat!';
  message49Header.style.position = 'relative';
  message49Header.style.bottom = '60px';

  message49Message.textContent = 'Thats all there is to it! Now just press play and watch the shuffle do its magic! Check out the \'Show Code\' button to watch the code at work.';
  message49Message.style.position = 'relative';
  message49Message.style.bottom = '48px';
  message49Message.style.fontSize = '18px';
  message49Message.style.padding = '10px';
  message49Message.style.fontFamily = 'sans-serif';
  message49Message.style.lineHeight = '26px';

  message49Button.appendChild(message49Span);
  message49Div.appendChild(message49Button);
  message49Div.appendChild(message49Header);
  message49Div.appendChild(message49Message);

  document.getElementById('message49Button').addEventListener('click', removeMessage49);

}

function removeMessage49() {
  // play();
  document.getElementById('message49Div').remove();
}

function seeCode() {
  iWantTheCode = true;
  showCode();
}

function showCode(){
  if(document.getElementById('showCodeDiv')){
    document.getElementById('showCodeDiv').remove();
  }

  var showCodeDiv = document.createElement('div');
  var showCodeButton = document.createElement('button');
  var showCodeSpan = document.createElement('span');
  var showCodeHeader = document.createElement('h1');
  var showCodeMessageRandomIndex = document.createElement('p');
  var showCodeMessageCurrentIndex = document.createElement('p');
  var showCodeMessageNewCurrentIndex = document.createElement('p');
  var showCodeMessageAssignTemp = document.createElement('p');
  var showCodeMessageSwap = document.createElement('p');
  var showCodeMessageRandomToTemp = document.createElement('p');

  showCodeDiv.style.position = 'relative';
  showCodeDiv.style.border = 'solid';
  showCodeDiv.style.width = '800px';
  showCodeDiv.style.height = '310px';
  showCodeDiv.style.zIndex = '3';
  showCodeDiv.style.backgroundColor = '#272d35';
  showCodeDiv.style.borderRadius = '5px';
  showCodeDiv.style.margin = '0 auto';
  showCodeDiv.style.boxShadow = '0px 0px 100px #000000';
  showCodeDiv.setAttribute('id','showCodeDiv');

  document.body.appendChild(showCodeDiv);

  showCodeButton.setAttribute('id', 'showCodeButton');
  showCodeButton.style.position = 'relative';
  showCodeButton.style.margin = '20px';
  showCodeButton.style.right = '150px';
  showCodeButton.style.top = '10px';
  showCodeButton.style.padding = '15px';
  showCodeButton.style.zIndex = '4';

  showCodeSpan.textContent = 'Hide Code';

  showCodeHeader.style.fontSize = '18px';
  showCodeHeader.textContent = 'Fisher-Yates Shuffle';
  showCodeHeader.style.position = 'relative';
  showCodeHeader.style.bottom = '100px';

  showCodeMessageCurrentIndex.setAttribute('id','showCodeMessageCurrentIndex');
  showCodeMessageCurrentIndex.textContent = '// currentIndex  ' + currentIndex;
  showCodeMessageCurrentIndex.style.color = '#47c6be';
  showCodeMessageCurrentIndex.style.position = 'absolute';
  showCodeMessageCurrentIndex.style.bottom = '190px';
  showCodeMessageCurrentIndex.style.left = '250px';

  showCodeMessageRandomIndex.setAttribute('id','showCodeMessageRandomIndex');
  showCodeMessageRandomIndex.textContent = '// randomIndex  ' + randomIndex + ' the ' + displayRandomIndex;
  showCodeMessageRandomIndex.style.color = '#47c6be';
  showCodeMessageRandomIndex.style.position = 'absolute';
  showCodeMessageRandomIndex.style.bottom = '170px';
  showCodeMessageRandomIndex.style.left = '510px';

  var decrementedCurrentIndex = currentIndex - 1;
  showCodeMessageNewCurrentIndex.setAttribute('id','showCodeMessageNewCurrentIndex');
  showCodeMessageNewCurrentIndex.textContent = '// currentIndex--  ' + decrementedCurrentIndex;
  showCodeMessageNewCurrentIndex.style.color = '#47c6be';
  showCodeMessageNewCurrentIndex.style.position = 'absolute';
  showCodeMessageNewCurrentIndex.style.bottom = '150px';
  showCodeMessageNewCurrentIndex.style.left = '250px';

  showCodeMessageAssignTemp.setAttribute('id','showCodeMessageAssignTemp');
  showCodeMessageAssignTemp.textContent = '// tempValue = ' + displayTemp;
  showCodeMessageAssignTemp.style.color = '#47c6be';
  showCodeMessageAssignTemp.style.position = 'absolute';
  showCodeMessageAssignTemp.style.bottom = '110px';
  showCodeMessageAssignTemp.style.left = '310px';

  showCodeMessageSwap.setAttribute('id','showCodeMessageSwap');
  showCodeMessageSwap.textContent = '// Swap ' + displayTemp + ' with ' + displayRandomIndex;
  showCodeMessageSwap.style.color = '#47c6be';
  showCodeMessageSwap.style.position = 'absolute';
  showCodeMessageSwap.style.bottom = '87px';
  showCodeMessageSwap.style.left = '370px';

  showCodeMessageRandomToTemp.setAttribute('id','showCodeMessageRandomToTemp');
  showCodeMessageRandomToTemp.textContent = '// Assign the ' + displayTemp + ' to ' + displayRandomIndex + ' position';
  showCodeMessageRandomToTemp.style.color = '#47c6be';
  showCodeMessageRandomToTemp.style.position = 'absolute';
  showCodeMessageRandomToTemp.style.bottom = '65px';
  showCodeMessageRandomToTemp.style.left = '300px';

  var codeImg = document.createElement('img');
  codeImg.src = '../images/img/functionCode.png';
  codeImg.style.maxWidth = '500px';
  showCodeDiv.appendChild(codeImg);

  showCodeButton.appendChild(showCodeSpan);
  showCodeDiv.appendChild(showCodeButton);
  showCodeDiv.appendChild(showCodeMessageRandomIndex);
  showCodeDiv.appendChild(showCodeMessageCurrentIndex);
  showCodeDiv.appendChild(showCodeMessageNewCurrentIndex);
  showCodeDiv.appendChild(showCodeMessageAssignTemp);
  showCodeDiv.appendChild(showCodeMessageSwap);
  showCodeDiv.appendChild(showCodeMessageRandomToTemp);

  document.getElementById('showCodeButton').addEventListener('click', hideCode);
}

function hideCode(){
  iWantTheCode = false;
  if(document.getElementById('showCodeDiv')){
    document.getElementById('showCodeDiv').remove();
  }
}

function displayCards() {
  buildDeck();
  var content = document.getElementById('cards-div');
  for(var i = 0; i < deck.length; i++){
    var img = document.createElement('img');
    img.setAttribute('src','../images/img/' + deck[i]);
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
    img.setAttribute('src','../images/img/' + deck[i]);
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
  if (currentIndex === 52) {
    var myTimeout = setTimeout(shuffle, 100);
  } else if (currentIndex !== 0){
    var myTimeout = setTimeout(shuffle, 1500);
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
}

displayCards();
welcome();

document.getElementById('step').addEventListener('click',shuffle);
document.getElementById('play').addEventListener('click',play);
document.getElementById('showCode').addEventListener('click',seeCode);
