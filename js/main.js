$(document).ready(function() {
  $("#info_trigger").click(function(event) {
    event.preventDefault();
    $('.box-container').slideToggle();
  });

  $(".item__trigger").click(function(event) {
    event.preventDefault();

    var $el = $(this).parent().next('.item__info');
    $el.slideToggle();
  });
});

