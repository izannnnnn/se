
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //crear fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crear arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  
 //redB= new Group();
 
 // arrowGroup= new Group();

  
}

function draw() {
 background(0);
 

 
 if(gameState === PLAY)
 {
      /*Descomenta la opción correcta 
        en función del estado PLAY*/  
      // // mover el suelo
       scene.velocityX = -3 
      // //destroy bow
      // bow.destroy();
      // //reiniciar el fondo
       if (scene.x < 0){
           scene.x = scene.width/2;
          }
      // //mover arco
       bow.y = World.mouseY      
      // //detener el movimiento del fondo
      // scene.velocityX = 0;

  
   //Liberar las flechas al presionar la barra espaciadora
  if (keyDown("space")) {
    createArrow();  
  }
  
  //crear enemigos continuos
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon ){
      case 1: redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      default:break;
    }
  }
 }
\s\my-quizzes

  if (gameState === END) {
    /*Descomenta la opción correcta 
      en función del estado END*/  
      // // mover el suelo
      // scene.velocityX = -3 
      // //destruir el arco
       bow.destroy();
      // //reiniciar el fondo
      // if (scene.x < 0){
      //     scene.x = scene.width/2;
      //    }
      // //mover el arco
      // bow.y = World.mouseY      
      // //detener el movimiento del fondo
       scene.velocityX = 0;

  }

if (frameCount>1000) {
  //red.destroyEach();
  gameState=END; 
}




 
  
  drawSprites();
  text("Puntuación: "+ score, 300,50);
}












function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
//  redB.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1

}

// Crear flechas para el arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
//  arrowGroup.add(arrow);

}
