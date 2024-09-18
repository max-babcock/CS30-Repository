// Interactive Scene
// Max Babcock
// 9/17/2024

// Setup
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  dayTime()
}

// Main Code

function dayTime() {
// Draw Sky --------------------------------------------------
  function drawSky() {
    background(166,231,255);
}

// Draw Sun --------------------------------------------------
function drawSun() {
  noStroke();
  let radius = 70;
  circle(radius + 30, radius + 30, radius * 2);
  fill(255,223,0);
}
drawSky()
drawSun()
}
