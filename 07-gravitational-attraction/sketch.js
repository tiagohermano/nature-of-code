let movers = [];
let attractor;

function setup() {
  createCanvas(600, 600);
  //mover = new Mover(200, 50, 50);
  attractor = new Attractor(width/2, height/2, 50);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let m = random(50, 150);
    movers[i] = new Mover(x, y, m);
  }
}

function draw() {
  background(0, 5);
  movers.map(mover => {
    mover.update();
    mover.show();
    attractor.attract(mover);
    attractor.show();
  })
   
}
