var groundy;
var dustbin;
var paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	groundy = new Groundy(400, 400, 700, 20);
	dustbin = new Dustbin(500, 100, 100, 100);
	paper = new Paper(100, 20, 10);


	Engine.run(engine);
  
}


function draw() {
  background(0);
  rectMode(CENTER);
  Engine.update(engine);
  groundy.display();
  dustbin.display();
  paper.display();

  keyPressed();
  drawSprites(); 
}



function keyPressed(){
 if (keyCode === UP_ARROW){

    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85, y: -85})

 }
}