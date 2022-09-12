function Cursor(){
    this.r=20
    this.body=Bodies.circle(mouseX,mouseY,this.r);

    Composite.add(engine.world,this.body);
    this.show=function(){
        push();
        translate(this.body.position.x,this.body.position.y)
        image(c1,0,0,2*this.r,2*this.r);
        pop();
    }
    this.move=function(){
        this.body.position.x=mouseX;
        this.body.position.y=mouseY;
    }
}