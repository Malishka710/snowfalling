const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine ,world,ground,backgroundImg ,bg, hour;
var snow = [];
var snow1;

function preload(){
  getBackgroundImg();
}

function setup() {
  createCanvas(900,600);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(450,500,900,20);
}

function draw() {
  if(backgroundImg)
background(backgroundImg)
var snow2;
if(frameCount%50===0){
  snow2 = new Snowfall(random(100,500),random(0,500))
}
if(snow2){
  snow2.display();
}

  drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
  console.log(response);
  var responseJSON = await response.json();
  console.log(responseJSON);
  var datetime = responseJSON.datetime;
  console.log(datetime);
  var hour = datetime.slice(11,13);
  console.log(hour);
  if(hour>=20 && hour<=04){
      bg="snow2.jpg";
  }
  else if(hour>=04 && hour<12){
      bg="snow1.jpg";
  }else{bg="snow3.jpg"}
  backgroundImg=loadImage(bg);
}