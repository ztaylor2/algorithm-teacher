'use strict';



//-----------------ZACH-----------------//

function zachBio(){
  if(document.getElementById('zachBioDiv')){
    document.getElementById('zachBioDiv').remove();
  }
  var zachBioDiv = document.createElement('div');
  var zachBioText = document.createElement('textContent');
  var zachButton = document.createElement('button');
  var zachSpan = document.createElement('span');

  zachBioDiv.setAttribute('id', 'zachBioDiv');
  zachBioDiv.style.width = '300px';
  zachBioDiv.style.height = '225px';
  zachBioDiv.style.margin = 'auto';
  zachBioDiv.style.background = 'white';
  zachBioDiv.style.border = 'solid';
  zachBioDiv.style.position = 'relative';
  zachBioDiv.style.zIndex = '1';
  zachBioDiv.style.bottom = '800px';
  zachBioDiv.style.backgroundColor = '#3D9CA8';
  zachBioDiv.style.borderRadius = '10px';
  zachBioDiv.style.borderColor = 'BCD693';
  zachBioDiv.style.borderTopColor = '#BCD693';
  zachBioDiv.style.borderTopWidth = '20px';
  zachBioDiv.style.fontSize = '20px';
  zachBioDiv.style.textAlign = 'center';
  zachBioDiv.style.fontFamily = 'italic';
  zachBioDiv.style.overflow = 'scroll';
  document.body.appendChild(zachBioDiv);

  zachButton.setAttribute('id', 'zachButton');
  zachButton.style.position = 'relative';
  zachButton.style.margin = '0px';
  zachButton.style.top = '175px';
  zachButton.style.left = '110px';
  zachButton.style.padding = '15px';


  zachSpan.textContent = 'Continue';
  zachButton.appendChild(zachSpan);


  zachBioText.setAttribute('id', 'zachBioText');
  zachBioText.textContent = 'Zach Taylor graduated from Gonzaga University cum laude with a degree in mechanical engineering.  He has been interested in software development for a while now so he decided to attend Codefellows and become a software engineer.';
  zachBioText.style.position = 'absolute';
  zachBioText.style.fontFamily = 'sans-serif';
  zachBioText.style.color = 'white';
  zachBioText.style.indentValue = '10px';
  zachBioText.style.width = '375px';
  zachBioText.style.height = '200px';
  zachBioText.style.fontSize = '20px';
  zachBioText.style.top = '0px';
  zachBioText.style.left = '0px';
  zachBioText.style.verticalAlign = 'middle';
  zachBioText.style.textAlign = 'center';
  zachBioDiv.appendChild(zachBioText);
  zachBioDiv.appendChild(zachButton);
  zachButton.appendChild(zachSpan);

  document.getElementById('zachButton').addEventListener('click', removeZachButton);
}
document.getElementById('zach').addEventListener('click', zachBio);

function removeZachButton(){
  if(zachBioDiv){
    document.getElementById('zachBioDiv').remove();
  }
}








//-----------------IVETTE-----------------//

function ivetteBio(){
  if(document.getElementById('ivetteBioDiv')){
    document.getElementById('ivetteBioDiv').remove();
  }
  var ivetteBioDiv = document.createElement('div');
  var ivetteBioText = document.createElement('textContent');
  var ivetteButton = document.createElement('button');
  var ivetteSpan = document.createElement('span');

  ivetteBioDiv.setAttribute('id', 'ivetteBioDiv');
  ivetteBioDiv.style.width = '300px';
  ivetteBioDiv.style.height = '225px';
  ivetteBioDiv.style.margin = 'auto';
  ivetteBioDiv.style.background = 'white';
  ivetteBioDiv.style.border = 'solid';
  ivetteBioDiv.style.position = 'relative';
  ivetteBioDiv.style.zIndex = '1';
  ivetteBioDiv.style.bottom = '800px';
  ivetteBioDiv.style.backgroundColor = '#3D9CA8';
  ivetteBioDiv.style.borderRadius = '10px';
  ivetteBioDiv.style.borderColor = 'BCD693';
  ivetteBioDiv.style.borderTopColor = '#BCD693';
  ivetteBioDiv.style.borderTopWidth = '20px';
  ivetteBioDiv.style.fontSize = '20px';
  ivetteBioDiv.style.fontFamily = 'italic';
  ivetteBioDiv.style.overflow = 'scroll';
  document.body.appendChild(ivetteBioDiv);

  ivetteButton.setAttribute('id', 'ivetteButton');
  ivetteButton.style.position = 'relative';
  ivetteButton.style.margin = '0px';
  ivetteButton.style.top = '0px';
  ivetteButton.style.left = '0px';
  ivetteButton.style.padding = '15px';

  ivetteSpan.textContent = 'Continue';
  ivetteButton.appendChild(ivetteSpan);

  ivetteBioText.setAttribute('id', 'ivetteBioText');
  ivetteBioText.textContent = 'Hey there! My name is Ivette.  I studied improv comedy at Second City, taught middle school and am now coding coding coding.  Come by, say "Hi", I love meeting new people!';
  ivetteBioText.style.position = 'relative';
  ivetteBioText.style.fontFamily = 'sans-serif';
  ivetteBioText.style.color = 'white';
  ivetteBioText.style.indentValue = '20px';
  ivetteBioText.style.width = '375px';
  ivetteBioText.style.height = '200px';
  ivetteBioText.style.fontSize = '20px';
  ivetteBioText.style.top = '0px';
  ivetteBioText.style.left = '0px';
  ivetteBioText.style.verticalAlign = 'middle';
  ivetteBioText.style.textAlign = 'center';
  ivetteBioDiv.appendChild(ivetteBioText);
  ivetteBioDiv.appendChild(ivetteButton);
  ivetteButton.appendChild(ivetteSpan);

  document.getElementById('ivetteButton').addEventListener('click', removeIvetteButton);
}
document.getElementById('ivette').addEventListener('click', ivetteBio);

function removeIvetteButton(){
  if(ivetteBioDiv){
    document.getElementById('ivetteBioDiv').remove();
  }
}




//-----------------JOHN-----------------//



function johnBio(){
  if(document.getElementById('johnBioDiv')){
    document.getElementById('johnBioDiv').remove();
  }
  var johnBioDiv = document.createElement('div');
  var johnBioText = document.createElement('textContent');
  var johnButton = document.createElement('button');
  var johnSpan = document.createElement('span');

  johnBioDiv.setAttribute('id', 'johnBioDiv');
  johnBioDiv.style.width = '300px';
  johnBioDiv.style.height = '400px';
  johnBioDiv.style.margin = 'auto';
  johnBioDiv.style.background = 'white';
  johnBioDiv.style.border = 'solid';
  johnBioDiv.style.position = 'relative';
  johnBioDiv.style.zIndex = '0';
  johnBioDiv.style.bottom = '800px';
  johnBioDiv.style.backgroundColor = '#3D9CA8';
  johnBioDiv.style.borderRadius = '10px';
  johnBioDiv.style.borderColor = 'BCD693';
  johnBioDiv.style.borderTopColor = '#BCD693';
  johnBioDiv.style.borderTopWidth = '20px';
  johnBioDiv.style.fontSize = '20px';
  johnBioDiv.style.fontFamily = 'italic';
  johnBioDiv.style.overflow = 'scroll';
  document.body.appendChild(johnBioDiv);

  johnButton.setAttribute('id', 'johnButton');
  johnButton.style.position = 'relative';
  johnButton.style.margin = '0px';
  johnButton.style.top = '175px';
  johnButton.style.left = '110px';
  johnButton.style.padding = '15px';

  johnSpan.textContent = 'Continue';
  johnButton.appendChild(johnSpan);

  johnBioText.setAttribute('id', 'johnBioText');
  johnBioText.textContent = 'John spent his youth generally indifferent to anything software related, as long as his Diablo II was running all was well in the tech world.  That all change after seeing how, as Marc Andreessen put it, "software is eating the world.", and he wanted to be a part of it. Now he plans to complete the 401 Python course at Code Fellows and become a software engineer.';
  johnBioText.style.position = 'relative';
  johnBioText.style.fontFamily = 'sans-serif';
  johnBioText.style.color = 'white';
  johnBioText.style.indentValue = '20px';
  johnBioText.style.width = '375px';
  johnBioText.style.height = '200px';
  johnBioText.style.fontSize = '20px';
  johnBioText.style.top = '0px';
  johnBioText.style.left = '0px';
  johnBioText.style.verticalAlign = 'middle';
  johnBioText.style.textAlign = 'center';
  johnBioDiv.appendChild(johnBioText);
  johnBioDiv.appendChild(johnButton);
  johnButton.appendChild(johnSpan);

  document.getElementById('johnButton').addEventListener('click', removeJohnButton);

}
document.getElementById('john').addEventListener('click', johnBio);


function removeJohnButton(){
  if(johnBioDiv){
    document.getElementById('johnBioDiv').remove();
  }
}






//-----------------DANIEL-----------------//



function danielBio(){
  if(document.getElementById('danielBioDiv')){
    document.getElementById('danielBioDiv').remove();
  }
  var danielBioDiv = document.createElement('div');
  var danielBioText = document.createElement('textContent');
  var danielButton = document.createElement('button');
  var danielSpan = document.createElement('span');


  danielBioDiv.setAttribute('id', 'danielBioDiv');
  danielBioDiv.style.width = '300px';
  danielBioDiv.style.height = '225px';
  danielBioDiv.style.margin = 'auto';
  danielBioDiv.style.background = 'white';
  danielBioDiv.style.border = 'solid';
  danielBioDiv.style.position = 'relative';
  danielBioDiv.style.zIndex = '0';
  danielBioDiv.style.bottom = '800px';
  danielBioDiv.style.backgroundColor = '#3D9CA8';
  danielBioDiv.style.borderRadius = '10px';
  danielBioDiv.style.borderColor = 'BCD693';
  danielBioDiv.style.borderTopColor = '#BCD693';
  danielBioDiv.style.borderTopWidth = '10px';
  danielBioDiv.style.fontSize = '20px';
  danielBioDiv.style.fontFamily = 'italic';
  danielBioDiv.style.overflow = 'hidden';
  document.body.appendChild(danielBioDiv);


  danielButton.setAttribute('id', 'danielButton');
  danielButton.style.position = 'relative';
  danielButton.style.margin = '0px';
  danielButton.style.top = '175px';
  danielButton.style.left = '110px';
  danielButton.style.padding = '15px';

  danielSpan.textContent = 'Continue';
  danielButton.appendChild(danielSpan);


  danielBioText.setAttribute('id', 'danielBioText');
  danielBioText.textContent = 'Hello! My name is Daniel Pillay. I was born and raised in Mountlake Terrace, WA and I am an Air Force veteran. I am glad we could help you guys learn algorithms!';
  danielBioText.style.position = 'relative';
  danielBioText.style.fontFamily = 'sans-serif';
  danielBioText.style.color = 'white';
  danielBioText.style.indentValue = '20px';
  danielBioText.style.width = '375px';
  danielBioText.style.height = '200px';
  danielBioText.style.fontSize = '20px';
  danielBioText.style.top = '0px';
  danielBioText.style.left = '0px';
  danielBioText.style.verticalAlign = 'middle';
  danielBioText.style.textAlign = 'center';
  danielBioDiv.appendChild(danielBioText);
  danielBioDiv.appendChild(danielButton);
  danielButton.appendChild(danielSpan);

  document.getElementById('danielButton').addEventListener('click', removeDanielButton);

}
document.getElementById('daniel').addEventListener('click', danielBio);

function removeDanielButton(){
  if(danielBioDiv){
    document.getElementById('danielBioDiv').remove();
  }
}






// document.getElementById('zach').addEventListener('click', function clickZach(event){
//   window.alert('');
// });

// document.getElementById('ivette').addEventListener('click', function clickIvette(event){
//   window.alert('Hey there! My name is Ivette.  I studied improv comedy at Second City, taught middle school and am now coding coding coding.  Come by, say "Hi", I love meeng new people tada!');
// });

// document.getElementById('john').addEventListener('click', function clickJohn(event){
//   console.log('click John');
//   window.alert('My name is ');
// });

// document.getElementById('daniel').addEventListener('click',  danielBio);
// console.log('click Daniel');
// alert('Hello! My name is Daniel Pillay. I was born and raised in Mountlake Terrace, WA and I am an Air Force veteran. I am glad we could help you guys learn algorithms!');
