// Coordinate Systems
// Max Babcock
// 9/11/2024
// Looking how coordinates work in p5.js


function setup() {
  print("Setup runs once, at the start.")
  createCanvas(500, 400);
  //         width  heigth
}

function draw() {
  // runs over and over (targetting 60fps)
  background(220);
  drawCircles();
}

function drawCircles(){
 // draw some (5) circles
 
 // Circle (1)
 fill(191,0,255);  // R,G,B
 circle(0,0,50);
  
 // Circle (2)
 fill(32,178,170);
 circle(width,0,50);
 
// Circle (3)
fill(217,0,76);
circle(width,height,50);

// Circle (4)
fill(247,143,167);
circle(0,height,50);

// Circle (5)
fill(255,204,51);
circle(width/2,height/2,50);
}
 