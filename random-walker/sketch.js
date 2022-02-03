let x;
let y;
let width = 200;
let height = 200;

function setup() {
  createCanvas(width, height);
  background(255);
}

let walkers = [
  { color: 'red', coordinates: { x: 0, y: width } },
  { color: 'magenta', coordinates: { x: height, y: width } },
  { color: 'yellow', coordinates: { x: 0, y: 0 } },
  { color: 'blue', coordinates: { x: width, y: 0 } },
]

function draw() {
  walkers.map(walker => initWalker(walker));
}

function initWalker(walker) {
  stroke(color(walker.color));
  strokeWeight(4);
  point(walker.coordinates.x, walker.coordinates.y);

  moveRandomly(walker);
}

function moveRandomly(walker) {
  let r = floor(random(4));
  switch (r) {
    case 0:
      if (walker.coordinates.x >= width)
        break
      walker.coordinates.x += 1
      break;
    case 1:
      if (walker.coordinates.x <= 0)
        break
      walker.coordinates.x -= 1
      break;
    case 2:
      if (walker.coordinates.y >= height)
        break
      walker.coordinates.y += 1
      break;
    case 3:
      if (walker.coordinates.y <= 0)
        break
      walker.coordinates.y -= 1
      break;
    default:
      break;
  }
}
