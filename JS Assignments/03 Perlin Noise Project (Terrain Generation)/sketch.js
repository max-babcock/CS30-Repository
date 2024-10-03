// Terrain Generation
// Max Babcock
// 10/02/2024


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  drawFlag();
  genTerrain();
  
}


function draw() {
  
}

// Generate Terrain

// Global
let h = 3;
let w = 20;


function genTerrain(){
  fill(0);
  
  let tallestPeak = 0;
  let peakX = 0;

  for(let x = 0; x < width; x += 1){
    let rectHeight = noise(h);
    rectHeight = map(rectHeight, 0, 1, 10, 800);
    if (rectHeight > tallestPeak) {
      tallestPeak = rectHeight;
      peakX = x;
    }
    rect(x, height, w, -rectHeight);
    h += 0.01
    if(rectHeight > tallestPeak){
      tallestPeak = rectHeight;  
    }
  }
  drawFlag(peakX, height - tallestPeak);
}

// Interactive Widths
function keyPressed(){
  if (keyCode === 39){
    background(220);
    genTerrain();
    w += 2;
  }
  else if (keyCode === 37){
    background(220);
    genTerrain();
    w -= 2;
    if (w <= 1){
      w = 1;
    }
  }
}

// Draw Flag
function drawFlag(x,y){
  // RECTANGLE
  fill(193,154,107);
  noStroke();
  rect(x,y,4,-30);
  // TRIANGLE
  fill(255,0,0);
  noStroke();
  triangle(x, y-30, x, y-15 , x+15, y-22.5);

}
