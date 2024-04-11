let hasUserClicked = false;

let circleX = 650
let circleY = 590

let riverSound;
let metalSound;
function preload() {
  riverSound = loadSound('assets/river.wav');
  metalSound = loadSound('assets/metal.wav')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(60)
  textAlign('center')
}

function draw() {

  background('pink');

  circle(circleX, circleY, 50);

  if (hasUserClicked == false) {
    text('Hi! Please click to start the audio.', width / 2, height / 2)
    

  } else {

    if (riverSound.isPlaying() == false) {
      riverSound.play()
    }

    if (metalSound.isPlaying() == false) {
      metalSound.play()
    }

    let calculatedVolumeRiver = map(
      mouseX, // the changing number
      0,      // min expected volume
      width,  // max expected number
      0,      // min output number
      0       // max output number
    )

    let distanceToCircle = dist(
      mouseX, mouseY,
      circleX, circleY
      )

    let calculatedVolumeMetal = map(
      distanceToCircle, // the changing number
      0,      // min expected volume
      200,  // max expected number
      1,      // min output number
      0       // max output number
    )

    calculatedVolumeMetal = constrain(
      calculatedVolumeMetal, 0, 1
    )

    riverSound.setVolume(calculatedVolume)
    metalSound.setVolume(calculatedVolume)

  }

}

function mouseClicked() {
  hasUserClicked = true;
}
