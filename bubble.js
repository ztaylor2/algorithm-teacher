'use strict';

var submitButton = document.getElementById('submitButton');
var playButton = document.getElementById('playButton');


var boxes = document.getElementById('boxesContainer').children;


// event handler
function sortNums(e) {
  e.preventDefault();

  // put input values into array
  var nums = [];
  nums.push(parseInt(document.getElementById('num1').value));
  nums.push(parseInt(document.getElementById('num2').value));
  nums.push(parseInt(document.getElementById('num3').value));
  nums.push(parseInt(document.getElementById('num4').value));
  nums.push(parseInt(document.getElementById('num5').value));
  console.log(nums);

  // set initial heights of boxes
  for(var i = 0; i < nums.length; i++) {
    boxes[i].height = nums[i];
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

  if (loopIndex === 4) {
    loopIndex = 0;
    console.log(loopIndex, 'set to zero');
  }
}


// event listener
submitButton.addEventListener('click', sortNums);
playButton.addEventListener('click', nextStep);
