class Player{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
        this.spt = createSprite(this.x, this.y, 50, 50);
        this.spt.shapeColor = "orange";
    }
    applyGravity(){
        this.spt.velocityY=this.spt.velocityY+2;
    }
    move(xdir, ydir)
    {
        this.spt.x += xdir*grid;
        this.spt.y += ydir*grid;
    }
}