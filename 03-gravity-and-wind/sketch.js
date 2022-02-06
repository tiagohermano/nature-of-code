function setup() {
  createCanvas(400, 400);
  mover = new Mover(200, 200);
}

function draw() {
  background(0);

  let gravity = createVector(0, 0.2);
  mover.applyForce(gravity);

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    mover.applyForce(wind);
  }

  mover.update();
  mover.edges();
  mover.show();
}
