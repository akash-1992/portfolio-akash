let i = 0;
let cirColor1 = 255;
let cirColor2 = 255;
let cirColor3 = 255;

function setup() {
  createCanvas(400, 400);
  background(255);
}

function draw() {
  noStroke();
  
  let mapColor = map(mouseX,0,400,0,255)
  
  fill(mapColor,mouseX%255,mouseY%255)
  
  triangle(width,0,width,height,mouseX, mouseY)
  
  fill(mapColor,mouseX%255,mouseY%255, 60)
  
  triangle(width,0,0,0,mouseX, mouseY)
  
  fill(mapColor,mouseX%255,mouseY%255, 100)
  
  triangle(width,height,0,height,mouseX, mouseY)
  
  fill(mapColor,mouseX%255,mouseY%255,20)
  
  triangle(0,0,0,height, mouseX, mouseY)
  
  fill(cirColor1,cirColor2,cirColor3);
  circle(i%width,height/2,25,25)
  i+=mouseY/25
}

function keyPressed(){
  cirColor1=keyCode*2
  cirColor2 =keyCode/2
  cirColor3=keyCode
}