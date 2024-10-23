// Round Racers
// Max Babcock
// 10/15/2024

color = 191,0,255

function setup() {
  createCanvas(windowWidth, windowHeight);
  racer1 = new roundRacer(height/4, color)
}

function draw() {
  background(20);
  racer1.move();
  racer1.display();
}

class roundRacer{
  constructor(xPos,yPos,xSpeed,color){
  this.xPos = 0;
  this.yPos = yPos;
  this.c = color;
  this.xSpeed = random(3,15);
    }



move(){
  this.xPos += this.xSpeed;
  if(this.xPos > width){
    this.xPos = 0;
  }
}
 

display(){
  fill(color);
  circle(this.xPos, this.yPos, 10);
  }
}