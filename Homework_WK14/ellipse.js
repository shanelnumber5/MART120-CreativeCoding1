class Ellipse{

    //constructor
    // x4 = x-coordinate 1, y4 = y coordinate 1, h4 = height 2, w4 = width 2, r = red, g = green, b = blue
    constructor(x4,y4,h4,w4,r,g,b)
    {
        this.x4 = x4;
        this.y4 = y4;
        this.h4 = h4;
        this.w4 = w4;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    display()
    {
        fill(this.r, this.g, this.b);
        ellipse(this.x4, this.y4, this.h4, this.w4);
    }
}