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


function swap(boxes, firstIndex, secondIndex){
  var temp = boxes[firstIndex].height;
  boxes[firstIndex].height = boxes[secondIndex].height;
  boxes[secondIndex].height = temp;
}

var len = boxes.length,
  min;

var i = 0;

function nextStep(e) {
  //set minimum to this position
  min = i;

  //check the rest of the array to see if anything is smaller
  for (var j = i + 1; j < boxes.length; j++){
      if (boxes[j].height < boxes[min].height){
          min = j;
      }
  }

  //if the minimum isn't in the position, swap it
  if (i !== min){
      swap(boxes, i, min);
  }

  i++;
}


// event listener
submitButton.addEventListener('click', sortNums);
playButton.addEventListener('click', nextStep);
