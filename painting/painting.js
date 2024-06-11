function setup() {
  let canvasSize = min(windowWidth * 0.9, windowHeight * 0.8); // Responsive size
  let canvas = createCanvas(canvasSize, canvasSize);
  canvas.parent('canvas-container');
  noLoop();
}

function draw() {
  background(230);

  let rowHeight = height / 3;

  // Draw light gray triangles in the first row
  for (let i = 0; i < 50; i++) {
    fill(200);
    stroke(200);
    drawRandomEquilateralTriangle(0, 0, width, rowHeight);
  }

  // Draw gray triangles in the second row
  for (let i = 0; i < 50; i++) {
    fill(150);
    stroke(150);
    drawRandomEquilateralTriangle(0, rowHeight, width, rowHeight);
  }

  // Draw dark gray triangles in the third row
  for (let i = 0; i < 50; i++) {
    fill(100);
    stroke(100);
    drawRandomEquilateralTriangle(0, 2 * rowHeight, width, rowHeight);
  }
}

function drawRandomEquilateralTriangle(x, y, w, h) {
  let centerX = x + random(w);
  let centerY = y + random(h);
  let sideLength = random(w * 0.1, w * 0.35);
  
  let height = sideLength * sqrt(3) / 2;

  let x1 = centerX;
  let y1 = centerY - 2 * height / 3;
  
  let x2 = centerX - sideLength / 2;
  let y2 = centerY + height / 3;
  
  let x3 = centerX + sideLength / 2;
  let y3 = centerY + height / 3;
  
  triangle(x1, y1, x2, y2, x3, y3);
}

function windowResized() {
  setup();
  draw();
}
