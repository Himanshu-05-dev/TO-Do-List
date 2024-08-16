let input = document.getElementById('input');
let output = document.getElementById('display');
let btn = document.getElementById('btn');
let task = document.querySelectorAll('li');

function addTask(){
    if(input.value === ""){
        alert("Please write something first!!");
    }else{
        let li= document.createElement('li');
        li.innerHTML = input.value;
        output.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML= '\u00d7';
        li.appendChild(span);
    }
    input.value="";
};

output.addEventListener('click',function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);