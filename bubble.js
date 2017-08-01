'use strict';

var submitButton = document.getElementById('submitButton');
var playButton = document.getElementById('playButton');


var boxes = document.getElementById('boxesContainer').children;
var nums = document.getElementById('numberInputs').children;
var description = document.getElementById('description');
var descriptionTextContent = [];

descriptionTextContent.push('Next, it will compaire the next two numbers in the array at [1] and [2].  If the number at [2] is greater, the numbers will swap.  If not, they will remain where they are. ');
descriptionTextContent.push('Third, it will compaire the numbers at index [2] and [3] and swap them if necessary. ');
descriptionTextContent.push('Now, it will compaire the numbers at [3] and [4], and swap them if necessary. ');

// event handler
function sortNums(e) {
  e.preventDefault();

  // set initial heights of boxes
  for(var i = 0; i < nums.length; i++) {
    boxes[i].height = parseInt(nums[i].value);
  }
}

var loopIndex = 0;

function nextStep(e) {
  if (boxes[loopIndex].height > boxes[loopIndex + 1].height) {
    var temp = boxes[loopIndex].height;
    boxes[loopIndex].height = boxes[loopIndex + 1].height;
    boxes[loopIndex + 1].height = temp;
    console.log(loopIndex, 'still in loop');
  }

  description.textContent = descriptionTextContent[loopIndex];
  loopIndex++;

  if (loopIndex === boxes.length - 1) {
    loopIndex = 0;
    console.log(loopIndex, 'set to zero');
  }
}


// event listener
submitButton.addEventListener('click', sortNums);
playButton.addEventListener('click', nextStep);
