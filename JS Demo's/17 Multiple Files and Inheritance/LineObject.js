// Child Class #2
// Extends indicates we will inherit from a parent
//
class LineObject extends AnimatedObject{
    constructor(){
        super(random(width), random(height));
    }

    move(){     // Override, but build on top of parent version
        super.move();   // Adds the parent move() code
        this.x -= 5;
        if(this.x < 0) this.x = width;
    }

    display(){     // Override
        if(mouseIsPressed) strokeWeight(10);
        else strokeWeight(2);

        line(this.x,this.y, this.x+15,this.y);
    }

}