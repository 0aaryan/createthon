
function eyeBall(x,y,r1,r2,colour,options){
    this.outerBall=Bodies.circle(x,y,r1,options);
    Composite.add(engine.world,this.outerBall);
    this.centerX=0;
    this.centerY=0;
    this.r1=r1;
    this.r2=r2;
    this.c=colour
    this.show=function(){
        push();
        translate(this.outerBall.position.x,this.outerBall.position.y);
        rotate(this.outerBall.angle);
        fill(this.c);
        stroke(255,255,255)
        imageMode(CENTER);
        image(outterImg,0,0,2*this.r1,2*this.r1);
        fill(0);
        image(innerImg,this.centerX,this.centerY,2*this.r2,2*this.r2);
        pop();
    }
    this.move=function(){
        push();
        translate(this.outerBall.position.x,this.outerBall.position.y);
        //rotate(this.outerBall.angle);
        var dir=createVector(mouseX-this.outerBall.position.x,mouseY-this.outerBall.position.y);
        dir.normalize();
        dir.mult(this.r2);
        this.centerX=dir.x;
        this.centerY=dir.y;
        if(this.outerBall.circleRadius<5*skullL/100){
            Matter.Body.scale(this.outerBall,1.005,1.005);
            this.r1=this.outerBall.circleRadius
            this.r2=this.r1/2;
        }
        //console.log(this.outerBall.bounds.circleRadius)
        pop();

    }
    this.isVisible=function(){
        if(this.outerBall.position.x>1.1*w && this.outerBall.position.y>1.1*h){
            return false;
        }
        return true;
    }
}
