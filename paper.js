class Paper {

    constructor(x,y,r){




        var options= {

            restitution:0.5,
            density:1.5,
            friction:0.5
        
        }

 
    this.body= Matter.Bodies.circle(x,y,r,options);
    Matter.World.add(world, this.body);
    this.r= r;


 }
 
 show(){
 fill ("white");
 ellipseMode(CENTER);
 ellipse(this.body.position.x, this.body.position.y,this.r*2,this.r*2)
 
 }
 
 
 }