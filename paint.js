canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "";
var last_position_of_x, last_position_of_y;
color = "black";
width_of_line = 1;

canvas.addEventListener("mousedown", my_mouseDown);

function my_mouseDown(e){
color = document.getElementById("color").value;
width_of_line = document.getElementById("width_of_line").value;

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
 ctx.beginPath();
 ctx.strokeStyle = color;
 ctx.lineWidth = width_of_line;

 console.log("last position of x and y = " );
 console.log("x = " + last_position_of_x + "y =" + last_position_of_y);
 ctx.moveTo(last_position_of_x, last_position_of_y);

 console.log("current position of x and y = " );
 console.log("x = " + current_position_of_x + "y =" + current_position_of_y);
 ctx.lineTo(current_position_of_x, current_position_of_y);
 ctx.stroke();
}
last_position_of_x = current_position_of_x;
last_position_of_y = current_position_of_y;
}

var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

    var width= screen.width;
    var new_width= width - 70;

    var height= screen.height;
    var new_height= height - 300;

    if (width < 992){
     document.getElementById("myCanvas").width = new_width;
     document.getElementById("myCanvas").height = new_height;
     document.body.style.overflow = "hidden";

    }

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {
        console.log("my_touchstart");
        //Addictonal Activity start
        color = document.getElementById("color").value;
        width_of_line = document.getElementById("width_of_line").value;
        //Addictonal Activity ends

       last_position_of_x = e.touches[0].clientX - canvas.offsetLeft;
       last_position_of_y = e.touches[0].clientY - canvas.offsetTop;
    }


    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

       
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        ctx.moveTo(last_position_of_x, last_position_of_y);

        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        ctx.stroke();
        
       

        last_position_of_x = current_position_of_touch_x; 
        last_position_of_y = current_position_of_touch_y;
    }
 function clearCanvas() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function goHome(){
    window.location ="index.html";
}

