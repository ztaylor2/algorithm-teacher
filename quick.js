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

var items = [];

var description = document.getElementById('description');
var descriptionTextContent = [];

descriptionTextContent.push('Next, it will search the rest of the array that is not considered fully sorted and swap the lowest value with the next index that needs to be sorted.');
descriptionTextContent.push('This will repeat until the array is fully sorted. ');

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
      items[i] = parseInt(nums[i].value);

    }
  }
}


/*_________________________ Quick Sort Algorithm _____________________________*/
/*____ Code from https://www.nczonline.net/blog/2012/11/27/computer-science-in-javascript-quicksort/*/

// do the next step in the algo and display next description

function swap(boxes, firstIndex, secondIndex){
  console.log('firstIndex: ', firstIndex);
  console.log('secondIndex: ', secondIndex);
  var temp = boxes[firstIndex].height;
  boxes[firstIndex].height = boxes[secondIndex].height;
  boxes[secondIndex].height = temp;
  console.log('swapping: ', boxes);

}

function partition(boxes, left, right) {
  // check to see if inputs are there
  if (num1.value === '' || num2.value === '' || num3.value === '' || num4.value === '' || num5.value === '') {
    alert('Input numbers first.');
  } else {
    console.log('true');
    console.log('right: ',right);
    //run algo if inputs are there
    var pivot = boxes[Math.floor((right + left) / 2)].height;
    console.log('pivot: ', pivot);
    var i = left;
    var j = right;
    console.log('j = right',j);
    while (i <= j) {
      while (boxes[i].height < pivot) {
        i++;
        console.log('i: ', i);
      }
      while (boxes[j].height > pivot) {
        j--;
        console.log('j: ', j);
      }
      if (i <= j) {
        swap(boxes, i, j);
        i++;
        j--;
        console.log('i after swap: ', i);
        console.log('j after swap: ', j);
      }
    }
    console.log('i before return: ', i);
    return i;

  }
}

function quickSort(boxes, left, right) {
  var index;
  if (boxes.length > 1) {
    index = partition(boxes, left, right);
    console.log('index after partition',index);
    if (left < index - 1) {
      console.log('top');
      quickSort(boxes, left, index - 1);
    }
    if (index < right) {
      console.log('bottom');
      console.log('index: ', index);
      quickSort(boxes, index, right);
    }
  }
  return boxes;
}

function start() {

  quickSort(boxes, 0, boxes.length - 2);
}

// reset the program when reset button is clicked
function resetNums() {
  // set initial heights of boxes
  for(var i = 0; i < nums.length; i++) {
    boxes[i].height = parseInt(nums[i].value);
  }

  description.textContent = 'Selection sort searches the entire array for the smallest number.  When it finds the smallest number it will move it to [0] and [0] will be considered fully sorted. ';

  // index = 0;
  // j = 0;
  descriptionIndex = 0;
  console.log('reset');
}

// event listeners
submitButton.addEventListener('click', displayBoxes);
// playButton.addEventListener('click', nextStep);
resetButton.addEventListener('click', resetNums);
playButton.addEventListener('click', start);
