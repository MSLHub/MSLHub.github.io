// Change button state
$(".content-switch").click(function() {
  $(".content-switch").removeClass("active");
  $(this).addClass("active");
});
$(".content-switch:eq(0)").addClass('active')
// Change page content

// Define variables
var $categoryButton = $(".content-switch");
var $pageContent = $(".page-content");

$(".page-content")
  .hide()
  .first()
  .show();
// Turn user's choice into a filter
$categoryButton.on("click", function(e) {
  //       var $chosenButton = $(e.target);
  var $category = $(this).data("target");
  $pageContent
    .hide()
    .find('img').hide()
    .end()
    .filter("." + $category)
    .show()
    .find('img').fadeIn();
  //       $categoryButton.removeClass('selected');
  //       $chosenButton.addClass('selected')
});
