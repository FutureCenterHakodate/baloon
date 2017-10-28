const canvas = <HTMLCanvasElement>document.getElementById('canvas');
canvas.width = 800;
canvas.height = 600;
const ctx = canvas.getContext('2d');
ctx.beginPath();
ctx.fillStyle = "#E2E3E3";
ctx.rect(0,0,canvas.width,canvas.height);
ctx.fill();

class Baloon{
  private x: number;
  private y: number;
  private shape: string;
  
}
