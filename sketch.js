
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball;
var ground;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1200);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var options = 
  {
    restitution:0.8,
  }
  ball = Bodies.circle(200,100,20,options);
  World.add(world,ball);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ground = new Ground(100,400,width,20);
  left = new Ground(800,600,20,120);
  right = new Ground(1000,600,20,120);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ellipse(ball.position.x,ball.position.y,20);
  Engine.update(engine);
  drawSprites();
 
}

function keyPressed()
{
	if(keyCode == RIGHT_ARROW)
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.05})
}

