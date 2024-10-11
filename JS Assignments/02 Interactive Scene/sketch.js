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
  drawCharacter();
  fill(191,0,255);
  text("Max Babcock",50,windowHeight - 50)
  textSize(30);
 
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
//Global
let x = 400
let y = 400
let radius = 50;
let eyeSize = 15
let pupilSize = 10
let mouthHeight = 20
let mouthWidth = 40

function drawCharacter(){
// Head
  fill(61,43,31);
  circle(x, y, radius * 2);

// Eyes
  fill(255,255,255);
  circle(x+15, y-10, eyeSize);

  fill(255,255,255);
  circle(x-15, y-10, eyeSize);

// Pupils
  fill(0);
  circle(x-15, y-10, pupilSize);

  fill(0);
  circle(x+15, y-10, pupilSize);

// Mouth
  fill(229,43,80);
  ellipse(x, y + 25, mouthWidth, mouthHeight);

// Movement
  if(keyIsDown(87) === true){
    y-=5;
  }

  if(keyIsDown(83) === true){
    y+=5;
  }

  if(keyIsDown(65) === true){
    x-=5;
  }

  if(keyIsDown(68) === true){
    x+=5;
  }

// Grow / Shrink
  if(keyIsDown(38) === true){
    faceSize(+1);
  }

  if(keyIsDown(40) === true){
    faceSize(-1);
  }
}

function faceSize(amount){
  radius+=amount;
  eyeSize+=amount;
  pupilSize+=amount;
  mouthHeight+=amount;
  mouthWidth+=amount;
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

