function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noFill();
  strokeWeight(3)
  stroke(48, 25, 52);
  beginShape();
  for (let i = 0; i < 1200; i++) {
    line(i, random() * windowWidth, i, random() * windowHeight)
  }
  endShape(CLOSE);
  
  strokeWeight(3)
  stroke(34, 139, 34,50);
  beginShape();
  for (let i = 0; i < 1200; i++) {
    line(i, random() * windowWidth, i, random() * windowHeight)
  }
  endShape(CLOSE);
  
  strokeWeight(3)
  stroke(152, 0, 0, 30);
  beginShape();
  for (let i = 0; i < 1200; i++) {
    line(i, random() * windowWidth, i, random() * windowHeight)
  }
  endShape(CLOSE);
  
  strokeWeight(8);
   for (let i = 0; i < 15; i++) {
    stroke((255 / 16) * i, 255, 255 / i + 1, 10 + i*10, 10 + i* 10);
    triangle((random() * windowWidth / 8) * i+10, random()*windowHeight / 6 * i - 10, random() * i,random() *i, random()*4*i, random()*3*i);
   }
}

function draw() {
}
