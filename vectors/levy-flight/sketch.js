// https://en.wikipedia.org/wiki/L%C3%A9vy_flight

let pos;
let prev;

function setup() {
  createCanvas(400, 400);
  background(51);
  pos = createVector(200, 200);
  prev = pos.copy();
}

function draw() {
  stroke(255);
  strokeWeight(2);
  // point(pos.x, pos.y);
  line(pos.x, pos.y, prev.x, prev.y);
  prev.set(pos);

  let step = p5.Vector.random2D();

  let r = random(100);
  if (r < 1) {
    step.mult(25, 100);
  } else {
    step.mag(2);
  }
  
  pos.add(step);
}
