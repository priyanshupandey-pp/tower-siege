class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){
        var man=this.body.position;

        rectMode(CENTER);
        fill("yellow")
        rect(man.x,man.y,this.width,this.height);
     

    }
} 