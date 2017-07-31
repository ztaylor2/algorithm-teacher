'use strict';

var submitButton = document.getElementById('submitButton');
var allNumbers = [];
var inputs = ['num1', 'num2', 'num3', 'num4', 'num5'];

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');

// event handler
function userInput(e) {
  e.preventDefault();

  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var num3 = parseInt(document.getElementById('num3').value);
  var num4 = parseInt(document.getElementById('num4').value);
  var num5 = parseInt(document.getElementById('num5').value);
  allNumbers.push(num1);
  allNumbers.push(num2);
  allNumbers.push(num3);
  allNumbers.push(num4);
  allNumbers.push(num5);
  createBars();
}

function createBars() {
  var chart = document.getElementById('chart');
  for(var i = 0; i < inputs.length; i++){
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('height', '200');
    svg.setAttribute('width', '50');
    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute('id', 'rect' + i);
    rect.setAttribute('height',allNumbers[i]);
    rect.setAttribute('width', '42');
    rect.setAttribute('style', 'fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)');
    svg.appendChild(rect);
    chart.appendChild(svg);
  }

}

function clearBars() {
  document.getElementById('chart').remove();
  var div = document.createElement('div');
  div.setAttribute('id', 'chart');
  document.body.appendChild(div);
}

function swap(e) {
  e.preventDefault();
  clearBars();
  var swapped;

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
submitButton.addEventListener('click', userInput);
// swapButton.addEventListener('click', swap);
swapButton.addEventListener('click', step);
