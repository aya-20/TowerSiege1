class Box{
    constructor(x, y){
        var options = {
            restitution: 1,
            friction: 0.3,
            density: 0.3
        }
        this.body = Bodies.rectangle(x, y, 30, 30, options);
        this.width = 30;
        this.height = 30;
        
        World.add(world, this.body);

    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        rotate(angle);
        translate(pos.x, pos.y);
        rectMode(CENTER);
        rect(0, 0, 30, 30);
        pop();
    }
}