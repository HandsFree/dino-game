const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 735;

var vol1 = false;
var vol2 = false;;
var vol3 = true;
var vol4 = false;
var vol5 = false;

var paused = false;

var closeMenuBox = false;

// vol gfx
// 1
const v1Gr = new Image();
v1Gr.src = "red_vol.png";
const v1Gb = new Image();
v1Gb.src = "black_vol.png";

// 2
const v2Gr = new Image();
v2Gr.src = "red_vol.png";
const v2Gb = new Image();
v2Gb.src = "black_vol.png";

// 3
const v3Gr = new Image();
v3Gr.src = "red_vol.png";
const v3Gb = new Image();
v3Gb.src = "black_vol.png";

// 4
const v4Gr = new Image();
v4Gr.src = "red_vol.png";
const v4Gb = new Image();
v4Gb.src = "black_vol.png";

// 5
const v5Gr = new Image();
v5Gr.src = "red_vol.png";
const v5Gb = new Image();
v5Gb.src = "black_vol.png";

const Tick = new Image();
Tick.src = "images/Tick.png";

const arrKeys = new Image();
arrKeys.src = "arrow_keys1.png";

const SpchtickBox1 = new Image();
SpchtickBox1.src = "images/opbox.png";

const SpchtickBox2 = new Image();
SpchtickBox2.src = "images/opbox.png";

///////19/6/24
const musTickBox1 = new Image();
musTickBox1.src = "images/opbox.png";

const musTickBox2 = new Image();
musTickBox2.src = "images/opbox.png";

const picTickBox1 = new Image();
picTickBox1.src = "images/opbox.png";

const picTickBox2 = new Image();
picTickBox2.src = "images/opbox.png";
///////////end







const reStartImg = new Image();
reStartImg.src = "images/reload.png"; // restart Image - Restart Game

const Settings = new Image();
Settings.src = "cog.png"; // settings main game

const blueBgSetOp = new Image();
blueBgSetOp.src = "images/blueBgSet.png"; // blue bg for options setting

const settingExit = new Image();
settingExit.src = "images/blueBgSet.png"; // blue bg for options setting

// directions

var sharkDir = false;
var bearDir = false;
var lionDir = false;

var dirArr = true;

const arPic = new Image();
arPic.src = "arrows.png";

const bgCir = new Image();
bgCir.src = "images/cir.png";

const upDir = new Image();
upDir.src = "images/up.png";

const downDir = new Image();
downDir.src = "images/down.png";

const rightDir = new Image();
rightDir.src = "images/right.png";

const leftDir = new Image();
leftDir.src = "images/left.png";
// directions end

var purp = true;
var ble = false;

var fireEnd;

var speechOn=true;
var musicOn=true;
var picOn=true;

var fireworksOn = false;

var textGo2 = false; // round 2 instructions
var textGo3 = false; // round 2 play
var textGo4 = false;

var endOfLevel=true; // false if white screen with text.

var fallDown = true;

const firstScGo = new Image();
firstScGo.src = "images/firstScGo.png";

const setExit = new Image();
setExit.src = "images/secScGo.png";

const secScGo = new Image();
secScGo.src = "images/secScGo.png";

const dia1Go = new Image();
dia1Go.src = "images/firstScGo.png";

const endfirstSc = new Image();
endfirstSc.src = "images/firstScGo.png";

const endsecSc = new Image();
endsecSc.src = "images/firstScGo.png";

const endthdSc = new Image();
endthdSc.src = "images/firstScGo.png";

const stforthSc = new Image();
stforthSc.src = "images/firstScGo.png";

/******objects falling*********/
var boneOn = true;
var bearOn = true;
var meatOn = true;
/********end******************/

var round1=true; // start levels
var round2=false; // with objects
var round3=false; // final round
var round4=false;

const keys = []; // keyboard operations

var gameInsHt1 = 10; // upper green panel

/******lower green panels******/
var gameInsHt = 40;
var gameHt = canvas.height - gameInsHt;
var gameInsWd = canvas.width;
var gameInsCol = "darkgreen";
/*******end*****************/

var tc = false; // one tresure chest
var start = false;
var end = true;

//animals
var vol = true;
var din = true; // shows a Dino!
var billyBear = false; // shows a Billy Bear!
var lion = false; // shows a Leo Lion!

var gameEnd = true;
var textGo = false;

//levels
var levels1 = true;
var levels2 = false;
var levels3 = false;
var levels4 = false;

//center text
var w = canvas.width / 2;

//animals objects
const dino = {
    x: 0,
    y: 500,
    width: 175,
    height: 175,
    dirX: 0,
    dirY: 0,
    speed: 20,
    moving: false
};

const bear = {
    x: 0,
    y: 500,
    width: 165,
    height: 215,
    dirX: 0,
    dirY: 0,
    speed: 25,
    moving: false
};

const lion2 = {
    x: 0,
    y: 500,
    width: 250,
    height: 160,
    dirX: 0,
    dirY: 0,
    speed: 25,
    moving: false
};
// end of animals objects

const tresureChest = {
    ////////
    //Dont Touch!//
    chestX: 0,
    chestY: 460,
    //End//
    ////////

    dirChestX: 0,
    dirChestY: 0,
};




























/**********sound effects and music****************/

var round2ef = new Audio("sounds/round2.mp3");
var finalTime = new Audio("sounds/finalTime.mp3");



var startScTx = new Audio("sounds/start-2-sp.mp3");
var startScMsc = new Audio("sounds/startScMsc.mp3");

var dinoCon = new Audio("sounds/dinoCon.mp3");
var billyCon = new Audio("sounds/billyCon.mp3");
var leoCon = new Audio("sounds/leoCon.mp3");

var dinoOhNo = new Audio("sounds/dino-oh-no.mp3");
var billyOhNo = new Audio("sounds/billy-oh-no.mp3");
var leoOhNo = new Audio("sounds/leo-oh-no.mp3");



var Dinohit = new Audio("sounds/Dino_hit.mp3");
var Bearhit = new Audio("sounds/bear_hit.mp3");
var Lionhit = new Audio("sounds/lion_hit.mp3");


var fireWk = new Audio("sounds/fireworks.mp3");

var leoR2 = new Audio("sounds/leo-round2.mp3");
var rSpk2 = new Audio("sounds/round2Sp.mp3");

var enterKey = new Audio("sounds/enter_key.mp3");
var letsGo = new Audio("sounds/lets-go.mp3");

var ins = new Audio("sounds/ins.mp3");
var roarSd = new Audio("sounds/T-Rex1.mp3");
var billySd = new Audio("sounds/bear_Sd.mp3");
var lion_Sd = new Audio("sounds/lion_Sd.mp3");
var music = new Audio("sounds/bensound-ukulele.mp3");
/***************end********************************/

/***********For Menu************/
var togSet=true;
var togMenu=false;
/************end****************/

// Setting Menu mouse controls
function settingMouse(e) {
      if (ctx.isPointInPath(cog.path, e.offsetX, e.offsetY)) {
          closeMenuBox=true;
          togSet=false;
          togMenu=true;
          showMenu();
          canvas.removeEventListener("click", settingMouse);
      }
}

function settingMouseGame(e) {
    if (ctx.isPointInPath(cogGame.path, e.offsetX, e.offsetY)) {
        closeMenuBox=true;
        togSet=false;
        togMenu=true;
        paused=true;
        showMenu();
        canvas.removeEventListener("click", settingMouseGame);
    }
}


function volumeFn() {

    ctx.font = "700 40px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText("Min", w-110, 557);

    // v1
    if (vol1) {
        ctx.drawImage(v1Gr, w-60, 520, 10, 45);
        v1Gr.path = new Path2D();
        v1Gr.path.rect(w-60, 520, 10, 45);
    }
    if (!vol1) {
        ctx.drawImage(v1Gb, w-60, 520, 10, 45);
        v1Gb.path = new Path2D();
        v1Gb.path.rect(w-60, 520, 10, 45);
    }
        canvas.addEventListener("click", v1R);
        canvas.addEventListener("click", v1B);

    // v2
    if (vol2) {
        ctx.drawImage(v2Gr, w-30, 520, 10, 45);
        v2Gr.path = new Path2D();
        v2Gr.path.rect(w-30, 520, 10, 45);
    }
    if (!vol2) {
        ctx.drawImage(v2Gb, w-30, 520, 10, 45);
        v2Gb.path = new Path2D();
        v2Gb.path.rect(w-30, 520, 10, 45);
    }
        canvas.addEventListener("click", v2R);
        canvas.addEventListener("click", v2B);

    //v3
    if (vol3) {
        ctx.drawImage(v3Gr, w, 520, 10, 45);
        v3Gr.path = new Path2D();
        v3Gr.path.rect(w, 520, 10, 45);
    }
    if (!vol3) {
        ctx.drawImage(v3Gb, w, 520, 10, 45);
        v3Gb.path = new Path2D();
        v3Gb.path.rect(w, 520, 10, 45);
    }
        canvas.addEventListener("click", v3R);
        canvas.addEventListener("click", v3B);

    // v4
    if (vol4) {
        ctx.drawImage(v4Gr, w+30, 520, 10, 45);
        v4Gr.path = new Path2D();
        v4Gr.path.rect(w+30, 520, 10, 45);
    }
    if (!vol4) {
        ctx.drawImage(v4Gb, w+30, 520, 10, 45);
        v4Gb.path = new Path2D();
        v4Gb.path.rect(w+30, 520, 10, 45);
    }
        canvas.addEventListener("click", v4R);
        canvas.addEventListener("click", v4B);


    // v5
    if (vol5) {
        ctx.drawImage(v5Gr, w+60, 520, 10, 45);
        v5Gr.path = new Path2D();
        v5Gr.path.rect(w+60, 520, 10, 45);
    }
    if (!vol5) {
        ctx.drawImage(v5Gb, w+60, 520, 10, 45);
        v5Gb.path = new Path2D();
        v5Gb.path.rect(w+60, 520, 10, 45);
    }
        canvas.addEventListener("click", v5R);
        canvas.addEventListener("click", v5B);

    ctx.font = "700 40px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText("Max", w+125, 557);



}

function volFn2() {

ctx.font = "700 35px Arial";
ctx.fillStyle = "white";
ctx.fillText("Min", w-110, 47);

// v1
if (vol1) {
    ctx.drawImage(v1Gr, w-60, 17, 10, 35);
    v1Gr.path = new Path2D();
    v1Gr.path.rect(w-60, 20, 10, 45);
}
if (!vol1) {
    ctx.drawImage(v1Gb, w-60, 17, 10, 35);
    v1Gb.path = new Path2D();
    v1Gb.path.rect(w-60, 20, 10, 45);
}
    canvas.addEventListener("click", v1R);
    canvas.addEventListener("click", v1B);

// v2
if (vol2) {
    ctx.drawImage(v2Gr, w-30, 17, 10, 35);
    v2Gr.path = new Path2D();
    v2Gr.path.rect(w-30, 17, 10, 45);
}
if (!vol2) {
    ctx.drawImage(v2Gb, w-30, 17, 10, 35);
    v2Gb.path = new Path2D();
    v2Gb.path.rect(w-30, 17, 10, 45);
}
    canvas.addEventListener("click", v2R);
    canvas.addEventListener("click", v2B);

//v3
if (vol3) {
    ctx.drawImage(v3Gr, w, 17, 10, 35);
    v3Gr.path = new Path2D();
    v3Gr.path.rect(w, 17, 10, 35);
}
if (!vol3) {
    ctx.drawImage(v3Gb, w, 17, 10, 35);
    v3Gb.path = new Path2D();
    v3Gb.path.rect(w, 17, 10, 35);
}
    canvas.addEventListener("click", v3R);
    canvas.addEventListener("click", v3B);

// v4
if (vol4) {
    ctx.drawImage(v4Gr, w+30, 17, 10, 35);
    v4Gr.path = new Path2D();
    v4Gr.path.rect(w+30, 17, 10, 35);
}
if (!vol4) {
    ctx.drawImage(v4Gb, w+30, 17, 10, 35);
    v4Gb.path = new Path2D();
    v4Gb.path.rect(w+30, 17, 10, 35);
}
    canvas.addEventListener("click", v4R);
    canvas.addEventListener("click", v4B);


// v5
if (vol5) {
    ctx.drawImage(v5Gr, w+60, 17, 10, 35);
    v5Gr.path = new Path2D();
    v5Gr.path.rect(w+60, 17, 10, 45);
}
if (!vol5) {
    ctx.drawImage(v5Gb, w+60, 17, 10, 35);
    v5Gb.path = new Path2D();
    v5Gb.path.rect(w+60, 17, 10, 45);
}
    canvas.addEventListener("click", v5R);
    canvas.addEventListener("click", v5B);

ctx.font = "700 35px Arial";
ctx.fillStyle = "white";
ctx.fillText("Max", w+125, 47);


ctx.font = "700 15px Comic Sans MS";
ctx.fillText("Volume", w+5, 70);

}


function volumeSet() {
    if (vol1) {
        round2ef.volume = 0.1;
        finalTime.volume = 0.1;
        startScTx.volume = 0.1;
        startScMsc.volume = 0.1;
        dinoCon.volume = 0.1;
        billyCon.volume = 0.1;
        leoCon.volume = 0.1;
        dinoOhNo.volume = 0.1;
        billyOhNo.volume = 0.1;
        leoOhNo.volume = 0.1;
        Dinohit.volume = 0.1;
        Bearhit.volume = 0.1;
        Lionhit.volume = 0.1;
        fireWk.volume = 0.1;
        leoR2.volume = 0.1;
        rSpk2.volume = 0.1;
        enterKey.volume = 0.1;
        letsGo.volume = 0.1;
        ins.volume = 0.1;
        roarSd.volume = 0.1;
        billySd.volume = 0.1;
        lion_Sd.volume = 0.1;
        music.volume = 0.1;
    }
    if (vol2) {
        music.volume = 0.3;
        round2ef.volume = 0.3;
        finalTime.volume = 0.3;
        startScTx.volume = 0.3;
        startScMsc.volume = 0.3;
        dinoCon.volume = 0.3;
        billyCon.volume = 0.3;
        leoCon.volume = 0.3;
        dinoOhNo.volume = 0.3;
        billyOhNo.volume = 0.3;
        leoOhNo.volume = 0.3;
        Dinohit.volume = 0.3;
        Bearhit.volume = 0.3;
        Lionhit.volume = 0.3;
        fireWk.volume = 0.3;
        leoR2.volume = 0.3;
        rSpk2.volume = 0.3;
        enterKey.volume = 0.3;
        letsGo.volume = 0.3;
        ins.volume = 0.3;
        roarSd.volume = 0.3;
        billySd.volume = 0.3;
        lion_Sd.volume = 0.3;
    }
    if (vol3) {
        music.volume = 0.5;
        round2ef.volume = 0.5;
        finalTime.volume = 0.5;
        startScTx.volume = 0.5;
        startScMsc.volume = 0.5;
        dinoCon.volume = 0.5;
        billyCon.volume = 0.5;
        leoCon.volume = 0.5;
        dinoOhNo.volume = 0.5;
        billyOhNo.volume = 0.5;
        leoOhNo.volume = 0.5;
        Dinohit.volume = 0.5;
        Bearhit.volume = 0.5;
        Lionhit.volume = 0.5;
        fireWk.volume = 0.5;
        leoR2.volume = 0.5;
        rSpk2.volume = 0.5;
        enterKey.volume = 0.5;
        letsGo.volume = 0.5;
        ins.volume = 0.5;
        roarSd.volume = 0.5;
        billySd.volume = 0.5;
        lion_Sd.volume = 0.5;
    }
    if (vol4) {
        music.volume = 0.7;
        round2ef.volume = 0.7;
        finalTime.volume = 0.7;
        startScTx.volume = 0.7;
        startScMsc.volume = 0.7;
        dinoCon.volume = 0.7;
        billyCon.volume = 0.7;
        leoCon.volume = 0.7;
        dinoOhNo.volume = 0.7;
        billyOhNo.volume = 0.7;
        leoOhNo.volume = 0.7;
        Dinohit.volume = 0.7;
        Bearhit.volume = 0.7;
        Lionhit.volume = 0.7;
        fireWk.volume = 0.7;
        leoR2.volume = 0.7;
        rSpk2.volume = 0.7;
        enterKey.volume = 0.7;
        letsGo.volume = 0.7;
        ins.volume = 0.7;
        roarSd.volume = 0.7;
        billySd.volume = 0.7;
        lion_Sd.volume = 0.7;
    }
    if (vol5) {
        music.volume = 1;
        round2ef.volume = 1;
        finalTime.volume = 1;
        startScTx.volume = 1;
        startScMsc.volume = 1;
        dinoCon.volume = 1;
        billyCon.volume = 1;
        leoCon.volume = 1;
        dinoOhNo.volume = 1;
        billyOhNo.volume = 1;
        leoOhNo.volume = 1;
        Dinohit.volume = 1;
        Bearhit.volume = 1;
        Lionhit.volume = 1;
        fireWk.volume = 1;
        leoR2.volume = 1;
        rSpk2.volume = 1;
        enterKey.volume = 1;
        letsGo.volume = 1;
        ins.volume = 1;
        roarSd.volume = 1;
        billySd.volume = 1;
        lion_Sd.volume = 1;
    }
}


function reStart(e) {
    if (ctx.isPointInPath(reStartImg.path, e.offsetX, e.offsetY)) {
        
        startScTx.pause();
        startScTx.currentTime = 0;
        purp = true;
        ble = false;

        vol=true;
        
        round1=true;
        round2=false;
        round3=false;
        round4=false;
        dino.x = 0,
        dino.y = 500,
        end=true;
        tc=false;
        din=true;
        gameEnd=false;
        billyBear=false;
        lion=false;
        levels1=true;
        levels2=false;
        levels3=false;
        endOfLevel=false;
        canvas.removeEventListener("click", reStart);
    }
}

//////////////////////////////////////////////////////////////////////////////

















let timerID;
    let counter = 0;  

    let pressHoldDuration = 3000;
 
    addEventListener("mousedown", pressingDown, false);
    addEventListener("mouseup", notPressingDown, false);
    addEventListener("mouseleave", notPressingDown, false);

    function pressingDown(e) {
      // Start the timer
      requestAnimationFrame(timer);
      e.preventDefault();
    }

    function notPressingDown(e) {
      // Stop the timer
      cancelAnimationFrame(timerID);
      counter = 0;
      //air.pause();
      //air.currentTime = 0;
    }

    function timer() {
        //if (ballnOn) {
      console.log("Timer tick!");

      if (counter < pressHoldDuration) {
        timerID = requestAnimationFrame(timer);
        
        /*inBall.bWidth += 0.2;
        inBall.bHeight += 0.2;
        st.x += 0.2;
        shine.x -= 0.1;
        shine.y -= 0.1;*/
        //dino.y -= 0.5;
        //dino.moving = false;
        

        
        
        
        counter++;
      //}
    }//ballOn
    }






























/////////////////////////////////////////////////////////////////////////////////


function SharkDirUp(e) {
    if (ctx.isPointInPath(upDir.path, e.offsetX, e.offsetY) && dino.y > 220) {
        dino.y -= dino.speed;
        dino.dirY = 0;
        dino.moving = true;
        canvas.removeEventListener("click", SharkDirUp);
    }
}

function SharkDirDw(e) {
    if (ctx.isPointInPath(downDir.path, e.offsetX, e.offsetY) && dino.y < gameHt - dino.height) {
        dino.y += dino.speed;
        dino.dirY = 0;
        dino.moving = true;
        canvas.removeEventListener("click", SharkDirDw);
    }
}

function SharkDirR(e) {
    if (ctx.isPointInPath(rightDir.path, e.offsetX, e.offsetY) && dino.y < gameHt - dino.height) {
        dino.x += dino.speed;
        dino.dirY = 0;
        dino.moving = true;
        canvas.removeEventListener("click", SharkDirR);
    }
}

function SharkDirL(e) {
    if (ctx.isPointInPath(leftDir.path, e.offsetX, e.offsetY) && dino.x > 0) {
		dino.x -= dino.speed;
        dino.dirY = 1;
        dino.moving = true;
        canvas.removeEventListener("click", SharkDirL);
    }
}

// end of dino controls

// start of Billy Bear

function billyDirUp(e) {
    if (ctx.isPointInPath(upDir.path, e.offsetX, e.offsetY) && bear.y > 220) {
        bear.y -= bear.speed;
        bear.dirY = 0;
        bear.moving = true;
        canvas.removeEventListener("click", billyDirUp);
    }
}

function billyDirDw(e) {
    if (ctx.isPointInPath(downDir.path, e.offsetX, e.offsetY) && bear.y < gameHt - bear.height) {
        bear.y += bear.speed;
        bear.dirY = 0;
        bear.moving = true;
        canvas.removeEventListener("click", billyDirDw);
    }
}

function billyDirR(e) {
    if (ctx.isPointInPath(rightDir.path, e.offsetX, e.offsetY) && bear.y < gameHt - bear.height) {
        bear.x += bear.speed;
        bear.dirY = 0;
        bear.moving = true;
        canvas.removeEventListener("click", billyDirR);
    }
}

function billyDirL(e) {
    if (ctx.isPointInPath(leftDir.path, e.offsetX, e.offsetY) && bear.x > 0) {
		bear.x -= bear.speed;
        bear.dirY = 1;
        bear.moving = true;
        canvas.removeEventListener("click", billyDirL);
    }
}

// Start of lion

function lionDirUp(e) {
    if (ctx.isPointInPath(upDir.path, e.offsetX, e.offsetY) && lion2.y > 220) {
        lion2.y -= lion2.speed;
        lion2.dirY = 0;
        lion2.moving = true;
        canvas.removeEventListener("click", lionDirUp);
    }
}

function lionDirDw(e) {
    if (ctx.isPointInPath(downDir.path, e.offsetX, e.offsetY) && lion2.y < gameHt - lion2.height) {
        lion2.y += lion2.speed;
        lion2.dirY = 0;
        lion2.moving = true;
        canvas.removeEventListener("click", lionDirDw);
    }
}

function lionDirR(e) {
    if (ctx.isPointInPath(rightDir.path, e.offsetX, e.offsetY) && lion2.y < gameHt - lion2.height) {
        lion2.x += bear.speed;
        lion2.dirY = 0;
        lion2.moving = true;
        canvas.removeEventListener("click", lionDirR);
    }
}

function lionDirL(e) {
    if (ctx.isPointInPath(leftDir.path, e.offsetX, e.offsetY) && lion2.x > 0) {
		lion2.x -= lion2.speed;
        lion2.dirY = 1;
        lion2.moving = true;
        canvas.removeEventListener("click", lionDirL);
    }
}


function dirSk() {

    if (!paused) {

    ctx.drawImage(bgCir, 1030, 86, 170, 170);

    ctx.drawImage(upDir, 1090, 100, 50, 50);
    upDir.path = new Path2D();
    upDir.path.rect(1090, 100, 50, 50);
    if (sharkDir) {
        canvas.addEventListener("click", SharkDirUp);
    }
    if (bearDir) {
        canvas.addEventListener("click", billyDirUp);
    }
    if (lionDir) {
        canvas.addEventListener("click", lionDirUp);
    }

	ctx.drawImage(downDir, 1090, 200, 50, 50);
    downDir.path = new Path2D();
    downDir.path.rect(1090, 200, 50, 50);
    if (sharkDir) {
        canvas.addEventListener("click", SharkDirDw);
    }
    if (bearDir) {
        canvas.addEventListener("click", billyDirDw);
    }
    if (lionDir) {
        canvas.addEventListener("click", lionDirDw);
    }
	
	ctx.drawImage(leftDir, 1040, 150, 50, 50);
    leftDir.path = new Path2D();
    leftDir.path.rect(1040, 150, 50, 50);
    if (sharkDir) {
        canvas.addEventListener("click", SharkDirL);
    }
    if (bearDir) {
        canvas.addEventListener("click", billyDirL);
    }
    if (lionDir) {
        canvas.addEventListener("click", lionDirL);
    }
	
	ctx.drawImage(rightDir, 1140, 150, 50, 50);
    rightDir.path = new Path2D();
    rightDir.path.rect(1140, 150, 50, 50);
    if (sharkDir) {
        canvas.addEventListener("click", SharkDirR);
    }
    if (bearDir) {
        canvas.addEventListener("click", billyDirR);
    }
    if (lionDir) {
        canvas.addEventListener("click", lionDirR);
    }

} // p

}





// End of Splash Screen
function closeSplash(e) {
    if (!closeMenuBox && ctx.isPointInPath(firstScGo.path, e.offsetX, e.offsetY)) {
        vol = false;
        purp = false;
        ble = true;
        canvas.removeEventListener("click", closeSplash);
    }
}

// End of Ins Screen
function startGameSc(e) {
    if (!closeMenuBox && ctx.isPointInPath(secScGo.path, e.offsetX, e.offsetY)) {
        start=true;
        gameEnd=true;
        startScTx.pause();
        startScTx.currentTime = 0;
        purp = true;
        canvas.removeEventListener("click", startGameSc);
    }
}

// End of start first level
function level1go(e) {
    if (ctx.isPointInPath(dia1Go.path, e.offsetX, e.offsetY)) {
        textGo=true;
        startScMsc.pause();
        ins.pause();
        ins.currentTime = 0;
        sharkDir = true;
        dirArr = true;
        canvas.removeEventListener("click", level1go);
    }
}

// End of first level
function endfirstScClick(e) {
    if (ctx.isPointInPath(endfirstSc.path, e.offsetX, e.offsetY)) {
            sharkDir = false;
            bearDir = true;
            billyBear=true;
            bear.x = 0;
            bear.y = 450;
            end=true;
            tc=false;
            din=false;
            lion=false;
            levels1=false;
            levels2=true;
            levels3=false;
            randNumGen();
            endOfLevel=true;
      
            for (var i=0; i<noOfBones; i++) {
              var x = myNum(700);
              var y = Math.floor(Math.random()*1);
              bon1[i] = new bones1(x,y);
          }
      
          for (var i=0; i<noOfBanannas; i++) {
              var x = myNum(700);
              var y = Math.floor(Math.random()*1);
              ban1[i] = new banannas1(x,y);
         }
      
         for (var i=0; i<noOfMeats; i++) {
          var x = myNum(700);
          var y = Math.floor(Math.random()*1);
          meat1[i] = new meat10(x,y);
      }
        
        canvas.removeEventListener("click", endfirstScClick);
    }
}


// End of sec level
function endsecScClick(e) {
    if (ctx.isPointInPath(endsecSc.path, e.offsetX, e.offsetY)) {
        sharkDir = false;
        bearDir = false;
        lionDir = true;
        lion2.x = 0;
        lion2.y = 500;
        end=true;
        tc=false;
        billyBear=false;
        din=false;
        lion=true;
        levels1=false;
        levels2=false;
        levels3=true;
        randNumGen();
        endOfLevel=true;

        for (var i=0; i<noOfBones; i++) {
            var x = myNum(700);
            var y = Math.floor(Math.random()*1);
            bon1[i] = new bones1(x,y);
        }

        for (var i=0; i<noOfBanannas; i++) {
            var x = myNum(700);
            var y = Math.floor(Math.random()*1);
            ban1[i] = new banannas1(x,y);
       }

       for (var i=0; i<noOfMeats; i++) {
        var x = myNum(700);
        var y = Math.floor(Math.random()*1);
        meat1[i] = new meat10(x,y);
   }
        
        canvas.removeEventListener("click", endsecScClick);
    }
}

// End of thd level
function endthdScClick(e) {
    if (ctx.isPointInPath(endthdSc.path, e.offsetX, e.offsetY)) {

        /*sharkDir = false;
        bearDir = false;
        lionDir = true;*/
        
        lion_Sd.pause();
        leoR2.pause();
        leoR2.currentTime = 0;
        round1=false;
        round2=true;
        round3=false;
        textGo2=true;
        end=false;
        din=false;
        lion=false;
        levels1=false;
        levels2=true;
        levels3=false;
        endOfLevel=true;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(lev1, 0, 0, canvas.width, canvas.height);

        canvas.removeEventListener("click", endthdScClick);
    }
}


// start of forth level
function stforthScClick(e) {
    if (ctx.isPointInPath(stforthSc.path, e.offsetX, e.offsetY)) {

        sharkDir = true;;
        bearDir = false;
        lionDir = false;


        
            rSpk2.pause();
            rSpk2.currentTime = 0;
            round1=false;
            round2=true;
            round3=false;
            textGo=true;
            textGo2=false;
            startScMsc.pause();
            dino.x = 0;
            dino.y = 500;
            end=true;
            tc=false;
            din=true;
            billyBear=false;
            lion=false;
            levels1=true;
            levels2=false;
            levels3=false;
            randNumGen();
            endOfLevel=true;
            canvas.removeEventListener("click", stforthScClick);
        }
    }



function settings() {
    
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = "bold 15px Arial";
    ctx.drawImage(cog, 0, 0, 100, 100);
    cog.path = new Path2D();
    cog.path.rect(0, 0, 100, 100);
    //ctx.drawImage(cog, 10, 5);
    ctx.fillText("Settings", 50, 104);
    ctx.fillText("Click here", 50, 120);

    canvas.addEventListener("click", settingMouse);
    


    if (keys[83]) { //s
        togSet=false;
        togMenu=true;
        showMenu();
    }


}


function SpeechT(e) {
   if (togMenu) {
        if (ctx.isPointInPath(SpchtickBox1.path, e.offsetX, e.offsetY)) {
            speechOn = true;
            canvas.removeEventListener("click", SpeechT);
        }
  } // setMenu
}


function SpeechF(e) {
    if (togMenu) {
        if (ctx.isPointInPath(SpchtickBox2.path, e.offsetX, e.offsetY)) {
            speechOn = false;
            canvas.removeEventListener("click", SpeechF);
        }
   } // setMenu
}

// end of speech

// Music fuction
function MusicT(e) {
    if (togMenu) {
         if (ctx.isPointInPath(musTickBox1.path, e.offsetX, e.offsetY)) {
             musicOn = true;
             canvas.removeEventListener("click", MusicT);
         }
   } // setMenu
 }
 
 
 function MusicF(e) {
     if (togMenu) {
         if (ctx.isPointInPath(musTickBox2.path, e.offsetX, e.offsetY)) {
             musicOn = false;
             canvas.removeEventListener("click", MusicF);
         }
    } // setMenu
 }

// Picture fuction
function PicT(e) {
    if (togMenu) {
         if (ctx.isPointInPath(picTickBox1.path, e.offsetX, e.offsetY)) {
             picOn = true;
             canvas.removeEventListener("click", PicT);
         }
   } // setMenu
 }
 
 
 function PicF(e) {
     if (togMenu) {
         if (ctx.isPointInPath(picTickBox2.path, e.offsetX, e.offsetY)) {
             picOn = false;
             canvas.removeEventListener("click", PicF);
         }
    } // setMenu
 }


// volume
// v1
function v1R(e) {
        if (ctx.isPointInPath(v1Gr.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=false;
            vol3=false;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v1R);
        }
}

function v1B(e) {
        if (ctx.isPointInPath(v1Gb.path, e.offsetX, e.offsetY)) {
            vol1=true;
            vol2=false;
            vol3=false;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v1B);
        }
}

//v2
function v2R(e) {
        if (ctx.isPointInPath(v2Gr.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=false;
            vol3=false;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v2R);
        }
}

function v2B(e) {
        if (ctx.isPointInPath(v2Gb.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=true;
            vol3=false;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v2B);
        }
}

// v3
function v3R(e) {
        if (ctx.isPointInPath(v3Gr.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=false;
            vol3=false;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v3R);
        }
}

function v3B(e) {
        if (ctx.isPointInPath(v3Gb.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=false;
            vol3=true;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v3B);
        }
}

// v4
function v4R(e) {
        if (ctx.isPointInPath(v4Gr.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=false;
            vol3=false;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v3R);
        }
}

function v4B(e) {
        if (ctx.isPointInPath(v4Gb.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=false;
            vol3=false;
            vol4=true;
            vol5=false;
            canvas.removeEventListener("click", v4B);
        }
}

// v5
function v5R(e) {
        if (ctx.isPointInPath(v5Gr.path, e.offsetX, e.offsetY)) {
            vol1=false;
            vol2=false;
            vol3=false;
            vol4=false;
            vol5=false;
            canvas.removeEventListener("click", v5R);
        }
}

function v5B(e) {
        if (ctx.isPointInPath(v5Gb.path, e.offsetX, e.offsetY)) {   
            vol1=false;
            vol2=false;
            vol3=false;
            vol4=false;
            vol5=true;
            canvas.removeEventListener("click", v5B);
        }
}

// Close Show Menu
function closeShowMenu(e) {
    if (closeMenuBox && ctx.isPointInPath(settingExit.path, e.offsetX, e.offsetY)) {
        closeMenuBox=false;
        togSet=true;
        togMenu=false;
        paused=false;
        canvas.removeEventListener("click", closeShowMenu);
    }
}

function showMenu() {
    togMenu=true;
    togSet=false;
    ctx.fillStyle = "white";
    ctx.globalAlpha = 1.0; 
    ctx.fillRect(150, 10, 950, 710);

    ctx.fillStyle = "red";
    ctx.textAlign = "center"; 
    ctx.font = "700 80px Comic Sans MS";
    ctx.fillText("Settings", w, 90);

    ctx.font = "700 35px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";

    //Speech//
    
        ctx.drawImage(blueBgSetOp, w/2+130, 120, 350, 50);
        ctx.fillText("Speech", w, 158);

        ctx.font = "700 35px Arial";
        ctx.fillStyle = "black";

        ctx.drawImage(SpchtickBox1, 480, 180, 45, 45);
        SpchtickBox1.path = new Path2D();
        SpchtickBox1.path.rect(480, 180, 45, 45);

        ctx.fillText("On", 560, 220);
    
        if (speechOn) {
            ctx.drawImage(Tick, 482, 178, 50, 40);
        }
    
        ctx.drawImage(SpchtickBox2, 600, 180, 45, 45);
        SpchtickBox2.path = new Path2D();
        SpchtickBox2.path.rect(600, 180, 45, 45);
    
        if (!speechOn) {
            ctx.drawImage(Tick, 602, 178, 50, 40);
        }
    
        ctx.fillText("Off", 680, 220);
    
        canvas.addEventListener("click", SpeechT);
        canvas.addEventListener("click", SpeechF);





    /*------------------------------------------------------ */

    // Music //

    ctx.drawImage(blueBgSetOp, w/2+130, 230, 350, 50);
    ctx.fillStyle = "white";
        ctx.fillText("Music", w, 269);

        ctx.font = "700 35px Arial";
        ctx.fillStyle = "black";

        ctx.drawImage(musTickBox1, 480, 288, 45, 45);
        musTickBox1.path = new Path2D();
        musTickBox1.path.rect(480, 288, 45, 45);

        ctx.fillText("On", 560, 327);
    
        if (musicOn) {
            ctx.drawImage(Tick, 482, 286, 50, 40);
        }
    
        ctx.drawImage(musTickBox2, 600, 288, 45, 45);
        musTickBox2.path = new Path2D();
        musTickBox2.path.rect(600, 288, 45, 45);
    
        if (!musicOn) {
            ctx.drawImage(Tick, 601, 286, 50, 40);
        }
    
        ctx.fillText("Off", 680, 327);

        canvas.addEventListener("click", MusicT);
        canvas.addEventListener("click", MusicF);

    /*------------------------------------------------------ */

    ctx.fillStyle = "white";
    ctx.drawImage(blueBgSetOp, w/2+130, 338, 350, 50);
    ctx.fillText("Picture", w, 376);

    ctx.font = "700 35px Arial";
        ctx.fillStyle = "black";

        ctx.drawImage(picTickBox1, 480, 396, 45, 45);
        picTickBox1.path = new Path2D();
        picTickBox1.path.rect(480, 396, 45, 45);

        ctx.fillText("On", 560, 437);
    
        if (picOn) {
            ctx.drawImage(Tick, 481, 394, 50, 40);
        }
    
        ctx.drawImage(picTickBox2, 600, 396, 45, 45);
        picTickBox2.path = new Path2D();
        picTickBox2.path.rect(600, 396, 45, 45);
    
        if (!picOn) {
            ctx.drawImage(Tick, 601, 394, 50, 40);
        }
    
        ctx.fillText("Off", 680, 437);

        canvas.addEventListener("click", PicT);
        canvas.addEventListener("click", PicF);

        /*------------------------------------------------------ */

    ctx.fillStyle = "white";
    ctx.drawImage(blueBgSetOp, w/2+130, 450, 350, 50);
    ctx.fillText("Volume", w, 490);

        volumeFn();
        

    ctx.font = "700 40px Arial";
    ctx.fillStyle = "white";
    ctx.drawImage(settingExit, w/2+55, 580, 500, 80);
    settingExit.path = new Path2D();
    settingExit.path.rect(w/2+55, 580, 500, 80);
    ctx.font = "700 30px Comic Sans MS";
    ctx.fillText("Exit Settings", w, 635);
    if (closeMenuBox) {
        canvas.addEventListener("click", closeShowMenu);
    }
}



function charaters() {
    
    if(din) {
        if (musicOn) {
            music.play();
        }
        if (!musicOn) {
            music.pause();
            }
        if (boneOn) {
            if (!paused) {
        drawSprite(sprites, dino.width * dino.dirX, dino.height * dino.dirY, dino.width, dino.height, dino.x, dino.y, dino.width, dino.height);
        }
    }
    }

    if(billyBear) {
        if (musicOn) {
            music.play();
        }
        if (!musicOn) {
            music.pause();
        }
        if (bearOn) {
        drawSprite(bears, bear.width * bear.dirX, bear.height * bear.dirY, bear.width, bear.height, bear.x, bear.y, bear.width, bear.height);
    }
}

    if(lion) {
        if (musicOn) {
        music.play();
        }
        if (!musicOn) {
            music.pause();
        }
        if (meatOn) {
        drawSprite(li1, lion2.width * lion2.dirX, lion2.height * lion2.dirY, lion2.width, lion2.height, lion2.x, lion2.y, lion2.width, lion2.height);
        }
    }
};

// return to splash screen
function retToMain() {
    if (keys[13]) {
        round1=true;
        round2=false;
        round3=false;
        round4=false;
        dino.x = 0,
        dino.y = 500,
        end=true;
        tc=false;
        din=true;
        gameEnd=false;
        billyBear=false;
        lion=false;
        levels1=true;
        levels2=false;
        levels3=false;
        endOfLevel=false;
    }
}

function r2() {




        ctx.clearRect(0,0,canvas.width, canvas.height);

        if (picOn) {
        ctx.drawImage(lev1, 0, 0, canvas.width, canvas.height);
        }

        if (speechOn) {
        music.pause();
        rSpk2.play();
        }

        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.9;  
        ctx.fillRect(150, 40, 900, 650); 
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = "purple";
        ctx.textAlign = "center"; 
        ctx.font = "700 45px Comic Sans MS";
        ctx.fillText("Dino is looking for the treasure again!", w, 150);
        ctx.fillText("You have to dodge the bones now!", w, 250);
        ctx.fillText("Good Luck!", w, 360);
        ctx.fillStyle = "red";
        //ctx.fillText("Press the Enter Key to Play!", w, 500);

        ctx.drawImage(stforthSc, w/2-50, 430, 700, 230);
        stforthSc.path = new Path2D();
        stforthSc.path.rect(w/2-50, 480, 700, 230);
        canvas.addEventListener("click", stforthScClick);

        ctx.font = "700 28px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.fillText("Left Click here", w, 490);
        ctx.fillText("OR", w, 530);
        ctx.fillText("Press the Spacebar", w, 570);
        ctx.fillText("To play Round 2!", w, 620);
















        if (keys[13]) {
            rSpk2.pause();
            rSpk2.currentTime = 0;
            round1=false;
            round2=true;
            round3=false;
            textGo=true;
            textGo2=false;
            startScMsc.pause();
            dino.x = 0;
            dino.y = 500;
            end=true;
            tc=false;
            din=true;
            billyBear=false;
            lion=false;
            levels1=true;
            levels2=false;
            levels3=false;
            randNumGen();
            endOfLevel=true;
        }
    }

    function r3() {

        

        ctx.clearRect(0,0,canvas.width, canvas.height);

        if (picOn) {
        ctx.drawImage(lev1, 0, 0, canvas.width, canvas.height);
        }

        if (speechOn) {
        music.pause();
        letsGo.play();
        }

        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.6;  
        ctx.fillRect(150, 100, 900, 450); 
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = "purple";
        ctx.textAlign = "center"; 
        ctx.font = "bolder 100px Comic Sans MS";
        ctx.fillText("Let's Go!", w, 300);
        ctx.font = "bolder 30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.fillText("Enter Key to Play!", w, 500);

 
        if (keys[13]) {

            if (speechOn) {
            letsGo.pause();
            letsGo.currentTime = 0;
            }

            textGo=true;
            textGo2=false;
            textGo3=false;
            startScMsc.pause();
            dino.x = 0;
            dino.y = 500;
            end=true;
            tc=false;
            din=true;
            billyBear=false;
            lion=false;
            levels1=true;
            levels2=false;
            levels3=false;
            randNumGen();
            endOfLevel=true;
        }
    }


    function r4() {

        

        endOfLevel=false;
        fallDown=false;
        din=false;

        ctx.clearRect(0,0,canvas.width, canvas.height);

        if (picOn) {
        ctx.drawImage(lev1, 0, 0, canvas.width, canvas.height);
        }

        if (speechOn) {
        music.pause();
        finalTime.play();
        }

        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.6;  
        ctx.fillRect(150, 100, 900, 500); 
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = "purple";
        ctx.textAlign = "center";
        ctx.font = "45px Comic Sans MS";
        ctx.fillText("Dino is looking for the treasure -", w, 200);
        ctx.fillText("for the final time!", w, 250);
        ctx.fillText("Dodge the bones from left to right", w, 350);
        ctx.fillText("Good Luck!", w, 450);
        ctx.font = "bolder 30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.fillText("Enter Key to Play!", w, 550);

        if (keys[13]) {

            if (speechOn) {
                finalTime.pause();
                finalTime.currentTime = 0;
            }

            if (musicOn) {
                music.play();
            }

            fallDown=true;

            round1=false;
            round2=false;
            round3=true;

            textGo=true;
            textGo2=false;
            textGo3=false;
            textGo4=false;

            dino.x = 0;
            dino.y = 500;
            end=true;
            tc=false;
            din=true;
            billyBear=false;
            lion=false;
            levels1=true;
            levels2=false;
            levels3=false;
            randNumGen();
            endOfLevel=true;         

        }
    }

 



function playIns() {

    ////////////////
    dirArr = false;
    ////////////////


        leoCon.pause();

        if (picOn) {
        ctx.drawImage(lev1, 0, 0, canvas.width, canvas.height);
        }

        if (speechOn) {
        ins.play();
        }

        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.6;  
        ctx.fillRect(50, 20, 1100, 700); 
        ctx.globalAlpha = 1.0;

        ctx.drawImage(dia1Go, w/2+30, 500, 550, 200);
        dia1Go.path = new Path2D();
        dia1Go.path.rect(w/2+30, 550, 550, 200);
        canvas.addEventListener("click", level1go);
        
        ctx.fillStyle = "Red";
        ctx.textAlign = "center"; 
        ctx.font = "700 70px Comic Sans MS";
        ctx.fillText(" -To play -", w, 110);

        ctx.fillStyle = "purple";
        ctx.textAlign = "center"; 
        ctx.font = "700 40px Comic Sans MS";
        ctx.fillText("Use the Mouse to click on the arrows", w-30, 190);
        ctx.drawImage(arPic, 950, 125, 100, 100);
        ctx.fillStyle = "red";
        ctx.fillText("OR", w, 270);
        ctx.fillStyle = "purple";
        ctx.fillText("Use the keyboard to press on the arrow keys", w-65, 340);
        ctx.drawImage(arrKeys, 1000, 295, 130, 80);

        ctx.fillText("Good Luck!", w, 440);
        ctx.fillStyle = "white";
        ctx.font = "800 30px Comic Sans MS";
        ctx.fillText("Left Click here to play", w, 560);
        ctx.fillText("Or Press the Spacebar", w, 610);
        //ctx.fillText("Or Use your switch", w, 660);

        if (keys[32]) {
            textGo=true;
            startScMsc.pause();
            ins.pause();
            ins.currentTime = 0;
        }
}



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Bones
const bon = new Image();
bon.src = "bone.png";




var noOfBones = 8;
var bon1 = [];


for (var i=0; i<noOfBones; i++) {
    var x = myNum(700);
    var y = Math.floor(Math.random()*1);
    bon1[i] = new bones1(x,y);
}
              
function bones1(x,y) {
    this.x = x;
    this.y = y;


    this.fall = function() {

        if (fallDown) {

        var dir = Math.floor(Math.random()*3);
        if (dir==1) {
            this.x = this.x-10;
        }

        if (dir==2) {
            this.x = this.x+10;
        }

        this.y = this.y+8;
        if (this.y > canvas.height) {
            this.y = 0;
        }

        }//end falldown

        if (!fallDown){
        return;
        }
    }

    //////////////////////////////////////////

    var dx=15;

    this.right = function() {

        if (fallDown) {
       
            if (this.x > canvas.width) {
                dx =- dx;
            }

            this.x += dx;
            
            this.y = this.y+30;
            if (this.y > canvas.height) {
                this.y = 0;
            }
        }

        if (!fallDown){
        return;
        }
    }
    

////////////////////////////////////////////////////////////

    this.show = function() {
        dirArr = true;
        if (dino.x <= (this.x+80) && this.x <= (dino.x+80) && dino.y <= (this.y+80) && this.y <= (dino.y+80)) {  
            dirArr = false;

            if (musicOn) {
            music.pause();
            }

            if (speechOn) {
            dinoOhNo.play();
            Dinohit.play();
            }

            endOfLevel=false;
            fallDown=false;
            boneOn=false;
            ctx.fillStyle = "white";
            ctx.globalAlpha = 0.6; 
            ctx.fillRect(100, 90, 1000, 600);
            ctx.globalAlpha = 1.0; 
            ctx.fillStyle = "red";
            ctx.textAlign = "center"; 
            ctx.font = "140px Comic Sans MS";
            ctx.fillText("Oh No!", w, 210);
            ctx.font = "60px Comic Sans MS";
            ctx.fillStyle = "blue";
            ctx.fillText("A bone has hit Dino!", w, 300);
            ctx.fillText("He's gone to have a chew on it!", w, 400);
            ctx.font = "50px Comic Sans MS";
            ctx.fillStyle = "purple";
            ctx.fillText("Back you go!", w, 550);
            ctx.fillText("Press the spacebar", w, 650);
            
            

            if (keys[32]) { 

                if (speechOn) {
                dinoOhNo.pause();
                Dinohit.pause();
                dinoOhNo.currentTime = 0;
                Dinohit.currentTime = 0;
                }

                if (musicOn) {
                    music.play();
                }

                boneOn=true;
                fallDown = true;

                for (var i=0; i<noOfBones; i++) {
                    var x = myNum(700);
                    var y = Math.floor(Math.random()*1);
                    bon1[i] = new bones1(x,y);
                }
    
                for (var i=0; i<noOfBanannas; i++) {
                    var x = myNum(700);
                    var y = Math.floor(Math.random()*1);
                    ban1[i] = new banannas1(x,y);
               }
    
               for (var i=0; i<noOfMeats; i++) {
                var x = myNum(700);
                var y = Math.floor(Math.random()*1);
                meat1[i] = new meat10(x,y);
           }
                


                
            lion_Sd.pause();
            leoCon.pause();
            textGo3=true;
            end=false;
            endOfLevel=true;
            din=false;
            lion=false;
            levels1=false;
            levels2=true;
            levels3=false;
        }

    



           } else {

            ctx.drawImage(bon, this.x, this.y, 90, 90);
            
            }
        }

    }


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// Banannas
const ban = new Image();
ban.src = "bananna.png";

var noOfBanannas = 12;
var ban1 = [];


        
for (var i=0; i<noOfBanannas; i++) {
     var x = myNum(700);
     var y = Math.floor(Math.random()*1);
     ban1[i] = new banannas1(x,y);
}
              
function banannas1(x,y) {
    this.x = x;
    this.y = y;


    this.fall = function() {
        if (fallDown) {
        var dir = Math.floor(Math.random()*3);
        if (dir==1) {
            this.x = this.x-10;
        }

        if (dir==2) {
            this.x = this.x+10;
        }

        this.y = this.y+12;
        if (this.y > canvas.height) {
            this.y = 0;
        }
        
        } //end falldown

        if (!fallDown){
        return;
        }
    } // end of fall function

    /////////////////////////////////////////////////////////

    var dx=15;

    this.right = function() {

        if (fallDown) {
       
            if (this.x > canvas.width) {
                dx =- dx;
            }

            this.x += dx;
            
            this.y = this.y+30;
            if (this.y > canvas.height) {
                this.y = 0;
            }
        }

        if (!fallDown){
        return;
        }
    }

   ///////////////////////////////////////////////////////////

    this.show = function() {
        if (bear.x <= (this.x+80) && this.x <= (bear.x+80) && bear.y <= (this.y+80) && this.y <= (bear.y+80)) { 


            if (musicOn) {
                music.pause();
                }
    
                if (speechOn) {
                    billyOhNo.play();
                    Bearhit.play();
                    }



            endOfLevel=false;
            fallDown=false;
            bearOn=false;
            ctx.fillStyle = "white";
            ctx.globalAlpha = 0.6; 
            ctx.fillRect(100, 90, 1000, 600);
            ctx.globalAlpha = 1.0; 
            ctx.fillStyle = "red";
            ctx.textAlign = "center"; 
            ctx.font = "140px Comic Sans MS";
            ctx.fillText("Oh No!", w, 210);
            ctx.font = "60px Comic Sans MS";
            ctx.fillStyle = "blue";
            ctx.fillText("A banana has hit Billy Bear!", w, 300);
            ctx.fillText("He's got to have a lie down!", w, 400);
            ctx.font = "50px Comic Sans MS";
            ctx.fillStyle = "purple";
            ctx.fillText("Back you go!", w, 550);
            ctx.fillText("Press the spacebar", w, 650);

            if (keys[32]) {


                if (speechOn) {
                    billyOhNo.pause();
                    Bearhit.pause();
                    billyOhNo.currentTime = 0;
                    Bearhit.currentTime = 0;
                    }
    
                    if (musicOn) {
                        music.play();
                    }    


            textGo3=true;
            end=false;
            endOfLevel=true;
            din=false;
            lion=false;
            levels1=false;
            levels2=true;
            levels3=false;
            endOfLevel=true;

            for (var i=0; i<noOfBones; i++) {
                var x = myNum(700);
                var y = Math.floor(Math.random()*1);
                bon1[i] = new bones1(x,y);
            }

            for (var i=0; i<noOfBanannas; i++) {
                var x = myNum(700);
                var y = Math.floor(Math.random()*1);
                ban1[i] = new banannas1(x,y);
           }

           for (var i=0; i<noOfMeats; i++) {
            var x = myNum(700);
            var y = Math.floor(Math.random()*1);
            meat1[i] = new meat10(x,y);
       }

                end=false;
                fallDown = true;
                din=false;
                boneOn=true;        
                endOfLevel=true;   
                
                bearOn=true;

                tc=false;
    
                billyBear=false;
                
                }

           } else {

            ctx.drawImage(ban, this.x, this.y, 90, 90);
            }
        }

    }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Meat
const meat = new Image();
meat.src = "meat.png";

var noOfMeats = 15;
var meat1 = [];


        
for (var i=0; i<noOfMeats; i++) {
     var x = myNum(700);
     var y = Math.floor(Math.random()*1);
     meat1[i] = new meat10(x,y);
}
              
function meat10(x,y) {
    this.x = x;
    this.y = y;


    this.fall = function() {
        if (fallDown) {
        var dir = Math.floor(Math.random()*3);
        if (dir==1) {
            this.x = this.x-10;
        }

        if (dir==2) {
            this.x = this.x+10;
        }

        this.y = this.y+20;
        if (this.y > canvas.height) {
            this.y = 0;
        }

        } // end fallDown

        if (!fallDown){
        return;
        }
} // end of fall function

////////////////////////////////////////////////////////////

var dx=15;

this.right = function() {

    if (fallDown) {
    
        if (this.x > canvas.width) {
            dx =- dx;
        }

        this.x += dx;
        
        this.y = this.y+30;
        if (this.y > canvas.height) {
            this.y = 0;
        }
    }

    if (!fallDown){
    return;
    }
}

/////////////////////////////////////////////////////////////////



    this.show = function() {
        if (lion2.x <= (this.x+80) && this.x <= (lion2.x+80) && lion2.y <= (this.y+80) && this.y <= (lion2.y+80)) { 

            if (musicOn) {
                music.pause();
                }
    
                if (speechOn) {
                    leoOhNo.play();
                    Lionhit.play();
                    }



            endOfLevel=false;
            fallDown=false;
            meatOn=false;     
            ctx.fillStyle = "white";
            ctx.globalAlpha = 0.6; 
            ctx.fillRect(100, 90, 1000, 600);
            ctx.globalAlpha = 1.0; 
            ctx.fillStyle = "red";
            ctx.textAlign = "center"; 
            ctx.font = "140px Comic Sans MS";
            ctx.fillText("Oh No!", w, 210);
            ctx.font = "60px Comic Sans MS";
            ctx.fillStyle = "blue";
            ctx.fillText("A chop has hit Leo!", w, 300);
            ctx.fillText("He's gone to eat it!", w, 400);
            ctx.font = "50px Comic Sans MS";
            ctx.fillStyle = "purple";
            ctx.fillText("Back you go!", w, 550);
            ctx.fillText("Press the spacebar", w, 650);
          

            if (keys[32]) { 

                
                

                if (speechOn) {
                    leoOhNo.pause();
                    Lionhit.pause();
                    leoOhNo.currentTime = 0;
                    Lionhit.currentTime = 0;
                    }
    
                    if (musicOn) {
                        music.play();
                    }  

                meatOn=true;
                endOfLevel=true;   
                boneOn=true;
                dino.x = 0,
                dino.y = 500,
                fallDown = true;

                for (var i=0; i<noOfBones; i++) {
                    var x = myNum(700);
                    var y = Math.floor(Math.random()*1);
                    bon1[i] = new bones1(x,y);
                }
    
                for (var i=0; i<noOfBanannas; i++) {
                    var x = myNum(700);
                    var y = Math.floor(Math.random()*1);
                    ban1[i] = new banannas1(x,y);
               }
    
               for (var i=0; i<noOfMeats; i++) {
                var x = myNum(700);
                var y = Math.floor(Math.random()*1);
                meat1[i] = new meat10(x,y);
           }

                lion_Sd.pause();
                leoCon.pause();
                textGo3=true;
                end=false;
                endOfLevel=true;
                din=false;
                lion=false;
                levels1=false;
                levels2=true;
                levels3=false;
                endOfLevel=true;
                
            }
                    

           } else {

            ctx.drawImage(meat, this.x, this.y, 90, 90);
            }
        }

    }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// level 1
function level1() {
    if (!paused) {

     // 20/7/24




      // game instructions
      ctx.fillStyle = gameInsCol;
      ctx.fillRect(0, 0, canvas.width, 80);
      ctx.font = "40px Comic Sans MS";
      ctx.fillStyle = "white";
      //ctx.fillText("Treasure Game", w, 40);


/////////////////////////////////////////////////////////



      
          volFn2();
    



      ///////////////////////////////////////////////

      //ctx.fillText("With Dino and Friends!", w, 70);

    ctx.drawImage(cogGame, 30, 0, 65, 65);
    cogGame.path = new Path2D();
    cogGame.path.rect(30, 0, 65, 65);
    ctx.fillText("Settings", 65, 70);

    canvas.addEventListener("click", settingMouseGame);
    


    if (keys[83]) { //s
        togSet=false;
        togMenu=true;
        showMenu();
    }

      ctx.drawImage(reStartImg, 1082, 10, 40, 40);
      reStartImg.path = new Path2D();
      reStartImg.path.rect(1082, 10, 65, 65);
      canvas.addEventListener("click", reStart);
      ctx.fillText("Restart", 1100, 70);


      ctx.fillStyle = gameInsCol;
      ctx.fillRect(0, canvas.height - gameInsHt, gameInsWd, gameInsHt);
      ctx.font = "25px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.fillText("Directions: click on the black arrows or use the keyboard arrow keys to move around", w, 725)
}//p
}

// level 2
function level2() {
  if (keys[32]){
      billyBear=true;
      bear.x = 0;
      bear.y = 500;
      end=true;
      tc=false;
      din=false;
      lion=false;
      levels1=false;
      levels2=true;
      levels3=false;
      randNumGen();
      endOfLevel=true;

      for (var i=0; i<noOfBones; i++) {
        var x = myNum(700);
        var y = Math.floor(Math.random()*1);
        bon1[i] = new bones1(x,y);
    }

    for (var i=0; i<noOfBanannas; i++) {
        var x = myNum(700);
        var y = Math.floor(Math.random()*1);
        ban1[i] = new banannas1(x,y);
   }

   for (var i=0; i<noOfMeats; i++) {
    var x = myNum(700);
    var y = Math.floor(Math.random()*1);
    meat1[i] = new meat10(x,y);
}
  }
}

// level 3
function level3() {
    if (keys[32]){
        lion2.x = 0;
        lion2.y = 500;
        end=true;
        tc=false;
        billyBear=false;
        din=false;
        lion=true;
        levels1=false;
        levels2=false;
        levels3=true;
        randNumGen();
        endOfLevel=true;

        for (var i=0; i<noOfBones; i++) {
            var x = myNum(700);
            var y = Math.floor(Math.random()*1);
            bon1[i] = new bones1(x,y);
        }

        for (var i=0; i<noOfBanannas; i++) {
            var x = myNum(700);
            var y = Math.floor(Math.random()*1);
            ban1[i] = new banannas1(x,y);
       }

       for (var i=0; i<noOfMeats; i++) {
        var x = myNum(700);
        var y = Math.floor(Math.random()*1);
        meat1[i] = new meat10(x,y);
   }

    }
  }

function myNum(n) {
    return Math.floor(Math.random()*n + 300);
};

//start screen
const startImage = new Image();
startImage.src = "levels/firstScreen.png";

//Level 1 background
const lev1 = new Image();
lev1.src = "levels/lev1.png";

//Level 2 background
const lev2 = new Image();
lev2.src = "levels/lev2.jpg";

//Level 3 background
const lev3 = new Image();
lev3.src = "levels/lev3.png";

//dino
const sprites = new Image();
sprites.src = "sprites/din-fin1.png";

//bear
const bears = new Image();
bears.src = "sprites/bears-sheet.png";

//lion
const li1 = new Image();
li1.src = "sprites/lennyLion.png";

// Settings
const cog = new Image();
cog.src = "cog.png";

const cogGame = new Image();
cogGame.src = "cog.png";


const cog1 = new Image();
cog1.src = "cog.png";










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

// Mouse Controls
/*window.addEventListener("keydown", function(e){
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
});*/


function movePlayer() {

    if (endOfLevel) {

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


   if (keys[40] && dino.y < gameHt - dino.height) {
        dino.y += dino.speed;
        dino.dirY = 0;
        dino.moving = true;
    }
    
    if (keys[39] && dino.x < canvas.width - dino.width) {
        dino.x += dino.speed;
        dino.dirY = 0;
        dino.moving = true;
    }

} // end of endOfLevel

  if (billyBear) {

    if (endOfLevel) {

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

   
   if (keys[40] && bear.y < gameHt - bear.height) {
        bear.y += bear.speed;
        bear.dirY = 0;
        bear.moving = true;
    }

    
    if (keys[39] && bear.x < canvas.width - bear.width) {
        bear.x += bear.speed;
        bear.dirY = 0;
        bear.moving = true;
    }

    //////////////////////////////////////

   } // endOfLev

  } // end of billyBear


  if (lion) {

    if (endOfLevel) {

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

   
   if (keys[40] && lion2.y < gameHt - lion2.height) {
        lion2.y += lion2.speed;
        lion2.dirY = 0;
        lion2.moving = true;
    }

    
    if (keys[39] && lion2.x < canvas.width - lion2.width) {
        lion2.x += lion2.speed;
        lion2.dirY = 0;
        lion2.moving = true;
    }

    /////////////////////

   } // endOfLev

  } // end of lion

} //end of movePlayer()




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
        tresureChest.dirChestX = myNum(700);
        tresureChest.dirChestY = myNum(350) - gameInsHt-40;
        tc=true;
    }
}

function ani() {

    /////////////////////////////////7.7.24//////////////////////////////////

    volumeSet();

    ////////////////////////////////////////////////////////////////////////

    
    requestAnimationFrame(ani);



    now = Date.now();
    elapsed = now - then;
    if (elapsed > fpsInterval) {
        then = now - (elapsed % fpsInterval);
   
    ctx.clearRect(0,0,canvas.width, canvas.height);

    

    if (!start || !gameEnd) {

        ctx.drawImage(startImage, 0, 0, canvas.width, canvas.height);   

        if (togSet) {
            settings();
        }

        if (togMenu) {
            showMenu();
        }

        if (togSet && !togMenu) {
        
        ctx.font = "700 120px Comic Sans MS";
        if (purp) {
            ctx.fillStyle = "purple";
        }
        if (ble) {
            ctx.fillStyle = "#00008B";
        }
        ctx.fillText("Treasure Game", w, 250);
        ctx.font = "700 70px Comic Sans MS";
        ctx.fillStyle = "white";
        ctx.fillText("With Dino and Friends!", w, 350);
        }

        if (togSet) {
           volFn2();
        }

        ctx.font = "600 28px Comic Sans MS";

        leoCon.pause();
        startScMsc.pause();
        startScTx.pause();

        ctx.fillStyle = "white";
        ctx.textAlign = "center";

        if (vol) {
        
            if (togSet && !togMenu) {
                ctx.drawImage(firstScGo, w/2+40, 465, 530, 250);
                firstScGo.path = new Path2D();
                firstScGo.path.rect(w/2+40, 465, 530, 250);

                if (!closeMenuBox) {
                    canvas.addEventListener("click", closeSplash);
                }

                ctx.fillText("Click here to Start!", w, 550); 
                ctx.fillText("OR", w, 600);
                ctx.fillText("Press the Spacebar", w, 650);

                
            }

        if (keys[32]) {
           vol = false; 
        }

        

        

        } else {



        

       
        if (togSet && !togMenu) {
                ctx.drawImage(secScGo, w/2+40, 465, 530, 250);
                secScGo.path = new Path2D();
                secScGo.path.rect(w/2+40, 465, 530, 250);

                if (!closeMenuBox) {
                    canvas.addEventListener("click", startGameSc);
                }

                ctx.fillText("Click Here to meet Dino!", w, 540);
                ctx.fillText("Or Press the Enter Key", w, 605);

        }

        
        

        round1=true;
        round2=false;
        round3=false;

        

        leoCon.pause();
        leoCon.currentTime = 0;


        if (musicOn) {
        startScMsc.play();
        //startScMsc.volume = 0.1;
        }
        if (speechOn) {
        startScTx.play();
        //startScTx.volume = 1;
        }

        


        if (keys[13]) {
            start=true;
            gameEnd=true;
            startScTx.pause();
            startScTx.currentTime = 0;
        }

            
    }


          
    } else { 

        ///////////////////////////////////
        if (paused) {
            if (togMenu) {
                showMenu();
             }// paused
    } 
    /////////////////////////////////////
        

        
    if (!paused) {

    if (levels1) {
        if (picOn) {
        ctx.drawImage(lev1, 0, 0, canvas.width, canvas.height);
        }    
    }
    if (levels2) {
        if (picOn) {
        ctx.drawImage(lev2, 0, 0, canvas.width, canvas.height);
        }
    }
    if (levels3) {
        if (picOn) {
        ctx.drawImage(lev3, 0, 0, canvas.width, canvas.height);
        }

    }// not paused
   

    }

    if (textGo2) {
        r2();
    }

    if (textGo3) {
        r3();
    }




    if (textGo4) {
        r4();
    }



    // arrow directions
    if (dirArr) {
        dirSk();
    }

    

    


    if (!textGo) {

    playIns();

    }

    if (textGo) {

    //} else {
    
    if (end) { 

        
            level1();
            charaters();
        

    }//end

//////}//p  

    randNumGen();







   if (din && !paused) {
    startScMsc.pause();
   if (dino.x <= (tresureChest.dirChestX+140) && tresureChest.dirChestX <= (dino.x+140) && dino.y <= (tresureChest.dirChestY+140) && tresureChest.dirChestY <= (dino.y+140)) {
        ctx.drawImage(sprites,tresureChest.chestX,(tresureChest.chestY+90),240,300,tresureChest.dirChestX,(tresureChest.dirChestY-60),220,320);
      
        music.pause();


        if (speechOn) {
        roarSd.play();
        //roarSd.volume = 0.5;
        dinoCon.play();
        }


        dirArr = false;


        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.6; 
        ctx.fillRect(50, 30, 1100, 650);
        ctx.globalAlpha = 1.0; 
        ctx.fillStyle = "red";
        ctx.textAlign = "center"; 
        ctx.font = "140px Comic Sans MS";
        ctx.fillText("Well Done!", w, 200);
        ctx.fillStyle = "blue";
        ctx.font = "80px Comic Sans MS";
        ctx.fillText("You and Dino have", w, 310);
        ctx.fillText("found the treasure!", w, 390);
        
        endOfLevel=false;

        ////////////////////////////////////////////////////////////////////////////////


                ctx.drawImage(endfirstSc, w/2-50, 430, 700, 230);
                endfirstSc.path = new Path2D();
                endfirstSc.path.rect(w/2-50, 430, 700, 230);
                canvas.addEventListener("click", endfirstScClick);

                ctx.font = "700 28px Comic Sans MS";
                ctx.fillStyle = "white";
                ctx.fillText("Left Click here", w, 480);
                ctx.fillText("OR", w, 530);
                ctx.fillText("Press the Spacebar or use your switch", w, 570);
                ctx.fillText("To help Billy Bear find the Treasure Chest!", w, 620);










        end = false;

        level2();
        
    } else {
       ctx.drawImage(sprites,tresureChest.chestX,tresureChest.chestY,200,100,tresureChest.dirChestX,tresureChest.dirChestY,180,120);


    // Bones! ------------------------------------------------- //

    if (round2) {
     for (var i=0; i<noOfBones; i++) {
        bon1[i].show();
        bon1[i].fall();
    }
}

if (round3) {
    for (var i=0; i<noOfBones; i++) {
       bon1[i].show();
       bon1[i].right();
   }

}

    ///////////////////////////////////////////////////////////////////


    }
    
}
    if (billyBear) {
        dirArr = true;
        dinoCon.pause();
        dinoCon.currentTime = 0;
    if (bear.x <= (tresureChest.dirChestX+140) && tresureChest.dirChestX <= (bear.x+140) && bear.y <= (tresureChest.dirChestY+140) && tresureChest.dirChestY <= (bear.y+140)) {
        ctx.drawImage(sprites,tresureChest.chestX,(tresureChest.chestY+90),240,300,tresureChest.dirChestX,(tresureChest.dirChestY-60),220,320);

        music.pause();

        if (speechOn) {
        billySd.play();
        //billySd.volume = 0.3;
        billyCon.play();
        }

        dirArr = false;

        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.9; 
        ctx.fillRect(100, 20, 1000, 700);
        ctx.globalAlpha = 1.0; 
        ctx.fillStyle = "red";
        ctx.textAlign = "center"; 
        ctx.font = "140px Comic Sans MS";
        ctx.fillText("Well Done!", w, 150);
        ctx.font = "60px Comic Sans MS";
        ctx.fillStyle = "blue";
        ctx.fillText("You and Billy Bear have", w, 240);
        ctx.fillText("found the treasure!", w, 310);
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "purple";
        ctx.fillText("Press the Spacebar to help Leo the Lion", w, 380);
        ctx.fillText("find the Treasure Chest!", w, 450);

                ctx.drawImage(endsecSc, w/2-50, 480, 700, 230);
                endsecSc.path = new Path2D();
                endsecSc.path.rect(w/2-50, 480, 700, 230);
                canvas.addEventListener("click", endsecScClick);

                ctx.font = "700 28px Comic Sans MS";
                ctx.fillStyle = "white";
                ctx.fillText("Left Click here", w, 530);
                ctx.fillText("OR", w, 570);
                ctx.fillText("Press the Spacebar", w, 610);
                ctx.fillText("To help Leo the Lion find the Treasure Chest!", w, 660);


        endOfLevel=false;

        end = false;

        level3();


} else {
    ctx.drawImage(sprites,tresureChest.chestX,tresureChest.chestY,200,100,tresureChest.dirChestX,tresureChest.dirChestY,180,120);

     // Banannas! ------------------------------------------------- //
     if (round2) {
     for (var i=0; i<noOfBanannas; i++) {
         ban1[i].show();
         ban1[i].fall();
     }
    }

    if (round3) {
        for (var i=0; i<noOfBanannas; i++) {
           ban1[i].show();
           ban1[i].right();
    
       }
    }

     ///////////////////////////////////////////////////////////////////

 }

}

if (lion) {
    dirArr = true;
    billyCon.pause();
    billyCon.currentTime = 0;
    if (lion2.x <= (tresureChest.dirChestX+140) && tresureChest.dirChestX <= (lion2.x+140) && lion2.y <= (tresureChest.dirChestY+140) && tresureChest.dirChestY <= (lion2.y+140)) {
        ctx.drawImage(sprites,tresureChest.chestX,(tresureChest.chestY+90),240,300,tresureChest.dirChestX,(tresureChest.dirChestY-60),220,320);
        dirArr = false;
        music.pause();

        if (speechOn) {

            if (round1) {
                leoR2.play();
            }

            if (round2) {
                round2ef.play();
            }

            if (round3) {
                leoCon.play();
            }

        lion_Sd.play();
        //lion_Sd.volume = 0.2;

        if (round3) {
            lion_Sd.pause();
            fireWk.play();
        }
        
        }


        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.9; 
        ctx.fillRect(120, 40, 950, 640);
        ctx.globalAlpha = 1.0; 
        ctx.fillStyle = "red";
        ctx.textAlign = "center"; 
        ctx.font = "140px Comic Sans MS";
        ctx.fillText("Well Done!", w, 180);
        ctx.font = "60px Comic Sans MS";
        ctx.fillStyle = "blue";
        ctx.fillText("You and Leo the Lion have", w, 290);
        ctx.fillText("found the treasure!", w, 360);
        ctx.font = "40px Comic Sans MS";
        //ctx.fillStyle = "red";
        // round 2

                ctx.drawImage(endthdSc, w/2-50, 430, 700, 230);
                endthdSc.path = new Path2D();
                endthdSc.path.rect(w/2-50, 480, 700, 230);
                canvas.addEventListener("click", endthdScClick);

                ctx.font = "700 28px Comic Sans MS";
                ctx.fillStyle = "white";
                ctx.fillText("Left Click here", w, 490);
                ctx.fillText("OR", w, 530);
                ctx.fillText("Press the Spacebar", w, 570);
                ctx.fillText("For Round 2!", w, 620);


        if (round3) {
            // fireworks
            const max_fireworks = 1,
            max_sparks = 2;
            let fireworks = [];
           
          for (let i = 0; i < max_fireworks; i++) {
            let firework = {
              sparks: []
            };
            for (let n = 0; n < max_sparks; n++) {
              let spark = {
                vx: Math.random() * 5 + .5,
                vy: Math.random() * 5 + .5,
                weight: Math.random() * .3 + .03,
                red: Math.floor(Math.random() * 2),
                green: Math.floor(Math.random() * 2),
                blue: Math.floor(Math.random() * 2)
              };
              if (Math.random() > .5) spark.vx = -spark.vx;
              if (Math.random() > .5) spark.vy = -spark.vy;
              firework.sparks.push(spark);
            }
            fireworks.push(firework);
            resetFirework(firework);
          }

          
          window.requestAnimationFrame(explode);
          
           
          function resetFirework(firework) {
            firework.x = Math.floor(Math.random() * canvas.width);
            firework.y = canvas.height;
            firework.age = 0;
            firework.phase = 'fly';
          }
           
          function explode() {
            fireworks.forEach((firework,index) => {
              if (firework.phase == 'explode') {
                  firework.sparks.forEach((spark) => {
                  for (let i = 0; i < 10; i++) {
                    let trailAge = firework.age + i;
                    let x = firework.x + spark.vx * trailAge;
                    let y = firework.y + spark.vy * trailAge + spark.weight * trailAge * spark.weight * trailAge;
                    let fade = i * 20 - firework.age * 2;
                    let r = Math.floor(spark.red * fade);
                    let g = Math.floor(spark.green * fade);
                    let b = Math.floor(spark.blue * fade);
                    ctx.beginPath();
                    ctx.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',1)';
                    ctx.rect(x, y, 4, 4);
                    ctx.fill();
                  }
                });
                firework.age++;
                if (firework.age > 100 && Math.random() < .05) {
                if (fireworks<2) {
                  resetFirework(firework);
                   }
                }
              } else {
                firework.y = firework.y - 10;
                for (let spark = 0; spark < 15; spark++) {
                  ctx.beginPath();
                  ctx.fillStyle = 'rgba(' + index * 50 + ',' + spark * 17 + ',0,1)';
                  ctx.rect(firework.x + Math.random() * spark - spark / 2, firework.y + spark * 4, 4, 4);
                  ctx.fill();
                }
                if (Math.random() < .001 || firework.y < 200) firework.phase = 'explode';
              }
            });

            window.requestAnimationFrame(explode);

        } // end of fireworks

       } // end round 3
        
        /*if (round1) {
            ctx.fillText("Let's go to Round 2!", w, 450);
        }*/

        if (round2) {
            ctx.fillText("Let's go to the final round!", w, 500);
        }

        if (round3) {
            ctx.fillText("Thanks for Playing!", w, 500);
        }

        ctx.fillStyle = "purple";
        
        /*if (round1) {
            ctx.fillText("Press the Spacebar to Continue!", w, 600);
            }*/

        if (round2) {
            ctx.fillText("Press the Enter Key to continue!", w, 600);
            }

        if (round3) {
            ctx.fillText("Press the Enter Key to Play Again!", w, 600);
            }  

        endOfLevel=false;
    
        end = false;

        
        
if (round1) {
    if (keys[32]) {
        lion_Sd.pause();
        leoR2.pause();
        leoR2.currentTime = 0;
        round1=false;
        round2=true;
        round3=false;
        textGo2=true;
        end=false;
        din=false;
        lion=false;
        levels1=false;
        levels2=true;
        levels3=false;
        endOfLevel=true;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(lev1, 0, 0, canvas.width, canvas.height);
    }
}
        
    if (round2) {
        if (keys[13]) {

        round2ef.pause();
        round2ef.currentTime = 0;
        lion_Sd.pause();
        leoCon.pause();
        round1=false;
        round2=false;
        round3=true;
        leoCon.currentTime = 0;
        end=false;
        endOfLevel=true;   
        din=true;
        lion=false;
        billyBear=false;

        levels1=true;
        levels2=false;
        levels3=false;

        textGo2=false;
        textGo3=false;
        textGo4=true;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(lev1, 0, 0, canvas.width, canvas.height);
        }
    }


    if (round4) {
        if (keys[13]) {
        round2ef.pause();
        round2ef.currentTime = 0;
        lion_Sd.pause();
        leoCon.pause();
        leoCon.currentTime = 0;
        fireWk.pause();
        retToMain();
        endOfLevel=true;
        }
    }


} else {
    ctx.drawImage(sprites,tresureChest.chestX,tresureChest.chestY,200,100,tresureChest.dirChestX,tresureChest.dirChestY,180,120);
    
     // Meat! ------------------------------------------------- //

     if (round2) {
        for (var i=0; i<noOfMeats; i++) {
           meat1[i].show();
           meat1[i].fall();
       }
    }

    if (round3) {
        for (var i=0; i<noOfMeats; i++) {
           meat1[i].show();
           meat1[i].right();
           round4=true;
       }
    }
  

 } 

}

}///textGo



    movePlayer();
    handlePlayerFrame();
    }
  }
}



startAnimating(7);




