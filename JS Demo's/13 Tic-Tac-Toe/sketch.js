// Tic-Tac-Toe
// Max Babcock
// 11/6/2024
//

let tiles = []

let grid = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

let rectWidth, rectHeight;
const COLUMNS = 3, ROWS = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0);
  rectWidth = width / COLUMNS;
  rectHeight = height / ROWS;
}

function draw() {
  background(220);
  renderBoard();
  determineActiveSquare();
}


function renderBoard(){
  
}


function determineActiveSquare(){

}