
var monkey , monkey_running
var bananaImage, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

var ground;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  foodGroup = new Group();
  obstaclesGroup = new Group();
  createCanvas(600,400);
  ground = createSprite(400,350,1800,10);
  ground.velocityX = -4;
  
  console.log(ground.x);
  monkey = createSprite(85,330,20,20);
  monkey.addAnimation("money_running",monkey_running);
  monkey.scale = 0.1;
  

  
}


function draw() {
  background(180);
  if(gameState === PLAY){
    
    
    if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY+0.8;
  banana();
  obstacles();
    if(foodGroup.isTouching(monkey)){
      foodGroup.destroyEach();
    }
    if (obstaclesGroup.isTouching(monkey)){
      gameState = END;
    }
  }else if(gameState === END){
    foodGroup.destroyEach();
    obstaclesGroup.setVelocityXEach(0);
    textSize(20);
    survivalTime = 0;

    
  }
  
  
  monkey.collide(ground);
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  stroke("white");
  textSize(20);
  fill("white");
  
  
  stroke("black")
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
  

  drawSprites();
  
  

  
}
function banana(){
  if(frameCount%90===0){
    var banana = createSprite(400,200,20,20);
    banana.addImage("banana",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -4;
    var randBanana = Math.round(random(120,200));
    banana.y = randBanana;
    foodGroup.add(banana);
    
  }
}
function obstacles(){
  if(frameCount%150===0){
    var obstacle = createSprite(450,330,20,20);
    obstacle.addImage("obstacles",obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -4;
    obstaclesGroup.add(obstacle);
    

  }

}




