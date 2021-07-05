class Ball {
  constructor(x,y,width){
    var options = {
      density : 1,
      frictionAir :0.005
    };
    this.body = Bodies.circle(x,y,width,options);
    this.width = width;
    this.height = width;
    World.add(world, this.body);
  }
  display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipse(0,0,this.width,this.height);
    pop();
  }
}