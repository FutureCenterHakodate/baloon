let bImage = document.getElementsByClassName('flex-pic-item');

console.log(bImage[0].children[0]);

var cl = function(data){
  console.log(data);
};

for(let i = 0;i < bImage.length;i++){
  bImage[i].children[0].setAttribute('onclick',"cl(this.getAttribute('src'))");
}
