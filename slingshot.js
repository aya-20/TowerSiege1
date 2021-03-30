class Slingshot{
    constructor(a, b){
      
        var options = {
            bodyA: a,
            pointB: b,
            length: 2,
            stiffness: 0.3
        }
        this.sling = Constraint.create(options);
        this.bodyA = a;
        this.pointB = b;
        World.add(world, this.sling);

    }
    Fly(){
        this.sling.bodyA = null;
    }

    display(){
        
        if (this.sling.bodyA !== null){
            var abody = this.sling.bodyA.position;
            var bpoint = this.pointB;
            line(abody.x, abody.y, bpoint.x, bpoint.y);
        }
    }
}