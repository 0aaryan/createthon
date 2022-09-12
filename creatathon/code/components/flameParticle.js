
class FlameParticle{
    constructor(tempX, tempY, tempR,dir) {
      this.x = tempX;
      this.y = tempY;
      this.radius = tempR;
      this.dir=dir
      
      this.color = color(255);
      let r = random(3);
      if(r < 1){
        this.color = color(43,194,14,50); // orange
      } else if(r >= 1 && r < 2 ){
        this.color = color(57, 255, 19, 50); // yellow
      } else if(r >= 2 ){
        this.color = color(156, 255, 0, 50); // reddish
      }
      
    }
  
    show() {
      noStroke();
      fill(this.color);
      ellipse(this.x, this.y, this.radius);
    }
  
    move() {
      if(this.dir==-1)
        this.x += random(-6, 1);
      else if(this.dir==1)
        this.x+=random(-1,6);
      else if(this.dir==0)
        this.x+=random(-6,6);

    this.y -= random(1, 3);

    }
    
    shrink(r){    
     this.radius-=r;
    }
    
    
  
  }