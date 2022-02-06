class Mover {
  constructor(x,y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.radius = 16;
  }

  // F = M.A or A = F/M
  applyForce(force) {
    // if the mass is always 1,
    // A = F
    this.acc.add(force);
  }

  edges() {
    if(this.pos.y >= height-this.radius) {
      this.pos.y = height-this.radius;
      this.vel.y *= -1;
    }

    if(this.pos.x >= width-this.radius) {
      this.pos.x = width-this.radius;
      this.vel.x *= -1;
    } else if (this.pos.x <= this.radius) {
      this.pos.x = this.radius;
      this.vel.x *= -1;
    }
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  show() {
    stroke(255);
    strokeWeight(2);
    fill(255,100);
    ellipse(this.pos.x, this.pos.y, this.radius*2);
  }
}
