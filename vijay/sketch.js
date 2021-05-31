var scene, sceneImg;
var target, targetImg;
var corona1,corona2, corona3, corona4, corona5, corona6, corona7, corona1Img, corona2Img, corona3Img, corona4Img, corona5Img, corona6Img, coronaWalkImg, coronaGroup;
var gun, gunUpImg, gunRightImg, gunLeftImg;
var hand, handImg;
var syringeLeft, syringeRight,syringeUp, syringeUpImg, syringeRightImg, syringeLeftImg, SyringeGroup;
var rand;
var coronaScore = 0;
var gameOverImg, overImg;

function preload(){
  
  sceneImg = loadImage("background.png");
  targetImg = loadImage("target.png");
  corona1Img = loadAnimation("corona1/0.png", "corona1/1.png", "corona1/2.png", "corona1/3.png", "corona1/4.png", "corona1/5.png", "corona1/6.png", "corona1/7.png", "corona1/8.png", "corona1/9.png", "corona1/10.png", "corona1/11.png", "corona1/12.png", "corona1/13.png", "corona1/14.png", "corona1/15.png", "corona1/16.png", "corona1/17.png", "corona1/18.png");
  handImg = loadImage("hand.png");
  gunUpImg = loadImage("gunUp.png");
  gunLeftImg = loadImage("gunLeft.png");
  gunRightImg = loadImage("gunRight.png");
  syringeUpImg = loadImage("syringeUp.png");
  syringeLeftImg = loadImage("syringeLeft.png");
  syringeRightImg = loadImage("syringeRight.png"); 
  corona2Img = loadImage("corona2.png");
  corona3Img = loadImage("corona3.png");
  corona4Img = loadImage("corona4.png");
  corona5Img = loadImage("corona5.png");
  corona6Img = loadImage("corona6.png");
  coronaWalkImg = loadAnimation("walkCorona/0.png", "walkCorona/1.png", "walkCorona/2.png", "walkCorona/3.png", "walkCorona/4.png");
  gameOverImg = loadImage("gameOver/gameOver.png");
  overImg = loadImage("gameOver/over.jpg");

}

function setup(){
  
  createCanvas(displayWidth, displayHeight);
  
  scene = createSprite(width/2, height/2-20);
  scene.addImage("scene", sceneImg);



  /*target = createSprite(displayWidth/2, displayHeight-250);
  target.addImage("gun", targetImg);
  target.scale = 0.5;*/

  /*syringe = createSprite(displayWidth/2-100, displayHeight-300);
  syringe.addImage("syringe", syringeUpImg);
  syringe.scale = 0.5;
  syringe.visible = false;*/
  

  gun = createSprite(displayWidth/2 - 50, displayHeight - 130);
  gun.addImage("gun", gunUpImg);
  gun.scale = 0.3;

  hand = createSprite(displayWidth/2, displayHeight);
  hand.addImage("hand", handImg);
  hand.scale = 1.5;

  syringeGroup = new Group();

}

function draw(){
  
  background("white");

  //target.x = World.mouseX;
  //target.y = World.mouseY;
  
  hand.x = mouseX;
  gun.x = hand.x - 60;
  


  if(keyWentDown("left")){

    gun.addImage("gun", gunLeftImg);
    syringeLeft = createSprite(displayWidth/2-100, displayHeight-300);
    syringeLeft.scale = 0.5;
    syringeLeft.addImage("syringe", syringeLeftImg);
    syringeLeft.x = gun.x - 100;
    syringeLeft.setSpeedAndDirection(-20,60);
    syringeGroup.add(syringeLeft);

  }

  if(keyWentDown("right")){

    gun.addImage("gun", gunRightImg);
    syringeRight = createSprite(displayWidth/2-100, displayHeight-300);
    syringeRight.scale = 0.5;
    syringeRight.addImage("syringe", syringeRightImg);
    syringeRight.visible = true;
    syringeRight.x = gun.x + 130;
    syringeRight.y = gun.y - 170;
    syringeRight.setSpeedAndDirection(-20,150);
    syringeGroup.add(syringeRight);

  }

  if(keyWentDown("up")){

    gun.addImage("gun", gunUpImg);
    syringeUp = createSprite(displayWidth/2-100, displayHeight-300);
    syringeUp.addImage("syringe", syringeUpImg);
    syringeUp.scale = 0.5;
    syringeUp.visible = true;
    syringeUp.x = gun.x;
    syringeUp.setSpeedAndDirection(-10,90);
    syringeGroup.add(syringeUp);

  }

  if(frameCount % 100 === 0){

    rand = Math.round(random(1, 7));
    switch(rand){
  
      case 1 : corona1 = createSprite(random(50, displayWidth-50), random(100, displayHeight/2));
               corona1.scale = 0.2;
               corona1.addAnimation("corona", corona1Img);
               corona1.velocityX = 9;
               corona1.velocityY = 9;
               if(corona1.isTouching(syringeGroup)){
                 corona1.destroy();
                 coronaScore = coronaScore + 1;
               }
               break;

      case 2 : corona2 = createSprite(random(50, displayWidth-50), random(100, displayHeight/2));
               corona2.scale = 0.6;
               corona2.addImage("corona", corona2Img);
               corona2.velocityY = 10;
               if(corona2.isTouching(syringeGroup)){
                corona2.destroy();
                coronaScore = coronaScore + 1;
               }
               break;

      case 3 : corona3 = createSprite(random(50, displayWidth-50), random(100, displayHeight/2));
               corona3.scale = 0.6;
               corona3.addImage("corona", corona3Img);
               corona3.velocityY = 6;
               if(corona3.isTouching(syringeGroup)){
                corona3.destroy();
                coronaScore = coronaScore + 1;
               }
               break;

      case 4 : corona4 = createSprite(random(50, displayWidth-50), random(100, displayHeight/2));
               corona4.scale = 0.6;
               corona4.addImage("corona", corona3Img);
               corona4.velocityY = 8;
               if(corona4.isTouching(syringeGroup)){
                corona4.destroy();
                coronaScore = coronaScore + 1;
               }
               break;

      case 5 : corona5 = createSprite(random(50, displayWidth-50), random(100, displayHeight/2));
               corona5.scale = 0.2;
               corona5.addImage("corona", corona5Img);
               corona5.velocityX = 5;
               corona5.velocityX = -5;
               if(corona5.isTouching(syringeGroup)){
                corona5.destroy();
                coronaScore = coronaScore + 1;
               }
               break;

      case 6 : corona6 = createSprite(random(50, displayWidth-50), random(100, displayHeight/2));
               corona6.scale = 0.3;
               corona6.addImage("corona", corona6Img);
               corona6.velocityX = 6;
               corona6.velocityX = -6;
               corona6.velocityY = 6;
               corona6.velocityY = -6;
               if(corona6.isTouching(syringeGroup)){
                corona6.destroy();
                coronaScore = coronaScore + 1;
               }
               break;

      case 7 : corona7 = createSprite(random(50, displayWidth-50), random(100, displayHeight/2));
               corona7.scale = 0.2;
               corona7.addAnimation("corona", coronaWalkImg);
               corona7.velocityX = 8;
               corona7.velocityX = -8;
               corona7.velocityY = 8;
               corona7.velocityY = -8;
               if(corona7.isTouching(syringeGroup)){
                corona7.destroy();
                coronaScore = coronaScore + 1;
               }
               break;

      default : break;
  
    }

        

  }

  drawSprites();
  
  textSize(40);
  strokeWeight(5);
  stroke("black");
  fill ("yellow");
  text("SCORE : " + coronaScore, displayWidth-300, 150);

  if(frameCount > 2000 && score < 10){
    
    var over = createSprite(displayWidth/2, displayHeight/2);
    over.addImage(overImg);

    var gameOver = createSprite(displayWidth/2, displayHeight/2 - 200);
    gameOver.addImage(gameOverImg);

  }
  
}

