let movers = [];

function setup() {
  createCanvas(400, 400);
  // const ballA = new Mover(100, 200, 2);
  for (let i=0; i<6; i++) {
    movers.push(new Mover(random(width), 100, random(3,5)));
  }
  // movers = [ballA];
}

function createWeightForce(mass) {
  const gravity = createVector(0, 0.2);
  const weightForce = p5.Vector.mult(gravity, mass);
  return weightForce;
}

function draw() {
  background(0);

  fill(255, 125);
  noStroke();
  rect(0, height/2, width, height/2);

  movers.map(mover => 
    mover.applyForce(createWeightForce(mover.mass))
  );

  if (mouseIsPressed) {
    let wind = createVector(0.1, 0);
    movers.map(mover => mover.applyForce(wind));
  }

  movers.map(mover => {
    if (mover.pos.y > height/2) {
      mover.drag();    
    }
    mover.update();
    mover.show();
  })
}
