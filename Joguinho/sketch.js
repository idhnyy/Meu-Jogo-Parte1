var fundo, fundoImg;
var player, playerImg;
var monstrinho, monstrinhoImg;
var monstrinhosGroup;
var barreiras;


function preload(){
   fundoImg = loadImage("assets/galaxy_background.png");
   playerImg = loadImage("assets/pngwing.com.png");
   monstrinhoImg = loadImage("assets/monstrinhoAmarelo.png");


}

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  fundo = createSprite(displayWidth/2 +55, displayHeight/2 -40, 20, 20);
  fundo.addImage(fundoImg);
  fundo.scale = 3;

  player = createSprite(730,640);
  player.addImage(playerImg);
  player.scale = 0.20;
  player.setCollider("rectangle",0,0,500,500 );
  player.debug = true;

  barreiras = createEdgeSprites();

  monstrinhosGroup = new Group();
 
  

  
}

function draw(){
  background("Black");
  
  
  
  if(keyDown(LEFT_ARROW)){
    player.x -= 10;
  }

  if(keyDown(RIGHT_ARROW)){
    player.x += 10;
  }
  
  player.collide(barreiras);
  player.collide(barreiras);
  
  
  monstrinhos();

  drawSprites();
}

function monstrinhos(){

   if(frameCount % 30 === 0){
    monstrinho = createSprite(random(500, 1100), random(100, 200), 40, 40);
    monstrinho.addImage(monstrinhoImg);
    monstrinho.scale = 0.02;
    monstrinho.velocityY = 3;
    monstrinho.setCollider("rectangle",0,0,20,0);
    monstrinho.debug = true;
    monstrinho.lifetime = 400;
    monstrinhosGroup.add(monstrinho);

  }
}










