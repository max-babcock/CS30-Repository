// Interactive Scene
// Max Babcock
// 9/17/2024

// Setup
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  dayTime(); 
}

// Main Code
// DAYTIME FUNCTION -------------------------------------------

function dayTime() {
  // Draw Sky 
  drawSky();

  // Draw Sun 
  drawSun();

  // Draw Ground 
  drawGround();
}

// Draw Sky Function
function drawSky() {
  background(166, 231, 255); 
}

// Draw Sun Function
function drawSun() {
  noStroke();
  let radius = 70;
  fill(255, 223, 0);
  circle(radius + 30, radius + 30, radius * 2);
}

// Draw Ground Function
function drawGround() {
  noStroke();
  fill(34, 139, 34);
  rect(0, height - (height / 4), width, height / 4); 
}

// Adjust size when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
