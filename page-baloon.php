<?php
/*
Template Name: for baloon
*/
?>
<!DOCTYPE html>
<html lang="ja">
  <head>
    <link rel="stylesheet" type="text/css" href=<?php echo get_stylesheet_directory_uri(); ?>/baloon-css/style.css>
    <link href="https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="robots" content="noindex">
    <title><?php wp_title("はこだてみらい館 |",true);?></title>
  </head>
  <body>
    <canvas id="canvas">このページはCanvasを使用しています。</canvas>
    <div id="topview">
      <div class="cartoon">
      <img class="item" src=<?php echo get_template_directory_uri(); ?>/baloon-img/baloon01.jpg>
      <img class="item" src=<?php echo get_template_directory_uri(); ?>/baloon-img/baloon02.jpg>
      <img class="item" src=<?php echo get_template_directory_uri(); ?>/baloon-img/baloon03.jpg>
      <img class="item" src=<?php echo get_template_directory_uri(); ?>/baloon-img/baloon04.jpg></div>
      <h1>ふうせんの森</h1>
      <p class="subTitle">
        ちょうどよく、うかぶ。<br>きもちよく、うかぶ。</p>
      <div class="poster">
        <p class="date">11月3日(木)〜12月10日(日)</p>
        <p class="place">はこだてみらい館</p>
      </div>
    </div>
    <div class="background background-white">
      <div class="container">
        <h2>ふうせんの森<h3>
        <h3>～ちょうどよく、うかぶ。　きもちよく、うかぶ。～</h3>
        <p>はこだてみらい館にふうせんの森ができました。</p>ふうせんの森には様々な大きさの風船が 150 コ浮かんでいます。
        みどりいろの素材で作ったものを風船で浮かべてみましょう。<br><br>
        <h3>企画・監修：山添joseph勇(美術家/深沢アート研究所)</h3>現代の子供の「つくる」を研究し、子供造形教室や子供造形ワークショップの実施、子供造形プログラム制作などを主な活動とする美術家。<br><br>
        <h4>深沢アート研究所：</h4>
        <p> <a href="http://www.hukalabo.com/">&lt;http://www.hukalabo.com/ &gt;</a></p>
        <p>2017年に山添joseph勇とカブ(美術家/緑化研究者)により、美術館やアートイベントなどで現代アートを基軸とした活動をするアートユニット。</p>
      </div>
      <div class="container">
        <p></p>
      </div>
    </div>
    <div class="playground playgrond-yetclick" id="playground">
      <div class="container"></div>
      <div class="message">
        <p>ふうせんにおもりをのせてみよう！</p>
      </div>
    </div>
    <div class="background background-white">
      <div class="container">
        <h2>ちょうどよく浮かんだ風船たち</h2>
        <p>ここには、みんながつくった「ちょうどいい」が集められます</p>
        <div class="pic-container">
          <div class="flex-pic-item"><img src=<?php echo get_template_directory_uri(); ?>/baloon-img/activity/001.jpg></div>
          <div class="flex-pic-item"><img src=<?php echo get_template_directory_uri(); ?>/baloon-img/activity/002.jpg></div>
          <div class="flex-pic-item"><img src=<?php echo get_template_directory_uri(); ?>/baloon-img/activity/003.jpg></div>
        </div>
      </div>
    </div>
    <div class="background background-gray">
      <div class="container">
        <h2>アクセス・お問い合わせ</h2>
        <iframe src="https://www.google.com/maps/d/embed?mid=1mUylVVj0RMzRIvoalkNCDq93P-M" width="100%" height="400"></iframe>
        <div class="info-item">
          <h4>会場</h4>
          <p>はこだてみらい館 <br> 〒040-0063 北海道函館市若松町20番1号 キラリス函館3F</p>
        </div>
        <div class="info-item">
          <h4>開館時間</h4>
          <p>10:00~20:00(入場は19:30まで)</p>
        </div>
        <div class="info-item">
          <h4>休館日 </h4>
          <p>年末年始(12/31,1/1) , 館内整理日(毎月第２水曜日)</p>
        </div>
        <div class="info-item">
          <h4>施設入館料</h4>
          <p>大人600円, 小中高生 300円, 未就学児無料 <br> ※施設入館料についての詳細は<a href="http://hakodate-miraiproject.jp/FCH/#info_headTitle">こちら(新しいタブで開きます)</a></p>
        </div>
        <p><br><br>〒040-0063 北海道函館市若松町20番1号 キラリス函館3F</p>TEL 0138-26-6000
        はこだてみらい館公式ホームページにて、情報をご確認ください。<br><a href="http://hakodate-miraiproject.jp/FCH/" target="_brank">http://hakodate-miraiproject.jp/</a>
      </div>
    </div>
    <footer class="background">
      <div class="container">
        <p>&copy;はこだてみらい館 </p>
        <p>&copy;深沢アート研究所</p>
      </div>
    </footer>
    <div class="page-top" id="page-top"><img src=<?php echo get_template_directory_uri(); ?>/baloon-img/backToTop.svg>
    <div id="modal"><img src=""></div>
    <script>(function() {'use strict';})();</script>
    <script  id="mainjs" src=<?php echo get_template_directory_uri(); ?>/baloon-js/main.js path = "<?php echo get_template_directory_uri();?>" ></script>
  </body>
  <?php
  $filename =  "baloon-counter.dat";// counter.datというカウント数を書き込むテキストファイル
  ?>
<?php
  $fp = fopen($filename, "r+"); // counter.datファイルを fopenで開く
 ?>

<?php
  $count = fgets($fp,32); // fgets関数でcounter.datに書かれたカウント数を読み込む
?>
<?php
  $count++; // counter.datに書かれたカウント数を加算
 ?>
<?php
  fseek($fp, 0); // fseek関数でcounter.datの読み書きを行う場所を先頭に戻す
 ?>
<?php
  fputs($fp, $count); // fputs関数でカウントされた数をファイルに書き込む
 ?>
<?php
  flock($fp, LOCK_UN); // flock関数でファイルを上書きされないようにロックする
 ?>
<?php
  fclose($fp); // fclose関数でファイルを閉じる
 ?>
<?php
  echo "<!--accessed ";
  echo $count;
  echo " -->";// カウントされた数字を表示
 ?>
</html>
