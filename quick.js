'use strict';

var numbers = ['8','1','3','2','7'];

var ulEl = document.getElementById('showArray');

function showArray() {
  // e.preventDefault();
  for (var i = 0; i < numbers.length; i++){
    var liEl = document.createElement('li');
    liEl.setAttribute('id', 'arrayIndex' + i);
    liEl.innerHTML = numbers[i];
    ulEl.appendChild(liEl);
  }
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
}

function step2() {
  document.getElementById('arrayIndex0').style.background = 'lightblue';
  document.getElementById('arrayIndex4').style.background = 'lightblue';
  step.removeEventListener('click', step2);
  step.addEventListener('click', step3);
}

function step3() {
  document.getElementById('arrayIndex0').style.background = 'orange';
  document.getElementById('arrayIndex4').style.background = 'lightblue';
  step.removeEventListener('click', step3);
  step.addEventListener('click', step4);
}

function step4() {
  document.getElementById('arrayIndex4').style.background = 'white';
  document.getElementById('arrayIndex3').style.background = 'lightblue';
  step.removeEventListener('click', step4);
  step.addEventListener('click', step5);
}

function step5() {
  document.getElementById('arrayIndex3').style.background = 'orange';
  step.removeEventListener('click', step5);
  step.addEventListener('click', step6);
}

function step6() {
  document.getElementById('arrayIndex0').innerHTML = '2';
  document.getElementById('arrayIndex3').innerHTML = '8';
  document.getElementById('arrayIndex0').style.background = 'lightgreen';
  document.getElementById('arrayIndex3').style.background = 'lightgreen';
  step.removeEventListener('click', step6);
  step.addEventListener('click', step7);
}

function step7() {
  document.getElementById('arrayIndex2').style.background = 'lightblue';
  document.getElementById('arrayIndex0').style.background = 'white';
  document.getElementById('arrayIndex3').style.background = 'white';
  step.removeEventListener('click', step7);
  step.addEventListener('click', step8);
}

function step8() {
  document.getElementById('arrayIndex1').style.background = 'yellow';
  document.getElementById('arrayIndex2').style.background = 'white';
  document.getElementById('arrayIndex4').style.background = 'grey';
  document.getElementById('arrayIndex3').style.background = 'grey';
  step.removeEventListener('click', step8);
  step.addEventListener('click', step9);
}

function step9() {
  document.getElementById('arrayIndex1').style.background = 'yellow';
  document.getElementById('arrayIndex0').style.background = 'lightblue';
  document.getElementById('arrayIndex2').style.background = 'lightblue';
  document.getElementById('arrayIndex4').style.background = 'grey';
  document.getElementById('arrayIndex3').style.background = 'grey';
  step.removeEventListener('click', step9);
  step.addEventListener('click', step10);
}

function step10() {
  document.getElementById('arrayIndex1').style.background = 'yellow';
  document.getElementById('arrayIndex0').style.background = 'orange';
  document.getElementById('arrayIndex2').style.background = 'lightblue';
  document.getElementById('arrayIndex4').style.background = 'grey';
  document.getElementById('arrayIndex3').style.background = 'grey';
  step.removeEventListener('click', step10);
  step.addEventListener('click', step11);
}

function step11() {
  document.getElementById('arrayIndex1').style.background = 'lightblue';
  document.getElementById('arrayIndex0').style.background = 'orange';
  document.getElementById('arrayIndex2').style.background = 'white';
  document.getElementById('arrayIndex4').style.background = 'grey';
  document.getElementById('arrayIndex3').style.background = 'grey';
  step.removeEventListener('click', step11);
  step.addEventListener('click', step12);
}

function step12() {
  document.getElementById('arrayIndex1').style.background = 'orange';
  document.getElementById('arrayIndex0').style.background = 'orange';
  document.getElementById('arrayIndex2').style.background = 'white';
  document.getElementById('arrayIndex4').style.background = 'grey';
  document.getElementById('arrayIndex3').style.background = 'grey';
  step.removeEventListener('click', step12);
  step.addEventListener('click', step13);
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
}

//event listeners
showArray();

step.addEventListener('click', step1);
