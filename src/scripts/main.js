$(function() {
  var arrow = '<svg class="arrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" baseProfile="tiny" x="0px" y="0px" width="100px" height="100px" viewBox="0 0 100 100" xml:space="preserve"><g id="Captions"></g><g id="Your_Icon"><polygon fill-rule="evenodd" points="73,84.641 37.781,50 73,15.359 67.559,10 27,50.02 67.559,90  "/></g></svg>';

  var $splash = $('.splash');
  var galItems = $('.gallery').find('a');
  $('html, body').css({
    'overflow': 'hidden',
    'height': '100%'
    });
  $('#enter-page').on('click', function() {
    $splash.addClass('slide-up');
    $('html, body').css({
        'overflow': 'auto',
        'height': 'auto'
    });
  });





  galItems.fancybox({
    tpl: {
      closeBtn: '<div id="close-button">&times;</div>',
      next: '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;">' + arrow + '</span></a>',
      prev: '<a title="Prev" class="fancybox-nav fancybox-prev" href="javascript:;">' + arrow + '</span></a>'
     },
    closeBtn: true,
    helpers : {
      overlay : {
          css : { 'background-color' : 'rgba(0,0,0,0.7)' }
      },
    }
  });
  var gallery = $('.gallery');
  galItems.hover(function() {
    gallery.addClass('dimmed');
  }, function() {
    gallery.removeClass('dimmed');
  });

});
