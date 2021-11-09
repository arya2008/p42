var hour,minute,second;
function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
  h=hour();
  text('Current hour:\n' + h,5,50);
  m=minute();
  text('Current minute:\n' + m,5,50);
  s=second();
  text('Current second:\n' + s,5,50);

  angleMode(DEGREES);

  
  scAngle=map(sc,0,60,0,360);
   c=map(mouseX,0,width,0,175);

   d=map(mouseX,0,width,40,300);
  fill(255,c,0);
  ellipse(width/2,height/2,d,d);

  //second
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

//minute
push();
rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(10);
  line(0,0,100,0);
  pop();

  //hour
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(13);
  line(0,0,100,0);
  pop();


  arc(50,55,50,50,0,HALF_PI);
  noFill();
  arc(50,55,60,60,HALF_PI,PI);
  arc(50,55,70,70,PI,PI+QUARTER_PI);
  arc(50,55,80,80,PI+QUARTER_PI,TWO_PI);

  arc(50,50,80,80,0,PI+QUARTER_PI);

  arc(50,50,80,80,0,PI+QUARTER_PI,OPEN);

  arc(50,50,80,80,0,PI+QUARTER_PI,CHORD);

  arc(50,50,80,80,0,PI+QUARTER_PI,PIE);
  

}