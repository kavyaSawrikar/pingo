const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var boxs = [];
var divs = [];
var falls = [];

var a;
var circles=[];
function setup() {
  var canvas = createCanvas(800,1200);
  engine = Engine.create();
    world = engine.world;
  stroke(255)
  for(var i = 200; i <= 700; i=i+100){

  
  for(var j = 100; j <= 790; j=j+100){
    boxs.push(new Box(j,i,15));
  }
}
for(var d = 0; d <= 800; d=d+100){
  divs.push(new Ground(d,1100,15,300));
}

  ground = new Ground(400,1190,800,20)


  
  
  

  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  //a=height;
  //circles.push(width/2)

}

function draw() {
  //camera.zoom=camera.zoom+1

  Engine.update(engine);

  background(rgb(25,0,60));  
  
  
  //a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  /*for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 */

/*for (var j = 200; j < 825; j=j+100) 
  {
  for (var i = 100; i < 725; i=i+100) 
  {
  box1 = new Box(i,j,25,25)
  box1.display() 
  }
}*/

if(frameCount%30===0){
  falls.push(new Particle(random(200,600),100,15))
}

for(var j = 0; j < boxs.length; j++){

  boxs[j].display();
}
for(var d = 0; d < divs.length; d++){

  divs[d].display();
}

for(var f = 0; f < falls.length; f++){

  falls[f].display();
}




ground.display()

 drawSprites();

 textSize(30);
 fill("pink")
 stroke("lightblue")
text("Scroll down", 320,25) 
}


/*function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


/*function mouseReleased(){
  slingshot.fly();
}
*/
/*function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
*/