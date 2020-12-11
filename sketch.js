
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;
 var wall1,wall2,wall3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	ball1=new paper(200,200,10,10)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  drawSprites();
 
}



