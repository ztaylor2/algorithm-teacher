'use strict';

// var number1 = document.getElementById('num1').value;
// var number2 = document.getElementById('num2').value;
// var number3 = document.getElementById('num3').value;
// var number4 = document.getElementById('num4').value;
// var number5 = document.getElementById('num5').value;

function onClick(){
  var number1 = document.getElementById('num1').value;
  var number2 = document.getElementById('num2').value;
  var number3 = document.getElementById('num3').value;
  var number4 = document.getElementById('num4').value;
  var number5 = document.getElementById('num5').value;
  console.log(number1, number2, number3, number4, number5);
}
document.getElementById('submit').addEventListener('click', onClick);
