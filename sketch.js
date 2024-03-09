var pacMan;
var monster1, monster2, monster3, monster4;
var w1, w2, w3, w4, w5, w6, w7, w8, w9, w13, w14, w15, w16,  w18, w19,w22, w23, w24, w25, w26, w27, w28, w29, w30, w31, w32, w33, w34, w35, w36, w37, w38;

var blueMonster, cherry, orangeMonster, pacman, pinkMonster, redMonster;

var p2,p3,p4,p5,p6,p7;

var score = 0;

var lives = 5;
var startButton;
var correct;

var mode = 0;
const welcome = 0;
const game = 1;
const question = 2;
const end = 3;

var optionButtonX = 70;
var optionButtonWidth = 20;
var correctChoice = 0;
var gotCorrect = -1;
var q1, a1, a2, a3;

function preload() {
  blueMonsterImage = loadImage("Blue Monster.png");
  cherryImage = loadImage("Cherry.png");
  orangeMonsterImage = loadImage("Orange Monster.png");
  pacmanImage = loadImage("Pacman.png");
  pinkMonsterImage = loadImage("Pink Monster.png");
  redMonsterImage = loadImage("Red Monster.png");
  backgroundImage = loadImage("background for pac man.jpg");

}

function setup() {
  createCanvas(400, 400);
  
  startButton = createButton('Start');
  startButton.position(175, 250);
  
  w1 = createSprite(300, 10, 590, 5);
  w2 = createSprite(300, 390, 590, 5);
  w3 = createSprite(10, 200, 5, 390);
  w4 = createSprite(390, 200, 5, 390);
  w5 = createSprite(50, 180, 5, 200);
  w6 = createSprite(190, 210, 200, 5);
  w7 = createSprite(155, 340, 200, 5);
  w8 = createSprite(340, 190, 5, 200);
  w9 = createSprite(190, 250, 200, 5);
  w13 = createSprite(275, 40, 135, 5);
  w14 = createSprite(110, 40, 135, 5);
  w15 = createSprite(190, 170, 200, 5);
  w16 = createSprite(190, 130, 200, 5);
  w18 = createSprite(190, 290, 200, 5);
  w19 = createSprite(190, 90, 200, 5);
  p2 = createSprite(190,270,13,13);
  p3 = createSprite(190,190,13,13);
  p4 = createSprite(190,230,13,13);
  p5 = createSprite(190,150,13,13);
  p6 = createSprite(190,110,13,13);
  blueMonster = createSprite(190, 145, 13, 13);
  orangeMonster = createSprite(190, 105, 13, 13);
  pinkMonster = createSprite(190, 190, 13, 13);
  redMonster = createSprite(190, 230, 13, 13);
  orangeMonster2 = createSprite(190, 270, 13, 13);
  pacman = createSprite(40, 370, 13, 13);
  pacman.addImage(pacmanImage);
  pacman.scale = 0.25;
  blueMonster.addImage(blueMonsterImage);
  blueMonster.scale = 0.3;
  orangeMonster.addImage(orangeMonsterImage);
  orangeMonster.scale = 0.3;
  pinkMonster.addImage(pinkMonsterImage);
  pinkMonster.scale = 0.3;
  redMonster.addImage(redMonsterImage);
  redMonster.scale = 0.3;
  orangeMonster2.addImage(orangeMonsterImage);
  orangeMonster2.scale = 0.3;
  cherry = createSprite(340,70,15,15);
  cherry.addImage(cherryImage);
  cherry.scale = 0.35;
  blueMonster.velocityX = 3;
  orangeMonster.velocityX = -3;
  pinkMonster.velocityX = -3;
  redMonster.velocityX = 3;
  orangeMonster2.velocityX = -3; 
}

function draw() {
  background(backgroundImage);
  if (mode == welcome){
    textSize(32);
    textAlign(CENTER, CENTER);
    text("welcome to pacman", 200, 200);
    textSize(16);
    text("use arrow keys to play", 200, 230);
    startButton.mouseClicked(startGame);
    
  } else if (mode == game){
    startButton.remove();
    gameMode();
  } else if (mode == question){
    questionMode()
    if(gotCorrect == 1 || gotCorrect ==0){
      mode = game;
    }
  }
}

function gameMode(){
  w1.shapeColor = "red";
  w2.shapeColor = "orange";
  w3.shapeColor = "yellow";
  w4.shapeColor = "green";
  w5.shapeColor = "blue";
  w6.shapeColor = "purple";
  w7.shapeColor = "red";
  w8.shapeColor = "orange";
  w9.shapeColor = "yellow";
  w13.shapeColor = "red";
  w14.shapeColor = "orange";
  w15.shapeColor = "yellow";
  w16.shapeColor = "green";
  w18.shapeColor = "purple";
  w19.shapeColor = "red";
  p2.shapeColor = "orange";
  p3.shapeColor = "yellow";
  p4.shapeColor = "green";
  p5.shapeColor = "blue";
  p6.shapeColor = "purple";
  fill("black");
  textSize(12);
  text("score:"+ score,320,30);
  text("lives:"+ lives,80,30);
  orangeMonster.bounceOff(w5);
  pinkMonster.bounceOff(w5);
  orangeMonster.bounceOff(w8);
  pinkMonster.bounceOff(w8);
  redMonster.bounceOff(w5);
  redMonster.bounceOff(w8);
  blueMonster.bounceOff(w5);
  blueMonster.bounceOff(w8);
  orangeMonster2.bounceOff(w5);
  orangeMonster2.bounceOff(w8);

  pacman.bounceOff(w1);
  pacman.bounceOff(w2);
  pacman.bounceOff(w3);
  pacman.bounceOff(w4);
  pacman.bounceOff(w5);
  pacman.bounceOff(w6);
  pacman.bounceOff(w7);
  pacman.bounceOff(w8);
  pacman.bounceOff(w9);
  pacman.bounceOff(w13);
  pacman.bounceOff(w14);
  pacman.bounceOff(w15);
  pacman.bounceOff(w16);
  pacman.bounceOff(w18);
  pacman.bounceOff(w19);
  drawSprites();
  
  
  if (keyDown("left")) {
    pacman.x = pacman.x - 3;
  }

  if (keyDown("right")) {
    pacman.x = pacman.x + 3;
  }

  if (keyDown("down")) {
    pacman.y = pacman.y + 3;
  }

  if (keyDown("up")) {
    pacman.y = pacman.y - 3;
  }
  
  if(pacman.isTouching(cherry)){
    q1 = "lefh ewfn efih"
    a1 = "kwefb"
    a2 = "wkejn"
    a3 = "kwefl"
    correctChoice = 1;
    
    if(gotCorrect == 1){
      cherry.destroy();
      score = score + 400;
      gotCorrect = -1;
      correctChoice = 0;
      mode = game; 
    } else if(gotCorrect == 0){
      pacman.x = 40;
      pacman.y = 370;
      lives = lives - 1;
      gotCorrect = -1;
      correctChoice = 0;
      mode = game; 
    } else{
      mode = question;
    }
    
  }

  if(pacman.isTouching(p2)){
    q1 = "qwduhn ekjbc wdcj"
    a1 = "kwqacsjkefb"
    a2 = "qwjckb"
    a3 = "ecbecopqw"
    correctChoice = 3;
    
    if(gotCorrect == 1){
      p2.destroy();
      score = score + 20;
      gotCorrect = -1;
      correctChoice = 0;
    } else if(gotCorrect == 0){
      pacman.x = 40;
      pacman.y = 370;
      lives = lives - 1;
      gotCorrect = -1;
      correctChoice = 0;
    } else{
      mode = question;
    }
  }
  
  if(pacman.isTouching(p3)){
    p3.destroy();
    score = score + 20;
  }
  
  if(pacman.isTouching(p4)){
    p4.destroy();
    score = score + 20;
  }
  
  if(pacman.isTouching(p5)){
    p5.destroy();
    score = score + 20;
  }
  
  if(pacman.isTouching(p6)){
    p6.destroy();
    score = score + 20;
  }

  if(pacman.isTouching(orangeMonster)||pacman.isTouching(blueMonster)||pacman.isTouching(orangeMonster2)||pacman.isTouching(pinkMonster)||pacman.isTouching(redMonster)){
    lives = lives - 1;
    pacman.x = 40;
    pacman.y = 370;
    
    if(lives === 0){
      textSize(30);
      fill("black");
      text("GAME OVER",300,200);
      blueMonster.velocityX = 0;
      orangeMonster.velocityX = 0;
      pinkMonster.velocityX = 0;
      redMonster.velocityX = 0;
      orangeMonster2.velocityX = 0; 
      pacman.destroy();
      
      
    }

  }
  
  
}

function startGame() {
  mode += 1;
}

function questionMode() {
  square(50, 50, 300)
  fill('black');
  textSize(20);
  textAlign(CENTER, TOP);
  text(q1, 200, 60);
  
  textSize(15);
  square(optionButtonX, 150, optionButtonWidth);
  textAlign(LEFT, TOP);
  text(a1, 100, 150);
  
  square(optionButtonX, 190, optionButtonWidth);
  text(a2, 100, 190);
  
  square(optionButtonX, 230, optionButtonWidth);
  text(a3, 100, 230);
  
}

function mouseClicked() {
  if (mode == question){
    if(
      mouseX > optionButtonX &&
      mouseX < optionButtonX + optionButtonWidth &&
      mouseY > 150 &&
      mouseY < 150 + optionButtonWidth
    ) {
      if(correctChoice == 1){
        gotCorrect = 1;
      } else {
        gotCorrect = 0;
      }
    } else if (
      mouseX > optionButtonX &&
      mouseX < optionButtonX + optionButtonWidth &&
      mouseY > 190 &&
      mouseY < 190 + optionButtonWidth
    ){
      if(correctChoice == 2){
        gotCorrect = 1;
      } else {
        gotCorrect = 0;
      }
    } else if (
      mouseX > optionButtonX &&
      mouseX < optionButtonX + optionButtonWidth &&
      mouseY > 230 &&
      mouseY < 230 + optionButtonWidth
    ){
      if(correctChoice == 3){
        gotCorrect = 1;
      } else {
        gotCorrect = 0;
      }
    }
  }
  
}