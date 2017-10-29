<?php
/*
Template Name: 固定ページの新規テンプレート１
*/
?>
<!DOCTYPE html>
<html lang="ja">
  <head>
    <link rel="stylesheet" type="text/css" href=<?php echo get_template_directory_uri(); ?>/dest/css/style.css>
    <link href="https://fonts.googleapis.com/earlyaccess/roundedmplus1c.css" rel="stylesheet">
  </head>
  <body>
    <canvas id="canvas">このページはCanvasを使用しています。</canvas>
    <div id="topview">
      <div class="cartoon"><img class="item" src=<?php echo get_template_directory_uri(); ?>/dest/img/baloon01.jpg><img class="item" src=<?php echo get_template_directory_uri(); ?>/dest/img/baloon02.jpg><img class="item" src=<?php echo get_template_directory_uri(); ?>/dest/img/baloon03.jpg><img class="item" src=<?php echo get_template_directory_uri(); ?>/dest/img/baloon04.jpg></div>
      <h1>ふうせんの森</h1>
      <p class="subTitle">
        ちょうどよく、うかぶ。<br>きもちよく、うかぶ。</p>
      <div class="poster">
        <p class="date">11月3日〜12月10日</p>
        <p class="place">はこだてみらい館</p>
      </div>
    </div>
    <script>(function() {'use strict';})();</script>
    <script src=<?php echo get_template_directory_uri(); ?>/dest/js/main.js></script>
  </body>
</html>