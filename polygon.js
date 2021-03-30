class Polygon{
    constructor(x, y){
        var options = {
            restitution: 1.5,
            density: 0.3,
            friction: 0.3
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.width = 40;
        this.height = 40;
        this.img = loadImage("polygon.png");

        World.add(world, this.body);
    }

    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        rotate(angle);
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.img, 0, 0, this.width, this.height);
        pop();
    }
}