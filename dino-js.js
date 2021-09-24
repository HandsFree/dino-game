const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 1200;
canvas.height = 735;

var fireEnd;

var fireworksOn = false;

var textGo2 = false; // round 2 instructions
var textGo3 = false; // round 2 play
var textGo4 = false;

var endOfLevel=true; // false if white screen with text.

var fallDown = true;

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

/**********sound effects and music****************/
var startScTx = new Audio("sounds/startScTx.mp3");
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
var rSpk2 = new Audio("sounds/RoundSk2.mp3");

var escapeKey = new Audio("sounds/escape_key.mp3");

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

function settings() {
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.font = "bold 15px Arial";
    ctx.drawImage(cog, 10, 5);
    ctx.fillText("Settings", 35, 70);
    ctx.fillText("Press S", 35, 90);

    if (keys[83]) { //s
        togSet=false;
        togMenu=true;
        showMenu();
    }
}

var speechOn=true;
var musicOn=true;
var picOn=true;

/*Mouse Controls*/
document.onmousedown = mouseClick;

function mouseClick(e) {
     if (e.clientX > 10 && e.clientY < 60){
        showMenu();
    }
}
/*End of Mouse Controls*/

function showMenu() {
    togMenu=true;
    togSet=false;
    ctx.fillStyle = "black";
    ctx.globalAlpha = 0.9; 
    ctx.fillRect(120, 40, 950, 600);
    ctx.globalAlpha = 1.0; 
    ctx.fillStyle = "white";
    ctx.textAlign = "center"; 
    ctx.font = "45px Arial";
    ctx.fillText("Settings", w, 100);
    ctx.font = "35px Arial";

    if (speechOn) {
        ctx.fillText("Speech: On - press O to change", w, 210);
        if (keys[79]) { //o
            speechOn=false;
        }
    }

    if (!speechOn) {
        ctx.fillText("Speech: Off - press B to change", w, 210);
        if (keys[66]) { //b
            speechOn=true;
        }
    }

    /*------------------------------------------------------ */

    
    if (musicOn) {
        ctx.fillText("Music: On - press M to change", w, 310);
        if (keys[77]) { //m
            musicOn=false;
        }
    }

    if (!musicOn) {
        ctx.fillText("Music: Off - press U to change", w, 310);
        if (keys[85]) { //u
            musicOn=true;
        }
    }

    /*------------------------------------------------------ */

    if (picOn) {
        ctx.fillText("Picture: On - press C to change", w, 410);
        if (keys[67]) { //o
            picOn=false;
        }
    }

    if (!picOn) {
        ctx.fillText("Colour: On - press I to change", w, 410);
        if (keys[73]) { //f
            picOn=true;
        }
    }

    ctx.font = "30px Arial";
    ctx.fillText("Return to Game", w, 560);
    ctx.fillText("Press A", w, 610);

    if (keys[65]) { //a
        togSet=true;
        togMenu=false;
    }
}



function charaters() {
    if(din) {
        if (musicOn) {
        music.play();
        }
        if (boneOn) {
        drawSprite(sprites, dino.width * dino.dirX, dino.height * dino.dirY, dino.width, dino.height, dino.x, dino.y, dino.width, dino.height);
        }
    }

    if(billyBear) {
        if (musicOn) {
        music.play();
        }
        if (bearOn) {
        drawSprite(bears, bear.width * bear.dirX, bear.height * bear.dirY, bear.width, bear.height, bear.x, bear.y, bear.width, bear.height);
    }
}

    if(lion) {
        if (musicOn) {
        music.play();
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
        ctx.globalAlpha = 0.6;  
        ctx.fillRect(150, 100, 900, 450); 
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = "purple";
        ctx.textAlign = "center"; 
        ctx.font = "45px Comic Sans MS";
        ctx.fillText("Dino is looking for the treasure again!", w, 200);
        ctx.fillText("You have to dodge the bones now!", w, 300);
        ctx.fillText("Good Luck!", w, 400);
        ctx.fillStyle = "red";
        ctx.fillText("Press the Escape Key to Play!", w, 500);

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
        escapeKey.play();
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
        ctx.fillText("Escape Key to Play!", w, 500);

 
        if (keys[13]) {

            if (speechOn) {
            escapeKey.pause();
            escapeKey.currentTime = 0;
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
        escapeKey.play();
        }

        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.6;  
        ctx.fillRect(150, 100, 900, 500); 
        ctx.globalAlpha = 1.0;
        ctx.fillStyle = "purple";
        ctx.textAlign = "center";
        ctx.font = "45px Comic Sans MS";
        ctx.fillText("Dino is looking for the treasure!", w, 200);
        ctx.fillText("for the final time!", w, 250);
        ctx.fillText("Dodge the bones from left to right", w, 350);
        ctx.fillText("Good Luck!", w, 450);
        ctx.font = "bolder 30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.fillText("Escape Key to Play!", w, 550);

 
   

        if (keys[13]) {

           /* if (speechOn) {
            escapeKey.pause();
            escapeKey.currentTime = 0;
            }*/

            fallDown=true;

            round1=false;
            round2=false;
            round3=true;

            textGo=true;
            textGo2=false;
            textGo3=false;
            textGo4=false;



            //startScMsc.pause();
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
        leoCon.pause();

        if (picOn) {
        ctx.drawImage(lev1, 0, 0, canvas.width, canvas.height);
        }

        if (speechOn) {
        ins.play();
        }

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
        if (dino.x <= (this.x+80) && this.x <= (dino.x+80) && dino.y <= (this.y+80) && this.y <= (dino.y+80)) {  

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
      // game instructions
      ctx.fillStyle = gameInsCol;
      ctx.fillRect(0, 0, canvas.width, 80);
      ctx.font = "40px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.fillText("Treasure Game", w, 40);
      ctx.font = "25px Comic Sans MS";
      ctx.fillText("With Dino and Friends!", w, 70);
      ctx.fillStyle = gameInsCol;
      ctx.fillRect(0, canvas.height - gameInsHt, gameInsWd, gameInsHt);
      ctx.font = "25px Comic Sans MS";
      ctx.fillStyle = "white";
      ctx.fillText("Directions: arrow keys to move around", w, 725)
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

        ctx.font = "35px Comic Sans MS";

        leoCon.pause();
        startScMsc.pause();
        startScTx.pause();

        ctx.fillStyle = "darkgreen";
        ctx.textAlign = "center";

        if (vol) {
        
        ctx.fillText("Press the Spacebar for Sound!", w, 680);   

        if (keys[32]) {
           vol = false; 
        }

        } else {

        ctx.fillText("Press the Escape Key to continue!", w, 680);

        round1=true;
        round2=false;
        round3=false;

        leoCon.pause();
        leoCon.currentTime = 0;


        if (musicOn) {
        startScMsc.play();
        startScMsc.volume = 0.1;
        }
        if (speechOn) {
        startScTx.play();
        startScTx.volume = 1;
        }


        if (keys[13]) {
            start=true;
            gameEnd=true;
            startScTx.pause();
            startScTx.currentTime = 0;
        }
    }
          
    } else { 


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





    if (!textGo) {

    playIns();

    }

    if (textGo) {

    //} else {
    
    if (end) { 

    level1();

    charaters();

    }//end

    randNumGen();








   if (din) {
    startScMsc.pause();
   if (dino.x <= (tresureChest.dirChestX+140) && tresureChest.dirChestX <= (dino.x+140) && dino.y <= (tresureChest.dirChestY+140) && tresureChest.dirChestY <= (dino.y+140)) {
        ctx.drawImage(sprites,tresureChest.chestX,(tresureChest.chestY+90),240,300,tresureChest.dirChestX,(tresureChest.dirChestY-60),220,320);
      
        music.pause();


        if (speechOn) {
        roarSd.play();
        roarSd.volume = 0.5;
        dinoCon.play();
        }

        


        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.6; 
        ctx.fillRect(50, 30, 1100, 550);
        ctx.globalAlpha = 1.0; 
        ctx.fillStyle = "red";
        ctx.textAlign = "center"; 
        ctx.font = "140px Comic Sans MS";
        ctx.fillText("Well Done!", w, 200);
        ctx.fillStyle = "blue";
        ctx.font = "60px Comic Sans MS";
        ctx.fillText("You and Dino have found the treasure!", w, 300);
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "purple";
        ctx.fillText("Press the Spacebar to help Billy Bear", w, 400);
        ctx.fillText("find the Treasure Chest!", w, 500);
        endOfLevel=false;

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
        dinoCon.pause();
        dinoCon.currentTime = 0;
    if (bear.x <= (tresureChest.dirChestX+140) && tresureChest.dirChestX <= (bear.x+140) && bear.y <= (tresureChest.dirChestY+140) && tresureChest.dirChestY <= (bear.y+140)) {
        ctx.drawImage(sprites,tresureChest.chestX,(tresureChest.chestY+90),240,300,tresureChest.dirChestX,(tresureChest.dirChestY-60),220,320);

        music.pause();

        if (speechOn) {
        billySd.play();
        billySd.volume = 0.3;
        billyCon.play();
        }

        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.6; 
        ctx.fillRect(100, 50, 1000, 600);
        ctx.globalAlpha = 1.0; 
        ctx.fillStyle = "red";
        ctx.textAlign = "center"; 
        ctx.font = "140px Comic Sans MS";
        ctx.fillText("Well Done!", w, 200);
        ctx.font = "60px Comic Sans MS";
        ctx.fillStyle = "blue";
        ctx.fillText("You and Billy Bear have", w, 300);
        ctx.fillText("found the treasure!", w, 400);
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "purple";
        ctx.fillText("Press the Spacebar to help Leo the Lion", w, 500);
        ctx.fillText("find the Treasure Chest!", w, 600);
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
    billyCon.pause();
    billyCon.currentTime = 0;
    if (lion2.x <= (tresureChest.dirChestX+140) && tresureChest.dirChestX <= (lion2.x+140) && lion2.y <= (tresureChest.dirChestY+140) && tresureChest.dirChestY <= (lion2.y+140)) {
        ctx.drawImage(sprites,tresureChest.chestX,(tresureChest.chestY+90),240,300,tresureChest.dirChestX,(tresureChest.dirChestY-60),220,320);

        music.pause();

        if (speechOn) {

            if (round1) {
                leoR2.play();
            }

            if (round2) {
                //leoCon.play();
            }

            if (round3) {
                leoCon.play();
            }

        lion_Sd.play();
        lion_Sd.volume = 0.2;

        if (round3) {
            lion_Sd.pause();
            fireWk.play();
        }
        
        }


        ctx.fillStyle = "white";
        ctx.globalAlpha = 0.6; 
        ctx.fillRect(120, 40, 950, 600);
        ctx.globalAlpha = 1.0; 
        ctx.fillStyle = "red";
        ctx.textAlign = "center"; 
        ctx.font = "140px Comic Sans MS";
        ctx.fillText("Well Done!", w, 200);
        ctx.font = "60px Comic Sans MS";
        ctx.fillStyle = "blue";
        ctx.fillText("You and Leo the Lion have", w, 300);
        ctx.fillText("found the treasure!", w, 400);
        ctx.font = "50px Comic Sans MS";
        ctx.fillStyle = "red";


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
        
        if (round1) {
            ctx.fillText("Let's go to Round 2!", w, 500);
        }

        if (round2) {
            ctx.fillText("Let's go the the final round!", w, 500);
        }

        if (round3) {
            ctx.fillText("Thanks for Playing!", w, 500);
        }

        ctx.fillStyle = "purple";
        
        if (round1) {
            ctx.fillText("Press the Spacebar to Continue!", w, 600);
            }

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

        //textGo=true;
        textGo2=false;
        textGo3=false;
        textGo4=true;
        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.drawImage(lev1, 0, 0, canvas.width, canvas.height);
        //r4();
        }
    }


    if (round4) {
        if (keys[13]) {
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




