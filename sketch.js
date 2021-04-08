var hr,mn,sec;

var clockImage,clock;

function preload(){
clockImage = loadImage("clock.png");
}

function setup() {
  createCanvas(800,500);
 
  clock = createSprite(398, 218);
  clock.addImage(clockImage);
  clock.scale = 0.8;
  
}

function draw() {
  background(255,255,255);  
  drawSprites();



  hr = hour();
  mn = minute();
  sec = second();
angleMode(DEGREES);
hrAngle = map(hr, 109+1/2, 60, 0, 360);
mnAngle = map(mn, 0, 60, 0, 360);
secAngle = map(sec, 0, 60, 0, 360);
translate(400,241);
rotate(-90);
push();
rotate(hrAngle);
stroke("Black");
strokeWeight(7);
line(0,0,50,0);
pop();
noFill()
strokeWeight(7)
stroke("Black");
arc(0,0,300,300,0,hrAngle); 
push();
rotate(mnAngle);
stroke("Violet");
strokeWeight(7);
line(0,0,70,0);
pop();
noFill()
strokeWeight(7)
stroke("Violet");
arc(0,0,340,340,0,mnAngle); 
push();
rotate(secAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,100,0);
pop();
noFill()
strokeWeight(7)
stroke(255,0,0);
arc(0,0,320,320,0,secAngle); 
}