/*const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/Firefox-logo.png'){
        myImage.setAttribute('src', 'images/Firefox-logo-min.png');
    } else {
        myImage.setAttribute('src', 'images/Firefox-logo.png');
    }
}

let myButton = document.querySelector('button');
let myHeading =document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}

myButton.onclick = function(){
    setUserName();
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}