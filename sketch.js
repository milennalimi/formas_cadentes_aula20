
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var h10, h11, h12;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    var ball_options ={
	restitution:0.95,
	frictionAir:0.03	
	};

	var ground_options ={
    isStatic:true
	}

    ground = Bodies.rectangle(200, 370, 400, 20, ground_options);
	World.add(world, ground);


	//Crie os Corpos Aqui.
    h10 = Bodies.circle(100, 10, 20, ball_options);
	World.add(world, h10);

	h11 = Bodies.circle(200, 20, 11, ball_options);
	World.add(world, h11);

	h12 = Bodies.circle(300, 40, 20, ball_options);
    World.add(world, h12);
	
	fill(0, 255, 255);
	ellipseMode(CENTER);
	
	
	
	
  
}


function draw() {
  
	background(13);
  Engine.update(engine);
 
  ellipse(h10.position.x, h10.position.y, 50);
  ellipse(h11.position.x, h11.position.y, 59);
  ellipse(h12.position.x, h12.position.y, 67);
  
 
}



