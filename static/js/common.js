$(".navbar-toggler").on('click', function(e) {
    setTimeout(
      function() {
        if ($(".navbar-toggler").hasClass("collapsed")) {
          $('footer').fadeIn();
        } else {
          $('footer').fadeOut();
        }
      },
      100);
  });