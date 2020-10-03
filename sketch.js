
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    groundSprite=createSprite(250,200,50,40);
	groundSprite.shapeColor=color(0);
	ground = Bodies.rectangle(250,200,50,40 , {isStatic:true} );
	 World.add(world, ground);
	 groundSprite2=createSprite(300,200,50,40);
	 groundSprite2.shapeColor=color(0);
	 ground2 = Bodies.rectangle(300,200,50,40 , {isStatic:true} );
	  World.add(world, ground2);
	  groundSprite3=createSprite(350,200,50,40);
	  groundSprite3.shapeColor=color(0);
	  ground3 = Bodies.rectangle(350,200,50,40 , {isStatic:true} );
	   World.add(world, ground3);
	   groundSprite4=createSprite(400,200,50,40);
	   groundSprite4.shapeColor=color(0);
	   ground4 = Bodies.rectangle(400,200,50,40 , {isStatic:true} );
		World.add(world, ground4);
	bob1=new Ball (410,550,60)
	bob2=new Ball (260,550,60)
	bob3=new Ball (290,550,60)
	bob4=new Ball (350,550,60)
	chain1 = new Rope(bob2.body,ground,0,0);
	chain2 = new Rope(bob3.body,ground2,0,0);
	chain3 = new Rope(bob4.body,ground3,0,0);
	chain4 = new Rope(bob1.body,ground4,0,0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  rect(ground.position.x,ground.position.y,50,40);
  rect(ground2.position.x,ground2.position.y,50,40);
  rect(ground3.position.x,ground3.position.y,50,40);
  rect(ground4.position.x,ground4.position.y,50,40);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(bob1.body,bob1.body.position, {x:-2,y:-5})
	}
	}


