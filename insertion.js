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

descriptionTextContent.push('A number is inserted ');
descriptionTextContent.push('Another number is inserted ');

var descriptionIndex = 0;



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




//
// function insertionSort(items) {
//
//     var len     = items.length,     // number of items in the array
//         value,                      // the value currently being compared
//         i,                          // index into unsorted section
//         j;                          // index into sorted section
//
//     for (i=0; i < len; i++) {
//
//         // store the current value because it may shift later
//         value = items[i];
//
//         /*
//          * Whenever the value in the sorted section is greater than the value
//          * in the unsorted section, shift all items in the sorted section over
//          * by one. This creates space in which to insert the value.
//          */
//         for (j=i-1; j > -1 &#038;&#038; items[j] > value; j--) {
//             items[j+1] = items[j];
//         }
//
//         items[j+1] = value;
//     }
//
//     return items;
// }







var value = 0;                      // the value currently being compared
var index = 0;                          // index into unsorted section
var j = 0;                          // index into sorted section




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

    if(descriptionIndex < 1) {
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
