// I have tried to create a manual controller which tries overlapping an upbeat rising musical piece over a sad instrumental music piece in the background. Just click on the grey canvas for the piece to start. Use keys - a,s,d : to input the initial beats of the upbeat music. Use keys - j,k,l : to input the converging beats of the upbeat music. Use keys - 1,2,3,4 : to change the position of cue time in the background sad music. Use keys - 7,8,9,0 : to change the playback rate of the background sad music.

let song1, song2, song3, song4, song5
let playToggle = false

function preload(){
  song1 = loadSound('./arrival.mp3')
  song2 = loadSound('./2.mp3')
  song3 = loadSound('./4.mp3')
  song4 = loadSound('./6.mp3')
  song5 = loadSound('./8.mp3')
  song6 = loadSound('./10.mp3')
  song7 = loadSound('./12.mp3')
}

function setup() {
  let cnv = createCanvas(100, 100);
  cnv.mousePressed(canvasPressed);
  //createCanvas(400, 400);
  //song1.loop()
  //song2.loop()
  
  song1.setVolume(0.7)
  song2.setVolume(0.7)
  song3.setVolume(0.7)
  song4.setVolume(0.7)
  song5.setVolume(0.5)
  song6.setVolume(0.5)
  song7.setVolume(0.5)
  
}

function draw() {
  background(220);
}

function canvasPressed() {
  if(!playToggle){
    song1.loop()

  }
  else{
    song1.stop()
  }
  playToggle = !playToggle
  
}

function keyPressed(e) {
  
  let soundLength = song1.duration()
  
  switch(e.key){
    case 'a':
      song2.loop()
      break;
    case 's':
      song3.loop()
      break;
    case 'd':
      song4.loop()
      break;
    case 'j':
      song5.loop()
      break;
    case 'k':
      song6.loop()
      break;
    case 'l':
      song7.loop()
      break;
      
    case '1':
      song1.jump(0)
      break;
    case '2':
      song1.jump(soundLength/4,soundLength - soundLength/4)
      break;
    case '3':
      song1.jump(soundLength/4*2,soundLength - soundLength/4*2)
      break;
    case '4':
      song1.jump(soundLength/4*3,soundLength - soundLength/4*3)
      break;
            
    case '7':
      song1.rate(0.75)
      break;
    case '8':
      song1.rate(1)
      break;
    case '9':
      song1.rate(1.25)
      break;
    case '0':
      song1.rate(1.5)
      break;
  }
}

function keyReleased(e) {
  switch(e.key){
    case 'a':
      song2.stop()
      break;
    case 's':
      song3.stop()
      break;
    case 'd':
      song4.stop()
      break;g
    case 'j':
      song5.stop()
    case 'k':
      song6.stop()
      break;
    case 'l':
      song7.stop()
      break;a
  }
  
}


  