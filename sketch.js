
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
paper = new Paper(200,690,20);
dustbin1 = new Dustbin(620,690,80,20);
dustbin2 = new Dustbin(570,680,20,40);
dustbin3 = new Dustbin(730,680,20,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
paper.display();
dustbin1.display();
dustbin2.display();
dustbin3.display();

keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		paper.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}

