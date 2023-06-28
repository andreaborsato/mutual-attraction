// Mutual Attract// The Nature of Code

let movers = [];
let sun1;
let sun2
let pos;
let vel;
let m;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  sun1 = new Mover(windowWidth/2, windowHeight/2, 0, 0, 100);
  //sun2 = new Mover(100, 100, 0, 0, 300);
  // movers[0] = new Mover(300, 200, 0, 5, 10);
  // movers[1] = new Mover(100, 200, 0, -5, 10);
  // movers[2] = new Mover(200, 300, -5, 0, 10);
  // movers[3] = new Mover(200, 100, 5, 0, 10);
  
}

function mousePressed() {
  
    let pos = p5.Vector.random2D();
    let vel = pos.copy();
    vel.setMag(random(10, 15));
    pos.setMag(random(10, 150));
    vel.rotate(PI / 2);
    let m = random(10, 15);
    let star = new Mover(mouseX, mouseY, vel.x, vel.y, random(.1,100));
  movers.push(star);
  
}

function draw() {
  background(0);
  //translate(width / 2, height / 2);

  for (let mover of movers) {
    sun1.attract(mover);
    //mover.attract(sun1);
    //sun2.attract(mover);
    for (let other of movers) {
      if (mover !== other) {
        mover.attract(other);
        // stroke(255);
        // line(mover.pos.x, mover.pos.y, other.pos.x, other.pos.y);
      }
    }
  }

  for (let mover of movers) {
    mover.update();
    mover.show();
  }
   sun1.show();
  //sun1.update();
  //sun1.pos.x++
  //sun2.show();
  
}
