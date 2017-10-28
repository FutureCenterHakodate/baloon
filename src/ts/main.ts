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
img0.src = '../img/shapeBaloon-ellipse.svg';
img1.src = '../img/shapeBaloon-hurt.svg';
img2.src = '../img/shapeBaloon-star.svg';

class Baloon {
  private x: number;
  private y: number;
  private vy: number;
  private size: number;
  private shape: number;
  constructor() {
    this.size = Math.random() * 100 + 50;
    this.x = Math.random() * canvas.width - this.size / 2;
    this.y = canvas.height;
    this.vy = Math.random() * 7;
    this.shape = Math.floor(Math.random() * 3);
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
    ctx.closePath();
    ctx.fill();
  }
  touch(ex: number, ey: number) {
    console.log(ex);
    console.log(ey);
    console.log(this.x);
    console.log(this.u);
    console.log(this.size);
    if (this.y < -200) return false;
    if (this.x < ex && ex < this.x + this.size && this.y < ey && ey < this.y + this.size) {
      this.vy -= 1;
    }
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
