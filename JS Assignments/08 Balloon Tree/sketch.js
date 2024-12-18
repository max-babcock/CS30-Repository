// Balloon Tree Assignment
// Max Babcock
// 11/13/2024
//

let scale = 15;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  
}

function draw() {
  drawTree(width/2, height/2, 90, 6);
}

function drawLine( x1,  y1,  x2,  y2,  depth) {
  //draw a line segment connecting (x1,y1) to (x2,y2)
  line(x1, y1, x2, y2);
}

function drawTree(x1, y1, angle, depth) {
  if (depth > 0) {
    let x2 = x1 + (cos(radians(angle))*depth*scale);//(I)
    let y2 = y1 - (sin(radians(angle))*depth*scale);//(II)
    
    //calculate endpoints of current branch           (I)
    //using trig ratios. Get shorter based on depth   (II)

    drawLine(x1, y1, x2, y2, depth);

    //for a 2-branch tree:
    drawTree(x2, y2, angle-18, depth-1);
    drawTree(x2, y2, angle+18, depth-1);
  }
}