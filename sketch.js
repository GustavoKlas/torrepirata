const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  cannonBaseImage = loadImage("./assets/cannonBase.png");
  cannonImage = loadImage("./assets/canon.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannonBase = Bodies.rectangle(170,140, 200, 200, options);
  World.add(world,cannonBase);

  cannon = Bodies.rectangle(170,170, 200, 200, options);
  World.add(world,cannon);
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  
  push();
  imageMode(CENTER);
  image(cannonImage, cannon.position.x,cannon.position.y, 200, 200);
  pop();

  push();
  imageMode(CENTER);
  image(cannonBaseImage, cannonBase.position.x,cannonBase.position.y, 200, 200);
  pop();

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  

  
  
}
