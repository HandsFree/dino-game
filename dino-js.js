

var dino = {
    x: 50,
    y: 300,
    dirX: 0,
    dirY: 0,
    speed: 5
}

var tresureChest = {
    chestX: 380,
    chestY: 0,
    dirChestX: 300,
    dirChestY: 450

}

function myNum(n) {
    return Math.floor(Math.random()*n);
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
    move(keyclick);
}, false);

document.addEventListener("keyup", function (event) {
    delete keyclick[event.keyCode];
}, false);



function move(keyclick) {

    // side arrows
    // towards right
    if (39 in keyclick) {dino.x += dino.speed; dino.dirX = 0; dino.dirY = 0;}
    // towards left
    if (37 in keyclick) {dino.x -= dino.speed; dino.dirX = 150; dino.dirY = 0;}

    //up and down arrows
    //if (38 in keyclick) {dino.y -= dino.speed;dino.dirX = 8; dino.dirY = 190}

    if (40 in keyclick) {dino.y += dino.speed;dino.dirX = 193; dino.dirY = 200}
    

    if (dino.x >= canvas.width) {dino.x = 0;}
    if (dino.y >= canvas.height) {dino.y = 0;}

    if (dino.x < 0) {dino.x = canvas.width;}
    if (dino.y < 0) {dino.y = canvas.height;}
    
    render();
}

function checkReady() {
   this.ready=true;
   playgame();
}

function playgame() {
   render();
   requestAnimationFrame(playgame);
}

if (tresureChest.chestY == 380) {
    console.log('treasure');
}

function render() {


    var background = new Image();
    background.src = "BG1.png";
    background.onload = function(){
    context.drawImage(background,0,0,canvas.width,canvas.height);     
    }

    
    //context.fillStyle="green";
    //context.fillRect(0,0,canvas.width,canvas.height);

    

    context.drawImage(mainImage,tresureChest.chestX,tresureChest.chestY,200,100,tresureChest.dirChestX,tresureChest.dirChestY,180,120);

    //context.drawImage(mainImage,380,100,200,170,300,300,180,190);


    context.drawImage(mainImage,dino.dirX,dino.dirY,150,160,dino.x,dino.y,180,120);

    //context.drawImage(mainImage,150,0,150,160,400,200,120,80);
    //context.drawImage(mainImage,150,0,150,160,700,500,120,80);
    context.fillStyle = "black";
    context.font = "30px Verdana";
    context.fillText("Dinosaur and Treasure Game!", 380, 30);
    context.font = "20px Verdana";
    context.fillText("Directions: arrow keys to move", 440, 690);
}

    



