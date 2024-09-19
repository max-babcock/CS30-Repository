// Drawing with Loops
// Max Babcock
// 9/19/2024

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  myBackground();
  myForeground();
  //screen is updated at end of draw()
}

// USE FOR INTERACTIVE SCENE NIGHT TIME-------------------
function myBackground(){
  //use a loop to draw a gradient background

  let rectHeight = 1;
  //Y:  0  40  80  120  160  200
  for(let y = 0; y < height; y+= rectHeight){
    let value = map(y,0,width,0,255)
    fill(value,255-value,0,value);
    noStroke();
    rect(0, y, width, rectHeight);
  }
}

function myForeground(){
  //use FOR / WHILe loops to draw on the canvas
  //  loop var  ;  condition  ;  var modification
  // x: 0  40  80  120
  for (let x = 0 ; x < mouseX ; x = x +40){
    fill(0);
    circle(x, height/2, 40);
    fill(255);
    text(x, x,height/2);
  }


// Draw some Stars
randomSeed(999);
let starCount = 0;
fill(255,255,255); //red
while(starCount < 100){
  let x = random(0, width);
  let y = random(0, height);
  circle(x,y,10);
  starCount++;
}
}