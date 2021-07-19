class Arrow 
{
    constructor(x, y, width, height, angle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.angle = angle;
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      this.image = loadImage("./assets/arrow.png");
      World.add(world, this.body);
    }

    shoot() 
    { 
        var velocity = p5.Vector.fromAngle(this.angle);
        velocity.mult(20); 
        Matter.Body.setStatic(this.body,false); 
        Matter.Body.setVelocity(this.body, { x: velocity.x, y: velocity.y }); 
    }
     
   display() {
      var pos = this.body.position;
      
      if (keyIsDown(RIGHT_ARROW) && this.angle < 100.7) 
        {
          this.angle += 0.05;
        }
    
        if (keyIsDown(LEFT_ARROW) && this.angle > 100 ) {
          this.angle -= 0.05;
        }

      push();
      translate(pos.x, pos.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
}