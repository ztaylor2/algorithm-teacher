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

function nextStep(e) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < boxes.length - 1; i++) {
      if (boxes[i].height > boxes[i + 1].height) {
        console.log('true');
        var temp = boxes[i].height;
        boxes[i].height = boxes[i + 1].height;
        boxes[i + 1].height = temp;
        swapped = true;
      }
    }
  } while (swapped);
}


// event listener
submitButton.addEventListener('click', sortNums);
playButton.addEventListener('click', nextStep);
