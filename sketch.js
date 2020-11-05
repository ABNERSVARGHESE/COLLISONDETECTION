function setup() {
  createCanvas(1200,800);
  movingrect=createSprite(200,400,40,80);
  movingrect.shapeColor="cyan";

  fixedrect=createSprite(400,300,80,40);
  fixedrect.shapeColor="brown";
}

function draw() {
  background(0);  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

  if(movingrect.x-fixedrect.x < movingrect.width/2+fixedrect.width/2 &&
    fixedrect.x-movingrect.x < movingrect.width/2+fixedrect.width/2 &&
    movingrect.y-fixedrect.y < movingrect.height/2+fixedrect.height/2 &&
    fixedrect.y-movingrect.y < movingrect.height/2+fixedrect.height/2){
    movingrect.shapeColor="yellow";
    fixedrect.shapeColor="yellow";
  }

  else{
    movingrect.shapeColor="cyan";
    fixedrect.shapeColor="brown";
  }
  drawSprites();
}