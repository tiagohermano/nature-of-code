let angle = 0;
function setup() {
  createCanvas(400,400);
  angleMode(RADIANS);
}

function draw() {
  background(146, 83, 161);
  noStroke();
  fill(240, 99, 164);
  rectMode(CENTER);
  translate(200, 200);
  rotate(angle);
  rect(0, 0, 128, 64);
  angle += 0.05;
}
