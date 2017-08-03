'use strict';
var popup = document.getElementById('popup');

function homeButton_Click(){
  var name = document.getElementById('personName_input').value;
  var homePageHello = document.createElement('button');
  homePageHello.style.id = 'popupButton';
  popup.setAttribute('id','homePageHello');
  popup.style.width = '80px';
  popup.style.height = '100px';
  popup.style.padding = '100px';
  popup.style.text = 'black';
  popup.style.backgroundColor = 'white';
  popup.style.color = '#EFD8A1';
  popup.style.zIndez = '1';
  popup.style.display = 'block';
  // popup.style.margin = 'auto';
  popup.style.position = 'fixed';
  popup.style.left = '50%';
  popup.style.bottom = '260px';
  popup.style.marginLeft = '-140px';
  popup.textContent = name + ', get ready to learn!';
  popup.style.top = '0px';
  popup.style.left = '500px';
  popup.appendChild(homePageHello);
  homePageHello.addEventListener('click', popupButtonHandler);
}
function popupButtonHandler(){
  popup.style.visibility = 'hidden';
}





document.getElementById('homeButton_Click').addEventListener('click', homeButton_Click);
