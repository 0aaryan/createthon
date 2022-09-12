//import MatterJS from "matter";

var outterImg,innerImg,skullImg,c1;
var clicks=0;
function preload() {
  outterImg=loadImage('imgs/6.png');
  innerImg=loadImage('imgs/eyegreen.png');
  skullImg=loadImage('imgs/skull2.png');
  c1=loadImage('imgs/c1.png');
  outterImg.filter(GREEN);

}
//components

var cursor;
var eyeBalls=[];
var ground,wall1,wall2,roof;
var eyeFlames=[],wallFlames=[];
var skullX=0.5*w,skullY=0.25*h,skullL=Math.min(w,h);



var Engine = Matter.Engine,
    Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;
var engine = Engine.create();
var runner = Runner.create();
var w = window.innerWidth;
var h = window.innerHeight;  

var pink,black,white,glass,green;

function setup() {
  //canvas
  canvas=createCanvas(w, h);
  noCursor();


  //colors
  red=color(255,0,0);
  pink=color(233,14,99);
  white=color(255,255,255);
  glass=color(199,227,225 );
  green=color(57,255,20);


  //components
  ground=new Box(w/2,h-15,w,15,green,{isStatic:true});
  roof=new Box(w/2,0,w,15,green,{isStatic:true});
  wall1=new Box(0,0.5*h,15,h,green,{isStatic:true});
  wall2=new Box(w-15,0.5*h,15,h,green,{isStatic:true});

  cursor=new Cursor();

  wallFlames.push(new Flame(20,h,0,0.1));
  wallFlames.push(new Flame(w-20,h,0,0.1));  
  Runner.run(runner, engine);
}

function draw() {
  background(0,50);
  imageMode(CENTER);

  skullX=0.5*w
  skullY=0.25*h
  skullL=Math.min(w,h);

  image(skullImg,w/2,h/4,0.55*skullL,0.55*skullL);

  //ground.show();
  //wall1.show();
  //wall2.show();
  //roof.show();

  for(var i=0;i<eyeBalls.length;i++){
    eyeBalls[i].move();
    eyeBalls[i].show();
    if(!eyeBalls[i].isVisible()){
      eyeBalls.splice(i,1);
    }
  }

  for(var i=0;i<eyeFlames.length;i++){
    eyeFlames[i].show();
  }

  for(var i=0;i<wallFlames.length;i++){
    wallFlames[i].show();
  }
  cursor.move();
  cursor.show();



}

window.onresize = function() {
  w = window.innerWidth;
  h = window.innerHeight;  
  canvas.size(w,h);

}

function mouseClicked(){
  if(clicks<1){
  eyeFlames.push(new Flame(skullX+0.035*skullL,skullY+0.035*skullL,1,0.4))
  eyeFlames.push(new Flame(skullX-0.035*skullL,skullY+0.035*skullL,-1,0.4))
  clicks+=1;
  }
  eyeBalls.push(new eyeBall(skullX-0.035*skullL,skullY+0.035*skullL,skullL/50,skullL/100,white,{}))
  eyeBalls.push(new eyeBall(skullX+0.035*skullL,skullY+0.035*skullL,skullL/50,skullL/100,white,{}))
  for(var i=0;i<eyeBalls.length;i++){
    var force={x:random(-0.025,0.025),y:random(-0.035)};
    Matter.Body.applyForce(eyeBalls[i].outerBall, eyeBalls[i].outerBall.position, force);
  }
}
