let circleSize;
let lineThickness;
let rolledNumber;
let rolledNumbers = {};

function setup() {
  let canvasSize = min(windowWidth * 0.9, windowHeight * 0.9); // Responsive size
  let canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent('canvas-container');
  frameRate(5); 
  background(255); 
}
function draw() {
  drawNewCircle();
  
 
  fill(255);
  noStroke();
  rect(width / 2 - 50, height / 2 - 20, 100, 40);

 
  fill(0); 
  textSize(32);
  textAlign(CENTER, CENTER);
  text(rolledNumber, width / 2, height / 2);
}

function drawNewCircle() {
 
  rolledNumber = int(random(4, 25));

  
  circleSize = map(rolledNumber, 4, 24, 70, 700);


  let thicknessRoll = int(random(1, 7));
  

  lineThickness = map(thicknessRoll, 1, 6, 1, 30);

 
  strokeWeight(lineThickness);


  if (rolledNumbers[rolledNumber] === undefined) {

    rolledNumbers[rolledNumber] = color(0);
  } else {

    rolledNumbers[rolledNumber] = color(random(255), random(255), random(255));
  }

  stroke(rolledNumbers[rolledNumber]);


  noFill(); 
  ellipse(width / 2, height / 2, circleSize * 2, circleSize * 2);
}
