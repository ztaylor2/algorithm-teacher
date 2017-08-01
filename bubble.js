'use strict';

var submitButton = document.getElementById('submitButton');
var playButton = document.getElementById('playButton');


var boxes = document.getElementById('boxesContainer').children;
var nums = document.getElementById('numberInputs').children;


// event handler
function userInput(e) {
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

  do{
    swapped = false;
    for(var i = 0; i < inputs.length; i++){
      if(allNumbers[i] > allNumbers[i + 1]){
        var temp = allNumbers[i];
        allNumbers[i] = allNumbers[i + 1];
        allNumbers[i + 1] = temp;
        console.log(allNumbers);
        swapped = true;
      }
    }
  }while(swapped);

  createBars();
}

var stepThru = 0;

function step(e) {
  e.preventDefault();
  console.log(stepThru);
  clearBars();
  if(allNumbers[stepThru] > allNumbers[stepThru + 1]){
    var temp = allNumbers[stepThru];
    allNumbers[stepThru] = allNumbers[stepThru + 1];
    allNumbers[stepThru + 1] = temp;
    console.log(allNumbers);
  }

  stepThru = stepThru + 1;

  if(stepThru === 4){
    stepThru = 0;
  }

  createBars();
}

// event listener
submitButton.addEventListener('click', sortNums);
playButton.addEventListener('click', nextStep);
