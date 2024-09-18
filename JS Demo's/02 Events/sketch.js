// Events (Mouse/Keyboard)
// Max Babcock
// 9/12/24

// Global Variable
let tSize = 40

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  // if(mouseIsPressed) tSize = random(20,80);

  textSize(tSize);
  let position = mouseX + ", " + mouseY;
  text(position, mouseX, mouseY);

  fill(255,0,0);
  circle(width/2, height/2, 100);

  fill(0,255,0);
  square(width/2, height/2, 50)

}


function mousePressed(){
  // This is called AUTOMATICALLY...
  tSize = random(20, 90);
}