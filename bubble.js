'use strict';

var submitButton = document.getElementById('submitButton');
var playButton = document.getElementById('playButton');


var boxes = document.getElementById('boxesContainer').children;
var nums = document.getElementById('numberInputs').children;


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
  loopIndex++;

  if (loopIndex === boxes.length - 1) {
    loopIndex = 0;
    console.log(loopIndex, 'set to zero');
  }
}


// event listener
submitButton.addEventListener('click', sortNums);
playButton.addEventListener('click', nextStep);
