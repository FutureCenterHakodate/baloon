const canvas = <HTMLCanvasElement>document.getElementById('canvas');
// canvas.width = 800;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.fillStyle = '#E2E3E3';
ctx.rect(0,0,canvas.width,canvas.height);
ctx.fill();

const img0 = new Image();
const img1 = new Image();
const img2 = new Image();
img0.src='../img/shapeBaloon-ellipse.svg';
img1.src='../img/shapeBaloon-hurt.svg';
img2.src='../img/shapeBaloon-star.svg';

class Baloon{
  private x: number;
  private y: number;
  private vy: number;
  private shape: number;
  constructor(){
    this.x = Math.random() * canvas.width;
    this.y = canvas.height;
    this.vy = Math.random()*10;
    this.shape = Math.floor(Math.random()*3);
  }
  move(){
    this.y -= this.vy;
  }
  draw(){
    ctx.beginPath();
    ctx.drawImage(img1,this.x,this.y,50,50);
    // ctx.arc(this.x,this.y,50,0,Math.PI*2);
    ctx.fillStyle = '#fff';
    // ctx.fillRect(this.x-1,this.y,2,20);
    ctx.closePath();
    ctx.fill();
  }
}

let baloon = new Baloon();
baloon.draw();

window.onresize = function(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

function update() {
  ctx.fillStyle = '#E2E3E3';
  ctx.rect(0,0,canvas.width,canvas.height);
  ctx.fill();
  baloon.move();
  baloon.draw();
  setTimeout(function(){
    update();
  },30);
}

update();
