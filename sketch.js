var mr;
var fr;

function setup() {
  createCanvas(800,400);
  fr=createSprite(400, 200, 50, 50);
  fr.shapeColor="lightblue"
  mr=createSprite(400, 300, 80, 30);
  mr.shapeColor="lightblue"
}

function draw() {
  background(255,255,255); 
  mr.x=World.mouseX; 
  mr.y=World.mouseY;
  console.log(mr.x-fr.x);
  if (mr.x-fr.x<mr.width/2+fr.width/2 && fr.x-mr.x<mr.width/2+fr.width/2 && mr.y-fr.y<mr.height/2+fr.height/2 && fr.y-mr.y<mr.height/2+fr.height/2){
    mr.shapeColor="red";
    fr.shapeColor="red";
  }
  else {
    fr.shapeColor="lightblue";
    mr.shapeColor="lightblue";
  }
  drawSprites();
}