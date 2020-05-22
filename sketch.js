const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var box1;
var ground, base1, base2;
var ball,slingshot;

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(610,1200,20,height);
  base1 = new Ground(560,300,20,100);
  base2 = new Ground(810,250,20,100);

  block1 = new Box(540,270,50,70);

  box1 = new Box(710,320,70,70);
  box2 = new Box(930,320,70,70);
  box3 = new Box(710,240,70,70);
  box4 = new Box(920,240,70,70);
  box5 = new Box(820,160,70,70);

  ball = new Ball(310,200);
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot = new SlingShot(ball.body,{x: 200, y: 50});

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  strokeWeight(4);

  ground.display();
  base1.display();
  base2.display();
  block1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  ball.display();
  slingshot.display();
}
function mouseDragged(){
  ball.body.position.x = mouseX;
  ball.body.position.y = mouseY;
}

function mouseReleased() {
slingShot.fly();
}