<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta content="buy arkmane cum" property="og:title">
<meta name="theme-color" content="#81b7e3">
<meta content="i want to put it in you soft so you can feel it grow <3" property="og:description">
<meta content="/nigger.jpeg" property="og:image">
<link rel="icon" href="nigger.jpeg" type="image/x-icon">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css?family=Montserrat:100,200,300,400,500,600,700,800,900" rel="stylesheet">
<title>Arkmane - Home</title>
<link href="thing.css" rel="stylesheet">
<link rel="stylesheet" href="thing2.css">
<link rel="stylesheet" href="thing3.css">
<link rel="stylesheet" href="thing4.css">
<link rel="stylesheet" href="thing5.css">
</head>
<body>
<header class="main-header clearfix" role="header">
<div class="logo">
<a href="#"><bm>Arkmane</bm></a>
</div>
<a href="#menu" class="menu-link"></a>
<nav id="menu" class="main-nav" role="navigation">
<ul class="main-menu">
<li><a href="#section1">Home</a></li>
<li class=""><a href="#section6">Script</a>
<ul class="sub-menu">
<li><a href="https://google.com" rel="sponsored" class="external">Full Script</a></li>
<li><a href="https://google.com" rel="sponsored" class="external">Loadstring</a></li>
<li><a href="https://google.com" rel="sponsored" class="external">Optimized</a></li>
</ul>
</li>
</ul>
</nav>
</header>
<section class="section main-banner" id="top" data-section="section1">
<video autoplay muted loop id="bg-video">
<source src="monki.mp4" type="video/mp4"/>
</video>
<div class="video-overlay header-text">
<div class="caption">
<h6>fuck catgirl movement 2021</h6>
<h2><bm>Arkmane</bm></h2>
<div class="main-button">
<div><a href="https://google.com">Get Script</a></div>
</div>
</div>
</div>
</section>
<section class="section why-us" data-section="section2">
<div class="container">
<div class="row">
<div class="col-md-12">
<div class="section-heading">
<h2>Arkmane#0935 (I don't use this lol)</h2>
</div>
</div>
<div class="col-md-12">
<div id='tabs'>
<ul>
</ul>
<section class='tabs-content'>
<article id='tabs-1'>
<div class="row">
<div class="col-md-6">
<img src="nigger.jpeg" alt="">
</div>
<div class="col-md-6">
<h4>fuck storb movement 2021</h4>
<p>local a = "d"<br>
  local b = "o"<br>
  local c = "x"<br>
  storb (a..b..c) coming soon.
</p>
</div>
</div>  
</div>
</section>
</section>
<footer>
<div class="container">
<div class="row">
<div class="col-md-12">
<p>bomb niggers llc.
</div>
</div>
</div>
</footer>
<script src="wow.js"></script>
<script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="wow1.js"></script>
<script src="wow2.js"></script>
<script src="wow3.js"></script>
<script src="wow4.js"></script>
<script src="wow5.js"></script>
<script src="wow6.js"></script>
<script>
        //according to loftblog tut
        $('.nav li:first').addClass('active');

        var showSection = function showSection(section, isAnimate) {
          var
          direction = section.replace(/#/, ''),
          reqSection = $('.section').filter('[data-section="' + direction + '"]'),
          reqSectionPos = reqSection.offset().top - 0;

          if (isAnimate) {
            $('body, html').animate({
              scrollTop: reqSectionPos },
            800);
          } else {
            $('body, html').scrollTop(reqSectionPos);
          }

        };

        var checkSection = function checkSection() {
          $('.section').each(function () {
            var
            $this = $(this),
            topEdge = $this.offset().top - 80,
            bottomEdge = topEdge + $this.height(),
            wScroll = $(window).scrollTop();
            if (topEdge < wScroll && bottomEdge > wScroll) {
              var
              currentId = $this.data('section'),
              reqLink = $('a').filter('[href*=\\#' + currentId + ']');
              reqLink.closest('li').addClass('active').
              siblings().removeClass('active');
            }
          });
        };

        $('.main-menu, .scroll-to-section').on('click', 'a', function (e) {
          if($(e.target).hasClass('external')) {
            return;
          }
          e.preventDefault();
          $('#menu').removeClass('active');
          showSection($(this).attr('href'), true);
        });

        $(window).scroll(function () {
          checkSection();
        });
    </script>
</body>
</html>
