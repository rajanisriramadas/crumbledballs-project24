
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer1;
var sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10,sand11,sand12,sand13,sand14,sand15;
var stone;
var rubber;
var ground;
var world,engine;



function setup()
 {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	var options_ground={
		isStatic:true
	}
	ground=Bodies.rectangle(width/2,390,800,20,options_ground);
	World.add(world,ground);

	hammer1=new Hammer(50,50);
	sand1=new Sand(10,20);
	sand2=new Sand(20,30);
	sand3=new Sand(40,50);
	sand4=new Sand(50,40);
	sand5=new Sand(30,20);
	sand6=new Sand(60,20);
	sand7=new Sand(80,25);
	sand8=new Sand(85,60);
	sand9=new Sand(75,25);
	sand10=new Sand(90,35);
	sand11=new Sand(95,45);
	sand12=new Sand(100,55);


	

	var options_rubber={
		"friction":1 ,
		"density":5 ,
		"restitution":0.3 ,
		"mass":1
		
	}
	
	rubber= Bodies.rectangle(300,200,60,70,options_rubber);
	World.add(world,rubber);

	var options_stone={
		"friction":1 ,
		"density":5 ,
		"restitution":0.3 ,	
		"mass":3
	}

	stone=Bodies.rectangle(300,200,60,60,options_stone);
	World.add(world,stone);

	

	var options_iron={
		"friction":1 ,
		"density":5 ,
		"restitution":0.3 ,	
		"mass":4
	}

	iron=Bodies.rectangle(300,200,75,70,options_iron);
	World.add(world,iron);


}


function draw() 
{
  
  background("green");
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);
  
  
  ellipseMode(RADIUS);
ellipse(rubber.position.x,rubber.position.y,50,50);

rectMode(CENTER);
  rect(stone.position.x,stone.position.y,40,40);

 
  rectMode(CENTER);
  rect(iron.position.x,iron.position.y,65,50);

  hammer1.display();
  sand1.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();


  
  drawSprites();
 
}



