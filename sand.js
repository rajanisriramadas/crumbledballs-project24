class Sand{
    constructor(x, y) {
        var options = {
            'restitution':1.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.rectangle(x, y,20,options);
        this.radius = 10;
               
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke("red");
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
}

}