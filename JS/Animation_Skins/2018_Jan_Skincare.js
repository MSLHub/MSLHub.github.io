
// GET HELP BUTTON

$( "#help-content" ).hide();

function myFunction() {
 $( "#help-content" ).show();
 $( "#gethelp" ).addClass("gethelpOpen");
 $( "#help-widget" ).addClass("help-widgetOpen");
}
$('.close-help-me').click(function(){
  $( "#gethelp" ).removeClass("gethelpOpen");
  $( "#help-content" ).hide();
  $( "#help-widget" ).removeClass("help-widgetOpen");
});
