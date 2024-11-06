// Farm Game Demo
// Max Babcock
// 11/4/2024
// Creating a title-based gameboard w/ block pusher mechanics

let tiles= [] // 0 = blank,  1 = chicken,  2 = cow
let level = [
  [1,1,0,0,1],
  [0,1,1,0,1],
  [1,1,0,0,1],
  [0,1,0,1,1],
  [0,0,0,0,1]
]
const COLUMNS = 5, ROWS = 5, TILE_SIZE = 100;
let playerX =3, playerY = 4;

function preload(){
  for(let i = 0; i < 3; i++){
    tiles.push(loadImage("assets/" + i + ".png"))
  }
}

function setup() {
  createCanvas(COLUMNS*TILE_SIZE, ROWS*TILE_SIZE);
  level[playerY][playerX] = 2;
}

function draw() {
  background(220);
  renderBoard();
}

function swap(x1, y1, x2 ,y2){
  temp = level[y1][x1];
  level[y1][x1] = level[y2][x2];
  level[y2][x2] = temp;
}

function keyPressed(){
  if(keyCode === 87){
    swap(playerX, playerY, playerX, playerY - 1);
    playerY--
  }
  if(keyCode === 83){
    swap(playerX, playerY, playerX, playerY + 1);
    playerY++
  }
  if(keyCode === 65){
    swap(playerX, playerY, playerX-1, playerY);
    playerX--
  } else if (level[playerY][playerX - 1] === 1){
    if(playerX > 1 && level)
  }
  if(keyCode === 68){
    swap(playerX, playerY, playerX+1, playerY);
    playerX++
  }
}

function renderBoard(){   // col = x  row = y
  for(let col = 0; col < COLUMNS; col++){
    for(let row = 0; row < ROWS; row++){
      let pos = level[row][col];
      let currentImage = tiles[pos];
      image(currentImage, col*TILE_SIZE, row*TILE_SIZE);
    }
  }
}