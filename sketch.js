const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ground,box,ball;
var world,engine
function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
 ground= new Ground(360,290,250,10)
 box1= new Box(270,270,30,40)
 box2= new Box(300,270,30,40)
 box3= new Box(330,270,30,40)
 box4= new Box(360,270,30,40)
 box5= new Box(390,270,30,40)
 box6= new Box(420,270,30,40)
 box7= new Box(450,270,30,40)
 box8= new Box(300,235,30,40)
 box9= new Box(330,235,30,40)
 box10= new Box(360,235,30,40)
 box11= new Box(390,235,30,40)
 box12= new Box(420,235,30,40)
 box13= new Box(330,195,30,40)
 box14= new Box(360,195,30,40)
 box15= new Box(390,195,30,40)
 box16= new Box(360,155,30,40)
 ball= new Ball(200,200,20,20)
 slingshot = new SlingShot(ball.body,{x:140, y:120}); 
}

function draw() {
  background("red");
  Engine.update(engine)
  ground.display()
  box1.display()
  box2.display() 
  box3.display() 
  box4.display() 
  box5.display() 
  box6.display() 
  box7.display()   
  box8.display()
  box9.display() 
  box10.display() 
  box11.display() 
  box12.display() 
  box13.display() 
  box14.display() 
  box15.display()
  box16.display()  
  ball.display()
  slingshot.display()
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  Slingshot.fly();
}