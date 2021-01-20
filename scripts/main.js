var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/img1.jpeg') 
    {
      myImage.setAttribute ('src','img/img2.jpeg');
    } 
    else 
    {
      myImage.setAttribute ('src','img/img1.jpeg');
    }
}
// change picture
/*-------------------------------------------------*/
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  alert('Hi ' + storedName +'!!!!');
  myHeading.innerHTML =  storedName + ' is Abby\'s husband';
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName===null){
    setUserName();
    }  
  localStorage.setItem('name', myName);
  myHeading.innerHTML = storedName + ' is Abby\'s husband';

}

myButton.onclick = function(){
  setUserName(); 
}
//change username
/*--------------------------------------------------*/