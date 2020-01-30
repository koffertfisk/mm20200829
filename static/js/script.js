var images = [
  "http://i.imgur.com/8xmK4M5.jpg",
  "http://i.imgur.com/B2Rt0m0.jpg",
  "http://i.imgur.com/N02qI4M.jpg",
  "http://i.imgur.com/x9vbT9M.jpg",
  "http://i.imgur.com/cGphZsp.jpg",
  "http://i.imgur.com/zs7U4RB.jpg",
  "http://i.imgur.com/lYq2P4B.jpg",
  "http://i.imgur.com/VKsOjxp.jpg",
  "http://i.imgur.com/Mjz2glT.jpg",
  "http://i.imgur.com/LNNuTOP.jpg",
  "http://i.imgur.com/mOevzAK.jpg",
  "http://i.imgur.com/fpk0tkW.jpg",
  "http://i.imgur.com/HMzbFZk.jpg",
  "http://i.imgur.com/gbXi8v4.jpg",
  "http://i.imgur.com/k9qN05s.jpg",
  "http://i.imgur.com/cwHNJvO.jpg",
  "http://i.imgur.com/uyxBwgQ.jpg",
  "http://i.imgur.com/hLMSRhx.jpg",
  "http://i.imgur.com/ctabGcp.jpg",
  "http://i.imgur.com/L2qQD4d.jpg",
  "http://i.imgur.com/2B32a4q.jpg",
];
var $body = $("body"),
    $bg = $("#bg"),
    n = images.length,
    c = 0; // Loop Counter

// Preload Array of images...
for(var i=0; i<n; i++){
  var tImg = new Image();
  tImg.src = images[i];
}

$body.css({backgroundImage : "url("+images[c]+")"}); 

(function loopBg(){
  $bg.hide().css({backgroundImage : "url("+images[++c%n]+")"}).delay(3000).fadeTo(1200, 1, function(){
    $body.css({backgroundImage : "url("+images[c%n]+")"}); 
    loopBg();
  });
}());

(function() {

  var quotes = $(".quotes");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
      .fadeIn(2000)
      .delay(2000)
      .fadeOut(2000, showNextQuote);
  }

  showNextQuote();

})();