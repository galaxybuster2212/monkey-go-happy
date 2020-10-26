var PLAY=1;
var END=0;
var gameState=PLAY;

var player= createSprite(60,340,20,20);
player.setAnimation("monkey");
player.scale=0.1;

var ground=createSprite(200,360,800,05);
ground.velocityX=-4;
ground.x=ground.width/2;

var bananagroup= createGroup();
var obstaclegroup= createGroup();

var survivaltime=0;

textSize(18);
function draw() {
  background("white");
  
  survivaltime= Math.ceil(World.frameCount/World.frameRate);
  text("Survival Time: "+survivaltime,100,50);
  
  if (ground.x===0)
  {
    ground.x=ground.width/2;
  }
  
  if (keyDown("space")&&player.y>=319)
  {
    player.velocityY=-15;
  }
  player.velocityY=player.velocityY+0.6;
  player.collide(ground);
  
  Banana();
  Obstacle();
  drawSprites();
}

function Banana()
{
  if(World.frameCount%80===0)
  {
    var banana= createSprite(400,randomNumber(160,240),20,20);
    banana.setAnimation("Banana");
    banana.velocityX=-4;
    banana.scale=0.05;
    banana.lifetime=110;
    bananagroup.add(banana);
  }
}

function Obstacle()
{
  if (World.frameCount%300===0)
  {
    var obstacle= createSprite(400,340,20,20);
    obstacle.setAnimation("Stone");
    obstacle.velocityX=-4;
    obstacle.scale=0.15;
    obstacle.lifetime=110;
    obstaclegroup.add(obstacle);
  }
}


  





