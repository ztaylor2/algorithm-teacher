'use strict';

function homeButton_Click(){
  var homePageHello = document.createElement('button');
  homePageHello.setAttribute('id','homePageHello');
  homePageHello.style.width = '40px';
  homePageHello.style.height = '50px';
  homePageHello.style.backgroundcolor = '#C7D7DB';
  homePageHello.style.color = '#EFD8A1';
  homePageHello.style.zIndez = '3';
  document.body.appendChild(homePageHello);
}


document.getElementById('personName_input').addEventListener('click', homeButton_Click);
