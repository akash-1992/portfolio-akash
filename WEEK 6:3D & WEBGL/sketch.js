let sword;
let helmet;
let bownarrow;
let armor;
let armortexture;
let helmettexture;
let texture1;
let texture2;
let helmettexture2;
let swordtexture;

function preload() {
  sword = loadModel('sword.obj')
  helmet = loadModel('helmet.obj')
  shield = loadModel('shield.obj')
  armor = loadModel('armor.obj')
  knife = loadModel('knife.obj')
  wall = loadImage("wall.jpeg")
  floor = loadImage("floor.jpeg")
  armortexture = loadImage("armortexture.jpeg")
  helmettexture = loadImage("helmettexture.jpeg")
  helmettexture2 = loadImage("helmettexture2.jpeg")
  texture1 = loadImage("texture1.jpeg")
  texture2 = loadImage("texture2.jpeg")
  swordtexture = loadImage("swordtexture.jpeg")
}

function setup() {
  createCanvas(400, 400, WEBGL);
  noStroke()
}

function draw() {
  background(250);
  
  ambientLight(255)
  
//   let locX1 = mouseX + height;
//   let locY1 = mouseY + width;
//   directionalLight(50, 50, 91, 100, 100, 100);
  
  let locX2 = mouseX - height / 2;
  let locY2 = mouseY - width / 2;
  pointLight(25, 25, 191, locX2, locY2, 250);
  
  push()
    translate(0, 0, 0)
    ambientMaterial(179)
    texture(wall)
    plane(400)
    line(-200, 75, 0, 200, 75, 0);
    stroke(255);
    
  pop()
  
  
  push()
    rotateX(PI/4)
    ambientMaterial(255,0,0)
    texture(floor)
    //rotateY(PI/3)
    //rotateZ(PI/3)
    translate(0, 50, 0)
    plane(270)
  pop()
  
  push()
    translate(5, 10, 308)
    normalMaterial(175, 173, 169)
    texture(helmettexture2)
    rotateZ(PI)
    rotateY(PI/3)
    if (mouseX>180 && mouseX<280){
      rotateY(frameCount * 0.01)
    }
    model(helmet)
  pop()
  
   push()
    translate(-17, 20, 280)
    texture(swordtexture)
    rotateZ(PI)
    normalMaterial(175, 173, 169)
    model(sword)
  pop()
  
   push()
    translate(25, 5, 250)
    specularMaterial(175, 173, 169)
    texture(helmettexture)
    rotateZ(-PI/10)
    rotateX(12*PI/8)
    rotateY(3*PI/4)
    if (mouseX>280 && mouseX<380){
      rotateZ(frameCount * 0.01)
    }
    model(shield)
  pop()
  
   push()
    translate(-21, 8, 230)
    specularMaterial(175, 173, 169)
    texture(armortexture)
    rotateZ(12.2*PI/7)
    rotateX(12*PI/8)
    rotateY(3*PI/4)
    if (mouseX>80 && mouseX<180){
      rotateZ(frameCount * 0.01)
    }
    model(armor)
  pop()
  
   push()
    translate(10, -35, 250)
    normalMaterial(175, 173, 169)
    texture(swordtexture)
    rotateZ(12.2*PI/7)
    rotateX(12*PI/8)
    rotateY(3*PI/4)
    //rotateY(PI/4)
    model(knife)
  pop()
  
  
 
}