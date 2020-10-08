var car,carImage1,carImage2
var wall,wallImage

var weight,speed


function preload(){


  speed=random(55,90);
  weight=random(400,1500);
  }
  
  function setup() {
  
    createCanvas(1500,400);

    car=createSprite(50, 200, 50, 50);
   car.shapeColor="blue"
   car.velocityX=speed
    wall=createSprite(1450,200,40,height/2);

  }
  
  function draw() {
    background(255,255,255); 
  if (wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=false;
var deformation=0.5*weight*speed*speed/22509;
if(deformation>180){
  car.shapeColor="red"
}
if(deformation<180&&deformation>100){
  car.shapeColor="yellow"
}
if(deformation<100){
  car.shapeColor="green"
}

  }
    drawSprites();
  }