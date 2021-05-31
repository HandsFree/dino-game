const canvas = document.getElementById('canvas1');
//var canvas = document.createElement("canvas");
const ctx = canvas.getContext('2d');
//document.body.appendChild(canvas);
canvas.width = 1200;
canvas.height = 700;

const keys = [];

var tc=false;

const dino = {
    x: 100,
    y: 250,
    width: 175,
    height: 175,
    dirX: 0,
    dirY: 0,
    speed: 10,
    moving: false
};

var tresureChest = {
    ////////
    //Dont Touch!//
    chestX: 0,
    chestY: 460,
    //End//
    ////////

    dirChestX: 0,
    dirChestY: 0,
};


function myNum(n) {
    return Math.floor(Math.random()*n);
};


const sprites = new Image();
sprites.src = "din-fin1.png";

const background = new Image();
background.src = "BG1.png";

function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}

window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
    dino.moving = true;
});

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    dino.moving = false;
});


function movePlayer() {
    //up
    if (keys[38] && dino.y > 220) {
        dino.y -= dino.speed;
        dino.dirY = 0;
        dino.moving = true;
    }

    //left
    if (keys[37] && dino.x > 0) {
        dino.x -= dino.speed;
        dino.dirY = 1;
        dino.moving = true;
    }

   //down
   if (keys[40] && dino.y < (canvas.height+25) - dino.height) {
        dino.y += dino.speed;
        dino.dirY = 0;
        dino.moving = true;
    }

    //right
    if (keys[39] && dino.x < canvas.width - dino.width) {
        dino.x += dino.speed;
        dino.dirY = 0;
        dino.moving = true;
    }
}

function handlePlayerFrame() {
    if (dino.dirX < 3 && dino.moving) dino.dirX++
    else dino.dirX = 0;
}

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    ani();
}

function ani() {
    requestAnimationFrame(ani);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);

    ctx.clearRect(0,0,canvas.width, canvas.height);
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "darkgreen";
    ctx.font = "35px Comic Sans MS";
    ctx.fillText("Dinosaur and Treasure Game!", 380, 40);
    ctx.fillStyle = "darkgreen";
    ctx.font = "25px Comic Sans MS";
    ctx.fillText("Directions: arrow keys to move", 440, 690);

    drawSprite(sprites, dino.width * dino.dirX, dino.height * dino.dirY, dino.width, dino.height, dino.x, dino.y, dino.width, dino.height);

    if (!tc){
        tresureChest.ghostNum = myNum(5)*64;
        tresureChest.dirChestX = myNum(1100)+50;
        tresureChest.dirChestY = myNum(400)+250;
        tc=true;
    }

    //ctx.drawImage(sprites,tresureChest.chestX,tresureChest.chestY,200,100,tresureChest.dirChestX,tresureChest.dirChestY,180,120);

    if (dino.x <= (tresureChest.dirChestX+140) && tresureChest.dirChestX <= (dino.x+140) && dino.y <= (tresureChest.dirChestY+140) && tresureChest.dirChestY <= (dino.y+140)) {
        ctx.drawImage(sprites,tresureChest.chestX,(tresureChest.chestY+90),240,300,tresureChest.dirChestX,(tresureChest.dirChestY-60),220,320);
        
    } else {
       ctx.drawImage(sprites,tresureChest.chestX,tresureChest.chestY,200,100,tresureChest.dirChestX,tresureChest.dirChestY,180,120);
    }

    movePlayer();
    handlePlayerFrame();

    }

}

startAnimating(7);



