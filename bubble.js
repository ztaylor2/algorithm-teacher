'use strict';

var submitButton = document.getElementById('submitButton');
var playButton = document.getElementById('playButton');

var boxes = document.getElementById('boxesContainer').children;
var nums = document.getElementById('numberInputs').children;

var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num3 = document.getElementById('num3');
var num4 = document.getElementById('num4');
var num5 = document.getElementById('num5');

var description = document.getElementById('description');
var descriptionTextContent = [];

descriptionTextContent.push('Next, it will compaire the next two numbers in the array at [1] and [2].  If the number at [2] is less, the numbers will swap.  If not, they will remain where they are. ');
descriptionTextContent.push('Third, it will compaire the numbers at index [2] and [3] and swap them if necessary. ');
descriptionTextContent.push('Now, it will compaire the numbers at [3] and [4], and swap them if necessary. ');
descriptionTextContent.push('Now that we have passed through the entire array it will begin again at the beginning. ');
descriptionTextContent.push('[0] and [1] will compaire and swap if necessary.');
descriptionTextContent.push('This process will repeat until the array is fully sorted. ');

// event handler
function sortNums(e) {

  e.preventDefault();

  if (num1.value > 100 || num1.value < 1 ||
  num2.value > 100 || num2.value < 1 ||
  num3.value > 100 || num3.value < 1 ||
  num4.value > 100 || num4.value < 1 ||
  num5.value > 100 || num5.value < 1) {
    alert('Please put in a numbers from 1 to 100.');
  } else {
    // set initial heights of boxes
    for(var i = 0; i < nums.length; i++) {
      boxes[i].height = parseInt(nums[i].value);
    }
  }


}

var loopIndex = 0;
var descriptionIndex = 0;

function nextStep() {
  if (boxes[loopIndex].height > boxes[loopIndex + 1].height) {
    var temp = boxes[loopIndex].height;
    boxes[loopIndex].height = boxes[loopIndex + 1].height;
    boxes[loopIndex + 1].height = temp;
    console.log(loopIndex, 'still in loop');
  }

  description.textContent = descriptionTextContent[descriptionIndex];
  if (descriptionIndex < 5) {
    descriptionIndex++;
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
