let inc = 0.01;

function setup () {
  createCanvas(200,200);
}

function draw () {
  let xoff = 0;
  let yoff = 0;

  loadPixels();
  for(let y = 0; y < width; y++) {
    for(let x = 0; x < width; x++) {
      let index = (x + y * width) * 4;
      let r = noise(xoff) * 255;
      pixels[index+0] = r; // red
      pixels[index+1] = r;   // green
      pixels[index+2] = r;   // blue
      pixels[index+3] = 255; // alpha

      xoff += 0.01;
    }
  }
  updatePixels();
  noLoop();
}
