$(document).ready(function () {
  $(".design").click(function (event) {
    $("#description-design").toggle();
  });
  $(".dev").click(function (event) {
    $("#description-dev").toggle();
  });
  $(".product").click(function (event) {
    $("#description-product").toggle();
  });
});

$(document).ready(function () {
  $(".porti").hover(function (over) {
    $(".whiteBox").toggle();
  });
});
