class Slingshot{
    constructor(bodyA, Point){
        var options = {
            bodyA: bodyA,
            pointB: Point,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = Point;
        this.Slingshot = Constraint.create(options);
       
        World.add(world, this.Slingshot);
    }

    fly()
    {
      this.Slingshot.bodyA=null;  
    }

    display(){
        if(this.Slingshot.bodyA)
        {
        var pointA = this.Slingshot.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}