var farm = createSprite(200, 200);
  farm.setAnimation("farm");
  farm.scale=1.7;

var ground = createSprite(200, 392,400,15);
  ground.shapeColor=("brown");
  
var man = createSprite(200,300);
  man.setAnimation("man");
  man.scale=("0.3");
  
var rain1 = createSprite(50, 10,5,5);
  rain1.velocityY =2;
rain1.shapeColor=("white");

var rain2 = createSprite(100, 10,5,5);
  rain2.velocityY =2;
rain2.shapeColor=("white");

var rain3 = createSprite(150, 10,5,5);
  rain3.velocityY =2;
rain3.shapeColor=("white");

var rain4 = createSprite(200, 10,5,5);
  rain4.velocityY =2;
rain4.shapeColor=("white");

var rain5 = createSprite(250, 10,5,5);
  rain5.velocityY =2;
rain5.shapeColor=("white");

var rain6 = createSprite(300, 10,5,5);
  rain6.velocityY =2;
rain6.shapeColor=("white");

var rain7 = createSprite(350, 10,5,5);
  rain7.velocityY =2;
rain7.shapeColor=("white");

function draw() {
 background("white");
  
  
  
 
 
 drawSprites(); 
}
