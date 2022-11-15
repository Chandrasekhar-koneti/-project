// var newDiv=document.createElement('div');
// newDiv.className='hello';
// newDiv.id='hello1';
// newDiv.setAttribute('title','hello div');
// var newDivText=document.createTextNode('hello world');
// newDiv.appendChild(newDivText);
// var container=document.querySelector('header.container');
// var h1=document.querySelector('header h1');
// console.log(newDiv);
// newDiv.style.fontSize='30px';
// container .insertBefore(newDiv, h1);

var itemList=document.querySelector('#items');
console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.textContent='hello world';
