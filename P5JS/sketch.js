let img;

function preload() {
  img = loadImage('./photo.jpg');
}

function setup(){
    createCanvas(windowWidth, windowHeight)
    image(img, 0, 0, windowWidth, windowHeight);
}

function draw(){
    
    noFill();
    strokeWeight(5);

    if (mouseX > width/2 - 30) {
        if (mouseX < width/2 - 30 + 50) {
            if (mouseY > height/2 - 30) {
                if (mouseY < height/2 - 30 + 50) {
                    circle(random(width), random(height), 5)
                }
            } 
        }
    }
        else{
            image(img, 0, 0, width, height);
        }
    

  
}

