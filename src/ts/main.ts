//canvas.config
const canvas = <HTMLCanvasElement>document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.beginPath();

//load svg
const img0 = new Image();
const img1 = new Image();
const img2 = new Image();
img0.src = '../img/baloon-ellipse.png';
img1.src = '../img/baloon-heart.png';
img2.src = '../img/baloon-star.png';

class Baloon {
  private x: number;
  private y: number;
  private vy: number;
  private size: number;
  private shape: number;
  private bob: number[];//重り
  constructor() {
    this.size = Math.random() * 100 + 50;
    this.x = Math.random() * canvas.width - this.size / 2;
    this.y = canvas.height;
    this.vy = Math.random() * 7;
    this.shape = Math.floor(Math.random() * 3);
    this.bob = new Array();
    let i = Math.floor(Math.random()*7) - 3;
    for(;i> 0;i--){
      this.vy -= 0.5;
      this.pushBob();
    }
  }
  move() {
    this.y -= this.vy;
  }
  draw() {
    if (this.y < -200) return false;
    this.move();
    ctx.beginPath();
    if (this.shape == 0) {
      ctx.drawImage(img0, this.x, this.y, this.size, this.size);
    } else if (this.shape == 1) {
      ctx.drawImage(img1, this.x, this.y, this.size, this.size);
    } else {
      ctx.drawImage(img2, this.x, this.y, this.size, this.size);
    }
    ctx.fillStyle = '#fff';
    ctx.fillRect(this.x + this.size / 2 - 1, this.y + this.size / 2, 2, this.size * 1.5);
    let posX = this.x + this.size / 2 ;
    let posY = this.y + this.size * 2;
    let size = this.size / 10;
    ctx.fillStyle = '#abddba';
    for(let i = 0; i < this.bob.length;i++){
      switch(this.bob[i]){
        case 0:
          ctx.fillRect(posX - size / 2,posY-i*size,size,size);
          break;
        case 1:
          ctx.fillRect(posX - size / 4,posY-i*size,size / 2,size);
          break;
        case 2:
          ctx.arc(posX,posY-i*size+size/2,size/2,0,Math.PI*2,false);
          break;
        case 3:
          ctx.fillRect(posX - size / 2,posY-i*size,size,size);
          break;
      }
    }
    ctx.closePath();
    ctx.fill();
  }
  touch(ex: number, ey: number) {
    if (this.y < -200) return false;
    if (this.x < ex && ex < this.x + this.size && this.y < ey && ey < this.y + this.size) {
      //click method
      this.vy -= 1;
      this.pushBob();
    }
  }
  pushBob(){
    this.bob.push(Math.floor(Math.random() * 4));
  }
}

//make 10 baloons with open
let baloons = [];
for (let i = 0; i < 10; i++) {
  baloons.push(new Baloon());
}

//process when resize
window.onresize = function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
};

//onclick
canvas.addEventListener('click', function(e) {
  for (let i = 0; i < baloons.length; i++) {
    baloons[i].touch(e.clientX, e.clientY);
  }
});

//void draw(){}
function update() {
  ctx.fillStyle = '#E2E3E3';
  ctx.rect(0, 0, canvas.width, canvas.height);
  ctx.fill();
  for (let i = 0; i < baloons.length; i++) {
    baloons[i].move();
    baloons[i].draw();
  }
  if (Math.floor(Math.random() * 20) == 1) {
    baloons.push(new Baloon());
  }
  setTimeout(function() {
    update();
  }, 30);
}

update();
