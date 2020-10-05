var car,wall,speed,weight,deformation;

function setup() {
 

  speed= 75
  weight = random(400,1500);

  wall=createSprite(1323,200,60,height/2);
  
  car = createSprite(70,200,50,50);
  car.velocityX = speed;

  
  
}

function draw() {
  createCanvas(1600,400);

  background(255,255,255);  

  wall.shapeColor=color(80,80,80);

 /* if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2) {
  return true;
    }*/
  
if (car.x>=1200) {
  car.velocityX=0;
}

  if (wall.x-car.x < (car.width+wall.width)/2) 
  {
      deformation=0.5 * weight * speed* speed/22509;
     if(deformation>180)
{    
   car.shapeColor=color(255,0,0);
}   
   if (deformation<180 && deformation>100 )
 {
   car.shapeColor=color(230,230,0);
  }

  if (deformation<100)
  {
    car.shapeColor=color(0,255,0);
  }
   }

  
  drawSprites();
}