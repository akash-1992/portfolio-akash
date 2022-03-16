function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let shearAmountX = map(mouseX, 0, width, -HALF_PI, HALF_PI)
  let shearAmountY = map(mouseY, 0, height, -HALF_PI, HALF_PI)
  
  push()
    fill(mouseX,mouseY,mouseX+mouseY,60)
   translate(60,60)
   drawShape()
  pop()
  
  push()
  fill(mouseX,mouseY,mouseX+mouseY,120)
    translate(60,60)
    scale(-1, -1)
    drawShape()
  pop()
  
  push()
  fill(mouseX,mouseY,mouseX+mouseY,180)
    translate(60,60)
    scale(1, -1)
    drawShape()
  pop()
  
  push()
  fill(mouseX,mouseY,mouseX+mouseY,240)
    translate(60,60)
    scale(-1, 1)
    drawShape()
  pop()
  
  translate(width/2, height/2)

  shearX(shearAmountX)
  shearY(shearAmountY)
  
  for(let i = 0; i<mouseX; i++){
    // noStroke()
    fill(mouseX,mouseY,mouseX+mouseY,i%255)
    rotate(2*i)
    drawShape()
  }
 
}

function drawShape(){
  beginShape();
    vertex(30, 0);
    vertex(60, 0);
    vertex(60, 20);
    vertex(20, 20);
    vertex(20, 40);
    vertex(60, 40);
    vertex(60, 60);
    vertex(30, 60);
  endShape(CLOSE);
}
