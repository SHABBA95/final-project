var chien=420;//The setup function only happens once
var a;
var ex=150;
var ex2=700;
function setup() {
	createCanvas(1000, 1000); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(0,0,0); //an RGB color for the canvas' background
  //circle

  fill(0,255,26); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  rect(mouseX,mouseY,50,50); // center of canvas, 20px dia
  textSize(150);
  a = random(255);
  fill(0,255,26,a);
  textFont("Bauhaus 93");
  textAlign(CENTER);
  text("SHABBA",chien,chien); 
  //chien=chien+5

  fill(0,255,26);
  ellipse(ex,450,50,50);
  ex=ex+1; 

  fill(0,255,26);
  ellipse(ex2,280,50,50);
  ex2=ex2-1; 
  
  


} 