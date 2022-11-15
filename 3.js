var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

itemList.addEventListener('click',removeItem);


function addItem(e){
    e.preventdefault();
}

function removeitem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure')){
            var li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}