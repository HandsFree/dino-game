
/*
var dino = {
    x: 50,
    y: 300,
}
*/

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");

document.body.appendChild(canvas);

canvas.width = 1200;
canvas.height = 700;

/*
mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "RunSpritesSh1.png";


function checkReady() {
   this.ready=true;
   playgame();
}

function playgame() {
   render();
}



function render() {
    context.fillStyle="green";
    context.fillRect(0,0,canvas.width,canvas.height);
}

*/

/*comment this out*/
context.fillStyle="green";
context.fillRect(0,0,canvas.width,canvas.height);


context.font = "20px Verdana";
context.fillStyle = "black";
context.fillText("Directions: arrow keys to move", 400, 690);


    



