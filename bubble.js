'use strict';

var submitButton = document.getElementById('submitButton');

var box1 = document.getElementById('box1');
var box2 = document.getElementById('box2');
var box3 = document.getElementById('box3');
var box4 = document.getElementById('box4');
var box5 = document.getElementById('box5');

// var box1height = box1.getAttribute('height');





// event handler
function sortNums(e) {
  e.preventDefault();

  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  var num3 = parseInt(document.getElementById('num3').value);
  var num4 = parseInt(document.getElementById('num4').value);
  var num5 = parseInt(document.getElementById('num5').value);

  box1.setAttribute('height', num1);
  box2.setAttribute('height', num2);
  box3.setAttribute('height', num3);
  box4.setAttribute('height', num4);
  box5.setAttribute('height', num5);
}



// event listener
submitButton.addEventListener('click', sortNums)
