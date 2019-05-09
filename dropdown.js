// $('.menu-item').click(function() {
//   $(this).children('.dropdown-menu').removeClass('active');
// });

// CONSIDERAZIONI:
// Dovrei usare "toggle()" anziché "removeClass('active')", per fare sì che cliccando
// una seconda volta il menu appena comparso possa poi scomparire.
// Tuttavia usando "toggle" il menu, pur funzionando (appare e scompare), perde la formattazione che gli ho dato.


// al momento uso toggle().

$('.menu-item').click(function() {
  $(this).children('.dropdown-menu').toggle();
});
