// Drawing Challenge
// Max Babcock
// 9/13/2024

let rX = 60;  let rY = 50;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER); // CORNER
}

function draw() {
  background(15);
  // moving rectangle
  if(keyIsPressed && key==="w"){
    // good to use in draw() when we 
    // want to detect button being held.
    rY -= 2;
    if(rY > height) rY = 0;
  }
    fill(148,0,211);
  rect(rX, rY, 100, 50, 10, 10, 0, 10);
}

function keyPressed(){
  // dont call this function,
  // it runs automatically!
if(keyCode === DOWN_ARROW){ // 40 - ↓
  rY += 50;
}
}