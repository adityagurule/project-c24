var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= Matter.Bodies.rectangle(400,690,800,20,{isStatic:true});
	
	Matter.World.add(world, ground);

	rightSide= new Dustbin(600,630,20,100);
	leftSide= new Dustbin(400,630,20,100);
	bottom= new Dustbin(500,670,180,20);

	paper= new Paper(50,680,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  fill("brown");
  
  rect(ground.position.x, ground.position.y, 800,20);

  leftSide.show();
  rightSide.show();
  bottom.show();

  paper.show();
}

function keyPressed(){

	if(keyCode === UP_ARROW ){
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 85, y:-65 })

	}
	
}



