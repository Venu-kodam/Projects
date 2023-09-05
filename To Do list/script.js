const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const button = document.getElementById('btn');

function addList(){
    if(inputBox.value === ''){
        alert("you need to enter something!")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = '';
    saveData();
}
listContainer.addEventListener('click',function(e){ 
    if(e.target.tagName ==='LI'){  //if target is LI change it to checked
        e.target.classList.toggle('checked');
        saveData();
    }
    else if(e.target.tagName ==='SPAN'){  //else if target is SPAN remove the parent element
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){ //function to save data
    localStorage.setItem('data',listContainer.innerHTML);
}
function showData(){ //function to show data
    listContainer.innerHTML =  localStorage.getItem('data');
}
showData();