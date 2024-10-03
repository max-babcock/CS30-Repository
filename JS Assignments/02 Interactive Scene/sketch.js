// Interactive Scene
// Max Babcock
// 9/17/2024

//Global
let time = "day"

// Setup
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawTime(); 
 
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

// -----------------------------------------
// Draw Sky Function (DAY)
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


// NIGHT TIME FUNCTION ----------------------------------------

function nightTime(){
  // Draw Sky
  drawNightSky();

  // Draw Moon
  drawMoon();

  // Draw Ground
  drawNightGround();

}

// -----------------------------------------
// Draw Sky Funtion (NIGHT)
function drawNightSky() {
  background(0); 
}

// Draw Moon Function
function drawMoon(){
  noStroke();
  let radius = 70;
  fill(169,169,169);
  circle(radius + 30, radius + 30, radius * 2);
}

// Draw Ground Function
function drawNightGround() {
  noStroke();
  fill(1,50,32);
  rect(0, height - (height / 4), width, height / 4); 
}


// Draw Character (move with WASD)
function drawCharacter(){

}







// Switch between Day/Night
function drawTime(){
  if(time === "day"){
    nightTime();
  }
  else{
    dayTime();
  }
}

function mousePressed(){
  if(time === "day"){
    time = "night"
  }
  else time = "day"
}







// Adjust size when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
