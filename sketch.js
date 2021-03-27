var r1,r2,r3,ground;
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

	ground = new Ground(600,height,1200,20)
	r1= new Dustbin(600,680,200,20);
	r2=new Dustbin(500,615,20,150);
    r3=new Dustbin(700,615,20,150);

   circle = new Paper(80,650,60) ;
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
  drawSprites();
  r1.display();
  r2.display();
  r3.display();
  ground.display();
  circle.display();
  paper();
  

}

function paper(){

if (keyCode===UP_ARROW){

  Matter.Body.applyForce(circle.body, circle.body.position,{ x:40, y: -40});



}





}

