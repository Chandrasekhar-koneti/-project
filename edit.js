var elements=document.getElementsByClassName('list-group-item');
//elements[1].style.backgroundColor="green";
//elements[2].style.visibility="hidden";

var odd=document.querySelectorAll('li:nth-child(odd)');
var even=document.querySelectorAll('li:nth-child(even)');
for (var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor="green";
    //even[i].style.backgroundColor="red";

}
