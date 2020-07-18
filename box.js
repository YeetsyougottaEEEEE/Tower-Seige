class Box  {
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.rect(0,0,this.width,this.height)
        World.add(world, this.body);
    }
    display(){

        if(this.body.speed<2){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect (0, 0, this.width, this.height);
        pop();}
        else{
            //fade away
            push();
            World.remove(world,this.body);
            this.Visiblity=this.Visiblity-5;
            tint(255,this.Visiblity);
            rect(this.body.position.x,this.body.position.y,20,20)
            pop();

        }

    }
  }
  