var fixedRect, movingRect;
var game1 , game2 , game3 , game4 ; 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  game1 = createSprite(200,200,80,50) ; 
  game1.shapeColor = "yellow" ; 
  game2 = createSprite(500,200,80,50) ;
  game2.shapeColor = "yellow" ; 
  game3 = createSprite(800,200,80,50) ; 
  game3.shapeColor = "yellow" ; 
  game4 = createSprite(1100,200,80,50) ;
  game4.shapeColor = "yellow" ; 

  game3.velocityX = 2 ; 
  game4.velocityX = -1 ; 
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
 

  bounceoff(game3,game4);
  
if (touching(game1,movingRect)){
  game1.shapeColor = "red" ; 
  movingRect.shapeColor = "red" ; 
}
else 
{
  game1.shapeColor = "yellow" ; 
  movingRect.shapeColor = "green" ; 
}
  drawSprites();
}

