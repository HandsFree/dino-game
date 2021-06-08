const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 700;

const keys = [];

var tc = false; // one tresure chest
var start = false;
var end = true;
var din = true;
var w = canvas.width / 2;


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


const bear = {
    x: 100,
    y: 250,
    width: 165,
    height: 215,
    dirX: 0,
    dirY: 0,
    speed: 25,
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

function charaters() {
    if(din) {
         drawSprite(sprites, dino.width * dino.dirX, dino.height * dino.dirY, dino.width, dino.height, dino.x, dino.y, dino.width, dino.height);
    } else {
         drawSprite(bears, bear.width * bear.dirX, bear.height * bear.dirY, bear.width, bear.height, bear.x, bear.y, bear.width, bear.height);
    }
};

function startAgain() {
  if (keys[32]){
      bear.x = 100;
      bear.y = 250;

      //charaters();

      //dino.x = 150;
      //dino.y = 350;

      end=true;
      tc=false;
      din=false;
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
    if(din) {
    dino.moving = true;
    } else {
    bear.moving = true;    
    }
});

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    if(din) {
    dino.moving = false;
    } else {
    bear.moving = false;   
    }
});

function movePlayer() {

    if(din) {
 
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

  } else {

    if (keys[38] && bear.y > 220) {
        bear.y -= bear.speed;
        bear.dirY = 0;
        bear.moving = true;
    }

    
    if (keys[37] && bear.x > 0) {
        bear.x -= bear.speed;
        bear.dirY = 1;
        bear.moving = true;
    }

   
   if (keys[40] && bear.y < (canvas.height+25) - bear.height) {
        bear.y += bear.speed;
        bear.dirY = 0;
        bear.moving = true;
    }

    
    if (keys[39] && bear.x < canvas.width - bear.width) {
        bear.x += bear.speed;
        bear.dirY = 0;
        bear.moving = true;
    }

  }
}

function handlePlayerFrame() {
    if(din) {
       if (dino.dirX < 3 && dino.moving) dino.dirX++
       else dino.dirX = 0;
    } else {
        if (bear.dirX <= 4 && bear.moving) bear.dirX++
        else bear.dirX = 0;
    }
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

    ctx.fillStyle = "darkgreen";
    ctx.textAlign = "center"; 
    ctx.font = "35px Comic Sans MS";
    ctx.fillText("Treasure Game", w, 40);
    ctx.font = "25px Comic Sans MS";
    ctx.fillText("With Dino and Friends!", w, 70);
    ctx.font = "25px Comic Sans MS";
    ctx.fillText("Directions: arrow keys to move", w, 690);

    charaters();

    }//end

    randNumGen();

    //ctx.drawImage(sprites,tresureChest.chestX,tresureChest.chestY,200,100,tresureChest.dirChestX,tresureChest.dirChestY,180,120);

   if (din) {
   if (dino.x <= (tresureChest.dirChestX+140) && tresureChest.dirChestX <= (dino.x+140) && dino.y <= (tresureChest.dirChestY+140) && tresureChest.dirChestY <= (dino.y+140)) {
        ctx.drawImage(sprites,tresureChest.chestX,(tresureChest.chestY+90),240,300,tresureChest.dirChestX,(tresureChest.dirChestY-60),220,320);
 
        
        ctx.fillStyle = "blue";
        ctx.textAlign = "center"; 
        ctx.font = "140px Comic Sans MS";
        ctx.fillText("Yay!", w, 200);
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("You have found the treasure!", w, 300);
        ctx.font = "50px Comic Sans MS";
        ctx.fillText("Hit the Spacebar to Play Again!", w, 400);

        end = false;

        startAgain();   
        
    } else {
       ctx.drawImage(sprites,tresureChest.chestX,tresureChest.chestY,200,100,tresureChest.dirChestX,tresureChest.dirChestY,180,120);
    }
    
} else {
    if (bear.x <= (tresureChest.dirChestX+140) && tresureChest.dirChestX <= (bear.x+140) && bear.y <= (tresureChest.dirChestY+140) && tresureChest.dirChestY <= (bear.y+140)) {
        ctx.drawImage(sprites,tresureChest.chestX,(tresureChest.chestY+90),240,300,tresureChest.dirChestX,(tresureChest.dirChestY-60),220,320);

        ctx.fillStyle = "red";
        ctx.textAlign = "center"; 
        ctx.font = "140px Comic Sans MS";
        ctx.fillText("Yay!", w, 200);
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("You have found the treasure Again!", w, 300);
        ctx.font = "50px Comic Sans MS";
        ctx.fillText("Well Done!", w, 400); 
        ctx.fillText("Thanks for Playing!", w, 500);

        end = false;

} else {
    ctx.drawImage(sprites,tresureChest.chestX,tresureChest.chestY,200,100,tresureChest.dirChestX,tresureChest.dirChestY,180,120);
 }

}
    movePlayer();
    handlePlayerFrame();
    }
  }
}
startAnimating(7);





