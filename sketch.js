var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var d1, d2, d3;
var d1body, d2body, d3body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	d1 = createSprite(width/2, 650, 200, 20);
	d1body = Bodies.rectangle(width/2, 650, 200, 20, {isStatic:true});
	
	d2 = createSprite(500, 610, 20, 100);
	
	d3 = createSprite(300, 610, 20, 100);


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  d1.shapeColor = "red";
  d2.shapeColor = "red";
  d3.shapeColor = "red";
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) 
 {
	
	Body.setStatic(packageBody, isStatic = false);
 }
}




