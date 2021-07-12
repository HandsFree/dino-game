const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 700;

const keys = [];

var tc = false; // one tresure chest
var start = false;
var end = true;

//animals
var vol = true;
var din = true;
var billyBear = false;
var lion = false;

var gameEnd = true;
var textGo = false;

//levels
var levels = false;


//center text
var w = canvas.width / 2;

//animals objects
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

const lion2 = {
    x: 100,
    y: 250,
    width: 250,
    height: 170,
    dirX: 0,
    dirY: 0,
    speed: 25,
    moving: false
};
// end of animals objects

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








var startScTx = new Audio("sounds/startScTx.mp3");
var startScMsc = new Audio("sounds/startScMsc.mp3");

var ins = new Audio("sounds/ins.mp3");
var roarSd = new Audio("sounds/T-Rex1.mp3");
var billySd = new Audio("sounds/bear_Sd.mp3");
var lion_Sd = new Audio("sounds/lion_Sd.mp3");
var music = new Audio("sounds/bensound-ukulele.mp3");













function charaters() {
    if(din) {
        music.play();
        drawSprite(sprites, dino.width * dino.dirX, dino.height * dino.dirY, dino.width, dino.height, dino.x, dino.y, dino.width, dino.height);
        levels=true;
    }

    if(billyBear) {
        music.play();
        drawSprite(bears, bear.width * bear.dirX, bear.height * bear.dirY, bear.width, bear.height, bear.x, bear.y, bear.width, bear.height);
        levels=false;
    }

    if(lion) {
        music.play();
        drawSprite(li1, lion2.width * lion2.dirX, lion2.height * lion2.dirY, lion2.width, lion2.height, lion2.x, lion2.y, lion2.width, lion2.height);
    }
};

// return to splash screen
function retToMain() {
    if (keys[13]) {
        dino.x = 100,
        dino.y = 250,
        end=true;
        tc=false;
        din=true;
        gameEnd=false;
        billyBear=false;
        lion=false;
    }
}

function playIns() {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height); 
        ins.play();
        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.6;  
        ctx.fillRect(150, 100, 900, 450); 
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = "purple";
        ctx.textAlign = "center"; 
        ctx.font = "45px Comic Sans MS";
        ctx.fillText("Dino is looking for the treasure!", w, 200);
        ctx.fillText("Move the arrow keys to look around", w, 300);
        ctx.fillText("Good Luck!", w, 400);
        ctx.fillStyle = "red";
        ctx.fillText("Press the Spacebar to Play!", w, 500);
        levels=true;
        if (keys[32]) {
            textGo=true;
            startScMsc.pause();
            ins.pause();
        }
}

// level 2
function level2() {
  if (keys[32]){
      billyBear=true;
      bear.x = 50;
      bear.y = 350;
      end=true;
      tc=false;
      din=false;
      lion=false;
      randNumGen();
  }
}

// level 3
function level3() {
    if (keys[32]){
        lion2.x = 100;
        lion2.y = 250;
        end=true;
        tc=false;
        billyBear=false;
        din=false;
        lion=true;
        randNumGen();
    }
  }

function myNum(n) {
    return Math.floor(Math.random()*n);
};

//start screen
const startImage = new Image();
startImage.src = "levels/firstScreen.png";

//Level 1 background
const background = new Image();
background.src = "levels/lev1.png";

//Level 2 background
const background1 = new Image();
background1.src = "levels/lev3.png";

//Level 3 background
//const background2 = new Image();
//background2.src = "levels/lev3.png";

//dino
const sprites = new Image();
sprites.src = "sprites/din-fin1.png";

//bear
const bears = new Image();
bears.src = "sprites/bears-sheet.png";

//lion
const li1 = new Image();
li1.src = "sprites/lennyLion.png";


function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH){
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH);
}


window.addEventListener("keydown", function(e){
    keys[e.keyCode] = true;
    if(din) {
       dino.moving = true;
    }
    if(billyBear) {
        bear.moving = true;    
    }
    if(lion) {
        lion2.moving = true; 
    }
});

window.addEventListener("keyup", function(e){
    delete keys[e.keyCode];
    if(din) {
        dino.moving = false;
    }
    if(billyBear) {
        bear.moving = false;   
    }
    if(lion) {
        lion2.moving = false;   
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

  } 

  if (billyBear) {

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


  if (lion) {

    if (keys[38] && lion2.y > 220) {
        lion2.y -= lion2.speed;
        lion2.dirY = 0;
        lion2.moving = true;
    }

    
    if (keys[37] && lion2.x > 0) {
        lion2.x -= lion2.speed;
        lion2.dirY = 1;
        lion2.moving = true;
    }

   
   if (keys[40] && lion2.y < (canvas.height+25) - lion2.height) {
        lion2.y += lion2.speed;
        lion2.dirY = 0;
        lion2.moving = true;
    }

    
    if (keys[39] && lion2.x < canvas.width - lion2.width) {
        lion2.x += lion2.speed;
        lion2.dirY = 0;
        lion2.moving = true;
    }

  }

}

function handlePlayerFrame() {
    if(din) {
       if (dino.dirX < 3 && dino.moving) dino.dirX++
       else dino.dirX = 0;
    } 
    
    if(billyBear) {
        if (bear.dirX < 5 && bear.moving) bear.dirX++
        else bear.dirX = 0;
    }

    if(lion) {
        if (lion2.dirX < 1 && lion2.moving) lion2.dirX++
        else lion2.dirX = 0;
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

    if (!start || !gameEnd) {

        ctx.drawImage(startImage, 0, 0, canvas.width, canvas.height);
        ctx.font = "35px Comic Sans MS";
 
        startScMsc.play();
        startScMsc.volume = 0.1;

        startScTx.play();
        startScTx.volume = 1;

        ctx.fillStyle = "darkgreen";
        ctx.textAlign = "center";

        if (vol) {
        
        ctx.fillText("Press the Spacebar for Sound!", w, 680);   

        if (keys[32]) {
           vol = false;         
        }

        } else {

        ctx.fillText("Press the Spacebar to continue!", w, 680);  

        if (keys[32]) {
            start=true;
            gameEnd=true;
            startScTx.pause();
        }
    }
          
    } else { 

    if (levels) {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);    
    } else {
        ctx.drawImage(background1, 0, 0, canvas.width, canvas.height);
    }

    if (!textGo) {

    playIns();

    } else {
    
    if (end) { 

    ctx.fillStyle = "red";
    ctx.textAlign = "center"; 
    ctx.font = "35px Comic Sans MS";
    ctx.fillText("Treasure Game", w, 40);
    ctx.font = "25px Comic Sans MS";
    ctx.fillText("With Dino and Friends!", w, 70);
    ctx.font = "25px Comic Sans MS";
    ctx.fillText("Directions: arrow keys to move around", w, 690);

    charaters();

    }//end

    randNumGen();

   if (din) {
   if (dino.x <= (tresureChest.dirChestX+140) && tresureChest.dirChestX <= (dino.x+140) && dino.y <= (tresureChest.dirChestY+140) && tresureChest.dirChestY <= (dino.y+140)) {
        ctx.drawImage(sprites,tresureChest.chestX,(tresureChest.chestY+90),240,300,tresureChest.dirChestX,(tresureChest.dirChestY-60),220,320);
 
        music.pause();
        roarSd.play();
        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.6; 
        ctx.fillRect(50, 30, 1100, 550);
        ctx.globalAlpha = 1.0; 
        ctx.fillStyle = "red";
        ctx.textAlign = "center"; 
        ctx.font = "140px Comic Sans MS";
        ctx.fillText("Yay!", w, 200);
        ctx.fillStyle = "blue";
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("You and Dino have found the treasure!", w, 300);
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "purple";
        ctx.fillText("Hit on the Spacebar to help Billy Bear", w, 400);
        ctx.fillText("find the Treasure Chest!", w, 500);

        end = false;

        level2();
        
    } else {
       ctx.drawImage(sprites,tresureChest.chestX,tresureChest.chestY,200,100,tresureChest.dirChestX,tresureChest.dirChestY,180,120);
    }
    
}
    if (billyBear) {
    if (bear.x <= (tresureChest.dirChestX+140) && tresureChest.dirChestX <= (bear.x+140) && bear.y <= (tresureChest.dirChestY+140) && tresureChest.dirChestY <= (bear.y+140)) {
        ctx.drawImage(sprites,tresureChest.chestX,(tresureChest.chestY+90),240,300,tresureChest.dirChestX,(tresureChest.dirChestY-60),220,320);

        music.pause();
        billySd.play();
        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.6; 
        ctx.fillRect(100, 50, 1000, 600);
        ctx.globalAlpha = 1.0; 
        ctx.fillStyle = "red";
        ctx.textAlign = "center"; 
        ctx.font = "140px Comic Sans MS";
        ctx.fillText("Yay!", w, 200);
        ctx.font = "60px Comic Sans MS";
        ctx.fillStyle = "blue";
        ctx.fillText("You and Billy Bear have", w, 300);
        ctx.fillText("found the treasure!", w, 400);
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "purple";
        ctx.fillText("Hit on the Spacebar to help Leo the Lion", w, 500);
        ctx.fillText("find the Treasure Chest!", w, 600);

        end = false;

        level3();


} else {
    ctx.drawImage(sprites,tresureChest.chestX,tresureChest.chestY,200,100,tresureChest.dirChestX,tresureChest.dirChestY,180,120);
 }

}

if (lion) {
    if (lion2.x <= (tresureChest.dirChestX+140) && tresureChest.dirChestX <= (lion2.x+140) && lion2.y <= (tresureChest.dirChestY+140) && tresureChest.dirChestY <= (lion2.y+140)) {
        ctx.drawImage(sprites,tresureChest.chestX,(tresureChest.chestY+90),240,300,tresureChest.dirChestX,(tresureChest.dirChestY-60),220,320);

        music.pause();
        lion_Sd.play();
        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.6; 
        ctx.fillRect(120, 40, 950, 600);
        ctx.globalAlpha = 1.0; 
        ctx.fillStyle = "red";
        ctx.textAlign = "center"; 
        ctx.font = "140px Comic Sans MS";
        ctx.fillText("Yay!", w, 200);
        ctx.font = "60px Comic Sans MS";
        ctx.fillStyle = "blue";
        ctx.fillText("You and Leo the Lion have", w, 300);
        ctx.fillText("found the treasure!", w, 400);
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.fillText("Thanks for Playing!", w, 500);
        ctx.fillStyle = "purple";
        ctx.fillText("Hit on the Enter Key to Play Again!", w, 600);

        end = false;

        retToMain();

} else {
    ctx.drawImage(sprites,tresureChest.chestX,tresureChest.chestY,200,100,tresureChest.dirChestX,tresureChest.dirChestY,180,120);
 }

}

}///textGo

    movePlayer();
    handlePlayerFrame();
    }
  }
}
startAnimating(7);





