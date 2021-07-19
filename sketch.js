//CREATED BY  AADI GOLECHA ON 19th JULY
//EPIC ARCHERY GAME PART 2 

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player,playerArcher, playerBase;
var computer, computerBase;

var bg;

var arrow;


function setup() 
{
  //created canvas of the size of window
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  bg = new BG();

  //created player and base for player
  playerBase = new PlayerBase(300, random(450, height - 300), 180, 150);
  player = new Player(285, playerBase.body.position.y - 153, 50, 180);
 
  //Create Player Archer Object
  playerArcher = new PlayerArcher(
    playerBase.body.position.x - 20,
    playerBase.body.position.y - 130,
    120,
    120,
    17.1,
    );

    //created computer and base for computer
  computerBase = new ComputerBase(width - 300,random(450, height - 300),180,150);

  computer = new Computer(width - 280, computerBase.body.position.y - 153,50,180);
  computerArcher = new ComputerArcher(width - 340,computerBase.body.position.y - 180,120,120,52);
  
  //Create an arrow Object
  arrow = new Arrow(playerArcher.body.position.x+20, playerArcher.body.position.y - 65,50,10,100.5);
  
}

function draw() {
  //image(".assets/background.png");
  background(180);
  

  Engine.update(engine);

 


  //displaying every object 

  bg.display();

  playerBase.display();
  player.display();
  

  computerBase.display();
  computer.display();
  
  playerArcher.display();
  computerArcher.display()

  //Display arrow();
  arrow.display();
  
}

//if Space (32) key is pressed call shoot function of playerArrow
function keyReleased()
{
  if(keyCode === 32)
    {
          arrow.shoot();
    }
}




