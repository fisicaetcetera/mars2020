
//Aceleração temporal funcionando...
//Salvando no PC e publicando no Github
// Timex10000 will control motions 
// Incluindo Perseverance: primeiro, 
// seguindo a órbita da Terra
//acrescentei phobos e deimos rotação, tamanhoe posição errados corrigir

//Incluindo phobos e Deimos

// INCLUINDO DADOS DE LONGITUDE HELIOCENTRICA 
// Terra e Marte já estão ok
// Melhorei a assinatura em 200812
//Translação e rotação 
//de cada planeta/lua sincronizado com a rotação to sol de //27 dias.
//let cam;

let earthjpg;
let earthlat = 6.3; //2020-august 13
let earthlong = 321;
let earthrot = 0.99;
let earthrev = 365.26;
let moonjpg;
let marsjpg;
let mercuryjpg;
let mercuryrot = 58.6;
let mercuryrev = 87.97;
let marslong = 119;
let marsrev = 686.689;
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
let dia,mes,ano,hora,minutos,segundos;
let stamp200813;
let tinit;
let tnow;
let tthen;
let factorHora;
var loadImg;
var createImg;

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
  
  //angleMode(DEGREES);
  factorHora = 24*3600000/TWO_PI;//dia em milisegundos
  createCanvas(1366, 600, WEBGL);
  assinatura = createGraphics(380, 100);
  assinatura.background(0, 220);
  assinatura.fill(255);
  assinatura.textAlign(CENTER);
  assinatura.textSize(90);
  assinatura.text('Bonelli', 190, 85);
  createP('Cada milisegundo de tempo foi convertido para dez segundos.');
    h3 = createElement('h5', 'Tempo a partir do lançamento');

  stamp200813 =
    (new Date('2020-08-13T12:00:00Z')).getTime();
  tinit = millis();
  //console.log('stamp200813 =  ' + stamp200813 + '\n tinit = ' + tinit);

}

function draw() {
  perseAngle += 10;
  background(0);
  frameRate(10);

  timestamp = new Date().getTime();
  //let epoca = (timestamp - stamp200813) / 60000;
  //console.log('epoca = ' + epoca);
  //let numdias = epoca / 86400;
  //console.log('numdias = ' + numdias);
  tnow = millis() - tinit;
  tnowMult = tnow * 10000; //10 segundos em ms
  tthen = stamp200813 + tnowMult;
  //console.log(stamp200813, tthen, tnowMult);
  tsimulacao = new Date(tthen);
  ano = tsimulacao.getFullYear();
  mes = tsimulacao.getMonth() + 1;
  dia = tsimulacao.getDate();
  hora = tsimulacao.getHours();
  minutos = tsimulacao.getMinutes();
  segundos = tsimulacao.getSeconds();
  h3.html(dia + "/" + mes + "/" + ano + " " + hora + ":" + minutos + ":" + segundos);

  // var date = new Date;
  //date.setTime(result_from_Date_getTime);
  //var seconds = date.getSeconds();
  //var minutes = date.getMinutes();
  //var hour = date.getHours();

  //var year = date.getFullYear();
  //var month = date.getMonth(); // beware: January = 0; February = 1, etc.
  //var day = date.getDate();

  //var dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, etc.
  //var milliSeconds = date.getMilliseconds();

  translate(0, 0, -10 * mouseX);
  rotateY(mouseY/20);
  push();
  // translate(0, 0, -3000);
  // texture(starsjpg);
  // plane(9500);
  pop();

  push();
  texture(assinatura);
  translate(posx++, 50, 33*posz--);
  rotateY(frameCount / 95);
  rotateX(frameCount / 130);
  box(50);
  pop();
  //directionalLight(255, 255, 255, 1, 0, 0)
  //pointLight(255,255,0,0,0,200);

  push();

  texture(sunjpg);
  rotateY(tnowMult/(27*factorHora)); //periodo = 27 dias
  sphere(80);
  pop();

  push();
  //rotateY(mercurylong + frameCount / 87.97);
  rotateY(tnowMult/(87.97*factorHora));
  translate(0, 0, -390);
  //rotateY(frameCount / 58.6);
  rotateY(tnowMult/(58.6*factorHora));
  texture(mercuryjpg);
  sphere(13)
  pop();

  push();
  //rotateY(venuslong + frameCount / venusrev);
  rotateY(tnowMult/(venusrev*factorHora));
  translate(0, 0, -723);
  //rotateY(frameCount / venusrot);
  rotateY(tnowMult/(venusrot*factorHora));
  texture(venusjpg);
  sphere(35);
  pop();

  //perseverance
  push();
  rotateY(earthlong);
  rotateY(1.36 * tnowMult/(365.26*factorHora));
          
  translate(0, 0, -1100);
  texture(perseverance);
  rotateZ(180);
  plane(50, 30);
  pop();

  push();
  rotateY(earthlong);
  rotateY(tnowMult/(365.26*factorHora));
  translate(0, 0, -1000);
  rotateY(tnowMult / (earthrot*factorHora));
  texture(earthjpg);
  sphere(40);
  //moon
  rotateY(tnowMult/factorHora);
  translate(-58, 0, 0);
  rotateY(tnowMult/(28 * factorHora));
  texture(moonjpg);
  sphere(10);

  pop();


  push();
  //rotateY(marslong + frameCount / marsrev);
  rotateY(marslong + tnowMult/(marsrev*factorHora));
  translate(0, 0, -1524);
  //rotateY(frameCount / 20.03);
  rotateY(tnowMult/(20.03*factorHora));
  texture(marsjpg);
  sphere(30);
  translate(0, 0, -100); //ajeitar dist e tamanho
  //rotateY(frameCount / 20);
  rotateY(tnowMult/(20*factorHora));
  texture(deimosjpg);
  sphere(10);

  pop();

  //phobos
  push();
  //rotateY(marslong + frameCount / marsrev);
  rotateY(marslong + tnowMult/(marsrev*factorHora));
  translate(0, 0, -1524);
  sphere(20);
  translate(0, 0, 100); //ajeitar dist e tamanho
  //rotateY(frameCount / 10);
  rotateY(tnowMult/(10*factorHora));
  texture(phobosjpg);
  sphere(10);

  pop();


}
