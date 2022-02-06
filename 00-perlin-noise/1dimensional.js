let inc = 0.01;
let start = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(51);
  stroke(255);
  noFill();
  beginShape(); 

  let xoff = start;
  for (let x = 0; x < width; x++) {
    stroke(255);

    let y = noise(xoff) * height;
    vertex(x, y);

    xoff += inc
  }
  endShape();

  start += inc

  // noLoop();
  
  // let x = map(noise(xoff1), 0, 1, 0, width);
  // let y = map(noise(xoff2), 0, 1, 0, height);

  // xoff1 += 0.02;
  // xoff2 += 0.02;

  // ellipse(x, y, 24, 24);
}
