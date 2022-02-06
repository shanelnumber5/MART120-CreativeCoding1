// x and y for my character
var characterX = 100;
var characterY = 100;

// defined key codes for each letter
var UP_ARROW = 38;
var DOWN_ARROW  = 40;
var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;

// x and y for a shape
var shapeX = 800;
var shapeY = 500;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];


// neon pink shape created when mouse is clicked
var mouseShapeX;
var mouseShapeY;

// square object
var rectangleObject;

// triangle object
var triangleObject;

// ellipse object
var ellipseObject; 

// lime green enemy 
var greenenemyX = 100;
var greenenemyY = 740;
var greenenemyDirection = 3;

var count = 0;
var sizeDirection = .5;

function setup() {
  createCanvas(1800, 800);

    // create the rectangle object
    rectangleObject = new Rectangle(200, 400, 400, 50, 102, 102, 51);

    // create the triangle object
    triangleObject = new Triangle(1000, 500, 800, 100, 300, 200, 204, 204, 0);

    // create the ellipse object
    ellipseObject = new Ellipse(1100, 400, 455, 100, 77, 77, 0);

    // get a random speed when the it first starts
    for (var i = 0; i < 100; i++) {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeXs[i] = getRandomNumber(1800);
        shapeYs[i] = getRandomNumber(800);
        diameters[i] = getRandomNumber(60);
        }

    createCharacter(100,100);
}

function draw() 


{background(240, 220, 194);

    // create and display a rectangle object
    rectangleObject.display();

    // create and display a triangle object
    triangleObject.display();

    // create and display a ellipse objet
    ellipseObject.display();
  
noStroke();
fill(194, 134, 56);

    
    // call createBorders function
    createBorders(20);

    // exit message
    textSize(40);
    fill(95, 56, 194);
    text("EXIT", width-130,height-100)

    
    // createCharacter(100,100);
    drawCharacter();
    characterMovement();


    // lime green enemy 
    fill(55,255,14)
    circle(greenenemyX, greenenemyY,80);
    greenenemyX += greenenemyDirection;
    if(greenenemyX >= 1775|| greenenemyX <= 40)
    {
        greenenemyDirection *= -1;
    }
    
    // orange enemies
    fill(186,140,80); 

    // draw the shape
    for (var i = 0; i < shapeXs.length; i++) {
        circle(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
 

        
    // move the shapes
    shapeXs[i] += shapeXSpeeds[i];
    shapeYs[i] += shapeYSpeeds[i];

    // enemies out of bounds
    if (shapeXs[i] > width) {
        shapeXs[i] = 0;
    }
    if (shapeXs[i] < 0) {
        shapeXs[i] = width;
    }
    if (shapeYs[i] > height) {
        shapeYs[i] = 0;
    }
    if (shapeYs[i] < 0) {
        shapeYs[i] = height;
    }


}
    
    // check to see if the character has left the exit
    if(characterX > width && characterY > height-100) {
        fill(95, 56, 194);
        stroke(5);
        textSize(100);
        text("You Win", width/2+280, height/2-50);
        text("Free Speech!", width/2+170, height/2+100);
    }

        // neon pink mouse click character
        fill(224,14,255);
        circle(mouseShapeX, mouseShapeY, 55);
}

    function characterMovement() {
    // handle the keys
    if(keyIsDown(UP_ARROW)) {
        characterY -= 10;   
    }
    if(keyIsDown(DOWN_ARROW)) {
        characterY += 10;   
    }
    if(keyIsDown(LEFT_ARROW)) {
        characterX -= 10; 
        console.log("movement: " + characterX);  
    }
    if(keyIsDown(RIGHT_ARROW)){
        characterX += 10;   
    }
}

    function createCharacter(x,y) {
        characterX = x;
        characterY = y;
    
    }    

    function drawCharacter() {
        fill(265,46,14);
        stroke(2);
        circle(characterX, characterY, 65);
    }

    function createBorders(thickness) {
        // top border
        rect(0,0,width,thickness);
        // bottom border
        rect(0, height-20,width,thickness);
        // left border
        rect(0,0,10,height);
        // right upper border
        rect(width-10,0,10,height-100);
    }

    function mouseClicked() {
        mouseShapeX = mouseX;
        mouseShapeY = mouseY;
    }

    function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
    }
