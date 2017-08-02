'use strict';


var playButton = document.getElementById('playButton');

var boxes = document.getElementById('boxesContainer').children;

var description = document.getElementById('description');
var descriptionTextContent = [];

descriptionTextContent.push('We look at the first number in the array and compare it to 7.  6 doesn\'t equal 7, so we move to the next index in the array. ');
descriptionTextContent.push('3 doesn\'t equal 1 either, so we move on the the next number.');
descriptionTextContent.push('This process repeats until 7 is found.');
descriptionTextContent.push('This process repeats until 7 is found.');
descriptionTextContent.push('This process repeats until 7 is found.');
descriptionTextContent.push('This process repeats until 7 is found.');
descriptionTextContent.push('Linear search has an average time complexity of O(n), or linear time complexity.');


var descriptionIndex = 0;


// event handlers

// do the next step in the algo and display next description
function nextStep() {
  if (descriptionIndex === 0) {
    boxes[0].style.backgroundColor = '#BCD693';
    description.textContent = descriptionTextContent[descriptionIndex];
  }

  if (descriptionIndex === 1) {
    boxes[0].style.backgroundColor = 'white';
    boxes[1].style.backgroundColor = '#BCD693';
    description.textContent = descriptionTextContent[descriptionIndex];
  }

  if (descriptionIndex === 2) {
    boxes[1].style.backgroundColor = 'white';
    boxes[2].style.backgroundColor = '#BCD693';
    description.textContent = descriptionTextContent[descriptionIndex];
  }

  if (descriptionIndex === 3) {
    boxes[2].style.backgroundColor = 'white';
    boxes[3].style.backgroundColor = '#BCD693';
    description.textContent = descriptionTextContent[descriptionIndex];
  }

  if (descriptionIndex === 4) {
    boxes[3].style.backgroundColor = 'white';
    boxes[4].style.backgroundColor = '#BCD693';
    description.textContent = descriptionTextContent[descriptionIndex];
  }

  if (descriptionIndex === 5) {
    boxes[4].style.backgroundColor = 'white';
    boxes[5].style.backgroundColor = '#BCD693';
    description.textContent = descriptionTextContent[descriptionIndex];
  }

  if (descriptionIndex === 6) {
    boxes[5].style.backgroundColor = 'white';
    boxes[6].style.backgroundColor = '#BCD693';
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
  boxes[6].style.backgroundColor = '#AFD7DB';

  description.textContent = 'Let\'s say that we are searching for the number 7 in this unordered array of numbers. ';

}



// event listeners
playButton.addEventListener('click', nextStep);
resetButton.addEventListener('click', resetNums);
