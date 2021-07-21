class PlayerArcher 
{
  constructor(x, y, width, height,angle) 
  {
    var options = 
    {
      isStatic : true
    }
    
    this.body = Bodies.rectangle(x, y, width, height,options);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.image = loadImage("./assets/playerArcher.png");
       
    
    World.add(world, this.body);
  }
    
  display() 
  {
    if (keyIsDown(RIGHT_ARROW) && this.angle < 17.5) 
    {
      this.angle += 0.02;
    }
    
    if (keyIsDown(LEFT_ARROW) && this.angle > 17) 
    {
      this.angle -= 0.02;
    }
        
    var pos = this.body.position;
    
    push();
    translate(pos.x, pos.y);
    rotate(this.angle);
    imageMode(CORNER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}