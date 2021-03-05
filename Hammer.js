class Hammer{
    constructor(x,y,width,height){
        var options = {
            'density': 2,
            'friction': 1,
            'restitution': 0.5
    }
    this.body = Bodies.rectangle(x, y,width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(0,0);
    rotate(angle);
    
    rectMode(CENTER);
    fill("orange");
    stroke("white");
    strokeWeight(3);
    rect(pos.x,pos.y, this.width, this.height);
    pop();
  }
}