var images = [
  {src: "static/images/1.jpg"},
  {src: "static/images/3.jpg"},
  {src: "static/images/11.jpg"},
  {src: "static/images/13.jpg", align: 'right', valign: 'top'},
  {src: "static/images/2.jpg"},
];

$("#bg, body").vegas({
  delay: 4000,
  timer: false,
  preload: true,
  firstTransitionDuration: 'auto',
  align: 'center',
  slidesToKeep: 3,
  slides: images
});

(function() {

  /*var quotes = $(".quotes");
  var quoteIndex = -1;

  function showNextQuote() {
    ++quoteIndex;
    quotes.eq(quoteIndex % quotes.length)
      .fadeIn(2000)
      .delay(2000)
      .fadeOut(2000, showNextQuote);
  }*/

  /*showNextQuote();*/

  var quotes = $(".quotes");
  quotes.fadeIn(2000);

})();