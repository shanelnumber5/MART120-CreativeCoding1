// x and y for my character
var characterX = 100;
var characterY = 100;

// defined key codes for each letter
var UP_ARROW = 38;
var DOWN_ARROW  = 40;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;

// x and y for a shape
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

// shape created when mouse is clicked
var diameter = 25;
var mouseShapeX;
var mouseShapeY;

function setup() 
{
  createCanvas(1800, 800);
    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 3);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}

function draw() 
{
  background(0,53,198);
  noStroke();
  
  fill(255, 248, 14);
    
    // top border
    rect(0,0,width,10);
    // bottom border
    rect(0, height-10,width, 10);
    // left border
    rect(0,0,10,height);
    // right upper border
    rect(width-10,0,10,height-100);

    // exit message
    textSize(40);
    text("EXIT", width-130,height-100)


    // red character
    stroke(2);
    fill(265,46,14);
    circle(characterX,characterY,75);

    // handle the keys
    if(keyIsDown(UP_ARROW))
    {
        characterY -= 10;   
    }
    if(keyIsDown(DOWN_ARROW))
    {
        characterY += 10;   
    }
    if(keyIsDown(LEFT_ARROW))
    {
        characterX -= 10;   
    }
    if(keyIsDown(RIGHT_ARROW))
    {
        characterX += 10;   
    }

    // lime green enemy
    fill(55,255,14)
    circle(shapeX, shapeY, 50);

    // blue enemy
    fill(48,157,240)
    circle(shapeX+80, shapeY-200, 30);

    // orange enemy
    fill(252,188,41)
    circle(shapeX-80, shapeY+200, 40);

    // get a random speed when the it first starts
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 3);
 
    // move the shapes
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;

    // enemies out of bounds
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }
    
    // check to see if the character has left the exit
    if(characterX > width && characterY < width-350)
    {
        fill(255, 248, 14);
        stroke(5);
        textSize(100);
        text("You Win", width/2+280, height/2-50);
        text("Delicious Mold!", width/2+150, height/2+100);
    }
    
    // neon pink mouse click character
 
    fill(224,14,255);
        circle(mouseShapeX, mouseShapeY, 75);
    }
    
    
        function mouseClicked()
    {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }
    
   

