class Computer 
{
  constructor(x, y, width, height) 
  {
    //making computer still
    var options = 
    {
      isStatic: true
    };

    //created the comp player
    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    //added the object in world
    World.add(world, this.body);
  }

   display() 
   {
     var pos = this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     imageMode(CENTER);
     image(this.image, 0, 0, this.width, this.height);
     pop();
  }
}
