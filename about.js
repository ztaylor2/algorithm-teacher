'use strict';
function ivetteBio(){
  var ivetteBioDiv = document.createElement('div');
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
  ivetteBioDiv.style.overflow = 'hidden';
  document.body.appendChild(ivetteBioDiv);


  var ivetteBioText = document.createElement('textContent');
  ivetteBioText.setAttribute('id', 'ivetteBioText');
  ivetteBioText.textContent = 'Hey there! My name is Ivette.  I studied improv comedy at Second City, taught middle school and am now coding coding coding.  Come by, say "Hi", I love meeng new people tada!';
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

}
document.getElementById('ivette').addEventListener('click', ivetteBio);






function johnBio(){
  var johnBioDiv = document.createElement('div');
  johnBioDiv.setAttribute('id', 'johnBioDiv');
  johnBioDiv.style.width = '300px';
  johnBioDiv.style.height = '225px';
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
  johnBioDiv.style.overflow = 'hidden';
  document.body.appendChild(johnBioDiv);


  var johnBioText = document.createElement('textContent');
  johnBioText.setAttribute('id', 'johnBioText');
  johnBioText.textContent = '';
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

}
document.getElementById('john').addEventListener('click', johnBio);






function danielBio(){
  var danielBioDiv = document.createElement('div');
  danielBioDiv.setAttribute('id', 'danielBioDiv');
  danielBioDiv.style.width = '400px';
  danielBioDiv.style.height = '300px';
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
  danielBioDiv.style.borderTopWidth = '75px';
  danielBioDiv.style.fontSize = '20px';
  danielBioDiv.style.fontFamily = 'italic';
  danielBioDiv.style.overflow = 'hidden';
  document.body.appendChild(danielBioDiv);


  var danielBioText = document.createElement('textContent');
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

}
document.getElementById('daniel').addEventListener('click', danielBio);






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
