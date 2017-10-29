//スクロール量を取得する関数
function getScrolled() {
 return ( window.pageYOffset !== undefined ) ? window.pageYOffset: document.documentElement.scrollTop;
}

//トップに戻るボタンの要素を取得
var topButton = document.getElementById( 'page-top' );

//ボタンの表示・非表示
window.onscroll = function() {
  ( getScrolled() > 500 ) ? topButton.classList.add( 'fade-in' ): topButton.classList.remove( 'fade-in' );
};

let vy = 30;

//トップに移動する関数
function scrollToTop() {
  var scrolled = getScrolled();
  topButton.classList.add('top');
  window.scrollTo( 0, scrolled - vy);
  if(scrolled > 300){
    window.setTimeout(scrollToTop, 30);
    vy *= 1.1;
  }else{
    vy =30;
    window.scrollTo( 0, 0);
    setTimeout(function(){
      topButton.classList.remove( 'top' );
    }, 2000);
  }
};

//イベント登録
topButton.onclick = function() {
  scrollToTop();
};
