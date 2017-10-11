

var bodyTag = document.getElementsByTagName('BODY')[0];
var newDiv = document.createElement('div');
var newText = document.createTextNode('DOM manipulation');

bodyTag.appendChild(newDiv);
newDiv.appendChild(newText);
//MAKE SURE TO MAKE COMMENTS!!!
var monthDiv = document.createElement('div'); //creates div
monthDiv.id = 'monthSelector'; // makes div have id monthSelector

bodyTag.appendChild(monthDiv);


