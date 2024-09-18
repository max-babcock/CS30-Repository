// Drawing Challenge
// Max Babcock
// 9/13/2024

let headSize = 150;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(15);
  drawCircle();
  drawRect();
}

// Head
function drawCircle() {
  fill(148,0,211);
  circle(width/2, height/2, headSize);
}

// Body
function drawRect() {
  fill(148,0,211);
  rect(width/2 +  , height/2);
}
