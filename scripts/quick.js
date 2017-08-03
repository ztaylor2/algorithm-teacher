'use strict';

var numbers = ['8','1','3','2','7'];
var steps = ['The key process in quicksort is recursive partitioning of the array and swapping values.','Step 1: Determine pivot point. The pivot can be any index, in this case it is the center value.', 'Step 2: Compare the outside values to the pivot, starting on the left. If a value on the left is less than the pivot stop and start on the right side.', 'Step 3: 8 is larger than the pivot so the sorter stores that index and starts comparing on the right.', 'Step 4: 7 is greater than the pivot so it is on the correct side. The selector than moves one index to the left.', 'Step 5: 2 is less than the pivot, stopping the search.', 'Step 6: Positions of 8 and 2 are swapped.', 'Step 7: The search has reached the pivot, it stops and the array is partitioned.', 'Step 8: Now the quicksort algorithm will recursivelty partition the left part of the array.', 'Step 9: A new pivot at the position of 1 is selected.', 'Step 10: 2 is greater than 1 so the search stops and stores that index.'];
var steps2 = ['Step 11: 3 is greater than 1 and thus in the correct location. The pivot value of 1 is reached.', 'Step 12: The pivot is swapped with the 2.','Step 13: The process then would repeat for the right side.'];

var ulEl = document.getElementById('showArray');

function showArray() {
  // e.preventDefault();
  for (var i = 0; i < numbers.length; i++){
    var liEl = document.createElement('li');
    liEl.setAttribute('id', 'arrayIndex' + i);
    liEl.innerHTML = numbers[i];
    ulEl.appendChild(liEl);
  }
  document.getElementById('stepText').innerHTML = steps[0];
}

function step1() {
  document.getElementById('arrayIndex0').innerHTML = '8';
  document.getElementById('arrayIndex1').innerHTML = '1';
  document.getElementById('arrayIndex2').innerHTML = '3';
  document.getElementById('arrayIndex3').innerHTML = '2';
  document.getElementById('arrayIndex4').innerHTML = '7';
  document.getElementById('arrayIndex0').style.background = 'white';
  document.getElementById('arrayIndex1').style.background = 'white';
  document.getElementById('arrayIndex2').style.background = 'white';
  document.getElementById('arrayIndex3').style.background = 'white';
  document.getElementById('arrayIndex4').style.background = 'white';
  document.getElementById('arrayIndex2').style.background = 'yellow';
  step.removeEventListener('click', step1);
  step.addEventListener('click', step2);
  document.getElementById('step').innerHTML = 'Next Step';
  document.getElementById('stepText').innerHTML = steps[1];
}

function step2() {
  document.getElementById('arrayIndex0').style.background = 'lightblue';
  document.getElementById('arrayIndex4').style.background = 'lightblue';
  step.removeEventListener('click', step2);
  step.addEventListener('click', step3);
  document.getElementById('stepText').innerHTML = steps[2];
}

function step3() {
  document.getElementById('arrayIndex0').style.background = 'orange';
  document.getElementById('arrayIndex4').style.background = 'lightblue';
  step.removeEventListener('click', step3);
  step.addEventListener('click', step4);
  document.getElementById('stepText').innerHTML = steps[3];
}

function step4() {
  document.getElementById('arrayIndex4').style.background = 'white';
  document.getElementById('arrayIndex3').style.background = 'lightblue';
  step.removeEventListener('click', step4);
  step.addEventListener('click', step5);
  document.getElementById('stepText').innerHTML = steps[4];
}

function step5() {
  document.getElementById('arrayIndex3').style.background = 'orange';
  step.removeEventListener('click', step5);
  step.addEventListener('click', step6);
  document.getElementById('stepText').innerHTML = steps[5];
}

function step6() {
  document.getElementById('arrayIndex0').innerHTML = '2';
  document.getElementById('arrayIndex3').innerHTML = '8';
  document.getElementById('arrayIndex0').style.background = 'lightgreen';
  document.getElementById('arrayIndex3').style.background = 'lightgreen';
  step.removeEventListener('click', step6);
  step.addEventListener('click', step7);
  document.getElementById('stepText').innerHTML = steps[6];
}

function step7() {
  document.getElementById('arrayIndex2').style.background = 'lightblue';
  document.getElementById('arrayIndex0').style.background = 'white';
  document.getElementById('arrayIndex3').style.background = 'white';
  step.removeEventListener('click', step7);
  step.addEventListener('click', step8);
  document.getElementById('stepText').innerHTML = steps[7];
}

function step8() {
  document.getElementById('arrayIndex1').style.background = 'yellow';
  document.getElementById('arrayIndex2').style.background = 'white';
  document.getElementById('arrayIndex4').style.background = 'grey';
  document.getElementById('arrayIndex3').style.background = 'grey';
  step.removeEventListener('click', step8);
  step.addEventListener('click', step9);
  document.getElementById('stepText').innerHTML = steps[8];
}

function step9() {
  document.getElementById('arrayIndex1').style.background = 'yellow';
  document.getElementById('arrayIndex0').style.background = 'lightblue';
  document.getElementById('arrayIndex2').style.background = 'lightblue';
  document.getElementById('arrayIndex4').style.background = 'grey';
  document.getElementById('arrayIndex3').style.background = 'grey';
  step.removeEventListener('click', step9);
  step.addEventListener('click', step10);
  document.getElementById('stepText').innerHTML = steps[9];
}

function step10() {
  document.getElementById('arrayIndex1').style.background = 'yellow';
  document.getElementById('arrayIndex0').style.background = 'orange';
  document.getElementById('arrayIndex2').style.background = 'lightblue';
  document.getElementById('arrayIndex4').style.background = 'grey';
  document.getElementById('arrayIndex3').style.background = 'grey';
  step.removeEventListener('click', step10);
  step.addEventListener('click', step11);
  document.getElementById('stepText').innerHTML = steps[10];
}

function step11() {
  document.getElementById('arrayIndex1').style.background = 'lightblue';
  document.getElementById('arrayIndex0').style.background = 'orange';
  document.getElementById('arrayIndex2').style.background = 'white';
  document.getElementById('arrayIndex4').style.background = 'grey';
  document.getElementById('arrayIndex3').style.background = 'grey';
  step.removeEventListener('click', step11);
  step.addEventListener('click', step12);
  document.getElementById('stepText').innerHTML = steps2[0];
}

function step12() {
  document.getElementById('arrayIndex1').style.background = 'orange';
  document.getElementById('arrayIndex0').style.background = 'orange';
  document.getElementById('arrayIndex2').style.background = 'white';
  document.getElementById('arrayIndex4').style.background = 'grey';
  document.getElementById('arrayIndex3').style.background = 'grey';
  step.removeEventListener('click', step12);
  step.addEventListener('click', step13);
  document.getElementById('stepText').innerHTML = steps2[1];
}

function step13() {
  document.getElementById('arrayIndex1').style.background = 'lightgreen';
  document.getElementById('arrayIndex0').style.background = 'lightgreen';
  document.getElementById('arrayIndex1').innerHTML = '2';
  document.getElementById('arrayIndex0').innerHTML = '1';
  document.getElementById('arrayIndex2').style.background = 'white';
  document.getElementById('arrayIndex4').style.background = 'grey';
  document.getElementById('arrayIndex3').style.background = 'grey';
  step.removeEventListener('click', step13);
  step.addEventListener('click', step1);
  document.getElementById('step').innerHTML = 'Start Over';
  document.getElementById('stepText').innerHTML = steps2[2];
}

//event listeners
showArray();

step.addEventListener('click', step1);
