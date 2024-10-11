// Drawing with Loops Challenge
// Max Babcock
// 10/09/2024


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(30);
  drawCircles();
}


function drawCircles() {
// Top
  for(let x = 0; x < width; x += 40){
    fill(255,215,0);
    circle(x,0,20);
    stroke(255,215,0);
    line(x,0,mouseX,mouseY);
  }

// Right Side
  for(let y = 0; y < height; y += 40){
    circle(width,y,20);
    line(width,y,mouseX,mouseY);
  }

// Bottom
  for(let x = width; x > 0; x -= 40){
    circle(x,height,20);
    line(x,height,mouseX,mouseY);
  }

// Left Side
  for(let y = height; y > 0; y -= 40){
    circle(0,y,20);
    line(0,y,mouseX,mouseY);
  }

}