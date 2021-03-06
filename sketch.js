const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper;

function preload()
{

}

function setup() {
	createCanvas(1200,500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,480,1200,20);
	paper = new Paper(200,470,20);
	dustbin = new Dustbin();

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(192,192,192);
  
  ground.display();
  paper.display();
  dustbin.display();

  drawSprites();
}

function keyPressed(){

  if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paper.body,paper.body.position,{x:82,y:-82});
  }
}

