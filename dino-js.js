const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 700;

const keys = [];

var tc = false; // one tresure chest
var start = false;
var end = true;

/*const chact = [
      [sprSt="sprites", x=100, y=250, width=175, height=175, dirX=0, dirY=0, speed=10, moving=false],
      [sprSt="bears", x=100, y=250, width=175, height=215, dirX=0, dirY=0, speed=10, moving=false]
];

console.log(chact[1][0]);*/


const dino = {
    x: 100,
    y: 250,
    width: 175,
    height: 175,
    dirX: 0,
    dirY: 0,
    speed: 20,
    moving: false
};


/*const bear = {
    x: 100,
    y: 250,
    width: 175,
    height: 215,
    dirX: 0,
    dirY: 0,
    speed: 10,
    moving: false
};*/


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

function startAgain() {
  if (keys[32]){
      //bear.x = 100;
      //bear.y = 250;

      dino.x = 150;
      dino.y = 350;

      end=true;
      tc=false;
      randNumGen();
    //console.log('space');
  }
}

function myNum(n) {
    return Math.floor(Math.random()*n);
};

//starting the game image
const startImage = new Image();
startImage.src = "firstScreen.png";

//background of the game
const background = new Image();
background.src = "BG1.png";

//dino
const sprites = new Image();
sprites.src = "din-fin1.png";

//bear
const bears = new Image();
bears.src = "bears-sheet.png";


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


/*function movePlayer() {
 
    if (keys[38] && dino[0][2] > 220) {
        dino[0][2] -= dino.speed;
        dino[i].dirY = 0;
        dino[i].moving = true;
    }

    
    if (keys[37] && dino.x > 0) {
        dino.x -= dino.speed;
        dino.dirY = 1;
        dino.moving = true;
    }

   
   if (keys[40] && dino.y < (canvas.height+25) - dino.height) {
        dino.y += dino.speed;
        dino.dirY = 0;
        dino.moving = true;
    }

    
    if (keys[39] && dino.x < canvas.width - dino.width) {
        dino.x += dino.speed;
        dino.dirY = 0;
        dino.moving = true;
    }
}*/



function movePlayer() {
 
    if (keys[38] && dino.y > 220) {
        dino.y -= dino.speed;
        dino.dirY = 0;
        dino.moving = true;
    }

    
    if (keys[37] && dino.x > 0) {
        dino.x -= dino.speed;
        dino.dirY = 1;
        dino.moving = true;
    }

   
   if (keys[40] && dino.y < (canvas.height+25) - dino.height) {
        dino.y += dino.speed;
        dino.dirY = 0;
        dino.moving = true;
    }

    
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

function randNumGen() {
    if (!tc){
        tresureChest.tcNum = myNum(5)*64;
        tresureChest.dirChestX = myNum(1100)+50;
        tresureChest.dirChestY = myNum(400)+250;
        tc=true;
    }
}

function ani() {
    requestAnimationFrame(ani);
    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
   
    ctx.clearRect(0,0,canvas.width, canvas.height);

    if (!start) {

        var w = canvas.width / 2;

        ctx.drawImage(startImage, 0, 0, canvas.width, canvas.height);
        ctx.font = "35px Comic Sans MS";
        ctx.fillStyle = "darkgreen";
        ctx.textAlign = "center"; 
        ctx.fillText("Spacebar to Play!", w, 680);

        if (keys[32]) {
            start=true;
        }
        
    } else {   

    ctx.drawImage(background, 0, 0, canvas.width, canvas.height); 

    if (end) {

    var w1 = canvas.width / 2;

    ctx.fillStyle = "darkgreen";
    ctx.textAlign = "center"; 
    ctx.font = "35px Comic Sans MS";
    ctx.fillText("Treasure Game", w1, 40);
    ctx.font = "25px Comic Sans MS";
    ctx.fillText("With Dino and Friends!", w1, 70);
    ctx.font = "25px Comic Sans MS";
    ctx.fillText("Directions: arrow keys to move", w1, 690);
 
    drawSprite(sprites, dino.width * dino.dirX, dino.height * dino.dirY, dino.width, dino.height, dino.x, dino.y, dino.width, dino.height);
    //drawSprite(chact[0].sprSt, chact[0].width * chact[0].dirX, chact.height * chact.dirY, chact.width, chact.height, chact.x, chact.y, chact.width, chact.height);
    //drawSprite(chact[0][0], chact[0][3] * chact[0][5], chact[0][4] * chact[0][6], chact[0][3], chact[0][4], chact[0][1], chact[0][2], chact[0][3], chact[0][4]);

    }//end

    randNumGen();

    //ctx.drawImage(sprites,tresureChest.chestX,tresureChest.chestY,200,100,tresureChest.dirChestX,tresureChest.dirChestY,180,120);

   if (dino.x <= (tresureChest.dirChestX+140) && tresureChest.dirChestX <= (dino.x+140) && dino.y <= (tresureChest.dirChestY+140) && tresureChest.dirChestY <= (dino.y+140)) {
        ctx.drawImage(sprites,tresureChest.chestX,(tresureChest.chestY+90),240,300,tresureChest.dirChestX,(tresureChest.dirChestY-60),220,320);

        var w2 = canvas.width / 2;

        ctx.fillStyle = "blue";
        ctx.textAlign = "center"; 
        ctx.font = "140px Comic Sans MS";
        ctx.fillText("Yay!", w2, 200);
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("You have found the treasure!", w2, 300);
        ctx.font = "50px Comic Sans MS";
        ctx.fillText("Hit the Spacebar to Play Again!", w2, 400);

        end = false;

        startAgain();
     
        
    } else {
       ctx.drawImage(sprites,tresureChest.chestX,tresureChest.chestY,200,100,tresureChest.dirChestX,tresureChest.dirChestY,180,120);
    }
    
    movePlayer();
    handlePlayerFrame();

    }
  }
}

startAnimating(7);





