var r1 , r2,r3;

function setup() {
  createCanvas(800,400);
  r1  = createSprite(400, 200, 50, 50);
  r1.velocityX = -5;

  r2  = createSprite(200,200, 80,30);

 r3 = createSprite(200,200,60,60);
}

function draw() {
  background(0);  

r2.x = mouseX;
r2.y  = mouseY;

if(isTouchingNidhish(r3,r2)){
  text("collided",100,100);
 
}

bounce (r2,r1);



  drawSprites();
}

