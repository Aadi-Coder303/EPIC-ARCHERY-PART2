class BG 
{
    constructor(x, y, width, height)
    {
        //created a body of the size of window and given background img
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/background.png");
        
        //added the object in world
        World.add(world, this.body);
    }
      
    
    display() 
    {
        //displaying the bg using image
        imageMode(CENTER);
        image(this.image, windowWidth/2, windowHeight/2, windowWidth, windowHeight);
    }
      
    
}