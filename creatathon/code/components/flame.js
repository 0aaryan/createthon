    
function Flame(x,y,dir,r) {
    this.x=x;
    this.y=y;
    this.particles=[];
    this.dir=dir;
    this.shrinkR=r;
    this.show=function(){
        for(let i = this.particles.length -1; i>= 0; i--){
            this.particles[i].move();
            this.particles[i].show();
            this.particles[i].shrink(this.shrinkR);
            if(this.particles[i].radius <= 0 ){
                this.particles.splice(i, 1);
            }
        }
    
        // make more fire!!!
        let radius = random(30,50);
        let p = new FlameParticle(this.x, this.y, radius,this.dir,this.shrinkR);
        this.particles.push(p);
    }


}   
