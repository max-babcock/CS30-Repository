// OOP Pair Programming Starter Code
// Your Names
// The Date

let bullets = [];

// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
  
  for(let i = 0; i < bullets.length; i ++){
    bullets[i].update();
    bullets[i].display();
    bullets[i].isOnScreen();
  }
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.image = theImage;
    this.xSpeed = 5;
    this.ySpeed = 5;
  }

  update() {
    if(keyIsDown(87) === true){
      this.y-=this.ySpeed;
    }
  
    if(keyIsDown(83) === true){
      this.y+=this.ySpeed;
    }
  
    if(keyIsDown(65) === true){
      this.x-=this.xSpeed;
    }
  
    if(keyIsDown(68) === true){
      this.x+=this.xSpeed;
    }
  }

  display() {
    image(this.image, this.x, this.y)
  }

  handleKeyPress() {
    if(keyIsDown(32) === true){
      bullets.push(new Bullet(this.x+40, this.y-15, 0, 10, bulletImage));
    }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, bulletImage) {
    this.x = x;
    this.y = y;
    this.dx= dx;
    this.dy = dy;
    this.image = bulletImage;
  }

  update() {
    this.y -= this.dy
  }

  display() {
    image(this.image, this.x, this.y);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
    if(this.y < 0){
      bullets.shift();
      print(bullets);
    }
  }
}
