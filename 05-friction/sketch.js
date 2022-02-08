let movers = [];

function setup() {
  createCanvas(400, 400);
  const ballA = new Mover(100, 200, 2);
  movers = [ballA];
}

function createWeightForce(mass) {
  const gravity = createVector(0, 0.2);
  const weightForce = p5.Vector.mult(gravity, mass);
  return weightForce;
}

function draw() {
  background(0);

  movers.map(mover => 
    mover.applyForce(createWeightForce(mover.mass))
  );

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    movers.map(mover => mover.applyForce(wind));
  }

  movers.map(mover => {
    mover.friction();
    mover.update();
    mover.show();
  })
}
