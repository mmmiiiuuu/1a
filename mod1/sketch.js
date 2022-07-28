let weight = 0;   
let seed= .17;

function setup() {
  var canvas = createCanvas(1030, 127);
 
  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');


} 


function draw() {
      weight = fxrand() * 300;
      mood = fxrand()/weight;
 
let oogle=frameCount*weight

  background(0,0,0,0);
  rectMode(CENTER*oogle);
  translate(weight+weight,width/weight^width/233*weight/8);
  rotate(oogle);
  rect(8, 8, 8, 8);
  
  let seed = weight * .01;
  console.log(seed);

}

