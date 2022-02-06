//Matrix Rain Production by Gil https://editor.p5js.org/Gil/sketches/UsW9zPgNL

var righteyeX = 850;
var righteyeY = 405;
var righteyeDirection = 1;

var lefteyeX = 1175;
var lefteyeY = 405;
var lefteyeDirection = 2;

var glassesshadowX = 900;
var glassesshadowY = 430;
var glassesshadowDirection = .5;

var size = 40;
var count = 0;
var sizeDirection = .5;

let col_w = 20;
let y = 0;
let columns = [];

function setup() 
{
  createCanvas(1920, 1080);
  //createCanvas(800, 600);
  frameRate(15);
  // strokeWeight(0.5);
  // stroke(3, 200, 60);
  let i = 10;
  for (let i = 0; i < floor(width / col_w); i++) {
    let c = new matrixCol(floor(i * col_w), col_w, random(height*3.5 / col_w))
    columns.push(c);
  }
}

function draw() {
  background(10);
  for (let i = columns.length - 1; i >= 0; i--) {
    columns[i].update();
    columns[i].show();
    if (columns[i].isAllowChild()) {
      columns[i].hasChild = true;
      let c = new matrixCol(columns[i].x, col_w, random(height*3.5 / col_w))
      columns.push(c);
    }
  }
  for (let i = columns.length - 1; i >= 0; i--) {
    if (columns[i].isDone()) {
      columns.splice(i, 1);
    }
  }
  { 
    //signature
    textSize(20);
    fill(255,255,255);
    text('Shanel Locke', 1600, 850);
  
    //hair shape
    fill(0,0,0);
    noStroke();
    ellipse(1050, 350, 600, 650);
    square(740, 60, 550, 900);

    //neck
    fill(0,0,0);
    ellipse(1100, 1000, 800, 900);
    fill(255,255,255);
    rect(890, 530, 400, 355);
    ellipse(1100, 1000, 600, 700);
    fill(0,0,0);
    ellipse(950, 1270, 600, 700);
    ellipse(1050, 890, 680, 250);
    fill(255,255,255);
    ellipse(1089, 850, 560, 220);
    fill(0,0,0);
    ellipse(805, 670, 100, 450);
    ellipse(889, 840, 180, 110);
    ellipse(889, 780, 150, 100);
    ellipse(1050, 500, 560, 650);

    //right ear
    strokeWeight(4);
    stroke(0,0,0);
    fill(255,255,255);
    ellipse(750, 440, 60, 170);
    fill(0,0,0);
    circle(750, 380, 20);

    //main face  
    fill(255,255,255);
    ellipse(1050, 460, 550, 650);

    //chin
    fill(0,0,0);
    arc(1050, 650, 450, 280, 80, PI + QUARTER_PI, CHORD);
    fill(255,255,255);
    arc(1050, 630, 430, 220, 80, PI + QUARTER_PI, CHORD);
    fill(0,0,0);
    arc(1000, 600, 190, 180, 120, PI + QUARTER_PI, CHORD);
    fill(255,255,255);
    noStroke();
    arc(1020, 590, 170, 160, 120, PI + QUARTER_PI, CHORD);

    //around mouth
    fill(0,0,0);
    arc(1040, 550, 210, 180, -40, PI + QUARTER_PI, CHORD);
    fill(255,255,255);
    arc(1040, 580, 200, 180, -40, PI + QUARTER_PI, CHORD);
    circle(870, 580, 60);
    circle(1250, 580, 90);

    //left ear
    strokeWeight(4);
    stroke(0,0,0);
    fill(255,255,255);
    ellipse(1350, 440, 70, 200);
    noStroke();
    ellipse(1350, 360, 45, 50);
    fill(0,0,0);
    circle(1350, 450, 30);
    circle(1350, 410, 20);
    
    //mouth
    fill(0,0,0);
    noStroke();
    rect(940, 530, 200, 50, 20);
    ellipse(1040, 590, 210, 130);
    strokeWeight(4);
    stroke(0,0,0);
    fill(255,255,255);
    ellipse(1040, 600, 200, 100);
    fill(0,0,0);
    noStroke();
    ellipse(1040, 590, 200, 75);

    //bottom teeth
    fill(255,255,255);
    rect(1040, 590, 30, 35, 10);
    rect(1010, 590, 30, 35, 10);
    rect(1070, 590, 30, 25, 10);
    rect(980, 590, 30, 25, 10);
    rect(1100, 590, 20, 15, 10);
    rect(960, 590, 20, 15, 10);

    //top teeth
    rect(1040, 550, 40, 45, 10);
    rect(1005, 550, 40, 45, 10);
    rect(1080, 550, 30, 35, 10);
    rect(975, 550, 30, 35, 10);
    rect(1100, 560, 25, 25, 10);
    rect(960, 560, 25, 25, 10);
  
    //left glasses (lower half)
    fill(0,0,0);
    noStroke();
    ellipse(1170, 430, 215, 155);
    fill(255,255,255);
    ellipse(1170, 410, 200, 150);
  
    //right glasses (lower half)
    fill(0,0,0);
    ellipse(900, 430, 215, 155);
    fill(255,255,255);
    ellipse(910, 410, 200, 150);

    //right eyebrow
    fill(0,0,0);
    rect(1070, 310, 220, 40, 5, 10, 5);

    //right glasses (upper half)
    fill(0,0,0);
    rect(800, 355, 210, 100);
    fill(255,255,255);
    ellipse(905, 425, 180, 130);
    fill(0,0,0);
    circle(790, 390, 50);

    //left eyebrow
    fill(0,0,0);
    rect(800, 310, 220, 40, 5, 10, 5);

    //left glasses (upper half)
    fill(0,0,0);
    rect(1070, 355, 210, 100);
    fill(255,255,255);
    ellipse(1165, 425, 170, 130);
    fill(0,0,0);
    circle(1290, 390, 60);

    //right eyeball
    fill(0,0,0);
    ellipse(890, 400, 150, 50);
    fill(255,255,255);
    ellipse(910, 400, 60, 30);
    fill(0,0,0);
    ellipse(905, 402, 120, 30);
    fill(255,255,255);
    ellipse(975, 390, 50, 20);
    fill(0,0,0);
    ellipse(840, 402, 20, 20);
    fill(255,255,255);
    ellipse(907, 398, 70, 7);
    ellipse(907, 418, 70, 15);
    ellipse(870, 402, 30, 20);
    fill(0,0,0);
    ellipse(907, 438, 100, 7);
    ellipse(810, 400, 40, 10);
    ellipse(810, 390, 40, 5);
     
    //right eye movement
    fill(255,255,255);
    circle(righteyeX,righteyeY,15);
    righteyeX += righteyeDirection;
    if(righteyeX >= 900 || righteyeX <= 850)
     
    {
         righteyeDirection *= -1;
    }
     
    //glasses shadow
    fill(0,0,0);
    circle(glassesshadowX,glassesshadowY,60);
    glassesshadowX += glassesshadowDirection;
    glassesshadowY += glassesshadowDirection;
    if(glassesshadowX >=900 || glassesshadowX <= 950)
    if(glassesshadowY >=440 || glassesshadowY <= 430)
     
    {
         glassesshadowDirection *= -1;
    }
     
    //left eyeball
    fill(0,0,0);
    ellipse(1160, 400, 150, 50);
    fill(255,255,255);
    ellipse(1170, 400, 130, 30);
    fill(0,0,0);
    ellipse(1175, 402, 120, 30);
    fill(255,255,255);
    ellipse(990, 405, 90, 35);
    fill(0,0,0);
    ellipse(1110, 402, 20, 20);
    fill(255,255,255);
    ellipse(1177, 398, 70, 7);
    ellipse(1177, 418, 70, 7);
    ellipse(1210, 402, 20, 20);
    fill(0,0,0);
    ellipse(1177, 438, 100, 7);
    ellipse(1220, 408, 70, 7);
    ellipse(1230, 400, 40, 10);
    ellipse(1230, 390, 40, 5);

    //left eye movement
    circle(lefteyeX,lefteyeY,15);
    lefteyeX += lefteyeDirection;
    if(lefteyeX >= 1210 || lefteyeX <= 1150)
    
    {
        lefteyeDirection *= -1;
    }

    //glasses bar
    fill(0,0,0);
    square(1000, 370, 70, 100);

    //top of nose
    fill(255,255,255);
    square(1008, 400, 55, 100);

    //bottom of nose
    fill(0,0,0);
    ellipse(1040, 490, 100, 50);
    fill(255,255,255);
    ellipse(1035, 465, 80, 85);
    ellipse(1005, 477, 50, 35);
    ellipse(1075, 477, 50, 35);

    //hair
    strokeWeight(4);
    stroke(255,255,255);
    line(950, 90, 1070, 95);
    line(1000, 70, 1070, 95);
    line(900, 110, 1090, 90);
    line(850, 110, 1070, 95);
    line(1000, 70, 1170, 105);
    line(800, 150, 970, 125);
    line(800, 170, 970, 125);
    line(1100, 150, 970, 125);
    line(1200, 130, 970, 110);
    line(1250, 115, 1070, 100);
    line(1100, 60, 1170, 105);
    line(1200, 90, 1250, 125);
    line(870, 100, 950, 155);
    line(840, 97, 1005, 145);
    line(1160, 97, 1165, 135);
    line(1140, 97, 1165, 135);
    line(1110, 97, 1165, 135);
    line(1100, 97, 1135, 135);
    noStroke();
    

  textSize(size);
  fill(255,255,255);
  size+= sizeDirection;
  count++;
    if(count > 200)
    
    {
        sizeDirection *=-1;
        count = 0;
    }
  text('"Michael"',80,850);

}
  
}