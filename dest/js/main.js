function update(){ctx.fillStyle="#E2E3E3",ctx.rect(0,0,canvas.width,canvas.height),ctx.fill();for(var t=0;t<baloons.length;t++)baloons[t].move(),baloons[t].draw();1==Math.floor(20*Math.random())&&baloons.push(new Baloon),setTimeout(function(){update()},30)}function getScrolled(){return void 0!==window.pageYOffset?window.pageYOffset:document.documentElement.scrollTop}function scrollToTop(){var t=getScrolled();topButton.classList.add("top"),window.scrollTo(0,t-vy),t>300?(window.setTimeout(scrollToTop,30),vy*=1.1):(vy=30,window.scrollTo(0,0),setTimeout(function(){topButton.classList.remove("top")},2e3))}var canvas=document.getElementById("canvas");canvas.width=window.innerWidth,canvas.height=window.innerHeight;var ctx=canvas.getContext("2d");ctx.beginPath();var img0=new Image,img1=new Image,img2=new Image,path=document.getElementById("mainjs").getAttribute("path");img0.src="../img/baloon-ellipse.png",img1.src="../img/baloon-heart.png",img2.src="../img/baloon-star.png";for(var Baloon=function(){function t(){this.size=100*Math.random()+50,this.x=Math.random()*canvas.width-this.size/2,this.y=canvas.height,this.vy=7*Math.random(),this.shape=Math.floor(3*Math.random()),this.bob=new Array;for(var t=Math.floor(6*Math.random())-3;t>0;t--)this.vy-=.5,this.pushBob()}return t.prototype.move=function(){this.y-=this.vy},t.prototype.draw=function(){if(this.y<-200)return!1;this.move(),ctx.beginPath(),0==this.shape?ctx.drawImage(img0,this.x,this.y,this.size,this.size):1==this.shape?ctx.drawImage(img1,this.x,this.y,this.size,this.size):ctx.drawImage(img2,this.x,this.y,this.size,this.size),ctx.fillStyle="#fff",ctx.fillRect(this.x+this.size/2-1,this.y+this.size/2,2,1.5*this.size);var t=this.x+this.size/2,i=this.y+2*this.size,o=this.size/10;ctx.fillStyle="#abddba";for(var e=0;e<this.bob.length;e++)switch(this.bob[e]){case 0:ctx.fillRect(t-o/2,i-e*o,o,o);break;case 1:ctx.fillRect(t-o/4,i-e*o,o/2,o);break;case 2:ctx.arc(t,i-e*o+o/2,o/2,0,2*Math.PI,!1);break;case 3:ctx.fillRect(t-o/2,i-e*o,o,o)}ctx.closePath(),ctx.fill()},t.prototype.touch=function(t,i){if(this.y<-200)return!1;this.x<t&&t<this.x+this.size&&this.y<i&&i<this.y+this.size&&(this.vy-=1,this.pushBob())},t.prototype.pushBob=function(){this.bob.push(Math.floor(4*Math.random()))},t}(),baloons=[],i=0;i<10;i++)baloons.push(new Baloon);window.onresize=function(){canvas.width=window.innerWidth,canvas.height=window.innerHeight},canvas.addEventListener("click",function(t){for(var i=0;i<baloons.length;i++)baloons[i].touch(t.clientX,t.clientY)}),update();var bImage=document.getElementsByClassName("flex-pic-item");console.log(bImage[0].children[0]);for(var cl=function(t){console.log(t)},i=0;i<bImage.length;i++)bImage[i].children[0].setAttribute("onclick","cl(this.getAttribute('src'))");var playground=document.getElementById("playground");playground.onclick=function(){playground.classList.remove("playgrond-yetclick")};var topButton=document.getElementById("page-top");window.onscroll=function(){getScrolled()>500?topButton.classList.add("fade-in"):topButton.classList.remove("fade-in")};var vy=30;topButton.onclick=function(){scrollToTop()};