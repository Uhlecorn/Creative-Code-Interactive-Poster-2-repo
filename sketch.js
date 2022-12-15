let size=10;
let position;
let umbrella;
let big;
let logo;
let s = 'Out of Here';
let mic;
let micLevel;
let showtext=true;
function setup() {
      let cnv = createCanvas(800, 600);
  cnv.mousePressed(userStartAudio);
   
  // select the microphone and start getting audio
  mic = new p5.AudioIn();
  mic.start();


}



function draw() {
  fill(115,147,170);
  rect(0,0,800,1224);
  
   micLevel = mic.getLevel();
 size = map(micLevel,0,1,0,800);
 

 ellipseMode(CENTER);
  image(cloud,0,100,400,300);
  image(cloud,200,400,400,300);
  image(cloud,-250,400,400,300);
image(logo,400,100,200,200);
 // image(umbrella,150,400,100,100);
  
  
  fill(255, 255, 255);
  textAlign(CENTER, CENTER);
  stroke(255, 255, 255);
  strokeWeight(2);
  textSize(40);
  textFont(big);
  text(s, 0, 600, 400, 200);
  
   if (showtext==true) {
    text('', width/2-20, height/2);
  }
  if (size>10){
    fill(255,255,255);
    image(drop,200,random(800),20,20);
    image(drop,400,random(800),20,40);
    image(drop,600,random(800),20,40);
    image(drop,700,random(800),20,40);
    image(drop,800,random(800),20,40);
    image(drop,150,random(800),20,40);
    image(drop,250,random(800),20,40);
    image(drop,550,random(800),20,40);
  
  }
  else{
    fill(255,255,255);
    image(drop,100,0,20,40);
    image(drop,400,0,20,40);
    image(drop,600,0,20,40);
    image(drop,700,0,20,40);
    image(drop,800,0,20,40);
    image(drop,150,0,20,40);
    image(drop,250,0,20,40);
    image(drop,550,0,20,40);
  }
  
   if (size>30){
    image(umbrella,map(micLevel,0,1,200,1200),map(micLevel,0,1,0,1224),100,100);
    
  }
  else{
    image(umbrella,150,400,100,100);
  }
}
function mousePressed() {
  // if someone clicked one time stop showing the message
  if (showtext==true) { showtext=false; }
}
function preload() {
  building = loadImage('build.png')
  logo = loadImage('maydayLogo.png');
  big = loadFont('aBigDeal.ttf');
  umbrella=loadImage('umbrella.png');
  cloud=loadImage('clouds.png');
  drop=loadImage('raindrop.png');

}