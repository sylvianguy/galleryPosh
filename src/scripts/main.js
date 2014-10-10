$(function() {
  $('#enter-page').on('click', function() {
    $('.splash').addClass('slide-up');
  });
  var galItems = $('.gallery').find('a');
  galItems.fancybox({
    closeBtn: true,
    helpers : {
      overlay : {
          css : { 'background-color' : 'rgba(0,0,0,0.7)' }
      },
    }
});
  galItems.hover(function() {
    $('.gallery').addClass('dimmed');
  }, function() {
    $('.gallery').removeClass('dimmed');
  });

});
