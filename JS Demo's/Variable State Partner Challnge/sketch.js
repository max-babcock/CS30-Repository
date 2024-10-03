// Variable State Partner Challenge
// Max Babcock
// 09/26/2024

// Global Variables
let xPos = 0;
let yPos = 0;
let currentDirection = "down";
let speed = 5;
let rectSize = 50;

// WASD Function

function keyPressed(){
  // W key
  if(key === 'w'){
    speed += 1;
  }
  // S key
  if(key === "s"){
    speed -= 1;
  }
  // A key
  if(key === "a"){
    squareSize -= 5;
  }
  // D Key
  if(key === "d"){
    squareSize += 5;
  }

}


function setup() {
  createCanvas(750,750);
}

function draw() {
  background(40);
  rect(xPos,yPos,rectSize,rectSize);
  fill(193,84,193);
  noStroke();

  // Square movement loop
  
  if(currentDirection === "down"){
    yPos += speed;

    if(yPos === 700){
      currentDirection = "right";
    }
  }

  if(currentDirection === "right"){
    xPos += speed;

    if(xPos === 700){
      currentDirection = "up";
    }
  }

  if(currentDirection === "up"){
    yPos -= speed;

    if(yPos === 0){
      currentDirection = "left";
    }
  }

  if(currentDirection === "left"){
    xPos -= speed;

    if(xPos === 0){
      currentDirection = "down";
    }
  }



}
