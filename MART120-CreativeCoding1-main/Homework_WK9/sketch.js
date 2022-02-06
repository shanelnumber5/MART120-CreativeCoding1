function setup()
{
    createCanvas(2000, 900);

}
    

function draw()
{
    background (255, 0, 0);
    
    textSize(40);
    text('"Beauty"', 80,850);
    
    textSize(20);
    text('Shanel Locke', 1280,850);

    
    
    //bottom black neck triangle
    noStroke();
    fill(0,0,0);
    triangle(950, 880, 560, 700, 396, 875);
  
    //upper shoulder
    rect(397, 630, 700, 310);
  
    //bottom white chins
    fill(255,255,255);
    ellipse(740, 520, 420, 670);
    ellipse(670, 540, 415, 670);
  
     //bottom black chin
    fill(0,0,0);
    ellipse(760, 520, 500, 650);
    
    //middle white chin
    fill(255,255,255);
    ellipse(795, 500, 436, 670);
    
    //black neck triangle
    fill(0,0,0);
    triangle(750, 750, 510, 500, 400, 870);
  
    //top black chin
    fill(0,0,0);
    ellipse(730, 435, 470, 650);
  
    //hair shape
    ellipse(750, 350, 600, 650);
  
    //red side circle
    fill (255, 0, 0)
    ellipse(350, 600, 400, 550);
    ellipse(1220, 500, 500, 550);
  
    //main face  
    fill(255,255,255);
    ellipse(780, 400, 560, 650);
  
    //black cheek circle
    fill(0,0,0);
    ellipse(545, 555, 125, 380);
    ellipse(520, 510, 35, 470);
    ellipse(500, 400, 55, 320);
  
    //chin connected to lips
    arc(740, 650, 170, 120, 0, PI + QUARTER_PI, CHORD);
    fill(255,255,255);
    arc(760, 640, 170, 130, 0, PI + QUARTER_PI, CHORD);
  
    //bottom lip
    fill(0,0,0);
    arc(770, 590, 270, 120, 0, PI + QUARTER_PI, CHORD);
    fill(255,255,255);
    arc(820, 570, 200, 130, 0, PI + QUARTER_PI, CHORD);
  
    //top lip
    fill(0,0,0);
    ellipse(800, 530, 225, 155);
    fill(255,255,255);
    ellipse(825, 540, 200, 110);
    
    //tongue
    fill(0,0,0);
    ellipse(760, 510, 120, 55);
    ellipse(760, 390, 100, 25);
      
    //nose
    fill(0,0,0);
    ellipse(720, 360, 20, 75);
    ellipse(805, 540, 155, 55);
    ellipse(810, 390, 15, 15);
    ellipse(850, 360, 20, 45);
    ellipse(838, 380, 10, 5);
    ellipse(780, 385, 55, 45);
  
    //left eyebrow
    fill(0,0,0);
    ellipse(920, 250, 225, 155);
    fill(255,255,255);
    ellipse(910, 270, 230, 150);
  
     //right eyebrow
    fill(0,0,0);
    ellipse(650, 250, 225, 135);
    fill(255,255,255);
    ellipse(670, 280, 210, 150);
  
    //upper teeth 
    fill(255,255,255);
    stroke(0, 0, 0)
    ellipse(752, 500, 25, 25);
    ellipse(785, 500, 45, 45);
    ellipse(825, 500, 40, 45);
    noStroke();
    ellipse(845, 500, 30, 45);
  
   //lower teeth
    ellipse(740, 545, 25, 35);
    rect(747, 550, 35, 25);
    rect(777, 560, 55, 25);
    ellipse(870, 545, 35, 35);

    //glasses bar
    fill(0,0,0);
    ellipse(790, 300, 140, 100);
    fill(255,255,255);
    ellipse(795, 320, 100, 100);

    //right glasses
    fill(0,0,0);
    ellipse(590, 320, 340, 200);
    fill(255,255,255);
    ellipse(600, 320, 250, 150);
  
    //side of left face
    fill (255, 0, 0)
    rect(1020, 300, 400, 350);
  
   //left glasses
    fill(0,0,0);
    ellipse(980, 310, 280, 200);
    fill(255,255,255);
    ellipse(970, 320, 200, 150);
    fill (255, 0, 0)
    ellipse(1000, 320, 170, 130);
    fill(255,255,255);
    rect(916, 256, 105, 129);
    fill(0,0,0);
    rect(1016, 276, 75, 39);

     //right eyeball
     fill(0,0,0);
     ellipse(630, 320, 180, 100);
     fill(255,255,255);
     ellipse(640, 320, 160, 80);
     fill(0,0,0);
     ellipse(645, 322, 150, 70);
     fill(255,255,255);
     ellipse(650, 325, 100, 65);
     fill(0,0,0);
     ellipse(645, 322, 40, 60);
     fill(255,255,255);
     ellipse(645, 312, 10, 20);
     fill(0,0,0);
     ellipse(570, 300, 60, 60);

    //left eyeball
    fill(0,0,0);
    ellipse(930, 320, 150, 100);
    fill(255,255,255);
    ellipse(940, 320, 130, 80);
    fill(0,0,0);
    ellipse(945, 322, 120, 80);
    fill(255,255,255);
    ellipse(950, 325, 100, 85);
    fill(0,0,0);
    ellipse(920, 322, 80, 60);
    fill(255,255,255);
    ellipse(945, 312, 10, 20);
    ellipse(905, 325, 10, 10);

     //hair
     stroke(255,255,255);
     line(650, 70, 670, 85);
     line(680, 70, 690, 95);
     line(700, 70, 690, 95);
     line(650, 90, 670, 87);
     line(700, 70, 710, 95);
     line(750, 80, 730, 15);
     line(800, 100, 760, 55);
     line(850, 100, 780, 55);
     line(870, 100, 900, 55);
   
     stroke(0,0,0);
     line(990, 180, 1030, 115);
     line(1000, 100, 760, 55);
     line(1000, 200, 1080, 255);
     line(1070, 150, 1000, 185);
    

    //text color
    fill(0,0,0);

}