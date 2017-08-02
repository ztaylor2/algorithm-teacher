'use strict';


var playButton = document.getElementById('playButton');

var boxes = document.getElementById('boxesContainer').children;


var description = document.getElementById('description');
var descriptionTextContent = [];

descriptionTextContent.push('First we look at the number in the center of the array, 5. We compare 5 to 2.');
descriptionTextContent.push('2 is less than 5, so we can rule out 5 and all of the numbers above 5. ');
descriptionTextContent.push('We check the number in the center again, and we find 3.');
descriptionTextContent.push('2 is less than 3 so we car rule out 3 and all of the numbers above 3.');
descriptionTextContent.push('We search in the middle again, and we find 2. 2 = 2 so we have found the number that we are looking for.');
descriptionTextContent.push('Binary search is a quick way to sort through an ordered array. The time complexity is log(n).');

var descriptionIndex = 0;


// event handlers

// do the next step in the algo and display next description
function nextStep() {
  if (descriptionIndex === 0) {
    boxes[4].style.backgroundColor = '#BCD693';
    description.textContent = descriptionTextContent[descriptionIndex];
  }

  if (descriptionIndex === 1) {
    for(var i = 4; i < 10; i++) {
      boxes[i].style.backgroundColor = 'white';
    }
    description.textContent = descriptionTextContent[descriptionIndex];
  }

  if (descriptionIndex === 2) {
    boxes[3].style.backgroundColor = 'black';
    boxes[2].style.backgroundColor = '#BCD693';
    description.textContent = descriptionTextContent[descriptionIndex];
  }

  if (descriptionIndex === 3) {
    boxes[2].style.backgroundColor = '#BCD693';
    for(var i = 2; i < 10; i++) {
      boxes[i].style.backgroundColor = 'white';
    }
    description.textContent = descriptionTextContent[descriptionIndex];
  }

  if (descriptionIndex === 4) {
    boxes[1].style.backgroundColor = '#BCD693';
    boxes[2].style.backgroundColor = 'white';
    description.textContent = descriptionTextContent[descriptionIndex];
  }

  if (descriptionIndex === 5) {
    description.textContent = descriptionTextContent[descriptionIndex];
  }

  descriptionIndex++;
}

// resent the program when reset button is clicked
function resetNums() {
  descriptionIndex = 0;
  for(var i = 0; i < 9; i++) {
    boxes[i].style.backgroundColor = 'black';
  }
  boxes[1].style.backgroundColor = '#AFD7DB';

  description.textContent = 'Let\'s say that we are searching for the number 2 in this sorted array of numbers.';
}



// event listeners
playButton.addEventListener('click', nextStep);
resetButton.addEventListener('click', resetNums);
