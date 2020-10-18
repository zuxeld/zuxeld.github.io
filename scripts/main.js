//let - испольовать для создания переменных(как var)
document.querySelector('h4').textContent = 'Hello world!';

document.querySelector('h2').onclick = function() {
    alert('Ouch! Stop poking me!');
}

//изменение картинки по клику
document.querySelector('img').onclick = function() {
    if (document.querySelector('img').getAttribute('src') === 'images/manga0.png'){
		document.querySelector('img').setAttribute('src','images/manga1.png')
	}else{
		document.querySelector('img').setAttribute('src','images/manga0.png')
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
	  myName = localStorage.getItem('name');
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Main title, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Main title, ' + storedName;
}


myButton.onclick = function() {
  setUserName();
}