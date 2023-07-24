
let counter=0;
let count=document.getElementById("count-el");
function add(){
 counter+=1;
 count.textContent=counter;
};

function Save(){
let savebtn = document.getElementById("previousrecord");
savebtn.textContent+=counter+" - ";
count.textContent=0;
counter=0;
};
