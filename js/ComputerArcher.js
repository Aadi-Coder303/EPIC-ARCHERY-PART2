class ComputerArcher 
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
        this.image = loadImage("./assets/computerArcher.png");
    
        World.add(world, this.body);
      }
    
      display() 
      {
        
        var pos = this.body.position;
    
        push();
        translate(pos.x, pos.y);
        rotate(this.angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    
        pop();
      }
}