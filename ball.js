class Ball {
    constructor(x,y,w,h){
        var options = {
             'isStatic':false,
            'restitution':0.3,
            'friction':0.8,
            'density':1.9
        }
      
        this.body = Bodies.rectangle(x,y,w,h, options);
        this.x=x
        this.y=y
        this.w=w
        this.h=h
       World.add(world,this.body);
    }
      display(){
        push()
        fill("green");
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.w,this.h)
        pop()
      }
    }