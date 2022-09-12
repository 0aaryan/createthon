

function Box(x,y,w,h,colour,options){
    this.box=Bodies.rectangle(x,y,w,h,options);
    Composite.add(engine.world,this.box);
    this.w=w;
    this.h=h;
    this.c=colour;
    this.show=function(){
        push();
        translate(this.box.position.x,this.box.position.y);
        rotate(this.box.angle);
        rectMode(CENTER);
        fill(this.c);
        rect(0,0,this.w,this.h);
        pop();
    }
}