
// GET HELP BUTTON - BLACK THEME

$( "#help-content_BLACK" ).hide();

function myFunction() {
 $( "#help-content_BLACK" ).show();
 $( "#gethelp_BLACK" ).addClass("gethelpOpen_BLACK");
 $( "#help-widget_BLACK" ).addClass("help-widgetOpen_BLACK");
}
$('.close-help-me_BLACK').click(function(){
  $( "#gethelp_BLACK" ).removeClass("gethelpOpen_BLACK");
  $( "#help-content_BLACK" ).hide();
  $( "#help-widget_BLACK" ).removeClass("help-widgetOpen_BLACK");
});
