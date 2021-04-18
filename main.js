var canvas = 
document.getElementById("TheCanvas");
ctx = canvas.getContext("2d");

var color = "empty";
var line_width = "empty";


var mouseEvent = "empty";

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    color = document.getElementById("Color").value;
    line_width = document.getElementById("Width_Of_Line").value;
    mouseEvent = "mouseDown" ;
    console.log("in mousedown");
}
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseLeave" ;
}

canvas.addEventListener("mouseup", my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseUp" ;
}


canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e){

    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = line_width;
       ctx.moveTo(last_position_of_x ,last_position_of_y);
       ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}

canvas.addEventListener("touchstart" , my_touchstart)

function my_touchstart(e){
   last_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
   last_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
   color = document.getElementById("Color").value;
    line_width = document.getElementById("Width_Of_Line").value;
}

canvas.addEventListener("touchmove" , my_touchmove)

function my_touchmove(e){
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = line_width;
   ctx.moveTo(last_position_of_touch_x ,last_position_of_touch_y);
   ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    last_position_of_touch_x = current_position_of_touch_x;
    last_position_of_touch_y = current_position_of_touch_y;
}