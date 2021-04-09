var hr,mn,sec;

var clockImage,clock,clock2Image,clock2;

function preload(){
clockImage = loadImage("clock.png");
clock2Image = loadImage("digital.png");
}

function setup() {
  createCanvas(1000,500);
 
  clock = createSprite(398, 218);
  clock.addImage(clockImage);
  clock.scale = 0.8;

  clock2 = createSprite(798, 218);
  clock2.addImage(clock2Image);
  clock2.scale = 1.3;
  
}

function draw() {
  background(255);  
  drawSprites();


  translate(400,241);
  rotate(-90);
 let hr = hour();
 let mn = minute();
 let sc = second();

 strokeWeight(8);
 stroke("orange");
 noFill();

 let secondAngle = map(sc,0,60,0,360);
 arc(0, 0, 300, 300, 0, secondAngle);

 stroke("green");
 let minuteAngle = map(mn,0,60,0,360);
 arc(0, 0, 330,330, 0, minuteAngle);

 stroke("Black");
 let hourAngle = map(hr % 12, 0, 12, 0, 360);
 arc(0, 0, 360, 360, 0, hourAngle);

 push();
 rotate(secondAngle);
 stroke("orange");
 line(0,0,100,0);
 pop();

 push();
 rotate(minuteAngle);
 stroke("green");
 line(0,0,75,0);
 pop();

 push();
 rotate(hourAngle);
 stroke("Black");
 line(0,0,50,0);
 pop();

 stroke("Black");
 point(0,0);

 push();
 fill("Green");
 noStroke();
 rotate(90);
 textSize(30);
 textAlign(CENTER);
 text(hr + ':' + mn + ':' + sc,398, -9);
 pop();
}
