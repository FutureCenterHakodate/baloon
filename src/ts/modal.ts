let bImage = document.getElementsByClassName('flex-pic-item');

// console.log(bImage[0].children[0]);

for(let i = 0;i < bImage.length;i++){
  bImage[i].children[0].setAttribute('onclick',"cl(this.getAttribute('src'))");
}

var cl = function(data){
  modalToggle();
  modal.children[1].setAttribute('src',data)
};

//以下、モーダルウィンドウ内の制御

let modal = document.getElementById('modal');

modal.onclick = function(){
  modalToggle();
}

const modalToggle = function toggleStyle() {
    modal.classList.toggle('modal-hide');
    modal.classList.toggle('modal-display');
}
