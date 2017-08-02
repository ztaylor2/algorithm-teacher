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

descriptionTextContent.push('[1] (the number adjacent to [0]) is compared to [0], if it is less than [0] it will be inserted to the left of it. ');
descriptionTextContent.push('Now [0] and [1] are sorted.  The number to the right of [1] is now compared to [1].  If [2] is less than [1] it will move to the left of it then compare itself to the number at [0]. It will then insert itself to the left of [0] if it is less than it or to the right if it is greater.');
descriptionTextContent.push('This pattern of comparisons and insertions will repeat itself untill the array is sorted.');

var descriptionIndex = 0;
var index = 0;
var j = 0;



// event handlers

// display boxes when submit is clicked
function displayBoxes(e) {

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




// do the next step in the algo and display next description

function nextStep() {

  // check to see if inputs are there
  if (num1.value === '' || num2.value === '' || num3.value === '' || num4.value === '' || num5.value === '') {
    alert('Input numbers first.');
  } else {

    var temp = boxes[index].height;
    j = index - 1;

    while (j >= 0 && boxes[j].height > temp) {
      boxes[j + 1].height = boxes[j].height;
      j--;
    }

    boxes[j + 1].height = temp;

    index++;

    description.textContent = descriptionTextContent[descriptionIndex];

    if(descriptionIndex < 2) {
      descriptionIndex++;
    }

  }
}

// resent the program when reset button is clicked
function resetNums() {
  // set initial heights of boxes
  for(var i = 0; i < nums.length; i++) {
    boxes[i].height = parseInt(nums[i].value);
  }

  description.textContent = 'Right off the bat [0] is considered fully sorted. ';

  index = 0;
  j = 0;
  descriptionIndex = 0;
  console.log('reset');
}




// event listeners
submitButton.addEventListener('click', displayBoxes);
playButton.addEventListener('click', nextStep);
resetButton.addEventListener('click', resetNums);
