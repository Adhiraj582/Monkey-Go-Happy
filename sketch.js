
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score = 0;

function preload(){
  
//loading images
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
//creating sprites
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
//making groups
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  
  //adding score
  fill("black");
  textSize(20);
  score = Math.ceil(frameCount)
  text("Survival Time: "+score,110,50);
  
  //for making ground infinite
  ground.x = ground.width/2;
  
  //for making bananas
  banana1();
  //making obstacles
  obstacles1();
  
  //making if we press space , money have to jump
  if(keyDown("space") && monkey.y >=300){
    monkey.velocityY = -7;
  }
  
  //adding gravity
  monkey.velocityY = monkey.velocityY + 0.2;
  
  //stop monkey from falling down
  monkey.collide(ground);
  
  drawSprites();
}

function banana1(){
  if(frameCount % 80 === 0){
    var banana = createSprite(500,200,20,20);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.lifetime = 150;
    bananaGroup.add(banana);
  }
}

function obstacles1(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(410,310,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.2;
    obstacle.lifetime = 150;
    obstacleGroup.add(obstacle);
  }
}



