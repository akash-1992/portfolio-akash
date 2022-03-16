// Tried changing Shakespearen text to make it more mysterious by changing first person pronouns to context words

let lines
let spacewidth = 2
let wordHeight = 16
let j = 1
let k = 0

function preload() {
  lines = loadStrings('sonnet14Shkspr.txt') 
  // font = loadFont('MedievalSharp-Regular.ttf');
}

function setup() {
  createCanvas(600, 800)
  noLoop()
}

function draw() {
  textFont('MedievalSharp');
  background(50)
  textSize(wordHeight)
  fill(255)
  textAlign(LEFT, TOP)
  
  for (let i = 0; i < lines.length; i ++ ) {
    var doc = window.nlp(lines[i])
    let textToPrint = doc
    let nouns_strct = doc.match('#noun').not('#pronoun')
    let pronouns = doc.match('#pronoun')
    let verbs = doc.match('#verb')
    let rem = doc.not('#noun').not('#pronoun').not('#verb')
    
    text("original: " + textToPrint.all().text(), 25, 25 + (i+k) * 15)
    
    for (let j = 0; j < pronouns.text().split(" ").length; j++){
      if(pronouns.text().split(" ")[j] == "I"){
        pronouns.forEach(d => {
        d.replaceWith(getWord())
    })
      }
    }

    text("edited: " + textToPrint.all().text(), 25, 25 + (i+j) * 15)
    j = j + 2
    k = k + 2
    
    }

}

let wordReplacements = ["who", "where", "what", "why", "how"]

function getWord() {
  return wordReplacements[Math.floor(random() * wordReplacements.length)] 
}

// function mousePressed() {
//   shuffle(lines, true)
// }