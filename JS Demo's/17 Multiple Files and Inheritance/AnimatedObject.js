// Parent Class - Animated Object
//
class AnimatedObject{
    constructor(x,y){
        this.x = x;     this.y = y;
        this.size = 1;
    }

    move(){ // have a 'wiggle' effect
        this.x += random(-2,2);
        this.y += random(-2,2);
    }

    display(){
        strokeWeight(4);
        point(this.x, this.y);
    }
    
}