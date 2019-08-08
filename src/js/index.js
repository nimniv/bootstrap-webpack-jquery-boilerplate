import 'bootstrap';

import '../scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});
$(document).ready(function() {
  $("[data-toggle=offcanvas]").click(function() {
    $(".row-offcanvas").toggleClass("active");
  });
});
// Your jQuery code
