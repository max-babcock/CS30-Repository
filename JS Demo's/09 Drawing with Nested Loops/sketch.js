// Drawing with Nested Loops
// Max Babcock
// 10/09/2024

// Global
let gridSpacing = 60;

function setup() {
  createCanvas(windowWidth, windowHeight);
  loopReview();
}


function loopReview() {
  // Quickly recap single and nested loops
  for(let x= 0; x <= 40; x = x+20) { // 0, 20, 40
    for(let y = 0; y <= 40; y += 20){
      print(x,y);
    }

  }
}


function draw() {
  background(52,52,52);
  renderGrid();
}


function roundDist(x1, y1, x2, y2) {
  // takes 2 coordinate pairs and returns 
  // the dist between, but rounded
  let a = abs(x1 - x2);
  let b = abs(y1 - y2);
  let c = sqrt(sq(a) + sq(b));
  return round(c);
}


function renderGrid() {
  // use a mested loop to draw objects
  // in a grid arrangement
  for(let x = 0; x < width; x += gridSpacing) {
    for(let y = 0; y < height; y += gridSpacing) {
      let d = roundDist(x, y, mouseX, mouseY);

      if (d > 150)  fill(125,0,125);
      else fill(223,0,255);

      stroke(255,215,0);
      circle(x,y,gridSpacing);
      textAlign(CENTER, CENTER);
      fill(255,255,255);
      text(d, x,y);
    }
  }
}


