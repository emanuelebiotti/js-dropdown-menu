// $('.menu-item').click(function() {
//   $(this).children('.dropdown-menu').removeClass('active');
// });


$('.menu-item').mouseenter(function() {
  $(this).children('.dropdown-menu').removeClass('active');
});

$('.menu-item').mouseleave(function() {
  $(this).children('.dropdown-menu').addClass('active');
});
