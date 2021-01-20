class hero {
    constructor(x,y,r)
    {
        var options = {
        density: 1,
        frictionAir: 1    

    };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("Superhero-O1.png")
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
          World.add(world, this.body);
    }
    display(){
        var pos=this.body.position;

    
        //this.body.position.x = mouseX;
        //this.body.position.y = mouseY;
        
        push()
        translate(pos.x, pos.y);
        rectMode(CENTER)
        strokeWeight(4);
        fill(255,0,255)
        image(this.image,0,0,this.r,this.r);
        pop()
    }
}