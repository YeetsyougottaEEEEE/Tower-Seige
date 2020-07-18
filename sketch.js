const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var cannonBall, ground1, ground2;
var yeeter;//sorry, couldnt think of another name

function preload(){
  polygon_img = loadImage("polygon.png");
}

function setup() {
  var canvas = createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  cannonBall = Bodies.circle(50,200,20);
  World.add(world,cannonBall);
  this.image(polygon_img);

  yeeter = new slingshot(this.cannonBall,{x:50,y:200});

  ground1 = new Ground(320,100,20,100);
  ground2 = new Ground(200,200,20,100);

  




}

function draw() {
  background(255,0,0);  
  
  imageMode(CENTER);
  image(polygon_img,cannonBall.position.x,cannonBall.position.y,40,40);

}

function mouseDragged(){
  Matter.Body.setPosition(this.cannonBall, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  yeeter.fly();
}

function keyPressed(){
  if(keyCode  === 32){
      yeeter.attach(this.cannonBall);
  }
}

