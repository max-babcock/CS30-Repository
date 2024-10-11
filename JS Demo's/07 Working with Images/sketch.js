// Working with Images
// Max Babcock
// 10/04/2024

let lionL, lionR;
let facingRight = true;
let pinImages = []; // empty array
let currentFrame = 0;

function preload() {
   lionL = loadImage("assets/lion-left.png");
   lionR = loadImage("assets/lion-right.png");
  // loading multiple images
   for(let i = 0; i < 9; i++ ){ // i= 0 1, 2, ,3, 4, 5, 6, 7, 8
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));  
   } 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  imageMode(CENTER);
  drawLions();
  drawPinwheel();
}

function drawPinwheel() {
  // pinwheel frames 0-8 (pinImages array)
  image(pinImages[currentFrame], width/2, height/2);
  if(frameCount % 1 === 0){ // every 5th frame
    currentFrame++; // increase by 1
    if(currentFrame > 8) currentFrame = 0;
  }
}

function drawLions() {
  // check the mouse movement direction (x)
  if (mouseX > pmouseX) facingRight = true;
  else if(mouseX < pmouseX) facingRight = false;

  // display one of the lion images
  if(facingRight){
    image(lionR, mouseX, mouseY, lionR.width/2, lionR.height/2);
  }
  else{
    image(lionL, mouseX, mouseY, lionL.width/2, lionL.height/2);
  }
}
