

var dino = {
    x: 50,
    y: 100
}

var canvas = document.createElement("canvas");
var context = canvas.getContext("2d");

document.body.appendChild(canvas);

canvas.width = 1200;
canvas.height = 700;


mainImage = new Image();
mainImage.ready = false;
mainImage.onload = checkReady;
mainImage.src = "RunSpritesSh1.png";

var keyclick = {};

document.addEventListener("keydown", function (event) {
    keyclick[event.keyCode]=true;
    console.log(keyclick);
}, false);



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
    context.drawImage(mainImage,0,0,150,160,dino.x,dino.y,120,80);
    context.drawImage(mainImage,150,0,150,160,400,200,120,80);
    context.drawImage(mainImage,150,0,150,160,700,500,120,80);
    context.font = "20px Verdana";
    context.fillStyle = "black";
    context.fillText("Directions: arrow keys to move", 400, 690);
}

    



