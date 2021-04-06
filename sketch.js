// declaring variables

var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var player;
var carAnimation, logAnimation, playerAnimation;
var school;

//function to load images, animation, sounds, etc..
function preload()
{

}

//setup function
function setup() {

  //creating the canvas
  createCanvas(displayWidth,700);

  //creating carGroup1 and logGroup1
  carGroup1 = new Group();
  logGroup1 = new Group();

  //creating player object of Player class
  player = new Player(width/2, height-25);

 }

 // draw function
function draw() {

  //giving background color as skyblue
  background("skyblue");

  //moving the player with screen
  translate(0,-player.spt.y+height-150);

player.spt.collide(logGroup1)
  keyPressed()
  function keyPressed()
  {
    if(keyCode == UP_ARROW){
      player.move(0,-2);
    }else if(keyCode == DOWN_ARROW){
      player.move(0,2);
    }else if(keyCode == LEFT_ARROW){
      player.move(-2,0);
    }else if(keyCode == RIGHT_ARROW){
      player.move(2,0);
    }
  }

 
  //creating Grasses for player's rest
 for (var i = 0; i < 6; i++){

   var bottomGrass1 = createSprite(683,height-50-(i*400),width,grassHeight);
   if (i % 2 === 0)
   {
     var road = createSprite(683,height-150-(i*400)-grassHeight,width,300);
     road.shapeColor = "black";    
   }
   bottomGrass1.shapeColor = "green";
 }

//creating car rows
for (var i = 0; i < 40; i++){
  cars = new Car(2);
  carGroup1.add(cars.spt);
}

//creating log rows
for (var i = 0; i < 40; i++){
  logs = new Log(2);
  logGroup1.add(logs.spt);
}

//making the logs reappear
for (i = 1; i < logGroup1.length; i++){
   if (logGroup1[i].x < 0)
   {
     logGroup1[i].x = width;
   }
  }  

//making the cars reappear 
for (i = 1; i < carGroup1.length; i++){
    if (carGroup1[i].x < 0)
    {
      carGroup1[i].x = width;
    }   

}



//drawing all the sprites
drawSprites();

}

