let hasUserClicked = false;

let circleCatX;
let circleCatY;

let circleCarX;
let circleCarY;

let circleChildX;
let circleChildY;

let circleBoomX;
let circleBoomY;

let circleBirdX;
let circleBirdY;

let boomSound;
let carSound;
let birdSound;
let childSound;
let catSound;

function preload() {
  img = loadImage('assets/soundscape.png');
  catSound = loadSound('assets/cat.wav');
  carSound = loadSound('assets/car.wav');
  childSound = loadSound('assets/child.wav');
  boomSound = loadSound('assets/boom.wav');
  birdSound = loadSound('assets/bird.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(60)
  textAlign('center')

  circleCatX = random(width);
  circleCatY = random(height);

  circleCarX = random(width);
  circleCarY = random(height);

  circleChildX = random(width);
  circleChildY = random(height);

  circleBoomX = random(width);
  circleBoomY = random(height);

  circleBirdX = random(width);
  circleBirdY = random(height);
}

function draw() {

  background("black")

  

  if (hasUserClicked == false) {
    fill('white');
    text('Hi! Please click to start the audio.', width / 2, height / 2)

    
  } else {

    image(img, 0, 0, windowWidth, windowHeight);

    circle(circleBirdX, circleBirdY, 20);
    circle(circleCatX, circleCatY, 20);
    circle(circleBoomX, circleBoomY, 20);
    circle(circleCarX, circleCarY, 20);
    circle(circleChildX, circleChildY, 20);



    if (catSound.isPlaying() == false) {
      catSound.play();
    }

    let distanceCat = dist(mouseX, mouseY, circleCatX, circleCatY);
    let calculatedVolumeCat = map(0, 50, 1, 0);
    calculatedVolumeCat = constrain(calculatedVolumeCat, 0, 1);
    catSound.setVolume(calculatedVolume);






    if (carSound.isPlaying() == false) {
      carSound.play();
    }

    let distanceCar = dist(mouseX, mouseY, circleCarX, circleCarY);
    let calculatedVolumeCar = map(0, 200, 1, 0);
    calculatedVolumeCar = constrain(calculatedVolumeCar, 0, 1);
    carSound.setVolume(calculatedVolume);






    if (boomSound.isPlaying() == false) {
      boomSound.play();
    }

    let distanceBoom = dist(mouseX, mouseY, circleBoomX, circleBoomY);
    let calculatedVolumeBoom = map(0, 200, 1, 0);
    calculatedVolume = constrain(calculatedVolumeboom, 1);
    boomSound.setVolume(calculatedVolume);






    if (birdSound.isPlaying() == false) {
      birdSound.play();
    }

    let distanceBird = dist(mouseX, mouseY, circleBirdX, circleBirdY);
    let calculatedVolumeBird = map(0, 200, 1, 0);
    calculatedVolumeBird = constrain(calculatedVolumeBird, 0, 1);
    birdSound.setVolume(calculatedVolume);






    if (childSound.isPlaying() == false) {
      childSound.play();
    }

    let distanceChild = dist(mouseX, mouseY, circleChildX, circleChildY);
    let calculatedVolumeChild = map(0, 200, 1, 0);
    calculatedVolumeChild = constrain(calculatedVolumeChild, 0, 1);
    childSound.setVolume(calculatedVolume);

  }

}

function mouseClicked() {
  hasUserClicked = true;
}
