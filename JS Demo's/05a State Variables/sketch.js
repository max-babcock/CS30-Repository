// Project Title
// Max Babcock
// 9/25/2024

// Global Variables
let currentColor = 0;   // 0, 1, 2
let circleSize = 50;
let growing = false;  // 2-state (true/false)
let myColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myColor = color(50,23,77);    // 3-tuple
}

function draw() {
  background(50);

  // Circle Code - fill value
  switch(currentColor){ // what is the value of current nigger
    case 0:
      fill(1,68,33);  break;
    case 1:
      fill(myColor);    break;
    case 2:
      fill(10,126,140); break;
  }

// Circle: change the color state (variable)
if(frameCount % 30 === 0) {  // true once each 30 fps
  // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
  currentColor ++;
  if(currentColor > 2){currentColor = 0;} 
}


// Circle: grow/shrink
if(growing === true)  circleSize += 2;
else circleSize -= 2;

// Circle: Actually draw it!
circle(width/2, height/2, circleSize);
}

function keyPressed(){
  // called automatically when a key is pressed
  if(key === "a"){
    growing = !growing;
  }
}