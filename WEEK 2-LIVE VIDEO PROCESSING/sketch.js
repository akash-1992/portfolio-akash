let video;
let x=0;

function setup() {
  createCanvas(400, 300);
  pixelDensity(1)
  
  video = createCapture(VIDEO)
  video.size(width, height)
  background(51);
}

function draw() {
  video.loadPixels();
  let w = video.width;
  let h = video.height;
  copy(video, w/3, 0, 1, h, x, 0, 1, h);
  x = x + 1;
  if (x>width){
    x=0
  }
  stepSize = 4
  for (let y=0; y< height; y+=stepSize){
    for (let x=0; x< width; x+=stepSize){
      
      const i = (y * width + x) * 4
      fill(video.pixels[i+1], video.pixels[i], video.pixels[i+2], video.pixels[i+3])
    
      text(char(video.pixels[i]%128),x,y)
    }
  }
}