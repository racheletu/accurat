// Recreate the following image:
// https://user-images.githubusercontent.com/1799710/119380332-df3d2080-bcc0-11eb-897d-b7339b486d80.png

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('steelblue');
  noStroke();
  
  //cerchi verdi
  for(let i = 0; i < 20; i++) {
    let y = (map(i, 0, 20, 80, 200));
    let r = (map(i, 0, 20, 80, 0));
    let W = color("white");
    let G = color("green");
    let c = lerpColor(W, G, sin(i)/2+0.5);
    
    fill(c);
    circle(200, y, r);
  }
  
  //cerchi blu
  for(let i = 0; i < 20; i++) {
    let x = (map(i, 0, 20, 80, 200));
    let r = (map(i, 0, 20, 80, 0));
    let W = color("white");
    let B = color("blue");
    let c = lerpColor(W, B, sin(i)/2+0.5);
    
    fill(c);
    circle(x, 200, r);
  }
  
  //cerchi rossi
  for(let i = 0; i < 20; i++) {
    let x = (map(i, 0, 20, 320, 200));
    let r = (map(i, 0, 20, 80, 0));
    let W = color("white");
    let R = color("red");
    let c = lerpColor(W, R, sin(i)/2+0.5);
    
    fill(c);
    circle(x, 200, r);
  }
  
  //cerchi gialli
  for(let i = 0; i < 20; i++) {
    let y = (map(i, 0, 20, 320, 200));
    let r = (map(i, 0, 20, 80, 0));
    let W = color("white");
    let O = color("orange");
    let c = lerpColor(W, O, sin(i)/2+0.5);
    
    fill(c);
    circle(200, y, r);
  }
}