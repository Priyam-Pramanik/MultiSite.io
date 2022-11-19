 function calc(){
    window.location ="calculator.html";
 }

 function paint(){
   window.location ="paint.html";
}

function temp(){
   window.location ="shape.html";
}

function lib(){
   window.location ="library.html";
}

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML = d + "/" + m + "/" + y;