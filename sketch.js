

function setup() {
  createCanvas(800,800);

}

function draw() {
  background("black");  

  translate(200,200);
  rotate(-90);
  angleMode(DEGREES);
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);

  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,80,0);
  pop();
  
  push();
  rotate(mnAngle);
  stroke("yellow");
  strokeWeight(7);
  line(0,0,120,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("white");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  /*stroke("red");
  strokeWeight(7);
  noFill();
  rotate(scAngle);
  arc(0, -20, 240, 240, scAngle, scAngle);

  stroke("yellow ");
  strokeWeight(7);
  noFill();
  rotate(mnAngle);
  arc(0, -20, 240, 240, mnAngle, mnAngle);

  stroke("white");
  strokeWeight(7);
  noFill();
  rotate(hrAngle);
  arc(0, -20, 240, 240, hrAngle, hrAngle);
*/
  // arc(50, 55, 70, 70, PI, PI + QUARTER_PI);
  // arc(50, 55, 80, 80, PI + QUARTER_PI, TWO_PI);

  drawSprites();
}