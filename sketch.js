// Incluindo Perseverance: primeiro, 
// seguindo a órbita da Terra
//acrescentei phobos e deimos rotação, tamanho e posição errados corrigir

//Incluindo phobos e Deimos

// INCLUINDO DADOS DE LONGITUDE HELIOCENTRICA 
// Terra e Marte já estão ok
// Melhorei a assinatura em 200812
//Translação e rotação 
//de cada planeta/lua sincronizado com a rotação to sol de //27 dias.

//let camera;

let earthjpg;
let earthlat = 6.3;//2020-august 13
let earthlong = 321;
let earthrot = 0.99;
let earthrev = 365.26;
let moonjpg;
let marsjpg;
let mercuryjpg;
let mercuryrot = 58.6;
let mercuryrev = 87.97;
let marslong = 119;
let marsrev=686.689;
let marsrot = 1.03;
let mercurylong = 226;
let sunjpg;
let starsjpg;
let venusjpg;
let venuslong = 318.9;
let venusrot = 243;
let venusrev = 224.7;
let assinatura;
let posx = -200,
  posz = 100;
let perseAngle = 0;
var loadImg;
var createImg;
let xcam, ycam, zcam, dirxcam,dirycam,dirzcam;

function preload() {
  earthjpg = loadImage('earthcloud-1.jpg');
  moonjpg = loadImage('moonmap1k.jpg');
  marsjpg = loadImage('mars.jpg');
  deimosjpg = loadImage('deimos.jpg');
  phobosjpg = loadImage('phobos.jpg');
  sunjpg = loadImage('8k_sun.jpg');
  mercuryjpg = loadImage('mercury.jpg');
  venusjpg = loadImage('venus.jpg');
  starsjpg = loadImage('stars.jpg');
  perseverance = loadImage("perseverance.png");
}

function setup() {
  //some conversions;
  
  createCanvas(1280,720, WEBGL);
  assinatura = createGraphics(380, 100);
  assinatura.background(0, 220);
  assinatura.fill(255);
  assinatura.textAlign(CENTER);
  assinatura.textSize(90);
  assinatura.text('Bonelli', 190, 85);


}

function draw() {
  angleMode(DEGREES);
  perseAngle += 10;
  background(0);
  xcam = 1500*cos(frameCount/13);
  zcam = 1500*sin(frameCount/50);
  ycam = 1500*sin(frameCount/33);
  //zcam =-500;
  //xcam = 500;
  camera(xcam,ycam,zcam, 0,0,0, 0,1,0);
  

  push();
  // translate(0, 0, -3000);
  // texture(starsjpg);
  // plane(9500);
  pop();

  push();
  texture(assinatura);
  translate(posx++, 50, posz--);
  rotateY(frameCount / 95);
  rotateX(frameCount / 130);
  box(50);
  pop();
  //directionalLight(255, 255, 255, 1, 0, 0)
  //pointLight(255,255,0,0,0,200);

  push();

  texture(sunjpg);
  rotateY(frameCount / 27);
  sphere(80);
  pop();

  push();
  rotateY(mercurylong + frameCount / 87.97);
  translate(0, 0, -390);
  rotateY(frameCount / 58.6);
  texture(mercuryjpg);
  sphere(13)
  pop();

  push();
  rotateY(venuslong + frameCount / venusrev);
  translate(0, 0, -723);
  rotateY(frameCount / venusrot);
  texture(venusjpg);
  sphere(35);
  pop();
  
  //perseverance
  push();
  rotateY(earthlong); 
  rotateY(1.36*frameCount / 365.26); 
  translate(-100,0,-1000);
  texture(perseverance);
  rotateZ(180);
  plane(50, 30);
  pop();

  push();
  rotateY(earthlong);
  rotateY(frameCount / 365.26);
  translate(0, 0, -1000);
  rotateY(frameCount/earthrot);
  texture(earthjpg);
  sphere(40);
  //moon
  rotateY(frameCount / 11);
  translate(-58, 0, 0);
  rotate(frameCount/28);
  texture(moonjpg);
  sphere(10);
  
  pop();


  push();
  rotateY(marslong + frameCount / marsrev);
  translate(0, 0, -1524);
  rotateY(frameCount / 20.03);
  texture(marsjpg);
  sphere(30);
  translate(0,0,-100); //ajeitar dist e tamanho
  rotateY(frameCount/20);
  texture(deimosjpg);
  sphere(10);
  
  pop();
  
  //phobos
    push();
  rotateY(marslong + frameCount / marsrev);
  translate(0, 0, -1524);
  sphere(20); translate(0,0,100); //ajeitar dist e tamanho
  rotateY(frameCount/10);
  texture(phobosjpg);
  sphere(10);
  
  pop();


}
