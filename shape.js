canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "";
color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", my_mouseDown);
function my_mouseDown(e){
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;
radius =   document.getElementById("radius").value;
mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", my_mouseUp);
function my_mouseUp(e){

mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseLeave);
function my_mouseLeave(e){
mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mouseMove);
function my_mouseMove(e){
 current_position_of_x = e.clientX - canvas.offsetLeft;
 current_position_of_y = e.clientY - canvas.offsetTop;

if (mouseEvent == "mouseDown"){
 console.log("Current position of x and y coordinates = " );
 console.log("x = " + current_position_of_x + "y =" + current_position_of_y);
ctx.beginPath();
 ctx.strokeStyle = color;
  ctx.lineWidth = width_of_line;
  ctx.arc(current_position_of_x,current_position_of_y, radius,0,2*Math.PI);
  ctx.stroke();
}
}
function clearCanvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function goHome(){
    window.location ="index.html";
}